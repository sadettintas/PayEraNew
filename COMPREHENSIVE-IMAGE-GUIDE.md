# Comprehensive Image Handling Guide for PayEra Web

## Overview

This document provides definitive guidance on handling images in the PayEra Web application, which is a React application built with Vite and deployed to GitHub Pages using HashRouter.

## Key Configurations

1. **Base URL Configuration**
   - In `vite.config.ts`: `base: "/PayEra/"`
   - This means all assets are served from `/PayEra/` in production

2. **Router Configuration**
   - The application uses `HashRouter` for GitHub Pages compatibility
   - This affects how static assets like images are referenced

3. **Image Locations**
   - Primary location: `public/images/`
   - Secondary location: `src/assets/images/` (for imported images)

## Best Practices for Image Paths

### In React Components

**✅ DO THIS:**
```jsx
// Relative paths work reliably with HashRouter
<img src="images/hero-image-1.jpg" alt="Hero" />
```

**❌ AVOID THIS:**
```jsx
// Absolute paths with base can be problematic with HashRouter
<img src="/PayEra/images/hero-image-1.jpg" alt="Hero" />

// Source directory references will not work in production
<img src="/src/assets/images/hero-image.jpg" alt="Hero" />
```

### Image Error Handling

Always include error handling for images to gracefully handle missing files:

```jsx
<img 
  src="images/hero-image-1.jpg" 
  alt="Hero" 
  onError={(e) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = "images/fallback-image.jpg"; // Local fallback
  }}
/>
```

### Preloading Important Images

For critical images like sliders, preload them to ensure they're ready before display:

```jsx
useEffect(() => {
  const img = new Image();
  img.onload = () => setImageLoaded(true);
  img.onerror = () => {
    console.error("Failed to load image");
    setImageLoaded(true); // Continue anyway
  };
  img.src = "images/hero-image.jpg";
}, []);
```

## Build Process

### Standard Build

The build process has been enhanced to automatically handle image copying and validation:

```bash
npm run build
```

This will:
1. Build the application
2. Run the post-build script (`post-build-images.sh`) that copies images
3. Handle zero-byte or missing images with appropriate fallbacks

### Post-Build Image Processing

The `post-build-images.sh` script performs the following tasks:
- Copies all images from `public/images/` to `dist/images/`
- Checks for missing or zero-byte images and replaces them with fallbacks
- Provides a detailed log of all image processing

## Testing Image Loading

If you encounter image loading issues:

1. Use built-in test pages:
   - `/PayEra/#/test-images` route tests different image loading scenarios

2. Run manual checks:
   ```bash
   # Verify images in dist folder
   ls -la dist/images/
   
   # Start preview server
   npm run preview
   ```

3. Use browser developer tools:
   - Check the Network tab to see which image requests succeed or fail
   - Verify correct paths in the Elements tab

## Troubleshooting Common Issues

### Images Work Locally But Not in Production

- Check for absolute paths that might be working locally but fail in production
- Ensure all image paths are relative (`images/...`) in React components
- Verify the build process is correctly copying images to `dist/images/`

### Some Images Fail to Load

- Verify the image file exists in both `public/images/` and `dist/images/`
- Check for typos in file paths or extensions
- Ensure proper fallback handling is implemented

### Zero-Byte Image Files

If you encounter zero-byte image files:
- Replace them with actual content in the `public/images/` folder
- The build process includes fallback mechanisms, but it's better to fix the source

## Additional Resources

- For static HTML testing: Use absolute paths with base (`/PayEra/images/...`)
- For CSS background images: Use relative paths (`../images/...`)
- For dynamic imports: Use `import` statements for images in `src/assets/images/`

## Maintainer Checklist

When adding new images:
1. Place them in `public/images/`
2. Use consistent naming (kebab-case recommended)
3. Compress images appropriately for web use
4. Add proper error handling with local fallbacks
5. Test in both development and production environments

---

This guide was last updated: 9 Mayıs 2025
