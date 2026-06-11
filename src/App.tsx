import { useState } from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { FilterSidebar } from './components/Filters/FilterSidebar';
import { ProductGrid } from './components/ProductGrid/ProductGrid';
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

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900 selection:bg-neutral-900 selection:text-white relative flex flex-col font-sans">
      
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

      {/* Main Luxury Hero Banner with Overlay */}
      <Hero />

      {/* Primary Catalog Container */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-2 sm:px-3 md:px-4 py-3 sm:py-4 md:py-10 pb-20 md:pb-10">
        
        {/* Dynamic Filtering Panel */}
        <FilterSidebar
          filters={filters}
          isFilterOpen={isFilterOpen}
          onToggleFilters={toggleFilterSidebar}
          onSortChange={handleSortChange}
          uniqueTypes={uniqueTypes}
          uniqueColors={uniqueColors}
          priceBounds={priceBounds}
          onToggleType={toggleTypeFilter}
          onToggleColor={toggleColorFilter}
          onPriceChange={handlePriceChange}
          onClearFilters={clearFilters}
        />

        {/* Catalog Result Description Info bar */}
        <div className="flex items-center justify-between text-[11px] sm:text-xs text-gray-500 py-2 sm:py-2.5 md:py-3.5 border-b border-gray-150 mb-3 sm:mb-4 md:mb-6 font-medium select-none">
          <p>
            Showing <span className="text-black font-extrabold">{filteredProducts.length}</span> variants
          </p>
          {(filters.types.length > 0 || filters.colors.length > 0 || filters.searchQuery.trim().length > 0) && (
            <button
              onClick={clearFilters}
              className="text-red-500 hover:text-red-700 underline font-extrabold cursor-pointer uppercase tracking-wider text-[10px] md:text-xs"
              id="clear-active-filters-pill"
            >
              Reset active filters
            </button>
          )}
        </div>

        {/* Dynamic Product Catalog Gallery */}
        <ProductGrid
          products={filteredProducts}
          onAddToCart={addToCart}
        />

      </main>

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
