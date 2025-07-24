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
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-haby-accent/10 mb-6">
            <HelpCircle className="w-8 h-8 text-haby-accent" />
          </div>
          <h2 className="text-4xl font-bold text-haby-primary mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                className="card-interactive border-none shadow-elegant"
              >
                <AccordionTrigger className="text-left px-6 py-4 hover:no-underline">
                  <span className="text-lg font-semibold text-haby-primary pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            ¿No encuentras la respuesta que buscas?
          </p>
          <a 
            href="/contacto"
            className="btn-modern"
          >
            Contáctanos Directamente
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;