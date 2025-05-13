import { motion } from 'framer-motion';

export const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md z-50">
      <motion.div 
        className="flex flex-col items-center bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="relative w-20 h-20 mb-6">
          {/* Coffee cup animation */}
          <motion.div 
            className="absolute w-16 h-16 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
            initial={{ rotateZ: 0 }}
            animate={{ rotateZ: 360 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="w-12 h-12 mx-auto bg-primary-500 dark:bg-primary-600 rounded-full mb-2" />
            <div className="w-16 h-8 mx-auto border-4 border-primary-500 dark:border-primary-600 rounded-b-full" />
          </motion.div>
          
          {/* Steam animation */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-4 bg-primary-300 dark:bg-primary-400 rounded-full"
                initial={{ opacity: 0.4, y: 0 }}
                animate={{ 
                  opacity: [0.4, 1, 0.4], 
                  y: [-2, -8, -2] 
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>
        
        <motion.h3 
          className="text-lg font-bold text-neutral-800 dark:text-white mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Brewing your menu...
        </motion.h3>
        
        <motion.div
          className="w-48 h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div 
            className="h-full bg-primary-500 dark:bg-primary-400 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: ['0%', '40%', '60%', '100%'] }}
            transition={{ 
              duration: 2.5,
              times: [0, 0.4, 0.7, 1],
              repeat: Infinity
            }}
          />
        </motion.div>
        
        <motion.p 
          className="text-sm text-neutral-500 dark:text-neutral-400 mt-4 italic"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          Preparing a delightful experience...
        </motion.p>
      </motion.div>
    </div>
  );
}; 