import Image from "next/image";

const footerColumns = [
  { title: "Platform", links: ["Payments", "Point of sale", "Online ordering", "Team management", "Customer insights"] },
  { title: "Business types", links: ["Restaurants", "Retail", "Food & drink", "Services", "Enterprise"] },
  { title: "Resources", links: ["Help center", "Guides", "Customer stories", "Developers", "System status"] },
  { title: "Company", links: ["About", "Careers", "Newsroom", "Partners", "Contact"] },
];

export function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-top">
        <div className="footer-brand-block">
          <a className="footer-logo" href="#top" aria-label="Aussie's POS Solution home">
            <Image
              src="/images/brand/aussies-pos-logo.png"
              alt="Aussie's POS Solution"
              width={280}
              height={59}
            />
          </a>
          <p>Simple tools for people building something that matters.</p>
          <a className="footer-contact" href="mailto:hello@northstar.example">Talk to our team →</a>
        </div>
        <div className="footer-links">
          {footerColumns.map((column) => <div key={column.title}><h3>{column.title}</h3>{column.links.map((link) => <a href="#top" key={link}>{link}</a>)}</div>)}
        </div>
      </div>
      <div className="footer-bottom"><span>© 2026 Northstar Systems</span><div><a href="#top">Privacy</a><a href="#top">Terms</a><a href="#top">Accessibility</a></div></div>
    </footer>
  );
}
