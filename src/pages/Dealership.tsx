import { useState, useEffect, useRef } from 'react';
import ContactForm from '../components/common/ContactForm';

const Dealership = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const benefitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (benefitsRef.current) {
      observer.observe(benefitsRef.current);
    }

    return () => {
      if (benefitsRef.current) {
        observer.unobserve(benefitsRef.current);
      }
    };
  }, []);

  const benefits = [
    {
      title: "Yüksek Kar Marjı",
      description: "PayEra bayileri, sektör ortalamasının üzerinde kar marjı ile çalışır. Rekabetçi fiyatlandırma politikamız ile kazancınızı maksimize ederiz.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Satış ve Teknik Eğitim",
      description: "Ürünlerimizi en iyi şekilde tanıtmanız ve teknik destek sağlamanız için düzenli eğitimler düzenliyoruz. Bayi ve çalışanlarınız için sürekli gelişim fırsatı.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Pazarlama Desteği",
      description: "Broşür, katalog, numune ürün, demo cihazlar ve dijital pazarlama materyalleri ile satışlarınızı destekliyoruz. Müşteri kazanmanız için gerekli tüm araçları sağlıyoruz.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      )
    },
    {
      title: "Bölge Koruması",
      description: "Belirli bir bölgede sadece size özel bayilik hakkı tanıyarak, haksız rekabeti önlüyor ve pazarınızı koruyoruz.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Hızlı Teslimat",
      description: "Lojistik ağımız sayesinde siparişlerinizi en hızlı şekilde teslim ediyor, iş akışınızın kesintiye uğramamasını sağlıyoruz.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Teknik Destek",
      description: "7/24 teknik destek ekibimiz ile ürünlerimiz hakkında yaşanan sorunlarda hızlı çözüm sunuyoruz. Müşterilerinize kesintisiz hizmet verebilirsiniz.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  const faqs = [
    {
      question: "PayEra bayiliği için hangi şartlar gerekiyor?",
      answer: "PayEra bayiliği için ticari sicile kayıtlı bir firma sahibi olmanız, uygun bir iş yeri konumuna sahip olmanız ve minimum stok alım miktarını karşılayabilmeniz gerekmektedir. Ayrıca, sektörde deneyim sahibi olmanız bir avantaj olacaktır."
    },
    {
      question: "Bayilik için ne kadar yatırım gerekiyor?",
      answer: "Bayilik için gereken yatırım miktarı, bulunduğunuz bölgeye ve seçtiğiniz bayilik paketine göre değişiklik gösterebilir. Genel olarak 50.000 TL ile 150.000 TL arasında bir yatırım gerekmektedir. Detaylı bilgi için bizimle iletişime geçebilirsiniz."
    },
    {
      question: "Ürünler için garanti süresi ne kadar?",
      answer: "Tüm PayEra ürünleri 2 yıl resmi garanti kapsamındadır. Ayrıca, opsiyonel olarak sunduğumuz garanti uzatma paketleri ile bu süreyi 5 yıla kadar çıkarabilirsiniz."
    },
    {
      question: "Satış sonrası teknik destek nasıl sağlanıyor?",
      answer: "PayEra olarak 7/24 çalışan bir teknik destek ekibimiz bulunmaktadır. Bayilerimiz ve son kullanıcılar için telefon, e-posta ve uzaktan erişim yöntemleri ile teknik destek sağlıyoruz. Ayrıca, bayilerimize özel bir portal üzerinden teknik dökümantasyona erişim imkanı sunuyoruz."
    },
    {
      question: "Bayi eğitimleri ne sıklıkla düzenleniyor?",
      answer: "Her yeni ürün lansmanı öncesinde ve yılda en az 2 kez düzenli olarak bayi eğitimleri düzenliyoruz. Bu eğitimler satış teknikleri, ürün özellikleri ve teknik servis konularını kapsamaktadır. Eğitimler hem online hem de yüz yüze olarak gerçekleştirilmektedir."
    }
  ];

  const testimonials = [
    {
      text: "PayEra bayiliği sayesinde işletmemiz büyük bir ivme kazandı. Ürün yelpazesindeki çeşitlilik ve teknik desteğin kalitesi sayesinde müşterilerimize her zaman en iyi hizmeti sunabiliyoruz.",
      author: "Ahmet Yıldız",
      position: "Bayi Sahibi",
      company: "Teknoloji Market",
      rating: 5,
      image: "/images/testimonial-default.jpg",
    },
    {
      text: "PayEra'nın sağladığı pazarlama desteği ile marka bilinirliğimizi artırdık. Bölge koruma politikaları sayesinde pazar payımızı sürekli büyütüyoruz.",
      author: "Ayşe Kaya",
      position: "Genel Müdür",
      company: "Kaya Elektronik",
      rating: 5,
      image: "/images/testimonial-default.jpg",
    },
    {
      text: "Bayilik sürecinin başından itibaren PayEra ekibi her konuda destek oldu. Eğitimler ve teknik destek sayesinde ürünlere hakim olup müşterilerimize doğru çözümler sunabiliyoruz.",
      author: "Mehmet Demir",
      position: "İşletme Sahibi",
      company: "Demir Teknoloji",
      rating: 5,
      image: "/images/testimonial-default.jpg",
    },
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
    <>
      {/* Hero Section with animated background */}
      <div className="relative py-24 overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-white opacity-5 rounded-full animate-float"></div>
          <div className="absolute top-40 right-10 w-40 h-40 bg-accent opacity-10 rounded-full animate-pulse animation-delay-200"></div>
          <div className="absolute bottom-40 left-20 w-60 h-60 bg-accent opacity-5 rounded-full animate-float animation-delay-400"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fadeIn">
              PayEra Bayilik Fırsatı
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white/90 animate-fadeIn animation-delay-200">
              Türkiye'nin dört bir yanına yayılan bayi ağımıza katılın, 
              teknoloji sektöründe kazançlı bir iş ortaklığının parçası olun.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn animation-delay-400">
              <button 
                onClick={() => {
                  document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-accent text-lg"
              >
                Hemen Başvur
              </button>
              <button 
                onClick={() => {
                  document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-outline border-white text-white hover:bg-white/20 text-lg"
              >
                Avantajları Keşfet
              </button>
            </div>
          </div>
        </div>
        
        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="w-full h-auto" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L40 9.52381C80 19.0476 160 38.0952 240 42.8571C320 47.619 400 38.0952 480 33.3333C560 28.5714 640 28.5714 720 33.3333C800 38.0952 880 47.619 960 47.619C1040 47.619 1120 38.0952 1200 23.8095C1280 9.52381 1360 0 1400 0H1440V100H1400C1360 100 1280 100 1200 100C1120 100 1040 100 960 100C880 100 800 100 720 100C640 100 560 100 480 100C400 100 320 100 240 100C160 100 80 100 40 100H0V0Z" fill="white"/>
          </svg>
        </div>
      </div>
      
      {/* Benefits Section with animations */}
      <div id="benefits" className="py-20 bg-white" ref={benefitsRef}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-sm font-semibold text-primary mb-3">
              Neden PayEra Bayisi Olmalısınız?
            </span>
            <h2 className="text-4xl font-bold mb-4 text-text-heading">Bayilik Avantajları</h2>
            <p className="text-text-body max-w-2xl mx-auto">
              PayEra bayilerine sunduğumuz kapsamlı destek ile iş ortaklarımızın başarısını ve karlılığını maksimize ediyoruz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`bg-white p-6 rounded-xl shadow-md transition-all duration-500 transform hover:shadow-lg hover:scale-105 border-t-4 border-primary ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4 bg-primary/10 p-3 rounded-full">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-text-heading">{benefit.title}</h3>
                </div>
                <p className="text-text-body">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-bg-light">
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
              Bayi Görüşleri
            </span>
            <h2 className="text-4xl font-bold mb-4 text-text-heading">Başarı Hikayeleri</h2>
            <p className="text-text-body max-w-2xl mx-auto">
              PayEra bayi ağının değerli üyeleri, deneyimlerini sizlerle paylaşıyor. 
              Binlerce başarılı iş ortağımız gibi siz de PayEra ailesine katılabilirsiniz.
            </p>
          </div>
          
          <div className="relative">
            {/* Testimonial Cards */}
            <div className="overflow-hidden">
              <div 
                className="transition-all duration-500 ease-in-out transform"
                style={{ transform: `translateX(-${activeIndex * 100}%)`, display: 'flex' }}
              >
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="min-w-full px-4"
                  >
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 relative z-20">
                      <div className="mb-6">
                        {renderStars(testimonial.rating)}
                      </div>
                      
                      <p className="text-lg md:text-xl text-text-heading italic mb-8">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="flex items-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-primary">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "/images/testimonial-default.jpg";
                            }}
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-text-heading">{testimonial.author}</h4>
                          <p className="text-sm text-text-body">{testimonial.position}, {testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'bg-primary w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Application Steps */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-sm font-semibold text-primary mb-3">
              Nasıl Bayi Olunur?
            </span>
            <h2 className="text-4xl font-bold mb-4 text-text-heading">Bayilik Süreci</h2>
            <p className="text-text-body max-w-2xl mx-auto">
              PayEra bayisi olmak için izlemeniz gereken adımlar aşağıda belirtilmiştir.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute top-0 left-6 h-full border-l-2 border-dashed border-primary lg:block hidden"></div>
              <div className="bg-white rounded-xl shadow-md p-6 relative z-10">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
                <h3 className="text-xl font-bold text-text-heading mb-3">Başvuru</h3>
                <p className="text-text-body">Form ile başvurunuzu iletin ve bayilik şartları hakkında bilgi alın.</p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative">
              <div className="absolute top-0 left-6 h-full border-l-2 border-dashed border-primary lg:block hidden"></div>
              <div className="bg-white rounded-xl shadow-md p-6 relative z-10">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
                <h3 className="text-xl font-bold text-text-heading mb-3">Görüşme</h3>
                <p className="text-text-body">Uzman ekibimiz sizinle iletişime geçecek ve detaylı bilgi verecektir.</p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative">
              <div className="absolute top-0 left-6 h-full border-l-2 border-dashed border-primary lg:block hidden"></div>
              <div className="bg-white rounded-xl shadow-md p-6 relative z-10">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
                <h3 className="text-xl font-bold text-text-heading mb-3">Anlaşma</h3>
                <p className="text-text-body">Bayilik anlaşmasının imzalanması ve resmi süreçlerin tamamlanması.</p>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-md p-6 relative z-10">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">4</div>
                <h3 className="text-xl font-bold text-text-heading mb-3">Eğitim & Başlangıç</h3>
                <p className="text-text-body">Kapsamlı eğitim programlarıyla bayilik sürecinize başlayın.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Application Form with improved styling */}
      <div id="application-form" className="py-20 bg-bg-light">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Left Column - Image and Text */}
                <div className="bg-primary p-10 text-white flex flex-col justify-between">
                  <div>
                    <h2 className="text-3xl font-bold mb-6">PayEra Ailesine Katılın</h2>
                    <p className="mb-8">
                      Teknoloji sektöründe öncü konumda olan PayEra'nın ayrıcalıklı bayi ağının bir parçası olun. 
                      Yüksek kar marjı, kapsamlı destek ve güçlü bir marka ile işinizi büyütün.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center">
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Rekabetçi fiyatlandırma politikası</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Kapsamlı satış ve teknik eğitimler</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>7/24 teknik destek hizmeti</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Bölge koruma politikası</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="hidden md:block">
                    <img src="/images/dealership.jpg" alt="PayEra Bayilik" className="rounded-lg shadow-md"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/images/dealership-default.jpg";
                      }}
                    />
                  </div>
                </div>
                
                {/* Right Column - Form */}
                <div className="p-6 md:p-10">
                  <ContactForm
                    title="Bayilik Başvuru Formu"
                    description="PayEra ailesine katılmak ve bayilik fırsatlarından yararlanmak için aşağıdaki formu doldurun. Ekibimiz en kısa sürede sizinle iletişime geçecektir."
                    fields={[
                      {
                        id: "nameSurname",
                        label: "Ad Soyad",
                        type: "text",
                        placeholder: "Adınız ve soyadınız",
                        required: true
                      },
                      {
                        id: "email",
                        label: "E-posta",
                        type: "email",
                        placeholder: "E-posta adresiniz",
                        required: true
                      },
                      {
                        id: "phone",
                        label: "Telefon",
                        type: "tel",
                        placeholder: "Telefon numaranız",
                        required: true
                      },
                      {
                        id: "city",
                        label: "Şehir",
                        type: "select",
                        required: true,
                        options: [
                          { value: "İstanbul", label: "İstanbul" },
                          { value: "Ankara", label: "Ankara" },
                          { value: "İzmir", label: "İzmir" },
                          { value: "Bursa", label: "Bursa" },
                          { value: "Antalya", label: "Antalya" },
                          { value: "Adana", label: "Adana" },
                          { value: "Diğer", label: "Diğer" }
                        ]
                      },
                      {
                        id: "companyName",
                        label: "Şirket Adı (Varsa)",
                        type: "text",
                        placeholder: "Şirketinizin adı"
                      },
                      {
                        id: "message",
                        label: "Mesajınız",
                        type: "textarea",
                        placeholder: "Lütfen kendiniz, iş tecrübeniz ve neden PayEra bayisi olmak istediğiniz hakkında kısa bir bilgi verin.",
                        required: true
                      }
                    ]}
                    submitButtonText="Başvuruyu Gönder"
                    successMessage="Bayilik başvurunuz başarıyla alındı. Ekibimiz en kısa sürede sizinle iletişime geçecektir."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Accordion */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-sm font-semibold text-primary mb-3">
              Merak Edilenler
            </span>
            <h2 className="text-4xl font-bold mb-4 text-text-heading">Sıkça Sorulan Sorular</h2>
            <p className="text-text-body max-w-2xl mx-auto">
              PayEra bayiliği hakkında merak edilen soruların cevaplarını buradan bulabilirsiniz.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <details 
                  key={index} 
                  className="group bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <summary className="flex justify-between items-center p-6 cursor-pointer focus:outline-none">
                    <h3 className="text-lg font-bold text-text-heading">{faq.question}</h3>
                    <span className="ml-6 flex-shrink-0 text-primary">
                      <svg 
                        className="w-6 h-6 transform group-open:rotate-180 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-text-body">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA with gradient background */}
      <div className="relative py-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white opacity-10 rounded-full animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white opacity-5 rounded-full animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Kazançlı Bir İş Fırsatı Sizi Bekliyor</h2>
            <p className="text-xl mb-10 text-white font-medium">
              Teknoloji sektöründe kazançlı bir iş kurmak ve PayEra'nın güçlü bayi ağının 
              bir parçası olmak için hemen başvurun. Uzman ekibimiz sizinle en kısa sürede iletişime geçecektir.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => {
                  document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-accent text-lg font-bold shadow-lg hover:shadow-xl"
              >
                Hemen Başvur
              </button>
              <a 
                href="tel:+902123456789" 
                className="btn btn-outline border-2 border-white text-white hover:bg-white/30 text-lg font-bold shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Bizi Arayın
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dealership;
