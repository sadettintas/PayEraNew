import { Link } from 'react-router-dom';

const Careers = () => {
  // Örnek avantajlar
  const benefits = [
    {
      title: "Yenilikçi Çalışma Ortamı",
      description: "Fintech sektöründe son teknolojilerle çalışarak kendini geliştirme fırsatı.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Profesyonel Gelişim",
      description: "Eğitim programları, konferanslar ve mentorluk ile kariyerinizde ilerleme imkanı.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "İş-Yaşam Dengesi",
      description: "Esnek çalışma saatleri, uzaktan çalışma imkanı ve çalışan refahını önemseyen politikalar.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Rekabetçi Ücret ve Yan Haklar",
      description: "Sektörde rekabetçi maaş, prim sistemi, özel sağlık sigortası ve sosyal olanaklar.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  // Örnek pozisyonlar
  const positions = [
    {
      title: "Yazılım Geliştirme Mühendisi",
      location: "İstanbul, Türkiye",
      type: "Tam Zamanlı",
      summary: "Yazarkasa POS sistemlerimizin yazılım geliştirme süreçlerinde görev alacak, Java ve/veya C# dillerinde deneyimli yazılım mühendisleri arıyoruz.",
      requirements: ["En az 3 yıl yazılım geliştirme deneyimi", "Java veya C# dillerinde uzmanlık", "SQL veritabanı yönetimi tecrübesi"]
    },
    {
      title: "Frontend Geliştirici",
      location: "İstanbul, Türkiye",
      type: "Tam Zamanlı",
      summary: "Müşteri panellerimiz ve web uygulamalarımız için modern arayüzler geliştirecek, React ve TypeScript konusunda deneyimli frontend geliştiriciler arıyoruz.",
      requirements: ["En az 2 yıl frontend geliştirme deneyimi", "React, TypeScript konularında deneyim", "Responsive tasarım prensipleri bilgisi"]
    },
    {
      title: "Ürün Müdürü",
      location: "İstanbul, Türkiye",
      type: "Tam Zamanlı",
      summary: "Yazarkasa POS ürün ailemizin stratejik yönetiminden sorumlu olacak, müşteri ihtiyaçlarını anlayan ve teknik ekiple iletişim kurabilen ürün müdürü arıyoruz.",
      requirements: ["En az 5 yıl ürün yönetimi deneyimi", "Fintech sektöründe tecrübe", "Analitik düşünme ve problem çözme becerileri"]
    },
    {
      title: "Teknik Destek Uzmanı",
      location: "İstanbul / Ankara / İzmir, Türkiye",
      type: "Tam Zamanlı",
      summary: "Müşterilerimize teknik destek sağlayacak, ürünlerimizi bilen ve müşteri odaklı yaklaşıma sahip teknik destek uzmanları arıyoruz.",
      requirements: ["Teknik destek veya müşteri hizmetleri deneyimi", "Problem çözme becerileri", "İletişim becerileri yüksek"]
    },
    {
      title: "Mobil Uygulama Geliştirici",
      location: "İstanbul, Türkiye",
      type: "Tam Zamanlı",
      summary: "iOS ve Android platformları için native uygulamalar geliştirecek, Swift ve Kotlin dillerinde deneyimli mobil uygulama geliştiricileri arıyoruz.",
      requirements: ["En az 2 yıl mobil uygulama geliştirme deneyimi", "Swift ve/veya Kotlin dillerinde deneyim", "UX prensipleri bilgisi"]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-primary text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 bg-primary-light opacity-20 w-96 h-96 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 bg-accent opacity-10 w-96 h-96 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kariyer Fırsatları</h1>
            <p className="text-xl text-white/90 mb-8">
              Geleceğin ödeme sistemlerini <strong>birlikte</strong> inşa edelim. PayEra'da yetenek ve tutkunuzu 
              kullanabileceğiniz bir kariyer sizi bekliyor.
            </p>
          </div>
        </div>
      </section>

      {/* Neden PayEra'da Çalışmalısınız? */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-heading mb-4">Neden PayEra'da Çalışmalısınız?</h2>
            <p className="text-lg text-text-body max-w-2xl mx-auto">
              PayEra'da çalışarak hem kariyer hedeflerinize ulaşabilir, hem de işinizden keyif alabilirsiniz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="hover-card"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-primary/5 inline-block p-4 rounded-full">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-text-heading mb-3 text-center">{benefit.title}</h3>
                <p className="text-text-body text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Açık Pozisyonlar */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-heading mb-4">Açık Pozisyonlar</h2>
            <p className="text-lg text-text-body max-w-2xl mx-auto">
              Yeteneklerinize uygun pozisyonları keşfedin ve PayEra ailesine katılın.
            </p>
          </div>

          <div className="space-y-6">
            {positions.map((position, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="md:flex md:justify-between md:items-center">
                  <div>
                    <h3 className="text-xl font-bold text-text-heading mb-2">{position.title}</h3>
                    <div className="flex flex-wrap items-center text-text-body mb-4">
                      <span className="flex items-center mr-4 mb-2 md:mb-0">
                        <svg className="w-4 h-4 mr-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {position.location}
                      </span>
                      <span className="flex items-center mb-2 md:mb-0">
                        <svg className="w-4 h-4 mr-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 space-x-3">
                    <button 
                      className="btn btn-primary"
                      aria-label={`${position.title} pozisyonu için başvuru yap`}
                    >
                      Başvur
                    </button>
                    <button 
                      className="btn btn-outline"
                      aria-label={`${position.title} pozisyonu detaylarını gör`}
                    >
                      Detay
                    </button>
                  </div>
                </div>
                
                <p className="text-text-body mt-4 mb-4">{position.summary}</p>
                
                <div className="mt-4">
                  <h4 className="font-semibold text-text-heading mb-2">Gereksinimler:</h4>
                  <ul className="list-disc pl-5 text-text-body space-y-1">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CV Submission CTA */}
      <section className="py-16 bg-primary text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 bg-primary-light opacity-20 w-96 h-96 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 bg-accent opacity-10 w-96 h-96 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-screen-xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">Uygun Pozisyon Bulamadınız mı?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Yeteneğinize uygun bir pozisyon listelenmiyor olsa bile CV'nizi bize gönderin. 
            Büyüyen ekibimiz için sürekli yeni fırsatlar oluşturuyoruz ve sizinle iletişime geçebiliriz.
          </p>
          <div className="inline-flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="mailto:kariyer@payera.com.tr" 
              className="btn btn-accent inline-flex items-center"
              aria-label="CV'nizi email ile gönderin"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              kariyer@payera.com.tr
            </a>
            <a 
              href="#" 
              className="btn btn-outline inline-flex items-center"
              aria-label="CV'nizi yükleyin"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              CV Yükle
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
