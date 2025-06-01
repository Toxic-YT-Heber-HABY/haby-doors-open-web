
/**
 * useBrowserDetection Hook
 * 
 * Hook personalizado que detecta el navegador del usuario y proporciona
 * información útil sobre compatibilidad y características soportadas.
 * 
 * @returns {Object} Información sobre el navegador y sus capacidades
 */
import { useEffect, useState } from "react";

interface BrowserInfo {
  name: string;
  version: string;
  isMobile: boolean;
  isIOS: boolean;
  isAndroid: boolean;
  isIE: boolean;
  isEdge: boolean;
  isSafari: boolean;
  isFirefox: boolean;
  isChrome: boolean;
  supportsWebP: boolean;
  supportsBackdropFilter: boolean;
}

export function useBrowserDetection(): BrowserInfo {
  const [browserInfo, setBrowserInfo] = useState<BrowserInfo>({
    name: "unknown",
    version: "0",
    isMobile: false,
    isIOS: false,
    isAndroid: false,
    isIE: false,
    isEdge: false,
    isSafari: false,
    isFirefox: false,
    isChrome: false,
    supportsWebP: false,
    supportsBackdropFilter: false,
  });

  useEffect(() => {
    const detect = () => {
      const userAgent = navigator.userAgent;
      
      // Detect browser name and version
      let name = "unknown";
      let version = "0";
      let isIE = false;
      let isEdge = false;
      let isSafari = false;
      let isFirefox = false;
      let isChrome = false;
      
      // Detect mobile
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      
      // Detect OS
      const isIOS = /iPad|iPhone|iPod/.test(userAgent) || 
                   (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      const isAndroid = /Android/.test(userAgent);
      
      // Check for IE
      if (/Trident\/|MSIE/.test(userAgent)) {
        name = "Internet Explorer";
        isIE = true;
        const ieMatch = userAgent.match(/(MSIE |rv:)(\d+\.\d)/);
        version = ieMatch ? ieMatch[2] : "0";
      }
      // Check for Edge
      else if (/Edg/.test(userAgent)) {
        name = "Microsoft Edge";
        isEdge = true;
        const edgeMatch = userAgent.match(/Edg\/(\d+\.\d+)/);
        version = edgeMatch ? edgeMatch[1] : "0";
      }
      // Check for Firefox
      else if (/Firefox/.test(userAgent)) {
        name = "Firefox";
        isFirefox = true;
        const firefoxMatch = userAgent.match(/Firefox\/(\d+\.\d+)/);
        version = firefoxMatch ? firefoxMatch[1] : "0";
      }
      // Check for Safari (not Chrome)
      else if (/Safari/.test(userAgent) && !/Chrome/.test(userAgent)) {
        name = "Safari";
        isSafari = true;
        const safariMatch = userAgent.match(/Version\/(\d+\.\d+)/);
        version = safariMatch ? safariMatch[1] : "0";
      }
      // Check for Chrome
      else if (/Chrome/.test(userAgent)) {
        name = "Chrome";
        isChrome = true;
        const chromeMatch = userAgent.match(/Chrome\/(\d+\.\d+)/);
        version = chromeMatch ? chromeMatch[1] : "0";
      }
      
      // Feature detection
      const supportsWebP = testWebP();
      const supportsBackdropFilter = CSS.supports("backdrop-filter", "blur(10px)") || 
                                   CSS.supports("-webkit-backdrop-filter", "blur(10px)");
      
      setBrowserInfo({
        name,
        version,
        isMobile,
        isIOS,
        isAndroid,
        isIE,
        isEdge,
        isSafari,
        isFirefox,
        isChrome,
        supportsWebP,
        supportsBackdropFilter,
      });
    };
    
    // Test for WebP support
    const testWebP = (): boolean => {
      const canvas = document.createElement('canvas');
      if (canvas.getContext && canvas.getContext('2d')) {
        return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
      }
      return false;
    };
    
    // Run detection
    detect();
    
    // Listen for resize events to update mobile status
    const handleResize = () => {
      const wasMobile = browserInfo.isMobile;
      const newIsMobile = window.innerWidth < 768;
      
      if (wasMobile !== newIsMobile) {
        setBrowserInfo(prev => ({ ...prev, isMobile: newIsMobile }));
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return browserInfo;
}

export default useBrowserDetection;
