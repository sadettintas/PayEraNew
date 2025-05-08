import React from 'react';

interface TestimonialProps {
  text: string;
  author: string;
  position: string;
  company: string;
  imageSrc?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ text, author, position, company, imageSrc }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 rounded-full bg-light-gray flex items-center justify-center overflow-hidden mr-4">
          {imageSrc ? (
            <img src={imageSrc} alt={author} className="h-full w-full object-cover" />
          ) : (
            <svg className="h-8 w-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          )}
        </div>
        <div>
          <h4 className="font-bold text-navy">{author}</h4>
          <p className="text-sm text-gray-600">{position}, {company}</p>
        </div>
      </div>
      <div className="relative">
        <svg className="h-8 w-8 text-turquoise opacity-20 absolute -top-4 -left-2" fill="currentColor" viewBox="0 0 32 32">
          <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.7 1.3-3 3-3h.3c.6 0 1.1-.5 1.1-1.1V8.9c0-.6-.5-1.1-1.1-1.1H10zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.7 1.3-3 3-3h.3c.6 0 1.1-.5 1.1-1.1V8.9c0-.6-.5-1.1-1.1-1.1H22z" />
        </svg>
        <p className="text-gray-600 relative z-10">{text}</p>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);
  
  const testimonials = [
    {
      text: "PayEra A90 cihazını kullanmaya başladığımızdan beri hem müşterilerimiz hem de çalışanlarımız çok memnun. Kolay kullanımı ve hızlı işlem yapabilmesi sayesinde kasalarımızda bekleme süresi neredeyse yok denecek kadar azaldı.",
      author: "Ahmet Yılmaz",
      position: "Genel Müdür",
      company: "MarketPlus Zinciri",
      imageSrc: "/src/assets/images/testimonials.jpg"
    },
    {
      text: "Teknik destek ekibi her zaman hızlı ve çözüm odaklı yaklaşımlarıyla bizlere yardımcı oluyor. Entegrasyon sürecimizde de profesyonel bir destek aldık. PayEra ile çalışmaktan çok memnunuz.",
      author: "Ayşe Kaya",
      position: "Operasyon Müdürü",
      company: "Cafe Bistro",
      imageSrc: "/public/images/testimonial-default.jpg"
    },
    {
      text: "Eski POS cihazımızla yaşadığımız tüm sorunlar PayEra 507 ile çözüldü. Artık tüm satış ve stok işlemlerimizi tek bir yerden yönetebiliyoruz. Bayiliğini yapmaktan gurur duyuyoruz.",
      author: "Mehmet Demir",
      position: "İşletme Sahibi",
      company: "TeknoMarket",
      imageSrc: "/src/assets/images/business-support.jpg"
    }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-12 sm:py-20 bg-light-gray">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-2 sm:mb-4">Müşterilerimiz Ne Diyor?</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            PayEra kullanıcılarının deneyimlerini paylaşıyoruz
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="carousel-container relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`transition-opacity duration-500 ${
                  currentTestimonial === index ? 'opacity-100' : 'opacity-0 absolute top-0 left-0 right-0'
                }`}
              >
                <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md border border-gray-100">
                  <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                    <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-light-gray flex items-center justify-center overflow-hidden mb-3 sm:mb-0 mx-auto sm:mx-0 sm:mr-4">
                      {testimonial.imageSrc ? (
                        <img 
                          src={testimonial.imageSrc} 
                          alt={testimonial.author} 
                          className="h-full w-full object-cover rounded-full"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "/public/images/testimonial-default.jpg";
                          }}
                        />
                      ) : (
                        <svg className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <div className="text-center sm:text-left">
                      <h4 className="font-bold text-navy">{testimonial.author}</h4>
                      <p className="text-xs sm:text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <svg className="h-6 w-6 sm:h-8 sm:w-8 text-turquoise opacity-20 absolute -top-4 -left-2" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.7 1.3-3 3-3h.3c.6 0 1.1-.5 1.1-1.1V8.9c0-.6-.5-1.1-1.1-1.1H10zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.7 1.3-3 3-3h.3c.6 0 1.1-.5 1.1-1.1V8.9c0-.6-.5-1.1-1.1-1.1H22z" />
                    </svg>
                    <p className="text-gray-600 relative z-10 text-sm sm:text-base md:text-lg italic">{testimonial.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation arrows */}
          <button 
            onClick={() => setCurrentTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none hidden md:block"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => setCurrentTestimonial(prev => prev === testimonials.length - 1 ? 0 : prev + 1)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none hidden md:block"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Dot indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index ? 'bg-turquoise w-8' : 'bg-gray-300'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
