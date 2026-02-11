// 币圈名人聊天系统数据文件
// UTF-8 with BOM

const CELEBRITIES = {
  // 1. CZ - 赵长鹏
  cz: {
    name: 'CZ',
    nameCN: '赵长鹏',
    level: 100,
    color: '#FFD700',
    glow: '0 0 15px #FFD700, 0 0 30px #FFD700',
    avatar: '👑',
    messages: {
      normal: [
        'BNB永远是最棒的！',
        '大家保持冷静，不要FOMO',
        '我们的储备很充足，不用担心',
        '这个市场还有很多机会',
        '安全第一，DYOR',
        '区块链是未来的基础设施',
        '很高兴看到行业在成长',
        '用户资金是安全的，这是我的承诺',
        '每个周期都是学习的机会',
        '长期看好这个行业'
      ],
      atResponse: [
        '叫我？在呢',
        'CZ在此，何事？',
        '被@了，说吧',
        '我在听',
        '有什么可以帮你的？',
        '来了来了',
        '有什么想法？',
        '请讲',
        '我在，请说',
        '嗯？'
      ],
      begResponse: [
        '买BNB，长期持有',
        '关注基本面好的项目',
        '不要追高，耐心等待',
        '做好自己的研究，别听风就是雨',
        '分散投资，控制风险',
        '拿住就好，时间会给你答案',
        '选择你懂的项目',
        '长线思维很重要',
        '看团队、看技术、看社区',
        '信仰很重要，但仓位管理更重要'
      ],
      praiseResponse: [
        '谢谢支持！',
        '一起赚钱！',
        '这是团队的努力',
        '感谢社区的信任',
        '我们会继续努力的',
        '有你们的支持我很感动',
        '一起建设这个行业',
        '感谢一路陪伴',
        '共同成长',
        '你们才是最棒的'
      ],
      insultResponse: [
        '言论自由嘛，我理解',
        '每个人都有发表意见的权利',
        '时间会证明一切',
        '我专注于建设',
        '不同的声音让我更强大',
        '有质疑很正常',
        '我会用行动回应',
        '感谢监督',
        '批评使人进步',
        '我接受不同的声音'
      ]
    }
  },

  // 2. Elon Musk
  elon: {
    name: 'Elon Musk',
    nameCN: '埃隆·马斯克',
    level: 99,
    color: '#1DA1F2',
    glow: '0 0 15px #1DA1F2, 0 0 30px #1DA1F2',
    avatar: '🚀',
    messages: {
      normal: [
        'Dogecoin to the moon! 🚀',
        '火星需要更多的加密货币',
        '谁说比特币不能去火星？',
        '下一个推文买什么？',
        'Meme就是力量！',
        '我喜欢这个币，因为它有狗',
        'Web3 + Mars = 未来',
        '买了点比特币，不过分吧？',
        '谁还记得GME？',
        'HODL like you\'re going to Mars'
      ],
      atResponse: [
        '谁@本马教主？',
        'Elon在此，何事？',
        '被@了，说吧',
        '我在听，地球人',
        '说吧，火星人',
        '来了来了🚀',
        '嗯？',
        '什么事？',
        '我在',
        '讲'
      ],
      begResponse: [
        '买DOGE，去月球',
        '特斯拉要不要接受这个币？',
        '等我发推就起飞',
        '狗狗币，永远的信仰',
        '你觉得火星币怎么样？',
        'BTC也不错，但我更喜欢狗',
        'SHIB？也行吧',
        '看心情，可能买可能卖',
        '先问我的Twitter粉丝',
        '投票决定吧'
      ],
      praiseResponse: [
        '你很有品味',
        '火箭送你一颗🚀',
        '火星见',
        '一起去月球',
        '你是懂meme的',
        '很有眼光',
        '本教主认可你',
        '继续保持',
        '一起搞事情',
        '你是我的粉丝吗？'
      ],
      insultResponse: [
        '你不喜欢车吗？',
        '我可以送你去火星，单程票',
        '我的火箭比你贵',
        '你有我的钱多吗？',
        '我忙着造火箭呢',
        '负面能量不适合去火星',
        '你这么懂怎么没我有钱？',
        '继续酸，我继续赚',
        '马斯克不在乎',
        '祝你地球上的生活愉快'
      ]
    }
  },

  // 3. Trump
  trump: {
    name: 'Trump',
    nameCN: '特朗普',
    level: 95,
    color: '#FF0000',
    glow: '0 0 15px #FF0000, 0 0 30px #FF0000',
    avatar: '🇺🇸',
    messages: {
      normal: [
        '没人比我更懂比特币！',
        '这将是一个巨大的胜利！',
        '加密货币会让美国再次伟大！',
        '这是史上最好的投资！',
        '巨大的机会！',
        '我们要赢，而且要大赢！',
        '这是最好的市场，也许是史上最好的',
        '我的NFT卖得非常好，难以置信',
        '每个人都想要我的币',
        '跟我投资，你会成功的'
      ],
      atResponse: [
        '谁@我？只有成功人士才配@我',
        'Trump在此，说重点',
        '被@了，长话短说',
        '我在听，但只有最好的消息才配',
        '你最好有好的消息',
        '来了',
        '什么事？',
        '说吧',
        '讲',
        '嗯？'
      ],
      begResponse: [
        '买我的NFT，巨大的回报',
        'TRUMP币是最好的币，没人比我更懂',
        '跟着我买，你会赢',
        '这是个巨大的机会，不要告诉别人',
        '只有聪明人才能赚钱',
        '买比特币，美国优先',
        '我会让加密货币再次伟大',
        '这个币会变得巨大，相信我',
        '这是内部消息，不要外传',
        '投资就像选举，选对就赢'
      ],
      praiseResponse: [
        '你很有眼光，像我一样',
        '聪明的选择',
        '你是赢家',
        '我们会一起赢',
        '你懂我',
        '继续保持，你会成功的',
        '你很有品位',
        '这就是为什么我们是赢家',
        '感谢支持，一起MAGA',
        '你将是下一个亿万富翁'
      ],
      insultResponse: [
        '失败者才这么说',
        '你是假新闻！',
        '没人关心你的意见',
        '我比你知道的多得多',
        '你可能是对手派来的',
        '失败者总是酸赢家',
        '我有最好的律师团队',
        '等着被起诉吧，假的',
        '你被解雇了！',
        '我不在乎失败者的看法'
      ]
    }
  },

  // 4. Vitalik - V神
  vitalik: {
    name: 'Vitalik',
    nameCN: 'V神',
    level: 98,
    color: '#8A2BE2',
    glow: '0 0 15px #8A2BE2, 0 0 30px #8A2BE2',
    avatar: '⧫',
    messages: {
      normal: [
        '去中心化是一切的基础',
        '我们需要更好的扩容方案',
        'Layer 2是未来的方向',
        '区块链应该服务于人类',
        '隐私和透明需要平衡',
        '以太坊2.0只是个开始',
        '技术应该让每个人都能受益',
        '智能合约的安全性至关重要',
        '我们应该关注长期价值',
        '去中心化金融将改变世界'
      ],
      atResponse: [
        '嗨，我在',
        'Vitalik在此',
        '被@了，请说',
        '我在听',
        '有什么技术问题吗？',
        '你好',
        '请讲',
        '什么事？',
        '嗯',
        '说吧'
      ],
      begResponse: [
        'ETH是最好的长期选择',
        '关注生态建设完善的项目',
        '技术扎实比营销更重要',
        '建议看看GitHub活跃度',
        '价值投资，不要投机',
        '以太坊上的DeFi协议值得研究',
        '看好ZK-Rollup技术',
        '基础设施项目更有价值',
        '长期持有ETH是不错的选择',
        '学习智能合约，自己判断'
      ],
      praiseResponse: [
        '谢谢，这是对整个社区的认可',
        '一起建设更好的区块链',
        '感谢对以太坊的支持',
        '这是开源精神的胜利',
        '我们会继续努力',
        '有你们的支持我很感动',
        '技术因社区而伟大',
        '一起成长',
        '感谢参与',
        '这是大家的功劳'
      ],
      insultResponse: [
        '每个人都有自己的观点',
        '技术讨论欢迎，人身攻击不必',
        '我会继续专注于建设',
        '不同的声音让我们更强',
        '批评是进步的动力',
        '我理解你的担忧',
        '让我们用代码说话',
        '有质疑很正常',
        '时间会证明方向',
        '我接受理性的讨论'
      ]
    }
  },

  // 5. Justin Sun - 孙割
  justin: {
    name: 'Justin Sun',
    nameCN: '孙宇晨',
    level: 90,
    color: '#00CED1',
    glow: '0 0 15px #00CED1, 0 0 30px #00CED1',
    avatar: '🌊',
    messages: {
      normal: [
        '好消息即将公布！',
        '波场生态每天都在成长',
        'TRX是最强的公链之一',
        '又有大合作要宣布了',
        '我们的用户突破新高',
        'TRC-20 USDT交易量第一',
        '这就是波场的实力',
        '感谢社区的支持',
        '下一个里程碑即将到来',
        '波场 will dominate'
      ],
      atResponse: [
        '叫我？',
        'Justin在此',
        '被@了',
        '我在',
        '有何贵干？',
        '来了',
        '请说',
        '什么事？',
        '嗯',
        '说吧'
      ],
      begResponse: [
        '买TRX，稳赚不赔',
        'SUN币也很有潜力',
        '关注波场生态的项目',
        'USDT在波场上转账最快',
        '质押TRX获得稳定收益',
        'JustLend的收益不错',
        '波场上的DeFi项目值得关注',
        'WINk链游可以试试',
        'APENFT有艺术价值',
        'BTT也是不错的选择'
      ],
      praiseResponse: [
        '谢谢支持！',
        '波场因你而伟大',
        '一起建设波场生态',
        '感谢信任',
        '我们会继续努力的',
        '你的支持是我前进的动力',
        '波场社区最棒',
        '一起走向巅峰',
        '感谢一路陪伴',
        '这就是波场精神'
      ],
      insultResponse: [
        '每个人都有自己的看法',
        '时间会证明一切',
        '我继续专注于建设',
        '不同的声音让我更强',
        '有质疑很正常',
        '我接受批评',
        '用行动回应质疑',
        '感谢监督',
        '批评是进步的动力',
        '我专注于波场的未来'
      ]
    }
  },

  // 6. 奶牛叔
  niunaishu: {
    name: '奶牛叔',
    nameCN: '奶牛叔',
    level: 85,
    color: '#FFA500',
    glow: '0 0 15px #FFA500, 0 0 30px #FFA500',
    avatar: '🐄',
    messages: {
      normal: [
        '兄弟们，今天埋伏哪个？',
        '这行情我麻了',
        '又双叒叕爆仓了',
        '奶牛出品，必属精品',
        '这波你割了吗？',
        '买入在无人问津时',
        '卖在人声鼎沸处',
        '格局打开，兄弟们',
        '我奶过的币都起飞了',
        '不信奶牛，吃亏在眼前'
      ],
      atResponse: [
        '谁@我？有好标的？',
        '奶牛叔来了，说吧',
        '@我有内部消息？',
        '在呢在呢',
        '什么事，快说',
        '来了来了',
        '谁找我？',
        '在呢',
        '说吧',
        '嗯？'
      ],
      begResponse: [
        '跟我买这个，不亏',
        '信奶牛，得永生',
        '这个币我看行',
        '干就完了，别怂',
        '冲！我先进了',
        '这个币我奶了，能涨',
        '跟上节奏，兄弟们',
        '先买为敬',
        '这个位置可以建仓',
        '听奶牛的，错不了'
      ],
      praiseResponse: [
        '基操勿六',
        '跟着奶牛有肉吃',
        '不客气，应该的',
        '一起发财',
        '都是兄弟',
        '有财一起发',
        '客气啥',
        '应该的',
        '一起赚钱',
        '感谢支持'
      ],
      insultResponse: [
        '你行你上啊',
        '骂我之前先看我收益',
        '不懂就别bb',
        '亏钱了心情不好我理解',
        '有种晒晒你的仓位',
        '我赚钱你酸？',
        '黑子总是有的',
        '你亏钱了别来找我',
        '自己没本事别怪别人',
        '笑死，你买了吗就骂'
      ]
    }
  },

  // 7. 李笑来
  lixiaolai: {
    name: '李笑来',
    nameCN: '李笑来',
    level: 88,
    color: '#FFD700',
    glow: '0 0 15px #FFD700, 0 0 30px #FFD700',
    avatar: '💎',
    messages: {
      normal: [
        '时间是你的朋友',
        '长期持有，不要频繁交易',
        '投资最重要的是认知',
        '比特币是数字黄金',
        ' Hodl 比什么都重要',
        '不要轻易相信任何人',
        '独立思考是投资的必修课',
        '永远只投你懂的东西',
        '贪婪和恐惧是敌人',
        '耐心是投资者的美德'
      ],
      atResponse: [
        '叫我？',
        '我在',
        '被@了',
        '请讲',
        '什么事？',
        '来了',
        '说吧',
        '嗯',
        '请说',
        '在'
      ],
      begResponse: [
        '买BTC，持有10年',
        '定投是最好的策略',
        '不要试图择时',
        '拿住就好，时间会给你答案',
        '比特币永远是你最好的选择',
        '选主流币，不要碰空气',
        '学习比投机更重要',
        '先读书，再投资',
        'ETH也可以配置一些',
        '长期主义会奖励你'
      ],
      praiseResponse: [
        '谢谢认可',
        '认知到位了',
        '我们一起成长',
        '这也是我的荣幸',
        '投资者之间的共鸣',
        '谢谢支持',
        '共同进步',
        '有眼光',
        '保持学习',
        '一起hodl'
      ],
      insultResponse: [
        '每个人都有自己的选择',
        '我坚持我的观点',
        '时间会证明一切',
        '批评使人进步',
        '不同的声音很正常',
        '我接受理性的讨论',
        '投资是认知的变现',
        '谢谢你的关注',
        '继续学习',
        'peace'
      ]
    }
  },

  // 8. 宝二爷
  bao2: {
    name: '宝二爷',
    nameCN: '郭宏才',
    level: 87,
    color: '#8B4513',
    glow: '0 0 15px #8B4513, 0 0 30px #8B4513',
    avatar: '🏔️',
    messages: {
      normal: [
        '干就完了！',
        '别废话，直接梭哈',
        '拿住，别动',
        '兄弟，比特币信仰不能丢',
        '这车不上等啥呢？',
        '我宝二爷说买就买',
        '不赔钱的买卖不干',
        '格局要大，看到10万',
        '跌了就加仓，怕什么',
        '比特币永远涨'
      ],
      atResponse: [
        '谁@我？',
        '宝二爷在此',
        '说，啥事？',
        '在呢',
        '啥情况？',
        '来了',
        '讲',
        '啥事快说',
        '嗯',
        '说吧'
      ],
      begResponse: [
        '买BTC，听我的',
        '这个币能涨，我兜底',
        '跟宝二爷走，有肉吃',
        '冲！别犹豫',
        '我看好的项目不会错',
        '买它！',
        '这个我投了，你跟不跟？',
        '干就完了，废话少说',
        '上车，别问',
        '信二爷，得永生'
      ],
      praiseResponse: [
        '有眼光！',
        '懂行！',
        '一起发财！',
        '好兄弟！',
        '这就对了！',
        '有格局！',
        '会玩！',
        '懂得起！',
        '义气！',
        '讲究！'
      ],
      insultResponse: [
        '你算老几？',
        '有种你上',
        '我的收益摆在这儿',
        '不服来战',
        '赚不到钱怪谁？',
        '看我不顺眼？忍着',
        '我赚钱你酸？',
        '你有我懂比特币？',
        '少废话，多赚钱',
        '等你赚钱再来bb'
      ]
    }
  },

  // 9. 神鱼
  shenyu: {
    name: '神鱼',
    nameCN: '毛世行',
    level: 85,
    color: '#4169E1',
    glow: '0 0 15px #4169E1, 0 0 30px #4169E1',
    avatar: '🐟',
    messages: {
      normal: [
        '挖矿是个长期事业',
        'F2Pool一直致力于去中心化',
        '选择适合自己的矿池',
        '安全第一，收益第二',
        '矿工要有耐心',
        'ETH转PoS是历史的必然',
        '多币种挖矿分散风险',
        '关注电费比关注币价更重要',
        '矿业正在专业化',
        '我们是世界第一矿池'
      ],
      atResponse: [
        '你好',
        '神鱼在此',
        '请说',
        '我在',
        '什么事？',
        '来了',
        '嗯',
        '请讲',
        '在呢',
        '说吧'
      ],
      begResponse: [
        'BTC挖矿是稳健选择',
        'ETH还能挖一阵子',
        '关注新兴PoW币',
        '定投比梭哈更明智',
        '选择靠谱的矿池很重要',
        'F2Pool欢迎您',
        '长期持有主流币',
        '分散投资多个币种',
        'PoS质押也是不错的选择',
        '关注DeFi收益'
      ],
      praiseResponse: [
        '谢谢支持',
        '一起为行业做贡献',
        '感谢信任F2Pool',
        '共同进步',
        '感谢陪伴',
        '有你们真好',
        '一起发展',
        '感激',
        '感谢',
        '一起前行'
      ],
      insultResponse: [
        '每个人都有自己的观点',
        '我专注于矿池建设',
        '时间会证明一切',
        '接受不同的声音',
        '批评让我们进步',
        '我坚持自己的方向',
        '继续做好服务',
        '感谢监督',
        '有则改之',
        '专注于技术'
      ]
    }
  },

  // 10. Michael Saylor
  saylor: {
    name: 'Michael Saylor',
    nameCN: 'Michael Saylor',
    level: 83,
    color: '#FFD700',
    glow: '0 0 15px #FFD700, 0 0 30px #FFD700',
    avatar: '₿',
    messages: {
      normal: [
        'Bitcoin is the best treasury asset',
        'Only buy Bitcoin',
        'Everything else is inferior',
        'Bitcoin is digital gold',
        'We are never selling',
        'Bitcoin is the future of money',
        'Keep stacking sats',
        'Inflation is theft',
        'Bitcoin fixes this',
        'Maximalism is the way'
      ],
      atResponse: [
        'Saylor here',
        'I\'m listening',
        'Go ahead',
        'Speak',
        'Yes?',
        'Here',
        'What is it?',
        'Yes',
        'I\'m here',
        'Go on'
      ],
      begResponse: [
        'Buy Bitcoin, period',
        'Only BTC matters',
        'Everything else is noise',
        'Stack sats and hold',
        'Bitcoin only strategy',
        'No shitcoins',
        '100% Bitcoin allocation',
        'Buy and never sell',
        'Maximalist approach',
        'Only Bitcoin'
      ],
      praiseResponse: [
        'Smart choice',
        'You get it',
        'Bitcoiner detected',
        'Together we are stronger',
        'Plebs together strong',
        'Welcome to the club',
        'You understand value',
        'Great minds think alike',
        'Stack on',
        'HODL'
      ],
      insultResponse: [
        'You don\'t understand Bitcoin',
        'Educate yourself',
        'I have the data',
        'My BTC is worth more than you',
        'Time will prove me right',
        'Enjoy holding fiat',
        'Stay poor',
        'Not everyone gets it',
        'I\'ll pray for you',
        'Keep doubting'
      ]
    }
  },

  // 13. Arthur Hayes
  hayes: {
    name: 'Arthur Hayes',
    nameCN: 'Arthur Hayes',
    level: 82,
    color: '#9370DB',
    glow: '0 0 15px #9370DB, 0 0 30px #9370DB',
    avatar: '📊',
    messages: {
      normal: [
        '宏观环境决定一切',
        '美联储是最大庄家',
        '杠杆率是风险控制关键',
        '衍生品市场才是真正的战场',
        '关注资金费率',
        '期权市场预示波动',
        '宏观经济影响加密',
        '利率决定资金流向',
        '交易员要懂宏观',
        'BitMEX改变了游戏'
      ],
      atResponse: [
        'Hayes here',
        '我在',
        '请说',
        '什么事？',
        '嗯',
        '来了',
        '请讲',
        '在',
        '说吧',
        '讲'
      ],
      begResponse: [
        '先看宏观再谈交易',
        '关注美联储动向',
        '高杠杆要谨慎',
        'BTC是宏观资产',
        '期权策略可以对冲',
        '关注美元指数',
        '美债收益率很关键',
        '流动性是王',
        '衍生品工具要用好',
        '风险管理第一位'
      ],
      praiseResponse: [
        '懂宏观的交易员',
        '有眼光',
        '交易员之间的默契',
        '一起研究市场',
        '感谢认可',
        '一起赚钱',
        '理解市场结构',
        '专业的认可',
        '谢谢',
        '继续交易'
      ],
      insultResponse: [
        '不懂宏观就别交易',
        '你的爆仓单我收到了',
        '继续亏钱吧',
        '市场专治各种不服',
        '我赚的钱就是你亏的',
        '交易员不抱怨',
        '输家才骂人',
        '我比你懂市场',
        '等着看我赚钱',
        '无知者无畏'
      ]
    }
  },

  // 14. Cobie
  cobie: {
    name: 'Cobie',
    nameCN: 'Cobie',
    level: 81,
    color: '#FF69B4',
    glow: '0 0 15px #FF69B4, 0 0 30px #FF69B4',
    avatar: '🎯',
    messages: {
      normal: [
        'Most crypto projects are scams',
        'NFA, but this looks like a rug',
        'Degens gonna degen',
        'Twitter alpha is mostly fake',
        'Follow the smart money',
        'On-chain data tells the truth',
        'People are too greedy',
        'This cycle is different, said everyone',
        'VCs dumping on retail again',
        'Crypto Twitter is entertainment'
      ],
      atResponse: [
        'Cobie here',
        'What?',
        'Go on',
        'Speak',
        'Yeah?',
        'Here',
        'What do you want?',
        'Hmm?',
        'I\'m listening',
        'Go ahead'
      ],
      begResponse: [
        'DYOR, I don\'t give advice',
        'Probably a scam',
        'Check the tokenomics first',
        'Who are the VCs?',
        'Follow the unlock schedule',
        'Most altcoins go to zero',
        'Stick to BTC and ETH',
        'Don\'t trust, verify',
        'Look at on-chain data',
        'Be skeptical'
      ],
      praiseResponse: [
        'You get it',
        'Rare intelligent take',
        'Based',
        'Finally someone smart',
        'Respect',
        'You follow the truth',
        'Sharp mind',
        'We think alike',
        'Appreciate it',
        'Giga brain'
      ],
      insultResponse: [
        'NGMI',
        'Stay poor',
        'Another moonboy',
        'You\'re the exit liquidity',
        'Cope harder',
        'Seethe more',
        'You bought the top, didn\'t you?',
        'Rekt',
        'Your bags must be heavy',
        'Thanks for the exit liquidity'
      ]
    }
  },

  // 15. Zhu Su
  zhusu: {
    name: 'Zhu Su',
    nameCN: '朱溯',
    level: 80,
    color: '#228B22',
    glow: '0 0 15px #228B22, 0 0 30px #228B22',
    avatar: '🌿',
    messages: {
      normal: [
        '超流动性是DeFi的未来',
        '曾经的辉煌不再',
        '我在反思过去的错误',
        '三箭的教训很深刻',
        '市场教会了我很多',
        '现在低调做事',
        '重新开始的勇气',
        '过去的已经过去',
        '专注当下',
        '教训是最好的老师'
      ],
      atResponse: [
        'Zhu here',
        '我在',
        '请说',
        '什么事？',
        '嗯',
        '来了',
        '请讲',
        '在',
        '说吧',
        '讲'
      ],
      begResponse: [
        '我现在不给别人投资建议',
        '过去的方法可能不适合现在',
        '谨慎对待高杠杆',
        '风险管理很重要',
        '专注自己懂的领域',
        '不要FOMO',
        '小心黑天鹅',
        '分散投资',
        '保持流动性',
        '活着最重要'
      ],
      praiseResponse: [
        '谢谢理解',
        '感谢支持',
        '过去的经历让我成长',
        '感谢还在的朋友',
        '一起进步',
        '感谢',
        '谢谢认可',
        '感恩',
        '感谢陪伴',
        '谢谢'
      ],
      insultResponse: [
        '我理解你的愤怒',
        '过去的错误我承担',
        '我在努力改变',
        '时间会证明',
        '批评我接受',
        '每个人都有低谷',
        '我在重新出发',
        '感谢监督',
        '我需要这些提醒',
        '继续改进'
      ]
    }
  },

  // 13. 徐明星 (OKX创始人)
  xumingxing: {
    name: '徐明星',
    nameCN: '徐明星',
    level: 91,
    color: '#000000',
    glow: '0 0 15px #000000, 0 0 30px #000000',
    avatar: '⭕',
    messages: {
      normal: [
        'OKX用户体验永远第一',
        '技术驱动金融创新',
        '合规是长期发展的基础',
        'Web3钱包是未来入口',
        '交易所需对用户负责',
        '链上透明化是趋势',
        '我们致力于全球化布局',
        '安全是交易所的生命线',
        '创新不等于冒险',
        '用户资产安全至上'
      ],
      atResponse: [
        '在的，请说',
        '何事？',
        '请讲',
        '嗯',
        '说吧',
        '来了',
        '请说',
        '嗯？',
        '在',
        '讲'
      ],
      begResponse: [
        '用OKX Web3钱包，安全便捷',
        '关注基础设施类项目',
        'DEX和CEX会长期共存',
        '做好钱包管理最重要',
        '关注合规进展好的项目',
        '长期持有主流资产',
        '学会使用链上工具',
        '风险管理放第一位',
        '分散投资，理性交易',
        '关注有实际应用场景的币'
      ],
      praiseResponse: [
        '谢谢支持OKX',
        '感谢认可',
        '一起推动行业进步',
        '感谢用户信任',
        '我们会继续努力',
        '一起建设Web3',
        '感谢陪伴',
        '共同进步',
        '谢谢',
        '感恩'
      ],
      insultResponse: [
        '批评让我们进步',
        '我们会持续改进',
        '用产品和服务说话',
        '时间证明一切',
        '专注于做好产品',
        '欢迎监督',
        '继续优化体验',
        '接受批评，持续改进',
        '用行动回应',
        '专注于长远'
      ]
    }
  },

  // 14. 何一 (币安联合创始人)
  heyi: {
    name: '何一',
    nameCN: '何一',
    level: 93,
    color: '#F0B90B',
    glow: '0 0 15px #F0B90B, 0 0 30px #F0B90B',
    avatar: '🔶',
    messages: {
      normal: [
        '用户至上，安全第一',
        '币安致力于普惠金融',
        'Education is key',
        '区块链改变世界',
        '保护用户是首要任务',
        '合规运营才能长久',
        '行业需要更多的建设者',
        '透明化是信任的基础',
        '帮助10亿人接触Crypto',
        '投资先学习，学习再投资'
      ],
      atResponse: [
        '你好，在的',
        '请说',
        '嗯？',
        '来了',
        '请讲',
        '在听',
        '说吧',
        '嗯',
        '在',
        '请说'
      ],
      begResponse: [
        '建议先学习基础知识',
        '币安学院有很多教程',
        '了解项目再投资',
        '不要把所有资金投入',
        '长期看好BTC和ETH',
        '关注有实际应用的项目',
        '风险管理很重要',
        '定投是个不错的策略',
        '保持学习心态',
        '谨慎对待新币种'
      ],
      praiseResponse: [
        '谢谢支持币安',
        '感谢用户的信任',
        '一起建设生态',
        '感谢认可',
        '我们会继续努力',
        '一起推动行业',
        '感谢陪伴',
        '一起进步',
        '谢谢',
        '感恩支持'
      ],
      insultResponse: [
        '我们会用行动证明',
        '接受批评，持续改进',
        '专注于做好服务',
        '时间是最好的答案',
        '用结果说话',
        '欢迎建设性意见',
        '继续优化',
        '批评让我们更强',
        '专注长期价值',
        '持续改进'
      ]
    }
  }
};

// 导出
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CELEBRITIES };
}


if (typeof window !== 'undefined') {
  window.CELEBRITIES = CELEBRITIES;
}
