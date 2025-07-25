import React, { useState, useEffect } from 'react';
import { ExternalLink, AlertCircle, CheckCircle, Loader } from 'lucide-react';

interface LinkValidatorProps {
  url: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
}

type LinkStatus = 'checking' | 'valid' | 'invalid' | 'unchecked';

const LinkValidator: React.FC<LinkValidatorProps> = ({ 
  url, 
  children, 
  className = "", 
  title = "Enlace externo" 
}) => {
  const [status, setStatus] = useState<LinkStatus>('unchecked');
  const [isHovered, setIsHovered] = useState(false);

  // Validar si la URL es válida
  const isValidUrl = (urlString: string) => {
    if (!urlString || urlString === "#" || urlString === "null") return false;
    
    try {
      new URL(urlString);
      return true;
    } catch {
      return false;
    }
  };

  // Manejar click en enlaces
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isValidUrl(url)) {
      e.preventDefault();
      alert('Este enlace no está disponible o es privado.');
      return;
    }

    // Para enlaces externos, abrir en nueva pestaña con seguridad
    if (url.startsWith('http') && !url.includes(window.location.hostname)) {
      e.preventDefault();
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  // Verificar accesibilidad del enlace al hacer hover
  useEffect(() => {
    if (isHovered && isValidUrl(url)) {
      setStatus('checking');
      
      // Simular verificación del enlace
      const checkLink = async () => {
        try {
          // En un entorno real, aquí harías una verificación de cabeceras
          // Por ahora solo verificamos que el formato sea válido
          await new Promise(resolve => setTimeout(resolve, 500));
          setStatus('valid');
        } catch {
          setStatus('invalid');
        }
      };

      checkLink();
    }
  }, [isHovered, url]);

  // Renderizar indicador de estado
  const renderStatusIcon = () => {
    if (!isHovered) return null;
    
    switch (status) {
      case 'checking':
        return <Loader className="h-3 w-3 animate-spin ml-1" />;
      case 'valid':
        return <CheckCircle className="h-3 w-3 text-green-500 ml-1" />;
      case 'invalid':
        return <AlertCircle className="h-3 w-3 text-red-500 ml-1" />;
      default:
        return null;
    }
  };

  // Si el enlace no es válido, renderizar como texto
  if (!isValidUrl(url)) {
    return (
      <span className={`inline-flex items-center gap-1 text-gray-400 cursor-not-allowed ${className}`}>
        {children}
        <AlertCircle className="h-3 w-3" />
        <span className="sr-only">Enlace no disponible</span>
      </span>
    );
  }

  return (
    <a
      href={url}
      target={url.startsWith('http') ? '_blank' : undefined}
      rel={url.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`inline-flex items-center gap-1 transition-all duration-200 hover:scale-105 ${className}`}
      title={title}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setStatus('unchecked');
      }}
      aria-label={`${title}: ${url}`}
    >
      {children}
      {url.startsWith('http') && <ExternalLink className="h-3 w-3" />}
      {renderStatusIcon()}
    </a>
  );
};

export default LinkValidator;