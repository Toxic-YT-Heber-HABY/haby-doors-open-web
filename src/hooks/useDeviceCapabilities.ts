
/**
 * useDeviceCapabilities Hook
 * 
 * Hook avanzado para detectar las capacidades del dispositivo
 * y optimizar la experiencia según las limitaciones de hardware
 */
import { useState, useEffect } from 'react';

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

export function useDeviceCapabilities(): DeviceCapabilities {
  const [capabilities, setCapabilities] = useState<DeviceCapabilities>({
    isMobile: false,
    isTablet: false,
    isLowEndDevice: false,
    supportsWebGL: false,
    supports3D: false,
    memoryLevel: 'medium',
    performanceLevel: 'medium',
    preferredRenderMode: 'fallback',
  });

  useEffect(() => {
    const detectCapabilities = () => {
      // Detección básica de dispositivos
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile = /android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      const isTablet = /ipad|android(?!.*mobile)|tablet/i.test(userAgent);
      
      // Detección de soporte WebGL
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      const supportsWebGL = !!gl;
      
      // Detección de memoria y CPU
      const hardwareConcurrency = navigator.hardwareConcurrency || 2;
      const deviceMemory = (navigator as any).deviceMemory || 4;
      
      // Clasificación de dispositivos de gama baja
      const isLowEndDevice = 
        hardwareConcurrency < 4 || 
        deviceMemory < 4 || 
        /android 4\.|android 5\./i.test(userAgent);
      
      // Nivel de memoria
      let memoryLevel: 'low' | 'medium' | 'high' = 'medium';
      if (deviceMemory <= 2) memoryLevel = 'low';
      else if (deviceMemory >= 8) memoryLevel = 'high';
      
      // Nivel de rendimiento
      let performanceLevel: 'low' | 'medium' | 'high' = 'medium';
      if (isLowEndDevice || !supportsWebGL) performanceLevel = 'low';
      else if (hardwareConcurrency >= 8 && deviceMemory >= 8) performanceLevel = 'high';
      
      // Soporte 3D real
      const supports3D = supportsWebGL && !isLowEndDevice && !isMobile;
      
      // Modo de renderizado preferido
      let preferredRenderMode: '3d' | 'fallback' | 'static' = 'fallback';
      if (supports3D && performanceLevel === 'high') preferredRenderMode = '3d';
      else if (isMobile || isLowEndDevice) preferredRenderMode = 'static';
      
      setCapabilities({
        isMobile,
        isTablet,
        isLowEndDevice,
        supportsWebGL,
        supports3D,
        memoryLevel,
        performanceLevel,
        preferredRenderMode,
      });
    };

    detectCapabilities();
    
    // Re-evaluar en cambios de red/rendimiento
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        detectCapabilities();
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return capabilities;
}
