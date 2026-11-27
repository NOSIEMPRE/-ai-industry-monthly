window.MONTHLY_DATA = window.MONTHLY_DATA || {};

window.MONTHLY_DATA.funding = {
  overview: {
    id: "c1",
    code: "C1",
    title: "11 月全球 AI 投融资总览",
    verdict: "资金呈现两极分化与债务扩容并存：头部模型转向公开市场与巨头合投，早中期聚焦制药、具身、推理芯片与结果付费智能体，高杠杆算力债成新风险变量。",
    kpis: [
      { value: "$148.8B", label: "11 月海外监测 ≥$100M 股权与 IPO 总额（22 笔）" },
      { value: "10 笔", label: "海外除头部模型外单笔 ≥$500M 大额轮次" },
      { value: ">$680B", label: "2026 前 10 月 AI 算力基础设施债务发行额（美联储 11 月）" },
      { value: "大模型·芯片·AI4S", label: "11 月中国重点资本与主权基金核心投向" }
    ],
    synthesis: [
      {
        title: "海外股权分化",
        bullets: [
          { lead: "头部实验室转向公开化", text: "Anthropic 交割 $119.5B（IPO + 战略私募），OpenAI 缩量至首笔 $11B，纯一级大额募资触顶。" },
          { lead: "非头部 $18.3B 聚焦四大硬科技", text: "集中流向 AI 制药（$5.1B）、具身自主（$5.4B）、推理芯片（$2.65B）与结果付费智能体（Sierra $1.75B）。" }
        ]
      },
      {
        title: "中国资本格局",
        bullets: [
          { lead: "大模型与芯片加速资本化", text: "DeepSeek 媒报近 $16B 融资、平头哥保密递表赴港、月之暗面拆除开曼架构，全面转入重资本阶段。" },
          { lead: "国资、产业与主权基金主导", text: "大额轮次锁定 AI4S（镁伽近 $200M）、Token 推理（趋境 >13 亿）、国产芯片（微纳核芯 >10 亿）与具身部件。" }
        ]
      },
      {
        title: "巨头超级并购",
        bullets: [
          { lead: "光互连与智能体安全成焦点", text: "Marvell $115B 全股票收购 Lumentum 补齐光互连；CrowdStrike $43.9B 收购 Zscaler 抢占智能体控制平面。" },
          { lead: "芯片与云巨头收编核心团队", text: "AMD 交割 World Labs（$8.2B）与 Taalas（$2.9B）；亚马逊被曝 $7.5B 买下 Decart 优化栈。" }
        ]
      },
      {
        title: "杠杆与供给风险",
        bullets: [
          { lead: "算力债扩容触发央行示警", text: "前 10 月算力发债超 $680B（≈2023 年 5×），本月 SpaceX $44B GPU 债定价；英格兰银行警示循环融资。" },
          { lead: "管制与审批收紧有效供给", text: "美远程算力新规落地后英伟达收紧东南亚发运与对华租卡；得州许可冻结牵动 2028 年近三成新增容量。" }
        ]
      }
    ],
    sectorChart: [
      { label: "头部模型实验室 (Anthropic · OpenAI)", value: 130.5, display: "$130.5B", region: "us" },
      { label: "具身与自主系统 (6 笔 · 含 Agility 上市)", value: 5.38, display: "$5.38B", region: "us" },
      { label: "AI 制药 (Isomorphic $5B · Boltz)", value: 5.11, display: "$5.11B", region: "us" },
      { label: "推理与芯片 (fal · Fractile · Marlowe)", value: 2.65, display: "$2.65B", region: "us" },
      { label: "研发数据 & AI 安全 (Mirendil · Cyera 等 5 笔)", value: 2.79, display: "$2.79B", region: "us" },
      { label: "智能体与软件 (Sierra · LangChain 等 4 笔)", value: 2.41, display: "$2.41B", region: "us" }
    ],
    cnMixChart: [
      { label: "AI4S 自动化实验室（镁伽科技）", amount: 14, display: "近 $200M" },
      { label: "Token 推理服务（趋境科技）", amount: 13, display: ">13 亿元" },
      { label: "存算一体 AI 芯片（微纳核芯）", amount: 10, display: ">10 亿元" },
      { label: "智能体 CPU / 量子计算（灵睿 · 向量奇点）", amount: 8, display: "各数亿元" },
      { label: "具身零部件集群（章鱼 · 傲意 · 英汉思）", amount: 3, display: "各亿元级" },
      { label: "AI 科研实验室（青葵智造 A 轮）", amount: 1.5, display: "亿元级" }
    ],
    sources: [
      { label: "AI 前沿动态追踪 (11 月日报)", url: "https://ai-daily.ihainan.me/" },
      { label: "Anthropic IPO 交割公告", url: "https://www.anthropic.com/news/ipo-close" },
      { label: "美联储 11 月金融稳定报告", url: "https://www.federalreserve.gov/publications/files/financial-stability-report-20261113.pdf" },
      { label: "英格兰银行 11 月金融稳定报告", url: "https://www.bankofengland.co.uk/financial-stability-report/2026/november-2026" },
      { label: "Crunchbase Q3/10 月报告", url: "https://news.crunchbase.com/venture/q3-2026-charts-funding-amounts-vs-round-counts/" },
      { label: "21 财经 11-26", url: "https://m.21jingji.com/article/20261126/herald/a1e1b4404c6a9c33087bb82064ad2456.html" }
    ]
  },
  us: {
    id: "c2",
    code: "C2",
    title: "海外 11 月重点交易明细",
    verdict: "扣除 Anthropic 与 OpenAI 后，其余 $18.3B 融资中单笔 ≥$500M 占 10 笔；制药（$5.1B）与具身自主（$5.4B）吸纳近六成，应用层仅青睐高 ARR 结果付费平台。",
    period: "2026-11-01 至 11-27 · 单笔 ≥$100M 股权融资与 IPO（22 笔）",
    deals: [
      {
        date: "11-03",
        company: "fal",
        sector: "推理与芯片",
        round: "E+F 轮",
        amount: "$1.65B",
        valuation: "未披露（媒报 $16B）",
        investors: "红杉领投 E 轮、Bessemer 领投 F 轮；英伟达跟投（生成式媒体推理）",
        tier: "公司公告",
        tierCode: "t1",
        sourceLabel: "fal 官方公告",
        sourceUrl: "https://x.com/fal/status/2117679688860508283"
      },
      {
        date: "11-03",
        company: "Traversal",
        sector: "智能体与软件",
        round: "B 轮",
        amount: "$120M",
        valuation: "$1B",
        investors: "Kleiner Perkins、Redpoint、Khosla 联合领投（AI SRE 运维）",
        tier: "公司公告",
        tierCode: "t1",
        sourceLabel: "Traversal 博客",
        sourceUrl: "https://www.traversal.com/blog/traversal-series-b-120-million-ai-sre"
      },
      {
        date: "11-05",
        company: "Agility Robotics",
        sector: "具身与自主系统",
        round: "SPAC 上市",
        amount: "$465M",
        valuation: "纳斯达克 AGLT",
        investors: "与 Churchill XI 合并上市；富士康领投 PIPE（Digit 5 订单逾 $300M）",
        tier: "公司公告",
        tierCode: "t1",
        sourceLabel: "Agility 公告",
        sourceUrl: "https://www.agilityrobotics.com/content/agility-becomes-first-u-s-publicly-listed-pure-play-humanoid-robotics-company-begins-trading-today-on-nasdaq-as-aglt"
      },
      {
        date: "11-05",
        company: "Zipline",
        sector: "具身与自主系统",
        round: "成长轮",
        amount: "$1.5B",
        valuation: "$21.5B",
        investors: "Paradigm、WCM、Layer Global 领投；Uber、摩根大通参投（与沃尔玛增 300 站）",
        tier: "公司公告",
        tierCode: "t1",
        sourceLabel: "Zipline 公告",
        sourceUrl: "https://www.zipline.com/newsroom/zipline-raises-1-5-billion-to-build-nationwide-drone-delivery-network"
      },
      {
        date: "11-06",
        company: "Shield AI",
        sector: "具身与自主系统",
        round: "H 轮+结构化融资",
        amount: "$2.5B",
        valuation: "$28.8B",
        investors: "$1B H 轮 + Blackstone $1B 结构化股权 + 摩根大通 $500M 债（同步 $5.3B 收购 Echodyne）",
        tier: "公司公告",
        tierCode: "t1",
        sourceLabel: "Shield AI 公告",
        sourceUrl: "https://shield.ai/shield-to-acquire-echodyne-in-a-transaction-valued-at-5-3-billion-and-raise-2-5-billion-at-a-28-8-billion-valuation/"
      },
      {
        date: "11-06",
        company: "OpenAI",
        sector: "头部模型",
        round: "私募首笔交割",
        amount: "$11B",
        valuation: "$1.25T",
        investors: "据媒体报道由阿联酋投资方与 Coatue 领投（目标总额下调至至多 $20B）",
        tier: "主流媒体",
        tierCode: "t2",
        sourceLabel: "Reuters / Bloomberg",
        sourceUrl: "https://www.reuters.com/business/openai-secures-11-billion-funding-125-trillion-valuation-bloomberg-news-reports-2026-11-06/"
      },
      {
        date: "11-09",
        company: "Nominal",
        sector: "智能体与软件",
        round: "C 轮",
        amount: "$240M",
        valuation: "$3B",
        investors: "Lightspeed 领投、Insight Partners 联合领投（复杂硬件工程 AI 平台）",
        tier: "公司公告",
        tierCode: "t1",
        sourceLabel: "Nominal 博客",
        sourceUrl: "https://nominal.io/blog/series-c"
      },
      {
        date: "11-09",
        company: "Cyera",
        sector: "AI 安全",
        round: "私募轮",
        amount: "$800M",
        valuation: "$20B",
        investors: "据 The Information 报道（AI 数据安全与威胁防御）",
        tier: "主流媒体",
        tierCode: "t2",
        sourceLabel: "The Information",
        sourceUrl: "https://www.theinformation.com/newsletters/dealmaker/cyeras-800-million-haul-shows-cyber-fever-broken"
      },
      {
        date: "11-10",
        company: "Mercor",
        sector: "研发与数据",
        round: "D 轮",
        amount: "$750M",
        valuation: "$20B",
        investors: "Benchmark、General Catalyst、英伟达、Salesforce、Zoom 等（含老股转让）",
        tier: "公司公告",
        tierCode: "t1",
        sourceLabel: "Mercor 博客",
        sourceUrl: "https://www.mercor.com/blog/series-d/"
      },
      {
        date: "11-10",
        company: "Path Robotics",
        sector: "具身与自主系统",
        round: "E 轮",
        amount: "$300M",
        valuation: "$2.45B",
        investors: "Georgian 领投；Tiger Global、Yamaha Motor Ventures、D. E. Shaw 等参投",
        tier: "公司公告",
        tierCode: "t1",
        sourceLabel: "Path Robotics 公告",
        sourceUrl: "https://www.path-robotics.com/news/path-robotics-announces-300-million-series-e-led-by-georgian"
      },
      {
        date: "11-11",
        company: "Fractile（英国）",
        sector: "推理与芯片",
        round: "C 轮",
        amount: "$720M",
        valuation: "$7B",
        investors: "Thrive、Founders Fund、Lightspeed、Redpoint 领投；CapitalG、贝莱德等跟投",
        tier: "公司公告",
        tierCode: "t1",
        sourceLabel: "Balderton 公告",
        sourceUrl: "https://www.balderton.com/news/fractile-raises-720m-to-build-the-hardware-that-pushes-ais-frontier-forward/"
      },
      {
        date: "11-13",
        company: "Mirendil",
        sector: "研发与数据",
        round: "A 轮",
        amount: "$1B",
        valuation: "未披露",
        investors: "Kleiner Perkins、Clearlake 领投；谷歌、Battery 等参投（自动化 AI 研发）",
        tier: "公司公告",
        tierCode: "t1",
        sourceLabel: "Mirendil 公告",
        sourceUrl: "https://mirendil.com/news/series-a/"
      },
      {
        date: "11-14",
        company: "LangChain",
        sector: "智能体与软件",
        round: "C 轮",
        amount: "$300M",
        valuation: "$3B",
        investors: "Alphabet 旗下 CapitalG 领投；GIC、DFJ Growth、红杉、Benchmark 等参投",
        tier: "公司公告",
        tierCode: "t1",
        sourceLabel: "LangChain 博客",
        sourceUrl: "https://blog.langchain.com/series-c/"
      },
      {
        date: "11-16",
        company: "Corma",
        sector: "AI 安全",
        round: "A 轮",
        amount: "$125M",
        valuation: "$1B",
        investors: "NEA 领投；红杉、Khosla、Coatue 跟投（防御型网络安全基础模型）",
        tier: "公司公告",
        tierCode: "t1",
        sourceLabel: "Corma 博客",
        sourceUrl: "https://corma.ai/blog/three-months-in"
      },
      {
        date: "11-17",
        company: "Isomorphic Labs",
        sector: "AI 制药",
        round: "C 轮",
        amount: "$5B",
        valuation: "未披露",
        investors: "Greenoaks、红杉联合领投；Alphabet、a16z、Thrive、MGX、淡马锡等参投",
        tier: "公司公告",
        tierCode: "t1",
        sourceLabel: "Isomorphic 公告",
        sourceUrl: "https://www.isomorphiclabs.com/articles/isomorphic-labs-announces-series-c-investment-round"
      },
      {
        date: "11-17",
        company: "Genesis AI",
        sector: "具身与自主系统",
        round: "A 轮",
        amount: "$500M",
        valuation: "$3.5B",
        investors: "Premji Invest、Khosla、Eclipse 联合领投；Durable Capital 参投",
        tier: "公司公告",
        tierCode: "t1",
        sourceLabel: "PR Newswire",
        sourceUrl: "https://www.prnewswire.com/news-releases/genesis-ai-raises-500m-series-a-at-3-5b-valuation-to-master-human-level-dexterity-in-general-purpose-robots-and-deploy-at-scale-302941249.html"
      },
      {
        date: "11-17",
        company: "Noeri",
        sector: "研发与数据",
        round: "首轮披露",
        amount: "$110M",
        valuation: "未披露",
        investors: "Menlo Ventures 领投；英伟达、NEA、思科、Snowflake 等（崔艺珍联合创办）",
        tier: "公司公告",
        tierCode: "t1",
        sourceLabel: "Noeri 官网",
        sourceUrl: "https://noeri.ai"
      },
      {
        date: "11-18",
        company: "Boltz",
        sector: "AI 制药",
        round: "A 轮",
        amount: "$110M",
        valuation: "未披露",
        investors: "Bessemer 领投（AI 生物分子设计，合作覆盖 6 家全球 20 强药企）",
        tier: "公司公告",
        tierCode: "t1",
        sourceLabel: "Boltz 公告",
        sourceUrl: "https://boltz.com/series-a"
      },
      {
        date: "11-18–20",
        company: "Anthropic",
        sector: "头部模型",
        round: "IPO + 同步私募",
        amount: "$119.5B",
        valuation: "≈$1.5T",
        investors: "纳斯达克上市（ANT）：IPO 含绿鞋 $93.5B + 英伟达/谷歌/微软/AMD/博通/美光/台积电同步私募 $26B",
        tier: "公司公告",
        tierCode: "t1",
        sourceLabel: "Anthropic 交割公告",
        sourceUrl: "https://www.anthropic.com/news/ipo-close"
      },
      {
        date: "11-23",
        company: "Sierra",
        sector: "智能体与软件",
        round: "F 轮",
        amount: "$1.75B",
        valuation: "$30B",
        investors: "Greenoaks、Lightspeed 领投；Benchmark、红杉、GV、Tiger 全员加码（ARR >$400M）",
        tier: "公司公告",
        tierCode: "t1",
        sourceLabel: "Sierra 博客",
        sourceUrl: "https://sierra.ai/blog/series-f-30b"
      },
      {
        date: "11-23",
        company: "Marlowe",
        sector: "推理与芯片",
        round: "种子轮",
        amount: "$277M",
        valuation: "未披露",
        investors: "Accel 领投；Bessemer、Altimeter、Atreides、Valor、Eclipse 参投（多芯片推理工厂）",
        tier: "公司公告",
        tierCode: "t1",
        sourceLabel: "Marlowe 官网",
        sourceUrl: "https://marlowe.ai/introducing-marlowe.html"
      },
      {
        date: "11-24",
        company: "Embo",
        sector: "具身与自主系统",
        round: "种子轮",
        amount: "$110M",
        valuation: "未披露",
        investors: "a16z 领投；Khosla、DST Global、英伟达参投（Dreamer 作者创办机器人世界模型）",
        tier: "公司公告",
        tierCode: "t1",
        sourceLabel: "Embo 官网",
        sourceUrl: "https://embo.com/introducing-embo"
      }
    ],
    footnote: "同期推进中的高估值融资与大额并购：Databricks 洽谈 $225B 估值、Cognition 洽谈 $75B 估值融资 $2B+、ElevenLabs 洽谈 $33B 估值；Marvell 拟 $115B 全股票收购 Lumentum，CrowdStrike 拟 $43.9B 收购 Zscaler。"
  },
  china: {
    id: "c3",
    code: "C3",
    title: "中国 11 月重点交易明细",
    verdict: "国资基金、产业巨头与中东主权基金三方主导：十亿元级资金锁定国产算力、推理服务与 AI4S 自动化实验室，具身赛道向核心零部件收敛。",
    period: "2026-11-01 至 11-27 · 亿元级以上融资与重点上市进展（9 项）",
    deals: [
      {
        date: "11-01",
        company: "DeepSeek",
        sector: "头部模型",
        round: "私募轮",
        amount: "近 $16B",
        investors: "据 The Information 与 Crunchbase 报道估值约 $92B，腾讯、宁德时代、长鑫存储及国有机构参投",
        tier: "主流媒体",
        tierCode: "t2",
        sourceLabel: "The Information",
        sourceUrl: "https://www.theinformation.com/articles/behind-deepseeks-16-billion-funding-chinese-tech-titans-state-players"
      },
      {
        date: "11-01",
        company: "趋境科技",
        sector: "推理服务",
        round: "B 轮",
        amount: ">13 亿元",
        investors: "浙财资本、萧山资本、工银投资、中关村科学城等六家联投",
        tier: "主流媒体",
        tierCode: "t2",
        sourceLabel: "新浪转投中网",
        sourceUrl: "https://finance.sina.com.cn/roll/2026-11-01/doc-inixeyiz3155017.shtml"
      },
      {
        date: "11 月上旬",
        company: "微纳核芯",
        sector: "AI 芯片",
        round: "C2 轮",
        amount: ">10 亿元",
        investors: "建投投资领投，杭州资本、凯泰资本等跟投",
        tier: "主流媒体",
        tierCode: "t2",
        sourceLabel: "投中周报",
        sourceUrl: "https://finance.sina.com.cn/roll/2026-11-01/doc-inixeyiz3155017.shtml"
      },
      {
        date: "11-10",
        company: "平头哥（阿里）",
        sector: "AI 芯片",
        round: "分拆赴港上市",
        amount: "保密递表 A1",
        investors: "阿里巴巴港交所公告推进独立上市（9 月 11 日已保密递表，真武 AI 芯片累计出货 56 万颗）",
        tier: "主流媒体",
        tierCode: "t2",
        sourceLabel: "澎湃新闻",
        sourceUrl: "https://www.thepaper.cn/newsDetail_forward_34447251"
      },
      {
        date: "11-13",
        company: "灵睿智芯",
        sector: "AI 芯片",
        round: "Pre-A+",
        amount: "数亿元",
        investors: "美团战投领投，京东关联基金、商汤国香、尚颀资本跟投",
        tier: "主流媒体",
        tierCode: "t2",
        sourceLabel: "虎嗅",
        sourceUrl: "https://m.huxiu.com/article/4908774.html"
      },
      {
        date: "11-13",
        company: "青葵智造",
        sector: "AI4S 实验室",
        round: "A 轮",
        amount: "亿元级",
        investors: "据 36 氪报道，创东方投资、飞荣达股份、金辉大数据参与（AI 科研自驱动实验室）",
        tier: "主流媒体",
        tierCode: "t2",
        sourceLabel: "36氪",
        sourceUrl: "https://www.36kr.com/newsflashes/4067555949319041"
      },
      {
        date: "11-19",
        company: "镁伽科技",
        sector: "AI4S 实验室",
        round: "新一轮",
        amount: "近 $200M",
        investors: "阿曼主权财富基金（OIA）参投；亚投资本、Granite Asia、创新工场跟投，招银国际新进",
        tier: "公司公告",
        tierCode: "t1",
        sourceLabel: "PR Newswire",
        sourceUrl: "https://www.prnewswire.com/news-releases/megarobo-raises-nearly-us200-million-in-new-funding-to-build-intelligence-infrastructure-for-the-physical-world-302944671.html"
      },
      {
        date: "11-23–24",
        company: "章鱼动力 · 傲意科技 · 英汉思动力",
        sector: "具身零部件",
        round: "多轮次",
        amount: "各亿元级",
        investors: "产业与财务机构分别参投（灵巧手 / 动力模组 / 康复外骨骼）",
        tier: "主流媒体",
        tierCode: "t2",
        sourceLabel: "虎嗅 / 21 财经",
        sourceUrl: "https://m.21jingji.com/article/20261126/herald/a1e1b4404c6a9c33087bb82064ad2456.html"
      },
      {
        date: "11-27",
        company: "向量奇点",
        sector: "前沿计算",
        round: "A 轮",
        amount: "数亿元",
        investors: "北京市人工智能产业投资基金等领衔；阿里参投",
        tier: "首发报道",
        tierCode: "t1",
        sourceLabel: "投资界",
        sourceUrl: "https://news.pedaily.cn/202611/572475.shtml"
      }
    ],
    footnote: "上市筹备动态：据《华尔街日报》11-13 报道，月之暗面正注销开曼群岛控股公司并将投资人持股迁入境内运营主体；国内硬科技与 AI4S 赛道呈现国资基金、互联网与产业巨头及中东主权基金联合领投的格局。"
  }
};
