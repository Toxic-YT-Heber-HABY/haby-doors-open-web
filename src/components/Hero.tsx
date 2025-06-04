
import { ArrowRight, Users, CheckCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: <Users className="h-8 w-8" />, value: "50+", label: t('hero.statsClients') },
    { icon: <CheckCircle className="h-8 w-8" />, value: "100+", label: t('hero.statsProjects') },
    { icon: <Clock className="h-8 w-8" />, value: "3+", label: t('hero.statsExperience') }
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-haby-light via-white to-gray-50 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-haby-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-haby-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-72 h-72 bg-haby-secondary rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-haby-primary mb-2 leading-none">
                {t('hero.title')}
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-haby-secondary tracking-wider">
                {t('hero.subtitle')}
              </h2>
            </motion.div>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t('hero.description')}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link 
                to="/contacto" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-haby-primary to-haby-secondary text-white text-lg font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              >
                {t('hero.cta')}
                <ArrowRight className="ml-3 h-6 w-6 transform transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Imagen y estadísticas */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative max-w-lg mx-auto">
              <motion.div 
                className="aspect-square bg-gradient-to-br from-haby-primary/20 to-haby-accent/20 rounded-3xl p-8 backdrop-blur-sm border border-white/30"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-haby-primary to-haby-secondary rounded-2xl flex items-center justify-center text-white text-8xl font-bold shadow-2xl">
                  H
                </div>
              </motion.div>
              
              {/* Estadísticas flotantes */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {stats.map((stat, index) => (
                      <motion.div 
                        key={index}
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      >
                        <div className="text-haby-primary mb-2">
                          {stat.icon}
                        </div>
                        <div className="text-2xl font-bold text-gray-800 mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600 leading-tight">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
