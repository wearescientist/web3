/**
 * 币圈生涯模拟器 - 事件池
 * 平衡：正面约45%、混合25%、负面约30%；负面仅按比例亏损，单次上限约25%，资金分散难亏完。
 * 故事化：logTemplate 支持 {amount} {fans} {coin} {loss}，由 game.js 填入实际数值。
 */

const COINS = ['PEPE', 'DOGE', 'WIF', 'SHIB', 'BONK', 'BTC', 'ETH', 'SOL', 'AVAX', 'ARB', 'OP', 'SUI', 'TIA', 'ORDI', 'MEME'];
/** 币种中文名（展示用），没有的用原代码 */
const COIN_CN = { PEPE: '佩佩', DOGE: '狗狗币', WIF: '帽子狗', SHIB: '柴犬', BONK: '棒克', MEME: '梗币' };

const EVENT_POOL = [
  // ========== 路径专属·日常/正面（故事化） ==========
  { id: 101, type: 'positive', path: 'job', name: '项目方发工资', wealthAbs: [500, 2000], exp: 5, logTemplate: '项目方发工资了，到账 {amount} U，这个月没白干。' },
  { id: 102, type: 'positive', path: 'job', name: '月度奖金', wealthAbs: [350, 1200], exp: 8, logTemplate: '拿到月度奖金 {amount} U，团队业绩不错。' },
  { id: 103, type: 'positive', path: 'job', name: '项目上线奖励', wealthAbs: [1000, 4000], exp: 25, logTemplate: '参与的项目上线了，奖励 {amount} U 到账。' },
  { id: 104, type: 'positive', path: 'kol', name: '推文爆了', fansAbs: 15000, wealthPct: 0.02, exp: 15, logTemplate: '你的推文爆了，粉丝 +{fans}，你正在成为一名 KOL。' },
  { id: 105, type: 'positive', path: 'kol', name: '接到广告合作', wealthAbs: [400, 2200], fansAbs: 5000, exp: 12, logTemplate: '接到一条广告合作，到账 {amount} U，粉丝 +{fans}。' },
  { id: 106, type: 'positive', path: 'trading', name: '做多赚了一笔', wealthPct: 0.06, exp: 10, logTemplate: '你做多了 {coin}，涨疯了，收益 +{amount} U，挣麻了。' },
  { id: 107, type: 'positive', path: 'trading', name: '抄底吃到反弹', wealthPct: 0.08, exp: 15, logTemplate: '你抄底 {coin}，反弹吃满，收益 +{amount} U。' },
  { id: 108, type: 'positive', path: 'staking', name: '质押到期领收益', wealthAbs: [150, 900], exp: 5, logTemplate: '质押到期，领到收益 {amount} U，躺赚到账。' },
  { id: 109, type: 'positive', path: 'staking', name: '节点奖励发放', wealthAbs: [200, 1400], exp: 10, logTemplate: '节点奖励发放，{amount} U 到账。' },
  { id: 110, type: 'positive', path: 'invest', name: '项目分红', wealthAbs: [400, 2200], exp: 12, logTemplate: '投资项目分红，到账 {amount} U。' },
  { id: 111, type: 'positive', path: 'launch', name: '发币税费收入', wealthPct: 0.03, exp: 10, logTemplate: '你发的币交易量上来了，税费收入 +{amount} U。' },
  { id: 112, type: 'positive', path: 'airdrop', name: '领到大毛空投', wealthAbs: [1800, 9500], exp: 25, logTemplate: '蹲了半年的项目发空投了，领到 {amount} U，没白撸。' },
  { id: 113, type: 'positive', path: 'airdrop', name: '多链交互被奖励', wealthAbs: [600, 3200], exp: 15, logTemplate: '多链交互被项目方选中，奖励 {amount} U 到账。' },
  { id: 114, type: 'positive', path: 'airdrop', name: '测试网抢先', wealthAbs: [1000, 5500], exp: 20, logTemplate: '主网未上你先撸了测试网，发币后领到 {amount} U。' },

  // ========== 正面（收益压低，和负面亏损对称：亏一次狠、赚一次少） ==========
  { id: 1, type: 'positive', path: 'trading', name: '梗币神币爆火', wealthPct: 0.52, exp: 50, logTemplate: '你重仓的梗币 {coin} 爆了，翻了一波，收益 +{amount} U，挣麻了。' },
  { id: 2, type: 'positive', path: 'global', name: '牛市全面拉盘', wealthPct: 0.4, exp: 80, logTemplate: '牛市来了，资产普涨，财富 +{amount} U，经验大涨。' },
  { id: 3, type: 'positive', path: 'global', name: '真空投大放送', wealthAbs: [3200, 14000], exp: 30, logTemplate: '大项目空投到账，白捡 {amount} U，爽。' },
  { id: 4, type: 'positive', path: 'trading', name: '跟单大佬赚了', wealthPct: 0.18, exp: 40, logTemplate: '跟单大佬做多 {coin}，稳赚一波，+{amount} U。' },
  { id: 5, type: 'positive', path: 'invest', name: '项目上线大所', wealthPct: 0.58, exp: 60, logTemplate: '投资的项目上了大所，持仓涨了一波，收益 +{amount} U。' },
  { id: 6, type: 'positive', path: 'kol', name: 'KOL推文爆了', fansAbs: 80000, wealthPct: 0.12, exp: 50, logTemplate: '你的推文爆了，粉丝 +{fans}，分成到账 {amount} U，你成了 KOL。' },
  { id: 7, type: 'positive', path: 'staking', name: '质押高年化期', wealthPct: 0.08, exp: 20, logTemplate: '赶上高年化期，质押收益 +{amount} U。' },
  { id: 8, type: 'positive', path: 'launch', name: '早期神币卖出', wealthPct: 0.5, exp: 45, logTemplate: '土狗平台上的早期仓位卖出，赚了 {amount} U。' },
  { id: 16, type: 'positive', path: 'airdrop', name: '撸到优质项目', wealthAbs: [1500, 8000], exp: 40, logTemplate: '早期交互的明星项目发币，空投 {amount} U，大毛。' },
  { id: 9, type: 'positive', path: 'launch', name: '社区跟风拉盘成功', wealthPct: 0.4, exp: 55, logTemplate: '你发的币被跟风拉了一波，税费收入 +{amount} U。' },
  { id: 17, type: 'positive', path: 'launch', name: '发币冷启动成功', wealthAbs: [600, 2800], exp: 18, logTemplate: '新币冷启动有人接盘，首波税费赚了 {amount} U。' },
  { id: 18, type: 'positive', path: 'invest', name: '跟投大佬项目', wealthPct: 0.22, exp: 30, logTemplate: '跟投了圈内大佬的项目，早期份额涨了，+{amount} U。' },
  { id: 10, type: 'positive', path: 'trading', name: '减半利好', wealthPct: 0.3, exp: 40, logTemplate: '减半利好，{coin} 大涨，收益 +{amount} U。' },
  { id: 11, type: 'positive', path: 'job', name: '项目方空投奖励', wealthPct: 0.18, exp: 35, logTemplate: '打工项目发代币奖励，价格起飞，+{amount} U。' },
  { id: 12, type: 'positive', path: 'kol', name: '推文被大佬转发', wealthAbs: [2500, 11000], fansAbs: 20000, exp: 40, logTemplate: '你的一条推文爆了，被 {bigName} 点赞转发，接到品牌合作，到账 {amount} U，粉丝 +{fans}。', bigNamePool: ['马斯克', 'CZ', 'V 神', '孙宇晨', 'Hayden Adams', 'AC', 'Arthur Hayes', 'Brian Armstrong', 'Michael Saylor', '神鱼'] },
  { id: 13, type: 'positive', path: 'trading', name: '杠杆方向对了', wealthPct: 0.15, exp: 25, logTemplate: '杠杆做多 {coin} 方向对了，收益 +{amount} U。' },
  { id: 14, type: 'positive', path: 'staking', name: 'DeFi挖矿爆了', wealthPct: 0.18, exp: 35, logTemplate: '早期挖矿收益到账，+{amount} U。' },
  { id: 15, type: 'positive', path: 'invest', name: '投资项目并购', wealthPct: 0.5, exp: 70, logTemplate: '投资的项目被收购，退出赚了一笔，+{amount} U。' },

  // ========== 负面（仅按比例亏损，单次上限约 25%，不归零） ==========
  { id: 71, type: 'negative', path: 'invest', name: '项目跑路', capitalPct: -0.14, exp: 10, logTemplate: '你投的一个项目跑路了，亏损 {loss} U，还好仓位不大。' },
  { id: 72, type: 'negative', path: 'global', name: '钓鱼链接', capitalPct: -0.24, exp: 5, scamType: 'phishing', logTemplate: '误点假链接，部分授权被利用，损失 {loss} U，赶紧撤权。' },
  { id: 74, type: 'negative', path: 'global', name: '假空投签名', capitalPct: -0.14, exp: 5, scamType: 'fake_airdrop', logTemplate: '领假空投时签错了一笔，损失 {loss} U。' },
  { id: 75, type: 'negative', path: 'staking', name: '高收益平台跑路', capitalPct: -0.14, exp: 10, logTemplate: '某高收益平台跑路，投进去的那部分亏了 {loss} U。' },
  { id: 76, type: 'negative', path: 'trading', name: '交易所出事', capitalPct: -0.14, exp: 5, logTemplate: '某小所出事，部分资产损失 {loss} U。' },
  { id: 77, type: 'negative', path: 'trading', name: '杠杆爆仓', capitalPct: -0.14, exp: 15, logTemplate: '一波闪崩，杠杆仓位爆了，亏 {loss} U。' },
  { id: 78, type: 'negative', path: 'trading', name: '恐慌追高', capitalPct: -0.14, exp: 10, logTemplate: '恐慌追高 {coin}，买在顶部，亏 {loss} U。' },
  { id: 79, type: 'negative', path: 'job', name: '工资拖欠', capitalPct: -0.32, exp: 15, logTemplate: '项目方拖欠了一部分工资，相当于亏了 {loss} U。' },
  { id: 80, type: 'negative', path: 'kol', name: 'KOL封号', fansPct: -0.3, exp: 10, logTemplate: '推文违规被限流，粉丝掉了一波，-{fans}。' },
  { id: 81, type: 'negative', path: 'global', name: '假客服骗局', capitalPct: -0.14, exp: 0, scamType: 'fake_cs', logTemplate: '差点信了假客服，发现不对只损失了 {loss} U。' },
  { id: 82, type: 'negative', path: 'staking', name: '云挖矿跑路', capitalPct: -0.24, exp: 5, logTemplate: '参与的云挖矿跑路，亏 {loss} U。' },
  { id: 84, type: 'negative', path: 'kol', name: '接假项目连累', fansPct: -0.2, capitalPct: -0.32, exp: 15, logTemplate: '接的广告项目后来跑路了，退了一部分款，仍亏 {loss} U，粉丝也掉了一些。' },
  { id: 85, type: 'negative', path: 'invest', name: '项目假升级', capitalPct: -0.14, exp: 10, logTemplate: '项目“升级”后旧资产提不出，损失 {loss} U。' },
  { id: 86, type: 'negative', path: 'global', name: '名人仿号骗', capitalPct: -0.24, exp: 0, scamType: 'fake_celebrity', logTemplate: '差点信了仿冒名人账号，只转了少量，损失 {loss} U。' },
  { id: 87, type: 'negative', path: 'trading', name: '恶意合约', capitalPct: -0.14, exp: 5, logTemplate: '买梗币时误签了恶意合约，部分资金损失 {loss} U。' },
  { id: 88, type: 'negative', path: 'launch', name: '社区反噬', capitalPct: -0.14, exp: 20, logTemplate: '发币后被骂跑路，砸了一波，亏 {loss} U。' },
  { id: 89, type: 'negative', path: 'launch', name: '监管罚款', capitalPct: -0.24, exp: 15, logTemplate: '被监管盯上，交了笔罚款，{loss} U。' },
  { id: 90, type: 'negative', path: 'global', name: '假钱包App', capitalPct: -0.14, exp: 0, scamType: 'fake_wallet', logTemplate: '误下了假钱包，部分资产损失 {loss} U。' },
  { id: 91, type: 'negative', path: 'global', name: '假直播领奖', capitalPct: -0.14, exp: 0, scamType: 'fake_live', logTemplate: '假直播领奖链接骗走部分资金，损失 {loss} U。' },
  { id: 92, type: 'negative', path: 'trading', name: '蜜罐陷阱', capitalPct: -0.14, exp: 5, logTemplate: '买到一个蜜罐币，部分本金损失 {loss} U。' },
  { id: 96, type: 'negative', path: 'kol', name: '合作方不付尾款', capitalPct: -0.14, exp: 10, logTemplate: '推完项目方不给尾款，少赚了一笔。' },
  { id: 97, type: 'negative', path: 'job', name: '项目内斗', capitalPct: -0.32, exp: 15, logTemplate: '团队内斗，部分代币作废，相当于亏 {loss} U。' },
  { id: 98, type: 'negative', path: 'launch', name: '流动性被抽干', capitalPct: -0.14, exp: 20, logTemplate: '池子被大户抽干，亏 {loss} U。' },
  { id: 99, type: 'negative', path: 'invest', name: '锁仓难退出', capitalPct: -0.24, exp: 15, logTemplate: '投资锁仓期漫长，折价退出，损失 {loss} U。' },
  { id: 145, type: 'negative', path: 'launch', name: '发币没人接盘', capitalPct: -0.24, exp: 12, logTemplate: '发的币冷启动没人买，池子砸自己手里，亏 {loss} U。' },
  { id: 146, type: 'negative', path: 'invest', name: '尽调踩雷', capitalPct: -0.14, exp: 15, logTemplate: '投前尽调没看出问题，项目跑路，亏 {loss} U。' },
  { id: 100, type: 'negative', path: 'staking', name: '节点被罚没', capitalPct: -0.14, exp: 10, logTemplate: '节点被罚了一笔，损失 {loss} U。' },
  { id: 139, type: 'negative', path: 'airdrop', name: '女巫被查', capitalPct: -0.24, exp: 12, logTemplate: '多号撸空投被判定女巫，资格全没，还浪费了 {loss} U 的矿工费。' },
  { id: 140, type: 'negative', path: 'airdrop', name: '空投不及预期', capitalPct: -0.32, exp: 8, logTemplate: '撸了半年的项目空投就一点，矿工费都没回本，相当于亏 {loss} U。' },
  { id: 141, type: 'negative', path: 'airdrop', name: '测试网不发币', capitalPct: -0.26, exp: 6, logTemplate: '冲的测试网项目黄了，不发币，白烧 {loss} U。' },
  { id: 142, type: 'negative', path: 'airdrop', name: '领空投时矿工费爆贵', capitalPct: -0.20, exp: 5, logTemplate: '领空投那天链上堵死，矿工费烧了 {loss} U。' },
  { id: 143, type: 'negative', path: 'staking', name: 'DeFi无常损失', capitalPct: -0.24, exp: 15, logTemplate: '池子被攻击，无常损失 {loss} U。' },
  { id: 144, type: 'negative', path: 'trading', name: '资金费率磨光', capitalPct: -0.24, exp: 10, logTemplate: '横盘太久，资金费率磨掉 {loss} U。' },
  { id: 115, type: 'negative', path: 'global', name: '跨链桥被盗', capitalPct: -0.14, exp: 5, logTemplate: '跨链时桥被黑，部分资产损失 {loss} U。' },
  { id: 116, type: 'negative', path: 'trading', name: '小所跑路', capitalPct: -0.14, exp: 10, logTemplate: '某小所跑路，放在上面的 {loss} U 没了。' },

  // ========== 非诈骗类亏损（行情/跟单/解锁/技术/工作等，主要亏损来源） ==========
  { id: 117, type: 'negative', path: 'global', name: '行情闪崩', capitalPct: -0.26, exp: 8, logTemplate: '大盘闪崩，持仓 {coin} 等缩水，亏损 {loss} U。' },
  { id: 118, type: 'negative', path: 'global', name: '抄底抄在半山腰', capitalPct: -0.24, exp: 10, logTemplate: '你以为到底了抄底 {coin}，结果继续跌，亏 {loss} U。' },
  { id: 119, type: 'negative', path: 'global', name: '跟单大佬翻车', capitalPct: -0.14, exp: 12, logTemplate: '跟的 KOL 喊单翻车，一起亏了 {loss} U。' },
  { id: 120, type: 'negative', path: 'global', name: '梗币归零', capitalPct: -0.32, exp: 15, logTemplate: '重仓的梗币 {coin} 热度没了，近乎归零，亏 {loss} U。' },
  { id: 121, type: 'negative', path: 'global', name: '锁仓解锁砸盘', capitalPct: -0.14, exp: 10, logTemplate: '项目方/VC 解锁砸盘，你手里的代币腰斩，亏 {loss} U。' },
  { id: 122, type: 'negative', path: 'global', name: '交易所宕机错过平仓', capitalPct: -0.24, exp: 8, logTemplate: '交易所卡顿，想平仓平不掉，多亏了 {loss} U。' },
  { id: 123, type: 'negative', path: 'global', name: '利好落空暴跌', capitalPct: -0.14, exp: 12, logTemplate: '期待的 {coin} 利好没来，反而利空，亏 {loss} U。' },
  { id: 124, type: 'negative', path: 'global', name: '资金费率磨秃', capitalPct: -0.20, exp: 6, logTemplate: '横盘太久，持仓资金费率一点点磨掉 {loss} U。' },
  { id: 125, type: 'negative', path: 'global', name: '流动性池无常损失', capitalPct: -0.26, exp: 10, logTemplate: '做流动性遇到单边行情，无常损失 {loss} U。' },
  { id: 126, type: 'negative', path: 'global', name: '合约方向做反', capitalPct: -0.14, exp: 12, logTemplate: '开合约方向反了，止损出局，亏 {loss} U。' },
  { id: 127, type: 'negative', path: 'global', name: '项目延期代币跌', capitalPct: -0.24, exp: 8, logTemplate: '参与的项目一再延期，代币阴跌，亏 {loss} U。' },
  { id: 128, type: 'negative', path: 'global', name: '矿工费烧穿', capitalPct: -0.26, exp: 5, logTemplate: '链上拥堵，几笔操作矿工费烧掉 {loss} U。' },
  { id: 129, type: 'negative', path: 'global', name: '加息预期杀估值', capitalPct: -0.26, exp: 8, logTemplate: '宏观加息预期，风险资产普跌，亏 {loss} U。' },
  { id: 130, type: 'negative', path: 'global', name: '黑天鹅事件', capitalPct: -0.32, exp: 15, logTemplate: '突发黑天鹅，市场恐慌性下跌，亏 {loss} U。' },
  { id: 131, type: 'negative', path: 'job', name: '项目裁员降薪', capitalPct: -0.20, exp: 10, logTemplate: '项目收缩，你被降薪，相当于少拿 {loss} U。' },
  { id: 132, type: 'negative', path: 'job', name: '年终奖缩水', capitalPct: -0.32, exp: 6, logTemplate: '今年行情差，年终奖砍半，少拿 {loss} U。' },
  { id: 133, type: 'negative', path: 'job', name: '项目黄了补偿少', capitalPct: -0.24, exp: 12, logTemplate: '项目停摆，补偿金打折，相当于亏 {loss} U。' },
  { id: 134, type: 'negative', path: 'kol', name: '推文翻车赔款', capitalPct: -0.32, exp: 10, logTemplate: '一条推被指误导，退了部分广告费，亏 {loss} U。' },
  { id: 135, type: 'negative', path: 'kol', name: '平台抽成提高', capitalPct: -0.14, exp: 5, logTemplate: '平台抽成涨了，这期收入少了一截，相当于 {loss} U。' },
  { id: 136, type: 'negative', path: 'global', name: '换汇/出金损耗', capitalPct: -0.26, exp: 3, logTemplate: '出金通道费率高、汇率差，多花了 {loss} U。' },
  { id: 137, type: 'negative', path: 'global', name: '重仓币项目方抛售', capitalPct: -0.14, exp: 12, logTemplate: '项目方悄悄出货，{coin} 崩了，亏 {loss} U。' },
  { id: 138, type: 'negative', path: 'global', name: '做市商撤池子', capitalPct: -0.24, exp: 8, logTemplate: '小币做市商撤池，流动性枯竭，你卖在低位，亏 {loss} U。' },

  // ========== 普通人最容易犯的错：亏损比例加大，一次狠亏 ==========
  { id: 150, type: 'negative', path: 'global', retailMistake: true, name: '追涨杀跌', capitalPct: -0.32, exp: 10, logTemplate: '涨的时候追进去，跌的时候割肉，{coin} 一波操作亏 {loss} U，经典韭菜。' },
  { id: 151, type: 'negative', path: 'global', retailMistake: true, name: 'FOMO 高位接盘', capitalPct: -0.14, exp: 12, logTemplate: '看到 {coin} 疯涨 FOMO 了，高位接盘，回调就亏 {loss} U。' },
  { id: 152, type: 'negative', path: 'global', retailMistake: true, name: '恐慌割肉', capitalPct: -0.26, exp: 8, logTemplate: '一根大阴线你就慌了，割在地板价，亏 {loss} U。' },
  { id: 153, type: 'negative', path: 'global', retailMistake: true, name: '越跌越补仓补到爆', capitalPct: -0.14, exp: 15, logTemplate: '以为到底了不断补仓 {coin}，越补越跌，最后一把亏 {loss} U。' },
  { id: 154, type: 'negative', path: 'global', retailMistake: true, name: '听消息梭哈', capitalPct: -0.34, exp: 12, logTemplate: '群里有人说内幕，你梭哈进去，消息是假的，亏 {loss} U。' },
  { id: 155, type: 'negative', path: 'global', retailMistake: true, name: '频繁交易手续费亏光', capitalPct: -0.14, exp: 6, logTemplate: '天天短线来回折腾，手续费和滑点磨掉 {loss} U。' },
  { id: 156, type: 'negative', path: 'global', retailMistake: true, name: '反弹当反转加仓又套牢', capitalPct: -0.14, exp: 10, logTemplate: '小反弹你以为反转了加仓 {coin}，结果继续跌，又套牢，亏 {loss} U。' },
  { id: 157, type: 'negative', path: 'global', retailMistake: true, name: '死拿不割最后腰斩', capitalPct: -0.32, exp: 12, logTemplate: '坚信会涨回来死拿 {coin}，结果一路阴跌腰斩，亏 {loss} U。' },
  { id: 158, type: 'negative', path: 'global', retailMistake: true, name: '涨一点就卖飞', capitalPct: -0.32, exp: 5, logTemplate: '拿不住，涨一点就卖了，卖完继续暴涨，少赚当亏 {loss} U。' },
  { id: 159, type: 'negative', path: 'global', retailMistake: true, name: '抄底抄到半山腰', capitalPct: -0.14, exp: 10, logTemplate: '以为 {coin} 到底了全仓抄进去，结果还在半山腰，亏 {loss} U。' },
  { id: 160, type: 'negative', path: 'global', retailMistake: true, name: '杠杆加仓被爆', capitalPct: -0.38, exp: 15, logTemplate: '浮亏时你加杠杆想摊成本，一波波动直接爆仓，亏 {loss} U。' },
  { id: 161, type: 'negative', path: 'global', retailMistake: true, name: '跟风买梗币接盘', capitalPct: -0.32, exp: 12, logTemplate: '热搜上看到 {coin} 冲进去，接盘侠，亏 {loss} U。' },
  { id: 162, type: 'negative', path: 'global', retailMistake: true, name: '利好出货被套', capitalPct: -0.14, exp: 10, logTemplate: '利好出来你冲进去，庄家借利好出货，你站岗，亏 {loss} U。' },
  { id: 163, type: 'negative', path: 'global', retailMistake: true, name: '止损设太宽一次亏大', capitalPct: -0.14, exp: 10, logTemplate: '止损设得太宽，一次回调没拦住，亏 {loss} U。' },
  { id: 164, type: 'negative', path: 'global', retailMistake: true, name: '情绪化重仓', capitalPct: -0.30, exp: 12, logTemplate: '一上头重仓梭哈 {coin}，方向反了，亏 {loss} U。' },
  { id: 165, type: 'negative', path: 'global', retailMistake: true, name: '摊低成本越摊越亏', capitalPct: -0.14, exp: 10, logTemplate: '套牢后不断摊低成本，仓位越摊越大，再跌一波亏 {loss} U。' },
  { id: 166, type: 'negative', path: 'global', retailMistake: true, name: '听大V梭哈翻车', capitalPct: -0.32, exp: 12, logTemplate: '大 V 喊单你跟了，结果接盘，亏 {loss} U。' },
  { id: 167, type: 'negative', path: 'global', retailMistake: true, name: '熊市死扛不跑', capitalPct: -0.34, exp: 15, logTemplate: '熊市来了你不跑，觉得能扛住，资产缩水 {loss} U。' },
  { id: 168, type: 'negative', path: 'global', retailMistake: true, name: '反弹没跑又跌回去', capitalPct: -0.26, exp: 10, logTemplate: '反弹时没止盈，想着再涨点，结果又跌回去，亏 {loss} U。' },
  { id: 169, type: 'negative', path: 'global', retailMistake: true, name: '合约不止损爆仓', capitalPct: -0.38, exp: 15, logTemplate: '开合约不肯止损，硬扛到爆仓，亏 {loss} U。' },

  // ========== 多样性扩展：监管/链上/社区/DAO/NFT 等 ==========
  { id: 176, type: 'positive', path: 'invest', name: '项目方回购', wealthPct: 0.22, exp: 25, logTemplate: '持仓项目宣布回购销毁，{coin} 拉了一波，收益 +{amount} U。' },
  { id: 177, type: 'positive', path: 'airdrop', name: '新链上线空投', wealthAbs: [1200, 6500], exp: 22, logTemplate: '新链上线发空投，早期交互领到 {amount} U。' },
  { id: 178, type: 'positive', path: 'global', name: '老项目复活', wealthPct: 0.35, exp: 35, logTemplate: '冷门老币突然被拉盘，持仓复活，+{amount} U。' },
  { id: 179, type: 'negative', path: 'global', name: '监管利空', capitalPct: -0.26, exp: 10, logTemplate: '监管消息突袭，市场普跌，亏 {loss} U。' },
  { id: 180, type: 'negative', path: 'global', name: '链上拥堵 Gas 烧穿', capitalPct: -0.22, exp: 6, logTemplate: '链上堵死，几笔交易 Gas 烧掉 {loss} U。' },
  { id: 181, type: 'negative', path: 'global', name: 'Gas 战争抢 mint', capitalPct: -0.20, exp: 8, logTemplate: '抢 mint 卷进 Gas 战争，没抢到还烧了 {loss} U。' },
  { id: 182, type: 'negative', path: 'global', name: '跨链桥故障', capitalPct: -0.24, exp: 5, logTemplate: '跨链时桥故障，资产卡住或折价取出，损失 {loss} U。' },
  { id: 183, type: 'negative', path: 'launch', name: '社区分裂砸盘', capitalPct: -0.28, exp: 15, logTemplate: '社区内讧分裂，大户砸盘，你发的币跌了一波，亏 {loss} U。' },
  { id: 184, type: 'mixed', path: 'invest', name: 'DAO 提案投票', choices: [
    { text: '赞成', effect: { wealthPct: 0.18 }, outcome: '提案通过，代币涨了一波' },
    { text: '反对', effect: {}, outcome: '没通过，没亏没赚' },
    { text: '跟错队', effect: { capitalPct: -0.18 }, outcome: '站错队，项目分叉你手里的跌了' }
  ], weight: [0.35, 0.4, 0.25] },
  { id: 185, type: 'mixed', path: 'global', name: 'NFT 地板抄底', choices: [
    { text: '抄', effect: 'random', effects: [{ wealthPct: 0.25 }, { capitalPct: -0.22 }], outcomes: ['地板反弹卖在高点', '继续阴跌割肉'], weight: [0.45, 0.55] },
    { text: '不抄', effect: {}, outcome: '观望' }
  ] },

  // ========== 借贷体系：借钱/抵押/高利贷，到账现金但背上债务，每月还贷利滚利（isLoan 手头紧时更易抽到） ==========
  { id: 170, type: 'negative', path: 'global', isLoan: true, name: '借钱周转', wealthAbs: [400, 800], debtAdd: [550, 950], logTemplate: '手头紧找朋友/亲戚借了一笔，到账 {amount} U，但要还 {debtAdd} U。' },
  { id: 171, type: 'negative', path: 'global', isLoan: true, name: '抵押房子', wealthAbs: [2500, 5000], debtAdd: [3200, 6200], logTemplate: '为了续命把房抵押了，到账 {amount} U，负债 {debtAdd} U，每月还贷。' },
  { id: 172, type: 'negative', path: 'global', isLoan: true, name: '借高利贷', wealthAbs: [800, 1800], debtAdd: [1200, 2800], logTemplate: '走投无路借了高利贷，到账 {amount} U，要还 {debtAdd} U，利滚利。' },
  { id: 173, type: 'negative', path: 'global', isLoan: true, name: '信用卡套现', wealthAbs: [600, 1200], debtAdd: [800, 1500], logTemplate: '信用卡套现撑一波，到账 {amount} U，账单 {debtAdd} U。' },
  { id: 174, type: 'negative', path: 'global', isLoan: true, name: '网贷周转', wealthAbs: [400, 900], debtAdd: [580, 1200], logTemplate: '撸了网贷续命，到账 {amount} U，要还 {debtAdd} U。' },
  { id: 175, type: 'negative', path: 'global', isLoan: true, name: '以贷养贷', wealthAbs: [300, 700], debtAdd: [450, 950], logTemplate: '旧债还不上又借新债，到账 {amount} U，总负债多了 {debtAdd} U。' },

  // ========== 混合（杀猪盘仅在此、且选“转钱”才触发，理性高几乎不会选） ==========
  { id: 231, type: 'mixed', path: 'job', name: '内幕情报', desc: '打工得到内部消息，信还是不信？', choices: [
    { text: '信，梭哈', effect: 'random', effects: [{ wealthPct: 2 }, { capitalPct: -0.2 }], outcomes: ['暴富翻倍', '假情报亏了一笔'], weight: [0.32, 0.68] },
    { text: '不信，观望', effect: {}, outcome: '没动' }
  ] },
  { id: 232, type: 'mixed', path: 'launch', name: '社区拉盘还是抛', choices: [
    { text: '喊单拉盘', effect: { wealthPct: 0.3 }, outcome: '拉盘赚了一波' },
    { text: '悄悄抛', effect: { fansPct: -0.2, capitalPct: -0.1 }, outcome: '被指跑路亏声望' }
  ] },
  { id: 233, type: 'mixed', path: 'global', name: '陌生人私信推荐平台', scamType: 'pig', choices: [
    { text: '转钱试试', effect: { capitalPct: -0.5 }, outcome: '被骗一笔', specialEnding: 'pig' },
    { text: '忽略', effect: {}, outcome: '没理，避开一劫' }
  ] },
  { id: 234, type: 'mixed', path: 'kol', name: '项目方合作邀约', choices: [
    { text: '接', effect: { wealthPct: 0.2 }, outcome: '真项目赚分成' },
    { text: '接（假项目）', effect: { fansPct: -0.3, capitalPct: -0.15 }, outcome: '假项目跑路连累' }
  ] },
  { id: 235, type: 'mixed', path: 'trading', name: '大波动加仓', choices: [
    { text: '加仓做多', effect: { wealthPct: 0.5 }, outcome: '涨了赚一波' },
    { text: '加仓做空', effect: { capitalPct: -0.25 }, outcome: '方向反了亏一笔' }
  ] },
  { id: 236, type: 'mixed', path: 'global', name: '假空投链接', scamType: 'fake_airdrop', choices: [
    { text: '点开连接', effect: { capitalPct: -0.25 }, outcome: '被盗走一笔' },
    { text: '不点', effect: {}, outcome: '没点，安全' }
  ] },
  { id: 237, type: 'mixed', path: 'invest', name: '社区投票', choices: [
    { text: '投对', effect: { wealthAbs: [3000, 15000] }, outcome: '奖励代币' },
    { text: '投错', effect: { capitalPct: -0.15 }, outcome: '社区分裂亏一点' }
  ] },
  { id: 238, type: 'mixed', path: 'kol', name: '发一条可能爆的推', choices: [
    { text: '发', effect: { fansAbs: 50000 }, outcome: '爆粉了' },
    { text: '发错话柄', effect: { fansPct: -0.3 }, outcome: '被喷掉粉' }
  ] },
  { id: 239, type: 'mixed', path: 'global', name: '跨链迁移', choices: [
    { text: '迁', effect: { wealthPct: 0.15 }, outcome: '成功' },
    { text: '迁（桥被黑）', effect: { capitalPct: -0.2 }, outcome: '桥出事亏一笔' }
  ] },
  { id: 240, type: 'mixed', path: 'staking', name: '跑节点', choices: [
    { text: '投', effect: { wealthPct: 0.2 }, outcome: '高收益' },
    { text: '被罚没', effect: { capitalPct: -0.2 }, outcome: '罚了一笔' }
  ] },
  { id: 241, type: 'mixed', path: 'trading', name: '群友分享梗币地址', choices: [
    { text: '跟', effect: { wealthPct: 1 }, outcome: '真神币赚翻' },
    { text: '不跟', effect: {}, outcome: '没跟' },
    { text: '跟（跑路）', effect: { capitalPct: -0.2 }, outcome: '假神币亏一笔' }
  ], weight: [0.4, 0.35, 0.25] },
  { id: 242, type: 'mixed', path: 'job', name: '奖金要代币还是 U', choices: [
    { text: '要代币', effect: { wealthPct: 0.8 }, outcome: '代币拉盘' },
    { text: '要 U', effect: { wealthPct: 0.15 }, outcome: '稳但少' }
  ] },
  { id: 243, type: 'mixed', path: 'global', name: '假客服要助记词', scamType: 'fake_cs', choices: [
    { text: '给了', effect: { capitalPct: -0.5 }, outcome: '钱包被清空' },
    { text: '拉黑', effect: {}, outcome: '拉黑，安全' }
  ] },
  { id: 244, type: 'mixed', path: 'trading', name: '杠杆多还是空', choices: [
    { text: '多', effect: { wealthPct: 0.4 }, outcome: '涨了赚' },
    { text: '空', effect: { capitalPct: -0.25 }, outcome: '涨了亏' }
  ] },
  { id: 245, type: 'mixed', path: 'launch', name: '营销水军还是有机', choices: [
    { text: '有机', effect: { fansAbs: 20000 }, outcome: '真实粉丝' },
    { text: '水军', effect: { fansPct: -0.15 }, outcome: '被识破反噬' }
  ] },
  { id: 246, type: 'mixed', path: 'airdrop', name: '要不要冲测试网', choices: [
    { text: '冲', effect: 'random', effects: [{ wealthAbs: [2000, 12000] }, { capitalPct: -0.1 }], outcomes: ['测试网发币了领到奖励', '项目黄了白烧矿工费'], weight: [0.38, 0.62] },
    { text: '不冲', effect: {}, outcome: '没动' }
  ] },
  { id: 247, type: 'mixed', path: 'airdrop', name: '多号撸还是单号精', choices: [
    { text: '多号', effect: 'random', effects: [{ wealthPct: 0.4 }, { capitalPct: -0.2 }], outcomes: ['没被查，多领一份', '女巫了全没'], weight: [0.42, 0.58] },
    { text: '单号', effect: { wealthAbs: [500, 3000] }, outcome: '稳但少' }
  ] },
];

// ========== 事件稀有度：按稀有度调整亏盈倍率（common 偏小，epic 偏大） ==========
const EVENT_RARITY_BY_ID = {
  epic: [2, 15, 233, 241],   // 牛市全面拉盘、投资项目并购、杀猪盘、群友梗币暴富
  rare: [1, 3, 5, 6, 8, 16, 177, 120, 130, 160, 169], // 大正面 + 狠负面（梗币归零、黑天鹅、爆仓等）
  uncommon: [4, 7, 9, 10, 11, 12, 13, 14, 17, 18, 79, 84, 97, 132, 134, 140, 167, 176, 178, 179, 182, 183, 184, 185, 234, 235, 237, 239, 240, 242, 244, 246, 247]
};
// 稀有度倍率拉大：币圈有十倍百倍，common 小赚小亏、epic 倍数感强
const RARITY_MULTIPLIER = { common: 0.55, uncommon: 1.0, rare: 2.2, epic: 4.5 };
// 单次事件有效仓位上限（U）：再有钱也不会全仓梭 meme，避免一事件直接 A10
const RARITY_MAX_EXPOSURE = { common: 40000, uncommon: 120000, rare: 400000, epic: 1000000 };

function getEventRarity(ev) {
  if (ev && ev.rarity) return ev.rarity;
  const id = ev && ev.id;
  for (const [r, ids] of Object.entries(EVENT_RARITY_BY_ID)) {
    if (ids.includes(id)) return r;
  }
  return 'common';
}

function getRarityMultiplier(ev) {
  return RARITY_MULTIPLIER[getEventRarity(ev)] || RARITY_MULTIPLIER.common;
}

function getMaxExposure(ev) {
  const r = getEventRarity(ev);
  return RARITY_MAX_EXPOSURE[r] != null ? RARITY_MAX_EXPOSURE[r] : RARITY_MAX_EXPOSURE.common;
}

// 负面单次最大亏损比例（资金分散，难亏完）
const MAX_LOSS_PCT_PER_EVENT = 0.25;

function getEventsByType(type) {
  return EVENT_POOL.filter(e => e.type === type);
}
function getEventsForPath(path, marketPhase) {
  return EVENT_POOL.filter(e => e.path === 'global' || e.path === path);
}

// 随机选一个事件：负面/正面比例强烈受「运气」影响（运气差→大概率负面、普通人错误）
function pickRandomEvent(state) {
  const path = state.mainPath || 'kol';
  const luck = state.luck != null ? state.luck : 0.5;
  const usedScam = state.usedScamTypes || [];
  let pool = EVENT_POOL.filter(e => e.path === 'global' || e.path === path);
  pool = pool.filter(e => !e.scamType || !usedScam.includes(e.scamType));
  if (pool.length === 0) return null;
  const pathSaint = state.pathSaint || null;
  let typeFilter;
  if (pathSaint === 'blessed') {
    typeFilter = 'positive';
  } else if (pathSaint === 'cursed') {
    typeFilter = 'negative';
  } else {
    // 事件均衡 + 运气拉大差异：运气高多正面、运气低多负面，每局走向更分化
    const negChance = 0.44 + (0.5 - luck) * 0.24;
    const posChance = 0.26 + (luck - 0.5) * 0.22;
    const mixChance = Math.max(0.14, 1 - negChance - posChance);
    const roll = Math.random();
    typeFilter = 'positive';
    if (roll < negChance) typeFilter = 'negative';
    else if (roll < negChance + posChance) typeFilter = 'positive';
    else typeFilter = 'mixed';
  }
  let candidates = pool.filter(e => e.type === typeFilter);
  if (typeFilter === 'negative' && candidates.length > 1) {
    const retailMistakeChance = pathSaint === 'cursed' ? 0.85 : (0.62 + (0.5 - luck) * 0.12);
    const retailMistakes = candidates.filter(e => e.retailMistake);
    if (retailMistakes.length > 0 && Math.random() < retailMistakeChance) candidates = retailMistakes;
    const netWealth = (state.wealth || 0) - (state.debt || 0);
    const loanChance = pathSaint === 'cursed' ? (netWealth < 5000 ? 0.85 : 0.6) : (netWealth < 2000 ? 0.4 : 0);
    if (netWealth < 5000 && candidates.length > 1 && Math.random() < loanChance) {
      const loans = candidates.filter(e => e.isLoan);
      if (loans.length > 0) candidates = loans;
    }
  }
  if (typeFilter === 'mixed' && candidates.length > 1) {
    const deadly = candidates.filter(e => e.choices && e.choices.some(c => c.specialEnding));
    if (deadly.length > 0 && Math.random() < 0.7) {
      candidates = candidates.filter(e => !e.choices || !e.choices.some(c => c.specialEnding));
    }
  }
  if (candidates.length === 0) return pool[Math.floor(Math.random() * pool.length)];
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function getRandomCoin() {
  return COINS[Math.floor(Math.random() * COINS.length)];
}

function getCoinDisplayName(code) {
  return (COIN_CN && COIN_CN[code]) ? COIN_CN[code] : (code || 'BTC');
}

window.EVENT_POOL = EVENT_POOL;
window.COIN_CN = COIN_CN;
window.getCoinDisplayName = getCoinDisplayName;
window.getEventsByType = getEventsByType;
window.getEventsForPath = getEventsForPath;
window.pickRandomEvent = pickRandomEvent;
window.getRandomCoin = getRandomCoin;
window.getEventRarity = getEventRarity;
window.getRarityMultiplier = getRarityMultiplier;
window.getMaxExposure = getMaxExposure;
window.MAX_LOSS_PCT_PER_EVENT = MAX_LOSS_PCT_PER_EVENT;
