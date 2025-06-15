
import { useState } from "react";
import { Input } from "@/components/ui/input";

const LNAStep5_Confirm = ({
  data,
  onChange,
  lnaTermsAccepted,
  setLnaTermsAccepted
}: {
  data: any;
  onChange: (fields: any) => void;
  lnaTermsAccepted: boolean;
  setLnaTermsAccepted: (b: boolean) => void;
}) => {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <div>
      <h2 className="text-xl font-bold text-haby-primary mb-2">Mensaje final y confirmación</h2>
      <p className="text-gray-600 mb-5">¿Algún comentario extra, duda o contexto adicional? Aprovecha para escribirnos lo que consideres importante (máx. 500 caracteres).</p>
      <div>
        <textarea
          name="mensaje"
          value={data.mensaje}
          maxLength={500}
          onChange={e => onChange({ mensaje: e.target.value })}
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-haby-primary mb-3"
          rows={5}
          placeholder="Escribe aquí tu mensaje..."
          required
        />
      </div>
      <label className="inline-flex items-center mt-4">
        <input
          type="checkbox"
          className="mr-2"
          checked={lnaTermsAccepted}
          onChange={e => setLnaTermsAccepted(e.target.checked)}
          required
        />
        <span className="text-sm text-green-700">
          Acepto los{" "}
          <button type="button" className="text-haby-primary underline" onClick={() => setShowTerms(true)}>
            términos y condiciones del plan gratuito
          </button>
          .
        </span>
      </label>
      {showTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white p-6 rounded-lg max-w-lg shadow-lg relative">
            <button
              type="button"
              className="absolute top-2 right-3 text-xl font-bold text-gray-400 hover:text-haby-primary"
              onClick={() => setShowTerms(false)}
              aria-label="Cerrar términos"
            >
              ×
            </button>
            <h3 className="text-lg font-bold mb-2 text-haby-primary">Términos y condiciones LNA Gratuito</h3>
            <ol className="text-sm text-gray-800 space-y-2 mb-3">
              <li>• El proyecto debe estar ligado al bien común y ser accesible a toda persona.</li>
              <li>• No debe causar daños a los usuarios, ni tomar datos personales sensibles.</li>
              <li>• El acceso debe ser irrestricto y el propósito social debe estar claro.</li>
              <li>• Los derechos de autor serán propiedad de HABY; el solicitante será reconocido como contribuyente.</li>
              <li>• Solo se podrán aceptar proyectos sencillos y funcionales, no desarrollos privados.</li>
            </ol>
            <p className="text-xs text-gray-500">Consulta los términos completos en nuestra web para más detalles.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LNAStep5_Confirm;
