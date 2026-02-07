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

/** 上报本局成绩 */
async function submitGameResult(playerData) {
  const netWealth = (playerData.wealth || 0) - (playerData.debt || 0);
  // 优先使用钱包地址（如果是0x开头且42位）
  const rawId = playerData.playerId || '';
  const isWallet = rawId.startsWith('0x') && rawId.length === 42;
  const name = isWallet ? formatWallet(rawId) : (rawId.slice(0, 12) || '匿名');
  const playerKey = isWallet ? rawId.toLowerCase() : name.replace(/[^a-zA-Z0-9]/g, '_');
  
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
    // 破产榜 - 同玩家保留最新，显示负债
    await db.collection('bankruptLeaderboard').doc(playerKey).set({
      name: name,
      wealth: Math.floor(netWealth),
      debt: Math.floor(playerData.debt || 0),
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
  }
  
  console.log('📊 成绩已上报:', name, formatU(netWealth));
}

/** 渲染 */
function renderLeaderboards() {
  renderWealthLeaderboard(leaderboardCache.wealth);
  renderBankruptLeaderboard(leaderboardCache.bankrupt);
}

function renderWealthLeaderboard(list) {
  const el = document.getElementById('wealthLeaderboard');
  if (!el) return;
  
  if (!list?.length) {
    el.innerHTML = '<div class="lb-empty">暂无数据<br>来成为第一个传奇！</div>';
    return;
  }
  
  const medals = ['🥇','🥈','🥉'];
  el.innerHTML = list.map((item, i) => `
    <div class="lb-item ${i<3?'lb-top':''}">
      <span class="lb-rank">${medals[i]||i+1}</span>
      <span class="lb-name">${escapeHtml(item.name)}</span>
      <span class="lb-score">${formatU(item.wealth)}</span>
    </div>
  `).join('');
}

function renderBankruptLeaderboard(list) {
  const el = document.getElementById('bankruptLeaderboard');
  if (!el) return;
  
  if (!list?.length) {
    el.innerHTML = '<div class="lb-empty">暂无破产记录</div>';
    return;
  }
  
  el.innerHTML = list.map((item, i) => `
    <div class="lb-item lb-bankrupt">
      <span class="lb-rank">${i+1}</span>
      <span class="lb-name">${escapeHtml(item.name)}</span>
      <span class="lb-debt">-${formatU(item.debt || Math.abs(item.wealth))}</span>
    </div>
  `).join('');
}

function escapeHtml(s) {
  const div = document.createElement('div');
  div.textContent = s||'';
  return div.innerHTML;
}

/** 格式化金额 - 排行榜专用紧凑版本（支持T=万亿、Q=千万亿） */
function formatU(n) {
  const num = Number(n) || 0;
  const absNum = Math.abs(num);
  const sign = num < 0 ? '-' : '';
  
  if (absNum >= 1e15) {
    return sign + (absNum / 1e15).toFixed(1) + 'Q'; // 千万亿
  }
  if (absNum >= 1e12) {
    return sign + (absNum / 1e12).toFixed(1) + 'T'; // 万亿
  }
  if (absNum >= 1e9) {
    return sign + (absNum / 1e9).toFixed(1) + 'B'; // 十亿
  }
  if (absNum >= 1e6) {
    return sign + (absNum / 1e6).toFixed(1) + 'M'; // 百万
  }
  if (absNum >= 1e3) {
    return sign + (absNum / 1e3).toFixed(1) + 'K'; // 千
  }
  
  return sign + absNum.toFixed(0);
}

/** 格式化钱包地址 */
function formatWallet(addr) {
  if (!addr || addr.length < 10) return addr;
  return addr.slice(0, 6) + '...' + addr.slice(-4);
}

// 初始化
window.addEventListener('DOMContentLoaded', initLeaderboard);
