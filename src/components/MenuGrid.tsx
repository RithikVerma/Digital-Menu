import type { MenuItem as MenuItemType } from '../types';
import { MenuItem } from './MenuItem';
import { motion } from 'framer-motion';

interface MenuGridProps {
  items: MenuItemType[];
}

export const MenuGrid = ({ items }: MenuGridProps) => {
  // Animation variants for the grid items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  if (items.length === 0) {
    return (
      <motion.div 
        className="min-h-[50vh] flex flex-col items-center justify-center text-center py-12 px-4 bg-white dark:bg-neutral-800 rounded-2xl shadow-soft"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-20 h-20 mb-6 text-neutral-300 dark:text-neutral-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
          No menu items found
        </h3>
        <p className="text-neutral-500 dark:text-neutral-400 mt-2 max-w-md">
          Try adjusting your filters or search term to find what you're looking for
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {items.map((item) => (
        <motion.div key={item.id} variants={itemVariants}>
          <MenuItem item={item} />
        </motion.div>
      ))}
    </motion.div>
  );
}; 