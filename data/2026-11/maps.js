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
    title: "算力行业全图谱：从芯片到模型服务的产业链全景与约束迁移",
    thesis: "价值捕获仍高度集中于上游芯片、HBM 与先进封装；新增容量不等于可售算力，电力交付、Neocloud 信用融资与模型端商业回收已成为决定行业斜率的三大关键变量。",
    stages: [
      {
        code: "A",
        name: "硬件供给",
        subtitle: "把计算能力做出来",
        accent: "stage-a",
        cols: 5,
        nodes: [
          {
            title: "芯片设计 / IP",
            sub: "GPU · ASIC · 软件栈",
            tag: "利润池高",
            logos: ["NVIDIA", "AMD", "Broadcom", "Huawei", "Cambricon"],
            detail: "NVIDIA Q2 FY27 数据中心收入 $890.2 亿（GAAP 毛利率 75.0%），Rubin 全面量产；Broadcom Q3 FY26 AI 半导体 $167 亿（同比 +221%），FY27 锁量约 $1,150 亿；国内华为昇腾推出 Atlas 950 超节点，寒武纪 Q3 营收 35.3 亿元（同比 +104%）。"
          },
          {
            title: "制造 / 封装 / 设备",
            sub: "先进制程 · CoWoS · 光刻",
            tag: "供给锁量",
            logos: ["TSMC", "ASML", "AMAT", "SMIC"],
            detail: "TSMC Q3 2026 HPC 占比达 68%、营业利润率 58.7%，全年 CapEx $600–640 亿；ASML 称 2027–28 年产能仍无法完全满足客户需求，部分意向排至 2029–30 年。"
          },
          {
            title: "HBM / 存储",
            sub: "容量 · 带宽 · 企业级 SSD",
            tag: "长约锁量",
            logos: ["SKHynix", "Samsung", "Micron"],
            detail: "解码阶段受显存带宽硬约束，NVIDIA 单季供应与产能承诺由 $1,190 亿跃升至 $2,790 亿，核心用于锁定 HBM 内存产能。"
          },
          {
            title: "网络 / 互连 / 光模块",
            sub: "Scale-up · Scale-out · 1.6T",
            tag: "带宽瓶颈",
            logos: ["NVIDIA", "Broadcom", "Arista", "Innolight"],
            detail: "十万卡集群 MFU 高度依赖柜内 NVLink/铜缆与柜间 InfiniBand/高速以太网及 800G/1.6T 光模块，规模越大网络占比越高。"
          },
          {
            title: "服务器 / 整机柜",
            sub: "整柜集成 · 液冷 · 测试",
            tag: "整柜交付",
            logos: ["Supermicro", "Foxconn", "Dell"],
            detail: "GB200/GB300 NVL72 将 72 颗 GPU 集成进单台 100–140 kW 液冷机柜，交付单位从“单卡/服务器”全面升级为“整机柜系统”。"
          }
        ]
      },
      {
        code: "B",
        name: "物理基础设施",
        subtitle: "让设备通电并运行",
        accent: "stage-b",
        cols: 3,
        nodes: [
          {
            title: "电力 / 能源",
            sub: "并网排队 · 核电 PPA · 表后发电",
            tag: "GW / MW 瓶颈",
            logos: ["Bloom", "GEVernova", "Constellation", "Google"],
            detail: "美国核心电网并网排队平均超 4 年，大厂密集采用核电 PPA 与燃气轮机/燃料电池表后发电（Behind-the-meter）桥接供电；1 GW IT 负载约对应 7,100 台 NVL72 机柜。"
          },
          {
            title: "配电 / 液冷 / 机电",
            sub: "高功率机柜 · CDU · 变压器",
            tag: "交期瓶颈",
            logos: ["Vertiv", "Eaton", "Microsoft"],
            detail: "单柜功率密度突破 100 kW 后冷板液冷与 CDU 成为刚需，大型变压器、开关柜与燃气轮机交期已排至数年以后。"
          },
          {
            title: "数据中心开发 / 运营",
            sub: "Powered Shell · BTS 定制租赁",
            tag: "容量变租约",
            logos: ["Equinix", "DigitalRealty", "CoreWeave"],
            detail: "新增容量 ≠ 可售算力：选址、地方审批、并网通电与上架调试决定了硬件何时真正转化为可售机柜容量。"
          }
        ]
      },
      {
        code: "C",
        name: "算力供给",
        subtitle: "把设备卖成服务",
        accent: "stage-c",
        cols: 2,
        nodes: [
          {
            title: "超大云厂商（Hyperscalers）",
            sub: "自研芯片 · 自建园区 · 对外出租",
            tag: "现金流 / CapEx",
            logos: ["AWS", "Google", "Microsoft", "Oracle", "AlibabaCloud"],
            detail: "依靠自身经营现金流承接重资产 CapEx，同时加码自研 ASIC（TPU v7/v8、Trainium）平衡对外购 GPU 的单一依赖。"
          },
          {
            title: "Neocloud / GPU 推理云",
            sub: "借债买卡 · 长约出租 · Token 推理工厂",
            tag: "利息 / 折旧 / 利用率",
            logos: ["CoreWeave", "Nebius", "Lambda", "fal", "Approaching"],
            detail: "产业链风险最集中于中游：以杠杆债务买卡配长约（CoreWeave 总债 $516 亿、债息 >16%），回报高度敏感于利用率与 GPU 经济寿命；推理云（fal、趋境科技）成为高增速分支。"
          }
        ]
      },
      {
        code: "D",
        name: "需求与回收",
        subtitle: "把算力变成收入",
        accent: "stage-d",
        cols: 3,
        nodes: [
          {
            title: "训练 / 后训练",
            sub: "预训练 · RL · 万卡集中负载",
            tag: "集群消耗",
            logos: ["OpenAI", "Anthropic", "Meta", "DeepSeek"],
            detail: "前沿实验室签下千亿美元级长期算力承诺（如 Anthropic 对 Google 与 Broadcom 的长期 TPU 协议），训练投入属研发型资本前置。"
          },
          {
            title: "推理 / Agent 运行",
            sub: "Token 消耗 · 长上下文 · 异步长任务",
            tag: "持续运行",
            logos: ["OpenAI", "Anthropic", "Cursor"],
            detail: "推理思考模型与长周期 Agent 触发算力乘数效应，推理成本直接计入 COGS，单位 Token 效率与延迟决定盈利能力。"
          },
          {
            title: "企业应用 / 付费回收",
            sub: "软件订阅 · 按量 · 按结果交付",
            tag: "回收闭环",
            logos: ["Microsoft", "Harvey", "OpenEvidence"],
            detail: "终端企业与个人付费是整条算力链条的最终现金流源头，决定前期数千亿美元 CapEx 的回本斜率与可持续性。"
          }
        ]
      }
    ],
    migration: [
      { step: "上游 · 供给锁量", text: "HBM、CoWoS 先进封装与光刻设备持续锁量，定价权集中在芯片与晶圆龙头。" },
      { step: "中游 · 交付与信用", text: "电力并网、液冷机电交期与 Neocloud 高息债务融资成为新增可售容量的核心约束。" },
      { step: "下游 · 商业回收", text: "模型与企业应用的真实付费增速与 Token 效率，决定前期巨额 CapEx 的回本斜率。" }
    ],
    cashflow: "企业与模型应用付费 → 算力云与 Neocloud → 数据中心与芯片硬件商",
    sources: [
      { label: "NVIDIA Q2 FY27 IR", url: "https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-Financial-Results-for-Second-Quarter-Fiscal-2027/default.aspx" },
      { label: "AMD Q3 2026 IR", url: "https://ir.amd.com/news-events/press-releases/detail/1303/amd-reports-third-quarter-2026-financial-results" },
      { label: "Broadcom Q3 FY26 IR", url: "https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announces-third-quarter-fiscal-year-2026-financial" },
      { label: "中国日报 (昇腾 950)", url: "https://cn.chinadaily.com.cn/a/202609/20/WS6aaf7ecce4b09a165c78b429.html" }
    ]
  }
};
