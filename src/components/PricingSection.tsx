
import { motion } from "framer-motion";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { PlanCard } from "./PlanCard";
import { LNACard } from "./LNACard";
import { PricingCTA } from "./PricingCTA";

const plans = [
  {
    id: "basico",
    name: "Básico",
    description: "Ideal para pequeños proyectos o soluciones sencillas",
    prices: {
      mxn: "14,999",
      usd: "899",
      eur: "799",
    },
    features: [
      "Diseño web responsive",
      "Hasta 5 secciones",
      "Optimización SEO básica",
      "1 mes de soporte técnico",
      "Entrega en 15 días hábiles",
    ],
    highlighted: false,
    buttonText: "Elegir plan",
  },
  {
    id: "profesional",
    name: "Profesional",
    description: "Para proyectos más complejos y funcionalidades avanzadas",
    prices: {
      mxn: "24,999",
      usd: "1,499",
      eur: "1,299",
    },
    features: [
      "Todo lo del plan Básico",
      "Hasta 10 secciones",
      "Integración con redes sociales",
      "Sistema de contacto avanzado",
      "CMS para gestión de contenido",
      "3 meses de soporte técnico",
      "Entrega en 30 días hábiles",
    ],
    highlighted: true,
    buttonText: "Plan recomendado",
  },
  {
    id: "premium",
    name: "Premium",
    description: "Soluciones completamente personalizadas para necesidades específicas",
    prices: {
      mxn: "Desde 34,999",
      usd: "Desde 1,999",
      eur: "Desde 1,799",
    },
    features: [
      "Análisis completo de necesidades",
      "Diseño y desarrollo a medida",
      "Implementación de funcionalidades especiales",
      "Capacitación de usuarios",
      "6 meses de soporte técnico",
      "Optimización continua",
    ],
    highlighted: false,
    buttonText: "Contactar",
  },
];

const PricingSection = () => {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  const [loading, setLoading] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  const handlePlanSelection = async (planId: string) => {
    if (planId === "premium") return;

    setLoading(planId);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      const requestBody = { plan: planId };

      const { data, error } = await supabase.functions.invoke(
        "create-checkout",
        {
          body: requestBody,
          headers: {
            "Content-Type": "application/json",
            ...(session?.access_token && {
              Authorization: `Bearer ${session.access_token}`,
            }),
          },
        }
      );

      if (error) throw error;
      if (data?.url) {
        window.open(data.url, "_blank");
      } else {
        throw new Error("No se recibió URL de checkout");
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Error al procesar el pago:", error);
      toast.error(
        "Error al procesar el pago. Por favor, inténtalo de nuevo o contáctanos directamente."
      );
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
            >
              <PlanCard
                plan={plan}
                loading={loading}
                onSelect={handlePlanSelection}
                hovered={hoveredPlan === index}
                onHover={(on) => setHoveredPlan(on ? index : null)}
              />
            </motion.div>
          ))}
        </motion.div>

        <LNACard />
        <PricingCTA />
      </div>
    </section>
  );
};

export default PricingSection;
