/**
 * Web3 钱包登录系统 - BSC 链
 * 支持 MetaMask 和 OKX Wallet
 * 每个钱包地址绑定唯一 Player ID，不可更改
 */

// BSC 主网配置
const BSC_MAINNET = {
  chainId: '0x38', // 56
  chainName: 'Binance Smart Chain Mainnet',
  nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
  rpcUrls: ['https://bsc-dataseed.binance.org/', 'https://bsc-dataseed1.defibit.io/'],
  blockExplorerUrls: ['https://bscscan.com']
};

// 使用主网
const TARGET_NETWORK = BSC_MAINNET;

// 全局状态
let web3Provider = null;
let web3Signer = null;
let currentWallet = null;
let walletConnected = false;
let currentWalletType = null; // 'metamask' 或 'okx'

// 暴露到 window 供其他模块使用
window.currentWallet = null;
window.walletConnected = false;

// 从 localStorage 恢复的钱包绑定
let walletBindings = {}; // address -> playerId

/** 初始化 Web3 */
async function initWeb3() {
  // 加载 ethers.js
  if (!window.ethers) {
    await loadEthersJS();
  }
  
  // 尝试恢复之前的连接
  await tryRestoreConnection();
  
  // 绑定按钮事件
  bindWalletButtons();
  
  // 监听钱包事件（全局）
  setupWalletListeners();
}

/** 加载 ethers.js */
function loadEthersJS() {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/ethers@6.9.0/dist/ethers.umd.min.js';
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

/** 绑定钱包按钮 */
function bindWalletButtons() {
  const btnMetaMask = document.getElementById('btnConnectMetaMask');
  const btnOKX = document.getElementById('btnConnectOKX');
  const btnDisconnect = document.getElementById('btnDisconnectWallet');
  
  if (btnMetaMask) {
    btnMetaMask.addEventListener('click', () => connectWallet('metamask'));
  }
  if (btnOKX) {
    btnOKX.addEventListener('click', () => connectWallet('okx'));
  }
  if (btnDisconnect) {
    btnDisconnect.addEventListener('click', disconnectWallet);
  }
}

/** 连接钱包 */
async function connectWallet(walletType) {
  try {
    currentWalletType = walletType;
    
    // 获取 provider
    let provider = null;
    
    if (walletType === 'metamask') {
      if (!window.ethereum) {
        showWalletError('请先安装 MetaMask 钱包');
        return false;
      }
      provider = window.ethereum;
    } else if (walletType === 'okx') {
      // OKX Wallet
      const okxWallet = window.okxwallet || (window.ethereum?.isOKExWallet ? window.ethereum : null);
      if (!okxWallet) {
        showWalletError('请先安装 OKX Wallet');
        window.open('https://www.okx.com/web3', '_blank');
        return false;
      }
      provider = okxWallet;
    }
    
    // 请求连接
    const accounts = await provider.request({ 
      method: 'eth_requestAccounts' 
    });
    
    if (!accounts || accounts.length === 0) {
      showWalletError('请授权连接钱包');
      return false;
    }
    
    const address = accounts[0].toLowerCase();
    
    // 初始化 provider
    web3Provider = new ethers.BrowserProvider(provider);
    web3Signer = await web3Provider.getSigner();
    
    // 检查并切换网络
    const switched = await ensureCorrectNetwork(provider);
    if (!switched) return false;
    
    // 签名认证（证明钱包所有权）
    const signature = await signAuthentication(address);
    if (!signature) return false;
    
    // 获取或创建 Player ID
    const playerId = await getOrCreatePlayerId(address, signature);
    
    currentWallet = address;
    walletConnected = true;
    window.currentWallet = address;
    window.walletConnected = true;
    
    // 保存到本地
    saveWalletConnection(address, playerId);
    
    // 更新设置界面
    updateSettingsUI(address, playerId);
    
    showToast('✅ ' + (walletType === 'okx' ? 'OKX' : 'MetaMask') + ' 钱包连接成功');
    
    return true;
    
  } catch (err) {
    console.error('连接钱包失败:', err);
    showWalletError(err.message || '连接失败');
    return false;
  }
}

/** 确保在正确的网络 */
async function ensureCorrectNetwork(provider) {
  try {
    const chainId = await provider.request({ method: 'eth_chainId' });
    
    if (chainId === TARGET_NETWORK.chainId) {
      return true;
    }
    
    // 尝试切换网络
    try {
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: TARGET_NETWORK.chainId }]
      });
      return true;
    } catch (switchErr) {
      // 如果网络不存在，尝试添加
      if (switchErr.code === 4902) {
        await provider.request({
          method: 'wallet_addEthereumChain',
          params: [TARGET_NETWORK]
        });
        return true;
      }
      throw switchErr;
    }
  } catch (err) {
    showWalletError('请切换到 BSC Mainnet');
    return false;
  }
}

/** 签名认证 */
async function signAuthentication(address) {
  try {
    // 生成认证消息
    const timestamp = Date.now();
    const message = `Web3Life Login\nWallet: ${address}\nTime: ${timestamp}\nChain: BSC\nGame: 币圈生涯模拟器`;
    
    // 请求签名
    const signature = await web3Signer.signMessage(message);
    
    // 验证签名（本地验证）
    const recovered = ethers.verifyMessage(message, signature);
    if (recovered.toLowerCase() !== address) {
      throw new Error('签名验证失败');
    }
    
    return { message, signature, timestamp };
    
  } catch (err) {
    if (err.code === 4001) {
      showWalletError('您拒绝了签名请求');
    } else {
      showWalletError('签名失败: ' + err.message);
    }
    return null;
  }
}

/** 获取或创建 Player ID */
async function getOrCreatePlayerId(address, auth) {
  // 1. 先检查本地缓存
  if (walletBindings[address]) {
    return walletBindings[address];
  }
  
  // 2. 检查 Firebase（如果已连接）
  if (typeof db !== 'undefined' && db) {
    try {
      const doc = await db.collection('walletBindings').doc(address).get();
      if (doc.exists) {
        const data = doc.data();
        walletBindings[address] = data.playerId;
        saveWalletBindings();
        return data.playerId;
      }
    } catch (e) {}
  }
  
  // 3. 创建新 Player ID（使用钱包地址缩略）
  const playerId = address.toLowerCase();
  
  // 保存到 Firebase
  if (typeof db !== 'undefined' && db) {
    try {
      await db.collection('walletBindings').doc(address).set({
        playerId: playerId,
        address: address,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        authHash: ethers.keccak256(ethers.toUtf8Bytes(auth.signature)).slice(0, 10)
      });
    } catch (e) {
      console.log('Firebase 保存失败，使用本地模式');
    }
  }
  
  // 保存本地
  walletBindings[address] = playerId;
  saveWalletBindings();
  
  return playerId;
}

/** 断开钱包 */
async function disconnectWallet() {
  currentWallet = null;
  walletConnected = false;
  window.currentWallet = null;
  window.walletConnected = false;
  web3Provider = null;
  web3Signer = null;
  currentWalletType = null;
  
  // 清除本地保存的连接状态，但保留绑定关系
  localStorage.removeItem('web3_lastWallet');
  
  updateSettingsUI(null, null);
  showToast('已断开钱包连接');
}

/** 尝试恢复连接 */
async function tryRestoreConnection() {
  // 加载本地绑定的钱包列表
  loadWalletBindings();
  
  // 检查是否之前连接过
  const lastWallet = localStorage.getItem('web3_lastWallet');
  if (!lastWallet) {
    updateSettingsUI(null, null);
    return;
  }
  
  // 如果有钱包环境，尝试自动恢复
  if (window.ethereum || window.okxwallet) {
    try {
      const provider = window.okxwallet || window.ethereum;
      const accounts = await provider.request({ 
        method: 'eth_accounts' 
      });
      if (accounts && accounts.length > 0 && 
          accounts[0].toLowerCase() === lastWallet.toLowerCase()) {
        // 自动重新连接
        await connectWallet('metamask');
      }
    } catch (e) {
      updateSettingsUI(null, null);
    }
  } else {
    updateSettingsUI(null, null);
  }
}

/** 监听钱包事件 */
function setupWalletListeners() {
  const providers = [window.ethereum, window.okxwallet].filter(Boolean);
  
  providers.forEach(provider => {
    // 账户切换
    provider.on('accountsChanged', (accounts) => {
      if (accounts.length === 0) {
        disconnectWallet();
      } else if (accounts[0].toLowerCase() !== currentWallet) {
        showToast('检测到钱包切换，重新连接...');
        connectWallet(currentWalletType || 'metamask');
      }
    });
    
    // 网络切换
    provider.on('chainChanged', (chainId) => {
      if (chainId !== TARGET_NETWORK.chainId) {
        showToast('⚠️ 请切换回 BSC 网络');
        walletConnected = false;
        updateSettingsUI(null, null);
      } else {
        connectWallet(currentWalletType || 'metamask');
      }
    });
  });
}

/** 更新设置界面 UI */
function updateSettingsUI(address, playerId) {
  const walletButtons = document.querySelector('.wallet-buttons');
  const walletStatus = document.getElementById('walletStatus');
  const walletAddress = document.getElementById('walletAddress');
  const playerIdInput = document.getElementById('initPlayerId');
  const idLocked = document.querySelector('.id-locked');
  
  if (address && playerId) {
    // 已连接状态
    if (walletButtons) walletButtons.style.display = 'none';
    if (walletStatus) walletStatus.style.display = 'flex';
    if (walletAddress) walletAddress.textContent = formatWallet(address);
    
    // 更新 Player ID 输入框
    if (playerIdInput) {
      playerIdInput.value = playerId;
      playerIdInput.style.color = 'var(--red)';
      playerIdInput.style.fontWeight = '600';
    }
    
    // 显示已锁定
    if (idLocked) idLocked.style.display = 'inline';
    
  } else {
    // 未连接状态
    if (walletButtons) walletButtons.style.display = 'flex';
    if (walletStatus) walletStatus.style.display = 'none';
    
    // 重置 Player ID 输入框
    if (playerIdInput) {
      playerIdInput.value = '';
      playerIdInput.placeholder = '请先连接钱包';
      playerIdInput.style.color = '';
      playerIdInput.style.fontWeight = '';
    }
    
    // 隐藏锁定标记
    if (idLocked) idLocked.style.display = 'none';
  }
}

/** 格式化钱包地址 */
function formatWallet(addr) {
  if (!addr || addr.length < 10) return addr;
  return addr.slice(0, 6) + '...' + addr.slice(-4);
}

/** 保存钱包连接 */
function saveWalletConnection(address, playerId) {
  localStorage.setItem('web3_lastWallet', address);
}

/** 保存钱包绑定 */
function saveWalletBindings() {
  localStorage.setItem('web3_walletBindings', JSON.stringify(walletBindings));
}

/** 加载钱包绑定 */
function loadWalletBindings() {
  try {
    const saved = localStorage.getItem('web3_walletBindings');
    if (saved) walletBindings = JSON.parse(saved);
  } catch (e) {}
}

/** 显示错误 */
function showWalletError(msg) {
  showToast('❌ ' + msg);
}

// 初始化
window.addEventListener('DOMContentLoaded', initWeb3);
