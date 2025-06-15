
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
        relative bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-all duration-300
        ${plan.highlighted ? "border-2 border-haby-primary" : ""}
        ${hovered ? "transform scale-[1.03]" : ""}
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
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <Check className="h-5 w-5 text-haby-accent mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      {plan.id === "premium" ? (
        <Link
          to="/contacto?plan=premium"
          className="w-full block text-center py-3 px-4 rounded-md font-medium transition-all duration-300 bg-haby-primary text-white hover:bg-haby-secondary"
          tabIndex={0}
          aria-label="Contactar para plan Premium"
        >
          {plan.buttonText}
        </Link>
      ) : (
        <button
          onClick={() => onSelect(plan.id)}
          disabled={loading === plan.id}
          className={`w-full block text-center py-3 px-4 rounded-md font-medium transition-all duration-300 disabled:opacity-50 ${
            plan.highlighted
              ? "bg-haby-primary text-white hover:bg-haby-secondary"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
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
