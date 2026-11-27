window.MONTHLY_DATA = window.MONTHLY_DATA || {};

window.MONTHLY_DATA.maps = {
  embodied: {
    id: "d1",
    code: "D1",
    title: "具身智能图谱：从本体硬件竞速走向数据与通用模型分化",
    phases: [
      { period: "2022–2023", label: "大模型进入机器人" },
      { period: "2024–2025", label: "机器人基础模型与人形融资潮" },
      { period: "2026", label: "订单验证与资本分化" }
    ],
    regions: [
      {
        name: "美国",
        accent: true,
        cells: [
          {
            heading: "研究先行",
            text: "大厂实验室将视觉语言模型接入机器人控制，创业公司以核心研究团队形态起步。",
            companies: [{ name: "Figure", hot: false }]
          },
          {
            heading: "“机器人大脑”独立融资",
            text: "通用基础模型与硬件本体开始分工，软件/模型层公司估值迅速抬升。",
            companies: [
              { name: "Physical Intelligence", hot: false },
              { name: "Skild AI", hot: false },
              { name: "Figure", hot: false }
            ]
          },
          {
            heading: "数据路线成为核心壁垒",
            text: "Skild AI 1 月完成 $14 亿融资（估值超 $140 亿）；PI 传以约 $200 亿估值洽谈新轮次；Genesis AI 押注穿戴手套采集人手操作数据。",
            companies: [
              { name: "Genesis AI", hot: true },
              { name: "Skild AI", hot: false },
              { name: "Physical Intelligence", hot: false }
            ]
          }
        ]
      },
      {
        name: "中国",
        accent: false,
        cells: [
          {
            heading: "本体与供应链起量",
            text: "四足与人形本体厂商依托本土电机、减速器与供应链优势快速迭代。",
            companies: [{ name: "宇树科技", hot: false }]
          },
          {
            heading: "人形本体融资高峰",
            text: "大量整机公司密集完成多轮融资，2026 上半年行业融资笔数触及阶段高点。",
            companies: [
              { name: "智元机器人", hot: false },
              { name: "银河通用", hot: false },
              { name: "星尘智能", hot: false }
            ]
          },
          {
            heading: "定价下探与零部件分化",
            text: "星尘智能 T1 起售价下探至 8.99 万元并完成 10 亿元融资；10 月后单笔大额减少，资金向灵巧手、模组与细分场景扩散。",
            companies: [
              { name: "星尘智能", hot: true },
              { name: "章鱼动力", hot: true },
              { name: "傲意科技", hot: true }
            ]
          }
        ]
      }
    ],
    sources: [
      { label: "Skild AI 官网", url: "https://www.skild.ai/" },
      { label: "Physical Intelligence 官网", url: "https://www.physicalintelligence.company/" },
      { label: "TechCrunch (Genesis AI)", url: "https://techcrunch.com/2026/11/17/genesis-ai-raises-500-million-to-deploy-electric-glove-wearing-robots/" },
      { label: "21 财经 (星尘智能)", url: "https://m.21jingji.com/article/20261013/herald/d8aad2c95cb49b527d3f8648d9a29157.html" }
    ]
  },
  embodiedCases: {
    id: "d2",
    code: "D2",
    title: "具身标杆对照：Genesis AI 与星尘智能的两种商业化起点",
    cases: [
      {
        name: "Genesis AI",
        region: "美国 · 数据与通用模型驱动",
        highlight: "$500M A 轮 · 估值 $3.5B",
        rows: [
          ["最新事件", "11-17 宣布 5 亿美元 A 轮融资，投后估值 35 亿美元"],
          ["核心投资方", "Premji、Khosla、Eclipse 领投；英伟达、AMD、三星参投"],
          ["技术路线", "穿戴数据手套采集人手精细操作，训练通用模型，旗舰整机 Eno"],
          ["商业起点", "先切入先进制造与物流场景，中长期走向服务业与家庭"],
          ["组织模式", "垂直一体化，自建数据采集、基础模型与整机制造闭环"],
          ["创始团队", "周衔、Théophile Gervet（卡内基梅隆大学同实验室）"]
        ],
        sources: [
          { label: "TechCrunch 11-17", url: "https://techcrunch.com/2026/11/17/genesis-ai-raises-500-million-to-deploy-electric-glove-wearing-robots/" },
          { label: "Robotics 24/7", url: "https://www.robotics247.com/article/genesis-ai-announces-500m-series-a-at-3.5b-valuation" }
        ]
      },
      {
        name: "星尘智能",
        region: "中国 · 绳驱精细操作与量产降本",
        highlight: "约 10 亿元融资 · 估值 150 亿元",
        rows: [
          ["近期事件", "10-13 完成约 10 亿元融资，投后估值 150 亿元（半年内第四轮）"],
          ["核心投资方", "投控东海（深投控）领投；洪泰基金等机构参投"],
          ["技术路线", "绳驱 AI 机器人构型，主打高自由度与高精细灵巧操作"],
          ["商业起点", "2025-09 获 S 系列千台级订单；2026-06 人形机器人 T1 交付"],
          ["定价策略", "T1 起售价 8.99 万元，以高性价比率先撬动商业部署"],
          ["资金投向", "具身模型迭代、核心研发团队扩充、产能建设与规模化交付"]
        ],
        sources: [
          { label: "21 财经 10-13", url: "https://m.21jingji.com/article/20261013/herald/d8aad2c95cb49b527d3f8648d9a29157.html" },
          { label: "东方财富", url: "https://finance.eastmoney.com/a/202610133893952917.html" }
        ]
      }
    ]
  },
  compute: {
    id: "d3",
    code: "D3",
    title: "AI 算力全产业链图谱：从核心芯片到模型应用商业化的价值分布与瓶颈迁移",
    thesis: "价值捕获高度集中于上游核心芯片、HBM 与先进封装；新增装机容量不等于可售算力，电力并网交付、Neocloud 信用融资与下游应用商业变现已成为决定行业斜率的三大关键变量。",
    stages: [
      {
        code: "上游 · L1",
        name: "核心芯片与硬件",
        subtitle: "算力芯片 · 存储 · 整机",
        accent: "stage-a",
        cols: 5,
        nodes: [
          {
            title: "AI 芯片与 IP",
            sub: "GPU · ASIC · 软件栈",
            tag: "核心利润池",
            lenses: ["profit", "china"],
            logos: ["NVIDIA", "AMD", "Broadcom", "Huawei", "Cambricon"],
            detail: "NVIDIA Q2 FY27 数据中心收入 $890.2 亿（GAAP 毛利率 75.0%），Rubin 全面量产；Broadcom Q3 FY26 AI 半导体 $167 亿（同比 +221%），FY27 锁量约 $1,150 亿；国内华为昇腾推出 Atlas 950 超节点，寒武纪 Q3 营收 35.3 亿元（同比 +104%），阿里平头哥真武芯片累计出货 56 万颗并分拆赴港上市。"
          },
          {
            title: "晶圆代工与先进封装",
            sub: "先进制程 · CoWoS · 设备",
            tag: "产能锁量",
            lenses: ["profit", "bottleneck", "china"],
            logos: ["TSMC", "ASML", "AMAT", "SMIC"],
            detail: "TSMC Q3 2026 HPC 占比达 68%、营业利润率 58.7%，全年 CapEx $600–640 亿；ASML 称 2027–28 年产能仍无法完全满足需求；国内中芯国际 Q3 产能利用率升至 97.3%，国产先进封装与光刻设备加速推进。"
          },
          {
            title: "高带宽存储（HBM）",
            sub: "HBM · 企业级 SSD",
            tag: "长约锁量",
            lenses: ["profit", "bottleneck"],
            logos: ["SKHynix", "Samsung", "Micron", "CXMT"],
            detail: "解码阶段受显存带宽硬约束，NVIDIA 单季供应与产能承诺跃升至 $2,790 亿用于锁定 HBM 产能；SK 海力士正持续扩产 HBM4，国内长鑫存储（CXMT）加速 DRAM 与高带宽存储追赶，仍是国产链条核心攻坚环节。"
          },
          {
            title: "高速互连与光通信",
            sub: "Scale-up · Scale-out · 1.6T",
            tag: "带宽瓶颈",
            lenses: ["profit", "bottleneck", "china"],
            logos: ["NVIDIA", "Broadcom", "Arista", "Innolight"],
            detail: "十万卡集群 MFU 高度依赖柜内 NVLink/铜缆与柜间 InfiniBand/高速以太网及 800G/1.6T 光模块；Marvell 11 月宣布 $115B 收购 Lumentum 补齐光互连，中国光模块龙头（中际旭创等）稳居全球核心供给地位。"
          },
          {
            title: "AI 服务器与整机柜",
            sub: "整柜集成 · 液冷适配 · ODM",
            tag: "整柜交付",
            lenses: ["china"],
            logos: ["Supermicro", "Foxconn", "Dell", "Inspur"],
            detail: "GB200/GB300 NVL72 将 72 颗 GPU 集成进单台 100–140 kW 液冷机柜，交付单位全面升级为整机柜系统；Dell Q3 AI 服务器在手订单达 $1,323 亿，中国供应链（工业富联、浪潮信息等）具备全球领先的整柜制造与交付能力。"
          }
        ]
      },
      {
        code: "中游 · L2",
        name: "智算基建（AIDC）",
        subtitle: "电力 · 液冷 · 园区交付",
        accent: "stage-b",
        cols: 3,
        nodes: [
          {
            title: "电力与能源供给",
            sub: "电网接入 · 核电 PPA · 算电协同",
            tag: "GW 级约束",
            lenses: ["bottleneck", "china"],
            logos: ["Bloom", "GEVernova", "Constellation", "StateGrid", "CGN"],
            detail: "美国核心电网并网排队超 4 年且得州许可冻结牵动近三成 2028 年新增容量，大厂密集转向核电 PPA 与表后发电；中国依托特高压电网、核电/新能源基地及“东数西算”算电协同（国家电网、中国广核等），电力供给成为显著结构性优势。"
          },
          {
            title: "供配电与液冷散热",
            sub: "HVDC · 变压器 · 冷板液冷 CDU",
            tag: "交期瓶颈",
            lenses: ["bottleneck", "china"],
            logos: ["Vertiv", "Eaton", "Envicool", "Megmeet"],
            detail: "单柜功率密度突破 100 kW 后冷板液冷、CDU 与高压直流（HVDC）成为刚需，大型变压器与机电交期排至数年后；中国厂商在液冷散热（英维克等）与服务器电源/配电设备（麦格米特等）已深度切入国内外头部智算供应链。"
          },
          {
            title: "智算中心开发与运营",
            sub: "AIDC 园区 · 定制机房 · 东数西算",
            tag: "园区交付",
            lenses: ["china"],
            logos: ["Equinix", "DigitalRealty", "TelecomOps", "GDS"],
            detail: "新增装机不等于可售算力，选址审批、并网通电与上架调试决定交付节奏；海外以 Equinix、Digital Realty 等商业 REITs 为主，中国则由三大运营商（移动/电信/联通）国有智算集群与万国数据等头部 IDC 共同承建。"
          }
        ]
      },
      {
        code: "中游 · L3",
        name: "云平台与算力服务",
        subtitle: "公有智算云 · 推理云",
        accent: "stage-c",
        cols: 2,
        nodes: [
          {
            title: "超大规模云厂商（Hyperscalers）",
            sub: "自研芯片 · 公有智算云 · 全栈基建",
            tag: "重 CapEx",
            lenses: ["china"],
            logos: ["AWS", "Google", "Microsoft", "Oracle", "AlibabaCloud", "Volcengine"],
            detail: "依靠自身经营现金流承接重资产 CapEx 并加码自研 ASIC（TPU、Trainium、含光/真武）以降低单一芯片依赖；国内阿里云、火山引擎、腾讯云构成公有智算云与企业 AI 平台主力。"
          },
          {
            title: "专业智算云与推理云（Neocloud）",
            sub: "裸金属集群 · 弹性算力 · Token 工厂",
            tag: "杠杆 / 折旧",
            lenses: ["bottleneck", "china"],
            logos: ["CoreWeave", "Nebius", "Lambda", "fal", "Approaching"],
            detail: "中游信用与折旧风险最集中：CoreWeave 总债 $516 亿、债券收益率升破 16%，回报高度敏感于利用率与 GPU 经济寿命；专注高吞吐推理的 Token 工厂（海外 fal、国内趋境科技）成为高增速分支。"
          }
        ]
      },
      {
        code: "下游 · L4",
        name: "模型与应用商业化",
        subtitle: "大模型 · 推理 · 企业应用",
        accent: "stage-d",
        cols: 3,
        nodes: [
          {
            title: "基础模型训练与后训练",
            sub: "预训练 · 强化学习 · 万卡集群",
            tag: "研发前置",
            lenses: ["profit", "china"],
            logos: ["OpenAI", "Anthropic", "Meta", "DeepSeek"],
            detail: "前沿实验室签下千亿美元级长期算力承诺，训练投入属研发型资本前置；海外 Anthropic 上市、OpenAI 私募迈向万亿估值，国内 DeepSeek、通义、智谱、Kimi 持续迭代开源与闭源旗舰模型。"
          },
          {
            title: "模型推理与 Agent 运行",
            sub: "长上下文 · 推理思考 · 异步智能体",
            tag: "Token 消耗",
            lenses: ["china"],
            logos: ["OpenAI", "Anthropic", "Cursor", "Volcengine", "Kimi"],
            detail: "推理思考模型与自主 Agent 贡献约 80% 企业 Token 消耗，推理成本直接计入 COGS；海内外头部模型 API 与火山引擎、Kimi、腾讯混元等在编程与长上下文场景持续拉动推理调用量。"
          },
          {
            title: "企业软件与垂直应用",
            sub: "企业订阅 · 按量计费 · 按结果交付",
            tag: "商业变现",
            lenses: ["china"],
            logos: ["Microsoft", "Harvey", "OpenEvidence", "WPS", "Feishu"],
            detail: "终端企业与个人付费是整条算力产业链的最终现金流源头：海外形成编程、医疗与法务高客单闭环（Menlo 统计企业 AI 年化支出达 $1,768 亿），国内以 WPS AI、飞书、钉钉及垂直行业软件推进规模化付费落地。"
          }
        ]
      }
    ],
    migration: [
      { step: "上游 · 核心硬件锁量", text: "HBM、CoWoS 先进封装与光刻设备持续锁量，定价权与高毛利集中在芯片与晶圆代工龙头。" },
      { step: "中游 · 智算基建与信用", text: "电力并网、液冷机电交期与 Neocloud 高息债务融资成为新增可售算力的核心约束。" },
      { step: "下游 · 模型与应用变现", text: "基础模型调用量与企业软件真实付费增速，决定前期数千亿美元 CapEx 的投入产出斜率。" }
    ],
    cashflow: "企业与个人应用付费 → 模型与智算云平台 → AIDC 基建与上游芯片硬件",
    sources: [
      { label: "NVIDIA Q2 FY27 IR", url: "https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-Financial-Results-for-Second-Quarter-Fiscal-2027/default.aspx" },
      { label: "AMD Q3 2026 IR", url: "https://ir.amd.com/news-events/press-releases/detail/1303/amd-reports-third-quarter-2026-financial-results" },
      { label: "Broadcom Q3 FY26 IR", url: "https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announces-third-quarter-fiscal-year-2026-financial" },
      { label: "中国日报 (昇腾 950)", url: "https://cn.chinadaily.com.cn/a/202609/20/WS6aaf7ecce4b09a165c78b429.html" }
    ]
  }
};
