import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import Image from '../components/common/Image';

const PayEraX10 = () => {
  useEffect(() => {
    console.log("PayEra X10 sayfası yüklendi");
    document.title = "PayEra X10 - Kompakt POS Çözümü";
    
    window.scrollTo(0, 0);
  }, []);

  const specifications = [
    { label: "İşlemci", value: "ARM Cortex-A7 Quad Core 1.5 GHz" },
    { label: "İşletim Sistemi", value: "Android 10.0" },
    { label: "Bellek", value: "2GB RAM, 16GB Depolama" },
    { label: "Ekran", value: "5.5 inç dokunmatik ekran (1280x720)" },
    { label: "Yazıcı", value: "Entegre termal yazıcı, 57mm genişlik" },
    { label: "Bağlantı", value: "WiFi, Bluetooth 4.2, 4G (Opsiyonel)" },
    { label: "Portlar", value: "1x USB-C, 1x Micro USB" },
    { label: "Boyutlar", value: "190mm x 85mm x 65mm" },
    { label: "Ağırlık", value: "420g" },
    { label: "Kart Okuyucu", value: "Temassız, Çipli, Manyetik" },
    { label: "Pil", value: "5000mAh, 8 saat çalışma süresi" },
    { label: "Sertifikalar", value: "CE, FCC, RoHS, Mali Onay" }
  ];

  const features = [
    {
      title: "Kompakt Tasarım",
      description: "Küçük boyutlu ve hafif tasarımı ile her işletmeye uygun portatif çözüm.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v18H3z" />
        </svg>
      )
    },
    {
      title: "Uzun Pil Ömrü",
      description: "5000mAh pil ile tam gün kesintisiz çalışma imkanı.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Android İşletim Sistemi",
      description: "Android 10.0 ile geniş uygulama desteği ve kullanıcı dostu arayüz.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      title: "Entegre Yazıcı",
      description: "57mm termal yazıcı ile anında fiş ve fatura basımı.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
        </svg>
      )
    }
  ];

  const useCases = [
    {
      title: "Kafe ve Restoranlar",
      description: "Hızlı sipariş alımı ve ödemeler için ideal çözüm."
    },
    {
      title: "Perakende Mağazalar",
      description: "Kompakt tasarımı ile küçük işletmelerde yer tasarrufu sağlar."
    },
    {
      title: "Seyyar Satış Noktaları",
      description: "Pil ömrü ve taşınabilirliği ile saha satışları için uygundur."
    },
    {
      title: "Kurye ve Teslimat",
      description: "Kapıda ödeme seçeneği sunan işletmeler için mükemmel çözüm."
    }
  ];

  // Testimonial state for carousel
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      text: "PayEra X10 sayesinde kafelerimizdeki ödeme süreçleri %40 daha hızlı tamamlanıyor. Müşterilerimiz bekleme süresinin azalmasından dolayı çok memnun. Kompakt tasarımı ve uzun pil ömrü sayesinde yoğun saatlerde bile sorunsuz hizmet veriyoruz.",
      author: "Ali Kaya",
      position: "Operasyon Müdürü",
      company: "Kahve Dünyası",
      rating: 5,
      image: "/images/testimonial-default.jpg",
      logoSvg: (<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="120" height="40" rx="4" fill="#6B3E26"/>
        <path d="M14.1 29V15.4h6.46c1.29 0 2.4 0.26 3.32 0.79c0.92 0.51 1.63 1.22 2.12 2.12c0.49 0.9 0.74 1.92 0.74 3.05c0 1.13-0.25 2.15-0.74 3.06c-0.49 0.89-1.2 1.59-2.12 2.1c-0.92 0.51-2.03 0.76-3.32 0.76H14.1zM17.18 26.42h3.22c0.77 0 1.43-0.17 1.98-0.5c0.55-0.35 0.97-0.82 1.26-1.41c0.29-0.59 0.44-1.27 0.44-2.03c0-0.76-0.15-1.44-0.44-2.03c-0.29-0.59-0.71-1.06-1.26-1.41c-0.55-0.35-1.21-0.52-1.98-0.52h-3.22V26.42z" fill="white"/>
        <path d="M33.8913 29.24c-1.15 0-2.15-0.24-3-0.71c-0.85-0.47-1.51-1.13-1.98-1.98c-0.47-0.85-0.7-1.82-0.7-2.91c0-1.09 0.23-2.06 0.7-2.9c0.47-0.85 1.13-1.51 1.98-1.97c0.85-0.47 1.85-0.71 3-0.71c0.87 0 1.64 0.15 2.31 0.44c0.67 0.29 1.22 0.71 1.65 1.26V17.4h2.88V29h-2.88v-1.66c-0.41 0.55-0.95 0.97-1.63 1.26c-0.68 0.29-1.46 0.44-2.33 0.44zM34.4713 26.76c0.7 0 1.26-0.25 1.67-0.76c0.41-0.51 0.62-1.35 0.62-2.52c0-1.17-0.21-2-0.62-2.51c-0.41-0.51-0.97-0.76-1.67-0.76c-0.7 0-1.26 0.25-1.67 0.76c-0.41 0.51-0.62 1.34-0.62 2.51c0 1.17 0.21 2.01 0.62 2.52c0.41 0.51 0.97 0.76 1.67 0.76z" fill="white"/>
        <path d="M51.6037 29V21.92c0-0.8-0.16-1.4-0.48-1.8c-0.32-0.4-0.76-0.6-1.32-0.6c-0.67 0-1.2 0.23-1.58 0.7c-0.38 0.47-0.58 1.13-0.58 1.98V29h-2.88V17.4h2.88v1.5c0.38-0.52 0.84-0.93 1.38-1.22c0.54-0.29 1.16-0.44 1.86-0.44c1.28 0 2.3 0.39 3.04 1.18c0.74 0.79 1.12 1.86 1.12 3.22V29h-2.88z" fill="white"/>
        <path d="M65.048 29.24c-1.15 0-2.15-0.24-3-0.71c-0.85-0.47-1.51-1.13-1.98-1.98c-0.47-0.85-0.7-1.82-0.7-2.91c0-1.09 0.23-2.06 0.7-2.9c0.47-0.85 1.13-1.51 1.98-1.97c0.85-0.47 1.85-0.71 3-0.71c0.87 0 1.64 0.15 2.31 0.44c0.67 0.29 1.22 0.71 1.65 1.26V17.4h2.88V29h-2.88v-1.66c-0.41 0.55-0.95 0.97-1.63 1.26c-0.68 0.29-1.46 0.44-2.33 0.44zM65.628 26.76c0.7 0 1.26-0.25 1.67-0.76c0.41-0.51 0.62-1.35 0.62-2.52c0-1.17-0.21-2-0.62-2.51c-0.41-0.51-0.97-0.76-1.67-0.76c-0.7 0-1.26 0.25-1.67 0.76c-0.41 0.51-0.62 1.34-0.62 2.51c0 1.17 0.21 2.01 0.62 2.52c0.41 0.51 0.97 0.76 1.67 0.76z" fill="white"/>
        <path d="M83.1955 29V21.92c0-0.8-0.16-1.4-0.48-1.8c-0.32-0.4-0.76-0.6-1.32-0.6c-0.67 0-1.2 0.23-1.58 0.7c-0.38 0.47-0.58 1.13-0.58 1.98V29h-2.88V17.4h2.88v1.5c0.38-0.52 0.84-0.93 1.38-1.22c0.54-0.29 1.16-0.44 1.86-0.44c1.28 0 2.3 0.39 3.04 1.18c0.74 0.79 1.12 1.86 1.12 3.22V29h-2.88z" fill="white"/>
        <path d="M92.2393 19.7h-1.84v-2.3h1.84V15.4h2.88v2h2.94v2.3h-2.94v5.74c0 0.45 0.11 0.78 0.32 0.97c0.21 0.19 0.57 0.29 1.08 0.29h1.54V29c-0.25 0.07-0.59 0.13-1.02 0.17c-0.43 0.04-0.82 0.07-1.16 0.07c-1.15 0-2.04-0.31-2.68-0.94c-0.64-0.63-0.96-1.57-0.96-2.82V19.7z" fill="white"/>
        <path d="M105.168 29.24c-1.15 0-2.15-0.24-3-0.71c-0.85-0.47-1.51-1.13-1.98-1.98c-0.47-0.85-0.7-1.82-0.7-2.91c0-1.09 0.23-2.06 0.7-2.9c0.47-0.85 1.13-1.51 1.98-1.97c0.85-0.47 1.85-0.71 3-0.71c0.87 0 1.64 0.15 2.31 0.44c0.67 0.29 1.22 0.71 1.65 1.26V17.4h2.88V29h-2.88v-1.66c-0.41 0.55-0.95 0.97-1.63 1.26c-0.68 0.29-1.46 0.44-2.33 0.44zM105.748 26.76c0.7 0 1.26-0.25 1.67-0.76c0.41-0.51 0.62-1.35 0.62-2.52c0-1.17-0.21-2-0.62-2.51c-0.41-0.51-0.97-0.76-1.67-0.76c-0.7 0-1.26 0.25-1.67 0.76c-0.41 0.51-0.62 1.34-0.62 2.51c0 1.17 0.21 2.01 0.62 2.52c0.41 0.51 0.97 0.76 1.67 0.76z" fill="white"/>
      </svg>)
    },
    {
      text: "Küçük butik mağazamız için PayEra X10 tam aradığımız çözüm oldu. Kompakt yapısı sayesinde tezgahta çok az yer kaplıyor, müşteri bilgilerini kaydetme ve sadakat programı entegrasyonu özelliği ile düzenli müşterilerimize özel kampanyalar sunabiliyoruz.",
      author: "Zeynep Aydın",
      position: "Mağaza Sahibi",
      company: "Stil Butik",
      rating: 5,
      image: "/images/testimonial-default.jpg",
      logoSvg: (<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="120" height="40" rx="4" fill="#D81B60"/>
        <path d="M20.52 25.68c0 1.09-0.38 1.94-1.15 2.54c-0.77 0.6-1.83 0.9-3.19 0.9c-1.16 0-2.14-0.18-2.94-0.54c-0.8-0.38-1.4-0.91-1.8-1.6c-0.4-0.69-0.6-1.49-0.6-2.4h3.08c0 0.61 0.19 1.09 0.58 1.44c0.39 0.35 0.97 0.52 1.74 0.52c0.67 0 1.17-0.14 1.51-0.42c0.34-0.28 0.51-0.66 0.51-1.14c0-0.36-0.13-0.66-0.38-0.9c-0.25-0.24-0.56-0.43-0.94-0.58c-0.38-0.15-0.9-0.31-1.56-0.48c-0.87-0.23-1.58-0.46-2.12-0.7c-0.54-0.24-1-0.59-1.38-1.06c-0.38-0.47-0.57-1.09-0.57-1.86c0-0.73 0.19-1.37 0.58-1.92c0.39-0.55 0.93-0.97 1.62-1.26c0.69-0.29 1.48-0.44 2.38-0.44c1.41 0 2.52 0.35 3.34 1.04c0.82 0.69 1.26 1.64 1.32 2.84h-3.14c-0.03-0.55-0.2-0.97-0.53-1.26c-0.33-0.29-0.8-0.44-1.41-0.44c-0.53 0-0.95 0.12-1.25 0.36c-0.3 0.24-0.45 0.58-0.45 1.02c0 0.48 0.23 0.85 0.68 1.12c0.45 0.27 1.12 0.53 2 0.78c0.87 0.25 1.58 0.5 2.12 0.74c0.54 0.24 1 0.61 1.38 1.1c0.38 0.49 0.57 1.13 0.57 1.9z" fill="white"/>
        <path d="M24.7613 23.96h6.12V26.5h-9.98v-1.82l5.96-7.28h-5.8V15h9.64v1.8L24.7613 23.96z" fill="white"/>
        <path d="M39.9025 29.24c-1.15 0-2.15-0.24-3-0.71c-0.85-0.47-1.51-1.13-1.98-1.98c-0.47-0.85-0.7-1.82-0.7-2.91c0-1.09 0.23-2.06 0.7-2.9c0.47-0.85 1.13-1.51 1.98-1.97c0.85-0.47 1.85-0.71 3-0.71c0.87 0 1.64 0.15 2.31 0.44c0.67 0.29 1.22 0.71 1.65 1.26V17.4h2.88V29h-2.88v-1.66c-0.41 0.55-0.95 0.97-1.63 1.26c-0.68 0.29-1.46 0.44-2.33 0.44zM40.4825 26.76c0.7 0 1.26-0.25 1.67-0.76c0.41-0.51 0.62-1.35 0.62-2.52c0-1.17-0.21-2-0.62-2.51c-0.41-0.51-0.97-0.76-1.67-0.76c-0.7 0-1.26 0.25-1.67 0.76c-0.41 0.51-0.62 1.34-0.62 2.51c0 1.17 0.21 2.01 0.62 2.52c0.41 0.51 0.97 0.76 1.67 0.76z" fill="white"/>
        <path d="M56.585 29.24c-1.29 0-2.44-0.24-3.45-0.71c-1.01-0.47-1.8-1.13-2.37-1.97c-0.57-0.84-0.86-1.82-0.86-2.92c0-1.1 0.29-2.08 0.86-2.92c0.57-0.84 1.36-1.5 2.37-1.97c1.01-0.47 2.16-0.71 3.45-0.71c1.29 0 2.44 0.24 3.45 0.71c1.01 0.47 1.8 1.13 2.37 1.97c0.57 0.84 0.86 1.82 0.86 2.92c0 1.1-0.29 2.08-0.86 2.92c-0.57 0.84-1.36 1.5-2.37 1.97c-1.01 0.47-2.16 0.71-3.45 0.71zM56.585 26.78c0.75 0 1.35-0.25 1.81-0.76c0.46-0.51 0.69-1.17 0.69-1.98c0-0.81-0.23-1.47-0.69-1.98c-0.46-0.51-1.06-0.76-1.81-0.76c-0.75 0-1.35 0.25-1.8 0.76c-0.45 0.51-0.68 1.17-0.68 1.98c0 0.81 0.23 1.47 0.68 1.98c0.45 0.51 1.05 0.76 1.8 0.76z" fill="white"/>
        <path d="M69.9368 14.68V18.4h2.44v2.3h-2.44v5.74c0 0.45 0.1 0.78 0.31 0.97c0.21 0.19 0.57 0.29 1.09 0.29h1.04V29c-0.33 0.05-0.66 0.1-0.99 0.14c-0.33 0.04-0.65 0.06-0.97 0.06c-1.14 0-2.02-0.29-2.64-0.86c-0.62-0.57-0.92-1.45-0.92-2.64v-5.9h-1.84v-2.3h0.52c0.53 0 0.94-0.15 1.22-0.46c0.28-0.31 0.42-0.71 0.42-1.22v-1.14H69.9368z" fill="white"/>
        <path d="M81.6586 29.24c-1.15 0-2.15-0.24-3-0.71c-0.85-0.47-1.51-1.13-1.98-1.98c-0.47-0.85-0.7-1.82-0.7-2.91c0-1.09 0.23-2.06 0.7-2.9c0.47-0.85 1.13-1.51 1.98-1.97c0.85-0.47 1.85-0.71 3-0.71c0.87 0 1.64 0.15 2.31 0.44c0.67 0.29 1.22 0.71 1.65 1.26V17.4h2.88V29h-2.88v-1.66c-0.41 0.55-0.95 0.97-1.63 1.26c-0.68 0.29-1.46 0.44-2.33 0.44zM82.2386 26.76c0.7 0 1.26-0.25 1.67-0.76c0.41-0.51 0.62-1.35 0.62-2.52c0-1.17-0.21-2-0.62-2.51c-0.41-0.51-0.97-0.76-1.67-0.76c-0.7 0-1.26 0.25-1.67 0.76c-0.41 0.51-0.62 1.34-0.62 2.51c0 1.17 0.21 2.01 0.62 2.52c0.41 0.51 0.97 0.76 1.67 0.76z" fill="white"/>
        <path d="M98.0012 18.4V21h-1.32c-0.79 0-1.38 0.19-1.76 0.58c-0.38 0.39-0.58 1.04-0.58 1.96V29h-2.88V18.4h2.88v1.72c0.35-0.59 0.77-1.03 1.26-1.32c0.49-0.29 1.07-0.44 1.74-0.44h0.66z" fill="white"/>
      </svg>)
    },
    {
      text: "Saha satışlarımızda PayEra X10'u tercih ettik ve iş süreçlerimiz %30 hızlandı. Uzun pil ömrü sayesinde tam gün sahada kalabiliyoruz ve mobil internet bağlantısıyla anında sipariş girişi yapabiliyoruz. Teknik destek ekibi de her zaman yanımızda.",
      author: "Mehmet Yılmaz",
      position: "Satış Yöneticisi",
      company: "Anadolu Dağıtım",
      rating: 5,
      image: "/images/testimonial-default.jpg",
      logoSvg: (<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="120" height="40" rx="4" fill="#FF6B35"/>
        <path d="M18.52 29V15.4h5.32c1.48 0 2.69 0.33 3.63 0.99c0.94 0.64 1.41 1.55 1.41 2.73c0 0.8-0.22 1.49-0.65 2.07c-0.43 0.58-1.03 0.99-1.8 1.23c0.93 0.19 1.67 0.59 2.22 1.22c0.55 0.63 0.83 1.39 0.83 2.3c0 1.32-0.49 2.34-1.46 3.06c-0.97 0.72-2.27 1.08-3.88 1.08H18.52zM21.16 20.78h2.81c0.6 0 1.08-0.15 1.42-0.46c0.34-0.31 0.51-0.74 0.51-1.29c0-0.54-0.17-0.97-0.51-1.28c-0.34-0.31-0.82-0.47-1.42-0.47h-2.81V20.78zM21.16 26.42h3.06c0.65 0 1.16-0.16 1.53-0.49c0.37-0.33 0.56-0.78 0.56-1.36c0-0.58-0.19-1.03-0.56-1.36c-0.37-0.33-0.88-0.49-1.53-0.49h-3.06V26.42z" fill="white"/>
        <path d="M36.8778 29.24c-1.02 0-1.93-0.24-2.72-0.71c-0.79-0.47-1.41-1.13-1.85-1.97c-0.44-0.85-0.66-1.82-0.66-2.91c0-1.09 0.22-2.06 0.66-2.9c0.44-0.85 1.06-1.51 1.85-1.98c0.79-0.47 1.7-0.71 2.72-0.71c1.02 0 1.93 0.24 2.72 0.71c0.79 0.47 1.41 1.13 1.85 1.98c0.44 0.84 0.66 1.81 0.66 2.9c0 1.09-0.22 2.06-0.66 2.91c-0.44 0.84-1.06 1.5-1.85 1.97c-0.79 0.47-1.7 0.71-2.72 0.71zM36.8778 26.76c0.7 0 1.25-0.25 1.66-0.76c0.41-0.51 0.62-1.35 0.62-2.52c0-1.17-0.21-2-0.62-2.51c-0.41-0.51-0.96-0.76-1.66-0.76c-0.7 0-1.26 0.25-1.67 0.76c-0.41 0.51-0.61 1.34-0.61 2.51c0 1.17 0.2 2.01 0.61 2.52c0.41 0.51 0.97 0.76 1.67 0.76z" fill="white"/>
      </svg>)
    }
  ];

  useEffect(() => {
    console.log("PayEra X10 sayfası yüklendi");
    document.title = "PayEra X10 - Kompakt POS Çözümü";
    
    window.scrollTo(0, 0);

    // Testimonial carousel interval
    const interval = setInterval(() => {
      setActiveIndex(current => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  // Generate star rating component
  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className={`w-5 h-5 ${i < rating ? 'text-accent' : 'text-gray-300'}`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.618 4.995a1 1 0 00.95.69h5.262c.969 0 1.371 1.24.588 1.81l-4.26 3.09a1 1 0 00-.364 1.118l1.618 4.995c.3.921-.755 1.688-1.54 1.118l-4.26-3.09a1 1 0 00-1.176 0l-4.26 3.09c-.784.57-1.838-.197-1.539-1.118l1.618-4.995a1 1 0 00-.364-1.118l-4.26-3.09c-.783-.57-.38-1.81.588-1.81h5.262a1 1 0 00.95-.69l1.618-4.995z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl font-bold mb-4">PayEra X10</h1>
              <p className="text-xl mb-8">Küçük işletmeler için kompakt ve ekonomik yazarkasa POS çözümü</p>
              <div className="flex flex-wrap gap-4">
                <a href="#features" className="btn btn-accent">Özellikler</a>
                <a href="#specs" className="btn btn-outline-light">Teknik Özellikler</a>
                <Link to="/iletisim" className="btn btn-outline-light">Fiyat Teklifi Alın</Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Image 
                  src="/images/product-x10.png" 
                  alt="PayEra X10" 
                  className="max-w-full h-auto max-h-80 object-contain"
                  fallback="/images/product-x10.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-16 bg-bg-light">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-text-heading">Temel Özellikler</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-text-heading">{feature.title}</h3>
                <p className="text-text-body">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Image Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-text-heading">Ürün Görselleri</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-bg-light p-4 rounded-lg shadow-md">
              <Image 
                src="/images/product-x10.png" 
                alt="PayEra X10 Ön Görünüm" 
                className="w-full h-auto rounded"
                fallback="/images/product-x10.png"
              />
            </div>
            <div className="bg-bg-light p-4 rounded-lg shadow-md">
              <Image 
                src="/images/product-x10.png" 
                alt="PayEra X10 Yan Görünüm" 
                className="w-full h-auto rounded"
                fallback="/images/product-x10.png"
              />
            </div>
            <div className="bg-bg-light p-4 rounded-lg shadow-md">
              <Image 
                src="/images/product-x10.png" 
                alt="PayEra X10 Yazıcı Detayı" 
                className="w-full h-auto rounded"
                fallback="/images/product-x10.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section id="specs" className="py-16 bg-bg-light">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-text-heading">Teknik Özellikler</h2>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {specifications.map((spec, index) => (
                <div 
                  key={index} 
                  className={`p-4 ${index % 2 === 0 ? 'bg-white' : 'bg-bg-light'} border-b border-gray-200`}
                >
                  <h3 className="text-sm font-semibold text-text-heading mb-1">{spec.label}</h3>
                  <p className="text-text-body">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-text-heading">İdeal Kullanım Alanları</h2>
          <p className="text-center text-text-body mb-12 max-w-2xl mx-auto">
            PayEra X10, çeşitli işletme türleri için esnek ve uygun maliyetli bir çözüm sunar.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-bg-light p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-text-heading">{useCase.title}</h3>
                <p className="text-text-body">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">PayEra X10 ile İşinizi Büyütün</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Küçük işletmeniz için büyük bir adım atın. Ekonomik, kompakt ve güçlü PayEra X10 ile tanışın.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/iletisim" className="btn btn-accent">Fiyat Teklifi Alın</Link>
            <Link to="/bayilik" className="btn btn-outline-light">Bayilik Fırsatları</Link>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-text-heading">Diğer Ürünlerimiz</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-bg-alt p-4 flex items-center justify-center">
                  <Image 
                    src="/images/product-s20.png" 
                    alt="PayEra S20" 
                    className="max-h-40 object-contain"
                    fallback="/images/product-s20.png"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-2 text-text-heading">PayEra S20</h3>
                  <p className="text-text-body mb-4">Orta ölçekli işletmeler için ideal çözüm</p>
                  <Link to="/urunler/payera-s20" className="btn btn-primary">İncele</Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-bg-alt p-4 flex items-center justify-center">
                  <Image 
                    src="/images/product-pro30.png" 
                    alt="PayEra Pro 30" 
                    className="max-h-40 object-contain"
                    fallback="/images/product-pro30.png"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-2 text-text-heading">PayEra Pro 30</h3>
                  <p className="text-text-body mb-4">Profesyonel işletmeler için tam donanımlı çözüm</p>
                  <Link to="/urunler/payera-pro-30" className="btn btn-primary">İncele</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - New component */}
      <section className="py-16 bg-gradient-to-b from-white to-bg-light overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary opacity-5 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute top-20 left-20 text-9xl text-primary/5 font-serif">❝</div>
          <div className="absolute bottom-20 right-20 text-9xl text-primary/5 font-serif rotate-180">❝</div>
        </div>

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-sm font-semibold text-primary mb-3">
              Müşteri Deneyimleri
            </span>
            <h2 className="text-3xl font-bold text-center mb-4 text-text-heading">PayEra X10 Kullanan İşletmeler</h2>
            <p className="text-text-body max-w-2xl mx-auto">
              PayEra X10 ile işletmelerinde verimlilik ve müşteri memnuniyetini artıran işletmeler deneyimlerini paylaşıyor.
            </p>
          </div>
          
          {/* Testimonial carousel */}
          <div 
            className="relative overflow-hidden" 
            ref={testimonialRef}
          >
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="min-w-full"
                >
                  <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-all duration-300 border border-gray-100">
                      {/* Quote icon */}
                      <div className="text-primary/10 text-7xl font-serif leading-none mb-4">❝</div>
                      
                      {/* Testimonial text */}
                      <p className="text-xl md:text-2xl text-text-body leading-relaxed mb-8">
                        {testimonial.text}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="flex items-center">
                          {/* Profile image */}
                          <div className="mr-4 relative">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30">
                              <img 
                                src={testimonial.image} 
                                alt={testimonial.author}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.onerror = null;
                                  target.src = "/images/testimonial-default.jpg";
                                }}
                              />
                            </div>
                            {/* Accent circle decoration */}
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent rounded-full border-2 border-white"></div>
                          </div>
                          
                          {/* Author info */}
                          <div>
                            <h4 className="font-bold text-text-heading text-lg">{testimonial.author}</h4>
                            <p className="text-text-body text-sm">{testimonial.position}</p>
                            <p className="text-primary-dark font-medium text-sm">{testimonial.company}</p>
                            <div className="mt-1">{renderStars(testimonial.rating)}</div>
                          </div>
                        </div>
                        
                        {/* Company logo SVG */}
                        <div className="h-10 opacity-80">
                          {testimonial.logoSvg}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    activeIndex === index ? 'bg-accent' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Navigation arrows */}
            <button
              onClick={() => goToTestimonial((activeIndex - 1 + testimonials.length) % testimonials.length)}
              className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => goToTestimonial((activeIndex + 1) % testimonials.length)}
              className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300 focus:outline-none"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 text-center">
            <p className="text-sm text-text-body mb-5 font-medium uppercase tracking-wider">Güven ve Kalite</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {/* Bankalar */}
              <div className="h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                <svg className="h-8" viewBox="0 0 150 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M46.09 9.29h9.46v3.12h-5.88v2.35h5.54v3.11h-5.54v2.54h5.88v3.12h-9.46V9.29z" fill="#E4002B"/>
                  <path d="M67.3 15.46c0 4.32-2.52 8.26-8.39 8.26-5.87 0-8.38-3.94-8.38-8.26 0-4.33 2.51-8.39 8.38-8.39 5.87 0 8.39 4.06 8.39 8.39zm-12.93 0c0 2.83 1.44 5.08 4.54 5.08 3.1 0 4.55-2.25 4.55-5.08 0-2.9-1.44-5.21-4.55-5.21-3.1 0-4.54 2.31-4.54 5.21z" fill="#0033A0"/>
                  <path d="M68.41 9.29h3.58v14.24h-3.58V9.29z" fill="#E4002B"/>
                  <path d="M77.04 9.29h9.46v3.12h-5.87v2.35h5.53v3.11h-5.53v2.54h5.87v3.12h-9.46V9.29z" fill="#0033A0"/>
                  <path d="M92.99 12.48h-3.88V9.29h11.35v3.19h-3.88v11.05h-3.59V12.48z" fill="#009A4E"/>
                  <path d="M107.18 18.94h-1.88v4.59h-3.59V9.29h6.06c3.35 0 5.44 2.03 5.44 4.83 0 2.05-1.12 3.64-2.93 4.35l3.14 5.06h-4.03l-2.21-4.59zm.3-3.12c1.14 0 1.86-.63 1.86-1.7 0-1.06-.72-1.7-1.86-1.7h-2.18v3.4h2.18z" fill="#E4002B"/>
                  <path d="M121.29 9.29h3.59v14.24h-3.59V9.29z" fill="#0033A0"/>
                  <path d="M133.12 9.29h3.58v11.12h5.25v3.12h-8.83V9.29z" fill="#009A4E"/>
                  <path d="M32.53 17.71H17.59v18.24h14.94V17.71z" fill="#FF5A00"/>
                  <path d="M18.41 26.83c0-3.7 1.73-7 4.42-9.12a13.38 13.38 0 00-8.25-2.83c-7.44 0-13.48 6.03-13.48 13.46 0 7.43 6.04 13.46 13.48 13.46 3.1 0 5.95-1.05 8.25-2.83a13.35 13.35 0 01-4.42-9.12v-2.02z" fill="#EB001B"/>
                  <path d="M45.18 26.83c0 7.43-6.04 13.46-13.47 13.46-3.1 0-5.96-1.05-8.25-2.83a13.35 13.35 0 004.41-9.12v-2.01a13.35 13.35 0 00-4.41-9.13 13.38 13.38 0 018.25-2.83c7.43 0 13.47 6.03 13.47 13.46z" fill="#F79E1B"/>
                </svg>
              </div>
              
              <div className="h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                <svg className="h-7" viewBox="0 0 512 175" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M244.848 178.008H190.032V38.593H244.848V178.008Z" fill="#00579F"/>
                  <path d="M195.767 108.3C195.767 83.7385 206.889 61.6948 224.648 46.7904L224.542 46.9117C210.252 36.1506 192.388 30 173.004 30C128.436 30 92.4443 65.9917 92.4443 110.559C92.4443 155.127 128.436 191.119 173.004 191.119C192.388 191.119 210.252 184.968 224.542 174.207L224.648 174.328C206.889 159.424 195.767 137.38 195.767 112.819V108.3Z" fill="#00579F"/>
                  <path d="M458.68 178.008H401.513C401.513 178.008 454.064 74.6066 455.504 71.292C458.384 64.5637 462.111 58.5058 468.346 53.4385C474.58 48.3711 482.835 45.8267 492.022 45.8267C505.377 45.8267 512 52.9351 512 63.59L458.68 178.008Z" fill="#FAA61A"/>
                  <path d="M315.903 45.8267H363.502L339.685 118.091L385.725 45.8267H437.654L366.236 178.008H314.306L315.903 45.8267Z" fill="#00579F"/>
                  <path d="M272.286 45.8267L290.811 126.143C290.811 126.143 250.283 100.256 240.719 94.2456L243.741 178.008H191.49L171.946 67.1339C207.555 52.5662 253.762 45.8267 272.286 45.8267Z" fill="#FAA61A"/>
                </svg>
              </div>
              
              <div className="h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                <svg className="h-8" viewBox="0 0 200 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30.255 19.995V54.754H23.674V19.995H30.255Z" fill="#000000"/>
                  <path d="M51.164 21.423C54.588 21.423 57.062 22.644 58.586 25.086C60.11 27.528 60.872 31.749 60.872 37.749V54.754H54.291V36.423C54.291 32.918 53.885 30.476 53.072 29.098C52.259 27.72 50.7 27.032 48.395 27.032C45.582 27.032 43.661 28.214 42.644 30.56V54.754H36.062V22.071H42.644V24.869C44.678 22.573 47.513 21.423 51.164 21.423Z" fill="#000000"/>
                  <path d="M81.11 21.423C84.997 21.423 88.023 22.848 90.188 25.697C92.353 28.547 93.444 32.63 93.444 37.947C93.444 43.304 92.246 47.463 89.851 50.424C87.456 53.385 84.293 54.866 80.363 54.866C76.431 54.866 73.713 53.768 71.208 51.56V66.891H64.74V22.071H71.319V24.869C73.484 22.573 76.734 21.423 81.11 21.423ZM77.907 49.257C80.43 49.257 82.264 48.159 83.413 45.963C84.563 43.768 85.138 41.105 85.138 37.976C85.138 34.846 84.563 32.315 83.413 30.37C82.264 28.424 80.449 27.45 77.968 27.45C75.486 27.45 73.484 28.114 71.961 29.443V45.963C73.484 48.159 75.486 49.257 77.968 49.257H77.907Z" fill="#000000"/>
                  <path d="M112.735 49.201C115.01 49.201 116.976 48.507 118.635 47.121V42.1H117.492C115.068 42.1 113.123 42.302 111.651 42.704C110.18 43.106 109.444 44.063 109.444 45.576C109.444 47.09 110.54 48.267 112.735 49.201ZM111.468 54.866C107.503 54.866 104.427 53.826 102.239 51.745C100.05 49.665 98.951 46.934 98.951 43.553C98.951 36.767 104.69 33.373 116.165 33.373H118.636V31.271C118.636 29.499 118.183 28.172 117.277 27.29C116.371 26.408 114.88 25.967 112.803 25.967C110.726 25.967 109.102 26.427 107.93 27.348C106.758 28.269 106.172 29.651 106.172 31.492H100.056C100.056 26.996 101.817 24.14 105.343 21.931C107.02 21.001 108.931 20.397 111.073 20.121C113.222 19.843 115.386 19.998 117.456 20.576C121.959 21.749 124.217 25.2 124.217 30.928V44.261C124.217 47.58 124.487 50.278 125.028 52.356V54.754H118.803C118.427 53.345 118.195 51.884 118.112 50.143C115.55 53.291 112.05 54.866 107.604 54.866H111.468Z" fill="#000000"/>
                  <path d="M168.548 54.866C164.403 54.866 161.172 53.422 158.857 50.537C156.541 47.652 155.385 43.802 155.385 38.986C155.385 33.962 156.694 30.015 159.315 27.146C161.936 24.277 165.153 22.842 168.967 22.842C172.057 22.842 174.683 23.834 176.845 25.82V14.126H182.925V54.754H176.845V51.746C174.746 53.826 171.976 54.866 168.548 54.866ZM169.687 49.257C172.042 49.257 174.057 48.159 175.725 45.963V30.37C173.994 28.424 171.975 27.45 169.687 27.45C167.06 27.45 165.153 28.318 163.966 30.053C162.779 31.788 162.186 34.279 162.186 37.526C162.186 40.773 162.842 43.441 164.151 45.529C165.462 47.618 167.31 48.66 169.687 48.66V49.257Z" fill="#000000"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default PayEraX10;
