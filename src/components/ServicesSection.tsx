import { Link } from 'react-router-dom';
import { Code, Lightbulb, Clock, ArrowRight, Zap, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Code className="h-12 w-12 text-haby-accent" />,
    title: "Desarrollo Web",
    description: "Creamos páginas web y aplicaciones a medida, diseñadas meticulosamente para resolver problemas específicos con tecnología moderna.",
    features: ["React & Next.js", "Responsive Design", "SEO Optimizado"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: <Lightbulb className="h-12 w-12 text-haby-accent" />,
    title: "Soluciones Personalizadas",
    description: "Diseñamos soluciones a medida para problemas específicos, incluso cuando no tienes claro qué necesitas exactamente.",
    features: ["Consultoría Gratuita", "Análisis Profundo", "Propuesta Única"],
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: <Clock className="h-12 w-12 text-haby-accent" />,
    title: "Optimización de Tiempo",
    description: "Nuestro enfoque principal es ayudarte a trabajar de forma más eficiente, eliminando tareas repetitivas y automatizando procesos.",
    features: ["Automatización", "Integración API", "Workflow Mejorado"],
    color: "from-green-500/20 to-emerald-500/20"
  }
];

const additionalFeatures = [
  { icon: <Zap className="h-6 w-6" />, text: "Entrega Rápida" },
  { icon: <Shield className="h-6 w-6" />, text: "Seguridad Garantizada" },
  { icon: <Users className="h-6 w-6" />, text: "Soporte 24/7" }
];

const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 right-20 w-64 h-64 bg-haby-light rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-haby-accent/30 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-haby-light text-haby-primary px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-haby-primary/20">
            <Zap className="w-4 h-4" />
            Nuestros Servicios
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            ¿Cómo podemos{' '}
            <span className="text-gradient-safe force-visible-mobile">
              ayudarte?
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            En HABY nos especializamos en abrir puertas a través de soluciones web 
            innovadoras que transforman la manera en que gestionas tu tiempo y optimizas tus procesos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className="relative bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 group-hover:border-haby-accent/30">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-haby-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features list */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-haby-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/servicios" 
                  className="inline-flex items-center text-haby-primary hover:text-haby-secondary font-semibold group-hover:translate-x-2 transition-all duration-300"
                >
                  Saber más 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features adicionales */}
        <motion.div 
          className="bg-gradient-to-r from-haby-primary to-haby-secondary rounded-2xl p-8 lg:p-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                ¿Por qué elegir HABY?
              </h3>
              <p className="text-lg text-purple-100 mb-6">
                Nos comprometemos a entregar soluciones que realmente marquen la diferencia en tu día a día.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {additionalFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-purple-100">
                    {feature.icon}
                    <span className="font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center lg:text-right">
              <Link 
                to="/servicios" 
                className="inline-block bg-white text-haby-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors transform hover:scale-105 hover:shadow-lg"
              >
                Ver todos nuestros servicios
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
