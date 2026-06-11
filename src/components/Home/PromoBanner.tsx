import { motion } from 'motion/react';
import React from 'react';

interface PromoBannerProps {
  imageSrc: string;
  title?: string;
  subtitle?: string;
  buttonText: string;
  onButtonClick?: () => void;
  buttonPosition?: 'left' | 'right';
  brightness?: string;
  titleSize?: string;
}

export function PromoBanner({ 
  imageSrc, 
  title, 
  subtitle, 
  buttonText, 
  onButtonClick,
  buttonPosition = 'left',
  brightness = 'brightness-95',
  titleSize = 'text-[1.2rem] sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl'
}: PromoBannerProps) {
  return (
    <section className="w-full relative bg-neutral-900 overflow-hidden">
      <div className="relative w-full h-[56vh] min-h-[280px] max-h-[430px] sm:h-auto sm:aspect-[16/9] sm:min-h-[340px] md:aspect-[21/9] md:min-h-[480px] md:max-h-[700px] flex items-end justify-center pb-4 max-[420px]:pb-5 sm:pb-10 md:pb-20">
        
        {/* Banner image with stretch animation */}
        <motion.img
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={imageSrc}
          alt={title || 'Banner Image'}
          referrerPolicy="no-referrer"
          className={`absolute inset-0 h-full w-full object-cover object-center select-none ${brightness} contrast-105`}
        />

        {/* Ambient Dark Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-neutral-900/10 pointer-events-none" />

        {/* Overlay Content */}
        <div className={`relative text-white px-5 sm:px-10 md:px-16 lg:px-24 z-10 w-full mx-auto flex ${buttonPosition === 'left' ? 'justify-between' : 'flex-row-reverse justify-between'} items-end pb-2 md:pb-6`}>
          
          {/* Button */}
          <motion.div
            initial={{ opacity: 0, x: buttonPosition === 'left' ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0"
          >
            <button 
              onClick={onButtonClick}
              className="group relative overflow-hidden bg-white text-black px-6 py-2 sm:px-10 md:px-14 sm:py-3 rounded-full font-medium text-[12px] sm:text-sm md:text-[16px] flex items-center justify-center transition-colors duration-300 hover:text-white cursor-pointer shadow-lg"
            >
              <span className="absolute inset-0 bg-[#1a1a1a] rounded-full z-0 transition-transform duration-300 ease-out translate-y-[101%] group-hover:translate-y-0" />
              <span className="relative z-10 flex items-center gap-2 md:gap-2.5">
                {buttonText}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1 w-4 h-4 md:w-[18px] md:h-[18px]">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </button>
          </motion.div>

          {/* Text Content */}
          {(title || subtitle) && (
            <motion.div
              initial={{ opacity: 0, x: buttonPosition === 'left' ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${buttonPosition === 'left' ? 'items-end text-right ml-4' : 'items-start text-left mr-4'}`}
            >
              {title && (
                <h2 className={`${titleSize} font-sans font-extrabold tracking-[0.05em] sm:tracking-[0.12em] md:tracking-[0.14em] text-white select-none leading-tight drop-shadow-md break-words`}>
                  {title}
                </h2>
              )}
              {title && subtitle && (
                <div className={`w-12 sm:w-16 md:w-24 lg:w-32 h-0.5 bg-white/60 my-1.5 sm:my-2 md:my-3 rounded`} />
              )}
              {subtitle && (
                <p className="text-[8px] sm:text-[10px] md:text-xs font-light tracking-[0.18em] sm:tracking-[0.4em] md:tracking-[0.45em] uppercase text-gray-200 select-none drop-shadow-sm">
                  {subtitle}
                </p>
              )}
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}
