import React, { createContext, useState, useContext, useEffect } from 'react';
import { preloadAllSiteImages } from '../../utils/imageLoader';

type LoadingContextType = {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  loadingProgress: number;
  setLoadingProgress: (progress: number) => void;
  initialized: boolean;
};

const LoadingContext = createContext<LoadingContextType>({
  isLoading: true,
  setIsLoading: () => {},
  loadingProgress: 0,
  setLoadingProgress: () => {},
  initialized: false
});

export const useLoading = () => useContext(LoadingContext);

interface LoadingProviderProps {
  children: React.ReactNode;
}

const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // Simüle edilmiş yükleme ilerleme durumu
    let progressInterval: ReturnType<typeof setInterval> | null = null;
    
    const startLoading = () => {
      setIsLoading(true);
      setLoadingProgress(0);
      
      // Simüle edilmiş yükleme animasyonu
      progressInterval = setInterval(() => {
        setLoadingProgress((prev) => {
          // %90'a kadar simüle et, kalan %10 gerçek yükleme ile tamamlanacak
          const newProgress = prev + (Math.random() * 5);
          return newProgress < 90 ? newProgress : 90;
        });
      }, 200);
    };

    const completeLoading = () => {
      if (progressInterval) {
        clearInterval(progressInterval);
      }
      
      // Son aşamada %100'e tamamla
      setLoadingProgress(100);
      
      // Animasyonun tamamlanması için kısa bir gecikme
      setTimeout(() => {
        setIsLoading(false);
        setInitialized(true);
      }, 500);
    };

    // Başlangıç yüklemesi
    startLoading();

    // Tüm görselleri önceden yükle

    // Tüm görselleri getImageUrl ile preload et
    const imagesToLoad = [
      '/images/product-x10.png',
      '/images/product-s20.png',
      '/images/product-pro30.png',
      '/images/payera-a90.jpg',
      '/images/payera-507.jpg',
      '/images/hero-image.jpg',
      '/images/hero-image-1.jpg',
      '/images/hero-image-2.jpg',
      '/images/hero-image-3.jpg',
      '/images/logo.svg',
      '/images/company-image.jpg',
      '/images/dealership.jpg',
      '/images/support.jpg',
      '/images/business-support.jpg',
      '/images/chairman.jpg',
      '/images/vice-chairman.jpg',
      '/images/team.jpg',
      '/images/testimonials.jpg',
      '/images/contact.jpg',
      '/images/testimonial-default.jpg',
      '/images/team-member.jpg'
    ];

    let loadedCount = 0;
    const totalImages = imagesToLoad.length;
    let completed = false;

    const checkComplete = () => {
      if (!completed && loadedCount >= totalImages) {
        completed = true;
        completeLoading();
      }
    };

    imagesToLoad.forEach(imageSrc => {
      const img = new window.Image();
      img.onload = () => {
        loadedCount++;
        checkComplete();
      };
      img.onerror = () => {
        loadedCount++;
        checkComplete();
      };
      img.src = require('../../utils/imageLoader').getImageUrl(imageSrc) + '?v=' + new Date().getTime();
    });

    // 7 saniye sonra yükleme tamamlanmadıysa yine de tamamla (sonsuz loading engeli)
    const timeout = setTimeout(() => {
      if (!completed) {
        completed = true;
        completeLoading();
      }
    }, 7000);

    return () => {
      clearTimeout(timeout);
      if (progressInterval) clearInterval(progressInterval);
    };
  }, []);

  return (
    <LoadingContext.Provider value={{ 
      isLoading, 
      setIsLoading, 
      loadingProgress, 
      setLoadingProgress,
      initialized
    }}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
