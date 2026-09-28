import { CustomerStrip } from "./components/CustomerStrip";
import { EcosystemSection } from "./components/EcosystemSection";
import { Footer } from "./components/Footer";
import { HardwareShowcase } from "./components/HardwareShowcase";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { OperationsSection } from "./components/OperationsSection";
import { OrderingSection } from "./components/OrderingSection";
import { StatsSection } from "./components/StatsSection";
import { SupportSection } from "./components/SupportSection";
import { TestimonialSection } from "./components/TestimonialSection";
export default function HomePage() {
  return (
    <main className="home-page">
      <section className="hero-shell">
        <Header />
        <Hero />
      </section>
      <CustomerStrip />
      <OperationsSection />
      <HardwareShowcase />
      <StatsSection />
      <TestimonialSection />
      <OrderingSection />
      <EcosystemSection />
      <SupportSection />
      <Footer />
    </main>
  );
}
