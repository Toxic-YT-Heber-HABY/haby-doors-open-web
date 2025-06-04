
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const isMobile = useIsMobile();
  const { t } = useLanguage();
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="section bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <div className="relative mx-auto max-w-md">
              <div className="aspect-square w-full bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/lovable-uploads/90ffa1ad-1f42-465a-b17e-61918ab82862.png" 
                  alt="Heber Zadkiel García Pérez - Fundador de HABY" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <motion.div 
                className="absolute -bottom-5 -right-5 bg-white p-4 shadow-lg rounded-lg max-w-[250px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-haby-primary font-medium">{t('about.founderTitle')}</p>
                <p className="text-gray-600 text-sm mt-1">{t('about.founderSubtitle')}</p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { 
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.div 
              variants={fadeInUp} 
              className="inline-block bg-haby-light text-haby-primary px-4 py-2 rounded-full text-sm font-medium"
            >
              {t('about.badge')}
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp} 
              className="text-3xl md:text-4xl font-bold text-gray-800"
            >
              {t('about.title')}
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp} 
              className="text-gray-600"
            >
              {t('about.description1')}
            </motion.p>
            
            <motion.p 
              variants={fadeInUp} 
              className="text-gray-600"
            >
              {t('about.description2')}
            </motion.p>
            
            <motion.div variants={fadeInUp}>
              <Link to="/sobre-nosotros" className="inline-flex items-center text-haby-primary hover:text-haby-secondary font-medium group transition-all duration-300">
                {t('about.cta')}
                <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
