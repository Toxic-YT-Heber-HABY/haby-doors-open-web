
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

type Plan = {
  id: string;
  name: string;
  description: string;
  prices: { mxn: string; usd: string; eur: string };
  features: string[];
  highlighted: boolean;
  buttonText: string;
};

type PlanCardProps = {
  plan: Plan;
  loading: string | null;
  onSelect: (id: string) => void;
  hovered: boolean;
  onHover: (on: boolean) => void;
};

const PriceDisplay = ({ prices }: { prices: Plan["prices"] }) => (
  <div className="space-y-1">
    <div className="text-2xl font-bold text-haby-primary">
      ${prices.mxn} MXN
    </div>
    <div className="text-sm text-gray-600">
      (${prices.usd} USD / €{prices.eur} EUR)
    </div>
  </div>
);

export function PlanCard({
  plan,
  loading,
  onSelect,
  hovered,
  onHover,
}: PlanCardProps) {
  return (
    <div
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      className={`
        relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-elegant p-10 hover:shadow-2xl transition-all duration-500 border
        ${plan.highlighted ? "border-2 border-haby-accent shadow-haby-accent/30" : "border-gray-200"}
        ${hovered ? "transform scale-105 -translate-y-2" : ""}
      `}
    >
      {plan.highlighted && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-haby-accent to-haby-primary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
          Más popular
        </div>
      )}
      <h3 className="text-2xl font-display font-black text-gray-900 mb-3">{plan.name}</h3>
      <p className="text-gray-600 mb-6 font-light leading-relaxed">{plan.description}</p>
      <PriceDisplay prices={plan.prices} />
      <ul className="space-y-4 mb-10">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start group">
            <div className="mr-3 mt-1 w-6 h-6 rounded-lg bg-haby-light flex items-center justify-center group-hover:bg-haby-accent transition-colors duration-300">
              <Check className="h-4 w-4 text-haby-primary group-hover:text-white transition-colors" />
            </div>
            <span className="text-gray-700 font-medium">{feature}</span>
          </li>
        ))}
      </ul>
      {plan.id === "premium" ? (
        <Link
          to="/contacto?plan=premium"
          className="w-full block text-center py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 bg-gradient-to-r from-haby-accent to-haby-primary text-white hover:scale-105 shadow-2xl hover:shadow-haby-accent/50"
          tabIndex={0}
          aria-label="Contactar para plan Premium"
        >
          {plan.buttonText}
        </Link>
      ) : (
        <button
          onClick={() => onSelect(plan.id)}
          disabled={loading === plan.id}
          className={`w-full block text-center py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 disabled:opacity-50 shadow-lg ${
            plan.highlighted
              ? "bg-gradient-to-r from-haby-primary to-haby-secondary text-white hover:scale-105 shadow-haby-primary/50"
              : "bg-white border-2 border-gray-300 text-gray-800 hover:border-haby-primary hover:text-haby-primary hover:scale-105"
          }`}
          tabIndex={0}
          aria-label={`Seleccionar plan ${plan.name}`}
        >
          {loading === plan.id ? "Procesando..." : plan.buttonText}
        </button>
      )}
    </div>
  );
}
