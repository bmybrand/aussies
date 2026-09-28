import { ArrowLink } from "./ArrowLink";

const services = [
  {
    number: "01",
    title: "Guided onboarding",
    description:
      "Start with a setup shaped around your counter, team, menu, and day-to-day workflow.",
  },
  {
    number: "02",
    title: "Human support",
    description:
      "Get practical help from people who understand payments and the realities of running a business.",
  },
  {
    number: "03",
    title: "Connected tools",
    description:
      "Bring the services you already rely on into one dependable point-of-sale ecosystem.",
  },
  {
    number: "04",
    title: "Cloud visibility",
    description:
      "Keep an eye on sales, stock, and performance wherever the working day takes you.",
  },
];

export function SupportSection() {
  return (
    <section className="support-section" id="resources">
      <div className="support-intro">
        <p className="eyebrow eyebrow--light">Beyond the hardware</p>
        <h2>Support that keeps your business moving.</h2>
        <p>
          The right POS partner should make every stage simpler—from the first
          setup to the next big decision.
        </p>
        <ArrowLink>Talk to our team</ArrowLink>
      </div>

      <div className="support-grid">
        {services.map((service) => (
          <article className="support-card" key={service.number}>
            <span>{service.number}</span>
            <div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
