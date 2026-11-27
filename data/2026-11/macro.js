window.MONTHLY_DATA = window.MONTHLY_DATA || {};

window.MONTHLY_DATA.macro = [
  {
    id: "m1",
    code: "M1",
    tags: ["宏观利率", "核心通胀", "金融稳定"],
    date: "2026 年 11 月",
    title: "通胀粘性与美联储再紧缩预期",
    verdict: "核心通胀反弹叠加 AI 投资热潮推动 12 月再加息预期，高利率与 $680B 算力债警示同步抬升资金成本并压制 AI 估值。",
    chartType: "m1MacroFed",
    chartCaption: "BLS 10 月通胀报告 · 美联储 11 月《金融稳定报告》· 英格兰银行 11 月报告（2026 年 11 月）",
    factsTitle: "增量宏观信号",
    facts: [
      { lead: "通胀粘性超预期", text: "10 月整体 CPI 环比 +0.4%，核心 PCE 由 3.1% 升至 3.3%，显著偏离 2% 目标。" },
      { lead: "联储释放鹰派转向", text: "纽约联储主席 Williams（11-17）直指 AI 投资与芯片、能源涨价构成持续性通胀，或引发 2027 年进一步加息。" },
      { lead: "美英央行同示警", text: "美联储主席 Warsh 披露已压力测试 AI 回报落空引发的股跌与失业风险；英格兰银行（11-26）警示循环融资与利差风险。" }
    ],
    impactTitle: "AI 行业传导",
    impacts: [
      { lead: "压制远期估值", text: "高无风险利率直接抬升贴现率，成为 Anthropic 破发（A1）与 OpenAI 缩量（A2）的核心宏观背景。" },
      { lead: "中游信用加速分化", text: "投资级巨头仍可低息发债扩产，高杠杆 Neocloud 融资利差飙升（CoreWeave 破 16%，见 A4）。" },
      { lead: "一级资本回归现金流", text: "资金成本高企终结烧钱逻辑，资本快速向高 ARR 结果付费应用与硬科技壁垒收敛。" }
    ],
    sources: [
      { label: "BLS CPI 官方发布", url: "https://www.bls.gov/cpi/" },
      { label: "美联储 11 月金融稳定报告", url: "https://www.federalreserve.gov/publications/files/financial-stability-report-20261113.pdf" },
      { label: "美联储主席 Warsh 11-16 讲话", url: "https://www.federalreserve.gov/newsevents/speech/warsh20261116a.htm" },
      { label: "Axios (纽约联储主席 11-17)", url: "https://www.axios.com/2026/11/17/john-williams-new-york-fed-axios-bfd" },
      { label: "英格兰银行 11 月报告", url: "https://www.bankofengland.co.uk/financial-stability-report/2026/november-2026" }
    ]
  },
  {
    id: "m2",
    code: "M2",
    tags: ["美国中期选举", "能源政策", "数据中心审批"],
    date: "2026-11-03 投票及后续",
    title: "美国中期选举与数据中心反制",
    verdict: "民主党重掌参众两院叠加地方数据中心限制议案压倒性通过，居民电价与民生焦虑正把北美算力扩建推向高强度政治审查。",
    chartType: "m2Midterm",
    chartCaption: "Ballotpedia 2026 中期选举 · Redbud Consulting · USC Annenberg · SemiAnalysis（2026 年 11 月）",
    factsTitle: "增量政治与监管信号",
    facts: [
      { lead: "两院翻蓝形成分立", text: "11-03 民主党同时夺回参众两院并赢下多个关键州长席位，白宫与国会进入高强度博弈期。" },
      { lead: "地方阻击全面扩散", text: "除投票议案压倒性受阻外，多州新任州长计划追加全州新建暂缓令，审批阻力由点及面。" },
      { lead: "国会瞄准电价转嫁", text: "民主党委员会拟重点审查批发电力涨价，并推动立法强制科技巨头全额承担电网升级成本。" }
    ],
    impactTitle: "AI 产业链传导",
    impacts: [
      { lead: "远期交付周期拉长", text: "在建项目大概率照常完工，但得州冻结叠加地方禁令将实质拖累 2028 年起北美新增算力上线。" },
      { lead: "转向表后电源与出海", text: "OpenAI 已承诺自担园区全额用电与电网成本；大厂加速转向表后核电/燃气微网及海外富电区。" },
      { lead: "存量电力升值与中美对照", text: "手握已批复电力的存量 IDC 议价力抬升；中国依托特高压与东数西算的供电确定性形成鲜明对照。" }
    ],
    sources: [
      { label: "Ballotpedia 2026 国会选举", url: "https://ballotpedia.org/United_States_Congress_elections,_2026" },
      { label: "USC Annenberg 公众调研", url: "https://annenberg.usc.edu/news/research-and-impact/new-usc-annenberg-survey-finds-data-centers-and-ai-are-top-issue-country" },
      { label: "SemiAnalysis 阻力分析", url: "https://newsletter.semianalysis.com/p/the-datacenter-backlash-goes-bipartisan" },
      { label: "The Information 11-07", url: "https://www.theinformation.com/articles/blue-wave-engulf-data-center-industry" },
      { label: "AI 前沿动态追踪 11-05", url: "https://ai-daily.ihainan.me/2026-11-05.html#s29" }
    ]
  }
];
