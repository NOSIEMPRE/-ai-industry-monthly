window.MONTHLY_DATA = window.MONTHLY_DATA || {};

window.MONTHLY_DATA.trends = [
  {
    id: "b1",
    code: "B1",
    org: "Menlo Ventures · 2026.11",
    reportTitle: "2026: The State of Enterprise AI",
    title: "企业 AI 支出与 Agent 主导",
    quote: "企业 AI 已从试点预算跃迁为独立的新增投入池，自主 Agent 正在取代单次对话，成为驱动企业持续算力消耗的主导形态。",
    bullets: [
      "截至 2026-09 年化部署支出达 $176.8B（同比 5.4×），实际增速（4.7×）远超年初财务规划（1.9×）。",
      "Anthropic、OpenAI、Google 占约 69% 企业支出，但传统 CRM/HRIS/ERP 核心系统暂未现大规模替换。"
    ],
    chartType: "menloEnterprise",
    chartCaption: "Menlo Ventures《2026: The State of Enterprise AI》（2026 年 11 月）",
    chinaContextTitle: "开源格局与国内对照",
    chinaContext: [
      { label: "中国开源模型出海份额领先", text: "开源模型在特定企业任务占比持续攀升，Kimi、DeepSeek、GLM、Qwen 占据海外开源企业支出主导。" },
      { label: "国内偏存量预算替换", text: "区别于美国 55% 净新增预算，国内政企 IT 仍以存量结构调整为主，更强调私有化部署与直接降本。" }
    ],
    sources: [
      { label: "Menlo Ventures 2026 企业 AI 报告", url: "https://menlovc.com/perspective/2026-the-state-of-enterprise-ai/" }
    ]
  },
  {
    id: "b2",
    code: "B2",
    org: "Menlo Ventures · 2026.11",
    reportTitle: "2026: The State of AI in Healthcare",
    title: "医疗与 AI 制药规模化爆发",
    quote: "医疗已跃升为 AI 最大垂直行业，制药与生命科学进入规模化部署；传统软件巨头正在收割浅层文书工具，增量机会转向临床决策与新药研发。",
    bullets: [
      "生命科学与制药支出暴涨 23× 至 $700M（外部新药研发平台与数据占 $600M），买方验证周期拉长至 10–11 个月。",
      "病历转录（$950M）约 46% 份额已被 Microsoft、Epic 收割，增量资金转向临床助手（5.5×）与新药发现。"
    ],
    chartType: "menloPharma",
    chartCaption: "Menlo Ventures《2026: The State of AI in Healthcare》（2026 年 11 月）",
    chinaContextTitle: "前沿动向与国内对照",
    chinaContext: [
      { label: "头部实验室深度绑定药企", text: "Anthropic 推 Claude Science、OpenAI 推 GPT-Rosalind 并收购 Orchestra·Bio，垂直平台密集签下跨国管线。" },
      { label: "国内突破口在研发与出海", text: "院内临床受限于系统封闭与医保口径，国内商业化更易在创新药研发、CXO 提效与出海管线率先跑通。" }
    ],
    sources: [
      { label: "Menlo Ventures Healthcare 报告", url: "https://menlovc.com/perspective/reports" }
    ]
  },
  {
    id: "b3",
    code: "B3",
    org: "a16z · 2026.11",
    reportTitle: "How to Win Bots and Influence Purchases",
    title: "B2A 代理商业经济兴起",
    quote: "商业入口正从面向人类用户转向面向 AI 代理：当代理能替消费者走完浏览、比价到下单全流程，开放商品数据与免登录结账成为新的流量入口。",
    bullets: [
      "代理推荐高度趋同：商品被单个 AI 代理推荐后，被其他代理同步推荐的概率达 73%，四分之一场景中四大平台首选完全一致。",
      "支付摩擦决定生死：游客结账到达率 81%，强制登录失败率 100%；综合平台与多品牌零售拿走 55% 份额。"
    ],
    chartType: "a16zB2A",
    chartCaption: "a16z《B2A Economy》（2026 年 11 月）",
    chinaContextTitle: "超级 App 生态对照",
    chinaContext: [
      { label: "围墙花园由平台主导入口", text: "欧美独立站靠免登录接口承接 B2A；国内强登录超级 App 生态下，代理交易入口大概率由平台自建或官方协议开放。" },
      { label: "C 端转向导购与原生广告", text: "美消费者仅 ~4.5% 为 AI 订阅付费（前 1% 年支出超 $900），倒逼消费级 AI 向导购抽佣与广告延伸。" }
    ],
    sources: [
      { label: "a16z: Welcome to the B2A Economy", url: "https://a16z.news/p/welcome-to-the-b2a-economy-how-agents" }
    ]
  },
  {
    id: "b4",
    code: "B4",
    org: "a16z 医疗 & 红杉 Sequoia",
    reportTitle: "Infinite Healthcare · Services: The New Software",
    title: "信息层趋零与按结果交付",
    quote: "AI 正把信息处理成本压向零；下一代头部公司将用软件级效率直接交付医疗、法务与工程结果，切入远大于传统软件的专业服务外包市场。",
    bullets: [
      "a16z（医疗）：信息咨询趋于低价不限量，按次收费仅留给稀缺线下诊疗，主线转向按人头包月订阅与临床结果挂钩。",
      "红杉（企业服务）：AI 直接交付专业工作结果，正切入约 10 倍于软件规模的外包市场（如 OpenAI 收购 Northslope、Legora 估值 $8.8B）。"
    ],
    chartType: "pricingAndServices",
    chartCaption: "a16z《Infinite Healthcare》· Sequoia《Services: The New Software》",
    chinaContextTitle: "国内支付约束与本月资金印证",
    chinaContext: [
      { label: "医疗支付更贴近商保", text: "国内公立医院以医保按病种打包为主，按人头订阅与结果付费短期更易落地商保慢病管理与特药服务。" },
      { label: "高客单壁垒决定毛利", text: "国内初级人力外包单价较低，简单替代人力利润薄，本月海外大额资金亦全面向研发自动化与推理基础设施集中。" }
    ],
    sources: [
      { label: "a16z: Infinite Healthcare", url: "https://a16z.com/infinite-healthcare-whats-it-worth/" },
      { label: "Sequoia 观点 (Linas)", url: "https://linas.substack.com/p/sequoiathesis" },
      { label: "AI Weekly (Mirendil)", url: "https://aiweekly.co/alerts/mirendil-raises-1b-series-a-at-5b-from-kleiner-perkins-and-clearlake-to" }
    ]
  }
];
