window.MONTHLY_DATA = window.MONTHLY_DATA || {};

window.MONTHLY_DATA.news = [
  {
    id: "a1",
    code: "A1",
    tags: ["公开上市", "商业检验"],
    title: "Anthropic 纳斯达克上市与破发",
    why: "头部大模型首次接受公开市场检验；上市后的波动反映出外界普遍关注其高增长能否持续，以及企业应用收入能否覆盖高昂的算力投入。",
    background: "今年初私募估值约 3,800 亿美元，上市估值跃升至约 1.5 万亿美元；与同期推进新一轮融资并筹备上市的 OpenAI（见 A2）形成对照。",
    chartType: "a1Valuation",
    timeline: [
      { time: "11-18", text: "发行价定于 83 美元（高于市场此前指引），总募资约 813 亿美元，超过 SpaceX 今年 6 月的上市规模。", hot: true },
      { time: "11-19", text: "在纳斯达克挂牌（代码 ANT），首日收涨 17%。", hot: false },
      { time: "11-24", text: "上市第四个交易日跌破发行价。", hot: true }
    ],
    factSources: [
      { label: "CNBC", url: "https://www.cnbc.com/2026/11/18/anthropic-ipo-ai-offering-price.html" },
      { label: "Al Jazeera", url: "https://www.aljazeera.com/economy/2026/11/19/anthropic-starts-trading-in-the-us-after-blockbuster-ipo" },
      { label: "Yahoo Finance (ANT)", url: "https://finance.yahoo.com/quote/ANT/" }
    ],
    views: {
      bull: "企业级 Claude 在编程与办公场景的增速依然强劲，首周回落更多是上市初期的正常波动。",
      bear: "破发带动多家 AI 芯片公司同步走弱，外界仍担忧高昂的训练与推理成本能否尽快转化为稳定利润。"
    },
    viewSources: [
      { label: "Decrypt", url: "https://decrypt.co/383669/nvidia-amd-micron-ai-stocks-sink-anthropic-ipo-price" },
      { label: "Trefis", url: "https://www.trefis.com/stock/ant/articles/626034/could-anthropic-stock-fall-26/2026-11-19" }
    ]
  },
  {
    id: "a2",
    code: "A2",
    tags: ["大额融资", "筹备上市"],
    title: "OpenAI 新一轮融资与筹备上市",
    why: "超大规模私人融资正逐步触及承接上限，头部大模型公司正从依赖私募融资向公开上市过渡，以匹配持续攀升的算力建设需求。",
    background: "OpenAI 今年 3 月刚完成 1,220 亿美元融资，据报道已启动 2027 年上市筹备，本轮融资成为其上市前的关键过渡。",
    chartType: "a2Round",
    timeline: [
      { time: "前期计划", text: "最初计划按 1.4 万亿美元估值融资超过 300 亿美元。", hot: false },
      { time: "11-06", text: "受近期 AI 板块波动影响，估值调整至 1.25 万亿美元，首笔 110 亿美元到账。", hot: true },
      { time: "后续安排", text: "预计未来数周追加融资至多 90 亿美元，本轮总规模调整为约 200 亿美元，同时推进 2027 年上市筹备。", hot: false }
    ],
    factSources: [
      { label: "Bloomberg / Investing", url: "https://www.investing.com/news/stock-market-news/openai-closes-11-billion-funding-at-125-trillion-valuation--report-5009147" },
      { label: "24/7 Wall St.", url: "https://247wallst.com/investing/2026/11/07/openai-just-raised-11-billion-at-a-1-25-trillion-valuation-below-the-1-4-trillion-it-first-sought/" }
    ],
    views: {
      bull: "本轮估值较 3 月仍上涨近五成，缩减规模主要是顺应市场节奏调整，并非业务增长放缓。",
      bear: "融资目标从 300 亿美元以上下调至约 200 亿美元，说明私人机构对超大规模单轮融资的承接力已接近上限。"
    },
    viewSources: [
      { label: "Investing.com", url: "https://www.investing.com/news/stock-market-news/openai-closes-11-billion-funding-at-125-trillion-valuation--report-5009147" },
      { label: "24/7 Wall St.", url: "https://247wallst.com/investing/2026/11/07/openai-just-raised-11-billion-at-a-1-25-trillion-valuation-below-the-1-4-trillion-it-first-sought/" }
    ]
  },
  {
    id: "a3",
    code: "A3",
    tags: ["治理风波", "关键人物依赖"],
    title: "英伟达黄仁勋辞任与复职风波",
    why: "英伟达财报基本面依旧强劲，但黄仁勋短期辞任又迅速复职，暴露出公司对核心创始人的高度依赖与治理短板，也反映出整个 AI 算力链条存在一定的连锁传导风险。",
    background: "导火索源于美国国会及媒体对新加坡云商 Megaspeed 芯片转运与黄仁勋私人关系的审查，触发剧烈波动。",
    chartType: "a3Nvidia",
    timeline: [
      { time: "11-09", text: "董事会因芯片转运相关报道启动独立调查，黄仁勋致信员工表示全力配合。", hot: false },
      { time: "11-12", text: "黄仁勋辞去总裁、CEO 及董事职务，由 CFO 暂代；公司市值较 10 月初明显回撤。", hot: true },
      { time: "11-20–21", text: "加州司法部送达调查传票，叠加监管审查传闻，引发市场剧烈波动。", hot: true },
      { time: "11-23–26", text: "董事会一致表决恢复黄仁勋全部职务，股价大幅反弹；评级机构随即提示治理风险，黄仁勋将于 12 月初赴参议院作证。", hot: true }
    ],
    factSources: [
      { label: "NVIDIA 复职公告", url: "https://nvidianews.nvidia.com/news/nvidia-board-reinstates-jensen-huang-as-president-ceo-and-board-director" },
      { label: "NVIDIA 离任公告", url: "https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition" },
      { label: "CNBC", url: "https://www.cnbc.com/2026/11/13/nvidia-stock-jensen-affair-ai.html" },
      { label: "加州司法部公告", url: "https://oag.ca.gov/news/press-releases/attorney-general-bonta-serves-investigative-subpoena-nvidia" }
    ],
    views: {
      bull: "黄仁勋迅速复职消除了领导层真空，且司法部未对其本人立案，下一代 Rubin 芯片量产与算力需求并未受损。",
      bear: "风波暴露出公司缺乏继任安排；由于英伟达为下游大量算力集群建设提供信用背书，一旦自身信用受损可能推高全行业建集群成本。"
    },
    viewSources: [
      { label: "TechCrunch", url: "https://techcrunch.com/2026/11/25/sp-considers-nvidia-credit-downgrade-over-governance-and-key-man-risks/" },
      { label: "CNA / Reuters", url: "https://www.channelnewsasia.com/business/moodys-says-nvidias-huang-reinstatement-eases-uncertainty-ratings-unchanged-6582956" }
    ]
  },
  {
    id: "a4",
    code: "A4",
    tags: ["算力成本", "新云承压"],
    title: "CoreWeave 等新兴算力云承压",
    why: "AI 算力建设高度依赖借钱买卡，随着借贷成本大幅攀升，新兴算力云的盈利空间被明显挤压，未来可能被迫放缓扩产并抬高租卡价格。",
    background: "行业测算 2027 年全球 AI 算力建设相关借贷规模将接近 7,000 亿美元，资金成本正成为算力扩张的重要约束。",
    chartType: "a3Cds",
    timeline: [
      { time: "最新季报", text: "CoreWeave 单季经营利润约 2 亿美元，但同期利息支出超过 8 亿美元，经营现金流明显承压。", hot: false },
      { time: "11 月初", text: "其长期借贷融资成本升破 16%，外界对高负债算力云偿债能力的担忧显著上升。", hot: true },
      { time: "11 月中旬", text: "市场出现专门针对 AI 算力债务的风险对冲工具，中游算力服务商开始明显分化。", hot: true }
    ],
    factSources: [
      { label: "CNBC (融资成本)", url: "https://www.cnbc.com/2026/11/06/coreweave-bond-yield-tops-16percent-as-ai-credit-stress-rises.html" },
      { label: "CNBC (算力债务)", url: "https://www.cnbc.com/2026/11/18/ai-credit-default-swaps-coreweave-debt.html" }
    ],
    views: {
      bull: "部分支持者认为市场反应过度，头部算力云手握大厂长期租卡合同，基本盘依然稳固。",
      bear: "高额利息叠加显卡快速更新带来的折旧压力，将倒逼中小算力云收缩扩产并向客户转嫁成本。"
    },
    viewSources: [
      { label: "CNBC (机构观点)", url: "https://www.cnbc.com/2026/10/20/coreweave-debt-janus-henderson-lloyd.html" },
      { label: "CNBC (风险追踪)", url: "https://www.cnbc.com/2026/11/06/coreweave-bond-yield-tops-16percent-as-ai-credit-stress-rises.html" }
    ]
  },
  {
    id: "a5",
    code: "A5",
    tags: ["出口管制", "跨境算力"],
    title: "美收紧东南亚与远程算力管制",
    why: "海外云端租卡通道实质性收紧，国内前沿模型训练的短期算力弹性受阻，同时倒逼国产算力超节点与异构推理加速走向主战场。",
    background: "自 2024 年美商务部调查 Megaspeed、2025 年英伟达停供后，本月 BIS 正式将管制由芯片硬件延伸至海外云端远程使用。",
    chartType: "a4Impact",
    timeline: [
      { time: "11-16", text: "BIS 发布新规：限制远程使用海外美制先进芯片，并对印尼、马来、新加坡、泰国、巴西增设许可。", hot: true },
      { time: "11-19", text: "远程限制正式生效；同日报道月之暗面取消一笔约 1.5 亿美元经印尼租用 B300 的合约。", hot: true },
      { time: "11-23–27", text: "7 家东南亚实体（含阿里新加坡子公司 Apex）入清单；英伟达被曝暂停向东南亚四国发运服务器并收紧租卡标准。", hot: true }
    ],
    factSources: [
      { label: "U.S. BIS 官网", url: "https://www.bis.gov/" },
      { label: "NVIDIA Q2 FY27 披露", url: "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000073/q2fy27cfocommentary.htm" }
    ],
    views: {
      bull: "海外转口通道收紧促使部分先进芯片回流北美，短期缓解北美本土现货供给紧张。",
      bear: "国内前沿预训练海外弹性受阻，追赶窗口或拉长，但同步加速国产算力与推理栈落地。"
    },
    viewSources: [
      { label: "U.S. BIS 政策公告", url: "https://www.bis.gov/" }
    ]
  },
  {
    id: "a6",
    code: "A6",
    tags: ["中国市场", "产业协同"],
    title: "中国头部模型加速资源整合",
    why: "国内头部大模型公司已从单纯依赖创投，转向由互联网大厂、运营商、产业龙头与港股公开市场协同支撑，能否把充裕资金高效转化为先进算力成为竞争关键。",
    background: "智谱、MiniMax 已于今年 1 月登陆港股；本月 DeepSeek 巨额融资与月之暗面回迁境内主体标志着第二波资源整合启动。",
    chartType: "a5ChinaCap",
    timeline: [
      { time: "11 月初", text: "Crunchbase 披露 DeepSeek 完成 159 亿美元融资；工商变更显示新增 31 名股东（媒报含腾讯、移动、宁德）。", hot: true },
      { time: "11-13", text: "月之暗面评估 2027 年初赴港上市（传闻估值约 500 亿美元），并注销海外控股架构将股权迁回境内。", hot: true },
      { time: "格局演变", text: "支持力量由财务投资机构全面转向互联网巨头、运营商、产业龙头与港股公开市场协同支撑。", hot: false }
    ],
    factSources: [
      { label: "Crunchbase News", url: "https://news.crunchbase.com/venture/october-2026-global-startup-funding-strong-china-deepseek/" },
      { label: "澎湃新闻", url: "https://www.thepaper.cn/newsDetail_forward_34553467" },
      { label: "新浪财经", url: "https://k.sina.com.cn/article_7857201856_1d45362c001908uphw.html" }
    ],
    views: {
      bull: "产业与运营商巨头直接入股既锁定长期研发资金，又直接绑定政企与行业真实落地场景。",
      bear: "海外远程租卡受限（见 A5）下，账面巨额资金能否高效转化为先进训练算力仍是核心不确定性。"
    },
    viewSources: [
      { label: "Crunchbase News", url: "https://news.crunchbase.com/venture/october-2026-global-startup-funding-strong-china-deepseek/" },
      { label: "新浪财经", url: "https://k.sina.com.cn/article_7857201856_1d45362c001908uphw.html" }
    ]
  }
];
