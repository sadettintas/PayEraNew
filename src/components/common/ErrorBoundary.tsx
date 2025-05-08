import React, { Component } from 'react';
import type { ReactNode, ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      error,
      errorInfo: null
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can log the error to an error reporting service
    console.error("React Error Boundary caught an error:", error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="p-8 bg-red-50 text-red-800 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Bir şeyler yanlış gitti</h2>
          <details className="whitespace-pre-wrap">
            <summary className="cursor-pointer mb-2 font-medium">Hata Detayları</summary>
            <p className="text-sm bg-red-100 p-4 rounded-md">{this.state.error && this.state.error.toString()}</p>
            {this.state.errorInfo && (
              <pre className="mt-2 text-xs bg-red-100 p-4 rounded-md overflow-auto">
                {this.state.errorInfo.componentStack}
              </pre>
            )}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
