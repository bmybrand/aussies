import type { SolutionPageData } from "../../components/SolutionPage";

export const healthcareData: SolutionPageData = {
  variant: "healthcare",
  eyebrow: "Aussie's for healthcare businesses",
  title: "A calmer way to handle every payment",
  description: "Clear, flexible payment tools for clinics, allied health providers, wellness practices, and care-focused teams.",
  heroImage: "/images/home/healthcare-hero-v2.png",
  heroAlt: "A clinic receptionist helping a patient complete a card payment",
  metrics: [{ value: "CLEAR", label: "Patient-friendly checkout" }, { value: "FLEX", label: "In-person and remote payments" }, { value: "VIEW", label: "Connected reporting" }],
  sectionEyebrow: "Designed around care",
  sectionTitle: "Keep payment administration simple and professional",
  sectionIntro: "Support staff with straightforward tools while giving patients flexible, familiar ways to complete payment.",
  features: [
    { title: "Flexible checkout", text: "Accept common payment methods at reception, in a consultation room, or through an approved remote workflow." },
    { title: "Clear invoicing", text: "Create and track invoices with organized references that make follow-up easier for administrative teams." },
    { title: "Virtual terminal", text: "Process authorized payments without requiring the patient and card to be present at the same counter." },
    { title: "Recurring plans", text: "Support approved repeat-payment arrangements for ongoing services, programs, or memberships." },
    { title: "Team permissions", text: "Give staff appropriate access based on their role and responsibilities within the practice." },
    { title: "Business reporting", text: "Review transactions, refunds, settlements, and operational trends from a connected dashboard." },
  ],
  journey: { eyebrow: "At reception and beyond", title: "Keep the administrative side from interrupting care", text: "A clear payment workflow can reduce friction at the desk and make it easier for staff to manage follow-up after the visit.", points: ["Offer familiar payment choices", "Organize transactions and invoices", "Give teams visibility without clutter"], image: "/images/home/restaurant-hero.png", imageAlt: "Professional counter with a compact payment terminal" },
  capabilities: [
    { title: "Respectful by design", text: "Create a straightforward checkout experience that feels calm, clear, and appropriate for care settings." },
    { title: "Operational visibility", text: "Help authorized team members understand payment activity without relying on disconnected records." },
    { title: "Configured with care", text: "Choose devices and workflows based on your environment, team responsibilities, and service model." },
  ],
  quote: { text: "Payment feels like a natural final step instead of another administrative obstacle.", name: "Dr. Sam Patel", role: "Allied health practice owner" },
  faqs: [
    { question: "Can payments be accepted away from reception?", answer: "Portable devices can support authorized payments in different areas of a practice, subject to your setup and operational policies." },
    { question: "Can the system create invoices?", answer: "Invoice tools can help teams request, record, and follow up on payments through a clearer administrative process." },
    { question: "Can staff access be controlled?", answer: "Role-based permissions can help limit access according to staff responsibilities and the way your practice is organized." },
    { question: "Is this a clinical records system?", answer: "No. Aussie’s POS is focused on payments and business operations. Clinical and patient-record requirements should be handled through purpose-built, appropriately assessed healthcare systems." },
  ],
  finalTitle: "Create a payment setup that suits your practice",
  finalText: "We’ll help map devices and payment workflows around your reception, team, and patient experience.",
};
