
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { CheckCircle, Code, Layout, Server, Smartphone, Globe } from 'lucide-react';
import ThreeDModel from "@/components/ThreeDModel";

const DesarrolloWeb = () => {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-r from-haby-dark to-haby-primary text-white py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Desarrollo Web Profesional</h1>
                <p className="text-xl text-gray-200 mb-8">
                  Creamos sitios web y aplicaciones web que no solo se ven profesionales sino que también resuelven problemas reales y optimizan tu tiempo.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contacto" className="btn-primary bg-white text-haby-primary hover:bg-gray-100">
                    Solicitar cotización
                  </Link>
                  <Link to="/portafolio" className="btn-secondary">
                    Ver nuestro portafolio
                  </Link>
                </div>
              </motion.div>
              <motion.div
                className="hidden lg:block"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="h-80 relative">
                  <ThreeDModel type="logo" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Características */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-block bg-haby-light text-haby-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                Nuestros servicios de desarrollo
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Soluciones web a medida para tu negocio
              </h2>
              <p className="text-gray-600">
                Nos especializamos en crear experiencias web únicas y efectivas que maximizan el potencial de tu empresa,
                mejoran la experiencia de tus usuarios y optimizan tus procesos.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                variants={fadeIn}
              >
                <div className="w-12 h-12 bg-haby-light rounded-lg flex items-center justify-center text-haby-primary mb-4">
                  <Layout className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Sitios Web Corporativos</h3>
                <p className="text-gray-600 mb-4">
                  Diseñamos sitios web profesionales que reflejan la identidad de tu marca, mejoran tu presencia online y convierten visitantes en clientes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Diseño responsivo para todos los dispositivos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Optimización SEO para mejor visibilidad</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Integración con redes sociales</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                variants={fadeIn}
              >
                <div className="w-12 h-12 bg-haby-light rounded-lg flex items-center justify-center text-haby-primary mb-4">
                  <Smartphone className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Aplicaciones Web</h3>
                <p className="text-gray-600 mb-4">
                  Desarrollamos aplicaciones web interactivas que automatizan procesos, mejoran la eficiencia y resuelven problemas específicos de tu negocio.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Interfaces intuitivas y fáciles de usar</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Soluciones personalizadas a medida</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Escalabilidad para crecer con tu negocio</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                variants={fadeIn}
              >
                <div className="w-12 h-12 bg-haby-light rounded-lg flex items-center justify-center text-haby-primary mb-4">
                  <Code className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Desarrollo Frontend</h3>
                <p className="text-gray-600 mb-4">
                  Creamos interfaces modernas y atractivas utilizando las últimas tecnologías para ofrecer experiencias de usuario excepcionales.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Diseño UI/UX centrado en el usuario</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Animaciones y transiciones fluidas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Optimización de rendimiento</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                variants={fadeIn}
              >
                <div className="w-12 h-12 bg-haby-light rounded-lg flex items-center justify-center text-haby-primary mb-4">
                  <Server className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Desarrollo Backend</h3>
                <p className="text-gray-600 mb-4">
                  Implementamos sistemas robustos y seguros que gestionan datos, usuarios y funcionalidades para hacer que tu aplicación web funcione sin problemas.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">APIs escalables y bien documentadas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Gestión eficiente de bases de datos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Seguridad y protección de datos</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                variants={fadeIn}
              >
                <div className="w-12 h-12 bg-haby-light rounded-lg flex items-center justify-center text-haby-primary mb-4">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">E-commerce</h3>
                <p className="text-gray-600 mb-4">
                  Creamos tiendas online atractivas y funcionales que impulsan tus ventas y ofrecen una experiencia de compra excepcional.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Catálogos de productos personalizados</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Integración con pasarelas de pago</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Gestión de inventario y pedidos</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                variants={fadeIn}
              >
                <div className="w-12 h-12 bg-haby-light rounded-lg flex items-center justify-center text-haby-primary mb-4">
                  <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"></path>
                      <path d="M12 16v-4"></path>
                      <path d="M12 8h.01"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Mantenimiento y Soporte</h3>
                <p className="text-gray-600 mb-4">
                  Ofrecemos servicios continuos de mantenimiento, actualizaciones y soporte para garantizar que tu sitio web funcione de manera óptima.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Actualizaciones regulares de seguridad</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Monitoreo de rendimiento</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Copias de seguridad regulares</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Tecnologías */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-block bg-haby-light text-haby-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                Nuestro Stack Tecnológico
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Tecnologías que utilizamos
              </h2>
              <p className="text-gray-600">
                Trabajamos con las herramientas y frameworks más modernos y eficientes para crear soluciones web de alta calidad.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {['React', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'Express', 
                'MongoDB', 'PostgreSQL', 'Firebase', 'Tailwind CSS', 'TypeScript', 'Python'].map((tech, index) => (
                <motion.div 
                  key={tech}
                  className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow h-24 flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <span className="font-medium text-gray-800">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Proceso de desarrollo */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-block bg-haby-light text-haby-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                Nuestro Proceso
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Cómo trabajamos
              </h2>
              <p className="text-gray-600">
                Seguimos una metodología estructurada que nos permite entregar proyectos de alta calidad de manera eficiente.
              </p>
            </motion.div>

            <div className="relative">
              {/* Línea de tiempo vertical */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-haby-light transform -translate-x-1/2"></div>
              
              <div className="space-y-12">
                {[
                  {
                    step: 1,
                    title: "Análisis y Planificación",
                    description: "Entendemos tus necesidades y objetivos para planificar una solución efectiva."
                  },
                  {
                    step: 2,
                    title: "Diseño y Prototipado",
                    description: "Creamos mockups y prototipos para visualizar la estructura y el aspecto de tu proyecto."
                  },
                  {
                    step: 3,
                    title: "Desarrollo",
                    description: "Implementamos la solución utilizando las tecnologías más adecuadas para tu proyecto."
                  },
                  {
                    step: 4,
                    title: "Pruebas y Aseguramiento de Calidad",
                    description: "Realizamos pruebas exhaustivas para garantizar un producto final sin errores y de alta calidad."
                  },
                  {
                    step: 5,
                    title: "Despliegue",
                    description: "Publicamos tu proyecto en un servidor seguro y configuramos todo lo necesario."
                  },
                  {
                    step: 6,
                    title: "Mantenimiento y Soporte",
                    description: "Ofrecemos soporte continuo para mantener tu proyecto actualizado y funcionando correctamente."
                  }
                ].map((item, index) => (
                  <div key={item.step} className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'md:rtl'}`}>
                    <motion.div 
                      className={`text-left ${index % 2 !== 0 ? 'md:text-right' : ''}`}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                    >
                      <div className="inline-block bg-haby-light text-haby-primary px-4 py-2 rounded-full text-sm font-medium mb-2">
                        Paso {item.step}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </motion.div>
                    
                    <div className="hidden md:block"></div>
                    
                    {/* Punto en la línea de tiempo */}
                    <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <motion.div 
                        className="h-8 w-8 bg-haby-primary rounded-full flex items-center justify-center text-white font-bold z-10"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                      >
                        {item.step}
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-haby-primary to-haby-secondary rounded-lg shadow-xl p-8 md:p-12 text-white text-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                ¿Listo para comenzar tu proyecto web?
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Contáctanos hoy mismo y conversemos sobre cómo podemos ayudarte a crear la solución web perfecta para tu negocio.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <Link to="/contacto" className="btn-primary bg-white text-haby-primary hover:bg-gray-100">
                  Solicitar cotización
                </Link>
                <Link to="/portafolio" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:bg-opacity-10">
                  Ver nuestro portafolio
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DesarrolloWeb;
