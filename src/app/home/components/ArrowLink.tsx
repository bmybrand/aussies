"use client";

import { useRef, type ReactNode } from "react";

type ArrowLinkProps = {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  href?: string;
};

export function ArrowLink({ children, className = "", dark = false, href = "#contact" }: ArrowLinkProps) {
  const wipeRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<Animation | null>(null);

  function animateWipe(entering: boolean) {
    const wipe = wipeRef.current;
    if (!wipe) return;

    const currentTransform = getComputedStyle(wipe).transform;
    animationRef.current?.cancel();
    wipe.style.transform = currentTransform === "none"
      ? "translateX(-101%)"
      : currentTransform;

    const animation = wipe.animate(
      [
        { transform: wipe.style.transform },
        { transform: entering ? "translateX(0%)" : "translateX(101%)" },
      ],
      {
        duration: 500,
        easing: "cubic-bezier(.76, 0, .24, 1)",
        fill: "forwards",
      },
    );

    animation.onfinish = () => {
      if (!entering) {
        animation.cancel();
        wipe.style.transform = "translateX(-101%)";
      }
    };
    animationRef.current = animation;
  }

  return (
    <a
      className={`arrow-link${dark ? " arrow-link--dark" : ""}${className ? ` ${className}` : ""}`}
      href={href}
      onPointerEnter={() => animateWipe(true)}
      onPointerLeave={() => animateWipe(false)}
      onFocus={() => animateWipe(true)}
      onBlur={() => animateWipe(false)}
    >
      <span className="arrow-link__wipe" ref={wipeRef} aria-hidden="true" />
      <span className="arrow-link__label">{children}</span>
      <svg
        className="arrow-link__arrow"
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="m12.5 6 6 6-6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.5 12h13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </a>
  );
}
