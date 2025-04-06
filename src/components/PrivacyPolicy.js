import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PrivacyPolicy = ({ darkMode, setDarkMode }) => {
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
            
            <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-gray-100' : 'text-slate-900'}`}>Privacy Policy</h1>
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
              This Privacy Policy describes how Sai Akash Neela's portfolio website ("we", "our", or "us") collects and processes your personal information through this website.
            </p>
            <p>
              We respect your privacy and are committed to protecting your personal data. Please read this Privacy Policy carefully to understand how we handle your information.
            </p>
          </div>

          <div className={`p-6 md:p-8 rounded-lg mb-6 ${darkMode ? 'bg-navy-light' : 'bg-white'} shadow-md`}>
            <h2 className={`text-xl md:text-2xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-slate-900'}`}>Information We Collect</h2>
            <p className="mb-4">
              We collect minimal personal information, and only when you voluntarily provide it to us through our contact form:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Email Address:</strong> We collect your email address when you submit our contact form.</li>
              <li><strong>Message Content:</strong> We collect the content of messages you send through our contact form.</li>
            </ul>
            <p>
              We do not collect any other personal information, such as your IP address, browser information, or tracking cookies.
            </p>
          </div>

          <div className={`p-6 md:p-8 rounded-lg mb-6 ${darkMode ? 'bg-navy-light' : 'bg-white'} shadow-md`}>
            <h2 className={`text-xl md:text-2xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-slate-900'}`}>How We Use Your Information</h2>
            <p className="mb-4">
              We use the information you provide solely for communication purposes:
            </p>
            <ul className="list-disc pl-6">
              <li className="mb-2">To respond to your inquiries or messages</li>
              <li className="mb-2">To communicate with you regarding your requests</li>
              <li>To provide you with information that you have requested</li>
            </ul>
          </div>

          <div className={`p-6 md:p-8 rounded-lg mb-6 ${darkMode ? 'bg-navy-light' : 'bg-white'} shadow-md`}>
            <h2 className={`text-xl md:text-2xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-slate-900'}`}>Data Sharing and Disclosure</h2>
            <p className="mb-4">
              We do not sell, trade, or otherwise transfer your personal information to outside parties.
            </p>
            <p>
              Your email and message content are used exclusively for direct communication between you and Sai Akash Neela.
            </p>
          </div>

          <div className={`p-6 md:p-8 rounded-lg mb-6 ${darkMode ? 'bg-navy-light' : 'bg-white'} shadow-md`}>
            <h2 className={`text-xl md:text-2xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-slate-900'}`}>Data Retention</h2>
            <p>
              We retain your email address and message content only for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal requirements.
            </p>
          </div>

          <div className={`p-6 md:p-8 rounded-lg mb-6 ${darkMode ? 'bg-navy-light' : 'bg-white'} shadow-md`}>
            <h2 className={`text-xl md:text-2xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-slate-900'}`}>Your Rights</h2>
            <p className="mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6">
              <li className="mb-2">Request access to your personal data</li>
              <li className="mb-2">Request correction of your personal data</li>
              <li className="mb-2">Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
            </ul>
          </div>

          <div className={`p-6 md:p-8 rounded-lg ${darkMode ? 'bg-navy-light' : 'bg-white'} shadow-md`}>
            <h2 className={`text-xl md:text-2xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-slate-900'}`}>Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
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

export default PrivacyPolicy; 