import { Check, Info } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";

const lnaTerms = [
  "El proyecto debe estar ligado al bien común.",
  "El acceso a la solución debe ser irrestricto.",
  "No debe causar daño a los usuarios.",
  "Derechos de autor propiedad de HABY.",
  "El solicitante será reconocido como contribuyente.",
  "Se recomiendan proyectos sencillos y funcionales.",
];

const TermsDialog = () => (
  <Dialog>
    <DialogTrigger asChild>
      <button className="text-primary hover:text-primary/80 text-sm underline flex items-center gap-1">
        <Info className="h-3.5 w-3.5" /> Ver términos
      </button>
    </DialogTrigger>
    <DialogContent className="max-w-2xl">
      <DialogHeader>
        <DialogTitle>Términos para LNA Gratuito</DialogTitle>
        <DialogDescription>Condiciones para el uso adecuado de este recurso</DialogDescription>
      </DialogHeader>
      <div className="space-y-4 py-2 text-sm">
        {[
          { t: "1. Bien común", d: "El proyecto debe beneficiar a la comunidad, no al individuo." },
          { t: "2. Acceso irrestricto", d: "Cualquier persona debe poder usar la solución." },
          { t: "3. No causar daño", d: "Debe proteger información personal y evitar perjuicios." },
          { t: "4. Propiedad intelectual", d: "Derechos de autor serán de HABY." },
          { t: "5. Contribuyente", d: "El solicitante será reconocido como contribuyente." },
          { t: "6. Viabilidad", d: "Proyectos sencillos y funcionales." },
        ].map((item, i) => (
          <div key={i}>
            <h4 className="font-semibold text-foreground">{item.t}</h4>
            <p className="text-muted-foreground">{item.d}</p>
          </div>
        ))}
      </div>
    </DialogContent>
  </Dialog>
);

export function LNACard() {
  return (
    <div className="mt-12 max-w-2xl mx-auto p-6 rounded-2xl border border-border bg-card">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
          <Check className="h-5 w-5 text-green-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            LNA Gratuito para el bien común
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Proyectos que beneficien a la comunidad pueden acceder a esta opción sin costo.
          </p>
          <ul className="space-y-2 mb-6">
            {lnaTerms.map((term, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="h-3.5 w-3.5 text-green-600 mt-0.5 flex-shrink-0" />
                {term}
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between flex-wrap gap-3">
            <TermsDialog />
            <Link
              to="/contacto?plan=lna-gratuito"
              className="px-5 py-2 rounded-xl bg-green-600 text-white text-sm font-semibold hover:bg-green-700 transition-colors"
            >
              Solicitar LNA gratuita
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
