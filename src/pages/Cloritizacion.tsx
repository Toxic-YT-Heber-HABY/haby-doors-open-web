
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const initialForm = {
  nombre: "",
  email: "",
  telefono: "",
  mensaje: "",
};

const Cloritizacion = () => {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.nombre || !form.email || !form.mensaje) {
      toast.error("Por favor completa todos los campos requeridos.");
      return;
    }
    setIsSubmitting(true);
    try {
      // Dummy: Aquí puedes integrar el envío real (como a Supabase)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("¡Tu solicitud de cloritización fue enviada correctamente!");
      setForm(initialForm);
    } catch (err) {
      toast.error("No se pudo enviar la solicitud. Inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-haby-primary via-white to-white flex flex-col">
      <Navbar />
      <main className="flex-grow w-full flex items-center justify-center py-12 px-2">
        <motion.section 
          className="w-full max-w-2xl bg-white/90 shadow-2xl rounded-3xl p-8 border-y-4 border-haby-accent"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center">
            <motion.div 
              className="flex items-center gap-3 bg-haby-accent/20 px-5 py-2 rounded-full mb-5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Sparkles className="w-6 h-6 text-haby-accent" />
              <span className="text-lg font-bold text-haby-primary animate-fade-in">Solicitar servicio de cloritización</span>
            </motion.div>
            <motion.h1
              className="text-3xl md:text-4xl font-extrabold text-haby-primary mb-4 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Protege tu espacio con nuestro servicio profesional de <span className="text-haby-accent">cloritización</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-700 mb-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              Llena el siguiente formulario y nos pondremos en contacto contigo lo antes posible para brindarte una cotización personalizada.
            </motion.p>
          </div>
          <motion.form 
            className="space-y-6"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            autoComplete="off"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo *</label>
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-haby-accent focus:outline-none transition-all"
                placeholder="Tu nombre"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico *</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-haby-accent focus:outline-none transition-all"
                placeholder="tu@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
              <input
                type="tel"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-haby-accent focus:outline-none transition-all"
                placeholder="Opcional"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">¿En qué podemos ayudarte? *</label>
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-haby-accent focus:outline-none transition-all"
                placeholder="Describe lo que necesitas: superficie, espacio, detalle, dudas..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-haby-primary text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:bg-haby-accent transition-all hover:scale-105 focus:ring-2 focus:ring-haby-accent focus:ring-offset-2 mt-2"
            >
              {isSubmitting ? "Enviando..." : "Enviar solicitud"}
              {!isSubmitting && <Send className="w-5 h-5" />}
            </button>
          </motion.form>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default Cloritizacion;
