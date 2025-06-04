import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const Loader = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-white dark:bg-dark-500">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <Terminal className="text-primary-500 dark:text-accent w-16 h-16 mb-4" />
        
        <div className="flex items-center space-x-2 mb-6">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 1.5,
              delay: 0
            }}
            className="w-3 h-3 rounded-full bg-primary-500 dark:bg-accent"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 1.5,
              delay: 0.2
            }}
            className="w-3 h-3 rounded-full bg-primary-500 dark:bg-accent"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 1.5,
              delay: 0.4
            }}
            className="w-3 h-3 rounded-full bg-primary-500 dark:bg-accent"
          />
        </div>
        
        <div className="font-mono text-dark-500 dark:text-gray-300 text-center">
          <div className="code-block w-72 sm:w-96 text-center">
            <span className="syntax-keyword">import</span> Portfolio <span className="syntax-keyword">from</span> <span className="syntax-string">'./mohit_life'</span>;
            <br />
            <br />
            <span className="syntax-comment">// Loading expertise...</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Loader;