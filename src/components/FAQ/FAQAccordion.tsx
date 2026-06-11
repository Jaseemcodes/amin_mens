import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { TEXT_CONSTANTS } from '../../constants/textConstants';

export function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-white py-8 sm:py-10 md:py-16 px-3 sm:px-4 border-t border-gray-100" id="faqs-accordion-section">
      <div className="max-w-3xl mx-auto">
        {/* Underlined Luxury Title */}
        <div className="text-center mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl md:text-3xl font-extrabold tracking-widest sm:tracking-widest text-neutral-950 uppercase border-b-2 border-neutral-800 pb-1.5 inline-block leading-none">
            {TEXT_CONSTANTS.FAQ_SECTION_TITLE}
          </h3>
          <p className="text-[11px] sm:text-xs text-gray-500 font-light mt-2 sm:mt-3 max-w-md mx-auto leading-relaxed">
            Quick responses concerning delivery modes, returns exchange policies, and customer support channels.
          </p>
        </div>

        {/* FAQs List Container */}
        <div className="border-t border-gray-150 divide-y divide-gray-150" id="faqs-accordion-container">
          {TEXT_CONSTANTS.FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="py-3 sm:py-4 hover:bg-neutral-50/40 rounded px-1 transition-all">
                {/* Header Toggle */}
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full flex justify-between items-center text-left py-1.5 sm:py-1 text-sm font-bold text-neutral-800 hover:text-black gap-3 sm:gap-4 focus:outline-none cursor-pointer min-h-[44px]"
                  aria-expanded={isOpen}
                  id={`faq-trigger-${item.id}`}
                >
                  <span className="text-[12px] sm:text-[13px] md:text-sm tracking-wide select-none">{item.question}</span>
                  <span className="shrink-0 text-gray-500 hover:text-black p-1">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {/* Answer Content Panel */}
                {isOpen && (
                  <div className="mt-2 pl-0 pr-4 sm:pr-6 pb-2 text-[11px] sm:text-xs md:text-xs leading-relaxed text-gray-600 font-light select-text animate-in fade-in slide-in-from-top-1 duration-150" id={`faq-ans-${item.id}`}>
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
