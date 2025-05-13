import { motion } from 'framer-motion';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { useLoading } from '../context/LoadingContext';

export const RefreshButton = () => {
  const { isLoading, showLoader, hideLoader } = useLoading();

  const handleRefresh = () => {
    if (isLoading) return; // Prevent multiple clicks during loading
    
    showLoader();
    setTimeout(() => {
      hideLoader();
    }, 1500);
  };

  return (
    <motion.button
      className="fixed right-6 bottom-6 px-4 py-3 rounded-xl bg-primary-500 text-white shadow-lg hover:bg-primary-600 transition-colors z-10 flex items-center space-x-2"
      onClick={handleRefresh}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title="Refresh Menu"
      disabled={isLoading}
    >
      <motion.span
        animate={isLoading ? { rotate: 360 } : { rotate: 0 }}
        transition={{ duration: 1, repeat: isLoading ? Infinity : 0, ease: "linear" }}
      >
        <ArrowPathIcon className="w-5 h-5" />
      </motion.span>
      <span className="font-medium">Refresh Menu</span>
    </motion.button>
  );
}; 