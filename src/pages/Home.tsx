import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import Image from '../components/common/Image';
import { getImageUrl } from '../utils/imageLoader';

// Hero Section with Animated Carousel
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // ReturnType<typeof setInterval> ile doğru türü belirtiyoruz
  const slideInterval = useRef<ReturnType<typeof setInterval> | null>(null);

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
            <Image 
              src={getImageUrl(slides[currentSlide].image)} 
              alt={slides[currentSlide].title} 
              className="mx-auto max-w-[320px] w-80 object-contain rounded-xl shadow-xl border border-white/10"
              fallback={getImageUrl(slides[currentSlide].fallbackImage)}
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

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 bg-primary-light opacity-20 w-96 h-96 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 bg-accent opacity-10 w-96 h-96 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
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
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Kolay Kullanım",
      description: "Sezgisel arayüz ile karmaşık işlemleri basitleştirin",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Güvenli Ödeme",
      description: "En son güvenlik protokolleri ile korunan işlemler",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Çoklu Ödeme",
      description: "Tüm ödeme yöntemlerini tek cihazda toplayın",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      title: "Anlık Raporlar",
      description: "İşletmenizin performansını gerçek zamanlı takip edin",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "7/24 Destek",
      description: "Teknik ekibimiz her zaman yanınızda",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-bg-light">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text-heading mb-6">PayEra Avantajları</h2>
          <p className="text-lg text-text-body max-w-2xl mx-auto">
            Modern yazarkasa POS sistemleri ile işletmenize değer katacak çözümler sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="hover-card group"
            >
              <div className="mb-6 bg-primary/5 inline-block p-4 rounded-full">
                <div className="text-3xl text-primary group-hover:text-primary-dark transition-colors">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-text-heading mb-3">{feature.title}</h3>
              <p className="text-text-body">{feature.description}</p>
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
      fallbackImage: "/images/product-x10.png"
    },
    {
      name: "PayEra S20",
      description: "Orta ölçekli işletmeler için tam donanımlı model",
      features: ["Geniş Dokunmatik Ekran", "Hızlı İşlemci", "Gelişmiş Bağlantı Seçenekleri", "Stok Takip Modülü"],
      image: "/images/product-s20.png",
      fallbackImage: "/images/product-s20.png"
    },
    {
      name: "PayEra Pro 30",
      description: "Yoğun kullanım için profesyonel çözüm",
      features: ["Çift Ekran Desteği", "Yüksek Performans", "Gelişmiş Raporlama", "Tam ERP Entegrasyonu"],
      image: "/images/product-pro30.png",
      fallbackImage: "/images/product-pro30.png"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text-heading mb-6">Ürün Ailemiz</h2>
          <p className="text-lg text-text-body max-w-2xl mx-auto">
            Her ihtiyaca uygun yazarkasa POS çözümlerimizle tanışın.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="hover-card group overflow-hidden flex flex-col"
            >
              <div className="h-48 bg-primary flex items-center justify-center p-4 rounded-t-lg -mx-6 -mt-6 mb-6">
                <Image 
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-[260px] object-contain transform group-hover:scale-105 transition-transform duration-300"
                  fallback={product.fallbackImage}
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-text-heading mb-3">{product.name}</h3>
                <p className="text-text-body mb-4">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-text-body">
                      <svg className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <Link to={`/urunler/${product.name.toLowerCase().replace(/\s+/g, '-')}`} className="btn btn-primary block text-center">
                  Detaylı Bilgi
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/urunler" className="inline-flex items-center text-primary hover:text-primary-dark font-semibold transition duration-300 group">
            Tüm Ürünlerimizi Görüntüleyin
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 bg-primary-light opacity-20 w-96 h-96 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 bg-accent opacity-10 w-96 h-96 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-screen-xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-8">Neden PayEra?</h2>
            <p className="text-lg text-white/90 mb-10 leading-relaxed">
              PayEra, yalnızca bir yazarkasa POS sistemi değil, işletmeniz için 
              tam kapsamlı bir iş çözümü sunuyor. Müşteri memnuniyetini artırırken, 
              operasyonel verimlilik sağlıyor.
            </p>
            
            <div className="space-y-8 px-2">
              <div className="flex items-start group">
                <div className="mr-5 mt-1 bg-white/10 p-3 rounded-full transition-all duration-300 group-hover:bg-white/20">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Yerli Üretim</h3>
                  <p className="text-white/80 leading-relaxed">
                    Türkiye'de tasarlanan ve üretilen çözümlerle yerel ihtiyaçlara tam uyum sağlıyoruz.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="mr-5 mt-1 bg-white/10 p-3 rounded-full transition-all duration-300 group-hover:bg-white/20">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Entegre Çözümler</h3>
                  <p className="text-white/80 leading-relaxed">
                    Stok yönetimi, müşteri ilişkileri ve muhasebe sistemleriyle tam entegrasyon sağlıyoruz.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="mr-5 mt-1 bg-white/10 p-3 rounded-full transition-all duration-300 group-hover:bg-white/20">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Sürekli Güncelleme</h3>
                  <p className="text-white/80 leading-relaxed">
                    Düzenli yazılım güncellemeleri ve teknik destekle değişen ihtiyaçlara uyum sağlıyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-5/12">
            <div className="relative">
              <div className="bg-white/10 p-2 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-500">
                <Image 
                  src="/images/payera-business-solution.png" 
                  alt="PayEra İş Çözümleri" 
                  className="rounded-lg w-full max-w-[320px] mx-auto md:max-w-full"
                  fallback="/images/payera-business-solution.png"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-28 h-28 bg-accent bg-opacity-20 rounded-full"></div>
              <div className="absolute -bottom-8 -right-8 w-36 h-36 border-4 border-white/20 rounded-xl"></div>
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
    <section className="py-16 bg-primary text-white">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-3">{stat.value}</div>
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
  const testimonialInterval = useRef<ReturnType<typeof setInterval> | null>(null);

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
    <section className="py-24 bg-bg-light">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text-heading mb-6">Müşterilerimiz Ne Diyor?</h2>
          <p className="text-lg text-text-body max-w-2xl mx-auto">
            İşletmelerin PayEra deneyimlerini keşfedin.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`hover-card transition-opacity duration-500 ${
                  currentTestimonial === index ? 'block opacity-100' : 'hidden opacity-0'
                }`}
              >
                <div className="mb-6">
                  <svg className="w-10 h-10 text-primary opacity-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-text-body mb-8 italic text-lg leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full mr-4 object-cover shadow-md"
                    fallback={testimonial.fallbackImage}
                  />
                  <div>
                    <div className="font-bold text-text-heading">{testimonial.name}</div>
                    <div className="text-text-body text-sm">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Navigation Arrows */}
            <button 
              onClick={() => goToTestimonial(currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1)} 
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white rounded-full p-3 shadow-lg hover:bg-primary hover:text-white focus:outline-none transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => goToTestimonial(currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1)} 
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white rounded-full p-3 shadow-lg hover:bg-primary hover:text-white focus:outline-none transition-all duration-300"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Slide Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-primary/50'
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
    <section className="py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="bg-primary rounded-xl overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center text-white">
              <h2 className="text-3xl font-bold mb-8">PayEra Bayisi Olun</h2>
              <p className="text-white/90 text-lg mb-10 leading-relaxed">
                Türkiye'nin hızla büyüyen yazarkasa POS markasının bayilik ailesine katılın. 
                Rekabetçi komisyon oranları, kapsamlı eğitim ve sürekli destek ile 
                kazançlı bir iş fırsatı sizleri bekliyor.
              </p>
              <div>
                <Link to="/bayilik" className="btn btn-accent inline-block shadow-lg hover:scale-105">
                  Bayilik Koşulları
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 bg-bg-light">
              <Image 
                src="/images/dealership.jpg" 
                alt="PayEra Bayilik" 
                className="h-full w-full object-cover"
                fallback="/images/dealership-default.jpg"
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