import { Link } from 'react-router-dom';

const PayEraA90 = () => {
  const specifications = [
    { label: "İşlemci", value: "Quad-core 1.8 GHz" },
    { label: "İşletim Sistemi", value: "Android 10" },
    { label: "Bellek", value: "2GB RAM, 16GB ROM" },
    { label: "Ekran", value: "5.5 inç dokunmatik ekran (1280x720)" },
    { label: "Yazıcı", value: "Yüksek hızlı termal yazıcı, 58mm genişlik" },
    { label: "Bağlantı", value: "4G, WiFi, Bluetooth 4.2, GPS" },
    { label: "Pil", value: "7.4V, 2600mAh, 12 saat çalışma süresi" },
    { label: "Boyutlar", value: "210mm x 80mm x 70mm" },
    { label: "Ağırlık", value: "520g (pil dahil)" },
    { label: "Kart Okuyucu", value: "Temassız, Çipli, Manyetik" },
    { label: "Kamera", value: "Arka: 5MP, Ön: 2MP" },
    { label: "Sertifikalar", value: "CE, GMP, Mali Onay" }
  ];

  const features = [
    {
      title: "Kompakt Tasarım",
      description: "Cebinize sığacak kadar küçük, kullanımı rahat tasarım. İster masada, ister ayakta kullanım için ideal.",
      icon: (
        <svg className="w-12 h-12 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Uzun Pil Ömrü",
      description: "Tek şarjla 12 saate kadar çalışma süresi. Yoğun iş günlerinde bile pil endişesi yaşamayın.",
      icon: (
        <svg className="w-12 h-12 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Hızlı İşlem",
      description: "Güçlü işlemcisi sayesinde işlemlerinizi saniyeler içinde tamamlayın. Müşterilerinizi bekletmeyin.",
      icon: (
        <svg className="w-12 h-12 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Çoklu Bağlantı",
      description: "4G, WiFi ve Bluetooth bağlantı seçenekleri ile her ortamda kesintisiz çalışma.",
      icon: (
        <svg className="w-12 h-12 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      )
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">PayEra A90</h1>
              <p className="text-xl mb-8 font-light">
                Android işletim sistemli, dokunmatik ekranlı, kompakt tasarımlı yazarkasa POS cihazı.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/iletisim" className="bg-turquoise hover:bg-turquoise-dark text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-block text-center">
                  Teklif Al
                </Link>
                <Link to="/bayilik" className="bg-transparent hover:bg-white hover:bg-opacity-10 text-white font-bold py-3 px-6 border-2 border-turquoise rounded-lg transition duration-300 inline-block text-center">
                  Bayi Ol
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-lg shadow-xl p-4">
                <img 
                  src="/images/products/payera-a90.png" 
                  alt="PayEra A90" 
                  className="w-full h-auto object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/600x400/001F3F/FFFFFF?text=PayEra+A90";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 pr-0 md:pr-10">
              <h2 className="text-3xl font-bold text-navy mb-6">Genel Bakış</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                PayEra A90, küçük ve orta ölçekli işletmeler için tasarlanmış kompakt ve taşınabilir yazarkasa POS terminalidir. Android işletim sistemi üzerine kurulu olan A90, kullanıcı dostu arayüzü ve güçlü donanımı ile günlük satış işlemlerinizi hızlı ve güvenli bir şekilde gerçekleştirmenizi sağlar.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Hafif ve ergonomik tasarımı ile elde kullanım için idealdir. Uzun pil ömrü sayesinde gün boyu kesintisiz çalışabilir, güçlü bağlantı seçenekleri ile her ortamda işlemlerinizi tamamlayabilirsiniz.
              </p>
              <div className="mt-8">
                <Link to="/iletisim" className="bg-navy hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-block text-center">
                  Detaylı Bilgi İçin İletişime Geçin
                </Link>
              </div>
            </div>
            <div className="md:w-1/3 mt-10 md:mt-0">
              <div className="bg-navy p-8 rounded-lg text-white">
                <h3 className="text-xl font-bold mb-4 border-b border-turquoise pb-2">Temel Özellikler</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-turquoise mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Android 10 işletim sistemi</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-turquoise mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>5.5 inç dokunmatik ekran</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-turquoise mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>12 saate kadar pil ömrü</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-turquoise mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>4G, WiFi ve Bluetooth bağlantı</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-turquoise mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Tüm ödeme yöntemlerini destekler</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-turquoise mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Entegre termal yazıcı</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">Öne Çıkan Özellikler</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-105">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Specifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">Teknik Özellikler</h2>
          
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {specifications.map((spec, index) => (
                <div key={index} className="p-4 border-b border-gray-200 md:border-r last:border-r-0">
                  <h3 className="text-navy font-bold mb-2">{spec.label}</h3>
                  <p className="text-gray-600">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-navy text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">PayEra A90 ile İşinizi Dijitalleştirin</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10 font-light">
            Modern, hızlı ve güvenilir yazarkasa POS çözümü ile işletmenizi bir adım öteye taşıyın.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/iletisim" className="bg-turquoise hover:bg-turquoise-dark text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-block">
              Teklif Al
            </Link>
            <Link to="/bayilik" className="bg-transparent hover:bg-white hover:bg-opacity-10 text-white font-bold py-3 px-6 border-2 border-turquoise rounded-lg transition duration-300 inline-block">
              Bayilik Fırsatları
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PayEraA90;
