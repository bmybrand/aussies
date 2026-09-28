import { ArrowLink } from "./ArrowLink";

function NetworkVisual() {
  return (
    <div className="feature-visual network-visual" aria-hidden="true">
      <div className="network-center">N</div><span className="network-dot dot-one">D</span><span className="network-dot dot-two">G</span><span className="network-dot dot-three">U</span>
      <i className="network-line line-one" /><i className="network-line line-two" /><i className="network-line line-three" />
    </div>
  );
}

function WebsiteVisual() {
  return (
    <div className="feature-visual website-visual" aria-hidden="true">
      <div className="browser-bar"><span /><span /><span /></div>
      <div className="website-hero"><small>ORDER ONLINE</small><strong>Fresh food,<br />ready when you are.</strong></div>
      <div className="website-button">Start an order</div>
    </div>
  );
}

function CheckoutVisual() {
  return (
    <div className="feature-visual checkout-visual" aria-hidden="true">
      <span className="checkout-price">$34.20</span><div className="checkout-lines"><i /><i /><i /></div>
      <div className="pay-options"><b>VISA</b><b>●Pay</b><b>AMEX</b></div><div className="checkout-button">Check out</div>
    </div>
  );
}

function DeliveryVisual() {
  return (
    <div className="feature-visual delivery-visual" aria-hidden="true">
      <div className="delivery-map"><i>●</i></div>
      <div className="delivery-alert"><span>✓</span><p><strong>Delivered</strong><small>Your customer has their order.</small></p></div>
    </div>
  );
}

const features = [
  { title: "Every channel connected", text: "Bring marketplace orders into the same flow as everything else.", visual: <NetworkVisual /> },
  { title: "A website that sells", text: "Turn visits into orders with a fast, branded experience.", visual: <WebsiteVisual /> },
  { title: "Checkout without friction", text: "Let guests pay their way with a smooth, secure checkout.", visual: <CheckoutVisual /> },
  { title: "Delivery, made clear", text: "Keep customers informed from the kitchen to their door.", visual: <DeliveryVisual /> },
];

export function OrderingSection() {
  return (
    <section className="section ordering-section">
      <div className="section-heading split-heading">
        <div><p className="eyebrow">Sell everywhere</p><h2>Every order, one place.</h2></div>
        <div className="heading-aside"><p>Grow beyond your four walls without adding four more dashboards.</p><ArrowLink>Explore online ordering</ArrowLink></div>
      </div>
      <div className="feature-grid">
        {features.map((feature) => <article className="feature-card" key={feature.title}>{feature.visual}<h3>{feature.title}</h3><p>{feature.text}</p></article>)}
      </div>
    </section>
  );
}
