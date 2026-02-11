/**
 * 硬核模式 - 项目方打工路径决策事件库
 * Hardcore Mode - Project Job Path Decision Events
 * 
 * 包含150个决策事件，涵盖：
 * - project: 项目选择与评估
 * - salary: 薪资谈判与结构
 * - equity: 股权与Token分配
 * - team: 团队管理与内斗
 * - ethics: 道德与合规抉择
 */

const HARDCORE_JOB_DECISIONS = [
  // ============ 1-50 基础场景 ============
  
  // 1. 新项目加入决策
  {
    id: 'job_001',
    category: 'project',
    title: '高风险新项目邀约',
    desc: '一个新Web3项目向你抛出橄榄枝，开出高于市场50%的薪资，但项目未经审计，团队匿名。',
    choices: [
      { emoji: '💼', text: '立即加入，高薪难得', hint: '风险极高，可能是陷阱', isCorrect: false, effect: { wealthPct: 0.3 } },
      { emoji: '🔍', text: '要求尽调后再考虑', hint: '稳健做法，了解项目本质', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '❌', text: '直接拒绝匿名项目', hint: '过于保守，错过机会', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: 'Web3领域匿名团队风险极高，尽调是保护自身利益的必要步骤。'
  },
  
  // 2. Token分配选择
  {
    id: 'job_002',
    category: 'equity',
    title: '薪资结构抉择',
    desc: '项目方给你两个选择：A. 全额现金工资；B. 50%现金+50%项目Token；C. 30%现金+70%Token。',
    choices: [
      { emoji: '💵', text: '全额现金，安全第一', hint: '稳健但错过上涨空间', isCorrect: false, effect: { wealthPct: 1.0 } },
      { emoji: '📈', text: '50%现金+50%Token', hint: '平衡风险与收益', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '🚀', text: '30%现金+70%Token', hint: '高风险高回报', isCorrect: false, effect: { wealthPct: 0.5 } }
    ],
    explanation: '平衡配置既能保障基本生活，又能享受项目成长红利，是理性选择。'
  },
  
  // 3. 社区建设
  {
    id: 'job_003',
    category: 'project',
    title: '社区建设困境',
    desc: '你加入的项目社区活跃度很低，Discord只有几百人，日活不足5%。',
    choices: [
      { emoji: '📢', text: '向老板建议加强社区建设', hint: '长期主义，项目更健康', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '🤷', text: '做好本职工作，不管社区', hint: '短视行为', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '🏃', text: '准备跳槽，社区太弱', hint: '过于急躁', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '社区是Web3项目的核心资产，主动建议建设体现你的价值判断。'
  },
  
  // 4. 工资拖欠
  {
    id: 'job_004',
    category: 'salary',
    title: '工资拖欠危机',
    desc: '项目方已经连续两个月拖延工资发放，理由是"国库资金周转"。',
    choices: [
      { emoji: '⏰', text: '继续等待，相信项目', hint: '过于天真', isCorrect: false, effect: { wealthPct: 0.4 } },
      { emoji: '⚖️', text: '正式催款并准备跳槽', hint: '保护自身权益', isCorrect: true, effect: { wealthPct: 1.1 } },
      { emoji: '⚠️', text: '接受Token抵扣工资', hint: '可能拿到归零资产', isCorrect: false, effect: { wealthPct: 0.6 } }
    ],
    explanation: '工资拖欠是项目出问题的信号，及时止损是职场生存法则。'
  },
  
  // 5. 内幕信息
  {
    id: 'job_005',
    category: 'ethics',
    title: '内幕消息诱惑',
    desc: '老板私下告诉你，项目即将上线某大型交易所，让你提前买入Token。',
    choices: [
      { emoji: '💰', text: '大量买入，内幕难得', hint: '涉嫌内幕交易', isCorrect: false, effect: { wealthPct: 0.2 } },
      { emoji: '🎯', text: '小额试水，控制风险', hint: '灰色地带', isCorrect: false, effect: { wealthPct: 1.5 } },
      { emoji: '🛡️', text: '拒绝参与，只做好工作', hint: '合规且长远', isCorrect: true, effect: { wealthPct: 1.1 } }
    ],
    explanation: '内幕交易违法且风险极高，职业道德和合规意识是长期发展的基石。'
  },
  
  // 6. 营销预算
  {
    id: 'job_006',
    category: 'project',
    title: '营销预算不足',
    desc: '项目即将发币，但营销预算只占总预算的5%，远低于行业15%平均水平。',
    choices: [
      { emoji: '📊', text: '向老板建议增加营销预算', hint: '成功率高，项目更好', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '🎪', text: '用低成本方式病毒营销', hint: '风险较高', isCorrect: false, effect: { wealthPct: 1.0 } },
      { emoji: '🤐', text: '不干涉预算分配', hint: '错失建议机会', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '合理的营销投入能显著提升项目成功率，专业建议体现你的价值。'
  },
  
  // 7. 团队内斗
  {
    id: 'job_007',
    category: 'team',
    title: '团队内斗站队',
    desc: 'CTO和COO因为技术路线产生严重分歧，团队开始分裂成两派。',
    choices: [
      { emoji: '🎯', text: '站在CTO这边，技术为王', hint: '卷入内斗', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '👔', text: '站在COO这边，运营重要', hint: '卷入内斗', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '⚖️', text: '保持中立，专注工作', hint: '明哲保身', isCorrect: true, effect: { wealthPct: 1.2 } }
    ],
    explanation: '在团队内斗中选边站队风险极高，保持中立专注工作是明智之选。'
  },
  
  // 8. 白皮书抄袭
  {
    id: 'job_008',
    category: 'ethics',
    title: '白皮书抄袭发现',
    desc: '你发现项目的白皮书大量抄袭了其他知名项目的内容。',
    choices: [
      { emoji: '📢', text: '向老板指出并要求修改', hint: '诚信做事，长期好', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '🤐', text: '装作没看见，不关我事', hint: '默许不诚信', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '🏃', text: '立即离职，项目不靠谱', hint: '过于极端', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '指出问题并推动改进体现了职业操守，有利于项目长期发展。'
  },
  
  // 9. 大项目邀约
  {
    id: 'job_009',
    category: 'project',
    title: '头部项目挖角',
    desc: '行业头部项目开出3倍薪资挖你，但你当前项目正处于关键期。',
    choices: [
      { emoji: '🚀', text: '立即跳槽，头部更稳', hint: '未做尽调', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '🔍', text: '先做尽调，再决定', hint: '理性决策', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '💎', text: '留在原项目，等完成再议', hint: '可能错过机会', isCorrect: false, effect: { wealthPct: 1.1 } }
    ],
    explanation: '即使是头部项目也需要尽调，了解真实情况后再做决策最稳妥。'
  },
  
  // 10. Rug Pull迹象
  {
    id: 'job_010',
    category: 'project',
    title: 'Rug Pull预警信号',
    desc: '你发现项目方正在将国库资金转移到多个未知钱包，社区质疑不断。',
    choices: [
      { emoji: '🛡️', text: '立即离职并撤出资金', hint: '保本第一', isCorrect: true, effect: { wealthPct: 0.9 } },
      { emoji: '⏳', text: '再观察几天看看', hint: '错失逃生机会', isCorrect: false, effect: { wealthPct: 0.1 } },
      { emoji: '📢', text: '在社区公开质疑', hint: '可能遭报复', isCorrect: false, effect: { wealthPct: 0.3 } }
    ],
    explanation: '发现Rug迹象必须立即行动，保住本金比任何收益都重要。'
  },
  
  // 11. Token发工资
  {
    id: 'job_011',
    category: 'salary',
    title: 'Token发工资提议',
    desc: '老板提议接下来半年全部用项目Token发放工资，承诺"比现金更值钱"。',
    choices: [
      { emoji: '📝', text: '坚持要部分现金保底', hint: '稳健选择', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '💎', text: '接受全额Token', hint: '风险过高', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '❌', text: '拒绝并准备离职', hint: '可能过度反应', isCorrect: false, effect: { wealthPct: 0.8 } }
    ],
    explanation: 'Token价值波动大，保留部分现金保障基本生活是理性选择。'
  },
  
  // 12. 上币计划
  {
    id: 'job_012',
    category: 'project',
    title: '交易所上币确认',
    desc: '项目确定将上线某二线交易所，老板要求团队加倍努力配合营销。',
    choices: [
      { emoji: '🔥', text: '全力以赴，乘势而上', hint: '把握机会，收益+300%', isCorrect: true, effect: { wealthPct: 3.0 } },
      { emoji: '😐', text: '正常工作，不上头', hint: '错失爆发机会', isCorrect: false, effect: { wealthPct: 1.3 } },
      { emoji: '😴', text: '上币而已，不必激动', hint: '态度消极', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '上币是项目里程碑，全力配合能带来显著的个人和项目收益提升。'
  },
  
  // 13. 匿名老板
  {
    id: 'job_013',
    category: 'project',
    title: '匿名创始人风险',
    desc: '加入项目三个月，你从未见过老板真面目，所有沟通通过Telegram进行。',
    choices: [
      { emoji: '❌', text: '立即辞职，风险太高', hint: '合理避险', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '🤷', text: 'Web3很多匿名，正常', hint: '过于大意', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '📹', text: '要求至少视频通话一次', hint: '折中方案', isCorrect: false, effect: { wealthPct: 0.8 } }
    ],
    explanation: '完全匿名的创始人风险极高，及时退出是明智的自我保护。'
  },
  
  // 14. 竞争项目
  {
    id: 'job_014',
    category: 'project',
    title: '激烈竞争环境',
    desc: '你所在的赛道突然涌现5个竞争项目，都拿到了大额融资。',
    choices: [
      { emoji: '🎯', text: '专注差异化，做特色', hint: '胜率高，脱颖而出', isCorrect: true, effect: { wealthPct: 1.6 } },
      { emoji: '💸', text: '建议老板也加融资', hint: '可能稀释股权', isCorrect: false, effect: { wealthPct: 1.1 } },
      { emoji: '🏃', text: '跳槽去竞品，那边强', hint: '忠诚度问题', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '竞争激烈时，差异化是生存之道，专注做出特色才能胜出。'
  },
  
  // 15. 股权稀释
  {
    id: 'job_015',
    category: 'equity',
    title: '新一轮融资稀释',
    desc: '项目要进行B轮融资，你的Token份额将被稀释30%。',
    choices: [
      { emoji: '🤝', text: '谈判争取保留份额', hint: '长期利益有保障', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '😔', text: '接受稀释，没办法', hint: '被动受损', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '⚠️', text: '威胁离职阻止融资', hint: '两败俱伤', isCorrect: false, effect: { wealthPct: 0.5 } }
    ],
    explanation: '积极谈判争取权益是合理做法，能在融资中保护自己的利益。'
  },
  
  // 16. 社区水军
  {
    id: 'job_016',
    category: 'ethics',
    title: '水军营销提议',
    desc: '老板要求你雇佣水军刷社交媒体热度，制造虚假繁荣。',
    choices: [
      { emoji: '📢', text: '劝老板做真实社区', hint: '忠诚且正道', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '🤖', text: '按老板要求执行', hint: '不道德且风险高', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '❌', text: '拒绝并考虑离职', hint: '过于激烈', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '真实社区是项目长期价值基础，劝说老板走正道体现你的专业判断。'
  },
  
  // 17. 薪资谈判
  {
    id: 'job_017',
    category: 'salary',
    title: '年度薪资谈判',
    desc: '入职满一年，你需要和老板谈新的薪资方案。',
    choices: [
      { emoji: '💵', text: '只要求高底薪', hint: '过于保守', isCorrect: false, effect: { wealthPct: 1.1 } },
      { emoji: '📈', text: '要高底薪+更多股权', hint: '最优配置', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '💎', text: '要全额Token', hint: '风险过高', isCorrect: false, effect: { wealthPct: 0.8 } }
    ],
    explanation: '薪资+股权的组合能平衡当下收益和长期增值，是最优谈判策略。'
  },
  
  // 18. 黑天鹅事件
  {
    id: 'job_018',
    category: 'project',
    title: '项目黑天鹅危机',
    desc: '项目合作的桥接合约被黑，损失500万美元，社区恐慌。',
    choices: [
      { emoji: '📢', text: '主动危机公关，透明沟通', hint: '救项目，显价值', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '🤐', text: '等待老板指示', hint: '被动等待', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '🏃', text: '开始找下家准备跳', hint: '过早放弃', isCorrect: false, effect: { wealthPct: 0.7 } }
    ],
    explanation: '危机时刻主动担当，不仅能挽救项目，也能体现你的价值。'
  },
  
  // 19. 老板私售
  {
    id: 'job_019',
    category: 'ethics',
    title: '创始人套现疑云',
    desc: '你发现老板在私下大量出售项目Token，而对外仍在大肆宣传。',
    choices: [
      { emoji: '🤐', text: '保持沉默，保住位置', hint: '短期安全', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '📢', text: '向社区曝光此事', hint: '可能遭报复', isCorrect: false, effect: { wealthPct: 0.2 } },
      { emoji: '🏃', text: '立即离职远离', hint: '明智避险', isCorrect: true, effect: { wealthPct: 1.1 } }
    ],
    explanation: '创始人私下套现是危险信号，保持沉默或及时离开都是合理选择。'
  },
  
  // 20. 融资成功
  {
    id: 'job_020',
    category: 'project',
    title: '大额融资到位',
    desc: '项目成功完成1000万美元A轮融资，士气高涨。',
    choices: [
      { emoji: '🎉', text: '庆祝后继续加倍努力', hint: '加速发展', isCorrect: true, effect: { wealthPct: 1.7 } },
      { emoji: '💰', text: '立即要求涨薪', hint: '时机不当', isCorrect: false, effect: { wealthPct: 1.0 } },
      { emoji: '😴', text: '融资归融资，我干我的', hint: '错失机会', isCorrect: false, effect: { wealthPct: 1.1 } }
    ],
    explanation: '融资成功是项目加速器，加倍努力能让个人和项目共同成长。'
  },
  
  // 21. 工作模式
  {
    id: 'job_021',
    category: 'team',
    title: '远程vs线下抉择',
    desc: '项目决定调整工作模式，你在远程和线下办公间做选择。',
    choices: [
      { emoji: '🏠', text: '选择远程，自由高效', hint: '看项目阶段', isCorrect: false, effect: { wealthPct: 1.0 } },
      { emoji: '🏢', text: '选择线下，协作更强', hint: '看项目阶段', isCorrect: false, effect: { wealthPct: 1.0 } },
      { emoji: '🎯', text: '根据项目发展阶段选择', hint: '灵活应对', isCorrect: true, effect: { wealthPct: 1.3 } }
    ],
    explanation: '不同阶段适合不同模式，早期线下更重要，成熟期远程可行。'
  },
  
  // 22. 营销合作
  {
    id: 'job_022',
    category: 'project',
    title: 'KOL营销选择',
    desc: '老板要你联系KOL做营销推广，预算有限。',
    choices: [
      { emoji: '🎯', text: '找靠谱的垂直KOL', hint: '转化率高', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '📢', text: '找粉丝量大的泛娱乐KOL', hint: '效果差', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '🤖', text: '找刷量便宜的KOL', hint: '浪费预算', isCorrect: false, effect: { wealthPct: 0.6 } }
    ],
    explanation: '垂直领域KOL虽然粉丝少但转化率高，是预算有限时的最佳选择。'
  },
  
  // 23. 长期拖欠
  {
    id: 'job_023',
    category: 'salary',
    title: '持续欠薪危机',
    desc: '项目方已经连续三个月拖欠工资，承诺"下个月一定发"。',
    choices: [
      { emoji: '⏳', text: '再相信一次', hint: '过于天真', isCorrect: false, effect: { wealthPct: 0.3 } },
      { emoji: '🚀', text: '立即跳槽，机会多的是', hint: '及时止损', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '⚖️', text: '走法律途径讨薪', hint: '漫长过程', isCorrect: false, effect: { wealthPct: 0.7 } }
    ],
    explanation: '连续欠薪说明项目严重出问题，及时跳槽止损是最佳选择。'
  },
  
  // 24. 审计通过
  {
    id: 'job_024',
    category: 'project',
    title: '合约审计通过',
    desc: '项目合约经过知名安全公司审计，获得高分评级。',
    choices: [
      { emoji: '🚀', text: '全力推广，安全性加分', hint: '成功率高', isCorrect: true, effect: { wealthPct: 1.6 } },
      { emoji: '😐', text: '审计通过很正常，继续工作', hint: '错失宣传点', isCorrect: false, effect: { wealthPct: 1.1 } },
      { emoji: '😴', text: '审计不代表没风险', hint: '过于悲观', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '审计通过是重要里程碑，全力推广能显著提升市场信心。'
  },
  
  // 25. 空头承诺
  {
    id: 'job_025',
    category: 'salary',
    title: '口头承诺陷阱',
    desc: '老板口头承诺发奖金，但迟迟不落实，也没有书面记录。',
    choices: [
      { emoji: '📝', text: '要求书面确认奖金方案', hint: '保护权益', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '🤷', text: '相信老板不会食言', hint: '过于信任', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '⚠️', text: '威胁不给就离职', hint: '关系破裂', isCorrect: false, effect: { wealthPct: 0.7 } }
    ],
    explanation: '书面确认是保护自身权益的必要手段，避免口头承诺成为空头支票。'
  },
  
  // 26. Fork竞争
  {
    id: 'job_026',
    category: 'project',
    title: '项目Fork争议',
    desc: '行业内出现两个Fork你们代码的竞争项目，都拿到了融资。',
    choices: [
      { emoji: '🔍', text: '尽调两个项目，选择强的加入', hint: '理性选择', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '💎', text: '坚守原项目，正统必胜', hint: '可能错失机会', isCorrect: false, effect: { wealthPct: 1.0 } },
      { emoji: '📢', text: '建议起诉侵权', hint: '耗时耗力', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: 'Fork是开源常态，理性评估各项目实力，选择最优发展路径。'
  },
  
  // 27. 大牛加入
  {
    id: 'job_027',
    category: 'team',
    title: '行业大牛加盟',
    desc: '原大厂技术VP加入你们项目，成为新的技术负责人。',
    choices: [
      { emoji: '🤝', text: '热情欢迎，寻求合作', hint: '项目变强', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '😰', text: '担心被取代，防御姿态', hint: '内耗', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '😐', text: '观望态度，不主动', hint: '错失机会', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '大牛加入是项目利好，积极合作能提升整体实力和个人成长。'
  },
  
  // 28. 国库管理
  {
    id: 'job_028',
    category: 'ethics',
    title: '国库管理漏洞',
    desc: '项目国库由老板单人控制，存在挪用风险。',
    choices: [
      { emoji: '🔐', text: '建议实施多签钱包管理', hint: '防Rug，长期好', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '🤐', text: '不干涉老板决策', hint: '风险高', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '⚠️', text: '在社区公开质疑', hint: '可能激化矛盾', isCorrect: false, effect: { wealthPct: 0.6 } }
    ],
    explanation: '多签管理是行业最佳实践，建议实施能显著降低资金风险。'
  },
  
  // 29. 涨薪挽留
  {
    id: 'job_029',
    category: 'salary',
    title: '涨薪挽留谈判',
    desc: '你拿到外部offer提离职，老板开出更高薪资挽留。',
    choices: [
      { emoji: '💰', text: '接受涨薪留下', hint: '短期收益', isCorrect: false, effect: { wealthPct: 1.1 } },
      { emoji: '📈', text: '谈涨薪+更多股权后留下', hint: '全面考虑', isCorrect: true, effect: { wealthPct: 1.6 } },
      { emoji: '🚀', text: '坚持离开，新机会更好', hint: '取决于新机会', isCorrect: false, effect: { wealthPct: 1.2 } }
    ],
    explanation: '挽留时不仅谈薪资更要谈股权，全面争取自身利益是明智做法。'
  },
  
  // 30. 热度下降
  {
    id: 'job_030',
    category: 'project',
    title: '项目热度下滑',
    desc: '发币三个月后，项目热度明显下降，币价腰斩。',
    choices: [
      { emoji: '📊', text: '复盘问题，提出优化方案', hint: '救回可能', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '🏃', text: '开始找下家准备跳', hint: '过早放弃', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '😴', text: '热度波动正常，不管', hint: '不作为', isCorrect: false, effect: { wealthPct: 0.7 } }
    ],
    explanation: '热度下降时主动复盘优化，有机会扭转局面，体现你的担当。'
  },
  
  // 31. 老板露脸
  {
    id: 'job_031',
    category: 'project',
    title: '创始人公开亮相',
    desc: '一直匿名的老板决定在主流会议公开亮相，展示真实身份。',
    choices: [
      { emoji: '👍', text: '支持并协助准备亮相', hint: '信任加分', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '🤷', text: '无所谓，不影响我工作', hint: '错失机会', isCorrect: false, effect: { wealthPct: 1.0 } },
      { emoji: '⚠️', text: '担心暴露后监管风险', hint: '过度担忧', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '创始人公开亮相增强项目可信度，积极配合能提升团队信任度。'
  },
  
  // 32. 法律风险
  {
    id: 'job_032',
    category: 'ethics',
    title: '监管合规警报',
    desc: '某国监管机构开始调查你所在项目的业务模式，可能存在法律风险。',
    choices: [
      { emoji: '⚖️', text: '建议立即启动合规整改', hint: '长期存续', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '🤐', text: '观望，可能查不到我们', hint: '侥幸心理', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '🏃', text: '立即离职避风头', hint: '过度反应', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '合规是项目长期发展的基础，主动整改能避免更大风险。'
  },
  
  // 33. 分红计划
  {
    id: 'job_033',
    category: 'equity',
    title: '团队分红方案',
    desc: '项目盈利后，老板提出分红方案，但要求锁仓一年。',
    choices: [
      { emoji: '💰', text: '要求尽早分红，落袋为安', hint: '短期收益', isCorrect: false, effect: { wealthPct: 1.1 } },
      { emoji: '📈', text: '接受锁仓，看好长期', hint: '可能更高收益', isCorrect: false, effect: { wealthPct: 1.3 } },
      { emoji: '⚖️', text: '谈判部分提前+部分锁仓', hint: '平衡最优', isCorrect: true, effect: { wealthPct: 1.5 } }
    ],
    explanation: '部分提前分红+部分锁仓能平衡现金流和长期收益，是最优方案。'
  },
  
  // 34. 社区反馈
  {
    id: 'job_034',
    category: 'project',
    title: '社区负面反馈',
    desc: '社区对产品新功能反馈很差，骂声一片，老板却很满意。',
    choices: [
      { emoji: '📢', text: '收集反馈向老板如实汇报', hint: '听改，项目好', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '🤐', text: '老板满意就行，我不多嘴', hint: '不作为', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '👥', text: '私下安抚社区情绪', hint: '治标不治本', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '社区是项目根基，如实反馈用户声音帮助项目改进是正确选择。'
  },
  
  // 35. 竞品挖角
  {
    id: 'job_035',
    category: 'project',
    title: '竞争对手挖角',
    desc: '竞争对手开出3倍薪资+更高股权挖你，你该如何选择？',
    choices: [
      { emoji: '🔍', text: '尽调两家，理性选择', hint: '最优决策', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '💎', text: '忠于原项目，拒绝offer', hint: '可能错失机会', isCorrect: false, effect: { wealthPct: 1.0 } },
      { emoji: '🚀', text: '立即跳槽，薪资更高', hint: '未做尽调', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '理性评估两家项目发展前景，选择长期价值最大化的选项。'
  },
  
  // 36. Token解锁
  {
    id: 'job_036',
    category: 'equity',
    title: 'Token解锁临近',
    desc: '你持有的项目Token即将解锁，市场上已有大量抛压预期。',
    choices: [
      { emoji: '📉', text: '解锁后立即全部卖出', hint: '可能卖飞', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '📊', text: '分批卖出，锁定部分利润', hint: '稳健策略', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '💎', text: '继续持有，信仰项目', hint: '风险较高', isCorrect: false, effect: { wealthPct: 1.1 } }
    ],
    explanation: '解锁时分批卖出能锁定利润同时保留上涨空间，是理性策略。'
  },
  
  // 37. 决策纠错
  {
    id: 'job_037',
    category: 'team',
    title: '老板决策失误',
    desc: '老板做了一个明显错误的战略决策，你知道会导致项目受损。',
    choices: [
      { emoji: '💬', text: '私下委婉提出建议', hint: '保全老板面子', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '📢', text: '会议上当众指出错误', hint: '可能伤自尊', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '🤐', text: '不干涉老板决策', hint: '不作为', isCorrect: false, effect: { wealthPct: 0.8 } }
    ],
    explanation: '私下委婉建议既能纠正错误又保全老板面子，是最佳沟通方式。'
  },
  
  // 38. 合作机会
  {
    id: 'job_038',
    category: 'project',
    title: '头部交易所合作',
    desc: '某头部交易所提出深度合作意向，需要专人对接。',
    choices: [
      { emoji: '🔥', text: '主动请缨全力配合', hint: '曝光+机会', isCorrect: true, effect: { wealthPct: 1.7 } },
      { emoji: '😐', text: '等待老板分配任务', hint: '被动等待', isCorrect: false, effect: { wealthPct: 1.1 } },
      { emoji: '⚠️', text: '担心合作条件太苛刻', hint: '过度担忧', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '头部交易所合作是重大机会，主动参与能显著提升个人价值。'
  },
  
  // 39. 工资抵扣
  {
    id: 'job_039',
    category: 'salary',
    title: 'Token暴涨后的工资',
    desc: '你用Token抵扣的工资部分涨了5倍，老板暗示继续抵扣。',
    choices: [
      { emoji: '💰', text: '卖出部分锁定利润', hint: '落袋为安', isCorrect: true, effect: { wealthPct: 1.6 } },
      { emoji: '🚀', text: '全部持有，继续看涨', hint: '贪心风险', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '💵', text: '要求全部改发现金', hint: '过于保守', isCorrect: false, effect: { wealthPct: 1.2 } }
    ],
    explanation: '暴涨后卖出部分锁定利润是理性选择，避免贪婪导致回撤。'
  },
  
  // 40. 内鬼嫌疑
  {
    id: 'job_040',
    category: 'ethics',
    title: '内部信息泄露',
    desc: '项目机密信息多次泄露，老板怀疑团队有内鬼，气氛紧张。',
    choices: [
      { emoji: '🔍', text: '提高警惕，注意安全', hint: '自保明智', isCorrect: true, effect: { wealthPct: 1.1 } },
      { emoji: '🕵️', text: '主动调查找出内鬼', hint: '可能树敌', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '📢', text: '建议公开透明管理', hint: '治标不治本', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '信息泄露时提高警惕保护自己，避免被卷入是非是明智选择。'
  },
  
  // 41. 团队扩张
  {
    id: 'job_041',
    category: 'team',
    title: '快速扩张招聘',
    desc: '项目获得大额融资后，老板要求一个月内团队翻倍。',
    choices: [
      { emoji: '👥', text: '严格筛选，招靠谱的人', hint: '质量优先', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '🚀', text: '快速招满完成任务', hint: '可能招错人', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '⚠️', text: '建议慢点招，宁缺毋滥', hint: '可能错失时机', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '快速扩张时坚持质量标准，招到靠谱的人对长期发展至关重要。'
  },
  
  // 42. 预算增加
  {
    id: 'job_042',
    category: 'project',
    title: '营销预算翻倍',
    desc: '老板决定将营销预算翻倍，但缺乏明确的使用计划。',
    choices: [
      { emoji: '🎯', text: '制定精准投放策略', hint: 'ROI最大化', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '📢', text: '广泛撒网，铺天盖地', hint: '浪费预算', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '💰', text: '建议把预算直接发给社区', hint: '效果存疑', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '预算增加时制定精准策略能最大化ROI，避免盲目投放浪费。'
  },
  
  // 43. 奖金确认
  {
    id: 'job_043',
    category: 'salary',
    title: '项目里程碑奖金',
    desc: '项目达成重要里程碑，老板口头承诺发放奖金但无具体方案。',
    choices: [
      { emoji: '📝', text: '要求书面确认奖金方案', hint: '保护权益', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '🤷', text: '相信老板会兑现承诺', hint: '过于信任', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '⚠️', text: '现在就要拿到奖金', hint: '过于急躁', isCorrect: false, effect: { wealthPct: 0.8 } }
    ],
    explanation: '书面确认奖金方案避免日后纠纷，是专业的自我保护方式。'
  },
  
  // 44. 热度爆发
  {
    id: 'job_044',
    category: 'project',
    title: '项目突然爆红',
    desc: '项目突然获得KOL推荐，社区人数暴涨10倍，Token价格飙升。',
    choices: [
      { emoji: '🚀', text: '乘势加大推广力度', hint: '趁热打铁', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '😐', text: '正常节奏，不追热度', hint: '错失窗口', isCorrect: false, effect: { wealthPct: 1.2 } },
      { emoji: '⚠️', text: '担心是泡沫，准备撤退', hint: '过于悲观', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '热度爆发时乘势而上能最大化项目和个人收益，抓住机会窗口。'
  },
  
  // 45. 冲突调解
  {
    id: 'job_045',
    category: 'team',
    title: '团队成员冲突',
    desc: '两位核心成员因为工作分歧发生激烈争吵，团队氛围紧张。',
    choices: [
      { emoji: '⚖️', text: '居中调解，寻求共识', hint: '团队和谐', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '🎯', text: '支持有道理的一方', hint: '加剧分裂', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '🤐', text: '不掺和，让他们自己解决', hint: '不作为', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '积极调解冲突，促进团队和谐，体现你的领导力和价值。'
  },
  
  // 46. 融资失败
  {
    id: 'job_046',
    category: 'project',
    title: '融资计划失败',
    desc: '项目B轮融资失败，资金链紧张，可能发不出下月工资。',
    choices: [
      { emoji: '🔍', text: '评估项目潜力再决定', hint: '理性决策', isCorrect: true, effect: { wealthPct: 1.1 } },
      { emoji: '🏃', text: '立即开始找下家', hint: '可能错失反弹', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '💎', text: '相信项目一定能挺过去', hint: '过于乐观', isCorrect: false, effect: { wealthPct: 0.6 } }
    ],
    explanation: '融资失败不代表项目必死，评估基本面后理性决定去留。'
  },
  
  // 47. 工资结构优化
  {
    id: 'job_047',
    category: 'salary',
    title: '薪资结构调整',
    desc: '老板允许你自己设计新的薪资结构，如何配置最有利？',
    choices: [
      { emoji: '💵', text: '高底薪低股权', hint: '稳健但保守', isCorrect: false, effect: { wealthPct: 1.1 } },
      { emoji: '📈', text: '平衡底薪+股权+Token', hint: '最优配置', isCorrect: true, effect: { wealthPct: 1.6 } },
      { emoji: '💎', text: '低底薪高股权Token', hint: '风险过高', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '平衡配置能兼顾当前生活质量和长期增值，是最优薪资结构。'
  },
  
  // 48. 新链迁移
  {
    id: 'job_048',
    category: 'project',
    title: '新公链迁移提案',
    desc: '老板提议将项目从以太坊迁移到费用更低的新公链。',
    choices: [
      { emoji: '🚀', text: '支持迁移，降低用户成本', hint: '用户体验好', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '⚠️', text: '担心新链安全性不足', hint: '过度谨慎', isCorrect: false, effect: { wealthPct: 1.0 } },
      { emoji: '❌', text: '反对迁移，以太坊正统', hint: '思维固化', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '迁移到低费用链能显著提升用户体验，支持合理的技术决策。'
  },
  
  // 49. 独断专行
  {
    id: 'job_049',
    category: 'team',
    title: '老板独断专行',
    desc: '老板越来越独断，不听取团队意见，重大决策一人说了算。',
    choices: [
      { emoji: '💬', text: '找机会委婉提出建议', hint: '尝试改善', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '📢', text: '联合团队一起反馈', hint: '可能激化矛盾', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '🤐', text: '忍气吞声，照做就是', hint: '压抑自己', isCorrect: false, effect: { wealthPct: 0.8 } }
    ],
    explanation: '委婉建议是给老板和项目改进的机会，沟通方式决定效果。'
  },
  
  // 50. 成功前夕
  {
    id: 'job_050',
    category: 'equity',
    title: '项目成功前夕',
    desc: '项目即将上线顶级交易所，你的Token价值可能暴涨10倍。',
    choices: [
      { emoji: '📊', text: '准备部分退出锁定利润', hint: '落袋为安', isCorrect: true, effect: { wealthPct: 2.5 } },
      { emoji: '💎', text: '全部持有，信仰长期', hint: '贪心风险', isCorrect: false, effect: { wealthPct: 1.5 } },
      { emoji: '💰', text: '一上线就全部卖出', hint: '可能卖飞', isCorrect: false, effect: { wealthPct: 1.8 } }
    ],
    explanation: '成功前夕部分退出锁定利润是理性选择，既享受成果又控制风险。'
  }
];

// 导出决策事件库
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { HARDCORE_JOB_DECISIONS };
}


// ============ 51-100 进阶场景变体 ============
HARDCORE_JOB_DECISIONS.push(
  // 51. 多项目选择
  {
    id: 'job_051',
    category: 'project',
    title: '多项目Offer选择',
    desc: '你同时收到3个不同赛道项目的offer：DeFi龙头、GameFi新星、SocialFi早期。',
    choices: [
      { emoji: '🏦', text: '选择DeFi龙头，稳健', hint: '成熟但空间有限', isCorrect: false, effect: { wealthPct: 1.3 } },
      { emoji: '🎮', text: '选择GameFi新星，热点', hint: '有风险', isCorrect: false, effect: { wealthPct: 1.2 } },
      { emoji: '🔍', text: '尽调三家，选团队最强的', hint: '最优决策', isCorrect: true, effect: { wealthPct: 1.8 } }
    ],
    explanation: '项目选择关键看团队执行力，尽调后选择最靠谱的团队。'
  },
  
  // 52. 股权兑现条款
  {
    id: 'job_052',
    category: 'equity',
    title: '股权兑现条件谈判',
    desc: '项目给的股权需要4年兑现，且离职后公司有权回购。',
    choices: [
      { emoji: '⚖️', text: '谈判缩短至3年+部分加速', hint: '争取权益', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '🤷', text: '接受标准条款', hint: '过于被动', isCorrect: false, effect: { wealthPct: 1.0 } },
      { emoji: '❌', text: '要求1年全额兑现', hint: '不现实', isCorrect: false, effect: { wealthPct: 0.8 } }
    ],
    explanation: '积极谈判兑现条款，争取更友好的条件保护自身利益。'
  },
  
  // 53. 内幕交易边界
  {
    id: 'job_053',
    category: 'ethics',
    title: '灰色信息利用',
    desc: '你偶然听到合作方将投资你们项目的消息，此时买入是否算内幕？',
    choices: [
      { emoji: '❌', text: '完全不能买，违法', hint: '过于保守', isCorrect: false, effect: { wealthPct: 1.0 } },
      { emoji: '🎯', text: '小额买入测试边界', hint: '灰色地带', isCorrect: false, effect: { wealthPct: 1.3 } },
      { emoji: '🛡️', text: '咨询法务后再决定', hint: '合规优先', isCorrect: true, effect: { wealthPct: 1.2 } }
    ],
    explanation: '不确定时咨询专业法务，合规意识是长期发展的保障。'
  },
  
  // 54. 跨部门协调
  {
    id: 'job_054',
    category: 'team',
    title: '跨部门资源争夺',
    desc: '技术部和市场部同时需要你支持，资源有限必须选择。',
    choices: [
      { emoji: '👨‍💻', text: '优先支持技术，产品为本', hint: '偏袒一方', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '📢', text: '优先支持市场，增长为王', hint: '偏袒一方', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '⚖️', text: '按项目优先级分配', hint: '公平合理', isCorrect: true, effect: { wealthPct: 1.3 } }
    ],
    explanation: '按项目整体优先级分配资源，公平决策能获得各方尊重。'
  },
  
  // 55. 跳槽时机判断
  {
    id: 'job_055',
    category: 'project',
    title: '最佳跳槽时机',
    desc: '你在当前项目干了2年，感觉遇到瓶颈，是否该跳槽？',
    choices: [
      { emoji: '🚀', text: '立即跳槽，寻求突破', hint: '可能仓促', isCorrect: false, effect: { wealthPct: 1.0 } },
      { emoji: '💎', text: '等待项目下轮融资后', hint: '股权增值', isCorrect: true, effect: { wealthPct: 1.6 } },
      { emoji: '😴', text: '继续待着，稳定就好', hint: '错失机会', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '在项目关键节点后跳槽能最大化已有股权价值，时机选择很重要。'
  },
  
  // 56. 竞业限制
  {
    id: 'job_056',
    category: 'ethics',
    title: '竞业协议约束',
    desc: '离职时公司要求签署严格的竞业协议，限制你2年内不能加入竞品。',
    choices: [
      { emoji: '⚖️', text: '谈判缩短期限+补偿', hint: '争取权益', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '🤷', text: '直接签署，反正未必执行', hint: '法律风险', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '❌', text: '拒绝签署，大不了不走了', hint: '过于极端', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '积极谈判竞业条款，争取合理期限和补偿是专业做法。'
  },
  
  // 57. Token质押
  {
    id: 'job_057',
    category: 'equity',
    title: '员工Token质押计划',
    desc: '公司推出员工Token质押计划，承诺20%年化收益，但有锁定期。',
    choices: [
      { emoji: '📊', text: '质押部分，保留流动性', hint: '平衡策略', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '💎', text: '全部质押，高收益', hint: '流动性风险', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '❌', text: '完全不参与', hint: '错失收益', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '部分质押能在享受收益的同时保留一定流动性，是平衡选择。'
  },
  
  // 58. 公关危机
  {
    id: 'job_058',
    category: 'project',
    title: '负面新闻危机',
    desc: '媒体曝光项目早期存在合约漏洞，虽己修复但舆论危机爆发。',
    choices: [
      { emoji: '📢', text: '主动透明回应，公布修复', hint: '危机公关', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '🤐', text: '冷处理，等热度过去', hint: '被动应对', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '⚠️', text: '否认并威胁起诉媒体', hint: '激化矛盾', isCorrect: false, effect: { wealthPct: 0.6 } }
    ],
    explanation: '透明主动的危机公关能挽回信任，逃避或对抗只会恶化局面。'
  },
  
  // 59. 招聘决策权
  {
    id: 'job_059',
    category: 'team',
    title: '团队成员招聘决策',
    desc: '老板让你负责招聘一名关键岗位，你有完全的决策权。',
    choices: [
      { emoji: '🎯', text: '严格筛选，宁缺毋滥', hint: '质量优先', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '🤝', text: '优先招自己认识的人', hint: '任人唯亲', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '🚀', text: '快速招满，完成KPI', hint: '质量风险', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '招聘时坚持质量标准，招到对的人对团队长期发展至关重要。'
  },
  
  // 60. 预算削减
  {
    id: 'job_060',
    category: 'project',
    title: '预算削减应对',
    desc: '市场下行，项目决定削减30%预算，你需要调整策略。',
    choices: [
      { emoji: '🎯', text: '聚焦核心业务，砍掉边缘', hint: '精准调整', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '⚖️', text: '各部门平均削减', hint: '可能伤筋动骨', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '📢', text: '建议暂缓削减，等待市场回暖', hint: '不现实', isCorrect: false, effect: { wealthPct: 0.7 } }
    ],
    explanation: '预算削减时聚焦核心，保留最有价值的业务，是理性应对方式。'
  },
  
  // 61. 加班文化
  {
    id: 'job_061',
    category: 'team',
    title: '996加班文化',
    desc: '团队逐渐形成996加班文化，不加班的人被视为不努力。',
    choices: [
      { emoji: '⏰', text: '顺应文化，主动加班', hint: '牺牲健康', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '⚖️', text: '高效工作，拒绝无效加班', hint: '效率优先', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '🏃', text: '准备跳槽，远离996', hint: '逃避问题', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '用效率而非时长证明价值，拒绝无效加班是健康的职业态度。'
  },
  
  // 62. Token回购
  {
    id: 'job_062',
    category: 'equity',
    title: '公司Token回购',
    desc: '公司决定用国库资金回购Token，询问员工是否愿意出售。',
    choices: [
      { emoji: '💰', text: '出售部分，落袋为安', hint: '锁定利润', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '💎', text: '全部持有，看好项目', hint: '放弃回购收益', isCorrect: false, effect: { wealthPct: 1.1 } },
      { emoji: '🚀', text: '不仅不卖，还要加仓', hint: '与公司对赌', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '回购时出售部分Token能锁定利润，同时保留上涨空间。'
  },
  
  // 63. 新产品线
  {
    id: 'job_063',
    category: 'project',
    title: '新产品线开拓',
    desc: '老板想开拓与主业务无关的新产品线，分散资源。',
    choices: [
      { emoji: '⚠️', text: '建议专注主业务', hint: '资源聚焦', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '🚀', text: '支持老板，拥抱变化', hint: '资源分散', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '🤷', text: '不发表意见，执行就是', hint: '不作为', isCorrect: false, effect: { wealthPct: 0.8 } }
    ],
    explanation: '早期项目应专注核心业务，资源分散可能导致全线溃败。'
  },
  
  // 64. 绩效考核
  {
    id: 'job_064',
    category: 'salary',
    title: '绩效考核标准',
    desc: '公司推出新的绩效考核，标准模糊且主观性强。',
    choices: [
      { emoji: '📝', text: '要求明确可量化的指标', hint: '保护自己', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '🤷', text: '相信领导会公平评价', hint: '过于被动', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '⚠️', text: '强烈反对，抵制新制度', hint: '关系恶化', isCorrect: false, effect: { wealthPct: 0.7 } }
    ],
    explanation: '要求明确的考核标准能保护自身权益，避免主观评价的不确定性。'
  },
  
  // 65. 竞品分析
  {
    id: 'job_065',
    category: 'project',
    title: '竞品抄袭你们',
    desc: '发现竞品完整抄袭了你们的商业模式和产品设计。',
    choices: [
      { emoji: '🚀', text: '加速迭代，拉开差距', hint: '用实力说话', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '⚖️', text: '发律师函警告对方', hint: '耗时耗力', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '📢', text: '在社交媒体公开谴责', hint: '可能升级矛盾', isCorrect: false, effect: { wealthPct: 0.8 } }
    ],
    explanation: '用持续创新和执行力甩开抄袭者，是最好的竞争策略。'
  },
  
  // 66. 团队裁员
  {
    id: 'job_066',
    category: 'team',
    title: '裁员名单制定',
    desc: '市场寒冬，公司需要裁员20%，老板让你提供建议名单。',
    choices: [
      { emoji: '🎯', text: '按绩效和能力评估', hint: '公平合理', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '👥', text: '保留和自己关系好的', hint: '任人唯亲', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '🤷', text: '让老板自己决定', hint: '推卸责任', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '裁员时坚持公平原则，保留核心人才对公司长期发展有利。'
  },
  
  // 67. 合约升级
  {
    id: 'job_067',
    category: 'project',
    title: '重大合约升级',
    desc: '项目需要进行重大合约升级，存在技术风险但功能急需。',
    choices: [
      { emoji: '🔐', text: '先审计再升级，安全第一', hint: '稳健做法', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '🚀', text: '快速升级，抢占市场', hint: '安全风险', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '⏳', text: '暂缓升级，等待更成熟方案', hint: '错失时机', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '合约安全是项目生命线，升级前审计是必要的安全投资。'
  },
  
  // 68. 投资抉择
  {
    id: 'job_068',
    category: 'equity',
    title: '跟投决策',
    desc: '项目开放员工跟投额度，你用部分积蓄参与。',
    choices: [
      { emoji: '📊', text: '投入可承受损失的小部分', hint: '风险控制', isCorrect: true, effect: { wealthPct: 1.6 } },
      { emoji: '🚀', text: 'All in，看好项目', hint: '风险过高', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '❌', text: '完全不参与', hint: '错失机会', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '只投入可承受损失的资金，是理性的投资原则。'
  },
  
  // 69. 品牌危机
  {
    id: 'job_069',
    category: 'project',
    title: '创始人丑闻',
    desc: '老板的个人丑闻被曝光，对项目品牌造成负面影响。',
    choices: [
      { emoji: '📢', text: '切割关联，专注项目本身', hint: '专业应对', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '🛡️', text: '公开力挺老板', hint: '可能引火烧身', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '🏃', text: '立即离职撇清关系', hint: '过于仓促', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '将焦点转移到项目本身，专业应对能把负面影响降到最低。'
  },
  
  // 70. 技术选型
  {
    id: 'job_070',
    category: 'project',
    title: '技术栈选择分歧',
    desc: '团队对使用新技术栈还是保守方案产生分歧。',
    choices: [
      { emoji: '🔍', text: '做POC验证后再决定', hint: '数据说话', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '🚀', text: '拥抱新技术，领先行业', hint: '技术风险', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '🛡️', text: '保守方案，稳定优先', hint: '可能落后', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '用原型验证技术可行性，数据驱动的决策最可靠。'
  },
  
  // 71. 股权回购
  {
    id: 'job_071',
    category: 'equity',
    title: '离职股权处理',
    desc: '你决定离职，未兑现的股权公司提出低价回购。',
    choices: [
      { emoji: '⚖️', text: '谈判争取市场价回购', hint: '保护权益', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '🤷', text: '接受低价，好聚好散', hint: '损失利益', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '⚠️', text: '拒绝回购，保留股权', hint: '流动性风险', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '争取合理的股权回购价格，是保护自己劳动成果的合理要求。'
  },
  
  // 72. 合作谈判
  {
    id: 'job_072',
    category: 'project',
    title: '战略合作谈判',
    desc: '你负责与一个重要合作伙伴的谈判，对方条件苛刻。',
    choices: [
      { emoji: '⚖️', text: '寻求双赢，适当让步', hint: '长期合作', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '💪', text: '坚持底线，不让步', hint: '可能谈崩', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '🤝', text: '接受对方主要条件', hint: '过度让步', isCorrect: false, effect: { wealthPct: 0.8 } }
    ],
    explanation: '战略合作寻求双赢，适当灵活能让合作更长久。'
  },
  
  // 73. 产品线聚焦
  {
    id: 'job_073',
    category: 'project',
    title: '产品战略聚焦',
    desc: '项目同时推进多条产品线，资源分散效果不佳。',
    choices: [
      { emoji: '🎯', text: '建议砍掉边缘，聚焦核心', hint: '资源集中', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '🚀', text: '继续多线并行，全面布局', hint: '资源分散', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '⏳', text: '观望市场反馈再决定', hint: '错失时机', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '资源有限时聚焦核心产品，集中力量打透一点是最佳策略。'
  },
  
  // 74. 年终奖金
  {
    id: 'job_074',
    category: 'salary',
    title: '年终奖分配',
    desc: '公司业绩超预期，年终奖池比预期多出一倍。',
    choices: [
      { emoji: '💰', text: '争取更多个人奖金', hint: '短期思维', isCorrect: false, effect: { wealthPct: 1.2 } },
      { emoji: '👥', text: '建议平分给团队所有成员', hint: '团队和谐', isCorrect: false, effect: { wealthPct: 1.1 } },
      { emoji: '📊', text: '按贡献度差异化分配', hint: '激励优秀', isCorrect: true, effect: { wealthPct: 1.5 } }
    ],
    explanation: '按贡献差异化分配奖金，能激励优秀者，长期有利于团队发展。'
  },
  
  // 75. 黑客事件
  {
    id: 'job_075',
    category: 'ethics',
    title: '合约被黑善后',
    desc: '项目合约被黑客攻击损失资金，需要决定如何应对受害者。',
    choices: [
      { emoji: '🛡️', text: '全额赔付，承担责任', hint: '赢得信任', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '⚖️', text: '部分赔付，按比例补偿', hint: '折中方案', isCorrect: false, effect: { wealthPct: 1.0 } },
      { emoji: '🤐', text: '推脱责任，合约风险自负', hint: '信誉受损', isCorrect: false, effect: { wealthPct: 0.5 } }
    ],
    explanation: '主动承担责任并全额赔付能挽回社区信任，是长期发展的基础。'
  },
  
  // 76. 团队激励
  {
    id: 'job_076',
    category: 'team',
    title: '团队士气低落',
    desc: '币价长期低迷，团队士气低落，有人开始离职。',
    choices: [
      { emoji: '💬', text: '组织团建，重申愿景', hint: '凝聚团队', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '💰', text: '申请加工资挽留', hint: '成本过高', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '🤷', text: '顺其自然，优胜劣汰', hint: '不作为', isCorrect: false, effect: { wealthPct: 0.8 } }
    ],
    explanation: '低迷时用愿景和团队活动凝聚人心，比单纯加薪更有效。'
  },
  
  // 77. 代币经济学
  {
    id: 'job_077',
    category: 'project',
    title: '代币模型调整',
    desc: '当前代币经济模型存在问题，需要重大调整但会损害早期持有者。',
    choices: [
      { emoji: '⚖️', text: '设计过渡方案，减少冲击', hint: '平衡各方', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '🔧', text: '立即硬改，长痛不如短痛', hint: '社区反弹', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '⏳', text: '维持现状，等待更好时机', hint: '问题恶化', isCorrect: false, effect: { wealthPct: 0.8 } }
    ],
    explanation: '代币模型调整需要平衡各方利益，设计过渡方案能减少社区反弹。'
  },
  
  // 78. 数据隐私
  {
    id: 'job_078',
    category: 'ethics',
    title: '用户数据使用',
    desc: '市场部门想要使用用户链上数据进行精准营销。',
    choices: [
      { emoji: '🔐', text: '建议匿名化处理后使用', hint: '保护隐私', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '📊', text: '直接使用，数据就是资产', hint: '隐私风险', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '❌', text: '完全禁止数据使用', hint: '过于保守', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '用户数据使用需尊重隐私，匿名化处理是合规且有效的方案。'
  },
  
  // 79. 产品定价
  {
    id: 'job_079',
    category: 'project',
    title: '服务收费策略',
    desc: '项目需要决定服务收费模式，团队在免费和付费间争论。',
    choices: [
      { emoji: '🎯', text: '基础免费+高级付费', hint: 'Freemium模式', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '🆓', text: '完全免费，抢占市场', hint: '无盈利模式', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '💰', text: '全部收费，保证收入', hint: '用户流失', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: 'Freemium模式既能吸引用户又能创造收入，是平衡的最优解。'
  },
  
  // 80. 知识产权
  {
    id: 'job_080',
    category: 'ethics',
    title: '代码开源决策',
    desc: '团队对项目核心代码是否开源产生分歧。',
    choices: [
      { emoji: '🔓', text: '渐进式开源，保留核心', hint: '平衡策略', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '📂', text: '完全开源，拥抱社区', hint: '竞争优势丧失', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '🔒', text: '完全闭源，保护知识产权', hint: '社区质疑', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '渐进式开源能在社区信任和竞争优势间取得平衡。'
  },
  
  // 81. 跳槽谈判
  {
    id: 'job_081',
    category: 'salary',
    title: 'Offer谈判技巧',
    desc: '拿到心仪offer，但薪资低于预期，如何谈判？',
    choices: [
      { emoji: '📊', text: '用市场数据和自身价值谈', hint: '理性说服', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '💰', text: '直接要更高数字', hint: '缺乏依据', isCorrect: false, effect: { wealthPct: 1.0 } },
      { emoji: '⚠️', text: '威胁不接受就不入职', hint: '可能谈崩', isCorrect: false, effect: { wealthPct: 0.8 } }
    ],
    explanation: '用市场数据和自身价值支撑谈判，是最有说服力的方式。'
  },
  
  // 82. 团队冲突
  {
    id: 'job_082',
    category: 'team',
    title: '跨时区协作',
    desc: '团队成员分布在全球5个时区，协作效率低下。',
    choices: [
      { emoji: '📋', text: '建立异步工作机制', hint: '适应分布式', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '⏰', text: '要求所有人按某一时区工作', hint: '不现实', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '🏢', text: '建议集中办公', hint: '违背Web3精神', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '建立异步工作机制适应分布式团队，是Web3项目的最佳实践。'
  },
  
  // 83. 市场时机
  {
    id: 'job_083',
    category: 'project',
    title: '发币时机选择',
    desc: '项目准备发币，但市场处于熊市，团队意见不一。',
    choices: [
      { emoji: '⏳', text: '推迟发币，等待牛市', hint: '错失融资', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '🚀', text: '按计划发币，专注产品', hint: '逆势而为', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '📉', text: '大幅降低估值发币', hint: '贱卖项目', isCorrect: false, effect: { wealthPct: 0.7 } }
    ],
    explanation: '发币时机不应完全依赖市场，按计划专注产品才能穿越周期。'
  },
  
  // 84. 投资组合
  {
    id: 'job_084',
    category: 'equity',
    title: '员工资产配置',
    desc: '你的薪资和股权都集中在单一项目，风险过高。',
    choices: [
      { emoji: '📊', text: '适当分散，配置其他资产', hint: '风险分散', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '💎', text: 'All in项目，看好未来', hint: '集中风险', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '❌', text: '全部变现，不留股权', hint: '错失上涨', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '适当分散投资能降低单一项目风险，是理性的资产配置策略。'
  },
  
  // 85. 离职交接
  {
    id: 'job_085',
    category: 'team',
    title: '离职知识交接',
    desc: '你准备离职，老板要求你制作详细的交接文档。',
    choices: [
      { emoji: '📝', text: '认真制作，完整交接', hint: '专业素养', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '🤷', text: '随便写写，反正要走了', hint: '不专业', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '💰', text: '要求额外报酬才做', hint: '关系恶化', isCorrect: false, effect: { wealthPct: 0.8 } }
    ],
    explanation: '认真交接体现职业素养，良好的离职口碑对未来发展重要。'
  },
  
  // 86. 融资路演
  {
    id: 'job_086',
    category: 'project',
    title: '投资人路演',
    desc: '你需要在重要投资人面前做项目路演。',
    choices: [
      { emoji: '🎯', text: '充分准备，诚实展示', hint: '赢得信任', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '🎪', text: '过度包装，画大饼', hint: '可能穿帮', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '😰', text: '推给老板自己不上', hint: '错失机会', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '诚实专业的路演能赢得投资人长期信任，过度包装终会穿帮。'
  },
  
  // 87. 代币解锁
  {
    id: 'job_087',
    category: 'equity',
    title: '团队Token解锁',
    desc: '团队Token即将解锁，市场预期会有大量抛压。',
    choices: [
      { emoji: '🤝', text: '与团队商议统一行动', hint: '协调立场', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '💰', text: '抢先卖出，落袋为安', hint: '团队信任受损', isCorrect: false, effect: { wealthPct: 1.0 } },
      { emoji: '💎', text: '承诺全部长期持有', hint: '资金压力', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '与团队协调解锁后的行动，能避免不必要的市场恐慌。'
  },
  
  // 88. 用户增长
  {
    id: 'job_088',
    category: 'project',
    title: '增长黑客策略',
    desc: '用户增长陷入瓶颈，需要突破性的增长策略。',
    choices: [
      { emoji: '🎯', text: '分析数据，优化转化漏斗', hint: '可持续增长', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '💰', text: '砸钱买量，快速起量', hint: '质量堪忧', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '🤖', text: '刷量造假，应付KPI', hint: '诚信问题', isCorrect: false, effect: { wealthPct: 0.4 } }
    ],
    explanation: '数据驱动的增长优化是可持续的，刷量造假最终会被反噬。'
  },
  
  // 89. 合规检查
  {
    id: 'job_089',
    category: 'ethics',
    title: '监管合规审查',
    desc: '监管机构要求提供项目运营数据，团队在如何应对上有分歧。',
    choices: [
      { emoji: '📋', text: '全面配合，主动合规', hint: '赢得信任', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '🔒', text: '只提供最低限度信息', hint: '可能引起怀疑', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '🏃', text: '建议迁移到监管宽松地区', hint: '逃避问题', isCorrect: false, effect: { wealthPct: 0.7 } }
    ],
    explanation: '主动配合监管并整改，是项目长期合规发展的正确路径。'
  },
  
  // 90. 产品决策
  {
    id: 'job_090',
    category: 'project',
    title: '功能优先级争议',
    desc: '资源有限，团队对下一个版本的功能优先级争论不休。',
    choices: [
      { emoji: '📊', text: '基于用户数据决策', hint: '用户导向', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '👨‍💻', text: '优先技术债清理', hint: '忽视用户需求', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '👔', text: '优先老板要求的功能', hint: '可能脱离用户', isCorrect: false, effect: { wealthPct: 0.8 } }
    ],
    explanation: '用用户数据指导产品决策，能最大化产品价值和市场接受度。'
  },
  
  // 91. 薪资透明
  {
    id: 'job_091',
    category: 'salary',
    title: '薪资透明化提案',
    desc: '团队提议实行薪资透明，所有员工知道彼此工资。',
    choices: [
      { emoji: '⚖️', text: '支持透明，促进公平', hint: '团队信任', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '🤐', text: '反对透明，保护隐私', hint: '保守选择', isCorrect: false, effect: { wealthPct: 1.0 } },
      { emoji: '💰', text: '要求透明前先涨我工资', hint: '个人优先', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '薪资透明能促进内部公平，增强团队信任，是进步的做法。'
  },
  
  // 92. 技术债务
  {
    id: 'job_092',
    category: 'project',
    title: '技术债务处理',
    desc: '项目积累了大量技术债务，影响开发效率。',
    choices: [
      { emoji: '🔧', text: '规划专门时间逐步偿还', hint: '可持续', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '🚀', text: '继续堆功能，以后再还', hint: '债务恶化', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '⏸️', text: '暂停新功能，全力还债', hint: '业务停滞', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '规划专门时间逐步偿还技术债务，能平衡业务进展和代码健康。'
  },
  
  // 93. 股权纠纷
  {
    id: 'job_093',
    category: 'equity',
    title: '股权归属争议',
    desc: '你和公司对股权归属计算方式产生分歧。',
    choices: [
      { emoji: '⚖️', text: '协商解决，寻求双赢', hint: '关系和谐', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '⚠️', text: '威胁法律诉讼', hint: '关系破裂', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '🤷', text: '让步接受公司方案', hint: '损失权益', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '股权争议时协商解决是首选，诉讼应作为最后手段。'
  },
  
  // 94. 用户反馈
  {
    id: 'job_094',
    category: 'project',
    title: '用户投诉处理',
    desc: '大量用户投诉新功能体验差，团队内部却在互相推诿。',
    choices: [
      { emoji: '🎯', text: '牵头组织跨部门解决', hint: '担当精神', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '👨‍💻', text: '说是产品设计的锅', hint: '推诿责任', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '🤐', text: '不掺和，让他们自己吵', hint: '不作为', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '主动牵头解决问题体现担当，是职业素养的体现。'
  },
  
  // 95. 离职创业
  {
    id: 'job_095',
    category: 'project',
    title: '创业机会诱惑',
    desc: '你有机会离职创业做类似项目，投资人已表示兴趣。',
    choices: [
      { emoji: '🔍', text: '评估风险后理性决定', hint: '谨慎创业', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '🚀', text: '立即辞职All in创业', hint: '风险过高', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '💎', text: '拒绝，当前项目更有前景', hint: '可能错失', isCorrect: false, effect: { wealthPct: 1.1 } }
    ],
    explanation: '创业需理性评估，冲动离职创业风险极高，应谨慎决策。'
  },
  
  // 96. 团队建设
  {
    id: 'job_096',
    category: 'team',
    title: '团建活动组织',
    desc: '你需要组织一次团队建设活动，预算有限。',
    choices: [
      { emoji: '🎯', text: '根据团队喜好定制活动', hint: '投其所好', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '🍺', text: '简单的吃饭喝酒', hint: '缺乏新意', isCorrect: false, effect: { wealthPct: 1.0 } },
      { emoji: '⏰', text: '周末拓展训练', hint: '占用休息', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '根据团队喜好定制团建活动，能最大化团队凝聚力提升效果。'
  },
  
  // 97. 薪酬倒挂
  {
    id: 'job_097',
    category: 'salary',
    title: '新老员工薪酬倒挂',
    desc: '发现新招员工薪资比自己高，感到不公平。',
    choices: [
      { emoji: '💬', text: '与老板沟通调整薪资', hint: '主动争取', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '😤', text: '消极怠工表达不满', hint: '损人不利己', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '🤐', text: '忍气吞声，继续工作', hint: '压抑自己', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '发现薪酬倒挂应主动沟通争取，消极对抗或隐忍都不利于自身发展。'
  },
  
  // 98. 产品抄袭
  {
    id: 'job_098',
    category: 'ethics',
    title: '竞品功能借鉴',
    desc: '老板要求直接抄袭竞品的某个成功功能。',
    choices: [
      { emoji: '🔧', text: '借鉴思路，差异化实现', hint: '创新改进', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '📋', text: '完全照搬，快速上线', hint: '抄袭质疑', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '⚠️', text: '拒绝，坚持原创', hint: '可能错失', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '借鉴竞品思路但差异化实现，既学习优点又避免抄袭质疑。'
  },
  
  // 99. 股权套现
  {
    id: 'job_099',
    category: 'equity',
    title: '二级市场套现',
    desc: '公司Token在二级市场流动性充足，你考虑部分套现。',
    choices: [
      { emoji: '📊', text: '分批套现改善生活', hint: '平衡选择', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '💎', text: '全部持有，等待更高点', hint: '贪心风险', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '💰', text: '全部套现，不再持有', hint: '错失上涨', isCorrect: false, effect: { wealthPct: 1.1 } }
    ],
    explanation: '分批套现既能改善生活又能保留上涨空间，是理性的退出策略。'
  },
  
  // 100. 职业转型
  {
    id: 'job_100',
    category: 'project',
    title: '职业路径转型',
    desc: '你在当前岗位遇到瓶颈，考虑转型到其他职能。',
    choices: [
      { emoji: '📚', text: '学习新技能，内部转岗', hint: '平滑过渡', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '🚀', text: '辞职，找新方向的工作', hint: '风险较高', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '😴', text: '维持现状，不折腾了', hint: '错失发展', isCorrect: false, effect: { wealthPct: 0.8 } }
    ],
    explanation: '内部转岗学习新技能是平滑转型的最佳路径，风险可控。'
  }
);


// ============ 101-150 深度场景变体 ============
HARDCORE_JOB_DECISIONS.push(
  // 101. 项目尽调深度
  {
    id: 'job_101',
    category: 'project',
    title: '深度尽调发现',
    desc: '尽调新项目时发现其核心技术来自未授权的开源代码。',
    choices: [
      { emoji: '📝', text: '详细记录风险，谨慎决策', hint: '专业尽调', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '🤷', text: '开源代码大家用，正常', hint: '忽视风险', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '📢', text: '公开曝光该项目问题', hint: '可能树敌', isCorrect: false, effect: { wealthPct: 0.8 } }
    ],
    explanation: '尽调时发现风险应详细记录并谨慎决策，而非忽视或曝光。'
  },
  
  // 102. Token归属条款
  {
    id: 'job_102',
    category: 'equity',
    title: 'Cliffs条款谈判',
    desc: '股权方案有一年cliffs（悬崖期），一年内离职无股权。',
    choices: [
      { emoji: '⚖️', text: '谈判缩短至6个月', hint: '争取权益', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '🤷', text: '接受标准条款', hint: '过于被动', isCorrect: false, effect: { wealthPct: 1.0 } },
      { emoji: '❌', text: '要求取消cliffs', hint: '不切实际', isCorrect: false, effect: { wealthPct: 0.8 } }
    ],
    explanation: '积极谈判cliffs条款，争取更合理的归属条件是正当权益。'
  },
  
  // 103. 内幕交易举报
  {
    id: 'job_103',
    category: 'ethics',
    title: '目击内幕交易',
    desc: '你发现同事利用未公开信息进行交易获利。',
    choices: [
      { emoji: '📢', text: '向合规部门举报', hint: '维护正义', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '🤐', text: '装作没看见', hint: '包庇违规', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '💬', text: '私下警告该同事', hint: '可能报复', isCorrect: false, effect: { wealthPct: 0.8 } }
    ],
    explanation: '举报内幕交易是维护行业健康发展的重要责任。'
  },
  
  // 104. 跨链桥风险
  {
    id: 'job_104',
    category: 'project',
    title: '跨链桥合作',
    desc: '项目需要使用跨链桥，但近期桥被黑事件频发。',
    choices: [
      { emoji: '🔐', text: '选择经过审计的头部桥', hint: '安全第一', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '💰', text: '选择费用最低的新桥', hint: '安全风险', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '⏳', text: '等待更安全的方案', hint: '错失机会', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '跨链桥选择安全第一，经过审计的头部桥能最大程度降低风险。'
  },
  
  // 105. 跳槽反邀约
  {
    id: 'job_105',
    category: 'salary',
    title: '原公司反邀约',
    desc: '接受新offer后，原公司开出更高条件挽留。',
    choices: [
      { emoji: '🤝', text: '婉拒并感谢，坚持诚信', hint: '职业操守', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '💰', text: '接受反邀约留下', hint: '反复无常', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '⚖️', text: '让新公司匹配更高薪资', hint: '讨价还价', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '接受offer后应坚持诚信，反复无常会损害职业声誉。'
  },
  
  // 106. 团队派系斗争
  {
    id: 'job_106',
    category: 'team',
    title: '创始人派系斗争',
    desc: '两位联合创始人公开决裂，团队被迫选边站。',
    choices: [
      { emoji: '🎯', text: '基于项目利益选择', hint: '理性决策', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '🤝', text: '保持中立不选边', hint: '可能两边得罪', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '🏃', text: '离职避开纷争', hint: '逃避问题', isCorrect: false, effect: { wealthPct: 0.8 } }
    ],
    explanation: '基于项目长期利益做选择，而非个人关系或恐惧。'
  },
  
  // 107. Token回购销毁
  {
    id: 'job_107',
    category: 'equity',
    title: '回购销毁计划',
    desc: '项目提议用利润回购销毁Token，而非分红。',
    choices: [
      { emoji: '📈', text: '支持销毁，长期增值', hint: '币价上涨', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '💰', text: '反对，要求直接分红', hint: '短期思维', isCorrect: false, effect: { wealthPct: 1.0 } },
      { emoji: '🤷', text: '无所谓，不影响我', hint: '不关注', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '回购销毁能提升Token价值，长期对持有者更有利。'
  },
  
  // 108. 智能合约漏洞
  {
    id: 'job_108',
    category: 'ethics',
    title: '发现合约漏洞',
    desc: '你在审计中发现一个可利用但尚未被发现的合约漏洞。',
    choices: [
      { emoji: '🛡️', text: '立即报告并协助修复', hint: '尽职尽责', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '🤐', text: '自己利用漏洞获利', hint: '违法犯罪', isCorrect: false, effect: { wealthPct: 0.1 } },
      { emoji: '👥', text: '告诉朋友一起利用', hint: '共谋犯罪', isCorrect: false, effect: { wealthPct: 0.1 } }
    ],
    explanation: '发现漏洞应立即报告修复，任何利用漏洞的行为都是违法犯罪。'
  },
  
  // 109. 市场操纵嫌疑
  {
    id: 'job_109',
    category: 'ethics',
    title: '市场操纵指令',
    desc: '老板要求你配合进行疑似市场操纵的操作。',
    choices: [
      { emoji: '❌', text: '坚决拒绝并考虑举报', hint: '合规底线', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '🤷', text: '执行指令，打工而已', hint: '违法风险', isCorrect: false, effect: { wealthPct: 0.3 } },
      { emoji: '⚠️', text: '委婉拒绝但保持沉默', hint: '灰色地带', isCorrect: false, effect: { wealthPct: 0.8 } }
    ],
    explanation: '市场操纵违法，坚决拒绝并举报是维护合规底线的正确选择。'
  },
  
  // 110. NFT项目合作
  {
    id: 'job_110',
    category: 'project',
    title: 'NFT合作项目',
    desc: '一个知名NFT项目提议合作，但对方口碑有争议。',
    choices: [
      { emoji: '🔍', text: '尽调后再做决定', hint: '谨慎决策', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '🚀', text: '立即合作，借势营销', hint: '声誉风险', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '❌', text: '直接拒绝，避免争议', hint: '可能错失', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '合作前尽调能避免声誉风险，谨慎选择合作伙伴很重要。'
  },
  
  // 111. DAO治理参与
  {
    id: 'job_111',
    category: 'project',
    title: 'DAO治理投票',
    desc: '项目转型为DAO，你持有治理Token需要参与重要投票。',
    choices: [
      { emoji: '📚', text: '研究提案后理性投票', hint: '尽责治理', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '🤷', text: '跟随大户投票', hint: '放弃责任', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '😴', text: '弃权不投票', hint: '不参与治理', isCorrect: false, effect: { wealthPct: 0.8 } }
    ],
    explanation: 'DAO治理需要尽责研究提案后投票，放弃投票权是不负责任的。'
  },
  
  // 112. 加班补偿
  {
    id: 'job_112',
    category: 'salary',
    title: '加班费争议',
    desc: '长期加班但没有加班费，团队怨声载道。',
    choices: [
      { emoji: '💬', text: '与老板谈判调休或补偿', hint: '争取权益', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '😤', text: '集体抗议要求加班费', hint: '关系恶化', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '🤐', text: '默默忍受，不敢提', hint: '权益受损', isCorrect: false, effect: { wealthPct: 0.8 } }
    ],
    explanation: '理性沟通争取加班补偿是正当权益，沉默或激进行动都不利于问题解决。'
  },
  
  // 113. 竞业补偿
  {
    id: 'job_113',
    category: 'ethics',
    title: '竞业补偿谈判',
    desc: '离职后竞业协议生效，但公司未按约定支付补偿金。',
    choices: [
      { emoji: '⚖️', text: '书面催告并保留证据', hint: '依法维权', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '🤷', text: '算了，反正也不想干这行', hint: '放弃权益', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '🚀', text: '无视协议直接入职竞品', hint: '法律风险', isCorrect: false, effect: { wealthPct: 0.5 } }
    ],
    explanation: '竞业补偿未支付时，应依法催告并保留证据，维护自己的合法权益。'
  },
  
  // 114. 产品方向
  {
    id: 'job_114',
    category: 'project',
    title: '产品战略分歧',
    desc: '团队对To B还是To C方向产生严重分歧。',
    choices: [
      { emoji: '📊', text: '基于市场调研数据决策', hint: '数据驱动', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '👨‍💻', text: '支持To B，现金流稳定', hint: '主观判断', isCorrect: false, effect: { wealthPct: 1.0 } },
      { emoji: '📢', text: '支持To C，规模更大', hint: '主观判断', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '产品方向应基于市场调研数据决策，而非个人偏好。'
  },
  
  // 115. 融资条款
  {
    id: 'job_115',
    category: 'equity',
    title: '反稀释条款',
    desc: '新融资条款中包含对员工的反稀释保护缺失。',
    choices: [
      { emoji: '⚖️', text: '谈判争取员工反稀释保护', hint: '保护权益', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '🤷', text: '接受条款，相信公司', hint: '过于被动', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '❌', text: '拒绝融资，条件不公平', hint: '过于激进', isCorrect: false, effect: { wealthPct: 0.8 } }
    ],
    explanation: '积极谈判争取反稀释保护，是保护员工股权价值的必要措施。'
  },
  
  // 116. 代码质量
  {
    id: 'job_116',
    category: 'project',
    title: '上线时间压力',
    desc: '老板要求下周必须上线，但代码质量未达标准。',
    choices: [
      { emoji: '🔐', text: '坚持质量标准，争取延期', hint: '长期主义', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '🚀', text: '先上线再修bug', hint: '技术债务', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '⚠️', text: '上线但标注测试版', hint: '损害声誉', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '坚持质量标准是对用户和项目负责，赶工上线往往得不偿失。'
  },
  
  // 117. 社区治理
  {
    id: 'job_117',
    category: 'team',
    title: '社区治理权争夺',
    desc: '社区大户要求更多治理权，与团队产生矛盾。',
    choices: [
      { emoji: '⚖️', text: '设计平衡的治理机制', hint: '权力制衡', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '🛡️', text: '坚持团队控制，不给治理权', hint: '中心化质疑', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '📢', text: '完全放权给社区', hint: '可能失控', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '设计平衡的治理机制能协调团队和社区利益，实现权力制衡。'
  },
  
  // 118. 股权回购权
  {
    id: 'job_118',
    category: 'equity',
    title: '优先回购权',
    desc: '公司行使优先回购权收购你的股权，但价格低于市场价。',
    choices: [
      { emoji: '⚖️', text: '谈判争取市场价或保留部分', hint: '最优结果', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '🤷', text: '接受公司报价', hint: '损失利益', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '⚠️', text: '拒绝任何回购', hint: '可能强制', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '积极谈判争取合理价格或保留部分股权，是保护自身利益的最佳方式。'
  },
  
  // 119. 黑客松参与
  {
    id: 'job_119',
    category: 'project',
    title: '黑客松机会',
    desc: '有一个知名黑客松比赛，参加需要暂停手头工作一周。',
    choices: [
      { emoji: '🏆', text: '积极参与，展示项目', hint: '曝光机会', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '⏰', text: '专注本职工作，不参加', hint: '错失机会', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '🤷', text: '视当时工作量再决定', hint: '被动等待', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '黑客松是重要的曝光和合作机会，值得投入时间参与。'
  },
  
  // 120. Token流动性
  {
    id: 'job_120',
    category: 'equity',
    title: '流动性挖矿',
    desc: '项目推出流动性挖矿奖励，但智能合约未经充分审计。',
    choices: [
      { emoji: '🔍', text: '等待审计完成再参与', hint: '安全第一', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '🚀', text: '抢先参与，收益更高', hint: '安全风险', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '❌', text: '不参与任何流动性挖矿', hint: '过于保守', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '未经审计的合约风险高，等待审计完成是明智的选择。'
  },
  
  // 121. 团队文化建设
  {
    id: 'job_121',
    category: 'team',
    title: '远程团队文化',
    desc: '团队完全远程，缺乏凝聚力和归属感。',
    choices: [
      { emoji: '🌐', text: '建立虚拟办公和定期线下聚会', hint: '混合模式', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '💬', text: '增加线上会议频率', hint: '会议疲劳', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '🤷', text: '远程工作就这样，没办法', hint: '不作为', isCorrect: false, effect: { wealthPct: 0.8 } }
    ],
    explanation: '虚拟办公+定期线下聚会的混合模式，能兼顾效率和团队凝聚力。'
  },
  
  // 122. 产品迭代
  {
    id: 'job_122',
    category: 'project',
    title: '大版本重构',
    desc: '技术团队提议进行全面重构，但会暂停新功能开发3个月。',
    choices: [
      { emoji: '📊', text: '评估必要性，分阶段重构', hint: '平衡策略', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '🔧', text: '全面重构，一次性解决', hint: '业务停滞', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '🚀', text: '拒绝重构，优先业务', hint: '技术债务累积', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '分阶段重构能平衡技术改进和业务进展，避免全面停滞。'
  },
  
  // 123. 薪酬谈判筹码
  {
    id: 'job_123',
    category: 'salary',
    title: '多Offer谈判',
    desc: '你同时有3个offer，如何最大化谈判筹码？',
    choices: [
      { emoji: '🎯', text: '以最优offer为基准综合谈判', hint: '最优策略', isCorrect: true, effect: { wealthPct: 1.6 } },
      { emoji: '💰', text: '直接告诉各家互相竞价', hint: '可能反感', isCorrect: false, effect: { wealthPct: 1.0 } },
      { emoji: '🤷', text: '选择第一个给offer的公司', hint: '未最大化', isCorrect: false, effect: { wealthPct: 1.1 } }
    ],
    explanation: '以最优offer为基准与其他公司综合谈判，能最大化整体待遇。'
  },
  
  // 124. 行业会议
  {
    id: 'job_124',
    category: 'project',
    title: '行业大会演讲',
    desc: '你被邀请在行业大会做演讲，但准备时间紧张。',
    choices: [
      { emoji: '🎤', text: '认真准备，展示专业度', hint: '建立影响力', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '🤝', text: '接受但降低准备投入', hint: '表现平庸', isCorrect: false, effect: { wealthPct: 1.0 } },
      { emoji: '❌', text: '拒绝邀请，专注工作', hint: '错失机会', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '行业大会演讲是建立个人品牌的重要机会，值得认真准备。'
  },
  
  // 125. 合约漏洞赏金
  {
    id: 'job_125',
    category: 'ethics',
    title: '赏金计划设计',
    desc: '项目需要设计漏洞赏金计划吸引白帽黑客。',
    choices: [
      { emoji: '🎯', text: '设置合理的赏金等级和范围', hint: '吸引参与', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '💰', text: '设置最高赏金吸引眼球', hint: '成本过高', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '🛡️', text: '限制赏金范围减少支出', hint: '吸引力不足', isCorrect: false, effect: { wealthPct: 0.8 } }
    ],
    explanation: '合理的赏金计划能吸引白帽参与，最大化安全防护效果。'
  },
  
  // 126. 多签钱包
  {
    id: 'job_126',
    category: 'ethics',
    title: '国库多签设置',
    desc: '项目国库需要设置多签钱包，确定签名人和阈值。',
    choices: [
      { emoji: '🔐', text: '3/5多签，核心成员分散', hint: '安全平衡', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '👤', text: '1/1老板控制，效率高', hint: 'Rug风险', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '🏛️', text: '7/10多签，过于安全', hint: '效率低下', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '3/5多签在安全性和效率间取得平衡，是行业最佳实践。'
  },
  
  // 127. 绩效反馈
  {
    id: 'job_127',
    category: 'team',
    title: '绩效面谈',
    desc: '年终绩效面谈，你认为自己的贡献被低估了。',
    choices: [
      { emoji: '📊', text: '用数据和成果支撑诉求', hint: '理性沟通', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '😤', text: '表达不满，要求重新评估', hint: '情绪化', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '🤐', text: '接受结果，不表达异议', hint: '权益受损', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '用数据和成果理性沟通，是争取应有认可的最有效方式。'
  },
  
  // 128. Token经济学设计
  {
    id: 'job_128',
    category: 'project',
    title: '通胀模型设计',
    desc: '项目需要设计Token的通胀/通缩模型。',
    choices: [
      { emoji: '📊', text: '设计可持续的经济循环', hint: '长期价值', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '🚀', text: '高通胀激励早期用户', hint: '后期抛压', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '💎', text: '完全通缩，只涨不跌', hint: '不现实', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '可持续的经济模型是Token长期价值的基础，应避免极端设计。'
  },
  
  // 129. 职业推荐
  {
    id: 'job_129',
    category: 'team',
    title: '前同事求职推荐',
    desc: '能力一般的前同事请你推荐他加入团队。',
    choices: [
      { emoji: '❌', text: '诚实告知能力不足，不推荐', hint: '对团队负责', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '🤝', text: '碍于情面推荐', hint: '团队风险', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '🤷', text: '让他自己投递不干预', hint: '回避问题', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '推荐应对团队负责，不推荐能力不足的人是对团队和自己的保护。'
  },
  
  // 130. 离职原因
  {
    id: 'job_130',
    category: 'team',
    title: '离职面谈',
    desc: '离职面谈时HR询问真实离职原因。',
    choices: [
      { emoji: '💬', text: '诚实反馈建设性意见', hint: '专业态度', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '😤', text: '吐槽抱怨发泄不满', hint: '破坏关系', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '🤐', text: '敷衍说个人发展原因', hint: '错失反馈', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '诚实建设性地反馈离职原因，是专业的职业态度。'
  },
  
  // 131. 空投策略
  {
    id: 'job_131',
    category: 'project',
    title: '空投方案设计',
    desc: '项目计划空投，团队在分配策略上有分歧。',
    choices: [
      { emoji: '🎯', text: '设计防羊毛的精准空投', hint: '获取真用户', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '📢', text: '大力度空投博关注', hint: '引来羊毛党', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '💰', text: '小范围空投节省成本', hint: '影响有限', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '精准空投能获取真实用户，避免资源浪费在羊毛党上。'
  },
  
  // 132. 投资建议
  {
    id: 'job_132',
    category: 'ethics',
    title: '给朋友投资建议',
    desc: '朋友问你该项目是否值得投资，你掌握内部信息。',
    choices: [
      { emoji: '🛡️', text: '拒绝给建议，避免内幕嫌疑', hint: '合规边界', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '💡', text: '暗示项目前景不错', hint: '内幕风险', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '⚠️', text: '让他不要投，有风险', hint: '信息泄露', isCorrect: false, effect: { wealthPct: 0.8 } }
    ],
    explanation: '掌握内部信息时应避免给投资建议，以免涉及内幕交易。'
  },
  
  // 133. 代码审查
  {
    id: 'job_133',
    category: 'project',
    title: '同事代码质量问题',
    desc: '代码审查发现同事提交的代码质量很差，可能引入bug。',
    choices: [
      { emoji: '💬', text: '友善指出并帮助改进', hint: '建设性反馈', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '⚠️', text: '直接打回要求重写', hint: '关系紧张', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '🤷', text: '通过，不想得罪人', hint: '质量风险', isCorrect: false, effect: { wealthPct: 0.7 } }
    ],
    explanation: '友善建设性地指出代码问题，能帮助同事成长同时保证质量。'
  },
  
  // 134. Token解锁策略
  {
    id: 'job_134',
    category: 'equity',
    title: '解锁期时间管理',
    desc: '你的Token还有3个月解锁，但市场开始走熊。',
    choices: [
      { emoji: '📊', text: '解锁后分批卖出，不赌市场', hint: '理性退出', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '💎', text: '继续持有等市场回暖', hint: '时间不确定', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '💰', text: '解锁立即全部卖出', hint: '可能卖在底部', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '解锁后分批卖出能不赌市场方向，是最理性的退出策略。'
  },
  
  // 135. 会议效率
  {
    id: 'job_135',
    category: 'team',
    title: '无效会议过多',
    desc: '团队每天会议占去大半时间，实际工作效率低下。',
    choices: [
      { emoji: '📝', text: '提议优化会议制度', hint: '提高效率', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '😴', text: '会议上做自己的工作', hint: '不尊重', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '🏃', text: '能推的会议都推掉', hint: '可能错过信息', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '主动提议优化会议制度，能提升整个团队的工作效率。'
  },
  
  // 136. 项目文档
  {
    id: 'job_136',
    category: 'project',
    title: '技术文档缺失',
    desc: '项目文档严重缺失，新成员难以onboarding。',
    choices: [
      { emoji: '📝', text: '主动整理完善文档', hint: '长期价值', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '👄', text: '口头上教新成员', hint: '效率低下', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '🤷', text: '让新成员自己看代码', hint: '体验差', isCorrect: false, effect: { wealthPct: 0.8 } }
    ],
    explanation: '完善的文档是项目的重要资产，主动整理体现专业素养。'
  },
  
  // 137. 风险披露
  {
    id: 'job_137',
    category: 'ethics',
    title: '投资风险提示',
    desc: '对外宣传材料是否需要包含风险提示产生分歧。',
    choices: [
      { emoji: '⚖️', text: '坚持包含充分风险提示', hint: '合规保护', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '📢', text: '弱化风险提示，突出收益', hint: '法律风险', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '🤷', text: '按老板意见处理', hint: '放弃原则', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '充分的风险提示是合规要求，也是对投资者和项目的保护。'
  },
  
  // 138. 团队培训
  {
    id: 'job_138',
    category: 'team',
    title: '技术培训组织',
    desc: '团队技术水平参差不齐，影响项目进展。',
    choices: [
      { emoji: '📚', text: '组织内部技术分享和培训', hint: '共同成长', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '💰', text: '建议外聘专家培训', hint: '成本较高', isCorrect: false, effect: { wealthPct: 1.0 } },
      { emoji: '🤷', text: '各自学习，自生自灭', hint: '效率低下', isCorrect: false, effect: { wealthPct: 0.8 } }
    ],
    explanation: '组织内部技术分享能提升整体水平，是成本效益最高的方式。'
  },
  
  // 139. 用户教育
  {
    id: 'job_139',
    category: 'project',
    title: '用户门槛过高',
    desc: '产品使用门槛高，普通用户难以理解和使用。',
    choices: [
      { emoji: '📖', text: '制作教程降低使用门槛', hint: '用户增长', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '🎯', text: '专注服务专业用户', hint: '放弃大众', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '🔧', text: '简化产品功能', hint: '可能失去特色', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '通过教育降低使用门槛能在保持产品深度的同时扩大用户群。'
  },
  
  // 140. 供应商选择
  {
    id: 'job_140',
    category: 'project',
    title: '云服务商选择',
    desc: '需要选择云服务商，便宜的小厂商vs贵的头部厂商。',
    choices: [
      { emoji: '🔐', text: '选择可靠的头部厂商', hint: '稳定性保障', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '💰', text: '选择便宜的小厂商', hint: '服务质量风险', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '⚖️', text: '非核心用便宜，核心用贵', hint: '复杂管理', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '核心基础设施选择可靠厂商，稳定运营比短期成本更重要。'
  },
  
  // 141. 数据安全
  {
    id: 'job_141',
    category: 'ethics',
    title: '用户数据泄露',
    desc: '发现项目存在数据泄露风险，但修复需要暂停服务。',
    choices: [
      { emoji: '🛡️', text: '立即修复，暂停服务', hint: '用户安全第一', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '⏳', text: '计划维护窗口再修复', hint: '风险延续', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '🤐', text: '不修复，希望没人发现', hint: '极大风险', isCorrect: false, effect: { wealthPct: 0.3 } }
    ],
    explanation: '数据安全风险应立即修复，用户安全永远是第一位的。'
  },
  
  // 142. 股权行权
  {
    id: 'job_142',
    category: 'equity',
    title: '期权行权时机',
    desc: '你的期权已成熟，需要决定是否行权。',
    choices: [
      { emoji: '📊', text: '评估税负后分批行权', hint: '税务优化', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '💰', text: '立即全部行权', hint: '税负可能过高', isCorrect: false, effect: { wealthPct: 1.0 } },
      { emoji: '⏳', text: '等待上市后再行权', hint: '可能错失', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '考虑税务因素分批行权，能最大化期权价值。'
  },
  
  // 143. 危机沟通
  {
    id: 'job_143',
    category: 'project',
    title: '系统故障危机',
    desc: '项目服务发生故障，用户资金暂时无法取出。',
    choices: [
      { emoji: '📢', text: '立即透明公告并持续更新', hint: '赢得信任', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '🤐', text: '先修复再公告', hint: '恐慌蔓延', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '⚠️', text: '淡化问题严重性', hint: '信任崩塌', isCorrect: false, effect: { wealthPct: 0.5 } }
    ],
    explanation: '危机时透明沟通能控制恐慌，赢得用户理解和信任。'
  },
  
  // 144. 工作生活平衡
  {
    id: 'job_144',
    category: 'team',
    title: '工作强度不可持续',
    desc: '连续高强度工作3个月，身心俱疲。',
    choices: [
      { emoji: '💬', text: '与老板沟通调整节奏', hint: '主动沟通', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '😴', text: '硬撑，等项目上线再说', hint: '健康风险', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '🏃', text: '直接请假休息一周', hint: '可能影响进度', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '主动沟通调整工作节奏，是对自己和项目负责的做法。'
  },
  
  // 145. 创新文化
  {
    id: 'job_145',
    category: 'team',
    title: '创新提案被否',
    desc: '你的创新提案被老板否决，理由是风险太高。',
    choices: [
      { emoji: '📊', text: '用数据和案例再次说服', hint: '据理力争', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '😤', text: '放弃创新，按部就班', hint: '错失机会', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '⚠️', text: '私下偷偷推进', hint: '违规风险', isCorrect: false, effect: { wealthPct: 0.7 } }
    ],
    explanation: '用数据和案例理性沟通，是给创新提案争取机会的最佳方式。'
  },
  
  // 146. 融资条款谈判
  {
    id: 'job_146',
    category: 'equity',
    title: '清算优先权',
    desc: '新融资条款中投资人要求2倍清算优先权。',
    choices: [
      { emoji: '⚖️', text: '谈判降低至1倍或1.5倍', hint: '保护员工', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '🤷', text: '接受条款，相信公司成功', hint: '过于被动', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '❌', text: '强烈反对，宁可不要融资', hint: '过于激进', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '过高的清算优先权会稀释员工回报，应积极谈判争取合理条款。'
  },
  
  // 147. 团队冲突解决
  {
    id: 'job_147',
    category: 'team',
    title: '技术产品冲突',
    desc: '技术团队和产品团队因为排期问题发生严重冲突。',
    choices: [
      { emoji: '⚖️', text: '组织双方找到共同目标', hint: '化解矛盾', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '👨‍💻', text: '支持技术团队，质量第一', hint: '偏袒一方', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '📢', text: '支持产品团队，速度重要', hint: '偏袒一方', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '找到共同目标化解矛盾，是跨团队协作的关键。'
  },
  
  // 148. 上市准备
  {
    id: 'job_148',
    category: 'project',
    title: '上所前最后冲刺',
    desc: '项目即将上线头部交易所，需要全员冲刺准备。',
    choices: [
      { emoji: '🔥', text: '全力以赴，配合所有需求', hint: '抓住机会', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '⏰', text: '正常工作节奏，不上头', hint: '错失窗口', isCorrect: false, effect: { wealthPct: 1.2 } },
      { emoji: '😴', text: '上所而已，没那么重要', hint: '态度消极', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '上所是项目里程碑事件，全力配合能显著提升项目和个人价值。'
  },
  
  // 149. 职业道德
  {
    id: 'job_149',
    category: 'ethics',
    title: '虚假数据上报',
    desc: '老板要求你在对外报告中夸大用户数据和交易量。',
    choices: [
      { emoji: '❌', text: '坚决拒绝，坚持真实数据', hint: '诚信底线', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '🤷', text: '按老板要求上报', hint: '诚信风险', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '⚠️', text: '稍微美化但不夸大', hint: '灰色地带', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '诚信是职业底线，虚假数据最终会损害项目和个人声誉。'
  },
  
  // 150. 终极抉择
  {
    id: 'job_150',
    category: 'project',
    title: 'Web3职业生涯总结',
    desc: '回顾你的项目方打工生涯，哪个因素最重要？',
    choices: [
      { emoji: '👥', text: '选择靠谱的团队和人', hint: '长期发展', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '💰', text: '抓住高薪机会最重要', hint: '短期思维', isCorrect: false, effect: { wealthPct: 1.2 } },
      { emoji: '🚀', text: '押中热门赛道和项目', hint: '运气成分', isCorrect: false, effect: { wealthPct: 1.3 } }
    ],
    explanation: '在Web3行业，靠谱的团队和人才是长期成功最重要的因素。'
  }
);

// 验证事件数量
console.log(`Hardcore Job Decisions loaded: ${HARDCORE_JOB_DECISIONS.length} events`);

// 导出决策事件库
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { HARDCORE_JOB_DECISIONS };
}


// Export for browser
if (typeof window !== 'undefined') {
  window.HARDCORE_JOB_DECISIONS = HARDCORE_JOB_DECISIONS;
}
