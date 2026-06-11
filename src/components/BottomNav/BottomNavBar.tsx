import { useState, useEffect } from 'react';
import { Home, Menu, Search, ShoppingBag, ShoppingCart, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BottomNavBarProps {
  onCartToggle: () => void;
  cartCount: number;
  onMenuToggle: () => void;
  onSearchToggle: () => void;
}

export function BottomNavBar({
  onCartToggle,
  cartCount,
  onMenuToggle,
  onSearchToggle,
}: BottomNavBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          // Show navbar after scrolling down 80px, hide when at the very top
          if (currentScrollY > 80) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      id: 'home',
      label: 'Home',
      icon: Home,
      action: () => {
        setActiveTab('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
    {
      id: 'menu',
      label: 'Menu',
      icon: Menu,
      action: () => {
        setActiveTab('menu');
        onMenuToggle();
      },
    },
    {
      id: 'search',
      label: 'Search',
      icon: Search,
      action: () => {
        setActiveTab('search');
        onSearchToggle();
      },
    },
    {
      id: 'shop',
      label: 'Shop',
      icon: ShoppingBag,
      action: () => {
        setActiveTab('shop');
        const productsSection = document.querySelector('main');
        productsSection?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'cart',
      label: 'Cart',
      icon: ShoppingCart,
      action: () => {
        setActiveTab('cart');
        onCartToggle();
      },
      badge: cartCount > 0 ? cartCount : undefined,
    },
    {
      id: 'account',
      label: 'Account',
      icon: User,
      action: () => {
        setActiveTab('account');
      },
    },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] pb-safe"
          id="bottom-navigation-bar"
        >
          <div className="flex items-center justify-around px-0.5 sm:px-1 py-1 sm:py-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  className={`relative flex flex-col items-center justify-center py-1 sm:py-1.5 px-1 sm:px-2 rounded-lg transition-colors duration-200 cursor-pointer min-w-[44px] sm:min-w-[48px] ${
                    isActive
                      ? 'text-neutral-900'
                      : 'text-gray-400 hover:text-neutral-700'
                  }`}
                  aria-label={item.label}
                >
                  <div className="relative">
                    <Icon
                      className={`w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] transition-all duration-200 ${
                        isActive ? 'stroke-[2.25]' : 'stroke-[1.75]'
                      }`}
                    />
                    {item.badge !== undefined && (
                      <span className="absolute -top-1.5 -right-2 bg-neutral-900 text-white font-extrabold text-[8px] w-4 h-4 rounded-full flex items-center justify-center">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <span
                    className={`text-[8px] sm:text-[9px] mt-0.5 tracking-wide transition-all duration-200 ${
                      isActive ? 'font-bold' : 'font-medium'
                    }`}
                  >
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="bottom-nav-indicator"
                      className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-neutral-900 rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
          {/* Safe area padding for notched devices */}
          <div className="h-[env(safe-area-inset-bottom,0px)]" />
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
