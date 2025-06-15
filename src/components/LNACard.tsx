
import { Check, Info } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const lnaTerms = [
  "El proyecto debe estar ligado al bien común y ser accesible para cualquier persona.",
  "El acceso a la solución debe ser irrestricto y estar alineado con su propósito original.",
  "La solución no debe causar ningún daño o perjuicio a los usuarios.",
  "Todos los derechos de autor serán propiedad de HABY.",
  "El solicitante será reconocido únicamente como contribuyente.",
  "Se recomiendan proyectos sencillos pero funcionales con enfoque en problemas comunes.",
];

const TermsDialog = () => (
  <Dialog>
    <DialogTrigger asChild>
      <button className="text-haby-primary hover:text-haby-secondary text-sm underline flex items-center">
        <Info className="h-3.5 w-3.5 mr-1" /> Ver términos y condiciones
      </button>
    </DialogTrigger>
    <DialogContent className="max-w-2xl">
      <DialogHeader>
        <DialogTitle>Términos y Condiciones para LNA Gratuito</DialogTitle>
        <DialogDescription>
          Para asegurar que este recurso se utilice de manera adecuada y cumpla con su propósito original
        </DialogDescription>
      </DialogHeader>
      <div className="space-y-6 py-4">
        <p className="text-gray-700">
          HABY está comprometido con el bien común y ofrece una opción LNA gratuita bajo las siguientes condiciones:
        </p>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-900">1. Enfoque en el bien común</h4>
            <p className="text-sm text-gray-600">
              El proyecto, página web o solicitud debe estar intrínsecamente ligado al bien común. El resultado final debe ser accesible y utilizable por cualquier persona. La finalidad principal debe ser el beneficio colectivo, no el provecho personal o individual. Las solicitudes para beneficio particular serán automáticamente descartadas.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">2. Acceso irrestricto</h4>
            <p className="text-sm text-gray-600">
              Cualquier persona debe poder utilizar la solución, sin limitaciones geográficas, temporales o de cualquier otra índole. El uso debe estar alineado con el propósito original, fomentando su adopción generalizada y maximizando su impacto positivo en la comunidad.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">3. No causar daño</h4>
            <p className="text-sm text-gray-600">
              La solución proporcionada no debe causar ningún daño o perjuicio a los usuarios. Debe garantizar la protección de información personal, evitar la recopilación de datos sensibles y prevenir cualquier forma de incomodidad o perjuicio.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">4. Propiedad intelectual</h4>
            <p className="text-sm text-gray-600">
              Todos los derechos de autor de la solución desarrollada serán propiedad de HABY, quien recibirá todo el reconocimiento por la creación y mantenimiento de la solución. El solicitante será reconocido como contribuyente al proyecto.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">5. Rol del solicitante</h4>
            <p className="text-sm text-gray-600">
              La persona que realiza la petición será únicamente reconocida como contribuyente, ya que no está contratando un servicio personalizado para su beneficio individual, sino buscando una solución para el beneficio de la comunidad.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">6. Complejidad y viabilidad</h4>
            <p className="text-sm text-gray-600">
              Las peticiones deben centrarse en proyectos o soluciones sencillas pero funcionales. A menos que la petición presente una solución excepcionalmente buena para un problema de bien común, es poco probable que proyectos muy complejos puedan ser atendidos bajo la modalidad gratuita.
            </p>
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

export function LNACard() {
  return (
    <div className="mt-16 bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
      <div className="flex items-start space-x-4">
        <div className="bg-green-100 p-3 rounded-full">
          <Check className="h-6 w-6 text-green-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Opción LNA gratuita para el bien común
          </h3>
          <p className="text-gray-600 mb-4">
            Ofrecemos una opción de LNA gratuita para proyectos que beneficien a la comunidad en general.
            Esta opción está sujeta a términos y condiciones específicos.
          </p>
          <div className="space-y-2 mb-6">
            {lnaTerms.map((term, i) => (
              <div key={i} className="flex items-start">
                <Check className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-600">{term}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <TermsDialog />
            <Link
              to="/contacto?plan=lna-gratuito"
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md font-medium transition-colors"
              tabIndex={0}
              aria-label="Solicitar LNA gratuita"
            >
              Solicitar LNA gratuita
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
