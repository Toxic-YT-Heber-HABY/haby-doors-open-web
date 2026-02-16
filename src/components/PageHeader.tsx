import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  description: string;
  badge?: string;
}

const PageHeader = ({ title, description, badge }: PageHeaderProps) => (
  <section className="relative overflow-hidden bg-brand-dark py-20 md:py-28">
    {/* Grid pattern */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)/0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.3) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }}
    />
    {/* Ambient orbs */}
    <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {badge && (
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
            {badge}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl">
          {description}
        </p>
      </motion.div>
    </div>
  </section>
);

export default PageHeader;
