import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaRegCopyright, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();
  
  const socialIcons = [
    { icon: <FaGithub />, url: 'https://github.com/SaiAkashNeela' },
    { icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/saiakashneela/' },
  ];

  // Footer links in the same order as in the main navigation
  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Publications', href: '#publications' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Freelance', href: '#freelance' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className={`py-8 ${darkMode ? 'bg-navy-dark' : 'bg-slate-800'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <a href="#home" className={`text-2xl font-bold ${darkMode ? 'text-secondary' : 'text-secondary-light'} hover-glow`}>
              Sai Akash Neela
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex space-x-6 mb-6"
          >
            {socialIcons.map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`text-xl hover-glow hover-lift flex items-center justify-center h-10 w-10 rounded-full ${
                  darkMode 
                    ? 'bg-navy text-gray-300 hover:text-secondary' 
                    : 'bg-slate-700 text-gray-200 hover:text-secondary-light'
                } transition-all duration-300`}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6 text-sm"
          >
            {footerLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className={`${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-300 hover:text-white'} hover-glow`}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center text-sm mb-4"
          >
            <FaRegCopyright className={`mr-1 ${darkMode ? 'text-gray-400' : 'text-gray-300'}`} />
            <span className={darkMode ? 'text-gray-400' : 'text-gray-300'}>
              {currentYear} Sai Akash Neela. All rights reserved.
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4 text-xs md:text-sm"
          >
            <Link to="/privacy-policy" className={`flex items-center ${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-300 hover:text-white'} hover-glow`}>
              <FaShieldAlt className="mr-2" />
              <span>Privacy & Cookie Policy</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 