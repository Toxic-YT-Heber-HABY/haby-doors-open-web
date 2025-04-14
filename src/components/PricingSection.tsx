import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
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

const PriceDisplay = ({ prices }: { prices: { mxn: string; usd: string; eur: string } }) => (
  <div className="space-y-1">
    <div className="text-2xl font-bold text-haby-primary">${prices.mxn} MXN</div>
    <div className="text-sm text-gray-600">
      (${prices.usd} USD / €{prices.eur} EUR)
    </div>
  </div>
);

const PricingSection = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`
                bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow 
                ${plan.highlighted ? 'border-2 border-haby-primary relative' : ''} 
                animate-fade-in
              `}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
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
              <Link 
                to="/contacto" 
                className={`
                  w-full block text-center py-3 px-4 rounded-md font-medium transition-colors
                  ${plan.highlighted 
                    ? 'bg-haby-primary text-white hover:bg-haby-secondary' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}
                `}
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-gray-800 mb-4">¿Necesitas una solución personalizada?</h3>
          <p className="text-gray-600 mb-6">
            Contáctanos para una cotización detallada adaptada a tus necesidades específicas.
            Analizaremos tu problema y te proporcionaremos la mejor solución posible.
          </p>
          <Link to="/contacto" className="btn-primary">
            Solicitar cotización
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
