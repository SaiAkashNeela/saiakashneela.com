import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CookiePreferences = ({ darkMode }) => {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  
  useEffect(() => {
    // Load current preferences from localStorage when component mounts
    const consentStatus = localStorage.getItem('cookieConsent');
    setAnalyticsEnabled(consentStatus === 'accepted');
  }, []);

  const handleToggle = () => {
    const newStatus = !analyticsEnabled;
    setAnalyticsEnabled(newStatus);
    
    // Save preferences to localStorage
    localStorage.setItem('cookieConsent', newStatus ? 'accepted' : 'declined');
    
    // Update Google Analytics consent mode if available
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': newStatus ? 'granted' : 'denied'
      });
    }
  };

  const resetCookies = () => {
    // Decline all cookies
    localStorage.setItem('cookieConsent', 'declined');
    setAnalyticsEnabled(false);
    
    // Update Google Analytics consent mode if available
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
  };

  return (
    <div className={`p-6 md:p-8 rounded-lg mb-6 ${darkMode ? 'bg-navy-light' : 'bg-white'} shadow-md`}>
      <h2 className={`text-xl md:text-2xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-slate-900'}`}>
        Manage Cookie Preferences
      </h2>
      <p className="mb-4">
        You can update your cookie preferences at any time. Changes will take effect immediately.
      </p>
      
      <div className="flex items-center justify-between py-4 border-b border-gray-200">
        <div>
          <h3 className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-slate-800'}`}>Analytics Cookies</h3>
          <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Helps us understand how visitors interact with our website
          </p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            checked={analyticsEnabled}
            onChange={handleToggle}
            className="sr-only peer"
          />
          <div className={`w-11 h-6 rounded-full peer peer-focus:ring-2 peer-focus:ring-offset-2 ${
            darkMode 
              ? 'bg-gray-700 peer-checked:bg-secondary peer-focus:ring-secondary' 
              : 'bg-gray-300 peer-checked:bg-secondary-light peer-focus:ring-secondary-light'
          } peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
        </label>
      </div>
      
      <div className="mt-6">
        <button
          onClick={resetCookies}
          className={`text-sm px-4 py-2 rounded ${
            darkMode 
              ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' 
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          } transition-colors duration-200`}
        >
          Reset All Cookies
        </button>
      </div>
      
      <p className={`mt-6 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        Note: Essential cookies that are necessary for the website to function cannot be disabled.
      </p>
    </div>
  );
};

export default CookiePreferences; 