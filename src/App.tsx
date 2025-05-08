import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Hakkimizda from './pages/Hakkimizda';
import Products from './pages/Products';
import PayEraA90 from './pages/PayEraA90';
import PayEra507 from './pages/PayEra507';
import Dealership from './pages/Dealership';
import Contact from './pages/Contact';
import Support from './pages/Support';
import Careers from './pages/Careers';
import ShortURLPage from './pages/ShortURL';
import ProductsShortURL from './pages/ProductsShortURL';
import ContactShortURL from './pages/ContactShortURL';
import DealershipShortURL from './pages/DealershipShortURL';
import ErrorBoundary from './components/common/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/urunler" element={<Products />} />
          <Route path="/urunler/payera-a90" element={<PayEraA90 />} />
          <Route path="/payera-a90" element={<PayEraA90 />} />
          <Route path="/urunler/payera-507" element={<PayEra507 />} />
          <Route path="/payera-507" element={<PayEra507 />} />
          <Route path="/bayilik" element={<Dealership />} />
          <Route path="/iletisim" element={
            <ErrorBoundary>
              <Contact />
            </ErrorBoundary>
          } />
          <Route path="/destek" element={<Support />} />
          <Route path="/kariyer" element={<Careers />} />
          <Route path="/a" element={<ShortURLPage />} />
          <Route path="/p" element={<ProductsShortURL />} />
          <Route path="/i" element={<ContactShortURL />} />
          <Route path="/d" element={<DealershipShortURL />} />
        </Routes>
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
