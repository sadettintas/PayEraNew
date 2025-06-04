import React from 'react';

const FooterSimple = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-dark text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p>© {currentYear} PayEra - Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default FooterSimple;
