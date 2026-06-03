import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const SobreNosotros = () => {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Sobre HABY - Open The Doors",
    "url": "https://haby-doors-open-web.lovable.app/sobre-nosotros",
    "description": "Historia, misión, visión y valores de HABY, fundada por Heber Zadkiel García Pérez.",
    "mainEntity": {
      "@type": "Organization",
      "name": "HABY - Open The Doors",
      "founder": { "@type": "Person", "name": "Heber Zadkiel García Pérez" },
      "url": "https://haby-doors-open-web.lovable.app/"
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="Sobre Nosotros | HABY - Open The Doors"
        description="Conoce la historia, misión y filosofía de HABY: soluciones web personalizadas que abren puertas a nuevas posibilidades."
        url="https://haby-doors-open-web.lovable.app/sobre-nosotros"
        structuredData={aboutSchema}
      />
      <Navbar />
      <main className="flex-grow">
        <PageHeader
          badge="Sobre Nosotros"
          title="Conoce a HABY"
          description="Nuestra historia, misión y la filosofía detrás de 'HABY OPEN THE DOORS'."
        />

        {/* Historia */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
                  Nuestra Historia
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  El nacimiento de HABY
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    HABY nació de la visión de Heber Zadkiel García Pérez, quien identificó una necesidad fundamental: soluciones web que realmente resolvieran problemas cotidianos y ayudaran a optimizar el tiempo.
                  </p>
                  <p>
                    Desde su fundación, HABY ha estado impulsada por la filosofía de "abrir puertas" a nuevas posibilidades. Creemos que la tecnología debe ser una herramienta de liberación.
                  </p>
                  <p>
                    Nuestra trayectoria ha estado marcada por un compromiso inquebrantable con la innovación, la eficiencia y la creación de soluciones personalizadas.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="aspect-square max-w-md mx-auto rounded-3xl overflow-hidden border border-border">
                  <img
                    src="/lovable-uploads/90ffa1ad-1f42-465a-b17e-61918ab82862.png"
                    alt="Fundación de HABY"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Fundador */}
        <section className="py-20 md:py-28 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                className="order-2 lg:order-1"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="aspect-square max-w-md mx-auto rounded-3xl overflow-hidden border border-border">
                  <img
                    src="/lovable-uploads/90ffa1ad-1f42-465a-b17e-61918ab82862.png"
                    alt="Heber Zadkiel García Pérez"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>
              <motion.div
                className="order-1 lg:order-2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
                  Nuestro Fundador
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  Heber Zadkiel García Pérez
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Con una sólida formación en desarrollo web y una pasión por resolver problemas, Heber fundó HABY con la misión de crear soluciones que marquen una diferencia real.
                  </p>
                  <p>
                    Su enfoque combina habilidades técnicas avanzadas con una profunda comprensión de las necesidades humanas, diseñando soluciones intuitivas y centradas en el usuario.
                  </p>
                  <p>
                    Su filosofía: la tecnología debe abrir puertas a nuevas posibilidades, liberando tiempo y recursos para actividades más significativas.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Misión, Visión, Valores */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-2xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
                Nuestra Filosofía
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Misión, Visión y Valores
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Misión",
                  content: "Desarrollar soluciones web innovadoras que resuelvan problemas cotidianos, optimicen el tiempo y permitan enfocarse en lo que realmente importa.",
                },
                {
                  title: "Visión",
                  content: "Ser reconocidos como líderes en el desarrollo de soluciones web que transforman la manera en que las personas gestionan su tiempo.",
                },
                {
                  title: "Valores",
                  content: "Innovación constante • Enfoque en el cliente • Excelencia técnica • Soluciones personalizadas • Compromiso • Mejora continua",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="p-8 rounded-2xl bg-card border border-border hover:border-primary/20 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <h3 className="text-xl font-display font-bold text-primary mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lema Section */}
        <section className="py-20 md:py-28 bg-brand-dark text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  "HABY OPEN THE DOORS"
                </h2>
                <div className="space-y-4 text-white/60 leading-relaxed">
                  <p>
                    Más que un lema, es la esencia de nuestra filosofía. Representa nuestra misión de abrir puertas a nuevas posibilidades a través de soluciones web innovadoras.
                  </p>
                  <p>
                    Cada solución que desarrollamos está diseñada para eliminar obstáculos, automatizar tareas repetitivas y liberar tiempo valioso.
                  </p>
                </div>
                <Link
                  to="/contacto"
                  className="inline-flex items-center mt-8 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  Abre nuevas puertas
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="w-64 h-64 rounded-full border border-white/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl md:text-6xl font-display font-bold text-white mb-2">HABY</div>
                    <div className="text-lg font-medium text-primary">OPEN THE DOORS</div>
                  </div>
                </div>
              </motion.div>
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
                ¿Listo para abrir nuevas puertas?
              </h2>
              <p className="text-muted-foreground mb-8">
                Contáctanos y descubre cómo nuestras soluciones pueden ayudarte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  Contáctanos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/servicios"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-xl border border-border text-foreground font-semibold hover:bg-muted transition-colors"
                >
                  Ver servicios
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

export default SobreNosotros;
