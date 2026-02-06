# 币圈生涯模拟器：从韭菜到链上大佬 - MemeMax Edition

## 中文简介
一个纯前端的币圈人生模拟器。玩家设置初始属性后进入 5 年模拟，通过事件、市场阶段与路径系统积累（或损失）资产、粉丝与经验，并解锁不同结局与成就。

## 主要特性
- 纯静态页面，无需构建工具
- 多路径玩法（KOL、打工、炒币、发币、投项目、质押、空投）
- 市场相位与随机事件驱动的长期模拟
- 成就系统、结局系统与历史记录
- 支持倍率调整、暂停与上一局回顾

## 本地运行
- 直接打开 `index.html`
- 或启动本地服务：`python3 -m http.server 8080`

## 目录结构
- `index.html`：页面结构与样式
- `game.js`：核心逻辑、结局与模拟流程
- `events.js`：事件池与币种配置

## 开发说明
- UI 样式与布局集中在 `index.html`
- 玩法与数值调优在 `game.js` 与 `events.js` 中完成

## 许可证
未声明

---

# Crypto Career Simulator: From Retail to On-Chain Whale - MemeMax Edition

## Overview
A pure front-end life simulation game for crypto. Configure your starting profile, then run a 5-year simulation driven by events, market phases, and path systems to gain (or lose) wealth, fans, and experience, unlocking endings and achievements.

## Key Features
- Static site only, no build tools required
- Multiple paths (KOL, job, trading, launch, investing, staking, airdrops)
- Market phases and random events for long-run simulation
- Achievements, endings, and run history
- Speed control, pause, and last-run review

## Run Locally
- Open `index.html` directly
- Or start a local server: `python3 -m http.server 8080`

## Structure
- `index.html`: layout and styles
- `game.js`: core logic, endings, simulation flow
- `events.js`: event pool and coin configs

## Development Notes
- UI and styles live in `index.html`
- Gameplay tuning lives in `game.js` and `events.js`

## License
Not specified
