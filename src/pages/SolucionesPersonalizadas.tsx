
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { CheckCircle, Lightbulb, BarChart3, BookOpen, Clock, Zap } from 'lucide-react';
import LazyThreeDModel from "@/components/LazyThreeDModel";

const SolucionesPersonalizadas = () => {
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
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Soluciones Web Personalizadas</h1>
                <p className="text-xl text-gray-200 mb-8">
                  Desarrollamos herramientas tecnológicas a medida para resolver tus problemas específicos y optimizar los procesos de tu negocio.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contacto" className="btn-primary bg-white text-haby-primary hover:bg-gray-100">
                    Consulta gratuita
                  </Link>
                  <Link to="/portafolio" className="btn-secondary">
                    Explorar casos de éxito
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
                  <LazyThreeDModel type="logo" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Proceso de personalización */}
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
                Nuestro Enfoque
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Cómo creamos soluciones a tu medida
              </h2>
              <p className="text-gray-600">
                Nuestro proceso de desarrollo está diseñado para entender a fondo tus necesidades y crear soluciones que resuelvan tus problemas específicos.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {[
                {
                  icon: <Lightbulb className="h-6 w-6" />,
                  title: "Identificación del Problema",
                  description: "Analizamos a fondo los desafíos que enfrentas para comprender la raíz del problema que necesitamos resolver."
                },
                {
                  icon: <BarChart3 className="h-6 w-6" />,
                  title: "Análisis y Planificación",
                  description: "Diseñamos una estrategia detallada para abordar el problema, estableciendo objetivos claros y medibles."
                },
                {
                  icon: <BookOpen className="h-6 w-6" />,
                  title: "Propuesta de Solución",
                  description: "Creamos un plan detallado que incluye las funcionalidades, tecnologías y recursos necesarios para implementar la solución."
                },
                {
                  icon: <Zap className="h-6 w-6" />,
                  title: "Desarrollo Ágil",
                  description: "Implementamos la solución utilizando metodologías ágiles que permiten adaptaciones y mejoras continuas durante el proceso."
                },
                {
                  icon: <CheckCircle className="h-6 w-6" />,
                  title: "Pruebas Exhaustivas",
                  description: "Realizamos pruebas rigurosas para garantizar que la solución cumpla con todos los requisitos y funcione sin problemas."
                },
                {
                  icon: <Clock className="h-6 w-6" />,
                  title: "Implementación y Seguimiento",
                  description: "Desplegamos la solución y proporcionamos soporte continuo para asegurar resultados óptimos a largo plazo."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="w-16 h-16 bg-haby-light rounded-full flex items-center justify-center text-haby-primary mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tipos de soluciones */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-block bg-haby-light text-haby-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                Nuestras Soluciones
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Tipos de soluciones que desarrollamos
              </h2>
              <p className="text-gray-600">
                Creamos diversas herramientas tecnológicas especializadas para resolver problemas específicos y optimizar procesos.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                variants={fadeIn}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">Sistemas de Gestión Personalizada</h3>
                <p className="text-gray-600 mb-6">
                  Desarrollamos sistemas que automatizan y optimizan los procesos específicos de tu negocio, mejorando la eficiencia operativa.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Gestión de inventarios y almacenes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Seguimiento de proyectos y tareas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Administración de clientes y ventas</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                variants={fadeIn}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">Herramientas de Productividad</h3>
                <p className="text-gray-600 mb-6">
                  Creamos aplicaciones que automatizan tareas repetitivas y optimizan el tiempo de trabajo de tu equipo.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Generación automática de informes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Herramientas de colaboración en equipo</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Automatización de procesos administrativos</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                variants={fadeIn}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">Plataformas Educativas</h3>
                <p className="text-gray-600 mb-6">
                  Desarrollamos sistemas de aprendizaje y gestión educativa adaptados a las necesidades específicas de instituciones y educadores.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Sistemas de gestión de aprendizaje</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Herramientas de evaluación interactiva</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Seguimiento de progreso académico</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                variants={fadeIn}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">Aplicaciones para Finanzas y Contabilidad</h3>
                <p className="text-gray-600 mb-6">
                  Creamos soluciones que simplifican la gestión financiera y contable, facilitando el control económico de tu negocio.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Seguimiento de gastos e ingresos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Gestión de facturación</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Dashboards financieros personalizados</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Casos de estudio */}
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
                Casos de Éxito
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Soluciones que han marcado la diferencia
              </h2>
              <p className="text-gray-600">
                Descubre cómo nuestras soluciones personalizadas han ayudado a nuestros clientes a superar desafíos y optimizar su operación.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "HABYKeys",
                  client: "Perla Itzel Rosales Flores",
                  description: "Teclado virtual avanzado que mejora la productividad de programadores y profesionales con funciones personalizables.",
                  result: "35% de aumento en productividad",
                  image: "/lovable-uploads/7d27120f-0c6b-4fdf-989a-e0b32feb1843.png"
                },
                {
                  title: "HABY Score Tracker",
                  client: "Prof. Martha Norma Ramírez Albarrán",
                  description: "Herramienta educativa que simplifica el cálculo y seguimiento de calificaciones para profesores y estudiantes.",
                  result: "40% de mejora en participación estudiantil",
                  image: "/lovable-uploads/8ba55e5f-90b4-4561-90c1-d8b8986c025b.png"
                },
                {
                  title: "HABY CLASS",
                  client: "Proyecto Personal",
                  description: "Sistema de gestión educativa que optimiza la administración del aula y mejora la experiencia de aprendizaje.",
                  result: "55% de reducción en tiempo administrativo",
                  image: "/lovable-uploads/d93cbf56-5f67-47f8-9472-e864723e0be6.png"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 mb-4">Cliente: {item.client}</p>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="bg-green-50 text-green-700 px-4 py-2 rounded-md inline-block font-medium">
                      Resultado: {item.result}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/portafolio" className="btn-primary">
                Ver más casos de éxito
              </Link>
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
                ¿Tienes un problema específico que resolver?
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Agenda una consulta gratuita con nuestro equipo y descubre cómo podemos ayudarte a crear una solución personalizada que optimice tu tiempo y mejore tus resultados.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <Link to="/contacto" className="btn-primary bg-white text-haby-primary hover:bg-gray-100">
                  Agendar consulta gratuita
                </Link>
                <Link to="/portafolio" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:bg-opacity-10">
                  Ver más proyectos
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

export default SolucionesPersonalizadas;
