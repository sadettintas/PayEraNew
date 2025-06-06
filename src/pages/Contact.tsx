import ContactForm from '../components/common/ContactForm';

// Fix for address display issue
const Contact = () => {
  // Contact information array with address and other details
  const contactInfo = [
    {
      title: "Adres",
      info: "Küçükbakkalköy Mah. Beyazıt Sk. Kandiş Plaza No:22 İç Kapı No:2, 34750 Ataşehir/İstanbul",
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Telefon",
      info: "+90 (212) 123 45 67",
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: "E-posta",
      info: "info@payera.com.tr",
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Çalışma Saatleri",
      info: "Pazartesi - Cuma: 09:00 - 18:00",
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">İletişim</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Sorularınız, önerileriniz veya işbirliği teklifleriniz için bizimle iletişime geçebilirsiniz.
          </p>
        </div>
      </section>
      
      {/* Contact Information and Form */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row">
            {/* Contact Information */}
            <div className="lg:w-1/3 mb-10 lg:mb-0 lg:pr-10">
              <h2 className="text-2xl font-bold text-text-heading mb-6">İletişim Bilgileri</h2>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4 bg-primary/10 p-2 rounded-full">{item.icon}</div>
                    <div>
                      <h3 className="font-bold text-text-heading">{item.title}</h3>
                      <p className="text-text-body">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-bold text-text-heading mb-4">Bizi Takip Edin</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-primary hover:bg-primary-dark text-white p-2 rounded-full transition duration-300 hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="bg-primary hover:bg-primary-dark text-white p-2 rounded-full transition duration-300 hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="bg-primary hover:bg-primary-dark text-white p-2 rounded-full transition duration-300 hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="bg-primary hover:bg-primary-dark text-white p-2 rounded-full transition duration-300 hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:w-2/3 bg-white rounded-xl shadow-md p-8">
              <ContactForm 
                title="Bize Mesaj Gönderin"
                description="Sorularınız için aşağıdaki formu doldurarak bize ulaşabilirsiniz."
                fields={[
                  {
                    id: "name",
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
                    placeholder: "Telefon numaranız"
                  },
                  {
                    id: "subject",
                    label: "Konu",
                    type: "select",
                    required: true,
                    options: [
                      { value: "Genel Bilgi", label: "Genel Bilgi" },
                      { value: "Ürün Bilgisi", label: "Ürün Bilgisi" },
                      { value: "Bayilik", label: "Bayilik" },
                      { value: "Teknik Destek", label: "Teknik Destek" },
                      { value: "İş Başvurusu", label: "İş Başvurusu" },
                      { value: "Diğer", label: "Diğer" }
                    ]
                  },
                  {
                    id: "message",
                    label: "Mesajınız",
                    type: "textarea",
                    placeholder: "Mesajınızı buraya yazın",
                    required: true
                  }
                ]}
                submitButtonText="Mesajı Gönder"
                successMessage="Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız."
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section className="py-20 bg-bg-alt">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-text-heading mb-8 text-center">Konumumuz</h2>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="relative w-full h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.7602383600774!2d29.10778371530898!3d40.98088782871183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac79ebe6a1473%3A0x913a33215db5382!2zS8O8w6fDvGtiYWtrYWxrw7Z5LCBCZXlhecSxdCBTay4gTm86MjIsIDM0NzUwIEF0YcWfZWhpci_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1685598761121!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute top-4 left-4 text-center text-gray-500 bg-white bg-opacity-90 p-4 rounded-lg shadow-md z-20 hover-card">
                <h3 className="text-md font-bold text-text-heading mb-2">PayEra Genel Merkez</h3>
                <p className="text-sm text-text-body max-w-xs">Küçükbakkalköy Mah. Beyazıt Sk. Kandiş Plaza No:22 İç Kapı No:2, 34750 Ataşehir/İstanbul</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
