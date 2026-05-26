// ═══════════════════════════════════════════════════════════════════
// AUSTRALIA LIVE — Vega-Lite Visualisation Controller
// FIT2179 Data Visualisation 2, Semester 1 2026
// ═══════════════════════════════════════════════════════════════════
// Each chart is stored as a separate .vg.json file in /js/
// so the JSON is accessible and openable in Vega Editor via the
// three-dot menu on each chart.

var vegaOpts = { actions: true }; // shows the 3-dot menu → Open in Vega Editor

// Chart 1 — Revenue Overview + Detail (Week 10 vconcat + brush)
vegaEmbed("#chart1", "js/chart1_revenue_overview.vg.json", vegaOpts).catch(console.error);

// Chart 2 — Diverging bar: year-on-year % change
vegaEmbed("#chart2", "js/chart2_diverging_change.vg.json", vegaOpts).catch(console.error);

// Chart 3 — Dual-axis: ticket price bars + revenue index line
vegaEmbed("#chart3", "js/chart3_ticket_index.vg.json", vegaOpts).catch(console.error);

// Chart 4 — Geographic map: revenue bubbles + festival dots (Mercator)
vegaEmbed("#chart4", "js/chart4_map_australia.vg.json", vegaOpts).catch(console.error);

// Chart 5 — Diverging bar: revenue share vs population share
vegaEmbed("#chart5", "js/chart5_diverging_state.vg.json", vegaOpts).catch(console.error);

// Chart 6 — Lollipop: festival count with revenue per festival dot
vegaEmbed("#chart6", "js/chart6_lollipop_festivals.vg.json", vegaOpts).catch(console.error);

// Chart 7 — Radial bar: genre breakdown across 535 festivals
vegaEmbed("#chart7", "js/chart7_radial_genre.vg.json", vegaOpts).catch(console.error);

// Chart 8 — Annotated heatmap: genre share by state
vegaEmbed("#chart8", "js/chart8_heatmap_genre_state.vg.json", vegaOpts).catch(console.error);

// Chart 9 — Connected dot plot: age demographics pre vs post COVID
vegaEmbed("#chart9", "js/chart9_connected_dot.vg.json", vegaOpts).catch(console.error);

// Chart 10 — Stacked bar + slider: organiser challenges
vegaEmbed("#chart10", "js/chart10_stacked_challenges.vg.json", vegaOpts).catch(console.error);

// Chart 11 — Contemporary share overview + detail (Week 10 vconcat + brush)
vegaEmbed("#chart11", "js/chart11_contemporary_detail.vg.json", vegaOpts).catch(console.error);

// Chart 12 — Bubble scatter: state revenue vs attendance vs festivals
vegaEmbed("#chart12", "js/chart12_scatter_state.vg.json", vegaOpts).catch(console.error);

// Chart 13 — Stacked area: contemporary vs all other revenue
vegaEmbed("#chart13", "js/chart13_stacked_area.vg.json", vegaOpts).catch(console.error);

// ── Scroll fade-in observer ────────────────────────────────────────
var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) { entry.target.classList.add("on"); }
    });
}, { threshold: 0.06 });
document.querySelectorAll(".fi").forEach(function(el) { observer.observe(el); });
