window.MONTHLY_DATA = window.MONTHLY_DATA || {};

window.MONTHLY_DATA.macro = [
  {
    id: "m1",
    code: "M1",
    tags: ["宏观利率", "核心通胀", "金融稳定"],
    date: "2026 年 11 月",
    title: "通胀粘性与美联储再紧缩预期：高利率叠加算力债扩容，压制 AI 估值与杠杆扩张",
    verdict: "美国核心通胀反弹叠加 AI 投资热潮拉动内需，正推动市场重新定价美联储 12 月重启加息；高利率环境与央行对 6,800 亿美元算力债的风险警示，直接抬升算力基建资金成本并收紧长久期 AI 估值空间。",
    chartType: "m1MacroFed",
    chartCaption: "BLS 10 月通胀报告 · 美联储 11 月《金融稳定报告》· 英格兰银行 11 月报告（2026 年 11 月）",
    factsTitle: "核心宏观事实与央行表态",
    facts: [
      { lead: "核心通胀粘性超预期", text: "BLS 11-10 公布 10 月 CPI 环比上涨 0.4%，核心 CPI 连续三个月环比上涨 0.3%；10 月核心 PCE 同比攀升至 3.3%（前值 3.1%），显著高于美联储 2% 目标。" },
      { lead: "美联储释放再加息信号", text: "10 月底 FOMC 以 10–2 维持利率在 3.75%–4.00%（2 名理事主张继续加息）；纽约联储主席 John Williams 11-17 指出 AI 投资热潮与芯片及能源涨价构成持续性通胀压力，或推动 2027 年进一步加息，市场已高度定价 12 月 9 日加息 25bp。" },
      { lead: "美英央行密集警示 AI 金融风险", text: "美联储主席 Kevin Warsh 公开表示已模型化评估 AI 回报不及预期导致股市下跌与失业上升的情景；美联储报告显示 87% 受访市场人士将 AI 列为首要风险、前 10 月 AI 算力发债超 $680B；英格兰银行 11-26 同步警示循环融资与非投资级利差风险。" }
    ],
    impactTitle: "对 AI 行业的直接传导",
    impacts: [
      { lead: "高估值模型与成长股承压", text: "无风险利率高位运行叠加再加息预期，直接压缩远期现金流贴现估值，成为 Anthropic 上市四日破发（A1）与 OpenAI 私募缩量（A2）的重要宏观背景。" },
      { lead: "中游算力融资成本飙升", text: "投资级科技巨头仍可凭现金流与低息债扩产，但依赖高息债与结构化信贷的 Neocloud 利差显著走阔（CoreWeave 债息升破 16%，见 A4），算力租赁价格面临成本传导。" },
      { lead: "一级资本加速回归现金流验证", text: "高资金成本彻底终结烧钱换规模逻辑，一级市场迅速向高客单、强壁垒赛道收敛，优先奖励已验证高 ARR 的结果付费型应用与硬科技底座。" }
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
    title: "美国中期选举蓝潮与数据中心反制：AI 物理扩建步入政治与电价博弈期",
    verdict: "2026 年中期选举成为 AI 数据中心扩张的政治拐点：民主党重掌国会参众两院，全美地方限制数据中心投票议案呈压倒性通过，居民电价与民生焦虑正把算力基建推向高强度政策审查。",
    chartType: "m2Midterm",
    chartCaption: "Ballotpedia 2026 中期选举 · Redbud Consulting · USC Annenberg 调研 · SemiAnalysis（2026 年 11 月）",
    factsTitle: "中期选举结果与地方政策动向",
    facts: [
      { lead: "民主党重掌参众两院", text: "11 月 3 日中期选举民主党大胜，同时夺回众议院（约 255–259 席）与参议院（约 54–56 席）控制权并赢下多个关键州长席位，与特朗普白宫形成强分立格局。" },
      { lead: "数据中心议案遭遇选票压倒性否决", text: "NBC 出口民调显示 56% 选民将 AI 与数据中心列为投票主要因素（62% 投向民主党）；全美 46 项地方数据中心投票议案中限制方以 37 胜 1 负大幅领先（终计约 43 胜 1 负），全美地方禁令年内从约 40 项激增至 500 多项。" },
      { lead: "民生电价焦虑驱动强监管议程", text: "南加州大学调研显示 71% 受访者不信任大型科技公司在数据中心开发上优先考虑社会利益；国会新掌权的民主党委员会预计将重点审查批发电力市场涨价、强制科技巨头全额承担电网升级成本及 AI 监管立法。" }
    ],
    impactTitle: "对 AI 产业链的分化影响",
    impacts: [
      { lead: "审批滞后制约 2028 远期新增容量", text: "在建项目大概率继续推进，但叠加得州许可冻结（占美国 2028 年新增容量近 30%）与多州新任州长暂缓令，北美 2028 年起的新增算力交付周期将进一步拉长。" },
      { lead: "大厂被迫转向表后自建电源与出海", text: "OpenAI 11 月已承诺自担算力园区全部用电与电网配套成本；超大规模云厂商将加速布局核电/燃气表后微网、联邦土地选址，或将新增机房向海外电力富余地区转移。" },
      { lead: "存量电力稀缺性抬升与中美格局对照", text: "手握已批复电力与存量机房的头部云厂商和传统 IDC（Equinix、Digital Realty）短期议价力上升，中小 AI 实验室算力成本抬升；相比之下，中国依托特高压与东数西算的算电协同体系在物理供电侧具备显著确定性。" }
    ],
    sources: [
      { label: "Ballotpedia 2026 国会选举", url: "https://ballotpedia.org/United_States_Congress_elections,_2026" },
      { label: "USC Annenberg 公众调研", url: "https://annenberg.usc.edu/news/research-and-impact/new-usc-annenberg-survey-finds-data-centers-and-ai-are-top-issue-country" },
      { label: "SemiAnalysis 数据中心阻力分析", url: "https://newsletter.semianalysis.com/p/the-datacenter-backlash-goes-bipartisan" },
      { label: "The Information 11-07", url: "https://www.theinformation.com/articles/blue-wave-engulf-data-center-industry" },
      { label: "AI 前沿动态追踪 11-05", url: "https://ai-daily.ihainan.me/2026-11-05.html#s29" }
    ]
  }
];
