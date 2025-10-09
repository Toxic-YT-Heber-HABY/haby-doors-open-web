import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "¿Cuánto tiempo toma desarrollar una solución web?",
      answer: "El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio web básico puede tomar 2-4 semanas, mientras que aplicaciones más complejas pueden requerir 2-6 meses. Siempre proporcionamos un cronograma detallado al inicio del proyecto."
    },
    {
      question: "¿Qué tecnologías utilizan para el desarrollo?",
      answer: "Utilizamos tecnologías modernas como React, TypeScript, Node.js, y bases de datos como PostgreSQL y MongoDB. Seleccionamos la mejor tecnología según las necesidades específicas de cada proyecto para garantizar rendimiento y escalabilidad."
    },
    {
      question: "¿Ofrecen mantenimiento y soporte post-lanzamiento?",
      answer: "Sí, ofrecemos servicios de mantenimiento continuo que incluyen actualizaciones de seguridad, corrección de errores, copias de seguridad regulares, y soporte técnico. Tenemos diferentes planes de mantenimiento adaptados a las necesidades de cada cliente."
    },
    {
      question: "¿Puedo solicitar cambios durante el desarrollo?",
      answer: "Por supuesto. Trabajamos con metodología ágil que permite realizar ajustes durante el proceso. Mantenemos comunicación constante y proporcionamos versiones de prueba para que puedas revisar y solicitar modificaciones antes del lanzamiento final."
    },
    {
      question: "¿Qué incluye el plan LNA Gratuito?",
      answer: "El plan LNA Gratuito está diseñado para proyectos de bien común sin fines de lucro. Incluye desarrollo completo de la solución, pero los derechos de autor pertenecen a HABY y la solución debe ser de acceso libre para la comunidad."
    },
    {
      question: "¿Trabajan con empresas de otros países?",
      answer: "Sí, trabajamos con clientes internacionales. Ofrecemos comunicación en español e inglés, y adaptamos nuestros horarios de trabajo para coordinar reuniones según diferentes zonas horarias."
    },
    {
      question: "¿Cómo garantizan la seguridad de los datos?",
      answer: "Implementamos las mejores prácticas de seguridad incluyendo cifrado SSL, autenticación segura, validación de datos, y cumplimos con estándares internacionales de protección de datos como GDPR. Todos nuestros proyectos incluyen auditorías de seguridad."
    },
    {
      question: "¿Proporcionan capacitación para usar la solución?",
      answer: "Sí, incluimos capacitación básica para el uso de la solución desarrollada. Esto incluye documentación detallada, videos tutoriales, y sesiones de entrenamiento en vivo si es necesario."
    },
    {
      question: "¿Qué pasa si no estoy satisfecho con el resultado?",
      answer: "Tu satisfacción es nuestra prioridad. Ofrecemos revisiones ilimitadas durante el proceso de desarrollo y una garantía de 30 días post-lanzamiento. Si hay problemas, trabajamos hasta resolver cualquier inconveniente sin costo adicional."
    },
    {
      question: "¿Pueden integrar mi solución con sistemas existentes?",
      answer: "Sí, tenemos experiencia integrando nuevas soluciones con sistemas legacy, APIs de terceros, bases de datos existentes, y otras herramientas que tu empresa ya utilice. Evaluamos la compatibilidad y creamos las conexiones necesarias."
    }
  ];

  return (
    <section className="py-responsive bg-gradient-light">
      <div className="container-responsive">
        <div className="text-center mb-12 md:mb-16 px-4">
          <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-purple-100 mb-6">
            <HelpCircle className="w-7 h-7 md:w-8 md:h-8 text-purple-600" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Encuentra respuestas a las dudas más comunes sobre nuestros servicios 
            y proceso de desarrollo
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left px-4 md:px-6 py-4 hover:no-underline">
                  <span className="text-base md:text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 md:px-6 pb-4 md:pb-6">
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-10 md:mt-12 px-4">
          <p className="text-base md:text-lg text-gray-600 mb-6">
            ¿No encuentras la respuesta que buscas?
          </p>
          <a 
            href="/contacto"
            className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-xl transition-all shadow-lg hover:shadow-xl"
          >
            Contáctanos Directamente
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;