import Image from "next/image";

function DiningIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 3v7M9 3v7M6 7h3M7.5 10v11M16 3c-1.7 2.4-2 5.2-.8 8.2l2.3 1V21M17.5 3v9.2" />
    </svg>
  );
}

function RetailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 9v11h16V9M3 9l2-6h14l2 6M3 9c0 1.4 1 2.5 2.3 2.5S7.7 10.4 7.7 9c0 1.4 1 2.5 2.3 2.5s2.3-1.1 2.3-2.5c0 1.4 1 2.5 2.4 2.5S17 10.4 17 9c0 1.4 1 2.5 2.3 2.5S21 10.4 21 9M9 20v-5h6v5" />
    </svg>
  );
}

function ServicesIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 8h18v12H3zM8 8V6c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2M3 13h18M10 13v2h4v-2" />
    </svg>
  );
}

function SpecialistMark() {
  return (
    <span className="specialist-mark" aria-hidden="true">
      <Image
        src="/images/brand/aussies-symbol.png"
        alt=""
        width={32}
        height={25}
      />
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg className="strip-arrow" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  );
}

export function CustomerStrip() {
  return (
    <nav className="customer-strip" id="customers" aria-label="Business categories">
      <span className="strip-label">Customize by</span>
      <div className="industry-list">
        <a className="industry-tab industry-tab--active" href="#solutions">
          <DiningIcon />
          <span>Food &amp; beverage</span>
        </a>
        <a className="industry-tab" href="#solutions">
          <RetailIcon />
          <span>Retail</span>
        </a>
        <a className="industry-tab" href="#solutions">
          <ServicesIcon />
          <span>Services</span>
        </a>
      </div>
      <a className="strip-link" href="#contact">
        <SpecialistMark />
        <span>Shop one-on-one with our<br />specialists</span>
        <ArrowIcon />
      </a>
    </nav>
  );
}
