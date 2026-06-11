import React from 'react';
import { Truck, RefreshCw, HeadphonesIcon } from 'lucide-react';

export function FeatureBar() {
  return (
    <section className="w-full border-t border-b border-gray-200 bg-white py-8 md:py-12 mt-10">
      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
        
        {/* Feature 1 */}
        <div className="flex flex-col items-center justify-center pt-4 md:pt-0 px-4">
          <Truck className="w-8 h-8 text-neutral-900 mb-4 stroke-[1.5]" />
          <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-widest mb-2">Worldwide Shipping</h4>
          <p className="text-xs text-gray-500 max-w-xs">Fast and reliable delivery across the globe for all your orders.</p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center justify-center pt-8 md:pt-0 px-4">
          <RefreshCw className="w-8 h-8 text-neutral-900 mb-4 stroke-[1.5]" />
          <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-widest mb-2">Free Returns</h4>
          <p className="text-xs text-gray-500 max-w-xs">Not satisfied? Return your unstitched fabric within 14 days easily.</p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center justify-center pt-8 md:pt-0 px-4">
          <HeadphonesIcon className="w-8 h-8 text-neutral-900 mb-4 stroke-[1.5]" />
          <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-widest mb-2">24/7 Support</h4>
          <p className="text-xs text-gray-500 max-w-xs">Our dedicated team is here to help you with any queries anytime.</p>
        </div>

      </div>
    </section>
  );
}
