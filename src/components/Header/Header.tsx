import React, { useState } from 'react';
import { Search, User, ShoppingCart, Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence, type Variants } from 'motion/react';
import { TEXT_CONSTANTS } from '../../constants/textConstants';
import logo from '../../assets/images/logo.png'
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.02
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 15 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 14,
    },
  },
};

interface HeaderProps {
  onCartToggle: () => void;
  cartCount: number;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectFilter?: (type?: string, searchQuery?: string, sortBy?: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  isSearchActive: boolean;
  setIsSearchActive: (active: boolean) => void;
}

export function Header({
  onCartToggle,
  cartCount,
  searchQuery,
  onSearchChange,
  onSelectFilter,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  isSearchActive,
  setIsSearchActive
}: HeaderProps) {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileOpenSubmenu, setMobileOpenSubmenu] = useState<string | null>(null);
  
  const [menuCoords, setMenuCoords] = useState({ x: 0, y: 0 });
  const [searchCoords, setSearchCoords] = useState({ x: 0, y: 0 });
  const [userCoords, setUserCoords] = useState({ x: 0, y: 0 });
  const [cartCoords, setCartCoords] = useState({ x: 0, y: 0 });

  const [fbCoords, setFbCoords] = useState({ x: 0, y: 0 });
  const [igCoords, setIgCoords] = useState({ x: 0, y: 0 });
  const [ytCoords, setYtCoords] = useState({ x: 0, y: 0 });
  const [ttCoords, setTtCoords] = useState({ x: 0, y: 0 });
  const [scCoords, setScCoords] = useState({ x: 0, y: 0 });
  const [liCoords, setLiCoords] = useState({ x: 0, y: 0 });

  const calculateMagneticPull = (e: React.MouseEvent, maxPull: number = 10) => {
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    // Smooth magnetic offset calculations
    const pullX = Math.max(-maxPull, Math.min(maxPull, distanceX * 0.45));
    const pullY = Math.max(-maxPull, Math.min(maxPull, distanceY * 0.45));
    return { x: pullX, y: pullY };
  };

  const handleMenuMouseMove = (e: React.MouseEvent) => {
    setMenuCoords(calculateMagneticPull(e));
  };
  const handleSearchMouseMove = (e: React.MouseEvent) => {
    setSearchCoords(calculateMagneticPull(e));
  };
  const handleUserMouseMove = (e: React.MouseEvent) => {
    setUserCoords(calculateMagneticPull(e));
  };
  const handleCartMouseMove = (e: React.MouseEvent) => {
    setCartCoords(calculateMagneticPull(e));
  };

  const handleFbMouseMove = (e: React.MouseEvent) => setFbCoords(calculateMagneticPull(e, 8));
  const handleIgMouseMove = (e: React.MouseEvent) => setIgCoords(calculateMagneticPull(e, 8));
  const handleYtMouseMove = (e: React.MouseEvent) => setYtCoords(calculateMagneticPull(e, 8));
  const handleTtMouseMove = (e: React.MouseEvent) => setTtCoords(calculateMagneticPull(e, 8));
  const handleScMouseMove = (e: React.MouseEvent) => setScCoords(calculateMagneticPull(e, 8));
  const handleLiMouseMove = (e: React.MouseEvent) => setLiCoords(calculateMagneticPull(e, 8));

  const handleMenuMouseLeave = () => setMenuCoords({ x: 0, y: 0 });
  const handleSearchMouseLeave = () => setSearchCoords({ x: 0, y: 0 });
  const handleUserMouseLeave = () => setUserCoords({ x: 0, y: 0 });
  const handleCartMouseLeave = () => setCartCoords({ x: 0, y: 0 });

  const handleFbMouseLeave = () => setFbCoords({ x: 0, y: 0 });
  const handleIgMouseLeave = () => setIgCoords({ x: 0, y: 0 });
  const handleYtMouseLeave = () => setYtCoords({ x: 0, y: 0 });
  const handleTtMouseLeave = () => setTtCoords({ x: 0, y: 0 });
  const handleScMouseLeave = () => setScCoords({ x: 0, y: 0 });
  const handleLiMouseLeave = () => setLiCoords({ x: 0, y: 0 });

  return (
    <header className="w-full bg-[#1a1a1a] font-sans relative z-40">
      {/* 1. TOP ANNOUNCEMENT & SOCIAL BAR */}
      <div className="w-full bg-[#1a1a1a] text-white py-2 px-3 md:px-8 md:py-3.5 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Social Icons (Left) - hidden on very small screens */}
          <div className="hidden sm:flex items-center gap-3 md:gap-5">
            {/* Facebook */}
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer" 
              className="text-white hover:text-gray-300 transition-colors flex items-center justify-center select-none" 
              aria-label="Facebook"
              onMouseMove={handleFbMouseMove}
              onMouseLeave={handleFbMouseLeave}
            >
              <motion.span
                animate={{ x: fbCoords.x, y: fbCoords.y }}
                transition={{ type: "spring", stiffness: 80, damping: 25, mass: 0.4 }}
                className="pointer-events-none inline-flex items-center justify-center animate-none"
              >
                <svg className="w-[17px] h-[17px] fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
                </svg>
              </motion.span>
            </a>
            {/* Instagram */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="text-white hover:text-gray-300 transition-colors flex items-center justify-center select-none" 
              aria-label="Instagram"
              onMouseMove={handleIgMouseMove}
              onMouseLeave={handleIgMouseLeave}
            >
              <motion.span
                animate={{ x: igCoords.x, y: igCoords.y }}
                transition={{ type: "spring", stiffness: 80, damping: 25, mass: 0.4 }}
                className="pointer-events-none inline-flex items-center justify-center animate-none"
              >
                <svg className="w-[17px] h-[17px] fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </motion.span>
            </a>
            {/* YouTube */}
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noreferrer" 
              className="text-white hover:text-gray-300 transition-colors flex items-center justify-center select-none" 
              aria-label="YouTube"
              onMouseMove={handleYtMouseMove}
              onMouseLeave={handleYtMouseLeave}
            >
              <motion.span
                animate={{ x: ytCoords.x, y: ytCoords.y }}
                transition={{ type: "spring", stiffness: 80, damping: 25, mass: 0.4 }}
                className="pointer-events-none inline-flex items-center justify-center animate-none"
              >
                <svg className="w-[17px] h-[17px] fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </motion.span>
            </a>
            {/* TikTok */}
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noreferrer" 
              className="text-white hover:text-gray-300 transition-colors flex items-center justify-center select-none" 
              aria-label="TikTok"
              onMouseMove={handleTtMouseMove}
              onMouseLeave={handleTtMouseLeave}
            >
              <motion.span
                animate={{ x: ttCoords.x, y: ttCoords.y }}
                transition={{ type: "spring", stiffness: 80, damping: 25, mass: 0.4 }}
                className="pointer-events-none inline-flex items-center justify-center animate-none"
              >
                <svg className="w-[17px] h-[17px] fill-current" viewBox="0 0 24 24">
                  <path d="M12.53.07C13.82.02 15.1.01 16.38 0c.08 1.17.47 2.27 1.15 3.22.84.9 1.93 1.5 3.12 1.74v3.18c-1.34-.1-2.61-.63-3.64-1.51-.23-.2-.44-.43-.63-.67v6.62c.07 4.15-2.73 7.72-6.75 8.52-4.02.8-7.98-1.56-9.11-5.59S2.08 6.55 6.1 5.75c1.47-.29 2.98-.12 4.35.49v3.29c-.83-.45-1.78-.59-2.7-.4-1.89.38-3.09 2.22-2.71 4.1.38 1.89 2.22 3.09 4.1 2.71 1.89-.38 3.09-2.22 2.71-4.1-.06-.3-.16-.6-.3-.87V.07z" />
                </svg>
              </motion.span>
            </a>
            {/* Snapchat */}
            <a 
              href="https://snapchat.com" 
              target="_blank" 
              rel="noreferrer" 
              className="text-white hover:text-gray-300 transition-colors flex items-center justify-center select-none" 
              aria-label="Snapchat"
              onMouseMove={handleScMouseMove}
              onMouseLeave={handleScMouseLeave}
            >
              <motion.span
                animate={{ x: scCoords.x, y: scCoords.y }}
                transition={{ type: "spring", stiffness: 80, damping: 25, mass: 0.4 }}
                className="pointer-events-none inline-flex items-center justify-center animate-none"
              >
                <svg className="w-[17px] h-[17px] fill-current" viewBox="0 0 24 24">
                  <path d="M11.996 0c-4.142 0-7.464 2.1-7.464 5.922 0 .506.126 1.012.38 1.48-.127.127-.253.29-.253.506 0 .445.54.675 1.013.338 1.013-.718 1.731-.422 2.45.633.421.633.928.928 1.477.928.843 0 1.349-.675 2.531-.675 1.181 0 1.688.675 2.53.675.549 0 1.056-.295 1.478-.928.717-1.055 1.436-1.351 2.449-.633.473.337 1.013.107 1.013-.338 0-.216-.127-.379-.253-.506.253-.468.38-.974.38-1.48C19.46 2.1 16.14 0 11.997 0zm0 1.44c3.08 0 5.4 1.517 5.4 4.417 0 .42-.1.84-.3 1.22-.09.18-.09.4 0 .58.14.28.01.62-.27.75l-.39.18c-.89.41-1.4.15-2 .54-.42.27-.92.42-1.44.42-.8 0-1.14-.52-2.14-.52s-1.34.52-2.14.52c-.52 0-1.02-.15-1.44-.42-.6-.39-1.11-.13-2-.54l-.4-.18c-.27-.13-.4-.47-.26-.75.09-.18.09-.4 0-.58-.2-.38-.3-.8-.3-1.22 0-2.9 2.32-4.417 5.4-4.418z" />
                </svg>
              </motion.span>
            </a>
            {/* LinkedIn */}
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="text-white hover:text-gray-300 transition-colors flex items-center justify-center select-none" 
              aria-label="LinkedIn"
              onMouseMove={handleLiMouseMove}
              onMouseLeave={handleLiMouseLeave}
            >
              <motion.span
                animate={{ x: liCoords.x, y: liCoords.y }}
                transition={{ type: "spring", stiffness: 80, damping: 25, mass: 0.4 }}
                className="pointer-events-none inline-flex items-center justify-center animate-none"
              >
                <svg className="w-[17px] h-[17px] fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </motion.span>
            </a>
          </div>

          {/* Standard Hotline Support Call To Action */}
          <div className="flex items-center gap-1.5 md:gap-2 select-text font-medium text-white/95">
            <Phone className="w-3 h-3 md:w-3.5 md:h-3.5 rotate-12 stroke-[2.25] text-white/90 shrink-0" />
            <span className="tracking-wide text-[9px] sm:text-[10px] md:text-[11px] uppercase truncate max-w-[200px] sm:max-w-none">{TEXT_CONSTANTS.SUPPORT_LABEL}</span>
          </div>
        </div>
      </div>

      {/* PARENT BACKGROUND wrapper FOR ARCING CURVES OVERLAY */}
      <div className="w-full bg-[#1a1a1a]">
        
        {/* 2. THE VISUAL WHITE HEADER BODY (WITH MAJESTIC 40PX ROUNDED TOP CORNERS) */}
        <div className="w-full bg-white rounded-t-[20px] sm:rounded-t-[28px] md:rounded-t-[40px] px-3 sm:px-4 md:px-8 pt-4 pb-3 sm:pt-5 sm:pb-4 md:pt-7 md:pb-6 shadow-sm border-b border-gray-100 relative">
          
          {/* Main Controls Row */}
          <div className="max-w-7xl mx-auto flex justify-between items-center bg-white relative">
            
            {/* Left Column: Hamburger toggle on Mobile, standard thin Search toggler on Desktop */}
            <div className="flex items-center gap-1 md:gap-3">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                onMouseMove={handleMenuMouseMove}
                onMouseLeave={handleMenuMouseLeave}
                className="p-1.5 text-neutral-800 hover:text-black rounded-lg md:hidden transition-colors flex items-center justify-center select-none w-9 h-9"
                aria-label="Open navigation list menu"
                id="mobile-drawer-btn"
              >
                <motion.span
                  animate={{ x: menuCoords.x, y: menuCoords.y }}
                  transition={{ type: "spring", stiffness: 80, damping: 25, mass: 0.4 }}
                  className="pointer-events-none inline-flex items-center justify-center"
                >
                  <Menu className="w-5 h-5 md:w-6 md:h-6 stroke-[1.75]" />
                </motion.span>
              </button>

              <button
                onClick={() => setIsSearchActive(!isSearchActive)}
                onMouseMove={handleSearchMouseMove}
                onMouseLeave={handleSearchMouseLeave}
                className="p-1.5 text-neutral-800 hover:text-black rounded-lg transition-colors flex items-center justify-center select-none w-9 h-9"
                aria-label="Query Search field"
                id="header-search-toggle"
              >
                <motion.span
                  animate={{ x: searchCoords.x, y: searchCoords.y }}
                  transition={{ type: "spring", stiffness: 80, damping: 25, mass: 0.4 }}
                  className="pointer-events-none inline-flex items-center justify-center"
                >
                  <Search className="w-5 h-5 md:w-6 md:h-6 stroke-[1.75]" />
                </motion.span>
              </button>
            </div>

            {/* Center Column: Intricate Vector Drawn Shield Emblem and futuristic Typo brand Wordmark */}
            <div className="flex items-center justify-center select-none" id="inammens-main-brand-logo">
              <img
    src={logo}
    alt="INAM MENS"
    // className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain"
    className="h-10 sm:h-14 md:h-28 lg:h-22 w-auto object-contain"
    draggable={false}
  />
            </div>

            {/* Right Column: User Profile and Wireframe shopping cart bag icons */}
            <div className="flex items-center gap-1 md:gap-3">
              <button 
                onMouseMove={handleUserMouseMove}
                onMouseLeave={handleUserMouseLeave}
                className="p-1.5 text-neutral-800 hover:text-black rounded-lg hidden md:flex items-center justify-center select-none w-9 h-9 transition-colors" 
                aria-label="User Account Profile" 
                id="user-profile-btn"
              >
                <motion.span
                  animate={{ x: userCoords.x, y: userCoords.y }}
                  transition={{ type: "spring", stiffness: 80, damping: 25, mass: 0.4 }}
                  className="pointer-events-none inline-flex items-center justify-center"
                >
                  <User className="w-5 h-5 md:w-6 md:h-6 stroke-[1.75]" />
                </motion.span>
              </button>

              <button
                onClick={onCartToggle}
                onMouseMove={handleCartMouseMove}
                onMouseLeave={handleCartMouseLeave}
                className="p-1.5 text-neutral-800 hover:text-black rounded-lg relative transition-colors flex items-center justify-center select-none w-9 h-9"
                aria-label="Open Shopping Bag Drawer"
                id="shopping-bag-total-btn"
              >
                <motion.span
                  animate={{ x: cartCoords.x, y: cartCoords.y }}
                  transition={{ type: "spring", stiffness: 80, damping: 25, mass: 0.4 }}
                  className="pointer-events-none relative inline-flex items-center justify-center w-full h-full"
                >
                  <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 stroke-[1.75]" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-neutral-900 border border-white text-white font-extrabold text-[9px] w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center shadow-xs" id="cart-item-count-badge">
                      {cartCount}
                    </span>
                  )}
                </motion.span>
              </button>
            </div>

          </div>

          {/* Inline Active search entry panel */}
          {isSearchActive && (
            <div className="max-w-2xl mx-auto mt-3 md:mt-5 p-2 bg-neutral-50 border border-gray-200 rounded-lg flex items-center gap-2.5 animate-in fade-in slide-in-from-top-1 duration-200">
              <Search className="w-4 h-4 text-gray-500 ml-1 shrink-0" />
              <input
                type="text"
                placeholder="Search collection..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="bg-transparent border-none outline-none w-full text-xs font-light py-1.5 text-neutral-800 placeholder:text-gray-400"
                autoFocus
                id="topbar-search-input"
              />
              {searchQuery && (
                <button 
                  onClick={() => onSearchChange('')} 
                  className="p-1 text-gray-400 hover:text-black cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          )}

          {/* 3. MULTI-LEVEL CENTRALIZE NAV CONTROLS (DESKTOP MODE) */}
          <nav className="hidden md:block w-full mt-7 pt-4 border-t border-gray-50 select-none">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-2">
              <ul className="flex items-center justify-center gap-x-6 lg:gap-x-10 text-[12px] font-semibold tracking-wider text-neutral-800 uppercase">
                {TEXT_CONSTANTS.NAV_LINKS.map((link) => (
                  <li
                    key={link.label}
                    className="relative py-2"
                    onMouseEnter={() => setHoveredLink(link.label)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.submenu || link.isMegaMenu) {
                          e.preventDefault();
                        }
                      }}
                      className={`transition-colors py-1 flex items-center gap-1 cursor-pointer font-bold text-[12px] tracking-wider uppercase ${
                        link.isSale
                          ? hoveredLink === link.label ? "text-[#c21a22]" : "text-red-500 hover:text-[#c21a22]"
                          : hoveredLink === link.label ? "text-[#c5a880]" : "text-neutral-800 hover:text-[#c5a880]"
                      }`}
                    >
                      {link.label}
                    </a>

                    <AnimatePresence>
                      {/* Standard 2-level dropdown */}
                      {link.submenu && !link.isMegaMenu && hoveredLink === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute left-1/2 -translate-x-1/2 mt-6 w-52 bg-white border border-neutral-100 rounded-lg shadow-xl z-50 p-2 overflow-visible"
                        >
                          <div className="absolute top-[-24px] left-0 right-0 h-6 bg-transparent pointer-events-auto" />
                          <motion.div variants={containerVariants} initial="hidden" animate="show" className="flex flex-col gap-0.5">
                            {link.submenu.map((subItem) => (
                              <motion.button
                                variants={itemVariants}
                                key={subItem.label}
                                onClick={() => {
                                  if (onSelectFilter) {
                                    const item = subItem as { filterType?: string; searchQuery?: string; sortBy?: string };
                                    onSelectFilter(item.filterType, item.searchQuery, item.sortBy);
                                  }
                                  setHoveredLink(null);
                                }}
                                className="w-full text-left px-3 py-2 text-[10.5px] font-bold tracking-wide uppercase text-neutral-700 hover:text-[#c5a880] hover:bg-neutral-50 rounded-lg transition-all flex items-center justify-between group/sub cursor-pointer"
                              >
                                <span>{subItem.label}</span>
                                <span className="opacity-0 -translate-x-1 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all duration-150 text-neutral-400">→</span>
                              </motion.button>
                            ))}
                          </motion.div>
                        </motion.div>
                      )}

                      {/* Mega menu for Unstitched (3 columns) */}
                      {link.isMegaMenu && link.megaCategories && hoveredLink === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute left-1/2 -translate-x-1/2 mt-6 w-[460px] bg-white border border-neutral-100 rounded-xl shadow-2xl z-50 p-5 overflow-visible"
                        >
                          <div className="absolute top-[-24px] left-0 right-0 h-6 bg-transparent pointer-events-auto" />
                          <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                            className="grid grid-cols-3 gap-4"
                          >
                            {link.megaCategories.map((cat) => (
                              <div key={cat.title}>
                                <p className="text-[9px] font-black tracking-widest uppercase text-neutral-400 mb-2 border-b border-gray-100 pb-1.5">{cat.title}</p>
                                <div className="flex flex-col gap-0.5">
                                  {cat.items.map((item) => (
                                    <motion.button
                                      variants={itemVariants}
                                      key={item.label}
                                      onClick={() => {
                                        if (onSelectFilter) {
                                          onSelectFilter(undefined, item.searchQuery, undefined);
                                        }
                                        setHoveredLink(null);
                                      }}
                                      className="w-full text-left px-2 py-1.5 text-[10.5px] font-bold tracking-wide uppercase text-neutral-700 hover:text-[#c5a880] hover:bg-neutral-50 rounded-md transition-all flex items-center justify-between group/mega cursor-pointer"
                                    >
                                      <span>{item.label}</span>
                                      <span className="opacity-0 -translate-x-1 group-hover/mega:opacity-100 group-hover/mega:translate-x-0 transition-all duration-150 text-neutral-400 text-xs">→</span>
                                    </motion.button>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

        </div>
      </div>

      {/* MOBILE RESPONSIVE DRAWER */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 transition-opacity md:hidden" id="mobile-menu-backdrop">
          <div className="w-[85%] max-w-xs bg-white h-full p-5 md:p-6 shadow-2xl relative flex flex-col justify-between animate-in slide-in-from-left duration-300 overflow-y-auto">
            <div>
              <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
                <span className="text-sm font-black tracking-widest text-neutral-900 uppercase">INAM MENS</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 hover:bg-neutral-50 rounded"
                  id="close-mobile-drawer-btn"
                >
                  <X className="w-5 h-5 text-gray-800" />
                </button>
              </div>

              <ul className="flex flex-col gap-2 text-xs font-bold tracking-wider text-neutral-800">
                {TEXT_CONSTANTS.NAV_LINKS.map((link) => {
                  const hasSubmenu = !!link.submenu && !link.isMegaMenu;
                  const hasMegaMenu = !!link.isMegaMenu && !!link.megaCategories;
                  const isOpen = mobileOpenSubmenu === link.label;
                  return (
                    <li key={link.label} className="border-b border-gray-50 py-1">
                      {hasSubmenu ? (
                        <div>
                          <button
                            onClick={() => setMobileOpenSubmenu(isOpen ? null : link.label)}
                            className={`w-full flex items-center justify-between py-2.5 uppercase text-left font-bold cursor-pointer ${
                              link.isSale ? 'text-red-500' : 'hover:text-black'
                            }`}
                          >
                            <span>{link.label}</span>
                            <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          {isOpen && (
                            <div className="pl-4 pb-2 flex flex-col gap-2 mt-1 animate-in fade-in duration-200">
                              {link.submenu!.map((subItem) => (
                                <button
                                  key={subItem.label}
                                  onClick={() => {
                                    if (onSelectFilter) {
                                      const item = subItem as { filterType?: string; searchQuery?: string; sortBy?: string };
                                      onSelectFilter(item.filterType, item.searchQuery, item.sortBy);
                                    }
                                    setIsMobileMenuOpen(false);
                                  }}
                                  className="w-full text-left py-2 text-[11px] font-medium text-neutral-600 hover:text-black uppercase cursor-pointer"
                                >
                                  {subItem.label}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : hasMegaMenu ? (
                        <div>
                          <button
                            onClick={() => setMobileOpenSubmenu(isOpen ? null : link.label)}
                            className="w-full flex items-center justify-between py-2.5 hover:text-black uppercase text-left font-bold cursor-pointer"
                          >
                            <span>{link.label}</span>
                            <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          {isOpen && (
                            <div className="pl-2 pb-2 mt-1 animate-in fade-in duration-200">
                              {link.megaCategories!.map((cat) => (
                                <div key={cat.title} className="mb-3">
                                  <p className="text-[9px] font-black tracking-widest uppercase text-neutral-400 mb-1.5 pl-2 border-l-2 border-[#c5a880]">{cat.title}</p>
                                  <div className="pl-3 flex flex-col gap-1">
                                    {cat.items.map((item) => (
                                      <button
                                        key={item.label}
                                        onClick={() => {
                                          if (onSelectFilter) {
                                            onSelectFilter(undefined, item.searchQuery, undefined);
                                          }
                                          setIsMobileMenuOpen(false);
                                        }}
                                        className="w-full text-left py-1.5 text-[11px] font-medium text-neutral-600 hover:text-black uppercase cursor-pointer"
                                      >
                                        {item.label}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <a
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2.5 hover:text-black uppercase"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="border-t border-gray-100 pt-4 mt-4 pb-safe">
              <div className="flex items-center gap-2 text-rose-500 font-semibold mb-2 text-xs">
                <Phone className="w-3.5 h-3.5" />
                <span>Hotline Support Available</span>
              </div>
              <p className="text-[11px] text-gray-500 font-light">{TEXT_CONSTANTS.WHATSAPP_SUPPORT}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
