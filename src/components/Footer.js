import React from 'react';
import { FaGithub, FaLinkedinIn, FaRegCopyright, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { icon: <FaGithub />, url: 'https://github.com/SaiAkashNeela' },
    { icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/saiakashneela/' },
  ];

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="py-8 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center text-secondary-foreground">
          <h3 className="text-2xl font-bold mb-4">Sai Akash Neela</h3>
          <div className="flex space-x-4 mb-4">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon">
                  {social.icon}
                </Button>
              </a>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {footerLinks.map((link) => (
              <a key={link.name} href={link.href}>
                <Button variant="link" className="text-secondary-foreground">
                  {link.name}
                </Button>
              </a>
            ))}
          </div>
          <div className="flex items-center text-sm mb-2">
            <FaRegCopyright className="mr-1" />
            <span>{currentYear} Sai Akash Neela. All rights reserved.</span>
          </div>
          <Link to="/privacy-policy">
            <Button variant="link" className="text-secondary-foreground text-xs">
              <FaShieldAlt className="mr-1" />
              Privacy & Cookie Policy
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
