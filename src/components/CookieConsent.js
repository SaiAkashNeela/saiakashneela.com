import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = ({ darkMode }) => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    // Store consent in localStorage
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  const declineCookies = () => {
    // If user declines cookies, we should disable analytics
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
    
    // Store preference
    localStorage.setItem('cookieConsent', 'false');
    setShowConsent(false);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 ${darkMode ? 'bg-navy-light' : 'bg-white'} shadow-lg`}
        >
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className={`text-sm md:text-base ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>
                <p>
                  This website uses cookies from Google Analytics to analyze traffic and improve your experience. 
                  These cookies collect information about how you use our site.
                  <a 
                    href="/cookie-policy" 
                    className={`ml-1 underline ${darkMode ? 'text-secondary' : 'text-secondary-light'}`}
                  >
                    Learn more
                  </a>
                </p>
              </div>
              <div className="flex gap-3 mt-3 md:mt-0">
                <button 
                  onClick={declineCookies} 
                  className={`px-4 py-2 text-sm font-medium rounded ${
                    darkMode 
                      ? 'bg-navy text-gray-300 hover:bg-navy-dark' 
                      : 'bg-gray-200 text-slate-700 hover:bg-gray-300'
                  } hover-lift`}
                >
                  Decline
                </button>
                <button 
                  onClick={acceptCookies}
                  className={`px-4 py-2 text-sm font-medium rounded ${
                    darkMode 
                      ? 'bg-secondary text-primary hover:bg-secondary-dark' 
                      : 'bg-secondary-light text-white hover:bg-secondary'
                  } hover-lift`}
                >
                  Accept Cookies
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent; 