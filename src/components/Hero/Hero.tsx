import { motion } from 'motion/react';
import { TEXT_CONSTANTS } from '../../constants/textConstants';

export function Hero() {
  return (
    <section className="w-full relative bg-neutral-900 border-b border-gray-100 overflow-hidden" id="hero-banner-section">
      {/* Aspect ratio banner with responsive height bounds */}
      <div className="w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] min-h-[220px] sm:min-h-[300px] md:min-h-[480px] max-h-[700px] relative flex items-end justify-center pb-6 sm:pb-10 md:pb-20">
        {/* Banner image with no-referrer policy */}
        <img
          src="/src/assets/images/narkins_stitched_hero_banner_1781154378525.png"
          alt="FQ. Stitched Collection 2026"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center sm:object-cover absolute inset-0 select-none brightness-95 contrast-105 scale-102 hover:scale-100 transition-transform duration-1000 ease-out"
          id="hero-banner-image"
        />

        {/* Ambient Dark Gradient overlay to aid text contrast and matches the premium luxury feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-neutral-900/10 pointer-events-none" />

        {/* Title Overlay Content */}
        <div className="relative text-center text-white px-3 sm:px-4 z-10 max-w-xl mx-auto flex flex-col items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* Main Luxury Collection Stamp */}
            <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-extrabold tracking-[0.06em] sm:tracking-[0.12em] md:tracking-[0.14em] text-white select-none leading-tight drop-shadow-md">
              {TEXT_CONSTANTS.BRAND_SUBTITLE}
            </h2>
            
            {/* Accent divider line */}
            <div className="w-10 sm:w-16 md:w-24 lg:w-32 h-0.5 bg-white/60 my-1 sm:my-2 md:my-3 rounded" />
            
            <p className="text-[8px] sm:text-[10px] md:text-xs font-light tracking-[0.2em] sm:tracking-[0.4em] md:tracking-[0.45em] uppercase text-gray-200 select-none drop-shadow-sm">
              {TEXT_CONSTANTS.COLLECTION_YEAR}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
