const scheduleSource = {
  label: "赛程来源：FIFA 官方赛程页、CBS Sports、Roadtrips 公开赛程整理；时间统一换算为北京时间 UTC+8。",
  links: [
    ["FIFA", "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026"],
    ["CBS Sports", "https://www.cbssports.com/soccer/"],
    ["Roadtrips", "https://www.roadtrips.com/world-cup/2026-world-cup-packages/schedule/"]
  ],
  checkedAt: "2026-06-18"
};

const CHINA_TIME_ZONE = "Asia/Shanghai";

const baseMatches = [
  {
    id: "por-cod-20260618",
    stage: "小组赛",
    group: "K组",
    beijingTime: "2026-06-18T01:00:00+08:00",
    localTime: "2026-06-17T13:00:00-05:00",
    venue: {
      name: "休斯敦 NRG Stadium",
      city: "Houston",
      country: "United States",
      lat: 29.6847,
      lon: -95.4107,
      altitude: 15
    },
    home: {
      name: "葡萄牙",
      fifaRank: 6,
      strength: 86,
      form: 78,
      attack: 84,
      defense: 79,
      experience: 82,
      fatigue: 36
    },
    away: {
      name: "刚果民主共和国",
      fifaRank: 60,
      strength: 68,
      form: 70,
      attack: 67,
      defense: 69,
      experience: 61,
      fatigue: 42
    },
    espn: {
      home: "Portugal",
      away: "Congo DR"
    },
    historyBalance: 64,
    market: {
      opening: -1,
      current: -0.75,
      movement: -0.25,
      heat: 74
    },
    travel: {
      homeKm: 7750,
      awayKm: 12300,
      homeRestDays: 5,
      awayRestDays: 5
    },},
  {
    id: "eng-cro-20260618",
    stage: "小组赛",
    group: "L组",
    beijingTime: "2026-06-18T04:00:00+08:00",
    localTime: "2026-06-17T15:00:00-05:00",
    venue: {
      name: "达拉斯 AT&T Stadium",
      city: "Dallas",
      country: "United States",
      lat: 32.7473,
      lon: -97.0945,
      altitude: 184
    },
    home: {
      name: "英格兰",
      fifaRank: 4,
      strength: 84,
      form: 78,
      attack: 82,
      defense: 80,
      experience: 80,
      fatigue: 34
    },
    away: {
      name: "克罗地亚",
      fifaRank: 10,
      strength: 78,
      form: 73,
      attack: 74,
      defense: 76,
      experience: 88,
      fatigue: 41
    },
    espn: {
      home: "England",
      away: "Croatia"
    },
    historyBalance: 55,
    market: {
      opening: -0.5,
      current: -0.5,
      movement: 0,
      heat: 68
    },
    travel: {
      homeKm: 7600,
      awayKm: 9200,
      homeRestDays: 5,
      awayRestDays: 5
    },},
  {
    id: "gha-pan-20260618",
    stage: "小组赛",
    group: "L组",
    beijingTime: "2026-06-18T07:00:00+08:00",
    localTime: "2026-06-17T19:00:00-04:00",
    venue: {
      name: "多伦多 BMO Field",
      city: "Toronto",
      country: "Canada",
      lat: 43.6332,
      lon: -79.4186,
      altitude: 76
    },
    home: {
      name: "加纳",
      fifaRank: 73,
      strength: 73,
      form: 66,
      attack: 70,
      defense: 68,
      experience: 70,
      fatigue: 39
    },
    away: {
      name: "巴拿马",
      fifaRank: 35,
      strength: 67,
      form: 64,
      attack: 64,
      defense: 66,
      experience: 58,
      fatigue: 33
    },
    espn: {
      home: "Ghana",
      away: "Panama"
    },
    historyBalance: 52,
    market: {
      opening: -0.25,
      current: -0.25,
      movement: 0,
      heat: 57
    },
    travel: {
      homeKm: 8600,
      awayKm: 3900,
      homeRestDays: 4,
      awayRestDays: 5
    },},
  {
    id: "uzb-col-20260618",
    stage: "小组赛",
    group: "K组",
    beijingTime: "2026-06-18T10:00:00+08:00",
    localTime: "2026-06-17T20:00:00-06:00",
    venue: {
      name: "墨西哥城 Estadio Azteca",
      city: "Mexico City",
      country: "Mexico",
      lat: 19.3029,
      lon: -99.1505,
      altitude: 2240
    },
    home: {
      name: "乌兹别克斯坦",
      fifaRank: 62,
      strength: 70,
      form: 69,
      attack: 68,
      defense: 70,
      experience: 54,
      fatigue: 48
    },
    away: {
      name: "哥伦比亚",
      fifaRank: 12,
      strength: 79,
      form: 76,
      attack: 78,
      defense: 75,
      experience: 78,
      fatigue: 37
    },
    espn: {
      home: "Uzbekistan",
      away: "Colombia"
    },
    historyBalance: 42,
    market: {
      opening: 0.5,
      current: 0.5,
      movement: 0,
      heat: 64
    },
    travel: {
      homeKm: 13900,
      awayKm: 3200,
      homeRestDays: 4,
      awayRestDays: 5
    },},
  {
    id: "cze-rsa-20260619",
    stage: "小组赛",
    group: "A组",
    beijingTime: "2026-06-19T00:00:00+08:00",
    localTime: "2026-06-18T12:00:00-04:00",
    venue: { name: "亚特兰大 Mercedes-Benz Stadium", city: "Atlanta", country: "United States", lat: 33.7554, lon: -84.4008, altitude: 320 },
    home: { name: "捷克", fifaRank: 36, strength: 74, form: 72, attack: 72, defense: 73, experience: 72, fatigue: 35 },
    away: { name: "南非", fifaRank: 59, strength: 68, form: 69, attack: 67, defense: 68, experience: 64, fatigue: 39 },
    espn: { home: "Czechia", away: "South Africa" },
    historyBalance: 57,
    market: { opening: -0.5, current: -0.5, movement: 0, heat: 61 },
    travel: { homeKm: 7900, awayKm: 13500, homeRestDays: 5, awayRestDays: 5 },},
  {
    id: "sui-bih-20260619",
    stage: "小组赛",
    group: "B组",
    beijingTime: "2026-06-19T03:00:00+08:00",
    localTime: "2026-06-18T12:00:00-07:00",
    venue: { name: "洛杉矶 SoFi Stadium", city: "Inglewood", country: "United States", lat: 33.9535, lon: -118.3392, altitude: 38 },
    home: { name: "瑞士", fifaRank: 19, strength: 78, form: 73, attack: 74, defense: 78, experience: 81, fatigue: 34 },
    away: { name: "波黑", fifaRank: 70, strength: 67, form: 66, attack: 67, defense: 66, experience: 63, fatigue: 38 },
    espn: { home: "Switzerland", away: "Bosnia-Herzegovina" },
    historyBalance: 62,
    market: { opening: -0.75, current: -0.75, movement: 0, heat: 66 },
    travel: { homeKm: 9500, awayKm: 10400, homeRestDays: 5, awayRestDays: 5 },},
  {
    id: "can-qat-20260619",
    stage: "小组赛",
    group: "B组",
    beijingTime: "2026-06-19T06:00:00+08:00",
    localTime: "2026-06-18T15:00:00-07:00",
    venue: { name: "温哥华 BC Place", city: "Vancouver", country: "Canada", lat: 49.2768, lon: -123.1119, altitude: 9 },
    home: { name: "加拿大", fifaRank: 31, strength: 75, form: 72, attack: 74, defense: 71, experience: 68, fatigue: 30 },
    away: { name: "卡塔尔", fifaRank: 53, strength: 69, form: 68, attack: 68, defense: 68, experience: 70, fatigue: 44 },
    espn: { home: "Canada", away: "Qatar" },
    historyBalance: 58,
    market: { opening: -0.5, current: -0.5, movement: 0, heat: 70 },
    travel: { homeKm: 0, awayKm: 11700, homeRestDays: 5, awayRestDays: 4 },},
  {
    id: "mex-kor-20260619",
    stage: "小组赛",
    group: "A组",
    beijingTime: "2026-06-19T09:00:00+08:00",
    localTime: "2026-06-18T19:00:00-06:00",
    venue: { name: "墨西哥城 Estadio Azteca", city: "Mexico City", country: "Mexico", lat: 19.3029, lon: -99.1505, altitude: 2240 },
    home: { name: "墨西哥", fifaRank: 15, strength: 79, form: 74, attack: 76, defense: 76, experience: 84, fatigue: 28 },
    away: { name: "韩国", fifaRank: 23, strength: 76, form: 73, attack: 75, defense: 73, experience: 77, fatigue: 43 },
    espn: { home: "Mexico", away: "South Korea" },
    historyBalance: 56,
    market: { opening: -0.25, current: -0.25, movement: 0, heat: 78 },
    travel: { homeKm: 0, awayKm: 12000, homeRestDays: 5, awayRestDays: 5 },},
  {
    id: "usa-aus-20260620",
    stage: "小组赛",
    group: "D组",
    beijingTime: "2026-06-20T03:00:00+08:00",
    localTime: "2026-06-19T12:00:00-07:00",
    venue: { name: "西雅图 Lumen Field", city: "Seattle", country: "United States", lat: 47.5952, lon: -122.3316, altitude: 56 },
    home: { name: "美国", fifaRank: 16, strength: 78, form: 73, attack: 76, defense: 74, experience: 76, fatigue: 29 },
    away: { name: "澳大利亚", fifaRank: 24, strength: 74, form: 71, attack: 71, defense: 74, experience: 75, fatigue: 47 },
    espn: { home: "United States", away: "Australia" },
    historyBalance: 57,
    market: { opening: -0.5, current: -0.5, movement: 0, heat: 76 },
    travel: { homeKm: 0, awayKm: 12400, homeRestDays: 5, awayRestDays: 4 },},
  {
    id: "sco-mar-20260620",
    stage: "小组赛",
    group: "C组",
    beijingTime: "2026-06-20T06:00:00+08:00",
    localTime: "2026-06-19T18:00:00-04:00",
    venue: { name: "费城 Lincoln Financial Field", city: "Philadelphia", country: "United States", lat: 39.9008, lon: -75.1675, altitude: 12 },
    home: { name: "苏格兰", fifaRank: 39, strength: 72, form: 70, attack: 69, defense: 73, experience: 72, fatigue: 37 },
    away: { name: "摩洛哥", fifaRank: 14, strength: 79, form: 76, attack: 77, defense: 78, experience: 78, fatigue: 35 },
    espn: { home: "Scotland", away: "Morocco" },
    historyBalance: 45,
    market: { opening: 0.25, current: 0.25, movement: 0, heat: 62 },
    travel: { homeKm: 5400, awayKm: 6100, homeRestDays: 4, awayRestDays: 5 },},
  {
    id: "bra-hai-20260620",
    stage: "小组赛",
    group: "C组",
    beijingTime: "2026-06-20T08:30:00+08:00",
    localTime: "2026-06-19T20:30:00-04:00",
    venue: { name: "迈阿密 Hard Rock Stadium", city: "Miami", country: "United States", lat: 25.958, lon: -80.2389, altitude: 2 },
    home: { name: "巴西", fifaRank: 5, strength: 87, form: 76, attack: 86, defense: 78, experience: 86, fatigue: 36 },
    away: { name: "海地", fifaRank: 83, strength: 63, form: 61, attack: 61, defense: 63, experience: 55, fatigue: 34 },
    espn: { home: "Brazil", away: "Haiti" },
    historyBalance: 70,
    market: { opening: -1.5, current: -1.5, movement: 0, heat: 82 },
    travel: { homeKm: 6500, awayKm: 1150, homeRestDays: 5, awayRestDays: 5 },},
  {
    id: "tur-par-20260620",
    stage: "小组赛",
    group: "D组",
    beijingTime: "2026-06-20T11:00:00+08:00",
    localTime: "2026-06-19T23:00:00-04:00",
    venue: { name: "纽约/新泽西 MetLife Stadium", city: "East Rutherford", country: "United States", lat: 40.8135, lon: -74.0745, altitude: 2 },
    home: { name: "土耳其", fifaRank: 27, strength: 75, form: 72, attack: 75, defense: 70, experience: 74, fatigue: 38 },
    away: { name: "巴拉圭", fifaRank: 48, strength: 71, form: 68, attack: 68, defense: 72, experience: 73, fatigue: 36 },
    espn: { home: "Türkiye", away: "Paraguay" },
    historyBalance: 54,
    market: { opening: -0.25, current: -0.25, movement: 0, heat: 59 },
    travel: { homeKm: 8200, awayKm: 7600, homeRestDays: 4, awayRestDays: 4 },},
  {
    id: "ned-swe-20260621",
    stage: "小组赛",
    group: "E组",
    beijingTime: "2026-06-21T01:00:00+08:00",
    localTime: "2026-06-20T13:00:00-04:00",
    venue: { name: "波士顿 Gillette Stadium", city: "Foxborough", country: "United States", lat: 42.0909, lon: -71.2643, altitude: 88 },
    home: { name: "荷兰", fifaRank: 7, strength: 83, form: 76, attack: 81, defense: 79, experience: 84, fatigue: 35 },
    away: { name: "瑞典", fifaRank: 28, strength: 74, form: 70, attack: 72, defense: 74, experience: 76, fatigue: 38 },
    espn: { home: "Netherlands", away: "Sweden" },
    historyBalance: 60,
    market: { opening: -0.75, current: -0.75, movement: 0, heat: 72 },
    travel: { homeKm: 5600, awayKm: 6000, homeRestDays: 5, awayRestDays: 5 },},
  {
    id: "ger-civ-20260621",
    stage: "小组赛",
    group: "E组",
    beijingTime: "2026-06-21T04:00:00+08:00",
    localTime: "2026-06-20T15:00:00-05:00",
    venue: { name: "休斯敦 NRG Stadium", city: "Houston", country: "United States", lat: 29.6847, lon: -95.4107, altitude: 15 },
    home: { name: "德国", fifaRank: 9, strength: 82, form: 75, attack: 80, defense: 78, experience: 86, fatigue: 36 },
    away: { name: "科特迪瓦", fifaRank: 41, strength: 72, form: 71, attack: 73, defense: 70, experience: 70, fatigue: 39 },
    espn: { home: "Germany", away: "Ivory Coast" },
    historyBalance: 61,
    market: { opening: -0.75, current: -0.75, movement: 0, heat: 74 },
    travel: { homeKm: 8500, awayKm: 11200, homeRestDays: 5, awayRestDays: 4 },},
  {
    id: "ecu-cur-20260621",
    stage: "小组赛",
    group: "F组",
    beijingTime: "2026-06-21T08:00:00+08:00",
    localTime: "2026-06-20T18:00:00-06:00",
    venue: { name: "蒙特雷 Estadio BBVA", city: "Monterrey", country: "Mexico", lat: 25.6682, lon: -100.2447, altitude: 540 },
    home: { name: "厄瓜多尔", fifaRank: 32, strength: 76, form: 73, attack: 74, defense: 75, experience: 72, fatigue: 34 },
    away: { name: "库拉索", fifaRank: 88, strength: 62, form: 64, attack: 61, defense: 63, experience: 54, fatigue: 41 },
    espn: { home: "Ecuador", away: "Curaçao" },
    historyBalance: 66,
    market: { opening: -1, current: -1, movement: 0, heat: 71 },
    travel: { homeKm: 3600, awayKm: 3400, homeRestDays: 5, awayRestDays: 4 },},
  {
    id: "tun-jpn-20260621",
    stage: "小组赛",
    group: "F组",
    beijingTime: "2026-06-21T12:00:00+08:00",
    localTime: "2026-06-21T00:00:00-04:00",
    venue: { name: "迈阿密 Hard Rock Stadium", city: "Miami", country: "United States", lat: 25.958, lon: -80.2389, altitude: 2 },
    home: { name: "突尼斯", fifaRank: 46, strength: 70, form: 68, attack: 67, defense: 72, experience: 71, fatigue: 37 },
    away: { name: "日本", fifaRank: 18, strength: 78, form: 76, attack: 77, defense: 75, experience: 76, fatigue: 36 },
    espn: { home: "Tunisia", away: "Japan" },
    historyBalance: 43,
    market: { opening: 0.25, current: 0.25, movement: 0, heat: 66 },
    travel: { homeKm: 8600, awayKm: 12100, homeRestDays: 4, awayRestDays: 5 },},
  {
    id: "esp-ksa-20260622",
    stage: "小组赛",
    group: "G组",
    beijingTime: "2026-06-22T00:00:00+08:00",
    localTime: "2026-06-21T12:00:00-04:00",
    venue: { name: "纽约/新泽西 MetLife Stadium", city: "East Rutherford", country: "United States", lat: 40.8135, lon: -74.0745, altitude: 2 },
    home: { name: "西班牙", fifaRank: 3, strength: 86, form: 79, attack: 83, defense: 81, experience: 85, fatigue: 34 },
    away: { name: "沙特阿拉伯", fifaRank: 58, strength: 67, form: 66, attack: 66, defense: 67, experience: 68, fatigue: 42 },
    espn: { home: "Spain", away: "Saudi Arabia" },
    historyBalance: 68,
    market: { opening: -1.25, current: -1.25, movement: 0, heat: 80 },
    travel: { homeKm: 5800, awayKm: 10500, homeRestDays: 5, awayRestDays: 4 },},
  {
    id: "bel-irn-20260622",
    stage: "小组赛",
    group: "G组",
    beijingTime: "2026-06-22T03:00:00+08:00",
    localTime: "2026-06-21T15:00:00-04:00",
    venue: { name: "费城 Lincoln Financial Field", city: "Philadelphia", country: "United States", lat: 39.9008, lon: -75.1675, altitude: 12 },
    home: { name: "比利时", fifaRank: 8, strength: 81, form: 74, attack: 80, defense: 74, experience: 82, fatigue: 37 },
    away: { name: "伊朗", fifaRank: 20, strength: 75, form: 72, attack: 72, defense: 76, experience: 78, fatigue: 39 },
    espn: { home: "Belgium", away: "Iran" },
    historyBalance: 55,
    market: { opening: -0.5, current: -0.5, movement: 0, heat: 68 },
    travel: { homeKm: 6100, awayKm: 9900, homeRestDays: 5, awayRestDays: 5 },},
  {
    id: "uru-cpv-20260622",
    stage: "小组赛",
    group: "H组",
    beijingTime: "2026-06-22T06:00:00+08:00",
    localTime: "2026-06-21T17:00:00-05:00",
    venue: { name: "堪萨斯城 Arrowhead Stadium", city: "Kansas City", country: "United States", lat: 39.049, lon: -94.4839, altitude: 260 },
    home: { name: "乌拉圭", fifaRank: 11, strength: 80, form: 76, attack: 78, defense: 79, experience: 83, fatigue: 35 },
    away: { name: "佛得角", fifaRank: 65, strength: 66, form: 68, attack: 65, defense: 67, experience: 60, fatigue: 38 },
    espn: { home: "Uruguay", away: "Cape Verde" },
    historyBalance: 65,
    market: { opening: -1, current: -1, movement: 0, heat: 73 },
    travel: { homeKm: 9100, awayKm: 7100, homeRestDays: 5, awayRestDays: 4 },},
  {
    id: "nzl-egy-20260622",
    stage: "小组赛",
    group: "H组",
    beijingTime: "2026-06-22T09:00:00+08:00",
    localTime: "2026-06-21T18:00:00-07:00",
    venue: { name: "旧金山湾区 Levi's Stadium", city: "Santa Clara", country: "United States", lat: 37.403, lon: -121.97, altitude: 2 },
    home: { name: "新西兰", fifaRank: 94, strength: 63, form: 64, attack: 62, defense: 65, experience: 58, fatigue: 45 },
    away: { name: "埃及", fifaRank: 34, strength: 74, form: 71, attack: 73, defense: 72, experience: 77, fatigue: 39 },
    espn: { home: "New Zealand", away: "Egypt" },
    historyBalance: 41,
    market: { opening: 0.5, current: 0.5, movement: 0, heat: 62 },
    travel: { homeKm: 10500, awayKm: 11800, homeRestDays: 4, awayRestDays: 5 },},
  {
    id: "nor-sen-20260623",
    stage: "小组赛",
    group: "赛程",
    beijingTime: "2026-06-23T08:00:00+08:00",
    localTime: "2026-06-22T20:00:00-04:00",
    venue: { name: "多伦多 BMO Field", city: "Toronto", country: "Canada", lat: 43.6332, lon: -79.4186, altitude: 76 },
    home: { name: "挪威", fifaRank: 44, strength: 74, form: 71, attack: 76, defense: 70, experience: 72, fatigue: 38 },
    away: { name: "塞内加尔", fifaRank: 17, strength: 78, form: 73, attack: 75, defense: 76, experience: 77, fatigue: 37 },
    espn: { home: "Norway", away: "Senegal" },
    historyBalance: 48,
    market: { opening: 0, current: 0, movement: 0, heat: 57 },
    travel: { homeKm: 5900, awayKm: 7200, homeRestDays: 5, awayRestDays: 5 },},
  {
    id: "jor-alg-20260623",
    stage: "小组赛",
    group: "赛程",
    beijingTime: "2026-06-23T11:00:00+08:00",
    localTime: "2026-06-22T20:00:00-07:00",
    venue: { name: "洛杉矶 SoFi Stadium", city: "Los Angeles", country: "United States", lat: 33.9535, lon: -118.3392, altitude: 38 },
    home: { name: "约旦", fifaRank: 68, strength: 67, form: 68, attack: 66, defense: 68, experience: 64, fatigue: 40 },
    away: { name: "阿尔及利亚", fifaRank: 37, strength: 74, form: 71, attack: 73, defense: 72, experience: 76, fatigue: 38 },
    espn: { home: "Jordan", away: "Algeria" },
    historyBalance: 42,
    market: { opening: 0.5, current: 0.5, movement: 0, heat: 60 },
    travel: { homeKm: 11600, awayKm: 10000, homeRestDays: 4, awayRestDays: 5 },},
  {
    id: "por-uzb-20260624",
    stage: "小组赛",
    group: "赛程",
    beijingTime: "2026-06-24T01:00:00+08:00",
    localTime: "2026-06-23T12:00:00-05:00",
    venue: { name: "休斯敦 NRG Stadium", city: "Houston", country: "United States", lat: 29.6847, lon: -95.4107, altitude: 15 },
    home: { name: "葡萄牙", fifaRank: 6, strength: 86, form: 78, attack: 84, defense: 79, experience: 82, fatigue: 36 },
    away: { name: "乌兹别克斯坦", fifaRank: 57, strength: 69, form: 69, attack: 68, defense: 69, experience: 63, fatigue: 40 },
    espn: { home: "Portugal", away: "Uzbekistan" },
    historyBalance: 68,
    market: { opening: -1.25, current: -1.25, movement: 0, heat: 76 },
    travel: { homeKm: 7800, awayKm: 11200, homeRestDays: 5, awayRestDays: 4 },},
  {
    id: "eng-gha-20260624",
    stage: "小组赛",
    group: "赛程",
    beijingTime: "2026-06-24T04:00:00+08:00",
    localTime: "2026-06-23T16:00:00-04:00",
    venue: { name: "波士顿 Gillette Stadium", city: "Foxborough", country: "United States", lat: 42.0909, lon: -71.2643, altitude: 88 },
    home: { name: "英格兰", fifaRank: 4, strength: 84, form: 78, attack: 82, defense: 80, experience: 80, fatigue: 34 },
    away: { name: "加纳", fifaRank: 61, strength: 69, form: 68, attack: 69, defense: 68, experience: 70, fatigue: 40 },
    espn: { home: "England", away: "Ghana" },
    historyBalance: 66,
    market: { opening: -1, current: -1, movement: 0, heat: 74 },
    travel: { homeKm: 5200, awayKm: 7900, homeRestDays: 5, awayRestDays: 5 },},
  {
    id: "pan-cro-20260624",
    stage: "小组赛",
    group: "赛程",
    beijingTime: "2026-06-24T07:00:00+08:00",
    localTime: "2026-06-23T19:00:00-04:00",
    venue: { name: "多伦多 BMO Field", city: "Toronto", country: "Canada", lat: 43.6332, lon: -79.4186, altitude: 76 },
    home: { name: "巴拿马", fifaRank: 43, strength: 70, form: 69, attack: 68, defense: 70, experience: 68, fatigue: 39 },
    away: { name: "克罗地亚", fifaRank: 10, strength: 81, form: 74, attack: 78, defense: 79, experience: 86, fatigue: 37 },
    espn: { home: "Panama", away: "Croatia" },
    historyBalance: 38,
    market: { opening: 0.75, current: 0.75, movement: 0, heat: 67 },
    travel: { homeKm: 3900, awayKm: 7300, homeRestDays: 5, awayRestDays: 5 },},
  {
    id: "col-cod-20260624",
    stage: "小组赛",
    group: "赛程",
    beijingTime: "2026-06-24T10:00:00+08:00",
    localTime: "2026-06-23T20:00:00-06:00",
    venue: { name: "瓜达拉哈拉 Estadio Akron", city: "Guadalajara", country: "Mexico", lat: 20.6818, lon: -103.4628, altitude: 1566 },
    home: { name: "哥伦比亚", fifaRank: 14, strength: 79, form: 75, attack: 78, defense: 76, experience: 78, fatigue: 36 },
    away: { name: "刚果民主共和国", fifaRank: 60, strength: 68, form: 70, attack: 67, defense: 69, experience: 61, fatigue: 42 },
    espn: { home: "Colombia", away: "Congo DR" },
    historyBalance: 62,
    market: { opening: -0.75, current: -0.75, movement: 0, heat: 69 },
    travel: { homeKm: 3400, awayKm: 12800, homeRestDays: 5, awayRestDays: 4 },},
  {
    id: "bih-qat-20260625",
    stage: "小组赛",
    group: "赛程",
    beijingTime: "2026-06-25T03:00:00+08:00",
    localTime: "2026-06-24T12:00:00-07:00",
    venue: { name: "西雅图 Lumen Field", city: "Seattle", country: "United States", lat: 47.5952, lon: -122.3316, altitude: 56 },
    home: { name: "波黑", fifaRank: 72, strength: 68, form: 67, attack: 68, defense: 67, experience: 70, fatigue: 39 },
    away: { name: "卡塔尔", fifaRank: 53, strength: 69, form: 68, attack: 68, defense: 68, experience: 70, fatigue: 40 },
    espn: { home: "Bosnia-Herzegovina", away: "Qatar" },
    historyBalance: 49,
    market: { opening: 0, current: 0, movement: 0, heat: 56 },
    travel: { homeKm: 9000, awayKm: 11900, homeRestDays: 5, awayRestDays: 4 },},
  {
    id: "sui-can-20260625",
    stage: "小组赛",
    group: "赛程",
    beijingTime: "2026-06-25T03:00:00+08:00",
    localTime: "2026-06-24T12:00:00-07:00",
    venue: { name: "温哥华 BC Place", city: "Vancouver", country: "Canada", lat: 49.2767, lon: -123.1119, altitude: 15 },
    home: { name: "瑞士", fifaRank: 19, strength: 77, form: 72, attack: 74, defense: 77, experience: 79, fatigue: 37 },
    away: { name: "加拿大", fifaRank: 49, strength: 72, form: 70, attack: 72, defense: 70, experience: 68, fatigue: 36 },
    espn: { home: "Switzerland", away: "Canada" },
    historyBalance: 55,
    market: { opening: -0.25, current: -0.25, movement: 0, heat: 59 },
    travel: { homeKm: 8400, awayKm: 0, homeRestDays: 5, awayRestDays: 5 },},
  {
    id: "mar-hai-20260625",
    stage: "小组赛",
    group: "赛程",
    beijingTime: "2026-06-25T06:00:00+08:00",
    localTime: "2026-06-24T18:00:00-04:00",
    venue: { name: "亚特兰大 Mercedes-Benz Stadium", city: "Atlanta", country: "United States", lat: 33.7554, lon: -84.4008, altitude: 320 },
    home: { name: "摩洛哥", fifaRank: 12, strength: 80, form: 76, attack: 78, defense: 79, experience: 77, fatigue: 36 },
    away: { name: "海地", fifaRank: 86, strength: 63, form: 63, attack: 62, defense: 64, experience: 58, fatigue: 42 },
    espn: { home: "Morocco", away: "Haiti" },
    historyBalance: 67,
    market: { opening: -1, current: -1, movement: 0, heat: 72 },
    travel: { homeKm: 7200, awayKm: 2200, homeRestDays: 5, awayRestDays: 4 },},
  {
    id: "sco-bra-20260625",
    stage: "小组赛",
    group: "赛程",
    beijingTime: "2026-06-25T06:00:00+08:00",
    localTime: "2026-06-24T18:00:00-04:00",
    venue: { name: "迈阿密 Hard Rock Stadium", city: "Miami", country: "United States", lat: 25.958, lon: -80.2389, altitude: 2 },
    home: { name: "苏格兰", fifaRank: 39, strength: 73, form: 70, attack: 70, defense: 74, experience: 75, fatigue: 38 },
    away: { name: "巴西", fifaRank: 5, strength: 86, form: 79, attack: 86, defense: 80, experience: 84, fatigue: 35 },
    espn: { home: "Scotland", away: "Brazil" },
    historyBalance: 36,
    market: { opening: 1, current: 1, movement: 0, heat: 74 },
    travel: { homeKm: 6600, awayKm: 6500, homeRestDays: 5, awayRestDays: 5 },},
  {
    id: "cze-mex-20260625",
    stage: "小组赛",
    group: "赛程",
    beijingTime: "2026-06-25T09:00:00+08:00",
    localTime: "2026-06-24T19:00:00-06:00",
    venue: { name: "墨西哥城 Estadio Azteca", city: "Mexico City", country: "Mexico", lat: 19.3029, lon: -99.1505, altitude: 2240 },
    home: { name: "捷克", fifaRank: 36, strength: 74, form: 70, attack: 72, defense: 74, experience: 76, fatigue: 38 },
    away: { name: "墨西哥", fifaRank: 15, strength: 79, form: 74, attack: 77, defense: 76, experience: 80, fatigue: 35 },
    espn: { home: "Czechia", away: "Mexico" },
    historyBalance: 44,
    market: { opening: 0.25, current: 0.25, movement: 0, heat: 63 },
    travel: { homeKm: 9800, awayKm: 0, homeRestDays: 5, awayRestDays: 5 },},
  {
    id: "rsa-kor-20260625",
    stage: "小组赛",
    group: "赛程",
    beijingTime: "2026-06-25T09:00:00+08:00",
    localTime: "2026-06-24T19:00:00-06:00",
    venue: { name: "蒙特雷 Estadio BBVA", city: "Monterrey", country: "Mexico", lat: 25.6689, lon: -100.2448, altitude: 540 },
    home: { name: "南非", fifaRank: 59, strength: 68, form: 68, attack: 67, defense: 69, experience: 66, fatigue: 40 },
    away: { name: "韩国", fifaRank: 23, strength: 76, form: 73, attack: 75, defense: 74, experience: 78, fatigue: 37 },
    espn: { home: "South Africa", away: "South Korea" },
    historyBalance: 40,
    market: { opening: 0.5, current: 0.5, movement: 0, heat: 61 },
    travel: { homeKm: 14600, awayKm: 12200, homeRestDays: 4, awayRestDays: 5 },}
];

let matches = [...baseMatches];

const hexagrams = [
  { name: "乾为天", lines: ["yang", "yang", "yang", "yang", "yang", "yang"], bias: 8 },
  { name: "坤为地", lines: ["yin", "yin", "yin", "yin", "yin", "yin"], bias: -6 },
  { name: "雷火丰", lines: ["yang", "yin", "yang", "yang", "yin", "yin"], bias: 3 },
  { name: "地火明夷", lines: ["yang", "yin", "yang", "yin", "yin", "yin"], bias: -5 },
  { name: "风雷益", lines: ["yang", "yin", "yin", "yin", "yang", "yang"], bias: 5 },
  { name: "水山蹇", lines: ["yin", "yang", "yin", "yang", "yin", "yin"], bias: -3 },
  { name: "泽天夬", lines: ["yang", "yang", "yang", "yang", "yang", "yin"], bias: 4 },
  { name: "泽火革", lines: ["yang", "yin", "yang", "yang", "yang", "yin"], bias: 2 },
  { name: "水风井", lines: ["yin", "yang", "yang", "yin", "yang", "yin"], bias: 1 },
  { name: "火雷噬嗑", lines: ["yang", "yin", "yin", "yang", "yin", "yang"], bias: 4 }
];

const elements = {
  generates: { wood: "fire", fire: "earth", earth: "metal", metal: "water", water: "wood" },
  controls: { wood: "earth", earth: "water", water: "fire", fire: "metal", metal: "wood" }
};

const trigrams = [
  { name: "乾", lines: ["yang", "yang", "yang"], element: "metal", direction: "西北", image: "天", matchTrait: "强攻与统御" },
  { name: "兑", lines: ["yang", "yang", "yin"], element: "metal", direction: "西", image: "泽", matchTrait: "机会球与反击" },
  { name: "离", lines: ["yang", "yin", "yang"], element: "fire", direction: "南", image: "火", matchTrait: "速度、爆点与进球" },
  { name: "震", lines: ["yin", "yin", "yang"], element: "wood", direction: "东", image: "雷", matchTrait: "开局冲击" },
  { name: "巽", lines: ["yin", "yang", "yang"], element: "wood", direction: "东南", image: "风", matchTrait: "渗透与边路" },
  { name: "坎", lines: ["yin", "yang", "yin"], element: "water", direction: "北", image: "水", matchTrait: "防守、险阻与低比分" },
  { name: "艮", lines: ["yang", "yin", "yin"], element: "earth", direction: "东北", image: "山", matchTrait: "阻滞与阵地战" },
  { name: "坤", lines: ["yin", "yin", "yin"], element: "earth", direction: "西南", image: "地", matchTrait: "消耗、守势与平局" }
];

const branchElements = {
  子: "water",
  丑: "earth",
  寅: "wood",
  卯: "wood",
  辰: "earth",
  巳: "fire",
  午: "fire",
  未: "earth",
  申: "metal",
  酉: "metal",
  戌: "earth",
  亥: "water"
};

const sixRelativeWeights = {
  兄弟: -1.4,
  子孙: 1.8,
  妻财: 0.9,
  官鬼: -1.1,
  父母: 0.4
};

const elementNames = {
  wood: "木",
  fire: "火",
  earth: "土",
  metal: "金",
  water: "水"
};

const defaultCalibration = {
  samples: 0,
  strengthWeight: 1,
  formWeight: 1,
  marketWeight: 1,
  oracleWeight: 1,
  analystWeight: 1,
  kellyWeight: 1,
  bothTeamsScoreBias: 0,
  totalGoalsBias: 0,
  winnerConcedeBias: 0,
  drawBias: 0,
  upsetBias: 0,
  homeEdgeBias: 0,
  learnedMatches: {}
};

const postMatchReviewSamples20260626 = [
  { home: "科特迪瓦", away: "库拉索", actualWdl: "胜", score: "2-0", note: "强侧边路与身体对抗兑现，弱侧破门能力不足" },
  { home: "厄瓜多尔", away: "德国", actualWdl: "胜", score: "2-1", note: "热门方防线失误与转换防守暴露，胜方仍有丢球" },
  { home: "日本", away: "瑞典", actualWdl: "平", score: "1-1", note: "技术控制与高空冲击抵消，平局与双方进球同时出现" },
  { home: "荷兰", away: "突尼斯", actualWdl: "胜", score: "3-1", note: "明星前场效率拉高总进球，胜方未能零封" },
  { home: "巴拉圭", away: "澳大利亚", actualWdl: "平", score: "0-0", note: "低节奏与高对抗压低射正质量，平局不能被忽略" },
  { home: "土耳其", away: "美国", actualWdl: "胜", score: "3-2", note: "主攻爆点带动开放比分，强势方也承受反击丢球" }
];

const starPlayerProfiles = {
  阿根廷: { attack: 94, creation: 92, finishing: 91, defense: 64, influence: 96, depth: 83, label: "梅西体系余威与前场创造力" },
  法国: { attack: 96, creation: 90, finishing: 95, defense: 74, influence: 97, depth: 90, label: "姆巴佩级爆点与豪门阵容厚度" },
  巴西: { attack: 94, creation: 91, finishing: 90, defense: 70, influence: 95, depth: 88, label: "维尼修斯/罗德里戈级边路爆点" },
  英格兰: { attack: 91, creation: 88, finishing: 91, defense: 78, influence: 92, depth: 89, label: "凯恩/贝林厄姆级核心轴线" },
  葡萄牙: { attack: 90, creation: 88, finishing: 90, defense: 72, influence: 91, depth: 86, label: "B费/莱奥级创造与终结" },
  荷兰: { attack: 86, creation: 84, finishing: 84, defense: 84, influence: 87, depth: 82, label: "范戴克级防线统领与前场冲击" },
  德国: { attack: 87, creation: 89, finishing: 84, defense: 78, influence: 88, depth: 86, label: "穆西亚拉/维尔茨级肋部创造" },
  西班牙: { attack: 86, creation: 91, finishing: 82, defense: 80, influence: 88, depth: 87, label: "亚马尔/佩德里级控创核心" },
  比利时: { attack: 86, creation: 87, finishing: 85, defense: 70, influence: 86, depth: 78, label: "德布劳内体系创造力" },
  克罗地亚: { attack: 80, creation: 84, finishing: 78, defense: 77, influence: 83, depth: 75, label: "中场控节奏核心" },
  哥伦比亚: { attack: 84, creation: 83, finishing: 82, defense: 72, influence: 84, depth: 77, label: "J罗/迪亚斯级前场连接" },
  墨西哥: { attack: 80, creation: 78, finishing: 78, defense: 76, influence: 80, depth: 76, label: "主场核心与边路速度" },
  美国: { attack: 82, creation: 81, finishing: 79, defense: 73, influence: 81, depth: 78, label: "普利西奇级边路推进" },
  日本: { attack: 82, creation: 84, finishing: 78, defense: 78, influence: 82, depth: 80, label: "三笘薰/久保级技术爆点" },
  韩国: { attack: 81, creation: 79, finishing: 82, defense: 74, influence: 82, depth: 75, label: "孙兴慜级转换终结" },
  摩洛哥: { attack: 80, creation: 81, finishing: 77, defense: 82, influence: 81, depth: 77, label: "阿什拉夫级边翼推进" },
  瑞士: { attack: 76, creation: 77, finishing: 75, defense: 80, influence: 77, depth: 76, label: "中后场稳定核心" },
  塞内加尔: { attack: 80, creation: 77, finishing: 80, defense: 79, influence: 80, depth: 76, label: "前场个人能力与身体优势" },
  科特迪瓦: { attack: 79, creation: 76, finishing: 79, defense: 75, influence: 78, depth: 74, label: "边锋爆点与身体冲击" },
  厄瓜多尔: { attack: 78, creation: 76, finishing: 77, defense: 78, influence: 77, depth: 74, label: "中场覆盖与转换冲击" },
  土耳其: { attack: 82, creation: 83, finishing: 80, defense: 72, influence: 82, depth: 76, label: "恰尔汗奥卢/居莱尔级创造" },
  瑞典: { attack: 77, creation: 75, finishing: 78, defense: 78, influence: 76, depth: 74, label: "高点与定位球核心" },
  澳大利亚: { attack: 72, creation: 70, finishing: 72, defense: 76, influence: 72, depth: 70, label: "高对抗与定位球" },
  巴拉圭: { attack: 73, creation: 70, finishing: 73, defense: 77, influence: 73, depth: 70, label: "硬度与防守纪律" },
  突尼斯: { attack: 70, creation: 69, finishing: 69, defense: 74, influence: 70, depth: 68, label: "防守纪律与反击点" },
  库拉索: { attack: 66, creation: 65, finishing: 65, defense: 68, influence: 64, depth: 62, label: "个人能力有限，依赖整体防守" }
};

const ODDS_CACHE_KEY = "oracle-odds-cache";
const ODDS_USAGE_KEY = "oracle-odds-usage";
const ODDS_CACHE_TTL_MS = 6 * 60 * 60 * 1000;
const ODDS_MONTHLY_BUDGET = 500;
const SCHEDULE_CACHE_KEY = "oracle-schedule-cache";
const SCHEDULE_CACHE_TTL_MS = 12 * 60 * 60 * 1000;
const SCHEDULE_LOOKAHEAD_DAYS = 35;

const state = {
  selectedId: null,
  activeTab: "data",
  modalScrollY: 0,
  deductionRunId: 0,
  liveData: {},
  scoreData: {},
  oddsData: {},
  oddsApiKey: String(window.ORACLE_CONFIG?.oddsApiKey || localStorage.getItem("odds-api-key") || "").trim(),
  oddsSportKey: String(window.ORACLE_CONFIG?.oddsSportKey || localStorage.getItem("odds-sport-key") || "soccer_fifa_world_cup").trim(),
  oddsRegions: String(window.ORACLE_CONFIG?.oddsRegions || localStorage.getItem("odds-regions") || "us").trim(),
  revealedPredictions: JSON.parse(localStorage.getItem("oracle-predictions") || "{}"),
  lastUpdated: null,
  liveStatus: "等待刷新",
  timeStatus: "网络北京时间校验中",
  timeSource: "网络北京时间",
  scheduleStatus: "使用内置赛程",
  scheduleFetchedAt: "",
  verifiedChinaDate: "",
  calibration: loadCalibration(),
  records: JSON.parse(localStorage.getItem("oracle-records") || "[]")
};

const $ = (selector) => document.querySelector(selector);
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const round = (value) => Math.round(value);
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const activeSleep = (ms) => sleep(ms);

localStorage.removeItem("oracle-selected-match");
if ("scrollRestoration" in history) history.scrollRestoration = "manual";

function loadCalibration() {
  try {
    const saved = JSON.parse(localStorage.getItem("oracle-calibration") || "{}");
    return {
      ...defaultCalibration,
      ...saved,
      learnedMatches: {
        ...defaultCalibration.learnedMatches,
        ...(saved.learnedMatches || {})
      }
    };
  } catch (error) {
    return { ...defaultCalibration, learnedMatches: {} };
  }
}

function persistCalibration() {
  localStorage.setItem("oracle-calibration", JSON.stringify(state.calibration));
}

function sharedPredictionCalibration() {
  return {
    ...defaultCalibration,
    learnedMatches: {}
  };
}

function withSharedPredictionCalibration(callback) {
  const localCalibration = state.calibration;
  state.calibration = sharedPredictionCalibration();
  try {
    return callback();
  } finally {
    state.calibration = localCalibration;
  }
}

function earthlyHour(iso) {
  const hour = new Date(iso).getHours();
  const slots = [
    { name: "子时", branch: "子", start: 23, end: 1, bias: 1.2, image: "水旺，利守势与后程变化" },
    { name: "丑时", branch: "丑", start: 1, end: 3, bias: -0.6, image: "土湿，节奏偏慢，利平局压力" },
    { name: "寅时", branch: "寅", start: 3, end: 5, bias: 1.4, image: "木升，利主动进攻" },
    { name: "卯时", branch: "卯", start: 5, end: 7, bias: 1.0, image: "木动，利边路推进" },
    { name: "辰时", branch: "辰", start: 7, end: 9, bias: -0.2, image: "土起，强弱容易拉扯" },
    { name: "巳时", branch: "巳", start: 9, end: 11, bias: 1.6, image: "火旺，利强攻与进球" },
    { name: "午时", branch: "午", start: 11, end: 13, bias: 1.8, image: "阳极，热门方热度被放大" },
    { name: "未时", branch: "未", start: 13, end: 15, bias: -0.4, image: "土燥，利消耗与小比分" },
    { name: "申时", branch: "申", start: 15, end: 17, bias: 0.8, image: "金动，利转换与反击" },
    { name: "酉时", branch: "酉", start: 17, end: 19, bias: 0.2, image: "金收，利防线秩序" },
    { name: "戌时", branch: "戌", start: 19, end: 21, bias: -0.8, image: "土闭，利低比分与冷门" },
    { name: "亥时", branch: "亥", start: 21, end: 23, bias: -1.0, image: "水深，利守反与变局" }
  ];
  return slots.find((slot) => {
    if (slot.start > slot.end) return hour >= slot.start || hour < slot.end;
    return hour >= slot.start && hour < slot.end;
  }) || slots[0];
}

function elementRelationScore(source, target) {
  if (source === target) return 1.2;
  if (elements.generates[source] === target) return 1.8;
  if (elements.generates[target] === source) return 0.7;
  if (elements.controls[source] === target) return 2.1;
  if (elements.controls[target] === source) return -2.2;
  return 0;
}

function elementSupportScore(source, target) {
  if (source === target) return 1.2;
  if (elements.generates[source] === target) return 2.0;
  if (elements.generates[target] === source) return -0.8;
  if (elements.controls[source] === target) return -1.6;
  if (elements.controls[target] === source) return -2.2;
  return 0;
}

function worldResponseScore(world, response) {
  if (world === response) return 0.7;
  if (elements.generates[response] === world) return 1.4;
  if (elements.generates[world] === response) return -1.1;
  if (elements.controls[world] === response) return 2.2;
  if (elements.controls[response] === world) return -2.4;
  return 0;
}

function linePolarityScore(line) {
  return line === "yang" ? 1 : -0.8;
}

function trigramPolarityScore(lines) {
  return lines.reduce((total, line) => total + linePolarityScore(line), 0) / lines.length;
}

function trigramFromLines(lines) {
  const normalized = lines.map((line) => line.split("-")[0]);
  return trigrams.find((trigram) => trigram.lines.join("") === normalized.join("")) || trigrams[0];
}

function splitHexagram(lines) {
  return {
    lower: trigramFromLines(lines.slice(0, 3)),
    upper: trigramFromLines(lines.slice(3, 6))
  };
}

function matchUsefulGod(match) {
  const totalAttack = match.home.attack + match.away.attack;
  const totalDefense = match.home.defense + match.away.defense;
  if (Math.abs(match.home.strength - match.away.strength) <= 4) return "兄弟";
  if (totalAttack - totalDefense > 8) return "子孙";
  if (totalDefense - totalAttack > 6) return "父母";
  if (match.market.heat > 74) return "官鬼";
  return "妻财";
}

function relativeForLine(index, usefulGod) {
  const cycle = ["兄弟", "子孙", "妻财", "官鬼", "父母", "兄弟"];
  const offset = Math.max(0, cycle.indexOf(usefulGod));
  return cycle[(index + offset) % cycle.length];
}

function selectedMatch() {
  const visible = predictionDayMatches();
  return matches.find((match) => match.id === state.selectedId) || visible[0] || matches[0];
}

function formatBeijingTime(iso) {
  return new Intl.DateTimeFormat("zh-CN", {
    timeZone: CHINA_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(new Date(iso));
}

function chinaDateKey(iso) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: CHINA_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(new Date(iso));
  const get = (type) => parts.find((part) => part.type === type)?.value;
  return `${get("year")}-${get("month")}-${get("day")}`;
}

function currentChinaNow() {
  return new Date();
}

function currentChinaDateKey() {
  return state.verifiedChinaDate || chinaDateKey(currentChinaNow());
}

function formatChinaDateLabel(dateKey) {
  if (!dateKey) return "校验中";
  const [year, month, day] = dateKey.split("-");
  return `${year}年${Number(month)}月${Number(day)}日`;
}

function parseBaiduDate(text) {
  const normalized = String(text || "").replace(/\s+/g, " ");
  const cnMatch = normalized.match(/(20\d{2})年\s*(\d{1,2})月\s*(\d{1,2})日/);
  if (cnMatch) {
    const [, year, month, day] = cnMatch;
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  }
  const slashMatch = normalized.match(/(20\d{2})[-/.](\d{1,2})[-/.](\d{1,2})/);
  if (slashMatch) {
    const [, year, month, day] = slashMatch;
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  }
  return "";
}

function dateKeyFromIso(iso) {
  return chinaDateKey(iso);
}

function dateKeyFromUnixSeconds(seconds) {
  return chinaDateKey(new Date(seconds * 1000).toISOString());
}

async function fetchNetworkChinaDate() {
  const endpoints = [
    {
      url: "/api/baidu-time",
      source: "百度服务器 Date 响应头",
      parse: (payload) => payload.dateKey
    },
    {
      url: "https://cn.apihz.cn/api/time/getapi.php?id=88888888&key=88888888&type=1",
      source: "APIHZ 北京时间接口",
      parse: (payload) => payload.code === 200 && payload.msg ? dateKeyFromUnixSeconds(Number(payload.msg)) : ""
    },
    {
      url: "https://worldtimeapi.org/api/timezone/Asia/Shanghai",
      source: "WorldTimeAPI Asia/Shanghai",
      parse: (payload) => payload.datetime && dateKeyFromIso(payload.datetime)
    },
    {
      url: "https://timeapi.io/api/TimeZone/zone?timeZone=Asia/Shanghai",
      source: "TimeAPI Asia/Shanghai",
      parse: (payload) => payload.currentLocalTime && dateKeyFromIso(payload.currentLocalTime)
    },
    {
      url: "https://worldtimeapi.org/api/ip",
      source: "WorldTimeAPI IP 校时",
      parse: (payload) => payload.unixtime && dateKeyFromUnixSeconds(payload.unixtime)
    },
    {
      url: "https://www.baidu.com/s?wd=%E5%8C%97%E4%BA%AC%E6%97%B6%E9%97%B4",
      source: "百度搜索页面",
      parseText: parseBaiduDate
    },
    {
      url: "https://www.baidu.com/s?wd=%E4%BB%8A%E5%A4%A9%E5%87%A0%E5%8F%B7",
      source: "百度搜索页面",
      parseText: parseBaiduDate
    }
  ];
  for (const endpoint of endpoints) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2600);
    try {
      const response = await fetch(endpoint.url, { mode: "cors", cache: "no-store", signal: controller.signal });
      if (!response.ok) continue;
      const contentType = response.headers.get("content-type") || "";
      const text = await response.text();
      if (contentType.includes("application/json")) {
        const payload = JSON.parse(text);
        const dateKey = endpoint.parse?.(payload);
        if (dateKey) return { dateKey, source: payload.source || endpoint.source };
      }
      const dateKey = endpoint.parseText?.(text);
      if (dateKey) return { dateKey, source: endpoint.source };
    } catch (error) {
      // Some providers block CORS or rate-limit; the next source is tried.
    } finally {
      clearTimeout(timeoutId);
    }
  }
  throw new Error("网络时间源不可读");
}

function updateTimeBadge() {
  const target = $("#beijingDateLine");
  if (!target) return;
  target.textContent = `北京时间日期：${formatChinaDateLabel(currentChinaDateKey())} · 时间源：${state.timeSource} · ${state.timeStatus}`;
}

function reconcileSelectedMatchDate() {
  const activeDate = activeChinaDate();
  const selected = matches.find((match) => match.id === state.selectedId);
  if (!selected || chinaDateKey(selected.beijingTime) < activeDate) {
    state.selectedId = predictionDayMatches()[0]?.id || sideScheduleMatches()[0]?.id || matches[0]?.id || null;
  }
}

async function verifyNetworkTime() {
  state.timeStatus = "网络北京时间校验中";
  updateTimeBadge();
  try {
    const networkTime = await fetchNetworkChinaDate();
    const dateKey = networkTime.dateKey;
    state.verifiedChinaDate = dateKey;
    state.timeSource = networkTime.source || "网络北京时间";
    state.timeStatus = matches.some((match) => chinaDateKey(match.beijingTime) === activeChinaDate())
      ? "已与赛程日期交叉验证"
      : "网络日期无当日赛程，已切换下一比赛日";
  } catch (error) {
    state.verifiedChinaDate = chinaDateKey(currentChinaNow());
    state.timeSource = "本机 Asia/Shanghai";
    state.timeStatus = "网络时间源不可读，已降级";
  }
  reconcileSelectedMatchDate();
  render();
}

function matchStartTime(match) {
  return new Date(match.beijingTime);
}

function activeChinaDate() {
  const today = currentChinaDateKey();
  const dates = [...new Set(matches.map((match) => chinaDateKey(match.beijingTime)))].sort();
  if (dates.includes(today)) return today;
  return dates.find((date) => date > today) || dates[dates.length - 1];
}

function shiftDateKey(dateKey, offsetDays) {
  const [year, month, day] = String(dateKey).split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day + offsetDays, 12, 0, 0));
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "UTC",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(date);
}

function chinaDayMatches() {
  const activeDate = activeChinaDate();
  return matches
    .filter((match) => chinaDateKey(match.beijingTime) === activeDate)
    .sort((a, b) => new Date(a.beijingTime) - new Date(b.beijingTime));
}

function matchPhase(match, now = currentChinaNow()) {
  const score = matchScore(match);
  if (score?.completed) return "completed";
  if (score?.state === "in") return "live";
  if (matchStartTime(match).getTime() <= now.getTime()) return "live";
  return "upcoming";
}

function todayDisplayMatches() {
  const order = { live: 0, upcoming: 1, completed: 2 };
  return chinaDayMatches()
    .slice()
    .sort((a, b) => {
      const phaseDiff = order[matchPhase(a)] - order[matchPhase(b)];
      if (phaseDiff) return phaseDiff;
      return matchStartTime(a) - matchStartTime(b);
    });
}

function sideScheduleMatches() {
  const activeDate = activeChinaDate();
  const order = { live: 0, upcoming: 1 };
  return matches
    .filter((match) => {
      const dateKey = chinaDateKey(match.beijingTime);
      const phase = matchPhase(match);
      if (phase === "completed") return false;
      if (dateKey < activeDate) return false;
      return phase === "live" || phase === "upcoming";
    })
    .sort((a, b) => {
      const dateA = chinaDateKey(a.beijingTime);
      const dateB = chinaDateKey(b.beijingTime);
      if (dateA !== dateB) return dateA.localeCompare(dateB);
      if (dateA === activeDate) {
        const phaseDiff = order[matchPhase(a)] - order[matchPhase(b)];
        if (phaseDiff) return phaseDiff;
      }
      return matchStartTime(a) - matchStartTime(b);
    });
}

function isMatchPredictable(match, now = currentChinaNow()) {
  return matchPhase(match, now) === "upcoming";
}

function activePredictionDate() {
  const now = currentChinaNow();
  const dates = [...new Set(
    matches
      .filter((match) => isMatchPredictable(match, now))
      .map((match) => chinaDateKey(match.beijingTime))
  )].sort();
  return dates[0] || activeChinaDate();
}

function predictionDayMatches() {
  const activeDate = activePredictionDate();
  const now = currentChinaNow();
  return matches
    .filter((match) => chinaDateKey(match.beijingTime) === activeDate && isMatchPredictable(match, now))
    .sort((a, b) => matchStartTime(a) - matchStartTime(b));
}

function predictionEntryMatches() {
  const now = currentChinaNow();
  const activeDate = activeChinaDate();
  const todayUpcoming = matches
    .filter((match) => chinaDateKey(match.beijingTime) === activeDate && isMatchPredictable(match, now))
    .sort((a, b) => matchStartTime(a) - matchStartTime(b));
  if (todayUpcoming.length) return todayUpcoming;
  return predictionDayMatches();
}

function formatLocalTime(iso) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(new Date(iso));
}

function fallbackLive(match) {
  const hour = new Date(match.localTime).getHours();
  return {
    source: "内置赛前因子",
    updatedAt: new Date().toISOString(),
    temperature: hour >= 12 && hour <= 18 ? 28 : 22,
    windSpeed: match.venue.city === "Toronto" ? 14 : 10,
    humidity: match.venue.city === "Houston" ? 72 : 58,
    precipitation: match.venue.city === "Toronto" ? 28 : 16,
    marketHeatShift: 0,
    lineupStability: 72
  };
}

async function fetchWeather(match) {
  const params = new URLSearchParams({
    latitude: String(match.venue.lat),
    longitude: String(match.venue.lon),
    hourly: "temperature_2m,relative_humidity_2m,precipitation_probability,wind_speed_10m",
    timezone: "auto"
  });
  const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);
  if (!response.ok) throw new Error("weather fetch failed");
  const payload = await response.json();
  const target = new Date(match.localTime).getTime();
  const times = payload.hourly?.time || [];
  const index = times.reduce((best, item, idx) => {
    const distance = Math.abs(new Date(item).getTime() - target);
    return distance < best.distance ? { idx, distance } : best;
  }, { idx: 0, distance: Infinity }).idx;

  return {
    source: "Open-Meteo 实时天气",
    updatedAt: new Date().toISOString(),
    temperature: payload.hourly.temperature_2m[index],
    windSpeed: payload.hourly.wind_speed_10m[index],
    humidity: payload.hourly.relative_humidity_2m[index],
    precipitation: payload.hourly.precipitation_probability[index],
    marketHeatShift: 0,
    lineupStability: 72
  };
}

function normalizeTeamName(name) {
  return String(name || "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

function matchTitle(match) {
  return `${match.home.name} vs ${match.away.name}`;
}

function matchTitlePlain(match) {
  return `${match.home.name} vs ${match.away.name}`;
}

function matchTitleHtml(match) {
  return `
    <span class="team-name team-home"><span>${match.home.name}</span></span>
    <span class="versus">vs</span>
    <span class="team-name team-away"><span>${match.away.name}</span></span>
  `;
}

function venueName(match) {
  const names = {
    "休斯敦 NRG Stadium": "休斯敦体育场（休斯敦）",
    "达拉斯 AT&T Stadium": "达拉斯体育场（达拉斯）",
    "多伦多 BMO Field": "多伦多体育场（多伦多）",
    "墨西哥城 Estadio Azteca": "墨西哥城体育场（墨西哥城）",
    "亚特兰大 Mercedes-Benz Stadium": "亚特兰大体育场（亚特兰大）",
    "洛杉矶 SoFi Stadium": "洛杉矶体育场（洛杉矶）",
    "温哥华 BC Place": "BC Place Vancouver（温哥华）",
    "西雅图 Lumen Field": "西雅图体育场（西雅图）",
    "费城 Lincoln Financial Field": "费城体育场（费城）",
    "迈阿密 Hard Rock Stadium": "迈阿密体育场（迈阿密）",
    "纽约/新泽西 MetLife Stadium": "纽约新泽西体育场（纽约/新泽西）",
    "波士顿 Gillette Stadium": "波士顿体育场（波士顿）",
    "蒙特雷 Estadio BBVA": "蒙特雷体育场（蒙特雷）",
    "堪萨斯城 Arrowhead Stadium": "堪萨斯城体育场（堪萨斯城）",
    "旧金山湾区 Levi's Stadium": "旧金山湾区体育场（旧金山湾区）",
    "瓜达拉哈拉 Estadio Akron": "瓜达拉哈拉体育场（瓜达拉哈拉）"
  };
  return names[match.venue.name] || localizeVenueName(match.venue.name, match.venue.city);
}

function localizeVenueName(name, city = "") {
  const raw = String(name || "").trim();
  const matched = venueFallbacks.find((venue) => raw.includes(venue.key) || raw.includes(venue.name));
  if (matched) return `${matched.name}（${cityNameMap[matched.city] || matched.city}）`;
  const cityText = cityNameMap[city] || city || "主办城市";
  return /[a-z]/i.test(raw) ? `世界杯比赛场（${cityText}）` : raw || `世界杯比赛场（${cityText}）`;
}

const teamNameMap = {
  "Argentina": "阿根廷",
  "Austria": "奥地利",
  "Algeria": "阿尔及利亚",
  "Australia": "澳大利亚",
  "Belgium": "比利时",
  "Bolivia": "玻利维亚",
  "Bosnia-Herzegovina": "波黑",
  "Bosnia and Herzegovina": "波黑",
  "Brazil": "巴西",
  "Cameroon": "喀麦隆",
  "Canada": "加拿大",
  "Cape Verde": "佛得角",
  "Chile": "智利",
  "China": "中国",
  "Colombia": "哥伦比亚",
  "Costa Rica": "哥斯达黎加",
  "Côte d'Ivoire": "科特迪瓦",
  "Cote d'Ivoire": "科特迪瓦",
  "Ivory Coast": "科特迪瓦",
  "Curaçao": "库拉索",
  "Curacao": "库拉索",
  "Congo DR": "刚果民主共和国",
  "Czechia": "捷克",
  "Czech Republic": "捷克",
  "Croatia": "克罗地亚",
  "Denmark": "丹麦",
  "Ecuador": "厄瓜多尔",
  "Egypt": "埃及",
  "England": "英格兰",
  "France": "法国",
  "Germany": "德国",
  "Ghana": "加纳",
  "Greece": "希腊",
  "Haiti": "海地",
  "Honduras": "洪都拉斯",
  "Iran": "伊朗",
  "Iraq": "伊拉克",
  "Ireland": "爱尔兰",
  "Italy": "意大利",
  "Jamaica": "牙买加",
  "Japan": "日本",
  "Jordan": "约旦",
  "Mali": "马里",
  "Mexico": "墨西哥",
  "Morocco": "摩洛哥",
  "Netherlands": "荷兰",
  "Nigeria": "尼日利亚",
  "New Zealand": "新西兰",
  "North Macedonia": "北马其顿",
  "Norway": "挪威",
  "Panama": "巴拿马",
  "Paraguay": "巴拉圭",
  "Peru": "秘鲁",
  "Poland": "波兰",
  "Portugal": "葡萄牙",
  "Qatar": "卡塔尔",
  "Romania": "罗马尼亚",
  "Saudi Arabia": "沙特阿拉伯",
  "Scotland": "苏格兰",
  "Senegal": "塞内加尔",
  "Serbia": "塞尔维亚",
  "Slovakia": "斯洛伐克",
  "Slovenia": "斯洛文尼亚",
  "South Africa": "南非",
  "South Korea": "韩国",
  "Spain": "西班牙",
  "Sweden": "瑞典",
  "Switzerland": "瑞士",
  "Tunisia": "突尼斯",
  "Turkey": "土耳其",
  "Türkiye": "土耳其",
  "Turkiye": "土耳其",
  "Ukraine": "乌克兰",
  "United Arab Emirates": "阿联酋",
  "United States": "美国",
  "Uruguay": "乌拉圭",
  "Uzbekistan": "乌兹别克斯坦",
  "Venezuela": "委内瑞拉",
  "Wales": "威尔士"
};

const teamCodeNameMap = {
  ARG: "阿根廷",
  AUS: "澳大利亚",
  BEL: "比利时",
  BIH: "波黑",
  BRA: "巴西",
  CAN: "加拿大",
  CPV: "佛得角",
  CRO: "克罗地亚",
  COD: "刚果民主共和国",
  CIV: "科特迪瓦",
  CZE: "捷克",
  CUW: "库拉索",
  DEN: "丹麦",
  ECU: "厄瓜多尔",
  EGY: "埃及",
  ENG: "英格兰",
  ESP: "西班牙",
  FRA: "法国",
  GER: "德国",
  GHA: "加纳",
  HAI: "海地",
  IRN: "伊朗",
  ITA: "意大利",
  JPN: "日本",
  KOR: "韩国",
  KSA: "沙特阿拉伯",
  MAR: "摩洛哥",
  MEX: "墨西哥",
  NED: "荷兰",
  NGA: "尼日利亚",
  NOR: "挪威",
  NZL: "新西兰",
  PAR: "巴拉圭",
  POL: "波兰",
  POR: "葡萄牙",
  QAT: "卡塔尔",
  RSA: "南非",
  SCO: "苏格兰",
  SEN: "塞内加尔",
  SRB: "塞尔维亚",
  SUI: "瑞士",
  TUN: "突尼斯",
  UKR: "乌克兰",
  URU: "乌拉圭",
  USA: "美国",
  WAL: "威尔士"
};

const cityNameMap = {
  "Atlanta": "亚特兰大",
  "Boston": "波士顿",
  "Dallas": "达拉斯",
  "Guadalajara": "瓜达拉哈拉",
  "Houston": "休斯敦",
  "Kansas City": "堪萨斯城",
  "Los Angeles": "洛杉矶",
  "Mexico City": "墨西哥城",
  "Miami": "迈阿密",
  "Monterrey": "蒙特雷",
  "New York/New Jersey": "纽约/新泽西",
  "Philadelphia": "费城",
  "San Francisco Bay Area": "旧金山湾区",
  "Seattle": "西雅图",
  "Toronto": "多伦多",
  "Vancouver": "温哥华"
};

const venueFallbacks = [
  { key: "NRG", name: "休斯敦体育场", city: "Houston", country: "United States", lat: 29.6847, lon: -95.4107, altitude: 15 },
  { key: "AT&T", name: "达拉斯体育场", city: "Dallas", country: "United States", lat: 32.7473, lon: -97.0945, altitude: 184 },
  { key: "BMO", name: "多伦多体育场", city: "Toronto", country: "Canada", lat: 43.6332, lon: -79.4186, altitude: 76 },
  { key: "Azteca", name: "墨西哥城体育场", city: "Mexico City", country: "Mexico", lat: 19.3029, lon: -99.1505, altitude: 2240 },
  { key: "Mercedes-Benz", name: "亚特兰大体育场", city: "Atlanta", country: "United States", lat: 33.7554, lon: -84.4008, altitude: 320 },
  { key: "SoFi", name: "洛杉矶体育场", city: "Los Angeles", country: "United States", lat: 33.9535, lon: -118.3392, altitude: 38 },
  { key: "BC Place", name: "温哥华体育场", city: "Vancouver", country: "Canada", lat: 49.2767, lon: -123.1119, altitude: 15 },
  { key: "Lumen", name: "西雅图体育场", city: "Seattle", country: "United States", lat: 47.5952, lon: -122.3316, altitude: 56 },
  { key: "Lincoln Financial", name: "费城体育场", city: "Philadelphia", country: "United States", lat: 39.9008, lon: -75.1675, altitude: 12 },
  { key: "Hard Rock", name: "迈阿密体育场", city: "Miami", country: "United States", lat: 25.958, lon: -80.2389, altitude: 2 },
  { key: "MetLife", name: "纽约新泽西体育场", city: "New York/New Jersey", country: "United States", lat: 40.8135, lon: -74.0745, altitude: 2 },
  { key: "Gillette", name: "波士顿体育场", city: "Boston", country: "United States", lat: 42.0909, lon: -71.2643, altitude: 88 },
  { key: "BBVA", name: "蒙特雷体育场", city: "Monterrey", country: "Mexico", lat: 25.6689, lon: -100.2448, altitude: 540 },
  { key: "Arrowhead", name: "堪萨斯城体育场", city: "Kansas City", country: "United States", lat: 39.0489, lon: -94.4839, altitude: 265 },
  { key: "Levi", name: "旧金山湾区体育场", city: "San Francisco Bay Area", country: "United States", lat: 37.403, lon: -121.97, altitude: 6 },
  { key: "Akron", name: "瓜达拉哈拉体育场", city: "Guadalajara", country: "Mexico", lat: 20.6818, lon: -103.4628, altitude: 1566 }
];

function translateTeamName(name, abbreviation = "") {
  const raw = String(name || "").trim();
  const code = String(abbreviation || raw).trim().toUpperCase();
  if (teamCodeNameMap[code]) return teamCodeNameMap[code];
  if (teamNameMap[raw]) return teamNameMap[raw];
  const normalized = normalizeTeamName(raw);
  const mapped = Object.entries(teamNameMap).find(([key]) => normalizeTeamName(key) === normalized)?.[1];
  if (mapped) return mapped;
  if (!raw || /^(tbd|to be determined)$/i.test(raw)) return "待定球队";
  if (/winner/i.test(raw)) return "附加赛胜者";
  if (/runner-up|second/i.test(raw)) return "小组第二";
  return /[a-z]/i.test(raw) ? "待定球队" : raw;
}

function isPlaceholderTeamName(name) {
  const raw = String(name || "").trim();
  return !raw || raw === "待定球队" || raw === "待定" || /^(tbd|to be determined)$/i.test(raw);
}

function firstRealTeamName(...names) {
  return names.find((name) => !isPlaceholderTeamName(name)) || "";
}

function teamDisplayName(team) {
  const name = team?.displayName || team?.name || team?.shortDisplayName || "";
  return translateTeamName(name, team?.abbreviation);
}

function createTeamProfile(team) {
  const seed = Array.from(normalizeTeamName(team?.displayName || team?.name || "")).reduce((total, char) => total + char.charCodeAt(0), 0);
  const base = 66 + (seed % 12);
  return {
    name: teamDisplayName(team),
    fifaRank: 30 + (seed % 70),
    strength: clamp(base + 2, 58, 82),
    form: clamp(base + ((seed % 7) - 3), 56, 82),
    attack: clamp(base + ((seed % 9) - 4), 55, 83),
    defense: clamp(base + ((seed % 8) - 3), 55, 83),
    experience: clamp(base + ((seed % 10) - 4), 55, 84),
    fatigue: clamp(34 + (seed % 15), 28, 52)
  };
}

function localizeScheduleLabel(value, fallback = "赛程") {
  const raw = String(value || "").trim();
  if (!raw) return fallback;
  if (/group stage/i.test(raw)) return "小组赛";
  if (/round of 32/i.test(raw)) return "三十二强赛";
  if (/round of 16/i.test(raw)) return "十六强赛";
  if (/quarter/i.test(raw)) return "四分之一决赛";
  if (/semi/i.test(raw)) return "半决赛";
  if (/third/i.test(raw)) return "三四名决赛";
  if (/final/i.test(raw)) return "决赛";
  if (/world cup|fifa/i.test(raw)) return "世界杯";
  if (raw.includes("@") || raw.includes(" at ") || /[A-Z]{2,4}\s+v/i.test(raw)) return fallback;
  return /[a-z]/i.test(raw) ? fallback : raw;
}

function localizeScheduleMatch(match) {
  const homeEspn = match.espn?.home || match.home?.name || "";
  const awayEspn = match.espn?.away || match.away?.name || "";
  const city = cityNameMap[match.venue?.city] || match.venue?.city || "";
  const base = baseMatches.find((item) => item.id === match.id || teamsMatch({
    home_team: homeEspn,
    away_team: awayEspn
  }, item)) || baseMatches.find((item) => {
    const timeClose = Math.abs(new Date(item.beijingTime) - new Date(match.beijingTime)) < 45 * 60 * 1000;
    const venueClose = normalizeTeamName(item.venue?.name).includes(normalizeTeamName(match.venue?.name).slice(0, 6)) || normalizeTeamName(match.venue?.name).includes(normalizeTeamName(item.venue?.name).slice(0, 6));
    const knownOpponent = [homeEspn, awayEspn, match.home?.name, match.away?.name]
      .filter((name) => !isPlaceholderTeamName(name))
      .some((name) => [item.espn?.home, item.espn?.away, item.home?.name, item.away?.name].some((candidate) => normalizeTeamName(candidate) === normalizeTeamName(name)));
    return timeClose && (venueClose || knownOpponent);
  });
  return {
    ...match,
    stage: localizeScheduleLabel(match.stage, "世界杯"),
    group: localizeScheduleLabel(match.group, "赛程"),
    venue: {
      ...match.venue,
      name: localizeVenueName(match.venue?.name, city),
      city
    },
    home: {
      ...match.home,
      name: translateTeamName(firstRealTeamName(homeEspn, base?.espn?.home, base?.home?.name, match.home?.name))
    },
    away: {
      ...match.away,
      name: translateTeamName(firstRealTeamName(awayEspn, base?.espn?.away, base?.away?.name, match.away?.name))
    }
  };
}

function venueFromEvent(event) {
  const competition = event.competitions?.[0];
  const raw = competition?.venue || {};
  const rawName = raw.fullName || raw.displayName || raw.name || event.venue?.fullName || event.venue?.displayName || "世界杯比赛场";
  const matched = venueFallbacks.find((venue) => rawName.includes(venue.key));
  if (matched) return { ...matched };
  const city = raw.address?.city || raw.city || "Host City";
  const country = raw.address?.country || raw.country || "World Cup Host";
  return {
    name: localizeVenueName(rawName, city),
    city: cityNameMap[city] || city,
    country,
    lat: Number(raw.address?.latitude || raw.latitude || 39),
    lon: Number(raw.address?.longitude || raw.longitude || -96),
    altitude: 80
  };
}

function matchIdFromEvent(event, homeName, awayName) {
  const dateKey = chinaDateKey(event.date).replaceAll("-", "");
  const home = normalizeTeamName(homeName).slice(0, 6) || "home";
  const away = normalizeTeamName(awayName).slice(0, 6) || "away";
  return `espn-${home}-${away}-${dateKey}`;
}

function scheduleMatchFromEvent(event) {
  const competition = event.competitions?.[0];
  const competitors = competition?.competitors || [];
  const homeCompetitor = competitors.find((item) => item.homeAway === "home") || competitors[0];
  const awayCompetitor = competitors.find((item) => item.homeAway === "away") || competitors[1];
  if (!event.date || !homeCompetitor?.team || !awayCompetitor?.team) return null;

  const homeEspn = homeCompetitor.team.displayName || homeCompetitor.team.name || homeCompetitor.team.shortDisplayName;
  const awayEspn = awayCompetitor.team.displayName || awayCompetitor.team.name || awayCompetitor.team.shortDisplayName;
  const base = baseMatches.find((match) => teamsMatch({
    home_team: homeEspn,
    away_team: awayEspn
  }, match) && Math.abs(new Date(match.beijingTime) - new Date(event.date)) < 36 * 60 * 60 * 1000);
  if (base) return { ...base, beijingTime: new Date(event.date).toISOString(), localTime: new Date(event.date).toISOString(), source: "ESPN scoreboard schedule" };

  return {
    id: matchIdFromEvent(event, homeEspn, awayEspn),
    stage: localizeScheduleLabel(event.season?.slug || event.name, "世界杯"),
    group: localizeScheduleLabel(event.shortName, "赛程"),
    beijingTime: new Date(event.date).toISOString(),
    localTime: new Date(event.date).toISOString(),
    venue: venueFromEvent(event),
    home: createTeamProfile(homeCompetitor.team),
    away: createTeamProfile(awayCompetitor.team),
    espn: { home: homeEspn, away: awayEspn },
    historyBalance: 50,
    market: { opening: 0, current: 0, movement: 0, heat: 55 },
    travel: { homeKm: 8000, awayKm: 8000, homeRestDays: 5, awayRestDays: 5 },
    source: "ESPN scoreboard schedule"
  };
}

function matchScore(match) {
  return state.scoreData[match.id];
}

function isCompleted(match) {
  return Boolean(matchScore(match)?.completed);
}

function actualWdl(match) {
  const score = matchScore(match);
  if (!score?.completed) return "";
  if (score.homeScore > score.awayScore) return "胜";
  if (score.homeScore < score.awayScore) return "负";
  return "平";
}

function actualResultLabel(match) {
  const score = matchScore(match);
  if (!score?.completed) return "";
  if (score.homeScore > score.awayScore) return `${match.home.name}胜`;
  if (score.homeScore < score.awayScore) return `${match.away.name}胜`;
  return "平局";
}

function actualScoreText(match) {
  const score = matchScore(match);
  return score ? `${score.homeScore}-${score.awayScore}` : "";
}

function parseScoreText(scoreText) {
  const match = String(scoreText || "").match(/(\d+)\s*-\s*(\d+)/);
  if (!match) return null;
  return { home: Number(match[1]), away: Number(match[2]) };
}

function scoreMeta(score) {
  if (!score) return null;
  const home = Number(score.home);
  const away = Number(score.away);
  return {
    home,
    away,
    total: home + away,
    bothScore: home > 0 && away > 0,
    winnerConceded: home !== away && Math.min(home, away) > 0
  };
}

function predictedScoreMetas(revealed) {
  return (revealed?.scoreOptions || [revealed?.predictedScore].filter(Boolean))
    .map(parseScoreText)
    .map(scoreMeta)
    .filter(Boolean);
}

function evaluatePrediction(match, revealed) {
  return revealed?.wdl === actualWdl(match) ? "命中" : "失准";
}

function reviewConclusion(match, revealed, status) {
  const scoreText = actualScoreText(match);
  const actual = `${actualResultLabel(match)} · ${scoreText}`;
  const predicted = predictionFullResultText(match, revealed);
  const scoreHit = Boolean(scoreText && revealed?.scoreOptions?.includes(scoreText));
  if (status === "命中") {
    return `复盘结论：赛前胜平负方向「${resultPickLabel(match, revealed)}」与真实赛果「${actualResultLabel(match)}」一致，判定为命中；比分${scoreHit ? "同时落入候选区间" : `未覆盖真实比分「${scoreText}」`}，系统会据此校准总进球、双方进球概率和胜方失球倾向。`;
  }
  return `复盘结论：赛前胜平负倾向「${predicted}」与真实赛果「${actual}」方向不一致，判定为失准；模型将降低本次偏离方向的权重，同时用真实比分校准总进球、双方进球概率、胜方失球倾向与冷门风险。`;
}

function wdlToEdge(wdl) {
  if (wdl === "胜") return 1;
  if (wdl === "负") return -1;
  return 0;
}

function applyCalibrationFromResult(match, revealed, status) {
  if (!revealed || state.calibration.learnedMatches[match.id]) return false;
  const actualEdge = wdlToEdge(actualWdl(match));
  const predictedEdge = wdlToEdge(revealed.wdl);
  const directionError = actualEdge - predictedEdge;
  const scoreText = actualScoreText(match);
  const scoreHit = Boolean(scoreText && revealed.scoreOptions?.includes(scoreText));
  applyScoreCalibrationFromResult(scoreText, revealed);
  const missScale = status === "失准" ? 1 : 0.18;
  const factor = 0.018 * missScale;
  const cal = state.calibration;

  if (directionError !== 0) {
    cal.homeEdgeBias = clamp(cal.homeEdgeBias + directionError * 0.55 * missScale, -4, 4);
    cal.strengthWeight = clamp(cal.strengthWeight + directionError * Math.sign(match.home.strength - match.away.strength || directionError) * factor, 0.82, 1.18);
    cal.formWeight = clamp(cal.formWeight + directionError * Math.sign(match.home.form - match.away.form || directionError) * factor, 0.82, 1.18);
    cal.marketWeight = clamp(cal.marketWeight + directionError * Math.sign(-(state.oddsData[match.id]?.current ?? match.market.current) || directionError) * factor, 0.82, 1.18);
    cal.oracleWeight = clamp(cal.oracleWeight + directionError * Math.sign(revealed.oracleBias || directionError) * factor * 0.8, 0.78, 1.22);
    cal.analystWeight = clamp(cal.analystWeight + directionError * Math.sign(revealed.analystEdge || directionError) * factor * 0.9, 0.76, 1.24);
  }
  applyKellyCalibrationFromResult(match, revealed, status, directionError, missScale);

  if (actualEdge === 0 && predictedEdge !== 0) cal.drawBias = clamp(cal.drawBias + 1.2 * missScale, -5, 5);
  if (actualEdge !== 0 && predictedEdge === 0) cal.drawBias = clamp(cal.drawBias - 1.0 * missScale, -5, 5);
  if (status === "失准") cal.upsetBias = clamp(cal.upsetBias + 0.8, -4, 6);
  if (status === "命中" && scoreHit) {
    cal.upsetBias = clamp(cal.upsetBias - 0.25, -4, 6);
    cal.analystWeight = clamp(cal.analystWeight + 0.006, 0.76, 1.24);
  }

  cal.samples += 1;
  cal.learnedMatches[match.id] = {
    status,
    actual: `${actualResultLabel(match)} ${scoreText}`,
    predicted: predictionFullResultText(match, revealed),
    conclusion: reviewConclusion(match, revealed, status),
    learnedAt: new Date().toISOString()
  };
  persistCalibration();
  return true;
}

function applyScoreCalibrationFromResult(actualScoreTextValue, revealed) {
  const actual = scoreMeta(parseScoreText(actualScoreTextValue));
  if (!actual || !revealed) return;
  const predicted = predictedScoreMetas(revealed);
  const predictedTotal = predicted.length ? predicted.reduce((sum, item) => sum + item.total, 0) / predicted.length : 2;
  const predictedBothScore = predicted.some((item) => item.bothScore);
  const predictedWinnerConceded = predicted.some((item) => item.winnerConceded);
  const cal = state.calibration;

  cal.totalGoalsBias = clamp(cal.totalGoalsBias + (actual.total - predictedTotal) * 0.035, -0.45, 0.55);
  if (actual.bothScore && !predictedBothScore) cal.bothTeamsScoreBias = clamp(cal.bothTeamsScoreBias + 0.08, -0.35, 0.5);
  if (!actual.bothScore && predictedBothScore) cal.bothTeamsScoreBias = clamp(cal.bothTeamsScoreBias - 0.035, -0.35, 0.5);
  if (actual.winnerConceded && !predictedWinnerConceded) cal.winnerConcedeBias = clamp(cal.winnerConcedeBias + 0.075, -0.3, 0.5);
  if (!actual.winnerConceded && predictedWinnerConceded) cal.winnerConcedeBias = clamp(cal.winnerConcedeBias - 0.03, -0.3, 0.5);
}

function syncCompletedVerifications() {
  let changed = false;
  let learned = false;
  matches.forEach((match) => {
    if (!isCompleted(match)) return;
    const revealed = state.revealedPredictions[match.id];
    if (!revealed) return;

    const recordId = `auto-${match.id}`;
    const status = evaluatePrediction(match, revealed);
    if (applyCalibrationFromResult(match, revealed, status)) learned = true;
    const result = `${actualResultLabel(match)} · ${actualScoreText(match)}`;
    const trend = `赛前输出：${predictionFullResultText(match, revealed)}；真实赛果：${result}。`;
    const conclusion = reviewConclusion(match, revealed, status);
    const savedAt = new Date().toLocaleString("zh-CN", { hour12: false });
    const existing = state.records.find((record) => record.id === recordId);

    if (existing) {
      if (existing.result !== result || existing.status !== status || existing.trend !== trend || existing.conclusion !== conclusion) {
        Object.assign(existing, { result, status, trend, conclusion, savedAt });
        changed = true;
      }
      return;
    }

    state.records.unshift({
      id: recordId,
      match: `${match.home.name} vs ${match.away.name}`,
      result,
      status,
      trend,
      conclusion,
      savedAt
    });
    changed = true;
  });

  if (changed) persistRecords();
  if (learned) persistCalibration();
}

function refreshRecordSnapshots() {
  let changed = false;
  let learned = false;
  state.records = state.records.map((record) => {
    const next = recordViewModel(record);
    if (applyLegacyScoreLearning(record)) learned = true;
    if (
      next.status !== record.status ||
      next.result !== record.result ||
      next.trend !== record.trend ||
      next.conclusion !== record.conclusion ||
      next.match !== record.match
    ) {
      changed = true;
    }
    return next;
  });
  if (changed) persistRecords();
  if (learned) persistCalibration();
}

function applyLegacyScoreLearning(record) {
  const score = String(record.result || record.trend || "").match(/(\d+\s*-\s*\d+)/)?.[1];
  const predictedScores = String(record.trend || "").match(/赛前输出[:：][^；。]*?(\d+\s*-\s*\d+(?:\/\d+\s*-\s*\d+)?)/)?.[1];
  if (!score || !predictedScores) return false;
  const recordId = record.id || `auto-legacy-${normalizeTeamName(record.match)}-${String(record.savedAt || "").replace(/\D/g, "")}`;
  const learnedKey = `legacy-score-${recordId}`;
  if (state.calibration.learnedMatches[learnedKey]) return false;
  applyScoreCalibrationFromResult(score, { scoreOptions: predictedScores.split("/") });
  record.id = recordId;
  state.calibration.learnedMatches[learnedKey] = {
    status: "比分复盘",
    actual: score,
    predicted: predictedScores,
    learnedAt: new Date().toISOString()
  };
  return true;
}

function teamsMatch(event, match) {
  const competitors = event.competitions?.[0]?.competitors || [];
  const eventHome = competitors.find((item) => item.homeAway === "home")?.team;
  const eventAway = competitors.find((item) => item.homeAway === "away")?.team;
  const home = normalizeTeamName(event.home_team || eventHome?.displayName || eventHome?.name || eventHome?.shortDisplayName);
  const away = normalizeTeamName(event.away_team || eventAway?.displayName || eventAway?.name || eventAway?.shortDisplayName);
  const expectedHome = normalizeTeamName(match.espn?.home || match.home.name);
  const expectedAway = normalizeTeamName(match.espn?.away || match.away.name);
  if (!home || !away || !expectedHome || !expectedAway) return false;
  return (
    (home.includes(expectedHome) || expectedHome.includes(home)) &&
    (away.includes(expectedAway) || expectedAway.includes(away))
  ) || (
    (home.includes(expectedAway) || expectedAway.includes(home)) &&
    (away.includes(expectedHome) || expectedHome.includes(away))
  );
}

function convertH2hOdds(event, match) {
  const bookmaker = event.bookmakers?.[0];
  const market = bookmaker?.markets?.find((item) => item.key === "h2h");
  if (!market) return null;

  const outcomes = {};
  market.outcomes.forEach((outcome) => {
    outcomes[normalizeTeamName(outcome.name)] = Number(outcome.price);
  });

  const homeKey = normalizeTeamName(match.espn?.home || match.home.name);
  const awayKey = normalizeTeamName(match.espn?.away || match.away.name);
  const homePrice = Object.entries(outcomes).find(([key]) => key.includes(homeKey) || homeKey.includes(key))?.[1];
  const awayPrice = Object.entries(outcomes).find(([key]) => key.includes(awayKey) || awayKey.includes(key))?.[1];
  const drawPrice = Object.entries(outcomes).find(([key]) => key === "draw" || key === "tie")?.[1];
  if (!homePrice || !awayPrice) return null;

  const impliedHome = 1 / homePrice;
  const impliedAway = 1 / awayPrice;
  const impliedDraw = drawPrice ? 1 / drawPrice : 0.28;
  const edge = impliedHome - impliedAway;

  return {
    source: `${bookmaker.title || bookmaker.key} via The Odds API`,
    fetchedAt: new Date().toISOString(),
    homePrice,
    drawPrice,
    awayPrice,
    heat: clamp(round(Math.max(impliedHome, impliedAway) * 100 + Math.abs(edge) * 22), 35, 88),
    current: clamp(round(-edge * 4) / 4, -2, 2),
    opening: match.market.opening,
    movement: clamp(round((-edge - match.market.current / 4) * 4) / 4, -1, 1),
    drawPressure: clamp(round(impliedDraw * 100), 18, 42)
  };
}

function utcDateKey(iso) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "UTC",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date(iso)).replaceAll("-", "");
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function scheduleFetchDateKeys() {
  const start = currentChinaNow();
  return Array.from({ length: SCHEDULE_LOOKAHEAD_DAYS + 1 }, (_, index) => {
    const day = addDays(start, index - 1);
    return new Intl.DateTimeFormat("en-CA", {
      timeZone: "UTC",
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).format(day).replaceAll("-", "");
  });
}

function mergeSchedules(networkMatches) {
  const byKey = new Map();
  [...baseMatches, ...networkMatches].forEach((match) => {
    const localized = localizeScheduleMatch(match);
    const key = match.id || `${normalizeTeamName(match.espn?.home || match.home.name)}-${normalizeTeamName(match.espn?.away || match.away.name)}-${chinaDateKey(match.beijingTime)}`;
    byKey.set(key, localized);
  });
  matches = [...byKey.values()].sort((a, b) => matchStartTime(a) - matchStartTime(b));
}

function readScheduleCache() {
  try {
    const cache = JSON.parse(localStorage.getItem(SCHEDULE_CACHE_KEY) || "{}");
    if (!cache.fetchedAt || !Array.isArray(cache.matches)) return null;
    if (Date.now() - new Date(cache.fetchedAt).getTime() > SCHEDULE_CACHE_TTL_MS) return null;
    return cache;
  } catch (error) {
    return null;
  }
}

function applyCachedSchedule() {
  const cache = readScheduleCache();
  if (!cache) return false;
  mergeSchedules(cache.matches);
  state.scheduleFetchedAt = cache.fetchedAt;
  state.scheduleStatus = `使用已缓存赛程（${new Date(cache.fetchedAt).toLocaleString("zh-CN", { hour12: false })}）`;
  return true;
}

function writeScheduleCache(networkMatches) {
  const payload = {
    fetchedAt: new Date().toISOString(),
    matches: networkMatches
  };
  localStorage.setItem(SCHEDULE_CACHE_KEY, JSON.stringify(payload));
  return payload;
}

async function fetchScheduleData() {
  const responses = await Promise.allSettled(
    scheduleFetchDateKeys().map(async (dateKey) => {
      const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?dates=${dateKey}`, { cache: "no-store" });
      if (!response.ok) throw new Error(`ESPN ${response.status}`);
      return response.json();
    })
  );
  const networkMatches = responses
    .filter((item) => item.status === "fulfilled")
    .flatMap((item) => item.value.events || [])
    .map(scheduleMatchFromEvent)
    .filter(Boolean);

  const unique = [...new Map(networkMatches.map((match) => [match.id, match])).values()];
  if (!unique.length) throw new Error("未获取到后续赛程");
  const cache = writeScheduleCache(unique);
  mergeSchedules(unique);
  state.scheduleFetchedAt = cache.fetchedAt;
  state.scheduleStatus = `在线赛程已更新（ESPN scoreboard，${unique.length} 场）`;
  return unique.length;
}

async function refreshScheduleData() {
  if (applyCachedSchedule()) {
    reconcileSelectedMatchDate();
    render();
  }
  try {
    const count = await fetchScheduleData();
    state.scheduleStatus = `在线赛程已更新（ESPN scoreboard，${count} 场）`;
  } catch (error) {
    if (!state.scheduleFetchedAt) state.scheduleStatus = "在线赛程暂不可用，使用内置赛程";
  }
  reconcileSelectedMatchDate();
  sideScheduleMatches().forEach((match) => {
    state.liveData[match.id] = state.liveData[match.id] || fallbackLive(match);
  });
  render();
}

function extractScoreEvent(event, match) {
  if (!teamsMatch(event, match)) return null;
  const competition = event.competitions?.[0];
  const competitors = competition?.competitors || [];
  const matchHomeKey = normalizeTeamName(match.espn?.home || match.home.name);
  const matchAwayKey = normalizeTeamName(match.espn?.away || match.away.name);
  const home = competitors.find((item) => {
    const key = normalizeTeamName(item.team?.displayName || item.team?.name || item.team?.shortDisplayName);
    return key.includes(matchHomeKey) || matchHomeKey.includes(key);
  });
  const away = competitors.find((item) => {
    const key = normalizeTeamName(item.team?.displayName || item.team?.name || item.team?.shortDisplayName);
    return key.includes(matchAwayKey) || matchAwayKey.includes(key);
  });
  if (!home || !away) return null;

  return {
    source: "ESPN scoreboard",
    fetchedAt: new Date().toISOString(),
    status: competition.status?.type?.shortDetail || event.status?.type?.shortDetail || "未开始",
    completed: Boolean(competition.status?.type?.completed || event.status?.type?.completed),
    state: competition.status?.type?.state || event.status?.type?.state || "pre",
    homeScore: Number(home.score || 0),
    awayScore: Number(away.score || 0)
  };
}

async function fetchScoreboardData() {
  const dateKeys = [...new Set(matches.map((match) => utcDateKey(match.beijingTime)))];
  const responses = await Promise.allSettled(
    dateKeys.map(async (dateKey) => {
      const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?dates=${dateKey}`);
      if (!response.ok) throw new Error(`ESPN ${response.status}`);
      return response.json();
    })
  );

  const events = responses
    .filter((item) => item.status === "fulfilled")
    .flatMap((item) => item.value.events || []);

  const scoreData = {};
  matches.forEach((match) => {
    const score = events.map((event) => extractScoreEvent(event, match)).find(Boolean);
    if (score) scoreData[match.id] = score;
  });
  state.scoreData = scoreData;
  return Object.keys(scoreData).length;
}

function currentUsageMonth() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: CHINA_TIME_ZONE,
    year: "numeric",
    month: "2-digit"
  }).format(currentChinaNow());
}

function readOddsUsage() {
  try {
    const usage = JSON.parse(localStorage.getItem(ODDS_USAGE_KEY) || "{}");
    if (usage.month === currentUsageMonth()) return usage;
  } catch (error) {
    // Ignore broken local usage state.
  }
  return { month: currentUsageMonth(), requests: 0, estimatedCredits: 0 };
}

function writeOddsUsage(usage) {
  localStorage.setItem(ODDS_USAGE_KEY, JSON.stringify(usage));
}

function estimateOddsCredits() {
  const regionCount = Math.max(1, state.oddsRegions.split(",").filter(Boolean).length);
  return regionCount;
}

function readOddsCache() {
  try {
    const cache = JSON.parse(localStorage.getItem(ODDS_CACHE_KEY) || "{}");
    if (!cache.fetchedAt || !cache.data) return null;
    if (Date.now() - new Date(cache.fetchedAt).getTime() > ODDS_CACHE_TTL_MS) return null;
    if (cache.sportKey !== state.oddsSportKey || cache.regions !== state.oddsRegions) return null;
    return cache;
  } catch (error) {
    return null;
  }
}

function writeOddsCache(data) {
  localStorage.setItem(ODDS_CACHE_KEY, JSON.stringify({
    fetchedAt: new Date().toISOString(),
    sportKey: state.oddsSportKey,
    regions: state.oddsRegions,
    data
  }));
}

async function fetchOddsData({ force = false } = {}) {
  if (!state.oddsApiKey) return { ok: false, reason: "未配置 The Odds API Key" };
  const cached = readOddsCache();
  if (!force && cached) {
    state.oddsData = cached.data;
    return { ok: true, count: Object.keys(cached.data).length, cached: true, fetchedAt: cached.fetchedAt };
  }
  const usage = readOddsUsage();
  const nextCredits = estimateOddsCredits();
  if (usage.estimatedCredits + nextCredits > ODDS_MONTHLY_BUDGET) {
    return { ok: false, reason: `The Odds API 月度预算保护：已估算 ${usage.estimatedCredits}/${ODDS_MONTHLY_BUDGET} credits，本次跳过` };
  }
  const params = new URLSearchParams({
    apiKey: state.oddsApiKey,
    regions: state.oddsRegions,
    markets: "h2h",
    oddsFormat: "decimal",
    dateFormat: "iso"
  });
  const url = `https://api.the-odds-api.com/v4/sports/${encodeURIComponent(state.oddsSportKey)}/odds/?${params}`;
  const response = await fetch(url);
  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    if (response.status === 401) throw new Error("The Odds API 鉴权失败：Key 无效或未授权");
    if (response.status === 403) throw new Error("The Odds API 权限不足或套餐不可用");
    if (response.status === 404) throw new Error(`The Odds API 未找到赛事类型：${state.oddsSportKey}`);
    if (response.status === 429) throw new Error("The Odds API 请求额度已用尽");
    throw new Error(`The Odds API ${response.status}${detail ? `：${detail.slice(0, 80)}` : ""}`);
  }
  const events = await response.json();
  const matched = {};
  matches.forEach((match) => {
    const event = events.find((item) => teamsMatch(item, match));
    const converted = event ? convertH2hOdds(event, match) : null;
    if (converted) matched[match.id] = converted;
  });
  state.oddsData = matched;
  writeOddsCache(matched);
  usage.requests += 1;
  usage.estimatedCredits += nextCredits;
  writeOddsUsage(usage);
  return { ok: true, count: Object.keys(matched).length, cached: false, usage };
}

async function refreshLiveData() {
  state.liveStatus = "刷新中";
  render();
  const todayMatches = [...new Set([...todayDisplayMatches(), ...predictionDayMatches()])];
  const [weatherResults, oddsResult, scoreResult] = await Promise.all([
    Promise.allSettled(todayMatches.map((match) => fetchWeather(match))),
    fetchOddsData().catch((error) => ({ ok: false, reason: error.message })),
    fetchScoreboardData().catch(() => 0)
  ]);
  weatherResults.forEach((result, index) => {
    const match = todayMatches[index];
    state.liveData[match.id] = result.status === "fulfilled" ? result.value : fallbackLive(match);
  });
  state.lastUpdated = new Date();
  const matchedSources = [...new Set(Object.values(state.oddsData).map((item) => item.source).filter(Boolean))];
  const oddsSummary = summarizeOddsSources(matchedSources);
  const usage = readOddsUsage();
  const quotaText = `盘口额度 ${usage.estimatedCredits}/${ODDS_MONTHLY_BUDGET} credits`;
  const cacheText = oddsResult.cached ? `，使用缓存 ${new Date(oddsResult.fetchedAt).toLocaleString("zh-CN", { hour12: false })}` : "";
  state.liveStatus = oddsResult.ok && matchedSources.length
    ? `已更新，比分匹配 ${scoreResult} 场，${oddsSummary}${cacheText}，${quotaText}`
    : `已更新，比分匹配 ${scoreResult} 场，盘口降级为内置因子${oddsResult.reason ? `（${oddsResult.reason.replace("The Odds API ", "")}）` : ""}，${quotaText}`;
  syncCompletedVerifications();
  render();
}

function summarizeOddsSources(sources) {
  if (!sources.length) return "盘口使用内置因子";
  const apiNames = [...new Set(sources.map((source) => source.includes("The Odds API") ? "The Odds API" : source.split(" via ")[0]).filter(Boolean))];
  const bookmakerCount = sources.length;
  return `外部实时盘口：${apiNames[0]}${apiNames.length > 1 ? `等 ${apiNames.length} 个接口` : ""}（${bookmakerCount} 家盘口）`;
}

function decimalFromProbability(probability) {
  return clamp(Number((1 / clamp(probability, 0.08, 0.82)).toFixed(2)), 1.22, 12);
}

function kellyFraction(probabilityPercent, decimalOdds) {
  const probability = clamp(probabilityPercent / 100, 0.01, 0.95);
  const b = Math.max(0.01, decimalOdds - 1);
  return clamp((probability * decimalOdds - 1) / b, -0.35, 0.35);
}

function deriveKellyModel(match, analyst, market) {
  const homeOdds = market.homePrice || decimalFromProbability(analyst.probabilities.home / 100);
  const drawOdds = market.drawPrice || decimalFromProbability(analyst.probabilities.draw / 100);
  const awayOdds = market.awayPrice || decimalFromProbability(analyst.probabilities.away / 100);
  const homeKelly = kellyFraction(analyst.probabilities.home, homeOdds);
  const drawKelly = kellyFraction(analyst.probabilities.draw, drawOdds);
  const awayKelly = kellyFraction(analyst.probabilities.away, awayOdds);
  const edge = clamp((homeKelly - awayKelly) * 20, -7, 7);
  const drawBias = clamp(drawKelly * 14, -4, 5);
  const risk = clamp(round(44 + Math.max(homeKelly, drawKelly, awayKelly) * 38 - Math.min(homeKelly, awayKelly) * 12), 18, 76);
  const best = [
    { key: "胜", label: `${match.home.name}胜`, value: homeKelly },
    { key: "平", label: "平局", value: drawKelly },
    { key: "负", label: `${match.away.name}胜`, value: awayKelly }
  ].sort((a, b) => b.value - a.value)[0];

  return {
    homeOdds,
    drawOdds,
    awayOdds,
    homeKelly,
    drawKelly,
    awayKelly,
    edge,
    drawBias,
    risk,
    best
  };
}

function scoreModel(match, live) {
  const calibration = state.calibration;
  const market = match.market;
  const timeSlot = earthlyHour(match.localTime);
  const star = starPlayerFactor(match);
  const rankEdge = clamp((match.away.fifaRank - match.home.fifaRank) * 0.45, -18, 18);
  const strengthEdge = (match.home.strength - match.away.strength) * 0.9 * calibration.strengthWeight;
  const formEdge = (match.home.form - match.away.form) * 0.55 * calibration.formWeight;
  const attackDefenseEdge = (match.home.attack - match.away.defense + match.home.defense - match.away.attack) * 0.28;
  const historyEdge = (match.historyBalance - 50) * 0.22;
  const marketEdge = ((-market.current * 9) + (-(market.movement || 0) * 7) - Math.max(0, market.heat - 68) * 0.22) * calibration.marketWeight;
  const restEdge = (match.travel.homeRestDays - match.travel.awayRestDays) * 1.2;
  const travelEdge = clamp((match.travel.awayKm - match.travel.homeKm) / 1000, -7, 7) * 0.55;
  const weatherDrag = (live.temperature > 27 ? -1.6 : 0) + (live.windSpeed > 18 ? -1.2 : 0) + (live.precipitation > 40 ? -1.4 : 0);
  const altitudeEdge = match.venue.altitude > 1500 ? (match.travel.awayKm < match.travel.homeKm ? -2.5 : 1.5) : 0;
  const earthlyHourEdge = timeSlot.bias * (match.home.strength >= match.away.strength ? 1 : -1);

  const homeEdge =
    strengthEdge +
    formEdge +
    rankEdge +
    attackDefenseEdge +
    historyEdge +
    marketEdge +
    restEdge +
    travelEdge +
    weatherDrag +
    altitudeEdge +
    earthlyHourEdge +
    star.edge +
    calibration.homeEdgeBias;

  const drawIndex = clamp(
    48 - Math.abs(homeEdge) * 0.9 + Math.min(match.home.defense, match.away.defense) * 0.18 + live.precipitation * 0.05 + (timeSlot.bias < 0 ? 3 : 0) + star.drawLift + calibration.drawBias,
    18,
    58
  );
  const upsetIndex = clamp(
    36 +
      Math.max(0, market.heat - 58) * 0.38 +
      Math.max(0, 12 - Math.abs(homeEdge)) * 1.15 +
      drawIndex * 0.22 +
      Math.abs(match.home.fatigue - match.away.fatigue) * 0.16 +
      Math.abs(restEdge) * 0.18 +
      Math.max(0, live.windSpeed - 18) * 0.05 +
      star.upsetLift +
      calibration.upsetBias,
    18,
    84
  );

  return {
    rankEdge,
    strengthEdge,
    formEdge,
    attackDefenseEdge,
    historyEdge,
    marketEdge,
    market,
    restEdge,
    travelEdge,
    weatherDrag,
    altitudeEdge,
    earthlyHourEdge,
    star,
    timeSlot,
    homeEdge,
    drawIndex,
    upsetIndex,
    calibration
  };
}

function teamMarketValueEstimate(team) {
  return clamp(round(team.strength * 9.5 + Math.max(0, 80 - team.fifaRank) * 7.5 + team.experience * 2.2), 120, 1350);
}

function formatMarketValue(valueInMillionEuro) {
  const yiEuro = valueInMillionEuro / 100;
  if (yiEuro >= 1) {
    const text = yiEuro >= 10 ? yiEuro.toFixed(1) : yiEuro.toFixed(2);
    return `${text.replace(/\.0$/, "")}亿欧元`;
  }
  return `${round(valueInMillionEuro * 100)}万欧元`;
}

function teamStarProfile(team) {
  const profile = starPlayerProfiles[team.name];
  if (profile) return profile;
  const attack = clamp(round(team.attack * 0.84 + team.experience * 0.12), 52, 84);
  const creation = clamp(round(team.attack * 0.74 + team.form * 0.18 + team.experience * 0.08), 52, 84);
  const finishing = clamp(round(team.attack * 0.78 + team.form * 0.14 + Math.max(0, 80 - team.fifaRank) * 0.05), 52, 84);
  const defense = clamp(round(team.defense * 0.78 + team.experience * 0.16), 52, 84);
  const influence = clamp(round((attack + creation + finishing + defense) / 4 + Math.max(0, 70 - team.fifaRank) * 0.08), 52, 84);
  const depth = clamp(round(team.strength * 0.58 + team.experience * 0.24 + team.form * 0.12), 52, 84);
  return { attack, creation, finishing, defense, influence, depth, label: "阵容核心能力估算" };
}

function starPlayerFactor(match) {
  const home = teamStarProfile(match.home);
  const away = teamStarProfile(match.away);
  const attackEdge = (home.attack + home.creation * 0.72 + home.finishing * 0.88) - (away.attack + away.creation * 0.72 + away.finishing * 0.88);
  const controlEdge = (home.influence + home.depth * 0.42 + home.defense * 0.26) - (away.influence + away.depth * 0.42 + away.defense * 0.26);
  const edge = clamp(attackEdge * 0.045 + controlEdge * 0.035, -5.6, 5.6);
  const chanceCreation = clamp(((home.creation + away.creation) / 2 - 72) / 20, -0.32, 0.42);
  const finishingLift = clamp(((home.finishing + away.finishing) / 2 - 72) / 28, -0.22, 0.36);
  const bttsLift = clamp(((home.attack + away.attack) - (home.defense + away.defense)) / 120 + chanceCreation * 0.32, -0.12, 0.2);
  const drawLift = clamp(2.8 - Math.abs(edge) * 0.42 + Math.min(home.defense, away.defense) * 0.018 - Math.max(home.finishing, away.finishing) * 0.018, -2.8, 3.6);
  const upsetLift = clamp(Math.max(0, 88 - Math.max(home.depth, away.depth)) * 0.06 + Math.max(0, Math.min(home.influence, away.influence) - 78) * 0.05, 0, 3.2);
  return {
    home,
    away,
    edge,
    chanceCreation,
    finishingLift,
    bttsLift,
    drawLift,
    upsetLift,
    summary: `${match.home.name}：${home.label}；${match.away.name}：${away.label}`,
    source: "明星球员/核心阵容因子"
  };
}

function leagueCompetitiveness(team) {
  return clamp(round(45 + team.strength * 0.32 + Math.max(0, 70 - team.fifaRank) * 0.22 + team.experience * 0.16), 35, 88);
}

function recruitmentQuality(team) {
  return clamp(round(team.experience * 0.42 + team.strength * 0.36 + Math.max(0, 70 - team.fifaRank) * 0.22), 30, 92);
}

function recentProfile(team, side, match) {
  const sideRest = side === "home" ? match.travel.homeRestDays : match.travel.awayRestDays;
  const travelKm = side === "home" ? match.travel.homeKm : match.travel.awayKm;
  const trendRaw = team.form - team.fatigue * 0.22 + sideRest * 1.6 - Math.max(0, travelKm - 7000) / 1800;
  const wins = clamp(round((team.form - 48) / 7 + sideRest / 6), 1, 8);
  const draws = clamp(round(3 - Math.abs(team.form - 68) / 18 + team.defense / 90), 1, 5);
  const losses = clamp(10 - wins - draws, 0, 6);
  const goalsFor = clamp(Number((0.75 + team.attack / 58 + Math.max(0, team.form - 66) / 42).toFixed(2)), 0.6, 3.1);
  const goalsAgainst = clamp(Number((2.25 - team.defense / 58 + team.fatigue / 95).toFixed(2)), 0.55, 2.6);
  const shots = clamp(Number((7.5 + team.attack / 7.8 + Math.max(0, team.form - 65) / 5.5).toFixed(1)), 7, 19);
  const shotsOnTarget = clamp(Number((shots * (0.31 + team.attack / 520)).toFixed(1)), 2.3, 8.5);
  const xg = clamp(Number((goalsFor * 0.86 + shotsOnTarget * 0.16).toFixed(2)), 0.6, 2.9);
  const defensiveActions = clamp(round(team.defense * 0.28 + team.experience * 0.12 + team.fatigue * 0.08), 22, 58);
  const cleanSheetRate = clamp(round(team.defense * 0.43 - team.fatigue * 0.16 + sideRest * 1.2), 12, 58);
  const trend = trendRaw >= 66 ? "上升" : trendRaw <= 55 ? "下滑" : "平稳";
  return {
    record: `${wins}胜${draws}平${losses}负`,
    goalsFor,
    goalsAgainst,
    shots,
    shotsOnTarget,
    xg,
    defensiveActions,
    cleanSheetRate,
    trend,
    trendScore: trendRaw
  };
}

function tacticalProfile(team) {
  const attackTilt = team.attack - team.defense;
  let style = "均衡推进";
  if (attackTilt >= 7 && team.form >= 70) style = "高位逼抢";
  else if (attackTilt >= 4) style = "传控压迫";
  else if (team.defense - team.attack >= 6) style = "低位守反";
  else if (team.experience >= 78) style = "节奏控制";

  let formation = "4-2-3-1";
  if (style === "高位逼抢") formation = "4-3-3";
  if (style === "传控压迫") formation = "4-3-3 / 3-2-5";
  if (style === "低位守反") formation = "5-4-1";
  if (style === "节奏控制") formation = "4-1-4-1";

  const tempo = team.attack + team.form - team.fatigue > 132 ? "偏快" : team.defense + team.experience > 154 ? "偏慢" : "中速";
  return { style, formation, tempo };
}

function analystScoreOptions(homeGoals, awayGoals, wdl, totalGoals, bothTeamsScoreLean = 0) {
  const primary = `${homeGoals}-${awayGoals}`;
  let secondaryHome = homeGoals;
  let secondaryAway = awayGoals;
  if (wdl === "胜") {
    secondaryHome = clamp(totalGoals >= 2.9 ? homeGoals + 1 : homeGoals, awayGoals + 1, 5);
    secondaryAway = clamp((totalGoals >= 2.55 || bothTeamsScoreLean > 0.42) ? Math.max(1, awayGoals) : awayGoals, 0, 4);
  } else if (wdl === "负") {
    secondaryAway = clamp(totalGoals >= 2.9 ? awayGoals + 1 : awayGoals, homeGoals + 1, 5);
    secondaryHome = clamp((totalGoals >= 2.55 || bothTeamsScoreLean > 0.42) ? Math.max(1, homeGoals) : homeGoals, 0, 4);
  } else {
    const drawAlt = clamp(homeGoals === 1 ? 0 : 1, 0, 2);
    secondaryHome = drawAlt;
    secondaryAway = drawAlt;
  }
  const secondary = `${secondaryHome}-${secondaryAway}`;
  return primary === secondary ? [primary, wdl === "平" ? "1-1" : wdl === "胜" ? "2-0" : "0-2"] : [primary, secondary];
}

function deriveAnalystModel(match, live, baseModel) {
  const homeProfile = recentProfile(match.home, "home", match);
  const awayProfile = recentProfile(match.away, "away", match);
  const homeTactics = tacticalProfile(match.home);
  const awayTactics = tacticalProfile(match.away);
  const star = baseModel.star || starPlayerFactor(match);
  const homeValue = teamMarketValueEstimate(match.home);
  const awayValue = teamMarketValueEstimate(match.away);
  const homeLeague = leagueCompetitiveness(match.home);
  const awayLeague = leagueCompetitiveness(match.away);
  const homeRecruitment = recruitmentQuality(match.home);
  const awayRecruitment = recruitmentQuality(match.away);
  const baselineEdge =
    (match.away.fifaRank - match.home.fifaRank) * 0.16 +
    (homeValue - awayValue) / 55 +
    (homeLeague - awayLeague) * 0.13 +
    (homeRecruitment - awayRecruitment) * 0.08 +
    (match.home.experience - match.away.experience) * 0.11;
  const recentEdge =
    (homeProfile.trendScore - awayProfile.trendScore) * 0.22 +
    (homeProfile.xg - awayProfile.xg) * 3.4 +
    (awayProfile.goalsAgainst - homeProfile.goalsAgainst) * 2.3 +
    (homeProfile.cleanSheetRate - awayProfile.cleanSheetRate) * 0.06;
  const tacticalEdge =
    (match.home.attack - match.away.defense) * 0.12 -
    (match.away.attack - match.home.defense) * 0.12 +
    (homeTactics.style === "高位逼抢" && awayTactics.style === "低位守反" ? 1.6 : 0) +
    (awayTactics.style === "高位逼抢" && homeTactics.style === "低位守反" ? -1.6 : 0);
  const starEdge = star.edge * 1.18;
  const externalEdge =
    baseModel.restEdge * 0.72 +
    baseModel.travelEdge * 0.45 +
    baseModel.weatherDrag * 0.55 +
    baseModel.altitudeEdge * 0.7;
  const marketLean = baseModel.marketEdge * 0.36;
  const analystEdge = clamp(baselineEdge + recentEdge + tacticalEdge + starEdge + externalEdge + marketLean, -24, 24);
  const drawPressure = clamp(
    30 +
      Math.max(0, 9 - Math.abs(analystEdge)) * 1.35 +
      (match.home.defense + match.away.defense) / 18 -
      (homeProfile.xg + awayProfile.xg - 2.4) * 4 +
      (live.precipitation > 40 ? 4 : 0),
    18,
    46
  );
  const homeRaw = 42 + analystEdge * 1.08 - drawPressure * 0.18;
  const awayRaw = 42 - analystEdge * 1.08 - drawPressure * 0.18;
  const drawRaw = drawPressure;
  const totalRaw = homeRaw + awayRaw + drawRaw;
  const probabilities = {
    home: round((homeRaw / totalRaw) * 100),
    draw: round((drawRaw / totalRaw) * 100),
    away: round((awayRaw / totalRaw) * 100)
  };
  const maxPick = Math.max(probabilities.home, probabilities.draw, probabilities.away);
  const wdl = maxPick === probabilities.home ? "胜" : maxPick === probabilities.away ? "负" : "平";
  const bothTeamsScoreLean = clamp(
    0.26 +
      (homeProfile.xg + awayProfile.xg - 2.1) * 0.13 +
      (homeProfile.goalsAgainst + awayProfile.goalsAgainst - 2.1) * 0.1 +
      (100 - homeProfile.cleanSheetRate - awayProfile.cleanSheetRate) / 260 +
      star.bttsLift +
      state.calibration.bothTeamsScoreBias +
      state.calibration.winnerConcedeBias * 0.55,
    0.08,
    0.76
  );
  const totalGoals = clamp(Number((homeProfile.xg * 0.47 + awayProfile.xg * 0.47 + 0.35 + star.chanceCreation * 0.24 + star.finishingLift * 0.3 + state.calibration.totalGoalsBias - (live.windSpeed > 18 ? 0.16 : 0) - (live.precipitation > 40 ? 0.18 : 0)).toFixed(2)), 1.3, 4.6);
  let homeGoals = clamp(round(1.05 + (match.home.attack - match.away.defense) / 34 + analystEdge / 42 + totalGoals / 8 + (bothTeamsScoreLean > 0.52 ? 0.12 : 0)), 0, 5);
  let awayGoals = clamp(round(0.95 + (match.away.attack - match.home.defense) / 34 - analystEdge / 42 + totalGoals / 8 + (bothTeamsScoreLean > 0.52 ? 0.12 : 0)), 0, 5);
  if (wdl === "胜" && homeGoals <= awayGoals) homeGoals = awayGoals + 1;
  if (wdl === "负" && awayGoals <= homeGoals) awayGoals = homeGoals + 1;
  if (wdl === "平") {
    const drawGoals = clamp(round(totalGoals / 2), 0, 2);
    homeGoals = drawGoals;
    awayGoals = drawGoals;
  }
  const scoreOptions = analystScoreOptions(homeGoals, awayGoals, wdl, totalGoals, bothTeamsScoreLean);
  const injuryImpact = Math.abs(match.home.fatigue - match.away.fatigue) > 9 ? "疲劳差提示轮换/伤停风险需要赛前名单复核" : "暂无外部伤停接口，按疲劳与阵容稳定度估算";
  const tacticalMismatch = Math.abs(tacticalEdge) + Math.abs(recentEdge - baselineEdge) * 0.18;
  const upsetRisk = clamp(
    round(30 + baseModel.upsetIndex * 0.28 + drawPressure * 0.42 + tacticalMismatch * 0.72 - Math.abs(analystEdge) * 0.52),
    18,
    78
  );
  const keyFactors = [
    `实力基线 ${match.home.name} ${round(baselineEdge) >= 0 ? "占优" : "受压"}：排名、身价代理值与联赛竞争力合计边际 ${round(baselineEdge)}`,
    `近10场模型 ${homeProfile.record} 对 ${awayProfile.record}，xG ${homeProfile.xg}/${awayProfile.xg}，趋势 ${homeProfile.trend}/${awayProfile.trend}`,
    `战术对位 ${homeTactics.style}(${homeTactics.formation}) vs ${awayTactics.style}(${awayTactics.formation})，节奏 ${homeTactics.tempo}/${awayTactics.tempo}`,
    `明星球员因子：${star.summary}，核心边际 ${round(starEdge)}`,
    `外部因素：${venueName(match)}，天气与旅途合计修正 ${round(externalEdge)}，${injuryImpact}`
  ];
  return {
    source: "战术数据分析师模型（实时天气/盘口 + 内置球队因子估算）",
    baselineEdge,
    recentEdge,
    tacticalEdge,
    starEdge,
    star,
    externalEdge,
    marketLean,
    tacticalMismatch,
    analystEdge,
    drawPressure,
    probabilities,
    wdl,
    totalGoals,
    bothTeamsScoreLean,
    scoreOptions,
    upsetRisk,
    homeValue,
    awayValue,
    homeLeague,
    awayLeague,
    homeRecruitment,
    awayRecruitment,
    homeProfile,
    awayProfile,
    homeTactics,
    awayTactics,
    injuryImpact,
    keyFactors
  };
}

function applyKellyCalibrationFromResult(match, revealed, status, directionError, missScale) {
  const cal = state.calibration;
  const kellyEdge = revealed.kellyEdge || 0;
  const factor = 0.014 * missScale;
  if (directionError !== 0) {
    cal.kellyWeight = clamp(cal.kellyWeight + directionError * Math.sign(kellyEdge || directionError) * factor, 0.78, 1.22);
  }
  if (status === "命中") cal.kellyWeight = clamp(cal.kellyWeight + 0.004, 0.78, 1.22);
  if (status === "失准") cal.kellyWeight = clamp(cal.kellyWeight - 0.006, 0.78, 1.22);
}

function deriveOracle(match, model, live) {
  const seedText = `${match.id}|${match.beijingTime}|${match.localTime}|${model.timeSlot.branch}|${match.venue.lat}|${match.venue.lon}|${round(model.homeEdge)}|${round(live.temperature)}|${round(live.windSpeed)}`;
  let seed = 0;
  for (const char of seedText) seed = (seed * 31 + char.charCodeAt(0)) % 9973;

  const main = hexagrams[seed % hexagrams.length];
  const movingIndex = seed % 6;
  const changedLines = main.lines.map((line, index) => (index === movingIndex ? (line === "yang" ? "yin" : "yang") : line));
  const changed = hexagrams.find((item) => item.lines.join("") === changedLines.join("")) || hexagrams[(seed + movingIndex + 1) % hexagrams.length];
  const mainLines = main.lines.map((line, index) => (index === movingIndex ? `${line}-changing` : line));
  const mainTrigrams = splitHexagram(main.lines);
  const changedTrigrams = splitHexagram(changed.lines);
  const timeElement = branchElements[model.timeSlot.branch] || "earth";
  const usefulGod = matchUsefulGod(match);
  const worldIndex = seed % 6;
  const responseIndex = (worldIndex + 3) % 6;
  const movingRelative = relativeForLine(movingIndex, usefulGod);
  const worldElement = worldIndex >= 3 ? mainTrigrams.upper.element : mainTrigrams.lower.element;
  const responseElement = responseIndex >= 3 ? mainTrigrams.upper.element : mainTrigrams.lower.element;
  const movingElement = movingIndex >= 3 ? mainTrigrams.upper.element : mainTrigrams.lower.element;
  const worldVsResponse = worldResponseScore(worldElement, responseElement);
  const timeToWorld = elementSupportScore(timeElement, worldElement);
  const timeToMoving = elementSupportScore(timeElement, movingElement);
  const usefulGodScore = sixRelativeWeights[movingRelative] || 0;
  const movingSide = movingIndex < 3 ? 1 : -1;
  const movingChange = main.lines[movingIndex] === "yin" ? 1.15 : -0.9;
  const movingLineScore = movingSide * movingChange + timeToMoving * 0.35;
  const lowerField = elementSupportScore(timeElement, mainTrigrams.lower.element) + trigramPolarityScore(main.lines.slice(0, 3));
  const upperField = elementSupportScore(timeElement, mainTrigrams.upper.element) + trigramPolarityScore(main.lines.slice(3, 6));
  const trigramFieldEdge = clamp((lowerField - upperField) * 0.85, -4, 4);
  const changedElementShift = worldResponseScore(changedTrigrams.lower.element, changedTrigrams.upper.element) * 0.55;
  const hexagramMomentum = main.bias * 0.38 + changed.bias * 0.32;
  const oracleBias =
    hexagramMomentum +
    worldVsResponse * 1.15 +
    timeToWorld * 0.9 +
    usefulGodScore * 0.9 +
    movingLineScore +
    trigramFieldEdge +
    changedElementShift;

  return {
    mainHexagram: main.name,
    changedHexagram: changed.name,
    mainYao: mainLines,
    changedYao: changed.lines,
    movingIndex: movingIndex + 1,
    oracleBias,
    mainTrigrams,
    changedTrigrams,
    timeElement,
    usefulGod,
    movingRelative,
    worldIndex: worldIndex + 1,
    responseIndex: responseIndex + 1,
    worldElement,
    responseElement,
    movingElement,
    worldVsResponse,
    timeToWorld,
    timeToMoving,
    usefulGodScore,
    movingLineScore,
    trigramFieldEdge,
    changedElementShift,
    hexagramMomentum
  };
}

function buildScoreOptions(homeGoals, awayGoals, wdl, model, finalEdge, scoreContext = {}) {
  const options = [`${homeGoals}-${awayGoals}`];
  const highTempo = model.drawIndex < 38 || Math.abs(finalEdge) > 12;
  const cautious = model.upsetIndex > 60 || model.drawIndex > 48;
  const bothTeamsScoreLean = scoreContext.bothTeamsScoreLean ?? 0.32;
  const totalGoals = scoreContext.totalGoals ?? homeGoals + awayGoals;
  const drawCandidateLean = scoreContext.drawCandidateLean ?? 0;
  const winnerConcedeLean = clamp(bothTeamsScoreLean + state.calibration.winnerConcedeBias + (totalGoals - 2.2) * 0.12, 0, 0.85);
  let altHome = homeGoals;
  let altAway = awayGoals;

  if (wdl === "胜") {
    if (cautious) {
      altHome = Math.max(1, awayGoals + 1);
      altAway = Math.max(0, awayGoals);
    } else if (highTempo) {
      altHome = clamp(homeGoals + 1, awayGoals + 1, 5);
      altAway = clamp(winnerConcedeLean > 0.38 ? Math.max(1, awayGoals) : awayGoals, 0, 4);
    } else {
      altHome = clamp(homeGoals, awayGoals + 1, 5);
      altAway = clamp(winnerConcedeLean > 0.34 ? Math.max(1, awayGoals) : Math.max(0, awayGoals - 1), 0, 4);
    }
    if (winnerConcedeLean > 0.48 && awayGoals === 0) altAway = 1;
  } else if (wdl === "负") {
    if (cautious) {
      altAway = Math.max(1, homeGoals + 1);
      altHome = Math.max(0, homeGoals);
    } else if (highTempo) {
      altAway = clamp(awayGoals + 1, homeGoals + 1, 5);
      altHome = clamp(winnerConcedeLean > 0.38 ? Math.max(1, homeGoals) : homeGoals, 0, 4);
    } else {
      altAway = clamp(awayGoals, homeGoals + 1, 5);
      altHome = clamp(winnerConcedeLean > 0.34 ? Math.max(1, homeGoals) : Math.max(0, homeGoals - 1), 0, 4);
    }
    if (winnerConcedeLean > 0.48 && homeGoals === 0) altHome = 1;
  } else {
    const drawGoals = homeGoals;
    const altDraw = cautious ? clamp(drawGoals + 1, 1, 3) : clamp(drawGoals - 1, 0, 2);
    altHome = altDraw;
    altAway = altDraw;
  }

  let alternative = `${altHome}-${altAway}`;
  if (wdl !== "平" && drawCandidateLean >= 56) {
    const drawGoals = clamp(round(totalGoals / 2), bothTeamsScoreLean > 0.4 ? 1 : 0, 2);
    alternative = `${drawGoals}-${drawGoals}`;
  }
  if (!options.includes(alternative)) options.push(alternative);
  if (options.length < 2) {
    const fallback = wdl === "平" ? (homeGoals === 0 ? "1-1" : "0-0") : wdl === "胜" ? (winnerConcedeLean > 0.42 ? "2-1" : "1-0") : (winnerConcedeLean > 0.42 ? "1-2" : "0-1");
    if (!options.includes(fallback)) options.push(fallback);
  }
  return options.slice(0, 2);
}

function scoreOptionsText(source) {
  const scores = source?.scoreOptions?.length ? source.scoreOptions : [source?.predictedScore].filter(Boolean);
  return scores.join("/");
}

function resultPickLabel(match, source) {
  const wdl = source?.wdl;
  if (wdl === "胜") return `${match.home.name}胜`;
  if (wdl === "负") return `${match.away.name}胜`;
  if (wdl === "平") return "平局";
  return "待起局";
}

function predictionResultText(match, source) {
  const scoreText = scoreOptionsText(source);
  const resultText = resultPickLabel(match, source);
  return scoreText ? `${resultText} · ${scoreText}` : resultText;
}

function predictionFullResultText(match, source) {
  const base = predictionResultText(match, source);
  return source?.halfFull ? `${base}｜半全场 ${source.halfFull}` : base;
}

function predictionReadableText(match, source) {
  if (!source) return "开始推演";
  const confidence = source.confidence ? `｜置信 ${source.confidence}%` : "";
  const halfFull = source.halfFull ? `｜半全场 ${source.halfFull}` : "";
  return `倾向：${resultPickLabel(match, source)}｜比分 ${scoreOptionsText(source)}${halfFull}${confidence}`;
}

function wdlFromOutcomeText(text) {
  if (!text) return "";
  if (String(text).includes("平局")) return "平";
  if (String(text).includes("胜")) return "胜负";
  return "";
}

function reviewLearningProfile() {
  const sampleRows = postMatchReviewSamples20260626.map((sample) => {
    const score = scoreMeta(parseScoreText(sample.score));
    const predictedScores = [];
    return { record: { status: "赛后样本" }, score, predicted: "", actual: sample.actualWdl === "平" ? "平局" : `${sample.actualWdl === "胜" ? sample.home : sample.away}胜`, predictedScores, sample };
  }).filter((item) => item.score);
  const profile = {
    samples: sampleRows.length,
    hitRate: 0.5,
    drawRate: 0.26,
    bothScoreRate: 0.44,
    avgTotalGoals: 2.45,
    scoreMissRate: 0.5,
    favoriteMissRate: 0.24,
    winnerConcedeRate: 0.34,
    upsetWinRate: 0.18,
    latestReviewNote: "已纳入北京时间 2026-06-26 凌晨 6 场完赛样本"
  };
  const rows = state.records.map(recordViewModel).map((record) => {
    const score = scoreMeta(parseScoreText(record.result || record.trend));
    const predicted = extractRecordOutcome(record.trend, /赛前输出[:：]\s*([^；。]+)/);
    const actual = extractRecordOutcome(record.trend, /真实赛果[:：]\s*([^；。]+)/) || extractRecordOutcome(record.result, /^(.+?)(?:\s*·|\s+-|\s+\d)/);
    const predictedScores = String(record.trend || "").match(/赛前输出[:：][^；。]*?(\d+\s*-\s*\d+(?:\/\d+\s*-\s*\d+)?)/)?.[1]?.split("/") || [];
    return { record, score, predicted, actual, predictedScores };
  }).filter((item) => item.score && item.actual);
  const learningRows = [...sampleRows, ...rows];
  if (!learningRows.length) return profile;

  profile.samples = learningRows.length;
  const userRows = rows.length ? rows : [];
  profile.hitRate = userRows.length ? userRows.filter((item) => item.record.status === "命中" || item.predicted === item.actual).length / userRows.length : 0.5;
  profile.drawRate = learningRows.filter((item) => item.actual === "平局").length / learningRows.length;
  profile.bothScoreRate = learningRows.filter((item) => item.score.bothScore).length / learningRows.length;
  profile.avgTotalGoals = learningRows.reduce((sum, item) => sum + item.score.total, 0) / learningRows.length;
  profile.scoreMissRate = userRows.length ? userRows.filter((item) => !item.predictedScores.includes(`${item.score.home}-${item.score.away}`)).length / userRows.length : 0.5;
  profile.favoriteMissRate = userRows.length ? userRows.filter((item) => item.predicted && item.actual && item.predicted !== item.actual && item.predicted !== "平局").length / userRows.length : 0.24;
  profile.winnerConcedeRate = learningRows.filter((item) => item.score.winnerConceded).length / learningRows.length;
  profile.upsetWinRate = sampleRows.filter((item) => item.sample?.note?.includes("热门方") || item.sample?.note?.includes("爆冷")).length / Math.max(1, sampleRows.length);
  return profile;
}

function deriveHalfFullPick(match, prediction, learning) {
  const edge = prediction.finalEdge;
  const drawLean = prediction.drawCandidateLean;
  const totalGoals = prediction.analyst.totalGoals;
  const firstHalfTempo = clamp(
    42 +
      Math.abs(edge) * 1.15 +
      (totalGoals - 2.2) * 10 +
      (prediction.model.timeSlot.bias > 0 ? 5 : -2) -
      prediction.model.drawIndex * 0.18,
    18,
    82
  );
  let half = "平";
  if (firstHalfTempo > 58 && edge > 7) half = "胜";
  if (firstHalfTempo > 58 && edge < -7) half = "负";
  if (drawLean > 62 || learning.drawRate > 0.34) half = "平";
  if (prediction.wdl === "平") return totalGoals >= 2.7 && learning.bothScoreRate > 0.48 ? "平/平（1-1节奏）" : "平/平";
  return `${half}/${prediction.wdl}`;
}

function derivePrediction(match) {
  return withSharedPredictionCalibration(() => derivePredictionCore(match));
}

function derivePredictionCore(match) {
  const live = fallbackLive(match);
  const learning = reviewLearningProfile();
  const model = scoreModel(match, live);
  const analyst = deriveAnalystModel(match, live, model);
  const kelly = deriveKellyModel(match, analyst, model.market);
  const oracle = deriveOracle(match, model, live);
  const oldEdge = model.homeEdge + oracle.oracleBias * state.calibration.oracleWeight;
  const analystShare = clamp(state.calibration.analystWeight, 0.72, 1.28);
  const kellyShare = clamp(state.calibration.kellyWeight, 0.75, 1.25);
  const starShare = clamp(0.9 + Math.max(0, analyst.star.home.influence + analyst.star.away.influence - 160) / 120, 0.9, 1.18);
  const finalEdge = oldEdge * 0.62 + analyst.analystEdge * 0.25 * analystShare + kelly.edge * 0.08 * kellyShare + analyst.star.edge * 0.05 * starShare;
  const drawPressure = model.drawIndex + kelly.drawBias + (Math.abs(finalEdge) < 5 ? 10 : 0);
  const drawCandidateLean = clamp(
    drawPressure +
      analyst.probabilities.draw * 0.42 +
      Math.max(0, 10 - Math.abs(finalEdge)) * 1.45 +
      Math.max(0, 7 - Math.abs(analyst.analystEdge)) * 0.8 +
      state.calibration.drawBias * 1.4 +
      (learning.drawRate - 0.26) * 18 +
      (learning.favoriteMissRate - 0.24) * 8 -
      Math.abs(analyst.star.edge) * 0.45,
    0,
    100
  );

  let wdl = "平";
  if (drawCandidateLean < 64 && finalEdge > 6 && drawPressure < 53) wdl = "胜";
  if (drawCandidateLean < 64 && finalEdge < -6 && drawPressure < 53) wdl = "负";

  const bothTeamsScoreLean = clamp(
    (analyst.bothTeamsScoreLean || 0.32) +
      state.calibration.bothTeamsScoreBias * 0.55 +
      state.calibration.winnerConcedeBias * 0.65 +
      (analyst.totalGoals - 2.2) * 0.08 +
      (learning.bothScoreRate - 0.44) * 0.28 +
      (learning.winnerConcedeRate - 0.34) * 0.22 +
      analyst.star.bttsLift * 0.55,
    0.08,
    0.82
  );
  const learnedGoalShift = clamp((learning.avgTotalGoals - 2.45) * 0.2 + (learning.scoreMissRate - 0.5) * 0.08, -0.18, 0.26);
  const starGoalLift = analyst.star.chanceCreation * 0.14 + analyst.star.finishingLift * 0.18;
  const baseHomeGoals = 1.05 + (match.home.attack - match.away.defense) / 32 + finalEdge / 40 + analyst.star.edge / 72 + (analyst.totalGoals + state.calibration.totalGoalsBias + learnedGoalShift + starGoalLift) / 12;
  const baseAwayGoals = 0.98 + (match.away.attack - match.home.defense) / 32 - finalEdge / 40 - analyst.star.edge / 72 + (analyst.totalGoals + state.calibration.totalGoalsBias + learnedGoalShift + starGoalLift) / 12;
  const weatherGoalDrag = live.windSpeed > 18 || live.precipitation > 40 ? -0.25 : 0;
  const bttsLift = bothTeamsScoreLean > 0.48 ? 0.22 : bothTeamsScoreLean > 0.38 ? 0.12 : 0;
  let homeGoals = clamp(round(baseHomeGoals + weatherGoalDrag + bttsLift + (wdl === "胜" ? 0.35 : 0)), 0, 5);
  let awayGoals = clamp(round(baseAwayGoals + weatherGoalDrag + bttsLift + (wdl === "负" ? 0.35 : 0)), 0, 5);

  if (wdl === "胜" && homeGoals <= awayGoals) homeGoals = awayGoals + 1;
  if (wdl === "负" && awayGoals <= homeGoals) awayGoals = homeGoals + 1;
  if (wdl === "胜" && awayGoals === 0 && bothTeamsScoreLean > 0.5 && homeGoals >= 2) awayGoals = 1;
  if (wdl === "负" && homeGoals === 0 && bothTeamsScoreLean > 0.5 && awayGoals >= 2) homeGoals = 1;
  if (wdl === "平") {
    const drawGoals = clamp(round((homeGoals + awayGoals) / 2), 0, 2);
    homeGoals = drawGoals;
    awayGoals = drawGoals;
  }

  const confidence = clamp(round(52 + Math.abs(finalEdge) * 1.22 - (model.upsetIndex * 0.07 + analyst.upsetRisk * 0.05 + kelly.risk * 0.03)), 50, 88);
  const scores = {
    power: clamp(round(50 + (match.home.strength - match.away.strength) + model.rankEdge), 0, 100),
    form: clamp(round(50 + match.home.form - match.away.form), 0, 100),
    history: clamp(round(match.historyBalance), 0, 100),
    market: clamp(round(50 + model.marketEdge), 0, 100),
    analyst: clamp(round(50 + analyst.analystEdge), 0, 100),
    upset: round((model.upsetIndex + analyst.upsetRisk + kelly.risk) / 3)
  };

  const scoreOptions = buildScoreOptions(homeGoals, awayGoals, wdl, model, finalEdge, {
    bothTeamsScoreLean,
    totalGoals: analyst.totalGoals + learnedGoalShift,
    drawCandidateLean
  });
  const halfFull = deriveHalfFullPick(match, { finalEdge, drawCandidateLean, analyst, model, wdl }, learning);
  const trend = `算法倾向${predictionFullResultText(match, { wdl, scoreOptions, halfFull })}。`;
  const risk = model.upsetIndex > 60
    ? "冷门指数偏高，盘口热度、强弱差收窄、平局压力和战术错配可能导致赛果偏离基础实力。"
    : "冷门指数中低，但仍需关注临场阵容、红黄牌、早段进球和战术执行偏差。";

  return {
    match,
    live,
    model,
    analyst,
    kelly,
    oracle,
    learning,
    oldEdge,
    finalEdge,
    drawCandidateLean,
    wdl,
    predictedScore: scoreOptions[0],
    scoreOptions,
    halfFull,
    confidence,
    scores,
    trend,
    risk
  };
}

function renderMatchStrip() {
  renderMatchStripClean();
}

function renderMatchList() {
  let currentDate = "";
  $("#matchList").innerHTML = sideScheduleMatches()
    .map((match) => {
      const dateKey = chinaDateKey(match.beijingTime);
      const dateHeader = dateKey === currentDate ? "" : `<div class="match-date-divider">${dateKey}</div>`;
      currentDate = dateKey;
      const revealed = state.revealedPredictions[match.id];
      const phase = matchPhase(match);
      const extraStatus = isCompleted(match)
        ? ""
          : phase === "live"
            ? "比赛进行中"
          : revealed
            ? `已推演 ${predictionFullResultText(match, revealed)}`
            : "开始推演";
      return `
        ${dateHeader}
        <button class="match-item ${match.id === state.selectedId ? "is-active" : ""}" type="button" data-select="${match.id}">
          <strong>${matchTitlePlain(match)}</strong>
          <span>${match.stage} · ${match.group}</span>
          <span>北京时间 ${formatBeijingTime(match.beijingTime)}</span>
          <span class="match-status-line">
            <span class="status-row">${venueName(match)}</span>
            ${matchStatusHtml(match)}
            ${extraStatus ? `<span class="status-row">${extraStatus}</span>` : ""}
          </span>
        </button>
      `;
    })
    .join("");
}

function renderYao(container, lines) {
  container.innerHTML = lines
    .map((line) => {
      const [shape, changing] = line.split("-");
      return `<div class="yao ${shape} ${changing ? "changing" : ""}"><span class="mid"></span></div>`;
    })
    .join("");
}

function renderScores(prediction) {
  const marketSource = prediction.model.market.source ? "The Odds API 实时盘口" : "内置盘口因子";
  const upsetSource = "热度/强弱差/平局压力";
  const { home, away, historyBalance, analyst } = { ...prediction.match, analyst: prediction.analyst };
  const homeHistory = clamp(round(historyBalance), 0, 100);
  const awayHistory = 100 - homeHistory;
  const marketHome = clamp(round(50 + prediction.model.marketEdge), 0, 100);
  const marketAway = 100 - marketHome;
  const upsetValue = prediction.scores.upset;
  const stableValue = 100 - upsetValue;
  const cards = [
    {
      label: "球队实力",
      home: home.strength,
      away: away.strength,
      source: `排名 ${home.fifaRank}/${away.fifaRank}`
    },
    {
      label: "近期状态",
      home: home.form,
      away: away.form,
      source: `近10场 ${analyst.homeProfile.record} / ${analyst.awayProfile.record}`
    },
    {
      label: "历史表现",
      home: homeHistory,
      away: awayHistory,
      source: "历史交锋/心理倾向"
    },
    {
      label: "明星因子",
      home: analyst.star.home.influence,
      away: analyst.star.away.influence,
      source: "核心球员/阵容深度"
    },
    {
      label: "战术模型",
      home: analyst.probabilities.home,
      away: analyst.probabilities.away,
      source: "战术数据分析师模型"
    },
    {
      label: "盘口波动",
      home: marketHome,
      away: marketAway,
      source: marketSource
    },
    {
      label: "冷门指数",
      home: stableValue,
      away: upsetValue,
      source: upsetSource
    }
  ];
  return `
    <div class="score-grid">
      ${cards
        .map(
          (card) => `
            <div class="score-box score-box-compare">
              <span>${card.label}</span>
              <div class="compare-score">
                <strong>${card.home}</strong>
                <i>vs</i>
                <strong>${card.away}</strong>
              </div>
              <small>${card.source}</small>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function calibrationLabel(value) {
  const percent = round(value * 100);
  if (percent === 100) return "100%（基准）";
  return `${percent}%（${percent > 100 ? "增强" : "降低"}）`;
}

function processSteps(match, prediction) {
  const { live, model, analyst, oracle } = prediction;
  const market = model.market;
  return [
    ["步骤 1", `赛程定位：北京时间 ${formatBeijingTime(match.beijingTime)}，${match.group}，${match.home.name} vs ${match.away.name}，球场 ${venueName(match)}。`],
    ["步骤 2", `稳定赛前因子：${live.source}，气温 ${round(live.temperature)}℃，湿度 ${round(live.humidity)}%，风速 ${round(live.windSpeed)}km/h，降水概率 ${round(live.precipitation)}%；为保证不同浏览器同场推演一致，结果锁定同一套赛前因子。`],
    ["步骤 3", `十二时辰：比赛地开赛时间落入「${model.timeSlot.name}」，取象为「${model.timeSlot.image}」，时辰修正 ${round(model.earthlyHourEdge)}。`],
    ["步骤 4", `数据面：实力差 ${round(model.strengthEdge)}，状态差 ${round(model.formEdge)}，攻防差 ${round(model.attackDefenseEdge)}，历史项 ${round(model.historyEdge)}。`],
    ["步骤 5", `战术实力基线：排名、身价代理值、联赛竞争力、主力框架和引援/青训质量折算为 ${round(analyst.baselineEdge)}；${match.home.name} 身价代理 ${formatMarketValue(analyst.homeValue)}，${match.away.name} ${formatMarketValue(analyst.awayValue)}。`],
    ["步骤 6", `近10场状态：${match.home.name} ${analyst.homeProfile.record}，进/失 ${analyst.homeProfile.goalsFor}/${analyst.homeProfile.goalsAgainst}，xG ${analyst.homeProfile.xg}；${match.away.name} ${analyst.awayProfile.record}，进/失 ${analyst.awayProfile.goalsFor}/${analyst.awayProfile.goalsAgainst}，xG ${analyst.awayProfile.xg}。`],
    ["步骤 7", `核心对比：${analyst.homeTactics.style} ${analyst.homeTactics.formation} 对 ${analyst.awayTactics.style} ${analyst.awayTactics.formation}，节奏 ${analyst.homeTactics.tempo}/${analyst.awayTactics.tempo}，战术边际 ${round(analyst.tacticalEdge)}。`],
    ["步骤 8", `明星球员因子：${analyst.star.summary}；创造/终结修正 ${(analyst.star.chanceCreation + analyst.star.finishingLift).toFixed(2)}，明星边际 ${round(analyst.starEdge)}，用于修正破局能力、双方进球和胜方丢球概率。`],
    ["步骤 9", `赛后复盘学习：${prediction.learning.latestReviewNote}，样本平局率 ${round(prediction.learning.drawRate * 100)}%，双方进球率 ${round(prediction.learning.bothScoreRate * 100)}%，胜方丢球率 ${round(prediction.learning.winnerConcedeRate * 100)}%，用于校准比分分布。`],
    ["步骤 10", `外部因素：场地 ${venueName(match)}，天气、旅途、休息、海拔合计 ${round(analyst.externalEdge)}；${analyst.injuryImpact}。`],
    ["步骤 11", `战术数据模型：胜/平/负概率 ${analyst.probabilities.home}%/${analyst.probabilities.draw}%/${analyst.probabilities.away}%，总进球 ${analyst.totalGoals}，输出 ${predictionResultText(match, { wdl: analyst.wdl, scoreOptions: analyst.scoreOptions })}。`],
    ["步骤 12", `盘口面：${market.source || "内置盘口因子"}，当前让步 ${market.current}，热度 ${market.heat}，盘口折算 ${round(model.marketEdge)}；冷门指数 ${round(model.upsetIndex)}。`],
    ["步骤 13", `凯利公式：赔率 ${prediction.kelly.homeOdds}/${prediction.kelly.drawOdds}/${prediction.kelly.awayOdds}，Kelly 值 ${(prediction.kelly.homeKelly * 100).toFixed(1)}%/${(prediction.kelly.drawKelly * 100).toFixed(1)}%/${(prediction.kelly.awayKelly * 100).toFixed(1)}%，价值侧为「${prediction.kelly.best.label}」。`],
    ["步骤 14", `球场面：旅途差 ${round(model.travelEdge)}，休息差 ${round(model.restEdge)}，天气修正 ${round(model.weatherDrag)}，海拔修正 ${round(model.altitudeEdge)}。`],
    ["步骤 15", `六爻八卦：本卦「${oracle.mainHexagram}」（上${oracle.mainTrigrams.upper.name}下${oracle.mainTrigrams.lower.name}），世爻第 ${oracle.worldIndex} 爻，应爻第 ${oracle.responseIndex} 爻，动爻第 ${oracle.movingIndex} 爻。`],
    ["步骤 16", `取象合参：用神取「${oracle.usefulGod}」，动爻六亲为「${oracle.movingRelative}」；${model.timeSlot.name}属${elementNames[oracle.timeElement]}，时辰扶抑世爻 ${round(oracle.timeToWorld)}，世应攻守 ${round(oracle.worldVsResponse)}。`],
    ["步骤 17", `动变归并：动爻转化修正 ${round(oracle.movingLineScore)}，上下卦场势 ${round(oracle.trigramFieldEdge)}，变卦五行收束 ${round(oracle.changedElementShift)}，总卦象修正 ${round(oracle.oracleBias)}。`],
    ["步骤 18", `多模型融合：旧模型边际 ${round(prediction.oldEdge)}，战术边际 ${round(analyst.analystEdge)}，明星边际 ${round(analyst.star.edge)}，Kelly 边际 ${round(prediction.kelly.edge)}，融合边际 ${round(prediction.finalEdge)}，平局候选 ${round(prediction.drawCandidateLean)}，置信度 ${prediction.confidence}%。`],
    ["步骤 19", `推演结果：${predictionFullResultText(match, prediction)}。`]
  ];
}

function tabContent(match, prediction) {
  const market = prediction.model.market;
  const analyst = prediction.analyst;
  const calibration = state.calibration;
  const dataItems = [
    `球队实力：${match.home.name} ${match.home.strength} vs ${match.away.name} ${match.away.strength}，排名与阵容深度共同折算。`,
    `实力基线：${match.home.name} 排名 ${match.home.fifaRank}、身价代理 ${formatMarketValue(analyst.homeValue)}、联赛竞争力 ${analyst.homeLeague}、引援/青训质量 ${analyst.homeRecruitment}；${match.away.name} 排名 ${match.away.fifaRank}、身价代理 ${formatMarketValue(analyst.awayValue)}、联赛竞争力 ${analyst.awayLeague}、引援/青训质量 ${analyst.awayRecruitment}。`,
    `明星球员因子：${analyst.star.summary}；${match.home.name} 核心影响 ${analyst.star.home.influence}，${match.away.name} ${analyst.star.away.influence}，修正破局、双方进球和胜方丢球倾向。`,
    `战术数据模型：胜/平/负概率 ${analyst.probabilities.home}%/${analyst.probabilities.draw}%/${analyst.probabilities.away}%，首选/次选比分 ${analyst.scoreOptions.join("/")}，总进球 ${analyst.totalGoals}。`,
    `盘口波动：${market.source || "内置盘口因子"}，开盘 ${market.opening}，当前 ${market.current}，热度 ${market.heat}${market.homePrice ? `，胜平负欧赔 ${market.homePrice}/${market.drawPrice || "-"}/${market.awayPrice}` : ""}。`,
    `实时更新：天气来自在线接口；若接口失败，会降级为内置赛前因子并在页面标注来源。`,
    `赛后校准：已学习 ${calibration.samples} 场；当前各模型按基准 100% 自动微调：实力 ${calibrationLabel(calibration.strengthWeight)}，状态 ${calibrationLabel(calibration.formWeight)}，盘口 ${calibrationLabel(calibration.marketWeight)}，六爻 ${calibrationLabel(calibration.oracleWeight)}，战术 ${calibrationLabel(calibration.analystWeight)}，Kelly ${calibrationLabel(calibration.kellyWeight)}。`
  ];
  const formItems = [
    `近期状态：${match.home.name} 状态 ${match.home.form}，${match.away.name} 状态 ${match.away.form}，疲劳项分别为 ${match.home.fatigue}/${match.away.fatigue}。`,
    `近10场估算：${match.home.name} ${analyst.homeProfile.record}，场均进/失 ${analyst.homeProfile.goalsFor}/${analyst.homeProfile.goalsAgainst}，射门/射正 ${analyst.homeProfile.shots}/${analyst.homeProfile.shotsOnTarget}，xG ${analyst.homeProfile.xg}，零封率 ${analyst.homeProfile.cleanSheetRate}%；${match.away.name} ${analyst.awayProfile.record}，场均进/失 ${analyst.awayProfile.goalsFor}/${analyst.awayProfile.goalsAgainst}，射门/射正 ${analyst.awayProfile.shots}/${analyst.awayProfile.shotsOnTarget}，xG ${analyst.awayProfile.xg}，零封率 ${analyst.awayProfile.cleanSheetRate}%。`,
    `核心对比：${match.home.name} ${analyst.homeTactics.style} / ${analyst.homeTactics.formation} / ${analyst.homeTactics.tempo}；${match.away.name} ${analyst.awayTactics.style} / ${analyst.awayTactics.formation} / ${analyst.awayTactics.tempo}。`,
    `关键因素：${analyst.keyFactors.join("；")}。`,
    `球场时间：比赛地开赛 ${formatLocalTime(match.localTime)}，球场 ${venueName(match)}，海拔 ${match.venue.altitude}m。`,
    `节奏判断：盘口热度、强弱差、平局压力、战术错配和疲劳旅途共同决定冷门风险 ${analyst.upsetRisk}；天气只作为进球节奏扰动。`
  ];
  const oracleItems = [
    `起局：以比赛 ID、北京时间、比赛地十二时辰、球场经纬度、实时温度与风速生成起局种子。`,
    `本卦：${prediction.oracle.mainHexagram}，上${prediction.oracle.mainTrigrams.upper.name}（${elementNames[prediction.oracle.mainTrigrams.upper.element]}）下${prediction.oracle.mainTrigrams.lower.name}（${elementNames[prediction.oracle.mainTrigrams.lower.element]}），动爻第 ${prediction.oracle.movingIndex} 爻。`,
    `世应：世爻第 ${prediction.oracle.worldIndex} 爻属${elementNames[prediction.oracle.worldElement]}，应爻第 ${prediction.oracle.responseIndex} 爻属${elementNames[prediction.oracle.responseElement]}，世应攻守修正 ${round(prediction.oracle.worldVsResponse)}。`,
    `用神：本场取「${prediction.oracle.usefulGod}」，动爻六亲为「${prediction.oracle.movingRelative}」，六亲修正 ${round(prediction.oracle.usefulGodScore)}。`,
    `动变：动爻阴阳转化 ${round(prediction.oracle.movingLineScore)}，上下卦场势 ${round(prediction.oracle.trigramFieldEdge)}，本变卦动能 ${round(prediction.oracle.hexagramMomentum)}。`,
    `归并：变卦「${prediction.oracle.changedHexagram}」，卦象总修正 ${round(prediction.oracle.oracleBias)}；该值只修正数据面，不覆盖数据面。`
  ];

  if (state.activeTab === "data") {
    return `${renderScores(prediction)}${dataItems.map((item) => `<div class="insight">${item}</div>`).join("")}`;
  }

  if (state.activeTab === "process") {
    return `
      ${processSteps(match, prediction)
        .map(([title, body], index, arr) => `<div class="step-card${index === arr.length - 1 ? " final-step" : ""}"><b>${title}</b><p>${body}</p></div>`)
        .join("")}
      <div class="callout">最终输出：${predictionFullResultText(match, prediction)}，综合倾向 ${prediction.confidence}%。</div>
    `;
  }

  const insightList = state.activeTab === "form" ? formItems : oracleItems;
  return `
    ${insightList.map((item) => `<div class="insight">${item}</div>`).join("")}
    <div class="insight risk">风险提示：${prediction.risk}</div>
    <div class="callout">输出：${prediction.trend}</div>
  `;
}

function renderAnalysis() {
  const match = selectedMatch();
  const revealed = state.revealedPredictions[match.id];
  const completed = isCompleted(match);
  const preview = revealed ? derivePrediction(match) : null;
  if (revealed && preview && !revealed.oracleSnapshot) backfillOracleSnapshot(match, revealed, preview);
  const displayOracle = revealed?.oracleSnapshot || preview?.oracle;
  const displayPrediction = preview && displayOracle ? { ...preview, oracle: displayOracle } : preview;
  $("#matchMeta").textContent = `${match.stage} · ${match.group} · 北京时间 ${formatBeijingTime(match.beijingTime)} · ${venueName(match)} · ${matchStatusText(match)}`;
  $("#matchTitle").innerHTML = matchTitleHtml(match);
  $("#confidenceBadge").innerHTML = completed
    ? "比赛已结束"
    : revealed
      ? `倾向 ${resultPickLabel(match, revealed)} · ${revealed.confidence}%`
      : `<button class="inline-predict-button" type="button" data-predict="${match.id}">开始推演</button>`;
  document.querySelector(".prediction-board")?.classList.toggle("is-completed", completed);
  $("#wdlPick").textContent = completed ? actualResultLabel(match) : revealed ? resultPickLabel(match, revealed) : "开始推演";
  $("#scorePick").textContent = completed ? actualScoreText(match) : revealed ? scoreOptionsText(revealed) : "开始推演";
  $("#halfFullPick").textContent = completed ? "比赛已结束" : revealed ? (revealed.halfFull || "未记录") : "开始推演";
  $("#livePick").textContent = completed ? "比赛已结束" : revealed ? ((revealed.liveSource || preview?.live.source || "").includes("Open") ? "实时已接入" : "降级因子") : "等待推演";
  if (completed) {
    const reviewStatus = revealed ? evaluatePrediction(match, revealed) : "";
    const reviewText = revealed ? reviewConclusion(match, revealed, reviewStatus) : "复盘结论：当前未找到赛前推演记录，仅展示网络获取的真实赛果，无法进行命中复盘。";
    $("#mainHexagram").textContent = "比赛已结束";
    $("#changedHexagram").textContent = "比赛已结束";
    $("#mainYao").innerHTML = "";
    $("#changedYao").innerHTML = "";
    $("#tabBody").innerHTML = `
      <div class="insight">比赛已结束，当前显示网络获取的真实赛果：${matchTitle(match)} ${actualScoreText(match)}，比赛结果为「${actualResultLabel(match)}」。</div>
      ${revealed ? `<div class="insight">赛前推演：${predictionFullResultText(match, revealed)}；验证状态：${reviewStatus}。</div>` : ""}
      <div class="insight review-conclusion">${reviewText}</div>
      <div class="insight risk">完赛场次不再进行赛前推演；系统已将复盘结果写入结果记录，并用于后续权重校准。</div>
    `;
  } else if (revealed && displayPrediction) {
    $("#mainHexagram").textContent = displayOracle.mainHexagram;
    $("#changedHexagram").textContent = displayOracle.changedHexagram;
    renderYao($("#mainYao"), displayOracle.mainYao);
    renderYao($("#changedYao"), displayOracle.changedYao);
    $("#tabBody").innerHTML = tabContent(match, displayPrediction);
  } else {
    $("#mainHexagram").textContent = "开始推演";
    $("#changedHexagram").textContent = "等待起局";
    $("#mainYao").innerHTML = "";
    $("#changedYao").innerHTML = "";
    $("#tabBody").innerHTML = `
      <div class="insight">当前仅展示赛程、球场、时区、球队基础信息与数据源说明。点击“开始推演”后，才会按实时天气、十二时辰、盘口因子和六爻起局生成结果。</div>
      <div class="insight risk">刷新状态：${state.liveStatus}${state.lastUpdated ? `，${state.lastUpdated.toLocaleString("zh-CN", { hour12: false })}` : ""}。</div>
    `;
  }
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.tab === state.activeTab);
    const disabled = completed || !revealed;
    tab.disabled = disabled;
    tab.classList.toggle("is-disabled", disabled);
  });
}

function renderRecords() {
  const recordsGrid = $("#recordsGrid");
  recordsGrid.style.setProperty("--record-count", state.records.length);
  if (!state.records.length) {
    recordsGrid.innerHTML = `<div class="empty">暂无赛后记录。先完成一场推演，等比赛结束后在上方回填比分与验证状态。</div>`;
    return;
  }

  recordsGrid.innerHTML = state.records
    .map(recordViewModel)
    .map(
      (record) => `
        <article class="record-card">
          <strong>${record.match}</strong>
          <span>${record.status} · ${record.result}</span>
          <small>${record.trend}</small>
          ${record.conclusion ? `<small class="review-conclusion">${record.conclusion}</small>` : ""}
          <small>${record.savedAt}</small>
        </article>
      `
    )
    .join("");
}

function recordViewModel(record) {
  const matchId = String(record.id || "").replace(/^auto-/, "");
  const match = matches.find((item) => item.id === matchId);
  const revealed = match ? state.revealedPredictions[match.id] : null;
  if (match && isCompleted(match) && revealed) {
    const status = evaluatePrediction(match, revealed);
    const result = `${actualResultLabel(match)} · ${actualScoreText(match)}`;
    return {
      ...record,
      match: matchTitle(match),
      status,
      result,
      trend: `赛前输出：${predictionFullResultText(match, revealed)}；真实赛果：${result}。`,
      conclusion: reviewConclusion(match, revealed, status)
    };
  }

  return legacyRecordViewModel(record);
}

function legacyRecordViewModel(record) {
  const predicted = extractRecordOutcome(record.trend, /赛前输出[:：]\s*([^；。]+)/);
  const actual = extractRecordOutcome(record.trend, /真实赛果[:：]\s*([^；。]+)/) || extractRecordOutcome(record.result, /^(.+?)(?:\s*·|\s+-|\s+\d)/);
  if (!predicted || !actual) return record;

  const status = predicted === actual ? "命中" : "失准";
  return {
    ...record,
    status,
    conclusion: buildLegacyReviewConclusion(record, predicted, actual, status)
  };
}

function extractRecordOutcome(text, pattern) {
  const source = String(text || "");
  const target = source.match(pattern)?.[1] || source;
  if (target.includes("平局") || /(^|[^胜负])平([^胜负]|$)/.test(target)) return "平局";
  const winner = target.match(/([\u4e00-\u9fa5A-Za-z\s/]+?)胜/)?.[1]?.trim();
  return winner ? `${winner}胜` : "";
}

function buildLegacyReviewConclusion(record, predicted, actual, status) {
  const score = String(record.result || "").match(/(\d+\s*-\s*\d+)/)?.[1] || "";
  if (status === "命中") {
    return `复盘结论：赛前胜平负方向「${predicted}」与真实赛果「${actual}」一致，判定为命中；${score ? `真实比分为「${score}」，` : ""}比分仅作为比分模型校准参考。`;
  }
  return `复盘结论：赛前胜平负方向「${predicted}」与真实赛果「${actual}」不一致，判定为失准；${score ? `真实比分为「${score}」，` : ""}模型将据此校准方向权重、冷门风险与进球分布。`;
}

function persistRecords() {
  localStorage.setItem("oracle-records", JSON.stringify(state.records));
}

function persistPredictions() {
  localStorage.setItem("oracle-predictions", JSON.stringify(state.revealedPredictions));
}

function exportRecordBundle() {
  const payload = {
    version: 1,
    exportedAt: new Date().toISOString(),
    records: state.records,
    predictions: state.revealedPredictions,
    calibration: state.calibration
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `worldcup-oracle-records-${currentChinaDateKey()}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function mergeRecords(incomingRecords) {
  const merged = new Map(state.records.map((record) => [record.id || `${record.match}-${record.savedAt}`, record]));
  incomingRecords.forEach((record) => {
    const key = record.id || `${record.match}-${record.savedAt}`;
    if (!merged.has(key)) merged.set(key, record);
  });
  state.records = [...merged.values()].sort((a, b) => new Date(b.savedAt || 0) - new Date(a.savedAt || 0));
}

async function importRecordBundle(file) {
  if (!file) return;
  const text = await file.text();
  const payload = JSON.parse(text);
  if (!Array.isArray(payload.records)) throw new Error("记录文件格式不正确");
  mergeRecords(payload.records);
  state.revealedPredictions = {
    ...state.revealedPredictions,
    ...(payload.predictions || {})
  };
  state.calibration = {
    ...defaultCalibration,
    ...state.calibration,
    ...(payload.calibration || {}),
    learnedMatches: {
      ...state.calibration.learnedMatches,
      ...(payload.calibration?.learnedMatches || {})
    }
  };
  persistRecords();
  persistPredictions();
  persistCalibration();
  render();
}

function backfillOracleSnapshot(match, revealed, prediction) {
  if (!revealed || !prediction?.oracle) return;
  revealed.halfFull = revealed.halfFull || prediction.halfFull;
  if (revealed.oracleSnapshot) {
    state.revealedPredictions[match.id] = revealed;
    persistPredictions();
    return;
  }
  revealed.oracleSnapshot = {
    mainHexagram: prediction.oracle.mainHexagram,
    changedHexagram: prediction.oracle.changedHexagram,
    mainYao: prediction.oracle.mainYao,
    changedYao: prediction.oracle.changedYao,
    movingIndex: prediction.oracle.movingIndex,
    worldIndex: prediction.oracle.worldIndex,
    responseIndex: prediction.oracle.responseIndex,
    mainTrigrams: prediction.oracle.mainTrigrams,
    changedTrigrams: prediction.oracle.changedTrigrams,
    timeElement: prediction.oracle.timeElement,
    usefulGod: prediction.oracle.usefulGod,
    movingRelative: prediction.oracle.movingRelative,
    worldElement: prediction.oracle.worldElement,
    responseElement: prediction.oracle.responseElement,
    movingElement: prediction.oracle.movingElement,
    worldVsResponse: prediction.oracle.worldVsResponse,
    timeToWorld: prediction.oracle.timeToWorld,
    timeToMoving: prediction.oracle.timeToMoving,
    usefulGodScore: prediction.oracle.usefulGodScore,
    movingLineScore: prediction.oracle.movingLineScore,
    trigramFieldEdge: prediction.oracle.trigramFieldEdge,
    changedElementShift: prediction.oracle.changedElementShift,
    hexagramMomentum: prediction.oracle.hexagramMomentum,
    oracleBias: prediction.oracle.oracleBias
  };
  revealed.liveSource = revealed.liveSource || prediction.live?.source;
  state.revealedPredictions[match.id] = revealed;
  persistPredictions();
}

function renderMatchStripClean() {
  const visibleMatches = predictionEntryMatches();
  $("#sourceNote").innerHTML = `今日可推演与赛程栏仅显示未开始或进行中场次，已结束比赛会移入结果记录并自动用后续未开始比赛替换。后续赛程：${state.scheduleStatus}。刷新状态：${state.liveStatus}${state.lastUpdated ? `，${state.lastUpdated.toLocaleString("zh-CN", { hour12: false })}` : ""}。参考来源：${scheduleSource.links
    .map(([label, url]) => `<a href="${url}" target="_blank" rel="noreferrer">${label}</a>`)
    .join(" · ")}`;

  $("#matchStrip").innerHTML = visibleMatches
    .map((match) => {
      const revealed = state.revealedPredictions[match.id];
      const phase = matchPhase(match);
      const canPredict = phase === "upcoming" && !revealed;
      const readable = revealed ? predictionReadableText(match, revealed) : "";
      return `
        <article class="match-card ${revealed ? "is-revealed" : ""}">
          <div class="match-card-main">
            <small>${match.stage} ${match.group} · 北京时间 ${formatBeijingTime(match.beijingTime)}</small>
            <strong>${matchTitlePlain(match)}</strong>
            <small>${venueName(match)} · ${matchStatusText(match)}</small>
          <small class="${isCompleted(match) || revealed || phase === "live" ? "prediction-revealed" : "prediction-pending"}">${isCompleted(match) ? `真实赛果：${actualResultLabel(match)} · ${actualScoreText(match)}` : phase === "live" ? `实时比分：${matchStatusText(match)}` : revealed ? readable : "推演状态：开始推演"}</small>
          </div>
          ${canPredict ? `<button type="button" data-predict="${match.id}">开始推演</button>` : ""}
        </article>
      `;
    })
    .join("");
}

function matchStatusText(match) {
  const score = state.scoreData[match.id];
  if (!score) return matchStartTime(match).getTime() <= currentChinaNow().getTime() ? "比赛进行中，比分刷新中" : "待赛";
  if (score.completed) return `${score.homeScore}-${score.awayScore} 比赛已结束`;
  if (score.state === "in") return `${score.status} ${score.homeScore}-${score.awayScore}`;
  return normalizeMatchStatus(score.status);
}

function matchStatusHtml(match) {
  const score = state.scoreData[match.id];
  if (!score) return matchStartTime(match).getTime() <= currentChinaNow().getTime() ? `<span class="status-row">比赛进行中，比分刷新中</span>` : `<span class="status-row">未开始</span>`;
  if (score.completed) return `<span class="score-line"><strong class="score-highlight">${score.homeScore}-${score.awayScore}</strong></span><span>比赛已结束</span>`;
  if (score.state === "in") return `<span>${score.status}</span><span class="score-line"><strong class="score-highlight">${score.homeScore}-${score.awayScore}</strong></span>`;
  return `<span class="status-row">${normalizeMatchStatus(score.status)}</span>`;
}

function normalizeMatchStatus(status) {
  const value = String(status || "").toLowerCase();
  if (!value) return "待赛";
  if (value.includes("scheduled")) return "未开始";
  if (value === "ft" || value.includes("full time")) return "比赛已结束";
  if (value.includes("half")) return "半场";
  if (value.includes("postponed")) return "延期";
  if (value.includes("canceled") || value.includes("cancelled")) return "取消";
  return status;
}

function selectMatch(id) {
  state.selectedId = id;
  state.activeTab = "data";
  render();
}

function cancelActiveDeduction() {
  state.deductionRunId += 1;
}

function isDeductionActive(runId) {
  return runId === state.deductionRunId && $("#oracleModal")?.classList.contains("is-open");
}

function setModal(open, options = {}) {
  const modal = $("#oracleModal");
  if (!open && options.cancel !== false) cancelActiveDeduction();
  modal.classList.toggle("is-open", open);
  modal.setAttribute("aria-hidden", open ? "false" : "true");
  if (open) {
    state.modalScrollY = window.scrollY || document.documentElement.scrollTop || 0;
    document.body.style.position = "fixed";
    document.body.style.top = `-${state.modalScrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
    document.body.style.overflow = "";
    window.scrollTo({ top: state.modalScrollY || 0, left: 0, behavior: "auto" });
  }
}

function scrollModalToBottom() {
  const dialog = document.querySelector(".oracle-dialog");
  const steps = $("#modalSteps");
  if (steps) slowScrollTo(steps, steps.scrollHeight, 620);
  if (dialog) slowScrollTo(dialog, dialog.scrollHeight, 680);
}

function slowScrollTo(element, targetTop, duration = 620) {
  const startTop = element.scrollTop;
  const distance = targetTop - startTop;
  if (Math.abs(distance) < 2) return;
  const startedAt = performance.now();
  const easeOut = (value) => 1 - Math.pow(1 - value, 3);

  function frame(now) {
    const progress = clamp((now - startedAt) / duration, 0, 1);
    element.scrollTop = startTop + distance * easeOut(progress);
    if (progress < 1) requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

async function typeInto(element, text, delay = 14, runId = state.deductionRunId) {
  element.textContent = "";
  element.classList.remove("is-typed");
  for (const char of text) {
    if (!isDeductionActive(runId)) return false;
    element.textContent += char;
    if (!char.trim()) continue;
    const pause = char === "。" || char === "！" || char === "？"
      ? delay * 7.2
      : char === "，" || char === "；" || char === "："
        ? delay * 4
        : char === "、" || char === "/" || char === "·"
          ? delay * 2.2
          : /[A-Za-z0-9%.-]/.test(char)
            ? delay * 0.65
            : delay;
    await activeSleep(pause);
  }
  if (!isDeductionActive(runId)) return false;
  element.classList.add("is-typed");
  return true;
}

async function runThinkingPrelude(match, runId) {
  const thoughts = [
    "正在核对赛程时间、球场与北京时间...",
    "正在整理球队实力、近期状态和历史表现...",
    "正在读取盘口缓存、Kelly 价值与冷门风险...",
    "正在按比赛地时辰生成六爻起局参数..."
  ];
  $("#modalSteps").innerHTML = `
    <div class="thinking-strip" id="thinkingStrip">
      <b>思考中</b>
      <p id="thinkingLine" class="typing-text thinking-line"></p>
    </div>
  `;
  const line = $("#thinkingLine");
  for (let index = 0; index < thoughts.length; index += 1) {
    if (!isDeductionActive(runId)) return false;
    $("#modalProgressBar").style.width = `${8 + index * 4}%`;
    line.classList.remove("is-switching");
    scrollModalToBottom();
    const typed = await typeInto(line, thoughts[index], 24, runId);
    if (!typed || !isDeductionActive(runId)) return false;
    await activeSleep(300);
    if (index < thoughts.length - 1) {
      if (!isDeductionActive(runId)) return false;
      line.classList.add("is-switching");
      await activeSleep(330);
    }
  }
  if (!isDeductionActive(runId)) return false;
  line.classList.add("is-done");
  await activeSleep(300);
  return isDeductionActive(runId);
}

async function runLiveDeduction(id) {
  cancelActiveDeduction();
  const runId = state.deductionRunId;
  state.selectedId = id;
  const match = selectedMatch();
  if (matchPhase(match) !== "upcoming" || state.revealedPredictions[match.id]) {
    render();
    return;
  }
  setModal(true, { cancel: false });
  $("#modalSteps").innerHTML = "";
  $("#modalResult").classList.remove("is-visible");
  $("#modalResult").innerHTML = "";
  $("#modalProgressBar").style.width = "0%";
  $("#oracleModalTitle").textContent = `${match.home.name} vs ${match.away.name}`;
  $("#modalMatchMeta").textContent = `${match.stage} · ${match.group} · 北京时间 ${formatBeijingTime(match.beijingTime)} · 比赛地 ${formatLocalTime(match.localTime)} · ${venueName(match)}`;

  const liveDataPromise = fetchWeather(match)
    .then((live) => {
      if (!isDeductionActive(runId)) return;
      state.liveData[match.id] = live;
      state.liveStatus = "已更新";
    })
    .catch(() => {
      if (!isDeductionActive(runId)) return;
      state.liveData[match.id] = fallbackLive(match);
      state.liveStatus = "降级因子";
    });

  const thinkingDone = await runThinkingPrelude(match, runId);
  if (!thinkingDone || !isDeductionActive(runId)) return;
  await liveDataPromise;
  if (!isDeductionActive(runId)) return;
  state.lastUpdated = new Date();

  const prediction = derivePrediction(match);
  const steps = processSteps(match, prediction);
  if (!isDeductionActive(runId)) return;
  $("#modalSteps").innerHTML = "";

  for (let index = 0; index < steps.length; index += 1) {
    if (!isDeductionActive(runId)) return;
    const [title, body] = steps[index];
    const isFinal = index === steps.length - 1;
    const stepId = `deduction-step-${index}`;
    $("#modalSteps").insertAdjacentHTML(
      "beforeend",
      `<div class="step-card${isFinal ? " final-step" : ""}"><b>${title}</b><p id="${stepId}" class="typing-text"></p></div>`
    );
    $("#modalProgressBar").style.width = `${round(((index + 1) / steps.length) * 100)}%`;
    scrollModalToBottom();
    const typed = await typeInto(document.getElementById(stepId), body, isFinal ? 17 : 19, runId);
    if (!typed || !isDeductionActive(runId)) return;
    await activeSleep(isFinal ? 420 : 480);
  }

  if (!isDeductionActive(runId)) return;
  $("#modalResult").innerHTML = `
    <strong>最终推演：${predictionFullResultText(match, prediction)}</strong>
    <span>${prediction.trend} 风险提示：${prediction.risk}</span>
  `;
  $("#modalResult").classList.add("is-visible");
  state.revealedPredictions[match.id] = {
    wdl: prediction.wdl,
    predictedScore: prediction.predictedScore,
    scoreOptions: prediction.scoreOptions,
    halfFull: prediction.halfFull,
    confidence: prediction.confidence,
    finalEdge: prediction.finalEdge,
    analystEdge: prediction.analyst.analystEdge,
    kellyEdge: prediction.kelly.edge,
    kellyBest: prediction.kelly.best,
    drawCandidateLean: prediction.drawCandidateLean,
    kellyValues: {
      home: prediction.kelly.homeKelly,
      draw: prediction.kelly.drawKelly,
      away: prediction.kelly.awayKelly
    },
    analystProbabilities: prediction.analyst.probabilities,
    analystScoreOptions: prediction.analyst.scoreOptions,
    analystTotalGoals: prediction.analyst.totalGoals,
    learningProfile: {
      samples: prediction.learning.samples,
      hitRate: prediction.learning.hitRate,
      drawRate: prediction.learning.drawRate,
      bothScoreRate: prediction.learning.bothScoreRate,
      avgTotalGoals: prediction.learning.avgTotalGoals
    },
    oracleBias: prediction.oracle.oracleBias,
    oracleSnapshot: {
      mainHexagram: prediction.oracle.mainHexagram,
      changedHexagram: prediction.oracle.changedHexagram,
      mainYao: prediction.oracle.mainYao,
      changedYao: prediction.oracle.changedYao,
      movingIndex: prediction.oracle.movingIndex,
      worldIndex: prediction.oracle.worldIndex,
      responseIndex: prediction.oracle.responseIndex,
      mainTrigrams: prediction.oracle.mainTrigrams,
      changedTrigrams: prediction.oracle.changedTrigrams,
      timeElement: prediction.oracle.timeElement,
      usefulGod: prediction.oracle.usefulGod,
      movingRelative: prediction.oracle.movingRelative,
      worldElement: prediction.oracle.worldElement,
      responseElement: prediction.oracle.responseElement,
      movingElement: prediction.oracle.movingElement,
      worldVsResponse: prediction.oracle.worldVsResponse,
      timeToWorld: prediction.oracle.timeToWorld,
      timeToMoving: prediction.oracle.timeToMoving,
      usefulGodScore: prediction.oracle.usefulGodScore,
      movingLineScore: prediction.oracle.movingLineScore,
      trigramFieldEdge: prediction.oracle.trigramFieldEdge,
      changedElementShift: prediction.oracle.changedElementShift,
      hexagramMomentum: prediction.oracle.hexagramMomentum,
      oracleBias: prediction.oracle.oracleBias
    },
    liveSource: prediction.live.source,
    date: chinaDateKey(match.beijingTime),
    savedAt: new Date().toISOString()
  };
  if (!isDeductionActive(runId)) return;
  persistPredictions();
  scrollModalToBottom();
  render();
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const predictButton = event.target.closest("[data-predict]");
    if (predictButton) {
      runLiveDeduction(predictButton.dataset.predict);
      return;
    }

    const selectButton = event.target.closest("[data-select]");
    if (selectButton) selectMatch(selectButton.dataset.select);
  });

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      if (tab.disabled) return;
      state.activeTab = tab.dataset.tab;
      renderAnalysis();
    });
  });

  $("#refreshDataButton").addEventListener("click", refreshLiveData);
  $("#exportRecords").addEventListener("click", exportRecordBundle);
  $("#importRecords").addEventListener("click", () => $("#recordsFileInput").click());
  $("#recordsFileInput").addEventListener("change", async (event) => {
    try {
      await importRecordBundle(event.target.files?.[0]);
    } catch (error) {
      alert(`导入失败：${error.message}`);
    } finally {
      event.target.value = "";
    }
  });
  $("#closeOracleModal").addEventListener("click", () => setModal(false));
  $("#oracleModal").addEventListener("click", (event) => {
    if (event.target.id === "oracleModal") setModal(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setModal(false);
  });

  $("#clearRecords").addEventListener("click", () => {
    state.records = [];
    persistRecords();
    renderRecords();
  });
}

function render() {
  syncCompletedVerifications();
  refreshRecordSnapshots();
  const visiblePredictions = predictionEntryMatches();
  const selected = matches.find((match) => match.id === state.selectedId);
  const visibleScheduleIds = new Set(sideScheduleMatches().map((match) => match.id));
  if ((!selected || !visibleScheduleIds.has(selected.id)) && matches.length) {
    state.selectedId = visiblePredictions[0]?.id || sideScheduleMatches()[0]?.id || matches.find((match) => matchPhase(match) !== "completed")?.id || matches[0].id;
  }
  renderMatchStripClean();
  renderMatchList();
  renderAnalysis();
  renderRecords();
  updateTimeBadge();
}

bindEvents();
applyCachedSchedule();
sideScheduleMatches().forEach((match) => {
  state.liveData[match.id] = fallbackLive(match);
});
render();
window.scrollTo({ top: 0, left: 0, behavior: "auto" });
refreshLiveData()
  .then(() => refreshScheduleData())
  .then(() => refreshLiveData())
  .catch(() => refreshLiveData());
verifyNetworkTime();


