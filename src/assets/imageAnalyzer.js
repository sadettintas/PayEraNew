/**
 * Utility for analyzing images in the assets/images directory
 */
const fs = require('fs');
const path = require('path');
const sizeOf = require('image-size'); // Consider installing this package for getting image dimensions

const IMAGES_DIR = path.join(process.cwd(), 'assets', 'images');

function analyzeImages() {
  try {
    // Check if directory exists
    if (!fs.existsSync(IMAGES_DIR)) {
      console.error('Images directory does not exist:', IMAGES_DIR);
      return [];
    }

    // Get all files in the directory and subdirectories
    const imageFiles = getAllFiles(IMAGES_DIR);
    
    // Filter for image files only
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.ico'];
    const images = imageFiles.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return imageExtensions.includes(ext);
    });

    // Create image metadata
    const imageData = images.map(imagePath => {
      const relativePath = path.relative(IMAGES_DIR, imagePath).replace(/\\/g, '/');
      const fileName = path.basename(imagePath);
      const ext = path.extname(imagePath).toLowerCase();
      const size = fs.statSync(imagePath).size;
      
      let dimensions = { width: null, height: null };
      try {
        if (['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext)) {
          dimensions = sizeOf(imagePath);
        }
      } catch (err) {
        console.warn(`Couldn't get dimensions for ${imagePath}`);
      }
      
      return {
        path: `/assets/images/${relativePath}`,
        fileName,
        extension: ext,
        size: formatSize(size),
        width: dimensions.width,
        height: dimensions.height,
        category: getCategoryFromPath(relativePath)
      };
    });

    console.log(`Found ${imageData.length} images in the assets/images directory`);
    
    return imageData;
  } catch (error) {
    console.error('Error analyzing images:', error);
    return [];
  }
}

function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' bytes';
  else if (bytes < 1048576) return (bytes / 1024).toFixed(2) + ' KB';
  else return (bytes / 1048576).toFixed(2) + ' MB';
}

function getCategoryFromPath(filePath) {
  const parts = filePath.split('/');
  return parts.length > 1 ? parts[0] : 'root';
}

module.exports = { analyzeImages };
