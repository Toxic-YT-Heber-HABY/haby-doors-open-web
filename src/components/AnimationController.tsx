
/**
 * AnimationController Component
 * 
 * Componente de alto nivel que controla las animaciones basándose en
 * las capacidades del navegador y preferencias del usuario.
 * Proporciona un contexto para habilitar/deshabilitar animaciones.
 * 
 * @param {ReactNode} children - Componentes hijos
 */
import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface AnimationContextType {
  animationsEnabled: boolean;
  toggleAnimations: () => void;
  reducedMotion: boolean;
}

const AnimationContext = createContext<AnimationContextType>({
  animationsEnabled: true,
  toggleAnimations: () => {},
  reducedMotion: false,
});

export const useAnimations = () => useContext(AnimationContext);

interface AnimationControllerProps {
  children: React.ReactNode;
}

export const AnimationController: React.FC<AnimationControllerProps> = ({ children }) => {
  // Preferencia guardada en localStorage
  const [animationsEnabled, setAnimationsEnabled] = useLocalStorage("haby-animations-enabled", true);
  
  // Detectar preferencia de reducción de movimiento
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Verificar si el navegador prefiere reducir el movimiento
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    
    const handleChange = () => {
      setReducedMotion(mediaQuery.matches);
    };
    
    // Configuración inicial
    handleChange();
    
    // Escuchar cambios en la preferencia
    mediaQuery.addEventListener("change", handleChange);
    
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  // Alternador de animaciones
  const toggleAnimations = () => {
    setAnimationsEnabled(prev => !prev);
  };

  // Determinar si las animaciones deben estar habilitadas según las preferencias
  const shouldEnableAnimations = animationsEnabled && !reducedMotion;

  // Aplicar clase CSS global según la configuración
  useEffect(() => {
    if (!shouldEnableAnimations) {
      document.documentElement.classList.add("reduce-animations");
    } else {
      document.documentElement.classList.remove("reduce-animations");
    }
  }, [shouldEnableAnimations]);

  return (
    <AnimationContext.Provider
      value={{
        animationsEnabled: shouldEnableAnimations,
        toggleAnimations,
        reducedMotion
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export default AnimationController;
