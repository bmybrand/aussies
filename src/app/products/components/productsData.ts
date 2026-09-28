import type { SolutionPageData } from "../../components/SolutionPage";

export const productsData: SolutionPageData = {
  variant: "products",
  eyebrow: "Aussie's product family",
  title: "The right device for every way you do business",
  description: "Build a connected setup from countertop stations, customer displays, handheld terminals, mobile readers, kitchen screens, and self-service experiences.",
  heroImage: "/images/home/hardware-counter-pos.png",
  heroAlt: "A modern point-of-sale terminal on a business counter",
  metrics: [{ value: "GO", label: "Mobile card reader" }, { value: "FLEX", label: "Handheld point of sale" }, { value: "DUO", label: "Two-screen countertop" }],
  sectionEyebrow: "Hardware with purpose",
  sectionTitle: "Choose tools that fit the work, not the other way around",
  sectionIntro: "Start with the device your team needs today and build outward with products designed to work as one system.",
  features: [
    { title: "Countertop stations", text: "Give busy counters a stable, full-featured workstation for orders, payments, receipts, and daily management." },
    { title: "Customer displays", text: "Let customers review orders, follow prompts, and complete payment through a clear customer-facing experience." },
    { title: "Handheld POS", text: "Take orders, scan items, and accept payment throughout the floor or away from the main counter." },
    { title: "Mobile readers", text: "Turn a compatible phone into a compact payment point for markets, events, field work, and backup checkout." },
    { title: "Kitchen displays", text: "Organize production tickets and connect order channels with teams preparing and fulfilling orders." },
    { title: "Self-service kiosks", text: "Give customers room to browse, customize, and submit orders through a guided digital experience." },
  ],
  journey: { eyebrow: "One product family", title: "Start focused and expand without rebuilding", text: "A connected device strategy makes it easier to add checkout points, mobile service, production screens, and customer-facing tools over time.", points: ["Match devices to staff roles", "Keep experiences consistent across hardware", "Add capacity as volume and locations grow"], image: "/images/home/restaurant-hero.png", imageAlt: "Point-of-sale terminal ready for customer checkout" },
  capabilities: [
    { title: "Designed to work together", text: "Connected products share a familiar operating environment and a consistent view of business activity." },
    { title: "Made for real environments", text: "Choose compact, portable, countertop, and high-volume formats based on space and service conditions." },
    { title: "Supported beyond setup", text: "Plan onboarding, configuration, and ongoing support around the needs of your team." },
  ],
  quote: { text: "Every device has a clear job, but together they feel like one system.", name: "Taylor Brooks", role: "Multi-site operator" },
  faqs: [
    { question: "Which product should I start with?", answer: "That depends on where transactions happen, how many people need access, whether mobility matters, and what operational tools your team uses." },
    { question: "Can I combine countertop and handheld devices?", answer: "Yes. A connected setup can combine fixed and mobile hardware to support different roles and customer touchpoints." },
    { question: "Can the system grow later?", answer: "Additional compatible devices and software capabilities can be added as transaction volume, teams, and locations evolve." },
    { question: "Do you help with setup?", answer: "Onboarding can cover device configuration, core workflows, team familiarization, and planning for connected tools." },
  ],
  finalTitle: "Find the hardware mix that fits your floor",
  finalText: "Tell us where your customers pay and how your team works. We’ll help you shape the right product setup.",
};
