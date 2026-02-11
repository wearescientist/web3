/**
 * 硬核模式 - 核心数据文件
 * 全局决策 + 小随机事件库 + 路径映射
 * 
 * 注意：HARDCORE_GLOBAL_DECISIONS 和路径决策由独立文件提供：
 * - hardcore-global-decisions.js (150个全局决策)
 * - hardcore-trading-decisions.js (150个交易决策)
 * - hardcore-kol-decisions.js (150个KOL决策)
 * - hardcore-job-decisions.js (150个打工决策)
 * - hardcore-decisions-launch.js (150个发币决策)
 * - hardcore-invest-decisions.js (150个投资决策)
 * - hardcore-staking-decisions.js (150个躺赚决策)
 */

// ==================== 小随机事件库 ====================
// 统一系数范围：5%-15%（0.05-0.15），确保每次都有实际收益/亏损
// 295+个故事化币圈事件（原有150个 + v1.1.1转换145个）

// 原有150个故事化事件
const HARDCORE_SMALL_EVENTS_BASE = {
  positive: [
    { name: '大毛到账', desc: '三个月前熬夜交互的项目今天发空投了，猪脚饭变满汉全席', effect: { wealthPct: 0.15 } },
    { name: '低保也香', desc: '之前随手交互的项目空投到账，虽然不多但够加一周油', effect: { wealthPct: 0.06 } },
    { name: '测试网福报', desc: '被朋友拉去测的测试网居然真的发币了，白捡一笔', effect: { wealthPct: 0.08 } },
    { name: 'NFT空投', desc: '持有的NFT项目方空投代币，社区一片欢腾', effect: { wealthPct: 0.10 } },
    { name: '意外之财', desc: '两年前忘记的钱包里居然有项目方空投，突然发财', effect: { wealthPct: 0.12 } },
    { name: 'OAT奖励', desc: '银河任务完成的OAT可以兑换代币了，辛苦没白费', effect: { wealthPct: 0.07 } },
    { name: '治理奖励', desc: '参与项目治理投票获得奖励，认真做好功课就是有回报', effect: { wealthPct: 0.09 } },
    { name: '生态空投', desc: 'Layer2生态激励空投到账，交互早就是有优势', effect: { wealthPct: 0.11 } },
    { name: 'SBT福利', desc: '持有的灵魂绑定代币解锁了空投资格，得来全不费工夫', effect: { wealthPct: 0.08 } },
    { name: '节日红包', desc: '项目方圣诞/春节空投，币圈也有人情味', effect: { wealthPct: 0.06 } },
    { name: '精准逃顶', desc: '直觉告诉你该跑了，刚卖完币价就暴跌，躲过一劫还赚一波', effect: { wealthPct: 0.13 } },
    { name: '完美抄底', desc: '凌晨三点睡不着看K线，果断抄底，醒来账户翻倍', effect: { wealthPct: 0.14 } },
    { name: '跟庄成功', desc: '链上发现巨鲸建仓，你悄悄跟单，果然拉了', effect: { wealthPct: 0.11 } },
    { name: '波段高手', desc: '昨天买的币今天涨20%，果断卖出锁定利润', effect: { wealthPct: 0.10 } },
    { name: '消息灵通', desc: '群里传的利好居然是真的，提前埋伏吃了大肉', effect: { wealthPct: 0.12 } },
    { name: '止损变止盈', desc: '设的止损价没跌到，反弹大涨，幸好没割肉', effect: { wealthPct: 0.09 } },
    { name: '插针捡漏', desc: '交易所插针爆了一堆多头，你抄到低价筹码', effect: { wealthPct: 0.15 } },
    { name: '假跌破真反弹', desc: '跌破支撑以为要完，结果是假跌破，V反大赚', effect: { wealthPct: 0.11 } },
    { name: '换手成功', desc: '重仓币涨不动，果断换仓到强势币，追上涨幅', effect: { wealthPct: 0.10 } },
    { name: '逆势而为', desc: '市场恐慌你贪婪，别人割肉你抄底，独一份的眼光', effect: { wealthPct: 0.13 } },
    { name: '高APR收获', desc: '新矿 early bird APR 500%，挖了三天收益惊人', effect: { wealthPct: 0.12 } },
    { name: '复利滚雪球', desc: '质押收益复投一个月，利滚利收益超出预期', effect: { wealthPct: 0.08 } },
    { name: '无常损失回血', desc: '池子代币价格回归，之前的无常损失全回来了', effect: { wealthPct: 0.10 } },
    { name: '治理代币暴涨', desc: '质押挖的治理代币上线大所，单币涨幅超过挖矿收益', effect: { wealthPct: 0.14 } },
    { name: '桥接奖励', desc: '跨链桥为了吸引用户提供流动性奖励，你恰到饭了', effect: { wealthPct: 0.09 } },
    { name: 'veToken增值', desc: '锁仓的veToken增值了，长期主义得到回报', effect: { wealthPct: 0.07 } },
    { name: 'Option金库', desc: '结构化产品到期结算，市场波动率刚好在 sweet spot', effect: { wealthPct: 0.11 } },
    { name: 'MEV收益', desc: '自己跑节点捕获到MEV，额外收获一笔', effect: { wealthPct: 0.06 } },
    { name: '上所爆发', desc: '重仓的小币突然宣布上币安，直接拉飞三倍', effect: { wealthPct: 0.15 } },
    { name: '合作利好', desc: '项目方宣布与巨头合作，币价应声而起', effect: { wealthPct: 0.12 } },
    { name: '回购销毁', desc: '项目方启动回购销毁计划，通缩预期推动价格上涨', effect: { wealthPct: 0.10 } },
    { name: '主网上线', desc: '测试网过渡主网，技术里程碑达成，市场看好', effect: { wealthPct: 0.11 } },
    { name: '融资成功', desc: '项目宣布完成大额融资，顶级机构背书', effect: { wealthPct: 0.09 } },
    { name: '生态爆发', desc: '项目生态应用TVL暴增，代币需求大涨', effect: { wealthPct: 0.13 } },
    { name: '社区共识', desc: '社区自发组织拉盘， holders团结一致', effect: { wealthPct: 0.08 } },
    { name: '创始人喊单', desc: 'Vitalik/CZ转发了项目推文，瞬间FOMO', effect: { wealthPct: 0.14 } },
    { name: '钱包找回来了', desc: '三年前丢失的钱包助记词突然想起来了，里面有惊喜', effect: { wealthPct: 0.10 } },
    { name: 'Bug赏金', desc: '发现项目代码漏洞并负责任披露，获得赏金', effect: { wealthPct: 0.11 } },
    { name: '抽奖中奖', desc: '项目方推特抽奖你居然中了，运气爆棚', effect: { wealthPct: 0.07 } },
    { name: 'Gas返还', desc: 'Optimism/Arbitrum的Gas返还活动到账，羊毛虽小也是肉', effect: { wealthPct: 0.06 } },
    { name: '内幕消息', desc: '在推特Space听到内部人员透露的 alpha，提前布局吃了肉', effect: { wealthPct: 0.12 } },
    { name: '科学家带单', desc: '跟着链上科学家的信号买入，果然涨了', effect: { wealthPct: 0.09 } },
    { name: '搬砖套利', desc: '发现某币在不同交易所价差，搬砖赚了无风险收益', effect: { wealthPct: 0.08 } },
    { name: '闪电贷套利', desc: '用闪电贷做三角套利，零本金赚了一笔', effect: { wealthPct: 0.11 } },
    { name: '期权到期', desc: '卖的看跌期权到期归零，白赚权利金', effect: { wealthPct: 0.07 } },
    { name: '分红到账', desc: '持有的平台币分红到账，虽然不多但稳定', effect: { wealthPct: 0.06 } },
    { name: 'IEO中签', desc: '交易所IEO申购居然中签了，开盘翻倍卖出', effect: { wealthPct: 0.13 } },
    { name: 'NFT空投代币', desc: '持有的蓝筹NFT项目方空投代币，价值不菲', effect: { wealthPct: 0.10 } },
    { name: 'Launchpad收益', desc: '参与的项目Launchpad开盘暴涨，收益可观', effect: { wealthPct: 0.14 } },
    { name: '游戏道具卖出', desc: 'GameFi里打的稀有装备被人高价收走', effect: { wealthPct: 0.08 } }
  ],
  negative: [
    { name: '追涨杀跌', desc: '看到币疯涨忍不住追高，刚买进去就开始跌，经典韭菜操作', effect: { wealthPct: -0.12 } },
    { name: '抄底抄到半山腰', desc: '觉得跌到位了，满仓抄底，结果下面还有十八层地狱', effect: { wealthPct: -0.14 } },
    { name: '杠杆爆仓', desc: '开个5倍杠杆想短撸，结果一根针爆了，归零', effect: { wealthPct: -0.15 } },
    { name: '合约方向做反', desc: '明明看跌却开了多，损也设了但插针直接爆了', effect: { wealthPct: -0.13 } },
    { name: '卖飞懊恼', desc: '扛了三个月的币，卖了第二天拉盘，吐血', effect: { wealthPct: -0.10 } },
    { name: '死拿归零', desc: '坚信币会涨回来，一路跌一路死拿，最后快归零了', effect: { wealthPct: -0.14 } },
    { name: 'FOMO接盘', desc: '群友喊「马上拉盘」，你冲进去成了最后一棒', effect: { wealthPct: -0.11 } },
    { name: '频繁交易手续费', desc: '天天短线来回折腾，手续费和滑点吃掉所有利润还倒亏', effect: { wealthPct: -0.08 } },
    { name: '恐慌割肉', desc: '一根大阴线吓坏了，割在地板上，割完就反弹', effect: { wealthPct: -0.12 } },
    { name: '加仓被套', desc: '浮亏想补仓摊低成本，越补越跌，仓位越来越重', effect: { wealthPct: -0.13 } },
    { name: '假突破诱多', desc: '币价突破前高以为要飞，追进去发现是假突破，被套牢', effect: { wealthPct: -0.11 } },
    { name: '听信内幕', desc: '群友说有「内部消息」要拉盘，你梭哈进去，消息是假的', effect: { wealthPct: -0.15 } },
    { name: '女巫检测', desc: '精心布置的20个号被项目方判定女巫，全军覆没还亏Gas', effect: { wealthPct: -0.12 } },
    { name: '空投归零', desc: '撸了三月的项目终于发币，结果开盘就破发，还不够Gas费', effect: { wealthPct: -0.09 } },
    { name: '忘记领取', desc: '空投可以领了但太忙忘了，过期作废，白忙活', effect: { wealthPct: -0.07 } },
    { name: '领空投被黑', desc: '领空投授权了恶意合约，币到账还没捂热就被盗', effect: { wealthPct: -0.14 } },
    { name: '快照前卖了', desc: '项目方空投快照前一刻你卖了币，完美错过空投', effect: { wealthPct: -0.10 } },
    { name: '测试网没发币', desc: '冲测试网冲了半年，项目方说不发币了，白烧Gas', effect: { wealthPct: -0.08 } },
    { name: '任务白做', desc: '银河任务辛辛苦苦做完，发现要求变了，不算数', effect: { wealthPct: -0.06 } },
    { name: '快照后暴跌', desc: '快照完代币抛压太大，你持仓的币跌了一半', effect: { wealthPct: -0.11 } },
    { name: '项目方跑路', desc: '昨晚项目方还开AMA说利好，今天就删号跑路了', effect: { wealthPct: -0.15 } },
    { name: '私钥泄露', desc: '把私钥导入了一个来路不明的钱包，醒来资产被转空', effect: { wealthPct: -0.15 } },
    { name: '协议被黑', desc: '你存钱的DeFi协议被闪电贷攻击，TVL被抽干', effect: { wealthPct: -0.13 } },
    { name: 'Rug Pull', desc: '土狗币开盘半小时，流动性突然被撤，币归零', effect: { wealthPct: -0.14 } },
    { name: '项目延期', desc: '项目方说主网要延期半年，市场信心崩塌币价腰斩', effect: { wealthPct: -0.10 } },
    { name: '创始人丑闻', desc: '项目创始人被曝出黑历史，社区恐慌抛售', effect: { wealthPct: -0.11 } },
    { name: '合约漏洞', desc: '项目智能合约有bug被利用，你的存款拿不回来了', effect: { wealthPct: -0.12 } },
    { name: '监管点名', desc: 'SEC点名调查项目，交易所暂停充值，币价暴跌', effect: { wealthPct: -0.13 } },
    { name: '巨鲸砸盘', desc: '持仓的大户突然抛售，币价瞬间跌30%', effect: { wealthPct: -0.11 } },
    { name: 'VC解锁砸盘', desc: '机构投资人代币解锁，不计成本抛售，散户买单', effect: { wealthPct: -0.12 } },
    { name: '无常损失', desc: 'ETH涨了一倍，你在LP池里赚手续费但亏币，还不如拿着', effect: { wealthPct: -0.09 } },
    { name: 'Gas费烧穿', desc: '链上拥堵，一笔交易Gas费花了500U，心在滴血', effect: { wealthPct: -0.08 } },
    { name: '交易失败', desc: 'Gas设低了交易一直pending，取消又花一笔Gas', effect: { wealthPct: -0.06 } },
    { name: '滑点被夹', desc: 'DEX交易被MEV机器人夹单，滑点巨大，损失惨重', effect: { wealthPct: -0.10 } },
    { name: '授权被盗', desc: '之前授权过的项目合约有漏洞，资产被黑客批量转移', effect: { wealthPct: -0.13 } },
    { name: '转账转错链', desc: 'USDT转到BSC但交易所只支持ERC20，卡住了找不回', effect: { wealthPct: -0.07 } },
    { name: '节点掉线', desc: '验证者节点被罚没，质押的ETH被扣了一部分', effect: { wealthPct: -0.09 } },
    { name: '矿币暴跌', desc: '挖的矿币价格崩盘，电费都赚不回来', effect: { wealthPct: -0.08 } },
    { name: '跨链桥被黑', desc: '资产跨到一半桥被攻击，币卡在中间进退两难', effect: { wealthPct: -0.12 } },
    { name: '假币陷阱', desc: '买了同名假币，真币涨了你的币没动，仔细对比才发现上当了', effect: { wealthPct: -0.11 } },
    { name: '钓鱼链接', desc: 'Discord收到「空投领取」链接，点进去钱包被清空', effect: { wealthPct: -0.14 } },
    { name: '假客服', desc: '「客服」说你的账户有问题要验证助记词，你信了', effect: { wealthPct: -0.15 } },
    { name: '假空投', desc: '推特上的假空投链接，让你先发币过去验证，币没了', effect: { wealthPct: -0.12 } },
    { name: '杀猪盘', desc: '网恋对象教你「稳赚」的合约，投了钱发现取不出来', effect: { wealthPct: -0.13 } },
    { name: '假钱包', desc: '下载了假的MetaMask，导入助记词后资产被盗', effect: { wealthPct: -0.15 } },
    { name: '貔貅盘', desc: '买的币只能买不能卖，项目方专门收割韭菜', effect: { wealthPct: -0.11 } },
    { name: '助记词丢了', desc: '手机坏了助记词没备份，钱包里的币永远拿不回来了', effect: { wealthPct: -0.15 } },
    { name: '转错地址', desc: '复制粘贴地址没看，转到黑洞地址，永久丢失', effect: { wealthPct: -0.12 } },
    { name: '交易所出事', desc: '小交易所突然暂停提现，后来直接跑路了，币没了', effect: { wealthPct: -0.13 } },
    { name: '强制平仓', desc: '借贷平台清算线到了，你的抵押品被强制平仓还倒欠', effect: { wealthPct: -0.14 } }
  ],
  neutral: [
    { name: '空投低保', desc: '交互的项目空投到账，猪脚饭有了', effect: { wealthPct: 0.05 } },
    { name: '节点分红', desc: '跑的小节点发放分红，够喝杯咖啡', effect: { wealthPct: 0.06 } },
    { name: '质押利息', desc: '稳定币质押利息到账，聊胜于无', effect: { wealthPct: 0.05 } },
    { name: '套利成功', desc: '不同交易所价差套利，赚个Gas费', effect: { wealthPct: 0.07 } },
    { name: '粉丝打赏', desc: '发的技术推文有人打赏，小赚一笔', effect: { wealthPct: 0.06 } },
    { name: '问卷奖励', desc: '填了项目方调研问卷，给了点小奖励', effect: { wealthPct: 0.05 } },
    { name: '邀请返利', desc: '朋友用你的邀请码注册交易所，返了点佣金', effect: { wealthPct: 0.06 } },
    { name: 'Gas补贴', desc: 'L2的Gas补贴到账，省了点手续费', effect: { wealthPct: 0.05 } },
    { name: '投票奖励', desc: 'Snapshot投票参与项目治理，给了点代币', effect: { wealthPct: 0.07 } },
    { name: 'Bug反馈奖', desc: '项目UI有个小bug反馈了，官方给了奖励', effect: { wealthPct: 0.06 } },
    { name: 'meme币暴涨', desc: '随手买的meme币突然拉盘，赚了顿火锅', effect: { wealthPct: 0.08 } },
    { name: 'NFT地板涨', desc: '持有的NFT地板价小涨，账面浮盈', effect: { wealthPct: 0.06 } },
    { name: '域名卖出', desc: '注册的ENS域名有人出价，小赚卖出', effect: { wealthPct: 0.07 } },
    { name: '白名单卖出', desc: '抽中的NFT白名单没mint，卖了名额', effect: { wealthPct: 0.05 } },
    { name: '交易返佣', desc: '成为交易所KOL，交易返佣到账', effect: { wealthPct: 0.06 } },
    { name: '学习奖励', desc: '完成项目的Learn to Earn任务，获得奖励', effect: { wealthPct: 0.05 } },
    { name: '预测正确', desc: 'Polymarket预测市场押对结果，小赚一笔', effect: { wealthPct: 0.07 } },
    { name: '音乐NFT版税', desc: '买的音乐NFT有人收听，收到版税分成', effect: { wealthPct: 0.06 } },
    { name: '游戏打金', desc: 'GameFi游戏肝了一周，卖出打金收益', effect: { wealthPct: 0.08 } },
    { name: '域名续费提醒', desc: 'ENS快过期了赶紧续费，避免被抢注损失', effect: { wealthPct: 0.05 } },
    { name: '换汇套利', desc: 'P2P换汇发现好汇率，省了点钱', effect: { wealthPct: 0.06 } },
    { name: '空投回血', desc: '之前亏的项目突然发空投，回了一点血', effect: { wealthPct: 0.07 } },
    { name: '社区激励', desc: 'Discord活跃获得项目方发的活跃奖励', effect: { wealthPct: 0.05 } },
    { name: '测试网奖励', desc: '参与测试网反馈bug，官方发了奖励', effect: { wealthPct: 0.06 } },
    { name: '推特奖金', desc: '项目方举办的 meme 大赛获奖，拿到奖金', effect: { wealthPct: 0.07 } },
    { name: 'Gas费又涨了', desc: '链上拥堵，交易Gas费比平时贵了三倍', effect: { wealthPct: -0.06 } },
    { name: '交易滑点', desc: '买的土狗币池子太浅，滑点吃掉了5%', effect: { wealthPct: -0.07 } },
    { name: '无常损失', desc: 'LP挖矿产出的代币跌了，挖矿收益被无常损失吃掉还略微亏损', effect: { wealthPct: -0.05 } },
    { name: '订阅到期', desc: '交易信号群订阅费扣了，本月又要续费', effect: { wealthPct: -0.06 } },
    { name: '硬件钱包', desc: '买了新的硬件钱包提高安全性，小出血', effect: { wealthPct: -0.08 } },
    { name: '节点维护', desc: '服务器续费和维护， Validator 也要成本', effect: { wealthPct: -0.06 } },
    { name: '学习付费', desc: '买了份链上数据分析课程，投资自己', effect: { wealthPct: -0.07 } },
    { name: '域名续费', desc: '续费了一堆ENS域名，希望将来能升值', effect: { wealthPct: -0.05 } },
    { name: '工具订阅', desc: 'Nansen/Dune会员续费，数据工具不能断', effect: { wealthPct: -0.08 } },
    { name: '饭钱换U', desc: '生活费用完了，卖点币换人民币吃饭', effect: { wealthPct: -0.06 } },
    { name: '提现手续费', desc: '交易所提币到钱包，手续费扣了一笔', effect: { wealthPct: -0.05 } },
    { name: '跨链手续费', desc: '资产跨链过桥费，Layer2也要成本', effect: { wealthPct: -0.06 } },
    { name: 'CEX出金损耗', desc: '出金到银行卡，汇率差和手续费吃掉一些', effect: { wealthPct: -0.07 } },
    { name: '挖矿电费', desc: '矿机跑了一个月，电费账单来了', effect: { wealthPct: -0.08 } },
    { name: '模拟盘学习', desc: '用模拟盘练习合约策略，总结了经验教训，提升交易技能', effect: { wealthPct: 0.05 } },
    { name: 'NFT版税支出', desc: '抄底了个NFT，版税和手续费吃掉利润', effect: { wealthPct: -0.06 } },
    { name: '假消息止损', desc: '听到利空小止损一部分，结果消息是假的', effect: { wealthPct: -0.07 } },
    { name: '换手机转移', desc: '旧手机换新，转移钱包花了些Gas', effect: { wealthPct: -0.05 } },
    { name: 'VPN续费', desc: '科学上网工具续费，币圈人必备', effect: { wealthPct: -0.06 } },
    { name: '聚会AA', desc: '线下币友聚会吃饭，AA制分摊', effect: { wealthPct: -0.07 } },
    { name: '慈善捐赠', desc: '给开源项目捐了点ETH，支持生态建设', effect: { wealthPct: -0.06 } },
    { name: '推特蓝V', desc: '冲了推特蓝V想涨粉，结果币圈不在乎这个', effect: { wealthPct: -0.08 } },
    { name: 'Gas Wars', desc: '抢热门NFT Gas战输了，交易没成功Gas没了', effect: { wealthPct: -0.07 } },
    { name: '授权Gas', desc: '新协议第一次交互要授权，多花一笔Gas', effect: { wealthPct: -0.05 } },
    { name: '钱包归集', desc: '整理分散在各个钱包的资产，归集花了不少Gas', effect: { wealthPct: -0.06 } }
  ]
};

// 合并事件库（基础150个 + 扩展145个）
const HARDCORE_SMALL_EVENTS = {
  positive: [],
  negative: [],
  neutral: []
};

// 合并函数
function mergeEvents() {
  // 添加基础事件
  if (typeof HARDCORE_SMALL_EVENTS_BASE !== 'undefined') {
    HARDCORE_SMALL_EVENTS.positive.push(...HARDCORE_SMALL_EVENTS_BASE.positive);
    HARDCORE_SMALL_EVENTS.negative.push(...HARDCORE_SMALL_EVENTS_BASE.negative);
    HARDCORE_SMALL_EVENTS.neutral.push(...HARDCORE_SMALL_EVENTS_BASE.neutral);
  }
  
  // 添加扩展事件（如果存在）
  if (typeof HARDCORE_SMALL_EVENTS_EXTENDED !== 'undefined') {
    HARDCORE_SMALL_EVENTS.positive.push(...HARDCORE_SMALL_EVENTS_EXTENDED.positive);
    HARDCORE_SMALL_EVENTS.negative.push(...HARDCORE_SMALL_EVENTS_EXTENDED.negative);
    HARDCORE_SMALL_EVENTS.neutral.push(...HARDCORE_SMALL_EVENTS_EXTENDED.neutral);
  }
  
  console.log(`[HardcoreData] 小事件库加载完成: ${HARDCORE_SMALL_EVENTS.positive.length}正 / ${HARDCORE_SMALL_EVENTS.negative.length}负 / ${HARDCORE_SMALL_EVENTS.neutral.length}中性`);
}

// 页面加载时执行合并
if (typeof window !== 'undefined') {
  // 延迟合并，确保扩展库已加载
  setTimeout(mergeEvents, 0);
}

// ==================== 路径决策映射 ====================
const HARDCORE_PATH_DECISIONS = {
  trading: typeof HARDCORE_TRADING_DECISIONS !== 'undefined' ? HARDCORE_TRADING_DECISIONS : [],
  kol: typeof HARDCORE_KOL_DECISIONS !== 'undefined' ? HARDCORE_KOL_DECISIONS : [],
  job: typeof HARDCORE_JOB_DECISIONS !== 'undefined' ? HARDCORE_JOB_DECISIONS : [],
  launch: typeof HARDCORE_LAUNCH_DECISIONS !== 'undefined' ? HARDCORE_LAUNCH_DECISIONS : [],
  invest: typeof HARDCORE_INVEST_DECISIONS !== 'undefined' ? HARDCORE_INVEST_DECISIONS : [],
  staking: typeof HARDCORE_STAKING_DECISIONS !== 'undefined' ? HARDCORE_STAKING_DECISIONS : [],
  // 空投路径复用全局决策（暂无专门空投决策文件）
  airdrop: typeof HARDCORE_GLOBAL_DECISIONS !== 'undefined' ? HARDCORE_GLOBAL_DECISIONS : []
};

// ==================== 导出 ====================
if (typeof window !== 'undefined') {
  window.HARDCORE_SMALL_EVENTS_BASE = HARDCORE_SMALL_EVENTS_BASE;
  window.HARDCORE_SMALL_EVENTS = HARDCORE_SMALL_EVENTS;
  window.HARDCORE_PATH_DECISIONS = HARDCORE_PATH_DECISIONS;
}
