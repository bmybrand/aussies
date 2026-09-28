"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowLink } from "./ArrowLink";

const primaryNavItems = [
  "Restaurants",
  "Services",
  "Retail",
  "Healthcare",
  "Products",
  "Resources",
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    function updateHeader() {
      const currentScrollY = Math.max(window.scrollY, 0);
      const movement = currentScrollY - lastScrollY.current;

      setIsScrolled(currentScrollY > 24);

      if (currentScrollY <= 24) {
        setIsVisible(true);
      } else if (movement > 4 && currentScrollY > 120) {
        setIsVisible(false);
      } else if (movement < -4) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    }

    function handleScroll() {
      if (!ticking.current) {
        window.requestAnimationFrame(updateHeader);
        ticking.current = true;
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClassName = [
    "site-header",
    isScrolled ? "site-header--scrolled" : "",
    isVisible ? "" : "site-header--hidden",
  ].filter(Boolean).join(" ");

  return (
    <header className={headerClassName}>
      <nav className="header-nav header-nav--primary" aria-label="Primary navigation">
        {primaryNavItems.map((item) => (
          <a href={`#${item.toLowerCase()}`} key={item}>{item}</a>
        ))}
      </nav>

      <a className="header-brand" href="#top" aria-label="Home">
        <Image
          src="/images/brand/aussies-symbol.png"
          alt=""
          width={72}
          height={48}
          priority
        />
      </a>

      <div className="header-actions">
        <a href="#login">Log In</a>
        <a className="header-action-secondary" href="#help">Help Center</a>
        <a className="header-action-secondary" href="#pricing">Pricing</a>
        <a className="header-action-secondary" href="#products">Shop systems</a>
        <a className="cart-link" href="#cart" aria-label="Shopping cart">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 4h2l2.1 10.1a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L20 7H6" />
            <circle cx="9.5" cy="20" r="1" />
            <circle cx="17" cy="20" r="1" />
          </svg>
        </a>
        <ArrowLink className="header-cta">Contact sales</ArrowLink>
      </div>
    </header>
  );
}
