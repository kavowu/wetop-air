import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full text-center p-8 bg-white rounded-lg shadow-lg border border-gray-200">
            <h1 className="text-2xl font-bold text-red-600 mb-4">系統發生錯誤</h1>
            <p className="text-gray-600 mb-6">
              很抱歉，網頁目前載入時發生非預期的錯誤。請嘗試重新整理頁面。
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-md font-medium transition-colors cursor-pointer"
            >
              重新整理
            </button>
            {this.state.error && (
              <pre className="mt-6 p-4 bg-gray-100 rounded text-left text-xs text-red-500 overflow-auto max-h-40">
                {this.state.error.toString()}
              </pre>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
