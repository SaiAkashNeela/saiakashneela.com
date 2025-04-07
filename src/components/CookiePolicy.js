import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CookiePreferences from './CookiePreferences';

const CookiePolicy = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <section className={`min-h-screen py-16 ${darkMode ? 'bg-primary text-gray-300' : 'bg-primary-light text-slate-700'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-wrap items-center justify-between"
        >
          <div>
            <Link to="/" className={`inline-flex items-center ${darkMode ? 'text-secondary hover:text-secondary-dark' : 'text-secondary-light hover:text-secondary'} mb-6 hover-glow`}>
              <FaArrowLeft className="mr-2" />
              Back to Home
            </Link>
            
            <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-gray-100' : 'text-slate-900'}`}>Cookie Policy</h1>
            <p className="text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
          
          <div className="mt-4 md:mt-0">
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`prose max-w-none ${darkMode ? 'prose-invert' : ''}`}
        >
          <div className={`p-6 md:p-8 rounded-lg mb-6 ${darkMode ? 'bg-navy-light' : 'bg-white'} shadow-md`}>
            <h2 className={`text-xl md:text-2xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-slate-900'}`}>Introduction</h2>
            <p className="mb-4">
              This Cookie Policy explains how Sai Akash Neela ("I", "me", "my") uses cookies and similar technologies 
              on saiakashneela.com. This policy is designed to help you understand what cookies are, how I use them, 
              and the choices you have regarding their use.
            </p>
          </div>

          <div className={`p-6 md:p-8 rounded-lg mb-6 ${darkMode ? 'bg-navy-light' : 'bg-white'} shadow-md`}>
            <h2 className={`text-xl md:text-2xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-slate-900'}`}>What Are Cookies?</h2>
            <p className="mb-4">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit 
              certain websites. They are widely used to make websites work more efficiently and provide information to 
              the website owners. Cookies enhance user experience by remembering your preferences and settings.
            </p>
          </div>

          <div className={`p-6 md:p-8 rounded-lg mb-6 ${darkMode ? 'bg-navy-light' : 'bg-white'} shadow-md`}>
            <h2 className={`text-xl md:text-2xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-slate-900'}`}>Types of Cookies I Use</h2>
            <p className="mb-4">
              My website primarily uses the following types of cookies:
            </p>
            <div>
              <h3 className={`font-bold mt-4 mb-2 ${darkMode ? 'text-gray-200' : 'text-slate-800'}`}>Analytics Cookies</h3>
              <p className="mb-4">
                These cookies, provided by Google Analytics, help me understand how visitors interact with my website by 
                collecting and reporting information anonymously. This helps me improve my website and your experience.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2"><strong>_ga:</strong> Used to distinguish users. Expiration: 2 years</li>
                <li className="mb-2"><strong>_gid:</strong> Used to distinguish users. Expiration: 24 hours</li>
                <li><strong>_gat:</strong> Used to throttle request rate. Expiration: 1 minute</li>
              </ul>
            </div>
          </div>

          <div className={`p-6 md:p-8 rounded-lg mb-6 ${darkMode ? 'bg-navy-light' : 'bg-white'} shadow-md`}>
            <h2 className={`text-xl md:text-2xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-slate-900'}`}>Why I Use Cookies</h2>
            <p className="mb-4">
              I use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6">
              <li className="mb-2">To analyze the traffic to my website and how users interact with it</li>
              <li className="mb-2">To improve the performance and user experience of my website</li>
              <li className="mb-2">To remember your preferences and settings</li>
              <li>To collect anonymous statistical information about how visitors use my website</li>
            </ul>
          </div>

          <div className={`p-6 md:p-8 rounded-lg mb-6 ${darkMode ? 'bg-navy-light' : 'bg-white'} shadow-md`}>
            <h2 className={`text-xl md:text-2xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-slate-900'}`}>Your Cookie Choices</h2>
            <p className="mb-4">
              When you first visit my website, you will be presented with a cookie consent banner. You can choose to 
              accept or decline the use of cookies. If you choose to decline, analytical cookies will not be set,
              and your browsing activity on my site will not be tracked for analytics purposes.
            </p>
            <p>
              You can also control cookies through your browser settings. Most web browsers allow some control of most 
              cookies through the browser settings. To find out more about cookies, including how to see what cookies 
              have been set and how to manage and delete them, visit <a 
                href="https://www.allaboutcookies.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${darkMode ? 'text-secondary hover:text-secondary-dark' : 'text-secondary-light hover:text-secondary'} hover-glow`}
              >
                www.allaboutcookies.org
              </a>.
            </p>
          </div>

          <CookiePreferences darkMode={darkMode} />

          <div className={`p-6 md:p-8 rounded-lg mb-6 ${darkMode ? 'bg-navy-light' : 'bg-white'} shadow-md`}>
            <h2 className={`text-xl md:text-2xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-slate-900'}`}>Third-Party Cookies</h2>
            <p>
              My website uses Google Analytics, which sets cookies to help me understand how visitors interact with my 
              website. Google's privacy policy can be accessed at: <a 
                href="https://policies.google.com/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${darkMode ? 'text-secondary hover:text-secondary-dark' : 'text-secondary-light hover:text-secondary'} hover-glow`}
              >
                https://policies.google.com/privacy
              </a>.
            </p>
          </div>

          <div className={`p-6 md:p-8 rounded-lg mb-6 ${darkMode ? 'bg-navy-light' : 'bg-white'} shadow-md`}>
            <h2 className={`text-xl md:text-2xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-slate-900'}`}>Changes to This Cookie Policy</h2>
            <p>
              I may update this Cookie Policy from time to time to reflect changes in technology, regulation, or my business 
              practices. Any changes will be posted on this page, and if the changes are significant, I will provide a more 
              prominent notice.
            </p>
          </div>

          <div className={`p-6 md:p-8 rounded-lg ${darkMode ? 'bg-navy-light' : 'bg-white'} shadow-md`}>
            <h2 className={`text-xl md:text-2xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-slate-900'}`}>Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Cookie Policy or our data practices, please contact us at:
            </p>
            <p>
              <a href="mailto:hello@saiakashneela.com" className={`${darkMode ? 'text-secondary hover:text-secondary-dark' : 'text-secondary-light hover:text-secondary'} hover-glow`}>
                hello@saiakashneela.com
              </a>
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex justify-center"
        >
          <Link to="/" className={`flex items-center justify-center px-6 py-3 rounded-md ${
            darkMode 
              ? 'bg-secondary text-primary hover:bg-secondary-dark' 
              : 'bg-secondary-light text-white hover:bg-opacity-90'
          } transition-colors duration-300 hover-lift`}>
            <FaArrowLeft className="mr-2" />
            Return to Homepage
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CookiePolicy; 