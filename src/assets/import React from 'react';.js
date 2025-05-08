import React from 'react';
import Image from 'next/image';
import ImageWithFallback from './ImageWithFallback';

/**
 * A component for displaying responsive images with appropriate sizing for different contexts
 */
const ResponsiveImage = ({ 
  src, 
  alt, 
  type = 'default',
  useFallback = true,
  ...props 
}) => {
  // Define standard dimensions for common image types
  const imageTypes = {
    logo: { width: 150, height: 50, quality: 90 },
    hero: { width: 1920, height: 1080, layout: 'responsive', quality: 85 },
    thumbnail: { width: 300, height: 200, quality: 80 },
    avatar: { width: 50, height: 50, className: 'rounded-full', quality: 85 },
    icon: { width: 24, height: 24, quality: 90 },
    banner: { width: 1200, height: 400, layout: 'responsive', quality: 85 },
    default: { width: 500, height: 300, quality: 80 }
  };

  // Use the specified type or default to basic image
  const imageProps = {
    ...imageTypes[type in imageTypes ? type : 'default'],
    ...props
  };

  if (useFallback) {
    return (
      <ImageWithFallback
        src={src}
        alt={alt}
        {...imageProps}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      {...imageProps}
    />
  );
};

export default ResponsiveImage;
