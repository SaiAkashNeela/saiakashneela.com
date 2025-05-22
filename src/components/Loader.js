import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const fullName = "Sai Akash Neela";
  const nameParts = fullName.split(' ');
  
  useEffect(() => {
    // Disable scrolling during loader animation
    document.body.style.overflow = 'hidden';
    
    return () => {
      // Re-enable scrolling when component unmounts
      document.body.style.overflow = 'visible';
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.3
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const letterVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      rotateY: 90
    },
    visible: { 
      y: 0, 
      opacity: 1,
      rotateY: 0,
      transition: { 
        type: "spring", 
        damping: 10, 
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-primary z-50"
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-row items-center justify-center space-x-2 sm:space-x-4"
        >
          {nameParts.map((word, wordIndex) => (
            <motion.div key={wordIndex} variants={wordVariants} className="flex">
              {Array.from(word).map((letter, letterIndex) => (
                <motion.span
                  key={letterIndex}
                  variants={letterVariants}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-secondary inline-block transform"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          ))}
        </motion.div>
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-gray-400 mt-4 text-lg md:text-xl font-medium"
        >
          DevOps & Cloud/Web Infrastructure Engineer
        </motion.p>

        {/* Loading Message */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 1.2, 
            duration: 0.9,
            repeat: 0,
            repeatDelay: 5
          }}
          className="text-secondary mt-6 text-base md:text-lg italic"
        >
          Crafting your personalized experience...
        </motion.p>
        
        {/* Spinning loading indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0], 
            scale: [0.8, 1.2, 0.8],
            rotateZ: [0, 180, 360]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut" 
          }}
          className="mt-6 w-8 h-8 border-t-2 border-secondary rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default Loader; 