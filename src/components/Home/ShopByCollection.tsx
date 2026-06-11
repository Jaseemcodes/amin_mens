import React from 'react';
import { motion } from 'motion/react';

const COLLECTIONS = [
  {
    id: 'white-collection',
    title: 'White Collection',
    image: 'https://images.unsplash.com/photo-1605020420620-20c943cc4669?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'boutique-work',
    title: 'Boutique Work',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'sale-discount',
    title: 'SALE / Discount',
    image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'new-arrivals',
    title: 'New Arrivals',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop',
  }
];

export function ShopByCollection() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 py-8 md:py-12">
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-widest text-neutral-900 border-l-4 border-[#c5a880] pl-3">
          Shop By Collection
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {COLLECTIONS.map((collection, index) => (
          <motion.div
            key={collection.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden aspect-[4/3] md:aspect-[3/4] cursor-pointer rounded-lg shadow-md"
          >
            {/* Background Image */}
            <img
              src={collection.image}
              alt={collection.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
            
            {/* Border Box Animation */}
            <div className="absolute inset-3 border border-white/30 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500" />
            
            {/* Title */}
            <div className="absolute inset-0 p-4 flex items-center justify-center text-center">
              <h3 className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-widest group-hover:-translate-y-1 transition-transform duration-300">
                {collection.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
