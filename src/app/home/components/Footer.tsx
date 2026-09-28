"use client";

import Image from "next/image";
import Link from "next/link";
import { useRevealOnce } from "./useRevealOnce";

const footerGroups = [
  {
    title: "Business types",
    links: [
      { label: "Restaurants", href: "/restaurants" },
      { label: "Retail", href: "/retail" },
      { label: "Professional services", href: "/services" },
      { label: "Healthcare", href: "/healthcare" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "POS products", href: "/products" },
      { label: "Business resources", href: "/resources" },
      { label: "Home", href: "/" },
    ],
  },
  {
    title: "Talk to Aussie's",
    links: [
      { label: "Contact sales", href: "/#contact" },
      { label: "Find your fit", href: "/#solutions" },
      { label: "Explore hardware", href: "/products" },
    ],
  },
];

function GlobeIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 4 6 4 9s-1 6-4 9c-3-3-4-6-4-9s1-6 4-9Z" /></svg>;
}

function SocialIcon({ name, href }: { name: string; href: string }) {
  let mark;
  if (name === "Facebook") mark = <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.79-4.7 4.53-4.7 1.31 0 2.69.24 2.69.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />;
  else if (name === "X") mark = <path d="M18.24 2.25h3.31l-7.23 8.26 8.51 11.24h-6.66l-5.21-6.82-5.97 6.82H1.68l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.84L7.08 4.13H5.12l11.96 15.64Z" />;
  else if (name === "Instagram") mark = <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.26.15 4.78 1.7 4.93 4.93.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.22-1.67 4.77-4.93 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.27-.15-4.78-1.7-4.93-4.93-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.15-3.23 1.67-4.78 4.93-4.93C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.7 21.31.27 16.95.07 15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-11.84a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" />;
  else if (name === "YouTube") mark = <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.54 12 3.54 12 3.54s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.19 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" />;
  else mark = <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM3.56 9h3.56v11.45H3.56V9Z" />;
  return <a href={href} target="_blank" rel="noreferrer" aria-label={name}><svg viewBox="0 0 24 24" aria-hidden="true">{mark}</svg></a>;
}

export function Footer() {
  const { ref, isVisible } = useRevealOnce(0.08);

  return (
    <footer ref={ref} className={`site-footer${isVisible ? " site-footer--visible" : ""}`} id="contact">
      <div className="footer-directory footer-directory--current">
        <Link className="footer-logo" href="/" aria-label="Aussie's POS Solution home">
          <Image src="/images/brand/aussies-pos-logo.png" alt="Aussie's POS Solution" width={280} height={150} />
        </Link>
        <nav className="footer-links footer-links--current" aria-label="Footer navigation">
          {footerGroups.map((group) => (
            <div className="footer-link-group" key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
            </div>
          ))}
        </nav>
      </div>

      <div className="footer-utility">
        <p className="footer-promise">Payments, hardware, and support—connected.</p>
        <div className="footer-region"><GlobeIcon /> Australia (English)</div>
        <div className="footer-socials" aria-label="Social media links">
          <SocialIcon name="Facebook" href="https://www.facebook.com/" />
          <SocialIcon name="X" href="https://x.com/" />
          <SocialIcon name="Instagram" href="https://www.instagram.com/" />
          <SocialIcon name="YouTube" href="https://www.youtube.com/" />
          <SocialIcon name="LinkedIn" href="https://www.linkedin.com/" />
        </div>
      </div>

      <div className="footer-legal footer-legal--current">
        <div className="footer-disclaimer">
          <p>© 2026 Aussie&apos;s POS Solution. All rights reserved.</p>
          <p>Products, features, pricing, and service availability may vary by plan and location. Images and interface examples are shown for demonstration purposes.</p>
        </div>
        <nav className="footer-policies" aria-label="Legal information">
          <span>Secure payments</span>
          <span>Australian support</span>
        </nav>
      </div>
    </footer>
  );
}
