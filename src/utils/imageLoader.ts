/**
 * Resim yükleme işlemleri için yardımcı fonksiyonlar
 */

// GitHub Pages için temel URL yolunu belirleme fonksiyonu


// Dinamik base path belirleyici: hem local, hem prod, hem farklı alt dizinler için uyumlu
export const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    // Vite'ın base path'ini otomatik algıla
    const { pathname } = window.location;
    // Örn: /PayEraNew/ veya /PayEra/ gibi bir alt dizin varsa onu al
    const match = pathname.match(/^\/(\w+)\//);
    if (match) {
      return `/${match[1]}`;
    }
    // Kökteyse veya localdeyse boş string döndür
    return '';
  }
  // SSR veya window yoksa fallback
  return '';
};

/**
 * Görsel URL'sini düzeltir, temel URL'yi ekler
 * @param {string} url - Orijinal görüntü URL'si
 * @returns {string} - Tam URL
 */

export const getImageUrl = (url: string) => {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  const base = getBaseUrl();
  // Eğer zaten base path ile başlıyorsa tekrar ekleme
  if (url.startsWith(base + '/images/')) return url;
  if (url.startsWith('/images/')) return `${base}${url}`;
  // Eğer başında / yoksa otomatik ekle
  return `${base}/images/${url.replace(/^\/+/, '')}`;
};

/**
 * Görüntüleri önceden yükler
 * @param {string[]} imageUrls - Önceden yüklenecek görüntü URL'leri
 * @param {function} onComplete - Tüm görüntüler yüklendiğinde çağrılacak fonksiyon
 */
export const preloadImages = (imageUrls: string[], onComplete?: () => void) => {
  let loadedCount = 0;
  const totalImages = imageUrls.length;
  
  const checkAllLoaded = () => {
    loadedCount++;
    if (loadedCount === totalImages && onComplete) {
      onComplete();
    }
  };
  
  imageUrls.forEach(url => {
    const img = new Image();
    img.onload = checkAllLoaded;
    img.onerror = () => {
      console.error(`Failed to preload image: ${url}`);
      checkAllLoaded();
    };
    // URL'yi düzelt ve önbelleklemeyi zorlamak için timestamp ekle
    img.src = getImageUrl(url) + '?v=' + new Date().getTime();
  });
};

/**
 * Görüntü URL'sine önbellek busting parametresi ekler
 * @param {string} url - Orijinal görüntü URL'si
 * @returns {string} - Önbellek busting parametresi ile güncellenmiş URL
 */
export const getImageWithCacheBusting = (url: string) => {
  return `${getImageUrl(url)}?v=${new Date().getTime()}`;
};

/**
 * Web sayfasının tüm görüntülerini önceden yükler
 */
export const preloadAllSiteImages = () => {
  const siteImages = [
    '/images/product-x10.png',
    '/images/product-s20.png',
    '/images/product-pro30.png',
    '/images/payera-a90.jpg',
    '/images/payera-507.jpg',
    '/images/product-features.jpg',
    '/images/hero-image-1.jpg',
    '/images/hero-image-2.jpg',
    '/images/hero-image-3.jpg',
    '/images/logo.svg',
    '/images/chairman.jpg',
    '/images/vice-chairman.jpg',
    '/images/team.jpg',
    '/images/company-image.jpg',
    '/images/testimonials.jpg',
    '/images/dealership.jpg',
    '/images/contact.jpg',
    '/images/support.jpg',
    '/images/business-support.jpg'
  ];
  
  preloadImages(siteImages, () => {
    console.log('Tüm site görüntüleri önceden yüklendi');
  });
};
