/**
 * 硬核模式 - KOL博主路径决策事件库 (150个事件)
 * 涵盖：内容选型、shill尽调、粉丝互动、广告选择、声望管理、热点跟进、合作判断、平台规则适应等
 */

const HARDCORE_KOL_DECISIONS = [
  // ========== 001-010: 初始阶段/基础决策 ==========
  {
    id: 'kol_001',
    category: 'shill',
    title: '热点项目邀shill',
    desc: '一个刚上线一周的DeFi项目找到你，承诺支付5 ETH的推广费，要求你发推文喊单。项目方声称"即将上线币安"，但未提供任何审计报告。',
    choices: [
      { emoji: '🔍', text: '先尽调再接单', hint: '要求看审计报告、团队背景，再决定', isCorrect: true, effect: { wealthPct: 0.20 } },
      { emoji: '💰', text: '直接接推广', hint: '5 ETH很香，先发再说', isCorrect: false, effect: { wealthPct: -0.07 } },
      { emoji: '🙅', text: '直接拒绝', hint: '不赚这钱，但也没增长', isCorrect: false, effect: { wealthPct: 0.01 } }
    ],
    explanation: '尽调是KOL的基本功，草率接推广若项目rug，粉丝损失会导致长期信誉崩塌。'
  },
  {
    id: 'kol_002',
    category: 'fans',
    title: '粉丝破10万',
    desc: '你的X账号粉丝突破10万大关，广告邀约如雪片般飞来，每天都有3-5个项目找你合作。',
    choices: [
      { emoji: '✅', text: '精选优质项目接', hint: '只接有审计、有背书的头部项目', isCorrect: true, effect: { wealthPct: 0.31 } },
      { emoji: '🤑', text: '来者不拒全接', hint: '趁热度多变现', isCorrect: false, effect: { wealthPct: -0.07 } },
      { emoji: '📵', text: '暂时不接广告', hint: '专注内容涨粉', isCorrect: false, effect: { wealthPct: 0.10 } }
    ],
    explanation: '粉丝量暴涨时更需要爱惜羽毛，精选合作能建立长期信任，为百万粉打基础。'
  },
  {
    id: 'kol_003',
    category: 'content',
    title: '内容路线选择',
    desc: '你需要决定主要的内容创作方向：是坚持原创深度分析，还是快速跟进热点搬运翻译？',
    choices: [
      { emoji: '📝', text: '坚持原创分析', hint: '写深度线程，建立个人品牌', isCorrect: true, effect: { wealthPct: 0.28 } },
      { emoji: '🔥', text: '追热点抄作业', hint: '快速转发翻译，蹭流量', isCorrect: false, effect: { wealthPct: 0.07 } },
      { emoji: '🎯', text: '两者结合', hint: '原创+热点各占一半', isCorrect: false, effect: { wealthPct: 0.15 } }
    ],
    explanation: '原创内容是KOL的核心竞争力，抄袭/搬运短期有效但无法建立护城河。'
  },
  {
    id: 'kol_004',
    category: 'content',
    title: '熊市内容策略',
    desc: '市场进入深熊，BTC跌破前低，你的粉丝普遍亏损严重，情绪低落，互动率大幅下降。',
    choices: [
      { emoji: '💪', text: '发励志正能量', hint: '分享穿越牛熊经验，鼓励大家', isCorrect: true, effect: { wealthPct: 0.14 } },
      { emoji: '📉', text: '发看空分析', hint: '预测更低点位，提醒风险', isCorrect: false, effect: { wealthPct: -0.07 } },
      { emoji: '🤐', text: '暂时停更', hint: '等行情好转再说', isCorrect: false, effect: { wealthPct: -0.10 } }
    ],
    explanation: '熊市是建立情感连接的最佳时机，正能量内容能帮助粉丝，也会让你在反弹时获得更多loyalty。'
  },
  {
    id: 'kol_005',
    category: 'reputation',
    title: 'shill后项目rug',
    desc: '两个月前你推广的一个GameFi项目突然rug pull，粉丝在评论区炸锅，有人声称"跟着你亏了5万"。',
    choices: [
      { emoji: '🙏', text: '公开道歉+复盘', hint: '承认错误，分享教训，承诺改进尽调', isCorrect: true, effect: { wealthPct: 0.02 } },
      { emoji: '🤷', text: '删除推文装死', hint: '当没发生过', isCorrect: false, effect: { wealthPct: -0.26 } },
      { emoji: '⚔️', text: '反驳说自己也亏了', hint: '强调自己也是受害者', isCorrect: false, effect: { wealthPct: -0.16 } }
    ],
    explanation: '面对错误的态度决定KOL能走多远，真诚道歉和复盘能挽回部分信任，逃避只会彻底失去credibility。'
  },
  {
    id: 'kol_006',
    category: 'strategy',
    title: '互推大V机会',
    desc: '一个50万粉的DeFi大V私信你，提议互相推荐。对方粉丝画像与你的有一定重叠，但领域不完全相同。',
    choices: [
      { emoji: '🤝', text: '找互补大V合作', hint: '选择不同细分领域的大V互推', isCorrect: true, effect: { wealthPct: 0.33 } },
      { emoji: '👥', text: '直接接受互推', hint: '快速涨粉机会', isCorrect: false, effect: { wealthPct: 0.15 } },
      { emoji: '🚫', text: '拒绝互推', hint: '想靠内容自然增长', isCorrect: false, effect: { wealthPct: 0.03 } }
    ],
    explanation: '与互补领域的大V互推效果最好，能触达精准新用户，而不是重复触达同一批人。'
  },
  {
    id: 'kol_007',
    category: 'strategy',
    title: 'X算法变化',
    desc: 'X平台算法再次调整，你的推文浏览量突然下降40%，旧的内容策略似乎不再有效。',
    choices: [
      { emoji: '📊', text: '研究调整内容', hint: '分析新算法，优化内容格式和发布时间', isCorrect: true, effect: { wealthPct: 0.18 } },
      { emoji: '💸', text: '花钱买推广', hint: '用X Premium加推', isCorrect: false, effect: { wealthPct: 0.00 } },
      { emoji: '😤', text: '抱怨算法不公', hint: '发推吐槽X平台', isCorrect: false, effect: { wealthPct: -0.06 } }
    ],
    explanation: '平台算法变化是常态，快速适应新规则的能力是KOL的核心竞争力之一。'
  },
  {
    id: 'kol_008',
    category: 'reputation',
    title: '粉丝质疑选项目',
    desc: '一位资深粉丝在你评论区质疑："最近推广的项目质量明显下降，是不是只看钱不接好项目了？"',
    choices: [
      { emoji: '💬', text: '真诚回应解释', hint: '解释选项目标准，邀请粉丝监督', isCorrect: true, effect: { wealthPct: 0.11 } },
      { emoji: '🚫', text: '拉黑删评', hint: '不想看到负面评论', isCorrect: false, effect: { wealthPct: -0.15 } },
      { emoji: '😠', text: '回怼粉丝', hint: '说自己已经够良心了', isCorrect: false, effect: { wealthPct: -0.19 } }
    ],
    explanation: '负面反馈是改进的机会，真诚回应能化危机为转机，展现你的专业和担当。'
  },
  {
    id: 'kol_009',
    category: 'content',
    title: '热点Meme viral',
    desc: '一个新的Meme币突然爆火，社区讨论度极高，大家都在发相关内容蹭热度。',
    choices: [
      { emoji: '🎯', text: '原创角度切入', hint: '从文化/机制角度深度分析，不直接喊单', isCorrect: true, effect: { wealthPct: 0.33 } },
      { emoji: '🚀', text: '赶紧喊单', hint: '发推说"这个币要冲了"', isCorrect: false, effect: { wealthPct: 0.09 } },
      { emoji: '🙅', text: '不蹭热度', hint: 'Meme风险太高不参与', isCorrect: false, effect: { wealthPct: -0.02 } }
    ],
    explanation: '热点中保持独立思考，用原创角度分析比盲目跟风更能建立专业形象。'
  },
  {
    id: 'kol_010',
    category: 'shill',
    title: '广告费高但项目存疑',
    desc: '一个新Meme币项目方开出10 ETH的天价推广费，但你发现项目合约有可疑的mint函数，团队匿名。',
    choices: [
      { emoji: '🛡️', text: '拒绝保声望', hint: '10 ETH虽多，但不值得冒信誉风险', isCorrect: true, effect: { wealthPct: 0.19 } },
      { emoji: '⚠️', text: '接但提示风险', hint: '收钱发推，但加免责声明', isCorrect: false, effect: { wealthPct: 0.07 } },
      { emoji: '🤑', text: '直接接推广', hint: '先赚再说，粉丝亏不亏不管', isCorrect: false, effect: { wealthPct: -0.15 } }
    ],
    explanation: '可疑项目的钱烫手，即使加了免责声明，粉丝亏损后依然会迁怒于推荐者。'
  },

  // ========== 011-020: 成长阶段/进阶决策 ==========
  {
    id: 'kol_011',
    category: 'content',
    title: '内容疲劳期',
    desc: '连续高强度更新3个月，你感到灵感枯竭，数据也开始下滑，明显进入疲劳期。',
    choices: [
      { emoji: '🏖️', text: '休息规划调整', hint: '短暂停更，重新规划内容方向', isCorrect: true, effect: { wealthPct: 0.07 } },
      { emoji: '🔄', text: '降低更新频率', hint: '从日更改为隔日更', isCorrect: false, effect: { wealthPct: -0.03 } },
      { emoji: '💊', text: '硬撑继续更', hint: '质量下降也要保持频率', isCorrect: false, effect: { wealthPct: -0.10 } }
    ],
    explanation: '适当休息是为了更好的出发，粉丝宁愿等高质量内容也不愿看敷衍的更新。'
  },
  {
    id: 'kol_012',
    category: 'reputation',
    title: '合作大V撕逼',
    desc: '你互推过的一位大V卷入丑闻，被曝shill rug项目，现在有人翻出你们之前的互动记录。',
    choices: [
      { emoji: '🤐', text: '保持中立观望', hint: '不站队，等事情明朗', isCorrect: true, effect: { wealthPct: 0.01 } },
      { emoji: '⚔️', text: '切割划清界限', hint: '发推声明不再合作', isCorrect: false, effect: { wealthPct: -0.03 } },
      { emoji: '🤝', text: '力挺大V', hint: '相信朋友，继续支持', isCorrect: false, effect: { wealthPct: -0.17 } }
    ],
    explanation: 'KOL圈的撕逼复杂，贸然站队可能伤及自身，保持中立是最稳妥的选择。'
  },
  {
    id: 'kol_013',
    category: 'strategy',
    title: '推文被限流',
    desc: '最近几条推文的曝光量异常低，疑似被X平台限流，互动率只有平时的1/3。',
    choices: [
      { emoji: '⏰', text: '优化发布时间', hint: '测试不同时段，调整内容格式', isCorrect: true, effect: { wealthPct: 0.10 } },
      { emoji: '💰', text: '开Premium+', hint: '付费解锁更高曝光', isCorrect: false, effect: { wealthPct: 0.02 } },
      { emoji: '📢', text: '群发求转发', hint: '私信朋友帮忙转', isCorrect: false, effect: { wealthPct: -0.01 } }
    ],
    explanation: '限流时应该研究平台规则优化内容，付费只是权宜之计，骚扰朋友会消耗人情。'
  },
  {
    id: 'kol_014',
    category: 'reputation',
    title: '粉丝问投资建议',
    desc: '一位粉丝私信问你："现在满仓什么币能翻10倍？"语气急迫，似乎想梭哈。',
    choices: [
      { emoji: '🙅', text: '不给具体建议', hint: '分享分析方法，但不推荐具体标的', isCorrect: true, effect: { wealthPct: 0.04 } },
      { emoji: '💡', text: '推荐你shill的币', hint: '正好有合作项目', isCorrect: false, effect: { wealthPct: -0.04 } },
      { emoji: '🎲', text: '随口说几个币', hint: '随便给几个热门币名', isCorrect: false, effect: { wealthPct: -0.09 } }
    ],
    explanation: '给投资建议是红线，赚了没人谢你，亏了一定被喷，永远只分享方法不推荐标的。'
  },
  {
    id: 'kol_015',
    category: 'content',
    title: '热点监管新闻',
    desc: 'SEC突然起诉某大型交易所，市场恐慌，粉丝迫切需要解读，但你不是法律专业背景。',
    choices: [
      { emoji: '📰', text: '客观分析影响', hint: '基于公开信息分析对市场的影响，不瞎解读法律', isCorrect: true, effect: { wealthPct: 0.17 } },
      { emoji: '🎭', text: '蹭热度夸大', hint: '用夸张标题吸引眼球', isCorrect: false, effect: { wealthPct: 0.03 } },
      { emoji: '🤐', text: '不发表看法', hint: '怕说错话', isCorrect: false, effect: { wealthPct: -0.03 } }
    ],
    explanation: '不懂的领域不要装懂，从市场角度分析比瞎解读法律更安全有效。'
  },
  {
    id: 'kol_016',
    category: 'shill',
    title: '蓝筹项目长线合作',
    desc: '某蓝筹NFT项目方找你签半年长约，月付3 ETH，要求定期发推，但条款限制你接竞品。',
    choices: [
      { emoji: '📝', text: '签约长期合作', hint: '稳定收入，蓝筹项目风险低', isCorrect: true, effect: { wealthPct: 0.37 } },
      { emoji: '🚫', text: '拒绝限制条款', hint: '保持自由度', isCorrect: false, effect: { wealthPct: 0.01 } },
      { emoji: '💰', text: '要求涨价', hint: '月付5 ETH才签', isCorrect: false, effect: { wealthPct: 0.05 } }
    ],
    explanation: '与蓝筹项目长期绑定是优质选择，稳定收入+低 reputational risk，短期自由度损失值得。'
  },
  {
    id: 'kol_017',
    category: 'content',
    title: '内容形式选择',
    desc: '你需要决定主力内容形式：是做短视频(15-60秒)还是长图文线程？',
    choices: [
      { emoji: '🎬', text: '主攻视频', hint: '适应算法偏好，但制作成本高', isCorrect: true, effect: { wealthPct: 0.25 } },
      { emoji: '📝', text: '坚持图文线程', hint: '你的强项，但流量增长慢', isCorrect: false, effect: { wealthPct: 0.18 } },
      { emoji: '🔄', text: '两者兼顾', hint: '精力分散，两边都不精', isCorrect: false, effect: { wealthPct: 0.17 } }
    ],
    explanation: '视频是当前平台算法推荐的优先级形式，虽然成本高但涨粉效率是图文的2-3倍。'
  },
  {
    id: 'kol_018',
    category: 'fans',
    title: '社区建群选择',
    desc: '粉丝数量达到一定规模，有人提议建立社区群(TG/Discord)，方便深度交流。',
    choices: [
      { emoji: '💬', text: '建TG群', hint: '华语用户多，活跃度高', isCorrect: true, effect: { wealthPct: 0.15 } },
      { emoji: '🎮', text: '建Discord', hint: 'Web3标配，功能强大', isCorrect: false, effect: { wealthPct: 0.12 } },
      { emoji: '🙅', text: '不建群', hint: '维护成本高，事多', isCorrect: false, effect: { wealthPct: -0.03 } }
    ],
    explanation: 'TG对华语KOL更友好，Discord虽然专业但中文用户门槛高，TG是性价比之选。'
  },
  {
    id: 'kol_019',
    category: 'reputation',
    title: '假新闻传播',
    desc: '某"币安上线XX币"的假截图在社区疯传，你的一位粉丝@你求证真伪。',
    choices: [
      { emoji: '✅', text: '辟谣打假', hint: '查证后告诉粉丝是假的，提醒警惕', isCorrect: true, effect: { wealthPct: 0.25 } },
      { emoji: '🔄', text: '转发求验证', hint: '让其他大V来辨别', isCorrect: false, effect: { wealthPct: -0.03 } },
      { emoji: '🤐', text: '不回应', hint: '多一事不如少一事', isCorrect: false, effect: { wealthPct: -0.01 } }
    ],
    explanation: '主动辟谣建立专业可信形象，这种价值远大于一条普通内容，粉丝会记住你的担当。'
  },
  {
    id: 'kol_020',
    category: 'strategy',
    title: '粉丝破百万',
    desc: '恭喜！你的X账号粉丝突破100万，成为真正的头部KOL，现在面临变现与口碑的平衡难题。',
    choices: [
      { emoji: '⚖️', text: '平衡变现与口碑', hint: '严控合作质量，长期主义', isCorrect: true, effect: { wealthPct: 0.49 } },
      { emoji: '🤑', text: '全力变现', hint: '趁红利期多赚钱', isCorrect: false, effect: { wealthPct: 0.33 } },
      { emoji: '🤐', text: '减少变现', hint: '爱惜羽毛，少接广告', isCorrect: false, effect: { wealthPct: 0.27 } }
    ],
    explanation: '百万粉后要着眼长期，口碑崩塌会瞬间失去一切，平衡的艺术决定能红多久。'
  }
];

// 导出
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { HARDCORE_KOL_DECISIONS };
}


// ========== 021-050: 危机处理/风险管理/进阶运营 ==========
HARDCORE_KOL_DECISIONS.push(
  {
    id: 'kol_021',
    category: 'strategy',
    title: '推文被举报',
    desc: '你的一条分析推文被大量举报，账号收到警告，面临被封风险。',
    choices: [
      { emoji: '📧', text: '立即申诉', hint: '联系客服，说明内容合规', isCorrect: true, effect: { wealthPct: 0.01 } },
      { emoji: '🗑️', text: '主动删除', hint: '息事宁人', isCorrect: false, effect: { wealthPct: -0.03 } },
      { emoji: '🔥', text: '发推对抗', hint: '指责平台审查', isCorrect: false, effect: { wealthPct: -0.11 } }
    ],
    explanation: '账号是KOL的生命线，收到警告应立即按规则申诉，对抗可能加速封号。'
  },
  {
    id: 'kol_022',
    category: 'content',
    title: '热点AI币爆发',
    desc: 'OpenAI发布重大更新，AI板块代币集体暴涨，市场FOMO情绪严重。',
    choices: [
      { emoji: '📊', text: '分析尽调', hint: '深入研究项目基本面后输出观点', isCorrect: true, effect: { wealthPct: 0.23 } },
      { emoji: '🚀', text: '赶紧喊单', hint: '趁热推荐几个AI币', isCorrect: false, effect: { wealthPct: 0.06 } },
      { emoji: '🤐', text: '不蹭热点', hint: '等热度过了再说', isCorrect: false, effect: { wealthPct: -0.05 } }
    ],
    explanation: '热点中保持冷静分析能力，不跟风喊单，才能建立专业可信的形象。'
  },
  {
    id: 'kol_023',
    category: 'shill',
    title: '品牌广告合作',
    desc: '某传统金融品牌(非crypto)想找你投放广告，要求你"淡化crypto属性"，看起来更像传统理财。',
    choices: [
      { emoji: '🎯', text: '选相关品牌', hint: '只接真正理解crypto的品牌', isCorrect: true, effect: { wealthPct: 0.14 } },
      { emoji: '💰', text: '为了钱接', hint: '收入不错，稍微妥协一下', isCorrect: false, effect: { wealthPct: 0.04 } },
      { emoji: '🚫', text: '直接拒绝', hint: '不接非crypto品牌', isCorrect: false, effect: { wealthPct: 0.01 } }
    ],
    explanation: '接与自身定位不符的广告会稀释品牌价值，短期收入不值得长期定位混乱。'
  },
  {
    id: 'kol_024',
    category: 'content',
    title: '内容更新节奏',
    desc: '你正在纠结更新频率：是保持高频日更，还是降低频率追求单条质量？',
    choices: [
      { emoji: '📅', text: '周更高质量', hint: '一周3-4条精品线程', isCorrect: true, effect: { wealthPct: 0.21 } },
      { emoji: '📆', text: '坚持日更', hint: '每天一条，保持存在感', isCorrect: false, effect: { wealthPct: 0.06 } },
      { emoji: '🎲', text: '看心情更新', hint: '随缘发推', isCorrect: false, effect: { wealthPct: -0.07 } }
    ],
    explanation: '内容行业已从"流量为王"转向"质量为王"，精品内容的长尾效应远超日常水文。'
  },
  {
    id: 'kol_025',
    category: 'fans',
    title: '粉丝掉粉期',
    desc: '连续两周粉丝净增长为负，每天掉粉比涨粉多，你开始焦虑。',
    choices: [
      { emoji: '🤝', text: '增加互动拉回', hint: '多回复评论，办AMA，增强连接', isCorrect: true, effect: { wealthPct: 0.13 } },
      { emoji: '🔥', text: '发争议内容', hint: '博眼球拉回流量', isCorrect: false, effect: { wealthPct: -0.01 } },
      { emoji: '🎁', text: '办抽奖活动', hint: '送币拉粉', isCorrect: false, effect: { wealthPct: -0.03 } }
    ],
    explanation: '掉粉期最该做的是加强与核心粉丝的情感连接，而不是用噱头吸引路人粉。'
  },
  {
    id: 'kol_026',
    category: 'content',
    title: 'shill后项目大涨',
    desc: '你之前推广的一个项目涨幅超过10倍，跟着买的粉丝都赚翻了，评论区一片感恩。',
    choices: [
      { emoji: '📚', text: '分享选项目经验', hint: '复盘为什么选这个项目，教大家方法', isCorrect: true, effect: { wealthPct: 0.28 } },
      { emoji: '🤑', text: '晒收益截图', hint: '自己也赚了不少，炫耀一下', isCorrect: false, effect: { wealthPct: -0.01 } },
      { emoji: '💰', text: '趁热接更多广告', hint: '现在流量好，多变现', isCorrect: false, effect: { wealthPct: 0.15 } }
    ],
    explanation: '成功案例是建立专业形象的机会，分享方法比炫耀收益更有价值，也能为长期背书。'
  },
  {
    id: 'kol_027',
    category: 'strategy',
    title: 'X平台新功能',
    desc: 'X平台推出了新的长文章功能和直播功能，你还在犹豫要不要尝试。',
    choices: [
      { emoji: '🚀', text: '抢先使用', hint: '平台通常会扶持新功能，早用有流量红利', isCorrect: true, effect: { wealthPct: 0.17 } },
      { emoji: '👀', text: '观望别人', hint: '等别人试水成功再跟进', isCorrect: false, effect: { wealthPct: 0.05 } },
      { emoji: '🙅', text: '不折腾', hint: '现有模式挺好的', isCorrect: false, effect: { wealthPct: -0.03 } }
    ],
    explanation: '平台新功能早期有流量扶持，抢占先机往往能获得超额回报。'
  },
  {
    id: 'kol_028',
    category: 'strategy',
    title: '跨平台扩展',
    desc: '你在X上已经很成功，现在考虑是否要扩展到YouTube/播客等其他平台。',
    choices: [
      { emoji: '🌐', text: '多平台布局', hint: 'X+YouTube+播客，分散风险', isCorrect: true, effect: { wealthPct: 0.29 } },
      { emoji: '🎯', text: '专注X', hint: '把一个平台做到极致', isCorrect: false, effect: { wealthPct: 0.13 } },
      { emoji: '😰', text: '精力不够放弃', hint: '先做好X再说', isCorrect: false, effect: { wealthPct: 0.03 } }
    ],
    explanation: '跨平台能触达不同用户群体，同时分散单一平台政策风险，是头部KOL的必经之路。'
  },
  {
    id: 'kol_029',
    category: 'reputation',
    title: '热点诈骗曝光',
    desc: '你发现一个正在病毒式传播的"空投活动"实际上是钓鱼诈骗，已有粉丝询问你是否参与。',
    choices: [
      { emoji: '🚨', text: '立即发推警示', hint: '曝光骗局，提醒粉丝不要上当', isCorrect: true, effect: { wealthPct: 0.30 } },
      { emoji: '💬', text: '私聊提醒', hint: '只告诉问的粉丝', isCorrect: false, effect: { wealthPct: 0.04 } },
      { emoji: '🤐', text: '不管闲事', hint: '怕得罪骗子背后的人', isCorrect: false, effect: { wealthPct: -0.06 } }
    ],
    explanation: '主动曝光诈骗保护粉丝，这种担当会极大提升公信力和粉丝忠诚度。'
  },
  {
    id: 'kol_030',
    category: 'shill',
    title: '广告费谈价',
    desc: '一个优质项目找你推广，你的报价是5 ETH，对方预算只有3 ETH，正在谈判。',
    choices: [
      { emoji: '💎', text: '高价选好项目', hint: '坚持5 ETH，但保证内容质量', isCorrect: true, effect: { wealthPct: 0.17 } },
      { emoji: '🤝', text: '降到3 ETH接', hint: '项目不错，少赚点也值得', isCorrect: false, effect: { wealthPct: 0.11 } },
      { emoji: '🚫', text: '低于5不接', hint: '不议价，谈不拢就算了', isCorrect: false, effect: { wealthPct: 0.00 } }
    ],
    explanation: '优质项目值得适当妥协，但也要保持自身定价权，过低价格会拉低品牌价值。'
  },
  {
    id: 'kol_031',
    category: 'content',
    title: '内容争议话题',
    desc: '某个有争议的话题(如某公链vs某公链)在社区引发激烈争论，你持有明确观点。',
    choices: [
      { emoji: '⚖️', text: '中立分析', hint: '客观分析双方优缺点，不站队', isCorrect: true, effect: { wealthPct: 0.17 } },
      { emoji: '⚔️', text: '站队表态', hint: '明确支持一方，赢得铁粉', isCorrect: false, effect: { wealthPct: 0.12 } },
      { emoji: '🤐', text: '不参与', hint: '避而远之', isCorrect: false, effect: { wealthPct: -0.03 } }
    ],
    explanation: '争议话题中保持中立分析能吸引双方理性观众，站队虽然短期涨粉但会永久失去另一部分受众。'
  },
  {
    id: 'kol_032',
    category: 'reputation',
    title: '粉丝私信问币',
    desc: '一位新粉丝私信问你"现在买什么币好"，态度诚恳但明显想抄作业。',
    choices: [
      { emoji: '📖', text: '标准回复不建议', hint: '发送预设回复：不提供投资建议，只分享分析方法', isCorrect: true, effect: { wealthPct: 0.03 } },
      { emoji: '💡', text: '推荐一个币', hint: '随口说一个你了解的币', isCorrect: false, effect: { wealthPct: -0.07 } },
      { emoji: '💰', text: '让他付费咨询', hint: '引导进付费群', isCorrect: false, effect: { wealthPct: -0.03 } }
    ],
    explanation: '对投资建议的标准化回复是KOL必备，既能保护自己也能教育粉丝独立思考。'
  },
  {
    id: 'kol_033',
    category: 'strategy',
    title: '合作水军刷量',
    desc: '一个推广中介私下联系你："花0.5 ETH可以帮你刷10万浏览量，让数据更好看，更容易接高价广告"。',
    choices: [
      { emoji: '🛡️', text: '拒绝保持真实', hint: '真实数据才是长期资产', isCorrect: true, effect: { wealthPct: 0.06 } },
      { emoji: '🤔', text: '考虑试试', hint: '只刷一次看看效果', isCorrect: false, effect: { wealthPct: -0.09 } },
      { emoji: '🚫', text: '举报中介', hint: '曝光这种灰色操作', isCorrect: false, effect: { wealthPct: 0.02 } }
    ],
    explanation: '刷量一旦被曝光就是毁灭性打击，真实的数据和粉丝才是KOL最宝贵的资产。'
  },
  {
    id: 'kol_034',
    category: 'content',
    title: '热点结束切换',
    desc: '你蹭了半个月的AI热点，现在热度明显下降，需要决定下一步内容方向。',
    choices: [
      { emoji: '🎯', text: '及时转换', hint: '快速切入下一个潜力赛道', isCorrect: true, effect: { wealthPct: 0.12 } },
      { emoji: '🔥', text: '继续硬蹭', hint: '相信AI还有第二波', isCorrect: false, effect: { wealthPct: -0.05 } },
      { emoji: '📊', text: '回归基本面', hint: '不管热点，继续常规内容', isCorrect: false, effect: { wealthPct: 0.05 } }
    ],
    explanation: '热点有生命周期，及时切换到下一个潜力赛道是保持增长的关键。'
  },
  {
    id: 'kol_035',
    category: 'strategy',
    title: '账号安全管理',
    desc: '最近社区有多位KOL被盗号发诈骗链接，你需要加强账号安全。',
    choices: [
      { emoji: '🔐', text: '2FA+不分享', hint: '开双重验证，密钥不存云端，不向任何人透露', isCorrect: true, effect: { wealthPct: 0.03 } },
      { emoji: '📱', text: '只开2FA', hint: '基本安全措施', isCorrect: false, effect: { wealthPct: 0.00 } },
      { emoji: '😎', text: '相信自己不会被盗', hint: '目前挺安全的', isCorrect: false, effect: { wealthPct: -0.06 } }
    ],
    explanation: 'KOL账号被盗会造成粉丝财产损失和自身信誉崩塌，安全投入再严格也不为过。'
  },
  {
    id: 'kol_036',
    category: 'shill',
    title: 'shill Meme短线',
    desc: '一个Meme币项目方找你推广，强调"快速进出，短期博弈"，你知道这种项目99%会归零。',
    choices: [
      { emoji: '⚠️', text: '小注明确风险', hint: '如果推，必须强调"只玩小钱，随时归零"', isCorrect: true, effect: { wealthPct: 0.04 } },
      { emoji: '🚫', text: '直接拒绝', hint: '这种钱不赚', isCorrect: false, effect: { wealthPct: 0.04 } },
      { emoji: '🚀', text: '正常推广', hint: '不强调风险，当正常项目推', isCorrect: false, effect: { wealthPct: -0.18 } }
    ],
    explanation: 'Meme币可以推但必须充分提示风险，让粉丝用娱乐心态参与，而不是当作投资建议。'
  },
  {
    id: 'kol_037',
    category: 'content',
    title: '内容数据分析',
    desc: '你分析了过去半年的推文数据，发现某类内容的互动率明显高于其他，但你个人兴趣在其他方向。',
    choices: [
      { emoji: '📈', text: '优化高赞型', hint: '顺应数据，多产受众喜欢的内容', isCorrect: true, effect: { wealthPct: 0.17 } },
      { emoji: '❤️', text: '坚持兴趣导向', hint: '做自己喜欢的内容', isCorrect: false, effect: { wealthPct: 0.06 } },
      { emoji: '⚖️', text: '找平衡点', hint: '70%数据导向+30%兴趣', isCorrect: false, effect: { wealthPct: 0.13 } }
    ],
    explanation: '数据反映受众偏好，顺应数据优化内容结构是职业KOL的基本素养。'
  },
  {
    id: 'kol_038',
    category: 'fans',
    title: '粉丝反馈批评',
    desc: '一位老粉丝发长文批评你"最近内容质量下滑，广告太多"，引发不少共鸣。',
    choices: [
      { emoji: '👂', text: '倾听改进', hint: '真诚感谢反馈，公开承诺调整', isCorrect: true, effect: { wealthPct: 0.15 } },
      { emoji: '🛡️', text: '解释辩解', hint: '说明自己的难处', isCorrect: false, effect: { wealthPct: -0.04 } },
      { emoji: '🚫', text: '拉黑处理', hint: '不想看到负面声音', isCorrect: false, effect: { wealthPct: -0.19 } }
    ],
    explanation: '老粉丝的批评往往最真诚，虚心接受并改进能化危机为转机，甚至赢得更多尊重。'
  },
  {
    id: 'kol_039',
    category: 'strategy',
    title: '大V互关机会',
    desc: '一位100万粉的顶级大V关注了你并点赞了一条推文，这是建立联系的好机会。',
    choices: [
      { emoji: '🤝', text: '选真实互动', hint: '真诚评论对方内容，建立真实关系', isCorrect: true, effect: { wealthPct: 0.17 } },
      { emoji: '📩', text: '私信求互推', hint: '直接发合作邀请', isCorrect: false, effect: { wealthPct: 0.03 } },
      { emoji: '🙏', text: '发推感恩', hint: '专门发推感谢大V关注', isCorrect: false, effect: { wealthPct: -0.03 } }
    ],
    explanation: '与大V建立关系需要真诚互动，直接求合作显得功利，公开跪舔更掉价。'
  },
  {
    id: 'kol_040',
    category: 'reputation',
    title: '广告后项目失败',
    desc: '你推广的一个项目(非rug)因市场原因失败了，团队还在努力但币价跌去90%，粉丝抱怨。',
    choices: [
      { emoji: '🙏', text: '公开跟进', hint: '持续关注项目进展，承认判断失误', isCorrect: true, effect: { wealthPct: 0.01 } },
      { emoji: '🗑️', text: '删除相关推文', hint: '就当没推过', isCorrect: false, effect: { wealthPct: -0.17 } },
      { emoji: '🤷', text: '市场行为不负责', hint: '说自己只是分享不是保证', isCorrect: false, effect: { wealthPct: -0.10 } }
    ],
    explanation: '项目失败不等于rug，持续关注并承认判断失误比假装无事更能维持信誉。'
  },
  {
    id: 'kol_041',
    category: 'content',
    title: '内容形式深度',
    desc: '你需要决定内容深度：是写万字长文深度线程，还是发短平快的观点推？',
    choices: [
      { emoji: '📚', text: '深度线程', hint: '万字长文，建立专业护城河', isCorrect: true, effect: { wealthPct: 0.27 } },
      { emoji: '⚡', text: '短推观点', hint: '简单直接，易于传播', isCorrect: false, effect: { wealthPct: 0.12 } },
      { emoji: '🔄', text: '两者混发', hint: '长短结合', isCorrect: false, effect: { wealthPct: 0.17 } }
    ],
    explanation: '深度线程虽然产量低，但粉丝黏性和专业形象远超短推，是差异化竞争的关键。'
  },
  {
    id: 'kol_042',
    category: 'strategy',
    title: '牛市喊单压力',
    desc: '牛市FOMO情绪高涨，每天都有粉丝催你"推荐下一个100倍币"，你不推就掉粉。',
    choices: [
      { emoji: '🧘', text: '保持谨慎', hint: '坚持尽调标准，不随便喊单', isCorrect: true, effect: { wealthPct: 0.12 } },
      { emoji: '🚀', text: '顺应市场', hint: '推几个热门币满足粉丝', isCorrect: false, effect: { wealthPct: 0.07 } },
      { emoji: '🤐', text: '暂时停更', hint: '等熊市再说', isCorrect: false, effect: { wealthPct: -0.12 } }
    ],
    explanation: '牛市是最考验KOL定力的时期，坚持标准不跟风喊单才能在熊市保住信誉。'
  },
  {
    id: 'kol_043',
    category: 'fans',
    title: '粉丝破关庆祝',
    desc: '粉丝数突破一个整数关口(如20万)，你打算做点什么回馈粉丝。',
    choices: [
      { emoji: '🎁', text: '抽奖真给', hint: '自掏腰包发福利，真实抽奖', isCorrect: true, effect: { wealthPct: 0.18 } },
      { emoji: '💰', text: '拉赞助抽奖', hint: '找项目方赞助奖品', isCorrect: false, effect: { wealthPct: 0.09 } },
      { emoji: '🙏', text: '口头感谢', hint: '发个感谢推文', isCorrect: false, effect: { wealthPct: 0.03 } }
    ],
    explanation: '自掏腰包回馈粉丝最能体现诚意，这种真实连接是花钱买不到的。'
  },
  {
    id: 'kol_044',
    category: 'strategy',
    title: '平台规则变化',
    desc: 'X平台突然宣布修改创作者收益规则，你的收入预计会下降30%。',
    choices: [
      { emoji: '📊', text: '快速适应', hint: '研究新规则，调整内容策略', isCorrect: true, effect: { wealthPct: 0.00 } },
      { emoji: '🌐', text: '多平台分散', hint: '加速布局其他平台', isCorrect: false, effect: { wealthPct: 0.10 } },
      { emoji: '😤', text: '发推抱怨', hint: '公开批评平台', isCorrect: false, effect: { wealthPct: -0.03 } }
    ],
    explanation: '平台政策变化是常态，快速适应新规则比抱怨更有用，多平台布局也是长期必要策略。'
  },
  {
    id: 'kol_045',
    category: 'content',
    title: '合作直播机会',
    desc: '一个知名的Web3播客邀请你做嘉宾，但你从未做过直播，有点紧张。',
    choices: [
      { emoji: '🎙️', text: '选好伙伴接', hint: '选择口碑好的播客，准备充分后参与', isCorrect: true, effect: { wealthPct: 0.22 } },
      { emoji: '🚫', text: '婉拒邀请', hint: '觉得自己没准备好', isCorrect: false, effect: { wealthPct: 0.03 } },
      { emoji: '🎲', text: '直接上', hint: '不准备，临场发挥', isCorrect: false, effect: { wealthPct: 0.02 } }
    ],
    explanation: '直播是建立深度连接的好方式，选择合适的平台和充分准备能让首秀成功。'
  },
  {
    id: 'kol_046',
    category: 'strategy',
    title: '内容备份策略',
    desc: '你意识到所有内容都存在X平台上，一旦被封就全没了，需要考虑备份。',
    choices: [
      { emoji: '💾', text: '多平台备份', hint: '同步到newsletter/博客/YouTube', isCorrect: true, effect: { wealthPct: 0.13 } },
      { emoji: '📄', text: '本地存档', hint: '定期导出保存', isCorrect: false, effect: { wealthPct: 0.01 } },
      { emoji: '🤷', text: '不备份', hint: '应该不会被封', isCorrect: false, effect: { wealthPct: -0.03 } }
    ],
    explanation: '多平台备份既防封号风险，又能触达不同受众，是一举两得的策略。'
  },
  {
    id: 'kol_047',
    category: 'content',
    title: '熊市励志内容',
    desc: '市场又跌了，你的粉丝情绪低落，有人留言说"想退圈了"。',
    choices: [
      { emoji: '💪', text: '发正能量', hint: '分享励志故事，鼓励大家坚持', isCorrect: true, effect: { wealthPct: 0.17 } },
      { emoji: '📉', text: '分析下跌原因', hint: '理性分析市场', isCorrect: false, effect: { wealthPct: 0.05 } },
      { emoji: '🤐', text: '不讨论行情', hint: '等涨回来再说', isCorrect: false, effect: { wealthPct: -0.05 } }
    ],
    explanation: '熊市中的情感支持能建立最牢固的粉丝关系，这些人会在牛市成为你的铁粉。'
  },
  {
    id: 'kol_048',
    category: 'strategy',
    title: '广告收入再投资',
    desc: '这个月广告收入不错，你在考虑是提现还是投资到内容创作上。',
    choices: [
      { emoji: '🎥', text: '投设备质量', hint: '买专业相机、麦克风，提升内容质量', isCorrect: true, effect: { wealthPct: 0.07 } },
      { emoji: '💰', text: '提现落袋', hint: '先变现，以后再说', isCorrect: false, effect: { wealthPct: 0.15 } },
      { emoji: '🎰', text: '投资加密货币', hint: '买币博更高收益', isCorrect: false, effect: { wealthPct: 0.05 } }
    ],
    explanation: '再投资于内容生产力是最稳健的长期投资，设备升级带来的质量提升会吸引更多合作机会。'
  },
  {
    id: 'kol_049',
    category: 'fans',
    title: '粉丝互动AMA',
    desc: '粉丝们希望定期举办AMA(Ask Me Anything)活动，但你时间有限。',
    choices: [
      { emoji: '🎤', text: '定期办AMA', hint: '每月一次，增强粉丝黏性', isCorrect: true, effect: { wealthPct: 0.20 } },
      { emoji: '📝', text: '文字问答', hint: '用问答形式替代直播', isCorrect: false, effect: { wealthPct: 0.07 } },
      { emoji: '🚫', text: '不办', hint: '太忙了没时间', isCorrect: false, effect: { wealthPct: -0.05 } }
    ],
    explanation: '定期AMA是增强粉丝黏性的有效方式，能建立更深层次的信任关系。'
  },
  {
    id: 'kol_050',
    category: 'strategy',
    title: '高声望大合作',
    desc: '你的声望很高，有顶级项目(如币安/OKX级别)找你谈年度合作，但要求排他。',
    choices: [
      { emoji: '🎯', text: '选匹配合作', hint: '选择与自身定位最契合的头部平台', isCorrect: true, effect: { wealthPct: 0.63 } },
      { emoji: '💰', text: '选出价最高', hint: '谁给得多选谁', isCorrect: false, effect: { wealthPct: 0.47 } },
      { emoji: '🚫', text: '不接受排他', hint: '保持自由度', isCorrect: false, effect: { wealthPct: 0.13 } }
    ],
    explanation: '与顶级平台的绑定是行业地位的象征，选择与自身调性匹配的合作伙伴能带来长期复利。'
  }
);


// ========== 051-100: 内容创作/Shill尽调/粉丝运营/广告选择/声望管理专题 ==========
HARDCORE_KOL_DECISIONS.push(
  // 内容创作专题 051-060
  {
    id: 'kol_051',
    category: 'content',
    title: '内容抄袭风波',
    desc: '有人指控你的一条线程抄袭了另一位KOL的内容，实际上你只是观点相似。',
    choices: [
      { emoji: '📄', text: '发布创作过程', hint: '展示草稿、参考资料，证明原创', isCorrect: true, effect: { wealthPct: 0.11 } },
      { emoji: '⚔️', text: '反击指控者', hint: '怼回去说自己没抄', isCorrect: false, effect: { wealthPct: -0.07 } },
      { emoji: '🤐', text: '冷处理', hint: '不回应，等热度过去', isCorrect: false, effect: { wealthPct: -0.03 } }
    ],
    explanation: '透明的创作过程是最佳辩护，展示证据比口水战更有说服力。'
  },
  {
    id: 'kol_052',
    category: 'content',
    title: '独家消息来源',
    desc: '一位声称是某项目内部员工的人私信你"独家爆料"，消息如果属实会是重磅。',
    choices: [
      { emoji: '🔍', text: '多方求证', hint: '找其他渠道验证，不急着发', isCorrect: true, effect: { wealthPct: 0.15 } },
      { emoji: '🚀', text: '抢先首发', hint: '先发了再说，抢流量', isCorrect: false, effect: { wealthPct: 0.09 } },
      { emoji: '🚫', text: '不发', hint: '怕惹麻烦', isCorrect: false, effect: { wealthPct: -0.03 } }
    ],
    explanation: '未经核实的"独家"风险极高，错误爆料会严重损害信誉，宁可不发也不能发错。'
  },
  {
    id: 'kol_053',
    category: 'content',
    title: '内容语言选择',
    desc: '你的受众中英文用户都有，在考虑主要用哪种语言输出内容。',
    choices: [
      { emoji: '🌐', text: '中英双语', hint: '中文为主，关键内容配英文版', isCorrect: true, effect: { wealthPct: 0.26 } },
      { emoji: '🇨🇳', text: '纯中文', hint: '专注华语市场', isCorrect: false, effect: { wealthPct: 0.13 } },
      { emoji: '🇺🇸', text: '转英文', hint: '英文受众更大', isCorrect: false, effect: { wealthPct: 0.14 } }
    ],
    explanation: '中英双语能最大化受众覆盖，同时保持中文市场的深度连接。'
  },
  {
    id: 'kol_054',
    category: 'content',
    title: '内容垂直细分',
    desc: '你在考虑是否要进一步垂直细分，比如从"Web3综合"转向专注"DeFi挖矿"。',
    choices: [
      { emoji: '🎯', text: '垂直深耕', hint: '专注一个细分领域成为专家', isCorrect: true, effect: { wealthPct: 0.20 } },
      { emoji: '🌐', text: '保持综合', hint: '覆盖面广，机会更多', isCorrect: false, effect: { wealthPct: 0.15 } },
      { emoji: '🎲', text: '多开小号', hint: '不同领域用不同账号', isCorrect: false, effect: { wealthPct: 0.07 } }
    ],
    explanation: '垂直领域的专家定位能建立更强的护城河，虽然受众变少但价值感和变现能力更强。'
  },
  {
    id: 'kol_055',
    category: 'content',
    title: '蹭名人热度',
    desc: 'Elon Musk又发了关于Crypto的推文，你知道蹭他的热度能获得流量。',
    choices: [
      { emoji: '💡', text: '结合观点输出', hint: '借Musk的话题引出自己的分析', isCorrect: true, effect: { wealthPct: 0.20 } },
      { emoji: '🚀', text: '无脑转发', hint: '截图Musk推文，配文"兄弟们冲"', isCorrect: false, effect: { wealthPct: 0.03 } },
      { emoji: '🙅', text: '不蹭名人', hint: '保持独立调性', isCorrect: false, effect: { wealthPct: 0.03 } }
    ],
    explanation: '蹭热度要有自己的观点和增值，单纯转发是低价值行为，独立调性也有其价值。'
  },
  {
    id: 'kol_056',
    category: 'content',
    title: '内容系列化',
    desc: '你在考虑是否将内容系列化，比如固定每周一期"周度复盘"。',
    choices: [
      { emoji: '📅', text: '固定系列', hint: '培养用户习惯，提高留存', isCorrect: true, effect: { wealthPct: 0.23 } },
      { emoji: '🎲', text: '随机更新', hint: '灵感来了再发', isCorrect: false, effect: { wealthPct: 0.05 } },
      { emoji: '📊', text: '测试再定', hint: '先发几期看看反响', isCorrect: false, effect: { wealthPct: 0.10 } }
    ],
    explanation: '系列化内容能培养用户习惯，固定的期待感会显著提高粉丝留存和互动率。'
  },
  {
    id: 'kol_057',
    category: 'content',
    title: '使用AI辅助创作',
    desc: 'ChatGPT等AI工具能大幅提升创作效率，但粉丝可能反感AI生成内容。',
    choices: [
      { emoji: '🤖', text: '辅助不替代', hint: '用AI做资料整理，核心观点自己写', isCorrect: true, effect: { wealthPct: 0.15 } },
      { emoji: '🚫', text: '不用AI', hint: '纯手工创作', isCorrect: false, effect: { wealthPct: 0.07 } },
      { emoji: '📝', text: 'AI生成为主', hint: '大部分让AI写', isCorrect: false, effect: { wealthPct: -0.11 } }
    ],
    explanation: 'AI是效率工具而非替代品，用它处理重复工作，保留人类的洞察和表达。'
  },
  {
    id: 'kol_058',
    category: 'content',
    title: '内容付费墙',
    desc: '你在考虑是否将部分内容设为付费(如Patreon/小册子)，但担心粉丝流失。',
    choices: [
      { emoji: '🔓', text: '免费+付费结合', hint: '基础内容免费，深度内容付费', isCorrect: true, effect: { wealthPct: 0.30 } },
      { emoji: '🔒', text: '大量内容付费', hint: '主要收入靠付费订阅', isCorrect: false, effect: { wealthPct: 0.20 } },
      { emoji: '🔓', text: '全部免费', hint: '靠广告变现', isCorrect: false, effect: { wealthPct: 0.15 } }
    ],
    explanation: '免费+付费的结合模式能平衡增长和变现，让不同层级的粉丝都有价值。'
  },
  {
    id: 'kol_059',
    category: 'content',
    title: '回应负面新闻',
    desc: '某媒体报道了关于你的负面新闻(如"某KOL推荐项目暴跌")，虽然不完全属实。',
    choices: [
      { emoji: '📄', text: '事实回应', hint: '整理数据，用事实澄清', isCorrect: true, effect: { wealthPct: 0.11 } },
      { emoji: '⚔️', text: '攻击媒体', hint: '说对方造谣', isCorrect: false, effect: { wealthPct: -0.04 } },
      { emoji: '🤐', text: '不回应', hint: '不给予关注度', isCorrect: false, effect: { wealthPct: -0.03 } }
    ],
    explanation: '用事实和数据回应是最有力的澄清，攻击媒体只会显得心虚，沉默则会被当作默认。'
  },
  {
    id: 'kol_060',
    category: 'content',
    title: '内容选题策略',
    desc: '你在规划下周内容，面临选择：是追当下的热门话题，还是写计划已久的深度主题？',
    choices: [
      { emoji: '⚖️', text: '70%计划+30%热点', hint: '以计划内容为主，灵活插入热点', isCorrect: true, effect: { wealthPct: 0.21 } },
      { emoji: '🔥', text: '全力追热点', hint: '什么火写什么', isCorrect: false, effect: { wealthPct: 0.11 } },
      { emoji: '📚', text: '只做计划内容', hint: '不被热点干扰', isCorrect: false, effect: { wealthPct: 0.12 } }
    ],
    explanation: '有计划的内容能保持专业深度，适度追热点保证流量，平衡是最好的策略。'
  },

  // Shill尽调专题 061-070
  {
    id: 'kol_061',
    category: 'shill',
    title: '匿名团队项目',
    desc: '一个技术概念很酷的项目找你推广，但团队完全匿名，只有pseudonyms。',
    choices: [
      { emoji: '🔍', text: '深入尽调', hint: '查代码审计、社区活跃度、资金流向', isCorrect: true, effect: { wealthPct: 0.11 } },
      { emoji: '🚫', text: '不接匿名项目', hint: '原则问题', isCorrect: false, effect: { wealthPct: 0.04 } },
      { emoji: '💰', text: '费够高就接', hint: '匿名不代表会rug', isCorrect: false, effect: { wealthPct: -0.11 } }
    ],
    explanation: '匿名团队风险极高，即使接也需要极其严格的额外尽调，多数情况下应直接拒绝。'
  },
  {
    id: 'kol_062',
    category: 'shill',
    title: '朋友项目推广',
    desc: '你的好朋友做了一个项目，找你帮忙推广，但你看了白皮书觉得一般。',
    choices: [
      { emoji: '🤝', text: '友情支持但明示', hint: '帮忙推广但明确告诉粉丝是友情合作', isCorrect: true, effect: { wealthPct: 0.04 } },
      { emoji: '💰', text: '正常收费推广', hint: '朋友归朋友，生意归生意', isCorrect: false, effect: { wealthPct: -0.04 } },
      { emoji: '🚫', text: '拒绝但帮助改进', hint: '不接推广，但给项目改进建议', isCorrect: false, effect: { wealthPct: 0.03 } }
    ],
    explanation: '朋友项目的推广需要格外透明，明示关系让粉丝自行判断，既帮了朋友又不损信誉。'
  },
  {
    id: 'kol_063',
    category: 'shill',
    title: '项目代币解锁',
    desc: '你之前推广过的项目即将迎来大额代币解锁，可能导致抛压，粉丝询问你的看法。',
    choices: [
      { emoji: '📊', text: '客观分析解锁影响', hint: '分析解锁比例、机构成本、市场影响', isCorrect: true, effect: { wealthPct: 0.15 } },
      { emoji: '🤐', text: '不讨论', hint: '怕说错话', isCorrect: false, effect: { wealthPct: -0.03 } },
      { emoji: '💰', text: '让粉丝继续持有', hint: '项目方希望你安抚社区', isCorrect: false, effect: { wealthPct: -0.17 } }
    ],
    explanation: '代币解锁是重大风险事件，客观分析展现专业度，隐瞒或误导会彻底失去信任。'
  },
  {
    id: 'kol_064',
    category: 'shill',
    title: '多个项目同时邀约',
    desc: '同一赛道的三个项目同时找你推广，时间冲突，你只能选一个。',
    choices: [
      { emoji: '🏆', text: '选最优质项目', hint: '对比团队、背书、产品，选最好的', isCorrect: true, effect: { wealthPct: 0.18 } },
      { emoji: '💰', text: '选出价最高', hint: '谁给得多选谁', isCorrect: false, effect: { wealthPct: 0.07 } },
      { emoji: '📅', text: '分批接', hint: '这周推一个，下周推另一个', isCorrect: false, effect: { wealthPct: 0.10 } }
    ],
    explanation: '同赛道项目的对比选择最能体现你的专业判断，选质量而非价格能建立长期口碑。'
  },
  {
    id: 'kol_065',
    category: 'shill',
    title: '项目代码审计',
    desc: '一个项目找你推广，提供了Certik审计报告，但你发现审计只是"基本合规"。',
    choices: [
      { emoji: '🔍', text: '要求更深度审计', hint: '建议项目做PeckShield或Trail of Bits', isCorrect: true, effect: { wealthPct: 0.06 } },
      { emoji: '✅', text: '基本审计也够', hint: '有总比没有好', isCorrect: false, effect: { wealthPct: 0.02 } },
      { emoji: '🚫', text: '不接', hint: '审计不够严格不接', isCorrect: false, effect: { wealthPct: 0.03 } }
    ],
    explanation: '不同审计机构的严格程度差异很大，识别审计质量也是尽调能力的一部分。'
  },
  {
    id: 'kol_066',
    category: 'shill',
    title: '项目方施压',
    desc: '你之前答应推广的项目，尽调后发现问题想取消，项目方威胁要曝光你的"不诚信"。',
    choices: [
      { emoji: '🛡️', text: '坚持取消并公开', hint: '自己先公开说明为什么取消，掌握主动权', isCorrect: true, effect: { wealthPct: 0.12 } },
      { emoji: '😰', text: '妥协推广', hint: '不想惹麻烦，勉强接了', isCorrect: false, effect: { wealthPct: -0.21 } },
      { emoji: '💰', text: '收钱不推广', hint: '拿了钱随便发一条', isCorrect: false, effect: { wealthPct: -0.27 } }
    ],
    explanation: '发现问题后宁可得罪项目方也不能坑粉丝，主动公开能化被动为主动，赢得尊重。'
  },
  {
    id: 'kol_067',
    category: 'shill',
    title: '项目代币分配',
    desc: '你正在尽调一个项目，发现团队+机构持仓超过70%，散户筹码很少。',
    choices: [
      { emoji: '🚫', text: '拒绝推广', hint: '集中度太高，风险巨大', isCorrect: true, effect: { wealthPct: 0.04 } },
      { emoji: '⚠️', text: '接但提示风险', hint: '推广时强调筹码集中风险', isCorrect: false, effect: { wealthPct: 0.04 } },
      { emoji: '💰', text: '正常推广', hint: '项目方说会锁仓', isCorrect: false, effect: { wealthPct: -0.19 } }
    ],
    explanation: '筹码高度集中的项目风险极高，即使锁仓也存在解锁后的巨大抛压，应该拒绝。'
  },
  {
    id: 'kol_068',
    category: 'shill',
    title: '项目数据造假',
    desc: '你在尽调时发现一个项目的TVL/交易量数据疑似刷量造假。',
    choices: [
      { emoji: '🚨', text: '曝光并拒绝', hint: '发推提醒社区注意，拒绝合作', isCorrect: true, effect: { wealthPct: 0.24 } },
      { emoji: '🚫', text: '私下拒绝', hint: '不接但不说原因', isCorrect: false, effect: { wealthPct: 0.03 } },
      { emoji: '🤝', text: '继续合作', hint: '数据造假很常见', isCorrect: false, effect: { wealthPct: -0.26 } }
    ],
    explanation: '曝光造假项目是为社区做贡献，这种行为会极大提升你的专业公信力。'
  },
  {
    id: 'kol_069',
    category: 'shill',
    title: '项目竞品冲突',
    desc: '你正在与A项目谈年框合作，B项目(竞品)开出3倍价格找你推广。',
    choices: [
      { emoji: '🤝', text: '拒绝B履约A', hint: '遵守商业诚信，完成已有合作', isCorrect: true, effect: { wealthPct: 0.24 } },
      { emoji: '💰', text: '毁约接B', hint: '3倍价格值得', isCorrect: false, effect: { wealthPct: 0.05 } },
      { emoji: '⚖️', text: '两边都接', hint: '偷偷接B的推广', isCorrect: false, effect: { wealthPct: -0.24 } }
    ],
    explanation: '商业诚信是KOL的立身之本，毁约或两边通吃一旦被曝光将难以翻身。'
  },
  {
    id: 'kol_070',
    category: 'shill',
    title: '项目长期跟踪',
    desc: '你推广过的项目已经上线三个月，表现平平，有粉丝质疑你"推完就不管了"。',
    choices: [
      { emoji: '📊', text: '持续跟踪更新', hint: '定期更新项目进展，好差都说', isCorrect: true, effect: { wealthPct: 0.15 } },
      { emoji: '🤐', text: '不再提及', hint: '当作没推过', isCorrect: false, effect: { wealthPct: -0.04 } },
      { emoji: '🚀', text: '继续尬吹', hint: '为了面子硬说好', isCorrect: false, effect: { wealthPct: -0.15 } }
    ],
    explanation: '对推广项目的长期跟踪展现责任感，承认判断失误比硬撑更能赢得尊重。'
  },

  // 粉丝运营专题 071-080
  {
    id: 'kol_071',
    category: 'fans',
    title: '粉丝群管理',
    desc: '你的TG群人数突破1万，开始出现诈骗广告、拉人私聊等乱象。',
    choices: [
      { emoji: '👮', text: '严格管理', hint: '设管理员，开慢模式，禁广告', isCorrect: true, effect: { wealthPct: 0.14 } },
      { emoji: '🔒', text: '设进群门槛', hint: '需要验证才能进', isCorrect: false, effect: { wealthPct: 0.08 } },
      { emoji: '🤷', text: '不管', hint: '太忙没时间', isCorrect: false, effect: { wealthPct: -0.10 } }
    ],
    explanation: '社群质量直接影响粉丝体验，严格管理虽然会增加工作量但能维护良好氛围。'
  },
  {
    id: 'kol_072',
    category: 'fans',
    title: '粉丝分层运营',
    desc: '你的粉丝群体差异很大：有小白、有老手、有羊毛党，内容很难同时满足。',
    choices: [
      { emoji: '📊', text: '分层服务', hint: '基础内容公开，进阶内容建付费群', isCorrect: true, effect: { wealthPct: 0.28 } },
      { emoji: '🎯', text: '专注核心群体', hint: '选择最契合的群体服务', isCorrect: false, effect: { wealthPct: 0.10 } },
      { emoji: '🌐', text: '试图全满足', hint: '什么内容都发一点', isCorrect: false, effect: { wealthPct: -0.04 } }
    ],
    explanation: '粉丝分层能让不同需求的用户都得到价值，付费进阶服务也能筛选出高价值用户。'
  },
  {
    id: 'kol_073',
    category: 'fans',
    title: '处理黑粉',
    desc: '有一个人专门注册小号在你的每条推文下刷屏骂你，影响其他粉丝体验。',
    choices: [
      { emoji: '🔇', text: '默默拉黑', hint: '不回应，直接拉黑处理', isCorrect: true, effect: { wealthPct: 0.01 } },
      { emoji: '⚔️', text: '公开挂人', hint: '发推曝光这个黑粉', isCorrect: false, effect: { wealthPct: -0.07 } },
      { emoji: '💬', text: '试图沟通', hint: '私信问为什么黑你', isCorrect: false, effect: { wealthPct: -0.01 } }
    ],
    explanation: '对恶意黑粉最优雅的处理是无视+拉黑，公开挂人会给对方更多关注度。'
  },
  {
    id: 'kol_074',
    category: 'fans',
    title: '粉丝求助',
    desc: '一位粉丝私信说跟着某项目亏了钱，走投无路，向你求助。',
    choices: [
      { emoji: '💡', text: '给建议非金钱', hint: '分享经验建议，但不直接给钱', isCorrect: true, effect: { wealthPct: 0.10 } },
      { emoji: '💰', text: '给少量资助', hint: '转一点钱帮TA度过难关', isCorrect: false, effect: { wealthPct: 0.01 } },
      { emoji: '🚫', text: '不回应', hint: '怕开了先例更多人找你要钱', isCorrect: false, effect: { wealthPct: -0.03 } }
    ],
    explanation: '给建议而非金钱是可持续的帮助方式，既能帮到对方又不会养成依赖。'
  },
  {
    id: 'kol_075',
    category: 'fans',
    title: '粉丝意见分歧',
    desc: '你的粉丝群体对某个话题(如某条链的好坏)分成两派，在评论区激烈争吵。',
    choices: [
      { emoji: '⚖️', text: '引导理性讨论', hint: '发评论引导双方理性交流', isCorrect: true, effect: { wealthPct: 0.11 } },
      { emoji: '🤐', text: '不参与', hint: '让粉丝自己吵', isCorrect: false, effect: { wealthPct: -0.01 } },
      { emoji: '⚔️', text: '站队其中一方', hint: '表态支持某一派', isCorrect: false, effect: { wealthPct: 0.03 } }
    ],
    explanation: 'KOL应该成为理性讨论的引导者，而不是部落主义的发起者。'
  },
  {
    id: 'kol_076',
    category: 'fans',
    title: '粉丝福利设计',
    desc: '你想设计一套粉丝福利体系回馈支持者，但预算有限。',
    choices: [
      { emoji: '🎁', text: '抽白名单/空投', hint: '利用KOL资源争取项目福利给粉丝', isCorrect: true, effect: { wealthPct: 0.23 } },
      { emoji: '💰', text: '现金抽奖', hint: '直接发钱', isCorrect: false, effect: { wealthPct: 0.03 } },
      { emoji: '📚', text: '独家内容', hint: '给核心粉丝专属内容', isCorrect: false, effect: { wealthPct: 0.10 } }
    ],
    explanation: '利用KOL身份争取项目福利是最有性价比的回馈方式，粉丝既能获利你也不用花太多钱。'
  },
  {
    id: 'kol_077',
    category: 'fans',
    title: '粉丝转化私域',
    desc: '你想把公域(X平台)的粉丝转化到私域(TG/微信)，提高黏性。',
    choices: [
      { emoji: '🎁', text: '私域专属福利', hint: '进群有白名单/空投等福利', isCorrect: true, effect: { wealthPct: 0.18 } },
      { emoji: '📢', text: '硬拉进群', hint: '每条推文都发群链接', isCorrect: false, effect: { wealthPct: 0.04 } },
      { emoji: '🔒', text: '设高门槛', hint: '只有消费过的粉丝能进', isCorrect: false, effect: { wealthPct: 0.04 } }
    ],
    explanation: '私域运营需要明确的福利吸引，硬拉会让用户反感，高门槛则限制了增长。'
  },
  {
    id: 'kol_078',
    category: 'fans',
    title: '粉丝贡献认可',
    desc: '有一位核心粉丝长期帮你转发、回复评论，做了很多贡献，你想表示认可。',
    choices: [
      { emoji: '🏆', text: '公开感谢+小奖励', hint: '发推感谢，送一点小福利', isCorrect: true, effect: { wealthPct: 0.17 } },
      { emoji: '💬', text: '私信感谢', hint: '私聊表达感谢', isCorrect: false, effect: { wealthPct: 0.01 } },
      { emoji: '🤷', text: '心里记着', hint: '不特别表示', isCorrect: false, effect: { wealthPct: -0.01 } }
    ],
    explanation: '公开认可核心贡献者能激励更多人参与社区建设，形成良性循环。'
  },
  {
    id: 'kol_079',
    category: 'fans',
    title: '粉丝意见征集',
    desc: '你在考虑下一阶段的转型方向，想听听粉丝的意见。',
    choices: [
      { emoji: '📊', text: '发起投票调研', hint: '让粉丝投票选择想看的内容', isCorrect: true, effect: { wealthPct: 0.14 } },
      { emoji: '👂', text: '看评论反馈', hint: '观察平时评论里的需求', isCorrect: false, effect: { wealthPct: 0.05 } },
      { emoji: '🎯', text: '自己决定', hint: '粉丝懂什么', isCorrect: false, effect: { wealthPct: -0.03 } }
    ],
    explanation: '让粉丝参与决策能增强归属感和黏性，数据驱动的选择也比拍脑袋更靠谱。'
  },
  {
    id: 'kol_080',
    category: 'fans',
    title: '处理过度热情粉丝',
    desc: '有一位粉丝对你过度热情，每条推文都秒回、私信不断，甚至想线下见面。',
    choices: [
      { emoji: '📏', text: '设定边界', hint: '礼貌但明确地设定互动边界', isCorrect: true, effect: { wealthPct: 0.03 } },
      { emoji: '🚫', text: '直接拉黑', hint: '不想被骚扰', isCorrect: false, effect: { wealthPct: -0.03 } },
      { emoji: '🤝', text: '线下见面', hint: '满足粉丝愿望', isCorrect: false, effect: { wealthPct: -0.06 } }
    ],
    explanation: '设定清晰的边界是保护自己和粉丝的必要措施，过度亲近可能带来安全风险。'
  }
);


// ========== 081-130: 广告选择/声望管理/热点跟进/合作判断/平台规则 ==========
HARDCORE_KOL_DECISIONS.push(
  // 广告选择专题 081-090
  {
    id: 'kol_081',
    category: 'shill',
    title: '广告形式选择',
    desc: '项目方要求你以"个人真实投资"的名义推广，但实际上是付费合作。',
    choices: [
      { emoji: '🏷️', text: '明确标注广告', hint: '按合规要求标注#AD或#Sponsored', isCorrect: true, effect: { wealthPct: 0.11 } },
      { emoji: '🎭', text: '伪装个人推荐', hint: '按项目方要求不披露合作', isCorrect: false, effect: { wealthPct: -0.15 } },
      { emoji: '🚫', text: '拒绝此形式', hint: '不玩这种套路', isCorrect: false, effect: { wealthPct: 0.04 } }
    ],
    explanation: '伪装个人推荐是严重的诚信问题，一旦曝光会造成毁灭性打击，必须明确标注付费合作。'
  },
  {
    id: 'kol_082',
    category: 'shill',
    title: '广告排期密集',
    desc: '下周已有3个广告排期，又有2个项目紧急求推，档期冲突。',
    choices: [
      { emoji: '📅', text: '控制密度', hint: '最多一周2-3条广告，其他的推后', isCorrect: true, effect: { wealthPct: 0.10 } },
      { emoji: '💰', text: '全部接下', hint: '趁有机会多赚', isCorrect: false, effect: { wealthPct: -0.03 } },
      { emoji: '📊', text: '合并推广', hint: '一条推文推广多个项目', isCorrect: false, effect: { wealthPct: 0.06 } }
    ],
    explanation: '广告密度直接影响粉丝体验和长期价值，过度商业化会快速消耗粉丝信任。'
  },
  {
    id: 'kol_083',
    category: 'shill',
    title: '广告内容审核',
    desc: '项目方给你的推广文案有夸大宣传(如"保证100倍")，你提出修改但对方拒绝。',
    choices: [
      { emoji: '🚫', text: '拒绝合作', hint: '不推夸大宣传的内容', isCorrect: true, effect: { wealthPct: 0.06 } },
      { emoji: '✏️', text: '自己改写', hint: '用更保守的语言发', isCorrect: false, effect: { wealthPct: 0.07 } },
      { emoji: '📋', text: '按对方文案发', hint: '客户是上帝', isCorrect: false, effect: { wealthPct: -0.15 } }
    ],
    explanation: '夸大宣传是红线，"保证收益"涉嫌违规，作为发布者你也要承担法律责任。'
  },
  {
    id: 'kol_084',
    category: 'shill',
    title: '广告效果承诺',
    desc: '项目方要求你承诺推广后的"最低转化数据"，达不到要退款。',
    choices: [
      { emoji: '🚫', text: '拒绝承诺', hint: '效果无法保证，不接这种条款', isCorrect: true, effect: { wealthPct: 0.03 } },
      { emoji: '📊', text: '协商合理KPI', hint: '承诺曝光量而非转化', isCorrect: false, effect: { wealthPct: 0.05 } },
      { emoji: '✅', text: '接受条款', hint: '相信自己能完成', isCorrect: false, effect: { wealthPct: 0.04 } }
    ],
    explanation: '转化效果受太多因素影响，承诺KPI会把风险转嫁给自己，曝光量是唯一可控的指标。'
  },
  {
    id: 'kol_085',
    category: 'shill',
    title: '广告价格体系',
    desc: '你的报价比较混乱，不同项目报价差异很大，有人质疑你"看人下菜"。',
    choices: [
      { emoji: '📋', text: '建立价目表', hint: '制定公开的价格体系', isCorrect: true, effect: { wealthPct: 0.17 } },
      { emoji: '🤝', text: '保持灵活', hint: '好项目低价也接', isCorrect: false, effect: { wealthPct: 0.07 } },
      { emoji: '💰', text: '能多高要多高', hint: '商务谈判各凭本事', isCorrect: false, effect: { wealthPct: 0.10 } }
    ],
    explanation: '透明的价格体系体现专业性，减少讨价还价成本，也让优质项目觉得公平。'
  },
  {
    id: 'kol_086',
    category: 'shill',
    title: '广告长尾效应',
    desc: '你推广的一个项目在几个月后出现问题，有粉丝翻出旧推文说你"害人不浅"。',
    choices: [
      { emoji: '📄', text: '更新跟进', hint: '在原推文下更新最新情况', isCorrect: true, effect: { wealthPct: 0.04 } },
      { emoji: '🗑️', text: '删除旧推', hint: '眼不见为净', isCorrect: false, effect: { wealthPct: -0.06 } },
      { emoji: '🛡️', text: 'disclaimer已免责', hint: '说当时已提示风险', isCorrect: false, effect: { wealthPct: -0.03 } }
    ],
    explanation: '旧推文的持续跟进体现责任感，删除反而显得心虚，也能帮助新看到的人了解全貌。'
  },
  {
    id: 'kol_087',
    category: 'shill',
    title: '广告代理合作',
    desc: '一家广告代理公司找你，声称能带来更多的客户资源，但抽成30%。',
    choices: [
      { emoji: '🤝', text: '选择性合作', hint: '优质客户走代理，自己保留核心客户', isCorrect: true, effect: { wealthPct: 0.17 } },
      { emoji: '💼', text: '全部委托', hint: '省心省力', isCorrect: false, effect: { wealthPct: 0.07 } },
      { emoji: '🚫', text: '不合作', hint: '自己对接所有客户', isCorrect: false, effect: { wealthPct: -0.05 } }
    ],
    explanation: '代理能扩展客户来源但会损失对内容的一定控制权，选择性合作能平衡效率和品质。'
  },
  {
    id: 'kol_088',
    category: 'shill',
    title: '广告收款方式',
    desc: '项目方提出用项目代币支付广告费，说"更有信仰"，但实际上是转嫁风险。',
    choices: [
      { emoji: '💰', text: '坚持法币/稳定币', hint: '费用要用真金白银支付', isCorrect: true, effect: { wealthPct: 0.11 } },
      { emoji: '💎', text: '部分收代币', hint: '一半现金一半币', isCorrect: false, effect: { wealthPct: 0.05 } },
      { emoji: '🚀', text: '全部收代币', hint: '相信项目未来', isCorrect: false, effect: { wealthPct: -0.08 } }
    ],
    explanation: '代币支付将风险转嫁给你，即使看好项目也应该用投资而非劳动收入去参与。'
  },
  {
    id: 'kol_089',
    category: 'shill',
    title: '广告排他期限',
    desc: '项目方要求6个月的排他期(不能接竞品)，但只愿意付3个月的钱。',
    choices: [
      { emoji: '⚖️', text: '协商对等条款', hint: '排他期多长付多长钱', isCorrect: true, effect: { wealthPct: 0.13 } },
      { emoji: '✅', text: '接受条件', hint: '为了合作妥协', isCorrect: false, effect: { wealthPct: 0.04 } },
      { emoji: '🚫', text: '拒绝', hint: '不划算', isCorrect: false, effect: { wealthPct: 0.01 } }
    ],
    explanation: '排他期的成本应该与收益对等，免费延长排他期是变相降价，会损失长期收入。'
  },
  {
    id: 'kol_090',
    category: 'shill',
    title: '广告创意合作',
    desc: '一个有创意的项目提出做深度合作(如联名NFT)，而不仅是发推。',
    choices: [
      { emoji: '🎨', text: '深度参与', hint: '参与产品设计，做真正的联名', isCorrect: true, effect: { wealthPct: 0.36 } },
      { emoji: '📢', text: '常规推广', hint: '还是简单发推', isCorrect: false, effect: { wealthPct: 0.13 } },
      { emoji: '🚫', text: '拒绝', hint: '太麻烦了', isCorrect: false, effect: { wealthPct: 0.03 } }
    ],
    explanation: '深度创意合作是品牌升级的机会，能创造独特的价值和记忆点，远超常规广告。'
  },

  // 声望管理专题 091-100
  {
    id: 'kol_091',
    category: 'reputation',
    title: '行业内卷应对',
    desc: 'Web3 KOL赛道越来越卷，新人辈出，你的增长开始放缓。',
    choices: [
      { emoji: '🎯', text: '差异化定位', hint: '找到独特优势，深耕细分领域', isCorrect: true, effect: { wealthPct: 0.17 } },
      { emoji: '🔥', text: '加大投入', hint: '更频繁更新，买推广', isCorrect: false, effect: { wealthPct: -0.03 } },
      { emoji: '😰', text: '焦虑观望', hint: '不知道怎么办', isCorrect: false, effect: { wealthPct: -0.06 } }
    ],
    explanation: '内卷时代的生存之道是差异化，找到自己的独特价值比盲目投入更有效。'
  },
  {
    id: 'kol_092',
    category: 'reputation',
    title: '行业会议演讲',
    desc: '你收到了行业大会的演讲邀请，但从未在几百人面前演讲过，很紧张。',
    choices: [
      { emoji: '🎤', text: '认真准备参加', hint: '花一周时间准备，这是展示机会', isCorrect: true, effect: { wealthPct: 0.26 } },
      { emoji: '📹', text: '改为线上', hint: '录视频播放，不现场讲', isCorrect: false, effect: { wealthPct: 0.08 } },
      { emoji: '🚫', text: '拒绝邀请', hint: '怕讲不好丢人', isCorrect: false, effect: { wealthPct: -0.01 } }
    ],
    explanation: '行业会议是建立权威形象的重要舞台，克服紧张认真准备会带来巨大回报。'
  },
  {
    id: 'kol_093',
    category: 'reputation',
    title: '媒体采访邀请',
    desc: '一家主流媒体想采访你关于Web3的话题，但你担心说错话被断章取义。',
    choices: [
      { emoji: '📝', text: '充分准备后接', hint: '提前准备要点，要求审核稿件', isCorrect: true, effect: { wealthPct: 0.19 } },
      { emoji: '🎙️', text: '直接接受采访', hint: '临场发挥', isCorrect: false, effect: { wealthPct: 0.08 } },
      { emoji: '🚫', text: '拒绝采访', hint: '怕麻烦', isCorrect: false, effect: { wealthPct: 0.00 } }
    ],
    explanation: '主流媒体采访是破圈机会，充分准备能最大化收益同时降低风险。'
  },
  {
    id: 'kol_094',
    category: 'reputation',
    title: '行业争议表态',
    desc: '行业内爆发重大争议(如某公链vs某公链)，大家都在站队，你保持沉默被人说"骑墙"。',
    choices: [
      { emoji: '⚖️', text: '理性分析双方', hint: '不站队但深入分析利弊', isCorrect: true, effect: { wealthPct: 0.19 } },
      { emoji: '⚔️', text: '选择站队', hint: '表态支持一方', isCorrect: false, effect: { wealthPct: 0.08 } },
      { emoji: '🤐', text: '继续沉默', hint: '不想卷入纷争', isCorrect: false, effect: { wealthPct: -0.06 } }
    ],
    explanation: '不站队不代表没观点，理性分析双方的利弊是最有价值的贡献。'
  },
  {
    id: 'kol_095',
    category: 'reputation',
    title: '同行竞争关系',
    desc: '一个同类型的新KOL快速崛起，风格和你相似，有人说是"你的替代品"。',
    choices: [
      { emoji: '🤝', text: '合作共赢', hint: '主动联系，寻求合作机会', isCorrect: true, effect: { wealthPct: 0.17 } },
      { emoji: '⚔️', text: '暗中竞争', hint: '加大投入，压制对方', isCorrect: false, effect: { wealthPct: -0.10 } },
      { emoji: '😤', text: '公开贬低', hint: '暗示对方抄袭你', isCorrect: false, effect: { wealthPct: -0.17 } }
    ],
    explanation: '市场足够大，把潜在竞争者变成合作伙伴能实现双赢，恶性竞争两败俱伤。'
  },
  {
    id: 'kol_096',
    category: 'reputation',
    title: '个人IP延伸',
    desc: '你在考虑是否要推出个人品牌周边(如书籍/课程/商品)来延伸IP价值。',
    choices: [
      { emoji: '📚', text: '推出课程', hint: '把知识系统化输出', isCorrect: true, effect: { wealthPct: 0.39 } },
      { emoji: '👕', text: '出周边商品', hint: 'T恤/帽子等', isCorrect: false, effect: { wealthPct: 0.15 } },
      { emoji: '🤐', text: '不延伸', hint: '专注做好内容', isCorrect: false, effect: { wealthPct: 0.03 } }
    ],
    explanation: '课程是KOL IP延伸的最佳载体，既能变现又能系统化传递价值，提升专业形象。'
  },
  {
    id: 'kol_097',
    category: 'reputation',
    title: '处理历史黑料',
    desc: '有人在扒你几年前的旧言论/行为，试图抹黑你。',
    choices: [
      { emoji: '🙏', text: '承认成长', hint: '承认过去的不足，展示这些年的成长', isCorrect: true, effect: { wealthPct: 0.14 } },
      { emoji: '⚔️', text: '反击对方', hint: '也扒对方的黑料', isCorrect: false, effect: { wealthPct: -0.12 } },
      { emoji: '🚫', text: '律师函警告', hint: '法律手段压制', isCorrect: false, effect: { wealthPct: -0.04 } }
    ],
    explanation: '真诚的认错和成长故事能化危机为转机，对抗只会让事情越闹越大。'
  },
  {
    id: 'kol_098',
    category: 'reputation',
    title: '行业认证背书',
    desc: '某行业组织想给你颁发"年度影响力KOL"等奖项，但需要你支付赞助费。',
    choices: [
      { emoji: '🚫', text: '拒绝购买奖项', hint: '不为虚假背书付费', isCorrect: true, effect: { wealthPct: 0.06 } },
      { emoji: '💰', text: '花钱买奖', hint: '有奖项背书更有说服力', isCorrect: false, effect: { wealthPct: -0.11 } },
      { emoji: '🤝', text: '协商免费', hint: '说自己预算有限', isCorrect: false, effect: { wealthPct: 0.01 } }
    ],
    explanation: '买来的奖项不仅没价值，一旦被曝光还会严重损害信誉，真正的认可不需要付费。'
  },
  {
    id: 'kol_099',
    category: 'reputation',
    title: '个人价值观输出',
    desc: '你在考虑是否要在内容上更多地表达个人价值观(如对去中心化的信仰)。',
    choices: [
      { emoji: '💎', text: '适度表达', hint: '在相关话题中自然融入价值观', isCorrect: true, effect: { wealthPct: 0.17 } },
      { emoji: '📢', text: '强力输出', hint: '每条都强调价值观', isCorrect: false, effect: { wealthPct: 0.06 } },
      { emoji: '🤐', text: '不谈价值观', hint: '只谈项目不聊理念', isCorrect: false, effect: { wealthPct: 0.03 } }
    ],
    explanation: '适度的价值观表达能吸引志同道合的粉丝，建立深层次的连接，但过度preach会劝退路人。'
  },
  {
    id: 'kol_100',
    category: 'reputation',
    title: '长期品牌建设',
    desc: '你在思考未来5年的规划：是继续当KOL，还是转型做其他？',
    choices: [
      { emoji: '🏗️', text: '构建长期品牌', hint: '从个人KOL升级为机构/平台', isCorrect: true, effect: { wealthPct: 0.51 } },
      { emoji: '💰', text: '趁红利变现', hint: '能火多久是多久，多赚钱', isCorrect: false, effect: { wealthPct: 0.30 } },
      { emoji: '🤷', text: '走一步看一步', hint: '不想那么远', isCorrect: false, effect: { wealthPct: 0.03 } }
    ],
    explanation: '从个人到品牌的升级能实现规模化价值和长期可持续性，是头部KOL的必经之路。'
  },

  // 热点跟进专题 101-110
  {
    id: 'kol_101',
    category: 'content',
    title: '突发利好',
    desc: '某大国突然宣布支持加密货币，市场瞬间暴涨，你需要快速反应。',
    choices: [
      { emoji: '⚡', text: '快速解读', hint: '30分钟内发推解读影响', isCorrect: true, effect: { wealthPct: 0.26 } },
      { emoji: '📊', text: '等更多消息', hint: '等官方细节出来再分析', isCorrect: false, effect: { wealthPct: 0.07 } },
      { emoji: '🚀', text: '喊大家冲', hint: 'FOMO情绪喊买入', isCorrect: false, effect: { wealthPct: 0.04 } }
    ],
    explanation: '突发新闻时速度就是一切，快速但理性的解读能抢占流量高地，无脑喊单会损害专业形象。'
  },
  {
    id: 'kol_102',
    category: 'content',
    title: '突发利空',
    desc: '某头部交易所被黑客攻击，损失数亿美元，市场恐慌。',
    choices: [
      { emoji: '📊', text: '冷静分析', hint: '分析事件影响和应对建议', isCorrect: true, effect: { wealthPct: 0.21 } },
      { emoji: '📉', text: '看空预警', hint: '预测市场要继续跌', isCorrect: false, effect: { wealthPct: 0.06 } },
      { emoji: '🤐', text: '不讨论', hint: '等事情明朗', isCorrect: false, effect: { wealthPct: -0.05 } }
    ],
    explanation: '恐慌时刻更需要冷静分析，帮助粉丝理性应对能建立深度信任。'
  },
  {
    id: 'kol_103',
    category: 'content',
    title: '热点误读澄清',
    desc: '某条消息被社区误读(实际是中性但被当作利好)，大家开始FOMO。',
    choices: [
      { emoji: '✅', text: '发推澄清', hint: '解释消息的真实含义', isCorrect: true, effect: { wealthPct: 0.18 } },
      { emoji: '🤐', text: '不扫兴', hint: '让大家高兴一下', isCorrect: false, effect: { wealthPct: -0.06 } },
      { emoji: '🚀', text: '跟着嗨', hint: '借势推广自己的持仓', isCorrect: false, effect: { wealthPct: -0.14 } }
    ],
    explanation: '及时澄清误读能保护粉丝不被收割，虽然扫兴但长期来看会赢得信任。'
  },
  {
    id: 'kol_104',
    category: 'content',
    title: '热点深度挖掘',
    desc: '一个热点大家都在蹭表面，你发现了一个更深层的角度但写出来需要时间。',
    choices: [
      { emoji: '🔍', text: '深度分析', hint: '花3小时写深度线程', isCorrect: true, effect: { wealthPct: 0.21 } },
      { emoji: '⚡', text: '简单蹭热度', hint: '先发一条简单的', isCorrect: false, effect: { wealthPct: 0.10 } },
      { emoji: '🤐', text: '不蹭这个热点', hint: '等下一个', isCorrect: false, effect: { wealthPct: -0.03 } }
    ],
    explanation: '表面的热点内容供过于求，深度独特的角度才能脱颖而出，建立专业壁垒。'
  },
  {
    id: 'kol_105',
    category: 'content',
    title: '热点预判',
    desc: '你预判某个话题即将成为热点，在考虑是否要提前布局内容。',
    choices: [
      { emoji: '📝', text: '提前准备', hint: '写好几篇相关内容的草稿', isCorrect: true, effect: { wealthPct: 0.23 } },
      { emoji: '⏰', text: '等热了再说', hint: '确认火了再写', isCorrect: false, effect: { wealthPct: 0.07 } },
      { emoji: '🤷', text: '不预测', hint: '预测错了丢人', isCorrect: false, effect: { wealthPct: 0.03 } }
    ],
    explanation: '热点预判能力体现专业度，提前准备能在热点爆发时第一时间输出高质量内容。'
  },
  {
    id: 'kol_106',
    category: 'content',
    title: '热点生命周期',
    desc: '一个热点已经持续了一周，热度开始下降，但还有人问你看法。',
    choices: [
      { emoji: '📊', text: '总结复盘', hint: '写个总结，提炼经验教训', isCorrect: true, effect: { wealthPct: 0.17 } },
      { emoji: '🔥', text: '继续硬蹭', hint: '相信还有第二波', isCorrect: false, effect: { wealthPct: -0.04 } },
      { emoji: '🎯', text: '切换新热点', hint: '找下一个机会', isCorrect: false, effect: { wealthPct: 0.07 } }
    ],
    explanation: '热点结束时的复盘总结能沉淀价值，也是展示深度思考的机会。'
  },
  {
    id: 'kol_107',
    category: 'content',
    title: '热点联动',
    desc: '同时有两个热点在发酵(AI币和Layer2)，你在考虑是否联动分析。',
    choices: [
      { emoji: '🔗', text: '找关联点', hint: '分析两个热点的内在联系', isCorrect: true, effect: { wealthPct: 0.21 } },
      { emoji: '🎯', text: '只追一个', hint: '专注最有把握的', isCorrect: false, effect: { wealthPct: 0.10 } },
      { emoji: '📝', text: '两个都写', hint: '各写一篇', isCorrect: false, effect: { wealthPct: 0.07 } }
    ],
    explanation: '找到不同热点的关联点能体现宏观视野，输出独特的高价值内容。'
  },
  {
    id: 'kol_108',
    category: 'content',
    title: '热点情绪管理',
    desc: '热点中的社区情绪极端化(要么极度乐观要么极度悲观)，你在考虑如何表达。',
    choices: [
      { emoji: '🧘', text: '理性平衡', hint: '既不一味看空也不盲目乐观', isCorrect: true, effect: { wealthPct: 0.17 } },
      { emoji: '🚀', text: '顺应情绪', hint: '大家爱听什么说什么', isCorrect: false, effect: { wealthPct: 0.08 } },
      { emoji: '⚔️', text: '反向操作', hint: '刻意唱反调博眼球', isCorrect: false, effect: { wealthPct: 0.04 } }
    ],
    explanation: '极端情绪中的理性声音最稀缺也最有价值，能吸引高质量的长期关注者。'
  },
  {
    id: 'kol_109',
    category: 'content',
    title: '热点工具应用',
    desc: '热点中需要使用一些工具(如链上数据分析)来支持观点，但很多粉丝不会用。',
    choices: [
      { emoji: '📚', text: '教工具用法', hint: '在分析中教粉丝如何使用工具', isCorrect: true, effect: { wealthPct: 0.21 } },
      { emoji: '📊', text: '直接给结论', hint: '只告诉粉丝结论', isCorrect: false, effect: { wealthPct: 0.07 } },
      { emoji: '🔗', text: '让他们自己学', hint: '甩个链接让粉丝自己看', isCorrect: false, effect: { wealthPct: 0.03 } }
    ],
    explanation: '授人以渔比授人以鱼更有价值，教工具使用能提升粉丝的长期能力和忠诚度。'
  },
  {
    id: 'kol_110',
    category: 'content',
    title: '热点后续跟踪',
    desc: '两周前的一个热点你有深度参与，现在事情有了新进展，但热度已过。',
    choices: [
      { emoji: '📊', text: '持续跟踪', hint: '更新进展，完成闭环', isCorrect: true, effect: { wealthPct: 0.15 } },
      { emoji: '🔥', text: '等新热点', hint: '旧的没人看了', isCorrect: false, effect: { wealthPct: -0.03 } },
      { emoji: '🗑️', text: '删除旧内容', hint: '怕旧观点被翻出来', isCorrect: false, effect: { wealthPct: -0.06 } }
    ],
    explanation: '对热点的持续跟踪体现责任感，也能积累"说到做到"的信誉资产。'
  }
);


// ========== 111-150: 合作判断/平台规则/内容节奏/粉丝反馈/综合决策 ==========
HARDCORE_KOL_DECISIONS.push(
  // 合作判断专题 111-120
  {
    id: 'kol_111',
    category: 'strategy',
    title: '跨领域合作',
    desc: '一个非Web3领域的KOL(如科技/财经博主)想找你合作，拓展受众。',
    choices: [
      { emoji: '🤝', text: '选择性合作', hint: '选择与Web3相关的领域合作', isCorrect: true, effect: { wealthPct: 0.22 } },
      { emoji: '🌐', text: '广泛合作', hint: '各种领域都试试', isCorrect: false, effect: { wealthPct: 0.09 } },
      { emoji: '🚫', text: '不跨界', hint: '专注Web3', isCorrect: false, effect: { wealthPct: 0.03 } }
    ],
    explanation: '与相关领域的跨界合作能带来精准的新受众，过于发散则会稀释品牌价值。'
  },
  {
    id: 'kol_112',
    category: 'strategy',
    title: '品牌代言合作',
    desc: '某知名品牌(如硬件钱包)想找你当长期代言人，需要签订独家协议。',
    choices: [
      { emoji: '📝', text: '评估后签约', hint: '详细评估品牌，谈好条款后签约', isCorrect: true, effect: { wealthPct: 0.47 } },
      { emoji: '💰', text: '价好就签', hint: '给够钱就行', isCorrect: false, effect: { wealthPct: 0.32 } },
      { emoji: '🚫', text: '不接受代言', hint: '保持独立性', isCorrect: false, effect: { wealthPct: 0.07 } }
    ],
    explanation: '优质品牌的长期代言是行业地位的象征，也是对粉丝的负责任推荐。'
  },
  {
    id: 'kol_113',
    category: 'strategy',
    title: '内容联合创作',
    desc: '一个同量级KOL提议一起做一档联合栏目，但你们风格不完全一致。',
    choices: [
      { emoji: '🎨', text: '磨合新风格', hint: '共同创造融合双方优势的内容', isCorrect: true, effect: { wealthPct: 0.26 } },
      { emoji: '📊', text: '轮流主导', hint: '一期你主导一期TA主导', isCorrect: false, effect: { wealthPct: 0.15 } },
      { emoji: '🚫', text: '放弃合作', hint: '风格不合', isCorrect: false, effect: { wealthPct: 0.03 } }
    ],
    explanation: '联合创作是突破舒适区的机会，融合不同风格可能创造1+1>2的效果。'
  },
  {
    id: 'kol_114',
    category: 'strategy',
    title: '技术合作邀请',
    desc: '一个技术团队邀请你当顾问/联合创始人，参与做一个新产品。',
    choices: [
      { emoji: '🔍', text: '尽调后决定', hint: '深入了解团队和产品后再决定', isCorrect: true, effect: { wealthPct: 0.16 } },
      { emoji: '🚀', text: '直接加入', hint: '信任对方', isCorrect: false, effect: { wealthPct: 0.02 } },
      { emoji: '🚫', text: '拒绝', hint: '不想绑这么深', isCorrect: false, effect: { wealthPct: 0.01 } }
    ],
    explanation: '深度绑定合作需要比推广更严格的尽调，产品的成败直接影响你的长期信誉。'
  },
  {
    id: 'kol_115',
    category: 'strategy',
    title: '社群合作运营',
    desc: '几个KOL提议共同运营一个联合社群，分摊成本共享流量。',
    choices: [
      { emoji: '🤝', text: '小范围试点', hint: '先和1-2个信任的KOL试水', isCorrect: true, effect: { wealthPct: 0.15 } },
      { emoji: '👥', text: '大规模联合', hint: '越多越好', isCorrect: false, effect: { wealthPct: 0.09 } },
      { emoji: '🚫', text: '自己运营', hint: '不共享', isCorrect: false, effect: { wealthPct: 0.05 } }
    ],
    explanation: '联合社群能共享流量但需要筛选合作伙伴，宁缺毋滥避免被不靠谱的合作方拖累。'
  },
  {
    id: 'kol_116',
    category: 'strategy',
    title: '资源互换合作',
    desc: '一个KOL提出资源互换：帮你推广换你分享某个项目资源。',
    choices: [
      { emoji: '⚖️', text: '对等互换', hint: '确保双方价值对等，不影响粉丝利益', isCorrect: true, effect: { wealthPct: 0.13 } },
      { emoji: '🤝', text: '接受合作', hint: '互相帮助', isCorrect: false, effect: { wealthPct: 0.07 } },
      { emoji: '🚫', text: '拒绝', hint: '不玩这套', isCorrect: false, effect: { wealthPct: 0.01 } }
    ],
    explanation: '资源互换要确保价值对等且不影响粉丝，不对等的交换会损害长期信誉。'
  },
  {
    id: 'kol_117',
    category: 'strategy',
    title: '线下活动合作',
    desc: '有机构邀请你参与组织线下Meetup，但你没什么经验。',
    choices: [
      { emoji: '🎪', text: '积极参与', hint: '作为嘉宾参与，学习经验', isCorrect: true, effect: { wealthPct: 0.20 } },
      { emoji: '👑', text: '主导组织', hint: '自己主办', isCorrect: false, effect: { wealthPct: 0.00 } },
      { emoji: '🚫', text: '不参与', hint: '太忙了', isCorrect: false, effect: { wealthPct: 0.03 } }
    ],
    explanation: '线下活动是建立深度连接的好方式，从参与开始积累经验是明智选择。'
  },
  {
    id: 'kol_118',
    category: 'strategy',
    title: '合作纠纷处理',
    desc: '你和合作方在项目理解上有分歧，对方觉得你"没按约定推广"。',
    choices: [
      { emoji: '🤝', text: '协商解决', hint: '沟通澄清，适当补偿', isCorrect: true, effect: { wealthPct: 0.04 } },
      { emoji: '⚔️', text: '公开撕', hint: '发推曝光对方', isCorrect: false, effect: { wealthPct: -0.07 } },
      { emoji: '💰', text: '退钱息事', hint: '退还费用了结', isCorrect: false, effect: { wealthPct: -0.04 } }
    ],
    explanation: '合作纠纷优先协商解决，公开撕逼两败俱伤，行业的圈子很小，口碑很重要。'
  },
  {
    id: 'kol_119',
    category: 'strategy',
    title: '长期伙伴关系',
    desc: '经过几次合作，你发现某个项目方非常靠谱，在考虑是否建立长期关系。',
    choices: [
      { emoji: '🤝', text: '深度绑定', hint: '签年框，成为核心合作伙伴', isCorrect: true, effect: { wealthPct: 0.39 } },
      { emoji: '🎲', text: '保持现状', hint: '还是单次合作', isCorrect: false, effect: { wealthPct: 0.12 } },
      { emoji: '🚫', text: '避免绑定', hint: '保持完全独立', isCorrect: false, effect: { wealthPct: 0.03 } }
    ],
    explanation: '找到靠谱的长期合作伙伴不容易，深度绑定能带来稳定和双赢。'
  },
  {
    id: 'kol_120',
    category: 'strategy',
    title: '退出合作',
    desc: '你和一个合作方的关系出现裂痕，在考虑是否要结束合作。',
    choices: [
      { emoji: '📝', text: '和平分手', hint: '完成已承诺的内容，不再续约', isCorrect: true, effect: { wealthPct: 0.04 } },
      { emoji: '⚔️', text: '公开结束', hint: '发推宣布不再合作', isCorrect: false, effect: { wealthPct: -0.06 } },
      { emoji: '🤐', text: '直接消失', hint: '不再回应对方', isCorrect: false, effect: { wealthPct: -0.04 } }
    ],
    explanation: '和平分手体现专业度，完成已有承诺再退出是对双方负责的成熟做法。'
  },

  // 平台规则适应专题 121-130
  {
    id: 'kol_121',
    category: 'strategy',
    title: '平台算法更新',
    desc: 'X平台算法更新后，你的内容曝光量明显下降，不知道原因。',
    choices: [
      { emoji: '🔍', text: '研究测试', hint: '分析新算法，测试不同内容形式', isCorrect: true, effect: { wealthPct: 0.12 } },
      { emoji: '💰', text: '付费推广', hint: '开Premium+提升曝光', isCorrect: false, effect: { wealthPct: 0.00 } },
      { emoji: '😤', text: '抱怨平台', hint: '发推吐槽算法', isCorrect: false, effect: { wealthPct: -0.03 } }
    ],
    explanation: '算法变化是常态，研究适应比抱怨或单纯付费更有效。'
  },
  {
    id: 'kol_122',
    category: 'strategy',
    title: '平台政策风险',
    desc: '听说X平台可能要加强对Crypto内容的审查，你在考虑应对策略。',
    choices: [
      { emoji: '🌐', text: '多平台布局', hint: '加速在其他平台建账号', isCorrect: true, effect: { wealthPct: 0.20 } },
      { emoji: '🔒', text: '建立私域', hint: '把粉丝导到邮件列表/TG', isCorrect: false, effect: { wealthPct: 0.13 } },
      { emoji: '🤷', text: '观望', hint: '等真的发生了再说', isCorrect: false, effect: { wealthPct: 0.00 } }
    ],
    explanation: '平台政策风险需要提前布局应对，多平台和私域是最基本的保险措施。'
  },
  {
    id: 'kol_123',
    category: 'strategy',
    title: '平台新功能抢先',
    desc: 'X推出了新的直播功能，还在测试阶段，你是否要使用？',
    choices: [
      { emoji: '🚀', text: '抢先试用', hint: '平台通常会给新功能流量扶持', isCorrect: true, effect: { wealthPct: 0.15 } },
      { emoji: '👀', text: '等成熟', hint: '等别人测试完再用', isCorrect: false, effect: { wealthPct: 0.05 } },
      { emoji: '🙅', text: '不用', hint: '不折腾', isCorrect: false, effect: { wealthPct: 0.00 } }
    ],
    explanation: '新功能早期有流量红利，抢先试用能获得平台扶持的超额曝光。'
  },
  {
    id: 'kol_124',
    category: 'strategy',
    title: '多平台内容适配',
    desc: '你想把X上的内容同步到其他平台，但各平台内容形式不同。',
    choices: [
      { emoji: '✂️', text: '重新剪辑', hint: '针对不同平台调整格式', isCorrect: true, effect: { wealthPct: 0.22 } },
      { emoji: '📋', text: '直接搬运', hint: '内容一样，多平台发', isCorrect: false, effect: { wealthPct: 0.07 } },
      { emoji: '🎯', text: '平台定制', hint: '不同平台发不同内容', isCorrect: false, effect: { wealthPct: 0.12 } }
    ],
    explanation: '不同平台的内容形式和受众习惯不同，适配调整能获得更好的效果。'
  },
  {
    id: 'kol_125',
    category: 'strategy',
    title: '平台封号应对',
    desc: '你的账号收到警告，有被临时冻结的风险，需要准备预案。',
    choices: [
      { emoji: '📋', text: '全面启动预案', hint: '激活备用账号，通知粉丝备用联系方式', isCorrect: true, effect: { wealthPct: 0.10 } },
      { emoji: '🙏', text: '暂时低调', hint: '减少敏感内容，等风头过去', isCorrect: false, effect: { wealthPct: 0.01 } },
      { emoji: '😤', text: '继续正常发', hint: '没做错什么怕什么', isCorrect: false, effect: { wealthPct: -0.06 } }
    ],
    explanation: '封号风险需要认真对待，提前准备预案能最大程度减少损失。'
  },
  {
    id: 'kol_126',
    category: 'strategy',
    title: '平台创作者激励',
    desc: 'X平台推出了创作者广告分成计划，你在考虑是否要加入。',
    choices: [
      { emoji: '✅', text: '加入并优化', hint: '加入计划，同时优化内容以获得更多分成', isCorrect: true, effect: { wealthPct: 0.25 } },
      { emoji: '💰', text: '只为分成', hint: '内容改为迎合广告算法', isCorrect: false, effect: { wealthPct: 0.20 } },
      { emoji: '🚫', text: '不加入', hint: '不想被平台绑定', isCorrect: false, effect: { wealthPct: 0.01 } }
    ],
    explanation: '创作者激励是额外收入，但不应为了分成牺牲内容质量，平衡是关键。'
  },
  {
    id: 'kol_127',
    category: 'strategy',
    title: '平台账号矩阵',
    desc: '你在考虑是否要开多个账号(如主号+小号+英文号)形成矩阵。',
    choices: [
      { emoji: '📊', text: '差异化矩阵', hint: '主号+垂直小号+实验号，各有定位', isCorrect: true, effect: { wealthPct: 0.22 } },
      { emoji: '👥', text: '内容同步', hint: '多个账号发同样内容', isCorrect: false, effect: { wealthPct: 0.07 } },
      { emoji: '🎯', text: '专注一个', hint: '把一个账号做到极致', isCorrect: false, effect: { wealthPct: 0.13 } }
    ],
    explanation: '差异化定位的账号矩阵能覆盖不同受众，同步发同样内容则意义不大。'
  },
  {
    id: 'kol_128',
    category: 'strategy',
    title: '平台数据监控',
    desc: '你需要监控多个平台的数据，但手动查看效率太低。',
    choices: [
      { emoji: '📊', text: '上工具监控', hint: '使用数据监控工具统一管理', isCorrect: true, effect: { wealthPct: 0.10 } },
      { emoji: '👤', text: '雇人监控', hint: '招助手帮忙', isCorrect: false, effect: { wealthPct: -0.03 } },
      { emoji: '👀', text: '继续手动', hint: '每天自己看', isCorrect: false, effect: { wealthPct: 0.03 } }
    ],
    explanation: '数据监控工具能提升效率，让你更专注于内容创作本身。'
  },
  {
    id: 'kol_129',
    category: 'strategy',
    title: '平台社区规则',
    desc: '你建了几个平台群组，但各平台的管理规则不同，难以统一。',
    choices: [
      { emoji: '📋', text: '统一核心价值观', hint: '不同平台规则不同，但核心价值观一致', isCorrect: true, effect: { wealthPct: 0.11 } },
      { emoji: '🏛️', text: '各平台自治', hint: '让各平台管理员自己定规则', isCorrect: false, effect: { wealthPct: 0.01 } },
      { emoji: '🔒', text: '统一严格管理', hint: '所有平台一个标准', isCorrect: false, effect: { wealthPct: -0.03 } }
    ],
    explanation: '统一的核心价值观能保证品牌一致性，同时给予各平台适当的灵活性。'
  },
  {
    id: 'kol_130',
    category: 'strategy',
    title: '平台迁移准备',
    desc: '你预感X平台长期可能不适合Crypto内容，在考虑逐步迁移。',
    choices: [
      { emoji: '🌐', text: '渐进式迁移', hint: '保持X的同时，重点发展其他平台', isCorrect: true, effect: { wealthPct: 0.17 } },
      { emoji: '🚀', text: '快速迁移', hint: '主力转移，X变为辅助', isCorrect: false, effect: { wealthPct: 0.06 } },
      { emoji: '🤷', text: '不迁移', hint: 'X还是主阵地', isCorrect: false, effect: { wealthPct: 0.03 } }
    ],
    explanation: '平台迁移是长期过程，渐进式迁移能平滑过渡，避免用户流失。'
  },

  // 内容节奏专题 131-140
  {
    id: 'kol_131',
    category: 'content',
    title: '日更 vs 周更',
    desc: '你在纠结是保持日更还是改为更高质量的周更。',
    choices: [
      { emoji: '📅', text: '周更精品', hint: '一周3-4条高质量内容', isCorrect: true, effect: { wealthPct: 0.23 } },
      { emoji: '📆', text: '坚持日更', hint: '保持存在感', isCorrect: false, effect: { wealthPct: 0.07 } },
      { emoji: '⚖️', text: '长短结合', hint: '日更短内容+周更长线程', isCorrect: false, effect: { wealthPct: 0.17 } }
    ],
    explanation: '质量胜过数量，精品内容的长尾价值远超日常水文。'
  },
  {
    id: 'kol_132',
    category: 'content',
    title: '发布时间优化',
    desc: '你在测试不同的发布时间，以找到最佳互动时段。',
    choices: [
      { emoji: '📊', text: '数据驱动', hint: '根据粉丝活跃时间调整', isCorrect: true, effect: { wealthPct: 0.12 } },
      { emoji: '🌐', text: '分时段覆盖', hint: '不同时区各发一次', isCorrect: false, effect: { wealthPct: 0.10 } },
      { emoji: '🎲', text: '随缘发', hint: '想什么时候发就什么时候发', isCorrect: false, effect: { wealthPct: 0.03 } }
    ],
    explanation: '发布时间对初期曝光影响显著，数据驱动的优化能带来可观的互动提升。'
  },
  {
    id: 'kol_133',
    category: 'content',
    title: '节假日内容安排',
    desc: '春节/圣诞等长假即将到来，你在考虑内容安排。',
    choices: [
      { emoji: '📅', text: '提前储备', hint: '节前写好，假期定时发布', isCorrect: true, effect: { wealthPct: 0.13 } },
      { emoji: '🏖️', text: '放假停更', hint: '节日期间休息', isCorrect: false, effect: { wealthPct: -0.03 } },
      { emoji: '📱', text: '假期日更', hint: '假期也保持更新', isCorrect: false, effect: { wealthPct: 0.04 } }
    ],
    explanation: '提前储备内容既能保证假期不断更，又能让自己真正休息，是最可持续的方式。'
  },
  {
    id: 'kol_134',
    category: 'content',
    title: '内容高峰期应对',
    desc: '市场大行情来了，你一天能写10条内容，但怕粉丝疲劳。',
    choices: [
      { emoji: '⚖️', text: '控制频率', hint: '精选3-5条最重要发', isCorrect: true, effect: { wealthPct: 0.17 } },
      { emoji: '🚀', text: '全发', hint: '趁热度多输出', isCorrect: false, effect: { wealthPct: 0.04 } },
      { emoji: '📚', text: '合成长文', hint: '把多条内容合成一篇长线程', isCorrect: false, effect: { wealthPct: 0.10 } }
    ],
    explanation: '内容过载会让粉丝疲劳，精选最有价值的输出能最大化影响力。'
  },
  {
    id: 'kol_135',
    category: 'content',
    title: '内容低谷期',
    desc: '市场冷清，没有热点，你不知道写什么。',
    choices: [
      { emoji: '📚', text: '输出长青内容', hint: '写教程、复盘、方法论', isCorrect: true, effect: { wealthPct: 0.18 } },
      { emoji: '🔥', text: '硬造热点', hint: '找话题强行讨论', isCorrect: false, effect: { wealthPct: -0.01 } },
      { emoji: '🏖️', text: '减少更新', hint: '等市场热了再说', isCorrect: false, effect: { wealthPct: -0.05 } }
    ],
    explanation: '市场低谷是输出教育内容和深度复盘的好时机，这类内容的长尾价值很高。'
  },
  {
    id: 'kol_136',
    category: 'content',
    title: '系列内容节奏',
    desc: '你在做一个系列教程，在考虑是连续更新还是间隔发布。',
    choices: [
      { emoji: '⏰', text: '固定节奏', hint: '每周固定时间更新，培养期待', isCorrect: true, effect: { wealthPct: 0.20 } },
      { emoji: '🚀', text: '连续更新', hint: '一周内发完，保持热度', isCorrect: false, effect: { wealthPct: 0.10 } },
      { emoji: '🎲', text: '随机更新', hint: '写好了就发', isCorrect: false, effect: { wealthPct: 0.05 } }
    ],
    explanation: '固定节奏能培养用户的期待感，是系列内容保持关注的最佳方式。'
  },
  {
    id: 'kol_137',
    category: 'content',
    title: '互动时间安排',
    desc: '你发的内容互动很多，但回复评论占用了大量时间。',
    choices: [
      { emoji: '⏰', text: '固定互动时间', hint: '每天固定时段集中回复', isCorrect: true, effect: { wealthPct: 0.13 } },
      { emoji: '⚡', text: '秒回', hint: '即时回复所有评论', isCorrect: false, effect: { wealthPct: 0.14 } },
      { emoji: '👤', text: '雇人回复', hint: '让助手帮忙回复', isCorrect: false, effect: { wealthPct: 0.03 } }
    ],
    explanation: '固定互动时间既能保证与粉丝连接，又能保护自己的创作时间。'
  },
  {
    id: 'kol_138',
    category: 'content',
    title: '内容迭代更新',
    desc: '你半年前的某篇热门教程，现在有些内容已经过时，粉丝还在转发。',
    choices: [
      { emoji: '🔄', text: '更新版本', hint: '发新版，@旧版说明已更新', isCorrect: true, effect: { wealthPct: 0.18 } },
      { emoji: '🗑️', text: '删除旧版', hint: '避免误导', isCorrect: false, effect: { wealthPct: -0.03 } },
      { emoji: '📝', text: '评论区勘误', hint: '在原推下评论说明', isCorrect: false, effect: { wealthPct: 0.05 } }
    ],
    explanation: '主动更新过时内容体现专业负责的态度，也是对粉丝体验的关注。'
  },
  {
    id: 'kol_139',
    category: 'content',
    title: '多线程并行',
    desc: '你在同时写几个不同主题的内容，在考虑如何安排发布节奏。',
    choices: [
      { emoji: '📊', text: '主题轮转', hint: '不同主题交替发，保持多样性', isCorrect: true, effect: { wealthPct: 0.17 } },
      { emoji: '🎯', text: '集中发布', hint: '一个主题写完再写下一个', isCorrect: false, effect: { wealthPct: 0.10 } },
      { emoji: '🎲', text: '随机发', hint: '哪个写完发哪个', isCorrect: false, effect: { wealthPct: 0.05 } }
    ],
    explanation: '主题轮转能保持内容的多样性，满足不同兴趣粉丝的需求。'
  },
  {
    id: 'kol_140',
    category: 'content',
    title: '内容复盘节奏',
    desc: '你在考虑多久做一次内容复盘和策略调整。',
    choices: [
      { emoji: '📅', text: '月度复盘', hint: '每月回顾数据，调整策略', isCorrect: true, effect: { wealthPct: 0.14 } },
      { emoji: '📊', text: '季度复盘', hint: '季度回顾一次', isCorrect: false, effect: { wealthPct: 0.07 } },
      { emoji: '🎲', text: '不复盘', hint: '凭感觉做', isCorrect: false, effect: { wealthPct: -0.03 } }
    ],
    explanation: '定期复盘是持续优化的基础，月度节奏能及时发现问题并调整。'
  },

  // 粉丝反馈专题 141-150
  {
    id: 'kol_141',
    category: 'fans',
    title: '粉丝建议采纳',
    desc: '多位粉丝建议你做某种类型的内容(如链上数据分析)，但这不是你的强项。',
    choices: [
      { emoji: '📚', text: '学习后尝试', hint: '投入时间学习，满足粉丝需求', isCorrect: true, effect: { wealthPct: 0.21 } },
      { emoji: '🤝', text: '邀请合作', hint: '找擅长这方面的KOL合作', isCorrect: false, effect: { wealthPct: 0.13 } },
      { emoji: '🙅', text: '坚持原有方向', hint: '不是强项就不碰', isCorrect: false, effect: { wealthPct: -0.03 } }
    ],
    explanation: '响应粉丝需求并投入学习能体现诚意，也是突破舒适区成长的机会。'
  },
  {
    id: 'kol_142',
    category: 'fans',
    title: '粉丝负面评价',
    desc: '一位粉丝发长文详细批评你最近的内容"质量下滑、广告太多"。',
    choices: [
      { emoji: '👂', text: '认真反思改进', hint: '公开感谢反馈，承诺改进', isCorrect: true, effect: { wealthPct: 0.15 } },
      { emoji: '🛡️', text: '解释原因', hint: '说明最近的困难和计划', isCorrect: false, effect: { wealthPct: 0.01 } },
      { emoji: '🚫', text: '忽略', hint: '个别人意见不重要', isCorrect: false, effect: { wealthPct: -0.04 } }
    ],
    explanation: '认真的负面反馈是宝贵的改进信号，真诚回应能化危机为转机。'
  },
  {
    id: 'kol_143',
    category: 'fans',
    title: '粉丝成功案例',
    desc: '一位粉丝私信说因为跟着你的建议赚了不少，想给你发红包感谢。',
    choices: [
      { emoji: '🙏', text: '婉拒红包', hint: '感谢认可，但建议把盈利再投资学习', isCorrect: true, effect: { wealthPct: 0.14 } },
      { emoji: '💰', text: '收下红包', hint: '粉丝的心意', isCorrect: false, effect: { wealthPct: 0.01 } },
      { emoji: '🎁', text: '让他请吃饭', hint: '线下见面交流', isCorrect: false, effect: { wealthPct: 0.01 } }
    ],
    explanation: '婉拒红包体现职业操守，同时引导粉丝继续成长比收一次钱更有长期价值。'
  },
  {
    id: 'kol_144',
    category: 'fans',
    title: '粉丝退圈',
    desc: '一位老粉丝说要退圈了，感谢你的陪伴，你考虑如何回应。',
    choices: [
      { emoji: '💬', text: '真诚祝福', hint: '感谢陪伴，祝生活顺利，随时欢迎回来', isCorrect: true, effect: { wealthPct: 0.10 } },
      { emoji: '🙏', text: '挽留', hint: '说牛市快到了，别走', isCorrect: false, effect: { wealthPct: -0.01 } },
      { emoji: '🤐', text: '不回应', hint: '走了就走了', isCorrect: false, effect: { wealthPct: -0.03 } }
    ],
    explanation: '优雅地送别退圈粉丝体现格局，他们可能在下一个周期回来，也会推荐朋友关注你。'
  },
  {
    id: 'kol_145',
    category: 'fans',
    title: '粉丝白嫖',
    desc: '有人进你的付费群，看完内容就退款，还到处传播你的付费内容。',
    choices: [
      { emoji: '🔒', text: '优化交付机制', hint: '分期交付，减少被白嫖风险', isCorrect: true, effect: { wealthPct: 0.08 } },
      { emoji: '⚔️', text: '公开谴责', hint: '挂人警告', isCorrect: false, effect: { wealthPct: -0.04 } },
      { emoji: '🚫', text: '取消退款', hint: '关闭退款功能', isCorrect: false, effect: { wealthPct: -0.06 } }
    ],
    explanation: '通过优化交付机制减少被白嫖的可能，公开撕逼显得不专业，取消退款会劝退潜在客户。'
  },
  {
    id: 'kol_146',
    category: 'fans',
    title: '粉丝比较',
    desc: '有人在你的评论区说"另一个KOL比你分析得更准"。',
    choices: [
      { emoji: '🤝', text: '推荐关注', hint: '欢迎粉丝也关注其他优质KOL，互相学习', isCorrect: true, effect: { wealthPct: 0.12 } },
      { emoji: '⚔️', text: '反驳比较', hint: '说自己哪里更好', isCorrect: false, effect: { wealthPct: -0.04 } },
      { emoji: '🗑️', text: '删除评论', hint: '不想看到比较', isCorrect: false, effect: { wealthPct: -0.03 } }
    ],
    explanation: '大方推荐同行体现格局和自信，反而会让粉丝觉得你有底气，更值得信任。'
  },
  {
    id: 'kol_147',
    category: 'fans',
    title: '粉丝升级',
    desc: '一位从小白时期就关注你的粉丝，现在已经成长为资深玩家，开始输出自己的内容。',
    choices: [
      { emoji: '🤝', text: '提携后辈', hint: '转发推荐他的内容，给予鼓励', isCorrect: true, effect: { wealthPct: 0.19 } },
      { emoji: '👀', text: '观察', hint: '默默关注他的成长', isCorrect: false, effect: { wealthPct: 0.01 } },
      { emoji: '😤', text: '视为竞争', hint: '他是来抢你粉丝的', isCorrect: false, effect: { wealthPct: -0.06 } }
    ],
    explanation: '提携成长起来的粉丝能建立行业影响力，也能收获忠诚的盟友，视为竞争则显得格局太小。'
  },
  {
    id: 'kol_148',
    category: 'fans',
    title: '粉丝聚会',
    desc: '粉丝们提议举办线下聚会，你在考虑是否参加。',
    choices: [
      { emoji: '🎉', text: '参加小范围', hint: '选几个核心粉丝小型聚会', isCorrect: true, effect: { wealthPct: 0.17 } },
      { emoji: '🎪', text: '办大型见面会', hint: '越大越好', isCorrect: false, effect: { wealthPct: 0.00 } },
      { emoji: '🚫', text: '不参加', hint: '保持神秘', isCorrect: false, effect: { wealthPct: -0.03 } }
    ],
    explanation: '小范围聚会既能增进感情又能控制成本和安全，大型活动投入高且风险大。'
  },
  {
    id: 'kol_149',
    category: 'fans',
    title: '粉丝情感连接',
    desc: '市场深熊，粉丝普遍亏损严重，社区氛围低迷。',
    choices: [
      { emoji: '❤️', text: '增强情感连接', hint: '多分享个人经历，陪伴大家度过熊市', isCorrect: true, effect: { wealthPct: 0.21 } },
      { emoji: '📊', text: '专注内容', hint: '还是正常发分析内容', isCorrect: false, effect: { wealthPct: 0.05 } },
      { emoji: '🏖️', text: '减少更新', hint: '等行情好了再说', isCorrect: false, effect: { wealthPct: -0.07 } }
    ],
    explanation: '熊市中的陪伴和支持能建立最牢固的情感连接，这些人会成为你未来最忠诚的粉丝。'
  },
  {
    id: 'kol_150',
    category: 'strategy',
    title: 'KOL生涯规划',
    desc: '你在思考作为KOL的长期职业规划：如何保持竞争力和可持续性？',
    choices: [
      { emoji: '🏗️', text: '构建生态系统', hint: '内容+社群+产品+投资，形成闭环', isCorrect: true, effect: { wealthPct: 0.69 } },
      { emoji: '💰', text: '趁年轻多赚', hint: 'KOL是青春饭，多变现', isCorrect: false, effect: { wealthPct: 0.36 } },
      { emoji: '📚', text: '转型幕后', hint: '培养新人，做MCN', isCorrect: false, effect: { wealthPct: 0.28 } }
    ],
    explanation: '构建生态系统是KOL长期发展的终极形态，多元化收入和品牌资产能让你穿越周期持续发展。'
  }
);

// 验证事件数量
console.log(`[HARDCORE_KOL_DECISIONS] 共加载 ${HARDCORE_KOL_DECISIONS.length} 个KOL决策事件`);

// 导出
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { HARDCORE_KOL_DECISIONS };
}


// Export for browser
if (typeof window !== 'undefined') {
  window.HARDCORE_KOL_DECISIONS = HARDCORE_KOL_DECISIONS;
}
