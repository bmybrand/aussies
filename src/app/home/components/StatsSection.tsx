"use client";

import { useEffect, useState } from "react";
import { useRevealOnce } from "./useRevealOnce";

const stats = [
  { value: 125, decimals: 0, prefix: "", suffix: "K+", title: "Businesses supported", description: "Helping hospitality, retail, and service teams keep moving." },
  { value: 99.99, decimals: 2, prefix: "", suffix: "%", title: "Platform uptime", description: "Reliable performance designed for every shift and every rush." },
  { value: 42, decimals: 0, prefix: "$", suffix: "B+", title: "Processed securely", description: "Payments protected across a connected point-of-sale platform." },
];

export function StatsSection() {
  const { ref, isVisible } = useRevealOnce(0.3);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = window.requestAnimationFrame(() => setProgress(1));
      return () => window.cancelAnimationFrame(frame);
    }

    let frame = 0;
    const start = performance.now();
    const duration = 1500;
    function tick(now: number) {
      const elapsed = Math.min((now - start) / duration, 1);
      setProgress(1 - Math.pow(1 - elapsed, 3));
      if (elapsed < 1) frame = window.requestAnimationFrame(tick);
    }
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [isVisible]);

  return (
    <section ref={ref} className={`stats-section${isVisible ? " stats-section--visible" : ""}`} aria-labelledby="stats-title">
      <h2 id="stats-title">Run the numbers</h2>
      <div className="stats-grid">
        {stats.map((stat) => {
          const value = stat.decimals ? (stat.value * progress).toFixed(stat.decimals) : Math.round(stat.value * progress).toString();
          return <article className="stat" key={stat.title}><strong>{stat.prefix}{value}{stat.suffix}</strong><h3>{stat.title}</h3><p>{stat.description}</p></article>;
        })}
      </div>
    </section>
  );
}
