import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ValidatedExternalLink from "@/components/ValidatedExternalLink";
import { motion } from "framer-motion";
import { ExternalLink, Github, Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projectsData } from "@/data/projectsData";

const Portafolio = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <PageHeader
          badge="Portafolio"
          title="Nuestros Proyectos"
          description="Soluciones innovadoras que hemos desarrollado para nuestros clientes."
        />

        {/* Projects Grid */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
              }}
            >
              {projectsData.map((proyecto) => (
                <motion.div
                  key={proyecto.id}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
                  }}
                  className="rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/20 hover:shadow-lg transition-all group"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={proyecto.image}
                      alt={proyecto.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {proyecto.isPrivate && (
                      <div className="absolute top-3 right-3 bg-foreground/80 text-background px-2.5 py-1 rounded-full text-xs flex items-center gap-1">
                        <Lock className="h-3 w-3" />
                        Privado
                      </div>
                    )}
                    {proyecto.featured && (
                      <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2.5 py-1 rounded-full text-xs font-medium">
                        ⭐ Destacado
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {proyecto.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{proyecto.date}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-foreground mb-2">{proyecto.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{proyecto.description}</p>

                    {proyecto.technologies && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {proyecto.technologies.slice(0, 3).map((tech, i) => (
                          <span key={i} className="px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground">
                            {tech}
                          </span>
                        ))}
                        {proyecto.technologies.length > 3 && (
                          <span className="px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground">
                            +{proyecto.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    )}

                    <div className="text-xs text-muted-foreground mb-4">
                      <strong className="text-foreground">Cliente:</strong> {proyecto.client}
                    </div>

                    <div className="flex items-center justify-between">
                      <Link
                        to={`/portafolio/${proyecto.id}`}
                        className="text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1"
                      >
                        Ver detalles
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      {!proyecto.isPrivate && (
                        <div className="flex gap-2">
                          {proyecto.url && (
                            <ValidatedExternalLink url={proyecto.url} className="text-muted-foreground hover:text-primary transition-colors" showIcon={false} aria-label={`Abrir sitio web del proyecto ${proyecto.title}`}>
                              <ExternalLink className="h-4 w-4" aria-hidden="true" />
                            </ValidatedExternalLink>
                          )}
                          {proyecto.github && (
                            <ValidatedExternalLink url={proyecto.github} className="text-muted-foreground hover:text-primary transition-colors" showIcon={false} aria-label={`Ver código fuente de ${proyecto.title} en GitHub`}>
                              <Github className="h-4 w-4" aria-hidden="true" />
                            </ValidatedExternalLink>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                ¿Tienes un proyecto en mente?
              </h2>
              <p className="text-muted-foreground mb-8">
                Nos encantaría ser parte de tu próximo proyecto.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  Iniciar proyecto
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

export default Portafolio;
