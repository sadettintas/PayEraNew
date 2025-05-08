import { Link } from 'react-router-dom';
import ProductCard from '../components/products/ProductCard';

const Products = () => {
  const products = [
    {
      id: "payera-a90",
      name: "PayEra A90",
      description: "Android işletim sistemli, dokunmatik ekranlı, kompakt tasarımlı yazarkasa POS cihazı.",
      imageSrc: "/src/assets/images/payera-a90.jpg",
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
      imageSrc: "/src/assets/images/payera-507.jpg",
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
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Yeni Nesil Yazarkasa POS Çözümleri</h1>
          <p className="text-xl max-w-3xl mx-auto font-light">
            İşletmenizin ihtiyaçlarına göre tasarlanmış, kullanıcı dostu ve performansı yüksek 
            yazarkasa POS sistemlerimizi keşfedin.
          </p>
        </div>
      </section>
      
      {/* Products List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-8 sm:mb-12 text-center">Ürünlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.name}
                description={product.description}
                features={product.features}
                imageSrc={product.imageSrc}
                linkTo={`/urunler/${product.id}`}
                isNew={product.id === "payera-a90"}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Comparison Section */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">Ürün Karşılaştırması</h2>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">Özellik</th>
                    <th className="px-6 py-4 text-center text-sm font-medium uppercase tracking-wider">PayEra A90</th>
                    <th className="px-6 py-4 text-center text-sm font-medium uppercase tracking-wider">PayEra 507</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-navy">İşletim Sistemi</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-center">Android 10</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-center">Windows 10 IoT Enterprise</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-navy">Ekran</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-center">5.5 inç dokunmatik</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-center">15.6 inç dokunmatik</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-navy">İşlemci</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-center">Quad-core 1.8 GHz</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-center">Intel Celeron Quad Core 2.0 GHz</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-navy">Bellek</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-center">2GB RAM, 16GB ROM</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-center">4GB RAM, 64GB SSD</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-navy">Bağlantı</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-center">4G, WiFi, Bluetooth</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-center">Ethernet, WiFi, Bluetooth</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-navy">Yazıcı</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-center">58mm Termal Yazıcı</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-center">80mm Termal Yazıcı</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-navy">Batarya</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-center">7.4V, 2600mAh (12 saat)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-center">Yok (Sabit Cihaz)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-navy">Boyutlar</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-center">210mm x 80mm x 70mm</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-center">380mm x 350mm x 170mm</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-navy">Kullanım Alanı</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-center">Mobil Kullanım</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-center">Sabit Kullanım</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-navy text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">İşletmeniz İçin En Uygun Çözümü Seçin</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10 font-light">
            Ürünlerimizle ilgili detaylı bilgi almak, demo talep etmek veya satın almak için hemen iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/iletisim" className="bg-turquoise hover:bg-turquoise-dark text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-block">
              İletişime Geç
            </Link>
            <Link to="/bayilik" className="bg-transparent hover:bg-white hover:bg-opacity-10 text-white font-bold py-3 px-8 border-2 border-turquoise rounded-lg transition duration-300 inline-block">
              Bayi Ol
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
