/**
 * 硬核模式 - 投资项目路径决策事件库
 * Hardcore Mode - Investment Project Decision Events
 * 
 * 类别说明:
 * - dd: 尽调 (Due Diligence)
 * - exit: 退出时机 (Exit Timing)
 * - lockup: 锁仓策略 (Lockup Strategy)
 * - valuation: 融资估值 (Valuation)
 * - risk: 风险控制 (Risk Management)
 * - community: 社区观察 (Community Analysis)
 * - narrative: 叙事匹配 (Narrative Fit)
 * - legal: 法律结构 (Legal Structure)
 */

const HARDCORE_INVEST_DECISIONS = [
  // ==================== 001-010: 早期项目与尽调基础 ====================
  {
    id: 'invest_001',
    category: 'dd',
    title: '早期项目私募邀请',
    desc: '一个早期Web3项目向你发出私募投资邀请，承诺种子轮进入可获得5-10倍回报。项目方展示了一份精美的PPT，但产品尚未上线。',
    choices: [
      { emoji: '🔍', text: '要求详细尽调后再小额参与', hint: '稳健策略', isCorrect: true, effect: { wealthPct: 3.0 } },
      { emoji: '🚀', text: '全力投入，早期就是机会', hint: '高风险高回报', isCorrect: false, effect: { wealthPct: 0.3 } },
      { emoji: '❌', text: '直接拒绝，产品未上线不投', hint: '过于保守', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '早期项目风险极高，必须进行团队背景、技术可行性、市场需求等尽调，且只能小额试水。'
  },
  {
    id: 'invest_002',
    category: 'lockup',
    title: '超长锁仓期要求',
    desc: '某优质项目要求投资者接受4年线性解锁的锁仓条款，期间无流动性。项目基本面优秀，但退出周期极长。',
    choices: [
      { emoji: '⏳', text: '接受锁仓，配置小额长线仓位', hint: '价值投资者', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '💸', text: '要求缩短锁仓期至1年', hint: '可能失去机会', isCorrect: false, effect: { wealthPct: 1.0 } },
      { emoji: '🏃', text: '放弃投资，锁仓期太长', hint: '错过优质项目', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '优质项目的长期锁仓可以接受，但需控制仓位比例，避免资金长期被困。'
  },
  {
    id: 'invest_003',
    category: 'dd',
    title: '白皮书详尽但团队模糊',
    desc: '项目白皮书技术细节详尽，路线图清晰，但核心团队成员社交媒体空白，LinkedIn无历史记录。',
    choices: [
      { emoji: '🔍', text: '深入调查团队真实身份', hint: '尽调优先', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '📄', text: '只看白皮书质量决定投资', hint: '忽视团队风险', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '❌', text: '匿名团队直接拒绝', hint: '可能错过优质项目', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '团队是项目成功的核心，匿名团队需格外谨慎，必须通过多渠道验证背景。'
  },
  {
    id: 'invest_004',
    category: 'dd',
    title: '开发团队完全匿名',
    desc: '某DeFi协议技术架构创新，但开发团队完全匿名，仅通过Discord沟通，无视频验证、无历史项目。',
    choices: [
      { emoji: '🛡️', text: '拒绝投资，匿名团队风险过高', hint: '风险厌恶', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '💰', text: '小额参与，技术足够好就行', hint: '忽视人险', isCorrect: false, effect: { wealthPct: 0.2 } },
      { emoji: '⏱️', text: '等待团队doxx后再考虑', hint: '观望策略', isCorrect: true, effect: { wealthPct: 1.1 } }
    ],
    explanation: '完全匿名的开发团队存在巨大道德风险，历史上多次发生匿名团队跑路事件。'
  },
  {
    id: 'invest_005',
    category: 'dd',
    title: '顶级审计公司背书',
    desc: '项目已获得Trail of Bits或OpenZeppelin等顶级公司的安全审计，审计报告仅发现低风险问题。',
    choices: [
      { emoji: '➕', text: '加大投资额度，审计通过是绿灯', hint: '信任专业', isCorrect: true, effect: { wealthPct: 2.5 } },
      { emoji: '✅', text: '按原计划投资，审计只是基础', hint: '理性决策', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '🔥', text: 'All in，顶级审计等于安全', hint: '过度自信', isCorrect: false, effect: { wealthPct: 0.6 } }
    ],
    explanation: '顶级审计公司背书大幅降低技术风险，但不应成为唯一决策依据。'
  },
  {
    id: 'invest_006',
    category: 'community',
    title: '有机社区强劲增长',
    desc: '项目Discord和Twitter粉丝增长迅速，互动质量高，无机器人痕迹，社区成员主动创作内容。',
    choices: [
      { emoji: '📈', text: '增加投资，有机社区是护城河', hint: '价值投资', isCorrect: true, effect: { wealthPct: 2.2 } },
      { emoji: '💎', text: '重仓投入，社区即价值', hint: '适度乐观', isCorrect: false, effect: { wealthPct: 1.5 } },
      { emoji: '🤔', text: '保持原计划，社区可能刷量', hint: '过度怀疑', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '真实有机的社区是项目长期价值的重要支撑，但需验证数据真实性。'
  },
  {
    id: 'invest_007',
    category: 'valuation',
    title: '融资轮估值过高',
    desc: '项目A轮估值已达5亿美元，但产品用户仅数千人，收入几乎为零，估值明显超前于基本面。',
    choices: [
      { emoji: '➖', text: '减少投资额，估值透支未来', hint: '理性估值', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '🚀', text: '正常投资，FOMO情绪下估值合理', hint: '追高风险', isCorrect: false, effect: { wealthPct: 0.4 } },
      { emoji: '❌', text: '完全放弃，估值泡沫严重', hint: '可能错失', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '过高的估值需要对应的基本面支撑，否则后期增长空间有限，投资回报降低。'
  },
  {
    id: 'invest_008',
    category: 'exit',
    title: '退出流动性极差',
    desc: '投资后项目长期未上交易所，OTC市场无买家，流动性完全锁定，无法退出。',
    choices: [
      { emoji: '💎', text: '小额长持，等待流动性开放', hint: '长期主义', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '📉', text: '恐慌抛售，折价50%也要出', hint: '割肉止损', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '🔥', text: '加仓抄底，流动性差是机会', hint: '逆势投资', isCorrect: false, effect: { wealthPct: 0.8 } }
    ],
    explanation: '流动性差时恐慌抛售往往造成最大损失，优质项目应耐心持有等待流动性恢复。'
  },
  {
    id: 'invest_009',
    category: 'exit',
    title: '内幕拉盘信号出现',
    desc: '从可靠渠道获悉项目方准备进行市场操纵，短期内可能拉盘30-50%，但随后可能暴跌。',
    choices: [
      { emoji: '🔒', text: '小仓位卖出锁定利润', hint: '稳健获利', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '🚀', text: '加仓等待拉盘', hint: '参与操纵风险', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '📤', text: '全部卖出，不赚不义之财', hint: '道德洁癖', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '市场操纵风险极高，利用内幕信息可能涉及法律风险，适度获利了结是明智选择。'
  },
  {
    id: 'invest_010',
    category: 'dd',
    title: '团队有doxxed黑历史',
    desc: '尽调发现团队成员曾在过往项目中卷款跑路或被曝光诈骗，现已改名换姓加入新项目。',
    choices: [
      { emoji: '🚫', text: '立即放弃投资并曝光', hint: '零容忍', isCorrect: true, effect: { wealthPct: 1.1 } },
      { emoji: '🤷', text: '给他们一次机会，人都会变', hint: '过于宽容', isCorrect: false, effect: { wealthPct: 0.1 } },
      { emoji: '➖', text: '减少投资，但还可以参与', hint: '风险意识不足', isCorrect: false, effect: { wealthPct: 0.4 } }
    ],
    explanation: '有诈骗历史的团队成员再次作恶概率极高，必须坚决回避。'
  },

  // ==================== 011-020: 上所与条款 ====================
  {
    id: 'invest_011',
    category: 'exit',
    title: '上所计划明确且可信',
    desc: '项目已公布详细的上所路线图，与多家交易所签署意向书，上所时间窗口确定。',
    choices: [
      { emoji: '📊', text: '增加投资，上所带来流动性溢价', hint: '流动性溢价', isCorrect: true, effect: { wealthPct: 3.0 } },
      { emoji: '💰', text: '重仓押注上所行情', hint: '过度集中', isCorrect: false, effect: { wealthPct: 1.2 } },
      { emoji: '🤔', text: '保持观望，上所可能延期', hint: '错失机会', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '明确的上所计划带来确定的流动性退出渠道，是投资的重要利好。'
  },
  {
    id: 'invest_012',
    category: 'lockup',
    title: 'SAFT条款极为严格',
    desc: '投资协议要求5年锁仓、无反稀释保护、项目方有权单方面修改条款，投资者权利极少。',
    choices: [
      { emoji: '📝', text: '谈判争取宽松条款', hint: '维护权益', isCorrect: true, effect: { wealthPct: 1.6 } },
      { emoji: '✅', text: '接受条款，项目好就行', hint: '忽视风险', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '❌', text: '条款不公，直接放弃', hint: '可能错失', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '投资条款是保护投资者权益的法律武器，过于严苛的条款需要争取修改或放弃投资。'
  },
  {
    id: 'invest_013',
    category: 'dd',
    title: '赛道竞争异常激烈',
    desc: '项目所在赛道已有3-5个成熟竞争对手，市场份额被瓜分，新项目差异化优势不明显。',
    choices: [
      { emoji: '🎯', text: '选择差异化最强的项目', hint: '精准投资', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '📊', text: '分散投资多个竞争者', hint: '赛道押注', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '🔥', text: '押注龙头，赢家通吃', hint: '集中风险', isCorrect: false, effect: { wealthPct: 0.7 } }
    ],
    explanation: '激烈竞争赛道需要精选差异化优势明显的项目，或分散投资降低单项目风险。'
  },
  {
    id: 'invest_014',
    category: 'lockup',
    title: '悬崖式解锁(cliff)风险',
    desc: '项目代币解锁设计为12个月cliff后一次性释放50%，存在集中抛压风险。',
    choices: [
      { emoji: '🚫', text: '拒绝投资或提前规划退出', hint: '风险规避', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '💎', text: '长期持有不在乎短期波动', hint: '忽视流动性', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '📉', text: '解锁前低价买入', hint: '接盘风险', isCorrect: false, effect: { wealthPct: 0.5 } }
    ],
    explanation: '悬崖式解锁往往伴随剧烈价格波动，需要提前规划退出策略或回避。'
  },
  {
    id: 'invest_015',
    category: 'dd',
    title: '国库资金完全透明',
    desc: '项目国库地址公开，所有支出通过多签钱包链上可查，财务透明度极高。',
    choices: [
      { emoji: '➕', text: '增加投资，透明度高是加分项', hint: '信任加分', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '💰', text: '重仓投资，透明就不会跑路', hint: '过度乐观', isCorrect: false, effect: { wealthPct: 1.3 } },
      { emoji: '🤷', text: '透明度不重要，看产品', hint: '忽视治理', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '国库透明度是项目治理质量的重要指标，高透明度项目更值得信赖。'
  },
  {
    id: 'invest_016',
    category: 'dd',
    title: '投资后项目Pivot转向',
    desc: '投资半年后，项目方宣布战略转型，放弃原有方向进入全新赛道，技术路线大幅调整。',
    choices: [
      { emoji: '📊', text: '评估新方向可行性后再决定', hint: '理性分析', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '💎', text: '支持团队，好团队能Pivot成功', hint: '信任团队', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '🏃', text: '立即要求退款，方向变了不投', hint: '僵化思维', isCorrect: false, effect: { wealthPct: 0.8 } }
    ],
    explanation: 'Pivot是初创公司的常态，关键在于评估新方向的市场机会和团队执行能力。'
  },
  {
    id: 'invest_017',
    category: 'community',
    title: '项目营销能力极弱',
    desc: '产品技术优秀但营销几乎为零，社交媒体更新稀少，社区活跃度低，知名度难以扩大。',
    choices: [
      { emoji: '➖', text: '小额持有，等待营销突破', hint: '耐心资本', isCorrect: true, effect: { wealthPct: 1.6 } },
      { emoji: '❌', text: '放弃投资，好酒也怕巷子深', hint: '营销优先', isCorrect: false, effect: { wealthPct: 1.0 } },
      { emoji: '🔥', text: '重仓抄底，营销弱是机会', hint: '逆向投资', isCorrect: false, effect: { wealthPct: 0.7 } }
    ],
    explanation: '营销是项目成功的重要环节，但技术过硬的项目可能后来居上，适度参与是策略。'
  },
  {
    id: 'invest_018',
    category: 'dd',
    title: '团队薪资水平过高',
    desc: '尽调发现团队核心成员年薪高达数百万美元，远超行业平均水平，国库支出压力大。',
    choices: [
      { emoji: '⚠️', text: '谨慎投资，高薪可能不可持续', hint: '财务审慎', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '💰', text: '高薪才能留住人才，正常', hint: '忽视成本', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '🚫', text: '拒绝投资，团队太贪婪', hint: '过于严苛', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '过高的团队薪资可能侵蚀项目资金，影响长期发展，需要审慎评估。'
  },
  {
    id: 'invest_019',
    category: 'valuation',
    title: '代币经济模型通缩设计',
    desc: '项目代币设计包含销毁机制、回购计划、使用场景销毁等通缩要素，代币供应持续减少。',
    choices: [
      { emoji: '📈', text: '增加投资，通缩模型支撑币价', hint: '供需分析', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '🔥', text: 'All in通缩代币，只涨不跌', hint: '过度自信', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '🤔', text: '通缩不重要，看实际需求', hint: '忽视机制', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '合理的通缩设计能支撑代币长期价值，但需结合实际使用场景评估。'
  },
  {
    id: 'invest_020',
    category: 'valuation',
    title: '投资轮次已进入后期',
    desc: '项目已进入C轮或D轮，估值已达数十亿美元，相比早期投资者价格已上涨数十倍。',
    choices: [
      { emoji: '➖', text: '减少投资，高价入场风险大', hint: '风险意识', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '🚀', text: '全力参与，上市前最后一轮', hint: '追高被套', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '❌', text: '完全放弃，错过早期不投', hint: '错失机会', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '后期轮次估值已充分反映预期，上涨空间有限，需要控制投资规模。'
  },

  // ==================== 021-030: 合作与叙事 ====================
  {
    id: 'invest_021',
    category: 'dd',
    title: '战略合作伙伴强大',
    desc: '项目已与行业头部企业建立战略合作，包括技术集成、渠道合作、生态共建等。',
    choices: [
      { emoji: '➕', text: '增加投资，但需尽调合作深度', hint: '审慎乐观', isCorrect: true, effect: { wealthPct: 2.2 } },
      { emoji: '🔥', text: '重仓投资，大机构背书必胜', hint: '盲目跟风', isCorrect: false, effect: { wealthPct: 0.9 } },
      { emoji: '🤷', text: '战略合作只是PR，不重要', hint: '忽视资源', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '强大的战略合作伙伴是重要加分项，但需验证合作的真实性和深度。'
  },
  {
    id: 'invest_022',
    category: 'exit',
    title: 'OTC退出机会出现',
    desc: '有机构愿意以当前价格溢价10%通过OTC收购你的持仓，但项目基本面仍在向好。',
    choices: [
      { emoji: '💰', text: '卖出部分锁定利润，留部分看涨', hint: '分批操作', isCorrect: true, effect: { wealthPct: 1.6 } },
      { emoji: '📤', text: '全部卖出，落袋为安', hint: '过早退出', isCorrect: false, effect: { wealthPct: 1.1 } },
      { emoji: '💎', text: '拒绝OTC，长期持有价值更大', hint: '过度乐观', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: 'OTC溢价退出是锁定利润的好机会，可以部分退出降低风险同时保留上涨空间。'
  },
  {
    id: 'invest_023',
    category: 'community',
    title: '社区治理质量优秀',
    desc: '项目DAO治理活跃，提案讨论充分，投票参与率高，重大决策均通过社区共识。',
    choices: [
      { emoji: '💎', text: '增加投资并长期持有', hint: '治理溢价', isCorrect: true, effect: { wealthPct: 1.9 } },
      { emoji: '📈', text: '治理好代表项目好，加仓', hint: '单一维度', isCorrect: false, effect: { wealthPct: 1.4 } },
      { emoji: '🤷', text: '治理不重要，看价格', hint: '短视行为', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '优秀的社区治理是项目长期健康发展的基石，值得给予估值溢价。'
  },
  {
    id: 'invest_024',
    category: 'risk',
    title: '投资后监管风险骤增',
    desc: '投资后项目所在领域遭遇严厉监管，SEC调查、交易所下架风险上升。',
    choices: [
      { emoji: '📊', text: '分散卖出，降低单一风险暴露', hint: '风险分散', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '🏃', text: '恐慌抛售全部清仓', hint: '割肉止损', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '💎', text: '继续持有，监管会过去', hint: '忽视风险', isCorrect: false, effect: { wealthPct: 0.7 } }
    ],
    explanation: '监管风险需要认真对待，但恐慌抛售往往是最差选择，分散减仓是稳健策略。'
  },
  {
    id: 'invest_025',
    category: 'dd',
    title: 'TVL快速增长验证PMF',
    desc: '项目TVL（总锁仓价值）在过去3个月增长300%，用户活跃度同步提升，产品市场契合度得到验证。',
    choices: [
      { emoji: '📈', text: '增加投资，数据验证成功', hint: '数据驱动', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '🔥', text: 'FOMO加仓，趋势不可阻挡', hint: '追涨杀跌', isCorrect: false, effect: { wealthPct: 1.0 } },
      { emoji: '🤔', text: 'TVL可能刷量，观望', hint: '过度怀疑', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: 'TVL的快速增长是产品市场契合度的重要指标，真实增长值得追加投资。'
  },
  {
    id: 'invest_026',
    category: 'risk',
    title: '团队分裂迹象明显',
    desc: '核心CTO与CEO公开分歧，技术路线图争议，团队内部矛盾开始外溢到社区。',
    choices: [
      { emoji: '🏃', text: '立即撤出投资，团队分裂是致命伤', hint: '果断止损', isCorrect: true, effect: { wealthPct: 0.9 } },
      { emoji: '🤞', text: '相信能和解，继续持有', hint: '侥幸心理', isCorrect: false, effect: { wealthPct: 0.3 } },
      { emoji: '➖', text: '减仓但不完全退出', hint: '犹豫不决', isCorrect: false, effect: { wealthPct: 0.5 } }
    ],
    explanation: '核心团队分裂往往导致项目失败，及时撤出是保护本金的必要举措。'
  },
  {
    id: 'invest_027',
    category: 'exit',
    title: '项目空投计划确认',
    desc: '项目方确认将进行大规模空投，持有代币可获得额外空投奖励，快照时间已公布。',
    choices: [
      { emoji: '💎', text: '继续持有等待空投', hint: '空投策略', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '📤', text: '快照前卖出，空投后接回', hint: '套利策略', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '❌', text: '空投都是噱头，不参与', hint: '错失收益', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '确认的空投是额外收益来源，持有或套利策略均可，但不应完全忽视。'
  },
  {
    id: 'invest_028',
    category: 'lockup',
    title: '投资条款Vesting期过长',
    desc: '项目要求5年线性vesting，每年仅解锁20%，远长于行业平均的2-3年。',
    choices: [
      { emoji: '⏳', text: '如项目优秀可接受长期vesting', hint: '长期视角', isCorrect: true, effect: { wealthPct: 1.7 } },
      { emoji: '📝', text: '谈判缩短vesting期', hint: '争取权益', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '🚫', text: '直接放弃，周期太长', hint: '可能错失', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '长期vesting锁定资金流动性，但对于真正优秀的项目，耐心可能获得超额回报。'
  },
  {
    id: 'invest_029',
    category: 'narrative',
    title: '项目叙事契合市场热点',
    desc: '项目方向是当前最热门的AI+Crypto、RWA或模块化区块链叙事，市场关注度极高。',
    choices: [
      { emoji: '📊', text: '增加投资但控制仓位，热度会消退', hint: '理性参与', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '🔥', text: 'All in热门叙事，风口来了', hint: '追高被套', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '🙈', text: '热门都是泡沫，不投', hint: '错失机会', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '契合市场热点的项目有估值溢价机会，但需警惕热度消退后的估值回归。'
  },
  {
    id: 'invest_030',
    category: 'exit',
    title: '项目成功上市交易所',
    desc: '项目代币成功登陆Binance或Coinbase等一线交易所，流动性大幅提升，价格已上涨5倍。',
    choices: [
      { emoji: '📊', text: '分批卖出锁定利润', hint: '逐步退出', isCorrect: true, effect: { wealthPct: 2.5 } },
      { emoji: '📤', text: '全部卖出，上市即巅峰', hint: '过早退出', isCorrect: false, effect: { wealthPct: 1.8 } },
      { emoji: '💎', text: '继续持有，刚上所有更大空间', hint: '贪婪持有', isCorrect: false, effect: { wealthPct: 1.2 } }
    ],
    explanation: '上市后流动性改善是获利了结的好时机，分批卖出可平衡风险与收益。'
  },

  // ==================== 031-040: 审计与风险 ====================
  {
    id: 'invest_031',
    category: 'risk',
    title: '审计发现重大漏洞',
    desc: '项目安全审计发现高危漏洞，虽承诺修复但尚未部署，合约存在被攻击风险。',
    choices: [
      { emoji: '🏃', text: '立即撤出，安全无小事', hint: '安全第一', isCorrect: true, effect: { wealthPct: 0.85 } },
      { emoji: '⏳', text: '等待修复后再决定', hint: '观望策略', isCorrect: true, effect: { wealthPct: 0.9 } },
      { emoji: '💎', text: '相信团队能修复，继续持有', hint: '忽视风险', isCorrect: false, effect: { wealthPct: 0.2 } }
    ],
    explanation: '安全漏洞可能导致资金全部损失，宁可错过也不应冒险。'
  },
  {
    id: 'invest_032',
    category: 'dd',
    title: '团队背景极其强大',
    desc: '团队成员来自Google、Goldman Sachs、MIT等顶级机构，过往创业成功退出，技术实力雄厚。',
    choices: [
      { emoji: '➕', text: '增加投资，强团队是最大保障', hint: '押注团队', isCorrect: true, effect: { wealthPct: 2.3 } },
      { emoji: '🔥', text: '重仓投资，稳赚不赔', hint: '过度自信', isCorrect: false, effect: { wealthPct: 1.4 } },
      { emoji: '🤔', text: '背景好不代表项目好，正常投', hint: '忽视团队', isCorrect: false, effect: { wealthPct: 1.2 } }
    ],
    explanation: '优秀的团队背景是项目成功的重要因子，值得给予信心和更多投资。'
  },
  {
    id: 'invest_033',
    category: 'valuation',
    title: '融资市场过热',
    desc: '当前市场处于狂热期，项目估值普遍溢价50-100%，FOMO情绪弥漫，理性投资困难。',
    choices: [
      { emoji: '➖', text: '减少投资，等待市场降温', hint: '逆向思维', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '❌', text: '完全观望，不参与过热市场', hint: '过于保守', isCorrect: false, effect: { wealthPct: 1.0 } },
      { emoji: '🔥', text: '跟随市场，FOMO也是策略', hint: '追涨杀跌', isCorrect: false, effect: { wealthPct: 0.5 } }
    ],
    explanation: '市场过热时保持理性，减少投资或等待回调是长期获胜的关键。'
  },
  {
    id: 'invest_034',
    category: 'dd',
    title: '投资后项目延期',
    desc: '投资后项目方宣布主网上线延期6个月，原因是技术复杂度超预期，路线图需要调整。',
    choices: [
      { emoji: '⏳', text: '如团队可靠则耐心持有', hint: '长期耐心', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '🏃', text: '延期就是违约，要求退款', hint: '过于苛刻', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '➖', text: '减仓观望，延期可能是借口', hint: '信任危机', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '技术项目延期是常态，关键是评估延期原因和团队应对措施。'
  },
  {
    id: 'invest_035',
    category: 'community',
    title: '社区忠诚度测试',
    desc: '项目方发起社区忠诚度测试，要求持有者质押代币不参与短期交易，以证明长期信仰。',
    choices: [
      { emoji: '👀', text: '观察社区真实参与度再决定', hint: '理性观察', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '💎', text: '积极参与质押，证明信仰', hint: '盲目跟风', isCorrect: false, effect: { wealthPct: 1.0 } },
      { emoji: '📤', text: '这种测试很蠢，直接卖出', hint: '过度反应', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '忠诚度测试可以观察社区质量，但不应成为投资决策的唯一依据。'
  },
  {
    id: 'invest_036',
    category: 'exit',
    title: '项目添加大量流动性',
    desc: '项目在DEX添加数千万美元流动性，滑点大幅降低，进出资金更加顺畅。',
    choices: [
      { emoji: '💎', text: '继续持有，流动性改善利好', hint: '流动性溢价', isCorrect: true, effect: { wealthPct: 2.5 } },
      { emoji: '📤', text: '趁流动性好卖出部分', hint: '过早退出', isCorrect: false, effect: { wealthPct: 1.6 } },
      { emoji: '🔥', text: '加仓，流动性就是价值', hint: '追涨', isCorrect: false, effect: { wealthPct: 1.2 } }
    ],
    explanation: '充足的流动性降低交易成本，提升代币价值，是积极信号。'
  },
  {
    id: 'invest_037',
    category: 'dd',
    title: '项目在竞争中胜出',
    desc: '项目在同赛道竞争中技术指标、用户增长、收入等关键指标全面领先竞争对手。',
    choices: [
      { emoji: '➕', text: '增加投资，赢家值得更多支持', hint: '马太效应', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '🔥', text: 'All in龙头，赢家通吃', hint: '集中风险', isCorrect: false, effect: { wealthPct: 1.3 } },
      { emoji: '🤷', text: '领先可能暂时，保持观望', hint: '过度谨慎', isCorrect: false, effect: { wealthPct: 1.1 } }
    ],
    explanation: '在竞争中胜出的项目往往具备更强的护城河，值得追加投资。'
  },
  {
    id: 'invest_038',
    category: 'risk',
    title: '投资组合分散决策',
    desc: '你发现一个极具吸引力的项目，但考虑到已有投资集中在类似赛道，是否继续投入？',
    choices: [
      { emoji: '📊', text: '分散投资多个赛道，降低单一风险', hint: '资产配置', isCorrect: true, effect: { wealthPct: 1.6 } },
      { emoji: '🔥', text: '集中押注看好的赛道', hint: '集中风险', isCorrect: false, effect: { wealthPct: 0.8 } },
      { emoji: '❌', text: '放弃新项目，现有已足够', hint: '错失机会', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '分散投资是降低非系统性风险的有效手段，不应将所有资金集中在单一赛道。'
  },
  {
    id: 'invest_039',
    category: 'risk',
    title: '项目出现跑路迹象',
    desc: '项目方社交媒体停止更新，团队成员失联，国库资金出现异常转移，社区质疑声四起。',
    choices: [
      { emoji: '🏃', text: '立即抛售，保本第一', hint: '果断止损', isCorrect: true, effect: { wealthPct: 0.7 } },
      { emoji: '⏳', text: '再观望几天确认情况', hint: '犹豫损失', isCorrect: false, effect: { wealthPct: 0.3 } },
      { emoji: '💎', text: '相信只是误会，继续持有', hint: '侥幸心理', isCorrect: false, effect: { wealthPct: 0.05 } }
    ],
    explanation: '跑路迹象一旦出现，必须果断行动，犹豫往往导致血本无归。'
  },
  {
    id: 'invest_040',
    category: 'valuation',
    title: '投资回报率计算',
    desc: '某项目承诺3年10倍回报，但需要锁仓3年，期间无流动性，你需要评估是否值得投资。',
    choices: [
      { emoji: '📊', text: '保守估算，考虑机会成本和时间价值', hint: '理性估值', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '🔥', text: '10倍太诱人，必须参与', hint: '忽视风险', isCorrect: false, effect: { wealthPct: 0.7 } },
      { emoji: '❌', text: '承诺回报都是画饼，不投', hint: '过于保守', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '承诺的高回报需要结合流动性、概率、机会成本综合评估，保守估算更可靠。'
  },

  // ==================== 041-050: 上所与沟通 ====================
  {
    id: 'invest_041',
    category: 'exit',
    title: '即将登陆CEX',
    desc: '可靠消息显示项目将在2周内登陆一线CEX，市场 anticipation 高涨，价格已提前反应。',
    choices: [
      { emoji: '💎', text: '持有等待上所，但设置止盈', hint: '纪律持有', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '📤', text: '上所前卖出，买预期卖事实', hint: '过早退出', isCorrect: false, effect: { wealthPct: 1.4 } },
      { emoji: '🔥', text: '上所前加仓，必定暴涨', hint: '追涨风险', isCorrect: false, effect: { wealthPct: 0.9 } }
    ],
    explanation: '上所通常带来流动性溢价，但预期往往提前price in，需要纪律性止盈。'
  },
  {
    id: 'invest_042',
    category: 'community',
    title: '团队沟通透明度高',
    desc: '团队定期举行AMA，及时回复社区问题，开发进度公开透明，路线图执行情况良好。',
    choices: [
      { emoji: '➕', text: '增加投资，透明团队值得信赖', hint: '信任加分', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '💰', text: '重仓投资，透明=不会跑路', hint: '过度信任', isCorrect: false, effect: { wealthPct: 1.3 } },
      { emoji: '🤷', text: '透明是基本要求，不加不减', hint: '忽视差异', isCorrect: false, effect: { wealthPct: 1.1 } }
    ],
    explanation: '高透明度的团队更容易建立信任，但透明度不等于项目成功，仍需综合评估。'
  },
  {
    id: 'invest_043',
    category: 'valuation',
    title: '代币销毁机制强劲',
    desc: '项目设计有强劲的代币销毁机制，包括交易费销毁、国库回购销毁等，年销毁量可达供应量的10%。',
    choices: [
      { emoji: '💎', text: '长期持有，通缩支撑价值', hint: '价值存储', isCorrect: true, effect: { wealthPct: 2.2 } },
      { emoji: '📈', text: '增加投资，销毁=涨价', hint: '供需逻辑', isCorrect: true, effect: { wealthPct: 1.9 } },
      { emoji: '🤷', text: '销毁不影响基本面', hint: '忽视机制', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '强劲的销毁机制创造通缩压力，长期支撑代币价格，适合长期持有。'
  },
  {
    id: 'invest_044',
    category: 'community',
    title: '投资后社区建设良好',
    desc: '投资后项目社区快速发展，有专门的市场团队运营，社区活动和激励计划丰富。',
    choices: [
      { emoji: '👥', text: '积极参与社区，获取一手情报', hint: '社区参与', isCorrect: true, effect: { wealthPct: 1.6 } },
      { emoji: '💎', text: '继续持有，社区是护城河', hint: '长期持有', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '🤷', text: '社区建设是成本，不关心', hint: '短视', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '积极参与社区可以获取项目内部信息和alpha，是投资者的重要优势。'
  },
  {
    id: 'invest_045',
    category: 'legal',
    title: '法律结构为离岸架构',
    desc: '项目注册在Cayman Islands或BVI等离岸地区，团队分布全球，法律管辖权复杂。',
    choices: [
      { emoji: '✅', text: '接受离岸架构，这在行业常见', hint: '行业惯例', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '⚠️', text: '要求增加法律保障条款', hint: '审慎态度', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '🚫', text: '拒绝离岸项目，法律风险太高', hint: '过于保守', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '离岸架构在加密行业非常普遍，但投资者应要求更多合同保障来弥补法律管辖的不足。'
  },
  {
    id: 'invest_046',
    category: 'exit',
    title: '熊市低点难以退出',
    desc: '市场进入深度熊市，项目代币价格较最高点下跌90%，流动性枯竭，退出需要大幅折价。',
    choices: [
      { emoji: '💎', text: '继续持有等待牛市', hint: '长期持有', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '📤', text: '割肉止损，留现金等机会', hint: '止损策略', isCorrect: false, effect: { wealthPct: 0.4 } },
      { emoji: '🔥', text: '加仓抄底，熊市是机会', hint: '抄底风险', isCorrect: false, effect: { wealthPct: 0.7 } }
    ],
    explanation: '熊市低点割肉往往是最差选择，优质项目应耐心等待周期轮回。'
  },
  {
    id: 'invest_047',
    category: 'dd',
    title: '合作伙伴背书强大',
    desc: '项目获得行业知名机构、KOL或企业的公开背书，影响力扩散迅速。',
    choices: [
      { emoji: '➕', text: '增加投资，背书带来流量', hint: '背书溢价', isCorrect: true, effect: { wealthPct: 1.9 } },
      { emoji: '🔥', text: '重仓投资，背书=成功', hint: '盲目跟风', isCorrect: false, effect: { wealthPct: 1.1 } },
      { emoji: '🤔', text: '背书可能是付费的，观望', hint: '过度怀疑', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '强大的合作伙伴背书可以提升项目可信度和曝光度，但需辨别背书的真实性和深度。'
  },
  {
    id: 'invest_048',
    category: 'lockup',
    title: '投资条款反稀释',
    desc: '投资协议包含反稀释条款（anti-dilution），在后续融资估值降低时保护投资者股权比例。',
    choices: [
      { emoji: '📝', text: '坚持要求反稀释保护', hint: '权益保护', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '✅', text: '有反稀释是加分项，接受投资', hint: '合同保护', isCorrect: true, effect: { wealthPct: 1.4 } },
      { emoji: '🤷', text: '反稀释不重要，团队好就行', hint: '忽视保护', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '反稀释条款是投资者权益的重要保护，尤其在早期投资中应坚持要求。'
  },
  {
    id: 'invest_049',
    category: 'narrative',
    title: '项目媒体热度极高',
    desc: '项目在各大媒体、KOL频道频繁曝光，Twitter trending话题，FOMO情绪弥漫。',
    choices: [
      { emoji: '⚠️', text: '谨慎参与，热度可能是炒作', hint: '理性判断', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '🔥', text: '热度就是金钱，全力参与', hint: '追涨杀跌', isCorrect: false, effect: { wealthPct: 0.6 } },
      { emoji: '❌', text: '热度高就是泡沫，不投', hint: '错失机会', isCorrect: false, effect: { wealthPct: 1.0 } }
    ],
    explanation: '高热度可能带来短期价格上涨，但也可能意味着估值透支，需要谨慎评估。'
  },
  {
    id: 'invest_050',
    category: 'exit',
    title: '投资成功多波退出策略',
    desc: '项目发展良好，你已获利3倍，但市场仍有上涨空间，需要决定退出策略。',
    choices: [
      { emoji: '📊', text: '分批卖出锁定利润，留部分看涨', hint: '分步退出', isCorrect: true, effect: { wealthPct: 2.8 } },
      { emoji: '📤', text: '全部卖出，落袋为安', hint: '过早退出', isCorrect: false, effect: { wealthPct: 2.0 } },
      { emoji: '💎', text: '继续持有，还能涨10倍', hint: '贪婪持有', isCorrect: false, effect: { wealthPct: 1.5 } }
    ],
    explanation: '分批卖出是平衡风险与收益的最优策略，既锁定利润又保留上涨空间。'
  }
];

// Export for different module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { HARDCORE_INVEST_DECISIONS };
}

