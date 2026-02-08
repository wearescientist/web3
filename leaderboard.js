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
let leaderboardCache = { wealth: [], bankrupt: [], lastUpdate: 0 };

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
    
    // 先加载本地缓存
    loadLocalCache();
    
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
    if (saved) leaderboardCache = JSON.parse(saved);
  } catch(e){}
}

/** 保存本地缓存 */
function saveLocalCache() {
  try {
    localStorage.setItem('lb_cache_v2', JSON.stringify(leaderboardCache));
  } catch(e){}
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
