import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { TEXT_CONSTANTS } from '../../constants/textConstants';

// Social icon SVG paths for reuse
const SOCIAL_ICONS = {
  facebook: 'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z',
  instagram: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  youtube: 'M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  tiktok: 'M12.53.07C13.82.02 15.1.01 16.38 0c.08 1.17.47 2.27 1.15 3.22.84.9 1.93 1.5 3.12 1.74v3.18c-1.34-.1-2.61-.63-3.64-1.51-.23-.2-.44-.43-.63-.67v6.62c.07 4.15-2.73 7.72-6.75 8.52-4.02.8-7.98-1.56-9.11-5.59S2.08 6.55 6.1 5.75c1.47-.29 2.98-.12 4.35.49v3.29c-.83-.45-1.78-.59-2.7-.4-1.89.38-3.09 2.22-2.71 4.1.38 1.89 2.22 3.09 4.1 2.71 1.89-.38 3.09-2.22 2.71-4.1-.06-.3-.16-.6-.3-.87V.07z',
  snapchat: 'M11.996 0c-4.142 0-7.464 2.1-7.464 5.922 0 .506.126 1.012.38 1.48-.127.127-.253.29-.253.506 0 .445.54.675 1.013.338 1.013-.718 1.731-.422 2.45.633.421.633.928.928 1.477.928.843 0 1.349-.675 2.531-.675 1.181 0 1.688.675 2.53.675.549 0 1.056-.295 1.478-.928.717-1.055 1.436-1.351 2.449-.633.473.337 1.013.107 1.013-.338 0-.216-.127-.379-.253-.506.253-.468.38-.974.38-1.48C19.46 2.1 16.14 0 11.997 0zm0 1.44c3.08 0 5.4 1.517 5.4 4.417 0 .42-.1.84-.3 1.22-.09.18-.09.4 0 .58.14.28.01.62-.27.75l-.39.18c-.89.41-1.4.15-2 .54-.42.27-.92.42-1.44.42-.8 0-1.14-.52-2.14-.52s-1.34.52-2.14.52c-.52 0-1.02-.15-1.44-.42-.6-.39-1.11-.13-2-.54l-.4-.18c-.27-.13-.4-.47-.26-.75.09-.18.09-.4 0-.58-.2-.38-.3-.8-.3-1.22 0-2.9 2.32-4.417 5.4-4.418z',
  linkedin: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
};

const SOCIAL_LINKS: { key: string; href: string; path: string; label: string }[] = [
  { key: 'facebook', href: 'https://facebook.com', path: SOCIAL_ICONS.facebook, label: 'Facebook' },
  { key: 'instagram', href: 'https://instagram.com', path: SOCIAL_ICONS.instagram, label: 'Instagram' },
  { key: 'youtube', href: 'https://youtube.com', path: SOCIAL_ICONS.youtube, label: 'YouTube' },
  { key: 'tiktok', href: 'https://tiktok.com', path: SOCIAL_ICONS.tiktok, label: 'TikTok' },
  { key: 'snapchat', href: 'https://snapchat.com', path: SOCIAL_ICONS.snapchat, label: 'Snapchat' },
  { key: 'linkedin', href: 'https://linkedin.com', path: SOCIAL_ICONS.linkedin, label: 'LinkedIn' },
];

// Magnetic pull helper - same as Header
const calculateMagneticPull = (e: React.MouseEvent<any>, maxPull: number = 8) => {
  const { clientX, clientY, currentTarget } = e;
  const rect = currentTarget.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const pullX = Math.max(-maxPull, Math.min(maxPull, (clientX - centerX) * 0.45));
  const pullY = Math.max(-maxPull, Math.min(maxPull, (clientY - centerY) * 0.45));
  return { x: pullX, y: pullY };
};

// Individual magnetic social icon component
function MagneticSocialIcon({ href, path, label }: { key?: string; href: string; path: string; label: string }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-neutral-400 hover:text-white transition-colors flex items-center justify-center select-none"
      aria-label={label}
      onMouseMove={(e) => setCoords(calculateMagneticPull(e))}
      onMouseLeave={() => setCoords({ x: 0, y: 0 })}
    >
      <motion.span
        animate={{ x: coords.x, y: coords.y }}
        transition={{ type: 'spring', stiffness: 80, damping: 25, mass: 0.4 }}
        className="pointer-events-none inline-flex items-center justify-center"
      >
        <svg className="w-[18px] h-[18px] md:w-5 md:h-5 fill-current" viewBox="0 0 24 24">
          <path d={path} />
        </svg>
      </motion.span>
    </a>
  );
}

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 4000);
    }
  };

  return (
    <footer className="w-full bg-[#1E1E1E] text-white pt-8 sm:pt-10 md:pt-14 pb-24 md:pb-8 px-4 sm:px-6 md:px-8 font-sans border-t border-neutral-800" id="brand-footer-section">
      <div className="max-w-7xl mx-auto">

        {/* ── NEWSLETTER + SOCIAL ROW ── */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 sm:gap-8 md:gap-12 pb-6 sm:pb-8 md:pb-10 border-b border-neutral-800">

          {/* Newsletter Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:max-w-md">
            <p className="text-[10px] sm:text-[11px] md:text-xs text-neutral-300 font-light tracking-wide mb-3">
              {TEXT_CONSTANTS.FOOTER_NEWSLETTER_HEADING}
            </p>
            <form onSubmit={handleSubscribe} className="w-full max-w-xs sm:max-w-sm flex items-center gap-0">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={TEXT_CONSTANTS.FOOTER_NEWSLETTER_PLACEHOLDER}
                className="flex-1 bg-[#2A2A2A] border border-neutral-700 text-white text-[11px] sm:text-xs placeholder:text-neutral-500 rounded-l-full px-3 sm:px-4 py-2.5 sm:py-3 outline-none focus:border-neutral-500 transition-colors min-w-0"
              />
              <button
                type="submit"
                className="bg-white text-neutral-900 p-2 sm:p-2.5 md:p-3 rounded-r-full hover:bg-neutral-200 transition-colors cursor-pointer shrink-0"
                aria-label="Subscribe to newsletter"
              >
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 stroke-[2]" />
              </button>
            </form>
            {isSubscribed && (
              <p className="text-[9px] sm:text-[10px] text-emerald-400 mt-2 animate-in fade-in duration-300">
                Thank you for subscribing!
              </p>
            )}
          </div>

          {/* Social Media Icons + WhatsApp */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex items-center gap-3 sm:gap-3.5 md:gap-4">
              {SOCIAL_LINKS.map((icon) => (
                <MagneticSocialIcon
                  key={icon.key}
                  href={icon.href}
                  path={icon.path}
                  label={icon.label}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── LINK COLUMNS ROW ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 py-6 sm:py-8 md:py-10 border-b border-neutral-800">

          {/* Column 1: Brand Info */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start mb-2 sm:mb-0">
            {/* Brand Logo SVG */}
            <svg
              viewBox="0 0 230 40"
              className="h-6 sm:h-8 md:h-9 w-auto text-white fill-current mb-2 sm:mb-3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="translate(2, 2)" stroke="currentColor" strokeWidth="1.2" fill="none">
                <text x="18" y="22.5" fontFamily="'Space Grotesk', 'Inter', sans-serif" fontWeight="850" fontSize="15" textAnchor="middle" fill="currentColor" stroke="none">I</text>
                <circle cx="18" cy="18" r="11" strokeWidth="1.25" />
                <circle cx="18" cy="18" r="13.5" strokeDasharray="1.2 1.8" strokeWidth="0.8" />
                <path d="M 10,23 C 5,20 4,25 7,28 C 10,31 11,30 10,23 Z" fill="currentColor" stroke="none" />
                <path d="M 6,17 C 1,15 0,20 3,22 C 6,24 7,23 6,17 Z" fill="currentColor" stroke="none" />
                <path d="M 7,11 C 3,9 2,14 5,16 C 8,18 9,17 7,11 Z" fill="currentColor" stroke="none" />
                <path d="M 11,6 C 8,4 6,8 9,11 C 12,14 13,12 11,6 Z" fill="currentColor" stroke="none" />
                <path d="M 26,23 C 31,20 32,25 29,28 C 26,31 25,30 26,23 Z" fill="currentColor" stroke="none" />
                <path d="M 30,17 C 35,15 36,20 33,22 C 30,24 29,23 30,17 Z" fill="currentColor" stroke="none" />
                <path d="M 29,11 C 33,9 34,14 31,16 C 28,18 27,17 29,11 Z" fill="currentColor" stroke="none" />
                <path d="M 25,6 C 28,4 30,8 27,11 C 24,14 23,12 25,6 Z" fill="currentColor" stroke="none" />
                <path d="M 15,3 C 18,1 20,1 21,3 C 19,5 17,5 15,3 Z M 18,1 L 18,5" />
                <circle cx="18" cy="0.5" r="1.2" fill="currentColor" stroke="none" />
              </g>
              <text x="45" y="26.5" fontFamily="'Space Grotesk', 'Inter', sans-serif" fontWeight="900" fontSize="20" letterSpacing="1.2" fill="currentColor" stroke="none">INAM MENS</text>
              <g transform="translate(178, 8)" stroke="currentColor" strokeWidth="0.8" fill="none">
                <circle cx="5" cy="5" r="4.5" strokeWidth="0.8" />
                <text x="5" y="7.8" fontFamily="sans-serif" fontWeight="bold" fontSize="5.5" textAnchor="middle" fill="currentColor" stroke="none">R</text>
              </g>
            </svg>
            <p className="text-[11px] sm:text-[11px] md:text-xs text-neutral-400 font-light leading-relaxed text-center md:text-left max-w-[280px] sm:max-w-xs">
              {TEXT_CONSTANTS.TAGLINE}
            </p>
          </div>

          {/* Column 2: Shop Collection */}
          <div className="flex flex-col items-start md:items-start gap-1.5 sm:gap-2">
            <h4 className="text-[11px] sm:text-xs md:text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-300 mb-0.5 sm:mb-1">Shop</h4>
            {TEXT_CONSTANTS.FOOTER_SHOP_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] sm:text-[11px] md:text-[11px] text-neutral-500 hover:text-white transition-colors font-light tracking-wide min-h-[24px] flex items-center"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Column 3: Help & Info */}
          <div className="flex flex-col items-start md:items-start gap-1.5 sm:gap-2">
            <h4 className="text-[11px] sm:text-xs md:text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-300 mb-0.5 sm:mb-1">Help</h4>
            {TEXT_CONSTANTS.FOOTER_HELP_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="text-[11px] sm:text-[11px] md:text-[11px] text-neutral-500 hover:text-white transition-colors font-light tracking-wide min-h-[24px] flex items-center"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Column 4: Payment Methods */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start gap-2">
            <h4 className="text-[11px] sm:text-xs md:text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-300 mb-0.5 sm:mb-1">Payment</h4>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center gap-2">
                <span className="bg-purple-900 text-white font-extrabold text-[9px] sm:text-[10px] px-2 py-0.5 rounded italic">Alfa</span>
                <span className="text-[11px] sm:text-xs text-neutral-400 font-light">Installments</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-emerald-950 text-emerald-400 font-bold text-[9px] sm:text-[10px] px-2 py-0.5 rounded uppercase font-mono">COD</span>
                <span className="text-[11px] sm:text-xs text-neutral-400 font-light">Cash on Delivery</span>
              </div>
            </div>
            <p className="text-[10px] sm:text-[11px] md:text-xs text-neutral-600 font-light mt-0.5 leading-relaxed text-center md:text-left">
              {TEXT_CONSTANTS.FOOTER_SECURE_PAYMENTS}
            </p>
          </div>
        </div>

        {/* ── BOTTOM BAR: Copyright + Policy Links ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 md:gap-4 pt-4 sm:pt-5 md:pt-6 pb-2 md:pb-4">
          <p className="text-[10px] sm:text-[11px] md:text-xs text-neutral-600 font-light text-center sm:text-left">
            {TEXT_CONSTANTS.FOOTER_COPYRIGHT}
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-2 sm:gap-x-3 md:gap-x-4 gap-y-1 text-[10px] sm:text-[11px] md:text-xs text-neutral-500 font-light">
            <a href="#refund" className="hover:text-white transition-colors">{TEXT_CONSTANTS.FOOTER_REFUND_POLICY}</a>
            <span className="text-neutral-700 hidden sm:inline">|</span>
            <a href="#privacy" className="hover:text-white transition-colors">{TEXT_CONSTANTS.FOOTER_PRIVACY_POLICY}</a>
            <span className="text-neutral-700 hidden sm:inline">|</span>
            <a href="#terms" className="hover:text-white transition-colors">{TEXT_CONSTANTS.FOOTER_TERMS}</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
