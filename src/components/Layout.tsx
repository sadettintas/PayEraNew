import { useEffect } from 'react';
import type { ReactNode } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  console.log('Layout rendering with children:', children);
  
  // Sayfa yükleme hatasını engellemeye yardımcı olacak timeout
  useEffect(() => {
    const layoutLoadTimeout = setTimeout(() => {
      console.log('Layout render complete');
    }, 1000);
    
    return () => clearTimeout(layoutLoadTimeout);
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children || (
          <div className="py-20 text-center">
            <h2 className="text-2xl font-bold text-text-heading">İçerik Yükleniyor...</h2>
            <p className="text-text-body mt-4">Lütfen bekleyiniz...</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
