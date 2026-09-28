import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { ArrowLink } from "../home/components/ArrowLink";
import { Footer } from "../home/components/Footer";
import { Header } from "../home/components/Header";
import { RevealBlock } from "./RevealBlock";

export type SolutionVariant = "restaurants" | "services" | "retail" | "healthcare" | "products" | "resources";

export type SolutionPageData = {
  variant: SolutionVariant;
  eyebrow: string;
  title: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  metrics: { value: string; label: string }[];
  sectionEyebrow: string;
  sectionTitle: string;
  sectionIntro: string;
  features: { title: string; text: string }[];
  journey: { eyebrow: string; title: string; text: string; points: string[]; image: string; imageAlt: string };
  capabilities: { title: string; text: string }[];
  quote: { text: string; name: string; role: string };
  faqs: { question: string; answer: string }[];
  finalTitle: string;
  finalText: string;
};

function FeatureIcon({ index }: { index: number }) {
  const icons = [
    <><path d="M5 21V9l7-4 7 4v12" /><path d="M9 21v-7h6v7M3 21h18" /></>,
    <><rect x="4" y="5" width="16" height="14" rx="3" /><path d="M4 10h16M8 15h4" /></>,
    <><path d="M4 19V9m5 10V5m5 14v-7m5 7V3" /><path d="M2 21h20" /></>,
    <><circle cx="9" cy="9" r="4" /><circle cx="17" cy="10" r="3" /><path d="M3 21c0-5 2-8 6-8s7 3 7 8m0-6c4 0 6 2 6 6" /></>,
    <><path d="M5 4h14v16H5zM8 8h8m-8 4h8m-8 4h5" /></>,
    <><path d="M4 12h16M12 4v16" /><circle cx="12" cy="12" r="9" /></>,
  ];
  return <svg viewBox="0 0 24 24" aria-hidden="true">{icons[index % icons.length]}</svg>;
}

function SignatureSection({ variant }: { variant: SolutionVariant }) {
  if (variant === "restaurants") return (
    <RevealBlock className="signature-section signature-restaurants">
      <div className="signature-heading"><p className="eyebrow">A service flow that stays in motion</p><h2>One order. Four connected moments.</h2></div>
      <div className="restaurant-flow">{["Guest orders", "Team confirms", "Kitchen prepares", "Payment closes"].map((item, index) => <article key={item}><b>0{index + 1}</b><span>{item}</span><i /></article>)}</div>
    </RevealBlock>
  );
  if (variant === "services") return (
    <RevealBlock className="signature-section signature-services">
        <div className="service-agenda"><div className="service-agenda__intro"><p className="eyebrow">Today, organized</p><h2>See the whole service day at a glance</h2><p>Appointments, team availability, customer context, and payment status stay close together.</p></div><div className="service-calendar">{[["09:00", "Consultation", "Confirmed"], ["10:30", "Follow-up", "Arrived"], ["13:15", "New booking", "Paid"], ["15:00", "Membership", "Confirmed"]].map((row, index) => <div key={row[0]}><time>{row[0]}</time><span><strong>{row[1]}</strong><small>{row[2]}</small></span><i style={{ "--row": index } as CSSProperties} /></div>)}</div></div>
    </RevealBlock>
  );
  if (variant === "retail") return (
    <RevealBlock className="signature-section signature-retail">
      <div className="retail-stock-copy"><p className="eyebrow">Live inventory pulse</p><h2>Know what is moving before the shelf looks empty</h2><p>Connect each checkout with the product picture your team uses to replenish and plan.</p></div>
      <div className="retail-stock-board"><div className="stock-board__head"><span>Product</span><span>Stock</span><span>Trend</span></div>{[["Coastal Tee", "42", "+18%"], ["Canvas Carryall", "16", "+9%"], ["Everyday Cap", "8", "Low"], ["Studio Bottle", "31", "+12%"]].map((row, index) => <div className="stock-row" key={row[0]}><i style={{ "--stock": `${88 - index * 17}%` } as CSSProperties} /><strong>{row[0]}</strong><span>{row[1]}</span><b>{row[2]}</b></div>)}</div>
    </RevealBlock>
  );
  if (variant === "healthcare") return (
    <RevealBlock className="signature-section signature-healthcare">
      <div className="care-orbit"><i /><i /><i /><div><span>1</span><b>Visit</b></div><div><span>2</span><b>Review</b></div><div><span>3</span><b>Pay</b></div><strong>Clear<br />checkout</strong></div>
      <div className="care-copy"><p className="eyebrow">A calmer final step</p><h2>Designed to reduce friction around payment</h2><p>Keep the experience clear for patients and give administrative teams a dependable view of what happens next.</p></div>
    </RevealBlock>
  );
  if (variant === "products") return (
    <RevealBlock className="signature-section signature-products">
      <div className="product-stage-copy"><p className="eyebrow eyebrow--light">Build your setup</p><h2>One platform. Different forms.</h2><p>Choose devices by role, location, and transaction style—then connect them into one operating view.</p></div>
      <div className="device-lineup" aria-label="Aussie's device family"><div className="device-shape device-shape--go"><i /></div><div className="device-shape device-shape--flex"><i /></div><div className="device-shape device-shape--mini"><i /></div><div className="device-shape device-shape--duo"><i /><b /></div></div>
    </RevealBlock>
  );
  return (
    <RevealBlock className="signature-section signature-resources">
      <div className="resource-index-heading"><p className="eyebrow">Browse by objective</p><h2>Start with the decision in front of you</h2></div>
      <div className="resource-index">{[["01", "Choose a system", "Buying guides"], ["02", "Prepare your team", "Setup playbooks"], ["03", "Improve operations", "Business guides"], ["04", "Solve a problem", "Help center"]].map((item) => <a href="#features" key={item[0]}><span>{item[0]}</span><strong>{item[1]}</strong><small>{item[2]}</small><b>↗</b></a>)}</div>
    </RevealBlock>
  );
}

function Features({ data }: { data: SolutionPageData }) {
  return <RevealBlock className="detail-features" id="features"><div className="detail-heading"><div><p className="eyebrow">{data.sectionEyebrow}</p><h2>{data.sectionTitle}</h2></div><p>{data.sectionIntro}</p></div><div className="detail-feature-grid">{data.features.map((feature, index) => <article className="detail-feature-card" key={feature.title}><span><FeatureIcon index={index} /></span><b>0{index + 1}</b><h3>{feature.title}</h3><p>{feature.text}</p></article>)}</div></RevealBlock>;
}

function Journey({ data }: { data: SolutionPageData }) {
  return <RevealBlock className="detail-journey"><div className="detail-journey__image"><Image src={data.journey.image} alt={data.journey.imageAlt} fill sizes="(max-width: 900px) 100vw, 50vw" /></div><div className="detail-journey__copy"><p className="eyebrow">{data.journey.eyebrow}</p><h2>{data.journey.title}</h2><p>{data.journey.text}</p><ul>{data.journey.points.map((point) => <li key={point}><span>✓</span>{point}</li>)}</ul><ArrowLink href="/#contact">Build your solution</ArrowLink></div></RevealBlock>;
}

function Capabilities({ data }: { data: SolutionPageData }) {
  return <RevealBlock className="detail-capabilities"><div className="detail-capabilities__heading"><p className="eyebrow eyebrow--light">Built around your day</p><h2>More control. Less friction.</h2></div><div className="detail-capability-grid">{data.capabilities.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></RevealBlock>;
}

function Quote({ data }: { data: SolutionPageData }) {
  return <RevealBlock className="detail-quote"><span className="detail-quote__mark">“</span><blockquote>{data.quote.text}</blockquote><p><strong>{data.quote.name}</strong><span>{data.quote.role}</span></p></RevealBlock>;
}

function Faq({ data }: { data: SolutionPageData }) {
  return <RevealBlock className="detail-faq"><div className="detail-faq__heading"><p className="eyebrow">Questions, answered</p><h2>What businesses ask us</h2></div><div className="detail-faq__list">{data.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div></RevealBlock>;
}

function FinalCta({ data }: { data: SolutionPageData }) {
  return <RevealBlock className="detail-final-cta"><div><p className="eyebrow eyebrow--light">Ready when you are</p><h2>{data.finalTitle}</h2><p>{data.finalText}</p></div><ArrowLink href="/#contact">Contact sales</ArrowLink></RevealBlock>;
}

function OrderedSections({ data }: { data: SolutionPageData }) {
  const blocks: Record<SolutionVariant, ReactNode[]> = {
    restaurants: [<SignatureSection variant="restaurants" key="signature" />, <Features data={data} key="features" />, <Journey data={data} key="journey" />, <Capabilities data={data} key="capabilities" />, <Quote data={data} key="quote" />, <Faq data={data} key="faq" />],
    services: [<SignatureSection variant="services" key="signature" />, <Journey data={data} key="journey" />, <Features data={data} key="features" />, <Quote data={data} key="quote" />, <Capabilities data={data} key="capabilities" />, <Faq data={data} key="faq" />],
    retail: [<SignatureSection variant="retail" key="signature" />, <Features data={data} key="features" />, <Capabilities data={data} key="capabilities" />, <Journey data={data} key="journey" />, <Faq data={data} key="faq" />, <Quote data={data} key="quote" />],
    healthcare: [<SignatureSection variant="healthcare" key="signature" />, <Journey data={data} key="journey" />, <Capabilities data={data} key="capabilities" />, <Features data={data} key="features" />, <Faq data={data} key="faq" />, <Quote data={data} key="quote" />],
    products: [<SignatureSection variant="products" key="signature" />, <Features data={data} key="features" />, <Journey data={data} key="journey" />, <Quote data={data} key="quote" />, <Capabilities data={data} key="capabilities" />, <Faq data={data} key="faq" />],
    resources: [<SignatureSection variant="resources" key="signature" />, <Faq data={data} key="faq" />, <Features data={data} key="features" />, <Journey data={data} key="journey" />, <Capabilities data={data} key="capabilities" />, <Quote data={data} key="quote" />],
  };
  return <>{blocks[data.variant]}</>;
}

export function SolutionPage({ data }: { data: SolutionPageData }) {
  return (
    <main className={`home-page detail-page detail-page--${data.variant}`}>
      <Header />
      <section className="detail-hero" id="top"><Image className="detail-hero__image" src={data.heroImage} alt={data.heroAlt} fill priority sizes="100vw" /><div className="detail-hero__shade" /><div className="detail-hero__content"><p className="detail-kicker">{data.eyebrow}</p><h1>{data.title}</h1><p>{data.description}</p><div className="detail-hero__actions"><ArrowLink href="/#contact">Talk to our team</ArrowLink><ArrowLink dark href="/products">Explore products</ArrowLink></div></div><div className="detail-hero__signal" aria-hidden="true"><span>One connected system</span><i /><i /><i /></div></section>
      <div className="detail-metrics" aria-label="Solution highlights">{data.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>
      <OrderedSections data={data} />
      <FinalCta data={data} />
      <Footer />
    </main>
  );
}
