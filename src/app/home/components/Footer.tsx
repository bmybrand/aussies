"use client";

import Image from "next/image";
import Link from "next/link";
import { useRevealOnce } from "./useRevealOnce";

const footerLinks = [
  { label: "Restaurants", href: "/restaurants" },
  { label: "Services", href: "/services" },
  { label: "Retail", href: "/retail" },
  { label: "Healthcare", href: "/healthcare" },
  { label: "Products", href: "/products" },
  { label: "Resources", href: "/resources" },
];

function GlobeIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 4 6 4 9s-1 6-4 9c-3-3-4-6-4-9s1-6 4-9Z" /></svg>;
}

export function Footer() {
  const { ref, isVisible } = useRevealOnce(0.08);

  return (
    <footer ref={ref} className={`site-footer site-footer--compact${isVisible ? " site-footer--visible" : ""}`} id="contact">
      <div className="footer-main">
        <Link className="footer-logo" href="/" aria-label="Aussie's POS Solution home">
          <Image src="/images/brand/aussies-pos-logo.png" alt="Aussie's POS Solution" width={280} height={150} />
        </Link>

        <nav className="footer-page-links" aria-label="Footer navigation">
          {footerLinks.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
        </nav>

        <Link className="footer-contact" href="/#contact">
          <span>Let&apos;s build your setup</span>
          <strong>Contact sales</strong>
          <b aria-hidden="true">↗</b>
        </Link>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Aussie&apos;s POS Solution. All rights reserved.</p>
        <span><GlobeIcon /> Australia · English</span>
        <small>Secure POS. Straightforward support.</small>
      </div>
    </footer>
  );
}
