# Meme Max v1.1.25 部署包

**版本号**: v1.1.25  
**生成时间**: 2026-02-12 15:19:25  
**状态**: 可部署

---

## 包含文件 (24个)

### 核心文件 (6个)
| 文件 | 说明 |
|:---|:---|
| `index.html` | 主页面 |
| `game.js` | 主游戏逻辑 |
| `hardcore-engine.js` | 硬核模式引擎 |
| `hardcore-mode.js` | 硬核模式配置 |
| `hardcore-data.js` | 硬核模式数据 |
| `events.js` | 事件系统 |

### 聊天系统 (3个)
| 文件 | 说明 |
|:---|:---|
| `chat-celebrities.js` | KOL聊天系统 |
| `chat-personas.js` | 角色人设 |
| `chat-player-events.js` | 玩家事件 |

### 决策文件 (9个)
| 文件 | 说明 |
|:---|:---|
| `hardcore-new-decisions.js` | 800个新格式决策 (主要) |
| `hardcore-global-decisions.js` | 全局决策 |
| `hardcore-invest-decisions.js` | 投资决策 |
| `hardcore-job-decisions.js` | 工作决策 |
| `hardcore-kol-decisions.js` | KOL决策 |
| `hardcore-trading-decisions.js` | 交易决策 |
| `hardcore-staking-decisions.js` | 质押决策 |
| `hardcore-decisions-launch.js` | 启动决策 |
| `hardcore-small-events-extended.js` | 小事件扩展 |

### 其他文件 (6个)
| 文件 | 说明 |
|:---|:---|
| `leaderboard.js` | 排行榜系统 |
| `web3auth.js` | Web3认证 |
| `poster-preview.html` | 海报预览 |
| `README.md` | 项目说明 |
| `VERSION.md` | 版本记录 |
| `CHANGELOG.md` | 更新日志 |

---

## 本版本主要更新

### 1. 决策库变体生成
- **800个决策**: 250种子场景 × 3变体 + 50保留版
- **6种变体规则**: 高估值短锁仓、低估值长锁仓、暴跌恐慌期、反弹犹豫期、基金经理约束、时间紧迫
- **编号体系**: V001-V750 (变体) + R001-R050 (保留)

### 2. 硬核模式优化
- **决策时间**: 30秒 → **45秒**
- **倒计时提示**: 最后10秒变红闪烁
- **结算说明**: 只显示选择选项的解释，隐藏其他3个选项和变体说明

### 3. 质量保证
- 全部800个决策通过质量检查
- 描述 > 80字符，解释 > 200字符
- 全部包含4个选项和详细分析
- ID唯一，无重复

---

## 部署步骤

1. 将所有文件上传到服务器目录
2. 确保所有JS文件为UTF-8编码
3. 测试硬核模式流程:
   - 启动游戏 → 选择"开始挑战" → 验证45秒倒计时
   - 完成决策 → 验证结算界面只显示单个选项解释

---

## 版本历史
- v1.1.22 (2026-02-11): 硬核模式基础版本
- v1.1.25 (2026-02-12): 决策库变体生成 + 时间调整 + 结算优化
