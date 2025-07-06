import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

const Navbar = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <nav className={`navbar fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 shadow-md' : 'py-4'} bg-background/80 backdrop-blur-sm`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center flex-grow"
          >
            <a href="#home" className="font-bold text-xl sm:text-2xl text-gray-800 dark:text-white">
              <span className="text-indigo-600 dark:text-indigo-400">Sai Akash</span> Neela
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    <a href={link.href}>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {link.name}
                      </NavigationMenuLink>
                    </a>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Button asChild>
              <a href="https://s3.ap-south-2.amazonaws.com/saiakashneela.com/Sai-Akash-Neela.docx" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleDarkMode} aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}>
              <FaSun className="h-5 w-5 hidden dark:block" />
              <FaMoon className="h-5 w-5 block dark:hidden" />
            </Button>
          </div>


          {/* Mobile & Tablet Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleDarkMode} aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}>
              <FaSun className="h-5 w-5 hidden dark:block" />
              <FaMoon className="h-5 w-5 block dark:hidden" />
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Toggle menu">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="px-4 py-3 space-y-2">
                  {navLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="block py-2 text-center font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
                    >
                      {link.name}
                    </a>
                  ))}
                  <Button asChild className="w-full mt-3">
                    <a href="https://s3.ap-south-2.amazonaws.com/saiakashneela.com/Sai-Akash-Neela.docx" target="_blank" rel="noopener noreferrer">
                      Resume
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
