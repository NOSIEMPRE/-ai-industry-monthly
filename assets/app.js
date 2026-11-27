(function () {
  "use strict";

  var data = window.MONTHLY_DATA;
  if (!data) return;

  var charts = window.MONTHLY_CHARTS || {};
  var prefersReducedMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderSources(list, prefix) {
    if (!list || !list.length) return "";
    var links = list
      .map(function (s) {
        return '<a href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer">' + esc(s.label) + "</a>";
      })
      .join('<span aria-hidden="true">·</span>');
    return '<div class="sources-row"><span>' + (prefix || "来源：") + "</span>" + links + "</div>";
  }

  /* ==================== Section Renderers ==================== */

  function renderCover() {
    var m = data.meta;
    var counts = {
      A: data.news.length,
      B: data.trends.length,
      C: 3,
      D: 3,
      E: 1
    };
    var targets = { A: "#a1", B: "#b1", C: "#c1", D: "#d1", E: "#e1" };
    var agendaHtml = m.parts
      .map(function (p) {
        return (
          '<a class="agenda-card" href="' + targets[p.code] + '">' +
            '<div class="agenda-top"><span>PART ' + esc(p.code) + "</span><span>" + counts[p.code] + " 页</span></div>" +
            '<div class="agenda-title">' + esc(p.title) + "</div>" +
            '<div class="agenda-desc">' + esc(p.desc) + "</div>" +
          "</a>"
        );
      })
      .join("");

    var monthNum = (m.issueCode.split(".")[1] || "11");
    return (
      '<section class="screen cover visible" id="cover" data-nav-group="封面" data-nav-code="00" data-nav-title="封面总览">' +
        '<canvas class="halftone-canvas" id="halftoneCanvas" aria-hidden="true"></canvas>' +
        '<div class="wrap">' +
          '<div class="cover-hero reveal">' +
            '<div class="cover-kicker">' + esc(m.issueLabel) + " · MONTHLY SEMINAR</div>" +
            '<div class="cover-issue">' + esc(monthNum) + "<span>.</span></div>" +
            "<h1>" + esc(m.title) + "</h1>" +
            '<p class="cover-sub">' + esc(m.subtitle) + "</p>" +
            '<p class="cover-meta">' + esc(m.org) + " · " + esc(m.tagline) + "</p>" +
          "</div>" +
          '<nav class="agenda-grid reveal d1" aria-label="本期议程">' + agendaHtml + "</nav>" +
        "</div>" +
      "</section>"
    );
  }

  function renderPartDivider(part) {
    return (
      '<section class="screen part-divider" id="' + esc(part.id) + '" data-nav-group="' + esc(part.code + " " + part.title) + '" data-nav-code="' + esc(part.code) + '" data-nav-title="' + esc(part.title) + '">' +
        '<div class="wrap">' +
          '<div class="part-code reveal">' + esc(part.code) + "</div>" +
          '<h2 class="reveal d1">' + esc(part.title) + "</h2>" +
          '<p class="reveal d2">' + esc(part.intro) + "</p>" +
        "</div>" +
      "</section>"
    );
  }

  function renderNewsSlide(item) {
    var tagsHtml = item.tags
      .map(function (t, idx) {
        return '<span class="pill ' + (idx === 0 ? "soft" : "") + '">' + esc(t) + "</span>";
      })
      .join("");

    var liveQuoteHtml = "";
    if (item.liveQuote) {
      var lq = item.liveQuote;
      var pct = (((lq.fallbackPrice - lq.ipoPrice) / lq.ipoPrice) * 100).toFixed(2);
      var isBelow = lq.fallbackPrice < lq.ipoPrice;
      liveQuoteHtml =
        '<div class="live-quote-bar" id="antLiveBar" data-symbol="' + esc(lq.symbol) + '" data-ipo="' + lq.ipoPrice + '">' +
          '<div class="lq-left">' +
            '<span class="lq-symbol"><span class="lq-dot"></span>' + esc(lq.exchange) + ": " + esc(lq.symbol) + "</span>" +
            '<span class="lq-price" id="antLivePrice">$' + lq.fallbackPrice.toFixed(2) + "</span>" +
            '<span class="lq-diff ' + (isBelow ? "below" : "above") + '" id="antLiveDiff">' +
              (pct >= 0 ? "+" : "") + pct + "% vs $83 发行价 · " + (isBelow ? "已破发" : "高于发行价") +
            "</span>" +
          "</div>" +
          '<div class="lq-right">' +
            '<span id="antLiveStatus">' + esc(lq.fallbackLabel) + "</span>" +
            '<button type="button" class="lq-refresh" id="antRefreshBtn">↻ 实时刷新</button>' +
            '<a class="lq-link" href="' + esc(lq.quoteUrl) + '" target="_blank" rel="noopener noreferrer">行情 ↗</a>' +
          "</div>" +
        "</div>";
    }

    var microChartHtml =
      item.chartType && charts[item.chartType]
        ? '<div class="chart-box" style="margin-bottom:14px">' + charts[item.chartType]() + "</div>"
        : "";

    var tlHtml = item.timeline
      .map(function (t) {
        return (
          '<div class="tl-item ' + (t.hot ? "hot" : "") + '">' +
            "<time>" + esc(t.time) + "</time>" +
            "<div>" + esc(t.text) + "</div>" +
          "</div>"
        );
      })
      .join("");

    return (
      '<section class="screen" id="' + esc(item.id) + '" data-nav-group="A 本月重点新闻" data-nav-code="' + esc(item.code) + '" data-nav-title="' + esc(item.title) + '">' +
        '<div class="wrap">' +
          '<div class="eyebrow reveal"><span class="pill primary">' + esc(item.code) + "</span>" + tagsHtml + "<span>" + esc(item.date) + "</span></div>" +
          '<h2 class="slide-title reveal"><span class="num">' + esc(item.code) + "</span><span>" + esc(item.title) + "</span></h2>" +
          '<p class="why-line reveal d1"><b>核心看点：</b>' + esc(item.why) + "</p>" +
          /* Background FIRST as requested */
          '<div class="news-bg-strip reveal d1">' +
            '<span class="news-bg-label">背景</span>' +
            "<p>" + esc(item.background) + "</p>" +
          "</div>" +
          /* Facts/Visual Micro-Chart + Pure Market Opinions below */
          '<div class="news-body-grid reveal d2">' +
            '<div class="card" style="display:flex;flex-direction:column">' +
              '<div class="card-head"><h3>事实与时间线</h3><small>FACTS &amp; DATA VISUAL</small></div>' +
              liveQuoteHtml +
              microChartHtml +
              '<div class="timeline">' + tlHtml + "</div>" +
              renderSources(item.factSources) +
            "</div>" +
            '<div class="card" style="display:flex;flex-direction:column">' +
              '<div class="card-head"><h3>市场看法</h3><small>MARKET THESES</small></div>' +
              '<div class="view-stack">' +
                '<div class="view-card bull"><span class="view-badge">偏乐观视角 · BULL CASE</span><div>' + esc(item.views.bull) + "</div></div>" +
                '<div class="view-card bear"><span class="view-badge">偏谨慎视角 · BEAR CASE</span><div>' + esc(item.views.bear) + "</div></div>" +
              "</div>" +
              renderSources(item.viewSources) +
            "</div>" +
          "</div>" +
        "</div>" +
      "</section>"
    );
  }

  function renderTrendSlide(item) {
    var bulletsHtml = item.bullets
      .map(function (b) { return "<li>" + esc(b) + "</li>"; })
      .join("");

    var chartSvg = charts[item.chartType] ? charts[item.chartType]() : "";

    var chinaHtml = item.chinaContext
      .map(function (c) {
        return '<div class="china-item"><b>' + esc(c.label) + "</b><p>" + esc(c.text) + "</p></div>";
      })
      .join("");

    return (
      '<section class="screen" id="' + esc(item.id) + '" data-nav-group="B 机构趋势" data-nav-code="' + esc(item.code) + '" data-nav-title="' + esc(item.title) + '">' +
        '<div class="wrap">' +
          '<div class="eyebrow reveal"><span class="pill primary">' + esc(item.code) + '</span><span class="pill soft">' + esc(item.org) + "</span><span>" + esc(item.reportTitle) + "</span></div>" +
          '<h2 class="slide-title reveal"><span class="num">' + esc(item.code) + "</span><span>" + esc(item.title) + "</span></h2>" +
          /* Full-width Horizontal Core Thesis */
          '<div class="card blue-wash reveal d1">' +
            '<div class="card-head"><h3>核心判断</h3><small>CORE THESIS</small></div>' +
            '<div class="trend-core">' +
              '<p class="trend-quote">' + esc(item.quote) + "</p>" +
              '<ul class="clean-list">' + bulletsHtml + "</ul>" +
            "</div>" +
          "</div>" +
          /* Full-width Visual Chart (SX LP Meeting style) */
          '<div class="chart-card reveal d2">' +
            '<div class="chart-box">' + chartSvg + "</div>" +
            '<p class="chart-caption">' + esc(item.chartCaption) + "</p>" +
          "</div>" +
          /* Full-width Horizontal China Context / Proof Strip */
          '<div class="card reveal d3">' +
            '<div class="card-head"><h3>' + esc(item.chinaContextTitle) + "</h3><small>CONTEXT &amp; EVIDENCE</small></div>" +
            '<div class="china-strip">' + chinaHtml + "</div>" +
            renderSources(item.sources) +
          "</div>" +
        "</div>" +
      "</section>"
    );
  }

  function renderFundingOverview() {
    var ov = data.funding.overview;

    var synHtml = ov.synthesis
      .map(function (s) {
        return '<div class="card soft"><div class="card-head"><h3>' + esc(s.title) + '</h3></div><p style="margin:0;font-size:13.5px;color:var(--ink-secondary)">' + esc(s.text) + "</p></div>";
      })
      .join("");

    var ribbonSvg = charts.c1SummaryRibbon ? charts.c1SummaryRibbon() : "";
    var usChart = charts.fundingBars ? charts.fundingBars(ov.sectorChart, 92.3, true) : "";
    var cnChart = charts.fundingBars ? charts.fundingBars(ov.cnMixChart, 13, false) : "";

    return (
      '<section class="screen" id="' + esc(ov.id) + '" data-nav-group="C 投融资跟踪" data-nav-code="' + esc(ov.code) + '" data-nav-title="11 月投融资趋势总览">' +
        '<div class="wrap">' +
          '<div class="eyebrow reveal"><span class="pill primary">' + esc(ov.code) + '</span><span class="pill soft">月度趋势总结</span><span>2026-11-01 至 11-27</span></div>' +
          '<h2 class="slide-title reveal"><span class="num">' + esc(ov.code) + "</span><span>" + esc(ov.title) + "</span></h2>" +
          '<div class="chart-box reveal d1">' + ribbonSvg + "</div>" +
          '<div class="two-col reveal d2">' +
            '<div class="card"><div class="card-head"><h3>美国 11 月大额资金分布</h3><small>USD BILLIONS (平方根比例)</small></div><div class="chart-box">' + usChart + "</div></div>" +
            '<div class="card"><div class="card-head"><h3>中国 11 月亿元级重点分布</h3><small>RMB 亿元级别示意</small></div><div class="chart-box">' + cnChart + "</div></div>" +
          "</div>" +
          '<div class="two-col reveal d3">' + synHtml + "</div>" +
          renderSources(ov.sources) +
        "</div>" +
      "</section>"
    );
  }

  function renderDealsTableSlide(regionKey, regionLabel, hasValuation) {
    var section = data.funding[regionKey];
    var sectors = ["全部"];
    section.deals.forEach(function (d) {
      if (sectors.indexOf(d.sector) === -1) sectors.push(d.sector);
    });

    var filtersHtml = sectors
      .map(function (sec, idx) {
        return '<button class="filter-btn ' + (idx === 0 ? "active" : "") + '" data-region="' + regionKey + '" data-sector="' + esc(sec) + '">' + esc(sec) + "</button>";
      })
      .join("");

    var rowsHtml = section.deals
      .map(function (d) {
        return (
          '<tr data-sector="' + esc(d.sector) + '">' +
            '<td class="mono">' + esc(d.date) + "</td>" +
            '<td class="co-name">' + esc(d.company) + "</td>" +
            '<td><span class="pill soft">' + esc(d.sector) + "</span></td>" +
            "<td>" + esc(d.round) + "</td>" +
            '<td class="mono">' + esc(d.amount) + "</td>" +
            (hasValuation ? '<td class="mono">' + esc(d.valuation || "—") + "</td>" : "") +
            "<td>" + esc(d.investors) + "</td>" +
            '<td><a class="tier-tag ' + esc(d.tierCode) + '" href="' + esc(d.sourceUrl) + '" target="_blank" rel="noopener noreferrer">' + esc(d.sourceLabel) + " ↗</a></td>" +
          "</tr>"
        );
      })
      .join("");

    return (
      '<section class="screen" id="' + esc(section.id) + '" data-nav-group="C 投融资跟踪" data-nav-code="' + esc(section.code) + '" data-nav-title="' + esc(regionLabel) + ' 11 月重点交易">' +
        '<div class="wrap">' +
          '<div class="eyebrow reveal"><span class="pill primary">' + esc(section.code) + '</span><span class="pill soft">' + esc(regionLabel) + "</span><span>" + esc(section.period) + "</span></div>" +
          '<h2 class="slide-title reveal"><span class="num">' + esc(section.code) + "</span><span>" + esc(section.title) + "</span></h2>" +
          '<div class="filter-bar reveal d1" role="group" aria-label="按赛道筛选">' + filtersHtml + "</div>" +
          '<div class="table-card reveal d2">' +
            '<table class="data-table" id="table-' + regionKey + '">' +
              "<thead><tr><th>日期</th><th>公司</th><th>赛道</th><th>轮次</th><th>金额</th>" +
              (hasValuation ? "<th>估值</th>" : "") +
              "<th>领投 / 主要投资方</th><th>一手信源</th></tr></thead>" +
              "<tbody>" + rowsHtml + "</tbody>" +
            "</table>" +
          "</div>" +
          (section.footnote ? '<div class="footnote-bar reveal d3">' + esc(section.footnote) + "</div>" : "") +
        "</div>" +
      "</section>"
    );
  }

  function renderEmbodiedMap() {
    var em = data.maps.embodied;
    var heads =
      '<div class="matrix-hd">阶段</div>' +
      em.phases
        .map(function (p) {
          return '<div class="matrix-hd">' + esc(p.period) + "<em>" + esc(p.label) + "</em></div>";
        })
        .join("");

    var body = em.regions
      .map(function (reg, rIdx) {
        var lastClass = rIdx === em.regions.length - 1 ? " last-row" : "";
        var labelCell = '<div class="matrix-region ' + (reg.accent ? "us" : "") + lastClass + '">' + esc(reg.name) + "</div>";
        var cells = reg.cells
          .map(function (c) {
            var chips = c.companies
              .map(function (co) {
                return '<span class="co-chip ' + (co.hot ? "hot" : "") + '">' + esc(co.name) + "</span>";
              })
              .join("");
            return (
              '<div class="matrix-cell' + lastClass + '">' +
                "<b>" + esc(c.heading) + "</b>" +
                "<div>" + esc(c.text) + "</div>" +
                '<div class="chip-group">' + chips + "</div>" +
              "</div>"
            );
          })
          .join("");
        return labelCell + cells;
      })
      .join("");

    return (
      '<section class="screen" id="' + esc(em.id) + '" data-nav-group="D 产业图谱" data-nav-code="' + esc(em.code) + '" data-nav-title="具身智能演进图谱">' +
        '<div class="wrap">' +
          '<div class="eyebrow reveal"><span class="pill primary">' + esc(em.code) + '</span><span class="pill soft">具身智能图谱</span><span>阶段 × 中美对照</span></div>' +
          '<h2 class="slide-title reveal"><span class="num">' + esc(em.code) + "</span><span>" + esc(em.title) + "</span></h2>" +
          '<div class="matrix-wrap reveal d1"><div class="matrix-grid">' + heads + body + "</div></div>" +
          '<div class="eyebrow reveal d2" style="justify-content:space-between">' +
            '<div style="display:flex;gap:10px;align-items:center"><span class="co-chip hot">蓝底</span><span>本月动态</span><span class="co-chip">灰底</span><span>阶段代表</span></div>' +
            renderSources(em.sources) +
          "</div>" +
        "</div>" +
      "</section>"
    );
  }

  function renderEmbodiedCases() {
    var ec = data.maps.embodiedCases;
    var cards = ec.cases
      .map(function (c) {
        var rows = c.rows
          .map(function (r) {
            return "<tr><td>" + esc(r[0]) + "</td><td>" + esc(r[1]) + "</td></tr>";
          })
          .join("");
        return (
          '<div class="card" style="display:flex;flex-direction:column">' +
            '<div class="card-head"><h3>' + esc(c.name) + "</h3><small>" + esc(c.highlight) + "</small></div>" +
            '<div style="margin:-4px 0 10px;font-size:12px;color:var(--blue);font-weight:600">' + esc(c.region) + "</div>" +
            '<table class="case-table"><tbody>' + rows + "</tbody></table>" +
            renderSources(c.sources) +
          "</div>"
        );
      })
      .join("");

    return (
      '<section class="screen" id="' + esc(ec.id) + '" data-nav-group="D 产业图谱" data-nav-code="' + esc(ec.code) + '" data-nav-title="具身案例：Genesis vs 星尘">' +
        '<div class="wrap">' +
          '<div class="eyebrow reveal"><span class="pill primary">' + esc(ec.code) + '</span><span class="pill soft">标杆案例对照</span><span>美国 vs 中国</span></div>' +
          '<h2 class="slide-title reveal"><span class="num">' + esc(ec.code) + "</span><span>" + esc(ec.title) + "</span></h2>" +
          '<div class="two-col reveal d1">' + cards + "</div>" +
        "</div>" +
      "</section>"
    );
  }

  function renderComputeMap() {
    var cm = data.maps.compute;
    var logosLib = window.BRAND_LOGOS || { render: function (k) { return '<span class="logo-badge text-only">' + esc(k) + "</span>"; } };
    var firstNode = cm.stages[0].nodes[0];
    var nodeIdx = 0;

    var lensTags = {
      profit: ["芯片设计 / IP", "制造 / 封装 / 设备", "HBM / 存储", "训练 / 后训练"],
      bottleneck: ["制造 / 封装 / 设备", "HBM / 存储", "网络 / 互连 / 光模块", "电力 / 能源", "配电 / 液冷 / 机电", "Neocloud / GPU 推理云"],
      china: ["芯片设计 / IP", "制造 / 封装 / 设备", "网络 / 互连 / 光模块", "服务器 / 整机柜", "超大云厂商（Hyperscalers）", "Neocloud / GPU 推理云", "训练 / 后训练"]
    };

    var rowsHtml = cm.stages
      .map(function (st) {
        var colsClass = "cols-" + (st.cols || st.nodes.length);
        var nodesHtml = st.nodes
          .map(function (nd) {
            var isFirst = nodeIdx === 0;
            var currentIdx = nodeIdx++;
            var logoItems = (nd.logos || [])
              .map(function (logoKey) { return logosLib.render(logoKey); })
              .join("");
            var lenses = [];
            if (lensTags.profit.indexOf(nd.title) !== -1) lenses.push("profit");
            if (lensTags.bottleneck.indexOf(nd.title) !== -1) lenses.push("bottleneck");
            if (lensTags.china.indexOf(nd.title) !== -1) lenses.push("china");
            return (
              '<button type="button" class="compute-node-btn ' + (isFirst ? "active" : "") + '" data-node-idx="' + currentIdx + '" data-lenses="' + lenses.join(",") + '" data-stage="STAGE ' + esc(st.code) + " · " + esc(st.name) + '" data-title="' + esc(nd.title) + '" data-detail="' + esc(nd.detail) + '">' +
                '<div class="cn-top"><span class="cn-title">' + esc(nd.title) + '</span><span class="cn-tag">' + esc(nd.tag) + "</span></div>" +
                '<div class="cn-sub">' + esc(nd.sub) + "</div>" +
                '<div class="logo-wall">' + logoItems + "</div>" +
              "</button>"
            );
          })
          .join("");

        return (
          '<div class="mapping-row">' +
            '<div class="mapping-rail ' + esc(st.accent) + '">' +
              '<span class="rail-code">STAGE ' + esc(st.code) + "</span>" +
              "<h4>" + esc(st.name) + "</h4>" +
              "<p>" + esc(st.subtitle) + "</p>" +
            "</div>" +
            '<div class="mapping-cells ' + colsClass + '">' + nodesHtml + "</div>" +
          "</div>"
        );
      })
      .join("");

    var migHtml = cm.migration
      .map(function (m) {
        return '<div class="migration-card"><b>' + esc(m.step) + "</b><p>" + esc(m.text) + "</p></div>";
      })
      .join("");

    return (
      '<section class="screen" id="' + esc(cm.id) + '" data-nav-group="D 产业图谱" data-nav-code="' + esc(cm.code) + '" data-nav-title="算力行业全图谱">' +
        '<div class="wrap">' +
          '<div class="lens-bar reveal">' +
            '<div class="eyebrow"><span class="pill primary">' + esc(cm.code) + '</span><span class="pill soft">算力全产业链 Mapping</span><span>点击环节拆解数据 · 切换视角高亮</span></div>' +
            '<div class="lens-pills" id="computeLens" role="group" aria-label="图谱分析视角">' +
              '<button type="button" class="lens-btn active" data-lens="all">全览视图</button>' +
              '<button type="button" class="lens-btn" data-lens="profit">高利润池</button>' +
              '<button type="button" class="lens-btn" data-lens="bottleneck">当前瓶颈</button>' +
              '<button type="button" class="lens-btn" data-lens="china">中国生态</button>' +
            "</div>" +
          "</div>" +
          '<h2 class="slide-title reveal"><span class="num">' + esc(cm.code) + "</span><span>" + esc(cm.title) + "</span></h2>" +
          '<div class="compute-thesis reveal d1">' + esc(cm.thesis) + "</div>" +
          '<div class="mapping-board reveal d2" id="computeStages">' + rowsHtml + "</div>" +
          '<div class="compute-inspector reveal d2" id="computeInspector">' +
            '<div class="inspector-left">' +
              '<div class="inspector-kicker" id="inspectorKicker">STAGE A · 硬件供给 / ' + esc(firstNode.title) + "</div>" +
              '<p class="inspector-text" id="inspectorText">' + esc(firstNode.detail) + "</p>" +
            "</div>" +
            '<div style="font:600 11.5px/1.5 var(--font-mono);color:#93C5FD;max-width:300px">现金流方向：<br><span style="color:#FFFFFF">' + esc(cm.cashflow) + "</span></div>" +
          "</div>" +
          '<div class="migration-grid reveal d3">' + migHtml + "</div>" +
          renderSources(cm.sources, "一手财报与公告来源：") +
        "</div>" +
      "</section>"
    );
  }

  function renderTopicsSlide() {
    var tp = data.topics;
    var cards = tp.items
      .map(function (it, idx) {
        // For 5 items: 3 on top row (span 2 each), 2 wide on bottom row (span 3 each)
        var isWide = tp.items.length === 5 && idx >= 3;
        var refsHtml = it.refs
          .map(function (r) {
            return '<a href="#' + esc(r) + '">' + esc(r.toUpperCase()) + "</a>";
          })
          .join("");
        return (
          '<div class="topic-card ' + (isWide ? "wide" : "") + '">' +
            '<div class="topic-head"><span class="topic-num">' + esc(it.num) + '</span><div class="topic-refs" style="margin:0;padding:0">' + refsHtml + "</div></div>" +
            "<h3>" + esc(it.title) + "</h3>" +
            "<p>" + esc(it.desc) + "</p>" +
          "</div>"
        );
      })
      .join("");

    return (
      '<section class="screen" id="' + esc(tp.id) + '" data-nav-group="E 重点议题" data-nav-code="' + esc(tp.code) + '" data-nav-title="本月重点研讨议题">' +
        '<div class="wrap">' +
          '<div class="eyebrow reveal"><span class="pill primary">' + esc(tp.code) + '</span><span class="pill soft">SEMINAR TOPICS</span><span>商业趋势 · 产品形态 · 产业路径</span></div>' +
          '<h2 class="slide-title reveal"><span class="num">' + esc(tp.code) + "</span><span>" + esc(tp.title) + "</span></h2>" +
          '<p class="why-line reveal d1">' + esc(tp.subtitle) + "</p>" +
          '<div class="topics-grid reveal d2">' + cards + "</div>" +
        "</div>" +
      "</section>"
    );
  }

  /* ==================== Assemble Full Deck ==================== */
  var partsMap = {};
  data.meta.parts.forEach(function (p) { partsMap[p.code] = p; });

  var deckHtml = [
    renderCover(),
    renderPartDivider(partsMap.A),
    data.news.map(renderNewsSlide).join(""),
    renderPartDivider(partsMap.B),
    data.trends.map(renderTrendSlide).join(""),
    renderPartDivider(partsMap.C),
    renderFundingOverview(),
    renderDealsTableSlide("us", "美国", true),
    renderDealsTableSlide("china", "中国", false),
    renderPartDivider(partsMap.D),
    renderEmbodiedMap(),
    renderEmbodiedCases(),
    renderComputeMap(),
    renderTopicsSlide()
  ].join("");

  document.getElementById("deck").innerHTML = deckHtml;

  /* ==================== Dynamic Chronological Topbar Ticker (11-01 -> 11-27) ==================== */
  function parseDateKey(str) {
    var s = String(str || "");
    var m = s.match(/(\d{1,2})-(\d{1,2})/);
    if (m) return parseInt(m[1], 10) * 100 + parseInt(m[2], 10);
    if (s.indexOf("上旬") !== -1) return 1105;
    if (s.indexOf("中旬") !== -1) return 1115;
    if (s.indexOf("下旬") !== -1) return 1125;
    return 1199;
  }

  var rawTickerItems = []
    .concat(
      data.funding.us.deals.map(function (d) {
        return {
          sortKey: parseDateKey(d.date),
          html: d.date + " · " + d.company + " " + d.round + " <b>" + d.amount + "</b>"
        };
      })
    )
    .concat(
      data.funding.china.deals.map(function (d) {
        return {
          sortKey: parseDateKey(d.date),
          html: d.date + " · " + d.company + " " + d.round + " <b>" + d.amount + "</b>"
        };
      })
    )
    .concat([
      { sortKey: 1106.5, html: "11-06 · CoreWeave 债券收益率突破 <b>16%</b>" },
      { sortKey: 1116, html: "11-16 · BIS 发布东南亚及远程算力管制新规" },
      { sortKey: 1119, html: "11-19 · 远程算力使用限制正式生效" },
      { sortKey: 1123.5, html: "11-23 · 美实体清单新增 <b>7 家</b>东南亚企业" }
    ]);

  rawTickerItems.sort(function (a, b) {
    return a.sortKey - b.sortKey;
  });

  var tickerHtml = rawTickerItems
    .map(function (item) {
      return "<span>" + item.html + '</span><span class="ticker-sep">/</span>';
    })
    .join("");
  document.getElementById("ticker").innerHTML = tickerHtml + tickerHtml;

  /* ==================== Build Hidden Retractable Side Drawer (Merged Section Headers) ==================== */
  var screens = [].slice.call(document.querySelectorAll(".screen"));
  var drawerBody = document.getElementById("drawerBody");
  var groups = [];
  var groupIndex = {};

  screens.forEach(function (sec) {
    var g = sec.getAttribute("data-nav-group") || "目录";
    var isDivider = sec.classList.contains("part-divider") || sec.id === "cover" || sec.id === "e1";
    var item = {
      id: sec.id,
      code: sec.getAttribute("data-nav-code") || "",
      title: sec.getAttribute("data-nav-title") || ""
    };
    if (!groupIndex[g]) {
      groupIndex[g] = { label: g, head: null, children: [] };
      groups.push(groupIndex[g]);
    }
    if (isDivider && !groupIndex[g].head) {
      groupIndex[g].head = item;
    } else {
      groupIndex[g].children.push(item);
    }
  });

  drawerBody.innerHTML = groups
    .map(function (grp) {
      var head = grp.head || grp.children[0];
      var headHtml =
        '<a class="drawer-group-link" href="#' + esc(head.id) + '" data-target="' + esc(head.id) + '">' +
          '<span class="drawer-group-badge">' + esc(head.code) + "</span>" +
          '<span class="drawer-text">' + esc(head.title) + "</span>" +
        "</a>";

      var childrenHtml = grp.children.length
        ? '<div class="drawer-children">' +
            grp.children
              .map(function (it) {
                return (
                  '<a class="drawer-link" href="#' + esc(it.id) + '" data-target="' + esc(it.id) + '">' +
                    '<span class="drawer-code">' + esc(it.code) + "</span>" +
                    '<span class="drawer-text">' + esc(it.title) + "</span>" +
                  "</a>"
                );
              })
              .join("") +
          "</div>"
        : "";

      return '<div class="drawer-group">' + headHtml + childrenHtml + "</div>";
    })
    .join("");

  var drawer = document.getElementById("sideDrawer");
  var backdrop = document.getElementById("drawerBackdrop");
  var navTrigger = document.getElementById("navTrigger");
  var edgeTab = document.getElementById("edgeTab");
  var drawerClose = document.getElementById("drawerClose");

  function openDrawer() {
    drawer.classList.add("open");
    backdrop.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    navTrigger.setAttribute("aria-expanded", "true");
  }

  function closeDrawer() {
    drawer.classList.remove("open");
    backdrop.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    navTrigger.setAttribute("aria-expanded", "false");
  }

  navTrigger.addEventListener("click", function () {
    if (drawer.classList.contains("open")) closeDrawer();
    else openDrawer();
  });
  edgeTab.addEventListener("click", openDrawer);
  drawerClose.addEventListener("click", closeDrawer);
  backdrop.addEventListener("click", closeDrawer);

  drawerBody.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      closeDrawer();
    });
  });

  /* ==================== Deck Counter, Progress, Scrollspy & Reveal ==================== */
  var pc = document.getElementById("pc");
  var progressBar = document.getElementById("progress");
  var drawerLinks = [].slice.call(drawerBody.querySelectorAll("a[data-target]"));
  var curIndex = 0;

  function pad(n) {
    return (n < 10 ? "0" : "") + n;
  }

  /* ==================== Far-Right Ultra-Minimal Dot Rail ==================== */
  var dotRail = document.createElement("nav");
  dotRail.className = "dot-rail";
  dotRail.setAttribute("aria-label", "章节进度指示");
  dotRail.innerHTML = screens
    .map(function (sec, idx) {
      var code = sec.getAttribute("data-nav-code") || pad(idx + 1);
      var title = sec.getAttribute("data-nav-title") || "";
      return '<button type="button" class="dot-item" data-dot-idx="' + idx + '" data-label="' + esc(code + " · " + title) + '" aria-label="跳转至 ' + esc(title) + '"></button>';
    })
    .join("");
  document.body.appendChild(dotRail);
  var dotItems = [].slice.call(dotRail.querySelectorAll(".dot-item"));
  dotItems.forEach(function (dot) {
    dot.addEventListener("click", function () {
      goToSlide(parseInt(dot.getAttribute("data-dot-idx"), 10));
    });
  });

  function updateActive(idx) {
    curIndex = idx;
    pc.textContent = pad(idx + 1) + " / " + pad(screens.length);
    progressBar.style.width = ((idx + 1) / screens.length) * 100 + "%";
    var activeId = screens[idx].id;
    drawerLinks.forEach(function (link) {
      link.classList.toggle("active", link.getAttribute("data-target") === activeId);
    });
    dotItems.forEach(function (dot, i) {
      dot.classList.toggle("active", i === idx);
    });
  }

  /* ==================== Smooth KPI Count-Up Animation ==================== */
  function animateMetricNumber(el) {
    if (prefersReducedMotion || el.getAttribute("data-counted") === "1") return;
    var raw = el.textContent.trim();
    // Skip year/quarter tags like 2027Q1 or non-numeric labels
    if (/^\d{4}Q\d$/.test(raw)) return;
    var m = raw.match(/^([^0-9]*)([0-9][0-9,]*(?:\.[0-9]+)?)(.*)$/);
    if (!m) return;
    el.setAttribute("data-counted", "1");
    var prefix = m[1];
    var numStr = m[2];
    var suffix = m[3];
    var target = parseFloat(numStr.replace(/,/g, ""));
    if (isNaN(target) || target === 0) return;
    var decimals = numStr.indexOf(".") !== -1 ? numStr.split(".")[1].length : 0;
    var hasComma = numStr.indexOf(",") !== -1;
    var duration = 850;
    var start = null;

    function formatVal(val) {
      var s = decimals > 0 ? val.toFixed(decimals) : String(Math.round(val));
      if (hasComma) {
        var parts = s.split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        s = parts.join(".");
      }
      return prefix + s + suffix;
    }

    function step(ts) {
      if (!start) start = ts;
      var p = Math.min(1, (ts - start) / duration);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = formatVal(target * eased);
      if (p < 1) {
        window.requestAnimationFrame(step);
      } else {
        el.textContent = raw;
      }
    }
    window.requestAnimationFrame(step);
  }

  // Reliable reveal observer (low threshold so tall mobile/timeline slides always trigger)
  var revealIo = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          entry.target
            .querySelectorAll(".metric-box strong, .kpi-card strong")
            .forEach(animateMetricNumber);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
  );
  screens.forEach(function (s) { revealIo.observe(s); });

  // Accurate scrollspy based on viewport center
  var scrollTicking = false;
  function syncScrollPosition() {
    scrollTicking = false;
    var mid = window.innerHeight * 0.42;
    var bestIdx = 0;
    var bestDist = Infinity;
    screens.forEach(function (s, idx) {
      var rect = s.getBoundingClientRect();
      if (rect.top <= mid && rect.bottom >= mid) {
        bestIdx = idx;
        bestDist = 0;
      } else {
        var dist = Math.min(Math.abs(rect.top - mid), Math.abs(rect.bottom - mid));
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = idx;
        }
      }
    });
    updateActive(bestIdx);
  }

  window.addEventListener(
    "scroll",
    function () {
      if (!scrollTicking) {
        scrollTicking = true;
        window.requestAnimationFrame(syncScrollPosition);
      }
    },
    { passive: true }
  );

  function goToSlide(idx) {
    var target = Math.max(0, Math.min(screens.length - 1, idx));
    screens[target].scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
    updateActive(target);
  }

  document.getElementById("prev").addEventListener("click", function () {
    goToSlide(curIndex - 1);
  });
  document.getElementById("next").addEventListener("click", function () {
    goToSlide(curIndex + 1);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (chartModal && chartModal.classList.contains("open")) {
        closeChartModal();
        return;
      }
      if (drawer.classList.contains("open")) {
        closeDrawer();
        return;
      }
    }
    if (chartModal && chartModal.classList.contains("open")) return;
    if (e.target.closest("input, textarea, select")) return;
    if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === "ArrowRight") {
      e.preventDefault();
      goToSlide(curIndex + 1);
    } else if (e.key === "ArrowUp" || e.key === "PageUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      goToSlide(curIndex - 1);
    }
  });

  updateActive(0);

  /* ==================== Interactive Funding Table Filters ==================== */
  document.querySelectorAll(".filter-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var region = btn.getAttribute("data-region");
      var sector = btn.getAttribute("data-sector");
      document
        .querySelectorAll('.filter-btn[data-region="' + region + '"]')
        .forEach(function (b) { b.classList.toggle("active", b === btn); });

      var rows = document.querySelectorAll("#table-" + region + " tbody tr");
      rows.forEach(function (row) {
        var match = sector === "全部" || row.getAttribute("data-sector") === sector;
        row.style.display = match ? "" : "none";
      });
    });
  });

  /* ==================== Interactive Compute Map Inspector & Lens Filter ==================== */
  var computeStages = document.getElementById("computeStages");
  if (computeStages) {
    var kickerEl = document.getElementById("inspectorKicker");
    var textEl = document.getElementById("inspectorText");
    var inspectorEl = document.getElementById("computeInspector");
    var nodeBtns = [].slice.call(computeStages.querySelectorAll(".compute-node-btn"));
    nodeBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        nodeBtns.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        kickerEl.textContent = btn.getAttribute("data-stage") + " / " + btn.getAttribute("data-title");
        textEl.textContent = btn.getAttribute("data-detail");
        inspectorEl.classList.remove("inspector-swap");
        void inspectorEl.offsetWidth;
        inspectorEl.classList.add("inspector-swap");
      });
    });

    var lensWrap = document.getElementById("computeLens");
    if (lensWrap) {
      var lensBtns = [].slice.call(lensWrap.querySelectorAll(".lens-btn"));
      lensBtns.forEach(function (lb) {
        lb.addEventListener("click", function () {
          var lens = lb.getAttribute("data-lens");
          lensBtns.forEach(function (b) { b.classList.toggle("active", b === lb); });
          if (lens === "all") {
            computeStages.classList.remove("lens-active");
            nodeBtns.forEach(function (n) { n.classList.remove("dimmed", "highlighted"); });
          } else {
            computeStages.classList.add("lens-active");
            nodeBtns.forEach(function (n) {
              var tags = (n.getAttribute("data-lenses") || "").split(",");
              var hit = tags.indexOf(lens) !== -1;
              n.classList.toggle("highlighted", hit);
              n.classList.toggle("dimmed", !hit);
            });
          }
        });
      });
    }
  }

  /* ==================== Interactive B3 Value-Chain Hover Sync ==================== */
  document.querySelectorAll(".vc-svg").forEach(function (svg) {
    var segs = [].slice.call(svg.querySelectorAll("[data-vc-idx]"));
    function setHover(idx) {
      if (idx == null) {
        svg.classList.remove("has-hover");
        segs.forEach(function (el) { el.classList.remove("is-active"); });
      } else {
        svg.classList.add("has-hover");
        segs.forEach(function (el) {
          el.classList.toggle("is-active", el.getAttribute("data-vc-idx") === String(idx));
        });
      }
    }
    segs.forEach(function (el) {
      el.addEventListener("mouseenter", function () { setHover(el.getAttribute("data-vc-idx")); });
      el.addEventListener("mouseleave", function () { setHover(null); });
    });
  });

  /* ==================== Click-to-Zoom Interactive SVG Chart Lightbox (Mobile & PC) ==================== */
  var chartModal = document.createElement("div");
  chartModal.className = "chart-modal";
  chartModal.setAttribute("role", "dialog");
  chartModal.setAttribute("aria-modal", "true");
  chartModal.setAttribute("aria-hidden", "true");
  chartModal.innerHTML =
    '<div class="chart-modal-panel">' +
      '<div class="chart-modal-bar">' +
        '<div class="chart-modal-title" id="cmTitle">图表放大查看</div>' +
        '<div class="chart-modal-controls">' +
          '<button type="button" class="cm-btn" id="cmZoomOut" aria-label="缩小">−</button>' +
          '<button type="button" class="cm-btn" id="cmZoomReset" aria-label="重置缩放">100%</button>' +
          '<button type="button" class="cm-btn" id="cmZoomIn" aria-label="放大">+</button>' +
          '<button type="button" class="cm-btn close" id="cmClose" aria-label="关闭">✕</button>' +
        "</div>" +
      "</div>" +
      '<div class="chart-modal-viewport" id="cmViewport">' +
        '<div class="chart-modal-stage" id="cmStage"></div>' +
      "</div>" +
      '<div class="chart-modal-tip">矢量无损放大 · 手机端可左右拖动或双指缩放 · 点击空白处或按 Esc 关闭</div>' +
    "</div>";
  document.body.appendChild(chartModal);

  var cmTitle = document.getElementById("cmTitle");
  var cmStage = document.getElementById("cmStage");
  var cmViewport = document.getElementById("cmViewport");
  var cmZoomReset = document.getElementById("cmZoomReset");
  var cmScale = 1;
  var cmBaseWidth = 960;

  function applyCmScale(nextScale) {
    cmScale = Math.max(0.8, Math.min(2.6, nextScale));
    cmStage.style.width = Math.round(cmBaseWidth * cmScale) + "px";
    cmZoomReset.textContent = Math.round(cmScale * 100) + "%";
  }

  function openChartModal(svgEl, titleText) {
    var clone = svgEl.cloneNode(true);
    // Avoid duplicate IDs inside the live DOM
    clone.querySelectorAll("[id]").forEach(function (el) { el.removeAttribute("id"); });
    cmStage.innerHTML = "";
    cmStage.appendChild(clone);
    cmTitle.textContent = titleText || "图表放大查看";

    var vb = (svgEl.getAttribute("viewBox") || "").trim().split(/\s+/);
    var naturalW = vb.length === 4 ? parseFloat(vb[2]) : 960;
    var isMobile = window.innerWidth <= 900;
    // On mobile, default to crisp readable width (at least 780px for wide charts, 560px for compact charts)
    cmBaseWidth = isMobile
      ? Math.max(naturalW >= 800 ? 820 : 580, window.innerWidth * 1.45)
      : Math.min(1180, Math.max(naturalW, window.innerWidth * 0.78));
    applyCmScale(1);

    chartModal.classList.add("open");
    chartModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    cmViewport.scrollLeft = 0;
    cmViewport.scrollTop = 0;
  }

  function closeChartModal() {
    chartModal.classList.remove("open");
    chartModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  document.getElementById("cmZoomIn").addEventListener("click", function () { applyCmScale(cmScale + 0.25); });
  document.getElementById("cmZoomOut").addEventListener("click", function () { applyCmScale(cmScale - 0.25); });
  cmZoomReset.addEventListener("click", function () { applyCmScale(1); });
  document.getElementById("cmClose").addEventListener("click", closeChartModal);
  chartModal.addEventListener("click", function (e) {
    if (e.target === chartModal) closeChartModal();
  });

  // Attach click-to-zoom to every SVG chart box across Part A, B, C
  document.querySelectorAll(".chart-box").forEach(function (box) {
    var svg = box.querySelector("svg");
    if (!svg) return;
    box.classList.add("zoomable");
    var hint = document.createElement("span");
    hint.className = "chart-zoom-hint";
    hint.textContent = "⤢ 放大查看";
    box.appendChild(hint);

    box.addEventListener("click", function () {
      var label =
        svg.getAttribute("aria-label") ||
        (box.closest(".screen") && box.closest(".screen").getAttribute("data-nav-title")) ||
        "图表放大查看";
      openChartModal(svg, label);
    });
  });

  /* ==================== Live Free Stock Quote Fetcher (NASDAQ: ANT) ==================== */
  var antBar = document.getElementById("antLiveBar");
  if (antBar) {
    var priceEl = document.getElementById("antLivePrice");
    var diffEl = document.getElementById("antLiveDiff");
    var statusEl = document.getElementById("antLiveStatus");
    var refreshBtn = document.getElementById("antRefreshBtn");
    var ipoPrice = parseFloat(antBar.getAttribute("data-ipo")) || 83.0;

    function applyAntQuote(price, label) {
      if (!isFinite(price) || price <= 0) return;
      var pct = ((price - ipoPrice) / ipoPrice) * 100;
      var isBelow = price < ipoPrice;
      priceEl.textContent = "$" + price.toFixed(2);
      diffEl.textContent = (pct >= 0 ? "+" : "") + pct.toFixed(2) + "% vs $" + ipoPrice + " 发行价 · " + (isBelow ? "已破发" : "高于发行价");
      diffEl.className = "lq-diff " + (isBelow ? "below" : "above");
      statusEl.textContent = label;

      // Sync SVG live marker position ($70 -> x=308, $116 -> x=542)
      var marker = document.getElementById("antLiveMarker");
      var svgText = document.getElementById("antLiveSvgText");
      if (marker && svgText) {
        var clamped = Math.max(70, Math.min(116, price));
        var xPos = 308 + ((clamped - 70) / 46) * 234;
        marker.setAttribute("transform", "translate(" + xPos.toFixed(1) + ", 68)");
        svgText.textContent = "$" + price.toFixed(2);
      }
    }

    function fetchWithTimeout(url, ms) {
      return new Promise(function (resolve, reject) {
        var timer = setTimeout(function () { reject(new Error("timeout")); }, ms);
        fetch(url, { cache: "no-store" })
          .then(function (r) {
            clearTimeout(timer);
            if (!r.ok) throw new Error("http " + r.status);
            return r.text();
          })
          .then(resolve)
          .catch(function (err) {
            clearTimeout(timer);
            reject(err);
          });
      });
    }

    function parseYahooJson(text) {
      var json = JSON.parse(text);
      var meta = json && json.chart && json.chart.result && json.chart.result[0] && json.chart.result[0].meta;
      if (!meta || !meta.regularMarketPrice) return null;
      var d = meta.regularMarketTime ? new Date(meta.regularMarketTime * 1000) : new Date();
      var stamp = (d.getMonth() + 1) + "-" + pad(d.getDate()) + " " + pad(d.getHours()) + ":" + pad(d.getMinutes());
      return { price: Number(meta.regularMarketPrice), label: "LIVE 实时 · Yahoo (" + stamp + ")" };
    }

    function parseStooqCsv(text) {
      var lines = String(text || "").trim().split(/\r?\n/);
      if (lines.length < 2) return null;
      var cols = lines[1].split(",");
      // Symbol,Date,Time,Open,High,Low,Close,Volume
      var close = parseFloat(cols[6]);
      if (!isFinite(close) || close <= 0) return null;
      return { price: close, label: "LIVE 实时 · Stooq (" + (cols[1] || "") + ")" };
    }

    function refreshAntQuote(manual) {
      if (manual) {
        statusEl.textContent = "正在拉取实时行情…";
        refreshBtn.disabled = true;
      }
      var yahooDirect = "https://query1.finance.yahoo.com/v8/finance/chart/ANT?interval=1d&range=5d";
      var yahooCors = "https://api.allorigins.win/raw?url=" + encodeURIComponent(yahooDirect);
      var stooqCors = "https://api.allorigins.win/raw?url=" + encodeURIComponent("https://stooq.com/q/l/?s=ant.us&f=sd2t2ohlcv&h&e=csv");

      fetchWithTimeout(yahooCors, 5500)
        .then(function (txt) {
          var parsed = parseYahooJson(txt);
          if (parsed) return parsed;
          throw new Error("no yahoo cors data");
        })
        .catch(function () {
          return fetchWithTimeout(stooqCors, 5500).then(function (txt) {
            var parsed = parseStooqCsv(txt);
            if (parsed) return parsed;
            throw new Error("no stooq data");
          });
        })
        .catch(function () {
          return fetchWithTimeout(yahooDirect, 4000).then(function (txt) {
            var parsed = parseYahooJson(txt);
            if (parsed) return parsed;
            throw new Error("no direct yahoo");
          });
        })
        .then(function (res) {
          applyAntQuote(res.price, res.label);
        })
        .catch(function () {
          if (manual) {
            statusEl.textContent = "11-24 破发收盘快照（离线/受限时点击右侧直达行情）";
          }
        })
        .finally(function () {
          refreshBtn.disabled = false;
        });
    }

    refreshBtn.addEventListener("click", function () { refreshAntQuote(true); });
    // Auto-fetch live quote on page load
    refreshAntQuote(false);
  }

  /* ==================== Subtle Cursor Light Sheen on Cards ==================== */
  if (!prefersReducedMotion) {
    document.querySelectorAll(".card").forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty("--mx", (e.clientX - r.left).toFixed(1) + "px");
        card.style.setProperty("--my", (e.clientY - r.top).toFixed(1) + "px");
      });
    });
  }

  /* ==================== 3D Rotating Fibonacci Cobalt Dot-Sphere (Cover Art) ==================== */
  var canvas = document.getElementById("halftoneCanvas");
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var size = 680;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    // Build 520 evenly distributed points on a 3D unit sphere (Fibonacci lattice)
    var pts = [];
    var count = 520;
    var golden = Math.PI * (3 - Math.sqrt(5));
    for (var i = 0; i < count; i++) {
      var y = 1 - (i / (count - 1)) * 2;
      var rAtY = Math.sqrt(1 - y * y);
      var theta = golden * i;
      pts.push({
        x: Math.cos(theta) * rAtY,
        y: y,
        z: Math.sin(theta) * rAtY
      });
    }

    var cx = size * 0.52;
    var cy = size * 0.5;
    var radius = size * 0.34;
    var rotY = 0;
    var rotX = 0.24;
    var targetMouseX = 0;
    var targetMouseY = 0;
    var smoothX = 0;
    var smoothY = 0;

    function draw3DSphere() {
      ctx.clearRect(0, 0, size, size);

      // Soft ambient blue core aura
      var glow = ctx.createRadialGradient(
        cx + radius * 0.22 + smoothX * 0.6,
        cy + radius * 0.22 + smoothY * 0.6,
        radius * 0.1,
        cx,
        cy,
        radius * 1.15
      );
      glow.addColorStop(0, "rgba(29, 78, 216, 0.14)");
      glow.addColorStop(0.55, "rgba(59, 130, 246, 0.05)");
      glow.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.15, 0, Math.PI * 2);
      ctx.fill();

      // Delicate architectural orbital rings
      ctx.save();
      ctx.strokeStyle = "rgba(148, 163, 184, 0.3)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx + smoothX * 0.25, cy + smoothY * 0.25, radius * 1.12, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = "rgba(37, 99, 235, 0.24)";
      ctx.lineWidth = 1.25;
      ctx.beginPath();
      ctx.arc(cx + smoothX * 0.4, cy + smoothY * 0.4, radius * 1.24, rotY * 0.6, rotY * 0.6 + 2.4);
      ctx.stroke();

      ctx.strokeStyle = "rgba(148, 163, 184, 0.2)";
      ctx.setLineDash([3, 6]);
      ctx.beginPath();
      ctx.ellipse(cx + smoothX * 0.3, cy + smoothY * 0.3, radius * 1.32, radius * 0.46, -0.35, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      var cosY = Math.cos(rotY + smoothX * 0.012);
      var sinY = Math.sin(rotY + smoothX * 0.012);
      var cosX = Math.cos(rotX + smoothY * 0.01);
      var sinX = Math.sin(rotX + smoothY * 0.01);

      var projected = [];
      for (var k = 0; k < pts.length; k++) {
        var p = pts[k];
        var x1 = p.x * cosY - p.z * sinY;
        var z1 = p.x * sinY + p.z * cosY;
        var y2 = p.y * cosX - z1 * sinX;
        var z2 = p.y * sinX + z1 * cosX;
        projected.push({ x: x1, y: y2, z: z2 });
      }
      // Back-to-front depth sort
      projected.sort(function (a, b) { return a.z - b.z; });

      for (var j = 0; j < projected.length; j++) {
        var q = projected[j];
        var depth = (q.z + 1) * 0.5; // 0 (back) -> 1 (front)
        var persp = 0.86 + depth * 0.22;
        var px = cx + q.x * radius * persp + smoothX * (0.2 + depth * 0.5);
        var py = cy + q.y * radius * persp + smoothY * (0.2 + depth * 0.5);

        // Directional halftone shading: light from top-left, deep cobalt on bottom-right front
        var shade = Math.max(0, Math.min(1, (q.x * 0.5 + q.y * 0.5 + 0.55) * 0.65 + depth * 0.35));
        var dotR = (0.7 + shade * 3.1) * (0.55 + depth * 0.55);

        if (depth > 0.56 && shade > 0.55) {
          ctx.fillStyle = "rgba(29, 78, 216, " + (0.42 + depth * 0.5).toFixed(2) + ")";
        } else if (depth > 0.32) {
          ctx.fillStyle = "rgba(59, 130, 246, " + (0.2 + depth * 0.42).toFixed(2) + ")";
        } else {
          ctx.fillStyle = "rgba(148, 163, 184, " + (0.14 + depth * 0.28).toFixed(2) + ")";
        }

        ctx.beginPath();
        ctx.arc(px, py, dotR, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    draw3DSphere();

    if (!prefersReducedMotion) {
      window.addEventListener("mousemove", function (e) {
        targetMouseX = ((e.clientX / window.innerWidth) - 0.5) * 18;
        targetMouseY = ((e.clientY / window.innerHeight) - 0.5) * 18;
      });
      function loop() {
        rotY += 0.0042;
        smoothX += (targetMouseX - smoothX) * 0.06;
        smoothY += (targetMouseY - smoothY) * 0.06;
        draw3DSphere();
        window.requestAnimationFrame(loop);
      }
      window.requestAnimationFrame(loop);
    }
  }
})();
