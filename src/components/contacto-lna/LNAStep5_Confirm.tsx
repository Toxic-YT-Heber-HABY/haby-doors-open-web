
import { useState } from "react";
import { CheckCircle, MessageCircle, FileText, AlertTriangle } from "lucide-react";

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
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-haby-primary to-haby-accent rounded-full mb-4">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-haby-primary mb-3">Mensaje final y confirmación</h2>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Estás a punto de enviar tu solicitud. Usa este espacio para agregar cualquier información adicional que consideres importante para tu evaluación.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex items-center space-x-3 mb-4">
          <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
            <MessageCircle className="w-5 h-5 text-blue-600" />
          </div>
          <label className="text-lg font-semibold text-gray-800">
            Mensaje adicional para el equipo de HABY*
            <span className="text-sm text-gray-500 font-normal block">Tu oportunidad final para convencernos</span>
          </label>
        </div>
        <textarea
          name="mensaje"
          value={data.mensaje}
          maxLength={500}
          onChange={e => onChange({ mensaje: e.target.value })}
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
          rows={6}
          placeholder="Este es tu espacio para agregar contexto adicional, urgencias, o cualquier información que ayude a evaluar tu solicitud.

Ejemplo: 'Nuestro proyecto es urgente porque las clases inician en 2 meses y necesitamos la plataforma lista. Tenemos el apoyo del director de la escuela y ya hicimos pruebas piloto con 20 estudiantes. El municipio nos ofreció apoyo técnico si conseguimos la plataforma. Pueden contactarme al WhatsApp 555-123-4567 para cualquier duda urgente...'"
          required
        />
        <div className="flex justify-between items-center mt-3">
          <div className="text-sm text-gray-700">
            <strong>¿Qué agregar?</strong> Urgencias, contexto adicional, dudas, contactos alternativos, o cualquier detalle relevante.
          </div>
          <span className="text-sm text-gray-400 font-mono">
            {data.mensaje?.length || 0}/500
          </span>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
        <div className="flex items-start space-x-3">
          <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-green-900 mb-3 text-lg">✅ Antes de enviar, verifica que:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-green-800">Tu proyecto beneficia a la comunidad (no es comercial privado)</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-green-800">Los datos que proporcionaste son correctos</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-green-800">Tu correo electrónico está bien escrito</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-green-800">Entiendes el proceso de evaluación (máximo 5 días hábiles)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex items-start space-x-4">
          <input
            type="checkbox"
            className="mt-1 w-5 h-5 text-haby-primary border-gray-300 rounded focus:ring-haby-primary focus:ring-2 flex-shrink-0"
            checked={lnaTermsAccepted}
            onChange={e => setLnaTermsAccepted(e.target.checked)}
            required
          />
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <FileText className="w-5 h-5 text-haby-primary" />
              <span className="font-semibold text-gray-800">Acepto los términos del plan gratuito</span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              Mi proyecto es de bien común, será de acceso público, no recolectará datos sensibles, y entiendo que HABY tendrá derechos de autor sobre el código desarrollado (siendo reconocido como contribuyente).
            </p>
            <button 
              type="button" 
              className="inline-flex items-center text-sm text-haby-primary hover:text-haby-accent underline font-medium transition-colors"
              onClick={() => setShowTerms(true)}
            >
              <FileText className="w-4 h-4 mr-1" />
              Ver términos completos
            </button>
          </div>
        </div>
      </div>

      {showTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white p-8 rounded-2xl max-w-3xl max-h-[80vh] overflow-y-auto shadow-2xl relative">
            <button
              type="button"
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-2xl font-bold text-gray-400 hover:text-haby-primary hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setShowTerms(false)}
              aria-label="Cerrar términos"
            >
              ×
            </button>
            
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-haby-primary rounded-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-haby-primary">Términos y condiciones del Plan Gratuito LNA</h3>
            </div>
            
            <div className="space-y-6 text-gray-800">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-900 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  1. Requisitos del proyecto
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>El proyecto debe estar orientado al bien común y ser accesible para cualquier persona</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>No debe causar daños a los usuarios ni recopilar datos personales sensibles</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>El acceso debe ser irrestricto y el propósito social debe estar claramente definido</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Solo se aceptan proyectos funcionales y sencillos, no desarrollos comerciales privados</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-bold text-purple-900 mb-3 flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  2. Derechos de autor
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Los derechos de autor del código desarrollado serán propiedad de HABY</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>El solicitante será reconocido públicamente como contribuyente del proyecto</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>El solicitante tendrá derecho de uso permanente del proyecto desarrollado</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-900 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  3. Compromisos
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Mantener el proyecto activo y accesible por al menos 2 años</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Proporcionar retroalimentación sobre el uso y impacto del proyecto</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Permitir que HABY use el proyecto como caso de estudio (de forma anónima si se solicita)</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                Para consultar los términos completos y actualizados, visita nuestra página web oficial.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LNAStep5_Confirm;
