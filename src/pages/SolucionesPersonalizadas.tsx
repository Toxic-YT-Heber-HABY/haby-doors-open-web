import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Lightbulb, BarChart3, BookOpen, Clock, Zap, ArrowRight } from "lucide-react";

const SolucionesPersonalizadas = () => {
  const steps = [
    { icon: Lightbulb, title: "Identificación", desc: "Analizamos los desafíos que enfrentas." },
    { icon: BarChart3, title: "Análisis", desc: "Diseñamos una estrategia detallada." },
    { icon: BookOpen, title: "Propuesta", desc: "Plan con funcionalidades y tecnologías." },
    { icon: Zap, title: "Desarrollo", desc: "Implementación con metodologías ágiles." },
    { icon: CheckCircle, title: "Pruebas", desc: "Validación rigurosa de calidad." },
    { icon: Clock, title: "Seguimiento", desc: "Soporte continuo post-lanzamiento." },
  ];

  const solutions = [
    {
      title: "Sistemas de Gestión",
      desc: "Automatiza y optimiza procesos de tu negocio.",
      items: ["Gestión de inventarios", "Seguimiento de proyectos", "Administración de clientes"],
    },
    {
      title: "Herramientas de Productividad",
      desc: "Automatiza tareas repetitivas de tu equipo.",
      items: ["Generación de informes", "Colaboración en equipo", "Automatización administrativa"],
    },
    {
      title: "Plataformas Educativas",
      desc: "Sistemas de aprendizaje y gestión educativa.",
      items: ["LMS personalizados", "Evaluación interactiva", "Seguimiento académico"],
    },
    {
      title: "Finanzas y Contabilidad",
      desc: "Simplifica la gestión financiera.",
      items: ["Gastos e ingresos", "Facturación", "Dashboards financieros"],
    },
  ];

  const cases = [
    { title: "HABYKeys", client: "Perla Itzel Rosales Flores", result: "35% más productividad", image: "/lovable-uploads/7d27120f-0c6b-4fdf-989a-e0b32feb1843.png" },
    { title: "HABY Score Tracker", client: "Prof. Martha N. Ramírez", result: "40% mejor participación", image: "/lovable-uploads/8ba55e5f-90b4-4561-90c1-d8b8986c025b.png" },
    { title: "HABY CLASS", client: "Proyecto Personal", result: "55% menos tiempo admin", image: "/lovable-uploads/d93cbf56-5f67-47f8-9472-e864723e0be6.png" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="Soluciones Personalizadas | HABY"
        description="Sistemas de gestión, herramientas de productividad, plataformas educativas y finanzas: soluciones digitales a medida para tu organización."
        url="https://haby-doors-open-web.lovable.app/soluciones-personalizadas"
      />
      <Navbar />
      <main className="flex-grow">
        <PageHeader
          badge="Soluciones Personalizadas"
          title="Tecnología a tu medida"
          description="Desarrollamos herramientas tecnológicas para resolver tus problemas específicos y optimizar procesos."
        />

        {/* Process */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <motion.div className="text-center max-w-2xl mx-auto mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-4">Nuestro Enfoque</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Cómo creamos soluciones</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((s, i) => (
                <motion.div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <s.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-20 md:py-28 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div className="text-center max-w-2xl mx-auto mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-4">Nuestras Soluciones</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Tipos de soluciones</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {solutions.map((s, i) => (
                <motion.div key={i} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-colors" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cases */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <motion.div className="text-center max-w-2xl mx-auto mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-4">Casos de Éxito</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Resultados reales</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cases.map((c, i) => (
                <motion.div key={i} className="rounded-2xl bg-card border border-border overflow-hidden" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <img src={c.image} alt={c.title} className="w-full aspect-video object-cover" loading="lazy" />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-1">{c.title}</h3>
                    <p className="text-xs text-muted-foreground mb-3">Cliente: {c.client}</p>
                    <span className="inline-block px-3 py-1 rounded-lg bg-green-500/10 text-green-700 text-xs font-medium">
                      {c.result}
                    </span>
                  </div>
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
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">¿Tienes un problema que resolver?</h2>
              <p className="text-white/50 mb-8">Contáctanos para una consulta gratuita.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contacto" className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                  Consulta gratuita <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link to="/portafolio" className="inline-flex items-center justify-center px-8 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors">
                  Ver casos de éxito
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

export default SolucionesPersonalizadas;
