import { useState } from 'react';
import { Link } from 'react-router-dom';

const Support = () => {
  // FAQ için açılır/kapanır durum yönetimi
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>('Tümü');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const faqCategories = [
    "Tümü", 
    "Kurulum", 
    "Yazılım", 
    "Donanım", 
    "Mali İşlemler", 
    "Ödeme"
  ];

  const faqs = [
    {
      question: "Yazarkasa POS cihazımı nasıl aktifleştirebilirim?",
      answer: "Cihazınızı aktifleştirmek için öncelikle satın aldığınız bayinizle iletişime geçmelisiniz. Bayiniz, cihazınızın kurulumu ve aktivasyonu için gerekli işlemleri yapacaktır. Bu süreçte mali onay için gerekli belgelerin tamamlanması gerekmektedir. Aktivasyon işlemi tamamlandıktan sonra cihazınızı kullanmaya başlayabilirsiniz.",
      category: "Kurulum"
    },
    {
      question: "Cihazımın yazılımını nasıl güncelleyebilirim?",
      answer: "PayEra cihazları otomatik güncelleme özelliğine sahiptir. İnternet bağlantınız olduğu sürece cihazınız en yeni yazılım sürümünü otomatik olarak indirir ve yükler. Manuel güncelleme yapmak isterseniz, cihazınızın 'Ayarlar' menüsünden 'Sistem' ve ardından 'Yazılım Güncelleme' seçeneğini seçerek kontrol edebilirsiniz. Sorun yaşarsanız teknik destek hattımız ile iletişime geçebilirsiniz.",
      category: "Yazılım"
    },
    {
      question: "Fiş yazıcımda kağıt sıkışması oldu, ne yapmalıyım?",
      answer: "Kağıt sıkışması durumunda öncelikle cihazınızı kapatın. Yazıcı kapağını açın ve sıkışan kağıdı nazikçe çekerek çıkarın. Yazıcı mekanizmasına zarar vermemeye özen gösterin. Tüm kağıt parçalarını temizledikten sonra yeni bir rulo kağıt yerleştirin, kapağı düzgünce kapatın ve cihazı yeniden başlatın. Problem devam ederse teknik servisimizle iletişime geçin.",
      category: "Donanım"
    },
    {
      question: "Z raporu alamıyorum, ne yapmalıyım?",
      answer: "Z raporu alırken sorun yaşıyorsanız, öncelikle cihazınızın şarj seviyesinin yeterli olduğundan emin olun. Ardından cihazı yeniden başlatmayı deneyin. Z raporu için doğru kullanıcı şifresine sahip olduğunuzdan emin olun. Hala sorun yaşıyorsanız, teknik destek hattımızı arayarak yardım alabilirsiniz.",
      category: "Mali İşlemler"
    },
    {
      question: "Ödeme alma sırasında 'İşlem Reddedildi' hatası alıyorum.",
      answer: "Bu hata genellikle internet bağlantı problemi, banka sunucu sorunları veya kart problemi kaynaklı olabilir. Öncelikle internet bağlantınızı kontrol edin. İnternetiniz çalışıyorsa, farklı bir kart ile deneme yapın. Sorun devam ederse, cihazı yeniden başlatmayı deneyin. Tüm bu adımlar sonuç vermezse, teknik destek hattımızı arayarak detaylı yardım alabilirsiniz.",
      category: "Ödeme"
    },
    {
      question: "Cihazım açılmıyor, ne yapabilirim?",
      answer: "Cihazınız açılmıyorsa, öncelikle şarj durumunu kontrol edin. Şarj adaptörünüzü takın ve en az 15 dakika şarj olmasını bekleyin. Ardından güç düğmesine basılı tutarak cihazı açmayı deneyin. Bu işlem sonuç vermezse, cihazın reset düğmesine ince bir cisimle basarak sıfırlamayı deneyin. Tüm bu adımlar sonuç vermezse teknik servisimizle iletişime geçin.",
      category: "Donanım"
    },
    {
      question: "PayEra cihazıma yeni bir uygulama nasıl yükleyebilirim?",
      answer: "PayEra Market uygulaması üzerinden cihazınıza uygun uygulamaları indirebilirsiniz. Ana ekrandan PayEra Market'e girin, kategorilere göz atın veya arama yapın. İndirmek istediğiniz uygulamayı seçin ve 'İndir' butonuna tıklayın. İşlem tamamlandıktan sonra uygulama ana ekranda görünecektir.",
      category: "Yazılım"
    },
    {
      question: "KDV oranlarını nasıl güncelleyebilirim?",
      answer: "KDV oranlarını güncellemek için 'Ayarlar' menüsünden 'Mali Ayarlar' bölümüne gidin. Buradan 'Vergi Oranları' seçeneğini bulun ve 'Düzenle' butonuna basın. Yeni KDV oranlarını girdikten sonra 'Kaydet' butonuna basarak değişiklikleri kaydedin. Vergi oranı güncellemeleri genellikle sistem güncellemeleriyle otomatik olarak yapılır.",
      category: "Mali İşlemler"
    }
  ];

  const documents = [
    {
      title: "PayEra A90 Kullanım Kılavuzu",
      description: "PayEra A90 modelinin kurulum, kullanım ve bakım bilgilerini içeren detaylı kılavuz.",
      icon: (
        <svg className="w-6 h-6 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      file: "payera-a90-kullanim-kilavuzu.pdf",
      badge: "Güncel"
    },
    {
      title: "PayEra 507 Kullanım Kılavuzu",
      description: "PayEra 507 modelinin kurulum, kullanım ve bakım bilgilerini içeren detaylı kılavuz.",
      icon: (
        <svg className="w-6 h-6 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      file: "payera-507-kullanim-kilavuzu.pdf",
      badge: "Güncel"
    },
    {
      title: "Hızlı Başlangıç Rehberi",
      description: "Tüm PayEra cihazları için adım adım hızlı kurulum ve ilk kullanım rehberi.",
      icon: (
        <svg className="w-6 h-6 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      file: "payera-hizli-baslangic-rehberi.pdf",
      badge: "Önerilen"
    },
    {
      title: "Mali Belge Oluşturma Kılavuzu",
      description: "Z raporu, X raporu ve diğer mali belgelerin nasıl alınacağını anlatan detaylı kılavuz.",
      icon: (
        <svg className="w-6 h-6 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      file: "payera-mali-belge-olusturma-kilavuzu.pdf",
      badge: ""
    },
    {
      title: "Sorun Giderme Rehberi",
      description: "Yaygın teknik sorunları çözme ve arızaları giderme konusunda kapsamlı rehber.",
      icon: (
        <svg className="w-6 h-6 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      file: "payera-sorun-giderme-rehberi.pdf",
      badge: "Yeni"
    },
    {
      title: "Yazılım Güncelleme Talimatları",
      description: "Cihazınızın yazılımını güvenli bir şekilde nasıl güncelleyeceğinize dair adım adım talimatlar.",
      icon: (
        <svg className="w-6 h-6 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      ),
      file: "payera-yazilim-guncelleme-talimatlari.pdf",
      badge: ""
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
      ],
      highlight: true
    },
    {
      version: "v2.5.2",
      date: "25 Mart 2025",
      notes: [
        "NFC ödeme sisteminde hata düzeltmesi",
        "Raporlama modülünde yeni özellikler",
        "Yazıcı sürücüleri güncellemesi",
        "Güvenlik iyileştirmeleri"
      ],
      highlight: false
    },
    {
      version: "v2.5.1",
      date: "10 Şubat 2025",
      notes: [
        "Stok yönetimi modülünde yeni filtreleme seçenekleri",
        "WiFi bağlantı kararlılığını artıran düzeltmeler",
        "Yeni ödeme yöntemleri desteği",
        "Kullanıcı arayüzü performans iyileştirmeleri"
      ],
      highlight: false
    }
  ];

  return (
    <>
      {/* Hero Section - Simplified with better readability */}
      <section className="bg-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Teknik Destek ve Kaynaklar</h1>
            <p className="text-lg mb-6 text-white/90">
              PayEra ürünlerinizle ilgili ihtiyaç duyacağınız tüm destek ve kaynakları burada bulabilirsiniz.
            </p>
            <div className="bg-white/10 p-4 rounded-lg inline-block mt-2">
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#docs" className="flex items-center bg-white/10 hover:bg-white/20 transition p-3 rounded-lg text-sm">
                  <svg className="w-5 h-5 mr-2 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Dokümanlar
                </a>
                <a href="#faq" className="flex items-center bg-white/10 hover:bg-white/20 transition p-3 rounded-lg text-sm">
                  <svg className="w-5 h-5 mr-2 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Sıkça Sorulan Sorular
                </a>
                <a href="#updates" className="flex items-center bg-white/10 hover:bg-white/20 transition p-3 rounded-lg text-sm">
                  <svg className="w-5 h-5 mr-2 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h4m6 0v3a1 1 0 01-1 1H8a1 1 0 01-1-1V3m8 0a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1h-1a1 1 0 01-1-1V3z" />
                  </svg>
                  Güncellemeler
                </a>
                <a href="#contact" className="flex items-center bg-white/10 hover:bg-white/20 transition p-3 rounded-lg text-sm">
                  <svg className="w-5 h-5 mr-2 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  İletişim
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Documents Section - Improved card contrast and readability */}
      <section id="docs" className="py-12 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-navy mb-2 text-center">Dokümanlar ve Rehberler</h2>
            <p className="text-gray-600 mb-8 text-center">
              PayEra kullanıcıları için profesyonelce hazırlanmış destek dokümanları
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {documents.slice(0, 6).map((doc, index) => (
                <div 
                  key={index} 
                  className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all relative"
                >
                  {doc.badge && (
                    <span className={`absolute top-3 right-3 text-xs font-medium px-2 py-1 rounded-full ${
                      doc.badge === 'Yeni' ? 'bg-green-100 text-green-800' : 
                      doc.badge === 'Güncel' ? 'bg-blue-100 text-blue-800' : 
                      'bg-amber-100 text-amber-800'
                    }`}>
                      {doc.badge}
                    </span>
                  )}
                  <div className="flex items-start">
                    <div className="mr-3 bg-gray-50 p-2 rounded-lg">
                      {doc.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-navy mb-1 text-base">{doc.title}</h3>
                      <p className="text-gray-700 text-sm mb-3">{doc.description}</p>
                      <div className="flex space-x-2">
                        <a 
                          href={`#${doc.file}`} 
                          className="text-turquoise hover:text-navy inline-flex items-center text-sm font-medium"
                          onClick={(e) => e.preventDefault()}
                        >
                          İndir
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </a>
                        <a 
                          href={`#view-${doc.file}`}
                          className="text-gray-600 hover:text-navy inline-flex items-center text-sm font-medium"
                          onClick={(e) => e.preventDefault()}
                        >
                          Görüntüle
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <a 
                href="#" 
                className="inline-block bg-navy hover:bg-turquoise text-white px-6 py-2 rounded-lg transition-colors text-sm font-medium"
                onClick={(e) => e.preventDefault()}
              >
                Tüm Dokümanları Görüntüle
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Updates Section - Simplified with better spacing and readability */}
      <section id="updates" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-navy mb-2 text-center">Yazılım Güncellemeleri</h2>
            <p className="text-gray-600 mb-8 text-center">
              PayEra cihazınızı her zaman en güncel ve güvenli yazılımla kullanın
            </p>
            
            <div className="space-y-4">
              {updates.map((update, index) => (
                <div key={index} className={`bg-white border rounded-lg p-4 ${index === 0 ? 'border-turquoise shadow-md' : 'border-gray-200'}`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <h3 className="text-lg font-bold text-navy">{update.version}</h3>
                      {update.highlight && (
                        <span className="ml-3 text-xs font-semibold px-2 py-1 bg-turquoise text-white rounded-full">
                          Güncel
                        </span>
                      )}
                    </div>
                    <span className="text-gray-600 text-sm">{update.date}</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 mb-2 text-gray-700">
                    {update.notes.map((note, noteIndex) => (
                      <li key={noteIndex} className="text-sm">{note}</li>
                    ))}
                  </ul>
                  
                  {index === 0 && (
                    <div className="text-right">
                      <a 
                        href="#" 
                        className="text-turquoise hover:text-navy inline-flex items-center text-sm font-medium"
                        onClick={(e) => e.preventDefault()}
                      >
                        Detayları Görüntüle
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <a 
                href="#" 
                className="inline-block bg-navy hover:bg-turquoise text-white px-6 py-2 rounded-lg transition-colors text-sm font-medium"
                onClick={(e) => e.preventDefault()}
              >
                Tüm Güncelleme Notlarını Görüntüle
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section - Improved contrast and readability */}
      <section id="faq" className="py-12 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-navy mb-2 text-center">Sıkça Sorulan Sorular</h2>
            <p className="text-gray-600 mb-6 text-center">
              PayEra cihazlarınızla ilgili en çok sorulan sorular ve yanıtları
            </p>
            
            {/* Kategori Butonları */}
            <div className="flex flex-wrap justify-center gap-2 mb-6 pb-2">
              {faqCategories.map(category => (
                <button 
                  key={category}
                  onClick={() => handleTabChange(category)} 
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    activeTab === category 
                      ? 'bg-navy text-white' 
                      : 'bg-white text-navy hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="space-y-3">
              {faqs
                .filter(faq => activeTab === 'Tümü' || faq.category === activeTab)
                .map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
                  >
                    <div className="flex items-center">
                      <span className={`w-3 h-3 rounded-full mr-3 ${
                        faq.category === 'Kurulum' ? 'bg-blue-600' :
                        faq.category === 'Yazılım' ? 'bg-purple-600' :
                        faq.category === 'Donanım' ? 'bg-red-600' :
                        faq.category === 'Mali İşlemler' ? 'bg-green-600' :
                        'bg-amber-600'
                      }`}></span>
                      <h3 className="font-semibold text-navy">{faq.question}</h3>
                    </div>
                    <svg 
                      className={`w-5 h-5 text-navy transition-transform ${openFaq === index ? 'transform rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <div className={`${openFaq === index ? 'block' : 'hidden'}`}>
                    <div className="px-4 pb-4 pt-1 border-t border-gray-100">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-700 mb-4">Sorunuz cevaplanmadı mı?</p>
              <a 
                href="#contact" 
                className="inline-block bg-turquoise hover:bg-navy text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Destek Talebi Oluşturun
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA - Better readability with higher contrast */}
      <section id="contact" className="py-12 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Teknik Destek Hattı</h2>
                <p className="text-white/90 mb-6">
                  Burada yanıtını bulamadığınız sorularınız için teknik destek ekibimiz size yardımcı olmak için hazır.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/70 text-sm mb-1">Telefon</p>
                      <a href="tel:+902121234567" className="text-white text-lg font-medium hover:text-turquoise transition-colors">
                        +90 (212) 123 45 67
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/70 text-sm mb-1">E-posta</p>
                      <a href="mailto:destek@payera.com" className="text-white text-lg font-medium hover:text-turquoise transition-colors">
                        destek@payera.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/70 text-sm mb-1">Çalışma Saatleri</p>
                      <p className="text-white text-lg font-medium">
                        Hafta içi 09:00 - 18:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-5">Destek Talebi Oluşturun</h3>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Adınız Soyadınız" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise text-white placeholder-white/60"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="E-posta Adresiniz" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise text-white placeholder-white/60"
                    />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise text-white/80">
                      <option value="" className="text-gray-800">Konu Seçiniz</option>
                      <option value="technical" className="text-gray-800">Teknik Sorun</option>
                      <option value="billing" className="text-gray-800">Fatura/Ödeme</option>
                      <option value="product" className="text-gray-800">Ürün Bilgisi</option>
                      <option value="other" className="text-gray-800">Diğer</option>
                    </select>
                  </div>
                  <div>
                    <textarea 
                      rows={4} 
                      placeholder="Mesajınız" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise text-white placeholder-white/60 resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="button"
                    className="w-full bg-turquoise hover:bg-white hover:text-navy text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg"
                  >
                    Gönder
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Support;
