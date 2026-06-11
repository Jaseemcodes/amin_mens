import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../../constants/productData';
import { TEXT_CONSTANTS } from '../../constants/textConstants';

interface ProductCardProps {
  key?: string;
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  // Format price helper
  const formatPrice = (amount: number) => {
    return `${TEXT_CONSTANTS.CURRENCY_PREFIX} ${amount.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  return (
    <article
      className="group flex flex-col bg-white overflow-hidden relative border border-gray-100 hover:shadow-md transition-shadow duration-300"
      id={`product-card-${product.id}`}
    >
      {/* 1. PRODUCT THUMBNAIL CONTAINER */}
      <div className="relative aspect-[3/4] w-full bg-neutral-50 overflow-hidden">
        {/* Save Percentage Badge (Top-Left) */}
        {product.discountPercentage > 0 && (
          <div className="absolute top-1.5 left-1.5 sm:top-2.5 sm:left-2.5 bg-red-600 text-white text-[9px] sm:text-[10px] font-bold tracking-wider uppercase px-1.5 sm:px-2.5 py-0.5 sm:py-1 z-10 rounded-xs shadow-xs">
            {TEXT_CONSTANTS.SAVE_LABEL} {product.discountPercentage}%
          </div>
        )}

        {/* Product Portrait Image */}
        <img
          src={product.imageUrl}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top select-none group-hover:scale-105 transition-transform duration-500 ease-out"
          id={`product-img-${product.id}`}
        />

        {/* Dynamic Hover/Tap "Add to Bag" Quick-button overlay */}
        <div className="absolute inset-0 bg-black/10 sm:bg-black/15 opacity-0 sm:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2 sm:pb-3 md:pb-4 group-active:opacity-100">
          <button
            onClick={() => onAddToCart(product)}
            className="w-[85%] sm:w-4/5 bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800 py-2 sm:py-2 md:py-2.5 px-2 rounded-md text-[10px] sm:text-[10px] md:text-xs font-bold tracking-wider flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 transform translate-y-1 sm:translate-y-2 md:group-hover:translate-y-0 group-active:translate-y-0 transition-all duration-300 shadow-md cursor-pointer min-h-[36px] sm:min-h-[40px]"
            id={`quick-add-${product.id}`}
          >
            <ShoppingCart className="w-3 h-3 sm:w-3 md:w-3.5 md:h-3.5" />
            <span>{TEXT_CONSTANTS.ADD_TO_CART_BTN}</span>
          </button>
        </div>
      </div>

      {/* 2. PRODUCT DETAILS CONTAINER (Centered Alignments matching original layout) */}
      <div className="flex flex-col items-center text-center p-1.5 sm:p-2 md:p-3.5 flex-grow">
        {/* Title & Product Code */}
        <h3 className="text-[11px] sm:text-[12px] md:text-[13px] font-bold text-neutral-800 hover:text-black line-clamp-2 leading-snug mb-0.5 md:mb-1 cursor-pointer min-h-[2em]">
          {product.name}
        </h3>

        {/* Pricing Layout */}
        <div className="flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 mb-0.5 sm:mb-1 md:mb-2">
          {/* Sale/Discount Price */}
          <span className="text-[12px] sm:text-[13px] md:text-sm font-extrabold text-red-600">
            {formatPrice(product.price)}
          </span>
          {/* Original Crossed Price */}
          {product.originalPrice > product.price && (
            <span className="text-[10px] sm:text-[11px] md:text-xs text-gray-400 line-through font-light">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Installment Scheme indicator (Simulated Bank Alfalah Alfa Pay schema) */}
        {product.installmentAmount > 0 && (
          <div className="hidden sm:flex items-center justify-center gap-1 bg-purple-50/70 border border-purple-100/50 rounded px-2 md:px-2.5 py-0.5 md:py-1 select-none w-full animate-in fade-in duration-300">
            {/* Alfa Logo replica symbol */}
            <span className="bg-purple-600 text-white font-extrabold text-[8px] md:text-[9px] w-3.5 h-3.5 md:w-4 md:h-4 rounded-full flex items-center justify-center italic">
              b
            </span>
            <span className="text-[9px] md:text-[10px] font-medium text-purple-800 whitespace-nowrap">
              {TEXT_CONSTANTS.INSTALLMENT_PREFIX} <span className="font-extrabold">{formatPrice(product.installmentAmount).split('.')[0]}</span> {TEXT_CONSTANTS.INSTALLMENT_SUFFIX}
            </span>
          </div>
        )}
      </div>
    </article>
  );
}
