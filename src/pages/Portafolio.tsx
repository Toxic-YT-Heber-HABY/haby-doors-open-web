
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

// Proyectos de ejemplo (reemplazar con proyectos reales)
const proyectos = [
  {
    id: 1,
    title: "Sistema de Gestión de Tareas",
    category: "Productividad",
    description: "Aplicación web que permite organizar, priorizar y dar seguimiento a tareas diarias, optimizando el flujo de trabajo y aumentando la productividad.",
    image: "bg-haby-light",
    features: [
      "Lista de tareas personalizable",
      "Priorización inteligente",
      "Recordatorios automáticos",
      "Seguimiento de tiempo",
      "Informes de productividad"
    ],
    results: "Reducción del 40% en el tiempo dedicado a la gestión de tareas y un aumento del 25% en la productividad general."
  },
  {
    id: 2,
    title: "Plataforma de Reservas Online",
    category: "Servicios",
    description: "Sistema completo para gestionar reservas y citas, eliminando la necesidad de gestión manual y optimizando la agenda del negocio.",
    image: "bg-haby-light",
    features: [
      "Calendario interactivo",
      "Reservas automáticas",
      "Recordatorios por email/SMS",
      "Panel de administración",
      "Integración con Google Calendar"
    ],
    results: "Reducción del 70% en el tiempo dedicado a la gestión de reservas y disminución del 30% en cancelaciones de última hora."
  },
  {
    id: 3,
    title: "E-commerce Personalizado",
    category: "Comercio",
    description: "Tienda online con funcionalidades a medida para un cliente del sector retail, incluyendo gestión de inventario y procesamiento de pagos.",
    image: "bg-haby-light",
    features: [
      "Catálogo de productos",
      "Carrito de compras",
      "Procesamiento de pagos",
      "Gestión de inventario",
      "Seguimiento de pedidos"
    ],
    results: "Aumento del 50% en ventas online y reducción del 35% en tiempo dedicado a la gestión del inventario."
  },
  {
    id: 4,
    title: "Dashboard Financiero",
    category: "Finanzas",
    description: "Herramienta de visualización de datos financieros que permite tomar decisiones basadas en información clara y actualizada.",
    image: "bg-haby-light",
    features: [
      "Visualización de datos en tiempo real",
      "Informes personalizados",
      "Alertas automáticas",
      "Proyecciones financieras",
      "Exportación de datos"
    ],
    results: "Reducción del 60% en el tiempo dedicado a la generación de informes financieros y mejora en la toma de decisiones estratégicas."
  },
  {
    id: 5,
    title: "Plataforma Educativa",
    category: "Educación",
    description: "Sistema de gestión de aprendizaje que facilita la creación y distribución de contenido educativo, así como el seguimiento del progreso de los estudiantes.",
    image: "bg-haby-light",
    features: [
      "Gestión de cursos",
      "Sistema de evaluación",
      "Foros de discusión",
      "Biblioteca de recursos",
      "Seguimiento de progreso"
    ],
    results: "Aumento del 45% en la participación de los estudiantes y reducción del 50% en el tiempo dedicado a tareas administrativas."
  },
  {
    id: 6,
    title: "Sistema de Gestión de Inventario",
    category: "Logística",
    description: "Aplicación web para la gestión eficiente de inventario, con funcionalidades de seguimiento, alertas y generación de informes.",
    image: "bg-haby-light",
    features: [
      "Seguimiento de stock en tiempo real",
      "Alertas de nivel bajo",
      "Generación de órdenes de compra",
      "Informes de rotación",
      "Escaneo de códigos de barras"
    ],
    results: "Reducción del 80% en pérdidas por falta de stock y disminución del 40% en tiempo dedicado a la gestión de inventario."
  }
];

// Categorías únicas para el filtro
const categorias = [...new Set(proyectos.map(proyecto => proyecto.category))];

const Portafolio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-gradient-to-r from-haby-dark to-haby-primary text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestro Portafolio</h1>
              <p className="text-xl text-gray-200">
                Descubre cómo hemos ayudado a nuestros clientes a optimizar su tiempo y resolver problemas cotidianos a través de nuestras soluciones web personalizadas.
              </p>
            </div>
          </div>
        </div>

        {/* Filtros y proyectos */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <button className="bg-haby-primary text-white px-6 py-2 rounded-full font-medium">
                  Todos
                </button>
                {categorias.map((categoria, index) => (
                  <button 
                    key={index} 
                    className="bg-gray-100 text-gray-800 hover:bg-gray-200 px-6 py-2 rounded-full font-medium transition-colors"
                  >
                    {categoria}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {proyectos.map((proyecto) => (
                <div 
                  key={proyecto.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow animate-fade-in"
                  style={{ animationDelay: `${0.1 + proyecto.id * 0.05}s` }}
                >
                  <div className={`aspect-video ${proyecto.image} flex items-center justify-center`}>
                    <div className="text-haby-primary px-4 py-2 bg-white rounded-full font-medium">
                      {proyecto.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-haby-primary transition-colors">
                      {proyecto.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{proyecto.description}</p>
                    <Link to={`/portafolio/${proyecto.id}`} className="inline-flex items-center text-haby-primary hover:text-haby-secondary font-medium">
                      Ver detalles del proyecto <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proyecto destacado */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block bg-haby-light text-haby-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                Proyecto Destacado
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Sistema de Gestión Integral
              </h2>
              <p className="text-gray-600">
                Una solución completa que transformó la operación diaria de una empresa, 
                optimizando procesos y reduciendo drásticamente el tiempo dedicado a tareas administrativas.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-haby-light flex items-center justify-center p-12">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-haby-primary mb-4">+75%</div>
                    <p className="text-lg text-gray-700">Aumento en productividad</p>
                  </div>
                </div>
                <div className="p-12">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">El desafío</h3>
                  <p className="text-gray-600 mb-6">
                    La empresa enfrentaba múltiples cuellos de botella en sus procesos administrativos, 
                    con un excesivo tiempo dedicado a tareas repetitivas y una deficiente gestión de la información.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Nuestra solución</h3>
                  <p className="text-gray-600 mb-6">
                    Desarrollamos un sistema integral que automatizó los procesos clave, 
                    centralizó la información y proporcionó herramientas analíticas para la toma de decisiones.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Resultados</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-haby-primary flex items-center justify-center text-white mr-2 mt-0.5 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      75% de aumento en la productividad general
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-haby-primary flex items-center justify-center text-white mr-2 mt-0.5 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      90% de reducción en tiempo dedicado a tareas administrativas
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-haby-primary flex items-center justify-center text-white mr-2 mt-0.5 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      50% de mejora en la satisfacción de los empleados
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-haby-primary flex items-center justify-center text-white mr-2 mt-0.5 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      35% de incremento en ingresos gracias a mejores decisiones
                    </li>
                  </ul>
                  
                  <div className="mt-8">
                    <Link to="/contacto" className="btn-primary">
                      Quiero un resultado similar
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proceso de desarrollo */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block bg-haby-light text-haby-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                Nuestro Proceso
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Cómo desarrollamos cada proyecto
              </h2>
              <p className="text-gray-600">
                Cada proyecto que desarrollamos sigue un proceso meticuloso que garantiza 
                resultados óptimos y soluciones que realmente abren puertas.
              </p>
            </div>

            <div className="relative">
              {/* Línea de tiempo vertical */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-haby-light transform -translate-x-1/2"></div>
              
              <div className="space-y-12">
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right">
                    <div className="inline-block bg-haby-light text-haby-primary px-4 py-2 rounded-full text-sm font-medium mb-2">
                      Paso 1
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Comprensión del problema</h3>
                    <p className="text-gray-600">
                      Antes de proponer cualquier solución, nos tomamos el tiempo para entender 
                      a fondo el problema que necesitas resolver. Analizamos el contexto, 
                      identificamos cuellos de botella y entendemos tus objetivos.
                    </p>
                  </div>
                  
                  <div className="hidden md:block"></div>
                  
                  {/* Punto en la línea de tiempo */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="h-8 w-8 bg-haby-primary rounded-full flex items-center justify-center text-white font-bold z-10">
                      1
                    </div>
                  </div>
                </div>
                
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="hidden md:block"></div>
                  
                  <div>
                    <div className="inline-block bg-haby-light text-haby-primary px-4 py-2 rounded-full text-sm font-medium mb-2">
                      Paso 2
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Diseño de la solución</h3>
                    <p className="text-gray-600">
                      Diseñamos una solución personalizada que se adapte a tus necesidades específicas. 
                      Creamos prototipos y te presentamos diferentes enfoques para asegurarnos 
                      de que la solución propuesta cumpla con tus expectativas.
                    </p>
                  </div>
                  
                  {/* Punto en la línea de tiempo */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="h-8 w-8 bg-haby-primary rounded-full flex items-center justify-center text-white font-bold z-10">
                      2
                    </div>
                  </div>
                </div>
                
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right">
                    <div className="inline-block bg-haby-light text-haby-primary px-4 py-2 rounded-full text-sm font-medium mb-2">
                      Paso 3
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Desarrollo e implementación</h3>
                    <p className="text-gray-600">
                      Utilizamos tecnologías de vanguardia para desarrollar tu solución web. 
                      Nuestro equipo trabaja con altos estándares de calidad para asegurar 
                      que el producto final sea robusto, eficiente y fácil de usar.
                    </p>
                  </div>
                  
                  <div className="hidden md:block"></div>
                  
                  {/* Punto en la línea de tiempo */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="h-8 w-8 bg-haby-primary rounded-full flex items-center justify-center text-white font-bold z-10">
                      3
                    </div>
                  </div>
                </div>
                
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="hidden md:block"></div>
                  
                  <div>
                    <div className="inline-block bg-haby-light text-haby-primary px-4 py-2 rounded-full text-sm font-medium mb-2">
                      Paso 4
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Pruebas y ajustes</h3>
                    <p className="text-gray-600">
                      Realizamos pruebas exhaustivas para asegurarnos de que todo funcione correctamente 
                      y hacemos los ajustes necesarios. Te involucramos en el proceso para garantizar 
                      que la solución cumpla con todas tus expectativas.
                    </p>
                  </div>
                  
                  {/* Punto en la línea de tiempo */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="h-8 w-8 bg-haby-primary rounded-full flex items-center justify-center text-white font-bold z-10">
                      4
                    </div>
                  </div>
                </div>
                
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right">
                    <div className="inline-block bg-haby-light text-haby-primary px-4 py-2 rounded-full text-sm font-medium mb-2">
                      Paso 5
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Capacitación y entrega</h3>
                    <p className="text-gray-600">
                      Te proporcionamos la capacitación necesaria para usar la solución de manera efectiva 
                      y realizamos la entrega final. Nos aseguramos de que comprendas todas las funcionalidades 
                      y puedas aprovechar al máximo tu nueva herramienta.
                    </p>
                  </div>
                  
                  <div className="hidden md:block"></div>
                  
                  {/* Punto en la línea de tiempo */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="h-8 w-8 bg-haby-primary rounded-full flex items-center justify-center text-white font-bold z-10">
                      5
                    </div>
                  </div>
                </div>
                
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="hidden md:block"></div>
                  
                  <div>
                    <div className="inline-block bg-haby-light text-haby-primary px-4 py-2 rounded-full text-sm font-medium mb-2">
                      Paso 6
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Soporte continuo</h3>
                    <p className="text-gray-600">
                      Nuestro compromiso no termina con la entrega. Ofrecemos soporte continuo 
                      para garantizar que la solución siga funcionando de manera óptima 
                      y pueda evolucionar según tus necesidades cambiantes.
                    </p>
                  </div>
                  
                  {/* Punto en la línea de tiempo */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="h-8 w-8 bg-haby-primary rounded-full flex items-center justify-center text-white font-bold z-10">
                      6
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-haby-primary to-haby-secondary rounded-lg shadow-xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Tienes un proyecto en mente?</h2>
              <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
                Contáctanos hoy mismo y hablemos sobre cómo podemos ayudarte a desarrollar 
                la solución web que necesitas para optimizar tu tiempo y resolver tus problemas cotidianos.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contacto" className="btn-primary bg-white text-haby-primary hover:bg-gray-100">
                  Iniciar un proyecto
                </Link>
                <Link to="/servicios" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:bg-opacity-10">
                  Explorar nuestros servicios
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portafolio;
