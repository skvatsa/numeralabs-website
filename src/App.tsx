import React, { useState, useEffect } from 'react';
import { Page, Product } from './types';
import { PRODUCTS_DATA, COMPANY_INFO } from './data/companyData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { DomainHostingModal } from './components/DomainHostingModal';
import { HomeView } from './views/HomeView';
import { ProductsView } from './views/ProductsView';
import { ProductDetailView } from './views/ProductDetailView';
import { EngagementsView } from './views/EngagementsView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProductId, setSelectedProductId] = useState<string>('roi-tool');
  const [inquiryProductId, setInquiryProductId] = useState<string | undefined>(undefined);
  const [isHostingModalOpen, setIsHostingModalOpen] = useState(false);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) {
        setCurrentPage('home');
        return;
      }
      if (hash.startsWith('product/')) {
        const prodId = hash.replace('product/', '');
        if (PRODUCTS_DATA.some((p) => p.id === prodId)) {
          setSelectedProductId(prodId);
          setCurrentPage('product-detail');
        }
      } else if (
        ['home', 'products', 'engagements', 'about', 'contact'].includes(hash)
      ) {
        setCurrentPage(hash as Page);
      } else if (hash === 'domain-guide') {
        setIsHostingModalOpen(true);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (productId: string) => {
    setSelectedProductId(productId);
    setCurrentPage('product-detail');
    window.location.hash = `product/${productId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToContactWithProduct = (productId: string) => {
    setInquiryProductId(productId);
    setCurrentPage('contact');
    window.location.hash = 'contact';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentProduct =
    PRODUCTS_DATA.find((p) => p.id === selectedProductId) || PRODUCTS_DATA[0];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-amber-400 selection:text-slate-900">
      {/* Top Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenHostingGuide={() => setIsHostingModalOpen(true)}
      />

      {/* Main Multi-Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={navigateTo}
            onSelectProduct={handleSelectProduct}
            onOpenHostingGuide={() => setIsHostingModalOpen(true)}
          />
        )}

        {currentPage === 'products' && (
          <ProductsView
            products={PRODUCTS_DATA}
            onSelectProduct={handleSelectProduct}
            onNavigateToContactWithProduct={handleNavigateToContactWithProduct}
          />
        )}

        {currentPage === 'product-detail' && (
          <ProductDetailView
            product={currentProduct}
            onBack={() => navigateTo('products')}
            onNavigateToContactWithProduct={handleNavigateToContactWithProduct}
            onSelectOtherProduct={handleSelectProduct}
            allProducts={PRODUCTS_DATA}
          />
        )}

        {currentPage === 'engagements' && (
          <EngagementsView
            onNavigateToContact={() => navigateTo('contact')}
          />
        )}

        {currentPage === 'about' && (
          <AboutView
            onNavigateToContact={() => navigateTo('contact')}
          />
        )}

        {currentPage === 'contact' && (
          <ContactView
            initialProductId={inquiryProductId}
            onOpenHostingGuide={() => setIsHostingModalOpen(true)}
          />
        )}
      </main>

      {/* Corporate Footer */}
      <Footer
        onNavigate={navigateTo}
        onSelectProduct={handleSelectProduct}
        onOpenHostingGuide={() => setIsHostingModalOpen(true)}
      />

      {/* Domain Hosting and DNS Guide Modal */}
      <DomainHostingModal
        isOpen={isHostingModalOpen}
        onClose={() => setIsHostingModalOpen(false)}
      />
    </div>
  );
}
