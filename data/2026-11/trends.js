window.MONTHLY_DATA = window.MONTHLY_DATA || {};

window.MONTHLY_DATA.trends = [
  {
    id: "b1",
    code: "B1",
    org: "Menlo Ventures · 2026.11 年度报告",
    reportTitle: "2026: The State of Enterprise AI",
    title: "企业 AI 年化支出暴涨 5.4 倍至 1,768 亿美元，Agent 贡献 80% 用量",
    quote: "企业 AI 已从试点预算跃迁为独立增量池：55% 资金来自净新增预算，自主 Agent 正在驱动连续的算力与 Token 消耗。",
    bullets: [
      "截至 2026 年 9 月，企业 AI 部署年化支出达 $176.8B（2025 年为 $33B），企业实际支出增速（4.7×）大幅超出年初财务规划（1.9×）。",
      "模型层高度集中：Anthropic、OpenAI、Google 三家占据约 69% 的企业 API/部署支出；但传统核心系统（CRM/HRIS/ERP）暂未出现大规模替换。"
    ],
    chartType: "menloEnterprise",
    chartCaption: "Menlo Ventures《2026: The State of Enterprise AI》（2026 年 11 月）",
    chinaContextTitle: "开源趋势与国内对照",
    chinaContext: [
      { label: "中国开源模型进入海外企业支出", text: "Menlo 报告指出，开源模型在特定企业任务中占比持续攀升，其中中国开源模型（Kimi、DeepSeek、GLM、Qwen）占据开源企业支出的主导份额。" },
      { label: "国内净新增预算节奏", text: "美国企业 55% 增量来自净新增 AI 预算，而国内政企与大型民企 IT 预算仍偏存量结构调整，更强调私有化部署与直接降本回报。" }
    ],
    sources: [
      { label: "Menlo Ventures 2026 企业 AI 报告原文", url: "https://menlovc.com/perspective/2026-the-state-of-enterprise-ai/" }
    ]
  },
  {
    id: "b2",
    code: "B2",
    org: "Menlo Ventures · 2026.11 医药与医疗报告",
    reportTitle: "2026: The State of AI in Healthcare (Pharma & Life Sciences)",
    title: "医疗成 AI 最大垂直市场（$3.7B），制药与生命科学支出暴涨 23 倍",
    quote: "医疗 AI 正从后台病历转录转向药物研发与临床决策：51% 药企已进入规模化部署，传统巨头正在收割浅层文书工具。",
    bullets: [
      "调研 550 位医疗与制药高管显示：2026 年医疗 AI 支出达 $3.7B（同比 2.5×），超越法律（$1.8B）成最大垂直行业；其中生命科学与制药支出暴涨 23× 至 $700M（外部新药研发平台与数据占 $600M）。",
      "竞争格局剧烈分化：病历转录（$950M）已被 Microsoft 与 Epic 等原有巨头收割约 46% 份额；高增长资金转向临床助手（5.5× 至 $550M）与 AI 制药，但买方验证门槛抬升，采购周期拉长至 10–11 个月。"
    ],
    chartType: "menloPharma",
    chartCaption: "Menlo Ventures《2026: The State of AI in Healthcare》（2026 年 11 月）",
    chinaContextTitle: "前沿动向与国内医药对照",
    chinaContext: [
      { label: "前沿实验室与药企深度结盟", text: "Anthropic 推出 Claude Science、OpenAI 发布 GPT-Rosalind 并收购 Orchestra·Bio，Chai Discovery 与 Genesis Therapeutics 等垂直平台密集签下跨国药企多管线合作。" },
      { label: "国内 AI 制药与院内落地差异", text: "国内创新药企与头部 CXO 聚焦分子发现提速与临床入组降本；院内临床助手则受制于医院信息系统封闭与医保付费口径，商业化更易在研发外包与出海管线跑通。" }
    ],
    sources: [
      { label: "Menlo Ventures 2026 Healthcare & Pharma 报告入口", url: "https://menlovc.com/perspective/reports" }
    ]
  },
  {
    id: "b3",
    code: "B3",
    org: "a16z · 2026.11 市场报告",
    reportTitle: "How to Win Bots and Influence Purchases (B2A Economy)",
    title: "B2A 代理经济兴起：Agent 推荐高度趋同，登录墙阻断 100% 自动交易",
    quote: "商业入口正从面向人眼（B2C）转向面向代理（B2A）：当 AI 替消费者比价下单，开放数据结构与免登录结账成为新流量闸口。",
    bullets: [
      "a16z 实测 11,307 次 AI 购物 Agent 任务：任一商品被单个 Agent 推荐后，被其他 Agent 同步推荐的概率高达 73%，25% 场景四平台选出完全一致的首选商品。",
      "支付摩擦决定转化生死：支持游客结账的网站 Agent 结账到达率达 81%，而强制登录网站失败率高达 100%；综合交易平台与多品牌零售商拿走 55% 份额。"
    ],
    chartType: "a16zB2A",
    chartCaption: "a16z《B2A Economy》（2026 年 11 月）",
    chinaContextTitle: "超级 App 生态与国内对照",
    chinaContext: [
      { label: "围墙花园与代理博弈", text: "欧美电商以独立站与开放网页为主，免登录与结构化接口决定 B2A 转化；国内电商高度集中于淘宝、京东、抖音、微信等强登录超级 App，Agent 交易入口大概率由平台自建或官方协议开放。" },
      { label: "C 端变现转向交易与广告", text: "据 a16z 同期第 7 版消费榜数据，美国仅约 4.5% 消费者为 AI 订阅付费（前 1% 重度用户年支出超 $900），倒逼消费级 AI 从纯订阅向导购抽佣与原生广告延伸。" }
    ],
    sources: [
      { label: "a16z: Welcome to the B2A Economy (2026.11)", url: "https://a16z.news/p/welcome-to-the-b2a-economy-how-agents" }
    ]
  },
  {
    id: "b4",
    code: "B4",
    org: "a16z 医疗 & 红杉 Sequoia",
    reportTitle: "Infinite Healthcare · Services: The New Software",
    title: "商业模式收敛：信息层趋近免费，从卖软件席位转向按结果交付服务",
    quote: "AI 把信息处理成本压向零；下一代超级公司将用软件毛利直接交付医疗、法律、外包等实体与专业服务结果。",
    bullets: [
      "a16z（医疗定价）：信息层趋于不限量低价，按次收费仅留给稀缺实体干预，收费主线向按人头按月订阅（PMPM）与临床结果挂钩迁移。",
      "红杉（企业服务）：AI 直接交付会计、法务、工程部署结果，预算池从 1× 企业软件座位跃迁至 ~10× 专业服务外包预算（如 OpenAI 收购部署团队 Northslope、Legora 估值 $8.8B）。"
    ],
    chartType: "pricingAndServices",
    chartCaption: "a16z《Infinite Healthcare》· Sequoia《Services: The New Software》",
    chinaContextTitle: "国内支付体系、毛利结构与 11 月资金印证",
    chinaContext: [
      { label: "国内医疗支付框架", text: "国内公立医院以医保 DRG/DIP 按病种打包为核心，PMPM 订阅与结果付费目前更贴近商保健康管理、慢病随访与特药服务。" },
      { label: "外包单价与毛利约束", text: "国内人力外包与 IT 实施单价显著低于欧美，纯替代初级人力的软件毛利偏薄，更考验高客单复杂垂直场景的交付壁垒。" },
      { label: "11 月早中期重金印证", text: "本月美国 ≥$500M 早中期融资集中于 AI 研发自动化（Mirendil $1B）、多模态推理底座（fal $1.3B）与具身数据闭环（Genesis AI $500M），薄壳工具显著降温。" }
    ],
    sources: [
      { label: "a16z: Infinite Healthcare", url: "https://a16z.com/infinite-healthcare-whats-it-worth/" },
      { label: "Sequoia 观点 (Linas Substack)", url: "https://linas.substack.com/p/sequoiathesis" },
      { label: "AI Weekly (Mirendil)", url: "https://aiweekly.co/alerts/mirendil-raises-1b-series-a-at-5b-from-kleiner-perkins-and-clearlake-to" }
    ]
  }
];
