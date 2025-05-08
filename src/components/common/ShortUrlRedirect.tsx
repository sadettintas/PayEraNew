import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ShortUrlRedirectProps {
  targetPath: string;
  targetName: string;
  delay?: number;
}

const ShortUrlRedirect = ({ targetPath, targetName, delay = 3000 }: ShortUrlRedirectProps) => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + (100 / (delay / 100));
      });
    }, 100);

    const timeout = setTimeout(() => {
      navigate(targetPath);
    }, delay);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate, targetPath, delay]);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-navy mb-4">Kısa URL Sayfası</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Bu sayfa kısa URL yönlendirmesi için kullanılmaktadır.
        </p>
      </div>

      <section className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto mb-8">
        <h2 className="text-2xl font-semibold text-navy mb-4">Yönlendirme Bilgisi</h2>
        <p className="mb-4">
          Kısa URL sistemimiz ile PayEra ürünlerimize ve içeriklerimize kolay erişim sağlayabilirsiniz.
        </p>
        <p className="mb-4">
          <strong>{Math.floor(delay/1000)} saniye</strong> içinde otomatik olarak "{targetName}" sayfasına yönlendirileceksiniz.
        </p>
        <div className="mt-6 p-4 bg-light-gray rounded-lg">
          <p className="text-navy font-medium">Otomatik yönlendirme gerçekleşecek...</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div 
              className="bg-turquoise h-2.5 rounded-full transition-all duration-100 ease-linear" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <button 
          onClick={() => navigate(targetPath)} 
          className="mt-6 bg-navy hover:bg-blue-900 text-white py-2 px-6 rounded-md transition-colors font-medium"
        >
          Hemen Yönlendir
        </button>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-navy mb-4">Diğer Kısa URL'lerimiz</h2>
        <ul className="space-y-2">
          <li className="p-2 hover:bg-light-gray rounded">
            <span className="font-medium text-turquoise">/a</span> - Hakkımızda sayfasına yönlendirir
          </li>
          <li className="p-2 hover:bg-light-gray rounded">
            <span className="font-medium text-turquoise">/p</span> - Ürünler sayfasına yönlendirir
          </li>
          <li className="p-2 hover:bg-light-gray rounded">
            <span className="font-medium text-turquoise">/i</span> - İletişim sayfasına yönlendirir
          </li>
          <li className="p-2 hover:bg-light-gray rounded">
            <span className="font-medium text-turquoise">/d</span> - Bayilik sayfasına yönlendirir
          </li>
        </ul>
      </section>
    </main>
  );
};

export default ShortUrlRedirect;
