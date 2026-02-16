import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PricingSection from "@/components/PricingSection";
import { Link } from "react-router-dom";
import { HelpCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const preguntas = [
  {
    pregunta: "¿Cuál es el proceso de trabajo?",
    respuesta: "Comenzamos con una consulta inicial para entender tus necesidades, seguido por la propuesta de solución, desarrollo, pruebas y finalmente la implementación."
  },
  {
    pregunta: "¿Cuánto tiempo toma desarrollar un proyecto?",
    respuesta: "Los proyectos básicos suelen tomar alrededor de 15 días hábiles, mientras que los más complejos pueden llevar entre 30 y 60 días."
  },
  {
    pregunta: "¿Qué métodos de pago aceptan?",
    respuesta: "Aceptamos transferencia bancaria, tarjetas de crédito/débito y PayPal. Para proyectos grandes, ofrecemos pago fraccionado."
  },
  {
    pregunta: "¿Ofrecen soporte después de la entrega?",
    respuesta: "Sí, todos nuestros planes incluyen soporte técnico post-entrega. El plan Básico incluye 1 mes, el Profesional 3 meses y el Premium 6 meses."
  },
  {
    pregunta: "¿Puedo actualizar mi plan en el futuro?",
    respuesta: "Absolutamente. Puedes actualizar tu plan en cualquier momento, y solo pagarás la diferencia."
  },
  {
    pregunta: "¿Hay algún costo oculto?",
    respuesta: "No. Todos los costos se detallarán claramente en la propuesta inicial. Si surgieran funcionalidades adicionales, te consultaríamos antes."
  }
];

const Precios = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <PageHeader
          badge="Precios"
          title="Inversión para abrir nuevas puertas"
          description="Opciones flexibles que se adaptan a tus necesidades y presupuesto."
        />

        <PricingSection />

        {/* FAQ */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-2xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
                Preguntas Frecuentes
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                ¿Tienes dudas?
              </h2>
              <p className="text-muted-foreground">
                Respuestas a las preguntas más comunes sobre nuestros planes.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {preguntas.map((p, i) => (
                <motion.div
                  key={i}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-colors"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <HelpCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground mb-2">{p.pregunta}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{p.respuesta}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                ¿Listo para invertir en tu negocio?
              </h2>
              <p className="text-muted-foreground mb-8">
                Contáctanos hoy y descubre cómo nuestras soluciones pueden ayudarte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  Solicitar cotización
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/servicios"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-xl border border-border text-foreground font-semibold hover:bg-muted transition-colors"
                >
                  Explorar servicios
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Precios;
