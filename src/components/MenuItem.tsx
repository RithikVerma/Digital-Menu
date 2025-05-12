import type { MenuItem as MenuItemType } from '../types';
import { motion } from 'framer-motion';

interface MenuItemProps {
  item: MenuItemType;
}

export const MenuItem = ({ item }: MenuItemProps) => {
  const { name, description, price, image, category } = item;

  return (
    <motion.div
      className="group flex flex-col h-full overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover bg-white dark:bg-neutral-800 transition-all duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative pb-[60%] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
        
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <span className="bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
            {category}
          </span>
        </div>
        
        <div className="absolute bottom-0 w-full p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="text-lg font-bold">{name}</div>
          <div className="text-sm opacity-90 line-clamp-2">{description}</div>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{name}</h3>
          <div className="px-3 py-1.5 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 font-bold rounded-full text-sm">
            ${price.toFixed(2)}
          </div>
        </div>
        <p className="text-neutral-600 dark:text-neutral-300 text-sm mt-2 line-clamp-3">
          {description}
        </p>
        <motion.button
          className="mt-4 px-4 py-2 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-medium text-sm w-full transition-colors"
          whileTap={{ scale: 0.97 }}
        >
          Order Now
        </motion.button>
      </div>
    </motion.div>
  );
}; 