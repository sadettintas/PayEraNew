import React from 'react';
import Head from 'next/head';
import ImageGallery from '../components/ImageGallery';

export default function ImageGalleryPage() {
  return (
    <div>
      <Head>
        <title>Image Gallery - PayEra Web</title>
        <meta name="description" content="Browse the images used in the PayEra Web project" />
      </Head>
      
      <main>
        <ImageGallery />
      </main>
    </div>
  );
}
