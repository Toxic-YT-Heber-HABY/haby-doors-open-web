import { ExternalLink, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';

interface ValidatedExternalLinkProps {
  url: string;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
  onError?: () => void;
}

/**
 * Componente de enlace externo con validación
 * Valida URLs antes de abrirlas y proporciona feedback visual
 */
const ValidatedExternalLink = ({ 
  url, 
  children, 
  className = '', 
  showIcon = true,
  onError 
}: ValidatedExternalLinkProps) => {
  const [isValid, setIsValid] = useState(true);
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    // Validación básica de URL
    const validateUrl = () => {
      try {
        const urlObj = new URL(url);
        const isValidProtocol = urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
        setIsValid(isValidProtocol && urlObj.hostname.length > 0);
      } catch {
        setIsValid(false);
      }
    };

    if (url) {
      validateUrl();
    }
  }, [url]);

  const handleClick = (e: React.MouseEvent) => {
    if (!isValid) {
      e.preventDefault();
      toast.error('El enlace no es válido o no está disponible');
      onError?.();
      return;
    }

    // Abrir en nueva pestaña de forma segura
    e.preventDefault();
    setIsChecking(true);
    
    try {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      if (!newWindow) {
        toast.error('Por favor, permite ventanas emergentes para este sitio');
      }
    } catch (error) {
      console.error('Error opening link:', error);
      toast.error('No se pudo abrir el enlace');
      onError?.();
    } finally {
      setTimeout(() => setIsChecking(false), 1000);
    }
  };

  if (!url || !isValid) {
    return (
      <span className={`inline-flex items-center gap-2 text-gray-400 cursor-not-allowed ${className}`}>
        {children}
        {showIcon && <AlertCircle className="w-4 h-4" />}
      </span>
    );
  }

  return (
    <a
      href={url}
      onClick={handleClick}
      className={`inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 ${
        isChecking ? 'opacity-50 cursor-wait' : 'cursor-pointer'
      } ${className}`}
      rel="noopener noreferrer"
      aria-label={`Abrir enlace externo: ${url}`}
    >
      {children}
      {showIcon && <ExternalLink className="w-4 h-4" />}
    </a>
  );
};

export default ValidatedExternalLink;
