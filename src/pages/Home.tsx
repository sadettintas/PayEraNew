import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

// Hero Section with Animated Carousel
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      title: "Yeni Nesil Yazarkasa POS Sistemleri",
      description: "PayEra ile işletmenizi dijital dönüşümün merkezine taşıyın. Güvenli, hızlı ve kullanımı kolay yazarkasa POS çözümleri.",
      image: "/src/assets/images/payera-a90.jpg",
      fallbackImage: "/public/images/hero-image-1.jpg"
    },
    {
      title: "Akıllı Ödeme Çözümleri",
      description: "Tüm ödeme yöntemlerini tek bir cihazda toplayarak işletmenize müşteri memnuniyeti ve operasyonel verimlilik sağlayın.",
      image: "/src/assets/images/payera-507.jpg",
      fallbackImage: "/public/images/hero-image-2.jpg"
    },
    {
      title: "Entegre İş Çözümleri",
      description: "Stok takibi, müşteri yönetimi ve muhasebe entegrasyonları ile tüm işletme ihtiyaçlarınızı PayEra ile karşılayın.",
      image: "/src/assets/images/product-features.jpg",
      fallbackImage: "/public/images/hero-image-3.jpg"
    }
  ];

  const startSlideShow = () => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
  };

  useEffect(() => {
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
    <section className="relative bg-navy text-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 pt-20 pb-24 md:pt-28 md:pb-32 flex flex-col md:flex-row items-center">
        {/* Hero Text Content */}
        <div className="md:w-1/2 z-10 mb-10 md:mb-0 text-center md:text-left">
          <div className="opacity-0 animate-fade-in-up animation-delay-200">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
              {slides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Link to="/urunler" className="bg-turquoise hover:bg-opacity-80 text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-block">
                Ürünlerimiz
              </Link>
              <Link to="/iletisim" className="bg-transparent hover:bg-white hover:bg-opacity-10 border-2 border-turquoise text-turquoise font-bold py-3 px-8 rounded-lg transition duration-300 inline-block">
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
              className="mx-auto max-h-[400px] object-contain rounded-md shadow-xl border border-gray-200"
              onError={(e) => {
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
                currentSlide === index ? 'bg-turquoise w-6' : 'bg-gray-500 bg-opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 bg-turquoise opacity-10 w-96 h-96 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 bg-purple-600 opacity-10 w-96 h-96 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>
    </section>
  );
};

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      title: "Hızlı İşlem",
      description: "Saniyeler içinde ödeme alın, kuyrukları azaltın",
      icon: (
        <svg className="w-12 h-12 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Kolay Kullanım",
      description: "Sezgisel arayüz ile karmaşık işlemleri basitleştirin",
      icon: (
        <svg className="w-12 h-12 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    },
    {
      title: "Güvenli Ödeme",
      description: "En son güvenlik protokolleri ile korunan işlemler",
      icon: (
        <svg className="w-12 h-12 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Çoklu Ödeme",
      description: "Tüm ödeme yöntemlerini tek cihazda toplayın",
      icon: (
        <svg className="w-12 h-12 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Anlık Raporlar",
      description: "İşletmenizin performansını gerçek zamanlı takip edin",
      icon: (
        <svg className="w-12 h-12 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "7/24 Destek",
      description: "Teknik ekibimiz her zaman yanınızda",
      icon: (
        <svg className="w-12 h-12 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy mb-4">PayEra Avantajları</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Modern yazarkasa POS sistemleri ile işletmenize değer katacak çözümler sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white py-6 px-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 bg-light-gray inline-block p-3 rounded-lg">
                <div className="text-3xl">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Products Section
const ProductsSection = () => {
  const products = [
    {
      name: "PayEra X10",
      description: "Küçük işletmeler için kompakt ve ekonomik çözüm",
      features: ["Android İşletim Sistemi", "Dokunmatik Ekran", "Termal Yazıcı", "EFT-POS Entegrasyonu"],
      image: "/images/product-x10.png",
      fallbackImage: "https://via.placeholder.com/300x300/FFFFFF/0088A9?text=PayEra+X10"
    },
    {
      name: "PayEra S20",
      description: "Orta ölçekli işletmeler için tam donanımlı model",
      features: ["Geniş Dokunmatik Ekran", "Hızlı İşlemci", "Gelişmiş Bağlantı Seçenekleri", "Stok Takip Modülü"],
      image: "/images/product-s20.png",
      fallbackImage: "https://via.placeholder.com/300x300/FFFFFF/0088A9?text=PayEra+S20"
    },
    {
      name: "PayEra Pro 30",
      description: "Yoğun kullanım için profesyonel çözüm",
      features: ["Çift Ekran Desteği", "Yüksek Performans", "Gelişmiş Raporlama", "Tam ERP Entegrasyonu"],
      image: "/images/product-pro30.png",
      fallbackImage: "https://via.placeholder.com/300x300/FFFFFF/0088A9?text=PayEra+Pro30"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy mb-4">Ürün Ailemiz</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Her ihtiyaca uygun yazarkasa POS çözümlerimizle tanışın.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="h-48 bg-navy flex items-center justify-center p-4">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="max-h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = product.fallbackImage;
                  }}
                />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-lg font-semibold text-navy mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span className="text-turquoise mr-2 text-lg">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-6 mt-auto">
                <Link to={`/urunler/${product.name.toLowerCase().replace(/\s+/g, '-')}`} className="block w-full bg-turquoise hover:bg-opacity-80 text-white text-center font-bold py-2 px-4 rounded-lg transition duration-300">
                  Detaylı Bilgi
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/urunler" className="inline-flex items-center text-turquoise hover:text-opacity-80 font-semibold transition duration-300">
            Tüm Ürünlerimizi Görüntüleyin
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Why Choose Us Section
const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-navy text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 bg-turquoise opacity-10 w-96 h-96 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 bg-purple-600 opacity-10 w-96 h-96 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-screen-xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl font-bold mb-6">Neden PayEra?</h2>
            <p className="text-lg text-gray-300 mb-8">
              PayEra, yalnızca bir yazarkasa POS sistemi değil, işletmeniz için 
              tam kapsamlı bir iş çözümü sunuyor. Müşteri memnuniyetini artırırken, 
              operasyonel verimlilik sağlıyor.
            </p>
            
            <div className="space-y-6 px-2">
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-turquoise bg-opacity-20 p-2 rounded-full">
                  <svg className="w-6 h-6 text-turquoise" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Yerli Üretim</h3>
                  <p className="text-gray-300">
                    Türkiye'de tasarlanan ve üretilen çözümlerle yerel ihtiyaçlara tam uyum sağlıyoruz.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-turquoise bg-opacity-20 p-2 rounded-full">
                  <svg className="w-6 h-6 text-turquoise" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Entegre Çözümler</h3>
                  <p className="text-gray-300">
                    Stok yönetimi, müşteri ilişkileri ve muhasebe sistemleriyle tam entegrasyon sağlıyoruz.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-turquoise bg-opacity-20 p-2 rounded-full">
                  <svg className="w-6 h-6 text-turquoise" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sürekli Güncelleme</h3>
                  <p className="text-gray-300">
                    Düzenli yazılım güncellemeleri ve teknik destekle değişen ihtiyaçlara uyum sağlıyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-5/12">
            <div className="relative">
              <div className="bg-white bg-opacity-10 p-1 rounded-lg">
                <img 
                  src="/images/payera-business-solution.png" 
                  alt="PayEra İş Çözümleri" 
                  className="rounded-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://via.placeholder.com/600x400/0088A9/FFFFFF?text=PayEra+İş+Çözümleri";
                  }}
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-turquoise bg-opacity-20 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-turquoise border-opacity-30 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Statistics Section
const StatisticsSection = () => {
  const stats = [
    { value: "10,000+", label: "Aktif Müşteri" },
    { value: "15+", label: "Yıllık Tecrübe" },
    { value: "99.9%", label: "Çalışma Süresi" },
    { value: "24/7", label: "Teknik Destek" }
  ];

  return (
    <section className="py-16 bg-turquoise text-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialInterval = useRef<NodeJS.Timeout | null>(null);

  const testimonials = [
    {
      quote: "PayEra'ya geçtikten sonra kasiyerlerimizin eğitim süresi yarıya indi. Kullanımı son derece kolay ve sezgisel bir arayüzü var.",
      name: "Ahmet Yılmaz",
      position: "Restoran Zinciri Sahibi",
      image: "/images/testimonial-1.jpg",
      fallbackImage: "/images/testimonial-default.jpg"
    },
    {
      quote: "Muhasebe entegrasyonu sayesinde ay sonu raporlamalarında yaşadığımız sorunlar tamamen ortadan kalktı. Zaman ve maliyetten büyük tasarruf sağlıyoruz.",
      name: "Zeynep Kaya",
      position: "Mali Müşavir",
      image: "/images/testimonial-2.jpg",
      fallbackImage: "/images/testimonial-default.jpg"
    },
    {
      quote: "Temassız ödeme özelliği ve hızlı işlem süresi sayesinde müşteri memnuniyetimiz %30 arttı. Teknik destek ekibi ise her zaman yanımızda.",
      name: "Mehmet Demir",
      position: "Market Sahibi",
      image: "/images/testimonial-3.jpg",
      fallbackImage: "/images/testimonial-default.jpg"
    }
  ];
  
  const startTestimonialCarousel = () => {
    testimonialInterval.current = setInterval(() => {
      setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);
  };

  useEffect(() => {
    startTestimonialCarousel();
    return () => {
      if (testimonialInterval.current) {
        clearInterval(testimonialInterval.current);
      }
    };
  }, []);

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
    if (testimonialInterval.current) {
      clearInterval(testimonialInterval.current);
    }
    startTestimonialCarousel();
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy mb-4">Müşterilerimiz Ne Diyor?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            İşletmelerin PayEra deneyimlerini keşfedin.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`bg-white p-8 rounded-lg shadow-md transition-opacity duration-500 ${
                  currentTestimonial === index ? 'block opacity-100' : 'hidden opacity-0'
                }`}
              >
                <div className="mb-6">
                  <svg className="w-10 h-10 text-turquoise opacity-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-700 mb-6 italic text-lg">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = testimonial.fallbackImage;
                    }}
                  />
                  <div>
                    <div className="font-bold text-navy">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Navigation Arrows */}
            <button 
              onClick={() => goToTestimonial(currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1)} 
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => goToTestimonial(currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1)} 
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Slide Indicators */}
          <div className="flex justify-center space-x-3 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index ? 'bg-turquoise w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Dealership CTA Section
const DealershipCTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="bg-navy rounded-2xl overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center text-white">
              <h2 className="text-3xl font-bold mb-6">PayEra Bayisi Olun</h2>
              <p className="text-gray-300 text-lg mb-8">
                Türkiye'nin hızla büyüyen yazarkasa POS markasının bayilik ailesine katılın. 
                Rekabetçi komisyon oranları, kapsamlı eğitim ve sürekli destek ile 
                kazançlı bir iş fırsatı sizleri bekliyor.
              </p>
              <div>
                <Link to="/bayilik" className="bg-turquoise hover:bg-turquoise-dark text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-block transform hover:scale-105">
                  Bayilik Koşulları
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 bg-gray-100">
              <img 
                src="/images/dealership.jpg" 
                alt="PayEra Bayilik" 
                className="h-full w-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "/images/dealership-default.jpg";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Newsletter Section
const NewsletterSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-navy mb-4">Güncel Kalmak İster misiniz?</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          PayEra'nın sunduğu yenilikler, özel fırsatlar ve sektördeki son gelişmelerden haberdar olmak için bültenimize abone olun.
        </p>
        <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-y-4 gap-x-3">
          <input 
            type="email" 
            placeholder="E-posta adresiniz" 
            className="flex-grow px-5 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-turquoise focus:border-transparent shadow-sm"
          />
          <button className="bg-turquoise hover:bg-turquoise-dark text-white font-bold py-4 px-8 rounded-lg transition duration-300 shadow-sm">
            Abone Ol
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-6">
          Kişisel verileriniz KVKK kapsamında korunmaktadır. İstediğiniz zaman abonelikten çıkabilirsiniz.
        </p>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <ProductsSection />
      <WhyChooseUsSection />
      <StatisticsSection />
      <TestimonialsSection />
      <DealershipCTA />
      <NewsletterSection />
    </>
  );
};

export default Home;