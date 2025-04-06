import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PrivacyPolicy = ({ darkMode }) => {
  return (
    <section className={`min-h-screen py-16 ${darkMode ? 'bg-primary text-gray-300' : 'bg-primary-light text-slate-700'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link to="/" className={`inline-flex items-center ${darkMode ? 'text-secondary hover:text-secondary-dark' : 'text-secondary-light hover:text-secondary'} mb-6 hover-glow`}>
            <FaArrowLeft className="mr-2" />
            Back to Home
          </Link>
          
          <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-gray-100' : 'text-slate-900'}`}>Privacy Policy</h1>
          <p className="text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
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
      </div>
    </section>
  );
};

export default PrivacyPolicy; 