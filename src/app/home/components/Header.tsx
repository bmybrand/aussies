"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
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

const mobileNavItems = [...leftNavItems, ...rightNavItems];

export function Header() {
  const pathname = usePathname();
  const menuId = useId();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    function updateHeader() {
      const currentScrollY = Math.max(window.scrollY, 0);
      const movement = currentScrollY - lastScrollY.current;

      setIsScrolled(currentScrollY > 24);

      if (isMenuOpen) {
        setIsVisible(true);
      } else if (currentScrollY <= 24) {
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
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    function handleResize() {
      if (window.matchMedia("(min-width: 1101px)").matches) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const headerClassName = [
    "site-header",
    isScrolled || isMenuOpen ? "site-header--scrolled" : "",
    isVisible ? "" : "site-header--hidden",
    isMenuOpen ? "site-header--menu-open" : "",
  ].filter(Boolean).join(" ");

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function closeMenuAndRestoreFocus() {
    setIsMenuOpen(false);
    menuButtonRef.current?.focus();
  }

  return (
    <>
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
          <button
            ref={menuButtonRef}
            type="button"
            className="header-menu-toggle"
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="header-menu-toggle__bars" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </button>
        </div>
      </header>

      <div
        className={`mobile-nav${isMenuOpen ? " mobile-nav--open" : ""}`}
        id={menuId}
        aria-hidden={!isMenuOpen}
      >
        <button type="button" className="mobile-nav__backdrop" aria-label="Close menu" tabIndex={isMenuOpen ? 0 : -1} onClick={closeMenuAndRestoreFocus} />
        <nav className="mobile-nav__panel" aria-label="Mobile navigation" inert={!isMenuOpen ? true : undefined}>
          <div className="mobile-nav__links">
            {mobileNavItems.map((item, index) => (
              <Link
                ref={index === 0 ? firstLinkRef : undefined}
                className={pathname === item.href ? "mobile-nav__link mobile-nav__link--active" : "mobile-nav__link"}
                href={item.href}
                key={item.href}
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <a
            className="arrow-link mobile-nav__cta"
            href="/#contact"
            tabIndex={isMenuOpen ? 0 : -1}
            onClick={closeMenu}
          >
            <span className="arrow-link__label">Contact sales</span>
            <svg className="arrow-link__arrow" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="m12.5 6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5.5 12h13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </a>
        </nav>
      </div>
    </>
  );
}
