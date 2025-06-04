import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './components/Layout';
import LoadingProvider from './components/common/LoadingProvider';
import LoadingOverlay from './components/common/LoadingOverlay';
import ErrorBoundary from './components/common/ErrorBoundary';

// Lazy loaded components for better performance
const Home = lazy(() => import('./pages/Home.fixed'));
const Hakkimizda = lazy(() => import('./pages/Hakkimizda.fixed'));
const Products = lazy(() => import('./pages/Products'));
const PayEraA90 = lazy(() => import('./pages/PayEraA90'));
const PayEra507 = lazy(() => import('./pages/PayEra507'));
const PayEraX10 = lazy(() => import('./pages/PayEraX10'));
const PayEraS20 = lazy(() => import('./pages/PayEraS20'));
const PayEraPro30 = lazy(() => import('./pages/PayEraPro30'));
const Dealership = lazy(() => import('./pages/Dealership'));
const Contact = lazy(() => import('./pages/Contact'));
const Support = lazy(() => import('./pages/Support'));
const Careers = lazy(() => import('./pages/Careers'));
const ShortURLPage = lazy(() => import('./pages/ShortURL'));
const ProductsShortURL = lazy(() => import('./pages/ProductsShortURL'));
const ContactShortURL = lazy(() => import('./pages/ContactShortURL'));
const DealershipShortURL = lazy(() => import('./pages/DealershipShortURL'));

// Page loading fallback component
const PageLoading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 border-4 border-gray-200 border-t-primary rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-600">Sayfa yükleniyor...</p>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <LoadingProvider>
        <LoadingOverlay />
        <Layout>
          <Suspense fallback={<PageLoading />}>
            <Routes>
              <Route path="/" element={
                <ErrorBoundary>
                  <Home />
                </ErrorBoundary>
              } />
          <Route path="/hakkimizda" element={
            <ErrorBoundary>
              <Hakkimizda />
            </ErrorBoundary>
          } />
          <Route path="/urunler" element={<Products />} />
          <Route path="/urunler/payera-a90" element={<PayEraA90 />} />
          <Route path="/payera-a90" element={<PayEraA90 />} />
          <Route path="/urunler/payera-507" element={<PayEra507 />} />
          <Route path="/payera-507" element={<PayEra507 />} />
          <Route path="/urunler/payera-x10" element={<PayEraX10 />} />
          <Route path="/urunler/payera-s20" element={<PayEraS20 />} />
          <Route path="/urunler/payera-pro-30" element={<PayEraPro30 />} />
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
          </Suspense>
        </Layout>
      </LoadingProvider>
    </ErrorBoundary>
  );
}

export default App;
