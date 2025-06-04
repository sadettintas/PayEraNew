import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll olayını dinleyerek navbar'ı değiştirme
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path 
      ? 'nav-link active' 
      : 'nav-link';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`bg-primary-dark sticky w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-screen-xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/images/logo.svg" 
                alt="PayEra" 
                className="h-8"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2248%22%20height%3D%2248%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%3E%3Crect%20height%3D%2248%22%20width%3D%2248%22%20fill%3D%22%2300B4D8%22%2F%3E%3Ctext%20x%3D%2224%22%20y%3D%2230%22%20font-size%3D%2220%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3EP%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fsvg%3E';
                }}
              />
              <span className="text-white font-bold text-xl">PayEra</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className={`font-medium transition-colors ${isActive('/')}`}>Ana Sayfa</Link>
            <Link to="/hakkimizda" className={`font-medium transition-colors ${isActive('/hakkimizda')}`}>Hakkımızda</Link>
            <Link to="/urunler" className={`font-medium transition-colors ${isActive('/urunler')}`}>Ürünler</Link>
            <Link to="/bayilik" className={`font-medium transition-colors ${isActive('/bayilik')}`}>Bayilik</Link>
            <Link to="/kariyer" className={`font-medium transition-colors ${isActive('/kariyer')}`}>Kariyer</Link>
            <Link to="/iletisim" className={`font-medium transition-colors ${isActive('/iletisim')}`}>İletişim</Link>
            <Link to="/destek" className={`font-medium transition-colors ${isActive('/destek')}`}>Destek</Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 bg-primary-dark text-white flex flex-col space-y-4 p-6 border-t border-white/20 rounded-b-xl shadow-lg">
            <Link onClick={toggleMenu} to="/" className={`font-medium ${isActive('/')}`}>Ana Sayfa</Link>
            <Link onClick={toggleMenu} to="/hakkimizda" className={`font-medium ${isActive('/hakkimizda')}`}>Hakkımızda</Link>
            <Link onClick={toggleMenu} to="/urunler" className={`font-medium ${isActive('/urunler')}`}>Ürünler</Link>
            <Link onClick={toggleMenu} to="/bayilik" className={`font-medium ${isActive('/bayilik')}`}>Bayilik</Link>
            <Link onClick={toggleMenu} to="/kariyer" className={`font-medium ${isActive('/kariyer')}`}>Kariyer</Link>
            <Link onClick={toggleMenu} to="/iletisim" className={`font-medium ${isActive('/iletisim')}`}>İletişim</Link>
            <Link onClick={toggleMenu} to="/destek" className={`font-medium ${isActive('/destek')}`}>Destek</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
