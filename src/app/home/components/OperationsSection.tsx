"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLink } from "./ArrowLink";

function FoodIcon({ type }: { type: "fries" | "drink" | "burger" | "service" | "cake" }) {
  if (type === "fries") return <svg viewBox="0 0 32 32"><path d="m9 13-2-7m7 7-1-9m6 9 2-8m3 8 3-6M7 12h19l-2 16H10z" /></svg>;
  if (type === "drink") return <svg viewBox="0 0 32 32"><path d="M8 11h16l-2 17H10zM12 7h8M16 7V3M12 17h8" /></svg>;
  if (type === "burger") return <svg viewBox="0 0 32 32"><path d="M6 15c1-6 4-9 10-9s9 3 10 9zM5 19h22M7 23h18c0 3-2 5-5 5h-8c-3 0-5-2-5-5z" /></svg>;
  if (type === "cake") return <svg viewBox="0 0 32 32"><path d="M6 17h20v11H6zM8 17c0-4 3-6 8-6s8 2 8 6M11 11V7m5 4V5m5 6V7M10 6h2m3-2h2m3 2h2" /></svg>;
  return <svg viewBox="0 0 32 32"><path d="M6 19c3-4 5-6 8-6l2-5 2 5c3 0 5 2 8 6l-4 8-6-4-6 4zM9 18l-3-4m17 4 3-4" /></svg>;
}

function SalesCard() {
  const bars = [
    { type: "fries" as const, direction: "↑", className: "one" },
    { type: "drink" as const, direction: "↑", className: "two" },
    { type: "burger" as const, direction: "↓", className: "three" },
    { type: "service" as const, direction: "↑", className: "four" },
    { type: "cake" as const, direction: "↓", className: "five" },
  ];

  return (
    <div className="product-visual sales-visual" aria-hidden="true">
      {bars.map((bar) => (
        <div className={`chart-bar chart-bar--${bar.className}`} key={bar.className}>
          <span className="bar-trend">{bar.direction}</span>
          <span className="bar-glyph"><FoodIcon type={bar.type} /></span>
        </div>
      ))}
    </div>
  );
}

function StaffCard() {
  return (
    <div className="product-visual staff-visual" aria-hidden="true">
      <div className="clock-ring">
        <svg className="clock-progress" viewBox="0 0 100 100">
          <circle className="clock-progress__track" cx="50" cy="50" r="46" pathLength="100" />
          <circle className="clock-progress__value" cx="50" cy="50" r="46" pathLength="100" />
        </svg>
        {Array.from({ length: 12 }, (_, index) => (
          <i className="clock-tick" style={{ transform: `rotate(${index * 30}deg) translateY(-104px)` }} key={index} />
        ))}
        <strong>Chris L.</strong>
        <small>Clocked in at 9:07 AM</small>
      </div>
    </div>
  );
}

const orderItems = [
  ["burger", "Classic Burger"],
  ["fries", "Truffle Fries"],
  ["drink", "Chocolate Shake"],
  ["burger", "Chicken Sandwich"],
] as const;

function OrdersCard({ orderNumber }: { orderNumber: number }) {
  return (
    <div className="product-visual order-visual" aria-hidden="true">
      <div className="order-title">Order #{orderNumber}</div>
      {orderItems.map(([type, name]) => (
        <div className="order-row" key={name}>
          <span className="order-dot"><FoodIcon type={type} /></span>
          <span className="order-copy"><strong>{name}</strong><i /><i /></span>
          <span className="order-check" />
        </div>
      ))}
    </div>
  );
}

function GuestCard({ points }: { points: number }) {
  return (
    <div className="product-visual guest-visual" aria-hidden="true">
      <div className="guest-panel">
        <div className="guest-avatar">
          <svg viewBox="0 0 32 32"><circle cx="12" cy="11" r="5" /><circle cx="22" cy="12" r="4" /><path d="M4 27c0-6 3-10 8-10s9 4 9 10M19 18c5 0 8 3 8 8" /></svg>
        </div>
        <strong>Shannon Rodgers</strong>
        <span>Member since 2018</span>
        <small>Points Balance</small>
        <b>{points.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</b>
        <div className="guest-lines"><i /><i /><i /></div>
      </div>
    </div>
  );
}

export function OperationsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.22 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const reducedMotionFrame = window.requestAnimationFrame(() => setProgress(1));
      return () => window.cancelAnimationFrame(reducedMotionFrame);
    }

    let frame = 0;
    const startedAt = performance.now();
    const duration = 1650;

    function update(now: number) {
      const elapsed = Math.min((now - startedAt) / duration, 1);
      setProgress(1 - Math.pow(1 - elapsed, 3));
      if (elapsed < 1) frame = window.requestAnimationFrame(update);
    }

    frame = window.requestAnimationFrame(update);
    return () => window.cancelAnimationFrame(frame);
  }, [isVisible]);

  const cards = [
    { title: "See top-performing dishes", visual: <SalesCard /> },
    { title: "Manage staff, payroll, and scheduling", visual: <StaffCard /> },
    { title: "Keep online orders on one platform", visual: <OrdersCard orderNumber={Math.round(568 * progress)} /> },
    { title: "Turn first-time guests into regulars", visual: <GuestCard points={Math.round(2817 * progress)} /> },
  ];

  return (
    <section ref={sectionRef} className={`section operations-section${isVisible ? " operations-section--visible" : ""}`} id="solutions">
      <div className="section-heading split-heading">
        <h2>Keep things flowing with the<br />all-in-one restaurant POS</h2>
        <div className="heading-aside">
          <p>Transform your restaurant business with Aussie&apos;s integrated software solution, designed to streamline operations, enhance guest experiences, and boost profitability through insights.</p>
          <ArrowLink>Explore Food &amp; Beverage</ArrowLink>
        </div>
      </div>
      <div className="product-grid" id="products">
        {cards.map((card) => (
          <article className="product-card" key={card.title}>
            {card.visual}
            <div className="product-card-copy"><h3>{card.title}</h3></div>
          </article>
        ))}
      </div>
    </section>
  );
}
