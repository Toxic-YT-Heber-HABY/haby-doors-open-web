
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code, Lightbulb, Clock, Users, Settings, BarChart, MessageSquare, PenTool, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const servicios = [
  {
    icon: <Code className="h-12 w-12 text-haby-accent" />,
    title: "Desarrollo Web Personalizado",
    description: "Creamos páginas web y aplicaciones a medida, diseñadas meticulosamente para resolver problemas específicos de tu negocio o vida cotidiana.",
    features: [
      "Diseño web responsive",
      "Optimización para móviles",
      "Interfaces intuitivas",
      "Experiencia de usuario optimizada",
      "Código limpio y mantenible"
    ]
  },
  {
    icon: <Lightbulb className="h-12 w-12 text-haby-accent" />,
    title: "Soluciones a Medida",
    description: "Cuando no sabes exactamente qué necesitas, te ayudamos a identificar el problema y diseñamos una solución personalizada.",
    features: [
      "Análisis de necesidades",
      "Planificación estratégica",
      "Desarrollo iterativo",
      "Pruebas exhaustivas",
      "Soporte continuo"
    ]
  },
  {
    icon: <Clock className="h-12 w-12 text-haby-accent" />,
    title: "Optimización de Procesos",
    description: "Identificamos tareas repetitivas en tu negocio y desarrollamos soluciones para automatizarlas, ahorrándote tiempo y recursos.",
    features: [
      "Análisis de flujos de trabajo",
      "Identificación de cuellos de botella",
      "Automatización de tareas",
      "Integración de sistemas",
      "Monitoreo de resultados"
    ]
  },
  {
    icon: <Users className="h-12 w-12 text-haby-accent" />,
    title: "Plataformas Colaborativas",
    description: "Desarrollamos herramientas que facilitan la colaboración en equipo, mejorando la comunicación y optimizando el trabajo conjunto.",
    features: [
      "Sistemas de gestión de proyectos",
      "Herramientas de comunicación",
      "Espacios de trabajo compartidos",
      "Control de versiones",
      "Gestión de tareas"
    ]
  },
  {
    icon: <Settings className="h-12 w-12 text-haby-accent" />,
    title: "Sistemas de Gestión",
    description: "Creamos sistemas personalizados para la gestión de inventarios, clientes, reservas, citas y otros aspectos clave de tu negocio.",
    features: [
      "CRM personalizados",
      "Sistemas de inventario",
      "Gestión de reservas",
      "Seguimiento de pedidos",
      "Reportes analíticos"
    ]
  },
  {
    icon: <BarChart className="h-12 w-12 text-haby-accent" />,
    title: "Análisis y Visualización de Datos",
    description: "Transformamos tus datos en información valiosa mediante dashboards interactivos y herramientas de visualización personalizadas.",
    features: [
      "Dashboards interactivos",
      "Reportes personalizados",
      "Visualizaciones de datos",
      "Análisis predictivo",
      "Integración con fuentes de datos"
    ]
  },
  {
    icon: <MessageSquare className="h-12 w-12 text-haby-accent" />,
    title: "Chatbots y Asistentes Virtuales",
    description: "Automatizamos la atención al cliente y otros procesos mediante chatbots y asistentes virtuales inteligentes.",
    features: [
      "Chatbots personalizados",
      "Asistentes virtuales",
      "Integración con plataformas existentes",
      "Aprendizaje automático",
      "Respuestas contextualmente relevantes"
    ]
  },
  {
    icon: <PenTool className="h-12 w-12 text-haby-accent" />,
    title: "Diseño UX/UI",
    description: "Creamos interfaces intuitivas y atractivas que mejoran la experiencia del usuario y optimizan la usabilidad de tus aplicaciones.",
    features: [
      "Diseño centrado en el usuario",
      "Prototipos interactivos",
      "Pruebas de usabilidad",
      "Optimización de interfaces",
      "Diseño responsive"
    ]
  },
  {
    icon: <Zap className="h-12 w-12 text-haby-accent" />,
    title: "Mantenimiento y Optimización",
    description: "Mantenemos y optimizamos tus aplicaciones web existentes, mejorando su rendimiento, seguridad y funcionalidades.",
    features: [
      "Actualización de sistemas",
      "Optimización de rendimiento",
      "Mejoras de seguridad",
      "Corrección de errores",
      "Implementación de nuevas funcionalidades"
    ]
  }
];

const Servicios = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-gradient-to-r from-haby-dark to-haby-primary text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Servicios</h1>
              <p className="text-xl text-gray-200">
                Desarrollamos soluciones web personalizadas que resuelven problemas cotidianos y optimizan tu tiempo.
              </p>
            </div>
          </div>
        </div>

        {/* Cómo trabajamos */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block bg-haby-light text-haby-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Nuestro Proceso
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  ¿Cómo trabajamos en HABY?
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    En HABY, seguimos un enfoque centrado en el cliente. Comenzamos escuchando atentamente para entender 
                    completamente el problema que enfrentas o la meta que deseas alcanzar.
                  </p>
                  <p>
                    Si tienes una idea clara de cómo quieres resolver tu problema, trabajaremos contigo para implementarla 
                    de la manera más eficiente posible. Si no estás seguro de qué solución necesitas, nuestro equipo creativo 
                    diseñará una propuesta personalizada para ti.
                  </p>
                  <p>
                    Nuestro objetivo es desarrollar soluciones que realmente optimicen tu tiempo, eliminando tareas repetitivas 
                    y permitiéndote enfocarte en lo que realmente importa, ya sea en tu vida profesional o personal.
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-bold text-haby-primary mb-6">Nuestro proceso de trabajo</h3>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 h-12 w-12 bg-haby-light rounded-full flex items-center justify-center text-haby-primary font-bold text-xl mr-4">
                      1
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-800 mb-1">Escucha y comprensión</h4>
                      <p className="text-gray-600">Entendemos a fondo tu problema o necesidad.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 h-12 w-12 bg-haby-light rounded-full flex items-center justify-center text-haby-primary font-bold text-xl mr-4">
                      2
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-800 mb-1">Propuesta de solución</h4>
                      <p className="text-gray-600">Diseñamos una solución personalizada.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 h-12 w-12 bg-haby-light rounded-full flex items-center justify-center text-haby-primary font-bold text-xl mr-4">
                      3
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-800 mb-1">Desarrollo e implementación</h4>
                      <p className="text-gray-600">Construimos tu solución con los más altos estándares.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 h-12 w-12 bg-haby-light rounded-full flex items-center justify-center text-haby-primary font-bold text-xl mr-4">
                      4
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-800 mb-1">Pruebas y ajustes</h4>
                      <p className="text-gray-600">Verificamos que todo funcione perfectamente.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 h-12 w-12 bg-haby-light rounded-full flex items-center justify-center text-haby-primary font-bold text-xl mr-4">
                      5
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-800 mb-1">Soporte continuo</h4>
                      <p className="text-gray-600">Te acompañamos más allá de la entrega del proyecto.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Listado de servicios */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block bg-haby-light text-haby-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                ¿Qué ofrecemos?
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Nuestros servicios para abrir puertas
              </h2>
              <p className="text-gray-600">
                En HABY nos especializamos en crear soluciones web personalizadas que resuelven problemas 
                específicos y optimizan tu tiempo. Explora nuestros servicios principales.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicios.map((servicio, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow animate-fade-in"
                  style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                >
                  <div className="mb-6">{servicio.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{servicio.title}</h3>
                  <p className="text-gray-600 mb-6">{servicio.description}</p>
                  <ul className="space-y-2 mb-6">
                    {servicio.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="h-2 w-2 bg-haby-accent rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-16 md:py-24 bg-haby-dark text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block bg-white bg-opacity-10 text-haby-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
                Beneficios
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Por qué elegir a HABY?
              </h2>
              <p className="text-gray-300">
                Al elegirnos, obtienes soluciones web personalizadas que realmente impactan en tu día a día.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-10 transition-all">
                <div className="h-14 w-14 bg-haby-accent bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                  <Clock className="h-8 w-8 text-haby-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Ahorro de tiempo</h3>
                <p className="text-gray-300">
                  Automatizamos tareas repetitivas para que puedas enfocarte en lo que realmente importa.
                </p>
              </div>
              
              <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-10 transition-all">
                <div className="h-14 w-14 bg-haby-accent bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                  <Lightbulb className="h-8 w-8 text-haby-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Soluciones a medida</h3>
                <p className="text-gray-300">
                  Cada solución se adapta específicamente a tus necesidades y problemas únicos.
                </p>
              </div>
              
              <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-10 transition-all">
                <div className="h-14 w-14 bg-haby-accent bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-haby-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Enfoque en el cliente</h3>
                <p className="text-gray-300">
                  Trabajamos de cerca contigo para asegurar que la solución cumpla con tus expectativas.
                </p>
              </div>
              
              <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-10 transition-all">
                <div className="h-14 w-14 bg-haby-accent bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-haby-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Resultados tangibles</h3>
                <p className="text-gray-300">
                  Nuestras soluciones ofrecen resultados medibles que impactan positivamente en tu vida cotidiana.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-haby-primary to-haby-secondary rounded-lg shadow-xl p-8 md:p-12 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para optimizar tu tiempo?</h2>
                  <p className="text-xl text-gray-100 mb-8">
                    Contáctanos hoy mismo para hablar sobre tu problema y cómo podemos ayudarte a solucionarlo.
                  </p>
                  <Link to="/contacto" className="btn-primary bg-white text-haby-primary hover:bg-gray-100">
                    Solicitar una consulta gratuita
                  </Link>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">¿No estás seguro de qué necesitas?</h3>
                  <p className="text-gray-100 mb-4">
                    No hay problema. Parte de nuestro servicio es ayudarte a identificar la solución ideal para tu problema específico.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-haby-accent flex items-center justify-center text-white mr-3 mt-0.5 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Analizamos tu problema en detalle</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-haby-accent flex items-center justify-center text-white mr-3 mt-0.5 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Proponemos diferentes enfoques</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-haby-accent flex items-center justify-center text-white mr-3 mt-0.5 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Diseñamos la solución ideal para ti</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Servicios;
