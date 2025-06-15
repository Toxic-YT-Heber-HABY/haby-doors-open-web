
import { useState } from "react";

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
      <p className="text-gray-600 mb-6">
        Estás a punto de enviar tu solicitud. Usa este espacio para agregar cualquier información adicional que consideres importante para tu evaluación.
      </p>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Mensaje adicional para el equipo de HABY*
        </label>
        <textarea
          name="mensaje"
          value={data.mensaje}
          maxLength={500}
          onChange={e => onChange({ mensaje: e.target.value })}
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-haby-primary"
          rows={5}
          placeholder="Ejemplo: Nuestro proyecto es urgente porque las clases inician en 2 meses y necesitamos la plataforma lista. Tenemos el apoyo del director de la escuela y ya hicimos pruebas piloto con 20 estudiantes. Cualquier duda pueden contactarme al WhatsApp..."
          required
        />
        <div className="flex justify-between items-center mt-1">
          <p className="text-xs text-gray-500">
            Comparte contexto adicional, urgencias, dudas, o cualquier información que nos ayude a evaluar mejor tu solicitud.
          </p>
          <span className="text-xs text-gray-400">
            {data.mensaje?.length || 0}/500
          </span>
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <h3 className="font-medium text-green-900 mb-2">✅ Antes de enviar, verifica que:</h3>
        <ul className="text-sm text-green-800 space-y-1">
          <li>• Tu proyecto beneficia a la comunidad (no es para uso comercial privado)</li>
          <li>• Los datos que proporcionaste son correctos</li>
          <li>• Tu correo electrónico está bien escrito (por ahí te contactaremos)</li>
          <li>• Entiendes que evaluaremos tu solicitud y te responderemos en máximo 5 días hábiles</li>
        </ul>
      </div>

      <label className="inline-flex items-start mt-4">
        <input
          type="checkbox"
          className="mr-3 mt-1 flex-shrink-0"
          checked={lnaTermsAccepted}
          onChange={e => setLnaTermsAccepted(e.target.checked)}
          required
        />
        <span className="text-sm text-gray-700">
          <strong>Acepto los términos del plan gratuito:</strong> Mi proyecto es de bien común, será de acceso público, no recolectará datos sensibles, y entiendo que HABY tendrá derechos de autor sobre el código desarrollado (siendo reconocido como contribuyente).{" "}
          <button 
            type="button" 
            className="text-haby-primary underline hover:text-haby-accent" 
            onClick={() => setShowTerms(true)}
          >
            Ver términos completos
          </button>
        </span>
      </label>

      {showTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="bg-white p-6 rounded-lg max-w-2xl max-h-[80vh] overflow-y-auto shadow-lg relative">
            <button
              type="button"
              className="absolute top-4 right-4 text-2xl font-bold text-gray-400 hover:text-haby-primary"
              onClick={() => setShowTerms(false)}
              aria-label="Cerrar términos"
            >
              ×
            </button>
            <h3 className="text-lg font-bold mb-4 text-haby-primary">Términos y condiciones del Plan Gratuito LNA</h3>
            
            <div className="text-sm text-gray-800 space-y-3">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">1. Requisitos del proyecto:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>El proyecto debe estar orientado al bien común y ser accesible para cualquier persona</li>
                  <li>No debe causar daños a los usuarios ni recopilar datos personales sensibles</li>
                  <li>El acceso debe ser irrestricto y el propósito social debe estar claramente definido</li>
                  <li>Solo se aceptan proyectos funcionales y sencillos, no desarrollos comerciales privados</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">2. Derechos de autor:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Los derechos de autor del código desarrollado serán propiedad de HABY</li>
                  <li>El solicitante será reconocido públicamente como contribuyente del proyecto</li>
                  <li>El solicitante tendrá derecho de uso permanente del proyecto desarrollado</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">3. Compromisos:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Mantener el proyecto activo y accesible por al menos 2 años</li>
                  <li>Proporcionar retroalimentación sobre el uso y impacto del proyecto</li>
                  <li>Permitir que HABY use el proyecto como caso de estudio (de forma anónima si se solicita)</li>
                </ul>
              </div>
            </div>
            
            <p className="text-xs text-gray-500 mt-4 pt-3 border-t">
              Para consultar los términos completos y actualizados, visita nuestra página web oficial.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LNAStep5_Confirm;
