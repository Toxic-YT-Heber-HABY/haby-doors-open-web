import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import ImageZoom from './ImageZoom';
import ValidatedExternalLink from './ValidatedExternalLink';
import { getFeaturedProjects } from '@/data/projectsData';

const projects = getFeaturedProjects();

const PortfolioSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase text-primary bg-primary/8 border border-primary/15 mb-4">
            Portafolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Proyectos que{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              abren puertas
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Soluciones web personalizadas que resuelven problemas reales.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group h-full bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/20 hover:shadow-xl transition-all duration-500">
                <div className="relative aspect-video overflow-hidden">
                  <ImageZoom
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  {project.featured && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-primary text-primary-foreground text-[10px] font-semibold uppercase tracking-wider rounded-full">
                      Destacado
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-medium text-primary uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {project.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    {project.url ? (
                      <ValidatedExternalLink
                        url={project.url}
                        className="text-sm font-medium text-primary hover:text-accent transition-colors flex items-center gap-1"
                      >
                        Ver proyecto <ExternalLink className="w-3 h-3" />
                      </ValidatedExternalLink>
                    ) : (
                      <span className="text-sm text-muted-foreground/40">Privado</span>
                    )}
                    <Link
                      to={`/portafolio/${project.id}`}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Detalles →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            to="/portafolio"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-90 hover:shadow-lg transition-all duration-300"
          >
            Ver todos los proyectos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
