import { ArrowLink } from "./ArrowLink";

export function HardwareShowcase() {
  return (
    <section className="hardware-wrap">
      <div className="hardware-showcase">
        <div className="hardware-copy">
          <p className="eyebrow eyebrow--light">Designed for the real world</p>
          <h2>Hardware that works as hard as you do.</h2>
          <p>Fast, durable, and ready for the rush. A family of devices made for counters, tables, and everywhere in between.</p>
          <ArrowLink>Shop hardware</ArrowLink>
        </div>
        <div className="pos-scene" aria-label="Point of sale hardware illustration">
          <div className="pos-terminal">
            <div className="pos-screen">
              <div className="screen-top"><span>New order</span><b>$48.50</b></div>
              <div className="screen-grid">
                {["Coffee", "Breakfast", "Bowls", "Drinks", "Sides", "Dessert"].map((item, index) => <span key={item} className={`menu-tile menu-tile--${index + 1}`}>{item}</span>)}
              </div>
              <div className="screen-checkout">Charge $48.50 <span>→</span></div>
            </div>
            <div className="pos-neck" /><div className="pos-base" />
          </div>
          <div className="card-reader"><span className="contactless">)))</span><strong>$48.50</strong><small>Tap to pay</small><div className="reader-pad" /></div>
        </div>
      </div>
    </section>
  );
}
