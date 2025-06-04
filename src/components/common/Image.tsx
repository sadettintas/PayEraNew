import React from 'react';
import { getImageUrl } from '../../utils/imageLoader';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
}

/**
 * GitHub Pages uyumlu resim bileşeni.
 * Otomatik olarak doğru baz URL'yi ekler.
 */
const Image: React.FC<ImageProps> = ({ src, alt, className, fallback, ...rest }) => {
  // Hata durumunda fallback göster veya default bir placeholder kullan
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    if (fallback) {
      target.src = getImageUrl(fallback);
    } else {
      target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23f0f0f0%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-family%3D%22Arial%22%20font-size%3D%2220%22%20fill%3D%22%23999%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EResim%20Yüklenemedi%3C%2Ftext%3E%3C%2Fsvg%3E';
    }
  };

  return (
    <img
      src={getImageUrl(src)}
      alt={alt}
      className={className}
      onError={handleError}
      {...rest}
    />
  );
};

export default Image;
