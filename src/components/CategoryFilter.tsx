import type { Category } from '../types';
import { motion } from 'framer-motion';

interface CategoryFilterProps {
  activeCategory: Category;
  onSelectCategory: (category: Category) => void;
}

export const CategoryFilter = ({ activeCategory, onSelectCategory }: CategoryFilterProps) => {
  const categories: Category[] = ['All', 'Coffee', 'Tea', 'Desserts', 'Sandwiches'];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="mb-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <h2 className="text-xl font-display font-bold text-neutral-900 dark:text-white mb-4">
        Categories
      </h2>
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
              activeCategory === category
                ? 'bg-primary-500 text-white shadow-md scale-105'
                : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-primary-50 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700'
            }`}
            variants={item}
            whileHover={{ scale: activeCategory === category ? 1.05 : 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {category}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}; 