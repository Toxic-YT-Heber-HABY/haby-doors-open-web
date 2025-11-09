
import { Link } from 'react-router-dom';

const quickLinks = [
  { to: "/", label: "Inicio" },
  { to: "/sobre-nosotros", label: "Sobre Nosotros" },
  { to: "/servicios", label: "Servicios" },
  { to: "/portafolio", label: "Portafolio" },
  { to: "/precios", label: "Precios" },
  { to: "/contacto", label: "Contacto" },
  { to: "/cloritizacion", label: "Cloritización", accent: true },
];

export default function FooterQuickLinks() {
  return (
    <div>
      <h3 className="text-xl font-heading font-bold mb-4">Enlaces rápidos</h3>
      <ul className="space-y-2">
        {quickLinks.map(({ to, label, accent }) => (
          <li key={to}>
            <Link
              to={to}
              className={`text-gray-300 transition-colors ${accent ? "text-haby-accent hover:text-haby-accent font-semibold" : "hover:text-white"}`}
              tabIndex={0}
              aria-label={label}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
