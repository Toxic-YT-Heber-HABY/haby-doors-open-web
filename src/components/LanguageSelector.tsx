
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import { useState } from 'react';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isChanging, setIsChanging] = useState(false);

  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageChange = async (newLanguage: 'es' | 'en') => {
    if (newLanguage === language) return;
    
    setIsChanging(true);
    setIsOpen(false);
    
    // Pequeño delay para una transición más suave
    setTimeout(() => {
      setLanguage(newLanguage);
      setTimeout(() => {
        setIsChanging(false);
      }, 500);
    }, 100);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors disabled:opacity-50"
        aria-label="Select language"
        disabled={isChanging}
      >
        <Globe className={`h-4 w-4 text-gray-600 ${isChanging ? 'animate-spin' : ''}`} />
        <span className="text-sm font-medium text-gray-700">
          {currentLanguage?.flag} {currentLanguage?.code.toUpperCase()}
        </span>
      </button>

      {isOpen && !isChanging && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-20">
            <div className="py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code as 'es' | 'en')}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors flex items-center gap-3 ${
                    language === lang.code ? 'bg-haby-light text-haby-primary' : 'text-gray-700'
                  }`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span>{lang.name}</span>
                  {language === lang.code && (
                    <span className="ml-auto text-haby-primary">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSelector;
