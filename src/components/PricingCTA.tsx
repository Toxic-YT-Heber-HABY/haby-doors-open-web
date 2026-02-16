import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function PricingCTA() {
  return (
    <div className="mt-12 text-center max-w-2xl mx-auto p-8 rounded-2xl border border-border bg-card">
      <h3 className="text-lg font-display font-bold text-foreground mb-3">
        ¿Necesitas algo personalizado?
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        Contáctanos para una cotización detallada adaptada a tus necesidades.
      </p>
      <Link
        to="/contacto"
        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
      >
        Solicitar cotización
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
