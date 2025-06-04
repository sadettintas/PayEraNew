import { Link } from 'react-router-dom';
import { useEffect, useState, useRef, Suspense, lazy } from 'react';
import { preloadAllSiteImages, getImageWithCacheBusting } from '../utils/imageLoader';

// Yükleme göstergesi bileşeni
const LoadingIndicator = () => (
  <div className="py-10 text-center">
    <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
    <p className="mt-2 text-text-body">Yükleniyor...</p>
  </div>
);

// Hero Section with Animated Carousel
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const slides = [
    {
      title: "Yeni Nesil Yazarkasa POS Sistemleri",
      description: "PayEra ile işletmenizi dijital dönüşümün merkezine taşıyın. Güvenli, hızlı ve kullanımı kolay yazarkasa POS çözümleri.",
      image: "/images/payera-a90.jpg",
      fallbackImage: "/images/hero-image-1.jpg"
    },
    {
      title: "Akıllı Ödeme Çözümleri",
      description: "Tüm ödeme yöntemlerini tek bir cihazda toplayarak işletmenize müşteri memnuniyeti ve operasyonel verimlilik sağlayın.",
      image: "/images/payera-507.jpg",
      fallbackImage: "/images/hero-image-2.jpg"
    },
    {
      title: "Entegre İş Çözümleri",
      description: "Stok takibi, müşteri yönetimi ve muhasebe entegrasyonları ile tüm işletme ihtiyaçlarınızı PayEra ile karşılayın.",
      image: "/images/product-features.jpg",
      fallbackImage: "/images/hero-image-3.jpg"
    }
  ];

  const startSlideShow = () => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
  };

  useEffect(() => {
    console.log("Hero component mounted");
    
    // Resimleri önceden yükle
    const preloadImages = () => {
      slides.forEach(slide => {
        const img = new Image();
        img.src = slide.image;
        img.onerror = () => {
          console.log(`Failed to load: ${slide.image}, using fallback`);
          const fallback = new Image();
          fallback.src = slide.fallbackImage;
        };
      });
    };
    
    preloadImages();
    setImagesLoaded(true);
    startSlideShow();
    
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
    startSlideShow();
  };

  return (
    <section className="relative bg-primary text-white overflow-hidden py-16 sm:py-20 md:py-24">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
        {/* Hero Text Content */}
        <div className="md:w-1/2 z-10 mt-12 md:mt-0 md:mb-0 text-center md:text-left">
          <div className="opacity-0 animate-fade-in-up animation-delay-200">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl text-white/90 mb-10 max-w-lg mx-auto md:mx-0">
              {slides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Link to="/urunler" className="btn btn-accent inline-block shadow-lg hover:scale-105">
                Ürünlerimiz
              </Link>
              <Link to="/iletisim" className="btn btn-outline inline-block hover:scale-105">
                İletişime Geçin
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2 z-10">
          <div className="opacity-0 animate-fade-in-up animation-delay-400">
            <img 
              src={slides[currentSlide].image} 
              alt={slides[currentSlide].title} 
              className="mx-auto max-w-[320px] w-80 object-contain rounded-xl shadow-xl border border-white/10"
              onLoad={() => console.log("Image loaded successfully: ", slides[currentSlide].image)}
              onError={(e) => {
                console.log("Image loading failed, trying fallback: ", slides[currentSlide].image);
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = slides[currentSlide].fallbackImage;
              }}
            />
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-accent w-8' : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-light opacity-20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/3"></div>
    </section>
  );
};

// Features Section
const Features = () => {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Hızlı İşlem",
      description: "7/24 kesintisiz çalışan sistemimiz sayesinde işlemleriniz saniyeler içinde tamamlanır."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Güvenli Ödeme",
      description: "PCI DSS güvenlik sertifikalı altyapımız ile verileriniz en üst düzeyde korunur."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Kolay Entegrasyon",
      description: "Mevcut sistemlerinize kolayca entegre edilebilen çözümlerimizle iş süreçlerinizi hızlandırın."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "Detaylı Raporlama",
      description: "Gelişmiş raporlama araçlarımız ile işletmenizin finansal durumunu anında görüntüleyin."
    }
  ];

  return (
    <section className="py-16 bg-bg-light">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading text-3xl font-bold mb-4">PayEra Avantajları</h2>
          <p className="text-lg text-text-body max-w-2xl mx-auto">
            Modern işletmelerin POS sistemlerinden beklentilerinin farkındalığıyla özenle tasarladığımız çözümlerimiz
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="hover-card text-center"
            >
              <div className="mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-text-heading">{feature.title}</h3>
              <p className="text-text-body">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Products Section
const Products = () => {
  const [imageLoadErrors, setImageLoadErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (productName: string, fallback: string) => {
    console.error(`Failed to load image for ${productName}`);
    setImageLoadErrors(prev => ({...prev, [productName]: true}));
    return fallback;
  };

  const products = [
    {
      name: "PayEra X10",
      description: "Küçük işletmeler için ekonomik ve güçlü çözüm",
      image: "/images/product-x10.png",
      fallbackImage: "https://via.placeholder.com/400x560/0097A7/FFFFFF?text=PayEra+X10",
      features: ["Android İşletim Sistemi", "Dokunmatik Ekran", "3G/4G & WiFi", "57 mm Termal Yazıcı"]
    },
    {
      name: "PayEra S20",
      description: "Orta ölçekli işletmeler için ideal çözüm",
      image: "/images/product-s20.png",
      fallbackImage: "https://via.placeholder.com/400x560/0097A7/FFFFFF?text=PayEra+S20",
      features: ["5 inç Dokunmatik Ekran", "Hızlı Snapdragon İşlemci", "NFC Desteği", "Gelişmiş Bağlantı Seçenekleri", "Uzun Pil Ömrü"]
    },
    {
      name: "PayEra Pro 30",
      description: "Profesyonel işletmeler için tam donanımlı çözüm",
      image: "/images/product-pro30.png",
      fallbackImage: "https://via.placeholder.com/400x560/0097A7/FFFFFF?text=PayEra+Pro+30",
      features: ["7 inç HD Ekran", "Çift Kamera", "Parmak İzi Okuyucu", "QR Tarayıcı", "USB Type-C", "NFC & MSR Entegrasyonu"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading text-3xl font-bold mb-4">Ürün Ailemiz</h2>
          <p className="text-text-body text-lg mb-12 max-w-2xl mx-auto">
            Her işletmenin ihtiyacına özel yazarkasa POS çözümleri sunuyoruz
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="bg-bg-light p-8 flex justify-center">
                  <img 
                    src={imageLoadErrors[product.name] ? product.fallbackImage : product.image} 
                    alt={product.name}
                    className="h-64 object-contain transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      console.error(`Error loading image: ${product.image}`);
                      setImageLoadErrors(prev => ({...prev, [product.name]: true}));
                      target.src = product.fallbackImage;
                    }}
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-heading mb-2">{product.name}</h3>
                  <p className="text-text-body mb-4">{product.description}</p>
                  
                  <ul className="mb-6 space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="text-text-body flex items-center">
                        <svg className="w-4 h-4 text-accent mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to={`/urunler/${product.name === "PayEra X10" ? "payera-x10" : product.name === "PayEra S20" ? "payera-s20" : product.name === "PayEra Pro 30" ? "payera-pro-30" : product.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="btn btn-primary w-full text-center"
                  >
                    İncele
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Business Solutions
const BusinessSolutions = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">İşletmenize Özel Çözümler</h2>
            <p className="text-white/90 mb-8 text-lg">
              PayEra, tüm sektörlere yönelik özelleştirilebilir ödeme çözümleri sunar.
              İşletmenizin ihtiyaçlarını analiz eder, size en uygun yazarkasa POS sistemini
              ve entegrasyon yöntemlerini belirleriz.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Sektörünüze özel yazılım çözümleri</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Stok ve muhasebe programları ile tam entegrasyon</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Müşteri sadakat programları ve kampanya yönetimi</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Çok şubeli işletmeler için merkezi yönetim paneli</span>
              </li>
            </ul>
            
            <Link to="/iletisim" className="btn btn-accent inline-block">
              Özel Teklif Alın
            </Link>
          </div>
          
          <div>
            <img 
              src="/images/payera-business-solution.png" 
              alt="PayEra İş Çözümleri" 
              className="rounded-lg shadow-xl border border-white/10"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "https://via.placeholder.com/600x400/0088A9/FFFFFF?text=Business+Solutions";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Stats Section
const Stats = () => {
  return (
    <section className="py-10 bg-bg-light">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-6">
            <div className="text-accent text-4xl font-bold mb-2">10,000+</div>
            <div className="text-text-body font-medium">Aktif Cihaz</div>
          </div>
          <div className="p-6">
            <div className="text-accent text-4xl font-bold mb-2">15+</div>
            <div className="text-text-body font-medium">Yıllık Tecrübe</div>
          </div>
          <div className="p-6">
            <div className="text-accent text-4xl font-bold mb-2">99.9%</div>
            <div className="text-text-body font-medium">Çalışma Süresi</div>
          </div>
          <div className="p-6">
            <div className="text-accent text-4xl font-bold mb-2">24/7</div>
            <div className="text-text-body font-medium">Teknik Destek</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonials
const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      text: "PayEra yazarkasa POS sistemleri ile işlemlerimiz çok hızlandı. Müşterilerimiz ödeme için artık hiç beklemiyorlar. Ödeme süreçlerimiz %60 oranında kısaldı!",
      author: "Ayşe Yılmaz",
      position: "Restoran Sahibi",
      company: "Lezzet Durağı",
      rating: 5,
      image: "/images/testimonials.jpg",
      fallbackImage: "/images/testimonial-default.jpg",
      logoSvg: (<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="120" height="40" rx="4" fill="#FF6B35"/>
        <path d="M18.52 29V15.4h5.32c1.48 0 2.69 0.33 3.63 0.99c0.94 0.64 1.41 1.55 1.41 2.73c0 0.8-0.22 1.49-0.65 2.07c-0.43 0.58-1.03 0.99-1.8 1.23c0.93 0.19 1.67 0.59 2.22 1.22c0.55 0.63 0.83 1.39 0.83 2.3c0 1.32-0.49 2.34-1.46 3.06c-0.97 0.72-2.27 1.08-3.88 1.08H18.52zM21.16 20.78h2.81c0.6 0 1.08-0.15 1.42-0.46c0.34-0.31 0.51-0.74 0.51-1.29c0-0.54-0.17-0.97-0.51-1.28c-0.34-0.31-0.82-0.47-1.42-0.47h-2.81V20.78zM21.16 26.42h3.06c0.65 0 1.16-0.16 1.53-0.49c0.37-0.33 0.56-0.78 0.56-1.36c0-0.58-0.19-1.03-0.56-1.36c-0.37-0.33-0.88-0.49-1.53-0.49h-3.06V26.42z" fill="white"/>
        <path d="M36.8778 29.24c-1.02 0-1.93-0.24-2.72-0.71c-0.79-0.47-1.41-1.13-1.85-1.97c-0.44-0.85-0.66-1.82-0.66-2.91c0-1.09 0.22-2.06 0.66-2.9c0.44-0.85 1.06-1.51 1.85-1.98c0.79-0.47 1.7-0.71 2.72-0.71c1.02 0 1.93 0.24 2.72 0.71c0.79 0.47 1.41 1.13 1.85 1.98c0.44 0.84 0.66 1.81 0.66 2.9c0 1.09-0.22 2.06-0.66 2.91c-0.44 0.84-1.06 1.5-1.85 1.97c-0.79 0.47-1.7 0.71-2.72 0.71zM36.8778 26.76c0.7 0 1.25-0.25 1.66-0.76c0.41-0.51 0.62-1.35 0.62-2.52c0-1.17-0.21-2-0.62-2.51c-0.41-0.51-0.96-0.76-1.66-0.76c-0.7 0-1.26 0.25-1.67 0.76c-0.41 0.51-0.61 1.34-0.61 2.51c0 1.17 0.2 2.01 0.61 2.52c0.41 0.51 0.97 0.76 1.67 0.76z" fill="white"/>
        <path d="M53.1294 29V21.92c0-0.8-0.16-1.4-0.48-1.8c-0.32-0.4-0.76-0.6-1.32-0.6c-0.66 0-1.19 0.23-1.58 0.7c-0.39 0.47-0.59 1.13-0.59 1.98V29h-2.88V21.92c0-0.8-0.16-1.4-0.48-1.8c-0.32-0.4-0.76-0.6-1.32-0.6c-0.67 0-1.2 0.23-1.58 0.7c-0.38 0.47-0.57 1.13-0.57 1.98V29h-2.88V17.4h2.88v1.5c0.38-0.52 0.84-0.93 1.38-1.22c0.54-0.29 1.16-0.44 1.86-0.44c0.8 0 1.49 0.18 2.07 0.53c0.58 0.35 1.02 0.85 1.32 1.51c0.4-0.62 0.9-1.11 1.5-1.49c0.6-0.38 1.28-0.57 2.04-0.57c1.28 0 2.3 0.39 3.04 1.18c0.74 0.79 1.12 1.86 1.12 3.22V29h-2.88V21.92c0-0.8-0.16-1.4-0.48-1.8c-0.32-0.4-0.76-0.6-1.32-0.6c-0.67 0-1.2 0.23-1.58 0.7c-0.38 0.47-0.58 1.13-0.58 1.98V29h-0.8z" fill="white"/>
        <path d="M65.7669 29.24c-1.13 0-2.12-0.24-2.96-0.71c-0.84-0.47-1.49-1.13-1.95-1.98c-0.46-0.85-0.69-1.82-0.69-2.91c0-1.09 0.23-2.06 0.7-2.9c0.47-0.85 1.12-1.51 1.96-1.97c0.84-0.47 1.82-0.71 2.94-0.71s2.1 0.24 2.94 0.71c0.84 0.47 1.49 1.12 1.96 1.97c0.47 0.84 0.7 1.81 0.7 2.9c0 1.09-0.23 2.06-0.7 2.91c-0.47 0.85-1.12 1.51-1.96 1.98c-0.84 0.47-1.82 0.71-2.94 0.71zM65.7669 26.76c0.69 0 1.24-0.25 1.65-0.76c0.41-0.51 0.62-1.35 0.62-2.52c0-1.17-0.21-2-0.62-2.51c-0.41-0.51-0.96-0.76-1.65-0.76c-0.69 0-1.25 0.25-1.66 0.76c-0.41 0.51-0.61 1.34-0.61 2.51c0 1.17 0.2 2.01 0.61 2.52c0.41 0.51 0.97 0.76 1.67 0.76z" fill="white"/>
        <path d="M77.443 29.24c-1.15 0-2.04-0.31-2.69-0.94c-0.65-0.63-0.97-1.57-0.97-2.82V19.7h-1.83v-2.3h1.83v-3.3h2.88v3.3h2.94v2.3h-2.94v5.74c0 0.45 0.1 0.78 0.31 0.97c0.21 0.19 0.57 0.29 1.09 0.29h1.04V29c-0.33 0.05-0.66 0.1-0.99 0.14c-0.33 0.04-0.65 0.06-0.97 0.06c-1.14 0-2.02-0.29-2.64-0.86c-0.62-0.57-0.92-1.45-0.92-2.64v-5.9h-1.84v-2.3h0.52c0.53 0 0.94-0.15 1.22-0.46c0.28-0.31 0.42-0.71 0.42-1.22v-1.14H77.2837z" fill="white"/>
        <path d="M87.2356 29.24c-1.15 0-2.15-0.24-3-0.71c-0.85-0.47-1.51-1.13-1.98-1.98c-0.47-0.85-0.7-1.82-0.7-2.91c0-1.09 0.23-2.06 0.7-2.9c0.47-0.85 1.13-1.51 1.98-1.97c0.85-0.47 1.85-0.71 3-0.71c0.87 0 1.64 0.15 2.31 0.44c0.67 0.29 1.22 0.71 1.65 1.26V18.4h2.88V29h-2.88v-1.66c-0.41 0.55-0.95 0.97-1.63 1.26c-0.68 0.29-1.46 0.44-2.33 0.44zM87.8156 26.76c0.7 0 1.26-0.25 1.67-0.76c0.41-0.51 0.62-1.35 0.62-2.52c0-1.17-0.21-2-0.62-2.51c-0.41-0.51-0.97-0.76-1.67-0.76c-0.7 0-1.26 0.25-1.67 0.76c-0.41 0.51-0.62 1.34-0.62 2.51c0 1.17 0.21 2.01 0.62 2.52c0.41 0.51 0.97 0.76 1.67 0.76z" fill="white"/>
      </svg>)
    },
    {
      text: "PayEra çözümleri sayesinde mobil satış ekibimiz sipariş süreçlerini çok daha hızlı tamamlıyor. Müşteri ziyaretlerimiz %40 daha verimli hale geldi.",
      author: "Ahmet Yıldız",
      position: "Satış Direktörü",
      company: "Yıldız Gıda",
      rating: 5,
      image: "/images/testimonial-default.jpg",
      fallbackImage: "/images/testimonial-default.jpg",
      logoSvg: (<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="120" height="40" rx="4" fill="#27AE60"/>
        <path d="M15.72 29L20.16 15.4h3.36L27.96 29h-3.08l-0.88-3.1h-4.36L18.76 29H15.72zM20.2 23.6h3.48l-1.74-6.2L20.2 23.6z" fill="white"/>
        <path d="M33.4669 29.24c-1.15 0-2.15-0.31-2.69-0.94c-0.65-0.63-0.97-1.57-0.97-2.82V19.7h-1.83v-2.3h1.83v-3.3h2.88v3.3h2.94v2.3h-2.94v5.74c0 0.45 0.1 0.78 0.31 0.97c0.21 0.19 0.58 0.29 1.11 0.29h1.5V29c-0.25 0.07-0.59 0.13-1.02 0.17c-0.43 0.04-0.82 0.07-1.16 0.07z" fill="white"/>
        <path d="M43.2194 29.24c-1.15 0-2.15-0.24-3-0.71c-0.85-0.47-1.51-1.13-1.98-1.98c-0.47-0.85-0.7-1.82-0.7-2.91c0-1.09 0.23-2.06 0.7-2.9c0.47-0.85 1.13-1.51 1.98-1.97c0.85-0.47 1.85-0.71 3-0.71c0.87 0 1.64 0.15 2.31 0.44c0.67 0.29 1.22 0.71 1.65 1.26V17.4h2.88V29h-2.88v-1.66c-0.41 0.55-0.95 0.97-1.63 1.26c-0.68 0.29-1.46 0.44-2.33 0.44zM43.7994 26.76c0.7 0 1.26-0.25 1.67-0.76c0.41-0.51 0.62-1.35 0.62-2.52c0-1.17-0.21-2-0.62-2.51c-0.41-0.51-0.97-0.76-1.67-0.76c-0.7 0-1.26 0.25-1.67 0.76c-0.41 0.51-0.62 1.34-0.62 2.51c0 1.17 0.21 2.01 0.62 2.52c0.41 0.51 0.97 0.76 1.67 0.76z" fill="white"/>
        <path d="M60.8169 29.24c-0.8 0-1.54-0.15-2.22-0.44c-0.68-0.29-1.23-0.7-1.64-1.24V29h-2.86V13.4h2.86v6.2c0.41-0.52 0.95-0.92 1.62-1.22c0.67-0.3 1.41-0.45 2.22-0.45c1.15 0 2.16 0.24 3.01 0.71c0.85 0.47 1.52 1.14 2 1.99c0.48 0.85 0.72 1.83 0.72 2.93c0 1.1-0.24 2.07-0.72 2.92c-0.48 0.85-1.15 1.51-2 1.98c-0.85 0.47-1.85 0.71-2.99 0.71zM60.2569 26.76c0.69 0 1.25-0.25 1.66-0.76c0.41-0.51 0.62-1.35 0.62-2.52c0-1.18-0.2-2.01-0.61-2.51c-0.41-0.5-0.97-0.75-1.67-0.75c-0.7 0-1.26 0.25-1.67 0.76c-0.41 0.51-0.62 1.33-0.62 2.5c0 1.17 0.21 2.01 0.62 2.52c0.41 0.51 0.97 0.76 1.67 0.76z" fill="white"/>
        <path d="M76.0288 29.24c-0.8 0-1.54-0.15-2.22-0.44c-0.68-0.29-1.23-0.7-1.64-1.24V29h-2.86V13.4h2.86v6.2c0.41-0.52 0.95-0.92 1.62-1.22c0.67-0.3 1.41-0.45 2.22-0.45c1.15 0 2.16 0.24 3.01 0.71c0.85 0.47 1.52 1.14 2 1.99c0.48 0.85 0.72 1.83 0.72 2.93c0 1.1-0.24 2.07-0.72 2.92c-0.48 0.85-1.15 1.51-2 1.98c-0.85 0.47-1.85 0.71-2.99 0.71zM75.4688 26.76c0.69 0 1.25-0.25 1.66-0.76c0.41-0.51 0.62-1.35 0.62-2.52c0-1.18-0.2-2.01-0.61-2.51c-0.41-0.5-0.97-0.75-1.67-0.75c-0.7 0-1.26 0.25-1.67 0.76c-0.41 0.51-0.62 1.33-0.62 2.5c0 1.17 0.21 2.01 0.62 2.52c0.41 0.51 0.97 0.76 1.67 0.76z" fill="white"/>
        <path d="M86.2807 29.24c-1.15 0-2.15-0.24-3-0.71c-0.85-0.47-1.51-1.13-1.98-1.98c-0.47-0.85-0.7-1.82-0.7-2.91c0-1.09 0.23-2.06 0.7-2.9c0.47-0.85 1.13-1.51 1.98-1.97c0.85-0.47 1.85-0.71 3-0.71c0.87 0 1.64 0.15 2.31 0.44c0.67 0.29 1.22 0.71 1.65 1.26V17.4h2.88V29h-2.88v-1.66c-0.41 0.55-0.95 0.97-1.63 1.26c-0.68 0.29-1.46 0.44-2.33 0.44zM86.8607 26.76c0.7 0 1.26-0.25 1.67-0.76c0.41-0.51 0.62-1.35 0.62-2.52c0-1.17-0.21-2-0.62-2.51c-0.41-0.51-0.97-0.76-1.67-0.76c-0.7 0-1.26 0.25-1.67 0.76c-0.41 0.51-0.62 1.34-0.62 2.51c0 1.17 0.21 2.01 0.62 2.52c0.41 0.51 0.97 0.76 1.67 0.76z" fill="white"/>
      </svg>)
    },
    {
      text: "PayEra'nın teknik desteği gerçekten mükemmel. Herhangi bir sorunda anında yardım alabiliyoruz. Çözüm odaklı yaklaşımları bizi çok memnun ediyor.",
      author: "Can Demir",
      position: "Teknoloji Direktörü",
      company: "Demir Holding",
      rating: 5,
      image: "/images/testimonial-default.jpg",
      fallbackImage: "/images/testimonial-default.jpg",
      logoSvg: (<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="120" height="40" rx="4" fill="#3498DB"/>
        <path d="M21.68 21.58h-4.54V29h-3.06V15.4h8.38c1.39 0 2.6 0.25 3.62 0.74c1.02 0.49 1.8 1.19 2.34 2.08c0.54 0.89 0.81 1.92 0.81 3.09c0 1.75-0.6 3.14-1.79 4.17c-1.19 1.03-2.86 1.54-5.01 1.54h-4.48L21.68 21.58zM21.68 19.02c0.89 0 1.55-0.21 1.99-0.63c0.44-0.42 0.66-1.02 0.66-1.8c0-0.8-0.23-1.43-0.68-1.88c-0.45-0.45-1.1-0.67-1.97-0.67h-4.54v4.98H21.68z" fill="white"/>
        <path d="M40.3931 29.24c-1.29 0-2.44-0.24-3.45-0.71c-1.01-0.47-1.8-1.13-2.37-1.97c-0.57-0.84-0.86-1.82-0.86-2.92c0-1.1 0.29-2.08 0.86-2.92c0.57-0.84 1.36-1.5 2.37-1.97c1.01-0.47 2.16-0.71 3.45-0.71c1.29 0 2.44 0.24 3.45 0.71c1.01 0.47 1.8 1.13 2.37 1.97c0.57 0.84 0.86 1.82 0.86 2.92c0 1.1-0.29 2.08-0.86 2.92c-0.57 0.84-1.36 1.5-2.37 1.97c-1.01 0.47-2.16 0.71-3.45 0.71zM40.3931 26.78c0.75 0 1.35-0.25 1.81-0.76c0.46-0.51 0.69-1.17 0.69-1.98c0-0.81-0.23-1.47-0.69-1.98c-0.46-0.51-1.06-0.76-1.81-0.76c-0.75 0-1.35 0.25-1.8 0.76c-0.45 0.51-0.68 1.17-0.68 1.98c0 0.81 0.23 1.47 0.68 1.98c0.45 0.51 1.05 0.76 1.8 0.76z" fill="white"/>
        <path d="M59.2963 29l-3.14-4.64L54.0363 29h-3.34l4.8-7.08-4.58-6.52h3.34l2.92 4.2l2.02-4.2h3.34l-4.58 6.52 4.8 7.08H59.2963z" fill="white"/>
        <path d="M72.5281 29.24c-1.29 0-2.44-0.24-3.45-0.71c-1.01-0.47-1.8-1.13-2.37-1.97c-0.57-0.84-0.86-1.82-0.86-2.92c0-1.1 0.29-2.08 0.86-2.92c0.57-0.84 1.36-1.5 2.37-1.97c1.01-0.47 2.16-0.71 3.45-0.71c1.29 0 2.44 0.24 3.45 0.71c1.01 0.47 1.8 1.13 2.37 1.97c0.57 0.84 0.86 1.82 0.86 2.92c0 1.1-0.29 2.08-0.86 2.92c-0.57 0.84-1.36 1.5-2.37 1.97c-1.01 0.47-2.16 0.71-3.45 0.71zM72.5281 26.78c0.75 0 1.35-0.25 1.81-0.76c0.46-0.51 0.69-1.17 0.69-1.98c0-1.17-0.21-2-0.69-2.51c-0.46-0.51-1.06-0.76-1.81-0.76c-0.75 0-1.35 0.25-1.8 0.76c-0.45 0.51-0.68 1.17-0.68 1.98c0 0.81 0.23 1.47 0.68 1.98c0.45 0.51 1.05 0.76 1.8 0.76z" fill="white"/>
        <path d="M81.4313 29V15.4h3.06v5.1h5.46V15.4h3.06V29h-3.06v-5.58h-5.46V29H81.4313z" fill="white"/>
      </svg>)
    },
    {
      text: "PayEra cihazları hem dayanıklı hem de kullanımı çok kolay. Özellikle kredi kartı entegrasyonu ve hızlı işlem süreçleri sayesinde müşteri memnuniyetimiz arttı.",
      author: "Deniz Şahin",
      position: "İşletme Sahibi",
      company: "Mavi Butik",
      rating: 5,
      image: "/images/testimonial-default.jpg",
      fallbackImage: "/images/testimonial-default.jpg",
      logoSvg: (<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="120" height="40" rx="4" fill="#1565C0"/>
        <path d="M17.68 29V15.4h3.06v13.6H17.68z" fill="white"/>
        <path d="M32.6862 29.24c-1.29 0-2.44-0.24-3.45-0.71c-1.01-0.47-1.8-1.13-2.37-1.97c-0.57-0.84-0.86-1.82-0.86-2.92c0-1.1 0.29-2.08 0.86-2.92c0.57-0.84 1.36-1.5 2.37-1.97c1.01-0.47 2.16-0.71 3.45-0.71c1.29 0 2.44 0.24 3.45 0.71c1.01 0.47 1.8 1.13 2.37 1.97c0.57 0.84 0.86 1.82 0.86 2.92c0 1.1-0.29 2.08-0.86 2.92c-0.57 0.84-1.36 1.5-2.37 1.97c-1.01 0.47-2.16 0.71-3.45 0.71zM32.6862 26.78c0.75 0 1.35-0.25 1.81-0.76c0.46-0.51 0.69-1.17 0.69-1.98c0-1.17-0.23-2-0.69-2.51c-0.46-0.51-1.06-0.76-1.81-0.76c-0.75 0-1.35 0.25-1.8 0.76c-0.45 0.51-0.68 1.17-0.68 1.98c0 0.81 0.23 1.47 0.68 1.98c0.45 0.51 1.05 0.76 1.8 0.76z" fill="white"/>
        <path d="M47.0344 29.24c-1.15 0-2.15-0.24-3-0.71c-0.85-0.47-1.51-1.13-1.98-1.98c-0.47-0.85-0.7-1.82-0.7-2.91c0-1.09 0.23-2.06 0.7-2.9c0.47-0.85 1.13-1.51 1.98-1.97c0.85-0.47 1.85-0.71 3-0.71c0.87 0 1.64 0.15 2.31 0.44c0.67 0.29 1.22 0.71 1.65 1.26V18.4h2.88V29h-2.88v-1.66c-0.41 0.55-0.95 0.97-1.63 1.26c-0.68 0.29-1.46 0.44-2.33 0.44zM47.6144 26.76c0.7 0 1.26-0.25 1.67-0.76c0.41-0.51 0.62-1.35 0.62-2.52c0-1.17-0.21-2-0.62-2.51c-0.41-0.51-0.97-0.76-1.67-0.76c-0.7 0-1.26 0.25-1.67 0.76c-0.41 0.51-0.62 1.34-0.62 2.51c0 1.17 0.21 2.01 0.62 2.52c0.41 0.51 0.97 0.76 1.67 0.76z" fill="white"/>
        <path d="M59.0419 29V18.4h2.86v1.5c0.38-0.52 0.84-0.93 1.38-1.22c0.54-0.29 1.16-0.44 1.86-0.44c1.28 0 2.3 0.39 3.04 1.18c0.74 0.79 1.12 1.86 1.12 3.22V29h-2.88v-7.08c0-0.8-0.16-1.4-0.48-1.8c-0.32-0.4-0.76-0.6-1.32-0.6c-0.67 0-1.2 0.23-1.58 0.7c-0.38 0.47-0.58 1.13-0.58 1.98V29h-2.88z" fill="white"/>
        <path d="M77.2837 14.68V18.4h2.44v2.3h-2.44v5.74c0 0.45 0.1 0.78 0.31 0.97c0.21 0.19 0.57 0.29 1.09 0.29h1.04V29c-0.33 0.05-0.66 0.1-0.99 0.14c-0.33 0.04-0.65 0.06-0.97 0.06c-1.14 0-2.02-0.29-2.64-0.86c-0.62-0.57-0.92-1.45-0.92-2.64v-5.9h-1.84v-2.3h0.52c0.53 0 0.94-0.15 1.22-0.46c0.28-0.31 0.42-0.71 0.42-1.22v-1.14H77.2837z" fill="white"/>
        <path d="M87.2356 29.24c-1.15 0-2.15-0.24-3-0.71c-0.85-0.47-1.51-1.13-1.98-1.98c-0.47-0.85-0.7-1.82-0.7-2.91c0-1.09 0.23-2.06 0.7-2.9c0.47-0.85 1.13-1.51 1.98-1.97c0.85-0.47 1.85-0.71 3-0.71c0.87 0 1.64 0.15 2.31 0.44c0.67 0.29 1.22 0.71 1.65 1.26V17.4h2.88V29h-2.88v-1.66c-0.41 0.55-0.95 0.97-1.63 1.26c-0.68 0.29-1.46 0.44-2.33 0.44zM87.8156 26.76c0.7 0 1.26-0.25 1.67-0.76c0.41-0.51 0.62-1.35 0.62-2.52c0-1.17-0.21-2-0.62-2.51c-0.41-0.51-0.97-0.76-1.67-0.76c-0.7 0-1.26 0.25-1.67 0.76c-0.41 0.51-0.62 1.34-0.62 2.51c0 1.17 0.21 2.01 0.62 2.52c0.41 0.51 0.97 0.76 1.67 0.76z" fill="white"/>
      </svg>)
    },
    {
      text: "PayEra çözümleri sayesinde mobil satış ekibimiz sipariş süreçlerini çok daha hızlı tamamlıyor. Müşteri ziyaretlerimiz %40 daha verimli hale geldi.",
      author: "Ahmet Yıldız",
      position: "Satış Direktörü",
      company: "Yıldız Gıda",
      rating: 5,
      image: "/images/testimonial-default.jpg",
      fallbackImage: "/images/testimonial-default.jpg",
      logoSvg: (<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="120" height="40" rx="4" fill="#27AE60"/>
        <path d="M15.72 29L20.16 15.4h3.36L27.96 29h-3.08l-0.88-3.1h-4.36L18.76 29H15.72zM20.2 23.6h3.48l-1.74-6.2L20.2 23.6z" fill="white"/>
        <path d="M33.4669 29.24c-1.15 0-2.15-0.31-2.69-0.94c-0.65-0.63-0.97-1.57-0.97-2.82V19.7h-1.83v-2.3h1.83v-3.3h2.88v3.3h2.94v2.3h-2.94v5.74c0 0.45 0.1 0.78 0.31 0.97c0.21 0.19 0.58 0.29 1.11 0.29h1.5V29c-0.25 0.07-0.59 0.13-1.02 0.17c-0.43 0.04-0.82 0.07-1.16 0.07z" fill="white"/>
        <path d="M43.2194 29.24c-1.15 0-2.15-0.24-3-0.71c-0.85-0.47-1.51-1.13-1.98-1.98c-0.47-0.85-0.7-1.82-0.7-2.91c0-1.09 0.23-2.06 0.7-2.9c0.47-0.85 1.13-1.51 1.98-1.97c0.85-0.47 1.85-0.71 3-0.71c0.87 0 1.64 0.15 2.31 0.44c0.67 0.29 1.22 0.71 1.65 1.26V17.4h2.88V29h-2.88v-1.66c-0.41 0.55-0.95 0.97-1.63 1.26c-0.68 0.29-1.46 0.44-2.33 0.44zM43.7994 26.76c0.7 0 1.26-0.25 1.67-0.76c0.41-0.51 0.62-1.35 0.62-2.51c0-1.17-0.21-2-0.62-2.51c-0.41-0.51-0.97-0.76-1.67-0.76c-0.7 0-1.26 0.25-1.67 0.76c-0.41 0.51-0.62 1.34-0.62 2.51c0 1.17 0.21 2.01 0.62 2.52c0.41 0.51 0.97 0.76 1.67 0.76z" fill="white"/>
        <path d="M60.8169 29.24c-0.8 0-1.54-0.15-2.22-0.44c-0.68-0.29-1.23-0.7-1.64-1.24V29h-2.86V13.4h2.86v6.2c0.41-0.52 0.95-0.92 1.62-1.22c0.67-0.3 1.41-0.45 2.22-0.45c1.15 0 2.16 0.24 3.01 0.71c0.85 0.47 1.52 1.14 2 1.99c0.48 0.85 0.72 1.83 0.72 2.93c0 1.1-0.24 2.07-0.72 2.92c-0.48 0.85-1.15 1.51-2 1.98c-0.85 0.47-1.85 0.71-2.99 0.71zM60.2569 26.76c0.69 0 1.25-0.25 1.66-0.76c0.41-0.51 0.62-1.35 0.62-2.52c0-1.18-0.2-2.01-0.61-2.51c-0.41-0.5-0.97-0.75-1.67-0.75c-0.7 0-1.26 0.25-1.67 0.76c-0.41 0.51-0.62 1.33-0.62 2.5c0 1.17 0.21 2.01 0.62 2.52c0.41 0.51 0.97 0.76 1.67 0.76z" fill="white"/>
        <path d="M76.0288 29.24c-0.8 0-1.54-0.15-2.22-0.44c-0.68-0.29-1.23-0.7-1.64-1.24V29h-2.86V13.4h2.86v6.2c0.41-0.52 0.95-0.92 1.62-1.22c0.67-0.3 1.41-0.45 2.22-0.45c1.15 0 2.16 0.24 3.01 0.71c0.85 0.47 1.52 1.14 2 1.99c0.48 0.85 0.72 1.83 0.72 2.93c0 1.1-0.24 2.07-0.72 2.92c-0.48 0.85-1.15 1.51-2 1.98c-0.85 0.47-1.85 0.71-2.99 0.71zM75.4688 26.76c0.69 0 1.25-0.25 1.66-0.76c0.41-0.51 0.62-1.35 0.62-2.52c0-1.18-0.2-2.01-0.61-2.51c-0.41-0.5-0.97-0.75-1.67-0.75c-0.7 0-1.26 0.25-1.67 0.76c-0.41 0.51-0.62 1.33-0.62 2.5c0 1.17 0.21 2.01 0.62 2.52c0.41 0.51 0.97 0.76 1.67 0.76z" fill="white"/>
        <path d="M86.2807 29.24c-1.15 0-2.15-0.24-3-0.71c-0.85-0.47-1.51-1.13-1.98-1.98c-0.47-0.85-0.7-1.82-0.7-2.91c0-1.09 0.23-2.06 0.7-2.9c0.47-0.85 1.13-1.51 1.98-1.97c0.85-0.47 1.85-0.71 3-0.71c0.87 0 1.64 0.15 2.31 0.44c0.67 0.29 1.22 0.71 1.65 1.26V17.4h2.88V29h-2.88v-1.66c-0.41 0.55-0.95 0.97-1.63 1.26c-0.68 0.29-1.46 0.44-2.33 0.44zM86.8607 26.76c0.7 0 1.26-0.25 1.67-0.76c0.41-0.51 0.62-1.35 0.62-2.52c0-1.17-0.21-2-0.62-2.51c-0.41-0.51-0.97-0.76-1.67-0.76c-0.7 0-1.26 0.25-1.67 0.76c-0.41 0.51-0.62 1.34-0.62 2.51c0 1.17 0.21 2.01 0.62 2.52c0.41 0.51 0.97 0.76 1.67 0.76z" fill="white"/>
      </svg>)
    },
    {
      text: "PayEra'nın teknik desteği gerçekten mükemmel. Herhangi bir sorunda anında yardım alabiliyoruz. Çözüm odaklı yaklaşımları bizi çok memnun ediyor.",
      author: "Can Demir",
      position: "Teknoloji Direktörü",
      company: "Demir Holding",
      rating: 5,
      image: "/images/testimonial-default.jpg",
      fallbackImage: "/images/testimonial-default.jpg",
      logoSvg: (<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="120" height="40" rx="4" fill="#3498DB"/>
        <path d="M21.68 21.58h-4.54V29h-3.06V15.4h8.38c1.39 0 2.6 0.25 3.62 0.74c1.02 0.49 1.8 1.19 2.34 2.08c0.54 0.89 0.81 1.92 0.81 3.09c0 1.75-0.6 3.14-1.79 4.17c-1.19 1.03-2.86 1.54-5.01 1.54h-4.48L21.68 21.58zM21.68 19.02c0.89 0 1.55-0.21 1.99-0.63c0.44-0.42 0.66-1.02 0.66-1.8c0-0.8-0.23-1.43-0.68-1.88c-0.45-0.45-1.1-0.67-1.97-0.67h-4.54v4.98H21.68z" fill="white"/>
        <path d="M40.3931 29.24c-1.29 0-2.44-0.24-3.45-0.71c-1.01-0.47-1.8-1.13-2.37-1.97c-0.57-0.84-0.86-1.82-0.86-2.92c0-1.1 0.29-2.08 0.86-2.92c0.57-0.84 1.36-1.5 2.37-1.97c1.01-0.47 2.16-0.71 3.45-0.71c1.29 0 2.44 0.24 3.45 0.71c1.01 0.47 1.8 1.13 2.37 1.97c0.57 0.84 0.86 1.82 0.86 2.92c0 1.1-0.29 2.08-0.86 2.92c-0.57 0.84-1.36 1.5-2.37 1.97c-1.01 0.47-2.16 0.71-3.45 0.71zM40.3931 26.78c0.75 0 1.35-0.25 1.81-0.76c0.46-0.51 0.69-1.17 0.69-1.98c0-1.17-0.21-2-0.69-2.51c-0.46-0.51-1.06-0.76-1.81-0.76c-0.75 0-1.35 0.25-1.8 0.76c-0.45 0.51-0.68 1.17-0.68 1.98c0 0.81 0.23 1.47 0.68 1.98c0.45 0.51 1.05 0.76 1.8 0.76z" fill="white"/>
        <path d="M59.2963 29l-3.14-4.64L54.0363 29h-3.34l4.8-7.08-4.58-6.52h3.34l2.92 4.2l2.02-4.2h3.34l-4.58 6.52 4.8 7.08H59.2963z" fill="white"/>
        <path d="M72.5281 29.24c-1.29 0-2.44-0.24-3.45-0.71c-1.01-0.47-1.8-1.13-2.37-1.97c-0.57-0.84-0.86-1.82-0.86-2.92c0-1.1 0.29-2.08 0.86-2.92c0.57-0.84 1.36-1.5 2.37-1.97c1.01-0.47 2.16-0.71 3.45-0.71c1.29 0 2.44 0.24 3.45 0.71c1.01 0.47 1.8 1.13 2.37 1.97c0.57 0.84 0.86 1.82 0.86 2.92c0 1.1-0.29 2.08-0.86 2.92c-0.57 0.84-1.36 1.5-2.37 1.97c-1.01 0.47-2.16 0.71-3.45 0.71zM72.5281 26.78c0.75 0 1.35-0.25 1.81-0.76c0.46-0.51 0.69-1.17 0.69-1.98c0-1.17-0.21-2-0.69-2.51c-0.46-0.51-1.06-0.76-1.81-0.76c-0.75 0-1.35 0.25-1.8 0.76c-0.45 0.51-0.68 1.17-0.68 1.98c0 0.81 0.23 1.47 0.68 1.98c0.45 0.51 1.05 0.76 1.8 0.76z" fill="white"/>
        <path d="M81.4313 29V15.4h3.06v5.1h5.46V15.4h3.06V29h-3.06v-5.58h-5.46V29H81.4313z" fill="white"/>
      </svg>)
    },
    {
      text: "PayEra cihazları hem dayanıklı hem de kullanımı çok kolay. Özellikle kredi kartı entegrasyonu ve hızlı işlem süreçleri sayesinde müşteri memnuniyetimiz arttı.",
      author: "Deniz Şahin",
      position: "İşletme Sahibi",
      company: "Mavi Butik",
      rating: 5,
      image: "/images/testimonial-default.jpg",
      fallbackImage: "/images/testimonial-default.jpg",
      logoSvg: (<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="120" height="40" rx="4" fill="#1565C0"/>
        <path d="M17.68 29V15.4h3.06v13.6H17.68z" fill="white"/>
        <path d="M32.6862 29.24c-1.29 0-2.44-0.24-3.45-0.71c-1.01-0.47-1.8-1.13-2.37-1.97c-0.57-0.84-0.86-1.82-0.86-2.92c0-1.1 0.29-2.08 0.86-2.92c0.57-0.84 1.36-1.5 2.37-1.97c1.01-0.47 2.16-0.71 3.45-0.71c1.29 0 2.44 0.24 3.45 0.71c1.01 0.47 1.8 1.13 2.37 1.97c0.57 0.84 0.86 1.82 0.86 2.92c0 1.1-0.29 2.08-0.86 2.92c-0.57 0.84-1.36 1.5-2.37 1.97c-1.01 0.47-2.16 0.71-3.45 0.71zM32.6862 26.78c0.75 0 1.35-0.25 1.81-0.76c0.46-0.51 0.69-1.17 0.69-1.98c0-1.17-0.23-2-0.69-2.51c-0.46-0.51-1.06-0.76-1.81-0.76c-0.75 0-1.35 0.25-1.8 0.76c-0.45 0.51-0.68 1.17-0.68 1.98c0 0.81 0.23 1.47 0.68 1.98c0.45 0.51 1.05 0.76 1.8 0.76z" fill="white"/>
        <path d="M47.0344 29.24c-1.15 0-2.15-0.24-3-0.71c-0.85-0.47-1.51-1.13-1.98-1.98c-0.47-0.85-0.7-1.82-0.7-2.91c0-1.09 0.23-2.06 0.7-2.9c0.47-0.85 1.13-1.51 1.98-1.97c0.85-0.47 1.85-0.71 3-0.71c0.87 0 1.64 0.15 2.31 0.44c0.67 0.29 1.22 0.71 1.65 1.26V18.4h2.88V29h-2.88v-1.66c-0.41 0.55-0.95 0.97-1.63 1.26c-0.68 0.29-1.46 0.44-2.33 0.44zM47.6144 26.76c0.7 0 1.26-0.25 1.67-0.76c0.41-0.51 0.62-1.35 0.62-2.52c0-1.17-0.21-2-0.62-2.51c-0.41-0.51-0.97-0.76-1.67-0.76c-0.7 0-1.26 0.25-1.67 0.76c-0.41 0.51-0.62 1.34-0.62 2.51c0 1.17 0.21 2.01 0.62 2.52c0.41 0.51 0.97 0.76 1.67 0.76z" fill="white"/>
        <path d="M59.0419 29V18.4h2.86v1.5c0.38-0.52 0.84-0.93 1.38-1.22c0.54-0.29 1.16-0.44 1.86-0.44c1.28 0 2.3 0.39 3.04 1.18c0.74 0.79 1.12 1.86 1.12 3.22V29h-2.88v-7.08c0-0.8-0.16-1.4-0.48-1.8c-0.32-0.4-0.76-0.6-1.32-0.6c-0.67 0-1.2 0.23-1.58 0.7c-0.38 0.47-0.58 1.13-0.58 1.98V29h-2.88z" fill="white"/>
        <path d="M77.2837 14.68V18.4h2.44v2.3h-2.44v5.74c0 0.45 0.1 0.78 0.31 0.97c0.21 0.19 0.57 0.29 1.09 0.29h1.04V29c-0.33 0.05-0.66 0.1-0.99 0.14c-0.33 0.04-0.65 0.06-0.97 0.06c-1.14 0-2.02-0.29-2.64-0.86c-0.62-0.57-0.92-1.45-0.92-2.64v-5.9h-1.84v-2.3h0.52c0.53 0 0.94-0.15 1.22-0.46c0.28-0.31 0.42-0.71 0.42-1.22v-1.14H77.2837z" fill="white"/>
        <path d="M87.2356 29.24c-1.15 0-2.15-0.24-3-0.71c-0.85-0.47-1.51-1.13-1.98-1.98c-0.47-0.85-0.7-1.82-0.7-2.91c0-1.09 0.23-2.06 0.7-2.9c0.47-0.85 1.13-1.51 1.98-1.97c0.85-0.47 1.85-0.71 3-0.71c0.87 0 1.64 0.15 2.31 0.44c0.67 0.29 1.22 0.71 1.65 1.26V17.4h2.88V29h-2.88v-1.66c-0.41 0.55-0.95 0.97-1.63 1.26c-0.68 0.29-1.46 0.44-2.33 0.44zM87.8156 26.76c0.7 0 1.26-0.25 1.67-0.76c0.41-0.51 0.62-1.35 0.62-2.52c0-1.17-0.21-2-0.62-2.51c-0.41-0.51-0.97-0.76-1.67-0.76c-0.7 0-1.26 0.25-1.67 0.76c-0.41 0.51-0.62 1.34-0.62 2.51c0 1.17 0.21 2.01 0.62 2.52c0.41 0.51 0.97 0.76 1.67 0.76z" fill="white"/>
      </svg>)
    },
    {
      text: "PayEra çözümleri sayesinde mobil satış ekibimiz sipariş süreçlerini çok daha hızlı tamamlıyor. Müşteri ziyaretlerimiz %40 daha verimli hale geldi.",
      author: "Ahmet Yıldız",
      position: "Satış Direktörü",
      company: "Yıldız Gıda",
      rating: 5,
      image: "/images/testimonial-default.jpg",
      fallbackImage: "/images/testimonial-default.jpg",
      logoSvg: (<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="120" height="40" rx="4" fill="#27AE60"/>
        <path d="M15.72 29L20.16 15.4h3.36L27.96 29h-3.08l-0.88-3.1h-4.36L18.76 29H15.72zM20.2 23.6h3.48l-1.74-6.2L20.2 23.6z" fill="white"/>
        <path d="M33.4669 29.24c-1.15 0-2.15-0.31-2.69-0.94c-0.65-0.63-0.97-1.57-0.97-2.82V19.7h-1.83v-2.3h1.83v-3.3h2.88v3.3h2.94v2.3h-2.94v5.74c0 0.45 0.1 0.78 0.31 0.97c0.21 0.19 0.58 0.29 1.11 0.29h1.5V29c-0.25 0.07-0.59 0.13-1.02 0.17c-0.43 0.04-0.82 0.07-1.16 0.07z" fill="white"/>
        <path d="M43.2194 29.24c-1.15 0-2.15-0.24-3-0.71c-0.85-0.47-1.51-1.13-1.98-1.98c-0.47-0.85-0.7-1.82-0.7-2.91c0-1.09 0.23-2.06 0.7-2.9c0.47-0.85 1.13-1.51 1.98-1.97c0.85-0.47 1.85-0.71 3-0.71c0.87 0 1.64 0.15 2.31 0.44c0.67 0.29 1.22 0.71 1.65 1.26V17.4h2.88V29h-2.88v-1.66c-0.41 0.55-0.95 0.97-1.63 1.26c-0.68 0.29-1.46 0.44-2.33 0.44zM43.7994 26.76c0.7 0 1.26-0.25 1.67-0.76c0.41-0.51 0.62-1.35 0.62-2.51c0-1.17-0.21-2-0.62-2.51c-0.41-0.51-0.97-0.76-1.67-0.76c-0.7 0-1.26 0.25-1.67 0.76c-0.41 0.51-0.62 1.34-0.62 2.51c0 1.17 0.21 2.01 0.62 2.52c0.41 0.51 0.97 0.76 1.67 0.76z" fill="white"/>
        <path d="M60.8169 29.24c-0.8 0-1.54-0.15-2.22-0.44c-0.68-0.29-1.23-0.7-1.64-1.24V29h-2.86V13.4h2.86v6.2c0.41-0.52 0.95-0.92 1.62-1.22c0.67-0.3 1.41-0.45 2.22-0.45c1.15 0 2.16 0.24 3.01 0.71c0.85 0.47 1.52 1.14 2 1.99c0.48 0.85 0.72 1.83 0.72 2.93c0 1.1-0.24 2.07-0.72 2.92c-0.48 0.85-1.15 1.51-2 1.98c-0.85 0.47-1.85 0.71-2.99 0.71zM60.2569 26.76c0.69 0 1.25-0.25 1.66-0.76c0.41-0.51 0.62-1.35 0.62-2.52c0-1.18-0.2-2.01-0.61-2.51c-0.41-0.5-0.97-0.75-1.67-0.75c-0.7 0-1.26 0.25-1.67 0.76c-0.41 0.51-0.62 1.33-0.62 2.5c0 1.17 0.21 2.01 0.62 2.52c0.41 0.51 0.97 0.76 1.67 0.76z" fill="white"/>
        <path d="M76.0288 29.24c-0.8 0-1.54-0.15-2.22-0.44c-0.68-0.29-1.23-0.7-1.64-1.24V29h-2.86V13.4h2.86v6.2c0.41-0.52 0.95-0.92 1.62-1.22c0.67-0.3 1.41-0.45 2.22-0.45c1.15 0 2.16 0.24 3.01 0.71c0.85 0.47 1.52 1.14 2 1.99c0.48 0.85 0.72 1.83 0.72 2.93c0 1.1-0.24 2.07-0.72 2.92c-0.48 0.85-1.15 1.51-2 1.98c-0.85 0.47-1.85 0.71-2.99 0.71zM75.4688 26.76c0.69 0 1.25-0.25 1.66-0.76c0.41-0.51 0.62-1.35 0.62-2.52c0-1.18-0.2-2.01-0.61-2.51c-0.41-0.5-0.97-0.75-1.67-0.75c-0.7 0-1.26 0.25-1.67 0.76c-0.41 0.51-0.62 1.33-0.62 2.5c0 1.17 0.21 2.01 0.62 2.52c0.41 0.51 0.97 0.76 1.67 0.76z" fill="white"/>
        <path d="M86.2807 29.24c-1.15 0-2.15-0.24-3-0.71c-0.85-0.47-1.51-1.13-1.98-1.98c-0.47-0.85-0.7-1.82-0.7-2.91c0-1.09 0.23-2.06 0.7-2.9c0.47-0.85 1.13-1.51 1.98-1.97c0.85-0.47 1.85-0.71 3-0.71c0.87 0 1.64 0.15 2.31 0.44c0.67 0.29 1.22 0.71 1.65 1.26V17.4h2.88V29h-2.88v-1.66c-0.41 0.55-0.95 0.97-1.63 1.26c-0.68 0.29-1.46 0.44-2.33 0.44zM86.8607 26.76c0.7 0 1.26-0.25 1.67-0.76c0.41-0.51 0.62-1.35 0.62-2.52c0-1.17-0.21-2-0.62-2.51c-0.41-0.51-0.97-0.76-1.67-0.76c-0.7 0-1.26 0.25-1.67 0.76c-0.41 0.51-0.62 1.34-0.62 2.51c0 1.17 0.21 2.01 0.62 2.52c0.41 0.51 0.97 0.76 1.67 0.76z" fill="white"/>
      </svg>)
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(current => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

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
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-bg-light">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary opacity-5 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent opacity-5 rounded-full blur-3xl"></div>
        
        {/* Quotation marks */}
        <div className="absolute top-20 left-20 text-9xl text-primary/5 font-serif">❝</div>
        <div className="absolute bottom-20 right-20 text-9xl text-primary/5 font-serif rotate-180">❝</div>
      </div>
      
      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-sm font-semibold text-primary mb-3">
            Müşteri Deneyimleri
          </span>
          <h2 className="text-4xl font-bold mb-4 text-text-heading">Müşterilerimiz Ne Diyor?</h2>
          <p className="text-text-body max-w-2xl mx-auto">
            PayEra çözümlerini kullanan işletmeler, deneyimlerini paylaşıyor. 
            Binlerce işletme gibi siz de PayEra ailesine katılabilirsiniz.
          </p>
        </div>
        
        {/* Testimonial carousel */}
        <div 
          className="relative overflow-hidden" 
          ref={testimonialRef}
        >
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="min-w-full"
              >
                <div className="max-w-4xl mx-auto">
                  <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    {/* Quote icon */}
                    <div className="text-primary/10 text-7xl font-serif leading-none mb-4">❝</div>
                    
                    {/* Testimonial text */}
                    <p className="text-xl md:text-2xl text-text-body leading-relaxed mb-8">
                      {testimonial.text}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div className="flex items-center">
                        {/* Profile image */}
                        <div className="mr-4 relative">
                          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.author}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.onerror = null;
                                target.src = testimonial.fallbackImage;
                              }}
                            />
                          </div>
                          {/* Accent circle decoration */}
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent rounded-full border-2 border-white"></div>
                        </div>
                        
                        {/* Author info */}
                        <div>
                          <h4 className="font-bold text-text-heading text-lg">{testimonial.author}</h4>
                          <p className="text-text-body text-sm">{testimonial.position}</p>
                          <p className="text-primary-dark font-medium text-sm">{testimonial.company}</p>
                          <div className="mt-1">{renderStars(testimonial.rating)}</div>
                        </div>
                      </div>
                      
                      {/* Company logo SVG */}
                      <div className="h-10 opacity-80">
                        {testimonial.logoSvg}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  activeIndex === index ? 'bg-accent' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation arrows */}
          <button
            onClick={() => goToTestimonial((activeIndex - 1 + testimonials.length) % testimonials.length)}
            className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => goToTestimonial((activeIndex + 1) % testimonials.length)}
            className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300 focus:outline-none"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-sm text-text-body mb-5 font-medium uppercase tracking-wider">Güven ve Kalite</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* Bankalar */}
            <div className="h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <svg className="h-8" viewBox="0 0 150 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M46.09 9.29h9.46v3.12h-5.88v2.35h5.54v3.11h-5.54v2.54h5.88v3.12h-9.46V9.29z" fill="#E4002B"/>
                <path d="M67.3 15.46c0 4.32-2.52 8.26-8.39 8.26-5.87 0-8.38-3.94-8.38-8.26 0-4.33 2.51-8.39 8.38-8.39 5.87 0 8.39 4.06 8.39 8.39zm-12.93 0c0 2.83 1.44 5.08 4.54 5.08 3.1 0 4.55-2.25 4.55-5.08 0-2.9-1.44-5.21-4.55-5.21-3.1 0-4.54 2.31-4.54 5.21z" fill="#0033A0"/>
                <path d="M68.41 9.29h3.58v14.24h-3.58V9.29z" fill="#E4002B"/>
                <path d="M77.04 9.29h9.46v3.12h-5.87v2.35h5.53v3.11h-5.53v2.54h5.87v3.12h-9.46V9.29z" fill="#0033A0"/>
                <path d="M92.99 12.48h-3.88V9.29h11.35v3.19h-3.88v11.05h-3.59V12.48z" fill="#009A4E"/>
                <path d="M107.18 18.94h-1.88v4.59h-3.59V9.29h6.06c3.35 0 5.44 2.03 5.44 4.83 0 2.05-1.12 3.64-2.93 4.35l3.14 5.06h-4.03l-2.21-4.59zm.3-3.12c1.14 0 1.86-.63 1.86-1.7 0-1.06-.72-1.7-1.86-1.7h-2.18v3.4h2.18z" fill="#E4002B"/>
                <path d="M121.29 9.29h3.59v14.24h-3.59V9.29z" fill="#0033A0"/>
                <path d="M133.12 9.29h3.58v11.12h5.25v3.12h-8.83V9.29z" fill="#009A4E"/>
                <path d="M32.53 17.71H17.59v18.24h14.94V17.71z" fill="#FF5A00"/>
                <path d="M18.41 26.83c0-3.7 1.73-7 4.42-9.12a13.38 13.38 0 00-8.25-2.83c-7.44 0-13.48 6.03-13.48 13.46 0 7.43 6.04 13.46 13.48 13.46 3.1 0 5.95-1.05 8.25-2.83a13.35 13.35 0 01-4.42-9.12v-2.02z" fill="#EB001B"/>
                <path d="M45.18 26.83c0 7.43-6.04 13.46-13.47 13.46-3.1 0-5.96-1.05-8.25-2.83a13.35 13.35 0 004.41-9.12v-2.01a13.35 13.35 0 00-4.41-9.13 13.38 13.38 0 018.25-2.83c7.43 0 13.47 6.03 13.47 13.46z" fill="#F79E1B"/>
              </svg>
            </div>
            
            <div className="h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <svg className="h-7" viewBox="0 0 512 175" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M244.848 178.008H190.032V38.593H244.848V178.008Z" fill="#00579F"/>
                <path d="M195.767 108.3C195.767 83.7385 206.889 61.6948 224.648 46.7904L224.542 46.9117C210.252 36.1506 192.388 30 173.004 30C128.436 30 92.4443 65.9917 92.4443 110.559C92.4443 155.127 128.436 191.119 173.004 191.119C192.388 191.119 210.252 184.968 224.542 174.207L224.648 174.328C206.889 159.424 195.767 137.38 195.767 112.819V108.3Z" fill="#00579F"/>
                <path d="M458.68 178.008H401.513C401.513 178.008 454.064 74.6066 455.504 71.292C458.384 64.5637 462.111 58.5058 468.346 53.4385C474.58 48.3711 482.835 45.8267 492.022 45.8267C505.377 45.8267 512 52.9351 512 63.59L458.68 178.008Z" fill="#FAA61A"/>
                <path d="M315.903 45.8267H363.502L339.685 118.091L385.725 45.8267H437.654L366.236 178.008H314.306L315.903 45.8267Z" fill="#00579F"/>
                <path d="M272.286 45.8267L290.811 126.143C290.811 126.143 250.283 100.256 240.719 94.2456L243.741 178.008H191.49L171.946 67.1339C207.555 52.5662 253.762 45.8267 272.286 45.8267Z" fill="#FAA61A"/>
              </svg>
            </div>
            
            <div className="h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <svg className="h-8" viewBox="0 0 200 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.255 19.995V54.754H23.674V19.995H30.255Z" fill="#000000"/>
                <path d="M51.164 21.423C54.588 21.423 57.062 22.644 58.586 25.086C60.11 27.528 60.872 31.749 60.872 37.749V54.754H54.291V36.423C54.291 32.918 53.885 30.476 53.072 29.098C52.259 27.72 50.7 27.032 48.395 27.032C45.582 27.032 43.661 28.214 42.644 30.56V54.754H36.062V22.071H42.644V24.869C44.678 22.573 47.513 21.423 51.164 21.423Z" fill="#000000"/>
                <path d="M81.11 21.423C84.997 21.423 88.023 22.848 90.188 25.697C92.353 28.547 93.444 32.63 93.444 37.947C93.444 43.304 92.246 47.463 89.851 50.424C87.456 53.385 84.293 54.866 80.363 54.866C76.431 54.866 73.713 53.768 71.208 51.56V66.891H64.74V22.071H71.319V24.869C73.484 22.573 76.734 21.423 81.11 21.423ZM77.907 49.257C80.43 49.257 82.264 48.159 83.413 45.963C84.563 43.768 85.138 41.105 85.138 37.976C85.138 34.846 84.563 32.315 83.413 30.37C82.264 28.424 80.449 27.45 77.968 27.45C75.486 27.45 73.484 28.114 71.961 29.443V45.963C73.484 48.159 75.486 49.257 77.968 49.257H77.907Z" fill="#000000"/>
                <path d="M112.735 49.201C115.01 49.201 116.976 48.507 118.635 47.121V42.1H117.492C115.068 42.1 113.123 42.302 111.651 42.704C110.18 43.106 109.444 44.063 109.444 45.576C109.444 47.09 110.54 48.267 112.735 49.201ZM111.468 54.866C107.503 54.866 104.427 53.826 102.239 51.745C100.05 49.665 98.951 46.934 98.951 43.553C98.951 36.767 104.69 33.373 116.165 33.373H118.636V31.271C118.636 29.499 118.183 28.172 117.277 27.29C116.371 26.408 114.88 25.967 112.803 25.967C110.726 25.967 109.102 26.427 107.93 27.348C106.758 28.269 106.172 29.651 106.172 31.492H100.056C100.056 26.996 101.817 24.14 105.343 21.931C107.02 21.001 108.931 20.397 111.073 20.121C113.222 19.843 115.386 19.998 117.456 20.576C121.959 21.749 124.217 25.2 124.217 30.928V44.261C124.217 47.58 124.487 50.278 125.028 52.356V54.754H118.803C118.427 53.345 118.195 51.884 118.112 50.143C115.55 53.291 112.05 54.866 107.604 54.866H111.468Z" fill="#000000"/>
                <path d="M168.548 54.866C164.403 54.866 161.172 53.422 158.857 50.537C156.541 47.652 155.385 43.802 155.385 38.986C155.385 33.962 156.694 30.015 159.315 27.146C161.936 24.277 165.153 22.842 168.967 22.842C172.057 22.842 174.683 23.834 176.845 25.82V14.126H182.925V54.754H176.845V51.746C174.746 53.826 171.976 54.866 168.548 54.866ZM169.687 49.257C172.042 49.257 174.057 48.159 175.725 45.963V30.37C173.994 28.424 171.975 27.45 169.687 27.45C167.06 27.45 165.153 28.318 163.966 30.053C162.779 31.788 162.186 34.279 162.186 37.526C162.186 40.773 162.842 43.441 164.151 45.529C165.462 47.618 167.31 48.66 169.687 48.66V49.257Z" fill="#000000"/>
                <path d="M195.903 54.246C193.588 53.101 191.786 51.394 190.599 49.125C189.413 46.856 188.821 44.261 188.821 41.338C188.821 36.975 190.203 33.373 192.97 30.533C195.736 27.693 199.325 26.273 203.735 26.273C208.146 26.273 211.717 27.693 214.46 30.533C217.204 33.373 218.577 36.975 218.577 41.338C218.577 44.261 217.985 46.856 216.798 49.125C215.612 51.394 213.829 53.101 211.551 54.246C209.273 55.391 206.634 55.963 203.733 55.963C200.833 55.963 198.217 55.391 195.903 54.246ZM209.818 48.754C211.383 46.981 212.165 44.493 212.165 41.292C212.165 38.09 211.383 35.603 209.818 33.829C208.253 32.055 206.231 31.17 203.754 31.17C201.277 31.17 199.255 32.055 197.689 33.829C196.124 35.603 195.342 38.09 195.342 41.292C195.342 44.493 196.124 46.981 197.689 48.754C199.255 50.527 201.277 51.412 203.754 51.412C206.231 51.412 208.253 50.527 209.818 48.754Z" fill="#000000"/>
                <path d="M150.361 32.302H142.425V45.348C142.425 46.934 142.823 48.097 143.618 48.835C144.411 49.574 145.718 49.919 147.533 49.878V54.754C143.202 55.16 140.069 54.373 138.133 52.392C136.197 50.412 135.23 47.275 135.23 42.981V32.302H129.542V27.349H135.23V20.525L142.425 20.243V27.349H150.361V32.302Z" fill="#000000"/>
              </svg>
            </div>
            
            <div className="h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <svg className="h-10" viewBox="0 0 242.9 84.4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38.6,37c-0.1-8,7.8-12.6,13.7-12.6c6.1,0,12.5,3.1,14.9,10.9c0.3,1.2,0.3,1.9-0.9,2.4c-2.5,1.1-5.2,2.2-7.7,3.3  c-1.3,0.5-1.7,0.3-2.3-1c-1.4-2.9-3.6-3.9-6.9-3c-2.7,0.8-4,3.7-2.5,6c1,1.5,2.7,2.2,4.3,2.9c4.1,1.5,8.5,2.4,12.5,4.2  c7.3,3.1,10.9,9,10.1,16.1c-0.9,7.8-6,12.9-13.4,15c-8.7,2.4-17.2,1.6-24.5-4c-4-3.1-6-7.3-6.2-12.3c-0.1-1.1,0.3-1.5,1.3-1.5  c3-0.1,6-0.2,9-0.3c1.3,0,1.7,0.5,1.9,1.7c0.6,3.5,3,5.5,6.6,5.8c3.5,0.4,6.5-0.6,7.5-3.6c1.1-3.2-0.2-5.6-3.7-7.3  c-3.2-1.4-6.6-2-9.8-3.2C33.1,52.4,28.9,45.9,29,38.9 M116.8,57.8c0.1,8.2,6.5,13.7,15.8,13.5c3.8-0.1,7.2-1.2,10-3.8  c0.7-0.7,1.2-0.7,2-0.1c1.5,1.4,3.2,2.6,4.8,3.9c0.8,0.6,0.9,1.1,0.3,1.9c-6.4,7.9-15,10.8-24.7,9.1c-11.9-2.1-20.9-12.7-21.7-25.5  c-1-16.2,11.9-29.4,27.5-28c6,0.5,11.1,2.9,15.3,7.2c4.3,4.4,6.8,9.7,7.9,15.7c0.5,3-0.2,3.5-3.2,3.5c-10.6,0-21.1,0-31.7,0  c-1.1,0-2.4-0.3-2.4,1.6C116.8,56.2,116.8,57,116.8,57.8 M116.9,50.8c8.4,0,16.4,0,24.4,0c0.1-0.1,0.2-0.2,0.2-0.3  c-1.5-5.6-5.7-9.1-11.4-9.4C123.7,40.7,118.8,44.5,116.9,50.8 M158.9,42.3c0-7.1,0-14.2,0-21.3c0-1.1,0.2-1.6,1.5-1.5  c2.7,0.1,5.5,0.1,8.2,0c1.1,0,1.6,0.2,1.6,1.5c-0.1,13.9-0.1,27.7,0,41.6c0,1.3-0.4,1.7-1.7,1.7c-2.6-0.1-5.1-0.1-7.7,0  c-1.4,0-1.9-0.3-1.9-1.8C158.9,55.7,158.9,49,158.9,42.3 M75.3,42.3c0,7.1,0,14.1,0,21.2c0,1.2-0.3,1.6-1.6,1.6c-2.7,0-5.5,0-8.2,0  c-1.1,0-1.5-0.3-1.5-1.5c0-14.1,0-28.3,0-42.4c0-1.1,0.2-1.6,1.5-1.5c2.8,0.1,5.5,0.1,8.3,0c1.2,0,1.6,0.3,1.6,1.6  C75.3,28.2,75.3,35.3,75.3,42.3 M176.4,53.5c0-10.7,8.3-19.4,18.9-19.5c10.5-0.1,19.1,8.4,19.2,18.9c0.1,10.8-8.3,19.5-18.9,19.7  C184.9,72.9,176.4,64.4,176.4,53.5 M185.2,53.6c0,6,4.6,10.6,10.5,10.6c5.7,0,10.2-4.6,10.3-10.4c0.1-5.9-4.7-10.7-10.5-10.7  C190,43.1,185.2,47.9,185.2,53.6 M91.6,43.3c0-7.4,0-14.9,0-22.3c0-1.3,0.3-1.7,1.6-1.7c2.7,0,5.4,0,8.1,0c1.3,0,1.6,0.4,1.6,1.6  c0,8.8,0,17.5,0,26.3c0,5.2,3.7,9,8.8,9.1c5.2,0,9.1-3.8,9.1-9.1c0-8.6,0-17.2,0-25.8c0-2,0-2,2-2c2.6,0,5.2,0,7.8,0  c1.5,0,1.7,0.5,1.7,1.9c0,9.7,0.2,19.4-0.1,29.1c-0.2,6.7-4,11.9-10.2,14.6c-5.6,2.4-11.2,2.4-16.7-0.1c-6.1-2.7-9.8-7.8-10.1-14.5  c-0.2-2.4,0-4.8,0-7.2C91.6,43.3,91.6,43.3,91.6,43.3z" fill="#003087"/>
              </svg>
            </div>
            
            <div className="h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <svg className="h-6" viewBox="0 0 2500 789" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2500 394.1C2500 175.8 2324.4 0 2106.4 0H394.1C175.8 0 0 175.8 0 394.1C0 612.1 175.8 788.2 394.1 788.2H2106.4C2324.4 788.2 2500 612.4 2500 394.1Z" fill="#5F6368"/>
                <path d="M2106.4 0H1584.3V788.2H2106.4C2324.4 788.2 2500 612.4 2500 394.1C2500 175.8 2324.4 0 2106.4 0Z" fill="#4285F4"/>
                <path d="M2106.4 0H1584.3V525.4H2106.4C2324.4 525.4 2500 349.6 2500 263C2500 175.8 2324.4 0 2106.4 0Z" fill="#34A853"/>
                <path d="M394.1 0H916.2V788.2H394.1C175.8 788.2 0 612.4 0 394.1C0 175.8 175.8 0 394.1 0Z" fill="#EA4335"/>
                <path d="M394.1 0H916.2V525.4H394.1C175.8 525.4 0 349.6 0 263C0 175.8 175.8 0 394.1 0Z" fill="#FBBC04"/>
                <path d="M916.2 263L1250.2 525.4L1584.3 263L1250.2 0L916.2 263Z" fill="#4285F4"/>
                <path d="M1584.3 788.2L1250.2 525.4L916.2 788.2H1584.3Z" fill="#34A853"/>
                <path d="M916.2 788.2L1250.2 525.4L1584.3 788.2" fill="#FBBC04"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Why Choose Us
const WhyChooseUs = () => {
  const reasons = [
    {
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Güven",
      description: "10 yılı aşkın sektör deneyimi ve binlerce memnun müşteri ile hizmet veriyoruz."
    },
    {
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Hız ve Verimlilik",
      description: "Hızlı işlem süreçleri ve kullanıcı dostu arayüzlerle işlerinizi kolaylaştırıyoruz."
    },
    {
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "7/24 Destek",
      description: "Teknik ekibimiz her zaman yanınızda; cihaz arızası, yazılım güncellemeleri ve diğer her konuda."
    }
  ];

  return (
    <section className="py-16 bg-bg-light">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Side Image */}
          <div className="md:w-1/2">
            <img 
              src="/images/about-us.jpg" 
              alt="PayEra Ekibi" 
              className="rounded-lg shadow-xl"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "https://via.placeholder.com/600x400/0088A9/FFFFFF?text=Neden+PayEra";
              }}
            />
          </div>
          
          {/* Right Side Content */}
          <div className="md:w-1/2">
            <h2 className="section-heading text-3xl font-bold mb-6">Neden PayEra?</h2>
            <p className="text-text-body mb-8">
              PayEra, ödeme sistemleri ve yazarkasa POS çözümleri alanında Türkiye'nin öncü markasıdır. İşletmenizin dijital dönüşümüne katkıda bulunmak için yenilikçi, güvenilir ve kullanıcı dostu çözümler sunuyoruz.
            </p>
            
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mr-4">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-heading mb-2">{reason.title}</h3>
                    <p className="text-text-body">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact CTA
const ContactCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-accent-dark text-white relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white opacity-5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s'}}></div>
        <div className="absolute top-1/2 -right-20 w-72 h-72 bg-primary-light opacity-20 rounded-full blur-2xl animate-pulse" style={{animationDuration: '12s'}}></div>
        <div className="absolute -bottom-20 left-40 w-80 h-80 bg-accent-light opacity-10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '10s'}}></div>
      </div>
      
      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-6/12 mb-10 md:mb-0 md:pr-8">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md text-sm font-semibold text-accent mb-4 animate-fadeIn">
              Yeni Nesil Çözümler
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              İşletmeniz için <span className="text-accent">En Uygun Çözümü</span> Keşfedin
            </h2>
            
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              PayEra'nın yenilikçi ödeme sistemleri ve POS cihazları ile işletmenizi bir adım öne taşıyın. 
              Uzman ekibimizle iletişime geçerek ihtiyaçlarınıza özel çözümler için ücretsiz demo talep edin.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/iletisim" 
                className="btn btn-accent inline-flex items-center group hover:scale-105 transition-all duration-300"
              >
                <span>İletişime Geçin</span>
                <svg 
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              
              <Link 
                to="/bayilik" 
                className="btn btn-outline border-2 hover:bg-white/10 backdrop-blur hover:border-white hover:scale-105 transition-all duration-300"
              >
                Bayilik Fırsatları
              </Link>
            </div>
          </div>
          
          <div className="md:w-5/12 relative">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl animate-float">
              <div className="flex items-center mb-6">
                <div className="bg-accent rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <span className="text-xl font-semibold">Ücretsiz Demo</span>
              </div>
              
              <ul className="mb-6 space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-accent mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>İhtiyaçlarınıza özel çözümler</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-accent mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Uzman ekibimizden eğitim</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-accent mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>7/24 teknik destek</span>
                </li>
              </ul>
              
              <Link 
                to="/iletisim" 
                className="w-full btn btn-accent flex items-center justify-center group hover:scale-105 transition-all duration-300"
              >
                <span>Hemen Demoyu Talep Et</span>
                <svg 
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            
            {/* Floating elements for visual interest */}
            <div className="absolute -top-6 -right-8 bg-accent/80 w-16 h-16 rounded-full blur-md animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute -bottom-10 -left-6 bg-primary-light w-20 h-20 rounded-full blur-lg animate-float" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Newsletter
const Newsletter = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="section-heading text-3xl font-bold mb-4">Güncel Kalmak İster misiniz?</h2>
          <p className="text-text-body mb-8">
            PayEra'nın yeni ürünleri, yazılım güncellemeleri ve sektörel gelişmeler hakkında düzenli bilgi almak için e-posta listemize kaydolun.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="E-posta adresiniz" 
              className="form-input flex-grow px-4 py-2 rounded border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary"
              aria-label="E-posta adresiniz"
              required
            />
            <button 
              type="submit" 
              className="btn btn-primary whitespace-nowrap"
            >
              Kayıt Ol
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// Main Home Component
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const loadingTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    console.log('Home page mounted');
    document.title = 'PayEra - Anasayfa';
    
    // Yapay bir yükleme süreci göstermek için timer
    const startTime = Date.now();
    const totalLoadTime = 1500; // 1.5 saniye
    
    loadingTimer.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(100, Math.round((elapsed / totalLoadTime) * 100));
      setLoadingProgress(progress);
      
      if (progress >= 100) {
        setIsLoading(false);
        if (loadingTimer.current) {
          clearInterval(loadingTimer.current);
        }
      }
    }, 100);
    
    // Tüm site görüntülerini önceden yükle
    preloadAllSiteImages();
    
    return () => {
      console.log('Home page unmounted');
      if (loadingTimer.current) {
        clearInterval(loadingTimer.current);
      }
    };
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-bg-light">
        <div className="text-center max-w-md mx-auto p-6">
          <h2 className="text-2xl font-bold text-primary mb-4">PayEra Yükleniyor</h2>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div 
              className="bg-primary h-2.5 rounded-full transition-all duration-300" 
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          <p className="text-text-body">
            Ödeme sistemleri çözümlerimiz yükleniyor... %{loadingProgress}
          </p>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={<LoadingIndicator />}>
      <Hero />
      <Features />
      <Products />
      <BusinessSolutions />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
      <ContactCTA />
      <Newsletter />
    </Suspense>
  );
};

export default Home;
