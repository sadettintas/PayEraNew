#!/bin/bash

# image-validator.sh - A tool to validate all image references in the PayEra Web project
# Usage: ./image-validator.sh

echo "🔍 PayEra Image Validator"
echo "=========================="
echo

# Set colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Directories to check
REACT_FILES="src/pages/*.tsx src/components/**/*.tsx"
PUBLIC_IMAGES="public/images"
DIST_IMAGES="dist/images"

echo "📊 Image Inventory:"
echo "-------------------"

# Count images in directories
PUBLIC_COUNT=$(find "$PUBLIC_IMAGES" -type f -name "*.jpg" -o -name "*.png" -o -name "*.svg" -o -name "*.gif" | wc -l | tr -d ' ')
DIST_COUNT=$(find "$DIST_IMAGES" -type f -name "*.jpg" -o -name "*.png" -o -name "*.svg" -o -name "*.gif" 2>/dev/null | wc -l | tr -d ' ') || DIST_COUNT=0

echo -e "Images in public/images: ${GREEN}$PUBLIC_COUNT${NC}"
echo -e "Images in dist/images: ${GREEN}$DIST_COUNT${NC}"

echo
echo "🔎 Checking for Zero-Byte Images:"
echo "--------------------------------"

# Check for zero-byte images
ZERO_BYTE=$(find "$PUBLIC_IMAGES" -type f -size 0 -name "*.jpg" -o -name "*.png" -o -name "*.svg" -o -name "*.gif")

if [ -z "$ZERO_BYTE" ]; then
  echo -e "${GREEN}✓ No zero-byte images found in $PUBLIC_IMAGES${NC}"
else
  echo -e "${RED}❌ Found zero-byte images in $PUBLIC_IMAGES:${NC}"
  for img in $ZERO_BYTE; do
    echo "   - $img"
  done
fi

echo
echo "🔍 Checking for External Image References:"
echo "-----------------------------------------"

# Check for external references like placeholder.com
EXTERNAL_REFS=$(grep -r "placeholder.com\|imgur.com\|cloudinary.com" --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" src/)

if [ -z "$EXTERNAL_REFS" ]; then
  echo -e "${GREEN}✓ No external image references found${NC}"
else
  echo -e "${YELLOW}⚠️ Found external image references:${NC}"
  echo "$EXTERNAL_REFS" | head -10
  TOTAL_EXT=$(echo "$EXTERNAL_REFS" | wc -l)
  if [ "$TOTAL_EXT" -gt 10 ]; then
    echo "   ... and $(($TOTAL_EXT - 10)) more"
  fi
fi

echo
echo "🔍 Checking Image Path Format:"
echo "----------------------------"

# Check for absolute paths with /PayEra/images/
ABSOLUTE_PATHS=$(grep -r "/PayEra/images/" --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" src/)

if [ -z "$ABSOLUTE_PATHS" ]; then
  echo -e "${GREEN}✓ No absolute paths with /PayEra/images/ found in React components${NC}"
else
  echo -e "${YELLOW}⚠️ Found absolute paths with /PayEra/images/:${NC}"
  echo "$ABSOLUTE_PATHS" | head -10
  TOTAL_ABS=$(echo "$ABSOLUTE_PATHS" | wc -l)
  if [ "$TOTAL_ABS" -gt 10 ]; then
    echo "   ... and $(($TOTAL_ABS - 10)) more"
  fi
fi

# Check for source directory references
SRC_REFS=$(grep -r "/src/assets/images/" --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" src/)

if [ -z "$SRC_REFS" ]; then
  echo -e "${GREEN}✓ No /src/assets/images/ references found in React components${NC}"
else
  echo -e "${YELLOW}⚠️ Found /src/assets/images/ references:${NC}"
  echo "$SRC_REFS" | head -10
  TOTAL_SRC=$(echo "$SRC_REFS" | wc -l)
  if [ "$TOTAL_SRC" -gt 10 ]; then
    echo "   ... and $(($TOTAL_SRC - 10)) more"
  fi
fi

echo
echo "📋 Recommended Actions:"
echo "---------------------"

# Recommendations based on findings
if [ -n "$ZERO_BYTE" ]; then
  echo -e "${RED}➤ Replace zero-byte images with actual content${NC}"
fi

if [ -n "$EXTERNAL_REFS" ]; then
  echo -e "${YELLOW}➤ Replace external image references with local images${NC}"
fi

if [ -n "$ABSOLUTE_PATHS" ]; then
  echo -e "${YELLOW}➤ Convert absolute paths (/PayEra/images/) to relative paths (images/)${NC}"
fi

if [ -n "$SRC_REFS" ]; then
  echo -e "${YELLOW}➤ Move images from src/assets/images/ to public/images/ and update references${NC}"
fi

echo -e "${GREEN}➤ Run npm run build to ensure the post-build image script works correctly${NC}"

echo
echo "📚 For more details, see COMPREHENSIVE-IMAGE-GUIDE.md"
echo "==========================================================="
