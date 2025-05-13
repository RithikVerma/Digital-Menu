import { useMenuFilter } from '../hooks/useMenuFilter';
import { menuItems } from '../data/menuData';
import { CategoryFilter } from '../components/CategoryFilter';
import { SearchBar } from '../components/SearchBar';
import { SortSelector } from '../components/SortSelector';
import { MenuGrid } from '../components/MenuGrid';
import { useLoading } from '../context/LoadingContext';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const HomePage = () => {
  const { filters, filteredItems, setCategory, setSearchTerm, setSortBy } = useMenuFilter(menuItems);
  const { showLoader, hideLoader } = useLoading();
  const previousFilters = useRef(filters);

  // Handle different loading states based on filter type
  useEffect(() => {
    // Don't trigger loading on initial render
    if (previousFilters.current === filters) {
      return;
    }
    
    // Determine what changed to show appropriate loading message
    let loadingTime = 500;
    
    // Searching tends to be more resource-intensive, simulate longer load
    if (previousFilters.current.searchTerm !== filters.searchTerm) {
      loadingTime = 800;
    }
    
    showLoader();
    const loadingTimeout = setTimeout(() => {
      hideLoader();
    }, loadingTime);
    
    // Update ref for next comparison
    previousFilters.current = filters;

    return () => clearTimeout(loadingTimeout);
  }, [filters, showLoader, hideLoader]);

  return (
    <div className="h-full overflow-y-auto scrollbar-modern pb-12">
      <div className="container mx-auto px-4 py-8">
        <motion.div 
          className="mb-10 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">
            Discover Our <span className="text-primary-600 dark:text-primary-400">Delicious</span> Menu
          </h1>
          <p className="text-neutral-600 dark:text-neutral-300 text-lg md:text-xl">
            Explore our handcrafted selection of premium drinks and artisanal food
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="lg:sticky lg:top-24 space-y-8 bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-soft">
              <h2 className="font-display font-bold text-xl text-neutral-900 dark:text-white mb-4">
                Filter Options
              </h2>
              <SearchBar onSearch={setSearchTerm} initialSearchTerm={filters.searchTerm} />
              <SortSelector sortBy={filters.sortBy} onSortChange={setSortBy} />
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CategoryFilter activeCategory={filters.category} onSelectCategory={setCategory} />
            <MenuGrid items={filteredItems} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}; 