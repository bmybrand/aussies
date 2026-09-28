import type { SolutionPageData } from "../../components/SolutionPage";

export const retailData: SolutionPageData = {
  variant: "retail",
  eyebrow: "Aussie's for retail",
  title: "Turn every shelf, sale, and customer visit into momentum",
  description: "A flexible retail POS that connects checkout, inventory, customer loyalty, returns, reporting, and online sales in one dependable system.",
  heroImage: "/images/home/hardware-counter-pos.png",
  heroAlt: "Modern point-of-sale hardware at a retail counter",
  metrics: [{ value: "SELL", label: "In store and online" }, { value: "TRACK", label: "Inventory in real time" }, { value: "KNOW", label: "Your customers better" }],
  sectionEyebrow: "Retail, reconnected",
  sectionTitle: "Run the shop without losing sight of the customer",
  sectionIntro: "Move quickly at checkout, understand what is selling, and keep stock and customer activity connected across channels.",
  features: [
    { title: "Inventory control", text: "Track products, variants, stock levels, and item performance with less spreadsheet work." },
    { title: "Fast checkout", text: "Keep lines moving with clear product lookup, barcode support, and flexible payment options." },
    { title: "Simple returns", text: "Find transactions and handle refunds or exchanges through a consistent team workflow." },
    { title: "Unified selling", text: "Coordinate in-store and online activity so orders, products, and customer records stay aligned." },
    { title: "Customer loyalty", text: "Create stronger repeat relationships with profiles, rewards, and relevant engagement." },
    { title: "Sales reporting", text: "See product mix, margins, trends, and performance across stores and sales channels." },
  ],
  journey: { eyebrow: "From stockroom to checkout", title: "Know what is moving and what needs attention", text: "Connect product information with each sale so your team can replenish intelligently and answer customers confidently.", points: ["Monitor stock as sales happen", "Organize variants and product categories", "Bring store and online performance together"], image: "/images/home/restaurant-hero.png", imageAlt: "Customer-facing countertop and payment environment" },
  capabilities: [
    { title: "Built for product depth", text: "Handle categories, variants, and growing catalogs without making checkout complicated." },
    { title: "Ready for every channel", text: "Create a more unified view of products and orders across your physical and digital storefronts." },
    { title: "Insight you can use", text: "Turn transaction activity into clearer decisions about stock, staffing, and customer demand." },
  ],
  quote: { text: "We finally see the shop as one business, whether the customer buys online or at the counter.", name: "Jordan Lee", role: "Independent retailer" },
  faqs: [
    { question: "Can I track product variants?", answer: "Yes. Product records can be organized around attributes such as size, color, style, and other variants relevant to your catalog." },
    { question: "Does it support barcode workflows?", answer: "Compatible scanners and product tools can speed up item entry, checkout, and inventory updates." },
    { question: "Can online and in-store sales work together?", answer: "Connected commerce tools can help coordinate products, orders, customer activity, and reporting across channels." },
    { question: "Can staff process returns?", answer: "Returns and refunds can be handled through role-aware workflows designed to keep the process clear and consistent." },
  ],
  finalTitle: "Build a retail system ready for your next sale",
  finalText: "From a single counter to a growing catalog, we’ll help shape a setup around how and where you sell.",
};
