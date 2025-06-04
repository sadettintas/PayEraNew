import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './styles/contrast.css'
import './styles/emergency.css' // Acil durum için stil ekledik
import App from './App.tsx'

// Debug için global hata yakalayıcı
window.onerror = function(message, source, lineno, colno, error) {
  console.error('Global hata yakalandı:', message, 'Kaynak:', source, 'Satır:', lineno, 'Sütun:', colno, 'Hata:', error);
  return false;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/PayEraNew">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
