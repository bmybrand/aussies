import type { SolutionPageData } from "../../components/SolutionPage";

export const restaurantsData: SolutionPageData = {
  variant: "restaurants",
  eyebrow: "Aussie's for restaurants",
  title: "Keep every table, ticket, and team in sync",
  description: "A restaurant POS built to connect front of house, kitchen operations, online orders, payments, and reporting without slowing service down.",
  heroImage: "/images/home/restaurant-hero.png",
  heroAlt: "A prepared restaurant dining room with a point-of-sale terminal",
  metrics: [{ value: "FOH", label: "Tableside service" }, { value: "BOH", label: "Kitchen coordination" }, { value: "ONE", label: "Connected restaurant view" }],
  sectionEyebrow: "Service without the scramble",
  sectionTitle: "Everything your restaurant needs in one place",
  sectionIntro: "From the first order to the final close, give every part of your operation the same accurate, up-to-date information.",
  features: [
    { title: "Tableside ordering", text: "Take accurate orders, add modifiers, split checks, and accept payment without unnecessary trips to the counter." },
    { title: "Kitchen coordination", text: "Route tickets clearly and keep front-of-house teams informed as orders move through preparation." },
    { title: "Menu management", text: "Update items, availability, pricing, and categories from one organized dashboard." },
    { title: "Online ordering", text: "Bring pickup and delivery orders into the same operating flow as in-person service." },
    { title: "Team tools", text: "Support roles, permissions, time tracking, and shift-level visibility for busy teams." },
    { title: "Restaurant reporting", text: "Understand sales mix, popular items, labor patterns, and service performance in real time." },
  ],
  journey: { eyebrow: "Front to back", title: "A smoother handoff from guest to kitchen", text: "Reduce re-entry, missed modifiers, and unclear tickets with a connected service flow designed around restaurant pace.", points: ["Send clear orders directly to production", "Keep menus and availability consistent", "See service and sales performance together"], image: "/images/home/pizzeria-story.png", imageAlt: "Restaurant team preparing food for service" },
  capabilities: [
    { title: "Built for the rush", text: "Fast, focused workflows help staff act quickly when queues build and tables fill." },
    { title: "Flexible by format", text: "Shape the setup around full service, quick service, cafés, bars, and multi-station teams." },
    { title: "Ready to grow", text: "Add devices, order channels, and connected tools as your operation becomes more complex." },
  ],
  quote: { text: "We can spend less time chasing tickets and more time looking after the room.", name: "Maya Chen", role: "Independent restaurant owner" },
  faqs: [
    { question: "Can the system support tableside ordering?", answer: "Yes. A mobile setup can help staff take orders, apply modifiers, and accept payments closer to the guest." },
    { question: "Can online orders flow into the restaurant?", answer: "Online ordering can be organized alongside in-person sales so teams can manage channels from a more consistent workflow." },
    { question: "Can menus be updated in one place?", answer: "Menu items, pricing, categories, and availability can be managed centrally and reflected across connected ordering experiences." },
    { question: "Which hardware fits a restaurant?", answer: "The right mix depends on your service model. Countertop stations, handheld devices, kitchen displays, and kiosks can be combined around your floor plan." },
  ],
  finalTitle: "Build a restaurant system around your service",
  finalText: "Tell us how your team works and we’ll help shape a connected setup for your counter, floor, kitchen, and customers.",
};
