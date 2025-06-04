import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Hakkimizda = () => {
  useEffect(() => {
    console.log("Hakkimizda sayfası yüklendi");
    
    // Sayfa yükleme durumunu kontrol etmek için
    const loadCheck = setTimeout(() => {
      console.log("Sayfa yükleme tamamlandı");
    }, 2000);
    
    return () => clearTimeout(loadCheck);
  }, []);
  
  const values = [
    {
      title: "Müşteri Odaklılık",
      description: "İşletmelerin ihtiyaçlarını öncelikli kılar, müşteri memnuniyetini temel prensip olarak benimseriz.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Yenilikçilik",
      description: "Sürekli gelişim için yeni teknolojileri takip eder, sektöre öncülük eden yenilikçi çözümler geliştiririz.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Güvenilirlik",
      description: "Her zaman güvenilir çözümler sunmak ve verdiğimiz sözleri tutmak için çalışırız.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Kalite",
      description: "Her ürün ve hizmetimizde en yüksek kalite standartlarını sağlamak için titizlikle çalışırız.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  ];

  const team = [
    {
      name: "Ali Yılmaz",
      position: "CEO",
      bio: "Fintech sektöründe 20 yılı aşkın deneyimiyle PayEra'yı Türkiye'nin lider ödeme sistemleri sağlayıcısı konumuna getirdi.",
      image: "/images/chairman.jpg", // Path düzeltildi
      fallbackImage: "https://via.placeholder.com/200x200/0088A9/FFFFFF?text=AY",
      icon: "🚀"
    },
    {
      name: "Zeynep Kaya",
      position: "CTO",
      bio: "Yazılım mühendisliği alanında uzman olan Zeynep, PayEra'nın teknolojik altyapısının arkasındaki isim.",
      image: "/images/vice-chairman.jpg", // Path düzeltildi
      fallbackImage: "https://via.placeholder.com/200x200/0088A9/FFFFFF?text=ZK",
      icon: "💻"
    },
    {
      name: "Mehmet Demir",
      position: "Satış Direktörü",
      bio: "Satış ve pazarlama stratejileri konusunda uzman olan Mehmet, PayEra'nın büyüme stratejilerini yönetiyor.",
      image: "/images/team.jpg", // Path düzeltildi
      fallbackImage: "https://via.placeholder.com/200x200/0088A9/FFFFFF?text=MD",
      icon: "📈"
    },
    {
      name: "Ayşe Çelik",
      position: "Müşteri İlişkileri Direktörü",
      bio: "Müşteri deneyimi konusunda uzman olan Ayşe, PayEra'nın müşteri memnuniyetini en üst seviyede tutmak için çalışıyor.",
      image: "/images/about-us.jpg", // Path düzeltildi
      fallbackImage: "https://via.placeholder.com/200x200/0088A9/FFFFFF?text=AÇ",
      icon: "👥"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-primary-dark text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 bg-primary-light opacity-10 w-96 h-96 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 bg-accent opacity-10 w-96 h-96 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-screen-xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Hakkımızda</h1>
            <p className="text-xl text-white/90 mb-8">
              <strong>PayEra</strong>, işletmelerin <em>dijital dönüşümüne</em> öncülük eden yenilikçi yazarkasa POS çözümleri sunan 
              Türkiye'nin lider teknoloji şirketidir.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="bg-gray-100 p-1 rounded-lg hover:shadow-2xl transition-all duration-300">
                  <img 
                    src="/images/company-image.jpg" 
                    alt="PayEra Genel Merkez Ofisi ve Çalışanlar" 
                    className="rounded-lg w-full h-auto shadow-md"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "https://via.placeholder.com/600x400/0088A9/FFFFFF?text=PayEra+Ofisi";
                    }}
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary bg-opacity-20 rounded-full"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-primary border-opacity-30 rounded-lg"></div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-text-heading mb-6">Hikayemiz</h2>
              <p className="text-text-body mb-4">
                <strong>PayEra</strong>, 2008 yılında Türkiye'de modern ödeme sistemleri alanındaki boşluğu doldurmak amacıyla kuruldu. 
                Teknoloji tutkusu olan bir grup girişimci tarafından başlatılan bu yolculuk, bugün Türkiye'nin <em>önde gelen</em> yazarkasa POS sistemleri sağlayıcısı konumuna ulaştı.
              </p>
              <p className="text-text-body mb-4">
                Kurulduğumuz günden bu yana, işletmelerin ihtiyaçlarını anlamak ve bu ihtiyaçlara yönelik 
                çözümler geliştirmek için çalışıyoruz. Modern yazarkasa POS sistemlerimiz, <strong>kullanım kolaylığı</strong>, 
                <strong>dayanıklılık</strong> ve <strong>güvenilirlik</strong> ilkeleri çerçevesinde tasarlanmaktadır.
              </p>
              <p className="text-text-body">
                Bugün, Türkiye genelinde <strong>10.000'den fazla işletme</strong> PayEra çözümlerini kullanmaktadır. 
                Hedefimiz, yenilikçi teknolojilerimizle işletmelerin dijital dönüşümüne öncülük ederek 
                global bir teknoloji markası haline gelmektir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-light">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-heading mb-4">Değerlerimiz</h2>
            <p className="text-lg text-text-body max-w-2xl mx-auto">
              PayEra olarak her kararımızı ve eylemimizi <em>şekillendiren temel değerlerimiz</em>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="hover-card text-center"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-text-heading mb-2">{value.title}</h3>
                <p className="text-text-body">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kurucu Mesajı - Founder's Message */}
      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Left Column - Image */}
              <div className="md:w-1/3 relative">
                <img 
                  src="/images/chairman.jpg" 
                  alt="Ahmet Yılmaz - Yönetim Kurulu Başkanı" 
                  className="w-full h-full object-cover md:min-h-[500px]"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://via.placeholder.com/400x600/0088A9/FFFFFF?text=Nurullah+Türk";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">Ahmet Yılmaz</h3>
                  <p className="text-white/90">Yönetim Kurulu Başkanı</p>
                </div>
              </div>
              
              {/* Right Column - Quote */}
              <div className="md:w-2/3 p-8 md:p-12 flex items-center bg-bg-light">
                <blockquote className="relative">
                  <div className="text-6xl text-primary absolute -top-8 -left-6 opacity-20">"</div>
                  <p className="text-text-body text-lg leading-relaxed mb-6 relative z-10">
                    "PayEra'yı kurarken amacımız yalnızca bir teknoloji ürünü geliştirmek değil; ödeme sistemleri alanında sektöre yön verecek sürdürülebilir bir kültür ve güçlü bir vizyon oluşturmaktı. Kurulduğumuz günden bu yana, müşteri memnuniyetini ve kullanıcı deneyimini merkeze alan çözümlerimizle yüzlerce işletmeye dokunduk ve dokunmaya devam ediyoruz. Gelişimin yalnızca teknolojiyle değil; o teknolojiyi şekillendiren doğru insanlarla, iş birliği ve güven ortamlarıyla tam güç dönüşüm yaratacağına inanıyoruz. Biz teknolojiyi, insana hizmet ettiğinde anlamlı kılan bir güç olarak görüyoruz. Bu anlayışla, inovasyondan ödün vermeden, etik değerlere sadık kalarak ve her zaman daha iyisini hedefleyerek ilerlemeyi sürdürüyoruz."
                  </p>
                  <footer className="text-right font-semibold text-text-heading">
                    <strong>— Nurullah Türk</strong>, Yönetim Kurulu Başkanı
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yolculuğumuz - Simplified */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-text-heading mb-4">Yolculuğumuz</h2>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-text-body leading-relaxed">
              <strong className="text-primary">PayEra</strong>, 2008 yılındaki kuruluşundan bu yana ödeme sistemleri sektöründe pek çok ilki hayata geçirmiştir. Türkiye'nin ilk yazarkasa POS sisteminden, yapay zeka destekli çözümlere uzanan bu yolculuk, yenilikçilik ve sürdürülebilir büyüme odağıyla şekillenmektedir.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-heading mb-4">Yönetim Ekibimiz</h2>
            <p className="text-lg text-text-body max-w-2xl mx-auto">
              PayEra'yı başarıya taşıyan <strong>liderlerimiz</strong> ve <em>vizyonları</em>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:translate-y-[-10px] transition-all duration-300 group"
              >
                {/* Image with overlay effect */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.position} Fotoğrafı`}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = member.fallbackImage;
                    }}
                  />
                  <div className="absolute inset-0 bg-primary-dark opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  
                  {/* Icon badge */}
                  <div className="absolute top-4 right-4 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <span>{member.icon}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-heading mb-1 group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                  <p className="text-primary mb-3">{member.position}</p>
                  <p className="text-text-body text-sm line-clamp-3">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kariyer CTA */}
      <section className="py-16 bg-primary-dark text-white">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ekibimize Katılın</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            PayEra olarak büyümeye devam ediyoruz. Yenilikçi teknolojilere ilgi duyan, tutkulu ve yaratıcı bireyler arıyoruz.
          </p>
          <Link 
            to="/kariyer" 
            className="btn btn-accent"
            aria-label="Kariyer fırsatlarını görüntüle"
          >
            Kariyer Fırsatları
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hakkimizda;
