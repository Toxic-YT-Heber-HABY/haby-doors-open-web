
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import ProfileCard from "@/components/ProfileCard";
import AnimatedSection from "@/components/AnimatedSection";

/**
 * SobreNosotros (About Us) Page Component
 * 
 * This page provides detailed information about HABY, its history,
 * founder, mission, vision, and values. It is fully responsive and
 * optimized for cross-browser compatibility.
 */
const SobreNosotros = () => {
  // Animation variants for consistent animations across sections
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header Section with Parallax Effect */}
        <motion.div 
          className="bg-gradient-to-r from-haby-dark to-haby-primary text-white py-16 md:py-24 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Decorative background elements */}
          <motion.div 
            className="absolute top-0 right-0 w-1/3 h-full opacity-10"
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 6,
              ease: "easeInOut" 
            }}
          >
            <div className="w-full h-full bg-gradient-to-b from-haby-accent to-transparent transform rotate-45" />
          </motion.div>
          
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nosotros</h1>
              <p className="text-xl text-gray-200">
                Conoce más sobre HABY, nuestra historia, misión y la filosofía detrás de "HABY OPEN THE DOORS".
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Nuestra Historia Section */}
        <AnimatedSection className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <SectionTitle
                  subtitle="Nuestra Historia"
                  title="El nacimiento de HABY OPEN THE DOORS"
                />
                
                <motion.div 
                  className="space-y-4 text-gray-600 mt-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.2 }
                    }
                  }}
                >
                  {["HABY nació de la visión de Heber Zadkiel García Pérez, quien identificó una necesidad fundamental en el mercado: soluciones web que realmente resolvieran problemas cotidianos y ayudaran a las personas a optimizar su tiempo.",
                    "Desde su fundación, HABY ha estado impulsada por la filosofía de "abrir puertas" a nuevas posibilidades. Creemos firmemente que la tecnología debe ser una herramienta de liberación que permita a las personas enfocarse en lo que realmente importa, dejando atrás las tareas tediosas y repetitivas.",
                    "Nuestra trayectoria ha estado marcada por un compromiso inquebrantable con la innovación, la eficiencia y la creación de soluciones personalizadas que realmente transformen la forma en que nuestros clientes gestionan su tiempo día a día."
                  ].map((paragraph, index) => (
                    <motion.p 
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { 
                          opacity: 1, 
                          y: 0,
                          transition: { duration: 0.5, ease: "easeOut" }
                        }
                      }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </motion.div>
              </div>
              
              <div className="relative mx-auto lg:mx-0 max-w-md lg:max-w-full">
                <ProfileCard
                  imageSrc="/lovable-uploads/90ffa1ad-1f42-465a-b17e-61918ab82862.png"
                  imageAlt="Fundación de HABY"
                  title="Misión clara desde el primer día"
                  imageOnLeft={false}
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Nuestro Fundador Section */}
        <AnimatedSection className="py-16 md:py-24 bg-gray-50" direction="right">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="order-2 lg:order-1 relative mx-auto lg:mx-0 max-w-md lg:max-w-full">
                <ProfileCard
                  imageSrc="/lovable-uploads/90ffa1ad-1f42-465a-b17e-61918ab82862.png"
                  imageAlt="Heber Zadkiel García Pérez"
                  title="Fundador & Visionario"
                />
              </div>
              
              <div className="order-1 lg:order-2">
                <SectionTitle
                  subtitle="Nuestro Fundador"
                  title="Heber Zadkiel García Pérez"
                />
                
                <motion.div 
                  className="space-y-4 text-gray-600 mt-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.2 }
                    }
                  }}
                >
                  {["Heber Zadkiel García Pérez es el visionario detrás de HABY. Con una sólida formación en desarrollo web y una pasión por resolver problemas, Heber fundó HABY con la misión de crear soluciones web que realmente marcaran una diferencia en la vida cotidiana de las personas.",
                    "Su enfoque único combina habilidades técnicas avanzadas con una profunda comprensión de las necesidades humanas, lo que le permite diseñar soluciones que no solo son técnicamente sólidas, sino también intuitivas y centradas en el usuario.",
                    "La filosofía de Heber, que ha permeado toda la cultura de HABY, se basa en la idea de que la tecnología debe abrir puertas a nuevas posibilidades, liberando tiempo y recursos que pueden ser dedicados a actividades más significativas, ya sean profesionales o personales."
                  ].map((paragraph, index) => (
                    <motion.p 
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { 
                          opacity: 1, 
                          y: 0,
                          transition: { duration: 0.5, ease: "easeOut" }
                        }
                      }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Misión y Visión Section */}
        <AnimatedSection className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <SectionTitle
                subtitle="Nuestra Filosofía"
                title="Misión, Visión y Valores"
                description="Los pilares que guían nuestro trabajo y definen quiénes somos como empresa."
                center={true}
              />
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 }
                }
              }}
            >
              {[
                {
                  title: "Misión",
                  content: "Desarrollar soluciones web innovadoras que resuelvan problemas cotidianos, optimicen el tiempo de nuestros clientes y les permitan enfocarse en lo que realmente importa."
                },
                {
                  title: "Visión",
                  content: "Ser reconocidos como líderes en el desarrollo de soluciones web que transforman la manera en que las personas gestionan su tiempo, abriendo puertas a nuevas posibilidades."
                },
                {
                  title: "Valores",
                  content: [
                    "• Innovación constante",
                    "• Enfoque en el cliente",
                    "• Excelencia técnica",
                    "• Soluciones personalizadas",
                    "• Compromiso con la eficiencia",
                    "• Mejora continua"
                  ]
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 rounded-lg p-8 hover:shadow-md transition-shadow hover-float"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.6, ease: "easeOut" }
                    }
                  }}
                >
                  <h3 className="text-2xl font-bold text-haby-primary mb-4">{item.title}</h3>
                  
                  {Array.isArray(item.content) ? (
                    <ul className="text-gray-700 space-y-2">
                      {item.content.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700">{item.content}</p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Significado del logo y lema */}
        <AnimatedSection className="py-16 md:py-24 bg-haby-dark text-white" direction="up">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <motion.div 
                  className="inline-block bg-white bg-opacity-10 text-haby-accent px-4 py-2 rounded-full text-sm font-medium mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Nuestro Lema
                </motion.div>
                
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  El significado detrás de "HABY OPEN THE DOORS"
                </motion.h2>
                
                <motion.div 
                  className="space-y-4 text-gray-300"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
                    }
                  }}
                >
                  {[
                    ""HABY OPEN THE DOORS" es más que un lema, es la esencia de nuestra filosofía. Representa nuestra misión de abrir puertas a nuevas posibilidades a través de soluciones web innovadoras.",
                    "Cada solución que desarrollamos está diseñada para "abrir puertas" – para eliminar obstáculos, automatizar tareas repetitivas y liberar tiempo valioso que puede ser invertido en actividades más significativas, ya sean profesionales o personales.",
                    "Creemos firmemente que la tecnología debe ser una herramienta liberadora que expanda horizontes y cree nuevas oportunidades, no una complicación adicional en nuestras vidas ya ocupadas."
                  ].map((paragraph, index) => (
                    <motion.p 
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { 
                          opacity: 1, 
                          y: 0,
                          transition: { duration: 0.5, ease: "easeOut" }
                        }
                      }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </motion.div>
                
                <motion.div 
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Link to="/contacto" className="btn-primary bg-haby-accent hover:bg-opacity-90 btn-animated">
                    Abre nuevas puertas con nosotros
                  </Link>
                </motion.div>
              </div>
              
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-full max-w-md aspect-square bg-white bg-opacity-5 rounded-full flex items-center justify-center"
                  animate={{ 
                    boxShadow: ['0 0 0 rgba(217,70,239,0.1)', '0 0 20px rgba(217,70,239,0.4)', '0 0 0 rgba(217,70,239,0.1)'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <div className="text-center">
                    <motion.div 
                      className="text-7xl md:text-8xl font-bold text-white mb-4"
                      animate={{ 
                        textShadow: ['0 0 0 rgba(255,255,255,0)', '0 0 10px rgba(255,255,255,0.5)', '0 0 0 rgba(255,255,255,0)'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      HABY
                    </motion.div>
                    <motion.div 
                      className="text-xl md:text-2xl font-medium text-haby-accent"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      OPEN THE DOORS
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="bg-gradient-to-r from-haby-primary to-haby-secondary rounded-lg shadow-xl p-8 md:p-12 text-white text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para abrir nuevas puertas?</h2>
              <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
                Contáctanos hoy mismo y descubre cómo nuestras soluciones web pueden ayudarte a optimizar tu tiempo 
                y resolver problemas cotidianos.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contacto" className="btn-primary bg-white text-haby-primary hover:bg-gray-100">
                  Contáctanos ahora
                </Link>
                <Link to="/servicios" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:bg-opacity-10 flex items-center justify-center group">
                  Explorar servicios 
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default SobreNosotros;
