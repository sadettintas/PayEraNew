import { Link } from 'react-router-dom';
import ProductCard from '../components/products/ProductCard';

const Products = () => {
  const products = [
    {
      id: "payera-x10",
      name: "PayEra X10",
      description: "Küçük işletmeler için kompakt ve ekonomik yazarkasa POS çözümü.",
      imageSrc: "images/product-x10.png",
      features: [
        "5.5 inç dokunmatik ekran",
        "Android 10 işletim sistemi",
        "Entegre termal yazıcı",
        "Kompakt ve hafif tasarım",
        "5000mAh uzun ömürlü pil",
        "WiFi, Bluetooth ve 4G bağlantı"
      ],
      isNew: true
    },
    {
      id: "payera-s20",
      name: "PayEra S20",
      description: "Orta ölçekli işletmeler için güçlü ve esnek yazarkasa POS çözümü.",
      imageSrc: "images/product-s20.png",
      features: [
        "8 inç yüksek çözünürlüklü dokunmatik ekran",
        "Android 11 işletim sistemi",
        "Hızlı termal yazıcı",
        "Güçlü donanım özellikleri",
        "Çoklu ödeme seçenekleri",
        "WiFi, Bluetooth, Ethernet ve 4G bağlantı"
      ]
    },
    {
      id: "payera-pro-30",
      name: "PayEra Pro 30",
      description: "Büyük işletmeler için profesyonel, tam donanımlı yazarkasa POS terminali.",
      imageSrc: "images/product-pro30.png",
      features: [
        "10.1 inç Full HD dokunmatik ekran",
        "Güçlü işlemci ve geniş bellek",
        "Hızlı, sessiz termal yazıcı",
        "Gelişmiş güvenlik özellikleri",
        "Çoklu periferik desteği",
        "Tam entegrasyon imkanları"
      ]
    },
    {
      id: "payera-a90",
      name: "PayEra A90",
      description: "Android işletim sistemli, dokunmatik ekranlı, kompakt tasarımlı yazarkasa POS cihazı.",
      imageSrc: "images/payera-a90.jpg",
      features: [
        "5.5 inç dokunmatik ekran",
        "Android 10 işletim sistemi",
        "Hızlı termal yazıcı",
        "Kompakt ve şık tasarım",
        "Uzun pil ömrü",
        "4G, WiFi ve Bluetooth bağlantı"
      ]
    },
    {
      id: "payera-507",
      name: "PayEra 507",
      description: "Masaüstü kullanım için tasarlanmış, yüksek performanslı, geniş ekranlı yazarkasa POS terminali.",
      imageSrc: "images/payera-507.jpg",
      features: [
        "15.6 inç yüksek çözünürlüklü dokunmatik ekran",
        "Intel işlemci",
        "Windows tabanlı işletim sistemi",
        "Yüksek hızlı termal yazıcı",
        "Geniş bağlantı seçenekleri",
        "Şık ve dayanıklı tasarım"
      ]
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Yeni Nesil Yazarkasa POS Çözümleri</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            İşletmenizin ihtiyaçlarına göre tasarlanmış, kullanıcı dostu ve performansı yüksek 
            yazarkasa POS sistemlerimizi keşfedin.
          </p>
        </div>
      </section>
      
      {/* Products List */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-heading mb-12 text-center">Ürünlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.name}
                description={product.description}
                features={product.features}
                imageSrc={product.imageSrc}
                linkTo={`/urunler/${product.id}`}
                isNew={product.isNew}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-text-heading mb-12 text-center">Ürün Karşılaştırması</h2>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">Özellik</th>
                    <th className="px-6 py-4 text-center text-sm font-medium uppercase tracking-wider">PayEra X10</th>
                    <th className="px-6 py-4 text-center text-sm font-medium uppercase tracking-wider">PayEra S20</th>
                    <th className="px-6 py-4 text-center text-sm font-medium uppercase tracking-wider">PayEra Pro 30</th>
                    <th className="px-6 py-4 text-center text-sm font-medium uppercase tracking-wider">PayEra A90</th>
                    <th className="px-6 py-4 text-center text-sm font-medium uppercase tracking-wider">PayEra 507</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-heading">İşletim Sistemi</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-body text-center">Android 10</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-body text-center">Android 11</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-body text-center">Android 11</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-body text-center">Android 10</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-body text-center">Windows 10 IoT Enterprise</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-heading">Ekran</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-body text-center">5.5 inç</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-body text-center">8 inç</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-body text-center">10.1 inç</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-body text-center">5.5 inç</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-body text-center">15.6 inç</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-heading">İşlemci</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-body text-center">ARM Cortex-A7 Quad Core 1.5 GHz</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-body text-center">Octa-core 2.0 GHz</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-body text-center">Octa-core 2.2 GHz</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-body text-center">Quad-core 1.8 GHz</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-body text-center">Intel Celeron Quad Core 2.0 GHz</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-heading">Bellek</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-body text-center">2GB RAM, 16GB</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-body text-center">3GB RAM, 32GB</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-body text-center">4GB RAM, 64GB</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-body text-center">2GB RAM, 16GB</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-body text-center">4GB RAM, 64GB SSD</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-heading">Bağlantı</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-body text-center">WiFi, Bluetooth, 4G</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-body text-center">WiFi, Bluetooth, 4G, Ethernet</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-body text-center">WiFi, Bluetooth, 4G, Ethernet</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-body text-center">4G, WiFi, Bluetooth</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-body text-center">Ethernet, WiFi, Bluetooth</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-heading">Yazıcı</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-body text-center">57mm Termal</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-body text-center">58mm Termal</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-body text-center">80mm Termal</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-body text-center">58mm Termal</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-body text-center">80mm Termal</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-heading">Batarya</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-body text-center">5000mAh</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-body text-center">7000mAh</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-body text-center">8000mAh</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-body text-center">2600mAh</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-body text-center">Yok (Sabit)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 bg-primary-light opacity-20 w-96 h-96 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 bg-accent opacity-10 w-96 h-96 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-screen-xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">İşletmeniz İçin En Uygun Çözümü Seçin</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10 text-white/90">
            Ürünlerimizle ilgili detaylı bilgi almak, demo talep etmek veya satın almak için hemen iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/iletisim" className="btn btn-accent inline-block">
              İletişime Geç
            </Link>
            <Link to="/bayilik" className="btn btn-outline inline-block">
              Bayi Ol
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
