import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaExclamationTriangle } from 'react-icons/fa';

const NotFound = ({ darkMode, setDarkMode }) => {
  const [randomMessages] = useState([
    "Hmm, this page seems to have vanished into the cloud.",
    "Looks like this page is still in development.",
    "This page must be hiding in another container.",
    "404: Page not in the deployment pipeline.",
    "This route hasn't been configured yet."
  ]);
  
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Select a random message
    const randomIndex = Math.floor(Math.random() * randomMessages.length);
    setMessage(randomMessages[randomIndex]);
  }, [randomMessages]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-primary text-gray-300' : 'bg-background text-foreground'}`}>
      <div className="container mx-auto px-4 flex-grow flex flex-col items-center justify-center py-16">
        <div className="absolute top-6 right-6">
          <button 
            onClick={toggleDarkMode} 
            className="focus:outline-none"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            <div className="toggle-track">
              <motion.div 
                className="toggle-thumb"
                initial={false}
                animate={{ x: darkMode ? 0 : 24 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                {darkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                )}
              </motion.div>
            </div>
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-center max-w-lg mx-auto ${darkMode ? 'bg-navy-light' : 'bg-white'} p-8 rounded-lg shadow-lg`}
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: [0, 10, 0] }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              duration: 1 
            }}
            className="flex justify-center mb-6"
          >
            <FaExclamationTriangle className={`text-6xl ${darkMode ? 'text-secondary' : 'text-secondary'}`} />
          </motion.div>
          
          <motion.h1 
            className={`text-5xl md:text-7xl font-bold mb-6 ${darkMode ? 'text-gray-100' : 'text-slate-800'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            404
          </motion.h1>
          
          <motion.h2 
            className={`text-xl md:text-2xl font-bold mb-4 ${darkMode ? 'text-gray-200' : 'text-slate-700'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Page Not Found
          </motion.h2>
          
          <motion.p
            className={`mb-8 ${darkMode ? 'text-gray-300' : 'text-slate-600'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {message}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link 
              to="/" 
              className={`flex items-center justify-center mx-auto px-6 py-3 rounded-md ${
                darkMode 
                  ? 'bg-secondary text-primary hover:bg-secondary-dark' 
                  : 'bg-secondary-light text-white hover:bg-opacity-90'
              } transition-colors duration-300 hover-lift w-48`}
            >
              <FaArrowLeft className="mr-2" />
              Return Home
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className={`mt-8 text-sm ${darkMode ? 'text-gray-500' : 'text-slate-500'}`}
        >
          © {new Date().getFullYear()} Sai Akash Neela. All rights reserved.
        </motion.p>
      </div>
    </div>
  );
};

export default NotFound;
