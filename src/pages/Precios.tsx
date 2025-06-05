
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import { Link } from "react-router-dom";
import { HelpCircle } from "lucide-react";

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
        {/* Header con gradiente mejorado */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-haby-dark via-haby-primary to-haby-secondary opacity-90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          <div className="relative bg-gradient-to-r from-haby-dark to-haby-primary text-white py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  Nuestros Precios
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed">
                  Opciones flexibles que se adaptan a tus necesidades y presupuesto. Invierte en soluciones que optimizarán tu tiempo y abrirán nuevas puertas.
                </p>
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-haby-accent/20 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>

        {/* Sección de precios unificada */}
        <PricingSection />

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
