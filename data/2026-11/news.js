window.MONTHLY_DATA = window.MONTHLY_DATA || {};

window.MONTHLY_DATA.news = [
  {
    id: "a1",
    code: "A1",
    tags: ["公开市场", "估值锚点"],
    date: "11-18 定价 · 11-19 上市 · 11-24 破发",
    title: "Anthropic 纳斯达克上市与破发",
    why: "头部模型实验室首次接受公开市场每日定价，高增速叙事已不足以支撑万亿估值，盈利路径与资本开支效率成为新的估值锚点。",
    background: "年初私募估值 $380B，10 个月后按发行价计完全稀释估值达 ~$1.5T；与同期缩量的 OpenAI（A2）走出截然不同的资本化路径。",
    liveQuote: {
      symbol: "ANT",
      exchange: "NASDAQ",
      ipoPrice: 83.0,
      fallbackPrice: 81.91,
      fallbackLabel: "11-24 破发收盘（节前围绕 $82–83 震荡）",
      quoteUrl: "https://finance.yahoo.com/quote/ANT/"
    },
    chartType: "a1Valuation",
    timeline: [
      { time: "11-18", text: "发行价定于 $83（高于 $70–78 指引），募资 $81.3B（含绿鞋 $93.5B），超过 SpaceX 6 月 IPO。", hot: true },
      { time: "11-19", text: "纳斯达克挂牌（ANT），开盘 $111.50、盘中冲高 $115.10，首日收报 ~$97（+17%）。", hot: false },
      { time: "11-24", text: "上市第四日破发，盘中下探 $75.61，收报 $81.91；11-25 节前围绕 $82–83 震荡。", hot: true }
    ],
    factSources: [
      { label: "CNBC 11-18", url: "https://www.cnbc.com/2026/11/18/anthropic-ipo-ai-offering-price.html" },
      { label: "Al Jazeera 11-19", url: "https://www.aljazeera.com/economy/2026/11/19/anthropic-starts-trading-in-the-us-after-blockbuster-ipo" },
      { label: "Yahoo Finance (ANT)", url: "https://finance.yahoo.com/quote/ANT/" }
    ],
    views: {
      bull: "首周回调主因早期股东减持与获利了结，企业级 Claude 增速仍支撑华尔街长期看多。",
      bear: "四日破发并一度拖累英伟达、AMD、美光走弱，市场对重资本开支与万亿估值兑现保持谨慎。"
    },
    viewSources: [
      { label: "Decrypt 11-19", url: "https://decrypt.co/383669/nvidia-amd-micron-ai-stocks-sink-anthropic-ipo-price" },
      { label: "Trefis 11-19", url: "https://www.trefis.com/stock/ant/articles/626034/could-anthropic-stock-fall-26/2026-11-19" }
    ]
  },
  {
    id: "a2",
    code: "A2",
    tags: ["一级市场", "募资降速"],
    date: "首笔交割约 11-06",
    title: "OpenAI 私募目标下调",
    why: "一级市场对万亿美元级别超大轮次的承接已触及阶段性上限，头部模型实验室正集体加速转向公开市场筹资。",
    background: "今年 3 月刚以 $852B 估值募资 $122B；据报道计划 2027 年上市，当前正处于一级向二级切换的过渡期。",
    chartType: "a2Round",
    timeline: [
      { time: "前期计划", text: "最初寻求按 $1.4T 估值募资 $30B 以上。", hot: false },
      { time: "11-06", text: "受二级板块回调影响，估值下调至 $1.25T，完成首笔 $11B 交割。", hot: true },
      { time: "后续规划", text: "计划数周内追加募集至多 $9B，本轮总额目标缩减至 ~$20B。", hot: false }
    ],
    factSources: [
      { label: "Investing.com (Bloomberg)", url: "https://www.investing.com/news/stock-market-news/openai-closes-11-billion-funding-at-125-trillion-valuation--report-5009147" },
      { label: "24/7 Wall St. 11-07", url: "https://247wallst.com/investing/2026/11/07/openai-just-raised-11-billion-at-a-1-25-trillion-valuation-below-the-1-4-trillion-it-first-sought/" }
    ],
    views: {
      bull: "估值较 3 月仍涨 47%，主动缩量属二级波动期的择时调整，并非基本面走弱。",
      bear: "目标由 $30B+ 缩至首笔 $11B，印证私募资金池对万亿级超大轮次已触及上限。"
    },
    viewSources: [
      { label: "Investing.com", url: "https://www.investing.com/news/stock-market-news/openai-closes-11-billion-funding-at-125-trillion-valuation--report-5009147" },
      { label: "24/7 Wall St. 11-07", url: "https://247wallst.com/investing/2026/11/07/openai-just-raised-11-billion-at-a-1-25-trillion-valuation-below-the-1-4-trillion-it-first-sought/" }
    ]
  },
  {
    id: "a3",
    code: "A3",
    tags: ["治理震荡", "关键人物风险"],
    date: "11-09 至 11-26",
    title: "英伟达 11 天治理震荡",
    why: "财报基本面依旧强劲（Q3 营收 $115.8B、同比 +103%），但离任复职暴露严重的关键人物依赖与治理短板；标普负面观察更揭示其对 $5,000 亿算力担保链的传导风险。",
    background: "导火索源于美国国会及媒体对新加坡云商 Megaspeed 芯片转运与黄仁勋私人关系的审查，触发剧烈估值与信用波动。",
    chartType: "a3Nvidia",
    timeline: [
      { time: "11-09", text: "董事会启动独立调查（涉芯片转运报道），黄仁勋致信致歉并承诺配合。", hot: false },
      { time: "11-12", text: "黄仁勋辞去总裁、CEO 及董事，CFO Kress 暂代；股价连跌六周，市值回撤约 $1.7T。", hot: true },
      { time: "11-20–21", text: "加州总检察长送达调查传票；媒体曝 SEC 审查其会计处理，股价单日跌 14.01%。", hot: true },
      { time: "11-23–26", text: "董事会一致恢复黄仁勋全部职务，股价单日大涨 31.48%；标普将 AA 评级列入负面观察，定于 12-03 参院作证。", hot: true }
    ],
    factSources: [
      { label: "NVIDIA 复职公告", url: "https://nvidianews.nvidia.com/news/nvidia-board-reinstates-jensen-huang-as-president-ceo-and-board-director" },
      { label: "NVIDIA 离任公告", url: "https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition" },
      { label: "CNBC 11-13", url: "https://www.cnbc.com/2026/11/13/nvidia-stock-jensen-affair-ai.html" },
      { label: "加州司法部 11-20", url: "https://oag.ca.gov/news/press-releases/attorney-general-bonta-serves-investigative-subpoena-nvidia" }
    ],
    views: {
      bull: "穆迪维持 Aa1，认为复职迅速消除领导真空；司法部未对本人立案，Rubin 量产与下游需求无损。",
      bear: "标普警示高管监督薄弱且缺继任规划；若降级将冲击其提供 25% 担保的 $5,000 亿算力融资链并叠加听证风险。"
    },
    viewSources: [
      { label: "TechCrunch (S&P 11-25)", url: "https://techcrunch.com/2026/11/25/sp-considers-nvidia-credit-downgrade-over-governance-and-key-man-risks/" },
      { label: "CNA / Reuters (Moody's)", url: "https://www.channelnewsasia.com/business/moodys-says-nvidias-huang-reinstatement-eases-uncertainty-ratings-unchanged-6582956" }
    ]
  },
  {
    id: "a4",
    code: "A4",
    tags: ["算力信用", "成本传导"],
    date: "10 月中至 11 月",
    title: "CoreWeave 债息升破 16%",
    why: "算力竞争正从比拼显卡规模转向比拼资金成本，高杠杆 Neocloud 利差走阔将推高下游租卡价格并加速中游洗牌。",
    background: "美银测算 2027 年 AI 信用发行将达 $685B（同比 +31%），资金成本正取代显卡供给成为新云扩张的核心约束。",
    chartType: "a3Cds",
    timeline: [
      { time: "最新季报", text: "季度经营利润 $2.07 亿，同期净利息支出达 $8.46 亿，现金流明显承压。", hot: false },
      { time: "11-06", text: "2032 年债息突破 16%；5 年期 CDS 破 1,000bp（峰值约 1,289bp）。", hot: true },
      { time: "11-18", text: "市场开始筹备做空 AI 基础设施债务的 ETF 工具，信用定价分化加剧。", hot: true }
    ],
    factSources: [
      { label: "CNBC 11-06", url: "https://www.cnbc.com/2026/11/06/coreweave-bond-yield-tops-16percent-as-ai-credit-stress-rises.html" },
      { label: "CNBC 11-18", url: "https://www.cnbc.com/2026/11/18/ai-credit-default-swaps-coreweave-debt.html" }
    ],
    views: {
      bull: "部分信用基金（Janus Henderson）继续持有，认为抛售放大短期波动，长约客户质量仍有支撑。",
      bear: "高利息与芯片加速折旧形成双重挤压，高利率环境将倒逼新云收缩扩产并抬升租卡定价。"
    },
    viewSources: [
      { label: "CNBC 10-20", url: "https://www.cnbc.com/2026/10/20/coreweave-debt-janus-henderson-lloyd.html" },
      { label: "CNBC 11-06", url: "https://www.cnbc.com/2026/11/06/coreweave-bond-yield-tops-16percent-as-ai-credit-stress-rises.html" }
    ]
  },
  {
    id: "a5",
    code: "A5",
    tags: ["出口管制", "跨境算力"],
    date: "11-13 至 11-27",
    title: "美收紧东南亚与远程算力管制",
    why: "海外云端租卡通道实质性封堵，国内前沿预训练短期算力弹性受阻，同时倒逼国产超节点与异构推理转为刚需。",
    background: "自 2024 年美商务部调查 Megaspeed、2025 年英伟达停供后，本月 BIS 正式将管制由硬件出口延伸至海外云端远程使用。",
    chartType: "a4Impact",
    timeline: [
      { time: "11-16", text: "BIS 发布新规：限制远程使用海外美制先进芯片，并对印尼、马来、新加坡、泰国、巴西增设许可。", hot: true },
      { time: "11-19", text: "远程限制正式生效；同日报道月之暗面取消一笔约 $1.5 亿经印尼租用 B300 的合约。", hot: true },
      { time: "11-23–27", text: "7 家东南亚实体（含阿里新加坡 Apex）入清单；英伟达被曝暂停向东南亚四国发运服务器并收紧租卡标准。", hot: true }
    ],
    factSources: [
      { label: "U.S. BIS 官网", url: "https://www.bis.gov/" },
      { label: "NVIDIA Q2 FY27 SEC 披露", url: "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000073/q2fy27cfocommentary.htm" }
    ],
    views: {
      bull: "海外转口通道收紧促使部分先进芯片回流北美，短期缓解北美现货供给紧张。",
      bear: "国内前沿预训练海外弹性受阻，追赶窗口或拉长，但同步加速国产算力与推理栈落地。"
    },
    viewSources: [
      { label: "U.S. BIS 政策公告", url: "https://www.bis.gov/" }
    ]
  },
  {
    id: "a6",
    code: "A6",
    tags: ["中国市场", "大额私募与港股"],
    date: "10 月底至 11 月",
    title: "中国头部模型加速资本化",
    why: "国内头部大模型全面迈入重资本阶段，大厂、运营商、产业龙头联合入股叠加港股 18C 成为主流路径，资金转化为有效算力的效率成为胜负手。",
    background: "智谱、MiniMax 已于 1 月登陆港股 18C；本月 DeepSeek 巨额融资与月之暗面回迁架构标志着第二波重资本化启动。",
    chartType: "a5ChinaCap",
    timeline: [
      { time: "11 月初", text: "Crunchbase 披露 DeepSeek 完成 $15.9B 融资；工商变更显示新增 31 名股东（媒报含腾讯、移动、宁德）。", hot: true },
      { time: "11-13", text: "月之暗面评估 2027 年初赴港上市（传闻估值 ~$50B），并注销开曼架构将股权迁回境内。", hot: true },
      { time: "格局演变", text: "融资主力由纯财务 VC 全面转向互联网巨头、运营商、产业资本与港股 18C 协同支撑。", hot: false }
    ],
    factSources: [
      { label: "Crunchbase News", url: "https://news.crunchbase.com/venture/october-2026-global-startup-funding-strong-china-deepseek/" },
      { label: "澎湃新闻", url: "https://www.thepaper.cn/newsDetail_forward_34553467" },
      { label: "新浪财经 11-13", url: "https://k.sina.com.cn/article_7857201856_1d45362c001908uphw.html" }
    ],
    views: {
      bull: "产业与运营商巨头直接入股既锁定长期资金，又直接绑定政企与行业真实落地场景。",
      bear: "海外远程租卡受限（A5）下，账面巨额资金能否高效转化为先进训练算力仍是核心不确定性。"
    },
    viewSources: [
      { label: "Crunchbase News", url: "https://news.crunchbase.com/venture/october-2026-global-startup-funding-strong-china-deepseek/" },
      { label: "新浪财经 11-13", url: "https://k.sina.com.cn/article_7857201856_1d45362c001908uphw.html" }
    ]
  }
];
