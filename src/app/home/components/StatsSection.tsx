const stats = [
  {
    value: "125K+",
    title: "Businesses supported",
    description: "Helping hospitality, retail, and service teams keep moving.",
  },
  {
    value: "99.99%",
    title: "Platform uptime",
    description: "Reliable performance designed for every shift and every rush.",
  },
  {
    value: "$42B+",
    title: "Processed securely",
    description: "Payments protected across a connected point-of-sale platform.",
  },
];

export function StatsSection() {
  return (
    <section className="stats-section" aria-labelledby="stats-title">
      <h2 id="stats-title">Run the numbers</h2>
      <div className="stats-grid">
        {stats.map((stat) => (
          <article className="stat" key={stat.value}>
            <strong>{stat.value}</strong>
            <h3>{stat.title}</h3>
            <p>{stat.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
