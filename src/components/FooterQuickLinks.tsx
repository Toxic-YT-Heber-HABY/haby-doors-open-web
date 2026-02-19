
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
      <h3 className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/60 mb-5">Enlaces rápidos</h3>
      <ul className="space-y-3">
        {quickLinks.map(({ to, label, accent }) => (
          <li key={to}>
            <Link
              to={to}
              className={`text-sm transition-colors duration-200 ${accent ? "text-accent font-semibold hover:text-primary-foreground" : "text-primary-foreground/70 hover:text-primary-foreground"}`}
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
