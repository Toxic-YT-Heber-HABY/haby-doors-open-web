
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import usePageTitle from "@/hooks/usePageTitle";

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
      "https://facebook.com/habyopenthedoors",
      "https://instagram.com/habyopenthedoors",
      "https://x.com/Haby_Open_Doors"
    ]
  };
  
  return (
    <>
      <SEOHead 
        title="HABY | Portafolio & Soluciones Web - Desarrollo Profesional"
        description="HABY Open The Doors: Portafolio profesional de desarrollo web, aplicaciones modernas y soluciones digitales personalizadas que impulsan tu negocio."
        keywords="portafolio desarrollo web, diseño web moderno, aplicaciones web personalizadas, soluciones digitales, HABY"
        image="/lovable-uploads/f3e5eff1-a976-44c3-97a2-1e1e73c75a36.png"
        url="https://haby-open-doors.com/"
        type="website"
        structuredData={structuredData}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow" role="main">
          <Hero />
          <AboutSection />
          <SkillsSection />
          <ExperienceTimeline />
          <PortfolioSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
