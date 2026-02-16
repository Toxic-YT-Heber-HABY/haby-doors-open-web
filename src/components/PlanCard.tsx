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

export function PlanCard({ plan, loading, onSelect, hovered, onHover }: PlanCardProps) {
  return (
    <div
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      className={`
        relative rounded-2xl p-8 transition-all duration-300 border bg-card
        ${plan.highlighted
          ? "border-primary shadow-lg ring-1 ring-primary/20"
          : "border-border hover:border-primary/20"
        }
        ${hovered ? "shadow-lg -translate-y-1" : ""}
      `}
    >
      {plan.highlighted && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold">
          Más popular
        </div>
      )}
      <h3 className="text-xl font-display font-bold text-foreground mb-2">{plan.name}</h3>
      <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

      <div className="mb-6">
        <div className="text-2xl font-bold text-primary">${plan.prices.mxn} MXN</div>
        <div className="text-xs text-muted-foreground mt-1">
          (${plan.prices.usd} USD / €{plan.prices.eur} EUR)
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="h-3 w-3 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      {plan.id === "premium" ? (
        <Link
          to="/contacto?plan=premium"
          className="w-full block text-center py-3 rounded-xl font-semibold transition-all bg-primary text-primary-foreground hover:opacity-90"
        >
          {plan.buttonText}
        </Link>
      ) : (
        <button
          onClick={() => onSelect(plan.id)}
          disabled={loading === plan.id}
          className={`w-full py-3 rounded-xl font-semibold transition-all disabled:opacity-50 ${
            plan.highlighted
              ? "bg-primary text-primary-foreground hover:opacity-90"
              : "bg-muted text-foreground border border-border hover:border-primary/30 hover:bg-primary/5"
          }`}
        >
          {loading === plan.id ? "Procesando..." : plan.buttonText}
        </button>
      )}
    </div>
  );
}
