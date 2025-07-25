/**
 * Punto de entrada principal de la aplicación
 * 
 * Este archivo configura el renderizado inicial de la aplicación React,
 * incluyendo:
 * - Manejo de errores con SecureErrorBoundary
 * - Suspense para carga lazy
 * - Configuraciones de accesibilidad
 * - Compatibilidad cross-browser
 * - Auditoría de seguridad
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { SecureErrorBoundary } from '@/components/SecureErrorBoundary';
import { SecurityAudit } from '@/components/SecurityAudit';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import { designTokens } from '@/lib/design-tokens';
import App from './App.tsx';
import './index.css';

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

// Secure browser warning - creates DOM elements safely
const createSecureBrowserWarning = () => {
  const warningDiv = document.createElement('div');
  
  // Apply styles securely
  Object.assign(warningDiv.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    backgroundColor: '#fff3cd',
    color: '#664d03',
    padding: '12px',
    textAlign: 'center',
    zIndex: '9999',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  });

  const messageText = document.createTextNode(
    'Estás usando un navegador obsoleto. Para una mejor experiencia, te recomendamos actualizar tu navegador.'
  );
  
  const dismissButton = document.createElement('button');
  dismissButton.id = 'dismiss-warning';
  dismissButton.textContent = 'Cerrar';
  dismissButton.setAttribute('aria-label', 'Cerrar advertencia de navegador');
  
  Object.assign(dismissButton.style, {
    background: 'none',
    border: 'none',
    textDecoration: 'underline',
    cursor: 'pointer',
    color: '#0d6efd',
    marginLeft: '10px',
  });

  const paragraph = document.createElement('p');
  paragraph.style.cssText = 'margin: 0; font-family: sans-serif;';
  paragraph.appendChild(messageText);
  paragraph.appendChild(dismissButton);

  warningDiv.appendChild(paragraph);
  
  dismissButton.addEventListener('click', () => {
    warningDiv.remove();
  });

  return warningDiv;
};

// Root element where the app will be mounted
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

// Establecer atributos de accesibilidad en el documento
document.documentElement.lang = 'es';

// Create root and render app with secure error handling
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ErrorBoundary>
      <SecureErrorBoundary>
        <SecurityAudit />
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <App />
          </Suspense>
        </BrowserRouter>
      </SecureErrorBoundary>
    </ErrorBoundary>
  </StrictMode>
);

// Detectar navegadores obsoletos de manera segura
const detectObsoleteBrowser = () => {
  const isIE = /*@cc_on!@*/false || !!(document as any).documentMode;
  const isEdgeLegacy = !isIE && !!(window as any).StyleMedia;
  
  if (isIE || isEdgeLegacy) {
    // Solo mostrar warning en desarrollo
    if (process.env.NODE_ENV === 'development') {
      console.warn('Navegador obsoleto detectado');
    }
    
    const warningElement = createSecureBrowserWarning();
    document.body.prepend(warningElement);
  }
};

// Mostrar advertencia después de que el sitio haya cargado
window.addEventListener('load', detectObsoleteBrowser);

// Performance monitoring en desarrollo
if (process.env.NODE_ENV === 'development') {
  window.addEventListener('load', () => {
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      console.group('📊 Performance Metrics');
      console.log(`Dom Content Loaded: ${navigationEntry.domContentLoadedEventEnd - navigationEntry.startTime}ms`);
      console.log(`Load Complete: ${navigationEntry.loadEventEnd - navigationEntry.startTime}ms`);
      console.groupEnd();
    }
  });
}