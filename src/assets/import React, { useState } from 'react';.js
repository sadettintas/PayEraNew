import React, { useState } from 'react';
import Image from 'next/image';

/**
 * Image component with fallback support
 * Use this for displaying images that might fail to load
 */
const ImageWithFallback = ({
  src,
  alt,
  fallbackSrc = '/assets/images/placeholders/default.png',
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [error, setError] = useState(false);

  const handleError = () => {
    if (!error) {
      setImgSrc(fallbackSrc);
      setError(true);
    }
  };

  return (
    <Image
      src={imgSrc}
      alt={alt}
      onError={handleError}
      {...props}
      className={`${props.className || ''} ${error ? 'fallback-image' : ''}`}
    />
  );
};

export default ImageWithFallback;
