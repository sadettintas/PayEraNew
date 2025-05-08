import ContactForm from '../components/common/ContactForm';

const Dealership = () => {

  const benefits = [
    {
      title: "Yüksek Kar Marjı",
      description: "PayEra bayileri, sektör ortalamasının üzerinde kar marjı ile çalışır. Rekabetçi fiyatlandırma politikamız ile kazancınızı maksimize ederiz.",
      icon: (
        <svg className="w-12 h-12 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Satış ve Teknik Eğitim",
      description: "Ürünlerimizi en iyi şekilde tanıtmanız ve teknik destek sağlamanız için düzenli eğitimler düzenliyoruz. Bayi ve çalışanlarınız için sürekli gelişim fırsatı.",
      icon: (
        <svg className="w-12 h-12 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Pazarlama Desteği",
      description: "Broşür, katalog, numune ürün, demo cihazlar ve dijital pazarlama materyalleri ile satışlarınızı destekliyoruz. Müşteri kazanmanız için gerekli tüm araçları sağlıyoruz.",
      icon: (
        <svg className="w-12 h-12 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      )
    },
    {
      title: "Bölge Koruması",
      description: "Belirli bir bölgede sadece size özel bayilik hakkı tanıyarak, haksız rekabeti önlüyor ve pazarınızı koruyoruz.",
      icon: (
        <svg className="w-12 h-12 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Hızlı Teslimat",
      description: "Lojistik ağımız sayesinde siparişlerinizi en hızlı şekilde teslim ediyor, iş akışınızın kesintiye uğramamasını sağlıyoruz.",
      icon: (
        <svg className="w-12 h-12 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Teknik Destek",
      description: "7/24 teknik destek ekibimiz ile ürünlerimiz hakkında yaşanan sorunlarda hızlı çözüm sunuyoruz. Müşterilerinize kesintisiz hizmet verebilirsiniz.",
      icon: (
        <svg className="w-12 h-12 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">PayEra Bayiliği</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Türkiye'nin dört bir yanına yayılan bayi ağımıza katılın, kazançlı bir iş ortaklığının parçası olun.
          </p>
          <button 
            onClick={() => {
              document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-turquoise hover:bg-opacity-80 text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-block"
          >
            Hemen Başvur
          </button>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">Bayilik Avantajları</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-turquoise">
                <div className="flex items-center mb-4">
                  <div className="mr-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-navy">{benefit.title}</h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Application Form */}
      <section id="application-form" className="py-16 bg-light-gray">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
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
      </section>
      
      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">Sıkça Sorulan Sorular</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-navy mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Kazançlı Bir İş Fırsatı Sizi Bekliyor</h2>
          <p className="text-xl mb-10 max-w-4xl mx-auto">
            Teknoloji sektöründe kazançlı bir iş kurmak ve PayEra'nın güçlü bayi ağının 
            bir parçası olmak için hemen başvurun. Uzman ekibimiz sizinle en kısa sürede iletişime geçecektir.
          </p>
          <button 
            onClick={() => {
              document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-turquoise hover:bg-opacity-80 text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-block"
          >
            Hemen Başvur
          </button>
        </div>
      </section>
    </>
  );
};

export default Dealership;
