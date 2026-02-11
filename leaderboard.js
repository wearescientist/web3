/**
 * 排行榜系统 - Firebase Firestore
 * 已配置：web3life-ca1f7
 */

// Firebase 配置（用户提供）
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAkfEAxpz3U8mawHjOMJZf6dWRX5-Ep6YE",
  authDomain: "web3life-ca1f7.firebaseapp.com",
  projectId: "web3life-ca1f7",
  storageBucket: "web3life-ca1f7.firebasestorage.app",
  messagingSenderId: "920743322935",
  appId: "1:920743322935:web:150071b483bcc942ce26b2",
  measurementId: "G-CR3S1X2QJK"
};

let leaderboardEnabled = false;
let db = null;
let leaderboardCache = { wealth: [], bankrupt: [], hardcore: [], lastUpdate: 0 };

// 硬核模式7日榜（本地存储）
const HARDCORE_LB_KEY = 'lb_hardcore_7d';
const HARDCORE_LB_MAX_AGE = 7 * 24 * 60 * 60 * 1000; // 7天毫秒数

/** 初始化排行榜 */
async function initLeaderboard() {
  try {
    // 动态加载 Firebase SDK
    if (!window.firebase) {
      await loadFirebaseSDK();
    }
    
    firebase.initializeApp(FIREBASE_CONFIG);
    db = firebase.firestore();
    leaderboardEnabled = true;
    console.log('✅ Firebase 排行榜已连接');
    
    // 先加载本地缓存（包括硬核榜）
    loadLocalCache();
    
    // 渲染本地缓存的榜单（包括硬核榜）
    renderLeaderboards();
    
    // 实时监听榜单
    startRealtimeListeners();
    
    // 显示连接状态
    showLeaderboardStatus('🟢 在线榜');
  } catch (e) {
    console.error('Firebase 连接失败:', e);
    // 降级到本地模式
    loadLocalCache();
    renderLeaderboards();
    showLeaderboardStatus('🟡 本地榜');
  }
}

/** 显示连接状态 */
function showLeaderboardStatus(status) {
  const el = document.getElementById('leaderboardStatus');
  if (el) el.textContent = status;
}

/** 加载 Firebase SDK */
function loadFirebaseSDK() {
  return new Promise((resolve, reject) => {
    if (window.firebase) { resolve(); return; }
    
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js';
    script.onload = () => {
      const script2 = document.createElement('script');
      script2.src = 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore-compat.js';
      script2.onload = resolve;
      script2.onerror = reject;
      document.head.appendChild(script2);
    };
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

/** 加载本地缓存 */
function loadLocalCache() {
  try {
    const saved = localStorage.getItem('lb_cache_v2');
    if (saved) {
      const parsed = JSON.parse(saved);
      leaderboardCache = { ...leaderboardCache, ...parsed };
      // 确保 hardcore 数组存在
      if (!leaderboardCache.hardcore) leaderboardCache.hardcore = [];
    }
    // 加载硬核榜
    loadHardcoreLeaderboard();
  } catch(e){}
}

/** 保存本地缓存 */
function saveLocalCache() {
  try {
    localStorage.setItem('lb_cache_v2', JSON.stringify(leaderboardCache));
  } catch(e){}
}

/** 加载硬核模式7日榜 */
function loadHardcoreLeaderboard() {
  try {
    const saved = localStorage.getItem(HARDCORE_LB_KEY);
    if (saved) {
      const data = JSON.parse(saved);
      const now = Date.now();
      // 过滤7天内的记录
      leaderboardCache.hardcore = (data.entries || []).filter(e => 
        (now - e.timestamp) < HARDCORE_LB_MAX_AGE
      ).sort((a, b) => b.wealth - a.wealth).slice(0, 10);
    }
  } catch(e) {
    leaderboardCache.hardcore = [];
  }
}

/** 保存硬核模式7日榜 */
function saveHardcoreLeaderboard() {
  try {
    const data = {
      entries: leaderboardCache.hardcore,
      lastUpdate: Date.now()
    };
    localStorage.setItem(HARDCORE_LB_KEY, JSON.stringify(data));
  } catch(e) {}
}

/** 上报硬核模式成绩 */
async function submitHardcoreResult(playerData) {
  const netWealth = (playerData.wealth || 0) - (playerData.debt || 0);
  const rawId = playerData.playerId || '';
  const name = rawId.slice(0, 12) || '匿名';
  const correctRate = playerData.hcCorrectRate || 0;
  const totalDecisions = playerData.hcTotalDecisions || 0;
  
  const entry = {
    name: name,
    wealth: Math.floor(netWealth),
    correctRate: Math.round(correctRate * 100),
    totalDecisions: totalDecisions,
    timestamp: Date.now()
  };
  
  // 1. 保存到本地（作为备份）
  leaderboardCache.hardcore.push(entry);
  
  // 去重：同一玩家只保留最高分
  const seen = new Map();
  for (const item of leaderboardCache.hardcore) {
    if (!seen.has(item.name) || seen.get(item.name).wealth < item.wealth) {
      seen.set(item.name, item);
    }
  }
  
  leaderboardCache.hardcore = Array.from(seen.values())
    .sort((a, b) => b.wealth - a.wealth)
    .slice(0, 10);
  
  saveHardcoreLeaderboard();
  renderHardcoreLeaderboard(leaderboardCache.hardcore);
  
  // 2. 提交到 Firebase 云端
  if (db && leaderboardEnabled) {
    try {
      await submitHardcoreToFirebase(entry);
    } catch (e) {
      console.warn('Firebase 提交失败，已保存本地:', e);
    }
  }
  
  console.log('🏆 硬核成绩已上报:', name, formatU(netWealth), `正确率${entry.correctRate}%`);
}

/** 提交硬核成绩到 Firebase */
async function submitHardcoreToFirebase(entry) {
  // 检查是否已有该玩家的记录
  const existing = await db.collection('hardcore_leaderboard')
    .where('name', '==', entry.name)
    .get();
  
  if (!existing.empty) {
    // 更新：只保留更高分
    const doc = existing.docs[0];
    const currentData = doc.data();
    if (entry.wealth > currentData.wealth) {
      await doc.ref.update(entry);
      console.log('📝 云端记录已更新:', entry.name);
    }
  } else {
    // 新增记录
    await db.collection('hardcore_leaderboard').add(entry);
    console.log('➕ 云端记录已添加:', entry.name);
  }
}

/** 渲染硬核模式排行榜 */
function renderHardcoreLeaderboard(list) {
  const els = [
    document.getElementById('hardcoreLeaderboard'),
    document.getElementById('hardcoreLeaderboardMobile')
  ].filter(Boolean);
  
  if (els.length === 0) return;
  
  if (!list?.length) {
    els.forEach(el => {
      el.innerHTML = '<div class="lb-empty">暂无硬核记录<br>来成为第一个硬核传奇！</div>';
    });
    return;
  }
  
  const medals = ['🥇','🥈','🥉'];
  const html = list.map((item, i) => `
    <div class="lb-item ${i<3?'lb-top':''}" style="${i<3?'background:rgba(240,185,11,0.1);':''}">
      <span class="lb-rank">${medals[i]||i+1}</span>
      <span class="lb-name">${escapeHtml(item.name)}</span>
      <span class="lb-score">${formatU(item.wealth)}</span>
      <span class="lb-status" style="font-size:10px;color:#888;margin-left:4px;">${item.correctRate}%</span>
    </div>
  `).join('');
  
  els.forEach(el => el.innerHTML = html);
}

/** 实时监听榜单 */
function startRealtimeListeners() {
  if (!db) return;
  
  // 财富榜前十
  db.collection('wealthLeaderboard')
    .orderBy('wealth', 'desc')
    .limit(10)
    .onSnapshot(snapshot => {
      leaderboardCache.wealth = snapshot.docs.map(doc => doc.data());
      renderWealthLeaderboard(leaderboardCache.wealth);
      saveLocalCache();
    }, err => console.log('财富榜监听失败:', err));
  
  // 破产榜前十 - 按负债金额降序
  db.collection('bankruptLeaderboard')
    .orderBy('debt', 'desc')
    .limit(10)
    .onSnapshot(snapshot => {
      leaderboardCache.bankrupt = snapshot.docs.map(doc => doc.data());
      renderBankruptLeaderboard(leaderboardCache.bankrupt);
      saveLocalCache();
    }, err => console.log('破产榜监听失败:', err));
  
  // 硬核榜 - 7天内数据（云端实时监听）
  startHardcoreRealtimeListener();
}

/** 硬核榜实时监听（7天过滤） */
function startHardcoreRealtimeListener() {
  if (!db) return;
  
  const sevenDaysAgo = Date.now() - HARDCORE_LB_MAX_AGE;
  
  // 查询7天内的记录，按财富降序
  db.collection('hardcore_leaderboard')
    .where('timestamp', '>=', sevenDaysAgo)
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      // 获取所有7天内的记录
      const allEntries = snapshot.docs.map(doc => doc.data());
      
      // 去重：同玩家只保留最高分
      const seen = new Map();
      for (const item of allEntries) {
        if (!seen.has(item.name) || seen.get(item.name).wealth < item.wealth) {
          seen.set(item.name, item);
        }
      }
      
      // 排序并取前10
      leaderboardCache.hardcore = Array.from(seen.values())
        .sort((a, b) => b.wealth - a.wealth)
        .slice(0, 10);
      
      renderHardcoreLeaderboard(leaderboardCache.hardcore);
      saveLocalCache();
      
      console.log('📊 硬核榜已更新（云端）:', leaderboardCache.hardcore.length, '条记录');
    }, err => {
      console.log('硬核榜监听失败，使用本地数据:', err);
      // 失败时使用本地数据
      loadHardcoreLeaderboard();
      renderHardcoreLeaderboard(leaderboardCache.hardcore);
    });
}

/** 生成安全的 Firestore 文档 ID */
function sanitizeDocId(id) {
  if (!id) return 'anonymous';
  // Firestore 文档ID规则：必须是UTF-8字符，长度1-1500字节，不能包含 /\.*`[]#
  // 我们将这些特殊字符替换为下划线
  return id.replace(/[\/\\.*`[\]#]/g, '_').slice(0, 100);
}

/** 上报本局成绩 */
async function submitGameResult(playerData) {
  const netWealth = (playerData.wealth || 0) - (playerData.debt || 0);
  // 优先使用钱包地址（如果是0x开头且42位）
  const rawId = playerData.playerId || '';
  const isWallet = rawId.startsWith('0x') && rawId.length === 42;
  const name = isWallet ? formatWallet(rawId) : (rawId.slice(0, 12) || '匿名');
  // 修复：使用原始ID生成playerKey，而不是处理后的name
  const playerKey = isWallet ? rawId.toLowerCase() : sanitizeDocId(rawId || 'anonymous');
  
  if (netWealth > 0) {
    // 财富榜 - 同玩家只保留最高成绩
    const docRef = db.collection('wealthLeaderboard').doc(playerKey);
    const doc = await docRef.get();
    if (!doc.exists || doc.data().wealth < netWealth) {
      await docRef.set({
        name: name,
        wealth: Math.floor(netWealth),
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
    }
  } else {
    // 破产榜 - 同玩家保留负债最多的记录
    const bankruptRef = db.collection('bankruptLeaderboard').doc(playerKey);
    const bankruptDoc = await bankruptRef.get();
    const currentDebt = Math.floor(playerData.debt || 0);
    if (!bankruptDoc.exists || (bankruptDoc.data().debt || 0) < currentDebt) {
      await bankruptRef.set({
        name: name,
        wealth: Math.floor(netWealth),
        debt: currentDebt,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
    }
  }
  
  console.log('📊 成绩已上报:', name, formatU(netWealth));
}

/** 渲染 */
function renderLeaderboards() {
  renderHardcoreLeaderboard(leaderboardCache.hardcore);
  renderWealthLeaderboard(leaderboardCache.wealth);
  renderBankruptLeaderboard(leaderboardCache.bankrupt);
}

function renderWealthLeaderboard(list) {
  const els = [
    document.getElementById('wealthLeaderboard'),
    document.getElementById('wealthLeaderboardMobile')
  ].filter(Boolean);
  
  if (els.length === 0) return;
  
  if (!list?.length) {
    els.forEach(el => {
      el.innerHTML = '<div class="lb-empty">暂无数据<br>来成为第一个传奇！</div>';
    });
    return;
  }
  
  // 去重：同一玩家名称只保留最高分
  const seen = new Map();
  for (const item of list) {
    const name = item.name || '匿名';
    if (!seen.has(name) || seen.get(name).wealth < item.wealth) {
      seen.set(name, item);
    }
  }
  const uniqueList = Array.from(seen.values()).sort((a, b) => b.wealth - a.wealth);
  
  const medals = ['🥇','🥈','🥉'];
  const html = uniqueList.map((item, i) => `
    <div class="lb-item ${i<3?'lb-top':''}">
      <span class="lb-rank">${medals[i]||i+1}</span>
      <span class="lb-name">${escapeHtml(item.name)}</span>
      <span class="lb-score">${formatU(item.wealth)}</span>
    </div>
  `).join('');
  
  els.forEach(el => el.innerHTML = html);
}

function renderBankruptLeaderboard(list) {
  const els = [
    document.getElementById('bankruptLeaderboard'),
    document.getElementById('bankruptLeaderboardMobile')
  ].filter(Boolean);
  
  if (els.length === 0) return;
  
  if (!list?.length) {
    els.forEach(el => {
      el.innerHTML = '<div class="lb-empty">暂无破产记录</div>';
    });
    return;
  }
  
  // 去重：同一玩家名称只保留最高负债
  const seen = new Map();
  for (const item of list) {
    const name = item.name || '匿名';
    const debt = item.debt || Math.abs(item.wealth) || 0;
    if (!seen.has(name) || (seen.get(name).debt || 0) < debt) {
      seen.set(name, {...item, debt});
    }
  }
  const uniqueList = Array.from(seen.values()).sort((a, b) => (b.debt || 0) - (a.debt || 0));
  
  const html = uniqueList.map((item, i) => `
    <div class="lb-item lb-bankrupt">
      <span class="lb-rank">${i+1}</span>
      <span class="lb-name">${escapeHtml(item.name)}</span>
      <span class="lb-debt">-${formatU(item.debt || Math.abs(item.wealth))}</span>
    </div>
  `).join('');
  
  els.forEach(el => el.innerHTML = html);
}

function escapeHtml(s) {
  const div = document.createElement('div');
  div.textContent = s||'';
  return div.innerHTML;
}

/** 格式化金额 - 排行榜专用紧凑版本（保留K,M，>=1B用e+格式基于B） */
function formatU(n) {
  const num = Number(n) || 0;
  const absNum = Math.abs(num);
  const sign = num < 0 ? '-' : '';
  
  // 小于1000直接显示
  if (absNum < 1e3) {
    return sign + absNum.toFixed(0);
  }
  
  // 1K-999M用K,M表示
  if (absNum >= 1e3 && absNum < 1e9) {
    if (absNum >= 1e6) {
      return sign + (absNum / 1e6).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    return sign + (absNum / 1e3).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  
  // 大于等于1B(1e9)：转换为以B为单位的科学计数法
  const billions = absNum / 1e9;
  const exponent = Math.floor(Math.log10(billions));
  const mantissa = billions / Math.pow(10, exponent);
  const mantissaStr = mantissa.toString().slice(0, 5);
  return sign + mantissaStr + 'e+' + exponent + 'B';
}

/** 格式化钱包地址 */
function formatWallet(addr) {
  if (!addr || addr.length < 10) return addr;
  return addr.slice(0, 6) + '...' + addr.slice(-4);
}

// 初始化
window.addEventListener('DOMContentLoaded', () => {
  initLeaderboard();
  initMobileLeaderboardTabs();
});

/** 初始化移动端排行榜标签 */
function initMobileLeaderboardTabs() {
  const tabs = document.querySelectorAll('.sidebar-tab');
  const contents = document.querySelectorAll('.tab-content');
  
  if (tabs.length === 0) return;
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      
      // 切换标签状态
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // 切换内容显示
      contents.forEach(c => {
        if (c.dataset.content === target) {
          c.classList.add('active');
        } else {
          c.classList.remove('active');
        }
      });
    });
  });
}
