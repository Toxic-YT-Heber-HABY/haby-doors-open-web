
import { Check, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const supabase = createClient(
  "https://qhxuilnkeombzquubgst.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoeHVpbG5rZW9tYnpxdXViZ3N0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxNjU5NTYsImV4cCI6MjA1OTc0MTk1Nn0.t9C6jGl0SHieJCddClEoLVlrB-PDvSbI1tJ-arxqlPI"
);

const plans = [
  {
    id: "basico",
    name: "Básico",
    description: "Ideal para pequeños proyectos o soluciones sencillas",
    prices: {
      mxn: "14,999",
      usd: "899",
      eur: "799"
    },
    features: [
      "Diseño web responsive",
      "Hasta 5 secciones",
      "Optimización SEO básica",
      "1 mes de soporte técnico",
      "Entrega en 15 días hábiles"
    ],
    highlighted: false,
    buttonText: "Elegir plan"
  },
  {
    id: "profesional",
    name: "Profesional",
    description: "Para proyectos más complejos y funcionalidades avanzadas",
    prices: {
      mxn: "24,999",
      usd: "1,499",
      eur: "1,299"
    },
    features: [
      "Todo lo del plan Básico",
      "Hasta 10 secciones",
      "Integración con redes sociales",
      "Sistema de contacto avanzado",
      "CMS para gestión de contenido",
      "3 meses de soporte técnico",
      "Entrega en 30 días hábiles"
    ],
    highlighted: true,
    buttonText: "Plan recomendado"
  },
  {
    id: "premium",
    name: "Premium",
    description: "Soluciones completamente personalizadas para necesidades específicas",
    prices: {
      mxn: "Desde 34,999",
      usd: "Desde 1,999",
      eur: "Desde 1,799"
    },
    features: [
      "Análisis completo de necesidades",
      "Diseño y desarrollo a medida",
      "Implementación de funcionalidades especiales",
      "Capacitación de usuarios",
      "6 meses de soporte técnico",
      "Optimización continua"
    ],
    highlighted: false,
    buttonText: "Contactar"
  }
];

// Términos y condiciones para LNA gratuito
const lnaTerms = [
  "El proyecto debe estar ligado al bien común y ser accesible para cualquier persona.",
  "El acceso a la solución debe ser irrestricto y estar alineado con su propósito original.",
  "La solución no debe causar ningún daño o perjuicio a los usuarios.",
  "Todos los derechos de autor serán propiedad de HABY.",
  "El solicitante será reconocido únicamente como contribuyente.",
  "Se recomiendan proyectos sencillos pero funcionales con enfoque en problemas comunes."
];

const PriceDisplay = ({ prices }: { prices: { mxn: string; usd: string; eur: string } }) => (
  <div className="space-y-1">
    <div className="text-2xl font-bold text-haby-primary">${prices.mxn} MXN</div>
    <div className="text-sm text-gray-600">
      (${prices.usd} USD / €{prices.eur} EUR)
    </div>
  </div>
);

const TermsDialog = () => (
  <Dialog>
    <DialogTrigger asChild>
      <button className="text-haby-primary hover:text-haby-secondary text-sm underline flex items-center">
        <Info className="h-3.5 w-3.5 mr-1" /> Ver términos y condiciones
      </button>
    </DialogTrigger>
    <DialogContent className="max-w-2xl">
      <DialogHeader>
        <DialogTitle>Términos y Condiciones para LNA Gratuito</DialogTitle>
        <DialogDescription>
          Para asegurar que este recurso se utilice de manera adecuada y cumpla con su propósito original
        </DialogDescription>
      </DialogHeader>
      <div className="space-y-6 py-4">
        <p className="text-gray-700">
          HABY está comprometido con el bien común y ofrece una opción LNA gratuita bajo las siguientes condiciones:
        </p>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-900">1. Enfoque en el bien común</h4>
            <p className="text-sm text-gray-600">
              El proyecto, página web o solicitud debe estar intrínsecamente ligado al bien común. El resultado final debe ser accesible y utilizable por cualquier persona. La finalidad principal debe ser el beneficio colectivo, no el provecho personal o individual. Las solicitudes para beneficio particular serán automáticamente descartadas.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900">2. Acceso irrestricto</h4>
            <p className="text-sm text-gray-600">
              Cualquier persona debe poder utilizar la solución, sin limitaciones geográficas, temporales o de cualquier otra índole. El uso debe estar alineado con el propósito original, fomentando su adopción generalizada y maximizando su impacto positivo en la comunidad.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900">3. No causar daño</h4>
            <p className="text-sm text-gray-600">
              La solución proporcionada no debe causar ningún daño o perjuicio a los usuarios. Debe garantizar la protección de información personal, evitar la recopilación de datos sensibles y prevenir cualquier forma de incomodidad o perjuicio.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900">4. Propiedad intelectual</h4>
            <p className="text-sm text-gray-600">
              Todos los derechos de autor de la solución desarrollada serán propiedad de HABY, quien recibirá todo el reconocimiento por la creación y mantenimiento de la solución. El solicitante será reconocido como contribuyente al proyecto.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900">5. Rol del solicitante</h4>
            <p className="text-sm text-gray-600">
              La persona que realiza la petición será únicamente reconocida como contribuyente, ya que no está contratando un servicio personalizado para su beneficio individual, sino buscando una solución para el beneficio de la comunidad.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900">6. Complejidad y viabilidad</h4>
            <p className="text-sm text-gray-600">
              Las peticiones deben centrarse en proyectos o soluciones sencillas pero funcionales. A menos que la petición presente una solución excepcionalmente buena para un problema de bien común, es poco probable que proyectos muy complejos puedan ser atendidos bajo la modalidad gratuita.
            </p>
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

const PricingSection = () => {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  const [loading, setLoading] = useState<string | null>(null);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const handlePlanSelection = async (planId: string) => {
    if (planId === "premium") {
      // Para el plan premium, redirigir a contacto
      window.location.href = "/contacto?plan=premium";
      return;
    }

    setLoading(planId);
    
    try {
      console.log("Iniciando proceso de pago para plan:", planId);
      
      // Obtener el token de autenticación si existe
      const { data: { session } } = await supabase.auth.getSession();
      
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };
      
      if (session?.access_token) {
        headers['Authorization'] = `Bearer ${session.access_token}`;
      }
      
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { plan: planId },
        headers
      });

      if (error) {
        console.error("Error en create-checkout:", error);
        throw error;
      }

      if (data?.url) {
        console.log("Redirigiendo a Stripe Checkout:", data.url);
        // Abrir Stripe checkout en una nueva pestaña
        window.open(data.url, '_blank');
      } else {
        throw new Error("No se recibió URL de checkout");
      }
    } catch (error) {
      console.error("Error al procesar el pago:", error);
      toast.error("Error al procesar el pago. Por favor, inténtalo de nuevo.");
    } finally {
      setLoading(null);
    }
  };

  return (
    <section className="section bg-gray-50 py-20">
      <div className="container mx-auto">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block bg-haby-light text-haby-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Nuestros Precios
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Inversión para abrir nuevas puertas
          </h2>
          <p className="text-gray-600">
            Ofrecemos diferentes planes para adaptarnos a tus necesidades y presupuesto. 
            Todos nuestros precios incluyen un análisis personalizado de tu problema.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
              className={`
                relative bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-all duration-300
                ${plan.highlighted ? 'border-2 border-haby-primary' : ''}
                ${hoveredPlan === index ? 'transform scale-[1.03]' : ''}
              `}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-haby-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Más popular
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <PriceDisplay prices={plan.prices} />
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-haby-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => handlePlanSelection(plan.id)}
                disabled={loading === plan.id}
                className={`
                  w-full block text-center py-3 px-4 rounded-md font-medium transition-all duration-300 disabled:opacity-50
                  ${plan.highlighted 
                    ? 'bg-haby-primary text-white hover:bg-haby-secondary' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}
                `}
              >
                {loading === plan.id ? "Procesando..." : plan.buttonText}
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="flex items-start space-x-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Check className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Opción LNA gratuita para el bien común</h3>
              <p className="text-gray-600 mb-4">
                Ofrecemos una opción de LNA gratuita para proyectos que beneficien a la comunidad en general.
                Esta opción está sujeta a términos y condiciones específicos.
              </p>
              
              <div className="space-y-2 mb-6">
                {lnaTerms.map((term, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{term}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <TermsDialog />
                
                <Link 
                  to="/contacto?plan=lna-gratuito" 
                  className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md font-medium transition-colors"
                >
                  Solicitar LNA gratuito
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="text-center mt-12 bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4">¿Necesitas una solución personalizada?</h3>
          <p className="text-gray-600 mb-6">
            Contáctanos para una cotización detallada adaptada a tus necesidades específicas.
            Analizaremos tu problema y te proporcionaremos la mejor solución posible.
          </p>
          <Link to="/contacto" className="btn-primary">
            Solicitar cotización
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
