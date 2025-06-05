
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.email || !formData.servicio || !formData.mensaje) {
      toast.error("Por favor completa todos los campos requeridos");
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Enviando formulario de contacto:", formData);
      
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        console.error("Error al enviar correo:", error);
        throw error;
      }

      console.log("Correo enviado exitosamente:", data);
      toast.success("¡Mensaje enviado! Te responderemos pronto.");
      
      // Limpiar formulario
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        servicio: "",
        mensaje: ""
      });

    } catch (error) {
      console.error("Error al enviar mensaje:", error);
      toast.error("Error al enviar el mensaje. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-gradient-to-r from-haby-dark to-haby-primary text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contáctanos</h1>
              <p className="text-xl text-gray-200">
                Estamos aquí para ayudarte. Cuéntanos sobre tu proyecto y juntos encontraremos la mejor solución.
              </p>
            </div>
          </div>
        </div>

        {/* Formulario de contacto e información */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Formulario */}
              <div>
                <div className="mb-10">
                  <div className="inline-block bg-haby-light text-haby-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                    Envíanos un mensaje
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Cuéntanos sobre tu proyecto
                  </h2>
                  <p className="text-gray-600">
                    Completa el formulario a continuación y nos pondremos en contacto contigo a la brevedad.
                    Ya sea que tengas una idea clara o necesites orientación, estamos aquí para ayudarte.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre completo*
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-haby-primary"
                        placeholder="Tu nombre"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Correo electrónico*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-haby-primary"
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-haby-primary"
                      placeholder="Tu número de teléfono"
                    />
                  </div>

                  <div>
                    <label htmlFor="servicio" className="block text-sm font-medium text-gray-700 mb-1">
                      Servicio de interés*
                    </label>
                    <select
                      id="servicio"
                      name="servicio"
                      value={formData.servicio}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-haby-primary"
                      required
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="Plan Básico">Plan Básico - $14,999 MXN</option>
                      <option value="Plan Profesional">Plan Profesional - $24,999 MXN</option>
                      <option value="Plan Premium">Plan Premium - Desde $34,999 MXN</option>
                      <option value="LNA Gratuito">LNA Gratuito (bien común)</option>
                      <option value="Desarrollo Web Personalizado">Desarrollo Web Personalizado</option>
                      <option value="Soluciones a Medida">Soluciones a Medida</option>
                      <option value="Optimización de Procesos">Optimización de Procesos</option>
                      <option value="Plataformas Colaborativas">Plataformas Colaborativas</option>
                      <option value="Sistemas de Gestión">Sistemas de Gestión</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensaje*
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={6}
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-haby-primary"
                      placeholder="Cuéntanos sobre tu proyecto o problema que quieres resolver..."
                      required
                    ></textarea>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="privacidad"
                      className="mt-1"
                      required
                    />
                    <label htmlFor="privacidad" className="ml-2 text-sm text-gray-600">
                      Acepto la <a href="#" className="text-haby-primary hover:underline">Política de Privacidad</a> y el tratamiento de mis datos.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center bg-haby-primary hover:bg-haby-secondary text-white font-medium py-3 px-6 rounded-md transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar mensaje"} 
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              </div>

              {/* Información de contacto */}
              <div>
                <div className="bg-gray-50 rounded-lg p-8 h-full">
                  <div className="mb-10">
                    <div className="inline-block bg-haby-light text-haby-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                      Información de contacto
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                      ¿Prefieres contactarnos directamente?
                    </h2>
                    <p className="text-gray-600">
                      Contáctanos por cualquiera de estos medios y te responderemos a la brevedad.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div className="flex items-start">
                      <div className="h-12 w-12 rounded-full bg-haby-light flex items-center justify-center text-haby-primary mr-4 flex-shrink-0">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-1">Teléfono / WhatsApp</h3>
                        <a href="https://wa.me/5653681237" target="_blank" rel="noopener noreferrer" className="text-haby-primary hover:underline">
                          56 5368 1237
                        </a>
                        <p className="text-sm text-gray-600 mt-1">
                          Disponible de lunes a viernes de 9:00 a 18:00
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="h-12 w-12 rounded-full bg-haby-light flex items-center justify-center text-haby-primary mr-4 flex-shrink-0">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-1">Correo electrónico</h3>
                        <a href="mailto:info@habydoors.com" className="text-haby-primary hover:underline">
                          info@habydoors.com
                        </a>
                        <p className="text-sm text-gray-600 mt-1">
                          Te responderemos en menos de 24 horas
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="h-12 w-12 rounded-full bg-haby-light flex items-center justify-center text-haby-primary mr-4 flex-shrink-0">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-1">Horario de atención</h3>
                        <p className="text-gray-700">Lunes a Viernes</p>
                        <p className="text-gray-700">9:00 - 18:00</p>
                      </div>
                    </div>

                    <div className="pt-8 border-t border-gray-200">
                      <h3 className="text-lg font-bold text-gray-800 mb-4">Síguenos en redes sociales</h3>
                      <div className="flex space-x-4">
                        <a href="https://www.facebook.com/zadkiel.garcia.31/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                          <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                          </svg>
                        </a>
                        <a href="https://www.instagram.com/habydoors/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                          <svg className="h-5 w-5 text-pink-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                          </svg>
                        </a>
                        <a href="https://www.youtube.com/@HABYOpenDoors?themeRefresh=1" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                          <svg className="h-5 w-5 text-red-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                          </svg>
                        </a>
                        <a href="https://x.com/Haby_Open_Doors" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                          <svg className="h-5 w-5 text-black" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <a href="https://wa.me/5653681237" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        <path d="M14.05 2a9 9 0 0 1 8 7.94"></path>
                        <path d="M14.05 6A5 5 0 0 1 18 10"></path>
                      </svg>
                      Contactar por WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contacto;
