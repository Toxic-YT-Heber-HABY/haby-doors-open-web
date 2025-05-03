
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AnimatedGradient from "@/components/AnimatedGradient";
import usePageTitle from "@/hooks/usePageTitle";

const Index = () => {
  // Actualiza el título de la página
  usePageTitle();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AnimatedGradient>
          <AboutSection />
        </AnimatedGradient>
        <ServicesSection />
        <PortfolioSection />
        <AnimatedGradient colors={["#E5DEFF", "#D946EF", "#7E69AB", "#6E59A5"]}>
          <TestimonialsSection />
        </AnimatedGradient>
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
