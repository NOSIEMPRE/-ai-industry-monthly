/* ==========================================================================
   High-Value Editorial SVG Charts (Blue / White / Gray Portfolio Style)
   Menlo Ventures (Enterprise & Healthcare/Pharma 2026.11) · a16z B2A (2026.11) · Sequoia · News Micro-Charts
   Zero external dependencies — 100% offline & GitHub Pages ready
   ========================================================================== */

window.MONTHLY_CHARTS = {
  /* ==================== PART A: NEWS VISUAL MICRO-CHARTS (Replacing Bulky Number Cards) ==================== */

  a1Valuation: function () {
    // Price axis mapped linearly from $70 (x=308) to $116 (x=542) -> 5.087px per dollar
    return `
      <svg viewBox="0 0 560 128" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Anthropic IPO 估值跃迁与破发价格区间">
        <rect width="560" height="128" rx="10" fill="#F8FAFC" stroke="#E2E8F0"/>
        <!-- Left: Valuation leap -->
        <text x="16" y="22" font-size="10.5" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#64748B">10 个月估值跃迁 (≈3.9×)</text>
        <text x="16" y="45" font-size="11" fill="#475569">年初私募</text>
        <rect x="76" y="34" width="142" height="14" rx="4" fill="#E2E8F0"/>
        <rect class="svg-bar-grow" x="76" y="34" width="36" height="14" rx="4" fill="#94A3B8"/>
        <text x="224" y="45" font-size="11" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#475569">$380B</text>

        <text x="16" y="71" font-size="11" font-weight="700" fill="#0F172A">IPO 发行</text>
        <rect x="76" y="60" width="142" height="14" rx="4" fill="#DBEAFE"/>
        <rect class="svg-bar-grow" style="transition-delay:0.1s" x="76" y="60" width="142" height="14" rx="4" fill="#1D4ED8"/>
        <text x="224" y="71" font-size="11.5" font-family="IBM Plex Mono,monospace" font-weight="800" fill="#1D4ED8">≈$1.5T</text>

        <text x="16" y="102" font-size="10.5" fill="#64748B">募资额对比：Anthropic <tspan font-weight="800" fill="#1D4ED8">$81.3B</tspan> &gt; SpaceX 6月 <tspan font-weight="700" fill="#475569">$75B</tspan></text>

        <!-- Divider -->
        <line x1="286" y1="16" x2="286" y2="112" stroke="#E2E8F0"/>

        <!-- Right: IPO Price Range Track ($70 -> $116) -->
        <text x="302" y="22" font-size="10.5" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#64748B">首周股价区间与发行价基准 (USD)</text>
        <!-- Below-IPO zone shading ($70-$83) -->
        <rect x="308" y="60" width="66" height="16" rx="4" fill="#E2E8F0"/>
        <line x1="308" y1="68" x2="542" y2="68" stroke="#CBD5E1" stroke-width="2.5" stroke-linecap="round"/>

        <!-- Intraday low 75.61 (x=337) -->
        <circle cx="337" cy="68" r="4" fill="#64748B"/>
        <text x="330" y="92" text-anchor="middle" font-size="9.5" font-family="IBM Plex Mono,monospace" fill="#64748B">$75.6</text>
        <text x="330" y="105" text-anchor="middle" font-size="9" fill="#94A3B8">盘中低</text>

        <!-- IPO line $83 (x=374) -->
        <line x1="374" y1="54" x2="374" y2="82" stroke="#0F172A" stroke-width="1.8" stroke-dasharray="2 2"/>
        <text x="386" y="92" text-anchor="middle" font-size="10" font-family="IBM Plex Mono,monospace" font-weight="800" fill="#0F172A">$83 发行</text>

        <!-- Day 1 Close $97 (x=445) -->
        <circle cx="445" cy="68" r="4" fill="#60A5FA"/>
        <text x="445" y="54" text-anchor="middle" font-size="9.5" font-family="IBM Plex Mono,monospace" fill="#3B82F6">$97</text>
        <text x="445" y="92" text-anchor="middle" font-size="9" fill="#64748B">首日收</text>

        <!-- Peak $115.1 (x=537) -->
        <circle cx="534" cy="68" r="4" fill="#93C5FD"/>
        <text x="528" y="54" text-anchor="middle" font-size="9.5" font-family="IBM Plex Mono,monospace" fill="#64748B">$115.1</text>
        <text x="528" y="92" text-anchor="middle" font-size="9" fill="#64748B">高点</text>

        <!-- Live/Latest Marker (default $81.91 -> x=368.6, dynamically updated by live quote fetcher) -->
        <g id="antLiveMarker" transform="translate(368.6, 68)">
          <circle r="7.5" fill="rgba(29, 78, 216, 0.2)"/>
          <circle r="4.8" fill="#1D4ED8" stroke="#FFFFFF" stroke-width="1.5"/>
          <text id="antLiveSvgText" y="-14" text-anchor="middle" font-size="10.5" font-family="IBM Plex Mono,monospace" font-weight="800" fill="#1D4ED8">$81.91</text>
        </g>

        <text x="302" y="118" font-size="9.2" fill="#94A3B8">灰区为破发区间（&lt;$83）；蓝点自动对接实时股价</text>
      </svg>
    `;
  },

  a2Round: function () {
    return `
      <svg viewBox="0 0 560 124" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="OpenAI 估值演变与募资目标下调">
        <rect width="560" height="124" rx="10" fill="#F8FAFC" stroke="#E2E8F0"/>
        <!-- Left: Valuation -->
        <text x="16" y="22" font-size="10.5" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#64748B">估值路径 (USD)</text>
        <text x="16" y="45" font-size="10.5" fill="#64748B">3 月轮</text>
        <rect class="svg-bar-grow" x="72" y="35" width="96" height="12" rx="4" fill="#94A3B8"/>
        <text x="174" y="45" font-size="10.5" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#475569">$852B</text>

        <text x="16" y="71" font-size="10.5" font-weight="700" fill="#1D4ED8">11月确认</text>
        <rect class="svg-bar-grow" style="transition-delay:0.08s" x="72" y="61" width="142" height="12" rx="4" fill="#1D4ED8"/>
        <text x="220" y="71" font-size="11" font-family="IBM Plex Mono,monospace" font-weight="800" fill="#1D4ED8">$1.25T</text>

        <text x="16" y="97" font-size="10.5" fill="#64748B">最初寻求</text>
        <rect x="72" y="87" width="159" height="12" rx="4" fill="none" stroke="#94A3B8" stroke-dasharray="3 2"/>
        <text x="236" y="97" font-size="10.5" font-family="IBM Plex Mono,monospace" fill="#64748B">$1.40T</text>

        <line x1="286" y1="16" x2="286" y2="108" stroke="#E2E8F0"/>

        <!-- Right: Round Size contraction -->
        <text x="302" y="22" font-size="10.5" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#64748B">本轮募资规模收缩 (USD)</text>
        <text x="302" y="45" font-size="10.5" fill="#64748B">最初计划</text>
        <rect x="360" y="35" width="145" height="12" rx="4" fill="none" stroke="#94A3B8" stroke-dasharray="3 2"/>
        <text x="512" y="45" font-size="10.5" font-family="IBM Plex Mono,monospace" fill="#64748B">$30B+</text>

        <text x="302" y="71" font-size="10.5" fill="#475569">调整目标</text>
        <rect class="svg-bar-grow" style="transition-delay:0.1s" x="360" y="61" width="96" height="12" rx="4" fill="#60A5FA"/>
        <text x="462" y="71" font-size="10.5" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#1D4ED8">≈$20B</text>

        <text x="302" y="97" font-size="10.5" font-weight="700" fill="#0F172A">首笔到账</text>
        <rect class="svg-bar-grow" style="transition-delay:0.18s" x="360" y="87" width="53" height="12" rx="4" fill="#1D4ED8"/>
        <text x="420" y="97" font-size="11" font-family="IBM Plex Mono,monospace" font-weight="800" fill="#1D4ED8">$11B</text>
      </svg>
    `;
  },

  a3Cds: function () {
    return `
      <svg viewBox="0 0 560 124" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="CoreWeave 5年期 CDS 利差与利息缺口对比">
        <rect width="560" height="124" rx="10" fill="#F8FAFC" stroke="#E2E8F0"/>
        <!-- Left: CDS Spread comparison -->
        <text x="16" y="22" font-size="10.5" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#64748B">5 年期 CDS 信用利差对比 (bp)</text>
        <text x="16" y="47" font-size="11" font-weight="700" fill="#0F172A">CoreWeave</text>
        <rect class="svg-bar-grow" x="92" y="36" width="154" height="14" rx="4" fill="#1D4ED8"/>
        <text x="252" y="47" font-size="11" font-family="IBM Plex Mono,monospace" font-weight="800" fill="#1D4ED8">1,289bp</text>

        <text x="16" y="73" font-size="11" fill="#475569">Oracle</text>
        <rect class="svg-bar-grow" style="transition-delay:0.08s" x="92" y="62" width="38" height="14" rx="4" fill="#60A5FA"/>
        <text x="136" y="73" font-size="10.5" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#475569">298bp</text>

        <text x="16" y="99" font-size="11" fill="#475569">NVIDIA</text>
        <rect class="svg-bar-grow" style="transition-delay:0.15s" x="92" y="88" width="18" height="14" rx="4" fill="#94A3B8"/>
        <text x="116" y="99" font-size="10.5" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#64748B">139bp</text>

        <line x1="316" y1="16" x2="316" y2="108" stroke="#E2E8F0"/>

        <!-- Right: Operating profit vs Net Interest -->
        <text x="332" y="22" font-size="10.5" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#64748B">单季利润 vs 净利息（总债 $51.6B）</text>
        <text x="332" y="48" font-size="10.5" fill="#475569">经营利润</text>
        <rect class="svg-bar-grow" style="transition-delay:0.1s" x="392" y="38" width="34" height="13" rx="4" fill="#60A5FA"/>
        <text x="432" y="48" font-size="10.5" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#334155">$2.07亿</text>

        <text x="332" y="74" font-size="10.5" font-weight="700" fill="#0F172A">净利息支出</text>
        <rect class="svg-bar-grow" style="transition-delay:0.18s" x="392" y="64" width="110" height="13" rx="4" fill="#0F296B"/>
        <text x="508" y="74" font-size="10.5" font-family="IBM Plex Mono,monospace" font-weight="800" fill="#0F296B">$8.46亿</text>

        <rect x="332" y="90" width="212" height="22" rx="6" fill="#EFF6FF" stroke="#BFDBFE"/>
        <text x="438" y="105" text-anchor="middle" font-size="10.5" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#1D4ED8">2032 债券收益率突破 &gt;16%</text>
      </svg>
    `;
  },

  a4Impact: function () {
    return `
      <svg viewBox="0 0 560 94" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="美国东南亚算力出口管制传导链路">
        <rect width="560" height="94" rx="10" fill="#F8FAFC" stroke="#E2E8F0"/>
        <g transform="translate(14, 16)">
          <rect width="120" height="62" rx="8" fill="#FFFFFF" stroke="#CBD5E1"/>
          <text x="10" y="21" font-size="9.5" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#1D4ED8">11-16 规则</text>
          <text x="10" y="40" font-size="12" font-weight="800" fill="#0F172A">5 国增设许可</text>
          <text x="10" y="54" font-size="9.5" fill="#64748B">马/新/印/泰/巴</text>
        </g>
        <text x="143" y="51" font-size="14" font-weight="800" fill="#2563EB">→</text>
        <g transform="translate(158, 16)">
          <rect width="124" height="62" rx="8" fill="#EFF6FF" stroke="#93C5FD"/>
          <text x="10" y="21" font-size="9.5" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#1D4ED8">11-19 生效</text>
          <text x="10" y="40" font-size="12" font-weight="800" fill="#0F172A">远程云算力纳管</text>
          <text x="10" y="54" font-size="9.5" fill="#475569">封堵海外租卡</text>
        </g>
        <text x="291" y="51" font-size="14" font-weight="800" fill="#2563EB">→</text>
        <g transform="translate(306, 16)">
          <rect width="114" height="62" rx="8" fill="#FFFFFF" stroke="#CBD5E1"/>
          <text x="10" y="21" font-size="9.5" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#0F296B">直接冲击</text>
          <text x="10" y="40" font-size="12" font-weight="800" fill="#0F172A">$150M 取消</text>
          <text x="10" y="54" font-size="9.5" fill="#64748B">传月之暗面 B300</text>
        </g>
        <text x="429" y="51" font-size="14" font-weight="800" fill="#2563EB">→</text>
        <g transform="translate(444, 16)">
          <rect width="102" height="62" rx="8" fill="#1D4ED8"/>
          <text x="10" y="21" font-size="9.5" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#BFDBFE">11-23 执法</text>
          <text x="10" y="40" font-size="12" font-weight="800" fill="#FFFFFF">7 家实体清单</text>
          <text x="10" y="54" font-size="9.5" fill="#DBEAFE">含 Megaspeed/Apex</text>
        </g>
      </svg>
    `;
  },

  a5ChinaCap: function () {
    // Donut for 27% share (circumference = 2 * pi * 30 ≈ 188.5; 27% ≈ 50.9)
    return `
      <svg viewBox="0 0 560 118" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="DeepSeek 单轮占全球创投 27% 与国内大模型资本化路径">
        <rect width="560" height="118" rx="10" fill="#F8FAFC" stroke="#E2E8F0"/>
        <!-- Left Donut -->
        <g transform="translate(64, 59)">
          <circle r="32" fill="none" stroke="#DBEAFE" stroke-width="11"/>
          <circle r="32" fill="none" stroke="#1D4ED8" stroke-width="11" stroke-dasharray="54.3 201" transform="rotate(-90)"/>
          <text y="4" text-anchor="middle" font-size="14" font-family="IBM Plex Mono,monospace" font-weight="800" fill="#0F172A">27%</text>
        </g>
        <text x="114" y="38" font-size="11" font-weight="800" fill="#0F172A">DeepSeek 单轮 $15.9B</text>
        <text x="114" y="56" font-size="10.5" fill="#475569">占 10 月全球创投 $59B 的 27%</text>
        <text x="114" y="74" font-size="10" fill="#64748B">新增 31 名股东 · 产业资本入局</text>
        <text x="114" y="92" font-size="9.5" font-family="IBM Plex Mono,monospace" fill="#1D4ED8">Crunchbase 记为中国最大创业融资</text>

        <line x1="296" y1="16" x2="296" y2="102" stroke="#E2E8F0"/>

        <!-- Right: China Capitalization Milestones -->
        <text x="312" y="26" font-size="10.5" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#64748B">国内头部模型资本化进程</text>
        <rect x="312" y="38" width="232" height="20" rx="5" fill="#FFFFFF" stroke="#CBD5E1"/>
        <text x="320" y="52" font-size="10.5" font-weight="700" fill="#0F172A">2026.01</text>
        <text x="374" y="52" font-size="10.5" fill="#475569">智谱、MiniMax 登陆港交所 18C</text>

        <rect x="312" y="64" width="232" height="20" rx="5" fill="#EFF6FF" stroke="#93C5FD"/>
        <text x="320" y="78" font-size="10.5" font-weight="700" fill="#1D4ED8">2026.10–11</text>
        <text x="394" y="78" font-size="10.5" fill="#0F172A">DeepSeek 大额私募获产业加持</text>

        <rect x="312" y="90" width="232" height="20" rx="5" fill="#FFFFFF" stroke="#DBEAFE"/>
        <text x="320" y="104" font-size="10.5" font-weight="700" fill="#1D4ED8">2027Q1 传</text>
        <text x="384" y="104" font-size="10.5" fill="#475569">月之暗面筹备赴港 IPO（传 $50B）</text>
      </svg>
    `;
  },

  /* ==================== PART B: INSTITUTIONAL REPORT CHARTS ==================== */

  /**
   * B1: Menlo Ventures (Nov 2026) — The State of Enterprise AI ($176.8B Run Rate + $77.3B App Breakdown)
   */
  menloEnterprise: function () {
    var apps = [
      { name: "Coding 编程", val: 34.0, pct: "44%", col: "#1E3A8A" },
      { name: "Chatbots 办公助手", val: 25.0, pct: "32%", col: "#1D4ED8" },
      { name: "Healthcare 医疗", val: 3.7, pct: "5%", col: "#3B82F6" },
      { name: "Customer 客服", val: 2.7, pct: "3%", col: "#60A5FA" },
      { name: "Legal 法律", val: 1.8, pct: "2%", col: "#64748B" },
      { name: "IT / Sales / Mktg / HR", val: 5.1, pct: "7%", col: "#94A3B8" }
    ];

    var appRows = apps.map(function (a, i) {
      var y = 44 + i * 27;
      var w = Math.max(18, (a.val / 34.0) * 235);
      return `
        <g transform="translate(492, ${y})">
          <text x="0" y="12" font-size="11.5" font-weight="600" fill="#1E293B">${a.name}</text>
          <rect x="136" y="2" width="235" height="12" rx="4" fill="#E2E8F0"/>
          <rect class="svg-bar-grow" style="transition-delay:${(i * 0.06).toFixed(2)}s" x="136" y="2" width="${w.toFixed(1)}" height="12" rx="4" fill="${a.col}"/>
          <text x="380" y="12" font-size="11" font-family="IBM Plex Mono,monospace" font-weight="700" fill="${a.col}">$${a.val.toFixed(1)}B (${a.pct})</text>
        </g>
      `;
    }).join("");

    return `
      <svg viewBox="0 0 960 238" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Menlo Ventures 2026年11月企业 AI 支出与细分结构图">
        <rect width="960" height="238" rx="12" fill="#F8FAFC"/>
        <!-- Left Panel: Spend Explosion 2025 -> 2026 -->
        <text x="24" y="26" font-size="11.5" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#0F172A">企业 AI 年化支出跃迁（5.4× YoY）</text>

        <!-- 2025 bar -->
        <rect x="46" y="148" width="68" height="26" rx="5" fill="#94A3B8"/>
        <text x="80" y="141" text-anchor="middle" font-size="12" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#475569">$33B</text>
        <text x="80" y="190" text-anchor="middle" font-size="11" fill="#64748B">2025 全年</text>

        <!-- Growth Arrow -->
        <path d="M126 140 Q162 84 196 66" fill="none" stroke="#2563EB" stroke-width="2" stroke-dasharray="4 3"/>
        <polygon points="200,63 189,64 194,72" fill="#2563EB"/>
        <rect x="130" y="84" width="52" height="20" rx="10" fill="#EFF6FF" stroke="#93C5FD"/>
        <text x="156" y="98" text-anchor="middle" font-size="10.5" font-family="IBM Plex Mono,monospace" font-weight="800" fill="#1D4ED8">5.4×</text>

        <!-- 2026 stacked bar: Infra $99.5B + Apps $77.3B = $176.8B (height 132px) -->
        <rect x="208" y="42" width="84" height="58" rx="5" fill="#3B82F6"/>
        <text x="250" y="68" text-anchor="middle" font-size="10.5" font-weight="700" fill="#FFFFFF">应用层</text>
        <text x="250" y="83" text-anchor="middle" font-size="10.5" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#DBEAFE">$77.3B</text>

        <rect x="208" y="102" width="84" height="72" rx="5" fill="#0F296B"/>
        <text x="250" y="135" text-anchor="middle" font-size="10.5" font-weight="700" fill="#FFFFFF">基础设施</text>
        <text x="250" y="150" text-anchor="middle" font-size="10.5" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#93C5FD">$99.5B</text>

        <text x="250" y="34" text-anchor="middle" font-size="13" font-family="IBM Plex Mono,monospace" font-weight="800" fill="#1D4ED8">$176.8B</text>
        <text x="250" y="190" text-anchor="middle" font-size="11" font-weight="700" fill="#0F172A">2026.09 年化</text>

        <!-- Mini callout cards inside left panel -->
        <g transform="translate(316, 44)">
          <rect width="144" height="44" rx="8" fill="#FFFFFF" stroke="#DBEAFE"/>
          <text x="12" y="21" font-size="14" font-family="IBM Plex Mono,monospace" font-weight="800" fill="#1D4ED8">80%</text>
          <text x="56" y="20" font-size="10.5" font-weight="700" fill="#0F172A">Token 用量</text>
          <text x="12" y="36" font-size="10" fill="#64748B">来自自主 AI Agents</text>
        </g>
        <g transform="translate(316, 96)">
          <rect width="144" height="44" rx="8" fill="#FFFFFF" stroke="#E2E8F0"/>
          <text x="12" y="21" font-size="14" font-family="IBM Plex Mono,monospace" font-weight="800" fill="#0F296B">55%</text>
          <text x="56" y="20" font-size="10.5" font-weight="700" fill="#0F172A">净新增预算</text>
          <text x="12" y="36" font-size="10" fill="#64748B">仅 22% 迁自旧软件</text>
        </g>
        <g transform="translate(316, 148)">
          <rect width="144" height="44" rx="8" fill="#EFF6FF" stroke="#BFDBFE"/>
          <text x="12" y="21" font-size="14" font-family="IBM Plex Mono,monospace" font-weight="800" fill="#1D4ED8">69%</text>
          <text x="56" y="20" font-size="10.5" font-weight="700" fill="#0F172A">三巨头份额</text>
          <text x="12" y="36" font-size="10" fill="#475569">Anthropic/OpenAI/Google</text>
        </g>

        <text x="24" y="220" font-size="10.5" fill="#64748B">财务预算偏差：企业原计划扩支 1.9×，实际部署支出放大至 <tspan font-weight="700" fill="#1D4ED8">4.7×</tspan></text>

        <!-- Vertical divider -->
        <line x1="474" y1="18" x2="474" y2="220" stroke="#E2E8F0"/>

        <!-- Right Panel: Application Breakdown -->
        <text x="492" y="26" font-size="11.5" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#0F172A">企业应用层 $77.3B 细分支出分布（编程 + 助手占 76%）</text>
        ${appRows}
        <text x="492" y="220" font-size="10.5" fill="#64748B">垂直领域中医疗（$3.7B，同比 2.5×）领跑，传统 CRM / HRIS / ERP 尚未出现大规模替代</text>
      </svg>
    `;
  },

  /**
   * B2: Menlo Ventures (Nov 2026) — The State of AI in Healthcare (Pharma 23x Boom + R&D Expectations)
   */
  menloPharma: function () {
    return `
      <svg viewBox="0 0 960 236" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Menlo Ventures 2026年11月医疗与制药 AI 报告图表">
        <rect width="960" height="236" rx="12" fill="#F8FAFC"/>
        <!-- Left Panel: $3.7B Healthcare Breakdown & 23x Pharma Boom -->
        <text x="24" y="26" font-size="11.5" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#0F172A">医疗 AI $3.7B 支出分布（2.5× YoY，超越法律成最大垂直赛道）</text>

        <!-- Stacked Bar: Providers $2.9B (77%) | Biopharma $0.7B (19%) | Payers $0.15B (4%) -->
        <g transform="translate(24, 42)">
          <rect class="svg-bar-grow" x="0" y="0" width="322" height="28" rx="5" fill="#1D4ED8"/>
          <text x="161" y="18" text-anchor="middle" font-size="11" font-weight="700" fill="#FFFFFF">医疗机构 Providers · $2.9B (77%)</text>

          <rect class="svg-bar-grow" style="transition-delay:0.08s" x="325" y="0" width="84" height="28" rx="5" fill="#0F296B"/>
          <text x="367" y="18" text-anchor="middle" font-size="10.5" font-family="IBM Plex Mono,monospace" font-weight="800" fill="#93C5FD">$700M</text>

          <rect class="svg-bar-grow" style="transition-delay:0.15s" x="412" y="0" width="22" height="28" rx="4" fill="#94A3B8"/>
        </g>
        <text x="24" y="85" font-size="10.5" fill="#475569">■ 医疗机构 $2.9B · <tspan font-weight="800" fill="#0F296B">■ 制药与生命科学 $700M（同比暴涨 23×）</tspan> · ■ 医保支付方 $150M</text>

        <!-- Category Shifts -->
        <text x="24" y="114" font-size="11" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#64748B">细分场景分化：浅层转录被巨头收割，高增长转向研发与临床</text>
        <g transform="translate(24, 126)">
          <text x="0" y="13" font-size="11" font-weight="700" fill="#0F296B">制药研发外部平台/数据</text>
          <rect x="148" y="2" width="190" height="12" rx="4" fill="#DBEAFE"/>
          <rect class="svg-bar-grow" style="transition-delay:0.1s" x="148" y="2" width="120" height="12" rx="4" fill="#0F296B"/>
          <text x="346" y="13" font-size="11" font-family="IBM Plex Mono,monospace" font-weight="800" fill="#0F296B">$600M (23×)</text>

          <text x="0" y="38" font-size="11" font-weight="700" fill="#1D4ED8">临床助手 Clinical Copilot</text>
          <rect x="148" y="27" width="190" height="12" rx="4" fill="#DBEAFE"/>
          <rect class="svg-bar-grow" style="transition-delay:0.16s" x="148" y="27" width="110" height="12" rx="4" fill="#1D4ED8"/>
          <text x="346" y="38" font-size="11" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#1D4ED8">$550M (5.5×)</text>

          <text x="0" y="63" font-size="11" fill="#475569">患者互动 Patient Engage</text>
          <rect x="148" y="52" width="190" height="12" rx="4" fill="#E2E8F0"/>
          <rect class="svg-bar-grow" style="transition-delay:0.22s" x="148" y="52" width="90" height="12" rx="4" fill="#3B82F6"/>
          <text x="346" y="63" font-size="11" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#3B82F6">$450M</text>

          <text x="0" y="88" font-size="11" fill="#64748B">病历转录（巨头占 46%）</text>
          <rect x="148" y="77" width="190" height="12" rx="4" fill="#E2E8F0"/>
          <rect class="svg-bar-grow" style="transition-delay:0.28s" x="148" y="77" width="190" height="12" rx="4" fill="#94A3B8"/>
          <text x="346" y="88" font-size="11" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#64748B">$950M (红海)</text>
        </g>

        <!-- Vertical divider -->
        <line x1="478" y1="18" x2="478" y2="218" stroke="#E2E8F0"/>

        <!-- Right Panel: Pharma Production Scale-up & R&D Timelines -->
        <text x="498" y="26" font-size="11.5" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#0F172A">药企 AI 规模化落地与研发提速共识（N = 550 高管）</text>

        <!-- Scale Deployment Jump 15% -> 51% -->
        <g transform="translate(498, 42)">
          <rect width="438" height="58" rx="9" fill="#FFFFFF" stroke="#DBEAFE"/>
          <text x="14" y="21" font-size="11" font-weight="700" fill="#0F172A">大型药企规模化生产部署比例（At-Scale Deployment）</text>
          <text x="14" y="44" font-size="10.5" fill="#64748B">去年</text>
          <rect x="46" y="34" width="54" height="13" rx="4" fill="#CBD5E1"/>
          <text x="106" y="45" font-size="11" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#64748B">15%</text>
          <text x="144" y="45" font-size="12" font-weight="800" fill="#2563EB">→</text>
          <text x="166" y="44" font-size="10.5" font-weight="700" fill="#1D4ED8">2026</text>
          <rect class="svg-bar-grow" x="204" y="34" width="166" height="13" rx="4" fill="#1D4ED8"/>
          <text x="378" y="45" font-size="12" font-family="IBM Plex Mono,monospace" font-weight="800" fill="#1D4ED8">51%</text>
        </g>

        <!-- R&D Consensus Bars -->
        <g transform="translate(498, 114)">
          <text x="0" y="13" font-size="11" fill="#334155">预期 5 年内迎来首个 AI 发现药物获批</text>
          <rect x="234" y="2" width="154" height="12" rx="4" fill="#DBEAFE"/>
          <rect class="svg-bar-grow" style="transition-delay:0.12s" x="234" y="2" width="143" height="12" rx="4" fill="#1E3A8A"/>
          <text x="396" y="13" font-size="11.5" font-family="IBM Plex Mono,monospace" font-weight="800" fill="#1E3A8A">93%</text>

          <text x="0" y="38" font-size="11" fill="#334155">当前项目已被 AI 缩短数月以上</text>
          <rect x="234" y="27" width="154" height="12" rx="4" fill="#DBEAFE"/>
          <rect class="svg-bar-grow" style="transition-delay:0.18s" x="234" y="27" width="137" height="12" rx="4" fill="#1D4ED8"/>
          <text x="396" y="38" font-size="11.5" font-family="IBM Plex Mono,monospace" font-weight="800" fill="#1D4ED8">89%</text>

          <text x="0" y="63" font-size="11" fill="#334155">预期 3–5 年内研发周期缩短 ≥1 年</text>
          <rect x="234" y="52" width="154" height="12" rx="4" fill="#DBEAFE"/>
          <rect class="svg-bar-grow" style="transition-delay:0.24s" x="234" y="52" width="129" height="12" rx="4" fill="#3B82F6"/>
          <text x="396" y="63" font-size="11.5" font-family="IBM Plex Mono,monospace" font-weight="800" fill="#3B82F6">84%</text>
        </g>

        <!-- Procurement friction callout -->
        <rect x="498" y="192" width="438" height="28" rx="7" fill="#EFF6FF" stroke="#BFDBFE"/>
        <text x="512" y="210" font-size="10.5" fill="#1E3A8A"><tspan font-weight="800">买方验证趋严：</tspan>医疗系统平均采购周期由 7→10 个月，门诊由 5→11 个月</text>
      </svg>
    `;
  },

  /**
   * B3: a16z (Nov 2026) — How to Win Bots and Influence Purchases (B2A Economy) + Consumer Paywall
   */
  a16zB2A: function () {
    return `
      <svg viewBox="0 0 960 232" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="a16z B2A 代理经济 11307 次实测数据图">
        <rect width="960" height="232" rx="12" fill="#F8FAFC"/>
        <!-- Left: Checkout Conversion Cliff & Recommendation Concentration -->
        <text x="24" y="26" font-size="11.5" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#0F172A">AI Agent 购物实测：结账转化断崖与推荐马太效应（N = 11,307 次执行）</text>

        <!-- Guest Checkout vs Login Wall -->
        <g transform="translate(24, 44)">
          <text x="0" y="13" font-size="11.5" font-weight="700" fill="#0F172A">支持游客结账（Guest Checkout）成功率</text>
          <rect x="0" y="21" width="440" height="18" rx="5" fill="#DBEAFE"/>
          <rect class="svg-bar-grow" x="0" y="21" width="356" height="18" rx="5" fill="#1D4ED8"/>
          <text x="366" y="34" font-size="12" font-family="IBM Plex Mono,monospace" font-weight="800" fill="#1D4ED8">81%</text>
        </g>

        <g transform="translate(24, 92)">
          <text x="0" y="13" font-size="11.5" font-weight="700" fill="#0F172A">强制登录网站（Login-Required）成功率</text>
          <rect x="0" y="21" width="440" height="18" rx="5" fill="#E2E8F0"/>
          <rect x="0" y="21" width="6" height="18" rx="3" fill="#0F172A"/>
          <text x="16" y="34" font-size="12" font-family="IBM Plex Mono,monospace" font-weight="800" fill="#0F172A">0%（100% 购买失败）</text>
        </g>

        <!-- Three B2A Concentration Bars -->
        <g transform="translate(24, 144)">
          <text x="0" y="12" font-size="11" fill="#475569">跨 Agent 推荐重合度</text>
          <rect x="148" y="2" width="230" height="11" rx="4" fill="#E2E8F0"/>
          <rect class="svg-bar-grow" style="transition-delay:0.1s" x="148" y="2" width="168" height="11" rx="4" fill="#2563EB"/>
          <text x="388" y="12" font-size="11" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#1D4ED8">73%</text>

          <text x="0" y="36" font-size="11" fill="#475569">大平台与多品牌零售商占比</text>
          <rect x="148" y="26" width="230" height="11" rx="4" fill="#E2E8F0"/>
          <rect class="svg-bar-grow" style="transition-delay:0.16s" x="148" y="26" width="127" height="11" rx="4" fill="#3B82F6"/>
          <text x="388" y="36" font-size="11" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#2563EB">55%</text>

          <text x="0" y="60" font-size="11" fill="#475569">4 大 Agent 选同一头号商品</text>
          <rect x="148" y="50" width="230" height="11" rx="4" fill="#E2E8F0"/>
          <rect class="svg-bar-grow" style="transition-delay:0.22s" x="148" y="50" width="58" height="11" rx="4" fill="#64748B"/>
          <text x="388" y="60" font-size="11" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#475569">25%</text>
        </g>

        <!-- Vertical divider -->
        <line x1="504" y1="18" x2="504" y2="214" stroke="#E2E8F0"/>

        <!-- Right: Consumer AI Power-User Economy + B2A Playbook -->
        <text x="524" y="26" font-size="11.5" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#0F172A">C 端订阅瓶颈与 B2A 商业化转向（a16z 第 7 版消费报告）</text>

        <!-- Donut: 4.5% paying -->
        <g transform="translate(578, 86)">
          <circle r="34" fill="none" stroke="#E2E8F0" stroke-width="11"/>
          <circle r="34" fill="none" stroke="#1D4ED8" stroke-width="11" stroke-dasharray="14 214" transform="rotate(-90)"/>
          <text y="5" text-anchor="middle" font-size="13" font-family="IBM Plex Mono,monospace" font-weight="800" fill="#1D4ED8">4.5%</text>
        </g>
        <text x="632" y="68" font-size="12" font-weight="800" fill="#0F172A">美国 C 端 AI 订阅付费率仅 ~4.5%</text>
        <text x="632" y="88" font-size="11" fill="#475569">头部 1% 重度用户年支出超 <tspan font-weight="800" fill="#1D4ED8">$900</tspan></text>
        <text x="632" y="106" font-size="10.5" fill="#64748B">纯订阅天花板倒逼平台转向交易抽佣与原生广告</text>

        <!-- 3 Playbook Pills -->
        <rect x="524" y="138" width="412" height="72" rx="10" fill="#FFFFFF" stroke="#DBEAFE"/>
        <text x="540" y="159" font-size="11" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#1D4ED8">商家赢得 B2A 代理流量的三大关键条件</text>
        <text x="540" y="179" font-size="11.5" fill="#334155">1. 结构化商品目录与透明退换货政策，确保 AI 爬虫无障碍解析</text>
        <text x="540" y="198" font-size="11.5" fill="#334155">2. 消除登录墙与结账摩擦，接入开放结账协议与头部聚合平台</text>
      </svg>
    `;
  },

  /**
   * B3: Combined a16z Healthcare Pricing Ladder + Sequoia Service-as-Software Budget Shift
   */
  pricingAndServices: function () {
    return `
      <svg viewBox="0 0 960 222" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="医疗 AI 定价演进与红杉服务即软件预算跃迁">
        <rect width="960" height="222" rx="12" fill="#F8FAFC"/>
        <!-- Left Half: a16z Healthcare Pricing Steps -->
        <text x="24" y="26" font-size="11.5" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#0F172A">a16z 医疗：信息层趋零，收费向 PMPM 与结果迁移</text>

        <rect x="24" y="140" width="96" height="44" rx="8" fill="#FFFFFF" stroke="#CBD5E1"/>
        <text x="72" y="160" text-anchor="middle" font-size="12" font-weight="800" fill="#0F172A">按任务</text>
        <text x="72" y="175" text-anchor="middle" font-size="10" fill="#64748B">单次文书编码</text>

        <rect x="130" y="114" width="96" height="70" rx="8" fill="#FFFFFF" stroke="#93C5FD"/>
        <text x="178" y="142" text-anchor="middle" font-size="12" font-weight="800" fill="#0F172A">按流程</text>
        <text x="178" y="159" text-anchor="middle" font-size="10" fill="#475569">完整院前/理赔</text>

        <rect x="236" y="84" width="96" height="100" rx="8" fill="#EFF6FF" stroke="#60A5FA"/>
        <text x="284" y="124" text-anchor="middle" font-size="12" font-weight="800" fill="#1D4ED8">按病程</text>
        <text x="284" y="142" text-anchor="middle" font-size="10" fill="#334155">诊疗周期打包</text>

        <rect x="342" y="48" width="114" height="136" rx="8" fill="#1D4ED8"/>
        <text x="399" y="96" text-anchor="middle" font-size="12.5" font-weight="800" fill="#FFFFFF">按患者 PMPM</text>
        <text x="399" y="115" text-anchor="middle" font-size="10.5" fill="#DBEAFE">按人头按月订阅</text>
        <text x="399" y="135" text-anchor="middle" font-size="10" fill="#93C5FD">+ 挂钩临床结果</text>

        <text x="24" y="206" font-size="10.5" fill="#64748B">按次收费（FFS）仅保留给消耗稀缺临床资源的实体操作</text>

        <!-- Divider -->
        <line x1="482" y1="18" x2="482" y2="206" stroke="#E2E8F0"/>

        <!-- Right Half: Sequoia Service-as-Software -->
        <text x="504" y="26" font-size="11.5" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#0F172A">红杉：服务即软件切入 ~10× 专业服务外包预算</text>

        <text x="504" y="60" font-size="11.5" fill="#64748B">传统 SaaS 软件座位预算</text>
        <rect class="svg-bar-grow" x="504" y="68" width="76" height="20" rx="5" fill="#94A3B8"/>
        <text x="590" y="82" font-size="11.5" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#475569">1× 基准池</text>

        <text x="504" y="114" font-size="11.5" font-weight="700" fill="#0F172A">Service-as-Software（直接交付法务 / 会计 / 客服 / 部署结果）</text>
        <rect class="svg-bar-grow" style="transition-delay:0.12s" x="504" y="122" width="430" height="26" rx="6" fill="#1D4ED8"/>
        <text x="518" y="139" font-size="11.5" font-family="IBM Plex Mono,monospace" font-weight="700" fill="#FFFFFF">~10× 预算池：服务收入规模 × 软件级毛利率</text>

        <rect x="504" y="162" width="208" height="42" rx="8" fill="#FFFFFF" stroke="#DBEAFE"/>
        <text x="516" y="180" font-size="11" font-weight="700" fill="#1D4ED8">OpenAI Deployment</text>
        <text x="516" y="195" font-size="10" fill="#475569">收购 Northslope 亲自下场交付</text>

        <rect x="724" y="162" width="210" height="42" rx="8" fill="#FFFFFF" stroke="#DBEAFE"/>
        <text x="736" y="180" font-size="11" font-weight="700" fill="#1D4ED8">Legora · 估值 $8.8B</text>
        <text x="736" y="195" font-size="10" fill="#475569">融资 $5.5 亿替代律所外包工时</text>
      </svg>
    `;
  },

  /**
   * C1: Horizontal Bar Charts for US & China November Capital Allocation
   */
  fundingBars: function (items, maxVal, isBlue) {
    var rowH = 38;
    var h = items.length * rowH + 24;
    var color = isBlue ? "#1D4ED8" : "#334155";
    var soft = isBlue ? "#DBEAFE" : "#E2E8F0";

    var rows = items.map(function (it, i) {
      var y = 14 + i * rowH;
      var val = it.value != null ? it.value : it.amount;
      var ratio = Math.min(1, Math.sqrt(val / maxVal));
      var barW = Math.max(24, ratio * 300);
      return `
        <g transform="translate(0, ${y})">
          <text x="0" y="13" font-size="12" font-weight="600" fill="#1E293B">${it.label}</text>
          <rect x="0" y="20" width="330" height="8" rx="4" fill="${soft}"/>
          <rect class="svg-bar-grow" style="transition-delay:${(i * 0.08).toFixed(2)}s" x="0" y="20" width="${barW.toFixed(1)}" height="8" rx="4" fill="${color}"/>
          <text x="342" y="28" font-size="12" font-family="IBM Plex Mono, monospace" font-weight="700" fill="${color}">${it.display}</text>
        </g>
      `;
    }).join("");

    return `<svg viewBox="0 0 430 ${h}" xmlns="http://www.w3.org/2000/svg">${rows}</svg>`;
  },

  /**
   * C1: Compact Global AI Share & Overseas vs China Funding Structure Visual Strip (Replaces 4 Bulky KPI Boxes)
   */
  c1SummaryRibbon: function () {
    return `
      <svg viewBox="0 0 960 92" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="11月投融资核心结构可视化">
        <rect width="960" height="92" rx="12" fill="#FFFFFF" stroke="#E2E8F0"/>
        <!-- Donut: 66% AI share -->
        <g transform="translate(52, 46)">
          <circle r="26" fill="none" stroke="#DBEAFE" stroke-width="8"/>
          <circle r="26" fill="none" stroke="#1D4ED8" stroke-width="8" stroke-dasharray="108 164" transform="rotate(-90)"/>
          <text y="4" text-anchor="middle" font-size="11.5" font-family="IBM Plex Mono,monospace" font-weight="800" fill="#1D4ED8">66%</text>
        </g>
        <text x="92" y="38" font-size="12" font-weight="800" fill="#0F172A">全球创投 AI 占比基准</text>
        <text x="92" y="57" font-size="10.5" fill="#64748B">前三季近 $680B · 算力债 &gt;$680B</text>

        <line x1="258" y1="18" x2="258" y2="74" stroke="#E2E8F0"/>

        <!-- Middle: Overseas $148.8B Composition Bar -->
        <text x="278" y="31" font-size="11.5" font-weight="800" fill="#0F172A">海外 11 月监测股权与 IPO $148.8B（22 笔）</text>
        <rect x="278" y="42" width="320" height="14" rx="4" fill="#EFF6FF"/>
        <rect class="svg-bar-grow" x="278" y="42" width="256" height="14" rx="4" fill="#1D4ED8"/>
        <rect class="svg-bar-grow" style="transition-delay:0.1s" x="536" y="42" width="23" height="14" rx="3" fill="#60A5FA"/>
        <rect class="svg-bar-grow" style="transition-delay:0.18s" x="561" y="42" width="37" height="14" rx="3" fill="#0F296B"/>
        <text x="278" y="74" font-size="9.8" fill="#475569"><tspan font-weight="700" fill="#1D4ED8">■ Anthropic $119.5B</tspan> · <tspan font-weight="700" fill="#3B82F6">■ OpenAI $11B</tspan> · <tspan font-weight="700" fill="#0F296B">■ 20 笔非基座 $18.3B</tspan></text>

        <line x1="636" y1="18" x2="636" y2="74" stroke="#E2E8F0"/>

        <!-- Right: China Focus -->
        <text x="656" y="31" font-size="11.5" font-weight="800" fill="#0F172A">中国 11 月重点资本流向</text>
        <rect x="656" y="42" width="90" height="22" rx="6" fill="#EFF6FF" stroke="#BFDBFE"/>
        <text x="701" y="57" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1D4ED8">模型/AI 芯片</text>
        <rect x="754" y="42" width="88" height="22" rx="6" fill="#EFF6FF" stroke="#BFDBFE"/>
        <text x="798" y="57" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1D4ED8">AI4S/推理</text>
        <rect x="850" y="42" width="92" height="22" rx="6" fill="#F1F5FB" stroke="#CBD5E1"/>
        <text x="896" y="57" text-anchor="middle" font-size="10.5" font-weight="700" fill="#334155">具身零部件</text>
        <text x="656" y="79" font-size="10" fill="#64748B">国资 + 产业巨头 + 中东主权基金联动</text>
      </svg>
    `;
  }
};
