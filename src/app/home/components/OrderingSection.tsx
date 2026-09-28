"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowLink } from "./ArrowLink";

function FoodIcon({ type }: { type: "bag" | "meal" | "cake" }) {
  if (type === "bag") return <svg viewBox="0 0 28 28" aria-hidden="true"><path d="M7 10h14l-1 12H8L7 10Z" /><path d="M10 10c0-5 8-5 8 0" /></svg>;
  if (type === "cake") return <svg viewBox="0 0 28 28" aria-hidden="true"><path d="M6 13h16v9H6zM9 13V9m5 4V8m5 5V9" /><path d="m8 8 1-2 1 2m3-1 1-2 1 2m3 1 1-2 1 2" /></svg>;
  return <svg viewBox="0 0 28 28" aria-hidden="true"><path d="M6 16h16c0 4-3 7-8 7s-8-3-8-7Zm3-2c1-6 9-6 10 0H9Zm-1-3h12" /></svg>;
}

function CartIcon() {
  return <svg className="cart-detail-icon" viewBox="0 0 32 32" aria-hidden="true"><path d="M5 7h3l2.5 12h13l3-9H9" /><circle cx="13" cy="25" r="1.5" /><circle cx="23" cy="25" r="1.5" /><path d="M13 14h8m-4-4v8" /></svg>;
}

function DeliveryMark({ brand }: { brand: "doordash" | "google" | "uber" | "menulog" }) {
  if (brand === "doordash") return <svg className="delivery-brand delivery-brand--doordash" viewBox="0 0 40 28" aria-label="DoorDash"><path d="M3 7h19c6 0 11 3.7 14 9H16l-3.4 5H5l6.7-10H3V7Zm14 4-2.7 4H29c-1.8-2.5-4.1-4-7-4h-5Z" /></svg>;
  if (brand === "google") return <svg className="delivery-brand delivery-brand--google" viewBox="0 0 48 48" aria-label="Google"><path fill="#FFC107" d="M43.6 20H24v8h11.3A12 12 0 1 1 32 15.1l5.7-5.7A20 20 0 1 0 44 24c0-1.4-.1-2.7-.4-4Z" /><path fill="#FF3D00" d="m6.3 14.7 6.6 4.8A12 12 0 0 1 32 15.1l5.7-5.7A20 20 0 0 0 6.3 14.7Z" /><path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.6-5.3l-6.3-5.2A12 12 0 0 1 12.9 28l-6.6 5.1A20 20 0 0 0 24 44Z" /><path fill="#1976D2" d="M43.6 20H24v8h11.3a12 12 0 0 1-4 5.5l6.3 5.2C41.5 35.1 44 30 44 24c0-1.4-.1-2.7-.4-4Z" /></svg>;
  if (brand === "uber") return <span className="delivery-brand delivery-brand--uber" aria-label="Uber Eats"><b>UBER</b><em>EATS</em></span>;
  return <svg className="delivery-brand delivery-brand--menulog" viewBox="0 0 40 40" aria-label="Menulog"><path d="M9 5v13m5-13v13M7 11h9m-4 7v17M27 5v30m0-30c7 4 7 12 0 15" /></svg>;
}

function PaymentMark({ brand }: { brand: "discover" | "mastercard" | "apple" | "amex" }) {
  if (brand === "discover") return <svg viewBox="0 0 112 44" aria-label="Discover"><text x="5" y="27">DISC</text><circle cx="66" cy="22" r="10" fill="#f58220" /><text x="78" y="27">VER</text><path d="M54 34c17 7 34 5 51-3" fill="none" stroke="#f58220" strokeWidth="3" /></svg>;
  if (brand === "mastercard") return <svg viewBox="0 0 82 48" aria-label="Mastercard"><circle cx="31" cy="24" r="19" fill="#eb001b" /><circle cx="51" cy="24" r="19" fill="#f79e1b" fillOpacity=".92" /></svg>;
  if (brand === "apple") return <svg viewBox="0 0 94 44" aria-label="Apple Pay"><path d="M22 13c-2.2 0-4 1.2-5.1 1.2-1.2 0-2.9-1.1-4.8-1.1-2.5 0-4.8 1.4-6.1 3.7-2.7 4.7-.7 11.6 1.9 15.4 1.3 1.9 2.8 4 4.8 3.9 1.9-.1 2.7-1.3 5-1.3 2.3 0 3 .1 5 1.2 2.1 0 3.4-1.9 4.7-3.8 1.5-2.2 2.1-4.3 2.2-4.4-.1 0-4.1-1.6-4.1-6.3 0-3.9 3.2-5.8 3.4-5.9-1.8-2.7-4.7-3-5.7-3.1-.4 0-.8-.1-1.2-.1ZM21.5 7.5c1.1-1.3 1.8-3.1 1.6-4.9-1.6.1-3.5 1.1-4.6 2.4-1 1.2-1.9 3-1.7 4.7 1.8.1 3.6-.9 4.7-2.2Z" /><text x="36" y="31">Pay</text></svg>;
  return <svg viewBox="0 0 100 52" aria-label="American Express"><rect x="1" y="1" width="98" height="50" rx="4" fill="#1677bc" /><text x="9" y="33" fill="#fff">AMEX</text></svg>;
}

function IntegrationsVisual() {
  return (
    <div className="ordering-visual integrations-visual" aria-hidden="true">
      <div className="integration-panel"><CartIcon /><strong>Cart details</strong></div>
      <span className="partner-badge partner-badge--one"><DeliveryMark brand="doordash" /></span>
      <span className="partner-badge partner-badge--two"><DeliveryMark brand="google" /></span>
      <span className="partner-badge partner-badge--three"><DeliveryMark brand="uber" /></span>
      <span className="partner-badge partner-badge--four"><DeliveryMark brand="menulog" /></span>
    </div>
  );
}

function OrderRow({ type }: { type: "bag" | "meal" | "cake" }) {
  return <div className="ordering-menu-row"><span><FoodIcon type={type} /></span><div><i /><i /></div><b /></div>;
}

function WebsiteVisual() {
  return <div className="ordering-visual website-visual" aria-hidden="true"><div className="ordering-phone"><OrderRow type="bag" /><OrderRow type="meal" /><OrderRow type="cake" /><div className="order-now-button">Order now</div></div></div>;
}

function CheckoutVisual() {
  return (
    <div className="ordering-visual checkout-visual" aria-hidden="true">
      <div className="checkout-skeleton checkout-skeleton--top"><i /><span /></div>
      <div className="checkout-skeleton"><b /><div><i /><i /></div><span /></div>
      <div className="checkout-skeleton"><b /><div><i /><i /></div><span /></div>
      <div className="payment-row"><strong><PaymentMark brand="discover" /></strong><strong><PaymentMark brand="mastercard" /></strong><strong><PaymentMark brand="apple" /></strong><strong><PaymentMark brand="amex" /></strong></div>
      <div className="checkout-action">Check Out</div>
    </div>
  );
}

function DeliveryVisual() {
  return (
    <div className="ordering-visual delivery-visual">
      <Image src="/images/home/restaurant-hero.png" alt="A prepared customer order ready for delivery" fill sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 25vw" />
      <div className="delivery-photo-shade" />
      <div className="delivery-alert"><span className="delivery-alert__mark"><Image src="/images/brand/aussies-symbol.png" alt="" width={38} height={38} /></span><p><strong>Delivered</strong><small>Your order has been delivered</small></p></div>
    </div>
  );
}

const features = [
  { title: "Third-party integrations", text: "Connect to leading online ordering platforms and streamline your sales processes for maximum efficiency.", visual: <IntegrationsVisual /> },
  { title: "Custom website", text: "Add online ordering to your website with zero hassle for integrated menu management, order processing, and inventory tracking.", visual: <WebsiteVisual /> },
  { title: "Hosted checkout", text: "Power smooth transactions with a secure, customizable, and mobile-friendly checkout page.", visual: <CheckoutVisual /> },
  { title: "Pickup and delivery", text: "Streamline operations with a single system for online ordering, menu management, and order processing.", visual: <DeliveryVisual /> },
];

export function OrderingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      { threshold: 0.18 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`ordering-section${isVisible ? " ordering-section--visible" : ""}`}>
      <div className="ordering-heading">
        <h2>All of your online orders, in one place</h2>
        <div className="ordering-intro"><p>Drive revenue and deliver more to customers with commission-free online ordering, delivery management, and easy integration with third-party delivery apps.</p><ArrowLink>Explore Online Ordering</ArrowLink></div>
      </div>
      <div className="feature-grid ordering-grid">
        {features.map((feature) => <article className="feature-card ordering-card" key={feature.title}>{feature.visual}<h3>{feature.title}</h3><p>{feature.text}</p></article>)}
      </div>
    </section>
  );
}
