
import { Link } from "react-router-dom";

export function PricingCTA() {
  return (
    <div className="text-center mt-12 bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
      <h3 className="text-xl font-bold text-gray-800 mb-4">¿Necesitas una solución personalizada?</h3>
      <p className="text-gray-600 mb-6">
        Contáctanos para una cotización detallada adaptada a tus necesidades específicas.
        Analizaremos tu problema y te proporcionaremos la mejor solución posible.
      </p>
      <Link
        to="/contacto"
        className="btn-primary"
        tabIndex={0}
        aria-label="Solicitar cotización"
      >
        Solicitar cotización
      </Link>
    </div>
  );
}
