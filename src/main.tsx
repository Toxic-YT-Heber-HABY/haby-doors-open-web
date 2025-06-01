
/**
 * Punto de entrada principal de la aplicación
 * 
 * Este archivo configura el renderizado inicial de la aplicación React,
 * incluyendo:
 * - Manejo de errores con ErrorBoundary
 * - Suspense para carga lazy
 * - Configuraciones de accesibilidad
 * - Compatibilidad cross-browser
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode, Suspense } from 'react';
import App from './App.tsx';
import './index.css';

// TypeScript interfaces for ErrorBoundary
interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

/**
 * ErrorBoundary Component
 * 
 * Catches JavaScript errors in child components and displays a fallback UI
 * instead of crashing the entire application.
 */
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error information for debugging
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI when an error occurs
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-lg w-full">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Algo salió mal</h2>
            <p className="text-gray-700 mb-4">
              Ha ocurrido un error inesperado. Por favor, recarga la página o intenta nuevamente más tarde.
            </p>
            <button 
              onClick={() => window.location.reload()} 
              className="btn-primary"
            >
              Recargar página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Loading component for Suspense fallback
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-pulse-slow text-haby-primary flex flex-col items-center">
      <div className="w-16 h-16 mb-4">
        <img 
          src="/lovable-uploads/f3e5eff1-a976-44c3-97a2-1e1e73c75a36.png" 
          alt="HABY Logo"
          className="w-full h-full" 
        />
      </div>
      <p className="text-lg font-medium">Cargando HABY...</p>
    </div>
  </div>
);

// Root element where the app will be mounted
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

// Establecer atributos de accesibilidad en el documento
document.documentElement.lang = 'es';

// Create root and render app with error handling
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </ErrorBoundary>
  </StrictMode>
);

// Detectar navegadores obsoletos y mostrar advertencia si es necesario
const isIE = /*@cc_on!@*/false || !!(document as any).documentMode;
const isEdgeLegacy = !isIE && !!(window as any).StyleMedia;

if (isIE || isEdgeLegacy) {
  console.warn('Estás usando un navegador obsoleto. Algunas funcionalidades pueden no estar disponibles.');
  
  const showBrowserWarning = () => {
    const warningDiv = document.createElement('div');
    warningDiv.style.position = 'fixed';
    warningDiv.style.top = '0';
    warningDiv.style.left = '0';
    warningDiv.style.right = '0';
    warningDiv.style.backgroundColor = '#fff3cd';
    warningDiv.style.color = '#664d03';
    warningDiv.style.padding = '12px';
    warningDiv.style.textAlign = 'center';
    warningDiv.style.zIndex = '9999';
    warningDiv.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    
    warningDiv.innerHTML = `
      <p style="margin: 0; font-family: sans-serif;">
        Estás usando un navegador obsoleto. Para una mejor experiencia, 
        te recomendamos actualizar tu navegador.
        <button id="dismiss-warning" style="background: none; border: none; text-decoration: underline; cursor: pointer; color: #0d6efd; margin-left: 10px;">
          Cerrar
        </button>
      </p>
    `;
    
    document.body.prepend(warningDiv);
    
    document.getElementById('dismiss-warning')?.addEventListener('click', () => {
      warningDiv.style.display = 'none';
    });
  };
  
  // Mostrar advertencia después de que el sitio haya cargado
  window.addEventListener('load', showBrowserWarning);
}
