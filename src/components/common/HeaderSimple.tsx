import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getImageUrl } from '../../utils/imageLoader';
import Image from './Image';

const HeaderSimple = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <header className={`bg-primary-dark sticky w-full top-0 z-50 shadow-md transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4'}`}>
      <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
        <div>
          <Link to="/" className="flex items-center space-x-2">
            <Image 
              src='/images/logo.svg'
              alt="PayEra" 
              className="h-8"
              fallback='data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2248%22%20height%3D%2248%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%3E%3Crect%20height%3D%2248%22%20width%3D%2248%22%20fill%3D%22%2300B4D8%22%2F%3E%3Ctext%20x%3D%2224%22%20y%3D%2230%22%20font-size%3D%2220%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3EP%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fsvg%3E'
              loadingClassName=""
            />
            <span className="text-white font-bold text-xl">PayEra</span>
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className={`text-white font-medium hover:text-white/80 px-2 py-1 rounded ${isActive('/') ? 'underline underline-offset-4 font-bold' : ''}`}>
            Ana Sayfa
          </Link>
          <Link to="/hakkimizda" className={`text-white font-medium hover:text-white/80 px-2 py-1 rounded ${isActive('/hakkimizda') ? 'underline underline-offset-4 font-bold' : ''}`}>
            Hakkımızda
          </Link>
          <Link to="/urunler" className={`text-white font-medium hover:text-white/80 px-2 py-1 rounded ${isActive('/urunler') ? 'underline underline-offset-4 font-bold' : ''}`}>
            Ürünler
          </Link>
          <Link to="/bayilik" className={`text-white font-medium hover:text-white/80 px-2 py-1 rounded ${isActive('/bayilik') ? 'underline underline-offset-4 font-bold' : ''}`}>
            Bayilik
          </Link>
          <Link to="/iletisim" className={`text-white font-medium hover:text-white/80 px-2 py-1 rounded ${isActive('/iletisim') ? 'underline underline-offset-4 font-bold' : ''}`}>
            İletişim
          </Link>
        </nav>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden py-4 px-6 bg-primary-dark border-t border-white/10 space-y-4">
          <Link 
            to="/" 
            className={`block text-white hover:bg-primary-light px-3 py-2 rounded ${isActive('/') ? 'font-bold bg-primary-light/30' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Ana Sayfa
          </Link>
          <Link 
            to="/hakkimizda" 
            className={`block text-white hover:bg-primary-light px-3 py-2 rounded ${isActive('/hakkimizda') ? 'font-bold bg-primary-light/30' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Hakkımızda
          </Link>
          <Link 
            to="/urunler" 
            className={`block text-white hover:bg-primary-light px-3 py-2 rounded ${isActive('/urunler') ? 'font-bold bg-primary-light/30' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Ürünler
          </Link>
          <Link 
            to="/bayilik" 
            className={`block text-white hover:bg-primary-light px-3 py-2 rounded ${isActive('/bayilik') ? 'font-bold bg-primary-light/30' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Bayilik
          </Link>
          <Link 
            to="/iletisim" 
            className={`block text-white hover:bg-primary-light px-3 py-2 rounded ${isActive('/iletisim') ? 'font-bold bg-primary-light/30' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            İletişim
          </Link>
        </nav>
      )}
    </header>
  );
};

export default HeaderSimple;
