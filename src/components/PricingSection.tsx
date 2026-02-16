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
    prices: { mxn: "14,999", usd: "899", eur: "799" },
    features: ["Diseño web responsive", "Hasta 5 secciones", "Optimización SEO básica", "1 mes de soporte técnico", "Entrega en 15 días hábiles"],
    highlighted: false,
    buttonText: "Elegir plan",
  },
  {
    id: "profesional",
    name: "Profesional",
    description: "Para proyectos más complejos y funcionalidades avanzadas",
    prices: { mxn: "24,999", usd: "1,499", eur: "1,299" },
    features: ["Todo lo del plan Básico", "Hasta 10 secciones", "Integración con redes sociales", "Sistema de contacto avanzado", "CMS para gestión de contenido", "3 meses de soporte técnico", "Entrega en 30 días hábiles"],
    highlighted: true,
    buttonText: "Plan recomendado",
  },
  {
    id: "premium",
    name: "Premium",
    description: "Soluciones completamente personalizadas",
    prices: { mxn: "Desde 34,999", usd: "Desde 1,999", eur: "Desde 1,799" },
    features: ["Análisis completo de necesidades", "Diseño y desarrollo a medida", "Funcionalidades especiales", "Capacitación de usuarios", "6 meses de soporte técnico", "Optimización continua"],
    highlighted: false,
    buttonText: "Contactar",
  },
];

const PricingSection = () => {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  const [loading, setLoading] = useState<string | null>(null);

  const handlePlanSelection = async (planId: string) => {
    if (planId === "premium") return;
    setLoading(planId);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: { plan: planId },
        headers: {
          "Content-Type": "application/json",
          ...(session?.access_token && { Authorization: `Bearer ${session.access_token}` }),
        },
      });
      if (error) throw error;
      if (data?.url) window.open(data.url, "_blank");
      else throw new Error("No se recibió URL de checkout");
    } catch (error) {
      console.error("Error al procesar el pago:", error);
      toast.error("Error al procesar el pago. Por favor, inténtalo de nuevo.");
    } finally {
      setLoading(null);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
            Planes
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Elige tu plan ideal
          </h2>
          <p className="text-muted-foreground">
            Todos incluyen un análisis personalizado de tu problema.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 12 } },
              }}
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
