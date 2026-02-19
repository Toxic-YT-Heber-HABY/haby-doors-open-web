import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Twitter, Phone, Mail, ArrowUpRight } from 'lucide-react';
import FooterQuickLinks from "./FooterQuickLinks";

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-primary-foreground relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Logo */}
          <div>
            <Link to="/" className="flex items-center gap-2 group mb-5" aria-label="HABY - Inicio">
              <img
                src="/lovable-uploads/f3e5eff1-a976-44c3-97a2-1e1e73c75a36.png"
                alt="HABY Logo"
                className="h-8 brightness-0 invert"
                loading="lazy"
              />
              <span className="text-xl font-display font-bold">HABY</span>
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed mb-6">
              Soluciones web personalizadas que resuelven problemas cotidianos y optimizan tu tiempo.
            </p>
            <div className="flex gap-2">
              {[
                { href: "https://www.facebook.com/habyopenthedoors", icon: <Facebook className="w-4 h-4" />, label: "Facebook" },
                { href: "https://www.instagram.com/habyopenthedoors", icon: <Instagram className="w-4 h-4" />, label: "Instagram" },
                { href: "https://www.youtube.com/@HABYOpenDoors", icon: <Youtube className="w-4 h-4" />, label: "YouTube" },
                { href: "https://x.com/Haby_Open_Doors", icon: <Twitter className="w-4 h-4" />, label: "X" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <FooterQuickLinks />

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/60 mb-5">Servicios</h3>
            <ul className="space-y-3">
              {[
                { to: "/desarrollo-web", label: "Desarrollo Web" },
                { to: "/soluciones-personalizadas", label: "Soluciones Personalizadas" },
                { to: "/portafolio", label: "Portafolio" },
                { to: "/precios", label: "Planes y Precios" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/60 mb-5">Contacto</h3>
            <div className="space-y-4">
              <a href="https://wa.me/5653681237" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4" />
                56 5368 1237
              </a>
              <a href="mailto:habyopenthedoors@gmail.com" className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" />
                habyopenthedoors@gmail.com
              </a>
            </div>
            <a
              href="https://wa.me/5653681237"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg text-sm font-medium hover:bg-emerald-500/20 transition-all duration-300"
            >
              <Phone className="w-3.5 h-3.5" />
              WhatsApp
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/5">
          <p className="text-center text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} HABY. Todos los derechos reservados. Creado por Heber Zadkiel García Pérez.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
