// 硬核模式-被动躺赚路径决策事件库 (staking_003 - staking_150)
// 类别: pool(池子) | il(无常损失) | slash(罚没) | compound(复利) | platform(平台)

const HARDCORE_STAKING_DECISIONS = [
  // ========== 3-10: 节点与硬件 ==========
  {
    id: 'staking_003',
    category: 'platform',
    title: '节点运行：硬件买vs租',
    desc: '你想运行验证节点，面临硬件购买或云服务器租赁的选择。',
    choices: [
      { emoji: '☁️', text: '租云服务器', hint: '低门槛灵活', isCorrect: true, effect: { wealthPct: 0.6 } },
      { emoji: '🖥️', text: '买硬件自建', hint: '高初始投入', isCorrect: false, effect: { wealthPct: -0.3 } },
      { emoji: '🤝', text: '加入节点池', hint: '分享收益', isCorrect: true, effect: { wealthPct: 0.4 } },
      { emoji: '❌', text: '放弃运行', hint: '错过收益', isCorrect: false, effect: { wealthPct: 0 } }
    ],
    explanation: '租赁云服务器降低门槛，或加入节点池分散风险。'
  },
  {
    id: 'staking_004',
    category: 'pool',
    title: 'Staking锁期长vs高奖励',
    desc: '某优质项目提供长锁仓高奖励方案，你如何选择？',
    choices: [
      { emoji: '🔒', text: '选长锁好项目', hint: '高奖励稳', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '⚖️', text: '长短搭配', hint: '平衡流动', isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '💧', text: '选灵活无锁', hint: '低收益', isCorrect: false, effect: { wealthPct: 0.2 } },
      { emoji: '🚀', text: '找更高APY', hint: '高风险', isCorrect: false, effect: { wealthPct: -0.4 } }
    ],
    explanation: '优质项目长锁仓值得接受，长短搭配平衡流动性。'
  },
  {
    id: 'staking_005',
    category: 'il',
    title: 'IL无常损失风险高池',
    desc: '你参与的LP池出现较大无常损失，如何处理？',
    choices: [
      { emoji: '🏃', text: '立即撤出', hint: '保本为主', isCorrect: true, effect: { wealthPct: 0.3 } },
      { emoji: '🛡️', text: '对冲IL', hint: '专业操作', isCorrect: true, effect: { wealthPct: 0.5 } },
      { emoji: '🤞', text: '等待恢复', hint: '赌方向', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '➕', text: '加仓摊平', hint: '加大风险', isCorrect: false, effect: { wealthPct: -0.8 } }
    ],
    explanation: 'IL过高时应及时撤出保本，或使用专业对冲策略。'
  },
  {
    id: 'staking_006',
    category: 'slash',
    title: '平台Slash罚没风险',
    desc: '某PoS链slash罚没比例较高，是否参与staking？',
    choices: [
      { emoji: '🛡️', text: '选低罚平台', hint: '安全第一', isCorrect: true, effect: { wealthPct: 0.7 } },
      { emoji: '❌', text: '避开该链', hint: '零风险', isCorrect: true, effect: { wealthPct: 0.2 } },
      { emoji: '⚠️', text: '小额试水', hint: '可控风险', isCorrect: false, effect: { wealthPct: -0.2 } },
      { emoji: '🎯', text: '赌不罚', hint: '高风险', isCorrect: false, effect: { wealthPct: -0.5 } }
    ],
    explanation: 'slash罚没风险高的平台应避免，选择低罚或无罚方案。'
  },
  {
    id: 'staking_007',
    category: 'platform',
    title: 'Lending借贷利率飙升',
    desc: '借贷平台借贷需求大增，供给方利率大幅上涨。',
    choices: [
      { emoji: '💰', text: '供币赚息', hint: '稳收益', isCorrect: true, effect: { wealthPct: 0.9 } },
      { emoji: '📊', text: '查利用率', hint: '防崩盘', isCorrect: true, effect: { wealthPct: 0.6 } },
      { emoji: '🏦', text: '借贷套利', hint: '高杠杆风险', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '⏸️', text: '观望等待', hint: '错过机会', isCorrect: false, effect: { wealthPct: 0.1 } }
    ],
    explanation: '借贷利率高时供币赚息稳健，但需关注平台利用率防风险。'
  },
  {
    id: 'staking_008',
    category: 'pool',
    title: '节点奖励衰减',
    desc: '你运行的节点因参与者增多，奖励开始衰减。',
    choices: [
      { emoji: '💎', text: '继续持长线', hint: '看好未来', isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '🔍', text: '评估ROI', hint: '理性决策', isCorrect: true, effect: { wealthPct: 0.5 } },
      { emoji: '⚡', text: '加Stake', hint: '冲奖励', isCorrect: false, effect: { wealthPct: -0.3 } },
      { emoji: '🏃', text: '立即退出', hint: '损失机会', isCorrect: false, effect: { wealthPct: 0.1 } }
    ],
    explanation: '节点奖励衰减是正常现象，应持长线或理性评估ROI。'
  },
  {
    id: 'staking_009',
    category: 'pool',
    title: '新链Staking热潮',
    desc: '某新公链Staking热潮，APY极高但风险未知。',
    choices: [
      { emoji: '🧪', text: '小额迁移试水', hint: '控风险', isCorrect: true, effect: { wealthPct: 0.7 } },
      { emoji: '🔍', text: '深度调研', hint: '再决定', isCorrect: true, effect: { wealthPct: 0.4 } },
      { emoji: '🚀', text: '大仓迁移', hint: '高风险', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '🙈', text: '无视新链', hint: '错过机会', isCorrect: false, effect: { wealthPct: 0 } }
    ],
    explanation: '新链热潮应小额试水，深度调研后再决定是否加大投入。'
  },
  {
    id: 'staking_010',
    category: 'platform',
    title: '平台黑客历史曝光',
    desc: '某Staking平台被曝曾有黑客攻击历史，如何处理？',
    choices: [
      { emoji: '🚫', text: '立即撤出', hint: '避风险', isCorrect: true, effect: { wealthPct: 0.4 } },
      { emoji: '🔍', text: '查修复情况', hint: '评估安全', isCorrect: true, effect: { wealthPct: 0.3 } },
      { emoji: '💪', text: '相信已修复', hint: '侥幸心理', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '➕', text: '加仓抄底', hint: '危险操作', isCorrect: false, effect: { wealthPct: -0.9 } }
    ],
    explanation: '有黑客历史的平台应优先撤出，或仔细评估修复情况。'
  },

  // ========== 11-20: 清算与流动性 ==========
  {
    id: 'staking_011',
    category: 'platform',
    title: 'Lending清算线临近',
    desc: '你的借贷仓位接近清算线，市场波动加剧。',
    choices: [
      { emoji: '💰', text: '加担保资产', hint: '安全线', isCorrect: true, effect: { wealthPct: 0.5 } },
      { emoji: '🏃', text: '部分撤出', hint: '降杠杆', isCorrect: true, effect: { wealthPct: 0.3 } },
      { emoji: '🤞', text: '赌反弹', hint: '高风险', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '❌', text: '无动于衷', hint: '等清算', isCorrect: false, effect: { wealthPct: -1.0 } }
    ],
    explanation: '清算线临近时应加担保或撤出，避免被强制清算。'
  },
  {
    id: 'staking_012',
    category: 'platform',
    title: '节点同步严重延迟',
    desc: '你的验证节点同步速度极慢，可能错过奖励。',
    choices: [
      { emoji: '☁️', text: '换云提供商', hint: '提速', isCorrect: true, effect: { wealthPct: 0.6 } },
      { emoji: '🔧', text: '升级硬件', hint: '长期解决', isCorrect: true, effect: { wealthPct: 0.4 } },
      { emoji: '⏰', text: '等待同步', hint: '损失奖励', isCorrect: false, effect: { wealthPct: -0.3 } },
      { emoji: '🚫', text: '停止节点', hint: '完全放弃', isCorrect: false, effect: { wealthPct: -0.2 } }
    ],
    explanation: '节点同步问题应更换优质提供商或升级硬件解决。'
  },
  {
    id: 'staking_013',
    category: 'pool',
    title: '无锁灵活Staking',
    desc: '某池子提供无锁灵活存取，但APY相对较低。',
    choices: [
      { emoji: '⚖️', text: '平衡配置', hint: '灵活+收益', isCorrect: true, effect: { wealthPct: 0.6 } },
      { emoji: '💧', text: '作为流动性储备', hint: '应急用', isCorrect: true, effect: { wealthPct: 0.4 } },
      { emoji: '❌', text: '全部投入', hint: '收益低', isCorrect: false, effect: { wealthPct: 0.1 } },
      { emoji: '🚫', text: '完全不投', hint: '错过灵活', isCorrect: false, effect: { wealthPct: 0 } }
    ],
    explanation: '无锁灵活池适合作为流动性储备，应与高收益锁仓搭配。'
  },
  {
    id: 'staking_014',
    category: 'il',
    title: 'IL对冲策略选择',
    desc: '你想降低LP的无常损失，选择什么策略？',
    choices: [
      { emoji: '🎯', text: '单币池低IL', hint: '稳', isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '⚖️', text: 'Delta中性', hint: '专业对冲', isCorrect: true, effect: { wealthPct: 0.6 } },
      { emoji: '🤞', text: '赌币价稳定', hint: '高风险', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '❌', text: '忽略IL', hint: '大损失', isCorrect: false, effect: { wealthPct: -0.7 } }
    ],
    explanation: '选择单币池或专业对冲策略降低IL风险。'
  },
  {
    id: 'staking_015',
    category: 'platform',
    title: '平台提供保险服务',
    desc: 'Staking平台推出资金保险服务，需额外付费。',
    choices: [
      { emoji: '🛡️', text: '购买保险', hint: '优先用', isCorrect: true, effect: { wealthPct: 0.5 } },
      { emoji: '📊', text: '评估费率', hint: '性价比', isCorrect: true, effect: { wealthPct: 0.4 } },
      { emoji: '❌', text: '不买省费用', hint: '自担风险', isCorrect: false, effect: { wealthPct: -0.3 } },
      { emoji: '🚫', text: '换无保险平台', hint: '更危险', isCorrect: false, effect: { wealthPct: -0.5 } }
    ],
    explanation: '保险服务提供额外安全保障，值得优先考虑。'
  },
  {
    id: 'staking_016',
    category: 'platform',
    title: 'Lending利率剧烈波动',
    desc: '借贷平台利率大幅波动，收益不稳定。',
    choices: [
      { emoji: '🔒', text: '锁定利率', hint: '稳收益', isCorrect: true, effect: { wealthPct: 0.7 } },
      { emoji: '📈', text: '高抛低吸', hint: '择时', isCorrect: false, effect: { wealthPct: 0.2 } },
      { emoji: '⏸️', text: '等待稳定', hint: '损失时间', isCorrect: false, effect: { wealthPct: 0 } },
      { emoji: '🏃', text: '全部撤出', hint: '过激', isCorrect: false, effect: { wealthPct: -0.2 } }
    ],
    explanation: '利率波动大时应锁定利率确保稳定收益。'
  },
  {
    id: 'staking_017',
    category: 'slash',
    title: '节点Slash惩罚极高',
    desc: '某链对节点离线/作恶惩罚极重，一次slash损失巨大。',
    choices: [
      { emoji: '🚫', text: '避开该链', hint: '安全第一', isCorrect: true, effect: { wealthPct: 0.3 } },
      { emoji: '☁️', text: '选专业托管', hint: '降风险', isCorrect: true, effect: { wealthPct: 0.5 } },
      { emoji: '⚠️', text: '自担风险跑', hint: '高惩罚', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '🤞', text: '赌不会罚', hint: '侥幸心理', isCorrect: false, effect: { wealthPct: -0.6 } }
    ],
    explanation: 'slash惩罚极高的链应避免，或选择专业托管服务。'
  },
  {
    id: 'staking_018',
    category: 'compound',
    title: 'Staking奖励复投决策',
    desc: '你的Staking奖励已累积，是否复投复利？',
    choices: [
      { emoji: '🔄', text: '立即复投', hint: '复合增长', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '⚖️', text: '部分复投', hint: '平衡现金', isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '💵', text: '全部提取', hint: '断复利', isCorrect: false, effect: { wealthPct: 0.3 } },
      { emoji: '⏸️', text: '累积更多', hint: '延迟复利', isCorrect: false, effect: { wealthPct: 0.4 } }
    ],
    explanation: '复投奖励实现复合增长，是被动收益的关键策略。'
  },
  {
    id: 'staking_019',
    category: 'platform',
    title: '平台TVL急剧下降',
    desc: '某平台TVL一周内下降超过50%，流动性风险显现。',
    choices: [
      { emoji: '🏃', text: '立即撤出', hint: '避流动性风险', isCorrect: true, effect: { wealthPct: 0.4 } },
      { emoji: '🔍', text: '查原因', hint: '理性分析', isCorrect: true, effect: { wealthPct: 0.2 } },
      { emoji: '💪', text: '逆势加仓', hint: '高风险', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '🤞', text: '等待恢复', hint: '被动风险', isCorrect: false, effect: { wealthPct: -0.5 } }
    ],
    explanation: 'TVL急剧下降意味着流动性风险，应优先撤出。'
  },
  {
    id: 'staking_020',
    category: 'platform',
    title: 'Lending过度借贷预警',
    desc: '平台借贷利用率过高，存在挤兑风险。',
    choices: [
      { emoji: '🏃', text: '撤供防清算', hint: '安全', isCorrect: true, effect: { wealthPct: 0.5 } },
      { emoji: '📊', text: '监控利用率', hint: '警戒线', isCorrect: true, effect: { wealthPct: 0.3 } },
      { emoji: '💰', text: '趁高利率加供', hint: '高风险', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '🤞', text: '赌没事', hint: '侥幸', isCorrect: false, effect: { wealthPct: -0.4 } }
    ],
    explanation: '借贷利用率过高时应撤出防范挤兑风险。'
  }
];


// Export for different module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { HARDCORE_STAKING_DECISIONS };
}


// Export for browser
if (typeof window !== 'undefined') {
  window.HARDCORE_STAKING_DECISIONS = HARDCORE_STAKING_DECISIONS;
}
