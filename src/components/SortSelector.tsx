import type { FilterOptions } from '../types';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

interface SortSelectorProps {
  sortBy: FilterOptions['sortBy'];
  onSortChange: (sortBy: FilterOptions['sortBy']) => void;
}

export const SortSelector = ({ sortBy, onSortChange }: SortSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: 'name-asc', label: 'Name (A-Z)' },
    { value: 'name-desc', label: 'Name (Z-A)' },
    { value: 'price-asc', label: 'Price (Low to High)' },
    { value: 'price-desc', label: 'Price (High to Low)' },
  ];

  const currentOption = options.find(opt => opt.value === sortBy)?.label || 'Sort by';

  return (
    <div className="mb-6">
      <label className="block mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
        Sort by
      </label>
      <div className="relative">
        <motion.button
          className="flex justify-between items-center w-full px-4 py-3 text-left border border-neutral-200 dark:border-neutral-700 rounded-xl bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.98 }}
        >
          <span>{currentOption}</span>
          <ChevronDownIcon className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </motion.button>

        {isOpen && (
          <motion.div
            className="absolute z-10 mt-1 w-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-lg py-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {options.map((option) => (
              <motion.button
                key={option.value}
                className={`block w-full text-left px-4 py-2.5 hover:bg-neutral-100 dark:hover:bg-neutral-700 ${
                  sortBy === option.value 
                    ? 'bg-primary-50 dark:bg-neutral-700 text-primary-600 dark:text-primary-400 font-medium' 
                    : 'text-neutral-700 dark:text-neutral-300'
                }`}
                onClick={() => {
                  onSortChange(option.value as FilterOptions['sortBy']);
                  setIsOpen(false);
                }}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                {option.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}; 