import { useState } from 'react';
import { Header } from './components/Header/Header';
import { PromoBanner } from './components/Home/PromoBanner';
import { ShopByCollection } from './components/Home/ShopByCollection';
import { FeaturedProduct } from './components/Home/FeaturedProduct';
import { BestSellers } from './components/Home/BestSellers';
import { FeatureBar } from './components/Home/FeatureBar';
import { FilterSidebar } from './components/Filters/FilterSidebar';
import heroBannerImage from './assets/images/narkins_stitched_hero_banner_1781154378525.png';
import { FAQAccordion } from './components/FAQ/FAQAccordion';
import { Footer } from './components/Footer/Footer';
import { CartDrawer } from './components/Cart/CartDrawer';
import { BottomNavBar } from './components/BottomNav/BottomNavBar';
import { useCart } from './customHooks/useCart';
import { useFilters } from './customHooks/useFilters';

export default function App() {
  const {
    cartItems,
    isCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartCount,
    toggleCart,
  } = useCart();

  const {
    filters,
    filteredProducts,
    uniqueTypes,
    uniqueColors,
    priceBounds,
    isFilterOpen,
    handleSearchChange,
    handleSortChange,
    toggleTypeFilter,
    toggleColorFilter,
    handlePriceChange,
    clearFilters,
    toggleFilterSidebar,
    applyCategoryFilter,
  } = useFilters();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'kurta_pajama' | 'unstitched'>('home');

  return (
    <div className="min-h-screen overflow-x-hidden bg-stone-50 text-neutral-900 selection:bg-neutral-900 selection:text-white relative flex flex-col font-sans">
      
      {/* Dynamic Header Component */}
      <Header
        onCartToggle={toggleCart}
        cartCount={cartCount}
        searchQuery={filters.searchQuery}
        onSearchChange={handleSearchChange}
        onSelectFilter={applyCategoryFilter}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isSearchActive={isSearchActive}
        setIsSearchActive={setIsSearchActive}
      />

      {currentPage === 'home' ? (
        <div className="flex flex-col w-full bg-white pb-10">
          <PromoBanner 
            imageSrc={heroBannerImage}
            title="FQ. STITCHED COLLECTION"
            subtitle="SUMMER 2026"
            buttonText="Explore"
            buttonPosition="left"
            onButtonClick={() => setCurrentPage('kurta_pajama')}
          />
          <PromoBanner 
            imageSrc="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1600&auto=format&fit=crop"
            title="LUXE SERIES"
            subtitle="MAKE A STATEMENT"
            buttonText="Explore"
            buttonPosition="left"
            brightness="brightness-75"
          />
          <PromoBanner 
            imageSrc="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1600&auto=format&fit=crop"
            title="FRAGRANCE"
            subtitle="ELEGANCE IN A BOTTLE"
            buttonText="Explore"
            buttonPosition="left"
            brightness="brightness-75"
          />
          <PromoBanner 
            imageSrc="https://images.unsplash.com/photo-1605020420620-20c943cc4669?q=80&w=1600&auto=format&fit=crop"
            title="SUMMER UNSTITCHED"
            subtitle="PREMIUM KURTE PAJAME KA KAPDA"
            buttonText="Shop now"
            buttonPosition="right"
            onButtonClick={() => setCurrentPage('unstitched')}
            brightness="brightness-75"
          />
          
          <ShopByCollection />
          <FeaturedProduct />
          <BestSellers />
          <FeatureBar />
        </div>
      ) : currentPage === 'kurta_pajama' ? (
        <main className="flex-grow max-w-7xl w-full mx-auto px-4 py-20 flex flex-col items-center text-center animate-in fade-in duration-500">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 uppercase tracking-wider text-neutral-900">Kurta Pajama Collection</h1>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">This page is currently empty. Kurta Pajama list will be added here soon.</p>
          <button 
            onClick={() => setCurrentPage('home')}
            className="bg-neutral-900 text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-neutral-800 transition-colors"
          >
            ← Back to Home
          </button>
        </main>
      ) : (
        <main className="flex-grow max-w-7xl w-full mx-auto px-4 py-20 flex flex-col items-center text-center animate-in fade-in duration-500">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 uppercase tracking-wider text-neutral-900">Bina Sila Kapda</h1>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">This page is currently empty. Unstitched kurta pajama fabrics will be added here soon.</p>
          <button 
            onClick={() => setCurrentPage('home')}
            className="bg-neutral-900 text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-neutral-800 transition-colors"
          >
            ← Back to Home
          </button>
        </main>
      )}

      {/* FAQs Collapsible Segment */}
      <FAQAccordion />

      {/* Footer Branding Component */}
      <Footer />

      {/* Cart Slider Drawer panel */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={toggleCart}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        cartTotal={cartTotal}
      />

      {/* Floating Green WhatsApp Assist Bubble (as seen in visual placement guides) */}
      <a
        href="https://wa.me/03306275467"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 bg-emerald-500 text-white p-3 md:p-3.5 rounded-full shadow-lg hover:bg-emerald-600 transition-all duration-300 hover:scale-108 flex items-center justify-center animate-bounce group"
        aria-label="Contact Customer Support on WhatsApp"
        id="floating-whatsapp-chat-bubble"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.731-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.864-9.843.002-2.63-1.023-5.101-2.883-6.963C16.592 1.937 14.125.913 11.5.912 6.066.912 1.642 5.326 1.639 10.757c-.001 1.714.453 3.39 1.316 4.869l-.991 3.616 3.7-.971c1.5.82 2.94 1.229 4.303 1.229zM17.86 14.63c-.32-.16-1.89-.93-2.18-1.04-.3-.1-.51-.16-.72.16-.22.32-.84 1.04-1.03 1.26-.19.22-.38.24-.7.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.87-1.76-2.19-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.56.16-.18.22-.3.32-.51.1-.22.05-.41-.03-.57-.08-.16-.72-1.74-.99-2.39-.26-.64-.53-.55-.72-.56-.19-.01-.4-.01-.61-.01s-.55.08-.84.4c-.29.32-1.12 1.1-1.12 2.68s1.15 3.12 1.31 3.33c.16.22 2.27 3.47 5.5 4.87.77.33 1.37.53 1.84.68.78.25 1.48.21 2.04.13.62-.09 1.89-.77 2.15-1.48.27-.71.27-1.32.19-1.45-.07-.13-.27-.21-.59-.37z" />
        </svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out whitespace-nowrap text-xs font-bold pl-2">
          Chat Support
        </span>
      </a>

      {/* Mobile Bottom Navigation Bar - slides up on scroll */}
      <BottomNavBar
        onCartToggle={toggleCart}
        cartCount={cartCount}
        onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        onSearchToggle={() => setIsSearchActive(!isSearchActive)}
      />

    </div>
  );
}
