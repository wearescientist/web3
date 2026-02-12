# Meme Max v1.1.25 (Fix) 部署包

**版本号**: v1.1.25-fix  
**生成时间**: 2026-02-12  
**修复内容**: 决策解释匹配逻辑修正  

---

## 需要上传的文件清单 (24个)

### 核心文件 (必须上传) - 6个
| 文件名 | 说明 | 大小 |
|:---|:---|---:|
| `index.html` | 主页面 | 85.46 KB |
| `game.js` | 主游戏逻辑 | 272.56 KB |
| `hardcore-engine.js` | **硬核模式引擎** (本次修复) | 17.54 KB |
| `hardcore-mode.js` | 硬核模式配置 | 19.07 KB |
| `hardcore-data.js` | 硬核模式数据 | 21.96 KB |
| `events.js` | 事件系统 | 34.75 KB |

### 聊天系统 - 3个
| 文件名 | 说明 | 大小 |
|:---|:---|---:|
| `chat-celebrities.js` | KOL聊天系统 | 29.59 KB |
| `chat-personas.js` | 角色人设 | 33.85 KB |
| `chat-player-events.js` | 玩家事件 | 4.84 KB |

### 决策数据库 - 9个
| 文件名 | 说明 | 大小 |
|:---|:---|---:|
| `hardcore-new-decisions.js` | 800个新格式决策 | 1626.15 KB |
| `hardcore-global-decisions.js` | 全局决策 | 124.52 KB |
| `hardcore-invest-decisions.js` | 投资决策 | 38.66 KB |
| `hardcore-job-decisions.js` | 工作决策 | 106.57 KB |
| `hardcore-kol-decisions.js` | KOL决策 | 110.22 KB |
| `hardcore-trading-decisions.js` | 交易决策 | 112.20 KB |
| `hardcore-staking-decisions.js` | 质押决策 | 13.70 KB |
| `hardcore-decisions-launch.js` | 启动决策 | 109 B |
| `hardcore-small-events-extended.js` | 小事件扩展 | 17.12 KB |

### 其他文件 - 6个
| 文件名 | 说明 | 大小 |
|:---|:---|---:|
| `leaderboard.js` | 排行榜系统 | 16.34 KB |
| `web3auth.js` | Web3认证 | 11.42 KB |
| `poster-preview.html` | 海报预览 | 27.99 KB |
| `README.md` | 项目说明 | 1.93 KB |
| `VERSION.md` | 版本记录 | 5.42 KB |
| `CHANGELOG.md` | 更新日志 | 5.84 KB |

---

## 本次修复详情

### 修复文件
**`hardcore-engine.js`** - `extractChoiceExplanation` 函数

### 问题描述
决策结算时显示的解释与玩家选择的选项不匹配：
- 选择"继续等待"（选项2，次优），显示"追热点"（选项3，错误）的解释

### 根本原因
决策解释格式为 `【选项文字-状态】`，例如：
```
【分批建仓BTC-正确】...
【继续等待-次优】...
【追小币种-错误】...
```

之前的代码尝试匹配 `【选项X-】` 格式，但实际数据中没有"选项1/2/3/4"编号。

### 修复方案
改为**直接索引映射**：
```javascript
// 解释段落顺序与选项顺序一致
paragraphs[choiceIndex] // 选项1→段落0，选项2→段落1，以此类推
```

---

## 部署步骤

1. **上传所有24个文件**到服务器根目录
2. **确保文件编码为UTF-8**（特别是.js文件）
3. **强制刷新浏览器缓存**（Ctrl+Shift+R）
4. **测试验证**：
   - 启动一局硬核模式
   - 完成任意决策
   - 检查结算界面显示的解释是否与所选选项一致

---

## 版本历史
- v1.1.22 (2026-02-11): 硬核模式基础版本
- v1.1.25 (2026-02-12): 800决策变体 + 45秒时间调整
- **v1.1.25-fix (2026-02-12)**: 决策解释匹配逻辑修正
