import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const IMAGES = [
  'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1605020420620-20c943cc4669?q=80&w=800&auto=format&fit=crop',
];

export function FeaturedProduct() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 py-12 md:py-20">
      <div className="flex flex-col lg:flex-row gap-10 md:gap-16">
        
        {/* Left Side: Images Gallery */}
        <div className="w-full lg:w-3/5 flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
            {IMAGES.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`flex-shrink-0 w-20 h-24 md:w-24 md:h-32 border-2 transition-all ${
                  activeImage === idx ? 'border-neutral-900 opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-grow aspect-[4/5] bg-gray-100 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={IMAGES[activeImage]}
                alt="Featured Product"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            
            {/* Spinning Text Stamp (Bottom Right, slightly shifted towards center) */}
            <div className="absolute -bottom-4 right-4 md:-bottom-6 md:right-10 w-28 h-28 md:w-36 md:h-36 z-10 flex items-center justify-center p-2 cursor-pointer pointer-events-none drop-shadow-md">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                className="w-full h-full"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                  <path id="circlePath" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
                  <text className="text-[12px] font-black uppercase tracking-[0.18em] fill-neutral-900">
                    <textPath href="#circlePath" startOffset="0%">
                      Featured Product • Featured Product • 
                    </textPath>
                  </text>
                </svg>
              </motion.div>
              {/* Center Dot */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-2.5 h-2.5 bg-neutral-900 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="w-full lg:w-2/5 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 mb-2">
            Premium & Elegant
          </h2>
          <div className="w-16 h-1 bg-neutral-900 mb-6" />
          
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
            Experience the pinnacle of luxury with our premium unstitched fabric collection. Crafted for the modern man who values tradition and elegance. Each piece is woven with precision, offering unparalleled comfort and a sophisticated drape.
          </p>

          <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Price</p>
              <p className="text-2xl font-bold text-neutral-900">Rs. 4,500.00</p>
            </div>
          </div>

          <button className="group relative overflow-hidden bg-neutral-900 text-white w-full py-4 rounded-full font-medium text-lg flex items-center justify-center transition-colors duration-300 cursor-pointer shadow-lg">
            <span className="absolute inset-0 bg-neutral-700 rounded-full z-0 transition-transform duration-300 ease-out translate-y-[101%] group-hover:translate-y-0" />
            <span className="relative z-10 flex items-center gap-2">
              Add to Cart
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
