/**
 * 硬核模式核心引擎
 * 季度大决策 + 月度小随机事件
 */

class HardcoreMode {
  constructor(gameState) {
    this.state = gameState;
    this.hardcoreState = {
      active: true,
      decisionCount: 0,
      correctCount: 0,
      lastDecisionResult: null, // 'correct' | 'incorrect' | null
      commonSenseScore: 50, // 0-100，影响随机事件概率
      pendingDecision: null,
      usedDecisionIds: new Set(),
      startTime: Date.now()
    };
    
    // 负资产状态跟踪
    this.negativeAssetMode = false;
  }
  
  /**
   * 启动硬核模式
   */
  start() {
    console.log('[HardcoreMode] Started');
    this.hardcoreState.active = true;
  }
  
  /**
   * 检查是否是决策月份（1、4、7、10月 = week 0, 3, 6, 9）
   */
  isDecisionMonth() {
    const decisionMonths = [0, 3, 6, 9];
    return decisionMonths.includes(this.state.week);
  }
  
  /**
   * 检查是否已经触发过本季度决策
   */
  hasTriggeredThisQuarter() {
    const quarterKey = `${this.state.year}_${Math.floor(this.state.week / 3)}`;
    return this.hardcoreState.usedDecisionIds.has(`quarter_${quarterKey}`);
  }
  
  /**
   * 触发季度大决策
   * @returns {Object|null} 决策对象或null
   */
  triggerDecision() {
    console.log('[HardcoreMode] triggerDecision() called, week:', this.state.week);
    
    if (!this.isDecisionMonth()) {
      console.log('[HardcoreMode] 不是决策月份');
      return null;
    }
    if (this.hasTriggeredThisQuarter()) {
      console.log('[HardcoreMode] 本季度已触发过');
      return null;
    }
    if (this.hardcoreState.pendingDecision) {
      console.log('[HardcoreMode] 有 pending decision');
      return this.hardcoreState.pendingDecision;
    }
    
    // 标记本季度已触发
    const quarterKey = `${this.state.year}_${Math.floor(this.state.week / 3)}`;
    this.hardcoreState.usedDecisionIds.add(`quarter_${quarterKey}`);
    
    // 获取可用决策池
    const decisions = this.getAvailableDecisions();
    console.log('[HardcoreMode] 可用决策数量:', decisions.length);
    
    if (decisions.length === 0) {
      console.log('[HardcoreMode] 没有可用决策！');
      return null;
    }
    
    // 随机选择一个决策
    const decision = decisions[Math.floor(Math.random() * decisions.length)];
    
    // 标记决策已使用
    this.hardcoreState.usedDecisionIds.add(decision.id);
    this.hardcoreState.pendingDecision = decision;
    
    console.log('[HardcoreMode] Decision triggered:', decision.title);
    return decision;
  }
  
  /**
   * 获取可用决策池（90%全局 + 10%路径）
   */
  getAvailableDecisions() {
    const globalDecisions = [];
    const pathDecisions = [];
    
    console.log('[HardcoreMode] 当前路径:', this.state.mainPath);
    
    // 收集新格式决策 (v2.0)
    if (typeof HARDCORE_NEW_DECISIONS !== 'undefined') {
      HARDCORE_NEW_DECISIONS.forEach(d => {
        if (!this.hardcoreState.usedDecisionIds.has(d.id)) {
          globalDecisions.push({ ...d, source: 'new', format: 'v2' });
        }
      });
    }
    
    // 收集旧格式全局决策 (v1.x)
    if (typeof HARDCORE_GLOBAL_DECISIONS !== 'undefined') {
      HARDCORE_GLOBAL_DECISIONS.forEach(d => {
        if (!this.hardcoreState.usedDecisionIds.has(d.id)) {
          globalDecisions.push({ ...d, source: 'global', format: 'v1' });
        }
      });
    }
    
    // 收集路径专属决策（限制为10%）
    const path = this.state.mainPath;
    if (path && typeof HARDCORE_PATH_DECISIONS !== 'undefined') {
      const pathPool = HARDCORE_PATH_DECISIONS[path];
      if (pathPool) {
        pathPool.forEach(d => {
          if (!this.hardcoreState.usedDecisionIds.has(d.id)) {
            pathDecisions.push({ ...d, source: 'path', format: 'v1' });
          }
        });
      }
    }
    
    // 按比例取样：路径决策10%，全局90%
    const shuffle = arr => arr.sort(() => Math.random() - 0.5);
    const shuffledGlobal = shuffle([...globalDecisions]);
    const shuffledPath = shuffle([...pathDecisions]);
    
    // 计算实际取样数量，保持90:10比例
    const totalAvailable = shuffledGlobal.length + shuffledPath.length;
    const targetPoolSize = Math.min(totalAvailable, 100); // 目标池最大100个
    
    const pathCount = Math.min(shuffledPath.length, Math.floor(targetPoolSize * 0.1));
    const globalCount = Math.min(shuffledGlobal.length, targetPoolSize - pathCount);
    
    const selectedGlobal = shuffledGlobal.slice(0, globalCount);
    const selectedPath = shuffledPath.slice(0, pathCount);
    
    const available = [...selectedGlobal, ...selectedPath];
    
    console.log(`[HardcoreMode] 决策池: 全局${selectedGlobal.length} + 路径${selectedPath.length} = ${available.length}`);
    return available;
  }
  
  /**
   * 解析决策选择
   * @param {number} choiceIndex - 选择的索引
   */
  resolveDecision(choiceIndex) {
    const decision = this.hardcoreState.pendingDecision;
    if (!decision) return null;
    
    const choice = decision.choices[choiceIndex];
    if (!choice) return null;
    
    // 更新统计
    this.hardcoreState.decisionCount++;
    const isCorrect = choice.isCorrect;
    if (isCorrect) {
      this.hardcoreState.correctCount++;
      this.hardcoreState.lastDecisionResult = 'correct';
      this.hardcoreState.commonSenseScore = Math.min(100, this.hardcoreState.commonSenseScore + 10);
    } else {
      this.hardcoreState.lastDecisionResult = 'incorrect';
      this.hardcoreState.commonSenseScore = Math.max(0, this.hardcoreState.commonSenseScore - 15);
    }
    
    // 计算效果（支持新旧两种格式）
    const effect = this.calculateDecisionEffect(decision, choice, isCorrect);
    
    // 清空待处理决策
    this.hardcoreState.pendingDecision = null;
    
    return {
      decision,
      choice,
      isCorrect,
      effect,
      explanation: decision.explanation,
      commonSenseScore: this.hardcoreState.commonSenseScore
    };
  }
  
  /**
   * 计算决策效果（支持新旧两种格式）
   * @param {Object} decision - 决策对象
   * @param {Object} choice - 选择的选项
   * @param {boolean} isCorrect - 是否正确
   */
  calculateDecisionEffect(decision, choice, isCorrect) {
    const wealth = this.state.wealth || 0;
    const isNegative = wealth < 0;
    
    // 判断是新格式还是旧格式
    const isNewFormat = decision.baseProfitPct !== undefined;
    
    let effect = {};
    
    if (isNewFormat) {
      // ===== 新格式计算 (v2.0) =====
      const quality = choice.quality || 1.0;
      const baseMultiplier = isCorrect ? decision.baseProfitPct : decision.baseLossPct;
      
      if (isNegative) {
        // 负资产特殊处理
        const baseAmount = 1000 + Math.abs(wealth);
        
        if (isCorrect) {
          // 正确决策：收益系数降低50%
          const adjustedMultiplier = baseMultiplier * 0.5 * quality;
          effect.absoluteChange = baseAmount * adjustedMultiplier;
          effect.preview = `+${(adjustedMultiplier * 100).toFixed(0)}% (${effect.absoluteChange.toFixed(0)} U)`;
        } else {
          // 错误决策：亏损系数增加20%
          const adjustedMultiplier = Math.abs(baseMultiplier) * 1.2 * quality;
          effect.absoluteChange = -baseAmount * adjustedMultiplier;
          effect.preview = `-${(adjustedMultiplier * 100).toFixed(0)}% (${effect.absoluteChange.toFixed(0)} U)`;
        }
      } else {
        // 正常资产
        const adjustedMultiplier = baseMultiplier * quality;
        effect.absoluteChange = wealth * adjustedMultiplier;
        
        if (isCorrect) {
          effect.preview = `+${(adjustedMultiplier * 100).toFixed(0)}% (${effect.absoluteChange.toFixed(0)} U)`;
        } else {
          effect.preview = `${(adjustedMultiplier * 100).toFixed(0)}% (${effect.absoluteChange.toFixed(0)} U)`;
        }
      }
    } else {
      // ===== 旧格式计算 (v1.x) - 保持兼容 =====
      const baseEffect = choice.effect || {};
      effect = { ...baseEffect };
      
      if (effect.wealthPct !== undefined) {
        let multiplier = effect.wealthPct;
        
        if (isNegative) {
          const baseAmount = 1000 + Math.abs(wealth);
          
          if (isCorrect) {
            const reducedMultiplier = multiplier * 0.5;
            effect.absoluteChange = baseAmount * reducedMultiplier;
            effect.preview = `+${(reducedMultiplier * 100).toFixed(0)}% (${effect.absoluteChange.toFixed(0)} U)`;
          } else {
            const increasedMultiplier = multiplier * 1.2;
            effect.absoluteChange = -baseAmount * Math.abs(increasedMultiplier);
            effect.preview = `${(increasedMultiplier * 100).toFixed(0)}% (${effect.absoluteChange.toFixed(0)} U)`;
          }
        } else {
          effect.absoluteChange = wealth * multiplier;
          if (isCorrect) {
            effect.preview = `+${(multiplier * 100).toFixed(0)}% (${effect.absoluteChange.toFixed(0)} U)`;
          } else {
            effect.preview = `${(multiplier * 100).toFixed(0)}% (${effect.absoluteChange.toFixed(0)} U)`;
          }
        }
      }
    }
    
    return effect;
  }
  
  /**
   * 触发月度小随机事件
   * 根据上一个决策结果决定正负事件概率
   * 使用 HARDCORE_SMALL_EVENTS 而非 EVENT_POOL，避免触发 mixed 类型事件
   */
  triggerSmallEvent() {
    // 决策月份不触发小事件
    if (this.isDecisionMonth()) return null;
    
    // 使用 HARDCORE_SMALL_EVENTS 替代 EVENT_POOL
    const smallEvents = typeof HARDCORE_SMALL_EVENTS !== 'undefined' ? 
      HARDCORE_SMALL_EVENTS : null;
    
    if (!smallEvents) {
      console.warn('[HardcoreMode] HARDCORE_SMALL_EVENTS not available');
      return null;
    }
    
    const score = this.hardcoreState.commonSenseScore;
    const lastResult = this.hardcoreState.lastDecisionResult;
    
    // 基础概率
    let positiveChance = 0.35;
    let negativeChance = 0.35;
    let neutralChance = 0.3;
    
    // 根据常识分数调整
    if (score >= 70) {
      positiveChance = 0.5;
      negativeChance = 0.2;
      neutralChance = 0.3;
    } else if (score <= 30) {
      positiveChance = 0.2;
      negativeChance = 0.5;
      neutralChance = 0.3;
    }
    
    // 根据上一个决策结果调整
    if (lastResult === 'correct') {
      positiveChance += 0.15;
      negativeChance -= 0.1;
    } else if (lastResult === 'incorrect') {
      positiveChance -= 0.1;
      negativeChance += 0.15;
    }
    
    // 归一化
    const total = positiveChance + negativeChance + neutralChance;
    positiveChance /= total;
    negativeChance /= total;
    neutralChance /= total;
    
    // 选择事件类型和具体事件
    const roll = Math.random();
    let eventPool;
    let eventType;
    
    if (roll < positiveChance) {
      eventPool = smallEvents.positive;
      eventType = 'positive';
    } else if (roll < positiveChance + negativeChance) {
      eventPool = smallEvents.negative;
      eventType = 'negative';
    } else {
      eventPool = smallEvents.neutral;
      eventType = 'neutral';
    }
    
    if (!eventPool || eventPool.length === 0) {
      return null;
    }
    
    const selectedEvent = eventPool[Math.floor(Math.random() * eventPool.length)];
    
    // 计算事件效果
    const effect = this.calculateSmallEventEffect(selectedEvent);
    
    return {
      ...selectedEvent,
      effect,
      type: eventType
    };
  }
  
  /**
   * 计算小随机事件效果（统一系数计算）
   * @param {Object} baseEffect - 基础效果
   */
  calculateSmallEventEffect(event) {
    const wealth = this.state.wealth || 0;
    const isNegative = wealth < 0;
    const effect = { ...event };
    
    // 从 event.effect 中提取系数（HARDCORE_SMALL_EVENTS 的结构是 { effect: { wealthPct: x } }）
    const eventEffect = event.effect || {};
    let multiplier = eventEffect.wealthPct !== undefined ? eventEffect.wealthPct : eventEffect.capitalPct;
    
    if (multiplier !== undefined) {
      if (isNegative) {
        // 负资产：使用基础金额 (1000 + |财富|) * 系数
        const baseAmount = 1000 + Math.abs(wealth);
        effect.absoluteChange = baseAmount * multiplier;
        
        // 限制负资产的极端波动
        const maxChange = baseAmount * 2;
        effect.absoluteChange = Math.max(-maxChange, Math.min(maxChange, effect.absoluteChange));
      } else {
        // 正资产：直接使用财富 * 系数，但设置最小阈值避免收益过低
        // 保底基数 500U，确保即使财富为 0 也有收益
        const baseAmount = Math.max(wealth, 500);
        const calculatedChange = baseAmount * multiplier;
        // 最小收益：正收益至少10U，负收益至少-10U
        if (calculatedChange > 0 && calculatedChange < 10) {
          effect.absoluteChange = 10;
        } else if (calculatedChange < 0 && calculatedChange > -10) {
          effect.absoluteChange = -10;
        } else {
          effect.absoluteChange = calculatedChange;
        }
      }
      
      const sign = effect.absoluteChange >= 0 ? '+' : '';
      effect.preview = `${sign}${effect.absoluteChange.toFixed(0)} U (${(multiplier * 100).toFixed(0)}%)`;
    } else if (eventEffect.wealthAbs !== undefined && Array.isArray(eventEffect.wealthAbs)) {
      // 使用固定金额范围 [min, max]
      const [min, max] = eventEffect.wealthAbs;
      effect.absoluteChange = Math.floor(min + Math.random() * (max - min));
      
      const sign = effect.absoluteChange >= 0 ? '+' : '';
      effect.preview = `${sign}${effect.absoluteChange.toFixed(0)} U (固定金额)`;
    }
    
    return effect;
  }
  
  /**
   * 获取当前状态信息
   */
  getStatus() {
    const accuracy = this.hardcoreState.decisionCount > 0 
      ? (this.hardcoreState.correctCount / this.hardcoreState.decisionCount * 100).toFixed(1)
      : 0;
      
    return {
      decisionCount: this.hardcoreState.decisionCount,
      correctCount: this.hardcoreState.correctCount,
      accuracy: accuracy + '%',
      commonSenseScore: this.hardcoreState.commonSenseScore,
      lastDecisionResult: this.hardcoreState.lastDecisionResult,
      nextDecisionMonth: this.getNextDecisionMonth()
    };
  }
  
  /**
   * 获取统计数据（用于排行榜）
   */
  getStats() {
    return {
      totalDecisions: this.hardcoreState.decisionCount,
      correctDecisions: this.hardcoreState.correctCount,
      score: this.hardcoreState.decisionCount > 0 ? (this.hardcoreState.correctCount / this.hardcoreState.decisionCount) : 0,
      streak: 0,
      history: []
    };
  }
  
  /**
   * 获取下次决策月份
   */
  getNextDecisionMonth() {
    const decisionMonths = [0, 3, 6, 9]; // 1,4,7,10月
    const currentWeek = this.state.week;
    
    for (const month of decisionMonths) {
      if (month > currentWeek) {
        return month + 1; // 转换为月份（1-based）
      }
    }
    
    // 今年没有了，返回明年1月
    return 1;
  }
  
  /**
   * 序列化状态（用于保存）
   */
  serialize() {
    return {
      ...this.hardcoreState,
      usedDecisionIds: Array.from(this.hardcoreState.usedDecisionIds)
    };
  }
  
  /**
   * 恢复状态
   */
  deserialize(data) {
    this.hardcoreState = {
      ...data,
      usedDecisionIds: new Set(data.usedDecisionIds || []),
      pendingDecision: null // 恢复时不保留待处理决策
    };
  }
}

// ==================== 导出 ====================
if (typeof window !== 'undefined') {
  window.HardcoreMode = HardcoreMode;
}
