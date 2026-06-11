import { useState, useMemo, useCallback } from 'react';
import { Product, PRODUCTS } from '../constants/productData';

export interface FilterState {
  searchQuery: string;
  sortBy: string;
  types: string[];
  colors: string[];
  minPrice: number;
  maxPrice: number;
}

export function useFilters() {
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    sortBy: 'featured',
    types: [],
    colors: [],
    minPrice: 0,
    maxPrice: 12000,
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Derive unique categories and colors from dataset for filter selectors
  const uniqueTypes = useMemo(() => {
    const allTypes = PRODUCTS.map((p) => p.type);
    return Array.from(new Set(allTypes));
  }, []);

  const uniqueColors = useMemo(() => {
    const allColors = PRODUCTS.map((p) => p.color);
    return Array.from(new Set(allColors)).filter(Boolean);
  }, []);

  const priceBounds = useMemo(() => {
    const prices = PRODUCTS.map((p) => p.price);
    const min = prices.length ? Math.min(...prices) : 0;
    const max = prices.length ? Math.max(...prices) : 15000;
    // Pad slightly to account for integer rounding
    return { min: Math.floor(min / 100) * 100, max: Math.ceil(max / 100) * 100 };
  }, []);

  const handleSearchChange = useCallback((query: string) => {
    setFilters((prev) => ({ ...prev, searchQuery: query }));
  }, []);

  const handleSortChange = useCallback((sortBy: string) => {
    setFilters((prev) => ({ ...prev, sortBy }));
  }, []);

  const toggleTypeFilter = useCallback((type: string) => {
    setFilters((prev) => {
      const types = prev.types.includes(type)
        ? prev.types.filter((t) => t !== type)
        : [...prev.types, type];
      return { ...prev, types };
    });
  }, []);

  const toggleColorFilter = useCallback((color: string) => {
    setFilters((prev) => {
      const colors = prev.colors.includes(color)
        ? prev.colors.filter((c) => c !== color)
        : [...prev.colors, color];
      return { ...prev, colors };
    });
  }, []);

  const handlePriceChange = useCallback((min: number, max: number) => {
    setFilters((prev) => ({ ...prev, minPrice: min, maxPrice: max }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters((prev) => ({
      ...prev,
      types: [],
      colors: [],
      minPrice: 0,
      maxPrice: 12000,
    }));
  }, []);

  const toggleFilterSidebar = useCallback(() => {
    setIsFilterOpen((prev) => !prev);
  }, []);

  const applyCategoryFilter = useCallback((type?: string, searchQuery?: string, sortBy?: string) => {
    setFilters((prev) => ({
      ...prev,
      types: type ? [type] : [],
      searchQuery: searchQuery || '',
      sortBy: sortBy || 'featured',
      colors: [],
      minPrice: 0,
      maxPrice: 12000,
    }));
  }, []);

  // Filter and Sort core business logic
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // 1. Search Query Match
    if (filters.searchQuery.trim()) {
      const query = filters.searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.code.toLowerCase().includes(query) ||
          p.color.toLowerCase().includes(query)
      );
    }

    // 2. Product Type Filter Match
    if (filters.types.length > 0) {
      result = result.filter((p) => filters.types.includes(p.type));
    }

    // 3. Color Filter Match
    if (filters.colors.length > 0) {
      result = result.filter((p) => filters.colors.includes(p.color));
    }

    // 4. Price Boundaries Match
    result = result.filter(
      (p) => p.price >= filters.minPrice && p.price <= filters.maxPrice
    );

    // 5. Sorting Application
    switch (filters.sortBy) {
      case 'price_asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'discount_desc':
        result.sort((a, b) => b.discountPercentage - a.discountPercentage);
        break;
      case 'name_asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'featured':
      default:
        // Featured retains original index order in products array
        break;
    }

    return result;
  }, [filters]);

  return {
    filters,
    filteredProducts,
    uniqueTypes,
    uniqueColors,
    priceBounds,
    isFilterOpen,
    handleSearchChange,
    handleSortChange,
    toggleTypeFilter,
    toggleColorFilter,
    handlePriceChange,
    clearFilters,
    toggleFilterSidebar,
    setIsFilterOpen,
    applyCategoryFilter,
  };
}
