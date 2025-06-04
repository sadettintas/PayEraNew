import React from 'react';
import { useLoading } from './LoadingProvider';

const LoadingOverlay: React.FC = () => {
  const { isLoading, loadingProgress } = useLoading();

  if (!isLoading) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="w-full max-w-sm px-4">
        <div className="flex flex-col items-center">
          <img 
            src="/PayEraNew/images/logo.svg" 
            alt="PayEra Logo" 
            className="h-16 mb-8 animate-pulse"
          />
          
          <div className="w-full h-2 bg-gray-200 rounded-full mb-4">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-300"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          
          <p className="text-gray-600 text-sm">
            Yükleniyor... {Math.round(loadingProgress)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay;
