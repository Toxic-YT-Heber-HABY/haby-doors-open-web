import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Code, Layout, Server, Smartphone, Globe, ArrowRight } from "lucide-react";
import usePageTitle from "@/hooks/usePageTitle";

const DesarrolloWeb = () => {
  usePageTitle();

  const features = [
    { icon: Layout, title: "Diseño Responsive", desc: "Sitios que se adaptan perfectamente a cualquier dispositivo." },
    { icon: Code, title: "Código Limpio", desc: "Desarrollo con las mejores prácticas y tecnologías modernas." },
    { icon: Smartphone, title: "Mobile First", desc: "Priorizamos la experiencia en dispositivos móviles." },
    { icon: Server, title: "Backend Robusto", desc: "APIs y servicios escalables y seguros." },
    { icon: Globe, title: "SEO Optimizado", desc: "Posicionamiento orgánico desde la base." },
    { icon: CheckCircle, title: "Testing QA", desc: "Pruebas exhaustivas para garantizar calidad." },
  ];

  const techs = ["React", "TypeScript", "Next.js", "Tailwind CSS", "Supabase", "Node.js"];

  const projectImages = [
    { src: "/lovable-uploads/7d27120f-0c6b-4fdf-989a-e0b32feb1843.png", alt: "Dashboard" },
    { src: "/lovable-uploads/8ba55e5f-90b4-4561-90c1-d8b8986c025b.png", alt: "Aplicación" },
    { src: "/lovable-uploads/d93cbf56-5f67-47f8-9472-e864723e0be6.png", alt: "E-commerce" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <PageHeader
          badge="Desarrollo Web"
          title="Creamos experiencias web extraordinarias"
          description="Transformamos tus ideas en sitios web y aplicaciones que impulsan tu negocio hacia el éxito digital."
        />

        {/* Features */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <motion.div className="text-center max-w-2xl mx-auto mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-4">Servicios de desarrollo</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Lo que ofrecemos</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <motion.div key={i} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-colors group" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <f.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 md:py-28 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div className="text-center max-w-2xl mx-auto mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-4">Stack Tecnológico</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Tecnologías que usamos</h2>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
              {techs.map((t, i) => (
                <motion.span key={i} className="px-5 py-2.5 rounded-xl bg-card border border-border text-foreground font-medium text-sm hover:border-primary/30 transition-colors" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                  {t}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <motion.div className="text-center max-w-2xl mx-auto mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-4">Portfolio</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Proyectos destacados</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projectImages.map((img, i) => (
                <motion.div key={i} className="rounded-2xl overflow-hidden border border-border group" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <img src={img.src} alt={img.alt} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-brand-dark text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div className="text-center max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">¿Listo para empezar?</h2>
              <p className="text-white/50 mb-8">Contáctanos y hagamos tu proyecto realidad.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contacto" className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                  Comenzar proyecto <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link to="/portafolio" className="inline-flex items-center justify-center px-8 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors">
                  Ver portafolio
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DesarrolloWeb;
