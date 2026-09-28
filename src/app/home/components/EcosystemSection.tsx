"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const items = {
  payments: {
    title: "Payments",
    text: "Accept secure payments in-store, at the table, online, or wherever the working day takes you.",
  },
  software: {
    title: "Software",
    text: "Bring sales, reporting, inventory, customers, and staff together in one clear workspace.",
  },
  hardware: {
    title: "Hardware",
    text: "Choose durable terminals, handhelds, displays, and accessories built for real business environments.",
  },
  apps: {
    title: "Apps",
    text: "Connect the specialist tools you already use and keep important information moving between them.",
  },
} as const;

type ItemKey = keyof typeof items;

function OrbitIcon({ type }: { type: ItemKey }) {
  if (type === "payments") return <svg viewBox="0 0 28 28"><rect x="3" y="6" width="22" height="16" rx="3" /><path d="M3 11h22M7 17h5" /></svg>;
  if (type === "software") return <svg viewBox="0 0 28 28"><path d="m10 8-6 6 6 6m8-12 6 6-6 6m-2-15-4 18" /></svg>;
  if (type === "hardware") return <svg viewBox="0 0 28 28"><rect x="4" y="4" width="20" height="15" rx="2" /><path d="M10 24h8m-4-5v5" /></svg>;
  return <svg viewBox="0 0 28 28"><rect x="8" y="3" width="12" height="22" rx="3" /><path d="M12 21h4" /></svg>;
}

export function EcosystemSection() {
  const [active, setActive] = useState<ItemKey>("apps");
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`ecosystem-section${isVisible ? " ecosystem-section--visible" : ""}`}>
      <div className="ecosystem-heading">
        <p className="eyebrow">One platform</p>
        <h2>Everything connects around your business</h2>
      </div>
      <div className="ecosystem-content">
        <div className="ecosystem-orbit">
          <i className="orbit-ring orbit-ring--outer" /><i className="orbit-ring orbit-ring--middle" /><i className="orbit-ring orbit-ring--inner" />
          <div className="orbit-hub"><Image src="/images/brand/aussies-symbol.png" alt="Aussie's platform" width={74} height={74} /></div>
          {(Object.keys(items) as ItemKey[]).map((key) => (
            <button className={`orbit-item orbit-item--${key}${active === key ? " orbit-item--active" : ""}`} type="button" onClick={() => setActive(key)} aria-pressed={active === key} key={key}>
              <span><OrbitIcon type={key} /></span><strong>{items[key].title}</strong>
            </button>
          ))}
        </div>
        <div className="ecosystem-panel" key={active}>
          <span>Connected capability</span>
          <h3>{items[active].title}</h3>
          <p>{items[active].text}</p>
          <div className="ecosystem-panel__status"><i /> Connected to Aussie&apos;s POS</div>
        </div>
      </div>
    </section>
  );
}
