import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import Image from '../components/common/Image';

const PayEraS20 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("PayEra S20 sayfası yüklendi");
    document.title = "PayEra S20 - Orta Ölçekli İşletmeler İçin POS Çözümü";
    
    window.scrollTo(0, 0);

    // Testimonial carousel interval
    const interval = setInterval(() => {
      setActiveIndex(current => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const specifications = [
    { label: "İşlemci", value: "Snapdragon 660 Octa-Core 2.2 GHz" },
    { label: "İşletim Sistemi", value: "Android 11.0" },
    { label: "Bellek", value: "3GB RAM, 32GB Depolama" },
    { label: "Ekran", value: "7 inç IPS dokunmatik ekran (1280x800)" },
    { label: "Yazıcı", value: "Entegre termal yazıcı, 80mm genişlik" },
    { label: "Bağlantı", value: "WiFi, Bluetooth 5.0, 4G LTE" },
    { label: "Portlar", value: "2x USB, 1x Type-C, 1x RJ45, 1x Çekmece" },
    { label: "Boyutlar", value: "240mm x 180mm x 110mm" },
    { label: "Ağırlık", value: "950g" },
    { label: "Kart Okuyucu", value: "Temassız, Çipli, Manyetik, QR" },
    { label: "Pil", value: "8000mAh, 12 saat çalışma süresi" },
    { label: "Sertifikalar", value: "CE, FCC, RoHS, Mali Onay" }
  ];

  const features = [
    {
      title: "Geniş Ekran",
      description: "7 inç geniş IPS ekran ile tüm işlemlerinizi kolay ve hızlı gerçekleştirin.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Güçlü Performans",
      description: "Snapdragon işlemci ve 3GB RAM ile aynı anda birden fazla işlem yapabilme kabiliyeti.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Hızlı Bağlantı",
      description: "4G LTE desteği ve WiFi 6 ile kesintisiz internet bağlantısı.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      )
    },
    {
      title: "Çok Yönlü Ödeme",
      description: "Temassız, çipli, manyetik kart ve QR kod desteği ile tüm ödeme yöntemlerini destekler.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    }
  ];

  const useCases = [
    {
      title: "Restoranlar",
      description: "Entegre yazılımlarla sipariş takibi, masa yönetimi ve ödeme işlemleri."
    },
    {
      title: "Perakende Mağazaları",
      description: "Stok takibi, barkod okuma ve hızlı ödeme işlemleri."
    },
    {
      title: "Marketler",
      description: "Hızlı işlem kabiliyeti, çekmece entegrasyonu ve çoklu ödeme seçenekleri."
    },
    {
      title: "Butik İşletmeler",
      description: "Müşteri takibi, sadakat programları ve gelişmiş raporlama."
    }
  ];

  const testimonials = [
    {
      text: "PayEra S20 ile tüm market zincirimizde stok takibi ve satış yönetimi çok daha kolay hale geldi. Geniş ekranı ve kullanıcı dostu arayüzü sayesinde personelimizin eğitim süreci kısaldı, operasyonel verimlilik %30 arttı.",
      author: "Canan Yılmaz",
      position: "Operasyon Direktörü",
      company: "MarketPlus",
      rating: 5,
      image: "/images/testimonial-default.jpg",
      logoSvg: (<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="120" height="40" rx="4" fill="#FF5722"/>
        <path d="M20.32 29l-3.14-4.64L15.16 29h-3.34l4.8-7.08-4.58-6.52h3.34l2.92 4.2l2.02-4.2h3.34l-4.58 6.52 4.8 7.08H20.32z" fill="white"/>
        <path d="M33.5519 29.24c-1.29 0-2.44-0.24-3.45-0.71c-1.01-0.47-1.8-1.13-2.37-1.97c-0.57-0.84-0.86-1.82-0.86-2.92c0-1.1 0.29-2.08 0.86-2.92c0.57-0.84 1.36-1.5 2.37-1.97c1.01-0.47 2.16-0.71 3.45-0.71c1.29 0 2.44 0.24 3.45 0.71c1.01 0.47 1.8 1.13 2.37 1.97c0.57 0.84 0.86 1.82 0.86 2.92c0 1.1-0.29 2.08-0.86 2.92c-0.57 0.84-1.36 1.5-2.37 1.97c-1.01 0.47-2.16 0.71-3.45 0.71z" fill="white"/>
      </svg>)
    },
    {
      text: "Orta ölçekli restoranımız için PayEra S20'yi tercih ettik ve sonuçlar mükemmel. Sipariş takibi, masa yönetimi ve ödeme işlemleri tek bir cihazda entegre çalışıyor. Muhasebe entegrasyonu sayesinde gün sonu raporlama ve analiz işlemleri otomatik olarak yapılıyor.",
      author: "Murat Demir",
      position: "İşletme Sahibi",
      company: "Akdeniz Mutfağı",
      rating: 5,
      image: "/images/testimonial-default.jpg",
      logoSvg: (<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="120" height="40" rx="4" fill="#4CAF50"/>
        <path d="M15.1 29V15.4h6.52c1.29 0 2.4 0.26 3.32 0.79c0.92 0.51 1.63 1.22 2.12 2.12c0.49 0.9 0.74 1.92 0.74 3.05c0 1.13-0.25 2.15-0.74 3.06c-0.49 0.89-1.2 1.59-2.12 2.1c-0.92 0.51-2.03 0.76-3.32 0.76H15.1V29z" fill="white"/>
      </svg>)
    },
    {
      text: "Orta ölçekli marketimizde PayEra S20 kullanıyoruz ve memnuniyetimiz üst seviyede. Barkod okuyucu entegrasyonu, stok takibi ve müşteri sadakat programı özellikleri iş süreçlerimizi önemli ölçüde iyileştirdi. Teknik desteği de oldukça hızlı ve çözüm odaklı.",
      author: "Ayşe Yıldız",
      position: "Market Sahibi",
      company: "Yıldız Market",
      rating: 5,
      image: "/images/testimonial-default.jpg",
      logoSvg: (<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="120" height="40" rx="4" fill="#FFC107"/>
        <path d="M15.72 29L20.16 15.4h3.36L27.96 29h-3.08l-0.88-3.1h-4.36L18.76 29H15.72z" fill="#333"/>
      </svg>)
    },
    {
      text: "PayEra S20, butik otelimiz için mükemmel bir çözüm oldu. Rezervasyon sistemi ve restoran modülü entegrasyonu ile müşterilerimize çok daha hızlı hizmet verebiliyoruz. Geniş ekranı ve hızlı işlem yeteneği sayesinde personelimizin adaptasyon süreci çok kısa sürdü.",
      author: "Hakan Öztürk",
      position: "Otel Müdürü",
      company: "Vista Otel",
      rating: 5,
      image: "/images/testimonial-default.jpg",
      logoSvg: (<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="120" height="40" rx="4" fill="#03A9F4"/>
        <path d="M21.68 21.58h-4.54V29h-3.06V15.4h8.38c1.39 0 2.6 0.25 3.62 0.74c1.02 0.49 1.8 1.19 2.34 2.08c0.54 0.89 0.81 1.92 0.81 3.09c0 1.75-0.6 3.14-1.79 4.17c-1.19 1.03-2.86 1.54-5.01 1.54h-4.48L21.68 21.58z" fill="white"/>
      </svg>)
    }
  ];

  // Add the goToTestimonial function for the carousel navigation
  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  // Generate star rating component
  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className={`w-5 h-5 ${i < rating ? 'text-accent' : 'text-gray-300'}`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl font-bold mb-4">PayEra S20</h1>
              <p className="text-xl mb-8">Orta ölçekli işletmeler için tam donanımlı yazarkasa POS çözümü</p>
              <div className="flex flex-wrap gap-4">
                <a href="#features" className="btn btn-accent">Özellikler</a>
                <a href="#specs" className="btn btn-outline-light">Teknik Özellikler</a>
                <Link to="/iletisim" className="btn btn-outline-light">Fiyat Teklifi Alın</Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Image 
                  src="/images/product-s20.png" 
                  alt="PayEra S20" 
                  className="max-w-full h-auto max-h-80 object-contain"
                  fallback="/images/product-s20.png"
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
              <Image 
                src="/images/product-s20.png" 
                alt="PayEra S20 Ön Görünüm" 
                className="w-full h-auto rounded"
                fallback="/images/product-s20.png"
              />
            </div>
            <div className="bg-bg-light p-4 rounded-lg shadow-md">
              <Image 
                src="/images/product-s20.png" 
                alt="PayEra S20 Yan Görünüm" 
                className="w-full h-auto rounded"
                fallback="/images/product-s20.png"
              />
            </div>
            <div className="bg-bg-light p-4 rounded-lg shadow-md">
              <Image 
                src="/images/product-s20.png" 
                alt="PayEra S20 Yazıcı Detayı" 
                className="w-full h-auto rounded"
                fallback="/images/product-s20.png"
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

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-text-heading">İdeal Kullanım Alanları</h2>
          <p className="text-center text-text-body mb-12 max-w-2xl mx-auto">
            PayEra S20, orta ölçekli işletmelerin çeşitli ihtiyaçlarını karşılamak için tasarlanmıştır.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-bg-light p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-text-heading">{useCase.title}</h3>
                <p className="text-text-body">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Integration */}
      <section className="py-16 bg-bg-alt">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-6 text-text-heading">Yazılım Entegrasyonu</h2>
              <p className="text-text-body mb-6 leading-relaxed">
                PayEra S20, işletmenizin mevcut yazılımlarıyla kolayca entegre olur. Popüler muhasebe programları, stok takip sistemleri ve CRM çözümleriyle uyumlu çalışarak işletmenizin dijital dönüşümünü hızlandırır.
              </p>
              <ul className="space-y-3 text-text-body">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Popüler muhasebe programlarıyla entegrasyon
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  E-fatura ve e-arşiv fatura entegrasyonu
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Stok ve sipariş yönetimi sistemleri
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Müşteri sadakat programları ve CRM çözümleri
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <Image 
                src="/images/product-s20.png" 
                alt="PayEra S20 Yazılım Entegrasyonu" 
                className="rounded-lg shadow-lg max-w-full h-auto"
                fallback="/images/product-s20.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">PayEra S20 ile İşletmenizi Modernleştirin</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Orta ölçekli işletmeniz için geliştirilen PayEra S20 ile satışlarınızı artırın, müşteri memnuniyetini yükseltin.
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
                  <Image 
                    src="/images/product-x10.png" 
                    alt="PayEra X10" 
                    className="max-h-40 object-contain"
                    fallback="/images/product-x10.png"
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
                  <Image 
                    src="/images/product-pro30.png" 
                    alt="PayEra Pro 30" 
                    className="max-h-40 object-contain"
                    fallback="/images/product-pro30.png"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-2 text-text-heading">PayEra Pro 30</h3>
                  <p className="text-text-body mb-4">Profesyonel işletmeler için tam donanımlı çözüm</p>
                  <Link to="/urunler/payera-pro-30" className="btn btn-primary">İncele</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-white to-bg-light overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary opacity-5 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute top-20 left-20 text-9xl text-primary/5 font-serif">❝</div>
          <div className="absolute bottom-20 right-20 text-9xl text-primary/5 font-serif rotate-180">❝</div>
        </div>

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-sm font-semibold text-primary mb-3">
              Müşteri Deneyimleri
            </span>
            <h2 className="text-3xl font-bold text-center mb-4 text-text-heading">PayEra S20 Kullanan İşletmeler</h2>
            <p className="text-text-body max-w-2xl mx-auto">
              PayEra S20 ile işletmelerinde verimlilik ve müşteri memnuniyetini artıran işletmeler deneyimlerini paylaşıyor.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="text-primary/10 text-7xl font-serif leading-none mb-4">❝</div>
            
            {/* Testimonial content */}
            <p className="text-xl md:text-2xl text-text-body leading-relaxed mb-8">
              "PayEra S20 ile tüm market zincirimizde stok takibi ve satış yönetimi çok daha kolay hale geldi. Geniş ekranı ve kullanıcı dostu arayüzü sayesinde personelimizin eğitim süreci kısaldı, operasyonel verimlilik %30 arttı."
            </p>
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center">
                {/* Profile image */}
                <div className="mr-4 relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30">
                    <Image 
                      src="/images/testimonial-default.jpg" 
                      alt="Canan Yılmaz"
                      className="w-full h-full object-cover"
                      fallback="/images/testimonial-default.jpg"
                    />
                  </div>
                  {/* Accent circle decoration */}
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent rounded-full border-2 border-white"></div>
                </div>
                
                {/* Author info */}
                <div>
                  <h4 className="font-bold text-text-heading text-lg">Canan Yılmaz</h4>
                  <p className="text-text-body text-sm">Operasyon Direktörü</p>
                  <p className="text-primary-dark font-medium text-sm">MarketPlus</p>
                  <div className="mt-1">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className="w-5 h-5 text-accent" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Company logo SVG */}
              <div className="h-10 opacity-80">
                <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="120" height="40" rx="4" fill="#FF5722"/>
                  <path d="M20.32 29l-3.14-4.64L15.16 29h-3.34l4.8-7.08-4.58-6.52h3.34l2.92 4.2l2.02-4.2h3.34l-4.58 6.52 4.8 7.08H20.32z" fill="white"/>
                  <path d="M33.5519 29.24c-1.29 0-2.44-0.24-3.45-0.71c-1.01-0.47-1.8-1.13-2.37-1.97c-0.57-0.84-0.86-1.82-0.86-2.92c0-1.1 0.29-2.08 0.86-2.92c0.57-0.84 1.36-1.5 2.37-1.97c1.01-0.47 2.16-0.71 3.45-0.71c1.29 0 2.44 0.24 3.45 0.71c1.01 0.47 1.8 1.13 2.37 1.97c0.57 0.84 0.86 1.82 0.86 2.92c0 1.1-0.29 2.08-0.86 2.92c-0.57 0.84-1.36 1.5-2.37 1.97c-1.01 0.47-2.16 0.71-3.45 0.71z" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">PayEra S20 ile İşletmenizi Modernleştirin</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Orta ölçekli işletmeniz için geliştirilen PayEra S20 ile satışlarınızı artırın, müşteri memnuniyetini yükseltin.
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
                  <Image 
                    src="/images/product-x10.png" 
                    alt="PayEra X10" 
                    className="max-h-40 object-contain"
                    fallback="/images/product-x10.png"
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
                  <Image 
                    src="/images/product-pro30.png" 
                    alt="PayEra Pro 30" 
                    className="max-h-40 object-contain"
                    fallback="/images/product-pro30.png"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-2 text-text-heading">PayEra Pro 30</h3>
                  <p className="text-text-body mb-4">Profesyonel işletmeler için tam donanımlı çözüm</p>
                  <Link to="/urunler/payera-pro-30" className="btn btn-primary">İncele</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-white to-bg-light overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary opacity-5 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute top-20 left-20 text-9xl text-primary/5 font-serif">❝</div>
          <div className="absolute bottom-20 right-20 text-9xl text-primary/5 font-serif rotate-180">❝</div>
        </div>

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-sm font-semibold text-primary mb-3">
              Müşteri Deneyimleri
            </span>
            <h2 className="text-3xl font-bold text-center mb-4 text-text-heading">PayEra S20 Kullanan İşletmeler</h2>
            <p className="text-text-body max-w-2xl mx-auto">
              PayEra S20 ile işletmelerinde verimlilik ve müşteri memnuniyetini artıran işletmeler deneyimlerini paylaşıyor.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="text-primary/10 text-7xl font-serif leading-none mb-4">❝</div>
            
            {/* Testimonial content */}
            <p className="text-xl md:text-2xl text-text-body leading-relaxed mb-8">
              "PayEra S20 ile tüm market zincirimizde stok takibi ve satış yönetimi çok daha kolay hale geldi. Geniş ekranı ve kullanıcı dostu arayüzü sayesinde personelimizin eğitim süreci kısaldı, operasyonel verimlilik %30 arttı."
            </p>
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center">
                {/* Profile image */}
                <div className="mr-4 relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30">
                    <Image 
                      src="/images/testimonial-default.jpg" 
                      alt="Canan Yılmaz"
                      className="w-full h-full object-cover"
                      fallback="/images/testimonial-default.jpg"
                    />
                  </div>
                  {/* Accent circle decoration */}
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent rounded-full border-2 border-white"></div>
                </div>
                
                {/* Author info */}
                <div>
                  <h4 className="font-bold text-text-heading text-lg">Canan Yılmaz</h4>
                  <p className="text-text-body text-sm">Operasyon Direktörü</p>
                  <p className="text-primary-dark font-medium text-sm">MarketPlus</p>
                  <div className="mt-1">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className="w-5 h-5 text-accent" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Company logo SVG */}
              <div className="h-10 opacity-80">
                <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="120" height="40" rx="4" fill="#FF5722"/>
                  <path d="M20.32 29l-3.14-4.64L15.16 29h-3.34l4.8-7.08-4.58-6.52h3.34l2.92 4.2l2.02-4.2h3.34l-4.58 6.52 4.8 7.08H20.32z" fill="white"/>
                  <path d="M33.5519 29.24c-1.29 0-2.44-0.24-3.45-0.71c-1.01-0.47-1.8-1.13-2.37-1.97c-0.57-0.84-0.86-1.82-0.86-2.92c0-1.1 0.29-2.08 0.86-2.92c0.57-0.84 1.36-1.5 2.37-1.97c1.01-0.47 2.16-0.71 3.45-0.71c1.29 0 2.44 0.24 3.45 0.71c1.01 0.47 1.8 1.13 2.37 1.97c0.57 0.84 0.86 1.82 0.86 2.92c0 1.1-0.29 2.08-0.86 2.92c-0.57 0.84-1.36 1.5-2.37 1.97c-1.01 0.47-2.16 0.71-3.45 0.71z" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">PayEra S20 ile İşletmenizi Modernleştirin</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Orta ölçekli işletmeniz için geliştirilen PayEra S20 ile satışlarınızı artırın, müşteri memnuniyetini yükseltin.
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
                  <Image 
                    src="/images/product-x10.png" 
                    alt="PayEra X10" 
                    className="max-h-40 object-contain"
                    fallback="/images/product-x10.png"
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
                  <Image 
                    src="/images/product-pro30.png" 
                    alt="PayEra Pro 30" 
                    className="max-h-40 object-contain"
                    fallback="/images/product-pro30.png"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-2 text-text-heading">PayEra Pro 30</h3>
                  <p className="text-text-body mb-4">Profesyonel işletmeler için tam donanımlı çözüm</p>
                  <Link to="/urunler/payera-pro-30" className="btn btn-primary">İncele</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-white to-bg-light overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary opacity-5 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute top-20 left-20 text-9xl text-primary/5 font-serif">❝</div>
          <div className="absolute bottom-20 right-20 text-9xl text-primary/5 font-serif rotate-180">❝</div>
        </div>

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-sm font-semibold text-primary mb-3">
              Müşteri Deneyimleri
            </span>
            <h2 className="text-3xl font-bold text-center mb-4 text-text-heading">PayEra S20 Kullanan İşletmeler</h2>
            <p className="text-text-body max-w-2xl mx-auto">
              PayEra S20 ile işletmelerinde verimlilik ve müşteri memnuniyetini artıran işletmeler deneyimlerini paylaşıyor.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="text-primary/10 text-7xl font-serif leading-none mb-4">❝</div>
            
            {/* Testimonial content */}
            <p className="text-xl md:text-2xl text-text-body leading-relaxed mb-8">
              "PayEra S20 ile tüm market zincirimizde stok takibi ve satış yönetimi çok daha kolay hale geldi. Geniş ekranı ve kullanıcı dostu arayüzü sayesinde personelimizin eğitim süreci kısaldı, operasyonel verimlilik %30 arttı."
            </p>
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center">
                {/* Profile image */}
                <div className="mr-4 relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30">
                    <Image 
                      src="/images/testimonial-default.jpg" 
                      alt="Canan Yılmaz"
                      className="w-full h-full object-cover"
                      fallback="/images/testimonial-default.jpg"
                    />
                  </div>
                  {/* Accent circle decoration */}
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent rounded-full border-2 border-white"></div>
                </div>
                
                {/* Author info */}
                <div>
                  <h4 className="font-bold text-text-heading text-lg">Canan Yılmaz</h4>
                  <p className="text-text-body text-sm">Operasyon Direktörü</p>
                  <p className="text-primary-dark font-medium text-sm">MarketPlus</p>
                  <div className="mt-1">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className="w-5 h-5 text-accent" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Company logo SVG */}
              <div className="h-10 opacity-80">
                <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="120" height="40" rx="4" fill="#FF5722"/>
                  <path d="M20.32 29l-3.14-4.64L15.16 29h-3.34l4.8-7.08-4.58-6.52h3.34l2.92 4.2l2.02-4.2h3.34l-4.58 6.52 4.8 7.08H20.32z" fill="white"/>
                  <path d="M33.5519 29.24c-1.29 0-2.44-0.24-3.45-0.71c-1.01-0.47-1.8-1.13-2.37-1.97c-0.57-0.84-0.86-1.82-0.86-2.92c0-1.1 0.29-2.08 0.86-2.92c0.57-0.84 1.36-1.5 2.37-1.97c1.01-0.47 2.16-0.71 3.45-0.71c1.29 0 2.44 0.24 3.45 0.71c1.01 0.47 1.8 1.13 2.37 1.97c0.57 0.84 0.86 1.82 0.86 2.92c0 1.1-0.29 2.08-0.86 2.92c-0.57 0.84-1.36 1.5-2.37 1.97c-1.01 0.47-2.16 0.71-3.45 0.71z" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PayEraS20;