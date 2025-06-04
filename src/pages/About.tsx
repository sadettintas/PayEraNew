const About = () => {
  const values = [
    {
      title: "Yenilikçilik",
      description: "Sektördeki yenilikleri takip eder, teknolojiyi işletmelerin hizmetine sunarız.",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Güvenilirlik",
      description: "Satış sonrası hizmetlerimiz ve ürünlerimizle her zaman işletmelerin yanındayız.",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Müşteri Odaklılık",
      description: "Müşterilerimizin ihtiyaçlarını en iyi şekilde anlar ve karşılarız.",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Kalite",
      description: "Ürünlerimizde ve hizmetlerimizde en yüksek kalite standartlarını gözetiriz.",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    }
  ];

  const teamMembers = [
    {
      name: "Ahmet Yılmaz",
      position: "Kurucu & CEO",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Ayşe Kaya",
      position: "CTO",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      name: "Mehmet Demir",
      position: "Satış Direktörü",
      image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      name: "Zeynep Şahin",
      position: "Ürün Yöneticisi",
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 bg-primary-light opacity-20 w-96 h-96 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 bg-accent opacity-10 w-96 h-96 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-screen-xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hakkımızda</h1>
          <p className="text-xl max-w-3xl mx-auto">
            PayEra olarak, Türkiye'nin dijital dönüşümüne öncülük ediyoruz. İşletmelere 
            sunduğumuz yenilikçi yazarkasa POS çözümleriyle iş süreçlerini kolaylaştırıyoruz.
          </p>
        </div>
      </section>
      
      {/* Company Story */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-2xl font-bold text-text-heading mb-6">Şirket Hikayemiz</h2>
              <p className="mb-4 text-text-body">
                PayEra, 2015 yılında Türkiye'nin finansal teknoloji alanındaki boşluğu doldurmak 
                amacıyla kuruldu. Yazılım ve donanım konusunda uzman bir ekip tarafından temelleri 
                atılan şirketimiz, kısa sürede sektörün önemli oyuncularından biri haline geldi.
              </p>
              <p className="mb-4 text-text-body">
                Kurulduğumuzdan bu yana, işletmelerin ihtiyaçlarını anlamaya odaklanarak, kullanım
                kolaylığı ve teknolojik üstünlüğü bir araya getiren ürünler geliştiriyoruz. Yerli mühendislerimiz 
                tarafından geliştirilen yazarkasa POS cihazlarımız, Türkiye genelinde binlerce işletmede kullanılmaktadır.
              </p>
              <p className="mb-4 text-text-body">
                Bugün 150'den fazla çalışanımız, 200'den fazla bayimiz ve 25.000'in üzerinde aktif 
                cihazımızla Türkiye'nin dört bir yanında hizmet vermeye devam ediyoruz.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="images/team.png" 
                alt="PayEra Ekibi" 
                className="rounded-xl shadow-lg max-w-full hover:shadow-xl transition-all duration-300"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/500x400/FFFFFF/0088A9?text=PayEra+Ekibi';
                }}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision, Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-8 border-b md:border-b-0 md:border-r border-gray-200 hover-card">
              <div className="flex justify-center mb-4">
                <div className="bg-primary rounded-full p-3">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
              <h2 className="text-xl font-bold text-text-heading mb-4 text-center">Vizyonumuz</h2>
              <p className="text-text-body text-center">
                Türkiye'nin ödeme sistemleri alanında lider teknoloji geliştiricisi olmak ve 
                yenilikçi ürünlerle işletmelere rekabet avantajı sağlayarak iş hayatını 
                kolaylaştırmak. İşletmelerin dijital dönüşümüne öncülük ederek, finansal 
                teknolojiler alanında uluslararası standartlara uygun ürünler geliştirmeye 
                devam edeceğiz.
              </p>
            </div>
            <div className="p-8 hover-card">
              <div className="flex justify-center mb-4">
                <div className="bg-primary rounded-full p-3">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <h2 className="text-xl font-bold text-text-heading mb-4 text-center">Misyonumuz</h2>
              <p className="text-text-body text-center">
                İşletmelerin ödeme süreçlerini kolaylaştıran, güvenli, hızlı ve kullanımı 
                kolay, satış ve stok takibini etkinleştiren yazarkasa POS çözümleri sunmak. 
                Müşterilerimize ihtiyaçlarını her zaman ön planda tutarak, yenilikçi 
                başarıları destekleyecek teknolojik çözümler geliştirmek ve sürekli 
                yenilikçi yaklaşımlarla sektörde fark yaratmak.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-20 bg-bg-alt">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-text-heading mb-10 text-center">Değerlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="hover-card">
              <h3 className="text-xl font-bold text-text-heading mb-3">Müşteri Odaklılık</h3>
              <p className="text-text-body">
                Müşterilerimizin ihtiyaçlarını anlamak ve onlara en iyi çözümleri sunmak için çalışıyoruz. 
                Kullanıcı deneyimini her zaman ön planda tutuyoruz.
              </p>
            </div>
            <div className="hover-card">
              <h3 className="text-xl font-bold text-text-heading mb-3">Yenilikçilik</h3>
              <p className="text-text-body">
                Sürekli olarak yeni fikirler ve teknolojiler geliştirerek sektörde öncü olmaya devam 
                ediyoruz. Ar-Ge çalışmalarımız ile geleceğin çözümlerini bugünden tasarlıyoruz.
              </p>
            </div>
            <div className="hover-card">
              <h3 className="text-xl font-bold text-text-heading mb-3">Kalite</h3>
              <p className="text-text-body">
                Ürünlerimizin ve hizmetlerimizin her aşamasında en yüksek kalite standartlarını 
                uyguluyoruz. Sürekli iyileştirme prensibimizle her gün daha iyisini hedefliyoruz.
              </p>
            </div>
            <div className="hover-card">
              <h3 className="text-xl font-bold text-text-heading mb-3">Güvenilirlik</h3>
              <p className="text-text-body">
                Finansal işlemlerin güvenliği konusunda taviz vermiyoruz. En güçlü güvenlik protokollerini 
                uygulayarak müşterilerimizin bilgilerini koruyoruz.
              </p>
            </div>
            <div className="hover-card">
              <h3 className="text-xl font-bold text-text-heading mb-3">Sürdürülebilirlik</h3>
              <p className="text-text-body">
                Çevresel ve toplumsal sorumluluklarımızın farkındayız. Ürünlerimiz ve iş süreçlerimiz 
                sürdürülebilirlik ilkesiyle tasarlanıyor.
              </p>
            </div>
            <div className="hover-card">
              <h3 className="text-xl font-bold text-text-heading mb-3">Takım Çalışması</h3>
              <p className="text-text-body">
                Başarıya giden yolun işbirliğinden geçtiğine inanıyoruz. Farklı uzmanlık alanlarındaki 
                ekiplerimiz ortak hedefler doğrultusunda birlikte çalışıyor.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-text-heading mb-10 text-center">Ekibimiz</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="hover-card overflow-hidden group">
                <img 
                  src="images/team-member.png" 
                  alt={member.name} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/300x200/FFFFFF/001F3F?text=${encodeURIComponent(member.name)}`;
                  }}
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-text-heading">{member.name}</h3>
                  <p className="text-text-body text-sm">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Team CTA */}
      <section className="py-16 bg-primary text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 bg-primary-light opacity-20 w-96 h-96 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 bg-accent opacity-10 w-96 h-96 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-screen-xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">Ekibimize Katılın</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            PayEra ailesinin bir parçası olun ve birlikte büyüyelim. Kariyer fırsatlarımızı keşfedin.
          </p>
          <a 
            href="#" 
            className="btn btn-accent inline-block"
          >
            Kariyer Fırsatları
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
