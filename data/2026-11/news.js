window.MONTHLY_DATA = window.MONTHLY_DATA || {};

window.MONTHLY_DATA.news = [
  {
    id: "a1",
    code: "A1",
    tags: ["公开市场", "估值锚点"],
    date: "11-18 定价 · 11-19 上市 · 11-24 破发",
    title: "Anthropic 纳斯达克上市募资 813 亿美元，第四日首次破发",
    why: "头部模型实验室首次接受公开市场每日定价，单纯的高增速叙事已不足以支撑万亿美元估值，盈利路径与资本开支效率成为新的估值锚点。",
    background: "年初 Anthropic 私募轮估值约 3,800 亿美元，十个月后按发行价计完全稀释估值达约 1.5 万亿美元。同期 OpenAI 私募轮下调募资目标（见 A2），两家头部实验室在 11 月走向截然不同的资本化路径。",
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
      { time: "11-18", text: "最终发行价定于 83 美元（高于 70–78 美元指引区间），募资约 813 亿美元，超过 SpaceX 6 月 IPO（约 750 亿美元）。", hot: true },
      { time: "11-19", text: "在纳斯达克挂牌（代码 ANT），首日开盘 111.50 美元，盘中冲高 115.10 美元，收盘约 97 美元（+17%）。", hot: false },
      { time: "11-24", text: "上市第四个交易日首次跌破 83 美元发行价，盘中一度下探 75.61 美元，收盘报 81.91 美元；11-25 感恩节前围绕 82–83 美元震荡。", hot: true }
    ],
    factSources: [
      { label: "CNBC 11-18", url: "https://www.cnbc.com/2026/11/18/anthropic-ipo-ai-offering-price.html" },
      { label: "Al Jazeera 11-19", url: "https://www.aljazeera.com/economy/2026/11/19/anthropic-starts-trading-in-the-us-after-blockbuster-ipo" },
      { label: "Yahoo Finance (ANT)", url: "https://finance.yahoo.com/quote/ANT/" }
    ],
    views: {
      bull: "多家华尔街机构将首周回调视为获利了结与早期股东减持引发的短期波动，仍基于企业级 Claude 强劲增速维持长期看多评级。",
      bear: "上市首周即跌破发行价且一度拖累英伟达、AMD、美光同步走弱，市场持续担忧重资本开支与万亿美元估值的兑现节奏。"
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
    title: "OpenAI 下调私募目标，首笔 110 亿美元到账",
    why: "一级市场对万亿美元级别超大轮次的承接已触及阶段性上限，头部模型实验室正集体从依赖私募融资加速转向公开市场筹资。",
    background: "OpenAI 今年 3 月刚完成 1,220 亿美元融资（投后估值 8,520 亿美元）。据报道其目前计划于 2027 年上市，与 Anthropic 抢先 IPO 形成对照，头部模型实验室正加速从一级市场转向二级市场。",
    chartType: "a2Round",
    timeline: [
      { time: "前期计划", text: "最初寻求按 1.4 万亿美元估值募资 300 亿美元以上。", hot: false },
      { time: "11-06", text: "受二级市场 AI 板块回调影响，下调本轮规模与估值，完成首笔 110 亿美元交割。", hot: true },
      { time: "后续规划", text: "CNBC 报道计划在后续数周追加募集至多 90 亿美元，本轮总额目标调整为约 200 亿美元。", hot: false }
    ],
    factSources: [
      { label: "Investing.com (Bloomberg)", url: "https://www.investing.com/news/stock-market-news/openai-closes-11-billion-funding-at-125-trillion-valuation--report-5009147" },
      { label: "24/7 Wall St. 11-07", url: "https://247wallst.com/investing/2026/11/07/openai-just-raised-11-billion-at-a-1-25-trillion-valuation-below-the-1-4-trillion-it-first-sought/" }
    ],
    views: {
      bull: "本轮估值仍较 3 月跃升约 47%，主动缩量发生在二级市场波动窗口期，更多反映定价时点调整而非基本面转弱。",
      bear: "单笔目标从 300 亿美元以上收缩至首笔 110 亿美元，显示私募池对万亿美元级超大轮次的承接力已触及阶段性上限。"
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
    title: "英伟达治理震荡：黄仁勋辞任 11 日后复职，标普将评级列入负面观察",
    why: "英伟达财报基本面依旧强劲（Q3 营收 1,158 亿美元、同比增 103%），但 11 天内离任又复职暴露出严重的关键人物依赖与公司治理短板；标普负面观察更揭示其对 5,000 亿美元 AI 算力融资担保链的连锁传导风险。",
    background: "事件导火索源于美国国会及媒体对新加坡算力商 Megaspeed 涉嫌向中国转运受控芯片及黄仁勋私人关系的审查。同期英伟达刚发布 Q3 营收同比翻倍的强劲财报，但治理危机与监管调查引发剧烈估值波动。",
    chartType: "a3Nvidia",
    timeline: [
      { time: "11-09", text: "英伟达董事会宣布启动独立调查（涉外国情报与芯片转运报道），黄仁勋致信员工致歉并承诺配合。", hot: false },
      { time: "11-12", text: "公司宣布黄仁勋辞去总裁、CEO 及董事职务，CFO Colette Kress 任临时 CEO；股价连跌六周，较 10 月初市值蒸发约 1.7 万亿美元。", hot: true },
      { time: "11-20–21", text: "加州总检察长向英伟达送达调查传票；媒体曝 SEC 聚焦其会计处理，股价周五单日收跌 14.01%。", hot: true },
      { time: "11-23–26", text: "董事会一致表决恢复黄仁勋全部职务，股价当日大涨 31.48%；标普随即将 AA 评级列入负面观察，穆迪维持 Aa1；黄仁勋定于 12 月 3 日在参院公开作证。", hot: true }
    ],
    factSources: [
      { label: "NVIDIA 复职公告", url: "https://nvidianews.nvidia.com/news/nvidia-board-reinstates-jensen-huang-as-president-ceo-and-board-director" },
      { label: "NVIDIA 离任公告", url: "https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition" },
      { label: "CNBC 11-13", url: "https://www.cnbc.com/2026/11/13/nvidia-stock-jensen-affair-ai.html" },
      { label: "加州司法部 11-20", url: "https://oag.ca.gov/news/press-releases/attorney-general-bonta-serves-investigative-subpoena-nvidia" }
    ],
    views: {
      bull: "穆迪与部分机构投资人（Altimeter、Atreides）认为黄仁勋复职迅速消除了战略执行与领导层真空风险，且司法部目前未对其本人立案，Rubin 量产与下游算力需求基本面未受损。",
      bear: "标普警示此次反复暴露高管监督薄弱与缺乏继任规划；英伟达为高盛、Apollo 等 $5,000 亿 AI 基建融资提供 25% 担保，若评级下调将直接推高下游新云融资成本并叠加国会听证与反垄断监管压力。"
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
    title: "新云债务承压：CoreWeave 债券收益率突破 16%",
    why: "算力竞争正从比拼显卡规模转向比拼资金成本，高杠杆 Neocloud 的信用利差走阔将推高下游租卡价格，并加速中游算力服务商洗牌。",
    background: "美国银行测算，AI 相关信用发行（含公开与私募债）2027 年将达 6,850 亿美元，同比增长 31%。随着算力建设高度依赖杠杆融资，新云的资金成本已成为影响行业扩张节奏的核心变量。",
    chartType: "a3Cds",
    timeline: [
      { time: "最新季报", text: "季度经营利润 2.07 亿美元，同期净利息支出达 8.46 亿美元，现金流承压。", hot: false },
      { time: "11-06", text: "2032 年到期债券收益率升破 16%；5 年期 CDS 破 1,000bp（峰值约 1,289bp）。", hot: true },
      { time: "11-18", text: "市场开始筹备以 ETF 形式推出的做空 AI 基础设施债务工具，信用定价分化加剧。", hot: true }
    ],
    factSources: [
      { label: "CNBC 11-06", url: "https://www.cnbc.com/2026/11/06/coreweave-bond-yield-tops-16percent-as-ai-credit-stress-rises.html" },
      { label: "CNBC 11-18", url: "https://www.cnbc.com/2026/11/18/ai-credit-default-swaps-coreweave-debt.html" }
    ],
    views: {
      bull: "部分信用基金（如 Janus Henderson）继续持有，认为债市抛售过度放大了短期波动，头部新云在长约客户质量上仍具优势。",
      bear: "高利息支出与芯片经济寿命折旧形成双重挤压，高利率环境可能迫使新云收缩扩产弹性并抬高下游租卡价格。"
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
    title: "美国收紧东南亚算力出口与海外远程使用管制",
    why: "海外云端租卡通道实质性收紧，国内前沿预训练的短期算力弹性受阻，同时也倒逼国产算力超节点与异构推理从备选方案转为刚需。",
    background: "自 2024 年起美国商务部持续调查东南亚云商 Megaspeed；2025 年 6 月英伟达停供，7 月马来西亚要求高性能芯片再出口须获许可。11 月 BIS 正式封堵海外远程云租用通道。",
    chartType: "a4Impact",
    timeline: [
      { time: "11-16", text: "BIS 发布规则：限制中国等总部企业远程使用海外美制先进芯片，并对印尼、马来、新加坡、泰国、巴西增设许可。", hot: true },
      { time: "11-17–18", text: "美司法部与商务部通报 Megaspeed 调查；媒体报道其通过马来西亚数据中心提供远程算力接入。", hot: false },
      { time: "11-19", text: "远程使用限制正式生效；同日报道月之暗面取消一笔约 1.5 亿美元、经印尼租用 B300 的合约。", hot: true },
      { time: "11-23–27", text: "美将 7 家东南亚实体（含 Megaspeed 关联方及阿里新加坡子公司 Apex）列入清单；11-27 媒体称英伟达要求戴尔等暂停向东南亚四国发运服务器并收紧对华租卡供货标准。", hot: true }
    ],
    factSources: [
      { label: "U.S. BIS 官网", url: "https://www.bis.gov/" },
      { label: "NVIDIA Q2 FY27 SEC 披露", url: "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000073/q2fy27cfocommentary.htm" }
    ],
    views: {
      bull: "海外转口通道收紧使部分原流向亚洲的先进芯片回流北美市场，短期内缓解北美现货供给紧张。",
      bear: "国内模型厂商前沿预训练的海外算力弹性受阻，部分市场观点认为追赶窗口可能从 3–6 个月拉长，同时倒逼国产算力与异构推理加速。"
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
    title: "中国大模型加速大额私募与港股资本化",
    why: "国内头部大模型公司全面迈入重资本阶段，互联网大厂、运营商、产业巨头联合入股叠加港股 18C 上市成为主流融资路径，能否将资金高效转化为算力成为竞争关键。",
    background: "智谱、MiniMax 已于 2026 年 1 月通过港交所 18C 章上市。11 月初 Crunchbase 月报披露的 DeepSeek 巨额融资与月之暗面港股计划，标志着国内头部模型实验室全面进入重资本比拼阶段。",
    chartType: "a5ChinaCap",
    timeline: [
      { time: "11 月初", text: "Crunchbase 月报披露 DeepSeek 完成 159 亿美元融资，工商变更显示新增 31 名股东（媒体称含腾讯、中国移动、宁德时代）。", hot: true },
      { time: "11-13", text: "市场消息称月之暗面正评估 2027 年初赴港上市，传闻目标估值约 500 亿美元，并注销开曼控股架构将股权迁入境内主体。", hot: true },
      { time: "行业格局", text: "国内头部大模型公司正从纯财务 VC 驱动，转向互联网大厂、运营商、产业巨头与港股 18C 多元资本协同支持。", hot: false }
    ],
    factSources: [
      { label: "Crunchbase News", url: "https://news.crunchbase.com/venture/october-2026-global-startup-funding-strong-china-deepseek/" },
      { label: "澎湃新闻", url: "https://www.thepaper.cn/newsDetail_forward_34553467" },
      { label: "新浪财经 11-13", url: "https://k.sina.com.cn/article_7857201856_1d45362c001908uphw.html" }
    ],
    views: {
      bull: "互联网、运营商与产业龙头直接入股，不仅锁定长期低成本资金，更为模型落地带来了真实的政企与行业场景。",
      bear: "在海外算力远程租赁受限（见 A5）的背景下，巨额账面资金能否高效转化为先进训练算力，仍是决定迭代速度的核心不确定性。"
    },
    viewSources: [
      { label: "Crunchbase News", url: "https://news.crunchbase.com/venture/october-2026-global-startup-funding-strong-china-deepseek/" },
      { label: "新浪财经 11-13", url: "https://k.sina.com.cn/article_7857201856_1d45362c001908uphw.html" }
    ]
  }
];
