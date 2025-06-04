import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary text-white overflow-hidden py-16">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center">
          {/* Hero Text Content */}
          <div className="md:w-1/2 z-10 mt-8 md:mt-0 mb-8 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Yeni Nesil Yazarkasa POS Sistemleri
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-lg mx-auto md:mx-0">
              PayEra ile işletmenizi dijital dönüşümün merkezine taşıyın. Güvenli, hızlı ve kullanımı kolay yazarkasa POS çözümleri.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Link to="/urunler" className="px-6 py-3 bg-accent text-white font-semibold rounded-lg inline-block">
                Ürünlerimiz
              </Link>
              <Link to="/iletisim" className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg inline-block">
                İletişime Geçin
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="md:w-1/2 z-10">
            <img 
              src="/images/payera-507.jpg" 
              alt="PayEra 507 Cihazı" 
              className="mx-auto w-80 object-contain rounded-xl shadow-xl"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "/images/hero-image-1.jpg";
              }}
            />
          </div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-light opacity-20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/3"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-text-heading">PayEra Avantajları</h2>
            <p className="text-lg text-text-body max-w-2xl mx-auto">
              Modern işletmelerin ihtiyaçlarına göre tasarlanmış çözümlerimiz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-primary mb-4 flex justify-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-text-heading text-center">Hızlı İşlem</h3>
              <p className="text-text-body text-center">7/24 kesintisiz çalışan sistemimiz sayesinde işlemleriniz saniyeler içinde tamamlanır.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-primary mb-4 flex justify-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-text-heading text-center">Güvenli Ödeme</h3>
              <p className="text-text-body text-center">PCI DSS güvenlik sertifikalı altyapımız ile verileriniz en üst düzeyde korunur.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-primary mb-4 flex justify-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-text-heading text-center">Detaylı Raporlama</h3>
              <p className="text-text-body text-center">Gelişmiş raporlama araçlarımız ile işletmenizin finansal durumunu anında görüntüleyin.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-primary mb-4 flex justify-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-text-heading text-center">Kolay Entegrasyon</h3>
              <p className="text-text-body text-center">Mevcut sistemlerinize kolayca entegre edilebilen çözümlerimizle iş süreçlerinizi hızlandırın.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-heading mb-6">Ürün Ailemiz</h2>
            <p className="text-lg text-text-body max-w-2xl mx-auto">
              Her ihtiyaca uygun yazarkasa POS çözümlerimizle tanışın.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="card-hover group overflow-hidden rounded-lg shadow-md">
              <div className="h-48 bg-primary-light flex items-center justify-center p-4 rounded-t-lg">
                <img 
                  src="/images/product-x10.png" 
                  alt="PayEra X10" 
                  className="max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://via.placeholder.com/300x300/FFFFFF/0088A9?text=PayEra+X10";
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-heading mb-2">PayEra X10</h3>
                <p className="text-text-body mb-4">Küçük işletmeler için kompakt ve ekonomik çözüm</p>
                <ul className="text-text-body mb-6 space-y-1">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Android İşletim Sistemi
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Dokunmatik Ekran
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Termal Yazıcı
                  </li>
                </ul>
                <Link to="/urunler" className="btn-primary inline-block">
                  Detaylı Bilgi
                </Link>
              </div>
            </div>

            {/* Product 2 */}
            <div className="card-hover group overflow-hidden rounded-lg shadow-md">
              <div className="h-48 bg-primary-light flex items-center justify-center p-4 rounded-t-lg">
                <img 
                  src="/images/product-s20.png" 
                  alt="PayEra S20" 
                  className="max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://via.placeholder.com/300x300/FFFFFF/0088A9?text=PayEra+S20";
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-heading mb-2">PayEra S20</h3>
                <p className="text-text-body mb-4">Orta ölçekli işletmeler için tam donanımlı model</p>
                <ul className="text-text-body mb-6 space-y-1">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Geniş Dokunmatik Ekran
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Hızlı İşlemci
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Stok Takip Modülü
                  </li>
                </ul>
                <Link to="/urunler" className="btn-primary inline-block">
                  Detaylı Bilgi
                </Link>
              </div>
            </div>

            {/* Product 3 */}
            <div className="card-hover group overflow-hidden rounded-lg shadow-md">
              <div className="h-48 bg-primary-light flex items-center justify-center p-4 rounded-t-lg">
                <img 
                  src="/images/product-pro30.png" 
                  alt="PayEra Pro 30" 
                  className="max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://via.placeholder.com/300x300/FFFFFF/0088A9?text=PayEra+Pro30";
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-heading mb-2">PayEra Pro 30</h3>
                <p className="text-text-body mb-4">Yoğun kullanım için profesyonel çözüm</p>
                <ul className="text-text-body mb-6 space-y-1">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Çift Ekran Desteği
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Yüksek Performans
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Gelişmiş Raporlama
                  </li>
                </ul>
                <Link to="/urunler" className="btn-primary inline-block">
                  Detaylı Bilgi
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/urunler" className="btn-accent inline-block">
              Tüm Ürünlerimizi Keşfedin
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-light opacity-20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/3"></div>
        
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
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
              </div>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="/images/payera-business-solution.png" 
                alt="PayEra İş Çözümleri" 
                className="rounded-lg shadow-xl max-w-full md:max-w-lg mx-auto object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "/images/business-support.jpg";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-3">10,000+</div>
              <div className="text-lg opacity-80">Aktif Müşteri</div>
            </div>
            <div className="p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-3">15+</div>
              <div className="text-lg opacity-80">Yıllık Tecrübe</div>
            </div>
            <div className="p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-3">99.9%</div>
              <div className="text-lg opacity-80">Çalışma Süresi</div>
            </div>
            <div className="p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-3">24/7</div>
              <div className="text-lg opacity-80">Teknik Destek</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-heading mb-6">Müşterilerimiz Ne Diyor?</h2>
            <p className="text-lg text-text-body max-w-2xl mx-auto">
              İşletmelerin PayEra deneyimlerini keşfedin.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="card-hover bg-white p-8 rounded-xl shadow-md">
              <div className="mb-6">
                <svg className="w-10 h-10 text-primary opacity-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-text-body mb-8 italic text-lg leading-relaxed">"PayEra ödeme sistemini kullanmaya başladıktan sonra kasiyerlerimizin işlem hızı %40 arttı. Müşterilerimiz artık kasada daha az bekliyor ve memnuniyet oranımız yükseldi."</p>
              <div className="flex items-center">
                <img 
                  src="/images/testimonial-default.jpg" 
                  alt="Ahmet Yılmaz"
                  className="w-14 h-14 rounded-full mr-4 object-cover shadow-md"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://via.placeholder.com/56x56/0088A9/FFFFFF?text=AY";
                  }}
                />
                <div>
                  <div className="font-bold text-text-heading">Ahmet Yılmaz</div>
                  <div className="text-text-body text-sm">ABC Market, İşletme Sahibi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Dealership CTA Section */}
      <section className="py-16 bg-bg-alt relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent opacity-5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/3"></div>
        
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="/images/dealership.jpg" 
                alt="PayEra Bayilik" 
                className="rounded-xl shadow-xl max-w-full h-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "/images/dealership-default.jpg";
                }}
              />
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-text-heading">PayEra Bayisi Olun</h2>
              <p className="text-lg text-text-body mb-8">
                Türkiye'nin en hızlı büyüyen yazarkasa POS ağına katılın ve karlı bir iş ortaklığına adım atın.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-text-body">Düşük başlangıç maliyeti</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-text-body">Kapsamlı ürün eğitimi</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-text-body">Sürekli pazarlama desteği</span>
                </div>
              </div>
              <Link to="/bayilik" className="btn-primary inline-block">
                Hemen Başvurun
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-text-heading">Güncel Kalın</h2>
          <p className="text-lg text-text-body mb-8 max-w-2xl mx-auto">
            Sektör haberleri, ürün güncellemeleri ve kampanyalardan haberdar olmak için bültenimize abone olun.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="E-posta adresiniz" 
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
              />
              <button className="px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors">
                Abone Ol
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Kişisel verileriniz KVKK kapsamında korunmaktadır. İstediğiniz zaman abonelikten çıkabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">İşletmenize Özel Çözümler İçin</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            PayEra'nın yenilikçi ödeme sistemleri ile işletmenizi bir adım öne taşıyın.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/iletisim" className="px-6 py-3 bg-accent text-white font-semibold rounded-lg inline-block">
              İletişime Geçin
            </Link>
            <Link to="/urunler" className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg inline-block">
              Ürünlerimizi İnceleyin
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
