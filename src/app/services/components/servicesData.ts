import type { SolutionPageData } from "../../components/SolutionPage";

export const servicesData: SolutionPageData = {
  variant: "services",
  eyebrow: "Aussie's for service businesses",
  title: "The easier way to book, serve, and get paid",
  description: "Appointments, customer details, staff schedules, invoices, and payments—working together from the first booking to the final receipt.",
  heroImage: "/images/home/services-hero-v2.png",
  heroAlt: "A salon owner accepting a payment from a customer in a modern service studio",
  metrics: [{ value: "BOOK", label: "Appointments with clarity" }, { value: "BILL", label: "Invoice with less effort" }, { value: "GROW", label: "Build lasting relationships" }],
  sectionEyebrow: "Your day, organized",
  sectionTitle: "Practical tools for businesses built on service",
  sectionIntro: "Keep the customer experience personal while the operational details stay organized behind the scenes.",
  features: [
    { title: "Appointments", text: "Organize bookings, availability, and customer schedules in a simple, accessible view." },
    { title: "Fast invoicing", text: "Create clear invoices and collect payment in person or remotely without duplicating work." },
    { title: "Recurring payments", text: "Support memberships, plans, and repeat services with predictable payment workflows." },
    { title: "Customer profiles", text: "Keep useful preferences, visit history, and contact information together for better follow-up." },
    { title: "Team scheduling", text: "Coordinate availability, roles, and workloads across employees and locations." },
    { title: "Mobile checkout", text: "Take payment at the desk, chair, counter, job site, or wherever the service is completed." },
  ],
  journey: { eyebrow: "From booking to payment", title: "A connected experience for your team and customers", text: "Give staff the context they need while customers move smoothly from scheduling through service and payment.", points: ["Reduce repeated data entry", "Keep customer history easy to find", "See bookings and revenue in context"], image: "/images/home/hardware-counter-pos.png", imageAlt: "Point-of-sale system ready for a service business" },
  capabilities: [
    { title: "Stay personal", text: "Keep service warm and human while routine administration becomes easier to manage." },
    { title: "Work from anywhere", text: "Use cloud-connected tools to stay informed at the front desk, between locations, or on the move." },
    { title: "Fit your workflow", text: "Configure services, staff access, payment options, and connected apps around the way you operate." },
  ],
  quote: { text: "The day feels calmer when bookings, customer notes, and payments all live together.", name: "Alex Morgan", role: "Service business operator" },
  faqs: [
    { question: "Can customers pay away from the counter?", answer: "Yes. Mobile devices and remote payment options can support service businesses that work across rooms, locations, or job sites." },
    { question: "Can it support appointments and staff schedules?", answer: "Connected scheduling tools can help organize availability, bookings, and staff assignments around your service model." },
    { question: "Can I create invoices?", answer: "Invoice workflows can help you request and record payments clearly, including when the customer is not physically present." },
    { question: "Will it work for memberships or repeat services?", answer: "Recurring payment and customer-management options can support businesses with memberships, plans, or regular appointments." },
  ],
  finalTitle: "Give your service business a clearer operating rhythm",
  finalText: "We’ll help you choose tools that fit your appointments, team, customers, and preferred ways to get paid.",
};
