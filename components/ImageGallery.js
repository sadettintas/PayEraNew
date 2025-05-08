import React, { useState, useEffect } from 'react';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // In a real application, you would fetch this data from your server
    // or from the result of the imageAnalyzer script
    const fetchImages = async () => {
      try {
        // This is a placeholder. In production, you would have an endpoint to fetch the images
        const response = await fetch('/api/images');
        const data = await response.json();
        setImages(data);
        
        // Extract unique categories
        const uniqueCategories = [...new Set(data.map(img => img.category))];
        setCategories(['all', ...uniqueCategories]);
      } catch (error) {
        console.error('Failed to fetch images:', error);
        // Fallback to some example images if fetch fails
        setImages([
          { path: '/assets/images/logo.png', category: 'branding' },
          { path: '/assets/images/hero.jpg', category: 'hero' },
          { path: '/assets/images/team/member1.jpg', category: 'team' },
          { path: '/assets/images/products/product1.png', category: 'products' }
        ]);
        setCategories(['all', 'branding', 'hero', 'team', 'products']);
      }
    };

    fetchImages();
  }, []);

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="image-gallery">
      <h2>Project Images</h2>
      
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
        {filteredImages.map((image, index) => (
          <div key={index} className="image-card">
            <img src={image.path} alt={`Gallery item ${index}`} />
            <div className="image-info">
              <p>{image.path.split('/').pop()}</p>
              <p className="category">{image.category}</p>
            </div>
          </div>
        ))}
      </div>
      
      {filteredImages.length === 0 && (
        <p className="no-images">No images found in this category.</p>
      )}
      
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
        }
        
        .category-filter button {
          background: #f0f0f0;
          border: none;
          padding: 8px 16px;
          margin: 0 5px 10px;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.3s;
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
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
        }
        
        .image-card:hover {
          transform: translateY(-5px);
        }
        
        .image-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        
        .image-info {
          padding: 10px;
          background: white;
        }
        
        .image-info p {
          margin: 5px 0;
          font-size: 14px;
          word-break: break-all;
        }
        
        .image-info .category {
          color: #666;
          font-style: italic;
        }
        
        .no-images {
          text-align: center;
          margin-top: 30px;
          color: #666;
        }
      `}</style>
    </div>
  );
};

export default ImageGallery;
