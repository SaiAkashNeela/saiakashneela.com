import React from 'react';
import { motion } from 'framer-motion';

const AIIntroLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-foreground"
        >
          Sai Akash Neela
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl sm:text-2xl md:text-3xl text-muted-foreground"
        >
          DevOps & Cloud Infrastructure Engineer
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 h-1 bg-primary rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default AIIntroLoader;
