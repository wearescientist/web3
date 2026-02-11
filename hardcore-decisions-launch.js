/**
 * 硬核模式 - 自己发币路径决策事件库
 * 150个发币决策事件，涵盖税率、流动性、社区、营销、透明度等方面
 * 
 * 核心原则：决策全对稳赚，全错必亏，随机事件只放大不逆转
 */

/** ========== 发币路径决策事件（150个） ========== */
const HARDCORE_LAUNCH_DECISIONS = [
  // ========== 税率设置类 (001-030) ==========
  {
    id: 'launch_001',
    category: 'tax',
    title: '💰 初始税率设置',
    desc: '你准备发币，需要设置买卖税率。',
    choices: [
      { emoji: '📉', text: '0-5%低税率', hint: '吸引交易者', isCorrect: true, effect: { wealthPct: 1.00 } },
      { emoji: '⚖️', text: '5-10%中等税率', hint: '平衡', isCorrect: false, effect: { wealthPct: -0.20 } },
      { emoji: '📈', text: '10-15%高税率', hint: '快速募资', isCorrect: false, effect: { wealthPct: -0.40 } },
      { emoji: '💸', text: '15%以上超高税率', hint: '收割模式', isCorrect: false, effect: { wealthPct: -0.70 } }
    ],
    explanation: '低税率有利于吸引更多交易者，提高流动性和价格发现效率。'
  },
  {
    id: 'launch_002',
    category: 'tax',
    title: '🔄 税改提案应对',
    desc: '社区提议调整税率以应对市场变化。',
    choices: [
      { emoji: '🗳️', text: '社区投票决定', hint: '民主治理', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '👤', text: 'Dev单独决定', hint: '中心化', isCorrect: false, effect: { wealthPct: -0.40 } },
      { emoji: '📉', text: '直接降为0税', hint: '激进', isCorrect: false, effect: { wealthPct: -0.30 } },
      { emoji: '⏸️', text: '维持现状不调整', hint: '保守', isCorrect: false, effect: { wealthPct: -0.20 } }
    ],
    explanation: '社区投票参与税改能增强持有者信心和项目去中心化程度。'
  },
  {
    id: 'launch_003',
    category: 'tax',
    title: '📊 税费用途规划',
    desc: '税收收入应该如何分配使用？',
    choices: [
      { emoji: '💹', text: '营销+买回销毁', hint: '长线利好', isCorrect: true, effect: { wealthPct: 0.80 } },
      { emoji: '💰', text: 'Dev团队提取', hint: '短期套现', isCorrect: false, effect: { wealthPct: -0.50 } },
      { emoji: '🎁', text: '全部分红给持有者', hint: '不可持续', isCorrect: false, effect: { wealthPct: -0.40 } },
      { emoji: '🤷', text: '暂不公布用途', hint: '不透明', isCorrect: false, effect: { wealthPct: -0.60 } }
    ],
    explanation: '税收用于营销和买回销毁能形成正反馈，提升代币价值和社区信心。'
  },
  {
    id: 'launch_004',
    category: 'tax',
    title: '🔥 销毁机制设计',
    desc: '是否添加自动销毁机制？',
    choices: [
      { emoji: '✅', text: '每笔交易自动销毁', hint: '通缩模型', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '📅', text: '定期批量销毁', hint: '可控通缩', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '❌', text: '不设置销毁', hint: '无通缩', isCorrect: false, effect: { wealthPct: -0.30 } },
      { emoji: '🤥', text: '承诺后期销毁', hint: '空头支票', isCorrect: false, effect: { wealthPct: -0.50 } }
    ],
    explanation: '销毁机制创造通缩预期，有利于长期价格支撑和投资者信心。'
  },
  {
    id: 'launch_005',
    category: 'tax',
    title: '📉 社区抱怨税率高',
    desc: '社区成员抱怨当前税率过高影响交易。',
    choices: [
      { emoji: '🗳️', text: '发起降税投票', hint: '顺应民意', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '📢', text: '解释税收用途', hint: '沟通教育', isCorrect: true, effect: { wealthPct: 0.30 } },
      { emoji: '🙉', text: '无视抱怨', hint: '冷漠', isCorrect: false, effect: { wealthPct: -0.40 } },
      { emoji: '📈', text: '反而提高税率', hint: '自杀', isCorrect: false, effect: { wealthPct: -0.80 } }
    ],
    explanation: '通过投票或沟通解决社区关切，能增强信任和参与度。'
  },
  {
    id: 'launch_006',
    category: 'tax',
    title: '⏰ 税率调整时机',
    desc: '市场波动期，是否调整税率？',
    choices: [
      { emoji: '🛑', text: '保持税率稳定', hint: '稳定预期', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '📉', text: '降税刺激交易', hint: '短期利好', isCorrect: false, effect: { wealthPct: -0.10 } },
      { emoji: '📈', text: '增税积累资金', hint: '杀鸡取卵', isCorrect: false, effect: { wealthPct: -0.50 } },
      { emoji: '🎰', text: '频繁调整税率', hint: '不稳定', isCorrect: false, effect: { wealthPct: -0.70 } }
    ],
    explanation: '税率稳定性对建立投资者信心至关重要，频繁调整会赶走长期持有者。'
  },
  {
    id: 'launch_007',
    category: 'tax',
    title: '🎯 买卖税率差异化',
    desc: '是否设置买税和卖税不同？',
    choices: [
      { emoji: '📉', text: '买低卖高抑制抛压', hint: '鼓励持有', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '⚖️', text: '买卖税率相同', hint: '公平', isCorrect: true, effect: { wealthPct: 0.30 } },
      { emoji: '📈', text: '买高卖低', hint: '怪异设计', isCorrect: false, effect: { wealthPct: -0.50 } },
      { emoji: '🎲', text: '随机税率', hint: '荒谬', isCorrect: false, effect: { wealthPct: -0.90 } }
    ],
    explanation: '买低卖高能抑制短线投机，鼓励长期持有，稳定价格。'
  },
  {
    id: 'launch_008',
    category: 'tax',
    title: '🏦 税收钱包安全',
    desc: '税收收集钱包如何管理？',
    choices: [
      { emoji: '🔐', text: '多签钱包管理', hint: '安全透明', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '👥', text: '社区托管', hint: '去中心化', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '👤', text: 'Dev个人钱包', hint: '高风险', isCorrect: false, effect: { wealthPct: -0.60 } },
      { emoji: '🤷', text: '暂不公布', hint: '不透明', isCorrect: false, effect: { wealthPct: -0.50 } }
    ],
    explanation: '多签钱包能防止单点故障和内部作恶，增强资金安全。'
  },
  {
    id: 'launch_009',
    category: 'tax',
    title: '📈 税收使用透明度',
    desc: '如何向社区展示税收使用情况？',
    choices: [
      { emoji: '📊', text: '链上公开记录', hint: '完全透明', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '📋', text: '定期财务报告', hint: '定期披露', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '💬', text: '口头说明', hint: '不正式', isCorrect: false, effect: { wealthPct: -0.30 } },
      { emoji: '🤐', text: '不透露用途', hint: '黑箱', isCorrect: false, effect: { wealthPct: -0.70 } }
    ],
    explanation: '链上透明的税收使用记录能建立信任，防止挪用质疑。'
  },
  {
    id: 'launch_010',
    category: 'tax',
    title: '💡 税收创新机制',
    desc: '设计创新的税收分配机制',
    choices: [
      { emoji: '🎁', text: '持有者奖励池', hint: '持币激励', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🌱', text: '生态建设基金', hint: '长期发展', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '💰', text: '全进Dev口袋', hint: '自私', isCorrect: false, effect: { wealthPct: -0.80 } },
      { emoji: '🎰', text: '随机空投', hint: '不公平', isCorrect: false, effect: { wealthPct: -0.40 } }
    ],
    explanation: '创新税收分配能激励持币和生态建设，形成良性循环。'
  },
  {
    id: 'launch_011',
    category: 'tax',
    title: '🔄 零税启动策略',
    desc: '是否采用0税率启动吸引早期用户？',
    choices: [
      { emoji: '✅', text: '0税启动，后期加税', hint: '获客策略', isCorrect: false, effect: { wealthPct: -0.40 } },
      { emoji: '📉', text: '低税启动不变', hint: '稳定预期', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '📈', text: '正常税率启动', hint: '稳健', isCorrect: true, effect: { wealthPct: 0.30 } },
      { emoji: '🎭', text: '假装0税后期突然加税', hint: '骗局', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '后期加税会伤害早期支持者信任，应保持税率稳定或一开始就设定合理税率。'
  },
  {
    id: 'launch_012',
    category: 'tax',
    title: '🌉 跨链桥接税率',
    desc: '跨链转移是否收税？',
    choices: [
      { emoji: '✅', text: '跨链不收税', hint: '促进流动', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '📊', text: '跨链低税率', hint: '适中', isCorrect: true, effect: { wealthPct: 0.30 } },
      { emoji: '📈', text: '跨链高税率', hint: '阻碍流动', isCorrect: false, effect: { wealthPct: -0.50 } },
      { emoji: '🚫', text: '禁止跨链', hint: '封闭', isCorrect: false, effect: { wealthPct: -0.70 } }
    ],
    explanation: '跨链不收税或低税有利于资产流动性和多链生态扩展。'
  },
  {
    id: 'launch_013',
    category: 'tax',
    title: '🎁 空投税处理',
    desc: '空投获得的代币如何收税？',
    choices: [
      { emoji: '✅', text: '空投免税', hint: '激励参与', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '📉', text: '空投低税', hint: '适度', isCorrect: true, effect: { wealthPct: 0.30 } },
      { emoji: '📈', text: '空投正常税率', hint: '抑制热情', isCorrect: false, effect: { wealthPct: -0.30 } },
      { emoji: '💸', text: '空投高额税', hint: '贪婪', isCorrect: false, effect: { wealthPct: -0.60 } }
    ],
    explanation: '空投免税或低税能有效激励社区参与和推广。'
  },
  {
    id: 'launch_014',
    category: 'tax',
    title: '📊 税收预警机制',
    desc: '税收累积过多时如何处理？',
    choices: [
      { emoji: '🔔', text: '提前公告使用计划', hint: '透明', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '⏰', text: '定期自动执行销毁', hint: '程序化', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🤐', text: '暂不处理', hint: '积累风险', isCorrect: false, effect: { wealthPct: -0.40 } },
      { emoji: '🏃', text: '突然转走砸盘', hint: 'Rug', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '透明的预警机制和自动执行能防止资金积累成为风险点。'
  },
  {
    id: 'launch_015',
    category: 'tax',
    title: '🎯 大户税收优惠',
    desc: '是否给大户设置不同税率？',
    choices: [
      { emoji: '⚖️', text: '统一税率人人平等', hint: '公平', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '📉', text: '持仓越多税率越低', hint: '鼓励持币', isCorrect: true, effect: { wealthPct: 0.30 } },
      { emoji: '📈', text: '大户更高税率', hint: '惩罚大户', isCorrect: false, effect: { wealthPct: -0.50 } },
      { emoji: '🎭', text: '私下给大户返税', hint: '腐败', isCorrect: false, effect: { wealthPct: -0.80 } }
    ],
    explanation: '统一税率或持币降税有利于建立公平透明的经济模型。'
  },
  {
    id: 'launch_016',
    category: 'tax',
    title: '🔒 税收锁仓机制',
    desc: '税收收入是否锁仓一段时间？',
    choices: [
      { emoji: '✅', text: '税收锁仓30天', hint: '防止砸盘', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '📅', text: '税收锁仓7天', hint: '适度', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '❌', text: '税收即时可用', hint: '高风险', isCorrect: false, effect: { wealthPct: -0.40 } },
      { emoji: '🤥', text: '承诺锁仓实际不锁', hint: '欺骗', isCorrect: false, effect: { wealthPct: -0.90 } }
    ],
    explanation: '税收锁仓能防止短期砸盘，给社区更多安全感。'
  },
  {
    id: 'launch_017',
    category: 'tax',
    title: '📈 税收与币价关联',
    desc: '税收使用是否与币价挂钩？',
    choices: [
      { emoji: '✅', text: '币价跌时加大买回', hint: '护盘', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '📊', text: '固定比例买回销毁', hint: '稳定', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '❌', text: '税收与币价无关', hint: '脱节', isCorrect: false, effect: { wealthPct: -0.30 } },
      { emoji: '🎰', text: '币价涨时砸盘', hint: '自杀', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '税收用于护盘能在市场恐慌时提供支撑，增强投资者信心。'
  },
  {
    id: 'launch_018',
    category: 'tax',
    title: '🏛️ 税收治理权',
    desc: '谁有权决定税收使用？',
    choices: [
      { emoji: '🗳️', text: 'DAO治理投票', hint: '去中心化', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '👥', text: '多签委员会', hint: '集体决策', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '👤', text: 'Dev独断', hint: '中心化', isCorrect: false, effect: { wealthPct: -0.60 } },
      { emoji: '🤐', text: '不公布决策机制', hint: '黑箱', isCorrect: false, effect: { wealthPct: -0.50 } }
    ],
    explanation: 'DAO或多签治理能防止中心化风险，增强社区参与感。'
  },
  {
    id: 'launch_019',
    category: 'tax',
    title: '💸 税收紧急情况',
    desc: '市场暴跌，是否动用税收护盘？',
    choices: [
      { emoji: '✅', text: '部分税收护盘', hint: '稳定市场', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '📊', text: '启动护盘基金', hint: '预案执行', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '❌', text: '不动用税收', hint: '放任下跌', isCorrect: false, effect: { wealthPct: -0.50 } },
      { emoji: '🏃', text: '趁乱套现税收', hint: 'Rug', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '适时护盘能稳定市场信心，展现项目方的责任感和长期承诺。'
  },
  {
    id: 'launch_020',
    category: 'tax',
    title: '📉 税率为0的隐患',
    desc: '有建议完全取消税收，如何应对？',
    choices: [
      { emoji: '⚠️', text: '解释税收必要性', hint: '教育', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '🗳️', text: '社区投票决定', hint: '民主', isCorrect: true, effect: { wealthPct: 0.30 } },
      { emoji: '✅', text: '直接取消税收', hint: '断收入来源', isCorrect: false, effect: { wealthPct: -0.60 } },
      { emoji: '🙉', text: '无视建议', hint: '傲慢', isCorrect: false, effect: { wealthPct: -0.30 } }
    ],
    explanation: '税收是项目发展资金，完全取消会影响长期运营，需要教育社区。'
  },
  {
    id: 'launch_021',
    category: 'tax',
    title: '🎯 税收上限设置',
    desc: '是否设置税收累积上限？',
    choices: [
      { emoji: '✅', text: '设置上限超额自动销毁', hint: '通缩机制', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '📊', text: '设置上限超额回购', hint: '护盘机制', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '❌', text: '不设置上限', hint: '积累风险', isCorrect: false, effect: { wealthPct: -0.40 } },
      { emoji: '🤷', text: '视情况而定', hint: '模糊', isCorrect: false, effect: { wealthPct: -0.20 } }
    ],
    explanation: '税收上限能防止资金过度积累成为安全隐患。'
  },
  {
    id: 'launch_022',
    category: 'tax',
    title: '🔄 税收回流机制',
    desc: '部分税收是否回流给交易者？',
    choices: [
      { emoji: '✅', text: '交易竞赛奖励', hint: '激励交易', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🎁', text: '持仓者分红', hint: '持币激励', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '❌', text: '税收不回流', hint: '单向流出', isCorrect: false, effect: { wealthPct: -0.30 } },
      { emoji: '🎰', text: '只给Dev亲友', hint: '腐败', isCorrect: false, effect: { wealthPct: -0.90 } }
    ],
    explanation: '税收部分回流能激励交易和持币，形成正向循环。'
  },
  {
    id: 'launch_023',
    category: 'tax',
    title: '📊 税收与市值比例',
    desc: '税收设置是否考虑市值规模？',
    choices: [
      { emoji: '📉', text: '小市值低税率', hint: '鼓励早期', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '📈', text: '随市值增长降税', hint: '渐进式', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '⚖️', text: '固定税率', hint: '简单', isCorrect: false, effect: { wealthPct: 0.10 } },
      { emoji: '📈', text: '市值越高税越高', hint: '抑制增长', isCorrect: false, effect: { wealthPct: -0.50 } }
    ],
    explanation: '动态税率能更好适应项目不同阶段的发展需求。'
  },
  {
    id: 'launch_024',
    category: 'tax',
    title: '🔍 税收审计',
    desc: '是否接受第三方审计税收使用？',
    choices: [
      { emoji: '✅', text: '定期第三方审计', hint: '专业透明', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '🔗', text: '链上全透明可查询', hint: '技术透明', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '❌', text: '不接受审计', hint: '可疑', isCorrect: false, effect: { wealthPct: -0.60 } },
      { emoji: '🤥', text: '伪造审计报告', hint: '欺诈', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '第三方审计或链上透明能极大增强社区和投资者信任。'
  },
  {
    id: 'launch_025',
    category: 'tax',
    title: '🎁 税收空投策略',
    desc: '用税收进行空投是否收税？',
    choices: [
      { emoji: '✅', text: '空投免税', hint: '激励最大化', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '📉', text: '空投低税', hint: '适度回收', isCorrect: true, effect: { wealthPct: 0.30 } },
      { emoji: '📈', text: '空投正常税率', hint: '重复征税', isCorrect: false, effect: { wealthPct: -0.40 } },
      { emoji: '💸', text: '空投超高税', hint: '贪婪', isCorrect: false, effect: { wealthPct: -0.70 } }
    ],
    explanation: '空投免税能让激励效果最大化，避免重复征税打击热情。'
  },
  {
    id: 'launch_026',
    category: 'tax',
    title: '📈 税收增长应对',
    desc: '税收快速增长，社区担忧如何使用？',
    choices: [
      { emoji: '📢', text: '公布详细使用计划', hint: '透明沟通', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🔥', text: '加大销毁力度', hint: '通缩利好', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '🤐', text: '不回应担忧', hint: '冷漠', isCorrect: false, effect: { wealthPct: -0.50 } },
      { emoji: '🏃', text: '悄悄转移资金', hint: 'Rug', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '透明沟通和增加销毁能化解社区担忧，转危为机。'
  },
  {
    id: 'launch_027',
    category: 'tax',
    title: '🎯 税收与开发进度',
    desc: '税收使用是否与开发里程碑挂钩？',
    choices: [
      { emoji: '✅', text: '按里程碑解锁', hint: '激励对齐', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '📊', text: '部分挂钩部分灵活', hint: '平衡', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '❌', text: '完全不挂钩', hint: '脱节', isCorrect: false, effect: { wealthPct: -0.40 } },
      { emoji: '🤥', text: '虚假里程碑骗取资金', hint: '欺诈', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '税收与里程碑挂钩能确保资金用于实际开发，防止挪用。'
  },
  {
    id: 'launch_028',
    category: 'tax',
    title: '🔄 税收再投资',
    desc: '税收是否用于投资其他项目？',
    choices: [
      { emoji: '❌', text: '专注本项目建设', hint: '专注', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '📊', text: '小部分战略投资', hint: '多元化', isCorrect: true, effect: { wealthPct: 0.30 } },
      { emoji: '🎰', text: '大量投资其他项目', hint: '分散精力', isCorrect: false, effect: { wealthPct: -0.60 } },
      { emoji: '🏃', text: '投资关联项目洗钱', hint: '腐败', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '专注本项目能更好发展核心业务，避免资金分散和利益冲突。'
  },
  {
    id: 'launch_029',
    category: 'tax',
    title: '🎁 税收回馈活动',
    desc: '用税收举办什么类型的活动？',
    choices: [
      { emoji: '🎮', text: '交易竞赛', hint: '刺激交易', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🎨', text: '创意内容大赛', hint: '社区参与', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '🎰', text: '抽奖活动', hint: '赌博性质', isCorrect: false, effect: { wealthPct: -0.30 } },
      { emoji: '💰', text: '直接分给自己', hint: '腐败', isCorrect: false, effect: { wealthPct: -0.90 } }
    ],
    explanation: '交易竞赛和内容大赛能真正促进生态发展，而非单纯赌博。'
  },
  {
    id: 'launch_030',
    category: 'tax',
    title: '📊 税收年度规划',
    desc: '新一年税收使用如何规划？',
    choices: [
      { emoji: '📋', text: '公布详细预算', hint: '规划清晰', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🗳️', text: '社区投票决定方向', hint: '民主', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🤷', text: '边走边看', hint: '无规划', isCorrect: false, effect: { wealthPct: -0.40 } },
      { emoji: '🤐', text: '不透露计划', hint: '不透明', isCorrect: false, effect: { wealthPct: -0.50 } }
    ],
    explanation: '清晰的年度规划能增强社区信心，确保资金有效使用。'
  },

  // ========== 流动性管理类 (031-060) ==========
  {
    id: 'launch_031',
    category: 'liquidity',
    title: '💧 初始流动性添加',
    desc: '初始流动性池应该添加多少资金？',
    choices: [
      { emoji: '💰', text: '大部分资金锁定', hint: '深度充足', isCorrect: true, effect: { wealthPct: 2.00 } },
      { emoji: '⚖️', text: '适中资金', hint: '平衡', isCorrect: true, effect: { wealthPct: 1.00 } },
      { emoji: '📉', text: '少量资金', hint: '容易被操纵', isCorrect: false, effect: { wealthPct: -0.60 } },
      { emoji: '🎭', text: '假装添加后撤走', hint: 'Rug', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '充足的初始流动性能防止价格操纵，给投资者信心。'
  },
  {
    id: 'launch_032',
    category: 'liquidity',
    title: '🔒 流动性锁定期',
    desc: '流动性应该锁定多长时间？',
    choices: [
      { emoji: '🔐', text: '锁定6个月以上', hint: '长期承诺', isCorrect: true, effect: { wealthPct: 0.80 } },
      { emoji: '🔒', text: '锁定3-6个月', hint: '中等', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '⏰', text: '锁定1-3个月', hint: '短期', isCorrect: false, effect: { wealthPct: -0.40 } },
      { emoji: '❌', text: '不锁定', hint: '高风险', isCorrect: false, effect: { wealthPct: -0.90 } }
    ],
    explanation: '长期锁定能证明项目方长期承诺，防止Rug Pull风险。'
  },
  {
    id: 'launch_033',
    category: 'liquidity',
    title: '📈 流动性分批添加',
    desc: '流动性应该一次性还是分批添加？',
    choices: [
      { emoji: '📊', text: '分批次添加', hint: '防抽水', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '⚖️', text: '先部分后追加', hint: '渐进式', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '💥', text: '一次性全部添加', hint: '高风险', isCorrect: false, effect: { wealthPct: -0.40 } },
      { emoji: '🎭', text: '添加后迅速撤走', hint: '骗局', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '分批添加能防止大额抽水，降低风险。'
  },
  {
    id: 'launch_034',
    category: 'liquidity',
    title: '🏊 多链流动性',
    desc: '是否在多条链添加流动性？',
    choices: [
      { emoji: '✅', text: '主链深度，次链适中', hint: '主次分明', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🎯', text: '专注单链做深', hint: '深度优先', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '📉', text: '多链浅流动性', hint: '分散无力', isCorrect: false, effect: { wealthPct: -0.50 } },
      { emoji: '🚫', text: '只在一个小链', hint: '局限', isCorrect: false, effect: { wealthPct: -0.40 } }
    ],
    explanation: '专注主链或主次分明能确保流动性深度，而非分散无力。'
  },
  {
    id: 'launch_035',
    category: 'liquidity',
    title: '📉 流动性补充时机',
    desc: '币价下跌时是否补充流动性？',
    choices: [
      { emoji: '✅', text: '跌时补充支持价格', hint: '护盘', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '📊', text: '按预定计划补充', hint: '纪律性', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '❌', text: '不补充流动性', hint: '放任', isCorrect: false, effect: { wealthPct: -0.50 } },
      { emoji: '🏃', text: '趁机撤走流动性', hint: 'Rug', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '下跌时补充流动性能支撑价格，展现项目方护盘意愿。'
  },
  {
    id: 'launch_036',
    category: 'liquidity',
    title: '🔍 流动性证明',
    desc: '如何向社区证明流动性已锁定？',
    choices: [
      { emoji: '🔗', text: '链上可查锁定证明', hint: '完全透明', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '📜', text: '第三方锁定服务', hint: '可信服务', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '💬', text: '口头承诺', hint: '无证明', isCorrect: false, effect: { wealthPct: -0.60 } },
      { emoji: '🤥', text: '伪造锁定证明', hint: '欺骗', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '链上可验证的锁定证明是建立信任的基础。'
  },
  {
    id: 'launch_037',
    category: 'liquidity',
    title: '💰 LP代币处理',
    desc: '流动性提供者代币如何处理？',
    choices: [
      { emoji: '🔥', text: '直接销毁LP代币', hint: '永久锁定', isCorrect: true, effect: { wealthPct: 0.80 } },
      { emoji: '🔒', text: '多签托管LP代币', hint: '集体管理', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '👤', text: 'Dev持有LP代币', hint: '可撤池', isCorrect: false, effect: { wealthPct: -0.70 } },
      { emoji: '🤥', text: '声称销毁实则保留', hint: '欺骗', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '销毁LP代币能永久锁定流动性，消除Rug风险。'
  },
  {
    id: 'launch_038',
    category: 'liquidity',
    title: '📊 流动性池比例',
    desc: '代币与稳定币的池子比例如何设置？',
    choices: [
      { emoji: '⚖️', text: '50:50平衡比例', hint: '标准', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '📈', text: '根据市值动态调整', hint: '灵活', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '📉', text: '代币比例过高', hint: '不稳定', isCorrect: false, effect: { wealthPct: -0.50 } },
      { emoji: '🎰', text: '随意设置', hint: '不专业', isCorrect: false, effect: { wealthPct: -0.40 } }
    ],
    explanation: '合理的池子比例能确保价格稳定和交易体验。'
  },
  {
    id: 'launch_039',
    category: 'liquidity',
    title: '🔄 流动性迁移',
    desc: '需要迁移到新的流动性池时如何处理？',
    choices: [
      { emoji: '📢', text: '提前公告详细计划', hint: '透明', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🔒', text: '新池先锁定再迁移', hint: '安全', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '💥', text: '突然迁移', hint: '惊吓', isCorrect: false, effect: { wealthPct: -0.60 } },
      { emoji: '🏃', text: '迁移时抽走资金', hint: 'Rug', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '透明的迁移计划和先锁定新池能保护投资者利益。'
  },
  {
    id: 'launch_040',
    category: 'liquidity',
    title: '📈 流动性激励机制',
    desc: '如何激励用户提供流动性？',
    choices: [
      { emoji: '🎁', text: 'LP挖矿奖励', hint: '持续激励', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '💰', text: '交易费分成', hint: '收益共享', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🤷', text: '不提供激励', hint: '无吸引力', isCorrect: false, effect: { wealthPct: -0.40 } },
      { emoji: '🎭', text: '虚假承诺奖励', hint: '欺骗', isCorrect: false, effect: { wealthPct: -0.80 } }
    ],
    explanation: '合理的激励机制能吸引和留住流动性提供者。'
  },
  {
    id: 'launch_041',
    category: 'liquidity',
    title: '🔥 流动性部分退出',
    desc: '项目需要资金，是否退出部分流动性？',
    choices: [
      { emoji: '📊', text: '小比例有序退出', hint: '可控', isCorrect: true, effect: { wealthPct: 0.20 } },
      { emoji: '🗳️', text: '社区投票决定', hint: '民主', isCorrect: true, effect: { wealthPct: 0.30 } },
      { emoji: '💥', text: '大额退出', hint: '砸盘', isCorrect: false, effect: { wealthPct: -0.70 } },
      { emoji: '🤐', text: '偷偷退出', hint: '欺骗', isCorrect: false, effect: { wealthPct: -0.90 } }
    ],
    explanation: '有序小比例退出并经过社区同意能减少市场冲击。'
  },
  {
    id: 'launch_042',
    category: 'liquidity',
    title: '🌊 流动性深度维护',
    desc: '如何维护足够的流动性深度？',
    choices: [
      { emoji: '📈', text: '定期补充流动性', hint: '主动维护', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🎯', text: '设定深度目标', hint: '量化管理', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '🤷', text: '不主动维护', hint: '被动', isCorrect: false, effect: { wealthPct: -0.40 } },
      { emoji: '🏃', text: '深度不足时跑路', hint: 'Rug', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '主动维护流动性深度能确保良好的交易体验。'
  },
  {
    id: 'launch_043',
    category: 'liquidity',
    title: '💧 多DEX流动性',
    desc: '是否在多个DEX添加流动性？',
    choices: [
      { emoji: '📊', text: '主DEX深度，次DEX适中', hint: '主次分明', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🎯', text: '专注头部DEX', hint: '深度优先', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '📉', text: '多DEX浅流动性', hint: '分散无力', isCorrect: false, effect: { wealthPct: -0.50 } },
      { emoji: '🚫', text: '只在不知名DEX', hint: '局限', isCorrect: false, effect: { wealthPct: -0.40 } }
    ],
    explanation: '专注头部DEX或主次分明能确保流动性质量。'
  },
  {
    id: 'launch_044',
    category: 'liquidity',
    title: '🔍 流动性健康度',
    desc: '如何监控流动性健康度？',
    choices: [
      { emoji: '📊', text: '实时监控并预警', hint: '专业', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🔔', text: '定期检查报告', hint: '规范', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '🤷', text: '不监控', hint: '盲目', isCorrect: false, effect: { wealthPct: -0.50 } },
      { emoji: '🤐', text: '隐瞒流动性问题', hint: '欺骗', isCorrect: false, effect: { wealthPct: -0.80 } }
    ],
    explanation: '持续监控能及时发现问题，保护投资者利益。'
  },
  {
    id: 'launch_045',
    category: 'liquidity',
    title: '📉 流动性危机应对',
    desc: '遭遇大额撤池，流动性骤降怎么办？',
    choices: [
      { emoji: '💰', text: '紧急补充流动性', hint: '护盘', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '📢', text: '透明沟通说明情况', hint: '危机公关', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '🤷', text: '无作为', hint: '放任', isCorrect: false, effect: { wealthPct: -0.60 } },
      { emoji: '🏃', text: '趁机撤走剩余流动性', hint: 'Rug', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '紧急护盘和透明沟通能稳定市场信心，度过危机。'
  },
  {
    id: 'launch_046',
    category: 'liquidity',
    title: '🔒 流动性解锁预警',
    desc: '锁定的流动性即将解锁，如何处理？',
    choices: [
      { emoji: '📢', text: '提前公告续锁计划', hint: '透明', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🔐', text: '自动续锁', hint: '程序化', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '🤷', text: '不做任何说明', hint: '引发恐慌', isCorrect: false, effect: { wealthPct: -0.50 } },
      { emoji: '💥', text: '解锁后立刻撤池', hint: 'Rug', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '提前沟通续锁计划能消除社区担忧，维护信心。'
  },
  {
    id: 'launch_047',
    category: 'liquidity',
    title: '💎 稳定币流动性',
    desc: '主要与哪种稳定币配对？',
    choices: [
      { emoji: '🔵', text: 'USDC/USDT双池', hint: '分散风险', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '💵', text: '主流稳定币USDT', hint: '流动性最好', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '📉', text: '小稳定币', hint: '风险高', isCorrect: false, effect: { wealthPct: -0.50 } },
      { emoji: '🎰', text: '算法稳定币', hint: '高风险', isCorrect: false, effect: { wealthPct: -0.70 } }
    ],
    explanation: '与主流稳定币配对能降低脱锚风险，确保稳定性。'
  },
  {
    id: 'launch_048',
    category: 'liquidity',
    title: '📊 流动性分析工具',
    desc: '是否提供流动性分析工具给社区？',
    choices: [
      { emoji: '✅', text: '提供实时分析面板', hint: '透明', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '📈', text: '定期发布流动性报告', hint: '规范', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '❌', text: '不提供工具', hint: '不透明', isCorrect: false, effect: { wealthPct: -0.30 } },
      { emoji: '🤥', text: '提供虚假数据', hint: '欺骗', isCorrect: false, effect: { wealthPct: -0.90 } }
    ],
    explanation: '提供分析工具能增强透明度和社区参与度。'
  },
  {
    id: 'launch_049',
    category: 'liquidity',
    title: '🎯 流动性目标管理',
    desc: '如何设定和管理流动性目标？',
    choices: [
      { emoji: '📊', text: '与市值挂钩的目标', hint: '动态管理', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '💰', text: '固定金额目标', hint: '简单明确', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '🤷', text: '无明确目标', hint: '盲目', isCorrect: false, effect: { wealthPct: -0.40 } },
      { emoji: '🎭', text: '虚假目标误导', hint: '欺骗', isCorrect: false, effect: { wealthPct: -0.80 } }
    ],
    explanation: '明确且合理的流动性目标能指导项目健康发展。'
  },
  {
    id: 'launch_050',
    category: 'liquidity',
    title: '🔥 热度顶峰LP操作',
    desc: '热度顶峰时是否卖出一部分LP？',
    choices: [
      { emoji: '💰', text: '小比例卖出锁定利润', hint: '合理获利', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🔒', text: '继续持有不动', hint: '长期承诺', isCorrect: true, effect: { wealthPct: 0.30 } },
      { emoji: '💥', text: '大额卖出砸盘', hint: '自私', isCorrect: false, effect: { wealthPct: -0.80 } },
      { emoji: '🏃', text: '全部撤池跑路', hint: 'Rug', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '小比例锁定利润是合理的，但大额砸盘会伤害社区。'
  },
  {
    id: 'launch_051',
    category: 'liquidity',
    title: '📈 流动性增长策略',
    desc: '如何持续增长流动性？',
    choices: [
      { emoji: '🎁', text: '增加LP奖励', hint: '激励增长', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '📢', text: '宣传流动性收益', hint: '吸引LP', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '🤷', text: '不主动增长', hint: '被动', isCorrect: false, effect: { wealthPct: -0.30 } },
      { emoji: '🎰', text: '虚假收益承诺', hint: '庞氏', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '合理的激励和宣传能持续吸引流动性提供者。'
  },
  {
    id: 'launch_052',
    category: 'liquidity',
    title: '🔄 流动性再平衡',
    desc: '池子比例失衡时如何处理？',
    choices: [
      { emoji: '⚖️', text: '主动再平衡', hint: '维护稳定', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '📊', text: '设定自动再平衡', hint: '程序化', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '🤷', text: '不管不顾', hint: '放任', isCorrect: false, effect: { wealthPct: -0.40 } },
      { emoji: '🎭', text: '故意失衡操纵价格', hint: '作恶', isCorrect: false, effect: { wealthPct: -0.90 } }
    ],
    explanation: '主动维护池子平衡能确保价格发现和交易体验。'
  },
  {
    id: 'launch_053',
    category: 'liquidity',
    title: '💧 流动性保险',
    desc: '是否为流动性提供保险？',
    choices: [
      { emoji: '🛡️', text: '与保险协议合作', hint: '增加安全', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '💰', text: '设立保险基金', hint: '自筹保障', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '❌', text: '不提供保险', hint: '风险自担', isCorrect: false, effect: { wealthPct: -0.30 } },
      { emoji: '🤥', text: '虚假保险承诺', hint: '欺骗', isCorrect: false, effect: { wealthPct: -0.80 } }
    ],
    explanation: '提供保险能降低LP的无常损失担忧，吸引更多流动性。'
  },
  {
    id: 'launch_054',
    category: 'liquidity',
    title: '📉 无常损失补偿',
    desc: '是否补偿LP的无常损失？',
    choices: [
      { emoji: '✅', text: '提供IL保护', hint: '吸引LP', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🎁', text: '额外奖励补偿', hint: '部分补偿', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '❌', text: '不补偿IL', hint: '标准AMM', isCorrect: false, effect: { wealthPct: -0.20 } },
      { emoji: '🤥', text: '承诺补偿但不兑现', hint: '欺骗', isCorrect: false, effect: { wealthPct: -0.90 } }
    ],
    explanation: 'IL保护能降低LP风险，吸引更多长期流动性。'
  },
  {
    id: 'launch_055',
    category: 'liquidity',
    title: '🌉 跨链流动性桥接',
    desc: '如何实现跨链流动性？',
    choices: [
      { emoji: '🔗', text: '使用可信跨链桥', hint: '安全', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🏛️', text: '官方跨链解决方案', hint: '官方背书', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '🎰', text: '使用不知名桥', hint: '高风险', isCorrect: false, effect: { wealthPct: -0.60 } },
      { emoji: '🚫', text: '不支持跨链', hint: '局限', isCorrect: false, effect: { wealthPct: -0.30 } }
    ],
    explanation: '使用可信跨链方案能安全地扩展多链流动性。'
  },
  {
    id: 'launch_056',
    category: 'liquidity',
    title: '📊 流动性效率优化',
    desc: '如何优化流动性使用效率？',
    choices: [
      { emoji: '📈', text: '集中流动性方案', hint: '高效', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🎯', text: '动态费率调整', hint: '灵活', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '🤷', text: '不优化', hint: '低效', isCorrect: false, effect: { wealthPct: -0.30 } },
      { emoji: '🎭', text: '虚假优化宣传', hint: '欺骗', isCorrect: false, effect: { wealthPct: -0.70 } }
    ],
    explanation: '流动性效率优化能在同样资金下提供更好的交易体验。'
  },
  {
    id: 'launch_057',
    category: 'liquidity',
    title: '💰 流动性资金成本',
    desc: '如何降低维护流动性的成本？',
    choices: [
      { emoji: '🎁', text: '社区募资补充流动性', hint: '共担成本', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '📈', text: '用税收收入补充', hint: '可持续', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '💸', text: 'Dev全额承担', hint: '负担重', isCorrect: false, effect: { wealthPct: -0.20 } },
      { emoji: '🤷', text: '不维护流动性', hint: '放弃', isCorrect: false, effect: { wealthPct: -0.80 } }
    ],
    explanation: '社区共担或用税收补充能可持续地维护流动性。'
  },
  {
    id: 'launch_058',
    category: 'liquidity',
    title: '🔍 流动性审计',
    desc: '是否对流动性进行审计？',
    choices: [
      { emoji: '✅', text: '定期第三方审计', hint: '专业', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🔗', text: '链上透明可验证', hint: '技术透明', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '❌', text: '不审计', hint: '不透明', isCorrect: false, effect: { wealthPct: -0.50 } },
      { emoji: '🤥', text: '伪造审计', hint: '欺骗', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '定期审计或链上透明能建立信任，发现潜在问题。'
  },
  {
    id: 'launch_059',
    category: 'liquidity',
    title: '📈 流动性与市值比',
    desc: '如何维持合理的流动性/市值比例？',
    choices: [
      { emoji: '⚖️', text: '维持10-20%比例', hint: '健康水平', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '📊', text: '动态调整比例', hint: '灵活', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '📉', text: '比例过低(<5%)', hint: '风险高', isCorrect: false, effect: { wealthPct: -0.60 } },
      { emoji: '💸', text: '比例过高(>50%)', hint: '资金效率低', isCorrect: false, effect: { wealthPct: -0.30 } }
    ],
    explanation: '合理的流动性比例能平衡安全性和资金效率。'
  },
  {
    id: 'launch_060',
    category: 'liquidity',
    title: '🏛️ 流动性治理',
    desc: '流动性管理决策如何制定？',
    choices: [
      { emoji: '🗳️', text: 'DAO治理决策', hint: '去中心化', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '👥', text: '多签委员会管理', hint: '集体决策', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '👤', text: 'Dev单独决定', hint: '中心化', isCorrect: false, effect: { wealthPct: -0.60 } },
      { emoji: '🤐', text: '不透明决策', hint: '黑箱', isCorrect: false, effect: { wealthPct: -0.70 } }
    ],
    explanation: '去中心化治理能增强信任，防止中心化风险。'
  },

  // ========== 社区建设类 (061-090) ==========
  {
    id: 'launch_061',
    category: 'community',
    title: '👥 社区增长策略',
    desc: '选择社区增长的主要方式？',
    choices: [
      { emoji: '🌱', text: '有机增长，真实互动', hint: '质量优先', isCorrect: true, effect: { wealthPct: 0.80 } },
      { emoji: '⚖️', text: '有机为主+适度推广', hint: '平衡', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🤖', text: '大量购买水军', hint: '虚假繁荣', isCorrect: false, effect: { wealthPct: -0.70 } },
      { emoji: '🎰', text: '刷量造假数据', hint: '欺骗', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '有机增长虽然慢但质量高，能建立忠诚的社区。'
  },
  {
    id: 'launch_062',
    category: 'community',
    title: '🗣️ 社区AMA频率',
    desc: '社区AMA（问答活动）应该多久举办一次？',
    choices: [
      { emoji: '📅', text: '每周固定AMA', hint: '高频互动', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '📆', text: '每月2-3次', hint: '适中', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '📉', text: '每月一次', hint: '低频', isCorrect: false, effect: { wealthPct: -0.30 } },
      { emoji: '🚫', text: '几乎不举办', hint: '疏远', isCorrect: false, effect: { wealthPct: -0.70 } }
    ],
    explanation: '定期AMA能增强社区黏性，及时回应关切。'
  },
  {
    id: 'launch_063',
    category: 'community',
    title: '🎯 社区治理DAO',
    desc: '何时启动DAO治理？',
    choices: [
      { emoji: '⏰', text: '早期就启动DAO', hint: '民主基础', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '📈', text: '达到一定规模后', hint: '成熟时机', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '⏳', text: '延迟很长时间', hint: '中心化', isCorrect: false, effect: { wealthPct: -0.50 } },
      { emoji: '🚫', text: '永远不DAO', hint: '独裁', isCorrect: false, effect: { wealthPct: -0.90 } }
    ],
    explanation: '早期启动DAO能建立去中心化基础，增强社区参与感。'
  },
  {
    id: 'launch_064',
    category: 'community',
    title: '🌍 多语言社区',
    desc: '是否建立多语言社区？',
    choices: [
      { emoji: '🌐', text: '主要语言全覆盖', hint: '全球化', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '📍', text: '重点市场本地化', hint: '精准', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🇬🇧', text: '只有英语', hint: '局限', isCorrect: false, effect: { wealthPct: -0.40 } },
      { emoji: '🚫', text: '不扩展语言', hint: '封闭', isCorrect: false, effect: { wealthPct: -0.60 } }
    ],
    explanation: '多语言社区能吸引全球用户，扩大项目影响力。'
  },
  {
    id: 'launch_065',
    category: 'community',
    title: '🎁 社区活动奖品',
    desc: '社区活动奖品设置原则？',
    choices: [
      { emoji: '✅', text: '真实发放承诺奖品', hint: '诚信', isCorrect: true, effect: { wealthPct: 0.80 } },
      { emoji: '🎨', text: '创意奖品+代币', hint: '多样化', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '💨', text: '承诺但不发放', hint: '空气奖品', isCorrect: false, effect: { wealthPct: -0.90 } },
      { emoji: '🎭', text: '虚假中奖信息', hint: '欺骗', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '真实发放奖品能建立诚信形象，增强社区信任。'
  },
  {
    id: 'launch_066',
    category: 'community',
    title: '👂 社区反馈处理',
    desc: '如何处理社区反馈和建议？',
    choices: [
      { emoji: '✅', text: '认真倾听并改进', hint: '用户至上', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '📊', text: '定期收集整理', hint: '系统处理', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🙉', text: '无视反馈', hint: '傲慢', isCorrect: false, effect: { wealthPct: -0.70 } },
      { emoji: '⚔️', text: '攻击提意见者', hint: '敌对', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '认真倾听社区反馈能增强归属感和项目迭代速度。'
  },
  {
    id: 'launch_067',
    category: 'community',
    title: '🛡️ 社区清粉',
    desc: '发现社区有水军和假账号怎么办？',
    choices: [
      { emoji: '🧹', text: '清理假账号保真实', hint: '净化社区', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🔍', text: '定期审查清理', hint: '维护质量', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '🙈', text: '视而不见', hint: '虚假繁荣', isCorrect: false, effect: { wealthPct: -0.50 } },
      { emoji: '🤖', text: '继续购买更多水军', hint: '自欺欺人', isCorrect: false, effect: { wealthPct: -0.80 } }
    ],
    explanation: '清理假账号虽然数字下降但能建立真实的社区基础。'
  },
  {
    id: 'launch_068',
    category: 'community',
    title: '💎 VIP会员权益',
    desc: '社区VIP会员给什么权益？',
    choices: [
      { emoji: '✅', text: '真实有价值的权益', hint: '实质权益', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '🎁', text: '空投+专属活动', hint: '物质激励', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '💨', text: '空头承诺无实质', hint: '虚假VIP', isCorrect: false, effect: { wealthPct: -0.70 } },
      { emoji: '🎭', text: '付费VIP但无权益', hint: '诈骗', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '真实的VIP权益能激励用户长期持有和参与。'
  },
  {
    id: 'launch_069',
    category: 'community',
    title: '📢 社区反噬应对',
    desc: '社区出现负面情绪的早期迹象，如何应对？',
    choices: [
      { emoji: '💬', text: '主动沟通解释', hint: '危机公关', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🔧', text: '快速改进问题', hint: '行动证明', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '🙉', text: '无视负面声音', hint: '鸵鸟', isCorrect: false, effect: { wealthPct: -0.60 } },
      { emoji: '⚔️', text: '封禁负面用户', hint: '压制', isCorrect: false, effect: { wealthPct: -0.90 } }
    ],
    explanation: '主动沟通和行动能快速化解负面情绪，防止恶化。'
  },
  {
    id: 'launch_070',
    category: 'community',
    title: '🤝 社区Fork风险',
    desc: '社区有人威胁要Fork项目怎么办？',
    choices: [
      { emoji: '🛡️', text: '预防性改进治理', hint: '主动应对', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '💬', text: '与威胁者沟通', hint: '化解分歧', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '😤', text: '公开对抗嘲讽', hint: '激化矛盾', isCorrect: false, effect: { wealthPct: -0.70 } },
      { emoji: '🙈', text: '无视威胁', hint: '被动', isCorrect: false, effect: { wealthPct: -0.50 } }
    ],
    explanation: '主动改进和沟通能化解Fork风险，维护社区统一。'
  },
  {
    id: 'launch_071',
    category: 'community',
    title: '📈 社区规模策略',
    desc: '社区应该快速扩张还是小步培养？',
    choices: [
      { emoji: '🌱', text: '小步培养高质量', hint: '慢即是快', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '⚖️', text: '质与量平衡发展', hint: '稳健', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🚀', text: '快速刷量扩张', hint: '虚假繁荣', isCorrect: false, effect: { wealthPct: -0.70 } },
      { emoji: '🎰', text: '购买僵尸粉充数', hint: '自欺欺人', isCorrect: false, effect: { wealthPct: -0.90 } }
    ],
    explanation: '小步培养能建立高质量社区，长期价值更大。'
  },
  {
    id: 'launch_072',
    category: 'community',
    title: '🎨 社区内容策略',
    desc: '社区应该生产什么类型的内容？',
    choices: [
      { emoji: '📚', text: '教育性深度内容', hint: '价值输出', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '🎭', text: '娱乐+教育结合', hint: '多样化', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '📢', text: '只喊单无营养', hint: '低质量', isCorrect: false, effect: { wealthPct: -0.60 } },
      { emoji: '🤖', text: '转发抄袭内容', hint: '无原创', isCorrect: false, effect: { wealthPct: -0.50 } }
    ],
    explanation: '高质量教育内容能吸引真正的价值投资者。'
  },
  {
    id: 'launch_073',
    category: 'community',
    title: '👨‍💼 社区管理员',
    desc: '如何选择和管理社区管理员？',
    choices: [
      { emoji: '✅', text: '选拔忠诚活跃成员', hint: '内部培养', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '💰', text: '有偿聘请专业管理', hint: '专业化', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '👤', text: 'Dev自己管理', hint: '精力有限', isCorrect: false, effect: { wealthPct: -0.30 } },
      { emoji: '🤷', text: '不管理放任自流', hint: '混乱', isCorrect: false, effect: { wealthPct: -0.80 } }
    ],
    explanation: '专业的社区管理能维持良好氛围，促进健康发展。'
  },
  {
    id: 'launch_074',
    category: 'community',
    title: '🎮 社区游戏化',
    desc: '是否引入游戏化机制激励社区？',
    choices: [
      { emoji: '✅', text: '积分+等级+奖励', hint: '激励体系', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🏆', text: '贡献排行榜', hint: '荣誉激励', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '❌', text: '不游戏化', hint: '单调', isCorrect: false, effect: { wealthPct: -0.30 } },
      { emoji: '🎰', text: '赌博式游戏', hint: '高风险', isCorrect: false, effect: { wealthPct: -0.70 } }
    ],
    explanation: '合理的游戏化能增强参与度和社区黏性。'
  },
  {
    id: 'launch_075',
    category: 'community',
    title: '📱 社区平台选择',
    desc: '主要在哪些平台建立社区？',
    choices: [
      { emoji: '🌐', text: 'Discord+TG+X全布局', hint: '全覆盖', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '🎯', text: '重点平台深耕', hint: '精准', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '📱', text: '单一平台', hint: '局限', isCorrect: false, effect: { wealthPct: -0.40 } },
      { emoji: '🚫', text: '不建官方社区', hint: '失控', isCorrect: false, effect: { wealthPct: -0.80 } }
    ],
    explanation: '多平台布局能覆盖不同用户群体，扩大影响力。'
  },
  {
    id: 'launch_076',
    category: 'community',
    title: '🎁 社区空投策略',
    desc: '如何设计社区空投活动？',
    choices: [
      { emoji: '✅', text: '按贡献度分层空投', hint: '公平激励', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '🎲', text: '随机抽奖', hint: '普惠', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '💨', text: '承诺空投不发放', hint: '欺骗', isCorrect: false, effect: { wealthPct: -0.90 } },
      { emoji: '🤖', text: '批量刷号薅羊毛', hint: '被薅', isCorrect: false, effect: { wealthPct: -0.70 } }
    ],
    explanation: '按贡献度空投能激励真实贡献，防止羊毛党。'
  },
  {
    id: 'launch_077',
    category: 'community',
    title: '🛡️ 社区防骗',
    desc: '如何保护社区成员不被诈骗？',
    choices: [
      { emoji: '⚠️', text: '定期安全提醒', hint: '教育', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🔒', text: '官方验证机制', hint: '防假冒', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🤷', text: '不主动提醒', hint: '不负责', isCorrect: false, effect: { wealthPct: -0.50 } },
      { emoji: '🎭', text: '假装官方诈骗', hint: '作恶', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '主动防骗教育能保护社区成员，建立责任感。'
  },
  {
    id: 'launch_078',
    category: 'community',
    title: '📊 社区数据分析',
    desc: '如何分析和使用社区数据？',
    choices: [
      { emoji: '📈', text: '定期数据分析报告', hint: '数据驱动', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🎯', text: '优化策略', hint: '改进', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '🤷', text: '不分析数据', hint: '盲目', isCorrect: false, effect: { wealthPct: -0.40 } },
      { emoji: '🤥', text: '伪造数据自欺欺人', hint: '虚假', isCorrect: false, effect: { wealthPct: -0.80 } }
    ],
    explanation: '数据分析能指导社区策略优化，提升效率。'
  },
  {
    id: 'launch_079',
    category: 'community',
    title: '🤝 社区合作',
    desc: '是否与其他项目社区合作？',
    choices: [
      { emoji: '✅', text: '优质项目合作', hint: '互利共赢', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🎯', text: '精准选择伙伴', hint: '质量优先', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🚫', text: '不合作封闭', hint: '孤立', isCorrect: false, effect: { wealthPct: -0.40 } },
      { emoji: '🎰', text: '随意合作项目', hint: '质量参差', isCorrect: false, effect: { wealthPct: -0.60 } }
    ],
    explanation: '优质合作能互利共赢，扩大双方影响力。'
  },
  {
    id: 'launch_080',
    category: 'community',
    title: '📅 社区节奏控制',
    desc: '如何控制社区活动节奏？',
    choices: [
      { emoji: '⏰', text: '稳定持续输出', hint: '可持续', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '📊', text: '根据市场调整', hint: '灵活', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '💥', text: '一开始就全力', hint: '不可持续', isCorrect: false, effect: { wealthPct: -0.50 } },
      { emoji: '📉', text: '长期沉寂', hint: '冷淡', isCorrect: false, effect: { wealthPct: -0.70 } }
    ],
    explanation: '稳定的节奏能建立预期，避免 burnout。'
  },
  {
    id: 'launch_081',
    category: 'community',
    title: '🎓 社区教育',
    desc: '是否投入资源教育社区？',
    choices: [
      { emoji: '📚', text: '定期教育内容', hint: '长期投入', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '🎯', text: '新手引导体系', hint: '用户体验', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🤷', text: '不教育让用户自生自灭', hint: '冷漠', isCorrect: false, effect: { wealthPct: -0.60 } },
      { emoji: '🎭', text: '错误信息误导', hint: '有害', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '社区教育能降低认知门槛，培养长期支持者。'
  },
  {
    id: 'launch_082',
    category: 'community',
    title: '🏆 社区贡献认可',
    desc: '如何认可和奖励社区贡献者？',
    choices: [
      { emoji: '🎁', text: '物质+精神双重奖励', hint: '全面认可', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '👑', text: '荣誉称号体系', hint: '精神激励', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🙏', text: '口头感谢', hint: '单薄', isCorrect: false, effect: { wealthPct: -0.30 } },
      { emoji: '🤐', text: '不认可贡献', hint: '寒心', isCorrect: false, effect: { wealthPct: -0.80 } }
    ],
    explanation: '全面认可贡献能激励更多人参与建设。'
  },
  {
    id: 'launch_083',
    category: 'community',
    title: '💬 社区沟通风格',
    desc: '项目方在社区应该什么风格？',
    choices: [
      { emoji: '🤝', text: '专业友善谦逊', hint: '职业', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '😄', text: '幽默接地气', hint: '亲和', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '😤', text: '傲慢高高在上', hint: '讨厌', isCorrect: false, effect: { wealthPct: -0.80 } },
      { emoji: '🤐', text: '不沟通神秘', hint: '距离感', isCorrect: false, effect: { wealthPct: -0.60 } }
    ],
    explanation: '专业友善的风格能建立良好关系，增强信任。'
  },
  {
    id: 'launch_084',
    category: 'community',
    title: '🆘 社区危机处理',
    desc: '社区发生重大负面事件如何处理？',
    choices: [
      { emoji: '📢', text: '第一时间透明回应', hint: '危机公关', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🔧', text: '快速解决问题', hint: '行动', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '🙈', text: '鸵鸟不回应', hint: '恶化', isCorrect: false, effect: { wealthPct: -0.80 } },
      { emoji: '🔥', text: '甩锅推卸责任', hint: '失责', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '快速透明回应能控制危机，展现责任感。'
  },
  {
    id: 'launch_085',
    category: 'community',
    title: '🎯 社区分层运营',
    desc: '是否对社区成员分层运营？',
    choices: [
      { emoji: '✅', text: '按活跃度分层', hint: '精准运营', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '💎', text: '核心贡献者特别维护', hint: '重点', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🤷', text: '一视同仁', hint: '粗放', isCorrect: false, effect: { wealthPct: -0.30 } },
      { emoji: '🎭', text: '只服务大户', hint: '势利', isCorrect: false, effect: { wealthPct: -0.70 } }
    ],
    explanation: '分层运营能提高效率，更好地服务核心成员。'
  },
  {
    id: 'launch_086',
    category: 'community',
    title: '📣 社区公告策略',
    desc: '重要公告如何发布？',
    choices: [
      { emoji: '📋', text: '正式公告+详细说明', hint: '专业', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '⏰', text: '提前预告', hint: '预期管理', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '💬', text: '随口一说', hint: '不正式', isCorrect: false, effect: { wealthPct: -0.50 } },
      { emoji: '🤥', text: '虚假公告', hint: '欺骗', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '正式的公告流程能体现专业性，避免误解。'
  },
  {
    id: 'launch_087',
    category: 'community',
    title: '🎨 社区文化建设',
    desc: '如何建设独特的社区文化？',
    choices: [
      { emoji: '🎭', text: '原创Meme和文化', hint: '独特', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '📚', text: '价值观和行为准则', hint: '规范', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '📋', text: '模仿其他社区', hint: '无特色', isCorrect: false, effect: { wealthPct: -0.40 } },
      { emoji: '🤷', text: '不建设文化', hint: '空洞', isCorrect: false, effect: { wealthPct: -0.60 } }
    ],
    explanation: '独特的社区文化能增强认同感和归属感。'
  },
  {
    id: 'launch_088',
    category: 'community',
    title: '👥 社区大使计划',
    desc: '是否设立社区大使？',
    choices: [
      { emoji: '✅', text: '选拔真实大使', hint: '去中心化', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '🌍', text: '地区大使体系', hint: '全球化', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '❌', text: '不设大使', hint: '中心化', isCorrect: false, effect: { wealthPct: -0.40 } },
      { emoji: '💰', text: '付费买大使', hint: '虚假', isCorrect: false, effect: { wealthPct: -0.70 } }
    ],
    explanation: '真实的大使能扩展影响力，建立去中心化网络。'
  },
  {
    id: 'launch_089',
    category: 'community',
    title: '🔮 社区长期愿景',
    desc: '如何传达社区长期愿景？',
    choices: [
      { emoji: '🗺️', text: '清晰的路线图', hint: '可执行', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '🎨', text: '愿景故事', hint: '感召', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🤷', text: '没有愿景', hint: '短视', isCorrect: false, effect: { wealthPct: -0.70 } },
      { emoji: '🤥', text: '虚假愿景', hint: '欺骗', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '清晰的愿景能吸引长期支持者，指引方向。'
  },
  {
    id: 'launch_090',
    category: 'community',
    title: '📊 社区满意度',
    desc: '如何了解和提升社区满意度？',
    choices: [
      { emoji: '📋', text: '定期满意度调研', hint: '数据驱动', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '💬', text: '主动收集反馈', hint: '倾听', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🤷', text: '不关心满意度', hint: '冷漠', isCorrect: false, effect: { wealthPct: -0.70 } },
      { emoji: '🤥', text: '伪造满意度数据', hint: '欺骗', isCorrect: false, effect: { wealthPct: -0.90 } }
    ],
    explanation: '关注满意度能发现问题，持续提升社区体验。'
  },

  // ========== 营销选择类 (091-120) ==========
  {
    id: 'launch_091',
    category: 'marketing',
    title: '📢 KOL合作选择',
    desc: '选择什么样的KOL合作？',
    choices: [
      { emoji: '✅', text: '真实活跃的小KOL', hint: '真实影响', isCorrect: true, effect: { wealthPct: 0.80 } },
      { emoji: '💎', text: '行业专家型KOL', hint: '专业背书', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '💰', text: '付费大V纯广告', hint: '效果差', isCorrect: false, effect: { wealthPct: -0.50 } },
      { emoji: '🤖', text: '机器人僵尸粉KOL', hint: '浪费钱', isCorrect: false, effect: { wealthPct: -0.80 } }
    ],
    explanation: '真实活跃的KOL虽然粉丝少但转化率高，效果好。'
  },
  {
    id: 'launch_092',
    category: 'marketing',
    title: '💰 营销预算控制',
    desc: '如何控制营销预算？',
    choices: [
      { emoji: '✅', text: '严格按计划执行', hint: '纪律性', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '📊', text: 'ROI导向调整', hint: '效果优先', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '💸', text: '超支无度', hint: '浪费', isCorrect: false, effect: { wealthPct: -0.70 } },
      { emoji: '🤑', text: '营销资金进自己口袋', hint: '贪污', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '严格控制预算能确保资金有效使用，避免浪费。'
  },
  {
    id: 'launch_093',
    category: 'marketing',
    title: '🎯 营销策略选择',
    desc: '选择长期故事还是短期炒作？',
    choices: [
      { emoji: '📚', text: '长期价值故事', hint: '可持续', isCorrect: true, effect: { wealthPct: 1.00 } },
      { emoji: '⚖️', text: '故事+热点结合', hint: '平衡', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🚀', text: '纯短期炒作', hint: '不可持续', isCorrect: false, effect: { wealthPct: -0.60 } },
      { emoji: '💨', text: '无策略乱来', hint: '无效', isCorrect: false, effect: { wealthPct: -0.80 } }
    ],
    explanation: '长期故事能吸引价值投资者，建立持久品牌。'
  },
  {
    id: 'launch_094',
    category: 'marketing',
    title: '🌐 跨链营销',
    desc: '营销应该跨链还是专注单链？',
    choices: [
      { emoji: '🎯', text: '单链深耕建立优势', hint: '专注', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '⚖️', text: '主链为主多链辅助', hint: '平衡', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🌊', text: '盲目多链铺开', hint: '分散', isCorrect: false, effect: { wealthPct: -0.60 } },
      { emoji: '🚫', text: '不营销', hint: '放弃', isCorrect: false, effect: { wealthPct: -0.80 } }
    ],
    explanation: '单链深耕能建立坚实基础，避免资源分散。'
  },
  {
    id: 'launch_095',
    category: 'marketing',
    title: '🔥 热点绑定策略',
    desc: '营销是否应该绑定热点？',
    choices: [
      { emoji: '🎨', text: '原创热点而非追热', hint: '引领', isCorrect: true, effect: { wealthPct: 0.80 } },
      { emoji: '⚖️', text: '适度结合相关热点', hint: '借势', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🚀', text: '盲目追逐所有热点', hint: '跟风', isCorrect: false, effect: { wealthPct: -0.60 } },
      { emoji: '🙈', text: '完全不关注热点', hint: '脱节', isCorrect: false, effect: { wealthPct: -0.50 } }
    ],
    explanation: '原创或适度结合热点能保持独立性和相关性。'
  },
  {
    id: 'launch_096',
    category: 'marketing',
    title: '📊 营销效果评估',
    desc: '如何评估营销效果？',
    choices: [
      { emoji: '📈', text: '多维度数据分析', hint: '科学', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '💰', text: 'ROI计算', hint: '效果导向', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '👀', text: '只看曝光量', hint: '虚荣指标', isCorrect: false, effect: { wealthPct: -0.50 } },
      { emoji: '🤷', text: '不评估效果', hint: '盲目', isCorrect: false, effect: { wealthPct: -0.70 } }
    ],
    explanation: '科学的评估能优化营销策略，提高资金效率。'
  },
  {
    id: 'launch_097',
    category: 'marketing',
    title: '🎁 营销活动设计',
    desc: '设计什么样的营销活动？',
    choices: [
      { emoji: '🎮', text: '互动参与型', hint: '高参与', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '📚', text: '教育传播型', hint: '价值输出', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🎰', text: '单纯抽奖', hint: '羊毛党', isCorrect: false, effect: { wealthPct: -0.50 } },
      { emoji: '💨', text: '虚假活动不兑现', hint: '欺骗', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '互动和教育型活动能吸引真正的目标用户。'
  },
  {
    id: 'launch_098',
    category: 'marketing',
    title: '⏰ 营销时机选择',
    desc: '什么时候进行大规模营销？',
    choices: [
      { emoji: '📈', text: '产品成熟后推广', hint: '准备好', isCorrect: true, effect: { wealthPct: 0.80 } },
      { emoji: '⚖️', text: '渐进式持续营销', hint: '稳健', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🚀', text: '产品未出就狂推', hint: '过度承诺', isCorrect: false, effect: { wealthPct: -0.70 } },
      { emoji: '📉', text: '市场冷淡时猛推', hint: '时机差', isCorrect: false, effect: { wealthPct: -0.50 } }
    ],
    explanation: '产品准备好后再推广能确保用户体验，提高转化。'
  },
  {
    id: 'launch_099',
    category: 'marketing',
    title: '💬 营销话术',
    desc: '使用什么样的营销话术？',
    choices: [
      { emoji: '✅', text: '真实准确描述', hint: '诚信', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '🎨', text: '有创意但不夸大', hint: '有趣', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🚀', text: '夸大收益承诺', hint: '误导', isCorrect: false, effect: { wealthPct: -0.80 } },
      { emoji: '🤥', text: '虚假宣传', hint: '欺诈', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '真实的营销话术能建立长期信任，避免法律风险。'
  },
  {
    id: 'launch_100',
    category: 'marketing',
    title: '📱 社交媒体运营',
    desc: '如何运营官方社交媒体？',
    choices: [
      { emoji: '⏰', text: '定期高质量更新', hint: '专业', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '💬', text: '积极互动回复', hint: '亲和', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '📉', text: '长期不更新', hint: '荒废', isCorrect: false, effect: { wealthPct: -0.70 } },
      { emoji: '🤖', text: '机器人自动刷量', hint: '虚假', isCorrect: false, effect: { wealthPct: -0.90 } }
    ],
    explanation: '专业的社交媒体运营能建立品牌形象，吸引关注。'
  },
  {
    id: 'launch_101',
    category: 'marketing',
    title: '🎭 品牌定位',
    desc: '项目品牌应该如何定位？',
    choices: [
      { emoji: '💎', text: '专业可信赖', hint: '长期', isCorrect: true, effect: { wealthPct: 0.80 } },
      { emoji: '🎨', text: '独特有记忆点', hint: '差异化', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🚀', text: '只强调高收益', hint: '投机', isCorrect: false, effect: { wealthPct: -0.70 } },
      { emoji: '🤷', text: '没有定位', hint: '模糊', isCorrect: false, effect: { wealthPct: -0.60 } }
    ],
    explanation: '清晰的品牌定位能帮助用户理解和记住项目。'
  },
  {
    id: 'launch_102',
    category: 'marketing',
    title: '📈 上所传闻应对',
    desc: '社区流传即将上大所的消息，如何回应？',
    choices: [
      { emoji: '🤐', text: '不评论传闻', hint: '谨慎', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '⚠️', text: '提醒注意谣言', hint: '负责', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '✅', text: '默认确认传闻', hint: '误导', isCorrect: false, effect: { wealthPct: -0.70 } },
      { emoji: '🤥', text: '故意散布假消息', hint: '操纵', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '不评论或提醒注意能避免误导社区，防止FOMO后失望。'
  },
  {
    id: 'launch_103',
    category: 'marketing',
    title: '🏆 榜单和排名',
    desc: '如何看待和追求榜单排名？',
    choices: [
      { emoji: '✅', text: '专注产品实力', hint: '本质', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '📊', text: '适度关注作为参考', hint: '平衡', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '💰', text: '花钱买排名', hint: '虚荣', isCorrect: false, effect: { wealthPct: -0.70 } },
      { emoji: '🎭', text: '刷量造假排名', hint: '欺骗', isCorrect: false, effect: { wealthPct: -0.90 } }
    ],
    explanation: '产品实力是根基，榜单只是副产品。'
  },
  {
    id: 'launch_104',
    category: 'marketing',
    title: '🎁 空投营销策略',
    desc: '空投作为主要营销手段？',
    choices: [
      { emoji: '⚖️', text: '空投+其他结合', hint: '综合', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🎯', text: '精准空投给目标用户', hint: '精准', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🌊', text: '无差别大空投', hint: '羊毛党', isCorrect: false, effect: { wealthPct: -0.60 } },
      { emoji: '💨', text: '承诺空投不兑现', hint: '欺骗', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '综合营销和精准空投能提高效率，避免被薅。'
  },
  {
    id: 'launch_105',
    category: 'marketing',
    title: '🤝 合作伙伴营销',
    desc: '如何通过合作伙伴营销？',
    choices: [
      { emoji: '✅', text: '优质项目相互背书', hint: '互利共赢', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '🎯', text: '精准选择生态伙伴', hint: '协同', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🎰', text: '随意合作', hint: '品牌受损', isCorrect: false, effect: { wealthPct: -0.60 } },
      { emoji: '💰', text: '付费假合作', hint: '欺骗', isCorrect: false, effect: { wealthPct: -0.90 } }
    ],
    explanation: '优质合作能相互背书，提升双方品牌价值。'
  },
  {
    id: 'launch_106',
    category: 'marketing',
    title: '📰 媒体报道',
    desc: '如何处理媒体报道？',
    choices: [
      { emoji: '✅', text: '主动提供优质内容', hint: '专业', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '📊', text: '配合深度报道', hint: '真实', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '💰', text: '付费买正面报道', hint: '虚荣', isCorrect: false, effect: { wealthPct: -0.50 } },
      { emoji: '🤥', text: '制造假新闻', hint: '欺诈', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '真实的媒体报道能建立公信力，付费报道效果有限。'
  },
  {
    id: 'launch_107',
    category: 'marketing',
    title: '🎓 教育营销',
    desc: '是否通过教育内容进行营销？',
    choices: [
      { emoji: '✅', text: '高质量教育内容', hint: '价值输出', isCorrect: true, effect: { wealthPct: 0.80 } },
      { emoji: '📚', text: '教程+指南', hint: '实用', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '❌', text: '只做硬性广告', hint: '反感', isCorrect: false, effect: { wealthPct: -0.50 } },
      { emoji: '🤥', text: '错误教育误导', hint: '有害', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '教育营销能建立专业形象，吸引高质量用户。'
  },
  {
    id: 'launch_108',
    category: 'marketing',
    title: '📊 竞品分析',
    desc: '如何分析竞争对手进行营销？',
    choices: [
      { emoji: '🔍', text: '学习优点差异化', hint: '借鉴', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '💎', text: '强调自身独特价值', hint: '差异化', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '⚔️', text: '攻击抹黑竞品', hint: '负能量', isCorrect: false, effect: { wealthPct: -0.80 } },
      { emoji: '🙈', text: '不关注竞品', hint: '盲目', isCorrect: false, effect: { wealthPct: -0.40 } }
    ],
    explanation: '差异化竞争是健康的，攻击竞品会带来负面影响。'
  },
  {
    id: 'launch_109',
    category: 'marketing',
    title: '🎁 推荐奖励计划',
    desc: '如何设计推荐奖励计划？',
    choices: [
      { emoji: '✅', text: '合理的分级奖励', hint: '可持续', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '🎯', text: '质量导向的推荐', hint: '精准', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '💰', text: '过高的拉新奖励', hint: '庞氏风险', isCorrect: false, effect: { wealthPct: -0.70 } },
      { emoji: '🤥', text: '虚假推荐奖励', hint: '欺骗', isCorrect: false, effect: { wealthPct: -0.90 } }
    ],
    explanation: '合理的推荐奖励能激励真实推荐，避免庞氏化。'
  },
  {
    id: 'launch_110',
    category: 'marketing',
    title: '📅 营销节奏',
    desc: '如何控制营销节奏？',
    choices: [
      { emoji: '⏰', text: '稳定持续输出', hint: '可持续', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '📊', text: '配合里程碑发布', hint: '节奏感', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '💥', text: '一开始就全力', hint: '不可持续', isCorrect: false, effect: { wealthPct: -0.60 } },
      { emoji: '📉', text: '长期沉寂后突然猛推', hint: '异常', isCorrect: false, effect: { wealthPct: -0.50 } }
    ],
    explanation: '稳定的节奏能建立预期，避免资源耗尽。'
  },
  {
    id: 'launch_111',
    category: 'marketing',
    title: '🎯 目标用户定位',
    desc: '营销目标用户是谁？',
    choices: [
      { emoji: '✅', text: '精准的目标用户群', hint: '精准', isCorrect: true, effect: { wealthPct: 0.80 } },
      { emoji: '📊', text: '分层用户策略', hint: '全面', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🌊', text: '无差别广撒网', hint: '浪费', isCorrect: false, effect: { wealthPct: -0.60 } },
      { emoji: '🤷', text: '不知道目标用户', hint: '盲目', isCorrect: false, effect: { wealthPct: -0.70 } }
    ],
    explanation: '精准定位能提高营销效率，避免资源浪费。'
  },
  {
    id: 'launch_112',
    category: 'marketing',
    title: '💻 技术营销',
    desc: '如何通过技术亮点进行营销？',
    choices: [
      { emoji: '✅', text: '真实技术创新展示', hint: '实力', isCorrect: true, effect: { wealthPct: 0.80 } },
      { emoji: '📚', text: '技术科普教育', hint: '传播', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🤥', text: '夸大技术能力', hint: '误导', isCorrect: false, effect: { wealthPct: -0.80 } },
      { emoji: '🚫', text: '不强调技术', hint: '浪费优势', isCorrect: false, effect: { wealthPct: -0.40 } }
    ],
    explanation: '真实的技术亮点是核心竞争力，应该适当展示。'
  },
  {
    id: 'launch_113',
    category: 'marketing',
    title: '🎨 视觉设计',
    desc: '项目的视觉设计策略？',
    choices: [
      { emoji: '✅', text: '专业统一的设计', hint: '品牌形象', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🎨', text: '独特的视觉风格', hint: '记忆点', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🤷', text: '随意无设计', hint: '不专业', isCorrect: false, effect: { wealthPct: -0.60 } },
      { emoji: '📋', text: '抄袭其他项目', hint: '无特色', isCorrect: false, effect: { wealthPct: -0.70 } }
    ],
    explanation: '专业的视觉设计能提升品牌形象，增加信任感。'
  },
  {
    id: 'launch_114',
    category: 'marketing',
    title: '📊 数据驱动营销',
    desc: '营销决策是否基于数据？',
    choices: [
      { emoji: '✅', text: '数据分析指导', hint: '科学', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '📈', text: 'A/B测试优化', hint: '迭代', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🤷', text: '凭感觉决策', hint: '盲目', isCorrect: false, effect: { wealthPct: -0.60 } },
      { emoji: '🤥', text: '伪造数据', hint: '欺骗', isCorrect: false, effect: { wealthPct: -0.90 } }
    ],
    explanation: '数据驱动能提高营销决策的科学性和效果。'
  },
  {
    id: 'launch_115',
    category: 'marketing',
    title: '🎁 病毒式传播',
    desc: '如何设计病毒式传播机制？',
    choices: [
      { emoji: '✅', text: '有价值的内容', hint: '自然传播', isCorrect: true, effect: { wealthPct: 0.80 } },
      { emoji: '😄', text: '有趣的创意', hint: '分享欲', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '💰', text: '付费强制推广', hint: '效果差', isCorrect: false, effect: { wealthPct: -0.50 } },
      { emoji: '🎰', text: '传销式拉人头', hint: '非法', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '有价值和有趣的内容能自然传播，效果持久。'
  },
  {
    id: 'launch_116',
    category: 'marketing',
    title: '🏛️ 线下活动',
    desc: '是否举办线下营销活动？',
    choices: [
      { emoji: '✅', text: '高质量行业会议', hint: '专业', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🎉', text: '社区见面会', hint: '凝聚力', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '💰', text: '铺张浪费的派对', hint: '虚荣', isCorrect: false, effect: { wealthPct: -0.60 } },
      { emoji: '🚫', text: '完全不线下', hint: '局限', isCorrect: false, effect: { wealthPct: -0.30 } }
    ],
    explanation: '适度的线下活动能增强真实感和凝聚力。'
  },
  {
    id: 'launch_117',
    category: 'marketing',
    title: '📱 短视频营销',
    desc: '是否进行短视频内容营销？',
    choices: [
      { emoji: '✅', text: '优质短视频内容', hint: '传播', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '📚', text: '教育类短视频', hint: '价值', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🎭', text: '低俗炒作视频', hint: '掉价', isCorrect: false, effect: { wealthPct: -0.70 } },
      { emoji: '🤥', text: '虚假剧情视频', hint: '欺骗', isCorrect: false, effect: { wealthPct: -0.90 } }
    ],
    explanation: '优质的短视频能有效传播，触达新用户。'
  },
  {
    id: 'launch_118',
    category: 'marketing',
    title: '🎮 游戏化营销',
    desc: '是否使用游戏化元素营销？',
    choices: [
      { emoji: '✅', text: '有趣的互动游戏', hint: '参与', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '🏆', text: '排行榜竞赛', hint: '激励', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🎰', text: '赌博游戏', hint: '风险', isCorrect: false, effect: { wealthPct: -0.80 } },
      { emoji: '💨', text: '虚假游戏奖励', hint: '欺骗', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '有趣的游戏化元素能提高参与度，但要避免赌博。'
  },
  {
    id: 'launch_119',
    category: 'marketing',
    title: '🔄 营销迭代',
    desc: '如何持续改进营销？',
    choices: [
      { emoji: '✅', text: '持续测试优化', hint: '迭代', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '📊', text: '学习行业最佳实践', hint: '学习', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🤷', text: '一套方法用到底', hint: '僵化', isCorrect: false, effect: { wealthPct: -0.60 } },
      { emoji: '🎰', text: '盲目跟风换策略', hint: '不稳定', isCorrect: false, effect: { wealthPct: -0.50 } }
    ],
    explanation: '持续迭代优化能保持营销效果，适应变化。'
  },
  {
    id: 'launch_120',
    category: 'marketing',
    title: '📊 营销ROI目标',
    desc: '营销ROI应该设定什么目标？',
    choices: [
      { emoji: '✅', text: '合理的ROI目标', hint: '可持续', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '📈', text: '分阶段目标', hint: '渐进', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🚀', text: '不切实际的高目标', hint: '压力', isCorrect: false, effect: { wealthPct: -0.60 } },
      { emoji: '🤷', text: '没有ROI目标', hint: '盲目', isCorrect: false, effect: { wealthPct: -0.70 } }
    ],
    explanation: '合理的ROI目标能指导营销投入，确保可持续性。'
  },

  // ========== 透明度/Dev持仓类 (121-150) ==========
  {
    id: 'launch_121',
    category: 'transparency',
    title: '👤 Dev身份公开',
    desc: '是否公开开发者身份？',
    choices: [
      { emoji: '✅', text: '完全实名公开', hint: '最高信任', isCorrect: true, effect: { wealthPct: 1.00 } },
      { emoji: '👤', text: '部分信息公开', hint: '平衡', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🎭', text: '匿名运营', hint: '信任-1', isCorrect: false, effect: { wealthPct: -0.50 } },
      { emoji: '🤥', text: '伪造身份信息', hint: '欺诈', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '身份公开能建立信任，是项目可信度的重要指标。'
  },
  {
    id: 'launch_122',
    category: 'transparency',
    title: '👛 Dev持仓公开',
    desc: '是否公开Dev团队持仓？',
    choices: [
      { emoji: '✅', text: '完全公开持仓地址', hint: '透明', isCorrect: true, effect: { wealthPct: 0.90 } },
      { emoji: '📊', text: '公布持仓比例', hint: '相对透明', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🤐', text: '不公开持仓', hint: '不透明', isCorrect: false, effect: { wealthPct: -0.60 } },
      { emoji: '🤥', text: '虚假披露持仓', hint: '欺骗', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '持仓公开能防止内幕抛售，建立投资者信心。'
  },
  {
    id: 'launch_123',
    category: 'transparency',
    title: '🔒 Dev多签钱包',
    desc: 'Dev钱包是否使用多签？',
    choices: [
      { emoji: '✅', text: '多签钱包+社区参与', hint: '去中心化', isCorrect: true, effect: { wealthPct: 0.80 } },
      { emoji: '🔐', text: '多签仅团队控制', hint: '安全', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '👤', text: '单签钱包', hint: '单点风险', isCorrect: false, effect: { wealthPct: -0.70 } },
      { emoji: '🤥', text: '声称多签实际单签', hint: '欺骗', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '多签钱包能防止单点故障和内部作恶。'
  },
  {
    id: 'launch_124',
    category: 'transparency',
    title: '📉 Dev卖出透明',
    desc: 'Dev需要卖出部分代币时如何处理？',
    choices: [
      { emoji: '📢', text: '提前公告卖出计划', hint: '透明', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '⏰', text: '定期小比例卖出', hint: '可预期', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '💥', text: '大额突然卖出', hint: '砸盘', isCorrect: false, effect: { wealthPct: -0.80 } },
      { emoji: '🤐', text: '偷偷通过多个地址卖出', hint: '欺骗', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '透明的卖出计划能减少市场恐慌，维护信任。'
  },
  {
    id: 'launch_125',
    category: 'transparency',
    title: '🌍 Dev多钱包分散',
    desc: 'Dev持仓是否分散在多个钱包？',
    choices: [
      { emoji: '✅', text: '适度分散+全部公开', hint: '安全透明', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🔒', text: '大部分在主钱包公开', hint: '集中但透明', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '🎭', text: '分散大量隐藏钱包', hint: '不透明', isCorrect: false, effect: { wealthPct: -0.80 } },
      { emoji: '🤥', text: '隐藏钱包偷偷操作', hint: '作恶', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '适度分散能降低风险，但必须保持透明。'
  },
  {
    id: 'launch_126',
    category: 'transparency',
    title: '📋 开发路线图',
    desc: '如何制定和公布开发路线图？',
    choices: [
      { emoji: '✅', text: '详细可执行的路线图', hint: '可信赖', isCorrect: true, effect: { wealthPct: 0.80 } },
      { emoji: '📊', text: '分阶段里程碑', hint: '清晰', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🤷', text: '模糊的大方向', hint: '不可执行', isCorrect: false, effect: { wealthPct: -0.50 } },
      { emoji: '🤥', text: '画大饼不兑现', hint: '欺骗', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '可执行的路线图能建立信任，指引发展方向。'
  },
  {
    id: 'launch_127',
    category: 'transparency',
    title: '⏰ 开发进度更新',
    desc: '如何更新开发进度？',
    choices: [
      { emoji: '📅', text: '定期周报/月报', hint: '持续沟通', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '✅', text: '里程碑完成公告', hint: '结果导向', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🤐', text: '不更新进度', hint: '失联', isCorrect: false, effect: { wealthPct: -0.70 } },
      { emoji: '🤥', text: '虚假进度报告', hint: '欺骗', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '定期更新能维持社区信心，展现项目活跃度。'
  },
  {
    id: 'launch_128',
    category: 'transparency',
    title: '💰 资金使用情况',
    desc: '如何披露资金使用情况？',
    choices: [
      { emoji: '🔗', text: '链上完全透明', hint: '可验证', isCorrect: true, effect: { wealthPct: 0.90 } },
      { emoji: '📊', text: '定期财务报告', hint: '规范', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🤐', text: '不披露资金使用', hint: '黑箱', isCorrect: false, effect: { wealthPct: -0.80 } },
      { emoji: '🤥', text: '伪造财务报告', hint: '欺诈', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '资金透明能建立信任，防止挪用质疑。'
  },
  {
    id: 'launch_129',
    category: 'transparency',
    title: '📜 智能合约审计',
    desc: '是否进行智能合约审计？',
    choices: [
      { emoji: '✅', text: '顶级审计公司审计', hint: '专业', isCorrect: true, effect: { wealthPct: 0.90 } },
      { emoji: '🔍', text: '多家审计交叉验证', hint: '严谨', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '🤷', text: '不审计', hint: '高风险', isCorrect: false, effect: { wealthPct: -0.80 } },
      { emoji: '🤥', text: '伪造审计报告', hint: '欺骗', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '专业审计能发现安全问题，是项目可信的基础。'
  },
  {
    id: 'launch_130',
    category: 'transparency',
    title: '📊 链上数据透明',
    desc: '如何提供链上数据透明度？',
    choices: [
      { emoji: '✅', text: '实时数据面板', hint: '完全透明', isCorrect: true, effect: { wealthPct: 0.80 } },
      { emoji: '📈', text: '定期数据报告', hint: '规范', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🤐', text: '不提供数据', hint: '不透明', isCorrect: false, effect: { wealthPct: -0.70 } },
      { emoji: '🤥', text: '提供虚假数据', hint: '欺骗', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '链上数据透明能让任何人验证项目状态。'
  },
  {
    id: 'launch_131',
    category: 'transparency',
    title: '🏢 公司/团队信息',
    desc: '是否公开公司或团队信息？',
    choices: [
      { emoji: '✅', text: '完整注册信息公开', hint: '合规', isCorrect: true, effect: { wealthPct: 0.80 } },
      { emoji: '👥', text: '核心团队介绍', hint: '透明', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🎭', text: '匿名无信息', hint: '不可信', isCorrect: false, effect: { wealthPct: -0.70 } },
      { emoji: '🤥', text: '虚假公司信息', hint: '欺诈', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '团队信息公开能建立问责机制，增强可信度。'
  },
  {
    id: 'launch_132',
    category: 'transparency',
    title: '📞 沟通渠道开放',
    desc: '如何保持与社区的沟通？',
    choices: [
      { emoji: '💬', text: '多渠道实时响应', hint: '开放', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '📧', text: '正式沟通渠道', hint: '规范', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🚫', text: '关闭评论不沟通', hint: '封闭', isCorrect: false, effect: { wealthPct: -0.80 } },
      { emoji: '👻', text: '神秘失联', hint: '可疑', isCorrect: false, effect: { wealthPct: -0.90 } }
    ],
    explanation: '开放的沟通渠道能增强信任，及时回应关切。'
  },
  {
    id: 'launch_133',
    category: 'transparency',
    title: '⚠️ 风险披露',
    desc: '如何披露项目风险？',
    choices: [
      { emoji: '✅', text: '完整风险提示', hint: '负责', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '📋', text: '标准风险披露', hint: '合规', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '🚀', text: '只强调收益不提风险', hint: '误导', isCorrect: false, effect: { wealthPct: -0.80 } },
      { emoji: '🤥', text: '隐瞒重大风险', hint: '欺诈', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '完整的风险披露是负责任的表现，也能筛选合适的投资者。'
  },
  {
    id: 'launch_134',
    category: 'transparency',
    title: '🔧 代码开源',
    desc: '项目代码是否开源？',
    choices: [
      { emoji: '✅', text: '完全开源', hint: '透明', isCorrect: true, effect: { wealthPct: 0.80 } },
      { emoji: '📋', text: '部分开源核心代码', hint: '平衡', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🔒', text: '完全闭源', hint: '不透明', isCorrect: false, effect: { wealthPct: -0.60 } },
      { emoji: '🤥', text: '声称开源实际不开放', hint: '欺骗', isCorrect: false, effect: { wealthPct: -0.90 } }
    ],
    explanation: '代码开源能让社区审计，是技术可信度的重要指标。'
  },
  {
    id: 'launch_135',
    category: 'transparency',
    title: '📊 代币分配透明',
    desc: '如何披露代币分配？',
    choices: [
      { emoji: '✅', text: '完整分配表+解锁计划', hint: '完全透明', isCorrect: true, effect: { wealthPct: 0.90 } },
      { emoji: '📋', text: '公布主要分配比例', hint: '相对透明', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🤐', text: '不详细披露', hint: '不透明', isCorrect: false, effect: { wealthPct: -0.70 } },
      { emoji: '🤥', text: '虚假分配信息', hint: '欺诈', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '代币分配透明能防止隐藏的大额抛售风险。'
  },
  {
    id: 'launch_136',
    category: 'transparency',
    title: '⏳ 持仓锁定期',
    desc: '团队持仓锁定期设置？',
    choices: [
      { emoji: '🔒', text: '长期锁仓(>1年)', hint: '长期承诺', isCorrect: true, effect: { wealthPct: 0.90 } },
      { emoji: '⏰', text: '合理锁仓(6-12月)', hint: '适度', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🔓', text: '短期锁仓(<6月)', hint: '短视', isCorrect: false, effect: { wealthPct: -0.60 } },
      { emoji: '❌', text: '不锁仓', hint: '高风险', isCorrect: false, effect: { wealthPct: -0.90 } }
    ],
    explanation: '长期锁仓能证明团队的长期承诺，减少抛售风险。'
  },
  {
    id: 'launch_137',
    category: 'transparency',
    title: '📈 上所计划透明',
    desc: '是否公开上所计划？',
    choices: [
      { emoji: '📢', text: '公布具体推进计划', hint: '透明', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '⏰', text: '适时披露进展', hint: '稳健', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🚀', text: '过早高调宣传', hint: '风险', isCorrect: false, effect: { wealthPct: -0.50 } },
      { emoji: '🤐', text: '完全不透露', hint: '不透明', isCorrect: false, effect: { wealthPct: -0.40 } }
    ],
    explanation: '适时的上所计划披露能管理预期，避免虚假希望。'
  },
  {
    id: 'launch_138',
    category: 'transparency',
    title: '🔥 热度衰退复兴',
    desc: '热度衰退时如何复兴？',
    choices: [
      { emoji: '✅', text: '有计划的买回销毁', hint: '护盘', isCorrect: true, effect: { wealthPct: 0.80 } },
      { emoji: '📢', text: '发布重大更新重启', hint: '新叙事', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🤷', text: '无作为等待', hint: '放弃', isCorrect: false, effect: { wealthPct: -0.70 } },
      { emoji: '🏃', text: '趁机套现跑路', hint: 'Rug', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '有计划的复兴策略能重拾市场信心，延长项目生命。'
  },
  {
    id: 'launch_139',
    category: 'transparency',
    title: '🤝 上所合作谈判',
    desc: '如何进行上所合作谈判？',
    choices: [
      { emoji: '✅', text: '真实推进合作', hint: '务实', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '📊', text: '满足要求后申请', hint: '合规', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '💰', text: '付费快速上所', hint: '成本高', isCorrect: false, effect: { wealthPct: -0.40 } },
      { emoji: '🤥', text: '虚假宣传已谈好', hint: '欺骗', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '真实推进上所能建立长期合作关系，而非一锤子买卖。'
  },
  {
    id: 'launch_140',
    category: 'transparency',
    title: '📊 竞争币应对',
    desc: '发现竞争币抄袭怎么办？',
    choices: [
      { emoji: '💎', text: '强调差异化价值', hint: '独特', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '🚀', text: '加速创新保持领先', hint: '进取', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '⚔️', text: '参与互撕攻击', hint: '负能量', isCorrect: false, effect: { wealthPct: -0.80 } },
      { emoji: '🙈', text: '无视不管', hint: '被动', isCorrect: false, effect: { wealthPct: -0.40 } }
    ],
    explanation: '差异化竞争和创新能保持竞争优势，避免无意义的互撕。'
  },
  {
    id: 'launch_141',
    category: 'transparency',
    title: '👨‍💻 开发团队稳定',
    desc: '如何保证开发团队稳定？',
    choices: [
      { emoji: '✅', text: '合理的激励绑定', hint: '留人', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '📋', text: '长期合约锁定', hint: '稳定', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '💰', text: '高薪但无绑定', hint: '随时走', isCorrect: false, effect: { wealthPct: -0.40 } },
      { emoji: '🤷', text: '不关注团队稳定', hint: '风险', isCorrect: false, effect: { wealthPct: -0.60 } }
    ],
    explanation: '团队稳定是项目持续发展的基础，需要合理激励。'
  },
  {
    id: 'launch_142',
    category: 'transparency',
    title: '📜 合规信息披露',
    desc: '如何满足合规信息披露要求？',
    choices: [
      { emoji: '✅', text: '主动满足各地法规', hint: '合规', isCorrect: true, effect: { wealthPct: 0.80 } },
      { emoji: '📋', text: '聘请合规顾问', hint: '专业', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🤷', text: '不关心合规', hint: '风险', isCorrect: false, effect: { wealthPct: -0.80 } },
      { emoji: '🤐', text: '故意隐瞒信息', hint: '违法', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '合规披露能避免法律风险，建立专业形象。'
  },
  {
    id: 'launch_143',
    category: 'transparency',
    title: '🎭 匿名Dev露脸时机',
    desc: '匿名Dev何时选择露脸？',
    choices: [
      { emoji: '⏰', text: '热度高时露脸增信', hint: '最佳时机', isCorrect: true, effect: { wealthPct: 0.80 } },
      { emoji: '📈', text: '项目成熟后公开', hint: '稳健', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '📉', text: '危机时被迫露脸', hint: '被动', isCorrect: false, effect: { wealthPct: -0.50 } },
      { emoji: '🎭', text: '永远不露脸', hint: '信任-1', isCorrect: false, effect: { wealthPct: -0.70 } }
    ],
    explanation: '在热度高时露脸能最大化信任加成效果。'
  },
  {
    id: 'launch_144',
    category: 'transparency',
    title: '🔍 第三方监督',
    desc: '是否引入第三方监督？',
    choices: [
      { emoji: '✅', text: '邀请社区监督员', hint: '去中心化监督', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '🏛️', text: '专业机构监督', hint: '专业', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🤷', text: '不接受外部监督', hint: '封闭', isCorrect: false, effect: { wealthPct: -0.60 } },
      { emoji: '🤥', text: '假装接受监督', hint: '欺骗', isCorrect: false, effect: { wealthPct: -0.90 } }
    ],
    explanation: '第三方监督能增加透明度，防止内部作恶。'
  },
  {
    id: 'launch_145',
    category: 'transparency',
    title: '📊 争议事件处理',
    desc: '发生争议事件时如何处理？',
    choices: [
      { emoji: '📢', text: '第一时间透明回应', hint: '主动', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🔍', text: '第三方调查澄清', hint: '公正', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🤐', text: '沉默冷处理', hint: '恶化', isCorrect: false, effect: { wealthPct: -0.70 } },
      { emoji: '🔥', text: '删帖控评压热度', hint: '掩盖', isCorrect: false, effect: { wealthPct: -0.90 } }
    ],
    explanation: '透明回应和第三方调查能公正处理争议，维护公信力。'
  },
  {
    id: 'launch_146',
    category: 'transparency',
    title: '🏛️ 治理过程透明',
    desc: '治理决策过程是否透明？',
    choices: [
      { emoji: '✅', text: '链上治理全透明', hint: '可验证', isCorrect: true, effect: { wealthPct: 0.80 } },
      { emoji: '📋', text: '公开治理记录', hint: '规范', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🤐', text: '黑箱决策', hint: '不透明', isCorrect: false, effect: { wealthPct: -0.70 } },
      { emoji: '🤥', text: '伪造治理结果', hint: '欺骗', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '治理透明能确保决策公正，增强社区信任。'
  },
  {
    id: 'launch_147',
    category: 'transparency',
    title: '💡 创新透明机制',
    desc: '是否创新透明度机制？',
    choices: [
      { emoji: '✅', text: '实时链上仪表盘', hint: '技术创新', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '📊', text: '自动执行智能合约', hint: '程序化', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🤷', text: '传统方式不透明', hint: '落后', isCorrect: false, effect: { wealthPct: -0.50 } },
      { emoji: '🎭', text: '用技术掩盖真相', hint: '欺骗', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '技术创新能提高透明度，让信息更易获取和验证。'
  },
  {
    id: 'launch_148',
    category: 'transparency',
    title: '📈 业绩归因透明',
    desc: '如何透明地归因业绩？',
    choices: [
      { emoji: '✅', text: '详细归因分析', hint: '专业', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '📊', text: '市场环境说明', hint: '客观', isCorrect: true, effect: { wealthPct: 0.40 } },
      { emoji: '🚀', text: '所有功劳归自己', hint: '夸大', isCorrect: false, effect: { wealthPct: -0.60 } },
      { emoji: '🙈', text: '亏损时不解释', hint: '逃避', isCorrect: false, effect: { wealthPct: -0.80 } }
    ],
    explanation: '客观的业绩归因能建立信任，承认市场因素的影响。'
  },
  {
    id: 'launch_149',
    category: 'transparency',
    title: '🤝 利益冲突披露',
    desc: '如何处理利益冲突披露？',
    choices: [
      { emoji: '✅', text: '主动披露所有利益关系', hint: '诚信', isCorrect: true, effect: { wealthPct: 0.70 } },
      { emoji: '📋', text: '利益冲突回避机制', hint: '规范', isCorrect: true, effect: { wealthPct: 0.50 } },
      { emoji: '🤐', text: '隐瞒利益冲突', hint: '不道德', isCorrect: false, effect: { wealthPct: -0.80 } },
      { emoji: '💰', text: '利用内幕信息获利', hint: '违法', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '主动披露利益冲突是诚信的表现，能避免信任危机。'
  },
  {
    id: 'launch_150',
    category: 'transparency',
    title: '📊 透明度评级',
    desc: '是否参与透明度评级？',
    choices: [
      { emoji: '✅', text: '主动申请透明度评级', hint: '自信', isCorrect: true, effect: { wealthPct: 0.80 } },
      { emoji: '📈', text: '根据评级持续改进', hint: '进步', isCorrect: true, effect: { wealthPct: 0.60 } },
      { emoji: '🤷', text: '不参与评级', hint: '不自信', isCorrect: false, effect: { wealthPct: -0.50 } },
      { emoji: '🤥', text: '贿赂获取高评级', hint: '腐败', isCorrect: false, effect: { wealthPct: -1.00 } }
    ],
    explanation: '参与透明度评级能证明项目自信，也是持续改进的动力。'
  }
];

// 导出
if (typeof window !== 'undefined') {
  window.HARDCORE_LAUNCH_DECISIONS = HARDCORE_LAUNCH_DECISIONS;
}

// CommonJS导出支持
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { HARDCORE_LAUNCH_DECISIONS };
}
