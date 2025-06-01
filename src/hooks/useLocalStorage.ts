
/**
 * useLocalStorage Hook
 * 
 * Hook personalizado para manejar el almacenamiento y recuperación de datos
 * en localStorage con soporte para distintos tipos de datos y manejo de errores.
 * 
 * @param {string} key - Clave para almacenar en localStorage
 * @param {T} initialValue - Valor inicial si no existe en localStorage
 * @returns {[T, (value: T | ((val: T) => T)) => void]} Par de valor y función setter
 */
import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  // Estado para almacenar nuestro valor
  // Pasa la función de inicialización al useState para que solo se ejecute una vez
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    
    try {
      // Obtener del localStorage usando la clave
      const item = window.localStorage.getItem(key);
      // Analizar el JSON almacenado o devolver initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Si hay un error, devolver el valor inicial
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });
  
  // Función para actualizar el valor en localStorage y en el estado
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Permitir que value sea una función para imitar la API de useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
        
      // Guardar en el estado
      setStoredValue(valueToStore);
      
      // Guardar en localStorage
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // Registrar errores en la consola
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };
  
  // Efecto para sincronizar el estado si la clave de localStorage cambia en otra pestaña
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key && event.newValue) {
        try {
          setStoredValue(JSON.parse(event.newValue));
        } catch (error) {
          console.error(`Error parsing localStorage value for key "${key}":`, error);
        }
      }
    };
    
    // Escuchar cambios de localStorage
    if (typeof window !== "undefined") {
      window.addEventListener("storage", handleStorageChange);
      
      return () => {
        window.removeEventListener("storage", handleStorageChange);
      };
    }
    
    return undefined;
  }, [key]);
  
  return [storedValue, setValue];
}

export default useLocalStorage;
