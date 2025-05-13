import { useState, useMemo, useCallback } from 'react';
import type { MenuItem, FilterOptions, Category } from '../types';

export const useMenuFilter = (items: MenuItem[]) => {
  const [filters, setFilters] = useState<FilterOptions>({
    category: 'All',
    searchTerm: '',
    sortBy: 'name-asc'
  });

  const filteredItems = useMemo(() => {
    // Add small delay for more realistic loading experience in development
    return items
      .filter(item => {
        // Filter by category
        if (filters.category !== 'All' && item.category !== filters.category) {
          return false;
        }

        // Filter by search term
        if (filters.searchTerm && !item.name.toLowerCase().includes(filters.searchTerm.toLowerCase())) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        // Sort items based on the selected sort option
        switch (filters.sortBy) {
          case 'price-asc':
            return a.price - b.price;
          case 'price-desc':
            return b.price - a.price;
          case 'name-asc':
            return a.name.localeCompare(b.name);
          case 'name-desc':
            return b.name.localeCompare(a.name);
          default:
            return 0;
        }
      });
  }, [items, filters]);

  const setCategory = useCallback((category: Category) => {
    setFilters(prev => ({ ...prev, category }));
  }, []);

  const setSearchTerm = useCallback((searchTerm: string) => {
    setFilters(prev => ({ ...prev, searchTerm }));
  }, []);

  const setSortBy = useCallback((sortBy: FilterOptions['sortBy']) => {
    setFilters(prev => ({ ...prev, sortBy }));
  }, []);

  return {
    filters,
    filteredItems,
    setCategory,
    setSearchTerm,
    setSortBy
  };
}; 