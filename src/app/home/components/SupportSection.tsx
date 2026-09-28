"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLink } from "./ArrowLink";

const services = [
  { number: "01", title: "Guided onboarding", description: "Start with a setup shaped around your counter, team, menu, and day-to-day workflow.", icon: "route" },
  { number: "02", title: "Human support", description: "Get practical help from people who understand payments and the realities of running a business.", icon: "people" },
  { number: "03", title: "Connected tools", description: "Bring the services you already rely on into one dependable point-of-sale ecosystem.", icon: "link" },
  { number: "04", title: "Cloud visibility", description: "Keep an eye on sales, stock, and performance wherever the working day takes you.", icon: "cloud" },
];

function ServiceIcon({ type }: { type: string }) {
  if (type === "route") return <svg viewBox="0 0 32 32"><circle cx="7" cy="7" r="3" /><circle cx="25" cy="25" r="3" /><path d="M10 7h5c5 0 5 7 0 7h-2c-5 0-5 8 0 8h9" /></svg>;
  if (type === "people") return <svg viewBox="0 0 32 32"><circle cx="12" cy="11" r="5" /><circle cx="23" cy="12" r="4" /><path d="M3 28c0-7 3-11 9-11s10 4 10 11m-2-9c5 0 9 3 9 9" /></svg>;
  if (type === "link") return <svg viewBox="0 0 32 32"><path d="m13 20-2 2a6 6 0 0 1-9-9l5-5a6 6 0 0 1 9 0m3 4 2-2a6 6 0 0 1 9 9l-5 5a6 6 0 0 1-9 0M11 21l10-10" /></svg>;
  return <svg viewBox="0 0 32 32"><path d="M9 25h16a6 6 0 0 0 0-12h-1A9 9 0 0 0 7 11a7 7 0 0 0 2 14Z" /><path d="M12 19h8m-4-4v8" /></svg>;
}

export function SupportSection() {
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
    <section ref={sectionRef} className={`support-section${isVisible ? " support-section--visible" : ""}`} id="resources">
      <div className="support-intro">
        <p className="eyebrow eyebrow--light">Beyond the hardware</p>
        <h2>Support that keeps your business moving.</h2>
        <p>The right POS partner should make every stage simpler—from the first setup to the next big decision.</p>
        <ArrowLink>Talk to our team</ArrowLink>
      </div>
      <div className="support-grid">
        {services.map((service) => (
          <article className="support-card" key={service.number}>
            <div className="support-card__top"><span className="support-icon"><ServiceIcon type={service.icon} /></span><b>{service.number}</b></div>
            <div><h3>{service.title}</h3><p>{service.description}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}
