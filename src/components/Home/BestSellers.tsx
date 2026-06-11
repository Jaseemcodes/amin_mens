import React, { useState } from 'react';
import { motion } from 'motion/react';

const TABS = ['Unstitched', 'Stitched', 'Sandals'];

const PRODUCTS = [
  {
    id: '1',
    name: 'Summer Cotton - Egyptian',
    price: 'Rs. 4,500.00',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=400&auto=format&fit=crop',
    colors: ['#000000', '#1c2e4a', '#808080']
  },
  {
    id: '2',
    name: 'Wash & Wear Classic',
    price: 'Rs. 3,800.00',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=400&auto=format&fit=crop',
    colors: ['#ffffff', '#f5f5dc', '#d2b48c']
  },
  {
    id: '3',
    name: 'Boski Premium Blend',
    price: 'Rs. 5,200.00',
    image: 'https://images.unsplash.com/photo-1605020420620-20c943cc4669?q=80&w=400&auto=format&fit=crop',
    colors: ['#4b5320', '#000080']
  },
  {
    id: '4',
    name: 'Luxe Series 2026',
    price: 'Rs. 6,000.00',
    image: 'https://images.unsplash.com/photo-1583391733958-d25e61c2c3ba?q=80&w=400&auto=format&fit=crop',
    colors: ['#ffffff']
  },
  {
    id: '5',
    name: 'Karandi Exclusive',
    price: 'Rs. 4,200.00',
    image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=400&auto=format&fit=crop',
    colors: ['#2f4f4f', '#a0522d']
  },
  {
    id: '6',
    name: 'Royal Khaddar',
    price: 'Rs. 3,500.00',
    image: 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?q=80&w=400&auto=format&fit=crop',
    colors: ['#000000', '#d2b48c']
  },
  {
    id: '7',
    name: 'Peshawari Chappal Classic',
    price: 'Rs. 5,500.00',
    image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?q=80&w=400&auto=format&fit=crop',
    colors: ['#8b4513', '#000000']
  },
  {
    id: '8',
    name: 'Embroidered Kameez Shalwar',
    price: 'Rs. 8,500.00',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=400&auto=format&fit=crop',
    colors: ['#1c2e4a', '#ffffff', '#000000']
  }
];

export function BestSellers() {
  const [activeTab, setActiveTab] = useState('Unstitched');

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 py-12 md:py-16">
      
      {/* Header and Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
          Best Sellers
        </h2>
        
        <div className="flex flex-wrap items-center gap-2">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab 
                  ? 'bg-neutral-900 text-white' 
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-neutral-900 hover:text-neutral-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Products Horizontal Scroll Slider (All Screens) */}
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-8 pb-6 hide-scrollbar">
        {PRODUCTS.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col cursor-pointer flex-none w-[70vw] sm:w-[40vw] md:w-[30vw] lg:w-[22vw] snap-start md:snap-center"
          >
            {/* Image Box */}
            <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden mb-4">
              <img 
                src={product.image} 
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {index === 0 && (
                <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                  Sale
                </div>
              )}
            </div>
            
            {/* Details */}
            <h3 className="text-sm font-semibold text-neutral-900 mb-1 group-hover:text-gray-600 transition-colors">
              {product.name}
            </h3>
            <p className="text-xs text-gray-500 mb-3">{product.price}</p>
            
            {/* Colors */}
            <div className="flex items-center gap-1 mt-auto">
              {product.colors.map((color, i) => (
                <div 
                  key={i} 
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: color }}
                />
              ))}
              <span className="text-[10px] text-gray-400 ml-1">+{Math.floor(Math.random() * 5) + 1}</span>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
