import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { useState } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

const initialForm = { nombre: "", email: "", telefono: "", mensaje: "" };

const Cloritizacion = () => {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre || !form.email || !form.mensaje) {
      toast.error("Por favor completa todos los campos requeridos.");
      return;
    }
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("¡Tu solicitud fue enviada correctamente!");
      setForm(initialForm);
    } catch {
      toast.error("No se pudo enviar la solicitud.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full px-4 py-2.5 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <PageHeader
          badge="Cloritización"
          title="Servicio de Cloritización"
          description="Protege tu espacio con nuestro servicio profesional de cloritización."
        />

        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 max-w-xl">
            <motion.form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              autoComplete="off"
            >
              <h2 className="text-xl font-display font-bold text-foreground mb-2">Solicitar servicio</h2>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Nombre completo *</label>
                <input type="text" name="nombre" value={form.nombre} onChange={handleChange} className={inputClass} placeholder="Tu nombre" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Correo electrónico *</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} className={inputClass} placeholder="tu@email.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Teléfono</label>
                <input type="tel" name="telefono" value={form.telefono} onChange={handleChange} className={inputClass} placeholder="Opcional" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">¿En qué podemos ayudarte? *</label>
                <textarea name="mensaje" value={form.mensaje} onChange={handleChange} rows={5} className={inputClass} placeholder="Describe lo que necesitas..." required />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? "Enviando..." : "Enviar solicitud"}
                {!isSubmitting && <Send className="w-4 h-4" />}
              </button>
            </motion.form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cloritizacion;
