import Image from "next/image";
import { ArrowLink } from "./ArrowLink";

const unstableLetters = new Map([
  [2, { delay: 2.4, duration: 7.8 }],
  [10, { delay: 4.1, duration: 9.6 }],
  [18, { delay: 3.2, duration: 8.7 }],
  [23, { delay: 5.5, duration: 10.4 }],
  [30, { delay: 2.9, duration: 11.3 }],
]);

function SignLetters({ text, offset = 0 }: { text: string; offset?: number }) {
  return Array.from(text).map((letter, index) => {
    const timing = unstableLetters.get(offset + index);

    return (
      <span
        className={`sign-letter${timing ? " sign-letter--unstable" : ""}`}
        style={timing ? {
          animationDelay: `${timing.delay}s`,
          animationDuration: `${timing.duration}s`,
        } : undefined}
        key={`${offset}-${index}`}
      >
        {letter === " " ? "\u00a0" : letter}
      </span>
    );
  });
}

export function Hero() {
  return (
    <div className="hero" id="top">
      <Image className="hero-image" src="/images/home/restaurant-hero.png" alt="A restaurant team member preparing a dining table" fill priority sizes="100vw" />
      <div className="hero-shade" />
      <div className="hero-content">
        <h1>
          <SignLetters text="Aussie's POS for every" /><br />
          <SignLetters text="small busines" offset={22} /><span className="surge-letter">
            <span className="surge-letter__glyph">s</span>
            <span className="surge-letter__sparks" aria-hidden="true">
              <i /><i /><i /><i /><i /><i />
            </span>
          </span>
        </h1>
        <p className="hero-copy">Do what you do better with a smarter, simpler point-of-sale solution.</p>
        <div className="hero-actions">
          <ArrowLink dark>Get Aussie&apos;s</ArrowLink>
          <ArrowLink>Contact sales</ArrowLink>
        </div>
      </div>
    </div>
  );
}
