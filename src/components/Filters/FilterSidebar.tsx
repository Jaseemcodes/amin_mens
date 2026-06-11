import { SlidersHorizontal, X, RotateCcw } from 'lucide-react';
import { TEXT_CONSTANTS } from '../../constants/textConstants';
import { FilterState } from '../../customHooks/useFilters';

interface FilterSidebarProps {
  filters: FilterState;
  isFilterOpen: boolean;
  onToggleFilters: () => void;
  onSortChange: (sort: string) => void;
  uniqueTypes: string[];
  uniqueColors: string[];
  priceBounds: { min: number; max: number };
  onToggleType: (type: string) => void;
  onToggleColor: (color: string) => void;
  onPriceChange: (min: number, max: number) => void;
  onClearFilters: () => void;
}

export function FilterSidebar({
  filters,
  isFilterOpen,
  onToggleFilters,
  onSortChange,
  uniqueTypes,
  uniqueColors,
  priceBounds,
  onToggleType,
  onToggleColor,
  onPriceChange,
  onClearFilters
}: FilterSidebarProps) {
  return (
    <div className="w-full bg-white border-b border-gray-100 py-2.5 px-2 sm:px-3 md:py-4 md:px-4 sticky top-0 z-30 shadow-xs" id="controls-toolbar-container">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 md:gap-4">
        {/* Filter Toggle Button */}
        <button
          onClick={onToggleFilters}
          className="flex items-center gap-1.5 md:gap-2 px-2.5 py-2 sm:px-3 sm:py-1.5 md:px-4 md:py-2 border border-gray-300 rounded text-[11px] sm:text-[11px] md:text-xs font-semibold text-neutral-800 hover:text-black hover:border-black hover:bg-neutral-50 transition-all cursor-pointer min-h-[40px]"
          id="toggle-filter-sidebar-button"
        >
          <SlidersHorizontal className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-600" />
          <span className="whitespace-nowrap">{isFilterOpen ? TEXT_CONSTANTS.HIDE_FILTERS_BTN : TEXT_CONSTANTS.SHOW_FILTERS_BTN}</span>
        </button>

        {/* Sort by dropdown */}
        <div className="flex items-center gap-1 md:gap-1.5" id="sort-controls-dropdown-wrapper">
          <span className="text-[10px] md:text-xs font-medium text-gray-500 uppercase tracking-wider hidden xs:inline">{TEXT_CONSTANTS.SORT_BY_LABEL}</span>
          <select
            value={filters.sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1.5 md:px-2.5 md:py-1.5 text-[11px] md:text-xs font-semibold text-neutral-800 outline-none focus:border-black cursor-pointer bg-white min-h-[40px]"
            id="sort-select-element"
            aria-label="Sort products dropdown menu"
          >
            {TEXT_CONSTANTS.SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* FILTER DRAWER PANEL (Collapsible list containing categories/colors) */}
      {isFilterOpen && (
        <div className="max-w-7xl mx-auto mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-100 animate-in slide-in-from-top-3 duration-250 ease-out" id="collapsible-filters-drawer">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 pb-4 md:pb-6">
            
            {/* Filter Category: Product Types */}
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-gray-100 pb-1.5">
                {TEXT_CONSTANTS.FILTER_CATEGORY_LABEL}
              </h4>
              <div className="flex flex-col gap-2">
                {uniqueTypes.map((type) => (
                  <label key={type} className="flex items-center gap-2.5 text-xs text-neutral-700 cursor-pointer hover:text-black select-none">
                    <input
                      type="checkbox"
                      checked={filters.types.includes(type)}
                      onChange={() => onToggleType(type)}
                      className="rounded border-gray-300 text-neutral-900 focus:ring-neutral-900 w-4 h-4"
                    />
                    <span className="capitalize">{type.replace('_', ' ')}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter Category: Colors */}
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-gray-100 pb-1.5">
                {TEXT_CONSTANTS.FILTER_COLOR_LABEL}
              </h4>
              <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto pr-2">
                {uniqueColors.map((color) => {
                  const isSelected = filters.colors.includes(color);
                  return (
                    <button
                      key={color}
                      onClick={() => onToggleColor(color)}
                      className={`text-xs px-2.5 py-1 rounded transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-neutral-900 text-white font-bold scale-102 shadow-xs'
                          : 'bg-gray-100 text-neutral-700 hover:bg-gray-200'
                      }`}
                    >
                      {color}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Filter Category: Price Selection & Bounds */}
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-gray-100 pb-1.5">
                {TEXT_CONSTANTS.FILTER_PRICE_LABEL}
              </h4>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs font-medium text-neutral-600">
                  <span>Rs. {filters.minPrice}</span>
                  <span>Rs. {filters.maxPrice}</span>
                </div>
                <input
                  type="range"
                  min={priceBounds.min}
                  max={priceBounds.max}
                  value={filters.maxPrice}
                  onChange={(e) => onPriceChange(filters.minPrice, parseInt(e.target.value))}
                  className="w-full accent-neutral-900 cursor-pointer"
                  id="price-range-slider"
                  aria-label="Filter products with price boundary"
                />
                
                {/* Clear All / Active filters tracker */}
                <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-50">
                  <button
                    onClick={onClearFilters}
                    className="flex items-center gap-1.5 text-xs text-red-600 hover:text-red-800 transition-colors font-medium cursor-pointer"
                    id="clear-all-filters-btn"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{TEXT_CONSTANTS.CLEAR_ALL}</span>
                  </button>
                  <button
                    onClick={onToggleFilters}
                    className="bg-neutral-900 text-white text-xs px-4 py-1.5 rounded font-bold hover:bg-neutral-800 cursor-pointer transition-colors"
                  >
                    {TEXT_CONSTANTS.APPLY_FILTERS}
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
