/**
 * Meme Max - Hardcore Mode Decisions Database
 * 800 Unique Decisions
 */

const HARDCORE_NEW_DECISIONS = [
  {
    "id": "001-01",
    "category": "A1",
    "title": "顶级VC领投的A轮",
    "desc": "a16z领投，估值5000万，锁仓2年，技术团队来自Google Brain。模型已经跑通，但主网还需6个月。你作为个人LP有机会跟投500万额度。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.5,
    "baseLossPct": 1.2,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.8,
        "lossPct": 2.0,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.5,
        "lossPct": 1.2,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.2,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.5,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在早期项目私募的场景下，顶级VC领投的A轮需要果断决策。重仓参与可能获得3.8%回报，但需承受较高风险。"
  },
  {
    "id": "001-02",
    "category": "A1",
    "title": "天使轮小份额机会",
    "desc": "估值800万，创始人是某交易所前CTO，产品只有Demo，无实际用户。给早期支持者10万U额度，风险极高但可能有百倍回报。此时你会选择怎么做？",
    "baseProfitPct": 4.0,
    "baseLossPct": 2.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 6.0,
        "lossPct": 3.2,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 4.0,
        "lossPct": 2.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 2.0,
        "lossPct": 1.2,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      }
    ],
    "explanation": "在早期项目私募的场景下，天使轮小份额机会需要果断决策。重仓参与可能获得6.0%回报，但需承受较高风险。"
  },
  {
    "id": "001-03",
    "category": "A1",
    "title": "种子轮最后窗口",
    "desc": "估值300万，团队背景一般但赛道是当下最热的AI Agent。明天就close，留给你的决策时间只有12小时。你的投资策略是？",
    "baseProfitPct": 3.5,
    "baseLossPct": 1.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 5.2,
        "lossPct": 2.8,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 3.5,
        "lossPct": 1.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.8,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      }
    ],
    "explanation": "种子轮最后窗口是早期项目私募的典型场景。小额试水可以控制风险，预期回报1.8%。"
  },
  {
    "id": "001-04",
    "category": "A1",
    "title": "战略轮大额折扣",
    "desc": "估值1.2亿，已有测试网和1万用户，但主网上线还需18个月。某交易所承诺上所，要求锁仓3年。你将如何应对？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对早期项目私募的情况，战略轮大额折扣考验判断力。适度参与是平衡选择，预期回报1.8%。"
  },
  {
    "id": "002-01",
    "category": "A1",
    "title": "5年线性解锁的顶级项目",
    "desc": "以太坊创始团队新项目，技术无可挑剔。TGE后5年线性解锁，每年只能拿20%。你愿意为信仰锁仓5年吗？",
    "baseProfitPct": 3.0,
    "baseLossPct": 1.5,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 4.5,
        "lossPct": 2.4,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 3.0,
        "lossPct": 1.5,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.5,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.6,
        "lossPct": 0.3,
        "isCorrect": false
      }
    ],
    "explanation": "面对超长锁仓期的情况，5年线性解锁的顶级项目考验判断力。适度参与是平衡选择，预期回报3.0%。"
  },
  {
    "id": "002-02",
    "category": "A1",
    "title": "3年悬崖后缓慢释放",
    "desc": "前3年零流动性，第4年开始每月释放2%。项目不错，但5-7年才能全部退出，资金占用周期极长。你会如何行动？",
    "baseProfitPct": 2.8,
    "baseLossPct": 1.4,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 4.2,
        "lossPct": 2.2,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.8,
        "lossPct": 1.4,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.4,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.6,
        "lossPct": 0.3,
        "isCorrect": false
      }
    ],
    "explanation": "面对超长锁仓期的情况，3年悬崖后缓慢释放考验判断力。适度参与是平衡选择，预期回报2.8%。"
  },
  {
    "id": "002-03",
    "category": "A1",
    "title": "TGE仅解锁5%",
    "desc": "95%锁定4年，相当于几乎无流动性。但项目质量极高，是赛道龙头。要不要接受这种条款？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在超长锁仓期的场景下，TGE仅解锁5%需要果断决策。重仓参与可能获得3.3%回报，但需承受较高风险。"
  },
  {
    "id": "002-04",
    "category": "A1",
    "title": "对赌式解锁",
    "desc": "达到TVL 1亿解锁30%，用户10万再解锁30%。未达标则延长锁仓。项目方信心很足。对此你会做出什么选择？",
    "baseProfitPct": 2.5,
    "baseLossPct": 1.2,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.8,
        "lossPct": 2.0,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.5,
        "lossPct": 1.2,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.2,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.5,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在超长锁仓期的场景下，对赌式解锁需要果断决策。重仓参与可能获得3.8%回报，但需承受较高风险。"
  },
  {
    "id": "003-01",
    "category": "A2",
    "title": "白皮书仅20页",
    "desc": "技术细节严重不足，通篇讲愿景。但顾问有Vitalik，团队背景和学术背书很强。敢投吗？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在白皮书质量的不确定性下，白皮书仅20页可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "003-02",
    "category": "A2",
    "title": "无白皮书只有代码",
    "desc": "GitHub代码完整且质量高，但没有任何文档说明。技术人可以看懂，普通投资者一脸懵。此时你会选择怎么做？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在白皮书质量的场景下，无白皮书只有代码需要果断决策。重仓参与可能获得3.3%回报，但需承受较高风险。"
  },
  {
    "id": "003-03",
    "category": "A2",
    "title": "白皮书经Consensys审核",
    "desc": "技术方案经过权威机构审计通过，但团队成员全部匿名。技术可信，人不可知。你的投资策略是？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在白皮书质量的场景下，白皮书经Consensys审核需要果断决策。重仓参与可能获得3.0%回报，但需承受较高风险。"
  },
  {
    "id": "003-04",
    "category": "A2",
    "title": "白皮书写得像科幻",
    "desc": "愿景宏大：构建星际区块链。落地路径模糊，实现时间表激进。概念炒作嫌疑很大。你将如何应对？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在白皮书质量的场景下，白皮书写得像科幻需要果断决策。重仓参与可能获得2.2%回报，但需承受较高风险。"
  },
  {
    "id": "004-01",
    "category": "A3",
    "title": "完全匿名的中本聪模式",
    "desc": "创始人身份不明，代码质量极高，已运行2年无事故。类似早期BTC，社区自治良好。这种情况下，你的选择是？",
    "baseProfitPct": 2.5,
    "baseLossPct": 1.2,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.8,
        "lossPct": 2.0,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.5,
        "lossPct": 1.2,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.2,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.5,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对匿名团队的情况，完全匿名的中本聪模式考验判断力。适度参与是平衡选择，预期回报2.5%。"
  },
  {
    "id": "004-02",
    "category": "A3",
    "title": "部分实名部分匿名",
    "desc": "CEO实名露面，技术负责人坚持匿名。声称保护隐私，但投资者担心技术负责人突然消失。你会如何行动？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对匿名团队的情况，部分实名部分匿名考验判断力。适度参与是平衡选择，预期回报2.0%。"
  },
  {
    "id": "004-03",
    "category": "A3",
    "title": "匿名但拿过ETH基金会Grant",
    "desc": "团队成员不公开，但代码和提案被以太坊基金会认可并资助。技术实力有据可查。你的决策是？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在匿名团队的场景下，匿名但拿过ETH基金会Grant需要果断决策。重仓参与可能获得3.3%回报，但需承受较高风险。"
  },
  {
    "id": "004-04",
    "category": "A3",
    "title": "匿名且有Rug历史嫌疑",
    "desc": "社区怀疑是某Rug项目团队换马甲，部分链上行为相似，但没有确凿证据。对此你会做出什么选择？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对匿名团队的情况，匿名且有Rug历史嫌疑考验判断力。适度参与是平衡选择，预期回报1.2%。"
  },
  {
    "id": "005-01",
    "category": "C1",
    "title": "三家顶级审计背书",
    "desc": "Trail of Bits、OpenZeppelin、CertiK都审计通过，无高危漏洞。代码质量业内顶尖。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在安全审计的不确定性下，三家顶级审计背书可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "005-02",
    "category": "C1",
    "title": "审计通过但有警告",
    "desc": "高危漏洞已修复，中低风险警告3个。项目方表示将在V2解决，目前可控。此时你会选择怎么做？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对安全审计的情况，审计通过但有警告考验判断力。适度参与是平衡选择，预期回报1.8%。"
  },
  {
    "id": "005-03",
    "category": "C1",
    "title": "仅1家不知名审计",
    "desc": "审计公司没听说过，报价便宜，报告只有5页。其他大所拒绝审计，理由时间不够。你的投资策略是？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在安全审计的不确定性下，仅1家不知名审计可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "005-04",
    "category": "C1",
    "title": "审计报告未公开完整版",
    "desc": "只公布摘要，详细报告保密。理由涉及商业机密，但投资者无法全面了解风险。你将如何应对？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "审计报告未公开完整版是安全审计的典型场景。小额试水可以控制风险，预期回报0.8%。"
  },
  {
    "id": "006-01",
    "category": "C3",
    "title": "10万成员零机器人",
    "desc": "Discord 10万成员经检测全是真人，日均消息量适中，讨论质量高，无灌水。这种情况下，你的选择是？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在社区质量的场景下，10万成员零机器人需要果断决策。重仓参与可能获得3.0%回报，但需承受较高风险。"
  },
  {
    "id": "006-02",
    "category": "C3",
    "title": "50万粉丝互动极低",
    "desc": "Twitter粉丝50万，但每条推文只有几十个赞。用工具检测发现90%是僵尸粉。你会如何行动？",
    "baseProfitPct": 1.0,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.0,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对社区质量的情况，50万粉丝互动极低考验判断力。适度参与是平衡选择，预期回报1.0%。"
  },
  {
    "id": "006-03",
    "category": "C3",
    "title": "中文社区独大",
    "desc": "微信群500人每天999+消息极度活跃，但英文社区冷清。地域分布极不均衡。你的决策是？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在社区质量的不确定性下，中文社区独大可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "006-04",
    "category": "C3",
    "title": "开发者社区繁荣",
    "desc": "GitHub contributors 100+，技术讨论热烈。但普通用户只有几千人，大众采用度低。对此你会做出什么选择？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "开发者社区繁荣是社区质量的典型场景。小额试水可以控制风险，预期回报0.9%。"
  },
  {
    "id": "007-01",
    "category": "A1",
    "title": "种子轮估值1亿",
    "desc": "比同类项目A轮还贵，但赛道里这是唯一可投的龙头标的。稀缺性溢价极高。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "种子轮估值1亿是高估值投资的典型场景。小额试水可以控制风险，预期回报0.8%。"
  },
  {
    "id": "007-02",
    "category": "A1",
    "title": "FDV 100亿起步",
    "desc": "fully diluted valuation极高，早期投资者已锁定10倍退出。你的轮次接盘感强烈。此时你会选择怎么做？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对高估值投资的情况，FDV 100亿起步考验判断力。适度参与是平衡选择，预期回报1.2%。"
  },
  {
    "id": "007-03",
    "category": "A1",
    "title": "估值是上一轮3倍",
    "desc": "6个月内估值翻3倍，早期投资人已经赚饱。你现在进去是给前面的人接盘吗？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对高估值投资的情况，估值是上一轮3倍考验判断力。适度参与是平衡选择，预期回报1.3%。"
  },
  {
    "id": "007-04",
    "category": "A1",
    "title": "对标OpenAI估值",
    "desc": "AI+区块链概念，估值参照Web2巨头。但收入只有对方的万分之一，泡沫明显。你将如何应对？",
    "baseProfitPct": 1.0,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.0,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "对标OpenAI估值是高估值投资的典型场景。小额试水可以控制风险，预期回报0.5%。"
  },
  {
    "id": "008-01",
    "category": "B2",
    "title": "OTC折价40%",
    "desc": "因流动性极差，场外交易大幅折价。有人急售额度，这是捡漏机会还是陷阱？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在流动性风险的场景下，OTC折价40%需要果断决策。重仓参与可能获得3.0%回报，但需承受较高风险。"
  },
  {
    "id": "008-02",
    "category": "B2",
    "title": "2年无退出渠道",
    "desc": "SAFT条款严禁转让，锁仓期内没有任何退出可能。即使项目成功，你也必须等到解锁。你会如何行动？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在流动性风险的场景下，2年无退出渠道需要果断决策。重仓参与可能获得2.7%回报，但需承受较高风险。"
  },
  {
    "id": "008-03",
    "category": "B2",
    "title": "OTC限小额交易",
    "desc": "每次最多5万U，大额无法一次性退出。即使想出货，也要分几十次完成。你的决策是？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在流动性风险的不确定性下，OTC限小额交易可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "008-04",
    "category": "B2",
    "title": "转让需项目方批准",
    "desc": "找到买家后还需项目方同意转让。项目方有绝对控制权，买家资质审核权在项目方。对此你会做出什么选择？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在流动性风险的场景下，转让需项目方批准需要果断决策。重仓参与可能获得2.0%回报，但需承受较高风险。"
  },
  {
    "id": "009-01",
    "category": "D1",
    "title": "创始人推特暗示",
    "desc": "创始人发了个'🚀'表情和交易所logo拼图，暗示即将上所。但无官方公告，信吗？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "创始人推特暗示是内幕信号甄别的典型场景。小额试水可以控制风险，预期回报0.9%。"
  },
  {
    "id": "009-02",
    "category": "D1",
    "title": "交易所BD私下接触",
    "desc": "某交易所商务非正式表示'有兴趣'，但未给任何承诺。这种口头信息有价值吗？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "交易所BD私下接触是内幕信号甄别的典型场景。小额试水可以控制风险，预期回报0.8%。"
  },
  {
    "id": "009-03",
    "category": "D1",
    "title": "竞品突然FUD",
    "desc": "竞争对手散布负面消息，声称项目代码抄袭。是水军攻击还是真有问题？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "竞品突然FUD是内幕信号甄别的典型场景。小额试水可以控制风险，预期回报0.8%。"
  },
  {
    "id": "009-04",
    "category": "D1",
    "title": "链上大额转账预热",
    "desc": "项目方钱包近期频繁活动，大额转账到新地址。社区猜测是上所前准备，但不确认。你将如何应对？",
    "baseProfitPct": 1.7,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.5,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.7,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在内幕信号甄别的场景下，链上大额转账预热需要果断决策。重仓参与可能获得2.5%回报，但需承受较高风险。"
  },
  {
    "id": "010-01",
    "category": "C2",
    "title": "创始人失败3次",
    "desc": "前3个项目都因技术问题失败，非跑路。这次技术路线更成熟，他能成功吗？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在团队背景尽调的不确定性下，创始人失败3次可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "010-02",
    "category": "C2",
    "title": "CTO被前雇主起诉",
    "desc": "知识产权纠纷，案件正在审理中。如果败诉，可能无法继续参与项目。你会如何行动？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在团队背景尽调的场景下，CTO被前雇主起诉需要果断决策。重仓参与可能获得1.8%回报，但需承受较高风险。"
  },
  {
    "id": "010-03",
    "category": "C2",
    "title": "顾问8年前被SEC处罚",
    "desc": "现已合规，但记录存在。是历史污点还是持续风险？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在团队背景尽调的不确定性下，顾问8年前被SEC处罚可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "010-04",
    "category": "C2",
    "title": "核心成员融资前离职",
    "desc": "CTO在B轮前夜突然离开，理由个人原因。是内部矛盾还是更好机会？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在团队背景尽调的场景下，核心成员融资前离职需要果断决策。重仓参与可能获得2.0%回报，但需承受较高风险。"
  },
  {
    "id": "011-01",
    "category": "A2",
    "title": "承诺Q1上币安",
    "desc": "项目方明确时间，但无正式协议，只是口头承诺。Q1只剩2个月，能兑现吗？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "承诺Q1上币安是上所预期的典型场景。小额试水可以控制风险，预期回报1.0%。"
  },
  {
    "id": "011-02",
    "category": "A2",
    "title": "已签多家所保密协议",
    "desc": "不能透露具体名单，但表示进展顺利。这种保密信息可信度高吗？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "已签多家所保密协议是上所预期的典型场景。小额试水可以控制风险，预期回报0.9%。"
  },
  {
    "id": "011-03",
    "category": "A2",
    "title": "上所顾问收费30万U",
    "desc": "声称有交易所关系，先付费后推进。这种收费模式风险极高，可能是骗局。你的投资策略是？",
    "baseProfitPct": 0.8,
    "baseLossPct": 0.4,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对上所预期的情况，上所顾问收费30万U考验判断力。适度参与是平衡选择，预期回报0.8%。"
  },
  {
    "id": "011-04",
    "category": "A2",
    "title": "社区投票决定上所",
    "desc": "DAO治理，上所决策由持币人投票。民主但效率低，可能错过最佳时机。你将如何应对？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在上所预期的场景下，社区投票决定上所需要果断决策。重仓参与可能获得2.2%回报，但需承受较高风险。"
  },
  {
    "id": "012-01",
    "category": "A3",
    "title": "MFN条款缺失",
    "desc": "后入场者条款可能更好，但你没有最惠国待遇保护。信息不对称风险大。这种情况下，你的选择是？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在投资条款的场景下，MFN条款缺失需要果断决策。重仓参与可能获得2.2%回报，但需承受较高风险。"
  },
  {
    "id": "012-02",
    "category": "A3",
    "title": "反稀释保护",
    "desc": "如果后续融资估值更低，你可以获得补偿Token。下行风险有一定保护。你会如何行动？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对投资条款的情况，反稀释保护考验判断力。适度参与是平衡选择，预期回报1.8%。"
  },
  {
    "id": "012-03",
    "category": "A3",
    "title": "无董事会席位",
    "desc": "纯财务投资，无治理权，信息获取完全依赖项目方主动披露。你的决策是？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "无董事会席位是投资条款的典型场景。小额试水可以控制风险，预期回报0.7%。"
  },
  {
    "id": "012-04",
    "category": "A3",
    "title": "清算优先权",
    "desc": "项目失败时，你优先拿回剩余资产。但最后能拿回多少很难说。对此你会做出什么选择？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在投资条款的场景下，清算优先权需要果断决策。重仓参与可能获得2.4%回报，但需承受较高风险。"
  },
  {
    "id": "013-01",
    "category": "A1",
    "title": "赛道已有3个独角兽",
    "desc": "Arbitrum、Optimism、Base已占据大部分市场。新进入者差异化不明显。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对赛道竞争的情况，赛道已有3个独角兽考验判断力。适度参与是平衡选择，预期回报1.3%。"
  },
  {
    "id": "013-02",
    "category": "A1",
    "title": "蓝海赛道首个进入者",
    "desc": "全新概念RWA+AI，无竞品，先发优势明显。但教育市场成本极高。此时你会选择怎么做？",
    "baseProfitPct": 2.5,
    "baseLossPct": 1.2,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.8,
        "lossPct": 2.0,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.5,
        "lossPct": 1.2,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.2,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.5,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在赛道竞争的场景下，蓝海赛道首个进入者需要果断决策。重仓参与可能获得3.8%回报，但需承受较高风险。"
  },
  {
    "id": "013-03",
    "category": "A1",
    "title": "技术领先6个月",
    "desc": "窗口期有限，能否在竞品追赶前快速占领市场是关键。你的投资策略是？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在赛道竞争的不确定性下，技术领先6个月可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "013-04",
    "category": "A1",
    "title": "Coinbase宣布入场",
    "desc": "巨头即将推出同类业务，竞争格局即将剧变。小项目还有生存空间吗？",
    "baseProfitPct": 1.0,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.0,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "Coinbase宣布入场是赛道竞争的典型场景。小额试水可以控制风险，预期回报0.5%。"
  },
  {
    "id": "014-01",
    "category": "A2",
    "title": "1年悬崖后月解锁",
    "desc": "前12个月零流动性，之后每月释放8.33%。长时间资金锁定考验信念。这种情况下，你的选择是？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在解锁机制的不确定性下，1年悬崖后月解锁可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "014-02",
    "category": "A2",
    "title": "TGE解锁20%然后悬崖",
    "desc": "先给一点甜头，之后1年无流动性。很多项目TGE后暴跌，20%可能也保不住。你会如何行动？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "TGE解锁20%然后悬崖是解锁机制的典型场景。小额试水可以控制风险，预期回报0.8%。"
  },
  {
    "id": "014-03",
    "category": "A2",
    "title": "里程碑式解锁",
    "desc": "主网上线解锁50%，生态TVL达1亿再解锁30%。与项目表现挂钩。你的决策是？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对解锁机制的情况，里程碑式解锁考验判断力。适度参与是平衡选择，预期回报2.2%。"
  },
  {
    "id": "014-04",
    "category": "A2",
    "title": "团队锁仓更长",
    "desc": "你锁1年，团队锁3年，核心成员锁4年。利益深度对齐，是好信号。对此你会做出什么选择？",
    "baseProfitPct": 2.3,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.4,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.3,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.5,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "团队锁仓更长是解锁机制的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "015-01",
    "category": "C1",
    "title": "国库多签完全公开",
    "desc": "5/7多签，成员全部实名，所有链上操作可追踪。透明度高。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "国库多签完全公开是资金透明度的典型场景。小额试水可以控制风险，预期回报1.0%。"
  },
  {
    "id": "015-02",
    "category": "C1",
    "title": "国库大额转账到交易所",
    "desc": "近期频繁向币安、OKX转账大额USDT。疑似出货或支付上所费用，不明朗。此时你会选择怎么做？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对资金透明度的情况，国库大额转账到交易所考验判断力。适度参与是平衡选择，预期回报1.2%。"
  },
  {
    "id": "015-03",
    "category": "C1",
    "title": "季度财务报告",
    "desc": "类似上市公司披露，有收入、支出、资产负债表。透明专业。你的投资策略是？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "季度财务报告是资金透明度的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "015-04",
    "category": "C1",
    "title": "第三方托管",
    "desc": "Fireblocks托管，项目方无法直接动用资金。安全性高但灵活性低。你将如何应对？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在资金透明度的场景下，第三方托管需要果断决策。重仓参与可能获得2.8%回报，但需承受较高风险。"
  },
  {
    "id": "016-01",
    "category": "A3",
    "title": "GameFi转向DeFi",
    "desc": "原赛道遇冷，团队决定转型。执行力待验证，早期投资者利益如何保障？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对Pivot转型的情况，GameFi转向DeFi考验判断力。适度参与是平衡选择，预期回报1.5%。"
  },
  {
    "id": "016-02",
    "category": "A3",
    "title": "保留原业务同时拓展",
    "desc": "双轮驱动策略，但资源分散。两个战场都面临激烈竞争。你会如何行动？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对Pivot转型的情况，保留原业务同时拓展考验判断力。适度参与是平衡选择，预期回报1.6%。"
  },
  {
    "id": "016-03",
    "category": "A3",
    "title": "完全放弃原方向",
    "desc": "180度转向，原产品停止维护。早期投资者是投的原方向，现在变了。你的决策是？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对Pivot转型的情况，完全放弃原方向考验判断力。适度参与是平衡选择，预期回报1.2%。"
  },
  {
    "id": "016-04",
    "category": "A3",
    "title": "社区投票决定Pivot",
    "desc": "DAO治理下的大方向调整，民主但决策慢。转型窗口期可能错过。对此你会做出什么选择？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在Pivot转型的不确定性下，社区投票决定Pivot可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "017-01",
    "category": "E2",
    "title": "零营销预算纯Organic",
    "desc": "产品说话，不花钱推广，增长缓慢但扎实。酒香不怕巷子深？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在营销能力的不确定性下，零营销预算纯Organic可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "017-02",
    "category": "E2",
    "title": "营销预算占募资50%",
    "desc": "重营销轻研发，短期热度高，长期技术护城河不足。此时你会选择怎么做？",
    "baseProfitPct": 1.0,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.0,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "营销预算占募资50%是营销能力的典型场景。小额试水可以控制风险，预期回报0.5%。"
  },
  {
    "id": "017-03",
    "category": "E2",
    "title": "聘请顶级PR公司",
    "desc": "Wachsman PR，费用高昂，曝光度提升。但币圈对PR越来越免疫。你的投资策略是？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对营销能力的情况，聘请顶级PR公司考验判断力。适度参与是平衡选择，预期回报1.5%。"
  },
  {
    "id": "017-04",
    "category": "E2",
    "title": "创始人亲自做KOL",
    "desc": "个人IP强，Twitter粉丝百万。但项目独立性和持续性存疑。你将如何应对？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "创始人亲自做KOL是营销能力的典型场景。小额试水可以控制风险，预期回报0.8%。"
  },
  {
    "id": "018-01",
    "category": "C2",
    "title": "创始人年薪5万U",
    "desc": "远低于市场水平，长期主义信号。但也要考虑生活压力导致的短期行为。这种情况下，你的选择是？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在团队激励的场景下，创始人年薪5万U需要果断决策。重仓参与可能获得2.8%回报，但需承受较高风险。"
  },
  {
    "id": "018-02",
    "category": "C2",
    "title": "高管薪资对标谷歌",
    "desc": "顶级待遇，烧钱速度快。每年薪资支出就几百万U，资金消耗快。你会如何行动？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对团队激励的情况，高管薪资对标谷歌考验判断力。适度参与是平衡选择，预期回报1.4%。"
  },
  {
    "id": "018-03",
    "category": "C2",
    "title": "Token占薪资50%",
    "desc": "现金少股权多，利益与项目深度绑定。短期生活压力大但激励对齐。你的决策是？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在团队激励的场景下，Token占薪资50%需要果断决策。重仓参与可能获得3.0%回报，但需承受较高风险。"
  },
  {
    "id": "018-04",
    "category": "C2",
    "title": "匿名团队薪资不明",
    "desc": "资金流向无法追踪，不知道谁在拿多少。透明度极低。对此你会做出什么选择？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "匿名团队薪资不明是团队激励的典型场景。小额试水可以控制风险，预期回报0.6%。"
  },
  {
    "id": "019-01",
    "category": "A2",
    "title": "交易销毁+回购双通缩",
    "desc": "每笔交易销毁0.1%，项目方定期回购销毁。但依赖交易量支撑。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在通缩模型的不确定性下，交易销毁+回购双通缩可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "019-02",
    "category": "A2",
    "title": "veToken模型",
    "desc": "锁仓越久收益越高，Curve模式。鼓励长期持有，减少抛压。此时你会选择怎么做？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "veToken模型是通缩模型的典型场景。小额试水可以控制风险，预期回报1.0%。"
  },
  {
    "id": "019-03",
    "category": "A2",
    "title": "无通缩纯增发",
    "desc": "持续通胀，每年增发10%。持有者被稀释，需要持续买入才能维持份额。你的投资策略是？",
    "baseProfitPct": 1.0,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.0,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在通缩模型的场景下，无通缩纯增发需要果断决策。重仓参与可能获得1.5%回报，但需承受较高风险。"
  },
  {
    "id": "019-04",
    "category": "A2",
    "title": "动态调整通胀率",
    "desc": "根据生态表现自动调整，表现好就减发，表现差就增发。机制复杂。你将如何应对？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对通缩模型的情况，动态调整通胀率考验判断力。适度参与是平衡选择，预期回报1.6%。"
  },
  {
    "id": "020-01",
    "category": "A1",
    "title": "B轮估值翻5倍",
    "desc": "早期投资者已赚饱，你的轮次接盘。项目好但价格太高。这种情况下，你的选择是？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "B轮估值翻5倍是轮次选择的典型场景。小额试水可以控制风险，预期回报0.7%。"
  },
  {
    "id": "020-02",
    "category": "A1",
    "title": "交易所战略轮",
    "desc": "某头部交易所战略投资，承诺上所。估值高但流动性有保障。你会如何行动？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对轮次选择的情况，交易所战略轮考验判断力。适度参与是平衡选择，预期回报1.8%。"
  },
  {
    "id": "020-03",
    "category": "A1",
    "title": "Pre-IPO最后一轮",
    "desc": "上市前最后一轮，估值顶格。IPO后的上涨空间有限。你的决策是？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在轮次选择的不确定性下，Pre-IPO最后一轮可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "020-04",
    "category": "A1",
    "title": "社区轮开放散户",
    "desc": "额度小但门槛低，500U起投。FOMO机会但可能抢到即套牢。对此你会做出什么选择？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在轮次选择的不确定性下，社区轮开放散户可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "021-01",
    "category": "E2",
    "title": "与微软签署MOU",
    "desc": "合作开发企业级区块链解决方案，但MOU不具约束力，随时可取消。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在战略合作的不确定性下，与微软签署MOU可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "021-02",
    "category": "E2",
    "title": "与某DeFi龙头合作",
    "desc": "集成对方协议，带来流量和技术背书。但对方随时可解除集成。此时你会选择怎么做？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对战略合作的情况，与某DeFi龙头合作考验判断力。适度参与是平衡选择，预期回报1.9%。"
  },
  {
    "id": "021-03",
    "category": "E2",
    "title": "战略合作无具体细节",
    "desc": "宣布合作但无金额、无时间表、无具体产品。纯PR性质。你的投资策略是？",
    "baseProfitPct": 1.1,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.7,
        "lossPct": 0.9,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "战略合作无具体细节是战略合作的典型场景。小额试水可以控制风险，预期回报0.6%。"
  },
  {
    "id": "021-04",
    "category": "E2",
    "title": "独家战略合作",
    "desc": "某领域唯一合作伙伴，排他性强。但对方实力一般，独家意义有限。你将如何应对？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对战略合作的情况，独家战略合作考验判断力。适度参与是平衡选择，预期回报1.6%。"
  },
  {
    "id": "022-01",
    "category": "B2",
    "title": "老股东折价20%出售",
    "desc": "急需用钱，OTC出售额度。项目基本面无变化，是捡漏机会。这种情况下，你的选择是？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对OTC交易的情况，老股东折价20%出售考验判断力。适度参与是平衡选择，预期回报2.2%。"
  },
  {
    "id": "022-02",
    "category": "B2",
    "title": "OTC溢价购买",
    "desc": "项目热度高，有人。愿意溢价30%买。你的额度。卖还是不卖？",
    "baseProfitPct": 1.7,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.5,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.7,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "OTC溢价购买是OTC交易的典型场景。小额试水可以控制风险，预期回报0.8%。"
  },
  {
    "id": "022-03",
    "category": "B2",
    "title": "OTC交易方身份不明",
    "desc": "对方不愿透露身份，要求先转Token后付款。诈骗风险极高。你的决策是？",
    "baseProfitPct": 0.5,
    "baseLossPct": 0.2,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 0.5,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.1,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在OTC交易的不确定性下，OTC交易方身份不明可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "022-04",
    "category": "B2",
    "title": "通过OTC平台交易",
    "desc": "有第三方托管，相对安全，但平台收3%手续费。对此你会做出什么选择？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在OTC交易的不确定性下，通过OTC平台交易可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "023-01",
    "category": "E1",
    "title": "重大升级社区投票",
    "desc": "协议升级需持币人投票通过，目前支持率70%。你会投支持还是反对？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "重大升级社区投票是社区治理的典型场景。小额试水可以控制风险，预期回报0.9%。"
  },
  {
    "id": "023-02",
    "category": "E1",
    "title": "治理攻击风险",
    "desc": "某鲸鱼持有15%代币，可能操纵投票结果。去中心化存疑。此时你会选择怎么做？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对社区治理的情况，治理攻击风险考验判断力。适度参与是平衡选择，预期回报1.3%。"
  },
  {
    "id": "023-03",
    "category": "E1",
    "title": "低投票参与率",
    "desc": "重要提案只有5%代币参与投票。社区治理形同虚设。你的投资策略是？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对社区治理的情况，低投票参与率考验判断力。适度参与是平衡选择，预期回报1.2%。"
  },
  {
    "id": "023-04",
    "category": "E1",
    "title": "专业治理委托",
    "desc": "可将投票权委托给专业治理代表，提高决策质量。你将如何应对？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在社区治理的不确定性下，专业治理委托可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "024-01",
    "category": "A3",
    "title": "SEC调查传闻",
    "desc": "市场传闻SEC正在调查该项目，但无官方确认。恐慌情绪蔓延。这种情况下，你的选择是？",
    "baseProfitPct": 1.0,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.0,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在监管风险的场景下，SEC调查传闻需要果断决策。重仓参与可能获得1.5%回报，但需承受较高风险。"
  },
  {
    "id": "024-02",
    "category": "A3",
    "title": "创始人国籍敏感",
    "desc": "创始人来自被制裁国家，可能面临国际监管压力。你会如何行动？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在监管风险的场景下，创始人国籍敏感需要果断决策。重仓参与可能获得1.8%回报，但需承受较高风险。"
  },
  {
    "id": "024-03",
    "category": "A3",
    "title": "证券属性模糊",
    "desc": "代币设计可能符合Howey测试，有被认定为证券的风险。你的决策是？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在监管风险的场景下，证券属性模糊需要果断决策。重仓参与可能获得2.0%回报，但需承受较高风险。"
  },
  {
    "id": "024-04",
    "category": "A3",
    "title": "已获得监管许可",
    "desc": "某友好 jurisdiction 颁发牌照，合规运营。监管风险低。对此你会做出什么选择？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对监管风险的情况，已获得监管许可考验判断力。适度参与是平衡选择，预期回报2.1%。"
  },
  {
    "id": "025-01",
    "category": "A1",
    "title": "TVL 30天翻倍",
    "desc": "资金快速增长，但主要是项目方自己的钱，左手倒右手。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对TVL增长的情况，TVL 30天翻倍考验判断力。适度参与是平衡选择，预期回报1.3%。"
  },
  {
    "id": "025-02",
    "category": "A1",
    "title": "真实用户TVL增长",
    "desc": "链上分析显示新增1万个独立地址，增长真实可持续。此时你会选择怎么做？",
    "baseProfitPct": 2.3,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.4,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.3,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.5,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在TVL增长的不确定性下，真实用户TVL增长可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "025-03",
    "category": "A1",
    "title": "高收益 farming 吸引资金",
    "desc": "APR 200%吸引大量资金，但不可持续，收益下降后可能撤资。你的投资策略是？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在TVL增长的场景下，高收益 farming 吸引资金需要果断决策。重仓参与可能获得2.2%回报，但需承受较高风险。"
  },
  {
    "id": "025-04",
    "category": "A1",
    "title": "TVL stagnant",
    "desc": "3个月TVL无增长，协议陷入停滞，缺乏新资金进入。你将如何应对？",
    "baseProfitPct": 1.0,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.0,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在TVL增长的不确定性下，TVL stagnant可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "026-01",
    "category": "C2",
    "title": "CTO与CEO理念不合",
    "desc": "技术路线分歧严重，CTO威胁离职。团队不稳定信号。这种情况下，你的选择是？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在团队分裂的不确定性下，CTO与CEO理念不合可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "026-02",
    "category": "C2",
    "title": "核心团队集体出走",
    "desc": "3名核心成员同时离职，疑似另起炉灶。项目前景堪忧。你会如何行动？",
    "baseProfitPct": 0.7,
    "baseLossPct": 0.3,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 0.7,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.1,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在团队分裂的不确定性下，核心团队集体出走可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "026-03",
    "category": "C2",
    "title": "友好分手",
    "desc": "成员离职但做好交接，持有Token锁仓不变。影响可控。你的决策是？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "友好分手是团队分裂的典型场景。小额试水可以控制风险，预期回报0.8%。"
  },
  {
    "id": "026-04",
    "category": "C2",
    "title": "引入新高管",
    "desc": "离职后迅速找到业内资深人士接替，可能带来新气象。对此你会做出什么选择？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在团队分裂的场景下，引入新高管需要果断决策。重仓参与可能获得2.8%回报，但需承受较高风险。"
  },
  {
    "id": "027-01",
    "category": "E2",
    "title": "快照前大量资金涌入",
    "desc": "空投快照前TVL暴涨，疑似刷量。空投后可能大幅撤资。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在空投预期的场景下，快照前大量资金涌入需要果断决策。重仓参与可能获得2.1%回报，但需承受较高风险。"
  },
  {
    "id": "027-02",
    "category": "E2",
    "title": "空投规则复杂",
    "desc": "多种条件加权计算，规则不透明。不确定性极高。此时你会选择怎么做？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "空投规则复杂是空投预期的典型场景。小额试水可以控制风险，预期回报0.7%。"
  },
  {
    "id": "027-03",
    "category": "E2",
    "title": "确认获得大额空投",
    "desc": "已确认将获得价值10万U的空投，但需锁仓6个月。你的投资策略是？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "确认获得大额空投是空投预期的典型场景。小额试水可以控制风险，预期回报1.0%。"
  },
  {
    "id": "027-04",
    "category": "E2",
    "title": "空投后立即抛售",
    "desc": "空投可立即交易，社区计划集体抛售。价格可能崩盘。你将如何应对？",
    "baseProfitPct": 0.9,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在空投预期的场景下，空投后立即抛售需要果断决策。重仓参与可能获得1.4%回报，但需承受较高风险。"
  },
  {
    "id": "028-01",
    "category": "A2",
    "title": "团队Vesting即将到期",
    "desc": "团队Token即将解锁，可能面临巨大抛压。这种情况下，你的选择是？",
    "baseProfitPct": 1.1,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 1.7,
        "lossPct": 0.9,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "团队Vesting即将到期是Vesting条款的典型场景。小额试水可以控制风险，预期回报0.6%。"
  },
  {
    "id": "028-02",
    "category": "A2",
    "title": "延长Vesting提案",
    "desc": "团队主动提议延长锁仓，展示长期信心。正面信号。你会如何行动？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在Vesting条款的不确定性下，延长Vesting提案可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "028-03",
    "category": "A2",
    "title": "投资者与团队Vesting不同步",
    "desc": "你早解锁，团队晚解锁。可能存在利益冲突。你的决策是？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对Vesting条款的情况，投资者与团队Vesting不同步考验判断力。适度参与是平衡选择，预期回报1.5%。"
  },
  {
    "id": "028-04",
    "category": "A2",
    "title": "加速Vesting条件",
    "desc": "达到某些目标可提前解锁，激励团队快速推进。对此你会做出什么选择？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在Vesting条款的不确定性下，加速Vesting条件可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "029-01",
    "category": "A1",
    "title": "AI赛道火热",
    "desc": "项目主打AI+区块链，恰逢AI概念爆炒。是风口还是泡沫？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在叙事匹配的场景下，AI赛道火热需要果断决策。重仓参与可能获得2.7%回报，但需承受较高风险。"
  },
  {
    "id": "029-02",
    "category": "A1",
    "title": "RWA叙事兴起",
    "desc": "传统资产上链概念升温，项目有相关产品但规模很小。此时你会选择怎么做？",
    "baseProfitPct": 1.7,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.5,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.7,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "RWA叙事兴起是叙事匹配的典型场景。小额试水可以控制风险，预期回报0.8%。"
  },
  {
    "id": "029-03",
    "category": "A1",
    "title": "叙事过时",
    "desc": "GameFi概念已冷却，项目还在主打Play2Earn。市场不买账。你的投资策略是？",
    "baseProfitPct": 0.9,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对叙事匹配的情况，叙事过时考验判断力。适度参与是平衡选择，预期回报0.9%。"
  },
  {
    "id": "029-04",
    "category": "A1",
    "title": "创造新叙事",
    "desc": "提出全新概念DeFAI，市场尚未理解。教育成本高但先发优势大。你将如何应对？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在叙事匹配的场景下，创造新叙事需要果断决策。重仓参与可能获得3.0%回报，但需承受较高风险。"
  },
  {
    "id": "030-01",
    "category": "E2",
    "title": "上所即破发",
    "desc": "开盘即跌破发行价，市场情绪低迷。是抄底还是止损？",
    "baseProfitPct": 1.0,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.0,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "上所即破发是上所表现的典型场景。小额试水可以控制风险，预期回报0.5%。"
  },
  {
    "id": "030-02",
    "category": "E2",
    "title": "上所首日涨10倍",
    "desc": "开盘暴涨，但随后快速回落。追高还是等待？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对上所表现的情况，上所首日涨10倍考验判断力。适度参与是平衡选择，预期回报1.6%。"
  },
  {
    "id": "030-03",
    "category": "E2",
    "title": "上所后横盘",
    "desc": "价格在发行价附近横盘，等待方向选择。你的决策是？",
    "baseProfitPct": 1.7,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.5,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.7,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对上所表现的情况，上所后横盘考验判断力。适度参与是平衡选择，预期回报1.7%。"
  },
  {
    "id": "030-04",
    "category": "E2",
    "title": "上所即被下架",
    "desc": "因流动性不足或合规问题被交易所下架。重大打击。对此你会做出什么选择？",
    "baseProfitPct": 0.5,
    "baseLossPct": 0.2,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 0.5,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.1,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "上所即被下架是上所表现的典型场景。小额试水可以控制风险，预期回报0.2%。"
  },
  {
    "id": "031-01",
    "category": "C1",
    "title": "审计发现高危漏洞",
    "desc": "可重入攻击风险，但尚未被利用。项目方承诺2周内修复。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对审计发现的情况，审计发现高危漏洞考验判断力。适度参与是平衡选择，预期回报1.2%。"
  },
  {
    "id": "031-02",
    "category": "C1",
    "title": "审计发现逻辑错误",
    "desc": "经济模型设计有缺陷，可能导致通胀失控。需要重新设计。此时你会选择怎么做？",
    "baseProfitPct": 1.0,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.0,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在审计发现的场景下，审计发现逻辑错误需要果断决策。重仓参与可能获得1.5%回报，但需承受较高风险。"
  },
  {
    "id": "031-03",
    "category": "C1",
    "title": "审计仅发现样式问题",
    "desc": "代码质量高，只有变量命名等小问题。安全性好。你的投资策略是？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "审计仅发现样式问题是审计发现的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "031-04",
    "category": "C1",
    "title": "审计报告延迟发布",
    "desc": "原定于上周发布，现推迟。可能发现了严重问题。你将如何应对？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在审计发现的不确定性下，审计报告延迟发布可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "032-01",
    "category": "C2",
    "title": "斯坦福/MIT背景",
    "desc": "名校毕业，技术扎实。学术背景强但商业经验待验证。这种情况下，你的选择是？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在团队背景的场景下，斯坦福/MIT背景需要果断决策。重仓参与可能获得3.0%回报，但需承受较高风险。"
  },
  {
    "id": "032-02",
    "category": "C2",
    "title": "连续成功创业者",
    "desc": "创始团队曾成功退出过2个项目，经验丰富。你会如何行动？",
    "baseProfitPct": 2.3,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.4,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.3,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.5,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在团队背景的场景下，连续成功创业者需要果断决策。重仓参与可能获得3.4%回报，但需承受较高风险。"
  },
  {
    "id": "032-03",
    "category": "C2",
    "title": "大厂高管背景",
    "desc": "前Google/Meta高级员工，技术强但创业是第一次。你的决策是？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "大厂高管背景是团队背景的典型场景。小额试水可以控制风险，预期回报0.9%。"
  },
  {
    "id": "032-04",
    "category": "C2",
    "title": "团队过于年轻",
    "desc": "平均年龄24岁，缺乏行业经验。有冲劲但可能踩坑。对此你会做出什么选择？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "团队过于年轻是团队背景的典型场景。小额试水可以控制风险，预期回报0.8%。"
  },
  {
    "id": "033-01",
    "category": "A2",
    "title": "市场极度FOMO",
    "desc": "同类项目都在暴涨，社区情绪狂热。是见顶信号还是继续上涨？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对市场情绪的情况，市场极度FOMO考验判断力。适度参与是平衡选择，预期回报1.4%。"
  },
  {
    "id": "033-02",
    "category": "A2",
    "title": "市场恐慌抛售",
    "desc": "大盘暴跌，所有项目都在跌。是抄底机会还是下跌中继？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在市场情绪的场景下，市场恐慌抛售需要果断决策。重仓参与可能获得2.4%回报，但需承受较高风险。"
  },
  {
    "id": "033-03",
    "category": "A2",
    "title": "无人问津",
    "desc": "项目质量很好但市场关注度低。价值发现需要时间。你的投资策略是？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对市场情绪的情况，无人问津考验判断力。适度参与是平衡选择，预期回报1.8%。"
  },
  {
    "id": "033-04",
    "category": "A2",
    "title": "机构开始入场",
    "desc": "链上显示聪明钱开始积累，可能是底部信号。你将如何应对？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在市场情绪的场景下，机构开始入场需要果断决策。重仓参与可能获得3.0%回报，但需承受较高风险。"
  },
  {
    "id": "034-01",
    "category": "A3",
    "title": "里程碑延期3个月",
    "desc": "技术复杂度被低估，需要更多时间。是正常延期还是管理问题？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在开发进度的场景下，里程碑延期3个月需要果断决策。重仓参与可能获得2.1%回报，但需承受较高风险。"
  },
  {
    "id": "034-02",
    "category": "A3",
    "title": "提前完成开发",
    "desc": "团队效率超预期，提前2个月交付。执行力强。你会如何行动？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在开发进度的不确定性下，提前完成开发可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "034-03",
    "category": "A3",
    "title": "频繁跳票",
    "desc": "这已经是第3次延期，团队执行力存疑。你的决策是？",
    "baseProfitPct": 1.0,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.0,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在开发进度的场景下，频繁跳票需要果断决策。重仓参与可能获得1.5%回报，但需承受较高风险。"
  },
  {
    "id": "034-04",
    "category": "A3",
    "title": "砍掉非核心功能",
    "desc": "为按时交付，砍掉部分功能，专注核心。务实的选择。对此你会做出什么选择？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对开发进度的情况，砍掉非核心功能考验判断力。适度参与是平衡选择，预期回报1.8%。"
  },
  {
    "id": "035-01",
    "category": "D2",
    "title": "团队要求追加投资",
    "desc": "称资金紧张，需要老股东追加，否则项目可能停摆。绑架老股东？",
    "baseProfitPct": 1.0,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.0,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对忠诚度测试的情况，团队要求追加投资考验判断力。适度参与是平衡选择，预期回报1.0%。"
  },
  {
    "id": "035-02",
    "category": "D2",
    "title": "延长锁仓换奖励",
    "desc": "自愿延长锁仓6个月可获得额外5%Token。测试持有者信心。此时你会选择怎么做？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在忠诚度测试的不确定性下，延长锁仓换奖励可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "035-03",
    "category": "D2",
    "title": "社区投票稀释老股东",
    "desc": "提案增发Token用于生态，但会稀释老股东。投支持还是反对？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对忠诚度测试的情况，社区投票稀释老股东考验判断力。适度参与是平衡选择，预期回报1.4%。"
  },
  {
    "id": "035-04",
    "category": "D2",
    "title": "项目方回购Token",
    "desc": "项目方用国库资金回购并销毁，提升持有者价值。你将如何应对？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "项目方回购Token是忠诚度测试的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "036-01",
    "category": "B1",
    "title": "DEX滑点5%",
    "desc": "流动性不足，大额交易滑点高，成本高。这种情况下，你的选择是？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在流动性管理的不确定性下，DEX滑点5%可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "036-02",
    "category": "B1",
    "title": "CEX深度良好",
    "desc": "币安/OKX深度足够，大额交易无压力。流动性好。你会如何行动？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对流动性管理的情况，CEX深度良好考验判断力。适度参与是平衡选择，预期回报2.0%。"
  },
  {
    "id": "036-03",
    "category": "B1",
    "title": "LP挖矿收益高",
    "desc": "提供流动性APR 100%，但无常损失风险大。你的决策是？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对流动性管理的情况，LP挖矿收益高考验判断力。适度参与是平衡选择，预期回报1.6%。"
  },
  {
    "id": "036-04",
    "category": "B1",
    "title": "流动性挖矿即将结束",
    "desc": "激励期结束，LP可能撤资，流动性将枯竭。对此你会做出什么选择？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "流动性挖矿即将结束是流动性管理的典型场景。小额试水可以控制风险，预期回报0.6%。"
  },
  {
    "id": "037-01",
    "category": "A1",
    "title": "获得头部客户",
    "desc": "签下某500强企业作为客户，商业化里程碑。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.3,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.4,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.3,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.5,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在竞争胜出的不确定性下，获得头部客户可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "037-02",
    "category": "A1",
    "title": "技术性能领先",
    "desc": "TPS、延迟等核心指标超越竞品，技术优势明显。此时你会选择怎么做？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "技术性能领先是竞争胜出的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "037-03",
    "category": "A1",
    "title": "价格战",
    "desc": "大幅降低手续费抢夺市场，收入下降但份额提升。你的投资策略是？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在竞争胜出的不确定性下，价格战可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "037-04",
    "category": "A1",
    "title": "竞品被攻击",
    "desc": "主要竞争对手被黑客攻击，用户流向本项目。你将如何应对？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在竞争胜出的不确定性下，竞品被攻击可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "038-01",
    "category": "B3",
    "title": "单一项目重仓",
    "desc": "看好一个项目All in，集中风险集中收益。这种情况下，你的选择是？",
    "baseProfitPct": 2.5,
    "baseLossPct": 1.2,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.8,
        "lossPct": 2.0,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.5,
        "lossPct": 1.2,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.2,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.5,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在分散策略的场景下，单一项目重仓需要果断决策。重仓参与可能获得3.8%回报，但需承受较高风险。"
  },
  {
    "id": "038-02",
    "category": "B3",
    "title": "赛道分散投资",
    "desc": "同时投资5个不同赛道的项目，分散风险。你会如何行动？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对分散策略的情况，赛道分散投资考验判断力。适度参与是平衡选择，预期回报1.8%。"
  },
  {
    "id": "038-03",
    "category": "B3",
    "title": "阶段分散",
    "desc": "种子、A、B轮各投一些，平衡风险和流动性。你的决策是？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对分散策略的情况，阶段分散考验判断力。适度参与是平衡选择，预期回报1.9%。"
  },
  {
    "id": "038-04",
    "category": "B3",
    "title": "过度分散",
    "desc": "投了20个项目，每个都研究不深。精力分散。对此你会做出什么选择？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在分散策略的场景下，过度分散需要果断决策。重仓参与可能获得2.0%回报，但需承受较高风险。"
  },
  {
    "id": "039-01",
    "category": "D1",
    "title": "团队突然失联",
    "desc": "Discord、Twitter 3天无更新，团队不回应。危险信号。面对这种情况，你该如何决策？",
    "baseProfitPct": 0.5,
    "baseLossPct": 0.2,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 0.5,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.1,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "团队突然失联是跑路风险的典型场景。小额试水可以控制风险，预期回报0.2%。"
  },
  {
    "id": "039-02",
    "category": "D1",
    "title": "国库大额转出",
    "desc": "多签钱包大额资金转到不明地址。可能跑路或支付费用。此时你会选择怎么做？",
    "baseProfitPct": 0.8,
    "baseLossPct": 0.4,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在跑路风险的场景下，国库大额转出需要果断决策。重仓参与可能获得1.2%回报，但需承受较高风险。"
  },
  {
    "id": "039-03",
    "category": "D1",
    "title": "代码不再更新",
    "desc": "GitHub 1个月无提交，开发停滞。项目可能被放弃。你的投资策略是？",
    "baseProfitPct": 0.7,
    "baseLossPct": 0.3,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 0.7,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.1,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对跑路风险的情况，代码不再更新考验判断力。适度参与是平衡选择，预期回报0.7%。"
  },
  {
    "id": "039-04",
    "category": "D1",
    "title": "社区FUD蔓延",
    "desc": "大量负面消息，项目方不回应。恐慌情绪蔓延。你将如何应对？",
    "baseProfitPct": 0.9,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对跑路风险的情况，社区FUD蔓延考验判断力。适度参与是平衡选择，预期回报0.9%。"
  },
  {
    "id": "040-01",
    "category": "B2",
    "title": "理论回报10倍",
    "desc": "基于对标公司估值，理论上可达10倍。但实现路径不清晰。这种情况下，你的选择是？",
    "baseProfitPct": 1.7,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.5,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.7,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在回报计算的场景下，理论回报10倍需要果断决策。重仓参与可能获得2.5%回报，但需承受较高风险。"
  },
  {
    "id": "040-02",
    "category": "B2",
    "title": "已实现3倍回报",
    "desc": "新一轮估值已是投资时3倍，账面浮盈但未退出。你会如何行动？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在回报计算的场景下，已实现3倍回报需要果断决策。重仓参与可能获得3.0%回报，但需承受较高风险。"
  },
  {
    "id": "040-03",
    "category": "B2",
    "title": "退出回报测算",
    "desc": "考虑解锁期、流动性折扣，实际到手可能只有账面50%。你的决策是？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在回报计算的场景下，退出回报测算需要果断决策。重仓参与可能获得2.1%回报，但需承受较高风险。"
  },
  {
    "id": "040-04",
    "category": "B2",
    "title": "复利再投资",
    "desc": "项目分红或收益继续投入，复利效应。对此你会做出什么选择？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对回报计算的情况，复利再投资考验判断力。适度参与是平衡选择，预期回报2.1%。"
  },
  {
    "id": "041-01",
    "category": "A2",
    "title": "大盘高点上所",
    "desc": "BTC创历史新高时上所，情绪好但可能是顶部。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在上所时机的场景下，大盘高点上所需要果断决策。重仓参与可能获得2.2%回报，但需承受较高风险。"
  },
  {
    "id": "041-02",
    "category": "A2",
    "title": "熊市低点上所",
    "desc": "市场情绪低迷时上所，估值低但流动性差。此时你会选择怎么做？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在上所时机的场景下，熊市低点上所需要果断决策。重仓参与可能获得2.4%回报，但需承受较高风险。"
  },
  {
    "id": "041-03",
    "category": "A2",
    "title": "竞品刚上所",
    "desc": "借着竞品热度赶紧上，搭顺风车策略。你的投资策略是？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "竞品刚上所是上所时机的典型场景。小额试水可以控制风险，预期回报0.9%。"
  },
  {
    "id": "041-04",
    "category": "A2",
    "title": "延迟上所等更好时机",
    "desc": "原定上所推迟，等待市场情绪好转。你将如何应对？",
    "baseProfitPct": 1.7,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.5,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.7,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在上所时机的场景下，延迟上所等更好时机需要果断决策。重仓参与可能获得2.5%回报，但需承受较高风险。"
  },
  {
    "id": "042-01",
    "category": "C3",
    "title": "每周AMA更新",
    "desc": "创始人每周和社区交流，回答问题透明度高。这种情况下，你的选择是？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对信息透明的情况，每周AMA更新考验判断力。适度参与是平衡选择，预期回报2.0%。"
  },
  {
    "id": "042-02",
    "category": "C3",
    "title": "月度详细报告",
    "desc": "每月发布进展报告，包括技术和商业进展。你会如何行动？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "月度详细报告是信息透明的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "042-03",
    "category": "C3",
    "title": "仅发利好不提成问题",
    "desc": "只报喜不报忧，透明度存疑。你的决策是？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在信息透明的不确定性下，仅发利好不提成问题可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "042-04",
    "category": "C3",
    "title": "长期沉默",
    "desc": "1个月无更新，社区不知道项目进展。对此你会做出什么选择？",
    "baseProfitPct": 1.0,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.0,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对信息透明的情况，长期沉默考验判断力。适度参与是平衡选择，预期回报1.0%。"
  },
  {
    "id": "043-01",
    "category": "A2",
    "title": "一次性销毁50%",
    "desc": "项目方销毁一半代币，通缩力度大。但可能是左手倒右手。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对代币销毁的情况，一次性销毁50%考验判断力。适度参与是平衡选择，预期回报1.8%。"
  },
  {
    "id": "043-02",
    "category": "A2",
    "title": "季度销毁计划",
    "desc": "每季度用利润回购销毁，持续通缩机制。此时你会选择怎么做？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在代币销毁的不确定性下，季度销毁计划可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "043-03",
    "category": "A2",
    "title": "销毁但增发更多",
    "desc": "销毁1%但增发10%，净通胀。噱头而已。你的投资策略是？",
    "baseProfitPct": 0.9,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对代币销毁的情况，销毁但增发更多考验判断力。适度参与是平衡选择，预期回报0.9%。"
  },
  {
    "id": "043-04",
    "category": "A2",
    "title": "社区投票决定销毁",
    "desc": "销毁方案由社区投票决定，民主决策。你将如何应对？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在代币销毁的不确定性下，社区投票决定销毁可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "044-01",
    "category": "C3",
    "title": "社区自发组织活动",
    "desc": "无项目方激励，社区自发举办活动。真实支持者多。这种情况下，你的选择是？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在社区建设的不确定性下，社区自发组织活动可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "044-02",
    "category": "C3",
    "title": "雇佣水军刷热度",
    "desc": "Twitter、Discord机器人泛滥，虚假繁荣。你会如何行动？",
    "baseProfitPct": 0.8,
    "baseLossPct": 0.4,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对社区建设的情况，雇佣水军刷热度考验判断力。适度参与是平衡选择，预期回报0.8%。"
  },
  {
    "id": "044-03",
    "category": "C3",
    "title": "大使计划",
    "desc": "招募社区大使推广，按贡献奖励。有机增长。你的决策是？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在社区建设的场景下，大使计划需要果断决策。重仓参与可能获得2.8%回报，但需承受较高风险。"
  },
  {
    "id": "044-04",
    "category": "C3",
    "title": "社区分裂内斗",
    "desc": "社区内部派系斗争，互相攻击。凝聚力差。对此你会做出什么选择？",
    "baseProfitPct": 1.0,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.0,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在社区建设的场景下，社区分裂内斗需要果断决策。重仓参与可能获得1.5%回报，但需承受较高风险。"
  },
  {
    "id": "045-01",
    "category": "A3",
    "title": "开曼基金会",
    "desc": "标准离岸架构，行业通用，法律风险低。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在法律架构的不确定性下，开曼基金会可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "045-02",
    "category": "A3",
    "title": "瑞士基金会",
    "desc": "瑞士监管友好，但合规成本高。此时你会选择怎么做？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "瑞士基金会是法律架构的典型场景。小额试水可以控制风险，预期回报0.9%。"
  },
  {
    "id": "045-03",
    "category": "A3",
    "title": "新加坡基金会",
    "desc": "亚洲友好 jurisdiction，政策明确。你的投资策略是？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在法律架构的不确定性下，新加坡基金会可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "045-04",
    "category": "A3",
    "title": "无明确法律实体",
    "desc": "项目方身份不明，法律追索权无。风险高。你将如何应对？",
    "baseProfitPct": 0.7,
    "baseLossPct": 0.3,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 0.7,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.1,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在法律架构的不确定性下，无明确法律实体可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "046-01",
    "category": "B2",
    "title": "熊市折价出售",
    "desc": "急需用钱，接受OTC折价30%出售。割肉离场。这种情况下，你的选择是？",
    "baseProfitPct": 0.9,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在熊市退出的不确定性下，熊市折价出售可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "046-02",
    "category": "B2",
    "title": "持有等待复苏",
    "desc": "相信项目长期价值，熊市坚守不卖出。你会如何行动？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在熊市退出的场景下，持有等待复苏需要果断决策。重仓参与可能获得2.7%回报，但需承受较高风险。"
  },
  {
    "id": "046-03",
    "category": "B2",
    "title": "熊市加仓",
    "desc": "低价买入更多份额，摊低成本。反周期操作。你的决策是？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在熊市退出的场景下，熊市加仓需要果断决策。重仓参与可能获得3.0%回报，但需承受较高风险。"
  },
  {
    "id": "046-04",
    "category": "B2",
    "title": "部分退出保留底仓",
    "desc": "卖出一部分回笼资金，留一部分等反弹。对此你会做出什么选择？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在熊市退出的场景下，部分退出保留底仓需要果断决策。重仓参与可能获得2.4%回报，但需承受较高风险。"
  },
  {
    "id": "047-01",
    "category": "C2",
    "title": "获得行业巨头投资",
    "desc": "Coinbase Ventures投资，背书效应强。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在合作伙伴的不确定性下，获得行业巨头投资可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "047-02",
    "category": "C2",
    "title": "与顶级审计公司合作",
    "desc": "不仅审计代码，还参与安全架构设计。此时你会选择怎么做？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "与顶级审计公司合作是合作伙伴的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "047-03",
    "category": "C2",
    "title": "合作伙伴负面新闻",
    "desc": "主要合作伙伴被黑客攻击或监管处罚。波及效应。你的投资策略是？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在合作伙伴的场景下，合作伙伴负面新闻需要果断决策。重仓参与可能获得1.8%回报，但需承受较高风险。"
  },
  {
    "id": "047-04",
    "category": "C2",
    "title": "合作取消",
    "desc": "已宣布的合作被对方取消。利空消息。你将如何应对？",
    "baseProfitPct": 0.9,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对合作伙伴的情况，合作取消考验判断力。适度参与是平衡选择，预期回报0.9%。"
  },
  {
    "id": "048-01",
    "category": "A3",
    "title": "Full ratchet保护",
    "desc": "后续融资估值更低时，完全补偿差额。最强保护。这种情况下，你的选择是？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对反稀释保护的情况，Full ratchet保护考验判断力。适度参与是平衡选择，预期回报2.0%。"
  },
  {
    "id": "048-02",
    "category": "A3",
    "title": "Weighted average保护",
    "desc": "按加权平均计算补偿，部分保护。你会如何行动？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对反稀释保护的情况，Weighted average保护考验判断力。适度参与是平衡选择，预期回报1.8%。"
  },
  {
    "id": "048-03",
    "category": "A3",
    "title": "无反稀释保护",
    "desc": "后续融资估值再低也无补偿。风险自担。你的决策是？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在反稀释保护的不确定性下，无反稀释保护可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "048-04",
    "category": "A3",
    "title": "后续轮估值暴涨",
    "desc": "无稀释保护也无需保护，估值上升。对此你会做出什么选择？",
    "baseProfitPct": 2.3,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.4,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.3,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.5,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对反稀释保护的情况，后续轮估值暴涨考验判断力。适度参与是平衡选择，预期回报2.3%。"
  },
  {
    "id": "049-01",
    "category": "E2",
    "title": "登上主流媒体",
    "desc": "Bloomberg、Reuters报道，出圈效应。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在媒体热度的不确定性下，登上主流媒体可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "049-02",
    "category": "E2",
    "title": "KOL集体推荐",
    "desc": "多个头部KOL同时推荐，可能是付费推广。此时你会选择怎么做？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对媒体热度的情况，KOL集体推荐考验判断力。适度参与是平衡选择，预期回报1.4%。"
  },
  {
    "id": "049-03",
    "category": "E2",
    "title": "媒体报道负面",
    "desc": "主流媒体曝光问题，声誉受损。你的投资策略是？",
    "baseProfitPct": 0.8,
    "baseLossPct": 0.4,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "媒体报道负面是媒体热度的典型场景。小额试水可以控制风险，预期回报0.4%。"
  },
  {
    "id": "049-04",
    "category": "E2",
    "title": "零媒体关注",
    "desc": "没有任何媒体报道，完全靠口碑传播。你将如何应对？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在媒体热度的不确定性下，零媒体关注可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "050-01",
    "category": "B2",
    "title": "分3波退出",
    "desc": "上所后30%、50%、20%分批卖出，平滑收益。这种情况下，你的选择是？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对退出策略的情况，分3波退出考验判断力。适度参与是平衡选择，预期回报1.9%。"
  },
  {
    "id": "050-02",
    "category": "B2",
    "title": "设定目标价退出",
    "desc": "达到5倍目标价全部卖出，纪律性强。你会如何行动？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在退出策略的场景下，设定目标价退出需要果断决策。重仓参与可能获得3.0%回报，但需承受较高风险。"
  },
  {
    "id": "050-03",
    "category": "B2",
    "title": "情绪化追涨杀跌",
    "desc": "涨了就追，跌了就恐慌卖。非理性操作。你的决策是？",
    "baseProfitPct": 0.7,
    "baseLossPct": 0.3,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 0.7,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.1,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在退出策略的不确定性下，情绪化追涨杀跌可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "050-04",
    "category": "B2",
    "title": "长期持有不卖",
    "desc": "相信项目成为下一个以太坊，持有5年以上。对此你会做出什么选择？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在退出策略的场景下，长期持有不卖需要果断决策。重仓参与可能获得3.3%回报，但需承受较高风险。"
  },
  {
    "id": "051-01",
    "category": "C2",
    "title": "创始人学历存疑",
    "desc": "声称MIT毕业但查无此人。诚信问题严重。面对这种情况，你该如何决策？",
    "baseProfitPct": 0.6,
    "baseLossPct": 0.3,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 0.6,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.1,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在学历造假的场景下，创始人学历存疑需要果断决策。重仓参与可能获得0.9%回报，但需承受较高风险。"
  },
  {
    "id": "051-02",
    "category": "C2",
    "title": "学校真实但专业不符",
    "desc": "确实毕业于名校但非计算机专业，技术背景存疑。此时你会选择怎么做？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在学历造假的场景下，学校真实但专业不符需要果断决策。重仓参与可能获得2.1%回报，但需承受较高风险。"
  },
  {
    "id": "051-03",
    "category": "C2",
    "title": "在线课程冒充学历",
    "desc": "Coursera证书说成是学位，夸大教育背景。你的投资策略是？",
    "baseProfitPct": 1.0,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.0,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在学历造假的场景下，在线课程冒充学历需要果断决策。重仓参与可能获得1.5%回报，但需承受较高风险。"
  },
  {
    "id": "051-04",
    "category": "C2",
    "title": "未提及学校但实际名校",
    "desc": "低调没提学校，后来发现是斯坦福。加分项。你将如何应对？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对学历造假的情况，未提及学校但实际名校考验判断力。适度参与是平衡选择，预期回报2.1%。"
  },
  {
    "id": "052-01",
    "category": "C2",
    "title": "开源贡献者",
    "desc": "GitHub显示多年开源贡献，技术社区认可。这种情况下，你的选择是？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对技术背景的情况，开源贡献者考验判断力。适度参与是平衡选择，预期回报2.2%。"
  },
  {
    "id": "052-02",
    "category": "C2",
    "title": "专利持有者",
    "desc": "持有区块链技术相关专利，技术壁垒。你会如何行动？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在技术背景的不确定性下，专利持有者可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "052-03",
    "category": "C2",
    "title": "无代码背景",
    "desc": "创始人非技术出身，纯商业背景。技术依赖外包。你的决策是？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在技术背景的不确定性下，无代码背景可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "052-04",
    "category": "C2",
    "title": "竞赛获奖者",
    "desc": "ACM-ICPC、CTF等竞赛获奖，算法能力强。对此你会做出什么选择？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在技术背景的不确定性下，竞赛获奖者可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "053-01",
    "category": "C2",
    "title": "成功退出2次",
    "desc": "前两家公司都成功出售，套现经验丰富。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.4,
    "baseLossPct": 1.2,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.6,
        "lossPct": 1.9,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.4,
        "lossPct": 1.2,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.2,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.5,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对创业历史的情况，成功退出2次考验判断力。适度参与是平衡选择，预期回报2.4%。"
  },
  {
    "id": "053-02",
    "category": "C2",
    "title": "一次成功一次失败",
    "desc": "有成功经验也有失败教训，认知更全面。此时你会选择怎么做？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在创业历史的不确定性下，一次成功一次失败可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "053-03",
    "category": "C2",
    "title": "连续3次失败",
    "desc": "每次都因不同原因失败，运气差还是能力问题？",
    "baseProfitPct": 1.1,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.7,
        "lossPct": 0.9,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在创业历史的场景下，连续3次失败需要果断决策。重仓参与可能获得1.7%回报，但需承受较高风险。"
  },
  {
    "id": "053-04",
    "category": "C2",
    "title": "首次创业",
    "desc": "第一次创业，热情高但经验不足。你将如何应对？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对创业历史的情况，首次创业考验判断力。适度参与是平衡选择，预期回报1.5%。"
  },
  {
    "id": "054-01",
    "category": "C2",
    "title": "创始人控股60%",
    "desc": "控制权集中，决策效率高但小股东保护弱。这种情况下，你的选择是？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在股权结构的不确定性下，创始人控股60%可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "054-02",
    "category": "C2",
    "title": "股权高度分散",
    "desc": "无单一股东超20%，民主但决策慢。你会如何行动？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在股权结构的场景下，股权高度分散需要果断决策。重仓参与可能获得2.4%回报，但需承受较高风险。"
  },
  {
    "id": "054-03",
    "category": "C2",
    "title": "投资人有董事会席位",
    "desc": "重要投资人有治理权，监督项目方。你的决策是？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在股权结构的不确定性下，投资人有董事会席位可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "054-04",
    "category": "C2",
    "title": "团队股权被过度稀释",
    "desc": "团队持股仅20%，激励不足可能离职。对此你会做出什么选择？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "团队股权被过度稀释是股权结构的典型场景。小额试水可以控制风险，预期回报0.6%。"
  },
  {
    "id": "055-01",
    "category": "C2",
    "title": "顾问包括行业泰斗",
    "desc": "以太坊早期开发者、知名教授担任顾问。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在顾问阵容的不确定性下，顾问包括行业泰斗可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "055-02",
    "category": "C2",
    "title": "顾问只是挂名",
    "desc": "顾问头衔响亮但从不参与，纯背书用。此时你会选择怎么做？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "顾问只是挂名是顾问阵容的典型场景。小额试水可以控制风险，预期回报0.7%。"
  },
  {
    "id": "055-03",
    "category": "C2",
    "title": "顾问深度参与",
    "desc": "每周参与战略会议，真正贡献智慧。你的投资策略是？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在顾问阵容的不确定性下，顾问深度参与可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "055-04",
    "category": "C2",
    "title": "顾问有利益冲突",
    "desc": "同时担任竞品顾问，忠诚度存疑。你将如何应对？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在顾问阵容的不确定性下，顾问有利益冲突可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "056-01",
    "category": "C1",
    "title": "自研底层链",
    "desc": "技术自主性强但开发周期长，风险高。这种情况下，你的选择是？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对技术栈选择的情况，自研底层链考验判断力。适度参与是平衡选择，预期回报1.8%。"
  },
  {
    "id": "056-02",
    "category": "C1",
    "title": "基于以太坊L2",
    "desc": "站在巨人肩膀上，快速开发但依赖以太坊。你会如何行动？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对技术栈选择的情况，基于以太坊L2考验判断力。适度参与是平衡选择，预期回报2.0%。"
  },
  {
    "id": "056-03",
    "category": "C1",
    "title": "使用Cosmos SDK",
    "desc": "模块化开发，可定制化程度高。你的决策是？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "使用Cosmos SDK是技术栈选择的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "056-04",
    "category": "C1",
    "title": "Fork现有项目",
    "desc": "复制他人代码小改，创新不足，法务风险。对此你会做出什么选择？",
    "baseProfitPct": 0.9,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对技术栈选择的情况，Fork现有项目考验判断力。适度参与是平衡选择，预期回报0.9%。"
  },
  {
    "id": "057-01",
    "category": "C2",
    "title": "路线图100%按时完成",
    "desc": "承诺的时间节点全部兑现，执行力极强。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.3,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.4,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.3,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.5,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在执行力的场景下，路线图100%按时完成需要果断决策。重仓参与可能获得3.4%回报，但需承受较高风险。"
  },
  {
    "id": "057-02",
    "category": "C2",
    "title": "大部分按时偶有延期",
    "desc": "整体执行良好，偶尔延期1-2周可接受。此时你会选择怎么做？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在执行力的场景下，大部分按时偶有延期需要果断决策。重仓参与可能获得3.0%回报，但需承受较高风险。"
  },
  {
    "id": "057-03",
    "category": "C2",
    "title": "频繁延期",
    "desc": "80%的里程碑都延期，执行能力差。你的投资策略是？",
    "baseProfitPct": 1.0,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.0,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "频繁延期是执行力的典型场景。小额试水可以控制风险，预期回报0.5%。"
  },
  {
    "id": "057-04",
    "category": "C2",
    "title": "随意更改路线图",
    "desc": "没有合理理由就改方向，缺乏定力。你将如何应对？",
    "baseProfitPct": 0.8,
    "baseLossPct": 0.4,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在执行力的场景下，随意更改路线图需要果断决策。重仓参与可能获得1.2%回报，但需承受较高风险。"
  },
  {
    "id": "058-01",
    "category": "C2",
    "title": "全员持股",
    "desc": "每个员工都有Token激励，利益一致。这种情况下，你的选择是？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在激励机制的场景下，全员持股需要果断决策。重仓参与可能获得3.2%回报，但需承受较高风险。"
  },
  {
    "id": "058-02",
    "category": "C2",
    "title": "仅核心团队持股",
    "desc": "普通员工无激励，可能离职率高。你会如何行动？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在激励机制的不确定性下，仅核心团队持股可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "058-03",
    "category": "C2",
    "title": "激励与里程碑挂钩",
    "desc": "达到目标才解锁激励，激励对齐。你的决策是？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对激励机制的情况，激励与里程碑挂钩考验判断力。适度参与是平衡选择，预期回报2.2%。"
  },
  {
    "id": "058-04",
    "category": "C2",
    "title": "激励过度前置",
    "desc": "入职就给大量Token，无需业绩。激励错位。对此你会做出什么选择？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在激励机制的场景下，激励过度前置需要果断决策。重仓参与可能获得2.0%回报，但需承受较高风险。"
  },
  {
    "id": "059-01",
    "category": "C2",
    "title": "3个月团队翻倍",
    "desc": "快速扩张但面试质量下降，人员参差不齐。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在团队扩张的场景下，3个月团队翻倍需要果断决策。重仓参与可能获得2.2%回报，但需承受较高风险。"
  },
  {
    "id": "059-02",
    "category": "C2",
    "title": "稳步扩张",
    "desc": "每月新增2-3人，质量优先于速度。此时你会选择怎么做？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对团队扩张的情况，稳步扩张考验判断力。适度参与是平衡选择，预期回报2.0%。"
  },
  {
    "id": "059-03",
    "category": "C2",
    "title": "核心人员离职",
    "desc": "扩张期反而有老员工离职，文化问题？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在团队扩张的场景下，核心人员离职需要果断决策。重仓参与可能获得1.8%回报，但需承受较高风险。"
  },
  {
    "id": "059-04",
    "category": "C2",
    "title": "hiring freeze",
    "desc": "停止招聘，控制成本，务实做法。你将如何应对？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在团队扩张的场景下，hiring freeze需要果断决策。重仓参与可能获得2.7%回报，但需承受较高风险。"
  },
  {
    "id": "060-01",
    "category": "C2",
    "title": "全球分布式团队",
    "desc": "成员来自15个国家，24小时覆盖，视角多元。这种情况下，你的选择是？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对团队多元化的情况，全球分布式团队考验判断力。适度参与是平衡选择，预期回报2.1%。"
  },
  {
    "id": "060-02",
    "category": "C2",
    "title": "单一国家团队",
    "desc": "全部在一个城市，时区一致但缺乏国际视野。你会如何行动？",
    "baseProfitPct": 1.7,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.5,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.7,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在团队多元化的不确定性下，单一国家团队可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "060-03",
    "category": "C2",
    "title": "技术背景单一",
    "desc": "全是程序员，缺乏商业、运营人才。你的决策是？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在团队多元化的场景下，技术背景单一需要果断决策。重仓参与可能获得2.1%回报，但需承受较高风险。"
  },
  {
    "id": "060-04",
    "category": "C2",
    "title": "复合背景团队",
    "desc": "技术+商业+金融+法律，能力互补。对此你会做出什么选择？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对团队多元化的情况，复合背景团队考验判断力。适度参与是平衡选择，预期回报2.2%。"
  },
  {
    "id": "061-01",
    "category": "B2",
    "title": "前紧后松解锁",
    "desc": "前两年解锁20%，后两年解锁80%。后期抛压大。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在阶梯解锁的场景下，前紧后松解锁需要果断决策。重仓参与可能获得2.4%回报，但需承受较高风险。"
  },
  {
    "id": "061-02",
    "category": "B2",
    "title": "均匀线性解锁",
    "desc": "4年内每月平均解锁，抛压平滑。此时你会选择怎么做？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在阶梯解锁的场景下，均匀线性解锁需要果断决策。重仓参与可能获得3.0%回报，但需承受较高风险。"
  },
  {
    "id": "061-03",
    "category": "B2",
    "title": "前松后紧解锁",
    "desc": "前两年解锁60%，流动性好但可能提前出货。你的投资策略是？",
    "baseProfitPct": 1.7,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.5,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.7,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在阶梯解锁的不确定性下，前松后紧解锁可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "061-04",
    "category": "B2",
    "title": "与业绩挂钩解锁",
    "desc": "TVL、用户数达标才解锁，激励对齐。你将如何应对？",
    "baseProfitPct": 2.3,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.4,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.3,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.5,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "与业绩挂钩解锁是阶梯解锁的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "062-01",
    "category": "A2",
    "title": "锁仓挖矿双倍收益",
    "desc": "锁仓Token可获得双倍挖矿收益，鼓励长期持有。这种情况下，你的选择是？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "锁仓挖矿双倍收益是流动性挖矿的典型场景。小额试水可以控制风险，预期回报1.0%。"
  },
  {
    "id": "062-02",
    "category": "A2",
    "title": "挖矿收益即时释放",
    "desc": "挖矿收益不锁仓，可立即卖出。抛压大。你会如何行动？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对流动性挖矿的情况，挖矿收益即时释放考验判断力。适度参与是平衡选择，预期回报1.3%。"
  },
  {
    "id": "062-03",
    "category": "A2",
    "title": "挖矿收益线性释放",
    "desc": "挖矿收益分6个月释放，减少抛压。你的决策是？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "挖矿收益线性释放是流动性挖矿的典型场景。小额试水可以控制风险，预期回报0.9%。"
  },
  {
    "id": "062-04",
    "category": "A2",
    "title": "挖矿rug pull",
    "desc": "项目方突然提高挖矿难度或降低收益。对此你会做出什么选择？",
    "baseProfitPct": 0.6,
    "baseLossPct": 0.3,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 0.6,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.1,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对流动性挖矿的情况，挖矿rug pull考验判断力。适度参与是平衡选择，预期回报0.6%。"
  },
  {
    "id": "063-01",
    "category": "B2",
    "title": "TGE解锁30%",
    "desc": "相对友好的解锁，有一定流动性。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "TGE解锁30%是部分解锁的典型场景。小额试水可以控制风险，预期回报0.9%。"
  },
  {
    "id": "063-02",
    "category": "B2",
    "title": "TGE解锁10%",
    "desc": "流动性紧张，大部分资金锁定。此时你会选择怎么做？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在部分解锁的不确定性下，TGE解锁10%可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "063-03",
    "category": "B2",
    "title": "TGE零解锁",
    "desc": "完全无流动性，需要等待。你的投资策略是？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对部分解锁的情况，TGE零解锁考验判断力。适度参与是平衡选择，预期回报1.4%。"
  },
  {
    "id": "063-04",
    "category": "B2",
    "title": "TGE解锁50%以上",
    "desc": "流动性极好，但可能面临即期抛压。你将如何应对？",
    "baseProfitPct": 1.7,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.5,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.7,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "TGE解锁50%以上是部分解锁的典型场景。小额试水可以控制风险，预期回报0.8%。"
  },
  {
    "id": "064-01",
    "category": "E1",
    "title": "锁仓获得额外治理权",
    "desc": "锁越久投票权倍数越高，鼓励长期参与。这种情况下，你的选择是？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在治理权的不确定性下，锁仓获得额外治理权可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "064-02",
    "category": "E1",
    "title": "1币1票",
    "desc": "不区分锁仓时间，单纯按持仓量投票。你会如何行动？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "1币1票是治理权的典型场景。小额试水可以控制风险，预期回报0.9%。"
  },
  {
    "id": "064-03",
    "category": "E1",
    "title": "委托治理",
    "desc": "可将治理权委托给代表，不锁仓也能参与。你的决策是？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在治理权的场景下，委托治理需要果断决策。重仓参与可能获得2.8%回报，但需承受较高风险。"
  },
  {
    "id": "064-04",
    "category": "E1",
    "title": "锁仓期间无治理权",
    "desc": "锁仓Token不能投票，治理权只在流通Token中。对此你会做出什么选择？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在治理权的场景下，锁仓期间无治理权需要果断决策。重仓参与可能获得2.1%回报，但需承受较高风险。"
  },
  {
    "id": "065-01",
    "category": "A2",
    "title": "提前解锁扣减20%",
    "desc": "紧急情况可申请提前解锁，但需牺牲部分Token。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.7,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.5,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.7,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在加速解锁的不确定性下，提前解锁扣减20%可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "065-02",
    "category": "A2",
    "title": "不允许提前解锁",
    "desc": "锁仓期间无退出可能，流动性为零。此时你会选择怎么做？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在加速解锁的场景下，不允许提前解锁需要果断决策。重仓参与可能获得2.2%回报，但需承受较高风险。"
  },
  {
    "id": "065-03",
    "category": "A2",
    "title": "OTC转让锁仓份额",
    "desc": "可找买家接盘，但需项目方批准且折价30%。你的投资策略是？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在加速解锁的场景下，OTC转让锁仓份额需要果断决策。重仓参与可能获得2.1%回报，但需承受较高风险。"
  },
  {
    "id": "065-04",
    "category": "A2",
    "title": "死亡/残疾触发解锁",
    "desc": "极端情况下继承人可提前解锁，人性化条款。你将如何应对？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对加速解锁的情况，死亡/残疾触发解锁考验判断力。适度参与是平衡选择，预期回报2.0%。"
  },
  {
    "id": "066-01",
    "category": "A2",
    "title": "锁仓期可质押",
    "desc": "锁仓Token也能质押生息，提高资金效率。这种情况下，你的选择是？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "锁仓期可质押是质押收益的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "066-02",
    "category": "A2",
    "title": "锁仓期无收益",
    "desc": "资金锁定且无任何收益，纯时间成本。你会如何行动？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对质押收益的情况，锁仓期无收益考验判断力。适度参与是平衡选择，预期回报1.5%。"
  },
  {
    "id": "066-03",
    "category": "A2",
    "title": "锁仓收益更高",
    "desc": "锁仓Token质押收益是流通Token的2倍。你的决策是？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "锁仓收益更高是质押收益的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "066-04",
    "category": "A2",
    "title": "质押收益再锁仓",
    "desc": "收益也不能立即取出，继续锁定。对此你会做出什么选择？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在质押收益的场景下，质押收益再锁仓需要果断决策。重仓参与可能获得2.4%回报，但需承受较高风险。"
  },
  {
    "id": "067-01",
    "category": "B2",
    "title": "黑客攻击触发解锁",
    "desc": "合约被攻击时可立即解锁转移，保护机制。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对紧急条款的情况，黑客攻击触发解锁考验判断力。适度参与是平衡选择，预期回报2.0%。"
  },
  {
    "id": "067-02",
    "category": "B2",
    "title": "项目方跑路解锁",
    "desc": "项目方失联超过30天，锁仓自动解除。此时你会选择怎么做？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "项目方跑路解锁是紧急条款的典型场景。小额试水可以控制风险，预期回报0.9%。"
  },
  {
    "id": "067-03",
    "category": "B2",
    "title": "无紧急条款",
    "desc": "任何情况都必须等解锁期结束，无灵活性。你的投资策略是？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "无紧急条款是紧急条款的典型场景。小额试水可以控制风险，预期回报0.7%。"
  },
  {
    "id": "067-04",
    "category": "B2",
    "title": "多签可解锁",
    "desc": "5/7多签同意可提前解锁，但项目方占多数席位。你将如何应对？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对紧急条款的情况，多签可解锁考验判断力。适度参与是平衡选择，预期回报1.6%。"
  },
  {
    "id": "068-01",
    "category": "C2",
    "title": "团队锁仓比投资者更长",
    "desc": "投资者锁1年，团队锁3年，利益深度对齐。这种情况下，你的选择是？",
    "baseProfitPct": 2.3,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.4,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.3,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.5,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在锁仓一致性的不确定性下，团队锁仓比投资者更长可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "068-02",
    "category": "C2",
    "title": "团队和投资者同期限",
    "desc": "同样的锁仓条款，公平对待。你会如何行动？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "团队和投资者同期限是锁仓一致性的典型场景。小额试水可以控制风险，预期回报1.0%。"
  },
  {
    "id": "068-03",
    "category": "C2",
    "title": "团队锁仓更短",
    "desc": "团队锁6个月，投资者锁2年。团队更急于套现？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在锁仓一致性的场景下，团队锁仓更短需要果断决策。重仓参与可能获得1.8%回报，但需承受较高风险。"
  },
  {
    "id": "068-04",
    "category": "C2",
    "title": "顾问无锁仓",
    "desc": "顾问Token TGE全额流通，投资者锁仓。不平等。对此你会做出什么选择？",
    "baseProfitPct": 1.0,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.0,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "顾问无锁仓是锁仓一致性的典型场景。小额试水可以控制风险，预期回报0.5%。"
  },
  {
    "id": "069-01",
    "category": "A3",
    "title": "锁仓期长于行业平均",
    "desc": "行业普遍锁1年，该项目锁2年。信心表现？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在行业对比的场景下，锁仓期长于行业平均需要果断决策。重仓参与可能获得2.7%回报，但需承受较高风险。"
  },
  {
    "id": "069-02",
    "category": "A3",
    "title": "锁仓期短于行业平均",
    "desc": "行业锁2年，该项目锁6个月。急于套现？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对行业对比的情况，锁仓期短于行业平均考验判断力。适度参与是平衡选择，预期回报1.3%。"
  },
  {
    "id": "069-03",
    "category": "A3",
    "title": "与竞品相同",
    "desc": "锁仓条款和直接竞品一致，行业标准。你的投资策略是？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "与竞品相同是行业对比的典型场景。小额试水可以控制风险，预期回报0.9%。"
  },
  {
    "id": "069-04",
    "category": "A3",
    "title": "创新锁仓机制",
    "desc": "引入新锁仓模式，如债券式解锁，市场未验证。你将如何应对？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在行业对比的场景下，创新锁仓机制需要果断决策。重仓参与可能获得2.4%回报，但需承受较高风险。"
  },
  {
    "id": "070-01",
    "category": "A2",
    "title": "锁仓者获得双倍空投",
    "desc": "鼓励锁仓，空投权重是普通用户2倍。这种情况下，你的选择是？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在空投权益的场景下，锁仓者获得双倍空投需要果断决策。重仓参与可能获得3.2%回报，但需承受较高风险。"
  },
  {
    "id": "070-02",
    "category": "A2",
    "title": "锁仓者无空投",
    "desc": "空投只给活跃用户，投资者被排除。你会如何行动？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对空投权益的情况，锁仓者无空投考验判断力。适度参与是平衡选择，预期回报1.4%。"
  },
  {
    "id": "070-03",
    "category": "A2",
    "title": "空投可立即出售",
    "desc": "空投无锁仓，可立即变现。你的决策是？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "空投可立即出售是空投权益的典型场景。小额试水可以控制风险，预期回报0.9%。"
  },
  {
    "id": "070-04",
    "category": "A2",
    "title": "空投继续锁仓",
    "desc": "获得空投但要继续锁定，流动性持续紧张。对此你会做出什么选择？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "空投继续锁仓是空投权益的典型场景。小额试水可以控制风险，预期回报0.8%。"
  },
  {
    "id": "071-01",
    "category": "B2",
    "title": "DEX滑点5%",
    "desc": "流动性不足，大额交易滑点高，成本高。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对DEX流动性退出的情况，DEX滑点5%考验判断力。适度参与是平衡选择，预期回报1.4%。"
  },
  {
    "id": "071-02",
    "category": "B2",
    "title": "DEX滑点1%以内",
    "desc": "流动性充足，可无压力卖出。此时你会选择怎么做？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "DEX滑点1%以内是DEX流动性退出的典型场景。小额试水可以控制风险，预期回报1.0%。"
  },
  {
    "id": "071-03",
    "category": "B2",
    "title": "无DEX流动性",
    "desc": "只能在OTC出售，流动性极差。你的投资策略是？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对DEX流动性退出的情况，无DEX流动性考验判断力。适度参与是平衡选择，预期回报1.2%。"
  },
  {
    "id": "071-04",
    "category": "B2",
    "title": "DEX被攻击",
    "desc": "池子被黑客攻击，无法通过DEX退出。你将如何应对？",
    "baseProfitPct": 0.7,
    "baseLossPct": 0.3,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 0.7,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.1,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "DEX被攻击是DEX流动性退出的典型场景。小额试水可以控制风险，预期回报0.3%。"
  },
  {
    "id": "072-01",
    "category": "D1",
    "title": "巨鲸转入交易所",
    "desc": "大额Token转入币安，疑似准备抛售。这种情况下，你的选择是？",
    "baseProfitPct": 0.9,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在巨鲸转账的不确定性下，巨鲸转入交易所可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "072-02",
    "category": "D1",
    "title": "巨鲸从交易所提出",
    "desc": "从交易所大额提出到钱包，疑似抄底或长期持有。你会如何行动？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "巨鲸从交易所提出是巨鲸转账的典型场景。小额试水可以控制风险，预期回报1.0%。"
  },
  {
    "id": "072-03",
    "category": "D1",
    "title": "巨鲸地址活跃",
    "desc": "dormant whale 重新活跃，可能有大动作。你的决策是？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在巨鲸转账的场景下，巨鲸地址活跃需要果断决策。重仓参与可能获得2.2%回报，但需承受较高风险。"
  },
  {
    "id": "072-04",
    "category": "D1",
    "title": "巨鲸分批出货",
    "desc": "每天小额出售，避免引起市场恐慌。对此你会做出什么选择？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在巨鲸转账的场景下，巨鲸分批出货需要果断决策。重仓参与可能获得1.8%回报，但需承受较高风险。"
  },
  {
    "id": "073-01",
    "category": "B2",
    "title": "达到目标价5倍",
    "desc": "提前设定的目标已实现，按计划卖出。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在估值目标的不确定性下，达到目标价5倍可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "073-02",
    "category": "B2",
    "title": "超过目标还在涨",
    "desc": "目标价已翻倍，贪婪还是止盈？",
    "baseProfitPct": 1.7,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.5,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.7,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "超过目标还在涨是估值目标的典型场景。小额试水可以控制风险，预期回报0.8%。"
  },
  {
    "id": "073-03",
    "category": "B2",
    "title": "距离目标还差20%",
    "desc": "接近目标但市场开始回调，等待还是接受？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在估值目标的场景下，距离目标还差20%需要果断决策。重仓参与可能获得2.4%回报，但需承受较高风险。"
  },
  {
    "id": "073-04",
    "category": "B2",
    "title": "重新评估目标价",
    "desc": "基本面变化，原目标价不再适用，需调整策略。你将如何应对？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在估值目标的场景下，重新评估目标价需要果断决策。重仓参与可能获得2.7%回报，但需承受较高风险。"
  },
  {
    "id": "074-01",
    "category": "A2",
    "title": "竞品大额解锁在即",
    "desc": "主要竞品下周解锁20%，可能引发整个赛道抛压。这种情况下，你的选择是？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "竞品大额解锁在即是竞品解锁的典型场景。小额试水可以控制风险，预期回报0.7%。"
  },
  {
    "id": "074-02",
    "category": "A2",
    "title": "竞品解锁完成",
    "desc": "竞品已度过解锁高峰，抛压释放完毕，情绪好转。你会如何行动？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对竞品解锁的情况，竞品解锁完成考验判断力。适度参与是平衡选择，预期回报2.0%。"
  },
  {
    "id": "074-03",
    "category": "A2",
    "title": "多个竞品同时解锁",
    "desc": "赛道多个项目同时面临解锁，系统性风险。你的决策是？",
    "baseProfitPct": 1.0,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.0,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "多个竞品同时解锁是竞品解锁的典型场景。小额试水可以控制风险，预期回报0.5%。"
  },
  {
    "id": "074-04",
    "category": "A2",
    "title": "竞品延长锁仓",
    "desc": "竞品团队主动延长锁仓，利好整个赛道。对此你会做出什么选择？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对竞品解锁的情况，竞品延长锁仓考验判断力。适度参与是平衡选择，预期回报2.1%。"
  },
  {
    "id": "075-01",
    "category": "A1",
    "title": "与苹果合作传闻",
    "desc": "传闻将集成到iOS，未证实但股价已涨。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在重大利好的不确定性下，与苹果合作传闻可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "075-02",
    "category": "A1",
    "title": "主网上线成功",
    "desc": "技术里程碑达成，性能超预期，基本面质变。此时你会选择怎么做？",
    "baseProfitPct": 2.3,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.4,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.3,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.5,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在重大利好的不确定性下，主网上线成功可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "075-03",
    "category": "A1",
    "title": "获得大额企业订单",
    "desc": "年收入增加500万U，商业化突破。你的投资策略是？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在重大利好的场景下，获得大额企业订单需要果断决策。重仓参与可能获得3.3%回报，但需承受较高风险。"
  },
  {
    "id": "075-04",
    "category": "A1",
    "title": "被主流媒体正面报道",
    "desc": "华尔街日报专题报道，出圈效应。你将如何应对？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在重大利好的场景下，被主流媒体正面报道需要果断决策。重仓参与可能获得3.0%回报，但需承受较高风险。"
  },
  {
    "id": "076-01",
    "category": "A2",
    "title": "美联储宣布加息",
    "desc": "宏观流动性收紧，风险资产普跌。这种情况下，你的选择是？",
    "baseProfitPct": 1.1,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 1.7,
        "lossPct": 0.9,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在宏观恶化的场景下，美联储宣布加息需要果断决策。重仓参与可能获得1.7%回报，但需承受较高风险。"
  },
  {
    "id": "076-02",
    "category": "A2",
    "title": "战争爆发",
    "desc": "地缘政治风险，市场恐慌情绪蔓延。你会如何行动？",
    "baseProfitPct": 0.9,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对宏观恶化的情况，战争爆发考验判断力。适度参与是平衡选择，预期回报0.9%。"
  },
  {
    "id": "076-03",
    "category": "A2",
    "title": "稳定币脱锚",
    "desc": "USDC/USDT出现脱锚，整个DeFi系统风险。你的决策是？",
    "baseProfitPct": 0.7,
    "baseLossPct": 0.3,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 0.7,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.1,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在宏观恶化的场景下，稳定币脱锚需要果断决策。重仓参与可能获得1.0%回报，但需承受较高风险。"
  },
  {
    "id": "076-04",
    "category": "A2",
    "title": "监管禁令",
    "desc": "某大国宣布禁止加密货币交易，市场大跌。对此你会做出什么选择？",
    "baseProfitPct": 0.8,
    "baseLossPct": 0.4,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "监管禁令是宏观恶化的典型场景。小额试水可以控制风险，预期回报0.4%。"
  },
  {
    "id": "077-01",
    "category": "A1",
    "title": "TPS超越Solana",
    "desc": "实测TPS达到10万，成为最快公链。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.3,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.4,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.3,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.5,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对技术超越的情况，TPS超越Solana考验判断力。适度参与是平衡选择，预期回报2.3%。"
  },
  {
    "id": "077-02",
    "category": "A1",
    "title": "Gas费降至0.001U",
    "desc": "成本优势巨大，用户迁移加速。此时你会选择怎么做？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在技术超越的不确定性下，Gas费降至0.001U可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "077-03",
    "category": "A1",
    "title": "实现完全去中心化",
    "desc": "节点数量超过比特币，无需许可参与。你的投资策略是？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对技术超越的情况，实现完全去中心化考验判断力。适度参与是平衡选择，预期回报2.1%。"
  },
  {
    "id": "077-04",
    "category": "A1",
    "title": "安全模型创新",
    "desc": "新型共识机制，数学证明安全，无事故运行2年。你将如何应对？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在技术超越的场景下，安全模型创新需要果断决策。重仓参与可能获得3.3%回报，但需承受较高风险。"
  },
  {
    "id": "078-01",
    "category": "A2",
    "title": "币安宣布下架",
    "desc": "流动性最好的交易所下架，重大利空。这种情况下，你的选择是？",
    "baseProfitPct": 0.5,
    "baseLossPct": 0.2,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 0.5,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.1,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "币安宣布下架是下架风险的典型场景。小额试水可以控制风险，预期回报0.2%。"
  },
  {
    "id": "078-02",
    "category": "A2",
    "title": "小所下架",
    "desc": "流动性差的交易所下架，影响有限。你会如何行动？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "小所下架是下架风险的典型场景。小额试水可以控制风险，预期回报0.7%。"
  },
  {
    "id": "078-03",
    "category": "A2",
    "title": "监管要求下架",
    "desc": "SEC要求交易所下架，法律风险高。你的决策是？",
    "baseProfitPct": 0.6,
    "baseLossPct": 0.3,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 0.6,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.1,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在下架风险的场景下，监管要求下架需要果断决策。重仓参与可能获得0.9%回报，但需承受较高风险。"
  },
  {
    "id": "078-04",
    "category": "A2",
    "title": "项目方主动下架",
    "desc": "与交易所关系破裂，主动选择退出。对此你会做出什么选择？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "项目方主动下架是下架风险的典型场景。小额试水可以控制风险，预期回报0.6%。"
  },
  {
    "id": "079-01",
    "category": "A3",
    "title": "项目方回购销毁",
    "desc": "用利润回购并销毁Token，提升持有者价值。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对回购计划的情况，项目方回购销毁考验判断力。适度参与是平衡选择，预期回报2.1%。"
  },
  {
    "id": "079-02",
    "category": "A3",
    "title": "回购但用于激励",
    "desc": "回购的Token用于团队激励，不销毁。此时你会选择怎么做？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对回购计划的情况，回购但用于激励考验判断力。适度参与是平衡选择，预期回报1.5%。"
  },
  {
    "id": "079-03",
    "category": "A3",
    "title": "仅宣布无行动",
    "desc": "3个月前宣布回购，至今未执行。你的投资策略是？",
    "baseProfitPct": 1.0,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.0,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在回购计划的场景下，仅宣布无行动需要果断决策。重仓参与可能获得1.5%回报，但需承受较高风险。"
  },
  {
    "id": "079-04",
    "category": "A3",
    "title": "超额完成回购",
    "desc": "承诺回购100万，实际回购300万。你将如何应对？",
    "baseProfitPct": 2.3,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.4,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.3,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.5,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "超额完成回购是回购计划的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "080-01",
    "category": "A2",
    "title": "上所后横盘3个月",
    "desc": "价格在发行价附近震荡，等待方向选择。这种情况下，你的选择是？",
    "baseProfitPct": 1.7,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.5,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.7,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在整理期的不确定性下，上所后横盘3个月可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "080-02",
    "category": "A2",
    "title": "快速回调30%",
    "desc": "上所后冲高快速回落，套牢盘压力大。你会如何行动？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对整理期的情况，快速回调30%考验判断力。适度参与是平衡选择，预期回报1.3%。"
  },
  {
    "id": "080-03",
    "category": "A2",
    "title": "稳步上涨",
    "desc": "上所后每周小幅上涨，走势健康。你的决策是？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对整理期的情况，稳步上涨考验判断力。适度参与是平衡选择，预期回报2.0%。"
  },
  {
    "id": "080-04",
    "category": "A2",
    "title": "剧烈波动",
    "desc": "每日波动20%，投机氛围浓，难以判断。对此你会做出什么选择？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对整理期的情况，剧烈波动考验判断力。适度参与是平衡选择，预期回报1.4%。"
  },
  {
    "id": "081-01",
    "category": "A1",
    "title": "PS 50倍",
    "desc": "市销率50倍，远超传统软件公司，泡沫严重？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对收入倍数的情况，PS 50倍考验判断力。适度参与是平衡选择，预期回报1.3%。"
  },
  {
    "id": "081-02",
    "category": "A1",
    "title": "PS 10倍",
    "desc": "市销率相对合理，与成长股相当。此时你会选择怎么做？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在收入倍数的不确定性下，PS 10倍可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "081-03",
    "category": "A1",
    "title": "无收入纯概念",
    "desc": "产品未上线，收入为零，估值纯靠预期。你的投资策略是？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在收入倍数的场景下，无收入纯概念需要果断决策。重仓参与可能获得2.2%回报，但需承受较高风险。"
  },
  {
    "id": "081-04",
    "category": "A1",
    "title": "收入快速增长",
    "desc": "月收入环比增长50%，高增速支撑高估值。你将如何应对？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对收入倍数的情况，收入快速增长考验判断力。适度参与是平衡选择，预期回报2.2%。"
  },
  {
    "id": "082-01",
    "category": "A1",
    "title": "估值腰斩",
    "desc": "新轮融资估值是上一轮50%，老股东被严重稀释。这种情况下，你的选择是？",
    "baseProfitPct": 0.8,
    "baseLossPct": 0.4,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "估值腰斩是Down round的典型场景。小额试水可以控制风险，预期回报0.4%。"
  },
  {
    "id": "082-02",
    "category": "A1",
    "title": "Flat round",
    "desc": "估值与上轮持平，市场环境不好但至少没跌。你会如何行动？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在Down round的不确定性下，Flat round可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "082-03",
    "category": "A1",
    "title": "Up round",
    "desc": "估值上涨，市场认可项目进展。你的决策是？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对Down round的情况，Up round考验判断力。适度参与是平衡选择，预期回报2.2%。"
  },
  {
    "id": "082-04",
    "category": "A1",
    "title": "老股东追加",
    "desc": "尽管估值下降，老股东仍追加投资，信心表现。对此你会做出什么选择？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "老股东追加是Down round的典型场景。小额试水可以控制风险，预期回报0.8%。"
  },
  {
    "id": "083-01",
    "category": "A1",
    "title": "对标以太坊",
    "desc": "估值参照ETH，但生态差距巨大。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对对标龙头的情况，对标以太坊考验判断力。适度参与是平衡选择，预期回报1.2%。"
  },
  {
    "id": "083-02",
    "category": "A1",
    "title": "对标Arbitrum",
    "desc": "同类L2项目，技术指标接近，估值合理。此时你会选择怎么做？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在对标龙头的场景下，对标Arbitrum需要果断决策。重仓参与可能获得3.0%回报，但需承受较高风险。"
  },
  {
    "id": "083-03",
    "category": "A1",
    "title": "对标Uniswap",
    "desc": "DEX赛道，交易量差距10倍但估值差距5倍。你的投资策略是？",
    "baseProfitPct": 1.7,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.5,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.7,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在对标龙头的不确定性下，对标Uniswap可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "083-04",
    "category": "A1",
    "title": "无直接对标",
    "desc": "全新赛道无参照物，估值纯靠谈判。你将如何应对？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在对标龙头的场景下，无直接对标需要果断决策。重仓参与可能获得2.7%回报，但需承受较高风险。"
  },
  {
    "id": "084-01",
    "category": "A1",
    "title": "FDV 100亿",
    "desc": "fully diluted valuation极高，需要巨大成长空间。这种情况下，你的选择是？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在FDV对比的不确定性下，FDV 100亿可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "084-02",
    "category": "A1",
    "title": "FDV 10亿",
    "desc": "相对合理的FDV，有上涨空间。你会如何行动？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对FDV对比的情况，FDV 10亿考验判断力。适度参与是平衡选择，预期回报2.0%。"
  },
  {
    "id": "084-03",
    "category": "A1",
    "title": "低流通高FDV",
    "desc": "流通10%但FDV 50亿，解锁后抛压巨大。你的决策是？",
    "baseProfitPct": 0.9,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对FDV对比的情况，低流通高FDV考验判断力。适度参与是平衡选择，预期回报0.9%。"
  },
  {
    "id": "084-04",
    "category": "A1",
    "title": "高流通低FDV",
    "desc": "流通80%，FDV接近市值，抛压小。对此你会做出什么选择？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在FDV对比的不确定性下，高流通低FDV可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "085-01",
    "category": "A1",
    "title": "FDV/TVL=10",
    "desc": "估值是锁仓量10倍，相对高估。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "FDV/TVL=10是TVL比率的典型场景。小额试水可以控制风险，预期回报0.7%。"
  },
  {
    "id": "085-02",
    "category": "A1",
    "title": "FDV/TVL=1",
    "desc": "估值等于锁仓量，相对低估。此时你会选择怎么做？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "FDV/TVL=1是TVL比率的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "085-03",
    "category": "A1",
    "title": "TVL快速增长",
    "desc": "TVL月增100%，FDV/TVL比率快速下降。你的投资策略是？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对TVL比率的情况，TVL快速增长考验判断力。适度参与是平衡选择，预期回报2.1%。"
  },
  {
    "id": "085-04",
    "category": "A1",
    "title": "TVL虚假",
    "desc": "TVL主要由项目方资金构成，真实用户少。你将如何应对？",
    "baseProfitPct": 1.0,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.0,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对TVL比率的情况，TVL虚假考验判断力。适度参与是平衡选择，预期回报1.0%。"
  },
  {
    "id": "086-01",
    "category": "A1",
    "title": "比同类贵3倍",
    "desc": "估值明显高于同类项目，需要证明溢价合理性。这种情况下，你的选择是？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在同类对比的场景下，比同类贵3倍需要果断决策。重仓参与可能获得2.0%回报，但需承受较高风险。"
  },
  {
    "id": "086-02",
    "category": "A1",
    "title": "比同类便宜50%",
    "desc": "估值低于同类，可能是机会也可能是陷阱。你会如何行动？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对同类对比的情况，比同类便宜50%考验判断力。适度参与是平衡选择，预期回报1.9%。"
  },
  {
    "id": "086-03",
    "category": "A1",
    "title": "同类中等估值",
    "desc": "估值处于同类中游，不突出也不落后。你的决策是？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在同类对比的不确定性下，同类中等估值可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "086-04",
    "category": "A1",
    "title": "无同类可对比",
    "desc": "首创概念，估值无参照，纯靠谈判能力。对此你会做出什么选择？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "无同类可对比是同类对比的典型场景。小额试水可以控制风险，预期回报0.9%。"
  },
  {
    "id": "087-01",
    "category": "A1",
    "title": "3个月估值翻3倍",
    "desc": "增速极快，FOMO情绪严重，可能见顶。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "3个月估值翻3倍是估值增速的典型场景。小额试水可以控制风险，预期回报0.7%。"
  },
  {
    "id": "087-02",
    "category": "A1",
    "title": "1年估值翻倍",
    "desc": "合理增速，与项目进展匹配。此时你会选择怎么做？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在估值增速的场景下，1年估值翻倍需要果断决策。重仓参与可能获得3.2%回报，但需承受较高风险。"
  },
  {
    "id": "087-03",
    "category": "A1",
    "title": "估值下降",
    "desc": "市场环境不好，估值回调，可能是机会。你的投资策略是？",
    "baseProfitPct": 1.7,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.5,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.7,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "估值下降是估值增速的典型场景。小额试水可以控制风险，预期回报0.8%。"
  },
  {
    "id": "087-04",
    "category": "A1",
    "title": "估值不变",
    "desc": "半年无变化，市场不认可或资金紧张。你将如何应对？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "估值不变是估值增速的典型场景。小额试水可以控制风险，预期回报0.8%。"
  },
  {
    "id": "088-01",
    "category": "A1",
    "title": "20人团队估值10亿",
    "desc": "人均估值5000万，远超行业平均，泡沫严重。这种情况下，你的选择是？",
    "baseProfitPct": 1.1,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 1.7,
        "lossPct": 0.9,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在团队规模匹配的不确定性下，20人团队估值10亿可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "088-02",
    "category": "A1",
    "title": "100人团队估值5亿",
    "desc": "人均估值合理，与行业水平相当。你会如何行动？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "100人团队估值5亿是团队规模匹配的典型场景。小额试水可以控制风险，预期回报1.0%。"
  },
  {
    "id": "088-03",
    "category": "A1",
    "title": "团队快速扩张",
    "desc": "计划半年内从20人扩到100人，支撑高估值。你的决策是？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在团队规模匹配的场景下，团队快速扩张需要果断决策。重仓参与可能获得2.7%回报，但需承受较高风险。"
  },
  {
    "id": "088-04",
    "category": "A1",
    "title": "小而精团队",
    "desc": "10人精英团队，效率高，估值相对合理。对此你会做出什么选择？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在团队规模匹配的场景下，小而精团队需要果断决策。重仓参与可能获得3.2%回报，但需承受较高风险。"
  },
  {
    "id": "089-01",
    "category": "A3",
    "title": "期权池10%",
    "desc": "预留10%用于团队激励，比例合理。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "期权池10%是期权池的典型场景。小额试水可以控制风险，预期回报1.0%。"
  },
  {
    "id": "089-02",
    "category": "A3",
    "title": "期权池20%",
    "desc": "预留过多，未来可能稀释老股东。此时你会选择怎么做？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对期权池的情况，期权池20%考验判断力。适度参与是平衡选择，预期回报1.6%。"
  },
  {
    "id": "089-03",
    "category": "A3",
    "title": "期权池用尽",
    "desc": "上一轮已用完，需要新增期权池。你的投资策略是？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "期权池用尽是期权池的典型场景。小额试水可以控制风险，预期回报0.8%。"
  },
  {
    "id": "089-04",
    "category": "A3",
    "title": "期权池加速释放",
    "desc": "原4年释放改为2年，激励前置但稀释快。你将如何应对？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在期权池的场景下，期权池加速释放需要果断决策。重仓参与可能获得2.1%回报，但需承受较高风险。"
  },
  {
    "id": "090-01",
    "category": "A1",
    "title": "融资额远超需求",
    "desc": "实际只需要500万，却融了5000万，资金使用效率存疑。这种情况下，你的选择是？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在融资额匹配的场景下，融资额远超需求需要果断决策。重仓参与可能获得2.0%回报，但需承受较高风险。"
  },
  {
    "id": "090-02",
    "category": "A1",
    "title": "融资额刚好够用",
    "desc": "融资金额与烧钱速度匹配，18个月跑道。你会如何行动？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在融资额匹配的不确定性下，融资额刚好够用可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "090-03",
    "category": "A1",
    "title": "融资额不足",
    "desc": "只融到计划的一半，可能很快需要再融资。你的决策是？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "融资额不足是融资额匹配的典型场景。小额试水可以控制风险，预期回报0.7%。"
  },
  {
    "id": "090-04",
    "category": "A1",
    "title": "超额认购",
    "desc": "原定3000万，最终融了6000万，市场热情高。对此你会做出什么选择？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "超额认购是融资额匹配的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "091-01",
    "category": "C3",
    "title": "高质量讨论",
    "desc": "社区讨论技术细节、经济模型，专业度高。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在社区质量参差的不确定性下，高质量讨论可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "091-02",
    "category": "C3",
    "title": "纯粹价格讨论",
    "desc": "只关心币价，不关注项目本身，投机氛围浓。此时你会选择怎么做？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在社区质量参差的场景下，纯粹价格讨论需要果断决策。重仓参与可能获得2.0%回报，但需承受较高风险。"
  },
  {
    "id": "091-03",
    "category": "C3",
    "title": "无脑喊单",
    "desc": "大量'to the moon'、'diamond hands'，无实质内容。你的投资策略是？",
    "baseProfitPct": 0.9,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在社区质量参差的不确定性下，无脑喊单可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "091-04",
    "category": "C3",
    "title": "社区冷清",
    "desc": "成员多但活跃低，死气沉沉。你将如何应对？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对社区质量参差的情况，社区冷清考验判断力。适度参与是平衡选择，预期回报1.2%。"
  },
  {
    "id": "092-01",
    "category": "D1",
    "title": "有组织FUD",
    "desc": "竞品雇佣水军散布负面消息，非真实问题。这种情况下，你的选择是？",
    "baseProfitPct": 1.7,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.5,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.7,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "有组织FUD是FUD情绪的典型场景。小额试水可以控制风险，预期回报0.8%。"
  },
  {
    "id": "092-02",
    "category": "D1",
    "title": "真实问题被放大",
    "desc": "确实有小问题，但被FUD成致命缺陷。你会如何行动？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在FUD情绪的场景下，真实问题被放大需要果断决策。重仓参与可能获得2.4%回报，但需承受较高风险。"
  },
  {
    "id": "092-03",
    "category": "D1",
    "title": "社区自我辟谣",
    "desc": "FUD出现后社区自发组织澄清，凝聚力强。你的决策是？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在FUD情绪的不确定性下，社区自我辟谣可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "092-04",
    "category": "D1",
    "title": "项目方沉默",
    "desc": "面对FUD不回应，任由恐慌蔓延。对此你会做出什么选择？",
    "baseProfitPct": 1.0,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.0,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在FUD情绪的场景下，项目方沉默需要果断决策。重仓参与可能获得1.5%回报，但需承受较高风险。"
  },
  {
    "id": "093-01",
    "category": "C3",
    "title": "GitHub日更",
    "desc": "每天都有代码提交，开发活跃度高。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对开发者活跃的情况，GitHub日更考验判断力。适度参与是平衡选择，预期回报2.2%。"
  },
  {
    "id": "093-02",
    "category": "C3",
    "title": "周更",
    "desc": "每周有更新，节奏稳定。此时你会选择怎么做？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "周更是开发者活跃的典型场景。小额试水可以控制风险，预期回报1.0%。"
  },
  {
    "id": "093-03",
    "category": "C3",
    "title": "月更",
    "desc": "每月才更新一次，开发进展慢。你的投资策略是？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在开发者活跃的不确定性下，月更可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "093-04",
    "category": "C3",
    "title": "数月无更新",
    "desc": "GitHub 3个月无提交，项目停滞？",
    "baseProfitPct": 0.8,
    "baseLossPct": 0.4,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在开发者活跃的场景下，数月无更新需要果断决策。重仓参与可能获得1.2%回报，但需承受较高风险。"
  },
  {
    "id": "094-01",
    "category": "E1",
    "title": "高投票参与率",
    "desc": "重要提案投票率超50%，社区积极参与。这种情况下，你的选择是？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "高投票参与率是治理参与的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "094-02",
    "category": "E1",
    "title": "低投票参与率",
    "desc": "仅5%参与投票，大多数人不关心治理。你会如何行动？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "低投票参与率是治理参与的典型场景。小额试水可以控制风险，预期回报0.7%。"
  },
  {
    "id": "094-03",
    "category": "E1",
    "title": "激烈辩论",
    "desc": "提案引发社区激烈讨论，观点交锋。你的决策是？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在治理参与的场景下，激烈辩论需要果断决策。重仓参与可能获得2.8%回报，但需承受较高风险。"
  },
  {
    "id": "094-04",
    "category": "E1",
    "title": "一致通过",
    "desc": "提案无争议一致通过，可能是无人关心。对此你会做出什么选择？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "一致通过是治理参与的典型场景。小额试水可以控制风险，预期回报0.8%。"
  },
  {
    "id": "095-01",
    "category": "D1",
    "title": "前10地址持有80%",
    "desc": "筹码高度集中，容易被操纵。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.1,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 1.7,
        "lossPct": 0.9,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "前10地址持有80%是控盘迹象的典型场景。小额试水可以控制风险，预期回报0.6%。"
  },
  {
    "id": "095-02",
    "category": "D1",
    "title": "地址分布均匀",
    "desc": "前100地址仅占30%，去中心化程度高。此时你会选择怎么做？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在控盘迹象的不确定性下，地址分布均匀可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "095-03",
    "category": "D1",
    "title": "巨鲸分批吸筹",
    "desc": "链上显示巨鲸在低价区持续买入，可能拉升。你的投资策略是？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "巨鲸分批吸筹是控盘迹象的典型场景。小额试水可以控制风险，预期回报1.0%。"
  },
  {
    "id": "095-04",
    "category": "D1",
    "title": "对倒交易",
    "desc": "疑似同一主体多个地址互相交易，制造虚假活跃。你将如何应对？",
    "baseProfitPct": 0.7,
    "baseLossPct": 0.3,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 0.7,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.1,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在控盘迹象的不确定性下，对倒交易可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "096-01",
    "category": "C3",
    "title": "社区自建工具",
    "desc": "无项目方激励，社区自发开发工具、教程。这种情况下，你的选择是？",
    "baseProfitPct": 2.3,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.4,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.3,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.5,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "社区自建工具是自发建设的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "096-02",
    "category": "C3",
    "title": "社区组织活动",
    "desc": "全球各地自发组织meetup，热情高。你会如何行动？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对自发建设的情况，社区组织活动考验判断力。适度参与是平衡选择，预期回报2.2%。"
  },
  {
    "id": "096-03",
    "category": "C3",
    "title": "内容创作丰富",
    "desc": "大量高质量文章、视频，自发传播。你的决策是？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对自发建设的情况，内容创作丰富考验判断力。适度参与是平衡选择，预期回报2.1%。"
  },
  {
    "id": "096-04",
    "category": "C3",
    "title": "仅项目方推动",
    "desc": "无社区自发行为，全靠项目方花钱推动。对此你会做出什么选择？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在自发建设的不确定性下，仅项目方推动可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "097-01",
    "category": "C3",
    "title": "英语+中文+韩语活跃",
    "desc": "多语言社区都活跃，全球分布均衡。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在多语言社区的不确定性下，英语+中文+韩语活跃可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "097-02",
    "category": "C3",
    "title": "仅英语活跃",
    "desc": "其他语言社区冷清，全球化程度低。此时你会选择怎么做？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对多语言社区的情况，仅英语活跃考验判断力。适度参与是平衡选择，预期回报1.6%。"
  },
  {
    "id": "097-03",
    "category": "C3",
    "title": "某单一语言主导",
    "desc": "90%成员来自一个国家，地域风险集中。你的投资策略是？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "某单一语言主导是多语言社区的典型场景。小额试水可以控制风险，预期回报0.7%。"
  },
  {
    "id": "097-04",
    "category": "C3",
    "title": "多语言但各自为政",
    "desc": "各语言社区不互通，信息孤岛。你将如何应对？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在多语言社区的不确定性下，多语言但各自为政可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "098-01",
    "category": "E2",
    "title": "贡献者获得Token奖励",
    "desc": "按贡献奖励社区成员，激励建设。这种情况下，你的选择是？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在奖励机制的场景下，贡献者获得Token奖励需要果断决策。重仓参与可能获得3.2%回报，但需承受较高风险。"
  },
  {
    "id": "098-02",
    "category": "E2",
    "title": "邀请返佣",
    "desc": "拉人头奖励，传销嫌疑。你会如何行动？",
    "baseProfitPct": 0.9,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "邀请返佣是奖励机制的典型场景。小额试水可以控制风险，预期回报0.5%。"
  },
  {
    "id": "098-03",
    "category": "E2",
    "title": "任务赏金",
    "desc": "完成任务获得奖励，透明可预期。你的决策是？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "任务赏金是奖励机制的典型场景。小额试水可以控制风险，预期回报1.0%。"
  },
  {
    "id": "098-04",
    "category": "E2",
    "title": "无奖励纯自愿",
    "desc": "无经济激励，纯靠信仰贡献，难持续。对此你会做出什么选择？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对奖励机制的情况，无奖励纯自愿考验判断力。适度参与是平衡选择，预期回报1.5%。"
  },
  {
    "id": "099-01",
    "category": "D1",
    "title": "对技术路线质疑",
    "desc": "社区核心成员质疑技术可行性，内部分裂。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在负面情绪的不确定性下，对技术路线质疑可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "099-02",
    "category": "D1",
    "title": "对团队不满",
    "desc": "社区对团队沟通、执行力不满，抱怨多。此时你会选择怎么做？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "对团队不满是负面情绪的典型场景。小额试水可以控制风险，预期回报0.7%。"
  },
  {
    "id": "099-03",
    "category": "D1",
    "title": "对估值不满",
    "desc": "认为项目方估值预期过高，不合理。你的投资策略是？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在负面情绪的不确定性下，对估值不满可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "099-04",
    "category": "D1",
    "title": "负面情绪被压制",
    "desc": "Discord批评声音被删，一言堂。你将如何应对？",
    "baseProfitPct": 0.9,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在负面情绪的不确定性下，负面情绪被压制可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "100-01",
    "category": "C3",
    "title": "产品与宣传一致",
    "desc": "承诺的功能都已实现，甚至超出预期。这种情况下，你的选择是？",
    "baseProfitPct": 2.3,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.4,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.3,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.5,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在产品同步的不确定性下，产品与宣传一致可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "100-02",
    "category": "C3",
    "title": "产品滞后宣传",
    "desc": "宣传的功能还在开发中，交付延迟。你会如何行动？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对产品同步的情况，产品滞后宣传考验判断力。适度参与是平衡选择，预期回报1.5%。"
  },
  {
    "id": "100-03",
    "category": "C3",
    "title": "产品简单",
    "desc": "功能比竞品简单，但宣传夸大。你的决策是？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在产品同步的不确定性下，产品简单可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "100-04",
    "category": "C3",
    "title": "产品与宣传不符",
    "desc": "实际产品与宣传差距大，被投诉。对此你会做出什么选择？",
    "baseProfitPct": 0.8,
    "baseLossPct": 0.4,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对产品同步的情况，产品与宣传不符考验判断力。适度参与是平衡选择，预期回报0.8%。"
  },
  {
    "id": "101-01",
    "category": "C1",
    "title": "高危漏洞已修复",
    "desc": "审计发现高危问题但已修复，无遗留风险。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在审计警告的场景下，高危漏洞已修复需要果断决策。重仓参与可能获得2.8%回报，但需承受较高风险。"
  },
  {
    "id": "101-02",
    "category": "C1",
    "title": "中危漏洞待修复",
    "desc": "审计发现中危问题，项目方承诺修复但尚未完成。此时你会选择怎么做？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "中危漏洞待修复是审计警告的典型场景。小额试水可以控制风险，预期回报0.8%。"
  },
  {
    "id": "101-03",
    "category": "C1",
    "title": "审计建议未采纳",
    "desc": "审计团队提出优化建议，项目方拒绝采纳。你的投资策略是？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "审计建议未采纳是审计警告的典型场景。小额试水可以控制风险，预期回报0.7%。"
  },
  {
    "id": "101-04",
    "category": "C1",
    "title": "审计发现经济模型问题",
    "desc": "代码无问题但经济模型设计有缺陷，可能导致通胀失控。你将如何应对？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在审计警告的场景下，审计发现经济模型问题需要果断决策。重仓参与可能获得1.8%回报，但需承受较高风险。"
  },
  {
    "id": "102-01",
    "category": "C1",
    "title": "3家顶级审计通过",
    "desc": "Trail of Bits、OpenZeppelin、CertiK都审计通过。这种情况下，你的选择是？",
    "baseProfitPct": 2.3,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.4,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.3,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.5,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对多重审计的情况，3家顶级审计通过考验判断力。适度参与是平衡选择，预期回报2.3%。"
  },
  {
    "id": "102-02",
    "category": "C1",
    "title": "2家审计结果冲突",
    "desc": "一家认为安全，一家发现高危问题，该信谁？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "2家审计结果冲突是多重审计的典型场景。小额试水可以控制风险，预期回报0.7%。"
  },
  {
    "id": "102-03",
    "category": "C1",
    "title": "重复审计",
    "desc": "同一家审计公司审了3次，发现不同问题，代码质量存疑。你的决策是？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对多重审计的情况，重复审计考验判断力。适度参与是平衡选择，预期回报1.5%。"
  },
  {
    "id": "102-04",
    "category": "C1",
    "title": "社区审计",
    "desc": "除专业机构外，还有白帽社区审计，覆盖更广。对此你会做出什么选择？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对多重审计的情况，社区审计考验判断力。适度参与是平衡选择，预期回报2.1%。"
  },
  {
    "id": "103-01",
    "category": "C1",
    "title": "审计后大规模重构",
    "desc": "审计后重写50%代码，需要重新审计。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对代码修改的情况，审计后大规模重构考验判断力。适度参与是平衡选择，预期回报1.4%。"
  },
  {
    "id": "103-02",
    "category": "C1",
    "title": "小修小补",
    "desc": "审计后仅修改发现的问题，改动小。此时你会选择怎么做？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在代码修改的场景下，小修小补需要果断决策。重仓参与可能获得3.0%回报，但需承受较高风险。"
  },
  {
    "id": "103-03",
    "category": "C1",
    "title": "审计前已冻结代码",
    "desc": "审计后不再修改，直接部署，稳定性高。你的投资策略是？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在代码修改的场景下，审计前已冻结代码需要果断决策。重仓参与可能获得3.3%回报，但需承受较高风险。"
  },
  {
    "id": "103-04",
    "category": "C1",
    "title": "边审计边开发",
    "desc": "审计过程中还在加新功能，风险累积。你将如何应对？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对代码修改的情况，边审计边开发考验判断力。适度参与是平衡选择，预期回报1.2%。"
  },
  {
    "id": "104-01",
    "category": "C1",
    "title": "审计公司历史上事故",
    "desc": "该审计公司审计过的项目曾被黑客攻击，声誉受损。这种情况下，你的选择是？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在审计声誉的不确定性下，审计公司历史上事故可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "104-02",
    "category": "C1",
    "title": "审计公司多次发现重大漏洞",
    "desc": "该审计公司曾多次在代码上线前发现高危问题，专业可靠。你会如何行动？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在审计声誉的场景下，审计公司多次发现重大漏洞需要果断决策。重仓参与可能获得3.3%回报，但需承受较高风险。"
  },
  {
    "id": "104-03",
    "category": "C1",
    "title": "新成立审计公司",
    "desc": "审计公司刚成立，案例少，经验不足。你的决策是？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在审计声誉的不确定性下，新成立审计公司可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "104-04",
    "category": "C1",
    "title": "审计公司被收购",
    "desc": "原独立审计公司被交易所收购，独立性存疑。对此你会做出什么选择？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在审计声誉的不确定性下，审计公司被收购可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "105-01",
    "category": "C1",
    "title": "经济模型审计通过",
    "desc": "不仅有代码审计，还有经济模型审计，全面评估。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对经济模型审计的情况，经济模型审计通过考验判断力。适度参与是平衡选择，预期回报2.2%。"
  },
  {
    "id": "105-02",
    "category": "C1",
    "title": "无经济模型审计",
    "desc": "只有代码审计，经济模型设计风险未评估。此时你会选择怎么做？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在经济模型审计的不确定性下，无经济模型审计可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "105-03",
    "category": "C1",
    "title": "经济模型审计发现问题",
    "desc": "发现代币设计可能导致死亡螺旋，需要修改。你的投资策略是？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在经济模型审计的不确定性下，经济模型审计发现问题可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "105-04",
    "category": "C1",
    "title": "第三方经济咨询",
    "desc": "聘请经济学家评估模型设计，专业度高。你将如何应对？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在经济模型审计的不确定性下，第三方经济咨询可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "106-01",
    "category": "C1",
    "title": "完整报告公开",
    "desc": "审计报告全文公开，任何人可查看。这种情况下，你的选择是？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对报告公开的情况，完整报告公开考验判断力。适度参与是平衡选择，预期回报2.1%。"
  },
  {
    "id": "106-02",
    "category": "C1",
    "title": "仅公开摘要",
    "desc": "详细报告保密，仅公布摘要，透明度不足。你会如何行动？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对报告公开的情况，仅公开摘要考验判断力。适度参与是平衡选择，预期回报1.5%。"
  },
  {
    "id": "106-03",
    "category": "C1",
    "title": "延迟公开",
    "desc": "审计完成1个月后才公开报告，期间可能修改。你的决策是？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在报告公开的场景下，延迟公开需要果断决策。重仓参与可能获得2.1%回报，但需承受较高风险。"
  },
  {
    "id": "106-04",
    "category": "C1",
    "title": "选择性公开",
    "desc": "只公开好的部分，问题部分隐瞒。对此你会做出什么选择？",
    "baseProfitPct": 0.9,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在报告公开的场景下，选择性公开需要果断决策。重仓参与可能获得1.4%回报，但需承受较高风险。"
  },
  {
    "id": "107-01",
    "category": "C1",
    "title": "高额漏洞赏金",
    "desc": "最高100万U赏金，吸引白帽黑客审查。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在赏金计划的不确定性下，高额漏洞赏金可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "107-02",
    "category": "C1",
    "title": "赏金过低",
    "desc": "最高赏金仅1000U，吸引力不足。此时你会选择怎么做？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对赏金计划的情况，赏金过低考验判断力。适度参与是平衡选择，预期回报1.4%。"
  },
  {
    "id": "107-03",
    "category": "C1",
    "title": "赏金计划运行2年",
    "desc": "长期运行，累计修复50个漏洞，效果显著。你的投资策略是？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对赏金计划的情况，赏金计划运行2年考验判断力。适度参与是平衡选择，预期回报2.1%。"
  },
  {
    "id": "107-04",
    "category": "C1",
    "title": "无赏金计划",
    "desc": "无激励让外部安全研究员审查代码。你将如何应对？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在赏金计划的不确定性下，无赏金计划可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "108-01",
    "category": "C1",
    "title": "前端+合约都审计",
    "desc": "不仅审计智能合约，还审计前端代码，防止钓鱼。这种情况下，你的选择是？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在前端审计的场景下，前端+合约都审计需要果断决策。重仓参与可能获得3.2%回报，但需承受较高风险。"
  },
  {
    "id": "108-02",
    "category": "C1",
    "title": "仅审计合约",
    "desc": "前端代码未审计，可能存在钓鱼风险。你会如何行动？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对前端审计的情况，仅审计合约考验判断力。适度参与是平衡选择，预期回报1.6%。"
  },
  {
    "id": "108-03",
    "category": "C1",
    "title": "前端被黑",
    "desc": "DNS劫持导致用户访问钓鱼网站，损失百万。你的决策是？",
    "baseProfitPct": 0.7,
    "baseLossPct": 0.3,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 0.7,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.1,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在前端审计的场景下，前端被黑需要果断决策。重仓参与可能获得1.0%回报，但需承受较高风险。"
  },
  {
    "id": "108-04",
    "category": "C1",
    "title": "IPFS托管前端",
    "desc": "前端托管在IPFS，去中心化，难以篡改。对此你会做出什么选择？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在前端审计的不确定性下，IPFS托管前端可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "109-01",
    "category": "C1",
    "title": "依赖项目被攻击",
    "desc": "使用的预言机被攻击，连带受影响。面对这种情况，你该如何决策？",
    "baseProfitPct": 0.8,
    "baseLossPct": 0.4,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对第三方依赖的情况，依赖项目被攻击考验判断力。适度参与是平衡选择，预期回报0.8%。"
  },
  {
    "id": "109-02",
    "category": "C1",
    "title": "依赖项目安全",
    "desc": "依赖的库和协议都经过严格审计，风险低。此时你会选择怎么做？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在第三方依赖的不确定性下，依赖项目安全可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "109-03",
    "category": "C1",
    "title": "过多外部依赖",
    "desc": "代码依赖10个外部库，攻击面大。你的投资策略是？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "过多外部依赖是第三方依赖的典型场景。小额试水可以控制风险，预期回报0.7%。"
  },
  {
    "id": "109-04",
    "category": "C1",
    "title": "自主开发核心模块",
    "desc": "核心功能自主开发，不依赖外部，可控性高。你将如何应对？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在第三方依赖的不确定性下，自主开发核心模块可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "110-01",
    "category": "C1",
    "title": "每次升级都审计",
    "desc": "V1、V2、V3每次大版本都重新审计，谨慎。这种情况下，你的选择是？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在升级审计的不确定性下，每次升级都审计可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "110-02",
    "category": "C1",
    "title": "仅首次审计",
    "desc": "上线审计后，多次升级未再审计，风险累积。你会如何行动？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在升级审计的不确定性下，仅首次审计可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "110-03",
    "category": "C1",
    "title": "Delta审计",
    "desc": "只审计变更部分，效率更高但可能遗漏交互问题。你的决策是？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对升级审计的情况，Delta审计考验判断力。适度参与是平衡选择，预期回报1.8%。"
  },
  {
    "id": "110-04",
    "category": "C1",
    "title": "紧急升级未审计",
    "desc": "为修复漏洞紧急升级，未经过完整审计。对此你会做出什么选择？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在升级审计的不确定性下，紧急升级未审计可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "111-01",
    "category": "A1",
    "title": "AI训练数据上链",
    "desc": "利用区块链保证AI训练数据真实性和版权。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在AI+区块链的不确定性下，AI训练数据上链可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "111-02",
    "category": "A1",
    "title": "AI交易机器人",
    "desc": "AI自动交易，但策略黑盒，难以验证。此时你会选择怎么做？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "AI交易机器人是AI+区块链的典型场景。小额试水可以控制风险，预期回报0.8%。"
  },
  {
    "id": "111-03",
    "category": "A1",
    "title": "AI概念炒作",
    "desc": "只是在网站上加了AI字样，无实际AI应用。你的投资策略是？",
    "baseProfitPct": 0.8,
    "baseLossPct": 0.4,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对AI+区块链的情况，AI概念炒作考验判断力。适度参与是平衡选择，预期回报0.8%。"
  },
  {
    "id": "111-04",
    "category": "A1",
    "title": "去中心化AI算力",
    "desc": "共享GPU算力训练AI，降低AI开发成本。你将如何应对？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "去中心化AI算力是AI+区块链的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "112-01",
    "category": "A1",
    "title": "美债代币化",
    "desc": "将美国国债上链，获得稳定收益。这种情况下，你的选择是？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在RWA的不确定性下，美债代币化可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "112-02",
    "category": "A1",
    "title": "房地产代币化",
    "desc": "将房产份额上链，降低投资门槛。你会如何行动？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对RWA的情况，房地产代币化考验判断力。适度参与是平衡选择，预期回报2.0%。"
  },
  {
    "id": "112-03",
    "category": "A1",
    "title": "RWA监管合规",
    "desc": "已获得相关牌照，合规发行RWA产品。你的决策是？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "RWA监管合规是RWA的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "112-04",
    "category": "A1",
    "title": "RWA无实际资产 backing",
    "desc": "声称有资产 backing 但无法核实，可能骗局。对此你会做出什么选择？",
    "baseProfitPct": 0.7,
    "baseLossPct": 0.3,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 0.7,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.1,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在RWA的不确定性下，RWA无实际资产 backing可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "113-01",
    "category": "A1",
    "title": "数据可用性层",
    "desc": "专注DA层，为Rollup提供数据服务。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在模块化区块链的场景下，数据可用性层需要果断决策。重仓参与可能获得3.3%回报，但需承受较高风险。"
  },
  {
    "id": "113-02",
    "category": "A1",
    "title": "共享排序器",
    "desc": "多个Rollup共享排序器，互操作性强。此时你会选择怎么做？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "共享排序器是模块化区块链的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "113-03",
    "category": "A1",
    "title": "模块化过度复杂",
    "desc": "模块化设计过于复杂，增加系统风险。你的投资策略是？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对模块化区块链的情况，模块化过度复杂考验判断力。适度参与是平衡选择，预期回报1.4%。"
  },
  {
    "id": "113-04",
    "category": "A1",
    "title": "单体链性能足够",
    "desc": "当前单体链性能已满足需求，模块化不必要。你将如何应对？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "单体链性能足够是模块化区块链的典型场景。小额试水可以控制风险，预期回报0.8%。"
  },
  {
    "id": "114-01",
    "category": "A1",
    "title": "ZK-Rollup",
    "desc": "使用ZK技术扩展以太坊，安全性高。这种情况下，你的选择是？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "ZK-Rollup是ZK技术的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "114-02",
    "category": "A1",
    "title": "ZK隐私币",
    "desc": "保护交易隐私，但监管风险高。你会如何行动？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "ZK隐私币是ZK技术的典型场景。小额试水可以控制风险，预期回报0.8%。"
  },
  {
    "id": "114-03",
    "category": "A1",
    "title": "ZK证明时间过长",
    "desc": "生成ZK证明需要几小时，实用性差。你的决策是？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在ZK技术的场景下，ZK证明时间过长需要果断决策。重仓参与可能获得2.0%回报，但需承受较高风险。"
  },
  {
    "id": "114-04",
    "category": "A1",
    "title": "ZK技术突破",
    "desc": "证明时间从小时降到秒级，实用性大增。对此你会做出什么选择？",
    "baseProfitPct": 2.4,
    "baseLossPct": 1.2,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.6,
        "lossPct": 1.9,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.4,
        "lossPct": 1.2,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.2,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.5,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对ZK技术的情况，ZK技术突破考验判断力。适度参与是平衡选择，预期回报2.4%。"
  },
  {
    "id": "115-01",
    "category": "A1",
    "title": "去中心化存储",
    "desc": "利用闲置硬盘空间提供去中心化存储。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对DePIN的情况，去中心化存储考验判断力。适度参与是平衡选择，预期回报2.0%。"
  },
  {
    "id": "115-02",
    "category": "A1",
    "title": "去中心化计算",
    "desc": "利用闲置CPU/GPU提供计算服务。此时你会选择怎么做？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对DePIN的情况，去中心化计算考验判断力。适度参与是平衡选择，预期回报2.1%。"
  },
  {
    "id": "115-03",
    "category": "A1",
    "title": "硬件要求过高",
    "desc": "参与需要专业硬件，门槛高，难以去中心化。你的投资策略是？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在DePIN的不确定性下，硬件要求过高可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "115-04",
    "category": "A1",
    "title": "DePIN网络效应",
    "desc": "节点越多服务越好，网络效应明显。你将如何应对？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对DePIN的情况，DePIN网络效应考验判断力。适度参与是平衡选择，预期回报2.2%。"
  },
  {
    "id": "116-01",
    "category": "A1",
    "title": "3A级链游",
    "desc": "传统游戏大厂制作，游戏品质高。这种情况下，你的选择是？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对GameFi的情况，3A级链游考验判断力。适度参与是平衡选择，预期回报2.1%。"
  },
  {
    "id": "116-02",
    "category": "A1",
    "title": "Ponzi游戏模式",
    "desc": "新玩家资金支付老玩家收益，不可持续。你会如何行动？",
    "baseProfitPct": 0.7,
    "baseLossPct": 0.3,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 0.7,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.1,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在GameFi的场景下，Ponzi游戏模式需要果断决策。重仓参与可能获得1.0%回报，但需承受较高风险。"
  },
  {
    "id": "116-03",
    "category": "A1",
    "title": "游戏性优先",
    "desc": "先做好游戏再考虑代币，长期主义。你的决策是？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在GameFi的不确定性下，游戏性优先可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "116-04",
    "category": "A1",
    "title": "链游用户留存低",
    "desc": "大部分用户为赚而来，不赚钱就走，留存极差。对此你会做出什么选择？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在GameFi的不确定性下，链游用户留存低可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "117-01",
    "category": "A1",
    "title": "去中心化社交",
    "desc": "数据自主权，抗审查，但用户体验差。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "去中心化社交是SocialFi的典型场景。小额试水可以控制风险，预期回报0.9%。"
  },
  {
    "id": "117-02",
    "category": "A1",
    "title": "创作者经济",
    "desc": "直接粉丝打赏，无平台抽成。此时你会选择怎么做？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在SocialFi的不确定性下，创作者经济可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "117-03",
    "category": "A1",
    "title": "虚假社交",
    "desc": "机器人账号泛滥，真实互动少。你的投资策略是？",
    "baseProfitPct": 1.0,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.0,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在SocialFi的不确定性下，虚假社交可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "117-04",
    "category": "A1",
    "title": "从Web2社交引流",
    "desc": "KOL从Twitter迁移带来大量用户。你将如何应对？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在SocialFi的场景下，从Web2社交引流需要果断决策。重仓参与可能获得3.2%回报，但需承受较高风险。"
  },
  {
    "id": "118-01",
    "category": "A1",
    "title": "去中心化跨链桥",
    "desc": "无需信任第三方，安全性高。这种情况下，你的选择是？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对跨链的情况，去中心化跨链桥考验判断力。适度参与是平衡选择，预期回报2.2%。"
  },
  {
    "id": "118-02",
    "category": "A1",
    "title": "跨链桥被黑历史",
    "desc": "跨链桥是黑客重灾区，历史上损失几十亿。你会如何行动？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在跨链的不确定性下，跨链桥被黑历史可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "118-03",
    "category": "A1",
    "title": "多签跨链桥",
    "desc": "依赖多签，多签成员作恶可盗币。你的决策是？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在跨链的不确定性下，多签跨链桥可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "118-04",
    "category": "A1",
    "title": "原生跨链",
    "desc": "链原生支持跨链，无需第三方桥。对此你会做出什么选择？",
    "baseProfitPct": 2.3,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.4,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.3,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.5,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在跨链的场景下，原生跨链需要果断决策。重仓参与可能获得3.4%回报，但需承受较高风险。"
  },
  {
    "id": "119-01",
    "category": "A1",
    "title": "碳信用上链",
    "desc": "将碳信用额度代币化，促进碳交易。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在ReFi的不确定性下，碳信用上链可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "119-02",
    "category": "A1",
    "title": "绿色能源证明",
    "desc": "证明能源来自可再生来源，ESG概念。此时你会选择怎么做？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在ReFi的不确定性下，绿色能源证明可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "119-03",
    "category": "A1",
    "title": "ReFi概念超前",
    "desc": "市场尚未成熟，需求不足。你的投资策略是？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在ReFi的场景下，ReFi概念超前需要果断决策。重仓参与可能获得2.1%回报，但需承受较高风险。"
  },
  {
    "id": "119-04",
    "category": "A1",
    "title": "与碳交易所合作",
    "desc": "与传统碳交易所合作，获得真实需求。你将如何应对？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "与碳交易所合作是ReFi的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "120-01",
    "category": "A1",
    "title": "BTC L2",
    "desc": "在比特币上构建Layer2，扩展BTC应用。这种情况下，你的选择是？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "BTC L2是BTC生态的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "120-02",
    "category": "A1",
    "title": "Ordinals NFT",
    "desc": "比特币NFT，利用铭文技术。你会如何行动？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在BTC生态的不确定性下，Ordinals NFT可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "120-03",
    "category": "A1",
    "title": "BTC质押",
    "desc": "质押BTC获得收益，但安全性存疑。你的决策是？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在BTC生态的不确定性下，BTC质押可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "120-04",
    "category": "A1",
    "title": "BTC生态爆发",
    "desc": "多个BTC生态项目获得大额融资，热度高。对此你会做出什么选择？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对BTC生态的情况，BTC生态爆发考验判断力。适度参与是平衡选择，预期回报2.1%。"
  },
  {
    "id": "121-01",
    "category": "B3",
    "title": "All in单一赛道",
    "desc": "全部资金投入DeFi，集中风险集中收益。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.5,
    "baseLossPct": 1.2,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.8,
        "lossPct": 2.0,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.5,
        "lossPct": 1.2,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.2,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.5,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在赛道分散的不确定性下，All in单一赛道可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "121-02",
    "category": "B3",
    "title": "5个赛道均衡配置",
    "desc": "DeFi、GameFi、AI、RWA、基础设施各20%。此时你会选择怎么做？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对赛道分散的情况，5个赛道均衡配置考验判断力。适度参与是平衡选择，预期回报1.9%。"
  },
  {
    "id": "121-03",
    "category": "B3",
    "title": "热点赛道重仓",
    "desc": "AI赛道配置50%，其他分散，追逐热点。你的投资策略是？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "热点赛道重仓是赛道分散的典型场景。小额试水可以控制风险，预期回报1.0%。"
  },
  {
    "id": "121-04",
    "category": "B3",
    "title": "忽视赛道轮动",
    "desc": "平均分配但未考虑市场热点，收益平庸。你将如何应对？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在赛道分散的不确定性下，忽视赛道轮动可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "122-01",
    "category": "B3",
    "title": "全投种子轮",
    "desc": "全部投最早阶段，高风险高回报。这种情况下，你的选择是？",
    "baseProfitPct": 2.8,
    "baseLossPct": 1.4,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 4.2,
        "lossPct": 2.2,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.8,
        "lossPct": 1.4,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.4,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.6,
        "lossPct": 0.3,
        "isCorrect": false
      }
    ],
    "explanation": "在阶段分散的不确定性下，全投种子轮可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "122-02",
    "category": "B3",
    "title": "种子+A轮均衡",
    "desc": "早期和成长阶段均衡配置，平衡风险。你会如何行动？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在阶段分散的场景下，种子+A轮均衡需要果断决策。重仓参与可能获得3.0%回报，但需承受较高风险。"
  },
  {
    "id": "122-03",
    "category": "B3",
    "title": "重仓Pre-IPO",
    "desc": "大部分资金投上市前项目，稳健但回报有限。你的决策是？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在阶段分散的不确定性下，重仓Pre-IPO可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "122-04",
    "category": "B3",
    "title": "不同阶段动态调整",
    "desc": "根据市场情况调整各阶段配置比例。对此你会做出什么选择？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "不同阶段动态调整是阶段分散的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "123-01",
    "category": "B3",
    "title": "All in中国项目",
    "desc": "全部投资华人团队项目，文化和沟通优势。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在地域分散的不确定性下，All in中国项目可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "123-02",
    "category": "B3",
    "title": "全球配置",
    "desc": "美国、中国、欧洲、东南亚项目均衡。此时你会选择怎么做？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对地域分散的情况，全球配置考验判断力。适度参与是平衡选择，预期回报1.9%。"
  },
  {
    "id": "123-03",
    "category": "B3",
    "title": "监管友好地区",
    "desc": "只投新加坡、瑞士等监管友好地区项目。你的投资策略是？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在地域分散的不确定性下，监管友好地区可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "123-04",
    "category": "B3",
    "title": "新兴市场",
    "desc": "投资印度、非洲等新兴市场早期项目。你将如何应对？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对地域分散的情况，新兴市场考验判断力。适度参与是平衡选择，预期回报2.2%。"
  },
  {
    "id": "124-01",
    "category": "B3",
    "title": "10个项目各10%",
    "desc": "平均分配，每个项目研究不深。这种情况下，你的选择是？",
    "baseProfitPct": 1.7,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.5,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.7,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在规模分散的场景下，10个项目各10%需要果断决策。重仓参与可能获得2.5%回报，但需承受较高风险。"
  },
  {
    "id": "124-02",
    "category": "B3",
    "title": "核心+卫星",
    "desc": "60%资金投3个核心项目，40%投10个卫星项目。你会如何行动？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在规模分散的不确定性下，核心+卫星可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "124-03",
    "category": "B3",
    "title": "全押一个项目",
    "desc": "All in一个最看好的项目，高风险高回报。你的决策是？",
    "baseProfitPct": 3.0,
    "baseLossPct": 1.5,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 4.5,
        "lossPct": 2.4,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 3.0,
        "lossPct": 1.5,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.5,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.6,
        "lossPct": 0.3,
        "isCorrect": false
      }
    ],
    "explanation": "在规模分散的场景下，全押一个项目需要果断决策。重仓参与可能获得4.5%回报，但需承受较高风险。"
  },
  {
    "id": "124-04",
    "category": "B3",
    "title": "过度分散",
    "desc": "投了50个项目，每个研究不透，收益平庸。对此你会做出什么选择？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在规模分散的场景下，过度分散需要果断决策。重仓参与可能获得2.1%回报，但需承受较高风险。"
  },
  {
    "id": "125-01",
    "category": "B3",
    "title": "一次性All in",
    "desc": "看好就一次性投入全部资金，不择时。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在时间分散的不确定性下，一次性All in可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "125-02",
    "category": "B3",
    "title": "分12个月定投",
    "desc": "每月投入固定金额，平滑成本。此时你会选择怎么做？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对时间分散的情况，分12个月定投考验判断力。适度参与是平衡选择，预期回报2.0%。"
  },
  {
    "id": "125-03",
    "category": "B3",
    "title": "市场低点梭哈",
    "desc": "等待市场大跌时一次性投入，择时难度大。你的投资策略是？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在时间分散的不确定性下，市场低点梭哈可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "125-04",
    "category": "B3",
    "title": "FOMO追高",
    "desc": "市场高点追涨买入，成本高昂。你将如何应对？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对时间分散的情况，FOMO追高考验判断力。适度参与是平衡选择，预期回报1.2%。"
  },
  {
    "id": "126-01",
    "category": "B3",
    "title": "全部投Token",
    "desc": "只买项目Token，不碰股权或其他资产。这种情况下，你的选择是？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在资产分散的场景下，全部投Token需要果断决策。重仓参与可能获得3.0%回报，但需承受较高风险。"
  },
  {
    "id": "126-02",
    "category": "B3",
    "title": "Token+股权",
    "desc": "既有项目Token也有公司股权，双重 exposure你会如何行动？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "Token+股权是资产分散的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "126-03",
    "category": "B3",
    "title": "包含SAFT",
    "desc": "投资SAFT，未来获得Token权利。你的决策是？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在资产分散的不确定性下，包含SAFT可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "126-04",
    "category": "B3",
    "title": "期权策略",
    "desc": "购买Token看涨期权，杠杆 exposure。对此你会做出什么选择？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "期权策略是资产分散的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "127-01",
    "category": "B3",
    "title": "纯价值投资",
    "desc": "只投基本面好的项目，不看市场情绪。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对策略分散的情况，纯价值投资考验判断力。适度参与是平衡选择，预期回报1.9%。"
  },
  {
    "id": "127-02",
    "category": "B3",
    "title": "纯趋势投资",
    "desc": "追涨杀跌，跟随市场热点。此时你会选择怎么做？",
    "baseProfitPct": 1.7,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.5,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.7,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在策略分散的不确定性下，纯趋势投资可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "127-03",
    "category": "B3",
    "title": "价值+趋势结合",
    "desc": "基本面好的项目等待趋势确认后进入。你的投资策略是？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "价值+趋势结合是策略分散的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "127-04",
    "category": "B3",
    "title": "套利策略",
    "desc": "不参与方向性投资，只做套利。你将如何应对？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "套利策略是策略分散的典型场景。小额试水可以控制风险，预期回报0.8%。"
  },
  {
    "id": "128-01",
    "category": "B3",
    "title": "高度相关组合",
    "desc": "投资的5个项目都是DeFi，同涨同跌。这种情况下，你的选择是？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在相关性的不确定性下，高度相关组合可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "128-02",
    "category": "B3",
    "title": "低相关组合",
    "desc": "DeFi、GameFi、基础设施组合，相关性低。你会如何行动？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "低相关组合是相关性的典型场景。小额试水可以控制风险，预期回报1.0%。"
  },
  {
    "id": "128-03",
    "category": "B3",
    "title": "负相关对冲",
    "desc": "同时持有看涨和看跌 exposure，对冲风险。你的决策是？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在相关性的不确定性下，负相关对冲可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "128-04",
    "category": "B3",
    "title": "未知相关性",
    "desc": "未分析项目间相关性，实际高度相关。对此你会做出什么选择？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "未知相关性是相关性的典型场景。小额试水可以控制风险，预期回报0.7%。"
  },
  {
    "id": "129-01",
    "category": "B3",
    "title": "全部锁仓3年",
    "desc": "所有投资都有3年锁仓，流动性为零。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.7,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.5,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.7,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在流动性分散的场景下，全部锁仓3年需要果断决策。重仓参与可能获得2.5%回报，但需承受较高风险。"
  },
  {
    "id": "129-02",
    "category": "B3",
    "title": "锁仓+流动性混合",
    "desc": "70%锁仓长期项目，30%流动性Token。此时你会选择怎么做？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在流动性分散的不确定性下，锁仓+流动性混合可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "129-03",
    "category": "B3",
    "title": "全部流动性",
    "desc": "只投可立即交易的Token，随时可以退出。你的投资策略是？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在流动性分散的场景下，全部流动性需要果断决策。重仓参与可能获得2.8%回报，但需承受较高风险。"
  },
  {
    "id": "129-04",
    "category": "B3",
    "title": "错开锁仓期",
    "desc": "不同项目锁仓期错开，每年都有流动性释放。你将如何应对？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在流动性分散的场景下，错开锁仓期需要果断决策。重仓参与可能获得3.2%回报，但需承受较高风险。"
  },
  {
    "id": "130-01",
    "category": "B3",
    "title": "满仓操作",
    "desc": "所有资金全部投入，不留现金。这种情况下，你的选择是？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "满仓操作是仓位控制的典型场景。小额试水可以控制风险，预期回报0.9%。"
  },
  {
    "id": "130-02",
    "category": "B3",
    "title": "80%仓位",
    "desc": "保持20%现金，等待更好的机会。你会如何行动？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对仓位控制的情况，80%仓位考验判断力。适度参与是平衡选择，预期回报2.0%。"
  },
  {
    "id": "130-03",
    "category": "B3",
    "title": "50%仓位",
    "desc": "半仓操作，进可攻退可守。你的决策是？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在仓位控制的场景下，50%仓位需要果断决策。重仓参与可能获得2.8%回报，但需承受较高风险。"
  },
  {
    "id": "130-04",
    "category": "B3",
    "title": "空仓观望",
    "desc": "全部现金，等待市场见底。对此你会做出什么选择？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在仓位控制的场景下，空仓观望需要果断决策。重仓参与可能获得2.2%回报，但需承受较高风险。"
  },
  {
    "id": "131-01",
    "category": "A3",
    "title": "标准SAFT",
    "desc": "使用行业标准SAFT模板，条款清晰。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在SAFT协议的场景下，标准SAFT需要果断决策。重仓参与可能获得3.0%回报，但需承受较高风险。"
  },
  {
    "id": "131-02",
    "category": "A3",
    "title": "自定义SAFT",
    "desc": "项目方自定义条款，对投资者限制更多。此时你会选择怎么做？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对SAFT协议的情况，自定义SAFT考验判断力。适度参与是平衡选择，预期回报1.5%。"
  },
  {
    "id": "131-03",
    "category": "A3",
    "title": "SAFT+Token双轨",
    "desc": "既有SAFT未来获Token，又有一部分即时Token。你的投资策略是？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对SAFT协议的情况，SAFT+Token双轨考验判断力。适度参与是平衡选择，预期回报1.9%。"
  },
  {
    "id": "131-04",
    "category": "A3",
    "title": "无SAFT口头约定",
    "desc": "只有口头承诺，无法律文件，风险极高。你将如何应对？",
    "baseProfitPct": 0.6,
    "baseLossPct": 0.3,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 0.6,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.1,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在SAFT协议的场景下，无SAFT口头约定需要果断决策。重仓参与可能获得0.9%回报，但需承受较高风险。"
  },
  {
    "id": "132-01",
    "category": "A3",
    "title": "纽约州法律",
    "desc": "法律体系成熟，但诉讼成本高。这种情况下，你的选择是？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对管辖权的情况，纽约州法律考验判断力。适度参与是平衡选择，预期回报1.9%。"
  },
  {
    "id": "132-02",
    "category": "A3",
    "title": "开曼群岛",
    "desc": "离岸架构，法律环境对加密货币友好。你会如何行动？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对管辖权的情况，开曼群岛考验判断力。适度参与是平衡选择，预期回报2.0%。"
  },
  {
    "id": "132-03",
    "category": "A3",
    "title": "新加坡法律",
    "desc": "亚洲友好 jurisdiction，监管明确。你的决策是？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对管辖权的情况，新加坡法律考验判断力。适度参与是平衡选择，预期回报2.1%。"
  },
  {
    "id": "132-04",
    "category": "A3",
    "title": "不明管辖权",
    "desc": "协议未明确适用法律，纠纷解决困难。对此你会做出什么选择？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在管辖权的不确定性下，不明管辖权可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "133-01",
    "category": "A3",
    "title": "严格KYC",
    "desc": "需要护照、地址证明、资金来源证明。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在KYC/AML的场景下，严格KYC需要果断决策。重仓参与可能获得3.0%回报，但需承受较高风险。"
  },
  {
    "id": "133-02",
    "category": "A3",
    "title": "仅基础KYC",
    "desc": "只需身份证和自拍，门槛低。此时你会选择怎么做？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对KYC/AML的情况，仅基础KYC考验判断力。适度参与是平衡选择，预期回报1.8%。"
  },
  {
    "id": "133-03",
    "category": "A3",
    "title": "无KYC",
    "desc": "完全匿名投资，合规风险高。你的投资策略是？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在KYC/AML的不确定性下，无KYC可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "133-04",
    "category": "A3",
    "title": "KYC信息泄露",
    "desc": "项目方KYC数据库被黑，投资者信息泄露。你将如何应对？",
    "baseProfitPct": 0.9,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "KYC信息泄露是KYC/AML的典型场景。小额试水可以控制风险，预期回报0.5%。"
  },
  {
    "id": "134-01",
    "category": "A3",
    "title": "明确Utility Token",
    "desc": "律师意见书明确为实用型代币，非证券。这种情况下，你的选择是？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "明确Utility Token是代币属性的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "134-02",
    "category": "A3",
    "title": "证券属性模糊",
    "desc": "可能符合Howey测试，有证券风险。你会如何行动？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对代币属性的情况，证券属性模糊考验判断力。适度参与是平衡选择，预期回报1.4%。"
  },
  {
    "id": "134-03",
    "category": "A3",
    "title": "部分功能受限",
    "desc": "某些 jurisdiction 用户无法使用全部功能。你的决策是？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在代币属性的场景下，部分功能受限需要果断决策。重仓参与可能获得2.4%回报，但需承受较高风险。"
  },
  {
    "id": "134-04",
    "category": "A3",
    "title": "收到SEC Wells Notice",
    "desc": "SEC发出警告，可能面临诉讼。对此你会做出什么选择？",
    "baseProfitPct": 0.7,
    "baseLossPct": 0.3,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 0.7,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.1,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对代币属性的情况，收到SEC Wells Notice考验判断力。适度参与是平衡选择，预期回报0.7%。"
  },
  {
    "id": "135-01",
    "category": "A3",
    "title": "仅限合格投资者",
    "desc": "需要净资产100万U以上，门槛高。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "仅限合格投资者是投资者资格的典型场景。小额试水可以控制风险，预期回报1.0%。"
  },
  {
    "id": "135-02",
    "category": "A3",
    "title": "向散户开放",
    "desc": "无门槛限制，任何人可投资，监管风险。此时你会选择怎么做？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在投资者资格的场景下，向散户开放需要果断决策。重仓参与可能获得2.4%回报，但需承受较高风险。"
  },
  {
    "id": "135-03",
    "category": "A3",
    "title": "地域限制",
    "desc": "美国、中国等部分地区用户无法参与。你的投资策略是？",
    "baseProfitPct": 1.7,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.5,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.7,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在投资者资格的场景下，地域限制需要果断决策。重仓参与可能获得2.5%回报，但需承受较高风险。"
  },
  {
    "id": "135-04",
    "category": "A3",
    "title": "投资者测试",
    "desc": "需要通过投资知识测试才能参与。你将如何应对？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "投资者测试是投资者资格的典型场景。小额试水可以控制风险，预期回报0.9%。"
  },
  {
    "id": "136-01",
    "category": "A3",
    "title": "仲裁条款",
    "desc": "约定仲裁解决争议，效率高但费用高。这种情况下，你的选择是？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在争议解决的不确定性下，仲裁条款可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "136-02",
    "category": "A3",
    "title": "法院诉讼",
    "desc": "约定特定法院管辖，程序复杂。你会如何行动？",
    "baseProfitPct": 1.7,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.5,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.7,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在争议解决的不确定性下，法院诉讼可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "136-03",
    "category": "A3",
    "title": "无争议解决条款",
    "desc": "协议未约定争议解决方式，纠纷难处理。你的决策是？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对争议解决的情况，无争议解决条款考验判断力。适度参与是平衡选择，预期回报1.3%。"
  },
  {
    "id": "136-04",
    "category": "A3",
    "title": "调解优先",
    "desc": "先调解后仲裁，降低对抗性。对此你会做出什么选择？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在争议解决的场景下，调解优先需要果断决策。重仓参与可能获得3.0%回报，但需承受较高风险。"
  },
  {
    "id": "137-01",
    "category": "A3",
    "title": "核心专利已申请",
    "desc": "技术有专利保护，竞争壁垒。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对知识产权的情况，核心专利已申请考验判断力。适度参与是平衡选择，预期回报2.1%。"
  },
  {
    "id": "137-02",
    "category": "A3",
    "title": "开源无专利",
    "desc": "代码开源，任何人可复制，无技术壁垒。此时你会选择怎么做？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在知识产权的场景下，开源无专利需要果断决策。重仓参与可能获得2.4%回报，但需承受较高风险。"
  },
  {
    "id": "137-03",
    "category": "A3",
    "title": "专利侵权风险",
    "desc": "可能侵犯他人专利，面临诉讼。你的投资策略是？",
    "baseProfitPct": 1.0,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.0,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "专利侵权风险是知识产权的典型场景。小额试水可以控制风险，预期回报0.5%。"
  },
  {
    "id": "137-04",
    "category": "A3",
    "title": "知识产权归属不清",
    "desc": "项目方与外包团队知识产权归属有争议。你将如何应对？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在知识产权的场景下，知识产权归属不清需要果断决策。重仓参与可能获得1.8%回报，但需承受较高风险。"
  },
  {
    "id": "138-01",
    "category": "A3",
    "title": "明确释放条件",
    "desc": "主网上线、上所等条件明确写入协议。这种情况下，你的选择是？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在释放条件的场景下，明确释放条件需要果断决策。重仓参与可能获得3.0%回报，但需承受较高风险。"
  },
  {
    "id": "138-02",
    "category": "A3",
    "title": "条件模糊",
    "desc": "'项目成功'等模糊条件，解释权在项目方。你会如何行动？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "条件模糊是释放条件的典型场景。小额试水可以控制风险，预期回报0.7%。"
  },
  {
    "id": "138-03",
    "category": "A3",
    "title": "无条件释放",
    "desc": "时间到即释放，不附加其他条件。你的决策是？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在释放条件的不确定性下，无条件释放可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "138-04",
    "category": "A3",
    "title": "多条件触发",
    "desc": "需要同时满足多个条件才能释放，难度高。对此你会做出什么选择？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "多条件触发是释放条件的典型场景。小额试水可以控制风险，预期回报0.8%。"
  },
  {
    "id": "139-01",
    "category": "A3",
    "title": "有MFN保护",
    "desc": "后入场者条款更优时自动获得同等条款。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在MFN条款的场景下，有MFN保护需要果断决策。重仓参与可能获得3.2%回报，但需承受较高风险。"
  },
  {
    "id": "139-02",
    "category": "A3",
    "title": "MFN有限制",
    "desc": "仅部分条款有MFN保护，不完全。此时你会选择怎么做？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "MFN有限制是MFN条款的典型场景。小额试水可以控制风险，预期回报0.9%。"
  },
  {
    "id": "139-03",
    "category": "A3",
    "title": "无MFN保护",
    "desc": "后入场者可能获得更好条款，无保护。你的投资策略是？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在MFN条款的场景下，无MFN保护需要果断决策。重仓参与可能获得2.2%回报，但需承受较高风险。"
  },
  {
    "id": "139-04",
    "category": "A3",
    "title": "MFN被触发",
    "desc": "新投资者获得更好条款，你自动获得同等优惠。你将如何应对？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在MFN条款的不确定性下，MFN被触发可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "140-01",
    "category": "A3",
    "title": "顶级律所背书",
    "desc": "协议经顶级律所审核，合规性高。这种情况下，你的选择是？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在律师建议的不确定性下，顶级律所背书可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "140-02",
    "category": "A3",
    "title": "无律师审核",
    "desc": "协议未经专业律师审核，风险未知。你会如何行动？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在律师建议的场景下，无律师审核需要果断决策。重仓参与可能获得2.0%回报，但需承受较高风险。"
  },
  {
    "id": "140-03",
    "category": "A3",
    "title": "律师提出重大风险",
    "desc": "律师发现协议中重大法律风险，建议修改。你的决策是？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在律师建议的不确定性下，律师提出重大风险可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "140-04",
    "category": "A3",
    "title": "律所声誉问题",
    "desc": "审核律所曾因疏忽被起诉，专业度存疑。对此你会做出什么选择？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "律所声誉问题是律师建议的典型场景。小额试水可以控制风险，预期回报0.8%。"
  },
  {
    "id": "141-01",
    "category": "D2",
    "title": "限时24小时",
    "desc": "额度有限，24小时内必须决定，制造紧迫感。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在FOMO控制的不确定性下，限时24小时可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "141-02",
    "category": "D2",
    "title": "冷静期设计",
    "desc": "投资后有7天冷静期可反悔退款，降低冲动。此时你会选择怎么做？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对FOMO控制的情况，冷静期设计考验判断力。适度参与是平衡选择，预期回报2.0%。"
  },
  {
    "id": "141-03",
    "category": "D2",
    "title": "排队机制",
    "desc": "超额认购时按排队顺序，不制造FOMO。你的投资策略是？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在FOMO控制的不确定性下，排队机制可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "141-04",
    "category": "D2",
    "title": "饥渴营销",
    "desc": "故意限量制造稀缺感，实际额度充足。你将如何应对？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对FOMO控制的情况，饥渴营销考验判断力。适度参与是平衡选择，预期回报1.2%。"
  },
  {
    "id": "142-01",
    "category": "D2",
    "title": "链上数据验证",
    "desc": "TVL、用户数等数据链上可查，无法造假。这种情况下，你的选择是？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "链上数据验证是热度验证的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "142-02",
    "category": "D2",
    "title": "第三方数据平台",
    "desc": "DeFiLlama等独立平台验证数据，可信度高。你会如何行动？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在热度验证的不确定性下，第三方数据平台可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "142-03",
    "category": "D2",
    "title": "仅项目方提供数据",
    "desc": "无法独立验证，可能造假。你的决策是？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在热度验证的不确定性下，仅项目方提供数据可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "142-04",
    "category": "D2",
    "title": "数据矛盾",
    "desc": "项目方数据和第三方数据不一致，谁在撒谎？",
    "baseProfitPct": 1.1,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.7,
        "lossPct": 0.9,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在热度验证的不确定性下，数据矛盾可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "143-01",
    "category": "D2",
    "title": "付费推广未声明",
    "desc": "KOL收钱推广但不声明，误导投资者。面对这种情况，你该如何决策？",
    "baseProfitPct": 0.9,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "付费推广未声明是KOL甄别的典型场景。小额试水可以控制风险，预期回报0.5%。"
  },
  {
    "id": "143-02",
    "category": "D2",
    "title": "长期跟踪的KOL推荐",
    "desc": "关注多年的KOL推荐，历史准确率高。此时你会选择怎么做？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "长期跟踪的KOL推荐是KOL甄别的典型场景。小额试水可以控制风险，预期回报1.0%。"
  },
  {
    "id": "143-03",
    "category": "D2",
    "title": "KOL集体喊单",
    "desc": "多个KOL同时推荐，可能是付费营销。你的投资策略是？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对KOL甄别的情况，KOL集体喊单考验判断力。适度参与是平衡选择，预期回报1.3%。"
  },
  {
    "id": "143-04",
    "category": "D2",
    "title": "KOL突然转向",
    "desc": "之前不看好的KOL突然大力推荐，可能收钱。你将如何应对？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在KOL甄别的场景下，KOL突然转向需要果断决策。重仓参与可能获得1.8%回报，但需承受较高风险。"
  },
  {
    "id": "144-01",
    "category": "D2",
    "title": "市场极度贪婪",
    "desc": "FGI指数90+，人人都在谈论加密货币，顶部信号。这种情况下，你的选择是？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "市场极度贪婪是情绪极端的典型场景。小额试水可以控制风险，预期回报0.6%。"
  },
  {
    "id": "144-02",
    "category": "D2",
    "title": "市场极度恐惧",
    "desc": "FGI指数10以下，无人敢买，可能是底部。你会如何行动？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在情绪极端的不确定性下，市场极度恐惧可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "144-03",
    "category": "D2",
    "title": "项目社区狂热",
    "desc": "社区成员盲目乐观，不接受任何批评。你的决策是？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对情绪极端的情况，项目社区狂热考验判断力。适度参与是平衡选择，预期回报1.3%。"
  },
  {
    "id": "144-04",
    "category": "D2",
    "title": "项目社区绝望",
    "desc": "价格暴跌后社区一片死寂，holders绝望。对此你会做出什么选择？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在情绪极端的不确定性下，项目社区绝望可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "145-01",
    "category": "D2",
    "title": "同类项目大量涌现",
    "desc": "AI赛道突然涌现50个新项目，鱼龙混杂。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在项目扎堆的不确定性下，同类项目大量涌现可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "145-02",
    "category": "D2",
    "title": "资本集中投向某赛道",
    "desc": "所有VC都在投RWA，估值被推高。此时你会选择怎么做？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "资本集中投向某赛道是项目扎堆的典型场景。小额试水可以控制风险，预期回报0.8%。"
  },
  {
    "id": "145-03",
    "category": "D2",
    "title": "龙头项目吸血",
    "desc": "龙头项目发币，同类小项目资金被抽走。你的投资策略是？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在项目扎堆的场景下，龙头项目吸血需要果断决策。重仓参与可能获得1.8%回报，但需承受较高风险。"
  },
  {
    "id": "145-04",
    "category": "D2",
    "title": "赛道重新洗牌",
    "desc": "大量项目倒闭，存活者市场份额大增。你将如何应对？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在项目扎堆的不确定性下，赛道重新洗牌可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "146-01",
    "category": "D2",
    "title": "营销过度产品跟不上",
    "desc": "热度很高但实际产品简陋，泡沫明显。这种情况下，你的选择是？",
    "baseProfitPct": 1.1,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 1.7,
        "lossPct": 0.9,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "营销过度产品跟不上是营销脱节的典型场景。小额试水可以控制风险，预期回报0.6%。"
  },
  {
    "id": "146-02",
    "category": "D2",
    "title": "产品好但营销差",
    "desc": "技术强但无人知晓，价值未被发现。你会如何行动？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对营销脱节的情况，产品好但营销差考验判断力。适度参与是平衡选择，预期回报1.8%。"
  },
  {
    "id": "146-03",
    "category": "D2",
    "title": "营销产品同步",
    "desc": "热度与实际进展匹配，健康发展。你的决策是？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在营销脱节的不确定性下，营销产品同步可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "146-04",
    "category": "D2",
    "title": "突然停止营销",
    "desc": "之前营销频繁突然停止，可能是资金问题。对此你会做出什么选择？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对营销脱节的情况，突然停止营销考验判断力。适度参与是平衡选择，预期回报1.3%。"
  },
  {
    "id": "147-01",
    "category": "D2",
    "title": "名人站台",
    "desc": "某名人推特支持，价格暴涨，但名人随后删除推文。面对这种情况，你该如何决策？",
    "baseProfitPct": 0.9,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "名人站台是名人陷阱的典型场景。小额试水可以控制风险，预期回报0.5%。"
  },
  {
    "id": "147-02",
    "category": "D2",
    "title": "名人深度绑定",
    "desc": "名人是项目联合创始人，长期利益绑定。此时你会选择怎么做？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "名人深度绑定是名人陷阱的典型场景。小额试水可以控制风险，预期回报0.9%。"
  },
  {
    "id": "147-03",
    "category": "D2",
    "title": "名人被起诉",
    "desc": "站台名人因推广加密货币被SEC起诉，波及项目。你的投资策略是？",
    "baseProfitPct": 0.7,
    "baseLossPct": 0.3,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 0.7,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.1,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "名人被起诉是名人陷阱的典型场景。小额试水可以控制风险，预期回报0.3%。"
  },
  {
    "id": "147-04",
    "category": "D2",
    "title": "名人背书质量高",
    "desc": "Vitalik、Elon Musk级别的背书，影响力大。你将如何应对？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "名人背书质量高是名人陷阱的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "148-01",
    "category": "D2",
    "title": "AI叙事退潮",
    "desc": "AI概念热度下降，资金流出，估值回调。这种情况下，你的选择是？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "AI叙事退潮是叙事轮动的典型场景。小额试水可以控制风险，预期回报0.7%。"
  },
  {
    "id": "148-02",
    "category": "D2",
    "title": "RWA叙事兴起",
    "desc": "传统资产上链概念升温，新叙事机会。你会如何行动？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在叙事轮动的场景下，RWA叙事兴起需要果断决策。重仓参与可能获得3.2%回报，但需承受较高风险。"
  },
  {
    "id": "148-03",
    "category": "D2",
    "title": "叙事快速切换",
    "desc": "上个月GameFi火，这个月AI火，难以跟随。你的决策是？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对叙事轮动的情况，叙事快速切换考验判断力。适度参与是平衡选择，预期回报1.5%。"
  },
  {
    "id": "148-04",
    "category": "D2",
    "title": "坚守过时叙事",
    "desc": "坚持GameFi而忽视新叙事，资金持续流出。对此你会做出什么选择？",
    "baseProfitPct": 1.0,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.0,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在叙事轮动的场景下，坚守过时叙事需要果断决策。重仓参与可能获得1.5%回报，但需承受较高风险。"
  },
  {
    "id": "149-01",
    "category": "D2",
    "title": "价格跌破发行价90%",
    "desc": "早期投资者都亏损，社区一片哀嚎。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对底部绝望的情况，价格跌破发行价90%考验判断力。适度参与是平衡选择，预期回报1.8%。"
  },
  {
    "id": "149-02",
    "category": "D2",
    "title": "团队解散",
    "desc": "价格暴跌后团队解散，项目死亡。此时你会选择怎么做？",
    "baseProfitPct": 0.5,
    "baseLossPct": 0.2,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 0.5,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.1,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在底部绝望的不确定性下，团队解散可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "149-03",
    "category": "D2",
    "title": "底部放量",
    "desc": "价格低位但交易量放大，可能是机构抄底。你的投资策略是？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在底部绝望的不确定性下，底部放量可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "149-04",
    "category": "D2",
    "title": "无人问津",
    "desc": "价格低但无人关注，流动性枯竭。你将如何应对？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对底部绝望的情况，无人问津考验判断力。适度参与是平衡选择，预期回报1.2%。"
  },
  {
    "id": "150-01",
    "category": "B3",
    "title": "定期再平衡",
    "desc": "每季度调整组合，卖出涨幅大的买入跌幅大的。这种情况下，你的选择是？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在再平衡的不确定性下，定期再平衡可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "150-02",
    "category": "B3",
    "title": "让赢家奔跑",
    "desc": "不涨不卖，集中持有表现最好的项目。你会如何行动？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在再平衡的不确定性下，让赢家奔跑可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "150-03",
    "category": "B3",
    "title": "从不调整",
    "desc": "买入后不管，组合严重偏离初始配置。你的决策是？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在再平衡的不确定性下，从不调整可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "150-04",
    "category": "B3",
    "title": "情绪化调整",
    "desc": "恐慌时卖出，追涨时买入，高买低卖。对此你会做出什么选择？",
    "baseProfitPct": 0.8,
    "baseLossPct": 0.4,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在再平衡的场景下，情绪化调整需要果断决策。重仓参与可能获得1.2%回报，但需承受较高风险。"
  },
  {
    "id": "151-01",
    "category": "A1",
    "title": "代码重构期",
    "desc": "技术团队决定暂停功能开发，用3个月重构底层架构，解决历史遗留问题。短期无新功能发布，市场热度可能下降。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.7,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.5,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.7,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在技术债的场景下，代码重构期需要果断决策。重仓参与可能获得2.5%回报，但需承受较高风险。"
  },
  {
    "id": "151-02",
    "category": "A1",
    "title": "渐进式重构",
    "desc": "边开发新功能边还技术债，不影响进度但可能埋下隐患。此时你会选择怎么做？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "渐进式重构是技术债的典型场景。小额试水可以控制风险，预期回报0.9%。"
  },
  {
    "id": "151-03",
    "category": "A1",
    "title": "无视技术债",
    "desc": "团队只追求快速上线，代码质量堪忧，随时可能出bug。你的投资策略是？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对技术债的情况，无视技术债考验判断力。适度参与是平衡选择，预期回报1.2%。"
  },
  {
    "id": "151-04",
    "category": "A1",
    "title": "引入CTO专抓技术债",
    "desc": "新任CTO的首要任务是解决技术债务，长期利好。你将如何应对？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在技术债的不确定性下，引入CTO专抓技术债可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "152-01",
    "category": "C1",
    "title": "多签+硬件钱包",
    "desc": "国库使用Gnosis Safe多签，私钥分散在多个硬件钱包，由不同人保管。这种情况下，你的选择是？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对密钥管理的情况，多签+硬件钱包考验判断力。适度参与是平衡选择，预期回报2.2%。"
  },
  {
    "id": "152-02",
    "category": "C1",
    "title": "单签私钥",
    "desc": "国库由单个私钥控制，一旦泄露全部资金被盗。你会如何行动？",
    "baseProfitPct": 0.8,
    "baseLossPct": 0.4,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "单签私钥是密钥管理的典型场景。小额试水可以控制风险，预期回报0.4%。"
  },
  {
    "id": "152-03",
    "category": "C1",
    "title": "私钥丢失",
    "desc": "核心成员意外去世，部分私钥无法找回，资金永久锁定。你的决策是？",
    "baseProfitPct": 0.6,
    "baseLossPct": 0.3,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 0.6,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.1,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "私钥丢失是密钥管理的典型场景。小额试水可以控制风险，预期回报0.3%。"
  },
  {
    "id": "152-04",
    "category": "C1",
    "title": "社交恢复",
    "desc": "使用智能合约钱包，支持社交恢复，私钥丢失可找回。对此你会做出什么选择？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在密钥管理的不确定性下，社交恢复可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "153-01",
    "category": "A3",
    "title": "团队仅15%",
    "desc": "团队分配比例低，社区分配高，去中心化程度高。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "团队仅15%是代币分配的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "153-02",
    "category": "A3",
    "title": "团队40%",
    "desc": "团队占据大量份额，社区质疑中心化。此时你会选择怎么做？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在代币分配的不确定性下，团队40%可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "153-03",
    "category": "A3",
    "title": "投资者占比过高",
    "desc": "私募投资者占60%，社区只占20%，抛压担忧。你的投资策略是？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "投资者占比过高是代币分配的典型场景。小额试水可以控制风险，预期回报0.6%。"
  },
  {
    "id": "153-04",
    "category": "A3",
    "title": "公平发射",
    "desc": "无预挖、无私募、无团队预留，全部通过挖矿分发。你将如何应对？",
    "baseProfitPct": 2.3,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.4,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.3,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.5,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "公平发射是代币分配的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "154-01",
    "category": "E1",
    "title": "闪电贷攻击治理",
    "desc": "攻击者通过闪电贷获取大量Token，通过恶意提案转移国库资金。这种情况下，你的选择是？",
    "baseProfitPct": 0.5,
    "baseLossPct": 0.2,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 0.5,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.1,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在DAO治理攻击的不确定性下，闪电贷攻击治理可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "154-02",
    "category": "E1",
    "title": "治理时间锁",
    "desc": "提案通过后需等待3天执行，期间可取消，防止闪电贷攻击。你会如何行动？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "治理时间锁是DAO治理攻击的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "154-03",
    "category": "E1",
    "title": "投票权委托",
    "desc": "大多数用户将投票权委托给少数代表，实际中心化。你的决策是？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "投票权委托是DAO治理攻击的典型场景。小额试水可以控制风险，预期回报0.8%。"
  },
  {
    "id": "154-04",
    "category": "E1",
    "title": "治理参与度极低",
    "desc": "重大提案仅2%Token参与投票，决策缺乏代表性。对此你会做出什么选择？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "治理参与度极低是DAO治理攻击的典型场景。小额试水可以控制风险，预期回报0.7%。"
  },
  {
    "id": "155-01",
    "category": "D1",
    "title": "上所前团队成员买入",
    "desc": "链上数据显示团队钱包在所上前大量买入，内幕交易嫌疑。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.0,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.0,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对内幕交易的情况，上所前团队成员买入考验判断力。适度参与是平衡选择，预期回报1.0%。"
  },
  {
    "id": "155-02",
    "category": "D1",
    "title": "合作公布前巨鲸异动",
    "desc": "重大合作公布前，某巨鲸大量买入，信息泄露？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在内幕交易的场景下，合作公布前巨鲸异动需要果断决策。重仓参与可能获得1.8%回报，但需承受较高风险。"
  },
  {
    "id": "155-03",
    "category": "D1",
    "title": "团队成员卖出",
    "desc": "CTO在里程碑达成前卖出Token，是否不看好？",
    "baseProfitPct": 1.1,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.7,
        "lossPct": 0.9,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对内幕交易的情况，团队成员卖出考验判断力。适度参与是平衡选择，预期回报1.1%。"
  },
  {
    "id": "155-04",
    "category": "D1",
    "title": "透明交易政策",
    "desc": "团队成员需提前申报交易计划，按规定时间窗口交易。你将如何应对？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "透明交易政策是内幕交易的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "156-01",
    "category": "A2",
    "title": "上所费占募资20%",
    "desc": "某交易所要求高额上币费，严重稀释投资者权益。这种情况下，你的选择是？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在上所费用的场景下，上所费占募资20%需要果断决策。重仓参与可能获得1.8%回报，但需承受较高风险。"
  },
  {
    "id": "156-02",
    "category": "A2",
    "title": "免费上所",
    "desc": "项目质量高，交易所主动邀请免费上所。你会如何行动？",
    "baseProfitPct": 2.3,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.4,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.3,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.5,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对上所费用的情况，免费上所考验判断力。适度参与是平衡选择，预期回报2.3%。"
  },
  {
    "id": "156-03",
    "category": "A2",
    "title": "上所费+做市费",
    "desc": "除了上币费还需支付做市费用，成本高昂。你的决策是？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对上所费用的情况，上所费+做市费考验判断力。适度参与是平衡选择，预期回报1.4%。"
  },
  {
    "id": "156-04",
    "category": "A2",
    "title": "社区众筹上所费",
    "desc": "项目方资金紧张，向社区众筹上币费用。对此你会做出什么选择？",
    "baseProfitPct": 1.0,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.0,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对上所费用的情况，社区众筹上所费考验判断力。适度参与是平衡选择，预期回报1.0%。"
  },
  {
    "id": "157-01",
    "category": "C2",
    "title": "核心岗位6个月未招到",
    "desc": "急需的密码学家岗位半年无人问津，招聘困难。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在招聘难度的不确定性下，核心岗位6个月未招到可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "157-02",
    "category": "C2",
    "title": "裁员潮中大量人才流入",
    "desc": "大厂裁员，市场人才供应充足，招聘顺利。此时你会选择怎么做？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "裁员潮中大量人才流入是招聘难度的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "157-03",
    "category": "C2",
    "title": "高薪挖角",
    "desc": "不得不以2倍薪资从竞品挖人，成本高昂。你的投资策略是？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "高薪挖角是招聘难度的典型场景。小额试水可以控制风险，预期回报0.8%。"
  },
  {
    "id": "157-04",
    "category": "C2",
    "title": "远程办公全球招聘",
    "desc": "不受地域限制，全球范围内招聘优秀人才。你将如何应对？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在招聘难度的场景下，远程办公全球招聘需要果断决策。重仓参与可能获得3.0%回报，但需承受较高风险。"
  },
  {
    "id": "158-01",
    "category": "B1",
    "title": "提供LP遭遇无常损失",
    "desc": "ETH上涨50%，你提供的LP相比持币少赚20%这种情况下，你的选择是？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对无常损失的情况，提供LP遭遇无常损失考验判断力。适度参与是平衡选择，预期回报1.3%。"
  },
  {
    "id": "158-02",
    "category": "B1",
    "title": "稳定币对无常损失小",
    "desc": "提供USDC/USDT LP，价格波动小，无常损失可忽略。你会如何行动？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "稳定币对无常损失小是无常损失的典型场景。小额试水可以控制风险，预期回报0.9%。"
  },
  {
    "id": "158-03",
    "category": "B1",
    "title": "无常损失保护",
    "desc": "协议提供无常损失保护，LP不受价格波动影响。你的决策是？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对无常损失的情况，无常损失保护考验判断力。适度参与是平衡选择，预期回报2.1%。"
  },
  {
    "id": "158-04",
    "category": "B1",
    "title": "单边质押",
    "desc": "无需提供交易对，单边质押无无常损失。对此你会做出什么选择？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "单边质押是无常损失的典型场景。小额试水可以控制风险，预期回报1.0%。"
  },
  {
    "id": "159-01",
    "category": "C3",
    "title": "被知名媒体黑",
    "desc": "Bloomberg发表负面报道，影响广泛，需要危机公关。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对品牌声誉的情况，被知名媒体黑考验判断力。适度参与是平衡选择，预期回报1.2%。"
  },
  {
    "id": "159-02",
    "category": "C3",
    "title": "创始人言论争议",
    "desc": "创始人在Twitter上发表争议言论，引发社区分裂。此时你会选择怎么做？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "创始人言论争议是品牌声誉的典型场景。小额试水可以控制风险，预期回报0.7%。"
  },
  {
    "id": "159-03",
    "category": "C3",
    "title": "获得行业大奖",
    "desc": "获得年度最具创新项目奖，品牌知名度提升。你的投资策略是？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在品牌声誉的场景下，获得行业大奖需要果断决策。重仓参与可能获得3.2%回报，但需承受较高风险。"
  },
  {
    "id": "159-04",
    "category": "C3",
    "title": "社区自发维护声誉",
    "desc": "出现FUD时社区自发组织辟谣，品牌忠诚度高。你将如何应对？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对品牌声誉的情况，社区自发维护声誉考验判断力。适度参与是平衡选择，预期回报2.2%。"
  },
  {
    "id": "160-01",
    "category": "A1",
    "title": "梅特卡夫定律验证",
    "desc": "用户数增长与Token价格高度相关，网络效应明显。这种情况下，你的选择是？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "梅特卡夫定律验证是网络效应的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "160-02",
    "category": "A1",
    "title": "有用户无网络效应",
    "desc": "用户增长但彼此不互动，无法形成网络效应。你会如何行动？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在网络效应的场景下，有用户无网络效应需要果断决策。重仓参与可能获得2.2%回报，但需承受较高风险。"
  },
  {
    "id": "160-03",
    "category": "A1",
    "title": "跨链网络效应",
    "desc": "支持的链越多，用户越多，网络效应呈指数增长。你的决策是？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在网络效应的场景下，跨链网络效应需要果断决策。重仓参与可能获得3.2%回报，但需承受较高风险。"
  },
  {
    "id": "160-04",
    "category": "A1",
    "title": "网络效应被突破",
    "desc": "竞品突破临界规模，用户开始流失，网络效应逆转。对此你会做出什么选择？",
    "baseProfitPct": 1.0,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.0,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "网络效应被突破是网络效应的典型场景。小额试水可以控制风险，预期回报0.5%。"
  },
  {
    "id": "161-01",
    "category": "B2",
    "title": "长期持有省税",
    "desc": "持有超过1年资本利得税减半，激励长期持有。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对税务筹划的情况，长期持有省税考验判断力。适度参与是平衡选择，预期回报2.0%。"
  },
  {
    "id": "161-02",
    "category": "B2",
    "title": "税务友好地区",
    "desc": "在新加坡、迪拜等无资本利得税地区实现收益。此时你会选择怎么做？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在税务筹划的不确定性下，税务友好地区可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "161-03",
    "category": "B2",
    "title": "复杂DeFi交易税务",
    "desc": "频繁的挖矿、质押产生大量应税事件，报税复杂。你的投资策略是？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在税务筹划的场景下，复杂DeFi交易税务需要果断决策。重仓参与可能获得2.2%回报，但需承受较高风险。"
  },
  {
    "id": "161-04",
    "category": "B2",
    "title": "空投即触发税务",
    "desc": "收到空投即需按当时市价缴税，可能空投一文不值但要交税。你将如何应对？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在税务筹划的场景下，空投即触发税务需要果断决策。重仓参与可能获得1.8%回报，但需承受较高风险。"
  },
  {
    "id": "162-01",
    "category": "A3",
    "title": "SEC友好表态",
    "desc": "SEC官员公开称赞项目创新，监管风险降低。这种情况下，你的选择是？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "SEC友好表态是监管态度的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "162-02",
    "category": "A3",
    "title": "CFIUS审查",
    "desc": "外国投资委员会审查项目，可能强制出售股权。你会如何行动？",
    "baseProfitPct": 1.0,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.0,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在监管态度的不确定性下，CFIUS审查可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "162-03",
    "category": "A3",
    "title": "获得监管沙盒资格",
    "desc": "进入监管沙盒，可以在受控环境下创新。你的决策是？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在监管态度的不确定性下，获得监管沙盒资格可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "162-04",
    "category": "A3",
    "title": "监管态度不明",
    "desc": "所处监管灰色地带，随时可能被认定为非法。对此你会做出什么选择？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在监管态度的不确定性下，监管态度不明可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "163-01",
    "category": "C1",
    "title": "Chainlink喂价",
    "desc": "使用行业标准的Chainlink预言机，数据源可靠。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "Chainlink喂价是预言机风险的典型场景。小额试水可以控制风险，预期回报1.0%。"
  },
  {
    "id": "163-02",
    "category": "C1",
    "title": "自研预言机",
    "desc": "项目方自己运行预言机，中心化风险高。此时你会选择怎么做？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对预言机风险的情况，自研预言机考验判断力。适度参与是平衡选择，预期回报1.3%。"
  },
  {
    "id": "163-03",
    "category": "C1",
    "title": "预言机被操纵",
    "desc": "攻击者操纵预言机价格，从协议中盗取资金。你的投资策略是？",
    "baseProfitPct": 0.6,
    "baseLossPct": 0.3,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 0.6,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.1,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在预言机风险的场景下，预言机被操纵需要果断决策。重仓参与可能获得0.9%回报，但需承受较高风险。"
  },
  {
    "id": "163-04",
    "category": "C1",
    "title": "多预言机聚合",
    "desc": "同时使用多个预言机，取中位数，降低单点风险。你将如何应对？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "多预言机聚合是预言机风险的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "164-01",
    "category": "A2",
    "title": "月度解锁1%",
    "desc": "每月解锁量占流通量1%，抛压可控。这种情况下，你的选择是？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在代币解锁潮的不确定性下，月度解锁1%可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "164-02",
    "category": "A2",
    "title": "cliff后大额解锁",
    "desc": "1年悬崖后一次性解锁50%，抛压巨大。你会如何行动？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在代币解锁潮的场景下，cliff后大额解锁需要果断决策。重仓参与可能获得1.8%回报，但需承受较高风险。"
  },
  {
    "id": "164-03",
    "category": "A2",
    "title": "团队解锁与业绩挂钩",
    "desc": "只有达到目标才解锁，减少无效抛压。你的决策是？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在代币解锁潮的场景下，团队解锁与业绩挂钩需要果断决策。重仓参与可能获得3.3%回报，但需承受较高风险。"
  },
  {
    "id": "164-04",
    "category": "A2",
    "title": "解锁即质押",
    "desc": "投资者承诺解锁后继续质押，不立即抛售。对此你会做出什么选择？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在代币解锁潮的不确定性下，解锁即质押可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "165-01",
    "category": "D1",
    "title": "洗盘交易",
    "desc": "项目方用多个地址互相交易，制造虚假成交量。面对这种情况，你该如何决策？",
    "baseProfitPct": 0.8,
    "baseLossPct": 0.4,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在虚假交易的不确定性下，洗盘交易可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "165-02",
    "category": "D1",
    "title": "真实交易量",
    "desc": "链上数据分析显示交易来自真实用户，无刷量。此时你会选择怎么做？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在虚假交易的场景下，真实交易量需要果断决策。重仓参与可能获得3.2%回报，但需承受较高风险。"
  },
  {
    "id": "165-03",
    "category": "D1",
    "title": "做市商交易占比高",
    "desc": "80%交易量来自做市商，真实用户稀少。你的投资策略是？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在虚假交易的场景下，做市商交易占比高需要果断决策。重仓参与可能获得2.0%回报，但需承受较高风险。"
  },
  {
    "id": "165-04",
    "category": "D1",
    "title": "交易挖矿导致刷量",
    "desc": "交易奖励机制被利用，大量无意义交易。你将如何应对？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对虚假交易的情况，交易挖矿导致刷量考验判断力。适度参与是平衡选择，预期回报1.2%。"
  },
  {
    "id": "166-01",
    "category": "E2",
    "title": "赢得ETHGlobal大奖",
    "desc": "在全球最大黑客松获得一等奖，技术实力获认可。这种情况下，你的选择是？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对黑客松的情况，赢得ETHGlobal大奖考验判断力。适度参与是平衡选择，预期回报2.2%。"
  },
  {
    "id": "166-02",
    "category": "E2",
    "title": "连续参加多个黑客松",
    "desc": "不断参赛但无获奖，可能技术不够突出。你会如何行动？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "连续参加多个黑客松是黑客松的典型场景。小额试水可以控制风险，预期回报0.8%。"
  },
  {
    "id": "166-03",
    "category": "E2",
    "title": "主办黑客松",
    "desc": "项目方主办黑客松吸引开发者，生态建设积极。你的决策是？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在黑客松的场景下，主办黑客松需要果断决策。重仓参与可能获得3.2%回报，但需承受较高风险。"
  },
  {
    "id": "166-04",
    "category": "E2",
    "title": "黑客松项目迁移",
    "desc": "其他黑客松项目迁移到该平台，生态吸引力强。对此你会做出什么选择？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对黑客松的情况，黑客松项目迁移考验判断力。适度参与是平衡选择，预期回报2.0%。"
  },
  {
    "id": "167-01",
    "category": "A1",
    "title": "牛市融资",
    "desc": "市场情绪好，估值高，容易融到资金。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在融资环境的场景下，牛市融资需要果断决策。重仓参与可能获得3.3%回报，但需承受较高风险。"
  },
  {
    "id": "167-02",
    "category": "A1",
    "title": "熊市融资",
    "desc": "市场情绪差，估值低，融资困难但可能是机会。此时你会选择怎么做？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在融资环境的不确定性下，熊市融资可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "167-03",
    "category": "A1",
    "title": "VC扎堆",
    "desc": "多个顶级VC争抢投资额度，竞争激烈。你的投资策略是？",
    "baseProfitPct": 2.3,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.4,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.3,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.5,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对融资环境的情况，VC扎堆考验判断力。适度参与是平衡选择，预期回报2.3%。"
  },
  {
    "id": "167-04",
    "category": "A1",
    "title": "融资困难",
    "desc": "接触多家VC均被拒绝，融资前景不明。你将如何应对？",
    "baseProfitPct": 1.0,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.0,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在融资环境的不确定性下，融资困难可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "168-01",
    "category": "B1",
    "title": "2倍杠杆做多",
    "desc": "使用2倍杠杆做多项目Token，收益放大但爆仓风险。这种情况下，你的选择是？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在杠杆风险的不确定性下，2倍杠杆做多可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "168-02",
    "category": "B1",
    "title": "无杠杆现货",
    "desc": "只买现货不使用杠杆，风险可控。你会如何行动？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在杠杆风险的不确定性下，无杠杆现货可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "168-03",
    "category": "B1",
    "title": "5倍以上高杠杆",
    "desc": "使用高杠杆，小幅波动即爆仓。你的决策是？",
    "baseProfitPct": 0.7,
    "baseLossPct": 0.3,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 0.7,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.1,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "5倍以上高杠杆是杠杆风险的典型场景。小额试水可以控制风险，预期回报0.3%。"
  },
  {
    "id": "168-04",
    "category": "B1",
    "title": "杠杆被清算",
    "desc": "价格下跌触发清算，仓位被强平。对此你会做出什么选择？",
    "baseProfitPct": 0.4,
    "baseLossPct": 0.2,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 0.6,
        "lossPct": 0.3,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.1,
        "lossPct": 0.0,
        "isCorrect": false
      }
    ],
    "explanation": "在杠杆风险的不确定性下，杠杆被清算可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "169-01",
    "category": "D2",
    "title": "羊群效应",
    "desc": "看到别人买就跟着买，缺乏独立判断。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "羊群效应是群体心理的典型场景。小额试水可以控制风险，预期回报0.7%。"
  },
  {
    "id": "169-02",
    "category": "D2",
    "title": "逆向投资",
    "desc": "市场恐慌时买入，市场狂热时卖出。此时你会选择怎么做？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在群体心理的场景下，逆向投资需要果断决策。重仓参与可能获得3.3%回报，但需承受较高风险。"
  },
  {
    "id": "169-03",
    "category": "D2",
    "title": "锚定效应",
    "desc": "过分依赖初始价格锚点，忽视基本面变化。你的投资策略是？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在群体心理的场景下，锚定效应需要果断决策。重仓参与可能获得2.1%回报，但需承受较高风险。"
  },
  {
    "id": "169-04",
    "category": "D2",
    "title": "损失厌恶",
    "desc": "亏损时不愿止损，盈利时急于止盈。你将如何应对？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对群体心理的情况，损失厌恶考验判断力。适度参与是平衡选择，预期回报1.2%。"
  },
  {
    "id": "170-01",
    "category": "E2",
    "title": "交易竞赛",
    "desc": "举办交易大赛，吸引短期交易量。这种情况下，你的选择是？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对运营活动的情况，交易竞赛考验判断力。适度参与是平衡选择，预期回报1.6%。"
  },
  {
    "id": "170-02",
    "category": "E2",
    "title": "长期 staking 激励",
    "desc": "长期锁仓获得额外奖励，鼓励持有。你会如何行动？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "长期 staking 激励是运营活动的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "170-03",
    "category": "E2",
    "title": "限时双倍收益",
    "desc": "短期活动刺激资金流入，活动后可能撤资。你的决策是？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在运营活动的场景下，限时双倍收益需要果断决策。重仓参与可能获得2.1%回报，但需承受较高风险。"
  },
  {
    "id": "170-04",
    "category": "E2",
    "title": "无运营活动",
    "desc": "无营销活动，纯靠产品吸引用户。对此你会做出什么选择？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对运营活动的情况，无运营活动考验判断力。适度参与是平衡选择，预期回报1.8%。"
  },
  {
    "id": "171-01",
    "category": "C1",
    "title": "官方桥",
    "desc": "使用项目方官方跨链桥，中心化但速度快。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.7,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.5,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.7,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对桥接风险的情况，官方桥考验判断力。适度参与是平衡选择，预期回报1.7%。"
  },
  {
    "id": "171-02",
    "category": "C1",
    "title": "第三方桥",
    "desc": "使用第三方跨链桥，有历史被黑记录。此时你会选择怎么做？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对桥接风险的情况，第三方桥考验判断力。适度参与是平衡选择，预期回报1.2%。"
  },
  {
    "id": "171-03",
    "category": "C1",
    "title": "原生消息传递",
    "desc": "链原生支持跨链消息，无需第三方桥。你的投资策略是？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在桥接风险的场景下，原生消息传递需要果断决策。重仓参与可能获得3.3%回报，但需承受较高风险。"
  },
  {
    "id": "171-04",
    "category": "C1",
    "title": "桥接限额",
    "desc": "每日跨链限额，大额需要分批转移。你将如何应对？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对桥接风险的情况，桥接限额考验判断力。适度参与是平衡选择，预期回报1.6%。"
  },
  {
    "id": "172-01",
    "category": "A3",
    "title": "技术专利",
    "desc": "拥有核心技术专利，竞争者难以复制。这种情况下，你的选择是？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在竞争壁垒的场景下，技术专利需要果断决策。重仓参与可能获得3.3%回报，但需承受较高风险。"
  },
  {
    "id": "172-02",
    "category": "A3",
    "title": "先发优势",
    "desc": "第一个进入市场，建立了用户基础。你会如何行动？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在竞争壁垒的不确定性下，先发优势可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "172-03",
    "category": "A3",
    "title": "网络效应壁垒",
    "desc": "用户越多价值越大，后来者难以超越。你的决策是？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在竞争壁垒的不确定性下，网络效应壁垒可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "172-04",
    "category": "A3",
    "title": "无壁垒",
    "desc": "模式容易被复制，没有护城河。对此你会做出什么选择？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在竞争壁垒的不确定性下，无壁垒可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "173-01",
    "category": "C2",
    "title": "创始人退休",
    "desc": "创始人退休，新任CEO接管，过渡期风险。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "创始人退休是代际传承的典型场景。小额试水可以控制风险，预期回报0.8%。"
  },
  {
    "id": "173-02",
    "category": "C2",
    "title": "引入职业经理人",
    "desc": "创始人专注技术，引入专业CEO管理公司。此时你会选择怎么做？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在代际传承的场景下，引入职业经理人需要果断决策。重仓参与可能获得3.0%回报，但需承受较高风险。"
  },
  {
    "id": "173-03",
    "category": "C2",
    "title": "二代接班",
    "desc": "创始人子女接班，能力待验证。你的投资策略是？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对代际传承的情况，二代接班考验判断力。适度参与是平衡选择，预期回报1.3%。"
  },
  {
    "id": "173-04",
    "category": "C2",
    "title": "创始团队稳定",
    "desc": "创始团队5年无变动，稳定性高。你将如何应对？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "创始团队稳定是代际传承的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "174-01",
    "category": "B2",
    "title": "账面浮盈",
    "desc": "估值上涨但尚未退出，只是纸面财富。这种情况下，你的选择是？",
    "baseProfitPct": 1.6,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.4,
        "lossPct": 1.3,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.6,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "账面浮盈是利润实现的典型场景。小额试水可以控制风险，预期回报0.8%。"
  },
  {
    "id": "174-02",
    "category": "B2",
    "title": "部分退出",
    "desc": "已卖出一部分实现利润，留一部分继续参与。你会如何行动？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在利润实现的不确定性下，部分退出可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "174-03",
    "category": "B2",
    "title": "全部退出",
    "desc": "已完全退出，落袋为安。你的决策是？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在利润实现的场景下，全部退出需要果断决策。重仓参与可能获得3.3%回报，但需承受较高风险。"
  },
  {
    "id": "174-04",
    "category": "B2",
    "title": "浮盈加仓",
    "desc": "账面盈利后追加投资，风险增加。对此你会做出什么选择？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对利润实现的情况，浮盈加仓考验判断力。适度参与是平衡选择，预期回报1.4%。"
  },
  {
    "id": "175-01",
    "category": "D1",
    "title": "创始人定期沟通",
    "desc": "创始人每月与投资者1对1沟通，信息优势。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "创始人定期沟通是信息优势的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "175-02",
    "category": "D1",
    "title": "参与内测",
    "desc": "作为投资者参与产品内测，了解第一手信息。此时你会选择怎么做？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对信息优势的情况，参与内测考验判断力。适度参与是平衡选择，预期回报2.0%。"
  },
  {
    "id": "175-03",
    "category": "D1",
    "title": "公开信息与大众相同",
    "desc": "无额外信息渠道，与散户信息平等。你的投资策略是？",
    "baseProfitPct": 1.7,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.5,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.7,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在信息优势的不确定性下，公开信息与大众相同可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "175-04",
    "category": "D1",
    "title": "信息滞后",
    "desc": "项目进展总是最后知道，信息劣势。你将如何应对？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在信息优势的场景下，信息滞后需要果断决策。重仓参与可能获得2.0%回报，但需承受较高风险。"
  },
  {
    "id": "176-01",
    "category": "A2",
    "title": "只上币安",
    "desc": "只在币安上币，流动性集中但单一依赖。这种情况下，你的选择是？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对上所选择的情况，只上币安考验判断力。适度参与是平衡选择，预期回报2.0%。"
  },
  {
    "id": "176-02",
    "category": "A2",
    "title": "多交易所策略",
    "desc": "同时上币安、OKX、Coinbase，分散流动性。你会如何行动？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对上所选择的情况，多交易所策略考验判断力。适度参与是平衡选择，预期回报2.1%。"
  },
  {
    "id": "176-03",
    "category": "A2",
    "title": "先上小所再上大所",
    "desc": "先在小交易所试水，稳定后再上大所。你的决策是？",
    "baseProfitPct": 1.8,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.7,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.8,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "先上小所再上大所是上所选择的典型场景。小额试水可以控制风险，预期回报0.9%。"
  },
  {
    "id": "176-04",
    "category": "A2",
    "title": "只上DEX",
    "desc": "只在Uniswap等DEX交易，无CEX流动性。对此你会做出什么选择？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对上所选择的情况，只上DEX考验判断力。适度参与是平衡选择，预期回报1.5%。"
  },
  {
    "id": "177-01",
    "category": "E1",
    "title": "社区提议分叉",
    "desc": "社区对发展方向不满，提议分叉项目。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在分叉风险的场景下，社区提议分叉需要果断决策。重仓参与可能获得2.0%回报，但需承受较高风险。"
  },
  {
    "id": "177-02",
    "category": "E1",
    "title": "成功分叉",
    "desc": "项目被分叉，社区分裂，价值分散。此时你会选择怎么做？",
    "baseProfitPct": 1.0,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.0,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在分叉风险的场景下，成功分叉需要果断决策。重仓参与可能获得1.5%回报，但需承受较高风险。"
  },
  {
    "id": "177-03",
    "category": "E1",
    "title": "分叉失败",
    "desc": "分叉提议未获支持，社区凝聚力强。你的投资策略是？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对分叉风险的情况，分叉失败考验判断力。适度参与是平衡选择，预期回报2.0%。"
  },
  {
    "id": "177-04",
    "category": "E1",
    "title": "友好分叉",
    "desc": "分叉后双方合作，共同促进生态。你将如何应对？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "友好分叉是分叉风险的典型场景。小额试水可以控制风险，预期回报0.9%。"
  },
  {
    "id": "178-01",
    "category": "C3",
    "title": "用户满意度高",
    "desc": "用户调研显示90%满意度，产品市场契合。这种情况下，你的选择是？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "用户满意度高是用户反馈的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "178-02",
    "category": "C3",
    "title": "用户抱怨多",
    "desc": "大量用户反馈产品难用，体验差。你会如何行动？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在用户反馈的不确定性下，用户抱怨多可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "178-03",
    "category": "C3",
    "title": "忽视用户反馈",
    "desc": "用户多次提出需求但被忽视，社区不满。你的决策是？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在用户反馈的场景下，忽视用户反馈需要果断决策。重仓参与可能获得1.8%回报，但需承受较高风险。"
  },
  {
    "id": "178-04",
    "category": "C3",
    "title": "快速响应反馈",
    "desc": "用户反馈24小时内得到响应，用户体验好。对此你会做出什么选择？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在用户反馈的不确定性下，快速响应反馈可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "179-01",
    "category": "A1",
    "title": "资金使用高效",
    "desc": "每融资100万创造1000万估值增长，效率高。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "资金使用高效是资金效率的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "179-02",
    "category": "A1",
    "title": "资金使用低效",
    "desc": "大量资金用于非核心支出，效率低。此时你会选择怎么做？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在资金效率的不确定性下，资金使用低效可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "179-03",
    "category": "A1",
    "title": "烧钱速度过快",
    "desc": "每月烧钱100万，跑道只剩6个月。你的投资策略是？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "烧钱速度过快是资金效率的典型场景。小额试水可以控制风险，预期回报0.6%。"
  },
  {
    "id": "179-04",
    "category": "A1",
    "title": "已实现盈亏平衡",
    "desc": "收入覆盖支出，不再依赖融资。你将如何应对？",
    "baseProfitPct": 2.3,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.4,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.3,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.5,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在资金效率的不确定性下，已实现盈亏平衡可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "180-01",
    "category": "B3",
    "title": "盈利再投资",
    "desc": "将退出项目的利润投入新项目，复利增长。这种情况下，你的选择是？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在组合再投资的不确定性下，盈利再投资可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "180-02",
    "category": "B3",
    "title": "分红策略",
    "desc": "将投资收益分红，不再投入。你会如何行动？",
    "baseProfitPct": 1.7,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.5,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.7,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在组合再投资的场景下，分红策略需要果断决策。重仓参与可能获得2.5%回报，但需承受较高风险。"
  },
  {
    "id": "180-03",
    "category": "B3",
    "title": "利润持有现金",
    "desc": "利润以现金持有，等待更好机会。你的决策是？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在组合再投资的场景下，利润持有现金需要果断决策。重仓参与可能获得2.8%回报，但需承受较高风险。"
  },
  {
    "id": "180-04",
    "category": "B3",
    "title": "亏损项目追加投资",
    "desc": "对亏损项目追加投资试图摊薄成本。对此你会做出什么选择？",
    "baseProfitPct": 0.9,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在组合再投资的不确定性下，亏损项目追加投资可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "181-01",
    "category": "D2",
    "title": "只看好消息",
    "desc": "只关注和分享正面消息，忽视风险信号。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "只看好消息是确认偏误的典型场景。小额试水可以控制风险，预期回报0.6%。"
  },
  {
    "id": "181-02",
    "category": "D2",
    "title": "辩证分析",
    "desc": "同时考虑正面和负面因素，客观评估。此时你会选择怎么做？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "辩证分析是确认偏误的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "181-03",
    "category": "D2",
    "title": "寻找反对意见",
    "desc": "主动寻找看空观点，检验自己判断。你的投资策略是？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在确认偏误的场景下，寻找反对意见需要果断决策。重仓参与可能获得3.0%回报，但需承受较高风险。"
  },
  {
    "id": "181-04",
    "category": "D2",
    "title": "忽视反对声音",
    "desc": "将反对者视为FUD，不思考其合理性。你将如何应对？",
    "baseProfitPct": 1.1,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.7,
        "lossPct": 0.9,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在确认偏误的场景下，忽视反对声音需要果断决策。重仓参与可能获得1.7%回报，但需承受较高风险。"
  },
  {
    "id": "182-01",
    "category": "C1",
    "title": "智能合约保险",
    "desc": "购买Nexus Mutual等保险，被黑可获赔。这种情况下，你的选择是？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对保险机制的情况，智能合约保险考验判断力。适度参与是平衡选择，预期回报2.0%。"
  },
  {
    "id": "182-02",
    "category": "C1",
    "title": "无保险",
    "desc": "无保险覆盖，被黑损失自担。你会如何行动？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在保险机制的场景下，无保险需要果断决策。重仓参与可能获得2.1%回报，但需承受较高风险。"
  },
  {
    "id": "182-03",
    "category": "C1",
    "title": "保险赔付延迟",
    "desc": "被黑后保险理赔流程复杂，赔付延迟。你的决策是？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "保险赔付延迟是保险机制的典型场景。小额试水可以控制风险，预期回报0.8%。"
  },
  {
    "id": "182-04",
    "category": "C1",
    "title": "保险不覆盖",
    "desc": "特定类型攻击不在保险范围内。对此你会做出什么选择？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在保险机制的场景下，保险不覆盖需要果断决策。重仓参与可能获得2.0%回报，但需承受较高风险。"
  },
  {
    "id": "183-01",
    "category": "E2",
    "title": "开发者激励计划",
    "desc": "为生态开发者提供Grant和激励，生态繁荣。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对生态激励的情况，开发者激励计划考验判断力。适度参与是平衡选择，预期回报2.2%。"
  },
  {
    "id": "183-02",
    "category": "E2",
    "title": "无开发者激励",
    "desc": "无激励吸引开发者，生态建设缓慢。此时你会选择怎么做？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在生态激励的不确定性下，无开发者激励可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "183-03",
    "category": "E2",
    "title": "激励被滥用",
    "desc": "激励被刷量者获取，真实开发者未受益。你的投资策略是？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在生态激励的不确定性下，激励被滥用可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "183-04",
    "category": "E2",
    "title": "激励计划结束",
    "desc": "生态激励预算用完，开发者流失。你将如何应对？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "激励计划结束是生态激励的典型场景。小额试水可以控制风险，预期回报0.7%。"
  },
  {
    "id": "184-01",
    "category": "A2",
    "title": "专业做市商",
    "desc": "聘请Wintermute等专业做市商，流动性好。这种情况下，你的选择是？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对上所做市的情况，专业做市商考验判断力。适度参与是平衡选择，预期回报2.1%。"
  },
  {
    "id": "184-02",
    "category": "A2",
    "title": "项目方自己做市",
    "desc": "项目方自己提供流动性，中心化风险。你会如何行动？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在上所做市的不确定性下，项目方自己做市可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "184-03",
    "category": "A2",
    "title": "无做市",
    "desc": "无做市支持，买卖价差大。你的决策是？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在上所做市的不确定性下，无做市可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "184-04",
    "category": "A2",
    "title": "做市商撤资",
    "desc": "做市商突然撤资，流动性枯竭。对此你会做出什么选择？",
    "baseProfitPct": 0.9,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在上所做市的场景下，做市商撤资需要果断决策。重仓参与可能获得1.4%回报，但需承受较高风险。"
  },
  {
    "id": "185-01",
    "category": "B2",
    "title": "定投策略",
    "desc": "无论价格高低定期买入，平摊成本。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在成本平均的不确定性下，定投策略可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "185-02",
    "category": "B2",
    "title": "越跌越买",
    "desc": "价格下跌时加倍买入，降低平均成本。此时你会选择怎么做？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "越跌越买是成本平均的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "185-03",
    "category": "B2",
    "title": "越涨越买",
    "desc": "FOMO追涨，成本越来越高。你的投资策略是？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在成本平均的不确定性下，越涨越买可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "185-04",
    "category": "B2",
    "title": "一次性买入",
    "desc": "择时一次性买入，对择时能力要求高。你将如何应对？",
    "baseProfitPct": 1.7,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.5,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.7,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "一次性买入是成本平均的典型场景。小额试水可以控制风险，预期回报0.8%。"
  },
  {
    "id": "186-01",
    "category": "D1",
    "title": "拉盘砸盘",
    "desc": "明显的价格操纵行为，散户受害。这种情况下，你的选择是？",
    "baseProfitPct": 0.7,
    "baseLossPct": 0.3,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 0.7,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.1,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "拉盘砸盘是市场操纵的典型场景。小额试水可以控制风险，预期回报0.3%。"
  },
  {
    "id": "186-02",
    "category": "D1",
    "title": "洗盘吸筹",
    "desc": "大户通过震荡洗去散户筹码。你会如何行动？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在市场操纵的场景下，洗盘吸筹需要果断决策。重仓参与可能获得2.0%回报，但需承受较高风险。"
  },
  {
    "id": "186-03",
    "category": "D1",
    "title": "价格稳定",
    "desc": "无明显操纵迹象，价格自然波动。你的决策是？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对市场操纵的情况，价格稳定考验判断力。适度参与是平衡选择，预期回报2.0%。"
  },
  {
    "id": "186-04",
    "category": "D1",
    "title": "可疑交易模式",
    "desc": "交易量和价格走势异常，可能操纵。对此你会做出什么选择？",
    "baseProfitPct": 1.1,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.7,
        "lossPct": 0.9,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "可疑交易模式是市场操纵的典型场景。小额试水可以控制风险，预期回报0.6%。"
  },
  {
    "id": "187-01",
    "category": "C2",
    "title": "透明开放文化",
    "desc": "团队内部信息透明，决策公开。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在团队文化的不确定性下，透明开放文化可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "187-02",
    "category": "C2",
    "title": "封闭保密文化",
    "desc": "团队信息保密，外部难以了解内部情况。此时你会选择怎么做？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在团队文化的不确定性下，封闭保密文化可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "187-03",
    "category": "C2",
    "title": "远程办公文化",
    "desc": "全远程办公，全球招募人才。你的投资策略是？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "远程办公文化是团队文化的典型场景。小额试水可以控制风险，预期回报1.0%。"
  },
  {
    "id": "187-04",
    "category": "C2",
    "title": "办公室政治",
    "desc": "团队内部派系斗争，精力内耗。你将如何应对？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在团队文化的不确定性下，办公室政治可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "188-01",
    "category": "A3",
    "title": "收到分叉币",
    "desc": "持有的BTC/ETH产生分叉币，意外收益。这种情况下，你的选择是？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在分叉币的场景下，收到分叉币需要果断决策。重仓参与可能获得3.0%回报，但需承受较高风险。"
  },
  {
    "id": "188-02",
    "category": "A3",
    "title": "分叉币价值低",
    "desc": "收到的分叉币几乎无价值，难以交易。你会如何行动？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在分叉币的不确定性下，分叉币价值低可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "188-03",
    "category": "A3",
    "title": "分叉币安全风险",
    "desc": "领取分叉币需要暴露私钥，风险高。你的决策是？",
    "baseProfitPct": 0.8,
    "baseLossPct": 0.4,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在分叉币的场景下，分叉币安全风险需要果断决策。重仓参与可能获得1.2%回报，但需承受较高风险。"
  },
  {
    "id": "188-04",
    "category": "A3",
    "title": "支持新分叉",
    "desc": "社区支持的新分叉获得价值认可。对此你会做出什么选择？",
    "baseProfitPct": 1.9,
    "baseLossPct": 0.9,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.8,
        "lossPct": 1.5,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.9,
        "lossPct": 0.9,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.9,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "支持新分叉是分叉币的典型场景。小额试水可以控制风险，预期回报0.9%。"
  },
  {
    "id": "189-01",
    "category": "E2",
    "title": "专业品牌形象",
    "desc": "品牌设计专业，官网精美，信任感强。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "专业品牌形象是品牌建设的典型场景。小额试水可以控制风险，预期回报1.0%。"
  },
  {
    "id": "189-02",
    "category": "E2",
    "title": "品牌形象差",
    "desc": "官网简陋，白皮书排版混乱，不专业。此时你会选择怎么做？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "品牌形象差是品牌建设的典型场景。小额试水可以控制风险，预期回报0.7%。"
  },
  {
    "id": "189-03",
    "category": "E2",
    "title": "品牌重塑",
    "desc": "更换Logo和品牌名称，重新定位市场。你的投资策略是？",
    "baseProfitPct": 1.7,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.5,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.7,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在品牌建设的场景下，品牌重塑需要果断决策。重仓参与可能获得2.5%回报，但需承受较高风险。"
  },
  {
    "id": "189-04",
    "category": "E2",
    "title": "品牌危机",
    "desc": "负面事件导致品牌形象受损，需要修复。你将如何应对？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在品牌建设的不确定性下，品牌危机可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "190-01",
    "category": "B1",
    "title": "大额交易滑点高",
    "desc": "超过10万U的订单滑点超过3%，成本高。这种情况下，你的选择是？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在滑点控制的场景下，大额交易滑点高需要果断决策。重仓参与可能获得2.1%回报，但需承受较高风险。"
  },
  {
    "id": "190-02",
    "category": "B1",
    "title": "分批交易",
    "desc": "将大单拆分为多笔小单，降低滑点。你会如何行动？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在滑点控制的不确定性下，分批交易可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "190-03",
    "category": "B1",
    "title": "使用聚合器",
    "desc": "使用1inch等聚合器寻找最优路径。你的决策是？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在滑点控制的不确定性下，使用聚合器可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "190-04",
    "category": "B1",
    "title": "无视滑点",
    "desc": "不在意滑点损失，一次性大单交易。对此你会做出什么选择？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在滑点控制的场景下，无视滑点需要果断决策。重仓参与可能获得2.0%回报，但需承受较高风险。"
  },
  {
    "id": "191-01",
    "category": "C3",
    "title": "开发者大会",
    "desc": "成功举办开发者大会，生态活跃。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对开发者关系的情况，开发者大会考验判断力。适度参与是平衡选择，预期回报2.1%。"
  },
  {
    "id": "191-02",
    "category": "C3",
    "title": "开发者文档完善",
    "desc": "API文档详细，开发者上手容易。此时你会选择怎么做？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "开发者文档完善是开发者关系的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "191-03",
    "category": "C3",
    "title": "开发者支持差",
    "desc": "技术问题无人响应，开发者体验差。你的投资策略是？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在开发者关系的不确定性下，开发者支持差可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "191-04",
    "category": "C3",
    "title": "开发者社区分裂",
    "desc": "核心开发者离开，另起炉灶。你将如何应对？",
    "baseProfitPct": 1.0,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.0,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在开发者关系的不确定性下，开发者社区分裂可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "192-01",
    "category": "A2",
    "title": "明确时间表",
    "desc": "上所日期明确写入合约，违约可追责。这种情况下，你的选择是？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在上所时间表的场景下，明确时间表需要果断决策。重仓参与可能获得3.2%回报，但需承受较高风险。"
  },
  {
    "id": "192-02",
    "category": "A2",
    "title": "模糊时间表",
    "desc": "'近期'、'很快'等模糊表述，无明确承诺。你会如何行动？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对上所时间表的情况，模糊时间表考验判断力。适度参与是平衡选择，预期回报1.4%。"
  },
  {
    "id": "192-03",
    "category": "A2",
    "title": "多次延期",
    "desc": "上所日期已延期3次，可信度低。你的决策是？",
    "baseProfitPct": 1.0,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.0,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "多次延期是上所时间表的典型场景。小额试水可以控制风险，预期回报0.5%。"
  },
  {
    "id": "192-04",
    "category": "A2",
    "title": "提前上所",
    "desc": "比预期时间提前上所，执行力强。对此你会做出什么选择？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对上所时间表的情况，提前上所考验判断力。适度参与是平衡选择，预期回报2.2%。"
  },
  {
    "id": "193-01",
    "category": "D2",
    "title": "继续持有因为已投入太多",
    "desc": "因为已经亏了很多不愿割肉，沉没成本谬误。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.1,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 1.7,
        "lossPct": 0.9,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "继续持有因为已投入太多是沉没成本的典型场景。小额试水可以控制风险，预期回报0.6%。"
  },
  {
    "id": "193-02",
    "category": "D2",
    "title": "及时止损",
    "desc": "承认错误及时止损，不让损失扩大。此时你会选择怎么做？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在沉没成本的不确定性下，及时止损可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "193-03",
    "category": "D2",
    "title": "加倍投入摊薄成本",
    "desc": "亏损后继续加仓摊薄成本，风险加大。你的投资策略是？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在沉没成本的不确定性下，加倍投入摊薄成本可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "193-04",
    "category": "D2",
    "title": "理性评估",
    "desc": "不受已投入成本影响，只考虑未来预期。你将如何应对？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在沉没成本的场景下，理性评估需要果断决策。重仓参与可能获得3.0%回报，但需承受较高风险。"
  },
  {
    "id": "194-01",
    "category": "B2",
    "title": "设置止盈",
    "desc": "达到目标利润后自动卖出，纪律性强。这种情况下，你的选择是？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在利润保护的场景下，设置止盈需要果断决策。重仓参与可能获得3.2%回报，但需承受较高风险。"
  },
  {
    "id": "194-02",
    "category": "B2",
    "title": "移动止盈",
    "desc": "价格上涨时不断提高止盈点，保护利润。你会如何行动？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对利润保护的情况，移动止盈考验判断力。适度参与是平衡选择，预期回报2.2%。"
  },
  {
    "id": "194-03",
    "category": "B2",
    "title": "不设止盈",
    "desc": "不设止盈点，利润回吐。你的决策是？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对利润保护的情况，不设止盈考验判断力。适度参与是平衡选择，预期回报1.4%。"
  },
  {
    "id": "194-04",
    "category": "B2",
    "title": "过早止盈",
    "desc": "稍微盈利就卖出，错失后续涨幅。对此你会做出什么选择？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "过早止盈是利润保护的典型场景。小额试水可以控制风险，预期回报0.8%。"
  },
  {
    "id": "195-01",
    "category": "C2",
    "title": "定期财报",
    "desc": "每季度发布财务报告，透明度高。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在团队沟通的场景下，定期财报需要果断决策。重仓参与可能获得3.2%回报，但需承受较高风险。"
  },
  {
    "id": "195-02",
    "category": "C2",
    "title": "不定期更新",
    "desc": "偶尔发布更新，频率不固定。此时你会选择怎么做？",
    "baseProfitPct": 1.7,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.5,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.7,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在团队沟通的不确定性下，不定期更新可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "195-03",
    "category": "C2",
    "title": "只在利好时沟通",
    "desc": "只在有好消息时发公告，坏消息沉默。你的投资策略是？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在团队沟通的场景下，只在利好时沟通需要果断决策。重仓参与可能获得2.0%回报，但需承受较高风险。"
  },
  {
    "id": "195-04",
    "category": "C2",
    "title": "完全沉默",
    "desc": "数月无任何沟通，投资者担忧。你将如何应对？",
    "baseProfitPct": 0.9,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对团队沟通的情况，完全沉默考验判断力。适度参与是平衡选择，预期回报0.9%。"
  },
  {
    "id": "196-01",
    "category": "A1",
    "title": "TAM万亿市场",
    "desc": "目标市场总量巨大，但难以获取份额。这种情况下，你的选择是？",
    "baseProfitPct": 1.7,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.5,
        "lossPct": 1.4,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.7,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在市场规模的场景下，TAM万亿市场需要果断决策。重仓参与可能获得2.5%回报，但需承受较高风险。"
  },
  {
    "id": "196-02",
    "category": "A1",
    "title": "SAM十亿市场",
    "desc": "可服务市场适中，竞争聚焦。你会如何行动？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在市场规模的不确定性下，SAM十亿市场可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "196-03",
    "category": "A1",
    "title": "小众市场",
    "desc": "市场容量小，成长空间有限。你的决策是？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在市场规模的场景下，小众市场需要果断决策。重仓参与可能获得2.2%回报，但需承受较高风险。"
  },
  {
    "id": "196-04",
    "category": "A1",
    "title": "创造新市场",
    "desc": "开拓全新市场，教育成本高但先发优势。对此你会做出什么选择？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对市场规模的情况，创造新市场考验判断力。适度参与是平衡选择，预期回报2.1%。"
  },
  {
    "id": "197-01",
    "category": "E2",
    "title": "病毒式增长",
    "desc": "用户自传播，增长曲线陡峭。面对这种情况，你该如何决策？",
    "baseProfitPct": 2.3,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.4,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.3,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.5,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在病毒传播的不确定性下，病毒式增长可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "197-02",
    "category": "E2",
    "title": "邀请机制",
    "desc": "邀请奖励机制促进用户增长。此时你会选择怎么做？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "邀请机制是病毒传播的典型场景。小额试水可以控制风险，预期回报1.0%。"
  },
  {
    "id": "197-03",
    "category": "E2",
    "title": "增长停滞",
    "desc": "用户增长放缓，获客成本高。你的投资策略是？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "增长停滞是病毒传播的典型场景。小额试水可以控制风险，预期回报0.7%。"
  },
  {
    "id": "197-04",
    "category": "E2",
    "title": "虚假增长",
    "desc": "用户增长靠机器人和刷量，真实用户少。你将如何应对？",
    "baseProfitPct": 0.8,
    "baseLossPct": 0.4,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在病毒传播的不确定性下，虚假增长可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "198-01",
    "category": "B3",
    "title": "组合高度相关",
    "desc": "所有投资都与BTC高度相关，无法分散。这种情况下，你的选择是？",
    "baseProfitPct": 1.4,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "在相关性风险的不确定性下，组合高度相关可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "198-02",
    "category": "B3",
    "title": "组合低相关",
    "desc": "投资标的与传统市场低相关，分散效果好。你会如何行动？",
    "baseProfitPct": 2.0,
    "baseLossPct": 1.0,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.0,
        "lossPct": 1.6,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.0,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在相关性风险的不确定性下，组合低相关可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "198-03",
    "category": "B3",
    "title": "黑天鹅事件",
    "desc": "所有资产同时下跌，相关性趋同。你的决策是？",
    "baseProfitPct": 0.9,
    "baseLossPct": 0.5,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 1.4,
        "lossPct": 0.7,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 0.9,
        "lossPct": 0.5,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.5,
        "lossPct": 0.3,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对相关性风险的情况，黑天鹅事件考验判断力。适度参与是平衡选择，预期回报0.9%。"
  },
  {
    "id": "198-04",
    "category": "B3",
    "title": "对冲配置",
    "desc": "同时配置相关性为负的资产对冲风险。对此你会做出什么选择？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在相关性风险的不确定性下，对冲配置可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "199-01",
    "category": "D2",
    "title": "害怕错过而追高",
    "desc": "担心错过行情而追高买入，后悔厌恶。面对这种情况，你该如何决策？",
    "baseProfitPct": 1.2,
    "baseLossPct": 0.6,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 1.8,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 1.2,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 0.6,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.2,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对后悔厌恶的情况，害怕错过而追高考验判断力。适度参与是平衡选择，预期回报1.2%。"
  },
  {
    "id": "199-02",
    "category": "D2",
    "title": "害怕后悔而止盈",
    "desc": "担心利润回吐而过早止盈。此时你会选择怎么做？",
    "baseProfitPct": 1.5,
    "baseLossPct": 0.8,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 2.2,
        "lossPct": 1.2,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 1.5,
        "lossPct": 0.8,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 0.8,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在后悔厌恶的不确定性下，害怕后悔而止盈可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "199-03",
    "category": "D2",
    "title": "接受不确定性",
    "desc": "接受任何决策都可能后悔，理性决策。你的投资策略是？",
    "baseProfitPct": 2.1,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 3.2,
        "lossPct": 1.7,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 2.1,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.6,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "面对后悔厌恶的情况，接受不确定性考验判断力。适度参与是平衡选择，预期回报2.1%。"
  },
  {
    "id": "199-04",
    "category": "D2",
    "title": " paralysis by analysis",
    "desc": "过度分析无法决策，怕做出错误选择。你将如何应对？",
    "baseProfitPct": 1.3,
    "baseLossPct": 0.7,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 2.0,
        "lossPct": 1.0,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 1.3,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 0.7,
        "lossPct": 0.4,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      }
    ],
    "explanation": "面对后悔厌恶的情况， paralysis by analysis考验判断力。适度参与是平衡选择，预期回报1.3%。"
  },
  {
    "id": "200-01",
    "category": "F1",
    "title": "项目被收购",
    "desc": "项目被大公司收购，投资者退出。这种情况下，你的选择是？",
    "baseProfitPct": 2.2,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "全力投入: 高风险高回报策略",
        "profitPct": 3.3,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "适度参与: 平衡风险收益策略",
        "profitPct": 2.2,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "小额试水: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "暂时观望: 观望等待策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "在终局思考的场景下，项目被收购需要果断决策。重仓参与可能获得3.3%回报，但需承受较高风险。"
  },
  {
    "id": "200-02",
    "category": "F1",
    "title": "项目上市",
    "desc": "项目Token在主流交易所上市，流动性好。你会如何行动？",
    "baseProfitPct": 2.3,
    "baseLossPct": 1.1,
    "choices": [
      {
        "text": "梭哈: 高风险高回报策略",
        "profitPct": 3.4,
        "lossPct": 1.8,
        "isCorrect": true
      },
      {
        "text": "分批建仓: 平衡风险收益策略",
        "profitPct": 2.3,
        "lossPct": 1.1,
        "isCorrect": false
      },
      {
        "text": "保持观望: 控制风险策略",
        "profitPct": 1.1,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "直接拒绝: 观望等待策略",
        "profitPct": 0.5,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "项目上市是终局思考的典型场景。小额试水可以控制风险，预期回报1.1%。"
  },
  {
    "id": "200-03",
    "category": "F1",
    "title": "项目死亡",
    "desc": "项目失败关闭，投资归零。你的决策是？",
    "baseProfitPct": 0.3,
    "baseLossPct": 0.1,
    "choices": [
      {
        "text": "重仓: 高风险高回报策略",
        "profitPct": 0.4,
        "lossPct": 0.2,
        "isCorrect": true
      },
      {
        "text": "标配: 平衡风险收益策略",
        "profitPct": 0.3,
        "lossPct": 0.1,
        "isCorrect": false
      },
      {
        "text": "轻仓: 控制风险策略",
        "profitPct": 0.1,
        "lossPct": 0.1,
        "isCorrect": false
      },
      {
        "text": "空仓: 观望等待策略",
        "profitPct": 0.1,
        "lossPct": 0.0,
        "isCorrect": false
      }
    ],
    "explanation": "在终局思考的不确定性下，项目死亡可能风险过高。观望放弃虽错过机会，但避免了潜在损失。"
  },
  {
    "id": "200-04",
    "category": "F1",
    "title": "持续经营",
    "desc": "项目持续运营，成为行业基础设施。对此你会做出什么选择？",
    "baseProfitPct": 2.4,
    "baseLossPct": 1.2,
    "choices": [
      {
        "text": "积极做多: 高风险高回报策略",
        "profitPct": 3.6,
        "lossPct": 1.9,
        "isCorrect": true
      },
      {
        "text": "中性配置: 平衡风险收益策略",
        "profitPct": 2.4,
        "lossPct": 1.2,
        "isCorrect": false
      },
      {
        "text": "谨慎减仓: 控制风险策略",
        "profitPct": 1.2,
        "lossPct": 0.7,
        "isCorrect": false
      },
      {
        "text": "完全退出: 观望等待策略",
        "profitPct": 0.5,
        "lossPct": 0.2,
        "isCorrect": false
      }
    ],
    "explanation": "持续经营是终局思考的典型场景。小额试水可以控制风险，预期回报1.2%。"
  }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = HARDCORE_NEW_DECISIONS;
}
