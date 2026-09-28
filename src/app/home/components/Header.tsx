"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowLink } from "./ArrowLink";

const leftNavItems = [
  { label: "Restaurants", href: "/restaurants" },
  { label: "Services", href: "/services" },
  { label: "Retail", href: "/retail" },
];

const rightNavItems = [
  { label: "Healthcare", href: "/healthcare" },
  { label: "Products", href: "/products" },
  { label: "Resources", href: "/resources" },
];

export function Header() {
  const pathname = usePathname();
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
        {leftNavItems.map((item) => (
          <Link className={pathname === item.href ? "header-link--active" : ""} href={item.href} key={item.href}>{item.label}</Link>
        ))}
      </nav>

      <Link className="header-brand" href="/" aria-label="Aussie's POS home">
        <Image
          src="/images/brand/aussies-symbol.png"
          alt=""
          width={104}
          height={72}
          priority
        />
      </Link>

      <div className="header-right">
        <nav className="header-nav header-nav--secondary" aria-label="Secondary navigation">
          {rightNavItems.map((item) => (
            <Link className={pathname === item.href ? "header-link--active" : ""} href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </nav>
        <ArrowLink className="header-cta" href="/#contact">Contact sales</ArrowLink>
      </div>
    </header>
  );
}
