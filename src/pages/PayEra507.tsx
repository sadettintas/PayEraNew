import { Link } from 'react-router-dom';

const PayEra507 = () => {
  const specifications = [
    { label: "İşlemci", value: "Intel Celeron J1900 Quad Core 2.0 GHz" },
    { label: "İşletim Sistemi", value: "Windows 10 IoT Enterprise" },
    { label: "Bellek", value: "4GB RAM, 64GB SSD" },
    { label: "Ekran", value: "15.6 inç dokunmatik ekran (1920x1080)" },
    { label: "Yazıcı", value: "Yüksek hızlı termal yazıcı, 80mm genişlik" },
    { label: "Bağlantı", value: "Ethernet, WiFi, Bluetooth 5.0" },
    { label: "Portlar", value: "6x USB, 1x LAN, 1x COM, 1x Çekmece, 2x HDMI" },
    { label: "Boyutlar", value: "380mm x 350mm x 170mm" },
    { label: "Ağırlık", value: "4.2kg" },
    { label: "Kart Okuyucu", value: "Temassız, Çipli, Manyetik" },
    { label: "Güç", value: "AC 100-240V, 50-60Hz" },
    { label: "Sertifikalar", value: "CE, FCC, RoHS, Mali Onay" }
  ];

  const features = [
    {
      title: "Geniş Ekran",
      description: "15.6 inç yüksek çözünürlüklü dokunmatik ekran ile tüm işlemlerinizi kolayca gerçekleştirin.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Yüksek Performans",
      description: "Intel işlemci ve 4GB RAM ile yoğun işlemlerde bile yüksek performans.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Çoklu Bağlantı",
      description: "6 USB portu ve diğer bağlantı seçenekleri ile tüm çevre birimlerinizi kolayca bağlayın.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      )
    },
    {
      title: "Windows İşletim Sistemi",
      description: "Windows 10 IoT Enterprise işletim sistemi ile tanıdık bir arayüz ve geniş uygulama desteği.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 bg-primary-light opacity-20 w-96 h-96 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 bg-accent opacity-10 w-96 h-96 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">PayEra 507</h1>
              <p className="text-xl mb-8 text-white/90">
                Masaüstü kullanım için tasarlanmış, yüksek performanslı, geniş ekranlı yazarkasa POS terminali
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/iletisim" className="btn btn-accent inline-block">
                  Teklif Al
                </Link>
                <Link to="/urunler" className="btn btn-outline inline-block">
                  Tüm Ürünler
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-xl shadow-xl p-4 hover:shadow-2xl transition-all duration-300">
                <img 
                  src="images/payera-507.jpg" 
                  alt="PayEra 507 Masaüstü Yazarkasa POS" 
                  className="w-full h-auto object-contain rounded-md shadow-sm"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "images/product-features.jpg";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 pr-0 md:pr-10">
              <h2 className="text-3xl font-bold text-text-heading mb-6">Genel Bakış</h2>
              <p className="text-text-body mb-6 leading-relaxed">
                PayEra 507, orta ve büyük ölçekli işletmeler için tasarlanmış masaüstü yazarkasa POS terminalidir. Windows işletim sistemi üzerine kurulu olan 507, geniş ekranı ve güçlü donanımı ile yoğun iş temponuza ayak uyduracak performansı sunar.
              </p>
              <p className="text-text-body mb-6 leading-relaxed">
                Geniş bağlantı seçenekleri ve çevre birimleri ile entegre çalışarak işletmenizin tüm ihtiyaçlarını karşılar. Yüksek hızlı termal yazıcısı, çekmece bağlantısı ve çoklu ekran desteği ile tam teşekküllü bir satış noktası deneyimi sağlar.
              </p>
              <div className="mt-8">
                <Link to="/iletisim" className="btn btn-primary inline-block">
                  Detaylı Bilgi İçin İletişime Geçin
                </Link>
              </div>
            </div>
            <div className="md:w-1/3 mt-10 md:mt-0">
              <div className="bg-primary rounded-xl p-8 text-white hover-card">
                <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">Temel Özellikler</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Windows 10 IoT Enterprise işletim sistemi</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>15.6 inç Full HD dokunmatik ekran</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Intel Celeron Quad Core işlemci</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Çoklu bağlantı portları (6x USB, 2x HDMI)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Entegre 80mm termal yazıcı</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Çekmece bağlantı desteği</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-text-heading mb-12 text-center">Öne Çıkan Özellikler</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="hover-card text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-primary/5 inline-block p-4 rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-text-heading mb-3">{feature.title}</h3>
                <p className="text-text-body">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Specifications */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-text-heading mb-12 text-center">Teknik Özellikler</h2>
          
          <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {specifications.map((spec, index) => (
                <div key={index} className="p-6 border-b border-gray-200 md:border-r last:border-r-0 hover:bg-bg-alt transition-colors duration-300">
                  <h3 className="text-text-heading font-bold mb-2">{spec.label}</h3>
                  <p className="text-text-body">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-text-heading mb-12 text-center">Kullanım Alanları</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="hover-card">
              <div className="flex justify-center mb-6">
                <div className="bg-primary inline-block p-4 rounded-full">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-text-heading mb-3 text-center">Perakende Mağazalar</h3>
              <div className="my-4 rounded-lg overflow-hidden">
                <img 
                  src="images/company-image.jpg" 
                  alt="Perakende Mağaza Kullanımı" 
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-text-body text-center">Yüksek işlem hacmine sahip, geniş ürün yelpazesi bulunan perakende mağazalar için ideal çözüm.</p>
            </div>
            
            <div className="hover-card">
              <div className="flex justify-center mb-6">
                <div className="bg-primary inline-block p-4 rounded-full">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-text-heading mb-3 text-center">Restoranlar</h3>
              <div className="my-4 rounded-lg overflow-hidden">
                <img 
                  src="images/business-support.jpg" 
                  alt="Restoran Kullanımı" 
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-text-body text-center">Menü yönetimi, siparişlerin alınması ve ödemelerin hızlı bir şekilde işlenmesi için mükemmel çözüm.</p>
            </div>
            
            <div className="hover-card">
              <div className="flex justify-center mb-6">
                <div className="bg-primary inline-block p-4 rounded-full">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-text-heading mb-3 text-center">Süpermarketler</h3>
              <div className="my-4 rounded-lg overflow-hidden">
                <img 
                  src="images/support.jpg" 
                  alt="Süpermarket Kullanımı" 
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-text-body text-center">Hızlı ve verimli işlem kapasitesi ile müşteri bekleme sürelerini azaltan, yoğun satış noktaları için güçlü bir terminal.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 bg-primary-light opacity-20 w-96 h-96 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 bg-accent opacity-10 w-96 h-96 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-screen-xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">PayEra 507 ile İşletmenizi Modernleştirin</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10 text-white/90">
            Güçlü donanım, geniş ekran ve zengin bağlantı seçenekleri ile işletmenizin tüm ihtiyaçlarını karşılayan yazarkasa POS çözümü.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/iletisim" className="btn btn-accent inline-block">
              Teklif Al
            </Link>
            <Link to="/bayilik" className="btn btn-outline inline-block">
              Bayilik Fırsatları
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PayEra507;
