import type { SolutionPageData } from "../../components/SolutionPage";

export const resourcesData: SolutionPageData = {
  variant: "resources",
  eyebrow: "Aussie's resources",
  title: "Answers and guidance for every stage of the journey",
  description: "Practical help for choosing a system, preparing your team, improving daily workflows, and getting more value from connected business tools.",
  heroImage: "/images/home/pizzeria-story.png",
  heroAlt: "A local business team at work during a busy service",
  metrics: [{ value: "PLAN", label: "Choose with confidence" }, { value: "LEARN", label: "Help your team succeed" }, { value: "GROW", label: "Improve as you go" }],
  sectionEyebrow: "Knowledge that stays useful",
  sectionTitle: "Find the next answer without losing your momentum",
  sectionIntro: "Explore clear guidance for system selection, setup, daily management, payments, customers, and long-term growth.",
  features: [
    { title: "Getting-started guides", text: "Understand core POS concepts, compare setup options, and prepare the information your team will need." },
    { title: "Help center", text: "Find direct answers for devices, software, payments, accounts, and common operating questions." },
    { title: "Business playbooks", text: "Use practical checklists and ideas for restaurants, retail stores, service teams, and professional practices." },
    { title: "Product education", text: "See how different devices and software capabilities fit specific roles and working environments." },
    { title: "Integration guidance", text: "Plan how accounting, ordering, scheduling, inventory, and other connected tools should work together." },
    { title: "Growth insights", text: "Learn how better reporting, customer engagement, and operational habits can support stronger decisions." },
  ],
  journey: { eyebrow: "From question to action", title: "Useful information, organized around real decisions", text: "Resources should help you move forward—not bury the answer. Start with your goal and follow a clear path to the right guidance.", points: ["Compare solutions by business need", "Prepare your team for a smoother launch", "Keep improving after go-live"], image: "/images/home/hardware-counter-pos.png", imageAlt: "POS hardware ready for setup and onboarding" },
  capabilities: [
    { title: "Straightforward guidance", text: "Clear language and practical examples make unfamiliar payment and POS topics easier to understand." },
    { title: "Built around outcomes", text: "Navigate by the problem you are solving, from faster checkout to stronger inventory visibility." },
    { title: "Support when content is not enough", text: "Move from self-service guidance to a conversation with the team when your situation needs a closer look." },
  ],
  quote: { text: "Good support does more than fix a problem—it helps the team feel confident the next time.", name: "Aussie's support team", role: "Business guidance and onboarding" },
  faqs: [
    { question: "Where should a new business begin?", answer: "Start with your transaction environment, team workflow, sales channels, reporting needs, and plans for growth. Those answers make product selection much clearer." },
    { question: "How do I compare POS devices?", answer: "Consider mobility, counter space, customer interaction, receipt needs, scanning, transaction volume, and which staff roles will use each device." },
    { question: "What should I prepare before setup?", answer: "Useful preparation can include business details, product or menu information, tax settings, staff roles, payment requirements, and a list of tools you want to connect." },
    { question: "Can I speak with someone about my setup?", answer: "Yes. Contact the team for a guided conversation about your business type, workflows, hardware needs, and implementation priorities." },
  ],
  finalTitle: "Still deciding what your business needs?",
  finalText: "Bring us your questions. We’ll help turn them into a practical POS plan built around the way you work.",
};
