import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CookiePreferences from './CookiePreferences';

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
            <Link to="/" className={`inline-flex items-center ${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'} mb-6`}>
              <FaArrowLeft className="mr-2" />
              Back to Home
            </Link>
            
            <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Privacy & Cookie Policy</h1>
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
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
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
          transition={{ duration: 0.5 }}
          className={`prose max-w-none ${darkMode ? 'prose-invert' : ''}`}
        >
          {/* Introduction */}
          <div className={`p-6 md:p-8 rounded-lg mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
            <h2 className={`text-xl md:text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Introduction</h2>
            <p className="mb-4">
              This Privacy & Cookie Policy describes how Sai Akash Neela's portfolio website ("we", "our", or "us") collects and processes your personal information and how we use cookies through this website.
            </p>
            <p>
              We respect your privacy and are committed to protecting your personal data. Please read this Privacy & Cookie Policy carefully to understand how we handle your information.
            </p>
          </div>

          {/* Privacy Policy Section */}
          <div className={`p-6 md:p-8 rounded-lg mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
            <h2 className={`text-xl md:text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Information We Collect</h2>
            <p className="mb-4">
              We collect the following information:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Contact Information:</strong> We collect your email address when you submit our contact form.</li>
              <li className="mb-2"><strong>Message Content:</strong> We collect the content of messages you send through our contact form.</li>
              <li className="mb-2"><strong>Analytics Data:</strong> We use Google Analytics to collect anonymous usage data such as page views, time spent on the site, and referring websites. This helps us understand how visitors interact with our website.</li>
              <li><strong>Cookies:</strong> Our website uses cookies to enhance your browsing experience and collect analytics data. You can control cookie settings through our Cookie Consent Banner or your browser settings.</li>
            </ul>
            <p>
              The analytics and cookie data are collected only with your consent, which you can provide or withdraw at any time through our Cookie Consent Banner.
            </p>
          </div>

          <div className={`p-6 md:p-8 rounded-lg mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
            <h2 className={`text-xl md:text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>How We Use Your Information</h2>
            <p className="mb-4">
              We use the information you provide solely for communication purposes:
            </p>
            <ul className="list-disc pl-6">
              <li className="mb-2">To respond to your inquiries or messages</li>
              <li className="mb-2">To communicate with you regarding your requests</li>
              <li className="mb-2">To provide you with information that you have requested</li>
              <li>To analyze and improve our website performance and user experience</li>
            </ul>
          </div>

          <div className={`p-6 md:p-8 rounded-lg mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
            <h2 className={`text-xl md:text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Data Sharing and Disclosure</h2>
            <p className="mb-4">
              We do not sell, trade, or otherwise transfer your personal information to outside parties.
            </p>
            <p>
              Your email and message content are used exclusively for direct communication between you and Sai Akash Neela.
            </p>
          </div>

          <div className={`p-6 md:p-8 rounded-lg mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
            <h2 className={`text-xl md:text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Data Retention</h2>
            <p>
              We retain your email address and message content only for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal requirements.
            </p>
          </div>

          <div className={`p-6 md:p-8 rounded-lg mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
            <h2 className={`text-xl md:text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Your Rights</h2>
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

          {/* Cookie Policy Section */}
          <div className={`p-6 md:p-8 rounded-lg mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
            <h2 className={`text-xl md:text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>What Are Cookies?</h2>
            <p className="mb-4">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit 
              certain websites. They are widely used to make websites work more efficiently and provide information to 
              the website owners. Cookies enhance user experience by remembering your preferences and settings.
            </p>
          </div>

          <div className={`p-6 md:p-8 rounded-lg mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
            <h2 className={`text-xl md:text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Types of Cookies We Use</h2>
            <p className="mb-4">
              Our website primarily uses the following types of cookies:
            </p>
            <div>
              <h3 className={`font-bold mt-4 mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Analytics Cookies</h3>
              <p className="mb-4">
                These cookies, provided by Google Analytics, help us understand how visitors interact with our website by 
                collecting and reporting information anonymously. This helps us improve our website and your experience.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2"><strong>_ga:</strong> Used to distinguish users. Expiration: 2 years</li>
                <li className="mb-2"><strong>_gid:</strong> Used to distinguish users. Expiration: 24 hours</li>
                <li><strong>_gat:</strong> Used to throttle request rate. Expiration: 1 minute</li>
              </ul>
            </div>
          </div>

          <div className={`p-6 md:p-8 rounded-lg mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
            <h2 className={`text-xl md:text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Why We Use Cookies</h2>
            <p className="mb-4">
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6">
              <li className="mb-2">To analyze the traffic to our website and how users interact with it</li>
              <li className="mb-2">To improve the performance and user experience of our website</li>
              <li className="mb-2">To remember your preferences and settings</li>
              <li>To collect anonymous statistical information about how visitors use our website</li>
            </ul>
          </div>

          <div className={`p-6 md:p-8 rounded-lg mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
            <h2 className={`text-xl md:text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Your Cookie Choices</h2>
            <p className="mb-4">
              When you first visit our website, you will be presented with a cookie consent banner. You can choose to 
              accept or decline the use of cookies. If you choose to decline, analytical cookies will not be set,
              and your browsing activity on our site will not be tracked for analytics purposes.
            </p>
            <p>
              You can also control cookies through your browser settings. Most web browsers allow some control of most 
              cookies through the browser settings. To find out more about cookies, including how to see what cookies 
              have been set and how to manage and delete them, visit <a 
                href="https://www.allaboutcookies.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'}`}
              >
                www.allaboutcookies.org
              </a>.
            </p>
          </div>

          <CookiePreferences darkMode={darkMode} />

          <div className={`p-6 md:p-8 rounded-lg mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
            <h2 className={`text-xl md:text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Third-Party Cookies</h2>
            <p>
              Our website uses Google Analytics, which sets cookies to help us understand how visitors interact with our 
              website. Google's privacy policy can be accessed at: <a 
                href="https://policies.google.com/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'}`}
              >
                https://policies.google.com/privacy
              </a>.
            </p>
          </div>

          {/* Contact Section */}
          <div className={`p-6 md:p-8 rounded-lg mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
            <h2 className={`text-xl md:text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our Privacy & Cookie Policy or our data practices, please contact us at:
            </p>
            <p>
              <a href="mailto:hello@saiakashneela.com" className={`${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'}`}>
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
          <Link to="/" className="button button-primary">
            <FaArrowLeft className="mr-2" />
            Return to Homepage
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy; 