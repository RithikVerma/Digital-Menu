import type { MenuItem as MenuItemType } from '../types';
import { MenuItem } from './MenuItem';
import { useLoading } from '../context/LoadingContext';
import { motion } from 'framer-motion';

interface MenuGridProps {
  items: MenuItemType[];
}

// Skeleton loader for menu items
const MenuItemSkeleton = () => {
  return (
    <motion.div 
      className="h-full rounded-2xl bg-white dark:bg-neutral-800 shadow-card overflow-hidden"
      initial={{ opacity: 0.6 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
    >
      <div className="relative pb-[60%] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 dark:from-neutral-700 dark:via-neutral-600 dark:to-neutral-700">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div className="h-6 w-32 bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 dark:from-neutral-700 dark:via-neutral-600 dark:to-neutral-700 rounded-md" />
          <div className="h-8 w-16 bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 dark:from-neutral-700 dark:via-neutral-600 dark:to-neutral-700 rounded-full" />
        </div>
        
        <div className="space-y-2">
          <div className="h-4 w-full bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 dark:from-neutral-700 dark:via-neutral-600 dark:to-neutral-700 rounded-md" />
          <div className="h-4 w-3/4 bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 dark:from-neutral-700 dark:via-neutral-600 dark:to-neutral-700 rounded-md" />
        </div>
        
        <div className="h-10 w-full bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 dark:from-neutral-700 dark:via-neutral-600 dark:to-neutral-700 rounded-xl mt-6" />
      </div>
    </motion.div>
  );
};

export const MenuGrid = ({ items }: MenuGridProps) => {
  const { isLoading } = useLoading();

  const skeletonCount = 8; // Number of skeleton items to show while loading

  return (
    <div className="mt-6">
      {items.length === 0 && !isLoading ? (
        <motion.div 
          className="bg-white dark:bg-neutral-800 p-8 rounded-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-2">No items found</h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            Try adjusting your filters or search term
          </p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {isLoading ? (
            // Display skeleton loaders when loading
            Array.from({ length: skeletonCount }).map((_, index) => (
              <MenuItemSkeleton key={`skeleton-${index}`} />
            ))
          ) : (
            // Display actual menu items when not loading
            items.map((item) => <MenuItem key={item.id} item={item} />)
          )}
        </div>
      )}
    </div>
  );
}; 