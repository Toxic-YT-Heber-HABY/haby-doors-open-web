/**
 * Security Audit Component
 * Herramienta para identificar y prevenir problemas de seguridad comunes
 */

import { useEffect } from 'react';

interface SecurityAuditProps {
  enableInProduction?: boolean;
}

export const SecurityAudit: React.FC<SecurityAuditProps> = ({ 
  enableInProduction = false 
}) => {
  useEffect(() => {
    // Solo ejecutar en desarrollo o si se habilita explícitamente
    if (process.env.NODE_ENV !== 'development' && !enableInProduction) {
      return;
    }

    const auditResults: string[] = [];

    // 1. Verificar console.log en producción
    const originalConsole = window.console;
    if (process.env.NODE_ENV === 'production') {
      // Desactivar console.log en producción
      window.console = {
        ...originalConsole,
        log: () => {},
        debug: () => {},
        info: () => {},
        warn: originalConsole.warn,
        error: originalConsole.error,
      };
    }

    // 2. Verificar localStorage sin cifrado
    try {
      const sensitiveKeys = ['password', 'token', 'secret', 'key'];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && sensitiveKeys.some(sensitive => key.toLowerCase().includes(sensitive))) {
          auditResults.push(`⚠️ Clave sensible en localStorage: ${key}`);
        }
      }
    } catch (e) {
      // localStorage no disponible
    }

    // 3. Verificar XSS potencial
    const dangerousElements = document.querySelectorAll('[onclick], [onload], [onerror]');
    if (dangerousElements.length > 0) {
      auditResults.push(`⚠️ Elementos con handlers inline detectados: ${dangerousElements.length}`);
    }

    // 4. Verificar HTTPS en producción
    if (process.env.NODE_ENV === 'production' && window.location.protocol !== 'https:') {
      auditResults.push('⚠️ Sitio no está usando HTTPS en producción');
    }

    // 5. Mostrar resultados de auditoría
    if (auditResults.length > 0 && process.env.NODE_ENV === 'development') {
      console.group('🔒 Auditoría de Seguridad');
      auditResults.forEach(result => console.warn(result));
      console.groupEnd();
    }

    return () => {
      // Restaurar console en cleanup
      if (process.env.NODE_ENV === 'production') {
        window.console = originalConsole;
      }
    };
  }, [enableInProduction]);

  return null; // Este componente no renderiza nada
};