# World Cup Oracle Agent

世界杯赛程、盘口数据、球队分析与六爻推演结合的静态网页应用。

项目面向 2026 世界杯赛程推演场景，将球队实力、近期状态、历史表现、盘口波动、Kelly 价值、冷门指数、比赛时间、比赛地时辰与六爻八卦起局融合，用于生成胜平负、候选比分、半全场倾向与赛后复盘。

## 功能

- 世界杯赛程展示，按北京时间适配
- 今日赛程与后续赛程浏览
- The Odds API 实时盘口数据接入
- 球队实力、近期状态、历史表现、外部因素对比
- 六爻八卦起局、本卦、变卦、动爻推演
- 胜平负、两个候选比分、半全场预测
- 推演结果记录与赛后复盘
- 移动端自适应页面

## 使用方式

这是一个纯前端静态项目，直接打开 `index.html` 即可运行。

如需使用实时盘口，请复制示例配置：

```text
config.example.js -> config.local.js
```

然后在 `config.local.js` 中填写自己的 The Odds API Key。

```js
window.ORACLE_CONFIG = {
  oddsApiKey: "your-the-odds-api-key",
  oddsSportKey: "soccer_fifa_world_cup",
  oddsRegions: "us"
};
```

## 文件结构

```text
.
├── index.html          # 页面入口
├── app.js              # 赛程、数据、推演和复盘逻辑
├── styles.css          # 页面样式与响应式布局
├── icon.ico            # 网页图标
├── config.example.js   # 示例配置
└── server.js           # 可选本地服务脚本
```

## 数据说明

- 赛程信息来自公开赛程资料，并统一换算为北京时间。
- 实时盘口通过 The Odds API 获取；未配置 Key 时使用本地缓存和内置降级因子。
- 推演结果是数据模型与传统六爻取象逻辑的算法化输出，仅用于分析、学习和娱乐参考。

## 注意事项

本项目不构成投注建议。足球比赛存在大量不确定因素，请理性看待任何预测结果。

## License

MIT
