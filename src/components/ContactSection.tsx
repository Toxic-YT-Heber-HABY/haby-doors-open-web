import { Mail, Phone, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: '', email: '', telefono: '', servicio: '', mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.servicio || !formData.mensaje) {
      toast.error("Por favor completa todos los campos requeridos");
      return;
    }
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', { body: formData });
      if (error) throw error;
      toast.success("¡Mensaje enviado! Te responderemos pronto.");
      setFormData({ nombre: '', email: '', telefono: '', servicio: '', mensaje: '' });
    } catch {
      toast.error("Error al enviar. Inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 bg-[hsl(240,20%,97%)] border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(250,70%,60%/0.3)] focus:border-[hsl(250,70%,60%/0.5)] transition-all duration-200 placeholder:text-gray-400";

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase text-[hsl(250,70%,60%)] bg-[hsl(250,70%,60%/0.08)] border border-[hsl(250,70%,60%/0.15)] mb-4">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            ¿Listo para{' '}
            <span className="bg-gradient-to-r from-[hsl(250,70%,55%)] to-[hsl(280,80%,60%)] bg-clip-text text-transparent">
              empezar?
            </span>
          </h2>
          <p className="text-gray-500 text-lg">
            Cuéntanos tu idea y hagamos algo extraordinario juntos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6">Ponte en contacto</h3>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[hsl(250,70%,60%/0.08)] flex items-center justify-center">
                    <Phone className="w-4 h-4 text-[hsl(250,70%,60%)]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">WhatsApp</p>
                    <a href="https://wa.me/5653681237" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-900 hover:text-[hsl(250,70%,55%)] transition-colors">
                      56 5368 1237
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[hsl(250,70%,60%/0.08)] flex items-center justify-center">
                    <Mail className="w-4 h-4 text-[hsl(250,70%,60%)]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Email</p>
                    <a href="mailto:habyopenthedoors@gmail.com" className="text-sm font-medium text-gray-900 hover:text-[hsl(250,70%,55%)] transition-colors">
                      habyopenthedoors@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">Redes sociales</p>
              <div className="flex gap-3">
                {[
                  { href: "https://www.facebook.com/habyopenthedoors", label: "Facebook" },
                  { href: "https://www.instagram.com/habyopenthedoors", label: "Instagram" },
                  { href: "https://www.youtube.com/@HABYOpenDoors", label: "YouTube" },
                  { href: "https://x.com/Haby_Open_Doors", label: "X" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-[hsl(240,20%,97%)] border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[hsl(250,70%,60%)] hover:border-[hsl(250,70%,60%/0.3)] transition-all duration-300"
                    aria-label={social.label}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <a
              href="https://wa.me/5653681237"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-sm font-semibold transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              Contactar por WhatsApp
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_4px_20px_-5px_hsl(250,50%,40%/0.08)]">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Envíanos un mensaje</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">Nombre</label>
                    <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleInputChange} className={inputClasses} placeholder="Tu nombre" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className={inputClasses} placeholder="tu@email.com" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="telefono" className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">Teléfono (opcional)</label>
                    <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleInputChange} className={inputClasses} placeholder="Tu teléfono" />
                  </div>
                  <div>
                    <label htmlFor="servicio" className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">Servicio</label>
                    <select id="servicio" name="servicio" value={formData.servicio} onChange={handleInputChange} className={inputClasses} required>
                      <option value="">Selecciona</option>
                      <option value="Plan Básico">Plan Básico</option>
                      <option value="Plan Profesional">Plan Profesional</option>
                      <option value="Plan Premium">Plan Premium</option>
                      <option value="LNA Gratuito">LNA Gratuito</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">Mensaje</label>
                  <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleInputChange} rows={4} className={inputClasses} placeholder="Cuéntanos sobre tu proyecto..." required />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[hsl(250,70%,55%)] to-[hsl(280,80%,55%)] text-white rounded-xl text-sm font-semibold hover:shadow-[0_8px_25px_-5px_hsl(250,70%,60%/0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                  {!isSubmitting && <Send className="w-4 h-4" />}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
