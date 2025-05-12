import { QrCodeIcon } from '@heroicons/react/24/outline';
import { ThemeToggle } from './ThemeToggle';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Header = () => {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-40 backdrop-blur-md bg-white/90 dark:bg-neutral-900/90 shadow-soft"
    >
      <div className="container mx-auto px-4 py-3.5 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
          </motion.svg>
          <span className="text-xl font-display font-bold tracking-tight">Digital Café</span>
        </Link>
        
        <div className="flex items-center space-x-5">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/qrcode" 
              className="flex items-center space-x-1.5 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
            >
              <QrCodeIcon className="w-5 h-5" />
              <span className="hidden sm:inline">QR Code</span>
            </Link>
          </motion.div>
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}; 