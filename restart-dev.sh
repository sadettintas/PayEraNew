#!/bin/bash

echo "🔄 PayEra Web Yeniden Başlatma Aracı"
echo "-----------------------------------"

# Önce mevcut processleri durdur
echo "1️⃣ Mevcut dev sunucuları durduruluyor..."
pkill -f "vite" || echo "Çalışan vite sunucusu bulunamadı"

# Node_modules kontrolü
echo "2️⃣ Bağımlılıklar kontrol ediliyor..."
if [ ! -d "node_modules" ]; then
  echo "⚠️ node_modules klasörü bulunamadı, npm install çalıştırılıyor..."
  npm install
else
  echo "✅ node_modules mevcut"
fi

# Dist temizleme
echo "3️⃣ Eski build dosyaları temizleniyor..."
rm -rf dist

# Önbellek temizleme
echo "4️⃣ NPM önbelleği temizleniyor..."
npm cache clean --force

# Port kontrolü ve serbest bırakma
echo "5️⃣ 5555 ve 5556 portları kontrol ediliyor ve serbestleştiriliyor..."
lsof -ti:5555 | xargs kill -9 2>/dev/null || echo "5555 portu zaten serbest"
lsof -ti:5556 | xargs kill -9 2>/dev/null || echo "5556 portu zaten serbest"

# Vite yeniden başlatma - zorla
echo "6️⃣ Vite yeniden başlatılıyor..."
npm run dev -- --force --port 5556

echo "✨ İşlem tamamlandı! Server şimdi http://localhost:5556 adresinde çalışıyor olmalı."
