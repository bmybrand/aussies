const stats = [
  { value: "125K+", label: "businesses growing with Northstar" },
  { value: "99.99%", label: "platform uptime through every rush" },
  { value: "$42B+", label: "processed securely each year" },
];

export function StatsSection() {
  return (
    <section className="stats-section" aria-labelledby="stats-title">
      <p className="eyebrow" id="stats-title">By the numbers</p>
      <div className="stats-grid">{stats.map((stat) => <div className="stat" key={stat.value}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>
    </section>
  );
}
