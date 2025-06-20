import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Check if device is tablet
  useEffect(() => {
    const checkTablet = () => {
      const width = window.innerWidth;
      // Consider screens between 768px and 1024px as tablets
      setIsTablet(width >= 768 && width <= 1024);
    };
    
    // Initial check
    checkTablet();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkTablet);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkTablet);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link or when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  // Mobile menu slide-in animation variants
  const menuVariants = {
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.25
      }
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.25
      }
    }
  };

  // Backdrop variants
  const backdropVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  };

  return (
    <nav className={`navbar fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 shadow-md' : 'py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <a href="#home" className={`font-bold text-xl sm:text-2xl ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              <span className={darkMode ? 'text-indigo-400' : 'text-indigo-600'}>Sai Akash</span> Neela
            </a>
          </motion.div>

          {/* Desktop Menu - Hidden on small screens and tablets, visible only on large screens */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden lg:flex items-center space-x-6"
          >
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className={`text-base font-medium hover:text-indigo-500 transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://s3.ap-south-2.amazonaws.com/saiakashneela.com/Sai-Akash-Neela.docx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button button-primary"
            >
              Resume
            </a>
            
            {/* Dark Mode Toggle Button */}
            <button 
              onClick={toggleDarkMode} 
              className={`p-2 rounded-full transition-colors duration-300 ${
                darkMode 
                  ? 'bg-gray-800 text-yellow-300 hover:bg-gray-700' 
                  : 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200'
              }`}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <FaSun className="h-5 w-5" />
              ) : (
                <FaMoon className="h-5 w-5" />
              )}
            </button>
          </motion.div>

          {/* Mobile & Tablet Menu Toggle - Visible on small and medium screens */}
          <div className="lg:hidden flex items-center">
            {/* Dark Mode Toggle - Mobile & Tablet */}
            <button 
              onClick={toggleDarkMode} 
              className={`mr-3 p-2 rounded-full transition-colors duration-300 ${
                darkMode 
                  ? 'bg-gray-800 text-yellow-300 hover:bg-gray-700' 
                  : 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200'
              }`}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <FaSun className="h-4 w-4" />
              ) : (
                <FaMoon className="h-4 w-4" />
              )}
            </button>
            
            <button 
              onClick={toggleMenu} 
              className="menu-button focus:outline-none p-2 rounded-md transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Uses previous implementation */}
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
        className={`lg:hidden overflow-hidden ${darkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-sm`}
      >
        <div className="px-4 py-3 space-y-2">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className={`block py-2 text-center font-medium ${
                darkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-700 hover:text-indigo-600'
              }`}
              onClick={toggleMenu}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="https://s3.ap-south-2.amazonaws.com/saiakashneela.com/Sai-Akash-Neela.docx"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary w-full mt-3 text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: navLinks.length * 0.05 }}
          >
            Resume
          </motion.a>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar; 