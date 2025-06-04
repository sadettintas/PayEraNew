import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const PayEraPro30 = () => {
  useEffect(() => {
    console.log("PayEra Pro 30 sayfası yüklendi");
    document.title = "PayEra Pro 30 - Profesyonel İşletmeler İçin POS Çözümü";
    
    window.scrollTo(0, 0);
  }, []);

  const specifications = [
    { label: "İşlemci", value: "Intel Core i3-1010U Dual Core 3.6 GHz" },
    { label: "İşletim Sistemi", value: "Windows 11 Pro" },
    { label: "Bellek", value: "8GB RAM, 256GB SSD" },
    { label: "Ekran", value: "15.6 inç Full HD dokunmatik ekran (1920x1080)" },
    { label: "İkinci Ekran", value: "7 inç müşteri ekranı (1024x600)" },
    { label: "Yazıcı", value: "80mm yüksek hızlı termal yazıcı" },
    { label: "Bağlantı", value: "WiFi 6, Bluetooth 5.2, Gigabit Ethernet" },
    { label: "Portlar", value: "4x USB 3.0, 2x USB-C, 1x RJ45, 2x Çekmece, 1x Display Port" },
    { label: "Boyutlar", value: "380mm x 350mm x 180mm" },
    { label: "Ağırlık", value: "4.5kg" },
    { label: "Kart Okuyucu", value: "Temassız, Çipli, Manyetik, QR, Biometrik" },
    { label: "Sertifikalar", value: "CE, FCC, RoHS, Mali Onay, ISO 27001" }
  ];

  const features = [
    {
      title: "Çift Ekran Sistemi",
      description: "Ana ekran ve müşteri ekranı ile işlem şeffaflığı ve profesyonel görünüm.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Yüksek Performans",
      description: "Intel Core i3 işlemci ve 8GB RAM ile çoklu görevlerde kesintisiz performans.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Genişletilebilir Sistem",
      description: "Çoklu port desteği ile barkod okuyucu, terazi ve diğer donanımlarla genişletilebilir.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
    {
      title: "Tam ERP Entegrasyonu",
      description: "Kapsamlı işletme yönetim sistemleri ile tam entegrasyon imkanı.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    }
  ];

  const useCases = [
    {
      title: "Büyük Restoranlar",
      description: "Çoklu kullanıcı desteği, detaylı rapor ve analiz araçları."
    },
    {
      title: "Süpermarketler",
      description: "Yüksek işlem hacmi, hızlı barkod okuma, çoklu çekmece kontrolü."
    },
    {
      title: "Departmanlı Mağazalar",
      description: "Merkezi yönetim, çoklu POS entegrasyonu, kapsamlı müşteri yönetimi."
    },
    {
      title: "Otel ve Konaklama",
      description: "Rezervasyon sistemleri entegrasyonu, oda servisi ve restoran entegrasyonu."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl font-bold mb-4">PayEra Pro 30</h1>
              <p className="text-xl mb-8">Profesyonel işletmeler için tam donanımlı yazarkasa POS çözümü</p>
              <div className="flex flex-wrap gap-4">
                <a href="#features" className="btn btn-accent">Özellikler</a>
                <a href="#specs" className="btn btn-outline-light">Teknik Özellikler</a>
                <Link to="/iletisim" className="btn btn-outline-light">Fiyat Teklifi Alın</Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <img 
                  src="/images/product-pro30.png" 
                  alt="PayEra Pro 30" 
                  className="max-w-full h-auto max-h-80 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://via.placeholder.com/400x560/0097A7/FFFFFF?text=PayEra+Pro+30";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-16 bg-bg-light">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-text-heading">Temel Özellikler</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-text-heading">{feature.title}</h3>
                <p className="text-text-body">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Image Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-text-heading">Ürün Görselleri</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-bg-light p-4 rounded-lg shadow-md">
              <img 
                src="/images/product-pro30.png" 
                alt="PayEra Pro 30 Ön Görünüm" 
                className="w-full h-auto rounded"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://via.placeholder.com/600x400/0097A7/FFFFFF?text=PayEra+Pro+30+Ön";
                }}
              />
            </div>
            <div className="bg-bg-light p-4 rounded-lg shadow-md">
              <img 
                src="/images/product-pro30.png" 
                alt="PayEra Pro 30 Yan Görünüm" 
                className="w-full h-auto rounded"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://via.placeholder.com/600x400/0097A7/FFFFFF?text=PayEra+Pro+30+Yan";
                }}
              />
            </div>
            <div className="bg-bg-light p-4 rounded-lg shadow-md">
              <img 
                src="/images/product-pro30.png" 
                alt="PayEra Pro 30 Müşteri Ekranı" 
                className="w-full h-auto rounded"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://via.placeholder.com/600x400/0097A7/FFFFFF?text=PayEra+Pro+30+Ekran";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section id="specs" className="py-16 bg-bg-light">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-text-heading">Teknik Özellikler</h2>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {specifications.map((spec, index) => (
                <div 
                  key={index} 
                  className={`p-4 ${index % 2 === 0 ? 'bg-white' : 'bg-bg-light'} border-b border-gray-200`}
                >
                  <h3 className="text-sm font-semibold text-text-heading mb-1">{spec.label}</h3>
                  <p className="text-text-body">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Solutions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-6 text-text-heading">Kapsamlı İş Çözümleri</h2>
              <p className="text-text-body mb-6 leading-relaxed">
                PayEra Pro 30, sadece bir POS cihazı değil, işletmenizin tüm süreçlerini yönetebileceğiniz kapsamlı bir iş çözümüdür. Gelişmiş raporlama özellikleri, merkezi yönetim paneli ve çoklu şube desteği ile işletmenizi tek noktadan kontrol edin.
              </p>
              <ul className="space-y-3 text-text-body">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Gelişmiş rapor ve analiz araçları
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Çoklu şube ve mağaza yönetimi
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Stok, sipariş ve tedarik zinciri yönetimi
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Personel performans takibi ve vardiya yönetimi
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Kapsamlı CRM ve müşteri sadakat programları
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <img 
                src="/images/product-pro30.png" 
                alt="PayEra Pro 30 İş Çözümleri" 
                className="rounded-lg shadow-lg max-w-full h-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://via.placeholder.com/600x400/0097A7/FFFFFF?text=İş+Çözümleri";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-text-heading">İdeal Kullanım Alanları</h2>
          <p className="text-center text-text-body mb-12 max-w-2xl mx-auto">
            PayEra Pro 30, profesyonel işletmelerin karmaşık ihtiyaçlarını karşılamak üzere tasarlanmıştır.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-text-heading">{useCase.title}</h3>
                <p className="text-text-body">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-16 bg-bg-alt">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-text-heading">Kurumsal Özellikler</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-text-heading">Gelişmiş Güvenlik</h3>
              <p className="text-text-body">
                Biometrik kimlik doğrulama, şifreli veri depolama ve uzaktan erişim kontrolü ile verileriniz güvende.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-text-heading">Sertifikasyonlar</h3>
              <p className="text-text-body">
                ISO 27001, PCI DSS ve diğer uluslararası standartlara uygun, yasal gereklilikleri tam karşılayan sistem.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-text-heading">Ölçeklenebilirlik</h3>
              <p className="text-text-body">
                İşletmeniz büyüdükçe genişleyebilen, ilave cihaz ve özelliklerle geliştirilebilen esnek yapı.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">PayEra Pro 30 ile İşletmenizi Dönüştürün</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Profesyonel işletmeniz için geliştirilen PayEra Pro 30 ile verimliliği artırın, maliyetleri düşürün ve müşteri deneyimini iyileştirin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/iletisim" className="btn btn-accent">Fiyat Teklifi Alın</Link>
            <Link to="/bayilik" className="btn btn-outline-light">Bayilik Fırsatları</Link>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-text-heading">Diğer Ürünlerimiz</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-bg-alt p-4 flex items-center justify-center">
                  <img 
                    src="/images/product-x10.png" 
                    alt="PayEra X10" 
                    className="max-h-40 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "https://via.placeholder.com/200x300/0097A7/FFFFFF?text=PayEra+X10";
                    }}
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-2 text-text-heading">PayEra X10</h3>
                  <p className="text-text-body mb-4">Küçük işletmeler için kompakt ve ekonomik çözüm</p>
                  <Link to="/urunler/payera-x10" className="btn btn-primary">İncele</Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-bg-alt p-4 flex items-center justify-center">
                  <img 
                    src="/images/product-s20.png" 
                    alt="PayEra S20" 
                    className="max-h-40 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "https://via.placeholder.com/200x300/0097A7/FFFFFF?text=PayEra+S20";
                    }}
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-2 text-text-heading">PayEra S20</h3>
                  <p className="text-text-body mb-4">Orta ölçekli işletmeler için ideal çözüm</p>
                  <Link to="/urunler/payera-s20" className="btn btn-primary">İncele</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PayEraPro30;
