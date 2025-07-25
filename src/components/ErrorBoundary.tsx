import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });
    
    // Log del error para debugging
    console.error('Error capturado por ErrorBoundary:', error, errorInfo);
  }

  handleRefresh = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full text-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-6">
                <AlertTriangle className="h-16 w-16 text-amber-500 mx-auto mb-4" />
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  ¡Ops! Algo salió mal
                </h1>
                <p className="text-gray-600">
                  Ha ocurrido un error inesperado. No te preocupes, puedes intentar las siguientes opciones:
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <button
                  onClick={this.handleRefresh}
                  className="w-full flex items-center justify-center gap-2 bg-haby-primary text-white px-4 py-3 rounded-lg hover:bg-haby-secondary transition-colors"
                >
                  <RefreshCw className="h-4 w-4" />
                  Recargar página
                </button>
                
                <Link
                  to="/"
                  className="w-full flex items-center justify-center gap-2 bg-gray-200 text-gray-800 px-4 py-3 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  <Home className="h-4 w-4" />
                  Ir al inicio
                </Link>
              </div>

              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="text-left bg-gray-100 p-4 rounded-lg">
                  <summary className="cursor-pointer font-semibold text-gray-700 mb-2">
                    Detalles del error (Desarrollo)
                  </summary>
                  <pre className="text-xs text-red-600 whitespace-pre-wrap break-words">
                    {this.state.error.toString()}
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </details>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;