import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Code, Lightbulb, Clock, Users, Settings, BarChart, MessageSquare, PenTool, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const servicios = [
  {
    icon: Code,
    title: "Desarrollo Web Personalizado",
    description: "Páginas web y aplicaciones a medida, diseñadas para resolver problemas específicos de tu negocio.",
    features: ["Diseño responsive", "Optimización móvil", "Interfaces intuitivas", "Código mantenible"],
  },
  {
    icon: Lightbulb,
    title: "Soluciones a Medida",
    description: "Te ayudamos a identificar el problema y diseñamos una solución personalizada desde cero.",
    features: ["Análisis de necesidades", "Planificación estratégica", "Desarrollo iterativo", "Soporte continuo"],
  },
  {
    icon: Clock,
    title: "Optimización de Procesos",
    description: "Automatizamos tareas repetitivas para que puedas enfocarte en lo que realmente importa.",
    features: ["Análisis de flujos", "Automatización", "Integración de sistemas", "Monitoreo"],
  },
  {
    icon: Users,
    title: "Plataformas Colaborativas",
    description: "Herramientas que facilitan la colaboración en equipo y mejoran la comunicación.",
    features: ["Gestión de proyectos", "Comunicación", "Espacios compartidos", "Control de versiones"],
  },
  {
    icon: Settings,
    title: "Sistemas de Gestión",
    description: "Sistemas personalizados para inventarios, clientes, reservas y otros aspectos clave.",
    features: ["CRM personalizados", "Inventarios", "Gestión de reservas", "Reportes analíticos"],
  },
  {
    icon: BarChart,
    title: "Análisis de Datos",
    description: "Dashboards interactivos y herramientas de visualización para tomar mejores decisiones.",
    features: ["Dashboards", "Reportes", "Visualizaciones", "Análisis predictivo"],
  },
  {
    icon: MessageSquare,
    title: "Chatbots & Asistentes",
    description: "Automatizamos la atención al cliente mediante chatbots inteligentes.",
    features: ["Chatbots", "Asistentes virtuales", "Integración", "Respuestas contextuales"],
  },
  {
    icon: PenTool,
    title: "Diseño UX/UI",
    description: "Interfaces intuitivas y atractivas que mejoran la experiencia del usuario.",
    features: ["Diseño centrado en usuario", "Prototipos", "Pruebas de usabilidad", "Responsive"],
  },
  {
    icon: Zap,
    title: "Mantenimiento & Optimización",
    description: "Mantenemos y optimizamos tus aplicaciones web existentes.",
    features: ["Actualizaciones", "Rendimiento", "Seguridad", "Nuevas funcionalidades"],
  },
];

const steps = [
  { num: "01", title: "Escucha", desc: "Entendemos a fondo tu problema o necesidad." },
  { num: "02", title: "Propuesta", desc: "Diseñamos una solución personalizada." },
  { num: "03", title: "Desarrollo", desc: "Construimos con los más altos estándares." },
  { num: "04", title: "Pruebas", desc: "Verificamos que todo funcione perfectamente." },
  { num: "05", title: "Soporte", desc: "Te acompañamos más allá de la entrega." },
];

const Servicios = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <PageHeader
          badge="Nuestros Servicios"
          title="Soluciones que abren puertas"
          description="Desarrollamos soluciones web personalizadas que resuelven problemas cotidianos y optimizan tu tiempo."
        />

        {/* Process */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-2xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
                Nuestro Proceso
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                ¿Cómo trabajamos?
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="text-4xl font-display font-bold text-primary/15 group-hover:text-primary/25 transition-colors">
                    {step.num}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mt-2 mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 md:py-28 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-2xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
                ¿Qué ofrecemos?
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Servicios para abrir puertas
              </h2>
              <p className="text-muted-foreground">
                Soluciones web personalizadas que resuelven problemas específicos y optimizan tu tiempo.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicios.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={i}
                    className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{s.description}</p>
                    <ul className="space-y-1.5">
                      {s.features.map((f, fi) => (
                        <li key={fi} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 md:py-28 bg-brand-dark text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center max-w-2xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                ¿Por qué HABY?
              </h2>
              <p className="text-white/50">
                Soluciones que impactan en tu día a día.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Clock, title: "Ahorro de tiempo", desc: "Automatizamos tareas repetitivas." },
                { icon: Lightbulb, title: "A medida", desc: "Cada solución es única para ti." },
                { icon: Users, title: "Enfoque cliente", desc: "Trabajamos de cerca contigo." },
                { icon: Zap, title: "Resultados", desc: "Impacto medible y positivo." },
              ].map((b, i) => (
                <motion.div
                  key={i}
                  className="p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <b.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
                  <p className="text-sm text-white/50">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                ¿Listo para optimizar tu tiempo?
              </h2>
              <p className="text-muted-foreground mb-8">
                Contáctanos hoy mismo para hablar sobre tu problema y cómo podemos ayudarte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  Solicitar consulta gratuita
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/precios"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-xl border border-border text-foreground font-semibold hover:bg-muted transition-colors"
                >
                  Ver precios
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

export default Servicios;
