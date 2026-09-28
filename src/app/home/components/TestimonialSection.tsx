import Image from "next/image";

export function TestimonialSection() {
  return (
    <section className="story-section">
      <div className="story-card">
        <Image src="/images/home/pizzeria-story.png" alt="Fresh pizza being served in a neighborhood pizzeria" fill sizes="(max-width: 1200px) 100vw, 1440px" />
        <div className="story-shade" />
        <blockquote>
          <span className="quote-mark">“</span>
          <p>Northstar gave us our evenings back. We spend less time fixing systems—and more time making people feel at home.</p>
          <footer><span className="story-avatar">MC</span><span><strong>Maya Chen</strong><small>Owner, Hearth & Stone</small></span></footer>
        </blockquote>
      </div>
    </section>
  );
}
