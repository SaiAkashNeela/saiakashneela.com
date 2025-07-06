import React, { useState, useEffect } from 'react';
import { FaCookieBite } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const CookieConsentButton = ({ darkMode }) => {
  const [showMessage, setShowMessage] = useState(false);
  
  // Check for initial consent when component mounts
  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      // Show consent popup after a delay
      const timer = setTimeout(() => {
        setShowMessage(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleClick = () => {
    setShowMessage(!showMessage);
  };
  
  const acceptCookies = () => {
    // Store consent in localStorage
    localStorage.setItem('cookieConsent', 'true');
    
    // Update gtag consent if available
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
    
    setShowMessage(false);
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
    setShowMessage(false);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="fixed bottom-4 left-4 z-50 p-3 rounded-full shadow-lg transition-transform hover:scale-110 focus:outline-none bg-background text-foreground border border-border"
        aria-label="Manage Cookie Preferences"
        title="Manage Cookie Preferences"
      >
        <FaCookieBite size={20} />
      </button>
      
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 20, x: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-16 left-4 z-50 p-4 rounded-lg shadow-xl max-w-xs sm:max-w-sm bg-background text-foreground border border-border"
          >
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-primary">
                Cookie Consent
              </h3>
              <p className="text-sm text-muted-foreground">
                This website uses cookies from Google Analytics to analyze traffic and improve your experience.
                Learn more in our <Link 
                  to="/privacy-policy" 
                  className="text-primary hover:underline"
                  onClick={() => setShowMessage(false)}
                >
                  Privacy & Cookie Policy
                </Link>.
              </p>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={declineCookies}
                  className="px-3 py-1.5 text-xs font-medium rounded bg-secondary text-secondary-foreground hover:bg-secondary/80"
                >
                  Decline
                </button>
                <button
                  onClick={acceptCookies}
                  className="px-3 py-1.5 text-xs font-medium rounded bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Accept
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CookieConsentButton;
