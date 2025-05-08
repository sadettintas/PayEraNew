import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/images');
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        
        const data = await response.json();
        setImages(data);
        
        // Extract unique categories
        const uniqueCategories = [...new Set(data.map(img => img.category))];
        setCategories(['all', ...uniqueCategories]);
        
        setError(null);
      } catch (err) {
        console.error('Failed to fetch images:', err);
        setError('Failed to load images. Please try again later.');
        
        // Set some dummy categories for the UI to work
        setCategories(['all']);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  if (isLoading) {
    return <div className="loading">Loading image gallery...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="image-gallery">
      <h2>Site Images</h2>
      
      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      
      <div className="gallery-grid">
        {filteredImages.length > 0 ? (
          filteredImages.map((image, index) => (
            <div key={index} className="image-card">
              <div className="image-wrapper">
                {image.width && image.height ? (
                  <Image 
                    src={image.path} 
                    alt={image.fileName}
                    width={image.width} 
                    height={image.height}
                    layout="responsive"
                  />
                ) : (
                  <img src={image.path} alt={image.fileName} />
                )}
              </div>
              <div className="image-info">
                <p className="filename">{image.fileName}</p>
                <p className="dimensions">
                  {image.width && image.height 
                    ? `${image.width} × ${image.height}` 
                    : 'Dimensions unknown'}
                </p>
                <p className="filesize">{image.size}</p>
                <code className="path">{image.path}</code>
              </div>
            </div>
          ))
        ) : (
          <div className="no-images">No images found in the "{selectedCategory}" category</div>
        )}
      </div>
      
      <style jsx>{`
        .image-gallery {
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        h2 {
          margin-bottom: 20px;
          text-align: center;
        }
        
        .category-filter {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 20px;
          gap: 8px;
        }
        
        .category-filter button {
          background: #f0f0f0;
          border: none;
          padding: 8px 16px;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .category-filter button.active {
          background: #0070f3;
          color: white;
        }
        
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
        }
        
        .image-card {
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
          background: white;
        }
        
        .image-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }
        
        .image-wrapper {
          height: 200px;
          overflow: hidden;
          position: relative;
          background: #f8f8f8;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        
        .image-info {
          padding: 15px;
        }
        
        .image-info p {
          margin: 5px 0;
          font-size: 14px;
        }
        
        .filename {
          font-weight: 600;
          word-break: break-all;
        }
        
        .dimensions, .filesize {
          color: #666;
        }
        
        .path {
          display: block;
          margin-top: 8px;
          padding: 6px;
          background: #f5f5f5;
          border-radius: 4px;
          font-size: 12px;
          overflow: auto;
          white-space: nowrap;
          color: #0070f3;
        }
        
        .no-images {
          grid-column: 1 / -1;
          text-align: center;
          padding: 40px;
          color: #666;
          background: #f8f8f8;
          border-radius: 8px;
        }
        
        .loading, .error-message {
          text-align: center;
          padding: 40px;
          color: #666;
        }
        
        .error-message {
          color: #d32f2f;
        }
      `}</style>
    </div>
  );
};

export default ImageGallery;
