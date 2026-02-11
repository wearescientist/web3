/**
 * 硬核模式核心逻辑
 * 
 * 核心原则：
 * 1. 常识分数系统（隐形跟踪决策正确率）
 * 2. 决策全对稳赚，全错必亏
 * 3. 随机事件只放大决策结果，不逆转
 * 4. 350个常识测试决策（全局50 + 6路径×50）
 */

/** ========== 硬核模式配置 ========== */
const HARDCORE_CONFIG = {
  // 游戏时长
  TOTAL_YEARS: 10,
  TICKS_PER_YEAR: 4, // 每季度决策一次
  
  // 随机事件频率
  SMALL_EVENTS_PER_QUARTER: [1, 3], // 每季度1-3个小事件
  MEDIUM_EVENTS_PER_YEAR: [2, 4],   // 每年2-4个中事件
  BIG_EVENTS_PER_GAME: [1, 2],      // 每局1-2个大事件
  
  // 影响幅度
  SMALL_EVENT_RANGE: [0.10, 0.30],  // ±10-30%
  MEDIUM_EVENT_RANGE: [0.30, 0.50], // ±30-50%
  BIG_EVENT_RANGE: [0.50, 1.00],    // ±50-100%
  
  // 常识分数影响随机事件概率
  GOOD_DECISION_NEGATIVE_CHANCE: 0.20, // 好决策后负面事件概率20%
  BAD_DECISION_NEGATIVE_CHANCE: 0.80,  // 坏决策后负面事件概率80%
  
  // 决策效果
  CORRECT_DECISION_MIN_REWARD: 0.50,   // 正确决策最低+50%
  WRONG_DECISION_MAX_PENALTY: -0.70,   // 错误决策最高-70%
  
  // 结局判定
  PERFECT_RUN_WIN_RATE: 0.80,      // 全对跑胜率80%
  ALL_WRONG_ZERO_RATE: 0.95,       // 全错归零率95%
};

/** ========== 常识分数系统 ========== */
class CommonSenseScore {
  constructor() {
    this.total = 0;      // 总决策数
    this.correct = 0;    // 正确决策数
    this.streak = 0;     // 连续正确数（正为正确连击，负为错误连击）
    this.history = [];   // 决策历史 { decisionId, correct, effect }
  }

  // 获取当前分数 0-1
  getScore() {
    return this.total > 0 ? this.correct / this.total : 0.5;
  }

  // 记录决策
  recordDecision(decisionId, isCorrect, effect) {
    this.total++;
    if (isCorrect) {
      this.correct++;
      this.streak = this.streak > 0 ? this.streak + 1 : 1;
    } else {
      this.streak = this.streak < 0 ? this.streak - 1 : -1;
    }
    this.history.push({ decisionId, correct: isCorrect, effect, time: Date.now() });
  }

  // 获取连续正确/错误次数
  getStreak() {
    return this.streak;
  }

  // 重置
  reset() {
    this.total = 0;
    this.correct = 0;
    this.streak = 0;
    this.history = [];
  }

  // 序列化
  serialize() {
    return {
      total: this.total,
      correct: this.correct,
      streak: this.streak,
      history: this.history.slice(-20) // 只保留最近20条
    };
  }

  // 反序列化
  deserialize(data) {
    this.total = data.total || 0;
    this.correct = data.correct || 0;
    this.streak = data.streak || 0;
    this.history = data.history || [];
  }
}

/** ========== 随机事件系统 ========== */

// 小事件（高频，自动结算，影响小）
const HARDCORE_SMALL_EVENTS = {
  // 正面（决策好时多触发）
  positive: [
    { name: 'Staking 小奖励', effect: { wealthPct: 0.10 }, description: '质押获得小额奖励' },
    { name: '粉丝自然涨', effect: { wealthPct: 0.03, fansPct: 0.05 }, description: '社区自然增长' },
    { name: '小空投', effect: { wealthPct: 0.08 }, description: '收到项目空投' },
    { name: '交易费折扣', effect: { wealthPct: 0.05 }, description: '获得交易费减免' },
    { name: '社区奖励', effect: { wealthPct: 0.06 }, description: '社区活动奖励' },
  ],
  // 负面（决策错时多触发）
  negative: [
    { name: 'Gas 费吃本', effect: { wealthPct: -0.05 }, description: '链上操作消耗 Gas' },
    { name: '滑点亏损', effect: { wealthPct: -0.10 }, description: '交易滑点损失' },
    { name: '社区小喷', effect: { wealthPct: -0.03, fansPct: -0.03 }, description: '社区声誉小损' },
    { name: '钱包操作失误', effect: { wealthPct: -0.06 }, description: '操作失误小额损失' },
    { name: '错过小机会', effect: { wealthPct: -0.08 }, description: '错过小额收益机会' },
  ],
  // 中性（给微小正负波动，避免收益为0）
  neutral: [
    { name: '市场小波动', effect: { wealthPct: 0.02 }, description: '市场正常波动' },
    { name: '新闻影响中性', effect: { wealthPct: 0.01 }, description: '行业新闻影响中性' },
    { name: '技术维护', effect: { wealthPct: -0.02 }, description: '平台例行维护' },
  ]
};

// 中事件（中频，路径相关）
const HARDCORE_MEDIUM_EVENTS = {
  trading: [
    { 
      name: 'Meme 小泵', 
      goodEffect: { wealthPct: 0.20 }, 
      badEffect: { wealthPct: -0.30 },
      description: 'Meme 币短期波动'
    },
    { 
      name: '假突破', 
      goodEffect: { wealthPct: 0.15 }, 
      badEffect: { wealthPct: -0.25 },
      description: '价格假突破后回落'
    },
    { 
      name: '流动性变化', 
      goodEffect: { wealthPct: 0.25 }, 
      badEffect: { wealthPct: -0.35 },
      description: '市场流动性突变'
    },
  ],
  kol: [
    { 
      name: '推文小 viral', 
      goodEffect: { fansPct: 0.20 }, 
      badEffect: { fansPct: -0.15, wealthPct: -0.20 },
      description: '内容小范围传播'
    },
    { 
      name: '合作项目方动态', 
      goodEffect: { wealthPct: 0.20 }, 
      badEffect: { wealthPct: -0.25 },
      description: '合作项目有新动态'
    },
  ],
  job: [
    { 
      name: '团队内部变动', 
      goodEffect: { wealthPct: 0.25 }, 
      badEffect: { wealthPct: -0.30 },
      description: '公司内部人事变动'
    },
    { 
      name: '项目里程碑', 
      goodEffect: { wealthPct: 0.30 }, 
      badEffect: { wealthPct: -0.20 },
      description: '项目达到里程碑'
    },
  ],
  launch: [
    { 
      name: '社区小 FOMO', 
      goodEffect: { wealthPct: 0.30 }, 
      badEffect: { wealthPct: -0.40 },
      description: '社区出现小范围 FOMO'
    },
    { 
      name: '竞争币动态', 
      goodEffect: { wealthPct: 0.15 }, 
      badEffect: { wealthPct: -0.25 },
      description: '竞品项目新动态'
    },
  ],
  invest: [
    { 
      name: '被投项目更新', 
      goodEffect: { wealthPct: 0.25 }, 
      badEffect: { wealthPct: -0.30 },
      description: '投资组合项目更新'
    },
    { 
      name: '市场环境变化', 
      goodEffect: { wealthPct: 0.20 }, 
      badEffect: { wealthPct: -0.25 },
      description: '投资环境变化'
    },
  ],
  staking: [
    { 
      name: '协议参数调整', 
      goodEffect: { wealthPct: 0.20 }, 
      badEffect: { wealthPct: -0.20 },
      description: '质押协议参数调整'
    },
    { 
      name: '收益率波动', 
      goodEffect: { wealthPct: 0.25 }, 
      badEffect: { wealthPct: -0.15 },
      description: '市场收益率波动'
    },
  ],
  airdrop: [
    { 
      name: '空投规则变化', 
      goodEffect: { wealthPct: 0.30 }, 
      badEffect: { wealthPct: -0.25 },
      description: '空投领取规则变化'
    },
    { 
      name: '女巫检测', 
      goodEffect: { wealthPct: 0.15 }, 
      badEffect: { wealthPct: -0.35 },
      description: '女巫检测风波'
    },
  ],
};

// 大事件（稀有，市场级，受决策历史影响）
const HARDCORE_BIG_EVENTS = [
  {
    id: 'bull_halving',
    name: '牛市大拉 / Halving',
    description: '减半周期带来大牛市',
    goodHistoryEffect: { wealthPct: 2.00 }, // 决策历史好 → 赚200%
    badHistoryEffect: { wealthPct: -0.30 },  // 决策历史差 → 亏30%
    threshold: 0.6 // 正确率>60%算好历史
  },
  {
    id: 'bear_crash',
    name: '熊市闪崩 / 监管风暴',
    description: '突发监管利空导致暴跌',
    goodHistoryEffect: { wealthPct: -0.15 }, // 决策历史好 → 仅亏15%
    badHistoryEffect: { wealthPct: -0.80 },  // 决策历史差 → 亏80%
    threshold: 0.5
  },
  {
    id: 'black_swan',
    name: '黑天鹅（交易所黑客）',
    description: '重大安全事件',
    goodHistoryEffect: { wealthPct: -0.10 }, // 决策历史好（分散资产）→ 亏10%
    badHistoryEffect: { wealthPct: -0.90 },  // 决策历史差（all in）→ 亏90%
    threshold: 0.55
  },
  {
    id: 'institutional_adoption',
    name: '机构大规模入场',
    description: '传统金融巨鳄入场',
    goodHistoryEffect: { wealthPct: 1.50 },
    badHistoryEffect: { wealthPct: 0.20 },
    threshold: 0.5
  },
];

/** ========== 硬核模式核心类 ========== */
class HardcoreMode {
  constructor(gameState) {
    this.state = gameState;
    this.commonSense = new CommonSenseScore();
    this.decisionQueue = []; // 待触发的决策队列
    this.triggeredDecisions = new Set(); // 已触发的决策ID
    this.currentQuarter = 0;
    this.smallEventCount = 0;
    this.mediumEventCount = 0;
    this.bigEventCount = 0;
    this.pendingDecision = null; // 当前待处理的决策
  }

  // 初始化新游戏
  init() {
    this.commonSense.reset();
    this.decisionQueue = this.generateDecisionQueue();
    this.triggeredDecisions.clear();
    this.currentQuarter = 0;
    this.smallEventCount = 0;
    this.mediumEventCount = 0;
    this.bigEventCount = 0;
    this.pendingDecision = null;
    
    // 添加到游戏状态
    this.state.hardcore = {
      enabled: true,
      commonSense: this.commonSense.serialize(),
      decisionsTotal: 0,
      decisionsCorrect: 0,
      currentStreak: 0,
      bestStreak: 0
    };
  }

  // 生成决策队列
  generateDecisionQueue() {
    const queue = [];
    const totalYears = HARDCORE_CONFIG.TOTAL_YEARS;
    
    // 获取可用决策
    const globalDecisions = window.HARDCORE_GLOBAL_DECISIONS || [];
    
    // 生成决策：每季度一个（year * 4 + quarterIndex）
    // quarterIndex: 0(1-3月), 1(4-6月), 2(7-9月), 3(10-12月)
    for (let year = 0; year < totalYears; year++) {
      for (let quarterIndex of [0, 1, 2, 3]) {
        const decisionQuarter = year * 4 + quarterIndex;
        if (globalDecisions.length > 0) {
          // 随机选择一个决策（避免重复）
          const availableDecisions = globalDecisions.filter(d => !queue.some(q => q.id === d.id));
          const decisionPool = availableDecisions.length > 0 ? availableDecisions : globalDecisions;
          const randomIndex = Math.floor(Math.random() * decisionPool.length);
          const decision = { 
            ...decisionPool[randomIndex], 
            quarter: decisionQuarter,
            year: year + 1,
            quarterIndex: quarterIndex // 0,1,2,3
          };
          queue.push(decision);
        }
      }
    }
    
    return queue.sort((a, b) => a.quarter - b.quarter);
  }

  // 检查是否应该触发决策
  shouldTriggerDecision(year, week) {
    if (this.pendingDecision) return false;
    
    // 将 0-11月 映射到 0-3季度 (0,1,2月=0; 3,4,5月=1; 6,7,8月=2; 9,10,11月=3)
    const quarterIndex = Math.floor(week / 3);
    const decisionQuarter = year * 4 + quarterIndex;
    
    // 找到当前季度应该触发的决策
    const decision = this.decisionQueue.find(d => d.quarter === decisionQuarter && !this.triggeredDecisions.has(d.id));
    if (decision) {
      this.pendingDecision = decision;
      return true;
    }
    return false;
  }

  // 获取当前待处理决策
  getPendingDecision() {
    return this.pendingDecision;
  }

  // 处理决策选择
  resolveDecision(choiceIndex) {
    if (!this.pendingDecision) return null;
    
    const decision = this.pendingDecision;
    const choice = decision.choices[choiceIndex];
    
    // 记录决策
    this.triggeredDecisions.add(decision.id);
    
    // 是否正确
    const isCorrect = choice.isCorrect;
    
    // 应用效果
    const effect = { ...choice.effect };
    
    // 记录到常识分数系统
    this.commonSense.recordDecision(decision.id, isCorrect, effect);
    
    // 更新游戏状态中的统计
    this.state.hardcore.decisionsTotal = this.commonSense.total;
    this.state.hardcore.decisionsCorrect = this.commonSense.correct;
    this.state.hardcore.currentStreak = this.commonSense.streak;
    this.state.hardcore.bestStreak = Math.max(this.state.hardcore.bestStreak || 0, this.commonSense.streak);
    this.state.hardcore.commonSense = this.commonSense.serialize();
    
    // 清理待处理决策
    this.pendingDecision = null;
    
    return {
      decision,
      choice,
      isCorrect,
      effect,
      explanation: choice.explanation,
      currentScore: this.commonSense.getScore()
    };
  }

  // 触发小事件
  triggerSmallEvent() {
    const score = this.commonSense.getScore();
    
    // 根据分数决定正面/负面概率
    const positiveChance = score;
    const isPositive = Math.random() < positiveChance;
    
    let eventPool;
    if (isPositive) {
      eventPool = HARDCORE_SMALL_EVENTS.positive;
    } else {
      // 负面概率受配置影响
      const negativeChance = score > 0.5 ? 
        HARDCORE_CONFIG.GOOD_DECISION_NEGATIVE_CHANCE : 
        HARDCORE_CONFIG.BAD_DECISION_NEGATIVE_CHANCE;
      eventPool = Math.random() < negativeChance ? HARDCORE_SMALL_EVENTS.negative : HARDCORE_SMALL_EVENTS.neutral;
    }
    
    const event = eventPool[Math.floor(Math.random() * eventPool.length)];
    // 根据实际效果判断类型（neutral池中的事件也有正负）
    let eventType;
    if (isPositive) {
      eventType = 'positive';
    } else if (eventPool === HARDCORE_SMALL_EVENTS.negative) {
      eventType = 'negative';
    } else {
      // neutral池：根据wealthPct正负判断
      const wealthEffect = event.effect?.wealthPct || 0;
      eventType = wealthEffect >= 0 ? 'positive' : 'negative';
    }
    return { ...event, type: eventType };
  }

  // 触发中事件
  triggerMediumEvent(path) {
    const pathEvents = HARDCORE_MEDIUM_EVENTS[path] || HARDCORE_MEDIUM_EVENTS.trading;
    const event = pathEvents[Math.floor(Math.random() * pathEvents.length)];
    
    const score = this.commonSense.getScore();
    const isGoodHistory = score > 0.5;
    
    return {
      ...event,
      effect: isGoodHistory ? event.goodEffect : event.badEffect,
      type: isGoodHistory ? 'positive' : 'negative'
    };
  }

  // 触发大事件
  triggerBigEvent() {
    const event = HARDCORE_BIG_EVENTS[Math.floor(Math.random() * HARDCORE_BIG_EVENTS.length)];
    const score = this.commonSense.getScore();
    const isGoodHistory = score >= event.threshold;
    
    return {
      ...event,
      effect: isGoodHistory ? event.goodHistoryEffect : event.badHistoryEffect,
      type: isGoodHistory ? 'positive' : 'negative',
      isBigEvent: true
    };
  }

  // 应用事件效果到游戏状态
  applyEventEffect(eventEffect, state) {
    if (!eventEffect) return { gain: 0, loss: 0 };
    
    const result = { gain: 0, loss: 0 };
    const currentWealth = state.wealth || 0;
    
    // 百分比效果 - 使用保底基数+绝对值计算，支持负资产翻盘
    if (eventEffect.wealthPct) {
      // 核心修改：负资产时使用保底基数+绝对值计算
      const BASE_AMOUNT = 1000; // 保底基数，确保负资产也有效果
      const effectiveWealth = Math.abs(currentWealth) + BASE_AMOUNT;
      
      // 负资产时系数调整：正面打折，负面加剧
      let finalCoefficient = eventEffect.wealthPct;
      if (currentWealth < 0) {
        if (eventEffect.wealthPct > 0) {
          // 正面决策效果打折（翻盘变难）
          finalCoefficient = eventEffect.wealthPct * 0.7;
        } else {
          // 负面决策效果加剧（亏得更快）
          finalCoefficient = eventEffect.wealthPct * 1.3;
        }
      }
      
      const change = effectiveWealth * finalCoefficient;
      
      if (change > 0) {
        result.gain = change;
        state.wealth = currentWealth + change;
      } else {
        result.loss = Math.abs(change);
        // 负资产时可以进一步负债
        state.wealth = currentWealth + change;
      }
    }
    
    // 绝对值效果
    if (eventEffect.wealthAbs) {
      const [min, max] = eventEffect.wealthAbs;
      const change = min + Math.random() * (max - min);
      if (change > 0) {
        result.gain = change;
        state.wealth = currentWealth + change;
      } else {
        result.loss = Math.abs(change);
        state.wealth = currentWealth + change; // 允许进一步负资产
      }
    }
    
    // 粉丝效果
    if (eventEffect.fansPct) {
      const currentFans = state.fans || 0;
      state.fans = Math.max(0, currentFans * (1 + eventEffect.fansPct));
    }
    
    return result;
  }

  // 计算决策效果（用于显示预览）
  calculateDecisionEffect(effect, currentWealth) {
    if (!effect) return { change: 0, preview: '' };
    
    const BASE_AMOUNT = 1000;
    const effectiveWealth = Math.abs(currentWealth) + BASE_AMOUNT;
    
    if (effect.wealthPct) {
      // 负资产时系数调整（预览也要同步）
      let finalCoefficient = effect.wealthPct;
      if (currentWealth < 0) {
        if (effect.wealthPct > 0) {
          finalCoefficient = effect.wealthPct * 0.7;
        } else {
          finalCoefficient = effect.wealthPct * 1.3;
        }
      }
      
      const change = effectiveWealth * finalCoefficient;
      const pct = (finalCoefficient * 100).toFixed(0);
      return {
        change,
        preview: change >= 0 ? `+${pct}%` : `${pct}%`,
        absoluteChange: change
      };
    }
    
    return { change: 0, preview: '', absoluteChange: 0 };
  }

  // 获取结局调整系数
  getEndingModifier() {
    const score = this.commonSense.getScore();
    const total = this.commonSense.total;
    
    // 根据正确率和决策数量调整结局
    if (total < 10) return { multiplier: 1, description: '样本不足' };
    
    if (score >= 0.8) {
      return { multiplier: 3.0, description: '完美决策', boostEnding: true };
    } else if (score >= 0.6) {
      return { multiplier: 1.5, description: '良好决策' };
    } else if (score >= 0.4) {
      return { multiplier: 0.8, description: '一般决策' };
    } else if (score >= 0.2) {
      return { multiplier: 0.3, description: '较差决策', worsenEnding: true };
    } else {
      return { multiplier: 0.1, description: '糟糕决策', worsenEnding: true, forceBadEnding: true };
    }
  }

  // 获取当前统计信息
  getStats() {
    return {
      totalDecisions: this.commonSense.total,
      correctDecisions: this.commonSense.correct,
      score: this.commonSense.getScore(),
      streak: this.commonSense.streak,
      history: this.commonSense.history.slice(-5)
    };
  }
}

/** ========== 导出 ========== */
if (typeof window !== 'undefined') {
  window.HardcoreMode = HardcoreMode;
  window.CommonSenseScore = CommonSenseScore;
  window.HARDCORE_CONFIG = HARDCORE_CONFIG;
  window.HARDCORE_SMALL_EVENTS = HARDCORE_SMALL_EVENTS;
  window.HARDCORE_MEDIUM_EVENTS = HARDCORE_MEDIUM_EVENTS;
  window.HARDCORE_BIG_EVENTS = HARDCORE_BIG_EVENTS;
}
