import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { CheckCircle, Code, Layout, Server, Smartphone, Globe } from 'lucide-react';
import ThreeDModel from "@/components/ThreeDModel";
import usePageTitle from "@/hooks/usePageTitle";
import AnimatedGradient from "@/components/AnimatedGradient";
import ImageZoom from "@/components/ImageZoom";
import Monitor from 'lucide-react';

/**
 * Página principal para la sección de Desarrollo Web Profesional
 * Estructura la presentación de servicios, tecnologías, proceso,
 * portfolio y llamada a la acción, todo con animaciones y estilos premium.
 */
const DesarrolloWeb = () => {
  // Hook para actualizar el título de la pestaña del navegador según el contexto de la página.
  usePageTitle();

  // Configuración para animaciones framer-motion en aparición de contenedores hijos.
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Configuración para animaciones de entrada en y y opacidad.
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Imágenes de ejemplo de proyectos desarrollados
  const projectImages = [
    {
      src: "/lovable-uploads/7d27120f-0c6b-4fdf-989a-e0b32feb1843.png",
      alt: "Proyecto de desarrollo web - Dashboard"
    },
    {
      src: "/lovable-uploads/8ba55e5f-90b4-4561-90c1-d8b8986c025b.png",
      alt: "Proyecto de desarrollo web - Aplicación"
    },
    {
      src: "/lovable-uploads/d93cbf56-5f67-47f8-9472-e864723e0be6.png",
      alt: "Proyecto de desarrollo web - E-commerce"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Barra de navegación superior */}
      <Navbar />
      <main className="flex-grow">
        {/* HERO SECTION: Presentación visual principal con elementos animados y decorativos */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Fondo compuesto por capas de gradientes, texturas y puntos */}
          <div className="absolute inset-0">
            {/* Capa base: gradiente oscuro */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
            {/* Fondo animado cósmico personalizado */}
            <AnimatedGradient 
              colors={["#0f172a", "#1e1b4b", "#581c87", "#7c2d12", "#0f172a"]}
              className="absolute inset-0 opacity-80"
              duration={25}
              variant="cosmic"
            />
            {/* Gradiente/trama sutil azul/púrpura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/10 to-purple-500/10"></div>
            {/* Overlay de puntos a modo de patrón decorativo */}
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                backgroundSize: '30px 30px'
              }}
            ></div>
          </div>
          
          {/* Elementos decorativos flotantes animados */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Cada uno decorativo se anima y aporta dinamismo visual */}
            <motion.div 
              className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-600/30 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                x: [0, 20, 0],
                y: [0, -10, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-32 right-16 w-48 h-48 bg-gradient-to-br from-haby-accent/40 to-pink-600/40 rounded-full blur-2xl"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2],
                x: [0, -30, 0],
                y: [0, 20, 0]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
            <motion.div 
              className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-cyan-400/50 to-blue-600/50 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.4, 1],
                opacity: [0.4, 0.7, 0.4],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Líneas decorativas geométricas animadas */}
            <motion.div 
              className="absolute top-1/4 left-1/3 w-64 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ scaleX: [0, 1, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-1/3 right-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-haby-accent/50 to-transparent rotate-45"
              animate={{ scaleX: [0, 1, 0], opacity: [0, 0.8, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            />
          </div>

          {/* Contenido principal del hero */}
          <div className="relative z-10 container mx-auto px-4 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Bloque de título y descripción */}
              <motion.div
                className="text-center lg:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Badge destacado */}
                <motion.div 
                  className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-full text-white text-sm font-medium mb-6 shadow-lg"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-3 animate-pulse shadow-lg"></span>
                  Desarrollo Web Profesional
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-xl -z-10"></div>
                </motion.div>

                {/* Título principal animado con gradiente */}
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Creamos{" "}
                  <span className="bg-gradient-to-r from-haby-accent via-pink-500 to-blue-400 bg-clip-text text-transparent filter drop-shadow-lg">
                    experiencias web
                  </span>{" "}
                  extraordinarias
                </motion.h1>

                {/* Descripción */}
                <motion.p 
                  className="text-xl text-gray-200 mb-8 max-w-xl leading-relaxed backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Transformamos tus ideas en sitios web y aplicaciones que no solo impresionan visualmente, 
                  sino que impulsan tu negocio hacia el éxito digital.
                </motion.p>

                {/* Botones de acción */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <Link 
                    to="/contacto" 
                    className="group relative overflow-hidden bg-gradient-to-r from-haby-accent to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-purple-500/25"
                  >
                    <span className="relative z-10">Comenzar Proyecto</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  </Link>
                  <Link 
                    to="/portafolio" 
                    className="group relative bg-transparent border-2 border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white hover:scale-105 shadow-xl backdrop-blur-sm"
                  >
                    <span className="relative z-10">Ver Portafolio</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                  </Link>
                </motion.div>

                {/* Estadísticas destacadas animadas */}
                <motion.div 
                  className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12 pt-8 border-t border-white/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-white mb-1 group-hover:text-haby-accent transition-colors">50+</div>
                    <div className="text-sm text-gray-300">Proyectos</div>
                    <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-haby-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity mt-2"></div>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">98%</div>
                    <div className="text-sm text-gray-300">Satisfacción</div>
                    <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity mt-2"></div>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors">24/7</div>
                    <div className="text-sm text-gray-300">Soporte</div>
                    <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity mt-2"></div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Sección visual premium: marco con modelo 3D y fallback visual */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="relative h-96 lg:h-[500px]">
                  {/* Decorativos flotantes adicionales */}
                  <motion.div 
                    className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-haby-accent/30 via-purple-500/20 to-transparent rounded-full blur-xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3], rotate: [0, 180, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                    className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-white/20 via-blue-500/20 to-transparent rounded-full blur-xl"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2], rotate: [360, 180, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                  {/* Marco con fondo animado + fallback visual */}
                  <div className="relative w-full h-full bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md rounded-3xl border border-white/30 shadow-2xl overflow-hidden flex items-center justify-center">
                    {/* Visual SIEMPRE visible para evitar marco vacío (imagen + texto) */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none select-none">
                      <img
                        src="/lovable-uploads/photo-1487058792275-0ad4aaf24ca7.jpg"
                        alt="Monitor con código de ejemplo"
                        className="w-28 h-28 object-contain opacity-60 mb-3"
                        draggable="false"
                      />
                      <span className="text-white text-lg font-semibold drop-shadow glow-sm opacity-70">Vista previa</span>
                    </div>
                    {/* Efectos de borde y brillo */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-purple-500/10 rounded-3xl"></div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-haby-accent/50 to-transparent"></div>
                    {/* Modelo 3D (sobre fallback, manejar internamente su visibilidad) */}
                    <div className="relative z-10 w-full h-full">
                      <ThreeDModel type="hero" />
                    </div>
                    {/* Brillo interior extra */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
                    {/* Esquinas premium */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/30 rounded-tl-lg"></div>
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30 rounded-tr-lg"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/30 rounded-bl-lg"></div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/30 rounded-br-lg"></div>
                  </div>

                  {/* Etiquetas flotantes para stack destacado */}
                  <motion.div 
                    className="absolute -top-6 left-1/4 bg-gradient-to-r from-white/90 to-white/80 backdrop-blur-sm rounded-xl px-4 py-2 shadow-xl border border-white/20"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="flex items-center space-x-2">
                      <Code className="w-4 h-4 text-haby-primary" />
                      <span className="text-sm font-semibold text-gray-800">React + TypeScript</span>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="absolute -bottom-6 right-1/4 bg-gradient-to-r from-white/90 to-white/80 backdrop-blur-sm rounded-xl px-4 py-2 shadow-xl border border-white/20"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  >
                    <div className="flex items-center space-x-2">
                      <Smartphone className="w-4 h-4 text-haby-accent" />
                      <span className="text-sm font-semibold text-gray-800">Responsive Design</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Indicador de scroll animado */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm opacity-70">Descubre más</span>
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center bg-white/5 backdrop-blur-sm">
                <div className="w-1 h-3 bg-gradient-to-b from-white to-haby-accent rounded-full mt-2 animate-pulse shadow-lg"></div>
              </div>
            </div>
          </motion.div>
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

        {/* Portfolio Showcase */}
        <AnimatedGradient 
          className="py-16 bg-gray-50"
          colors={["#E5DEFF", "#F2FCE2", "#FEF7CD", "#FFDEE2"]}
          duration={12}
        >
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-block bg-haby-light text-haby-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                Proyectos Destacados
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Ejemplos de nuestro trabajo
              </h2>
              <p className="text-gray-600">
                Explora algunos de nuestros proyectos recientes y descubre cómo hemos ayudado a empresas 
                a transformar su presencia digital.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projectImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="rounded-xl overflow-hidden shadow-lg"
                >
                  <ImageZoom 
                    src={image.src} 
                    alt={image.alt}
                    className="aspect-video"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedGradient>

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
        <AnimatedGradient 
          className="py-16 md:py-20"
          colors={["#7E69AB", "#D946EF", "#6E59A5", "#1A1F2C"]}
        >
          <div className="container mx-auto px-4">
            <motion.div 
              className="rounded-lg shadow-xl p-8 md:p-12 text-white text-center backdrop-blur-sm bg-black/30"
              whileInView={{ 
                boxShadow: [
                  "0 10px 15px -3px rgba(126, 105, 171, 0.3)",
                  "0 15px 25px -5px rgba(126, 105, 171, 0.4)",
                  "0 10px 15px -3px rgba(126, 105, 171, 0.3)"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              viewport={{ once: true }}
            >
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
                <Link to="/contacto" className="btn-primary bg-white text-haby-primary hover:bg-gray-100 shadow-lg hover:shadow-xl transition-shadow">
                  Solicitar cotización
                </Link>
                <Link to="/portafolio" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:bg-opacity-10 shadow-lg hover:shadow-xl transition-shadow">
                  Ver nuestro portafolio
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedGradient>
      </main>
      <Footer />
    </div>
  );
};

export default DesarrolloWeb;
