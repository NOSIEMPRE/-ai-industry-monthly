window.MONTHLY_DATA = window.MONTHLY_DATA || {};

window.MONTHLY_DATA.macro = [
  {
    id: "m1",
    code: "M1",
    tags: ["宏观利率", "通胀压力", "算力借贷"],
    title: "美国高利率延续与算力借贷风险",
    verdict: "美国通胀反弹拉长高利率周期，叠加巨额算力借贷引发央行警示，AI 行业建集群与练大模型的资金成本正在实质抬升。",
    chartType: "m1MacroFed",
    chartCaption: "BLS 10 月通胀报告 · 美联储 11 月《金融稳定报告》· 英格兰银行 11 月报告（2026 年 11 月）",
    factsTitle: "增量宏观信号",
    facts: [
      { lead: "物价上涨仍未降温", text: "10 月美国整体物价环比上涨 0.4%，核心通胀指标升至 3.3%，显著高于美联储 2% 目标。" },
      { lead: "美联储释放继续加息信号", text: "纽约联储主席 Williams 公开指出 AI 投资热潮与芯片、能源涨价推高通胀，市场预期 12 月可能重启加息。" },
      { lead: "美英央行密集提示 AI 风险", text: "美联储主席 Warsh 披露已测算 AI 回报不及预期对经济与就业的冲击；英格兰银行同步警示大厂与算力商互相注资买卡的循环风险。" }
    ],
    impactTitle: "对 AI 产业与研发的影响",
    impacts: [
      { lead: "大模型研发更看投入产出", text: "资金变贵后，单纯靠烧钱堆参数和算力的路径难以持续，算法效率与真实收入成为硬约束。" },
      { lead: "新兴算力云扩产受阻", text: "科技巨头仍可凭自有现金流建机房，但依赖借钱买卡的中游算力商融资成本飙升，算力租金易涨难跌。" },
      { lead: "资金向硬核技术收敛", text: "浅层套壳应用与纯概念项目明显降温，研发资源加速向 AI 制药、具身智能、专用推理芯片和自主智能体集中。" }
    ],
    sources: [
      { label: "BLS CPI 官方发布", url: "https://www.bls.gov/cpi/" },
      { label: "美联储 11 月金融稳定报告", url: "https://www.federalreserve.gov/publications/files/financial-stability-report-20261113.pdf" },
      { label: "美联储主席 Warsh 讲话", url: "https://www.federalreserve.gov/newsevents/speech/warsh20261116a.htm" },
      { label: "Axios (纽约联储主席访谈)", url: "https://www.axios.com/2026/11/17/john-williams-new-york-fed-axios-bfd" },
      { label: "英格兰银行 11 月报告", url: "https://www.bankofengland.co.uk/financial-stability-report/2026/november-2026" }
    ]
  },
  {
    id: "m2",
    code: "M2",
    tags: ["美国中期选举", "电力与民生", "数据中心审批"],
    title: "美国中期选举与数据中心建设受阻",
    verdict: "美国民主党重掌参众两院叠加地方数据中心禁令浪潮，居民电价上涨与民生焦虑正把北美算力扩建推入强政策审查期。",
    chartType: "m2Midterm",
    chartCaption: "Ballotpedia 2026 中期选举 · Redbud Consulting · USC Annenberg · SemiAnalysis（2026 年 11 月）",
    factsTitle: "增量政治与政策信号",
    facts: [
      { lead: "民主党重掌参众两院", text: "中期选举中民主党同时夺回国会两院并赢下多个关键州长席位，白宫与国会进入强博弈格局。" },
      { lead: "地方新建阻力全面扩散", text: "除投票议案压倒性受阻外，多州新任州长计划追加全州新建暂缓令，数据中心审批从局部争议升级为普遍阻力。" },
      { lead: "国会瞄准电费转嫁问题", text: "新掌权的民主党委员会拟重点审查算力用电推高居民电价，推动强制科技巨头全额承担电网升级费用。" }
    ],
    impactTitle: "对 AI 产业链的影响",
    impacts: [
      { lead: "远期算力交付周期拉长", text: "在建机房大概率照常完工，但得州许可冻结叠加地方禁令将实质拖累 2028 年起北美新增算力上线。" },
      { lead: "大厂被迫自建电源与出海", text: "OpenAI 已承诺自担算力园区全部用电与电网成本；头部云厂加速转向自建核电/燃气微网或向海外富电区外迁。" },
      { lead: "中美供电确定性形成对照", text: "北美已拿到电力指标的现有机房愈发稀缺；中国依托特高压与东数西算的算电协同体系，在物理供电侧具备显著确定性。" }
    ],
    sources: [
      { label: "Ballotpedia 2026 国会选举", url: "https://ballotpedia.org/United_States_Congress_elections,_2026" },
      { label: "USC Annenberg 公众调研", url: "https://annenberg.usc.edu/news/research-and-impact/new-usc-annenberg-survey-finds-data-centers-and-ai-are-top-issue-country" },
      { label: "SemiAnalysis 阻力分析", url: "https://newsletter.semianalysis.com/p/the-datacenter-backlash-goes-bipartisan" },
      { label: "The Information", url: "https://www.theinformation.com/articles/blue-wave-engulf-data-center-industry" },
      { label: "AI 前沿动态追踪", url: "https://ai-daily.ihainan.me/2026-11-05.html#s29" }
    ]
  }
];
