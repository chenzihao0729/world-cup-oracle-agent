# 世界杯推演 Agent

<p>
  <strong>Language:</strong>
  <a href="#中文">中文</a> |
  <a href="#english">English</a>
</p>

<a id="中文"></a>

一个面向世界杯赛程分析的静态网页应用。项目融合赛程、实时比分、半场比分、盘口、球队实力、近期状态、历史表现、明星球员、Kelly 因子、冷门风险、十二时辰和六爻八卦起局逻辑，用于输出胜平负、候选比分、半场比分、半全场胜平负和赛后复盘。

> 本项目仅用于数据分析、算法实验和娱乐参考，不构成投注建议。

## 功能

- 按北京时间展示世界杯赛程，支持后续赛程缓存。
- 今日可推演、未开始、进行中和已结束场次自动切换。
- 从 Football-Data 获取完整比分、半场比分和半全场结果；ESPN 作为备用数据源。
- 通过 Cloudflare Worker 代理 Football-Data，避免浏览器 CORS 限制并保护 API Key。
- 可接入 The Odds API 获取外部实时盘口，并使用缓存控制每月 credits 消耗。
- 结合球队实力、近期状态、历史表现、战术风格、明星球员、场地、天气、赛程密度和冷门风险进行分析。
- 加入十二时辰、六爻八卦、本卦、变卦、动爻、世应取象等推演步骤。
- 输出胜平负、两个候选比分、半场比分推演、半全场胜平负、置信度和风险提示。
- 保存推演结果，赛后自动回填真实赛果并复盘，使用复盘结果温和校准后续模型。
- 适配桌面和手机屏幕。

## 使用方式

这是一个静态前端项目，可以直接打开 `index.html` 使用。推荐用本地静态服务打开，避免浏览器对本地文件的限制：

```bash
python -m http.server 8766
```

然后访问：

```text
http://127.0.0.1:8766/
```

复制示例配置：

```text
config.example.js -> config.local.js
```

填写自己的 API 配置：

```js
window.ORACLE_CONFIG = {
  oddsApiKey: "your-the-odds-api-key",
  footballDataApiKey: "",
  footballDataProxyUrl: "https://your-worker.workers.dev/football-data/matches",
  oddsSportKey: "soccer_fifa_world_cup",
  oddsRegions: "us"
};
```

## Cloudflare Worker

项目包含 `worker/` 目录，用于代理 Football-Data：

```bash
cd worker
npm install
npx wrangler login
npx wrangler secret put FOOTBALL_DATA_API_KEY
npx wrangler deploy
```

部署完成后，把 Worker 地址填入 `config.local.js` 的 `footballDataProxyUrl`。

当前代理接口格式：

```text
https://your-worker.workers.dev/football-data/matches?dateFrom=2026-06-22&dateTo=2026-06-29
```

Football-Data 单次日期跨度不能超过 10 天，前端会自动拆分较长日期范围并合并结果。

## 文件结构

```text
.
├── index.html          # 页面入口
├── app.js              # 赛程、数据、推演、复盘和缓存逻辑
├── styles.css          # 页面样式与响应式布局
├── icon.ico            # 网页图标
├── config.example.js   # 示例配置
├── server.js           # 可选本地服务脚本
└── worker/             # Cloudflare Worker 数据代理
```

## 数据源说明

- 赛程和比分优先使用公开接口与本地缓存。
- 完整比分、半场比分和半全场结果优先使用 Football-Data。
- ESPN scoreboard 作为比分和赛程备用源。
- 盘口数据通过 The Odds API 获取；为节省额度，项目会使用缓存和降级因子。
- 天气、时区、赛程、比分或盘口接口失败时，页面会显示降级状态，并继续使用本地模型推演。

## 算法说明

推演模型由多路信号融合：

- 数据面：球队实力、排名、阵容深度、近期状态、历史表现。
- 战术面：阵型、节奏、攻防风格、明星球员影响、伤停影响。
- 外部面：球场、天气、旅途、休息天数、比赛时间。
- 盘口面：赔率、盘口波动、Kelly 值、市场热度。
- 六爻面：十二时辰、本卦、变卦、动爻、世应、用神和五行生克。
- 复盘面：根据赛后真实胜平负、比分、半场比分和半全场结果对模型进行温和校准。

模型输出是概率化和规则化的综合推演，不保证命中。

## License

MIT

---

<p>
  <strong>Language:</strong>
  <a href="#中文">中文</a> |
  <a href="#english">English</a>
</p>

<a id="english"></a>

# World Cup Oracle Agent

A static web app for World Cup match analysis and prediction experiments. It combines schedules, live scores, half-time scores, odds, team strength, recent form, historical performance, star-player factors, Kelly values, upset risk, Chinese earthly hours, and Liu Yao hexagram logic into one deduction workflow.

> This project is for analysis, experimentation, and entertainment only. It is not betting advice.

## Features

- World Cup schedule display in Beijing time.
- Automatic switching between upcoming, live, and completed matches.
- Full-time scores, half-time scores, and half/full-time results from Football-Data; ESPN is used as fallback.
- Cloudflare Worker proxy for Football-Data to avoid browser CORS limits and protect API keys.
- Optional real-time odds integration through The Odds API with cache-based credit control.
- Team strength, recent form, historical performance, tactics, star-player impact, venue, weather, schedule density, and upset-risk analysis.
- Liu Yao and Bagua deduction steps, including main hexagram, changed hexagram, moving line, and symbolic interpretation.
- Outputs win/draw/loss, two candidate scores, half-time score prediction, half/full-time prediction, confidence, and risk notes.
- Saves prediction records, verifies completed matches, and gently recalibrates the model from review results.
- Responsive layout for desktop and mobile screens.

## Usage

This is a static frontend project. A local static server is recommended:

```bash
python -m http.server 8766
```

Then open:

```text
http://127.0.0.1:8766/
```

Copy the example config:

```text
config.example.js -> config.local.js
```

Fill in your API configuration:

```js
window.ORACLE_CONFIG = {
  oddsApiKey: "your-the-odds-api-key",
  footballDataApiKey: "",
  footballDataProxyUrl: "https://your-worker.workers.dev/football-data/matches",
  oddsSportKey: "soccer_fifa_world_cup",
  oddsRegions: "us"
};
```

## Cloudflare Worker

The `worker/` directory contains the Football-Data proxy:

```bash
cd worker
npm install
npx wrangler login
npx wrangler secret put FOOTBALL_DATA_API_KEY
npx wrangler deploy
```

After deployment, put the Worker URL in `footballDataProxyUrl`.

Proxy endpoint format:

```text
https://your-worker.workers.dev/football-data/matches?dateFrom=2026-06-22&dateTo=2026-06-29
```

Football-Data limits a single query to 10 days. The frontend automatically splits longer ranges and merges the results.

## Project Structure

```text
.
├── index.html          # App entry
├── app.js              # Schedule, data, prediction, review, and cache logic
├── styles.css          # UI styles and responsive layout
├── icon.ico            # Favicon
├── config.example.js   # Example config
├── server.js           # Optional local server script
└── worker/             # Cloudflare Worker data proxy
```

## Data Sources

- Schedules and scores use public data sources and local cache.
- Full-time scores, half-time scores, and half/full-time results are primarily fetched from Football-Data.
- ESPN scoreboard is used as fallback for schedules and scores.
- Odds can be fetched through The Odds API; cache and fallback factors reduce credit usage.
- When live APIs fail, the UI shows fallback status and continues with local model factors.

## Model Notes

The prediction model combines several signal groups:

- Data layer: team strength, ranking, squad depth, form, and history.
- Tactical layer: formations, tempo, styles, star-player impact, and injuries.
- External layer: venue, weather, travel, rest days, and kickoff time.
- Odds layer: odds movement, Kelly values, and market heat.
- Liu Yao layer: earthly hour, main hexagram, changed hexagram, moving line, useful god, and five-element relations.
- Review layer: completed match results, scores, half-time scores, and half/full-time outcomes are used to gently recalibrate future predictions.

The output is an experimental analytical result, not a guaranteed forecast.

## License

MIT
