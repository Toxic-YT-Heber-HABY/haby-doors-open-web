import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';
import ImageZoom from './ImageZoom';
import ValidatedExternalLink from './ValidatedExternalLink';
import { getFeaturedProjects } from '@/data/projectsData';

const projects = getFeaturedProjects();

const PortfolioSection = () => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase text-[hsl(250,70%,60%)] bg-[hsl(250,70%,60%/0.08)] border border-[hsl(250,70%,60%/0.15)] mb-4">
            Portafolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Proyectos que{' '}
            <span className="bg-gradient-to-r from-[hsl(250,70%,55%)] to-[hsl(280,80%,60%)] bg-clip-text text-transparent">
              abren puertas
            </span>
          </h2>
          <p className="text-gray-500 text-lg">
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
              <div className="group h-full bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-[hsl(250,70%,60%/0.2)] hover:shadow-[0_20px_50px_-15px_hsl(250,50%,40%/0.12)] transition-all duration-500">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <ImageZoom
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  {project.featured && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-[hsl(250,70%,60%)] text-white text-[10px] font-semibold uppercase tracking-wider rounded-full">
                      Destacado
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-medium text-[hsl(250,70%,60%)] uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-[11px] text-gray-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {project.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[hsl(250,70%,55%)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    {project.url ? (
                      <ValidatedExternalLink
                        url={project.url}
                        className="text-sm font-medium text-[hsl(250,70%,55%)] hover:text-[hsl(280,80%,55%)] transition-colors flex items-center gap-1"
                      >
                        Ver proyecto <ExternalLink className="w-3 h-3" />
                      </ValidatedExternalLink>
                    ) : (
                      <span className="text-sm text-gray-300">Privado</span>
                    )}
                    <Link
                      to={`/portafolio/${project.id}`}
                      className="text-sm text-gray-400 hover:text-gray-700 transition-colors"
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
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 hover:shadow-lg transition-all duration-300"
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
