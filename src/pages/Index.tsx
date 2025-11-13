
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
import SEOHead from "@/components/SEOHead";
import usePageTitle from "@/hooks/usePageTitle";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  usePageTitle();
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HABY - Open The Doors",
    "url": "https://haby-open-doors.com",
    "logo": "https://haby-open-doors.com/lovable-uploads/f3e5eff1-a976-44c3-97a2-1e1e73c75a36.png",
    "description": "Desarrollamos soluciones web personalizadas, aplicaciones modernas y herramientas digitales innovadoras.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+52-664-440-5772",
      "contactType": "customer service",
      "areaServed": "MX",
      "availableLanguage": "Spanish"
    },
    "sameAs": [
      "https://facebook.com/haby",
      "https://instagram.com/haby",
      "https://twitter.com/haby"
    ]
  };
  
  return (
    <>
      <SEOHead 
        title="HABY | Soluciones Web Personalizadas - Desarrollo y Diseño Profesional"
        description="HABY Open The Doors: Desarrollamos soluciones web personalizadas, aplicaciones modernas y herramientas digitales que resuelven problemas cotidianos y optimizan tu productividad."
        keywords="desarrollo web profesional, diseño web moderno, aplicaciones web personalizadas, herramientas productividad, soluciones digitales"
        image="/lovable-uploads/f3e5eff1-a976-44c3-97a2-1e1e73c75a36.png"
        url="https://haby-open-doors.com/"
        type="website"
        structuredData={structuredData}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow" role="main">
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
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
