#!/bin/bash

# Define text colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}PayEra Web Product Routes Validator${NC}"
echo "This script checks if all product page routes are correctly configured"
echo

# Check that App.tsx contains all routes
echo -e "${YELLOW}Checking routes in App.tsx:${NC}"
ROUTES_CHECK=()
ROUTES_CHECK+=("payera-x10")
ROUTES_CHECK+=("payera-s20")
ROUTES_CHECK+=("payera-pro-30")
ROUTES_CHECK+=("payera-a90")
ROUTES_CHECK+=("payera-507")

for route in "${ROUTES_CHECK[@]}"
do
  if grep -q "path=\"/urunler/$route\"" src/App.tsx; then
    echo -e "  ${GREEN}✓${NC} Route /urunler/$route found"
  else
    echo -e "  ${RED}✗${NC} Route /urunler/$route NOT found"
  fi
done

echo

# Check that all product pages exist
echo -e "${YELLOW}Checking product page files:${NC}"
FILES_CHECK=()
FILES_CHECK+=("PayEraX10.tsx")
FILES_CHECK+=("PayEraS20.tsx")
FILES_CHECK+=("PayEraPro30.tsx")
FILES_CHECK+=("PayEraA90.tsx")
FILES_CHECK+=("PayEra507.tsx")

for file in "${FILES_CHECK[@]}"
do
  if [ -f "src/pages/$file" ]; then
    echo -e "  ${GREEN}✓${NC} File src/pages/$file exists"
  else
    echo -e "  ${RED}✗${NC} File src/pages/$file NOT found"
  fi
done

echo

# Check that Products.tsx contains all products
echo -e "${YELLOW}Checking products in Products.tsx:${NC}"
PRODUCTS_CHECK=()
PRODUCTS_CHECK+=("payera-x10")
PRODUCTS_CHECK+=("payera-s20")
PRODUCTS_CHECK+=("payera-pro-30")
PRODUCTS_CHECK+=("payera-a90")
PRODUCTS_CHECK+=("payera-507")

for product in "${PRODUCTS_CHECK[@]}"
do
  if grep -q "id: \"$product\"" src/pages/Products.tsx; then
    echo -e "  ${GREEN}✓${NC} Product $product found"
  else
    echo -e "  ${RED}✗${NC} Product $product NOT found"
  fi
done

echo

# Check image files exist
echo -e "${YELLOW}Checking product image files:${NC}"
IMAGES_CHECK=()
IMAGES_CHECK+=("product-x10.png")
IMAGES_CHECK+=("product-s20.png")
IMAGES_CHECK+=("product-pro30.png")
IMAGES_CHECK+=("payera-a90.jpg")
IMAGES_CHECK+=("payera-507.jpg")

for image in "${IMAGES_CHECK[@]}"
do
  if [ -f "public/images/$image" ]; then
    echo -e "  ${GREEN}✓${NC} Image public/images/$image exists"
  elif [ -f "src/assets/images/$image" ]; then
    echo -e "  ${GREEN}✓${NC} Image src/assets/images/$image exists"
  else
    echo -e "  ${RED}✗${NC} Image $image NOT found in public/images or src/assets/images"
  fi
done

echo
echo -e "${GREEN}Validation complete!${NC}"
