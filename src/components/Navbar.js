import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHome, FiUser, FiBriefcase, FiSettings, FiCode, FiBook, FiMail, FiDownload, FiMenu, FiX } from 'react-icons/fi';
import { Button } from "./ui/button";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {

  const navLinks = [
    { name: 'Home', href: '#home', icon: <FiHome /> },
    { name: 'About', href: '#about', icon: <FiUser /> },
    { name: 'Experience', href: '#experience', icon: <FiBriefcase /> },
    { name: 'Skills', href: '#skills', icon: <FiSettings /> },
    { name: 'Projects', href: '#projects', icon: <FiCode /> },
    { name: 'Education', href: '#education', icon: <FiBook /> },
    { name: 'Contact', href: '#contact', icon: <FiMail /> },
  ];

  const variants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsSidebarOpen(true)}
        className={`fixed top-4 left-4 z-50 transition-all duration-300 ${isSidebarOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'} bg-gray-800/50 text-white hover:bg-gray-700/70 p-2 rounded-full`}
        aria-label="Open menu"
      >
        <FiMenu size={24} />
      </Button>
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.nav
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-64 bg-background/80 backdrop-blur-sm shadow-lg z-40 flex flex-col"
          >
            <div className="flex flex-col items-center p-6 border-b border-border">
              <a href="#home" className="font-bold text-2xl text-gray-800 dark:text-white text-center">
                <span className="shine">Sai Akash <span className="text-indigo-600 dark:text-indigo-400">Neela</span></span>
              </a>
            </div>

            <div className="flex-grow p-4">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="flex items-center p-3 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors duration-200"
                    >
                      <span className="mr-4 text-xl">{link.icon}</span>
                      <span className="font-medium">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 border-t border-border space-y-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSidebarOpen(false)}
                aria-label="Close menu"
                className="w-full"
              >
                <FiX />
              </Button>
              <Button asChild className="w-full">
                <a href="https://mega.nz/file/ajZ1GJxS#apHCGc0hxs9jR2i86jRqvx6uX45ga4UggEmpZDx_1Zo" target="_blank" rel="noopener noreferrer">
                  <FiDownload className="mr-2 h-4 w-4" /> Resume
                </a>
              </Button>
            </div>
    </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
