
import { createRoot } from 'react-dom/client';
import { StrictMode, Suspense } from 'react';
import App from './App.tsx';
import './index.css';

/**
 * ErrorBoundary Component
 * 
 * Catches JavaScript errors in child components and displays a fallback UI
 * instead of crashing the entire application.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
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
    <div className="animate-pulse-slow text-haby-primary">
      Cargando HABY...
    </div>
  </div>
);

// Root element where the app will be mounted
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

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
