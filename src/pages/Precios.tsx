
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Check, HelpCircle, X } from "lucide-react";

const planes = [
  {
    name: "Básico",
    price: "Desde $X,XXX MXN",
    description: "Ideal para pequeños proyectos o soluciones sencillas",
    features: [
      { text: "Diseño web responsive", included: true },
      { text: "Hasta 5 secciones", included: true },
      { text: "Optimización SEO básica", included: true },
      { text: "1 mes de soporte técnico", included: true },
      { text: "Entrega en 15 días hábiles", included: true },
      { text: "Integraciones con redes sociales", included: false },
      { text: "Sistema de contacto avanzado", included: false },
      { text: "CMS para gestión de contenido", included: false }
    ],
    highlighted: false,
    buttonText: "Elegir plan"
  },
  {
    name: "Profesional",
    price: "Desde $XX,XXX MXN",
    description: "Para proyectos más complejos y funcionalidades avanzadas",
    features: [
      { text: "Diseño web responsive", included: true },
      { text: "Hasta 10 secciones", included: true },
      { text: "Optimización SEO avanzada", included: true },
      { text: "3 meses de soporte técnico", included: true },
      { text: "Entrega en 30 días hábiles", included: true },
      { text: "Integraciones con redes sociales", included: true },
      { text: "Sistema de contacto avanzado", included: true },
      { text: "CMS para gestión de contenido", included: true }
    ],
    highlighted: true,
    buttonText: "Plan recomendado"
  },
  {
    name: "Premium",
    price: "Cotización personalizada",
    description: "Soluciones completamente personalizadas para necesidades específicas",
    features: [
      { text: "Análisis completo de necesidades", included: true },
      { text: "Diseño y desarrollo a medida", included: true },
      { text: "Optimización SEO premium", included: true },
      { text: "6 meses de soporte técnico", included: true },
      { text: "Tiempo de entrega según proyecto", included: true },
      { text: "Funcionalidades especiales", included: true },
      { text: "Capacitación de usuarios", included: true },
      { text: "Optimización continua", included: true }
    ],
    highlighted: false,
    buttonText: "Contactar"
  }
];

const preguntas = [
  {
    pregunta: "¿Cuál es el proceso de trabajo?",
    respuesta: "Nuestro proceso de trabajo comienza con una consulta inicial para entender tus necesidades, seguido por la propuesta de solución, desarrollo, pruebas y finalmente la implementación. Trabajamos de cerca contigo en cada etapa para asegurar que la solución cumpla con tus expectativas."
  },
  {
    pregunta: "¿Cuánto tiempo toma desarrollar un proyecto?",
    respuesta: "El tiempo de desarrollo varía según la complejidad del proyecto. Los proyectos básicos suelen tomar alrededor de 15 días hábiles, mientras que los más complejos pueden llevar entre 30 y 60 días. Cada proyecto es único y te proporcionaremos un cronograma detallado durante la fase de planificación."
  },
  {
    pregunta: "¿Qué métodos de pago aceptan?",
    respuesta: "Aceptamos diversos métodos de pago, incluyendo transferencia bancaria, tarjetas de crédito/débito y PayPal. Para proyectos más grandes, ofrecemos la opción de pago fraccionado en varias etapas del desarrollo."
  },
  {
    pregunta: "¿Ofrecen soporte después de la entrega?",
    respuesta: "Sí, todos nuestros planes incluyen soporte técnico post-entrega. El plan Básico incluye 1 mes, el Profesional 3 meses y el Premium 6 meses. Después de este período, ofrecemos planes de mantenimiento y soporte continuo que puedes contratar según tus necesidades."
  },
  {
    pregunta: "¿Puedo actualizar mi plan en el futuro?",
    respuesta: "Absolutamente. Entendemos que las necesidades pueden cambiar con el tiempo. Puedes actualizar tu plan en cualquier momento, y solo pagarás la diferencia. Trabajaremos contigo para asegurar una transición suave y que todas tus nuevas necesidades sean atendidas."
  },
  {
    pregunta: "¿Hay algún costo oculto?",
    respuesta: "No, nos enorgullecemos de nuestra transparencia. Todos los costos asociados con tu proyecto se detallarán claramente en la propuesta inicial. Si durante el desarrollo surgiera la necesidad de funcionalidades adicionales, te consultaríamos antes de implementar cualquier cambio que pudiera afectar el presupuesto."
  }
];

const Precios = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-gradient-to-r from-haby-dark to-haby-primary text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Precios</h1>
              <p className="text-xl text-gray-200">
                Opciones flexibles que se adaptan a tus necesidades y presupuesto. Invierte en soluciones que optimizarán tu tiempo y abrirán nuevas puertas.
              </p>
            </div>
          </div>
        </div>

        {/* Planes de precios */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block bg-haby-light text-haby-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                Planes Flexibles
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Elige el plan que mejor se adapte a tus necesidades
              </h2>
              <p className="text-gray-600">
                Ofrecemos diferentes opciones para adaptarnos a tus requerimientos específicos. 
                No importa el tamaño de tu proyecto, tenemos la solución perfecta para ti.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {planes.map((plan, index) => (
                <div 
                  key={index} 
                  className={`
                    bg-white rounded-lg p-8 transition-shadow
                    ${plan.highlighted 
                      ? 'border-2 border-haby-primary shadow-xl relative z-10 -mt-4 -mb-4' 
                      : 'border border-gray-200 shadow-md'} 
                    animate-fade-in
                  `}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  {plan.highlighted && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-haby-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Más popular
                    </div>
                  )}
                  <div className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-haby-primary' : 'text-gray-800'}`}>
                    {plan.name}
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-4">{plan.price}</div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                        )}
                        <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contacto" 
                    className={`
                      w-full block text-center py-3 px-4 rounded-md font-medium transition-colors
                      ${plan.highlighted 
                        ? 'bg-haby-primary text-white hover:bg-haby-secondary' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-300'}
                    `}
                  >
                    {plan.buttonText}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Servicios personalizados */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block bg-haby-light text-haby-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Soluciones Personalizadas
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  ¿Necesitas algo específico?
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Entendemos que cada proyecto es único y puede requerir soluciones específicas 
                    que no se ajustan exactamente a nuestros planes predefinidos.
                  </p>
                  <p>
                    Por eso ofrecemos servicios completamente personalizados, adaptados a tus 
                    necesidades particulares y objetivos específicos.
                  </p>
                  <p>
                    Nuestro equipo trabajará contigo para entender a fondo tu problema y 
                    diseñar la solución perfecta, con un presupuesto transparente y sin costos ocultos.
                  </p>
                </div>
                <div className="mt-8">
                  <Link to="/contacto" className="btn-primary">
                    Solicitar una cotización personalizada
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Servicios adicionales</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-haby-light flex items-center justify-center text-haby-primary mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Mantenimiento continuo</p>
                      <p className="text-gray-600 text-sm">Planes mensuales para mantener tu plataforma siempre actualizada.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-haby-light flex items-center justify-center text-haby-primary mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Capacitación personalizada</p>
                      <p className="text-gray-600 text-sm">Sesiones de entrenamiento para ti y tu equipo.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-haby-light flex items-center justify-center text-haby-primary mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Consultoría técnica</p>
                      <p className="text-gray-600 text-sm">Asesoramiento experto para optimizar tus procesos digitales.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-haby-light flex items-center justify-center text-haby-primary mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Integraciones específicas</p>
                      <p className="text-gray-600 text-sm">Conectamos tu solución con otras plataformas y servicios.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Preguntas frecuentes */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block bg-haby-light text-haby-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                Preguntas Frecuentes
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                ¿Tienes dudas sobre nuestros precios?
              </h2>
              <p className="text-gray-600">
                Aquí encontrarás respuestas a las preguntas más comunes sobre nuestros planes y proceso de trabajo.
                Si tienes alguna otra duda, no dudes en contactarnos.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {preguntas.map((pregunta, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1 flex-shrink-0">
                        <HelpCircle className="h-6 w-6 text-haby-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">{pregunta.pregunta}</h3>
                        <p className="text-gray-600">{pregunta.respuesta}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <div className="bg-haby-light inline-block rounded-lg p-6 max-w-2xl">
                  <h3 className="text-xl font-bold text-haby-primary mb-3">¿No encuentras respuesta a tu pregunta?</h3>
                  <p className="text-gray-700 mb-6">
                    Estamos aquí para ayudarte. Contáctanos y responderemos a todas tus dudas lo antes posible.
                  </p>
                  <Link to="/contacto" className="btn-primary">
                    Contactar con HABY
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-haby-primary to-haby-secondary rounded-lg shadow-xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Listo para invertir en el futuro de tu negocio?
              </h2>
              <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
                Contáctanos hoy mismo y descubre cómo nuestras soluciones web pueden ayudarte a 
                optimizar tu tiempo, resolver problemas cotidianos y abrir nuevas puertas a oportunidades.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contacto" className="btn-primary bg-white text-haby-primary hover:bg-gray-100">
                  Solicitar cotización
                </Link>
                <Link to="/servicios" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:bg-opacity-10">
                  Explorar servicios
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

export default Precios;
