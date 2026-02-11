/**
 * 硬核模式 - 炒币交易路径决策事件库
 * 150个交易决策场景，涵盖Meme、杠杆、蓝筹、时机、风险等维度
 */

const HARDCORE_TRADING_DECISIONS = [
  // ==================== 1-25: 基础场景 ====================
  {
    id: 'trading_001',
    category: 'meme',
    title: '新币狙击机会',
    desc: 'Meme新币刚上pump.fun，dev持仓仅5%，社区热度快速攀升。',
    choices: [
      { emoji: '🎯', text: '小额狙击', hint: '高风险高回报', isCorrect: true, effect: { wealthPct: 4.0 } },
      { emoji: '💰', text: '重仓梭哈', hint: '风险过高', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '👀', text: '观望等待', hint: '错过最佳时机', isCorrect: false, effect: { wealthPct: 0.3 } },
      { emoji: '🔍', text: '查合约', hint: '时间窗口已过', isCorrect: false, effect: { wealthPct: 0.5 } }
    ],
    explanation: 'Dev持仓低意味着相对分散，小额参与可控制回撤风险，同时捕捉爆发机会。'
  },
  {
    id: 'trading_002',
    category: 'bluechip',
    title: 'BTC跌破关键支撑',
    desc: 'BTC跌破30日关键支撑位，成交量放大，市场情绪恐慌。',
    choices: [
      { emoji: '🛡️', text: '止损减仓', hint: '保护本金', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '📉', text: '加仓抄底', hint: '下跌趋势未明', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '⏸️', text: '持币不动', hint: '可能继续下跌', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '🔄', text: '全仓换USDT', hint: '可能反弹踏空', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '关键支撑跌破后通常有进一步下跌，止损减仓是保护本金的明智之举。'
  },
  {
    id: 'trading_003',
    category: 'leverage',
    title: '资金费率飙升',
    desc: 'BTC永续合约资金费率连续3日超过0.1%，多头持仓拥挤。',
    choices: [
      { emoji: '📊', text: '减多仓', hint: '避免资金费侵蚀', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '🚀', text: '继续加多', hint: '费率过高风险大', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '🩳', text: '反手做空', hint: '逆势操作危险', isCorrect: false, effect: { wealthPct: -0.4 } },
      { emoji: '😴', text: '无视持有', hint: '每天亏损资金费', isCorrect: false, effect: { wealthPct: 0.7 } }
    ],
    explanation: '高资金费率意味着多头过度拥挤，减仓可以避免资金费侵蚀并降低回调风险。'
  },
  {
    id: 'trading_004',
    category: 'risk',
    title: 'DeFi新矿池高APY',
    desc: '某新DeFi协议推出流动性池，APY高达500%，但审计报告未出。',
    choices: [
      { emoji: '🔍', text: '审计后小额参与', hint: '安全第一', isCorrect: true, effect: { wealthPct: 2.2 } },
      { emoji: '🌾', text: '立即重仓挖矿', hint: 'Rug风险极高', isCorrect: false, effect: { wealthPct: -0.9 } },
      { emoji: '⛔', text: '完全无视', hint: '错过机会', isCorrect: false, effect: { wealthPct: 0.3 } },
      { emoji: '🔥', text: 'all in冲', hint: '可能被黑', isCorrect: false, effect: { wealthPct: -0.95 } }
    ],
    explanation: '新协议高APY往往伴随高风险，等待审计+小额参与是平衡收益与风险的最佳选择。'
  },
  {
    id: 'trading_005',
    category: 'meme',
    title: '社区FOMO月球',
    desc: '你持有的Meme币社区突然高喊"月球"，情绪极度狂热。',
    choices: [
      { emoji: '💎', text: '分批减仓', hint: '锁定利润', isCorrect: true, effect: { wealthPct: 2.5 } },
      { emoji: '🚀', text: '加仓追多', hint: '高位接盘风险', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '🏦', text: '全部清仓', hint: '可能卖飞', isCorrect: false, effect: { wealthPct: 1.5 } },
      { emoji: '🙈', text: '关闭软件', hint: '可能坐过山车', isCorrect: false, effect: { wealthPct: 0.8 } }
    ],
    explanation: '社区极度狂热往往是短期顶部信号，分批减仓可以锁定利润同时保留上涨空间。'
  },
  {
    id: 'trading_006',
    category: 'bluechip',
    title: '熊市蓝筹DCA',
    desc: '市场进入熊市，BTC/ETH价格从历史高点下跌60%。',
    choices: [
      { emoji: '📅', text: '定期定额买入', hint: '长期摊低成本', isCorrect: true, effect: { wealthPct: 3.0 } },
      { emoji: '🎯', text: '一次性梭哈', hint: '可能还有下跌', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '⏸️', text: '等更低再入', hint: '可能错过底部', isCorrect: false, effect: { wealthPct: 0.2 } },
      { emoji: '🚪', text: '清仓离场', hint: '熊市割肉不明智', isCorrect: false, effect: { wealthPct: -0.3 } }
    ],
    explanation: '熊市DCA是积累蓝筹资产的最佳策略，可以有效摊低成本并避免择时错误。'
  },
  {
    id: 'trading_007',
    category: 'leverage',
    title: '牛市初期开杠杆',
    desc: '牛市刚确认，市场趋势向上但波动仍大。',
    choices: [
      { emoji: '⚖️', text: '2x低杠杆做多', hint: '风险可控', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '⚡', text: '20x梭哈', hint: '波动即爆仓', isCorrect: false, effect: { wealthPct: -0.9 } },
      { emoji: '⛔', text: '不用杠杆', hint: '收益偏低', isCorrect: false, effect: { wealthPct: 1.3 } },
      { emoji: '🩳', text: '做空对冲', hint: '逆势操作', isCorrect: false, effect: { wealthPct: -0.4 } }
    ],
    explanation: '牛市初期趋势向上但波动大，低杠杆做多可以放大收益同时控制爆仓风险。'
  },
  {
    id: 'trading_008',
    category: 'timing',
    title: '山寨币跌90%',
    desc: '某山寨币从高点下跌90%，成交量萎缩至历史低位。',
    choices: [
      { emoji: '💰', text: '小额抄底', hint: '高赔率', isCorrect: true, effect: { wealthPct: 5.0 } },
      { emoji: '🌊', text: '重仓买入', hint: '可能归零', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '🚫', text: '不碰', hint: '错过反弹', isCorrect: false, effect: { wealthPct: 0.3 } },
      { emoji: '🩳', text: '做空', hint: '下跌空间有限', isCorrect: false, effect: { wealthPct: -0.2 } }
    ],
    explanation: '跌90%后市场悲观到极致，小额参与具有极高赔率，风险可控。'
  },
  {
    id: 'trading_009',
    category: 'timing',
    title: 'K线假突破',
    desc: '价格突破前高但成交量不足，随后快速回落。',
    choices: [
      { emoji: '👀', text: '观望确认', hint: '避免追高', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '🚀', text: '突破追多', hint: '假突破陷阱', isCorrect: false, effect: { wealthPct: -0.4 } },
      { emoji: '🎯', text: '反手做空', hint: '未确认趋势', isCorrect: false, effect: { wealthPct: -0.3 } },
      { emoji: '😵', text: '慌乱操作', hint: '情绪化交易', isCorrect: false, effect: { wealthPct: -0.5 } }
    ],
    explanation: '假突破是常见陷阱，观望等待确认信号可以避免追高被套。'
  },
  {
    id: 'trading_010',
    category: 'timing',
    title: '成交量突发放量拉升',
    desc: '币价突破盘整区间，成交量是均量3倍，买盘强劲。',
    choices: [
      { emoji: '📈', text: '跟多买入', hint: '量价齐升', isCorrect: true, effect: { wealthPct: 2.8 } },
      { emoji: '⏸️', text: '等待回调', hint: '可能踏空', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '🩳', text: '做空回调', hint: '逆势操作', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '🏃', text: '追高满仓', hint: '风险过大', isCorrect: false, effect: { wealthPct: 0.8 } }
    ],
    explanation: '放量突破是有效突破信号，跟随趋势做多是顺势操作。'
  },
  {
    id: 'trading_011',
    category: 'meme',
    title: 'Dev大额抛售',
    desc: '你持有的Meme币dev钱包开始大额转入交易所。',
    choices: [
      { emoji: '🚨', text: '立即卖出', hint: 'Rug信号', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '💎', text: '持币信仰', hint: '可能被割', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '📉', text: '逢低加仓', hint: '危险操作', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '🤷', text: '继续观察', hint: '错失逃顶', isCorrect: false, effect: { wealthPct: 0.3 } }
    ],
    explanation: 'Dev大额转入交易所通常是出货信号，及时撤离是明智选择。'
  },
  {
    id: 'trading_012',
    category: 'bluechip',
    title: 'SOL生态爆发',
    desc: 'Solana生态项目活跃度飙升，SOL币价突破新高。',
    choices: [
      { emoji: '🌐', text: '加仓SOL分散配置', hint: '生态红利', isCorrect: true, effect: { wealthPct: 2.4 } },
      { emoji: '🚀', text: '全仓SOL', hint: '集中风险', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '📤', text: '卖出获利', hint: '可能踏空', isCorrect: false, effect: { wealthPct: 1.2 } },
      { emoji: '🪙', text: '买土狗', hint: '高风险', isCorrect: false, effect: { wealthPct: -0.5 } }
    ],
    explanation: '生态爆发期加仓龙头币同时保持分散配置是最佳策略。'
  },
  {
    id: 'trading_013',
    category: 'leverage',
    title: '杠杆爆仓潮',
    desc: '市场剧烈波动，多头连环爆仓，清算量创纪录。',
    choices: [
      { emoji: '🛡️', text: '降低杠杆', hint: '防范风险', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '🎯', text: '抄底爆仓盘', hint: '接飞刀危险', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '⚡', text: '加杠杆抄底', hint: '逆势加仓', isCorrect: false, effect: { wealthPct: -0.9 } },
      { emoji: '😱', text: '恐慌清仓', hint: '卖在底部', isCorrect: false, effect: { wealthPct: 0.2 } }
    ],
    explanation: '爆仓潮时降低杠杆是首要任务，活下来比赚钱更重要。'
  },
  {
    id: 'trading_014',
    category: 'meme',
    title: 'Meme顶部分歧',
    desc: 'Meme币价格新高但社区出现分歧，部分KOL开始唱空。',
    choices: [
      { emoji: '💰', text: '分批减仓', hint: '锁定利润', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '💎', text: '钻石手持有', hint: '可能见顶', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '🚀', text: 'FOMO加仓', hint: '高位接盘', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '🏦', text: '全部清仓', hint: '可能卖飞', isCorrect: false, effect: { wealthPct: 1.5 } }
    ],
    explanation: '顶部分歧是危险信号，分批减仓可以锁定利润同时避免踏空。'
  },
  {
    id: 'trading_015',
    category: 'risk',
    title: 'DeFi无常损失高池',
    desc: '你参与的LP池两个币价格走势背离，无常损失超过收益。',
    choices: [
      { emoji: '🚪', text: '立即退出', hint: '止损IL', isCorrect: true, effect: { wealthPct: 0.7 } },
      { emoji: '🌾', text: '继续挖矿', hint: '损失扩大', isCorrect: false, effect: { wealthPct: -0.3 } },
      { emoji: '⚖️', text: '单边调整', hint: '操作复杂', isCorrect: false, effect: { wealthPct: -0.2 } },
      { emoji: '🔮', text: '赌回归', hint: '风险极高', isCorrect: false, effect: { wealthPct: -0.4 } }
    ],
    explanation: '无常损失超过收益时及时退出是明智选择，避免亏损扩大。'
  },
  {
    id: 'trading_016',
    category: 'bluechip',
    title: 'BTC主导地位上升',
    desc: 'BTC.D指数持续攀升，资金从山寨回流BTC。',
    choices: [
      { emoji: '👑', text: '换仓BTC', hint: '拥抱主流', isCorrect: true, effect: { wealthPct: 2.2 } },
      { emoji: '💎', text: '坚守山寨', hint: '失血下跌', isCorrect: false, effect: { wealthPct: -0.4 } },
      { emoji: '📊', text: '维持现状', hint: '跑输大盘', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '🩳', text: '做空BTC', hint: '逆势危险', isCorrect: false, effect: { wealthPct: -0.5 } }
    ],
    explanation: 'BTC.D上升期换仓BTC可以获得更好收益并规避风险。'
  },
  {
    id: 'trading_017',
    category: 'timing',
    title: '链上鲸鱼大额买入',
    desc: '链上数据显示某鲸鱼地址大额买入BTC，金额超过1亿美元。',
    choices: [
      { emoji: '🐋', text: '跟随买入', hint: '鲸鱼肉食', isCorrect: true, effect: { wealthPct: 2.6 } },
      { emoji: '⏸️', text: '观望等待', hint: '错过机会', isCorrect: false, effect: { wealthPct: 0.3 } },
      { emoji: '📤', text: '反向做空', hint: '对抗鲸鱼', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '🤔', text: '分析后再说', hint: '错失先机', isCorrect: false, effect: { wealthPct: 0.5 } }
    ],
    explanation: '鲸鱼大额买入通常是大涨前兆，跟随操作可以获得较好收益。'
  },
  {
    id: 'trading_018',
    category: 'meme',
    title: 'Meme叙事切换',
    desc: '市场热点从狗币转向AI概念Meme，旧叙事资金流出。',
    choices: [
      { emoji: '🔄', text: '轮动到新叙事', hint: '拥抱热点', isCorrect: true, effect: { wealthPct: 3.0 } },
      { emoji: '💎', text: '坚守老Meme', hint: '资金流失', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '🏃', text: '全部清仓', hint: '踏空新叙事', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '🎯', text: '两边都押', hint: '分散收益', isCorrect: false, effect: { wealthPct: 1.2 } }
    ],
    explanation: 'Meme市场叙事切换快，及时轮动到新叙事可以获得更高收益。'
  },
  {
    id: 'trading_019',
    category: 'leverage',
    title: '资金费吃本金',
    desc: '你的多仓已经持有两周，资金费累计吃掉15%本金。',
    choices: [
      { emoji: '🚪', text: '平仓止损费', hint: '保护本金', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '💎', text: '继续持有', hint: '继续失血', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '⚡', text: '加仓拉均价', hint: '加大风险', isCorrect: false, effect: { wealthPct: -0.4 } },
      { emoji: '🎰', text: '调到更高杠杆', hint: '赌博行为', isCorrect: false, effect: { wealthPct: -0.8 } }
    ],
    explanation: '资金费持续侵蚀本金时平仓是明智选择，避免长期损耗。'
  },
  {
    id: 'trading_020',
    category: 'risk',
    title: '熊市Meme归零潮',
    desc: '熊市中多个Meme币归零，你持有的Meme也下跌80%。',
    choices: [
      { emoji: '🏛️', text: '转投蓝筹', hint: '避险保值', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '💎', text: '死拿到底', hint: '可能归零', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '🎯', text: '换其他Meme', hint: '归零风险', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '🎰', text: '抄底加仓', hint: '高风险', isCorrect: false, effect: { wealthPct: -0.5 } }
    ],
    explanation: '熊市中Meme风险极大，转投蓝筹是保值避险的明智选择。'
  },
  {
    id: 'trading_021',
    category: 'leverage',
    title: '牛市中期加杠杆',
    desc: '牛市趋势确立，市场进入主升浪阶段。',
    choices: [
      { emoji: '⚡', text: '3x做多', hint: '趋势确认', isCorrect: true, effect: { wealthPct: 2.5 } },
      { emoji: '🚀', text: '10x梭哈', hint: '风险过大', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '⛔', text: '不加杠杆', hint: '收益偏低', isCorrect: false, effect: { wealthPct: 1.4 } },
      { emoji: '🩳', text: '做空等回调', hint: '逆势操作', isCorrect: false, effect: { wealthPct: -0.6 } }
    ],
    explanation: '牛市主升浪使用适度杠杆可以放大收益，3x杠杆风险相对可控。'
  },
  {
    id: 'trading_022',
    category: 'bluechip',
    title: '新L2低费热潮',
    desc: '某新L2公链Gas费极低，生态项目爆发式增长。',
    choices: [
      { emoji: '🌉', text: '迁移参与', hint: '生态早期', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '🚀', text: '全仓迁过去', hint: '新链风险', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '🏠', text: '留在原链', hint: '错过机会', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '💰', text: '买新链币', hint: '币价波动大', isCorrect: false, effect: { wealthPct: 0.7 } }
    ],
    explanation: '新L2生态爆发时积极参与可以获得早期红利，但不宜全仓押注。'
  },
  {
    id: 'trading_023',
    category: 'meme',
    title: 'Meme社区分裂',
    desc: '你持有的Meme币核心团队分裂，互相指责。',
    choices: [
      { emoji: '🚪', text: '立即卖出', hint: '社区瓦解', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '🙏', text: '站队支持', hint: '风险极高', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '💎', text: '继续信仰', hint: '可能归零', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '🔥', text: '加仓抄底', hint: '危险操作', isCorrect: false, effect: { wealthPct: -0.8 } }
    ],
    explanation: '社区分裂是项目重大风险信号，及时撤离避免损失扩大。'
  },
  {
    id: 'trading_024',
    category: 'risk',
    title: 'DeFi黑客事件',
    desc: '某知名DeFi协议被黑客攻击，损失数千万美元。',
    choices: [
      { emoji: '🚨', text: '撤池保平安', hint: '安全第一', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '💎', text: '相信团队', hint: '二次风险', isCorrect: false, effect: { wealthPct: -0.4 } },
      { emoji: '💰', text: '抄底协议币', hint: '风险极高', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '🤷', text: '观望看看', hint: '错失撤离时机', isCorrect: false, effect: { wealthPct: 0.3 } }
    ],
    explanation: '黑客事件后第一时间撤池是最安全选择，避免二次伤害。'
  },
  {
    id: 'trading_025',
    category: 'bluechip',
    title: 'BTC ETF大额流入',
    desc: '现货BTC ETF连续5日大额净流入，机构资金入场。',
    choices: [
      { emoji: '📈', text: '加仓BTC', hint: '机构背书', isCorrect: true, effect: { wealthPct: 2.3 } },
      { emoji: '📊', text: '加仓ETH', hint: '跟随效应弱', isCorrect: false, effect: { wealthPct: 1.2 } },
      { emoji: '⏸️', text: '等待回调', hint: '踏空风险', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '📤', text: '获利了结', hint: '趋势未完', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: 'ETF持续流入是强看涨信号，加仓BTC可以分享机构红利。'
  },
  {
    id: 'trading_026',
    category: 'timing',
    title: 'Altseason确认',
    desc: 'ETH/BTC汇率突破关键阻力，山寨币普遍放量上涨。',
    choices: [
      { emoji: '🚀', text: '重仓山寨', hint: '爆发期', isCorrect: true, effect: { wealthPct: 3.5 } },
      { emoji: '👑', text: '坚守BTC', hint: '跑输大盘', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '⚖️', text: '平衡配置', hint: '收益分散', isCorrect: false, effect: { wealthPct: 1.6 } },
      { emoji: '📤', text: '全部清仓', hint: '卖飞', isCorrect: false, effect: { wealthPct: 0.4 } }
    ],
    explanation: 'Altseason确认后山寨币涨幅远超BTC，重仓山寨可以获得超额收益。'
  },
  {
    id: 'trading_027',
    category: 'leverage',
    title: '杠杆反向信号',
    desc: '市场恐慌指数极高，散户大量做空，费率负值。',
    choices: [
      { emoji: '🔄', text: '反向开多', hint: ' contrarian', isCorrect: true, effect: { wealthPct: 2.8 } },
      { emoji: '📉', text: '跟随做空', hint: '轧空风险', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '⏸️', text: '观望等待', hint: '错失机会', isCorrect: false, effect: { wealthPct: 0.4 } },
      { emoji: '⚡', text: '高杠杆空', hint: '危险操作', isCorrect: false, effect: { wealthPct: -0.9 } }
    ],
    explanation: '极端恐慌+散户做空拥挤时反向做多是经典的contrarian策略。'
  },
  {
    id: 'trading_028',
    category: 'meme',
    title: 'Meme地板价稳定',
    desc: '某Meme币价格跌至低位后横盘，成交量萎缩，持有者减少。',
    choices: [
      { emoji: '💰', text: '小额抄底', hint: '高赔率', isCorrect: true, effect: { wealthPct: 4.0 } },
      { emoji: '🏛️', text: '转投蓝筹', hint: '错过反弹', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '⛔', text: '不碰', hint: '错过4倍', isCorrect: false, effect: { wealthPct: 0.3 } },
      { emoji: '🌊', text: '重仓买入', hint: '风险过大', isCorrect: false, effect: { wealthPct: -0.5 } }
    ],
    explanation: 'Meme地板稳定后往往有反弹甚至新一轮上涨，小额抄底赔率极高。'
  },
  {
    id: 'trading_029',
    category: 'leverage',
    title: '资金费率负值',
    desc: '永续合约资金费率为负，空头支付多头。',
    choices: [
      { emoji: '📈', text: '开多赚资金费', hint: '正向收益', isCorrect: true, effect: { wealthPct: 2.2 } },
      { emoji: '🩳', text: '开空赚资金费', hint: '理解错误', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '⏸️', text: '不参与', hint: '错失收益', isCorrect: false, effect: { wealthPct: 0.2 } },
      { emoji: '⚖️', text: '对冲套利', hint: '复杂操作', isCorrect: false, effect: { wealthPct: 0.8 } }
    ],
    explanation: '资金费率为负时开多可以获得资金费收益同时享受上涨空间。'
  },
  {
    id: 'trading_030',
    category: 'timing',
    title: '链上活跃度下降',
    desc: '链上活跃地址数、交易量连续两周下降。',
    choices: [
      { emoji: '🛡️', text: '减仓观望', hint: '资金流出', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '💎', text: '继续持有', hint: '可能下跌', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '📉', text: '做空对冲', hint: '不确定', isCorrect: false, effect: { wealthPct: -0.3 } },
      { emoji: '💰', text: '抄底加仓', hint: '可能续跌', isCorrect: false, effect: { wealthPct: -0.4 } }
    ],
    explanation: '链上活跃度下降通常预示资金流出，减仓观望是保守选择。'
  },
  {
    id: 'trading_031',
    category: 'risk',
    title: 'DeFi新分叉',
    desc: '某成熟DeFi协议出现新分叉，承诺更高收益。',
    choices: [
      { emoji: '🏛️', text: '留在成熟协议', hint: '安全第一', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '🚀', text: '迁移新分叉', hint: 'Rug风险', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '⚖️', text: '两边都参与', hint: '分散风险', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '💰', text: '新分叉重仓', hint: '极高风险', isCorrect: false, effect: { wealthPct: -0.9 } }
    ],
    explanation: '新分叉往往伴随高风险，留在经过时间考验的成熟协议更安全。'
  },
  {
    id: 'trading_032',
    category: 'meme',
    title: 'Meme Dev匿名但好',
    desc: '某Meme币dev完全匿名，但代码质量高，社区自治能力强。',
    choices: [
      { emoji: '🎮', text: '小额玩', hint: '控制风险', isCorrect: true, effect: { wealthPct: 3.0 } },
      { emoji: '🌊', text: '大额买入', hint: 'dev风险', isCorrect: false, effect: { wealthPct: -0.4 } },
      { emoji: '⛔', text: '不碰匿名', hint: '错过机会', isCorrect: false, effect: { wealthPct: 0.3 } },
      { emoji: '🔍', text: '等KYC后', hint: '错失早期', isCorrect: false, effect: { wealthPct: 0.3 } }
    ],
    explanation: '匿名dev虽有风险，但代码和社区健康可以小额参与，控制仓位是关键。'
  },
  {
    id: 'trading_033',
    category: 'leverage',
    title: '杠杆清算级别',
    desc: '你的杠杆仓位接近清算线，价格正朝不利方向移动。',
    choices: [
      { emoji: '🚨', text: '全部减仓', hint: '保命第一', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '⚡', text: '追加保证金', hint: '可能继续跌', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '🎰', text: '赌反弹', hint: '可能爆仓', isCorrect: false, effect: { wealthPct: -0.95 } },
      { emoji: '🙏', text: '祈祷', hint: '听天由命', isCorrect: false, effect: { wealthPct: -0.8 } }
    ],
    explanation: '接近清算线时减仓保命是第一要务，活下来才能继续交易。'
  },
  {
    id: 'trading_034',
    category: 'bluechip',
    title: '蓝筹分红质押热',
    desc: 'ETH等蓝筹币质押收益提升，机构大量参与。',
    choices: [
      { emoji: '🏦', text: '加仓质押', hint: '稳健收益', isCorrect: true, effect: { wealthPct: 1.9 } },
      { emoji: '📤', text: '卖出获利', hint: '可能踏空', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '🎯', text: '买土狗', hint: '高风险', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '⏸️', text: '观望等待', hint: '错失收益', isCorrect: false, effect: { wealthPct: 0.5 } }
    ],
    explanation: '质押收益提升时加仓质押可以获得稳健被动收益，适合长期持有。'
  },
  {
    id: 'trading_035',
    category: 'meme',
    title: 'Meme竞争SocialFi战',
    desc: '多个Meme项目开始打SocialFi营销战，互相攻击。',
    choices: [
      { emoji: '🚪', text: '回避不参与', hint: '避免站队风险', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '⚔️', text: '选边站', hint: '失败风险', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '📢', text: '参与宣传', hint: '浪费时间', isCorrect: false, effect: { wealthPct: 0.2 } },
      { emoji: '🎯', text: '两边都买', hint: '对冲策略', isCorrect: false, effect: { wealthPct: 0.6 } }
    ],
    explanation: 'Meme营销战风险极高，回避不参与是最好的选择。'
  },
  {
    id: 'trading_036',
    category: 'risk',
    title: 'DeFi TVL流出',
    desc: '你参与的DeFi协议TVL持续流出，收益下降。',
    choices: [
      { emoji: '🚪', text: '立即撤出', hint: '止损', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '💎', text: '继续持有', hint: '收益下降', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '💰', text: '逆势加仓', hint: '风险大', isCorrect: false, effect: { wealthPct: -0.4 } },
      { emoji: '🤷', text: '再观察下', hint: '错失时机', isCorrect: false, effect: { wealthPct: 0.7 } }
    ],
    explanation: 'TVL流出意味着协议吸引力下降，及时撤出寻找更好机会是明智选择。'
  },
  {
    id: 'trading_037',
    category: 'bluechip',
    title: 'BTC新高后回调',
    desc: 'BTC创历史新高后，出现10%技术性回调。',
    choices: [
      { emoji: '⏳', text: '等回调买入', hint: '逢低吸纳', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '📉', text: '高位做空', hint: '趋势向上', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '📤', text: '全部卖出', hint: '可能卖飞', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '⏸️', text: '持股不动', hint: '错过加仓', isCorrect: false, effect: { wealthPct: 1.2 } }
    ],
    explanation: '新高后的回调是加仓良机，等待回调买入可以降低成本。'
  },
  {
    id: 'trading_038',
    category: 'timing',
    title: '山寨小泵',
    desc: '你持有的山寨币突然上涨20%，但无明显利好。',
    choices: [
      { emoji: '💰', text: '小利卖出', hint: '锁定利润', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '💎', text: '继续持有', hint: '可能回落', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '🚀', text: 'FOMO加仓', hint: '追高被套', isCorrect: false, effect: { wealthPct: -0.4 } },
      { emoji: '📊', text: '换仓其他', hint: '不确定', isCorrect: false, effect: { wealthPct: 0.7 } }
    ],
    explanation: '无明显利好的小涨往往是短期行情，小利卖出锁定利润是稳健选择。'
  },
  {
    id: 'trading_039',
    category: 'leverage',
    title: '杠杆平台费率调整',
    desc: '你所用的杠杆平台突然提高资金费率。',
    choices: [
      { emoji: '🔄', text: '换平台', hint: '降低成本', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '💎', text: '继续用', hint: '成本增加', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '🚪', text: '平仓走人', hint: '错失机会', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '⏸️', text: '观望再说', hint: '持续高成本', isCorrect: false, effect: { wealthPct: 0.6 } }
    ],
    explanation: '平台费率提高时更换平台可以降低成本，保持竞争力。'
  },
  {
    id: 'trading_040',
    category: 'meme',
    title: 'Meme上大所传闻',
    desc: '市场传闻你持有的Meme币即将上线某大交易所。',
    choices: [
      { emoji: '📈', text: '持卖结合', hint: '消息落地前减仓', isCorrect: true, effect: { wealthPct: 3.2 } },
      { emoji: '💎', text: '满仓持有', hint: '传闻可能假', isCorrect: false, effect: { wealthPct: -0.3 } },
      { emoji: '🚀', text: 'FOMO加仓', hint: '消息未确认', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '📤', text: '全部清仓', hint: '可能卖飞', isCorrect: false, effect: { wealthPct: 1.5 } }
    ],
    explanation: '上大所传闻往往提前兑现，持卖结合可以锁定利润同时保留上涨空间。'
  },
  {
    id: 'trading_041',
    category: 'risk',
    title: 'DeFi协议审计通过',
    desc: '你关注的DeFi协议通过顶级安全公司审计。',
    choices: [
      { emoji: '✅', text: '放心加仓', hint: '安全可靠', isCorrect: true, effect: { wealthPct: 2.4 } },
      { emoji: '🚪', text: '继续观望', hint: '错过机会', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '⚡', text: '重仓梭哈', hint: '仍有风险', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '⛔', text: '不投DeFi', hint: '保守过头', isCorrect: false, effect: { wealthPct: 0.2 } }
    ],
    explanation: '审计通过是重要安全信号，加仓参与可以获得稳健收益。'
  },
  {
    id: 'trading_042',
    category: 'leverage',
    title: '熊市杠杆禁区',
    desc: '市场进入熊市，波动率飙升，多空双爆频发。',
    choices: [
      { emoji: '⛔', text: '不用杠杆', hint: '安全第一', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '⚡', text: '小杠杆试试', hint: '仍有风险', isCorrect: false, effect: { wealthPct: -0.3 } },
      { emoji: '🎰', text: '高杠杆赌方向', hint: '大概率爆仓', isCorrect: false, effect: { wealthPct: -0.95 } },
      { emoji: '🔄', text: '对冲策略', hint: '复杂难操作', isCorrect: false, effect: { wealthPct: 0.4 } }
    ],
    explanation: '熊市波动大，不用杠杆是生存之道，避免多空双爆。'
  },
  {
    id: 'trading_043',
    category: 'meme',
    title: 'Meme社区忠诚度高',
    desc: '某Meme币经历多次暴跌但社区依然活跃，忠诚度极高。',
    choices: [
      { emoji: '💎', text: '长期持有', hint: '社区是护城河', isCorrect: true, effect: { wealthPct: 3.5 } },
      { emoji: '📤', text: '及时卖出', hint: '错过爆发', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '🎯', text: '短线操作', hint: '收益有限', isCorrect: false, effect: { wealthPct: 1.0 } },
      { emoji: '⛔', text: '不碰Meme', hint: '错过3.5倍', isCorrect: false, effect: { wealthPct: 0.3 } }
    ],
    explanation: '高忠诚度社区是Meme币的核心价值，长期持有往往有超额回报。'
  },
  {
    id: 'trading_044',
    category: 'timing',
    title: '链上大额转CEX',
    desc: '链上监测到大额BTC转入交易所，数量达5000枚。',
    choices: [
      { emoji: '🛡️', text: '减仓避险', hint: '可能砸盘', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '💎', text: '持仓不动', hint: '可能被砸', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '💰', text: '低位抄底', hint: '时机未知', isCorrect: false, effect: { wealthPct: -0.2 } },
      { emoji: '🩳', text: '做空对冲', hint: '不一定砸', isCorrect: false, effect: { wealthPct: -0.3 } }
    ],
    explanation: '大额转入交易所通常是出货前兆，减仓避险是保守选择。'
  },
  {
    id: 'trading_045',
    category: 'risk',
    title: 'DeFi复合收益热',
    desc: '多个DeFi协议推出可叠加的收益策略，APY诱人。',
    choices: [
      { emoji: '🔄', text: '复合投资', hint: '收益叠加', isCorrect: true, effect: { wealthPct: 2.1 } },
      { emoji: '⚡', text: 'all in复投', hint: '风险集中', isCorrect: false, effect: { wealthPct: -0.4 } },
      { emoji: '🚪', text: '不参与', hint: '错失收益', isCorrect: false, effect: { wealthPct: 0.3 } },
      { emoji: '🎯', text: '只选一个', hint: '收益单一', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '复合收益策略可以叠加收益，但需要分散风险避免单点故障。'
  },
  {
    id: 'trading_046',
    category: 'meme',
    title: 'Meme叙事末期',
    desc: '某Meme叙事已经持续3个月，热度开始衰退。',
    choices: [
      { emoji: '📤', text: '全部卖出', hint: '落袋为安', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '💎', text: '死拿到底', hint: '利润回撤', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '📉', text: '逢低加仓', hint: '接飞刀', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '⚖️', text: '减仓一半', hint: '不够果断', isCorrect: false, effect: { wealthPct: 1.3 } }
    ],
    explanation: '叙事末期及时清仓可以锁定利润，避免热度衰退后的利润回撤。'
  },
  {
    id: 'trading_047',
    category: 'leverage',
    title: '杠杆方向错误',
    desc: '你开的杠杆仓位与市场方向相反，已经亏损10%。',
    choices: [
      { emoji: '✂️', text: '立即平仓', hint: '止损保命', isCorrect: true, effect: { wealthPct: 0.9 } },
      { emoji: '🙏', text: '等回调', hint: '可能扩大亏损', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '⚡', text: '加仓拉均价', hint: '逆势加仓', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '🎰', text: '调到反向', hint: '追涨杀跌', isCorrect: false, effect: { wealthPct: -0.6 } }
    ],
    explanation: '方向错误时立即平仓是最小化损失的唯一正确选择。'
  },
  {
    id: 'trading_048',
    category: 'bluechip',
    title: '蓝筹解锁期临近',
    desc: '你持有的蓝筹币即将迎来大额代币解锁，占总供应5%。',
    choices: [
      { emoji: '🛡️', text: '提前减仓', hint: '回避抛压', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '💎', text: '持仓不动', hint: '可能下跌', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '💰', text: '解锁后抄底', hint: '时机难抓', isCorrect: false, effect: { wealthPct: -0.2 } },
      { emoji: '📉', text: '做空对冲', hint: '复杂操作', isCorrect: false, effect: { wealthPct: 0.3 } }
    ],
    explanation: '大额解锁前减仓可以回避抛压，等市场消化后再考虑。'
  },
  {
    id: 'trading_049',
    category: 'meme',
    title: 'Meme Dev露脸认证',
    desc: '某Meme币dev从匿名转为实名，身份背书强。',
    choices: [
      { emoji: '📈', text: '加仓但控制仓位', hint: '信任提升', isCorrect: true, effect: { wealthPct: 2.8 } },
      { emoji: '🚀', text: '重仓梭哈', hint: '仍有风险', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '⏸️', text: '观望', hint: '错失上涨', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '📤', text: '趁机卖出', hint: '卖飞', isCorrect: false, effect: { wealthPct: 0.8 } }
    ],
    explanation: 'Dev露脸增强了信任度，但Meme币仍有风险，加仓需控制仓位。'
  },
  {
    id: 'trading_050',
    category: 'timing',
    title: '市场过热RSI90',
    desc: '日线RSI达到90，进入极度超买区间。',
    choices: [
      { emoji: '📉', text: '分批减仓', hint: '回避回调', isCorrect: true, effect: { wealthPct: 2.2 } },
      { emoji: '🚀', text: 'FOMO加仓', hint: '高位接盘', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '💎', text: '持仓不动', hint: '回撤利润', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '🩳', text: '重仓做空', hint: '逆势危险', isCorrect: false, effect: { wealthPct: -0.6 } }
    ],
    explanation: 'RSI极度超买意味着短期风险积聚，分批减仓可以锁定利润。'
  }
,

  // ==================== 51-75: Meme时机变体 ====================
  {
    id: 'trading_051',
    category: 'meme',
    title: 'Meme币巨鲸出货',
    desc: '链上监测到持有10%供应量的巨鲸开始分批卖出。',
    choices: [
      { emoji: '🚨', text: '跟随卖出', hint: '鲸鱼先知', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '💎', text: '逆势持有', hint: '接飞刀', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '💰', text: '逢低加仓', hint: '高风险', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '🤷', text: '观望等待', hint: '错失逃顶', isCorrect: false, effect: { wealthPct: 0.4 } }
    ],
    explanation: '巨鲸出货通常是顶部信号，跟随操作可以避免被套。'
  },
  {
    id: 'trading_052',
    category: 'meme',
    title: 'Meme币CT热度飙升',
    desc: 'Crypto Twitter上关于某Meme币的讨论量暴增300%。',
    choices: [
      { emoji: '💰', text: '分批卖出', hint: '热度见顶', isCorrect: true, effect: { wealthPct: 2.5 } },
      { emoji: '🚀', text: '追高买入', hint: '山顶站岗', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '📊', text: '继续持有', hint: '可能回落', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '⛔', text: '做空热度', hint: '风险极高', isCorrect: false, effect: { wealthPct: -0.4 } }
    ],
    explanation: '社交媒体热度暴增往往是短期顶点，分批卖出锁定利润是明智选择。'
  },
  {
    id: 'trading_053',
    category: 'meme',
    title: 'Meme币合约升级',
    desc: '你持有的Meme币宣布合约升级，暂停交易一周。',
    choices: [
      { emoji: '🛡️', text: '提前卖出', hint: '回避不确定性', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '💎', text: '持有等待', hint: '升级风险', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '🔥', text: '升级前加仓', hint: '高不确定性', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '🤷', text: '部分卖出', hint: '中庸策略', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '合约升级期间存在不确定性，提前卖出可以回避潜在风险。'
  },
  {
    id: 'trading_054',
    category: 'meme',
    title: 'Meme币空投预期',
    desc: '某Meme项目宣布将对持有者进行代币空投。',
    choices: [
      { emoji: '💎', text: '持有快照前', hint: '获得空投', isCorrect: true, effect: { wealthPct: 2.2 } },
      { emoji: '📤', text: '快照前卖出', hint: '错失空投', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '💰', text: '快照后卖出', hint: '抛压大', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '🚀', text: '空投前加仓', hint: '高风险', isCorrect: false, effect: { wealthPct: -0.3 } }
    ],
    explanation: '持有至快照可以获得空投收益，同时享受快照前的炒作溢价。'
  },
  {
    id: 'trading_055',
    category: 'meme',
    title: 'Meme币销毁机制启动',
    desc: '某Meme币启动通缩销毁，每月销毁供应量的2%。',
    choices: [
      { emoji: '📈', text: '加仓长期持', hint: '通缩利好', isCorrect: true, effect: { wealthPct: 2.6 } },
      { emoji: '⏸️', text: '短期观望', hint: '错过上涨', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '💰', text: '利好落地卖', hint: '卖飞', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '🎯', text: '换仓其他', hint: '错过机会', isCorrect: false, effect: { wealthPct: 0.5 } }
    ],
    explanation: '通缩销毁机制长期利好币价，加仓持有可以分享通缩红利。'
  },
  {
    id: 'trading_056',
    category: 'meme',
    title: 'Meme币跨链桥开放',
    desc: '某Meme币从单链扩展至多链，流动性增加。',
    choices: [
      { emoji: '🌐', text: '加仓看多', hint: '流动性扩张', isCorrect: true, effect: { wealthPct: 2.3 } },
      { emoji: '⏸️', text: '等数据', hint: '错失早期', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '📤', text: '利好卖出', hint: '卖飞', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '⚠️', text: '担心安全', hint: '过于保守', isCorrect: false, effect: { wealthPct: 0.4 } }
    ],
    explanation: '跨链扩展增加流动性和可访问性，通常是利好，可以加仓参与。'
  },
  {
    id: 'trading_057',
    category: 'meme',
    title: 'Meme币KOL集体喊单',
    desc: '多个头部KOL同时推荐某Meme币，价格暴涨50%。',
    choices: [
      { emoji: '💰', text: '分批卖出', hint: '利好出尽', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '🚀', text: 'FOMO追入', hint: '高位接盘', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '💎', text: '继续持有', hint: '可能回落', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '🔥', text: '加仓追', hint: '危险', isCorrect: false, effect: { wealthPct: -0.6 } }
    ],
    explanation: 'KOL集体喊单往往是短期顶点，分批卖出可以避免被套。'
  },
  {
    id: 'trading_058',
    category: 'meme',
    title: 'Meme币CEX下架',
    desc: '某交易所宣布下架你持有的Meme币，价格暴跌30%。',
    choices: [
      { emoji: '✂️', text: '立即止损', hint: '减少损失', isCorrect: true, effect: { wealthPct: 0.7 } },
      { emoji: '💎', text: '死扛到底', hint: '可能归零', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '💰', text: '抄底加仓', hint: '高风险', isCorrect: false, effect: { wealthPct: -0.9 } },
      { emoji: '🤷', text: '等待转机', hint: '流动性枯竭', isCorrect: false, effect: { wealthPct: -0.5 } }
    ],
    explanation: '交易所下架意味着流动性枯竭，立即止损是唯一正确选择。'
  },
  {
    id: 'trading_059',
    category: 'meme',
    title: 'Meme币VC入场',
    desc: '某知名VC宣布投资某Meme币项目，金额达数百万。',
    choices: [
      { emoji: '📈', text: '跟随买入', hint: 'VC背书', isCorrect: true, effect: { wealthPct: 2.4 } },
      { emoji: '⏸️', text: '等回调', hint: '可能踏空', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '📤', text: '利好卖出', hint: '卖飞', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '⛔', text: '不碰VC币', hint: '错过机会', isCorrect: false, effect: { wealthPct: 0.2 } }
    ],
    explanation: '知名VC入场提供背书和流动性，跟随买入通常有较好收益。'
  },
  {
    id: 'trading_060',
    category: 'meme',
    title: 'Meme币质押功能上线',
    desc: '某Meme币推出质押功能，质押可获得额外代币奖励。',
    choices: [
      { emoji: '🏦', text: '质押持有', hint: '复利增长', isCorrect: true, effect: { wealthPct: 2.1 } },
      { emoji: '💎', text: '单纯持有', hint: '错过收益', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '📤', text: '利好卖出', hint: '卖飞', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '💰', text: '卖出奖励币', hint: '抛压', isCorrect: false, effect: { wealthPct: 0.7 } }
    ],
    explanation: '质押功能提供被动收益，质押持有可以获得复利增长。'
  },
  {
    id: 'trading_061',
    category: 'meme',
    title: 'Meme币地板横盘三个月',
    desc: '某Meme币在底部横盘整理三个月，波动率极低。',
    choices: [
      { emoji: '💰', text: '小额抄底', hint: '变盘在即', isCorrect: true, effect: { wealthPct: 3.2 } },
      { emoji: '⛔', text: '不碰死水', hint: '错过上涨', isCorrect: false, effect: { wealthPct: 0.3 } },
      { emoji: '🏛️', text: '换蓝筹', hint: '机会成本', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '🌊', text: '重仓买入', hint: '风险大', isCorrect: false, effect: { wealthPct: -0.4 } }
    ],
    explanation: '长期横盘后往往迎来变盘，小额抄底可以捕捉变盘机会。'
  },
  {
    id: 'trading_062',
    category: 'meme',
    title: 'Meme币捐赠营销',
    desc: '某Meme币团队宣布将部分资金捐赠给慈善机构进行营销。',
    choices: [
      { emoji: '💎', text: '继续持有', hint: '正面营销', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '📤', text: '卖出观望', hint: '可能踏空', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '🎯', text: '等效果', hint: '错失早期', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '⛔', text: '不认同慈善', hint: '错失', isCorrect: false, effect: { wealthPct: 0.3 } }
    ],
    explanation: '慈善营销提升项目形象，通常是正面利好，继续持有即可。'
  },
  {
    id: 'trading_063',
    category: 'meme',
    title: 'Meme币路线图延期',
    desc: '某Meme币团队宣布主要路线图延期三个月。',
    choices: [
      { emoji: '📤', text: '立即卖出', hint: '信心受损', isCorrect: true, effect: { wealthPct: 0.9 } },
      { emoji: '💎', text: '再给机会', hint: '团队执行力差', isCorrect: false, effect: { wealthPct: -0.4 } },
      { emoji: '🤷', text: '观望等待', hint: '浪费时间', isCorrect: false, effect: { wealthPct: 0.3 } },
      { emoji: '💰', text: '抄底加仓', hint: '高风险', isCorrect: false, effect: { wealthPct: -0.6 } }
    ],
    explanation: '路线图延期是执行力差的信号，及时卖出回避风险。'
  },
  {
    id: 'trading_064',
    category: 'meme',
    title: 'Meme币社区投票',
    desc: '某Meme币启动DAO投票，决定代币销毁比例。',
    choices: [
      { emoji: '🗳️', text: '参与投票持币', hint: '治理参与', isCorrect: true, effect: { wealthPct: 1.9 } },
      { emoji: '⏸️', text: '不参与只持', hint: '错过治理', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '📤', text: '投票前卖出', hint: '可能踏空', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '🤷', text: '不关心', hint: '治理冷淡', isCorrect: false, effect: { wealthPct: 0.6 } }
    ],
    explanation: '参与治理显示对项目的信心，同时享受投票期间的持币激励。'
  },
  {
    id: 'trading_065',
    category: 'meme',
    title: 'Meme币游戏生态',
    desc: '某Meme币宣布将开发游戏生态，增加代币效用。',
    choices: [
      { emoji: '📈', text: '加仓持有', hint: '效用提升', isCorrect: true, effect: { wealthPct: 2.3 } },
      { emoji: '⏸️', text: '等游戏上线', hint: '错失上涨', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '📤', text: '利好卖出', hint: '卖飞', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '⛔', text: '质疑执行', hint: '过于保守', isCorrect: false, effect: { wealthPct: 0.4 } }
    ],
    explanation: '游戏生态增加代币效用和需求，加仓持有可以分享增长。'
  },
  {
    id: 'trading_066',
    category: 'meme',
    title: 'Meme币LP撤池潮',
    desc: '某Meme币DEX流动性池出现撤池潮，TVL下降50%。',
    choices: [
      { emoji: '🚨', text: '紧急卖出', hint: '流动性危机', isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '💎', text: '相信项目', hint: '滑点巨大', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '🤷', text: '再观察下', hint: '错失逃顶', isCorrect: false, effect: { wealthPct: 0.2 } },
      { emoji: '💰', text: '逆势加仓', hint: '危险', isCorrect: false, effect: { wealthPct: -0.9 } }
    ],
    explanation: '流动性撤池意味着出货压力，紧急卖出是唯一正确选择。'
  },
  {
    id: 'trading_067',
    category: 'meme',
    title: 'Meme币被明星提及',
    desc: '某好莱坞明星在社交媒体提及某Meme币，价格瞬间上涨30%。',
    choices: [
      { emoji: '💰', text: '快速卖出', hint: '热度短暂', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '🚀', text: '继续追高', hint: '回落风险', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '💎', text: '持有等待', hint: '热度消退', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '📢', text: '帮宣传', hint: '无济于事', isCorrect: false, effect: { wealthPct: 0.4 } }
    ],
    explanation: '明星提及热度短暂，快速卖出可以锁定短期利润。'
  },
  {
    id: 'trading_068',
    category: 'meme',
    title: 'Meme币双链部署',
    desc: '某Meme币从ETH扩展到BSC链，增加潜在用户群。',
    choices: [
      { emoji: '🌉', text: '加仓布局', hint: '生态扩张', isCorrect: true, effect: { wealthPct: 2.1 } },
      { emoji: '⏸️', text: '观望数据', hint: '错失早期', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '📤', text: '利好出货', hint: '卖飞', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '⛔', text: '质疑多链', hint: '错失', isCorrect: false, effect: { wealthPct: 0.3 } }
    ],
    explanation: '双链部署扩大潜在用户群，加仓可以分享增长红利。'
  },
  {
    id: 'trading_069',
    category: 'meme',
    title: 'Meme币回购启动',
    desc: '某Meme币团队宣布用部分收入回购并销毁代币。',
    choices: [
      { emoji: '📈', text: '加仓持有', hint: '买盘增加', isCorrect: true, effect: { wealthPct: 2.4 } },
      { emoji: '⏸️', text: '等回购', hint: '错失上涨', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '📤', text: '利好卖出', hint: '卖飞', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '🤷', text: '怀疑真假', hint: '过于谨慎', isCorrect: false, effect: { wealthPct: 0.4 } }
    ],
    explanation: '回购销毁是实质性利好，加仓持有可以分享回购带来的价格上涨。'
  },
  {
    id: 'trading_070',
    category: 'meme',
    title: 'Meme币做市商退出',
    desc: '某Meme币主要做市商宣布退出，流动性大降。',
    choices: [
      { emoji: '✂️', text: '立即清仓', hint: '流动性枯竭', isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '💎', text: '继续持有', hint: '滑点巨大', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '🤷', text: '等待新MM', hint: '时间成本', isCorrect: false, effect: { wealthPct: -0.3 } },
      { emoji: '💰', text: '逢低加仓', hint: '危险', isCorrect: false, effect: { wealthPct: -0.9 } }
    ],
    explanation: '做市商退出意味着流动性枯竭，立即清仓是唯一正确选择。'
  },
  {
    id: 'trading_071',
    category: 'meme',
    title: 'Meme币NFT绑定',
    desc: '某Meme币推出NFT系列，持有NFT可获得代币空投。',
    choices: [
      { emoji: '🎨', text: '买入NFT持有', hint: '双重收益', isCorrect: true, effect: { wealthPct: 2.7 } },
      { emoji: '💎', text: '只持代币', hint: '错过NFT', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '⛔', text: '不参与', hint: '错失机会', isCorrect: false, effect: { wealthPct: 0.3 } },
      { emoji: '📤', text: '卖出代币', hint: '卖飞', isCorrect: false, effect: { wealthPct: 0.5 } }
    ],
    explanation: 'NFT绑定可以获得双重收益，买入NFT持有是最佳策略。'
  },
  {
    id: 'trading_072',
    category: 'meme',
    title: 'Meme币合作伙伴大所',
    desc: '某Meme币宣布与某二线交易所达成战略合作。',
    choices: [
      { emoji: '📈', text: '加仓持有', hint: '曝光增加', isCorrect: true, effect: { wealthPct: 1.9 } },
      { emoji: '⏸️', text: '等上大所', hint: '可能不来', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '📤', text: '利好卖出', hint: '卖飞', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '⛔', text: '二线无用', hint: '错过', isCorrect: false, effect: { wealthPct: 0.4 } }
    ],
    explanation: '交易所合作增加曝光和流动性，加仓持有是正确选择。'
  },
  {
    id: 'trading_073',
    category: 'meme',
    title: 'Meme币创始人被起诉',
    desc: '某Meme币创始人因证券欺诈被SEC起诉。',
    choices: [
      { emoji: '✂️', text: '不计成本卖出', hint: '法律风险', isCorrect: true, effect: { wealthPct: 0.5 } },
      { emoji: '💎', text: '相信无罪', hint: '可能归零', isCorrect: false, effect: { wealthPct: -0.9 } },
      { emoji: '🤷', text: '观望等待', hint: '错失逃顶', isCorrect: false, effect: { wealthPct: -0.4 } },
      { emoji: '💰', text: '抄底赌一把', hint: '极高风险', isCorrect: false, effect: { wealthPct: -0.95 } }
    ],
    explanation: '创始人被起诉是重大法律风险，不计成本卖出是保命选择。'
  },
  {
    id: 'trading_074',
    category: 'meme',
    title: 'Meme币上所预热',
    desc: '某Meme币官方暗示即将上线某一线交易所。',
    choices: [
      { emoji: '💎', text: '持有等官宣', hint: '预热期上涨', isCorrect: true, effect: { wealthPct: 2.3 } },
      { emoji: '📤', text: '利好兑现卖', hint: '可能踏空', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '🚀', text: '加仓追', hint: '可能假消息', isCorrect: false, effect: { wealthPct: -0.3 } },
      { emoji: '⛔', text: '不信谣言', hint: '错失机会', isCorrect: false, effect: { wealthPct: 0.2 } }
    ],
    explanation: '上所预热期往往有炒作行情，持有等官宣可以最大化收益。'
  },
  {
    id: 'trading_075',
    category: 'meme',
    title: 'Meme币钱包被盗',
    desc: '某Meme币团队钱包被黑，损失部分资金。',
    choices: [
      { emoji: '✂️', text: '立即卖出', hint: '信心危机', isCorrect: true, effect: { wealthPct: 0.7 } },
      { emoji: '💎', text: '相信补偿', hint: '可能归零', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '🤷', text: '等公告', hint: '错失逃顶', isCorrect: false, effect: { wealthPct: 0.2 } },
      { emoji: '💰', text: '抄底', hint: '危险', isCorrect: false, effect: { wealthPct: -0.9 } }
    ],
    explanation: '团队钱包被盗是重大安全事件，立即卖出回避风险。'
  },

  // ==================== 76-100: 杠杆控制风险 ====================
  {
    id: 'trading_076',
    category: 'leverage',
    title: '杠杆倍数选择',
    desc: '牛市主升浪，你准备开多，应该选择多少倍杠杆？',
    choices: [
      { emoji: '⚖️', text: '2-3x', hint: '风险可控', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '⚡', text: '10x', hint: '波动爆仓', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '🔥', text: '50x', hint: '瞬间爆仓', isCorrect: false, effect: { wealthPct: -0.95 } },
      { emoji: '⛔', text: '不用杠杆', hint: '收益有限', isCorrect: false, effect: { wealthPct: 1.3 } }
    ],
    explanation: '2-3x杠杆在牛市可以放大收益同时控制爆仓风险。'
  },
  {
    id: 'trading_077',
    category: 'leverage',
    title: '爆仓后心态',
    desc: '你的杠杆仓位刚刚爆仓，损失了30%本金。',
    choices: [
      { emoji: '🧘', text: '冷静分析', hint: '停止交易', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '⚡', text: '立即开新仓', hint: '情绪化交易', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '🔥', text: '加大杠杆翻本', hint: '赌徒心态', isCorrect: false, effect: { wealthPct: -0.95 } },
      { emoji: '🚪', text: '退出市场', hint: '过度反应', isCorrect: false, effect: { wealthPct: 0.5 } }
    ],
    explanation: '爆仓后应立即停止交易冷静分析，情绪化交易会加速亏损。'
  },
  {
    id: 'trading_078',
    category: 'leverage',
    title: '保证金不足',
    desc: '你的杠杆仓位保证金率降至20%，面临强平风险。',
    choices: [
      { emoji: '✂️', text: '主动减仓', hint: '降低风险', isCorrect: true, effect: { wealthPct: 0.9 } },
      { emoji: '💰', text: '追加保证金', hint: '可能继续跌', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '🙏', text: '祈祷反弹', hint: '被动等待', isCorrect: false, effect: { wealthPct: -0.9 } },
      { emoji: '⚡', text: '加仓赌反弹', hint: '危险', isCorrect: false, effect: { wealthPct: -0.95 } }
    ],
    explanation: '保证金不足时主动减仓是最佳选择，保留本金才能继续交易。'
  },
  {
    id: 'trading_079',
    category: 'leverage',
    title: '多空双开策略',
    desc: '市场横盘震荡，你考虑使用多空双开策略。',
    choices: [
      { emoji: '⛔', text: '不采用', hint: '资金费损耗', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '⚖️', text: '等仓位双开', hint: '互相抵消', isCorrect: false, effect: { wealthPct: 0.4 } },
      { emoji: '📊', text: '不等仓双开', hint: '单向风险', isCorrect: false, effect: { wealthPct: -0.3 } },
      { emoji: '🔥', text: '加资金费套利', hint: '复杂难控', isCorrect: false, effect: { wealthPct: -0.5 } }
    ],
    explanation: '多空双开会产生资金费损耗，震荡市不宜采用此策略。'
  },
  {
    id: 'trading_080',
    category: 'leverage',
    title: '插针行情应对',
    desc: '币价突然插针暴跌10%后迅速反弹，你的多仓接近爆仓。',
    choices: [
      { emoji: '🛡️', text: '降低杠杆度', hint: '防范再次插针', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '💰', text: '追加保证金', hint: '资金压力', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '✂️', text: '立即平仓', hint: '卖在反弹前', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '🙏', text: '不动等待', hint: '下次可能爆仓', isCorrect: false, effect: { wealthPct: -0.7 } }
    ],
    explanation: '插针行情后降低杠杆度可以防止再次插针爆仓，是最稳妥选择。'
  },
  {
    id: 'trading_081',
    category: 'leverage',
    title: '逐仓vs全仓',
    desc: '你准备开一个高杠杆短线仓位，应该选择什么模式？',
    choices: [
      { emoji: '📦', text: '逐仓模式', hint: '风险隔离', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '💼', text: '全仓模式', hint: '风险传染', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '⚖️', text: '混合模式', hint: '复杂难管', isCorrect: false, effect: { wealthPct: 0.3 } },
      { emoji: '🎰', text: '全仓高倍', hint: '极端危险', isCorrect: false, effect: { wealthPct: -0.95 } }
    ],
    explanation: '高杠杆短线使用逐仓模式可以隔离风险，避免影响其他资金。'
  },
  {
    id: 'trading_082',
    category: 'leverage',
    title: '止盈止损设置',
    desc: '你开了3x杠杆多仓，应该如何设置止盈止损？',
    choices: [
      { emoji: '🎯', text: '止盈30%止损10%', hint: '盈亏比3:1', isCorrect: true, effect: { wealthPct: 2.2 } },
      { emoji: '🚀', text: '不止盈止损', hint: '风险暴露', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '✂️', text: '止盈10%止损5%', hint: '盈亏比不足', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '🔥', text: '止盈100%不设损', hint: '可能归零', isCorrect: false, effect: { wealthPct: -0.9 } }
    ],
    explanation: '3x杠杆应设置3:1盈亏比，止盈30%止损10%是合理选择。'
  },
  {
    id: 'trading_083',
    category: 'leverage',
    title: '融资利率套利',
    desc: '某平台资金费率为-0.1%，另一平台为+0.05%。',
    choices: [
      { emoji: '💰', text: '正费率平台空+负费率平台多', hint: '套利策略', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '📊', text: '只在负费率平台做多', hint: '单边风险', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '🚀', text: '在两个平台都做多', hint: '资金费损耗', isCorrect: false, effect: { wealthPct: -0.3 } },
      { emoji: '⛔', text: '不参与', hint: '错失无风险收益', isCorrect: false, effect: { wealthPct: 0.5 } }
    ],
    explanation: '跨平台资金费率差异可以套利，同时锁定两边资金费收益。'
  },
  {
    id: 'trading_084',
    category: 'leverage',
    title: '杠杆仓位过夜',
    desc: '周末市场波动小，你考虑是否让杠杆仓位过夜。',
    choices: [
      { emoji: '🏠', text: '减仓过夜', hint: '降低风险', isCorrect: true, effect: { wealthPct: 1.1 } },
      { emoji: '💤', text: '满仓过夜', hint: '黑天鹅风险', isCorrect: false, effect: { wealthPct: -0.4 } },
      { emoji: '📈', text: '加仓周末', hint: '流动性不足', isCorrect: false, effect: { wealthPct: -0.3 } },
      { emoji: '🚪', text: '全部平仓', hint: '错失周一行情', isCorrect: false, effect: { wealthPct: 0.7 } }
    ],
    explanation: '杠杆仓位过夜有黑天鹅风险，减仓降低风险是明智选择。'
  },
  {
    id: 'trading_085',
    category: 'leverage',
    title: '平台风险',
    desc: '你使用的杠杆交易所出现提现延迟。',
    choices: [
      { emoji: '🚨', text: '立即平仓提币', hint: '回避风险', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '💎', text: '继续使用', hint: '平台风险', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '🤷', text: '再等等看', hint: '错失逃顶', isCorrect: false, effect: { wealthPct: 0.2 } },
      { emoji: '💰', text: '趁机抄底', hint: '危险', isCorrect: false, effect: { wealthPct: -0.8 } }
    ],
    explanation: '交易所出现提现延迟是重大风险信号，立即平仓提币是保命选择。'
  },
  {
    id: 'trading_086',
    category: 'leverage',
    title: '开空时机选择',
    desc: '市场连续上涨一个月后出现疲态，你考虑开空。',
    choices: [
      { emoji: '👀', text: '等待确认信号', hint: '避免逆势', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '🩳', text: '立即开空', hint: '可能继续上涨', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '⚡', text: '重仓做空', hint: '极高风险', isCorrect: false, effect: { wealthPct: -0.9 } },
      { emoji: '📈', text: '继续做多', hint: '趋势末期', isCorrect: false, effect: { wealthPct: 0.3 } }
    ],
    explanation: '做空需要等待确认信号，过早做空会被趋势碾压。'
  },
  {
    id: 'trading_087',
    category: 'leverage',
    title: '追加保证金的诱惑',
    desc: '你的仓位亏损40%，平台提示追加保证金可以避免爆仓。',
    choices: [
      { emoji: '✂️', text: '不追加止损', hint: '截断亏损', isCorrect: true, effect: { wealthPct: 0.6 } },
      { emoji: '💰', text: '追加再搏', hint: '可能扩大亏损', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '🔥', text: '加倍追加', hint: '赌徒心态', isCorrect: false, effect: { wealthPct: -0.95 } },
      { emoji: '🙏', text: '等待奇迹', hint: '被动爆仓', isCorrect: false, effect: { wealthPct: -0.9 } }
    ],
    explanation: '亏损40%后追加保证金是赌徒心态，及时止损才是正确选择。'
  },
  {
    id: 'trading_088',
    category: 'leverage',
    title: '杠杆现货结合',
    desc: '你持有现货BTC，考虑是否用杠杆对冲。',
    choices: [
      { emoji: '⚖️', text: '小杠杆对冲部分', hint: '风险管理', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '🩳', text: '全对冲', hint: '失去上涨收益', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '🚀', text: '不对冲加多', hint: '双重风险', isCorrect: false, effect: { wealthPct: -0.4 } },
      { emoji: '📤', text: '卖现货开杠杆', hint: '舍本逐末', isCorrect: false, effect: { wealthPct: 0.3 } }
    ],
    explanation: '小杠杆对冲部分仓位可以管理风险同时保留上涨收益。'
  },
  {
    id: 'trading_089',
    category: 'leverage',
    title: '杠杆平台选择',
    desc: '多个杠杆平台提供不同费率和服务，你该如何选择？',
    choices: [
      { emoji: '🏛️', text: '选头部大平台', hint: '安全优先', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '💸', text: '选费率最低', hint: '安全风险', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '🎁', text: '选活动最多', hint: '羊毛陷阱', isCorrect: false, effect: { wealthPct: -0.3 } },
      { emoji: '⚡', text: '选杠杆最高', hint: '爆仓风险', isCorrect: false, effect: { wealthPct: -0.8 } }
    ],
    explanation: '杠杆交易安全优先，选择头部大平台可以避免跑路风险。'
  },
  {
    id: 'trading_090',
    category: 'leverage',
    title: '连续止损后',
    desc: '你连续三次止损，心态开始失衡。',
    choices: [
      { emoji: '🛑', text: '停止交易', hint: '冷静复盘', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '⚡', text: '开大单翻本', hint: '情绪化交易', isCorrect: false, effect: { wealthPct: -0.9 } },
      { emoji: '🔥', text: '提高杠杆', hint: '加速亏损', isCorrect: false, effect: { wealthPct: -0.95 } },
      { emoji: '📉', text: '反向操作', hint: '赌气交易', isCorrect: false, effect: { wealthPct: -0.6 } }
    ],
    explanation: '连续止损后应停止交易冷静复盘，情绪化交易会加速亏损。'
  },
  {
    id: 'trading_091',
    category: 'leverage',
    title: '高杠杆盈利后',
    desc: '你用10x杠杆做多赚了50%，是否应该继续持有？',
    choices: [
      { emoji: '💰', text: '立即平仓', hint: '落袋为安', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '🚀', text: '继续持有', hint: '可能回落', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '⚡', text: '加仓继续', hint: '风险累积', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '⚖️', text: '降杠杆持有', hint: '保留部分', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '高杠杆盈利后应立即平仓，高倍杠杆不宜长期持有。'
  },
  {
    id: 'trading_092',
    category: 'leverage',
    title: '移动止损策略',
    desc: '你的杠杆多仓已盈利20%，应该如何管理？',
    choices: [
      { emoji: '⬆️', text: '上移止损保本', hint: '保护利润', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '💎', text: '不动止损', hint: '可能回撤', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '📊', text: '提高止盈', hint: '贪婪风险', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '⚡', text: '加仓拉均价', hint: '风险累积', isCorrect: false, effect: { wealthPct: -0.4 } }
    ],
    explanation: '盈利后上移止损至保本位可以保护利润同时保留上涨空间。'
  },
  {
    id: 'trading_093',
    category: 'leverage',
    title: '杠杆资金分配',
    desc: '你有10000 USDT，准备用于杠杆交易，应该如何分配？',
    choices: [
      { emoji: '⚖️', text: '分5次2000', hint: '风险控制', isCorrect: true, effect: { wealthPct: 1.6 } },
      { emoji: '🌊', text: '一次梭哈', hint: '全或无', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '💧', text: '分20次500', hint: '过于分散', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '🎰', text: '全仓100x', hint: '必爆仓', isCorrect: false, effect: { wealthPct: -0.99 } }
    ],
    explanation: '杠杆资金应分批使用，单仓不宜过大，分5次2000是合理分配。'
  },
  {
    id: 'trading_094',
    category: 'leverage',
    title: '周末杠杆风险',
    desc: '周五晚上，你考虑是否保留杠杆仓位过周末。',
    choices: [
      { emoji: '🏠', text: '减仓过节', hint: '防范黑天鹅', isCorrect: true, effect: { wealthPct: 1.1 } },
      { emoji: '💤', text: '满仓周末', hint: '流动性风险', isCorrect: false, effect: { wealthPct: -0.4 } },
      { emoji: '📈', text: '加仓赌周一', hint: '不确定性', isCorrect: false, effect: { wealthPct: -0.3 } },
      { emoji: '📊', text: '设好止损持有', hint: '仍有风险', isCorrect: false, effect: { wealthPct: 0.7 } }
    ],
    explanation: '周末流动性低，减仓过节可以防范黑天鹅事件。'
  },
  {
    id: 'trading_095',
    category: 'leverage',
    title: '杠杆清仓顺序',
    desc: '你有多个杠杆仓位，部分盈利部分亏损，应该先平哪个？',
    choices: [
      { emoji: '✂️', text: '先平亏损仓', hint: '截断亏损', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '💰', text: '先平盈利仓', hint: '截断利润', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '⚖️', text: '同时平', hint: '执行难度', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '📊', text: '不平再等等', hint: '风险累积', isCorrect: false, effect: { wealthPct: -0.4 } }
    ],
    explanation: '应先平亏损仓位截断亏损，让盈利仓位继续奔跑。'
  },
  {
    id: 'trading_096',
    category: 'leverage',
    title: '高波动行情杠杆',
    desc: '市场波动率飙升，日内振幅达15%，是否使用杠杆？',
    choices: [
      { emoji: '⛔', text: '不使用', hint: '安全第一', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '⚡', text: '小杠杆试试', hint: '仍可能爆仓', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '🔥', text: '高杠杆搏', hint: '几乎必爆', isCorrect: false, effect: { wealthPct: -0.95 } },
      { emoji: '🎯', text: '做波段', hint: '高难度', isCorrect: false, effect: { wealthPct: -0.3 } }
    ],
    explanation: '高波动行情不应使用杠杆，否则极易爆仓。'
  },
  {
    id: 'trading_097',
    category: 'leverage',
    title: '杠杆加仓时机',
    desc: '你的杠杆多仓浮盈10%，是否应该加仓？',
    choices: [
      { emoji: '⏸️', text: '不加仓', hint: '锁定利润', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '⚡', text: '金字塔加仓', hint: '风险累积', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '🔥', text: '等额加仓', hint: '提高风险', isCorrect: false, effect: { wealthPct: -0.4 } },
      { emoji: '🌊', text: '倒金字塔加仓', hint: '危险', isCorrect: false, effect: { wealthPct: -0.8 } }
    ],
    explanation: '杠杆浮盈时不宜加仓，锁定利润比扩大风险更重要。'
  },
  {
    id: 'trading_098',
    category: 'leverage',
    title: '杠杆换仓',
    desc: '你的杠杆仓位被套20%，另一品种出现更好机会。',
    choices: [
      { emoji: '✂️', text: '止损换仓', hint: '优化配置', isCorrect: true, effect: { wealthPct: 1.1 } },
      { emoji: '💎', text: '死扛原仓', hint: '机会成本', isCorrect: false, effect: { wealthPct: 0.4 } },
      { emoji: '💰', text: '开新仓不减旧', hint: '双重风险', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '🎰', text: '新仓高杠杆', hint: '加速亏损', isCorrect: false, effect: { wealthPct: -0.9 } }
    ],
    explanation: '及时止损换仓可以优化资金配置，死扛原仓的机会成本太高。'
  },
  {
    id: 'trading_099',
    category: 'leverage',
    title: '杠杆盈利提取',
    desc: '你的杠杆账户盈利翻倍，应该如何处理利润？',
    choices: [
      { emoji: '💰', text: '提取本金+部分利润', hint: '落袋为安', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '🚀', text: '全部复投', hint: '风险累积', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '⚡', text: '提取利润加杠杆', hint: '激进策略', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '⛔', text: '全部提取', hint: '停止交易', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '杠杆盈利应提取本金和部分利润，保留种子资金，复投风险过大。'
  },
  {
    id: 'trading_100',
    category: 'leverage',
    title: '杠杆交易频率',
    desc: '你最近每天开5-10次杠杆单，频繁交易。',
    choices: [
      { emoji: '🛑', text: '降低频率', hint: '减少损耗', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '⚡', text: '继续高频', hint: '手续费损耗', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '🔥', text: '更加激进', hint: '加速亏损', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '🎯', text: '量化交易', hint: '技术门槛', isCorrect: false, effect: { wealthPct: 0.2 } }
    ],
    explanation: '频繁交易会产生大量手续费和滑点损耗，应降低频率提高胜率。'
  },

  // ==================== 101-125: 蓝筹轮动策略 ====================
  {
    id: 'trading_101',
    category: 'bluechip',
    title: 'BTC/ETH汇率失衡',
    desc: 'ETH/BTC汇率跌至历史低位，ETH相对低估。',
    choices: [
      { emoji: '🔄', text: '换仓ETH', hint: '均值回归', isCorrect: true, effect: { wealthPct: 2.2 } },
      { emoji: '👑', text: '坚守BTC', hint: '跑输机会', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '⚖️', text: '保持比例', hint: '平庸收益', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '🚀', text: '全仓ETH', hint: '集中风险', isCorrect: false, effect: { wealthPct: 0.5 } }
    ],
    explanation: '汇率历史低位时换仓低估资产，等待均值回归。'
  },
  {
    id: 'trading_102',
    category: 'bluechip',
    title: 'ETH质押收益新高',
    desc: 'ETH质押年化收益升至6%，创近期新高。',
    choices: [
      { emoji: '🏦', text: '加仓质押ETH', hint: '稳健收益', isCorrect: true, effect: { wealthPct: 1.9 } },
      { emoji: '📤', text: '卖出获利', hint: '错失收益', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '⏸️', text: '持币不质押', hint: '浪费收益', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '💰', text: '买其他PoS币', hint: '偏离主线', isCorrect: false, effect: { wealthPct: 0.5 } }
    ],
    explanation: '质押收益新高时加仓质押可以获得稳定被动收入。'
  },
  {
    id: 'trading_103',
    category: 'bluechip',
    title: 'BTC减半前布局',
    desc: '距离BTC减半还有3个月，市场开始预热。',
    choices: [
      { emoji: '📅', text: '提前3个月建仓', hint: '历史规律', isCorrect: true, effect: { wealthPct: 2.5 } },
      { emoji: '⏸️', text: '等减半前1周', hint: '可能踏空', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '📤', text: '减半前卖出', hint: '逆势操作', isCorrect: false, effect: { wealthPct: -0.3 } },
      { emoji: '🤷', text: '不参与', hint: '错失行情', isCorrect: false, effect: { wealthPct: 0.2 } }
    ],
    explanation: 'BTC减半前3个月建仓是历史有效策略，可以享受预热行情。'
  },
  {
    id: 'trading_104',
    category: 'bluechip',
    title: 'ETF获批预期',
    desc: '市场传闻ETH现货ETF即将获批。',
    choices: [
      { emoji: '💎', text: '提前布局ETH', hint: '抢跑预期', isCorrect: true, effect: { wealthPct: 2.8 } },
      { emoji: '⏸️', text: '等官宣再入', hint: '可能踏空', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '📤', text: '利好兑现卖', hint: '卖飞', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '👑', text: '只买BTC', hint: '错过ETH', isCorrect: false, effect: { wealthPct: 0.6 } }
    ],
    explanation: 'ETF预期提前反应，提前布局ETH可以获得抢跑收益。'
  },
  {
    id: 'trading_105',
    category: 'bluechip',
    title: '蓝筹币回购公告',
    desc: '某蓝筹项目宣布启动5000万美元代币回购计划。',
    choices: [
      { emoji: '📈', text: '加仓持有', hint: '买盘支撑', isCorrect: true, effect: { wealthPct: 2.1 } },
      { emoji: '⏸️', text: '等回购开始', hint: '错失上涨', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '💰', text: '回购后卖出', hint: '抛压', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '📤', text: '利好兑现走', hint: '卖飞', isCorrect: false, effect: { wealthPct: 0.5 } }
    ],
    explanation: '回购公告意味着买盘支撑，加仓持有可以享受回购红利。'
  },
  {
    id: 'trading_106',
    category: 'bluechip',
    title: '蓝筹币技术升级',
    desc: '某蓝筹公链即将进行重大技术升级，提升性能10倍。',
    choices: [
      { emoji: '📈', text: '升级前加仓', hint: '预期炒作', isCorrect: true, effect: { wealthPct: 2.3 } },
      { emoji: '⏸️', text: '等升级后', hint: '错失上涨', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '💻', text: '测试后再说', hint: '过于保守', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '📤', text: '担心风险卖', hint: '卖飞', isCorrect: false, effect: { wealthPct: 0.4 } }
    ],
    explanation: '重大升级前通常有预期炒作，提前加仓可以获得溢价。'
  },
  {
    id: 'trading_107',
    category: 'bluechip',
    title: '机构大额持仓披露',
    desc: '某知名机构披露持有5亿美元某蓝筹币。',
    choices: [
      { emoji: '🏛️', text: '跟随机构买入', hint: '机构背书', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '⏸️', text: '等等回调', hint: '可能不来', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '📤', text: '机构出货砸盘', hint: '误解', isCorrect: false, effect: { wealthPct: -0.3 } },
      { emoji: '🤷', text: '不跟风', hint: '错失机会', isCorrect: false, effect: { wealthPct: 0.4 } }
    ],
    explanation: '机构大额持仓是长期看好信号，跟随买入可以获得稳健收益。'
  },
  {
    id: 'trading_108',
    category: 'bluechip',
    title: '蓝筹币遭遇监管',
    desc: '某蓝筹币被某国监管机构点名调查。',
    choices: [
      { emoji: '🛡️', text: '减仓避险', hint: '不确定性', isCorrect: true, effect: { wealthPct: 0.9 } },
      { emoji: '💎', text: '长期持有', hint: '短期冲击', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '📉', text: '恐慌清仓', hint: '可能反弹', isCorrect: false, effect: { wealthPct: 0.3 } },
      { emoji: '💰', text: '抄底加仓', hint: '高风险', isCorrect: false, effect: { wealthPct: -0.5 } }
    ],
    explanation: '监管不确定性下减仓避险是保守选择，等明朗后再考虑。'
  },
  {
    id: 'trading_109',
    category: 'bluechip',
    title: '蓝筹币流动性危机',
    desc: '某蓝筹币大做市商退出，流动性骤降50%。',
    choices: [
      { emoji: '🚨', text: '立即减仓', hint: '滑点风险', isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '💎', text: '持有等待', hint: '交易困难', isCorrect: false, effect: { wealthPct: -0.4 } },
      { emoji: '💰', text: '抄底等MM', hint: '不确定', isCorrect: false, effect: { wealthPct: -0.3 } },
      { emoji: '🤷', text: '观望', hint: '错失时机', isCorrect: false, effect: { wealthPct: -0.2 } }
    ],
    explanation: '流动性危机时减仓避免滑点损失，等流动性恢复后再考虑。'
  },
  {
    id: 'trading_110',
    category: 'bluechip',
    title: '蓝筹币季度财报',
    desc: '某蓝筹项目季度收入创新高，代币价格横盘。',
    choices: [
      { emoji: '📈', text: '财报后买入', hint: '业绩支撑', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '⏸️', text: '再等等', hint: '错失低点', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '📤', text: '利好兑现卖', hint: '错误判断', isCorrect: false, effect: { wealthPct: 0.4 } },
      { emoji: '🤷', text: '不关心', hint: '错失机会', isCorrect: false, effect: { wealthPct: 0.3 } }
    ],
    explanation: '业绩创新高而价格横盘是买入机会，业绩支撑下价格有望上涨。'
  },
  {
    id: 'trading_111',
    category: 'bluechip',
    title: '蓝筹币生态爆发',
    desc: '某蓝筹公链上的DeFi/NFT生态TVL暴增200%。',
    choices: [
      { emoji: '🌐', text: '加仓公链币', hint: '生态红利', isCorrect: true, effect: { wealthPct: 2.6 } },
      { emoji: '💰', text: '买生态代币', hint: '个股风险', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '⏸️', text: '观望数据', hint: '错失上涨', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '📤', text: '公链币卖出', hint: '卖飞', isCorrect: false, effect: { wealthPct: 0.4 } }
    ],
    explanation: '生态爆发期加仓公链币可以分享整个生态的增长红利。'
  },
  {
    id: 'trading_112',
    category: 'bluechip',
    title: '蓝筹币分叉争议',
    desc: '社区就是否进行硬分叉产生激烈争议。',
    choices: [
      { emoji: '🛡️', text: '减仓观望', hint: '不确定性', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '💎', text: '支持主链', hint: '站队风险', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '🔀', text: '分叉前买入', hint: '空投预期', isCorrect: false, effect: { wealthPct: -0.3 } },
      { emoji: '🤷', text: '无视争议', hint: '可能受损', isCorrect: false, effect: { wealthPct: 0.4 } }
    ],
    explanation: '分叉争议期间减仓观望是安全选择，等结果明朗后再决定。'
  },
  {
    id: 'trading_113',
    category: 'bluechip',
    title: '蓝筹币质押解锁',
    desc: '大量质押的蓝筹币即将解锁，可能产生抛压。',
    choices: [
      { emoji: '📉', text: '解锁前减仓', hint: '回避抛压', isCorrect: true, effect: { wealthPct: 1.1 } },
      { emoji: '💎', text: '持有不动', hint: '可能下跌', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '💰', text: '解锁后抄底', hint: '时机难抓', isCorrect: false, effect: { wealthPct: -0.2 } },
      { emoji: '🏦', text: '也去质押', hint: '增加抛压', isCorrect: false, effect: { wealthPct: 0.4 } }
    ],
    explanation: '大额解锁前减仓可以回避抛压，等市场消化后再考虑。'
  },
  {
    id: 'trading_114',
    category: 'bluechip',
    title: '蓝筹币新功能上线',
    desc: '某蓝筹币推出L2扩容方案，Gas费降低90%。',
    choices: [
      { emoji: '🚀', text: '功能前加仓', hint: '预期炒作', isCorrect: true, effect: { wealthPct: 2.4 } },
      { emoji: '⏸️', text: '等上线后看', hint: '错失上涨', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '💻', text: '测试后再说', hint: '过于保守', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '📤', text: '担心BUG卖', hint: '卖飞', isCorrect: false, effect: { wealthPct: 0.3 } }
    ],
    explanation: '重大功能上线前加仓可以享受预期炒作带来的溢价。'
  },
  {
    id: 'trading_115',
    category: 'bluechip',
    title: '蓝筹币巨鲸动向',
    desc: '某巨鲸地址持续从交易所提取某蓝筹币，已提走1亿美元。',
    choices: [
      { emoji: '💎', text: '跟随囤币', hint: '巨鲸看涨', isCorrect: true, effect: { wealthPct: 2.2 } },
      { emoji: '⏸️', text: '观望不动', hint: '错失机会', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '📤', text: '巨鲸要砸盘', hint: '误解', isCorrect: false, effect: { wealthPct: -0.3 } },
      { emoji: '💰', text: '等回调买', hint: '可能不回调', isCorrect: false, effect: { wealthPct: 0.5 } }
    ],
    explanation: '巨鲸持续从交易所提币是看涨信号，跟随囤币通常有较好收益。'
  },
  {
    id: 'trading_116',
    category: 'bluechip',
    title: '蓝筹币竞争加剧',
    desc: '某新兴公链崛起，市场份额从老牌蓝筹抢夺。',
    choices: [
      { emoji: '🔄', text: '换仓新兴公链', hint: '趋势转换', isCorrect: true, effect: { wealthPct: 2.5 } },
      { emoji: '💎', text: '坚守老牌', hint: '份额流失', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '⚖️', text: '两边都持', hint: '收益分散', isCorrect: false, effect: { wealthPct: 1.3 } },
      { emoji: '⏸️', text: '观望竞争', hint: '错失早期', isCorrect: false, effect: { wealthPct: 0.6 } }
    ],
    explanation: '竞争格局变化时应跟随趋势换仓新兴龙头，避免坚守过时标的。'
  },
  {
    id: 'trading_117',
    category: 'bluechip',
    title: '蓝筹币治理投票',
    desc: '某蓝筹币重大治理提案投票中，结果将决定代币经济模型。',
    choices: [
      { emoji: '🗳️', text: '参与投票持币', hint: '治理权+预期', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '💎', text: '只持币不参与', hint: '放弃治理', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '📤', text: '投票前卖出', hint: '错过结果', isCorrect: false, effect: { wealthPct: 0.4 } },
      { emoji: '🤷', text: '不关心治理', hint: '被动接受', isCorrect: false, effect: { wealthPct: 0.5 } }
    ],
    explanation: '参与治理投票显示长期承诺，同时享受治理期间的持币激励。'
  },
  {
    id: 'trading_118',
    category: 'bluechip',
    title: '蓝筹币通胀调整',
    desc: '某蓝筹币社区提案将通胀率从10%降至5%。',
    choices: [
      { emoji: '📈', text: '提案通过前买入', hint: '通缩预期', isCorrect: true, effect: { wealthPct: 2.3 } },
      { emoji: '⏸️', text: '等通过后看', hint: '错失上涨', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '📤', text: '通缩不卖', hint: '错误', isCorrect: false, effect: { wealthPct: 0.4 } },
      { emoji: '💰', text: '买高通胀币', hint: '反向', isCorrect: false, effect: { wealthPct: -0.2 } }
    ],
    explanation: '通胀减半是实质性利好，提案通过前买入可以享受预期炒作。'
  },
  {
    id: 'trading_119',
    category: 'bluechip',
    title: '蓝筹币合作伙伴',
    desc: '某蓝筹币与Fortune 500公司达成战略合作。',
    choices: [
      { emoji: '📈', text: '公告后加仓', hint: '传统背书', isCorrect: true, effect: { wealthPct: 2.1 } },
      { emoji: '⏸️', text: '等合作效果', hint: '错失上涨', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '📤', text: '利好兑现卖', hint: '卖飞', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '🤷', text: '不看好传统', hint: '错失', isCorrect: false, effect: { wealthPct: 0.3 } }
    ],
    explanation: '与传统大公司合作是重要背书，加仓持有可以分享合作红利。'
  },
  {
    id: 'trading_120',
    category: 'bluechip',
    title: '蓝筹币安全审计',
    desc: '某蓝筹币核心合约被顶级安全公司发现高危漏洞。',
    choices: [
      { emoji: '✂️', text: '立即减仓', hint: '安全优先', isCorrect: true, effect: { wealthPct: 0.9 } },
      { emoji: '💎', text: '相信修复', hint: '可能恶化', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '🤷', text: '等官方回应', hint: '错失逃顶', isCorrect: false, effect: { wealthPct: 0.2 } },
      { emoji: '💰', text: '抄底赌修复', hint: '危险', isCorrect: false, effect: { wealthPct: -0.8 } }
    ],
    explanation: '高危漏洞发现后减仓是最安全选择，等修复确认后再考虑。'
  },
  {
    id: 'trading_121',
    category: 'bluechip',
    title: '蓝筹币机构投资者减持',
    desc: '某机构投资者披露减持某蓝筹币持仓30%。',
    choices: [
      { emoji: '🛡️', text: '跟随减仓', hint: '机构动向', isCorrect: true, effect: { wealthPct: 1.1 } },
      { emoji: '💎', text: '机构不懂币', hint: '可能下跌', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '💰', text: '抄底加仓', hint: '逆势', isCorrect: false, effect: { wealthPct: -0.4 } },
      { emoji: '🤷', text: '无视减持', hint: '被动承受', isCorrect: false, effect: { wealthPct: 0.6 } }
    ],
    explanation: '机构减持可能是看空信号，跟随减仓是保守选择。'
  },
  {
    id: 'trading_122',
    category: 'bluechip',
    title: '蓝筹币新应用场景',
    desc: '某蓝筹币宣布进入RWA（真实世界资产）领域。',
    choices: [
      { emoji: '🏛️', text: '应用场景前加仓', hint: '新增叙事', isCorrect: true, effect: { wealthPct: 2.4 } },
      { emoji: '⏸️', text: '等落地再看', hint: '错失上涨', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '📤', text: '纯炒作卖出', hint: '卖飞', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '⛔', text: 'RWA不看好', hint: '错失', isCorrect: false, effect: { wealthPct: 0.2 } }
    ],
    explanation: '新增RWA应用场景带来新叙事，加仓可以分享叙事红利。'
  },
  {
    id: 'trading_123',
    category: 'bluechip',
    title: '蓝筹币网络拥堵',
    desc: '某蓝筹币网络Gas费飙升至历史高位，交易拥堵。',
    choices: [
      { emoji: '🛡️', text: '暂时回避', hint: '使用成本', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '💎', text: '说明需求大', hint: '可能持续', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '💰', text: '币价会涨', hint: '不确定', isCorrect: false, effect: { wealthPct: 0.4 } },
      { emoji: '📉', text: '说明要跌', hint: '错误判断', isCorrect: false, effect: { wealthPct: -0.2 } }
    ],
    explanation: '网络拥堵导致使用成本上升，暂时回避等待解决是明智选择。'
  },
  {
    id: 'trading_124',
    category: 'bluechip',
    title: '蓝筹币国库多元化',
    desc: '某蓝筹项目决定将国库BTC储备多元化至ETH。',
    choices: [
      { emoji: '🔄', text: '跟随配置ETH', hint: '机构配置', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '👑', text: '坚守BTC', hint: '错过ETH', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '⚖️', text: '原比例不动', hint: '平庸', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '📤', text: '卖出观望', hint: '过于保守', isCorrect: false, effect: { wealthPct: 0.4 } }
    ],
    explanation: '机构国库多元化配置是长期趋势，跟随配置可以获得稳健收益。'
  },
  {
    id: 'trading_125',
    category: 'bluechip',
    title: '蓝筹币技术护城河',
    desc: '某新兴公链宣称技术超越老牌蓝筹，市场热议。',
    choices: [
      { emoji: '💎', text: '坚守老牌蓝筹', hint: '网络效应', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '🔄', text: '换仓新公链', hint: '技术风险', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '⚖️', text: '两边都持', hint: '收益分散', isCorrect: false, effect: { wealthPct: 1.1 } },
      { emoji: '⏸️', text: '观望谁赢', hint: '错失早期', isCorrect: false, effect: { wealthPct: 0.6 } }
    ],
    explanation: '网络效应和生态护城河更重要，老牌蓝筹通常能抵御技术挑战。'
  },

  // ==================== 126-150: 热点与轮动策略 ====================
  {
    id: 'trading_126',
    category: 'timing',
    title: '热点板块轮动',
    desc: 'AI板块热度消退，资金开始流入DeFi板块。',
    choices: [
      { emoji: '🔄', text: '轮动到DeFi', hint: '跟随资金', isCorrect: true, effect: { wealthPct: 2.6 } },
      { emoji: '💎', text: '坚守AI', hint: '资金流失', isCorrect: false, effect: { wealthPct: -0.4 } },
      { emoji: '⚖️', text: '两边都持', hint: '收益分散', isCorrect: false, effect: { wealthPct: 1.2 } },
      { emoji: '📤', text: '全部清仓', hint: '踏空DeFi', isCorrect: false, effect: { wealthPct: 0.5 } }
    ],
    explanation: '板块轮动时及时跟随资金可以获得更高收益，坚守过时板块会失血。'
  },
  {
    id: 'trading_127',
    category: 'timing',
    title: '概念炒作初期',
    desc: '某新概念（如RWA）刚刚兴起，龙头项目开始上涨。',
    choices: [
      { emoji: '🚀', text: '买入龙头', hint: '早期红利', isCorrect: true, effect: { wealthPct: 3.0 } },
      { emoji: '⏸️', text: '等更多项目', hint: '错失早期', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '💰', text: '买相关小币', hint: '个股风险', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '⛔', text: '不追新概念', hint: '错过3倍', isCorrect: false, effect: { wealthPct: 0.3 } }
    ],
    explanation: '新概念炒作初期买入龙头可以获得早期红利，是最佳参与时机。'
  },
  {
    id: 'trading_128',
    category: 'timing',
    title: '概念炒作末期',
    desc: '某概念已经炒作3个月，所有相关币都已大涨。',
    choices: [
      { emoji: '📤', text: '全部卖出', hint: '落袋为安', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '💎', text: '长期持有', hint: '利润回撤', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '📉', text: '逢低加仓', hint: '接飞刀', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '🎯', text: '换其他概念', hint: '轮动风险', isCorrect: false, effect: { wealthPct: 0.7 } }
    ],
    explanation: '概念炒作末期应及时清仓锁定利润，避免热度衰退后的回撤。'
  },
  {
    id: 'trading_129',
    category: 'timing',
    title: 'K线W底形成',
    desc: '币价两次探底后反弹，形成W底形态，成交量配合。',
    choices: [
      { emoji: '📈', text: '突破颈线买入', hint: '趋势反转', isCorrect: true, effect: { wealthPct: 2.4 } },
      { emoji: '⏸️', text: '等确认', hint: '可能踏空', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '📉', text: '假突破做空', hint: '逆势', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '🤷', text: '观望不动', hint: '错过机会', isCorrect: false, effect: { wealthPct: 0.4 } }
    ],
    explanation: 'W底是经典反转形态，突破颈线买入可以抓住趋势反转机会。'
  },
  {
    id: 'trading_130',
    category: 'timing',
    title: 'K线M顶形成',
    desc: '币价两次冲高后回落，形成M顶形态，成交量萎缩。',
    choices: [
      { emoji: '📉', text: '跌破颈线卖出', hint: '趋势反转', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '💎', text: '继续持有', hint: '可能下跌', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '💰', text: '抄底加仓', hint: '逆势', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '🤷', text: '观望', hint: '错过逃顶', isCorrect: false, effect: { wealthPct: 0.3 } }
    ],
    explanation: 'M顶是经典见顶形态，跌破颈线卖出可以回避下跌趋势。'
  },
  {
    id: 'trading_131',
    category: 'timing',
    title: '布林带挤压',
    desc: '币价在布林带中轨横盘，上下轨收窄，波动率极低。',
    choices: [
      { emoji: '💰', text: '小额布局', hint: '变盘在即', isCorrect: true, effect: { wealthPct: 2.2 } },
      { emoji: '⏸️', text: '等突破方向', hint: '错失早期', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '📉', text: '做空等待', hint: '赌方向', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '📈', text: '做多等待', hint: '赌方向', isCorrect: false, effect: { wealthPct: -0.4 } }
    ],
    explanation: '布林带挤压意味着即将变盘，小额布局可以捕捉变盘机会。'
  },
  {
    id: 'trading_132',
    category: 'timing',
    title: 'MACD金叉形成',
    desc: '日线MACD在零轴上方形成金叉，红柱放大。',
    choices: [
      { emoji: '📈', text: '金叉买入', hint: '趋势加速', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '⏸️', text: '等回踩', hint: '可能不回踩', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '📉', text: '假金叉做空', hint: '逆势', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '🤷', text: '观望', hint: '错过机会', isCorrect: false, effect: { wealthPct: 0.5 } }
    ],
    explanation: '零轴上方金叉是强势信号，买入可以分享趋势加速。'
  },
  {
    id: 'trading_133',
    category: 'timing',
    title: 'MACD死叉形成',
    desc: '日线MACD在零轴下方形成死叉，绿柱放大。',
    choices: [
      { emoji: '📉', text: '死叉卖出', hint: '趋势加速跌', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '💎', text: '继续持有', hint: '可能继续跌', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '💰', text: '抄底加仓', hint: '逆势', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '🤷', text: '观望', hint: '错失逃顶', isCorrect: false, effect: { wealthPct: 0.3 } }
    ],
    explanation: '零轴下方死叉是弱势信号，卖出可以回避加速下跌。'
  },
  {
    id: 'trading_134',
    category: 'timing',
    title: '均线多头排列',
    desc: '币价站稳MA5/MA10/MA20上方，均线呈多头排列。',
    choices: [
      { emoji: '📈', text: '均线附近买入', hint: '趋势向上', isCorrect: true, effect: { wealthPct: 2.1 } },
      { emoji: '⏸️', text: '等回调均线', hint: '可能不回调', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '📉', text: '假突破做空', hint: '逆势', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '💎', text: '已持有不动', hint: '错过加仓', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '均线多头排列是强势特征，均线附近买入可以顺势操作。'
  },
  {
    id: 'trading_135',
    category: 'timing',
    title: '均线空头排列',
    desc: '币价跌破MA5/MA10/MA20，均线呈空头排列。',
    choices: [
      { emoji: '📉', text: '反弹减仓', hint: '趋势向下', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '💎', text: '继续持有', hint: '可能继续跌', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '💰', text: '抄底加仓', hint: '逆势', isCorrect: false, effect: { wealthPct: -0.9 } },
      { emoji: '🤷', text: '观望', hint: '被动承受', isCorrect: false, effect: { wealthPct: 0.4 } }
    ],
    explanation: '均线空头排列是弱势特征，反弹减仓可以回避进一步下跌。'
  },
  {
    id: 'trading_136',
    category: 'timing',
    title: '成交量背离',
    desc: '价格创新高但成交量萎缩，形成量价背离。',
    choices: [
      { emoji: '⚠️', text: '减仓观望', hint: '背离信号', isCorrect: true, effect: { wealthPct: 1.7 } },
      { emoji: '🚀', text: '继续追多', hint: '可能回落', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '💎', text: '持有不动', hint: '可能回调', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '🩳', text: '做空背离', hint: '未确认', isCorrect: false, effect: { wealthPct: -0.4 } }
    ],
    explanation: '量价背离是顶部预警信号，减仓观望是保守选择。'
  },
  {
    id: 'trading_137',
    category: 'timing',
    title: '突破历史新高',
    desc: '币价突破历史最高点，无套牢盘压力。',
    choices: [
      { emoji: '🚀', text: '突破追入', hint: '打开空间', isCorrect: true, effect: { wealthPct: 2.5 } },
      { emoji: '⏸️', text: '等回踩', hint: '可能不回踩', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '📤', text: '利好兑现卖', hint: '卖飞', isCorrect: false, effect: { wealthPct: 0.4 } },
      { emoji: '🩳', text: '做空新高', hint: '逆势', isCorrect: false, effect: { wealthPct: -0.8 } }
    ],
    explanation: '突破历史新高意味着打开上涨空间，追入可以分享主升浪。'
  },
  {
    id: 'trading_138',
    category: 'timing',
    title: '跌破历史新低',
    desc: '币价跌破历史最低点，恐慌情绪蔓延。',
    choices: [
      { emoji: '⛔', text: '暂时回避', hint: '趋势极弱', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '💎', text: '死扛到底', hint: '可能继续跌', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '💰', text: '抄底买入', hint: '接飞刀', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '🩳', text: '追空做空', hint: '风险大', isCorrect: false, effect: { wealthPct: -0.4 } }
    ],
    explanation: '跌破历史新低意味着趋势极弱，暂时回避等待企稳是安全选择。'
  },
  {
    id: 'trading_139',
    category: 'timing',
    title: '重大利好公布',
    desc: '币圈重大利好消息公布，如某国认可加密货币。',
    choices: [
      { emoji: '📈', text: '利好后追入', hint: '情绪高涨', isCorrect: true, effect: { wealthPct: 2.2 } },
      { emoji: '⏸️', text: '等回调', hint: '可能踏空', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '📤', text: '利好兑现卖', hint: '卖飞', isCorrect: false, effect: { wealthPct: 0.4 } },
      { emoji: '🤷', text: '观望', hint: '错失机会', isCorrect: false, effect: { wealthPct: 0.3 } }
    ],
    explanation: '重大利好公布后市场情绪高涨，追入可以分享情绪溢价。'
  },
  {
    id: 'trading_140',
    category: 'timing',
    title: '重大利空公布',
    desc: '币圈重大利空消息公布，如某交易所被黑。',
    choices: [
      { emoji: '🛡️', text: '减仓避险', hint: '情绪恐慌', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '💎', text: '长期持有', hint: '短期冲击', isCorrect: false, effect: { wealthPct: 0.4 } },
      { emoji: '💰', text: '抄底加仓', hint: '高风险', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '🤷', text: '观望', hint: '被动承受', isCorrect: false, effect: { wealthPct: 0.3 } }
    ],
    explanation: '重大利空公布后减仓避险是保守选择，等情绪稳定后再考虑。'
  },
  {
    id: 'trading_141',
    category: 'risk',
    title: '资产配置再平衡',
    desc: '你的BTC持仓占比从目标50%涨至70%，其他资产缩水。',
    choices: [
      { emoji: '⚖️', text: '再平衡卖出BTC', hint: '纪律执行', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '💎', text: '让利润奔跑', hint: '偏离目标', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '📈', text: '加仓其他币', hint: '追跌风险', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '🤷', text: '不管不问', hint: '被动偏离', isCorrect: false, effect: { wealthPct: 0.6 } }
    ],
    explanation: '定期再平衡可以保持目标配置，控制风险敞口。'
  },
  {
    id: 'trading_142',
    category: 'risk',
    title: '单一持仓过重',
    desc: '你的单一Meme币持仓占比达总资产60%。',
    choices: [
      { emoji: '⚖️', text: '分散减仓', hint: '风险控制', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '💎', text: '重仓博暴富', hint: '集中风险', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '🔥', text: '加仓到80%', hint: '极端风险', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '🤷', text: '暂时不管', hint: '风险暴露', isCorrect: false, effect: { wealthPct: 0.4 } }
    ],
    explanation: '单一持仓过重风险极高，分散减仓是明智的风险管理。'
  },
  {
    id: 'trading_143',
    category: 'risk',
    title: '稳定币脱锚',
    desc: '你持有的某稳定币价格跌至0.95美元，出现脱锚。',
    choices: [
      { emoji: '✂️', text: '立即卖出换其他稳定币', hint: '回避风险', isCorrect: true, effect: { wealthPct: 0.9 } },
      { emoji: '💎', text: '相信会回锚', hint: '可能归零', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '💰', text: '抄底买入', hint: '高风险', isCorrect: false, effect: { wealthPct: -0.9 } },
      { emoji: '🤷', text: '观望', hint: '错失逃顶', isCorrect: false, effect: { wealthPct: -0.3 } }
    ],
    explanation: '稳定币脱锚是重大风险信号，立即换仓是最安全选择。'
  },
  {
    id: 'trading_144',
    category: 'risk',
    title: '钱包安全风险',
    desc: '你使用的钱包软件被曝存在安全漏洞。',
    choices: [
      { emoji: '🔐', text: '立即转移资产', hint: '安全第一', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '💎', text: '等官方修复', hint: '可能被黑', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '🤷', text: '观望看看', hint: '风险暴露', isCorrect: false, effect: { wealthPct: -0.4 } },
      { emoji: '⛔', text: '不采取措施', hint: '听天由命', isCorrect: false, effect: { wealthPct: -0.6 } }
    ],
    explanation: '钱包安全漏洞应立即转移资产，不能心存侥幸。'
  },
  {
    id: 'trading_145',
    category: 'risk',
    title: '私钥备份检查',
    desc: '你突然发现自己的钱包私钥备份不完整。',
    choices: [
      { emoji: '🔐', text: '立即完整备份', hint: '安全优先', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '🤷', text: '应该没问题', hint: '风险暴露', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '⏸️', text: '以后再处理', hint: '拖延风险', isCorrect: false, effect: { wealthPct: 0.3 } },
      { emoji: '💰', text: '转到交易所', hint: '平台风险', isCorrect: false, effect: { wealthPct: 0.4 } }
    ],
    explanation: '私钥备份是资产安全的根本，应立即确保完整备份。'
  },
  {
    id: 'trading_146',
    category: 'risk',
    title: '钓鱼链接风险',
    desc: '你收到一封看似官方的空投领取邮件，包含链接。',
    choices: [
      { emoji: '⛔', text: '不点击删除邮件', hint: '防钓鱼', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '🔍', text: '仔细检查链接', hint: '仍有风险', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '💻', text: '用空钱包尝试', hint: '浪费时间', isCorrect: false, effect: { wealthPct: 0.4 } },
      { emoji: '🎁', text: '立即领取', hint: '大概率被骗', isCorrect: false, effect: { wealthPct: -0.95 } }
    ],
    explanation: '不明链接可能是钓鱼攻击，不点击是最安全选择。'
  },
  {
    id: 'trading_147',
    category: 'risk',
    title: '合约授权检查',
    desc: '你发现自己给多个DeFi合约无限授权。',
    choices: [
      { emoji: '🔒', text: '撤销不需要的授权', hint: '安全清理', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '💎', text: '相信协议安全', hint: '风险暴露', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '🤷', text: '授权很正常', hint: '忽视风险', isCorrect: false, effect: { wealthPct: -0.3 } },
      { emoji: '⛔', text: '不用DeFi', hint: '过度反应', isCorrect: false, effect: { wealthPct: 0.2 } }
    ],
    explanation: '定期检查并撤销不需要的合约授权是良好的安全习惯。'
  },
  {
    id: 'trading_148',
    category: 'risk',
    title: '助记词泄露风险',
    desc: '你怀疑自己的助记词可能已被他人看到。',
    choices: [
      { emoji: '🔐', text: '立即创建新钱包转移', hint: '紧急避险', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '🤷', text: '应该没事吧', hint: '侥幸心理', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '⏸️', text: '观察一段时间', hint: '风险暴露', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '💰', text: '只转部分资产', hint: '不够彻底', isCorrect: false, effect: { wealthPct: -0.4 } }
    ],
    explanation: '助记词疑似泄露时应立即创建新钱包转移全部资产，不能心存侥幸。'
  },
  {
    id: 'trading_149',
    category: 'risk',
    title: '交易所账户安全',
    desc: '你收到短信提示交易所账户在新设备登录。',
    choices: [
      { emoji: '🚨', text: '立即改密+2FA', hint: '紧急响应', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '🤷', text: '可能自己忘了', hint: '忽视警告', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '⏸️', text: '明天再处理', hint: '时间风险', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '💰', text: '提现再处理', hint: '可能已晚', isCorrect: false, effect: { wealthPct: -0.4 } }
    ],
    explanation: '账户异常登录提示应立即修改密码和检查2FA，安全无小事。'
  },
  {
    id: 'trading_150',
    category: 'risk',
    title: '投资组合压力测试',
    desc: '模拟BTC跌50%，你的组合会亏损多少？',
    choices: [
      { emoji: '⚖️', text: '调整仓位控制风险', hint: '主动管理', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '💎', text: '拿得住就没事', hint: '被动承受', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '🚀', text: '加仓高倍杠杆', hint: '放大风险', isCorrect: false, effect: { wealthPct: -0.9 } },
      { emoji: '🤷', text: '不去想这些', hint: '鸵鸟心态', isCorrect: false, effect: { wealthPct: 0.3 } }
    ],
    explanation: '定期进行压力测试并调整仓位是专业投资者的风险管理习惯。'
  }
];

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { HARDCORE_TRADING_DECISIONS };
}


// Export for browser
if (typeof window !== 'undefined') {
  window.HARDCORE_TRADING_DECISIONS = HARDCORE_TRADING_DECISIONS;
}

