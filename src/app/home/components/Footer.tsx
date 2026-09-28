"use client";

import Image from "next/image";
import { useRevealOnce } from "./useRevealOnce";

const footerGroups = [
  { title: "Take payments", links: ["Card readers and POS devices", "Point of sale system", "Online ordering and sales", "Payment processing", "Invoicing", "Virtual Terminal"] },
  { title: "Run your business", links: ["Tracking and reporting", "Inventory management", "Business funding", "Rapid Deposit", "Employee management"] },
  { title: "Sell more", links: ["Customer engagement", "Gift cards", "Apps and integrations"] },
  { title: "Business types", links: ["Restaurants", "Retail stores", "Service businesses"] },
  { title: "Hardware devices", links: ["Go", "Compact", "Flex Pocket", "Flex", "Mini", "Station Solo", "Station Duo", "Kiosk", "Kitchen Display System", "Accessories", "Pricing"] },
  { title: "Help", links: ["Help center", "FAQ", "Contact us", "Aussie's Care", "Contact sales", "Small Business Resources"] },
  { title: "About", links: ["Blog", "Case studies", "Careers", "Intellectual property", "Referrals"] },
  { title: "Integrations", links: ["Developers", "App marketplace", "Aussie's Connect", "Integration services"] },
];

function GlobeIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 4 6 4 9s-1 6-4 9c-3-3-4-6-4-9s1-6 4-9Z" /></svg>;
}

function SocialIcon({ name }: { name: string }) {
  let mark;
  if (name === "Facebook") mark = <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.79-4.7 4.53-4.7 1.31 0 2.69.24 2.69.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />;
  else if (name === "X") mark = <path d="M18.24 2.25h3.31l-7.23 8.26 8.51 11.24h-6.66l-5.21-6.82-5.97 6.82H1.68l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.84L7.08 4.13H5.12l11.96 15.64Z" />;
  else if (name === "Instagram") mark = <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.26.15 4.78 1.7 4.93 4.93.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.22-1.67 4.77-4.93 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.27-.15-4.78-1.7-4.93-4.93-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.15-3.23 1.67-4.78 4.93-4.93C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.7 21.31.27 16.95.07 15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-11.84a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" />;
  else if (name === "YouTube") mark = <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.54 12 3.54 12 3.54s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.19 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" />;
  else if (name === "LinkedIn") mark = <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM3.56 9h3.56v11.45H3.56V9Z" />;
  else mark = <path d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.24c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18a4.64 4.64 0 0 1 1.23 3.22c0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.31c0 .32.22.7.83.58A12 12 0 0 0 12 .3Z" />;
  return <a href="#top" aria-label={name}><svg viewBox="0 0 24 24" aria-hidden="true">{mark}</svg></a>;
}

export function Footer() {
  const { ref, isVisible } = useRevealOnce(0.08);

  return (
    <footer ref={ref} className={`site-footer${isVisible ? " site-footer--visible" : ""}`} id="contact">
      <div className="footer-directory">
        <a className="footer-logo" href="#top" aria-label="Aussie's POS Solution home">
          <Image src="/images/brand/aussies-pos-logo.png" alt="Aussie's POS Solution" width={280} height={150} />
        </a>
        <nav className="footer-links" aria-label="Footer navigation">
          {footerGroups.map((group) => (
            <div className="footer-link-group" key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map((link) => <a href="#top" key={link}>{link}</a>)}
            </div>
          ))}
        </nav>
      </div>

      <div className="footer-utility">
        <button type="button" className="footer-pause" aria-label="Pause animations"><span><svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="8" /><path d="M8 7v6m4-6v6" /></svg></span> Pause Animations</button>
        <button type="button" className="footer-region"><GlobeIcon /> Australia (English)</button>
        <div className="footer-socials" aria-label="Social media links">
          {["Facebook", "X", "Instagram", "YouTube", "LinkedIn", "GitHub"].map((name) => <SocialIcon name={name} key={name} />)}
        </div>
      </div>

      <div className="footer-legal">
        <div className="footer-disclaimer">
          <p>© 2026 Aussie&apos;s POS Solution. All rights reserved.</p>
          <p>Aussie&apos;s POS products and services are designed to help businesses accept payments and manage day-to-day operations. Product availability, features, pricing, and service terms may vary by plan, device, location, and payment provider.</p>
          <p>All trademarks and brand names belong to their respective owners. Images and interface examples shown on this site are for demonstration purposes. Please review the applicable agreement, privacy notice, and service terms before purchasing or activating a product.</p>
        </div>
        <nav className="footer-policies" aria-label="Legal links">
          <a href="#top">Terms</a>
          <a href="#top">Privacy Policy</a>
          <a href="#top">Accessibility</a>
          <a href="#top">Do Not Sell My Information</a>
        </nav>
      </div>
    </footer>
  );
}
