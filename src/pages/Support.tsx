import { useState } from 'react';
import { Link } from 'react-router-dom';

const Support = () => {
  // FAQ için açılır/kapanır durum yönetimi
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Yazarkasa POS cihazımı nasıl aktifleştirebilirim?",
      answer: "Cihazınızı aktifleştirmek için öncelikle satın aldığınız bayinizle iletişime geçmelisiniz. Bayiniz, cihazınızın kurulumu ve aktivasyonu için gerekli işlemleri yapacaktır. Bu süreçte mali onay için gerekli belgelerin tamamlanması gerekmektedir. Aktivasyon işlemi tamamlandıktan sonra cihazınızı kullanmaya başlayabilirsiniz."
    },
    {
      question: "Cihazımın yazılımını nasıl güncelleyebilirim?",
      answer: "PayEra cihazları otomatik güncelleme özelliğine sahiptir. İnternet bağlantınız olduğu sürece cihazınız en yeni yazılım sürümünü otomatik olarak indirir ve yükler. Manuel güncelleme yapmak isterseniz, cihazınızın 'Ayarlar' menüsünden 'Sistem' ve ardından 'Yazılım Güncelleme' seçeneğini seçerek kontrol edebilirsiniz. Sorun yaşarsanız teknik destek hattımız ile iletişime geçebilirsiniz."
    },
    {
      question: "Fiş yazıcımda kağıt sıkışması oldu, ne yapmalıyım?",
      answer: "Kağıt sıkışması durumunda öncelikle cihazınızı kapatın. Yazıcı kapağını açın ve sıkışan kağıdı nazikçe çekerek çıkarın. Yazıcı mekanizmasına zarar vermemeye özen gösterin. Tüm kağıt parçalarını temizledikten sonra yeni bir rulo kağıt yerleştirin, kapağı düzgünce kapatın ve cihazı yeniden başlatın. Problem devam ederse teknik servisimizle iletişime geçin."
    },
    {
      question: "Z raporu alamıyorum, ne yapmalıyım?",
      answer: "Z raporu alırken sorun yaşıyorsanız, öncelikle cihazınızın şarj seviyesinin yeterli olduğundan emin olun. Ardından cihazı yeniden başlatmayı deneyin. Z raporu için doğru kullanıcı şifresine sahip olduğunuzdan emin olun. Hala sorun yaşıyorsanız, teknik destek hattımızı arayarak yardım alabilirsiniz."
    },
    {
      question: "Ödeme alma sırasında 'İşlem Reddedildi' hatası alıyorum.",
      answer: "Bu hata genellikle internet bağlantı problemi, banka sunucu sorunları veya kart problemi kaynaklı olabilir. Öncelikle internet bağlantınızı kontrol edin. İnternetiniz çalışıyorsa, farklı bir kart ile deneme yapın. Sorun devam ederse, cihazı yeniden başlatmayı deneyin. Tüm bu adımlar sonuç vermezse, teknik destek hattımızı arayarak detaylı yardım alabilirsiniz."
    },
    {
      question: "Cihazım açılmıyor, ne yapabilirim?",
      answer: "Cihazınız açılmıyorsa, öncelikle şarj durumunu kontrol edin. Şarj adaptörünüzü takın ve en az 15 dakika şarj olmasını bekleyin. Ardından güç düğmesine basılı tutarak cihazı açmayı deneyin. Bu işlem sonuç vermezse, cihazın reset düğmesine ince bir cisimle basarak sıfırlamayı deneyin. Tüm bu adımlar sonuç vermezse teknik servisimizle iletişime geçin."
    }
  ];

  const documents = [
    {
      title: "PayEra A90 Kullanım Kılavuzu",
      description: "PayEra A90 modelinin kurulum, kullanım ve bakım bilgilerini içeren detaylı kılavuz.",
      icon: (
        <svg className="w-8 h-8 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      file: "payera-a90-kullanim-kilavuzu.pdf"
    },
    {
      title: "PayEra 507 Kullanım Kılavuzu",
      description: "PayEra 507 modelinin kurulum, kullanım ve bakım bilgilerini içeren detaylı kılavuz.",
      icon: (
        <svg className="w-8 h-8 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      file: "payera-507-kullanim-kilavuzu.pdf"
    },
    {
      title: "Hızlı Başlangıç Rehberi",
      description: "Tüm PayEra cihazları için adım adım hızlı kurulum ve ilk kullanım rehberi.",
      icon: (
        <svg className="w-8 h-8 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      file: "payera-hizli-baslangic-rehberi.pdf"
    },
    {
      title: "Mali Belge Oluşturma Kılavuzu",
      description: "Z raporu, X raporu ve diğer mali belgelerin nasıl alınacağını anlatan detaylı kılavuz.",
      icon: (
        <svg className="w-8 h-8 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      file: "payera-mali-belge-olusturma-kilavuzu.pdf"
    }
  ];

  const updates = [
    {
      version: "v2.5.3",
      date: "12 Nisan 2025",
      notes: [
        "E-belge entegrasyonu performans iyileştirmeleri",
        "Banka entegrasyonu güncellemeleri",
        "KDV oranları için yeni düzenlemeler",
        "Kullanıcı arayüzünde küçük iyileştirmeler"
      ]
    },
    {
      version: "v2.5.2",
      date: "25 Mart 2025",
      notes: [
        "NFC ödeme sisteminde hata düzeltmesi",
        "Raporlama modülünde yeni özellikler",
        "Yazıcı sürücüleri güncellemesi",
        "Güvenlik iyileştirmeleri"
      ]
    },
    {
      version: "v2.5.1",
      date: "10 Şubat 2025",
      notes: [
        "Stok yönetimi modülünde yeni filtreleme seçenekleri",
        "WiFi bağlantı kararlılığını artıran düzeltmeler",
        "Yeni ödeme yöntemleri desteği",
        "Kullanıcı arayüzü performans iyileştirmeleri"
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Destek</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            PayEra ürünleriniz ile ilgili tüm destek hizmetlerine buradan ulaşabilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#documents" className="bg-turquoise hover:bg-opacity-80 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-block">
              Dokümanlar
            </a>
            <a href="#faq" className="bg-transparent hover:bg-white hover:bg-opacity-10 text-white font-bold py-3 px-6 border-2 border-turquoise rounded-lg transition duration-300 inline-block">
              Sıkça Sorulan Sorular
            </a>
          </div>
        </div>
      </section>
      
      {/* Documents Section */}
      <section id="documents" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">Dokümanlar</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documents.map((doc, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-turquoise transition-colors">
                <div className="flex items-center mb-4">
                  {doc.icon}
                  <h3 className="text-lg font-bold text-navy ml-3">{doc.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{doc.description}</p>
                <a 
                  href={`#${doc.file}`} 
                  className="text-turquoise hover:underline inline-flex items-center font-medium"
                  onClick={(e) => e.preventDefault()}
                >
                  İndir (PDF)
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Updates Section */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">Yazılım Güncellemeleri</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {updates.map((update, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex flex-wrap items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-navy">{update.version}</h3>
                    <span className="text-gray-500 text-sm">{update.date}</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    {update.notes.map((note, noteIndex) => (
                      <li key={noteIndex}>{note}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <a 
                href="#" 
                className="text-turquoise hover:underline inline-flex items-center font-medium"
                onClick={(e) => e.preventDefault()}
              >
                Tüm güncelleme notlarını görüntüle
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">Sıkça Sorulan Sorular</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  >
                    <h3 className="text-lg font-bold text-navy">{faq.question}</h3>
                    <svg 
                      className={`w-5 h-5 text-navy transition-transform ${openFaq === index ? 'transform rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <div className={`px-6 pb-6 ${openFaq === index ? 'block' : 'hidden'}`}>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Sorularınız mı var?</h2>
          <p className="text-xl mb-10 max-w-4xl mx-auto">
            Burada yanıtını bulamadığınız sorularınız için teknik destek ekibimizle iletişime geçebilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/iletisim" className="bg-turquoise hover:bg-opacity-80 text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-block">
              İletişime Geç
            </Link>
            <a href="tel:+902121234567" className="bg-transparent hover:bg-white hover:bg-opacity-10 text-white font-bold py-3 px-8 border-2 border-white rounded-lg transition duration-300 inline-flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +90 (212) 123 45 67
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Support;
