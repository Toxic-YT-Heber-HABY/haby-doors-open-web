import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  errorId?: string;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export class SecureErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { 
      hasError: true,
      errorId: Math.random().toString(36).substr(2, 9)
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
  }

  private handleReload = () => {
    try {
      window.location.reload();
    } catch (e) {
      window.location.href = '/';
    }
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
          <div className="bg-card border border-border rounded-lg p-6 max-w-lg w-full">
            <h2 className="text-2xl font-bold text-destructive mb-4">
              Algo salió mal
            </h2>
            <p className="text-muted-foreground mb-4">
              Ha ocurrido un error inesperado. Por favor, recarga la página o intenta nuevamente más tarde.
            </p>
            {this.state.errorId && (
              <p className="text-xs text-muted-foreground mb-4">
                ID del error: {this.state.errorId}
              </p>
            )}
            <button 
              onClick={this.handleReload}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
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
