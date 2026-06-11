import React from 'react';
import { Product } from '../../constants/productData';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export function ProductGrid({ products, onAddToCart }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="w-full text-center py-20 bg-neutral-50 rounded border border-dashed border-gray-200 p-8 flex flex-col items-center justify-center gap-4" id="empty-results-tracker">
        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
        <div>
          <h3 className="text-sm font-bold text-neutral-800">No products match your criteria</h3>
          <p className="text-xs text-gray-500 font-light mt-1">Please try clearing filters or search query to explore the catalog.</p>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full" id="product-grid-section">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1.5 sm:gap-3 md:gap-4 gap-y-4 sm:gap-y-6 md:gap-y-8" id="product-cards-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}
