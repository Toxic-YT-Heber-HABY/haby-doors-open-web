/**
 * useDeviceCapabilities Hook
 * 
 * Hook avanzado para detectar las capacidades del dispositivo
 * y optimizar la experiencia según las limitaciones de hardware
 * 
 * Optimizado para evitar forced reflows usando:
 * - Caching de resultados
 * - requestIdleCallback para operaciones no críticas
 * - Evitar lecturas de DOM síncronas
 */
import { useState, useEffect, useMemo } from 'react';

interface DeviceCapabilities {
  isMobile: boolean;
  isTablet: boolean;
  isLowEndDevice: boolean;
  supportsWebGL: boolean;
  supports3D: boolean;
  memoryLevel: 'low' | 'medium' | 'high';
  performanceLevel: 'low' | 'medium' | 'high';
  preferredRenderMode: '3d' | 'fallback' | 'static';
}

// Cache global para evitar recálculos
let cachedCapabilities: DeviceCapabilities | null = null;

// Función para detectar WebGL de forma lazy (solo cuando se necesita)
const detectWebGL = (): boolean => {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return !!gl;
  } catch {
    return false;
  }
};

// Detectar capacidades una sola vez de forma síncrona (valores iniciales rápidos)
const getInitialCapabilities = (): DeviceCapabilities => {
  if (cachedCapabilities) return cachedCapabilities;
  
  const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent.toLowerCase() : '';
  const isMobile = /android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
  const isTablet = /ipad|android(?!.*mobile)|tablet/i.test(userAgent);
  
  // Valores iniciales conservadores (sin acceder al DOM)
  const hardwareConcurrency = typeof navigator !== 'undefined' ? navigator.hardwareConcurrency || 2 : 2;
  const deviceMemory = typeof navigator !== 'undefined' ? (navigator as any).deviceMemory || 4 : 4;
  
  const isLowEndDevice = 
    hardwareConcurrency < 4 || 
    deviceMemory < 4 || 
    /android 4\.|android 5\./i.test(userAgent);
  
  let memoryLevel: 'low' | 'medium' | 'high' = 'medium';
  if (deviceMemory <= 2) memoryLevel = 'low';
  else if (deviceMemory >= 8) memoryLevel = 'high';
  
  // Asumir valores conservadores inicialmente
  const supportsWebGL = !isMobile && !isLowEndDevice;
  
  let performanceLevel: 'low' | 'medium' | 'high' = 'medium';
  if (isLowEndDevice) performanceLevel = 'low';
  else if (hardwareConcurrency >= 8 && deviceMemory >= 8) performanceLevel = 'high';
  
  const supports3D = supportsWebGL && !isLowEndDevice && !isMobile;
  
  let preferredRenderMode: '3d' | 'fallback' | 'static' = 'fallback';
  if (supports3D && performanceLevel === 'high') preferredRenderMode = '3d';
  else if (isMobile || isLowEndDevice) preferredRenderMode = 'static';
  
  const capabilities: DeviceCapabilities = {
    isMobile,
    isTablet,
    isLowEndDevice,
    supportsWebGL,
    supports3D,
    memoryLevel,
    performanceLevel,
    preferredRenderMode,
  };
  
  cachedCapabilities = capabilities;
  return capabilities;
};

export function useDeviceCapabilities(): DeviceCapabilities {
  // Usar valores iniciales cacheados (sin acceso al DOM)
  const initialCapabilities = useMemo(() => getInitialCapabilities(), []);
  const [capabilities, setCapabilities] = useState<DeviceCapabilities>(initialCapabilities);

  useEffect(() => {
    // Verificar WebGL de forma asíncrona para evitar forced reflow
    const checkWebGL = () => {
      const supportsWebGL = detectWebGL();
      
      setCapabilities(prev => {
        if (prev.supportsWebGL === supportsWebGL) return prev;
        
        const supports3D = supportsWebGL && !prev.isLowEndDevice && !prev.isMobile;
        let performanceLevel = prev.performanceLevel;
        if (!supportsWebGL && performanceLevel !== 'low') performanceLevel = 'low';
        
        let preferredRenderMode: '3d' | 'fallback' | 'static' = 'fallback';
        if (supports3D && performanceLevel === 'high') preferredRenderMode = '3d';
        else if (prev.isMobile || prev.isLowEndDevice) preferredRenderMode = 'static';
        
        const updated = {
          ...prev,
          supportsWebGL,
          supports3D,
          performanceLevel,
          preferredRenderMode,
        };
        
        cachedCapabilities = updated;
        return updated;
      });
    };

    // Usar requestIdleCallback si está disponible, sino setTimeout
    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(checkWebGL, { timeout: 1000 });
      return () => cancelIdleCallback(id);
    } else {
      const timeoutId = setTimeout(checkWebGL, 100);
      return () => clearTimeout(timeoutId);
    }
  }, []);

  return capabilities;
}
