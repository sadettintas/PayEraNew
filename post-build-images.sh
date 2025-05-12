#!/bin/bash

# Script to ensure images are correctly copied after build
echo "Running post-build image copy script..."

# Make sure the dist/images directory exists
mkdir -p dist/images
echo "Created dist/images directory"

# Copy all images from public/images to dist/images
cp -r public/images/* dist/images/
echo "Copied images from public/images to dist/images"

# Check for zero-byte or missing hero images and replace them with placeholder images
for img in "hero-image-1.jpg:hero-image.jpg" "hero-image-2.jpg:hero-image.jpg" "hero-image-3.jpg:hero-image.jpg" "testimonial-default.jpg:testimonials.jpg" "team-member.jpg:team.jpg"; do
  target=$(echo $img | cut -d':' -f1)
  fallback=$(echo $img | cut -d':' -f2)
  
  if [ ! -s "dist/images/$target" ]; then
    echo "Creating placeholder for $target using $fallback"
    
    # Check if fallback exists in dist/images
    if [ -s "dist/images/$fallback" ]; then
      cp "dist/images/$fallback" "dist/images/$target"
    # Check if fallback exists in src/assets/images
    elif [ -s "src/assets/images/$fallback" ]; then
      cp "src/assets/images/$fallback" "dist/images/$target"
    # If no fallback found, use any existing image
    else
      # Find first non-zero image file in src/assets/images
      FIRST_IMAGE=$(find src/assets/images -type f -name "*.jpg" -size +0c | head -1)
      if [ -n "$FIRST_IMAGE" ]; then
        echo "No suitable fallback found for $target. Using $FIRST_IMAGE"
        cp "$FIRST_IMAGE" "dist/images/$target"
      else
        echo "ERROR: No fallback images found for $target"
      fi
    fi
  fi
done

# List the image directory to verify
echo "Contents of dist/images directory:"
ls -la dist/images

echo "Image copy completed."
