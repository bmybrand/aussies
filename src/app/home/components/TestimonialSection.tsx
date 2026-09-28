import Image from "next/image";

export function TestimonialSection() {
  return (
    <section className="story-section" aria-label="Customer story">
      <div className="story-card">
        <Image
          src="/images/home/pizzeria-story.png"
          alt="Fresh pizza being served in a neighborhood pizzeria"
          fill
          sizes="(max-width: 1600px) 100vw, 1560px"
        />
        <div className="story-shade" />
        <blockquote>
          <span className="quote-mark" aria-hidden="true">“</span>
          <p>Aussie&apos;s gives us one less thing to worry about ... allowing us to focus on our guests, not paperwork.</p>
        </blockquote>
        <div className="story-person-card">
          <span className="story-avatar" aria-hidden="true">MC</span>
          <span><strong>Maya Chen</strong><small>Owner, Hearth &amp; Stone</small></span>
        </div>
      </div>
    </section>
  );
}
