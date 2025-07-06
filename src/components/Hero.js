import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Button } from './ui/button';

const Hero = () => {
  const socialIcons = [
    { icon: <FaGithub />, url: 'https://github.com/SaiAkashNeela' },
    { icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/saiakashneela/' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Sai Akash Neela
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-8">
            DevOps & Cloud Infrastructure Engineer
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <Button asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="secondary" asChild>
              <a href="#projects">View My Work</a>
            </Button>
          </div>
          <div className="flex justify-center space-x-6">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
