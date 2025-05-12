# PayEra Web Deployment Guide

This guide describes the process for deploying the PayEra Web application to GitHub Pages.

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Git access to the repository
- GitHub Pages enabled on the repository

## Pre-Deployment Checks

1. **Run the image validator**
   ```bash
   ./image-validator.sh
   ```
   This will check for common image issues such as:
   - External image references
   - Absolute vs. relative path formats
   - Zero-byte images
   - Missing images

2. **Fix any issues identified by the validator**
   - Convert external placeholder URLs to local images
   - Ensure all component image paths use `images/...` format
   - Replace any zero-byte images

3. **Build the application locally to test**
   ```bash
   npm run build
   npm run preview
   ```
   This will:
   - Build the app
   - Run the post-build image script
   - Start a local preview server

4. **Verify essential pages and functionality**
   - Home page hero slider
   - Product pages
   - About/Hakkimizda pages 
   - Check all images load properly

## Deployment Process

1. **Clean old build artifacts**
   ```bash
   rm -rf dist
   ```

2. **Build for production**
   ```bash
   npm run build
   ```
   This will:
   - Compile the TypeScript code
   - Build the optimized assets
   - Execute post-build-images.sh to handle image copying

3. **Verify the built files**
   ```bash
   ls -la dist/
   ls -la dist/images/
   ```
   Ensure all necessary files and images are present

4. **Deploy to GitHub Pages**
   
   Option 1: Using GitHub Actions (recommended)
   - Push your changes to the main branch
   - The configured GitHub Actions workflow will handle deployment

   Option 2: Manual deployment
   ```bash
   cd dist
   git init
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push -f https://github.com/username/PayEra_Web.git main:gh-pages
   ```

5. **Verify the deployed site**
   - Visit your GitHub Pages URL (typically https://username.github.io/PayEra/)
   - Check all pages and images load correctly
   - Test different devices and screen sizes

## Troubleshooting Common Deployment Issues

### 404 Errors for Images

If images 404 after deployment:
1. Check that `vite.config.ts` has `base: "/PayEra/"` set correctly
2. Verify all image paths use the relative format (`images/...`) in components
3. Check that the post-build script ran successfully
4. Manually verify images exist in the deployed `dist/images/` directory

### White Screen After Deployment

1. Open browser developer tools console to check for errors
2. Verify the router is configured correctly for GitHub Pages (HashRouter)
3. Check the network tab to see which resources are failing to load
4. Ensure all image paths are correctly formatted

### Broken Links

1. Make sure all internal links use the HashRouter format (`/#/route-name`)
2. Check that any API endpoints are correctly configured for the production environment

## Maintaining the Deployment

After deploying, periodically:

1. Run the image validator to ensure no problematic patterns have been introduced
2. Update the documentation if new deployment procedures are developed
3. Consider automation improvements for the build and deployment process

---

Last updated: May 9, 2025
