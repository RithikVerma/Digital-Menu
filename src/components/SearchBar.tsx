import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SearchBarProps {
  onSearch: (term: string) => void;
  initialSearchTerm?: string;
}

export const SearchBar = ({ onSearch, initialSearchTerm = '' }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

  // Debounce search input
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(searchTerm);
    }, 300);
    
    return () => clearTimeout(timeoutId);
  }, [searchTerm, onSearch]);

  return (
    <motion.div 
      className="relative mb-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
        <MagnifyingGlassIcon className="w-5 h-5 text-neutral-400" />
      </div>
      <input
        type="text"
        className="w-full p-3.5 pl-12 text-base border border-neutral-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-neutral-800 dark:text-white shadow-inner placeholder-neutral-400"
        placeholder="Search menu items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute right-3 top-1/4 -translate-y-1/2 p-1.5 rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-600"
          onClick={() => setSearchTerm('')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>
      )}
    </motion.div>
  );
}; 