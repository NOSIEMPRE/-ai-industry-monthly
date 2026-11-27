window.MONTHLY_DATA = window.MONTHLY_DATA || {};

window.MONTHLY_DATA.funding = {
  overview: {
    id: "c1",
    code: "C1",
    title: "11 月全球 AI 投融资趋势：头部资本化提速，早期重仓三大硬核方向",
    kpis: [
      { value: "$95.1B", label: "11 月美国监测大额事件总额（含 Anthropic IPO）" },
      { value: "3 笔", label: "美国单笔 ≥$500M 早中期轮次（研发/推理/具身）" },
      { value: "66%", label: "全球创投流向 AI 占比基准（Crunchbase 10 月）" },
      { value: "芯片·推理·具身", label: "11 月中国亿元级融资核心集中赛道" }
    ],
    synthesis: [
      {
        title: "美国：两极分化加剧",
        text: "基座层由私募转向公开市场（Anthropic $81.3B IPO 与 OpenAI 下调私募目标并存）；早中期大额资金高度聚焦自动化 AI 研发、推理平台与具身智能，薄壳应用明显降温。"
      },
      {
        title: "中国：产业资本主导硬科技底座",
        text: "国资、互联网与产业战投成为主力，单笔十亿元级融资集中在 Token 推理基础设施（趋境科技）与存算一体芯片（微纳核芯）；具身赛道笔数密集但单轮规模偏向亿元级零部件与细分场景。"
      }
    ],
    sectorChart: [
      { label: "前沿基座模型 (US IPO+私募)", value: 92.3, display: "$92.3B", region: "us" },
      { label: "推理与生成媒体平台 (US)", value: 1.3, display: "$1.3B", region: "us" },
      { label: "AI 研发自动化 / RSI (US)", value: 1.0, display: "$1.0B", region: "us" },
      { label: "具身智能单笔标杆 (US)", value: 0.5, display: "$0.5B", region: "us" }
    ],
    cnMixChart: [
      { label: "Token 推理服务（趋境科技）", amount: 13, display: ">13 亿元" },
      { label: "存算一体 AI 芯片（微纳核芯）", amount: 10, display: ">10 亿元" },
      { label: "RISC-V / 智能体 CPU（灵睿智芯）", amount: 4, display: "数亿元" },
      { label: "中性原子量子计算（向量奇点）", amount: 4, display: "数亿元" },
      { label: "具身零部件集群（3 家单轮亿元级）", amount: 3, display: "各亿元级" }
    ],
    sources: [
      { label: "Crunchbase News", url: "https://news.crunchbase.com/venture/october-2026-global-startup-funding-strong-china-deepseek/" },
      { label: "21 财经 11-26", url: "https://m.21jingji.com/article/20261126/herald/a1e1b4404c6a9c33087bb82064ad2456.html" }
    ]
  },
  us: {
    id: "c2",
    code: "C2",
    title: "美国 11 月重点交易：头部 IPO 与 $500M+ 早期大额轮次",
    period: "2026-11-01 至 11-27 · 单笔 ≥$500M",
    deals: [
      {
        date: "11-03",
        company: "fal",
        sector: "推理平台",
        round: "F 轮",
        amount: "$1.3B",
        valuation: "$16B",
        investors: "Bessemer 领投；英伟达参投",
        tier: "主流媒体",
        tierCode: "t2",
        sourceLabel: "Tech Funding News",
        sourceUrl: "https://techfundingnews.com/fal-1-3b-series-f-16b-valuation-ai-inference/"
      },
      {
        date: "11-06",
        company: "OpenAI",
        sector: "基座模型",
        round: "私募首笔交割",
        amount: "$11B",
        valuation: "$1.25T",
        investors: "未披露（目标总额调至约 $20B）",
        tier: "主流媒体",
        tierCode: "t2",
        sourceLabel: "Bloomberg / Investing",
        sourceUrl: "https://www.investing.com/news/stock-market-news/openai-closes-11-billion-funding-at-125-trillion-valuation--report-5009147"
      },
      {
        date: "11-12",
        company: "Mirendil",
        sector: "AI 研发自动化",
        round: "A 轮",
        amount: "$1B",
        valuation: "未披露",
        investors: "Kleiner Perkins、Clearlake 领投；谷歌参投",
        tier: "公司公告",
        tierCode: "t1",
        sourceLabel: "AI Weekly",
        sourceUrl: "https://aiweekly.co/alerts/mirendil-raises-1b-series-a-at-5b-from-kleiner-perkins-and-clearlake-to"
      },
      {
        date: "11-17",
        company: "Genesis AI",
        sector: "具身智能",
        round: "A 轮",
        amount: "$500M",
        valuation: "$3.5B",
        investors: "Premji、Khosla、Eclipse 领投；英伟达、AMD 参投",
        tier: "公司公告",
        tierCode: "t1",
        sourceLabel: "TechCrunch",
        sourceUrl: "https://techcrunch.com/2026/11/17/genesis-ai-raises-500-million-to-deploy-electric-glove-wearing-robots/"
      },
      {
        date: "11-18",
        company: "Anthropic",
        sector: "基座模型",
        round: "IPO",
        amount: "$81.3B",
        valuation: "≈$1.5T",
        investors: "纳斯达克公开发行（代码 ANT）",
        tier: "主流媒体",
        tierCode: "t2",
        sourceLabel: "CNBC",
        sourceUrl: "https://www.cnbc.com/2026/11/18/anthropic-ipo-ai-offering-price.html"
      }
    ]
  },
  china: {
    id: "c3",
    code: "C3",
    title: "中国 11 月重点交易：聚焦推理引擎、AI 芯片与具身零部件",
    period: "2026-11-01 至 11-27 · 亿元级以上",
    deals: [
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
    ]
  }
};
