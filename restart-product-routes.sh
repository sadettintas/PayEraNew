#!/bin/bash

# Define text colors
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${YELLOW}PayEra Web - Product Routes Deployment Checker${NC}"
echo -e "This script will restart the development server and verify product routes\n"

# Stop any running processes on port 5173 (Vite default)
echo -e "${CYAN}Stopping any running development servers...${NC}"
lsof -ti:5173 | xargs kill -9 2>/dev/null || true
echo -e "Done!\n"

# Clear Vite cache
echo -e "${CYAN}Clearing cache...${NC}"
rm -rf node_modules/.vite 2>/dev/null || true
echo -e "Done!\n"

# Verify environment
echo -e "${CYAN}Verifying Node.js environment...${NC}"
node -v
npm -v
echo -e "Done!\n"

# Install dependencies if needed
echo -e "${CYAN}Checking dependencies...${NC}"
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
else
  echo "Dependencies already installed."
fi
echo -e "Done!\n"

# Start dev server in background
echo -e "${CYAN}Starting development server...${NC}"
echo -e "Server will be available at ${GREEN}http://localhost:5173${NC}\n"
echo -e "${YELLOW}Product Pages:${NC}"
echo -e "- ${GREEN}http://localhost:5173/urunler/payera-x10${NC}"
echo -e "- ${GREEN}http://localhost:5173/urunler/payera-s20${NC}"
echo -e "- ${GREEN}http://localhost:5173/urunler/payera-pro-30${NC}"
echo -e "- ${GREEN}http://localhost:5173/urunler/payera-a90${NC}"
echo -e "- ${GREEN}http://localhost:5173/urunler/payera-507${NC}\n"

npm run dev
