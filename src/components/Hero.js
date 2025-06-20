import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaTwitter, FaCode, FaServer, FaCloud } from 'react-icons/fa';

const Hero = ({ darkMode }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const socialIcons = [
    { icon: <FaGithub />, url: 'https://github.com/SaiAkashNeela' },
    { icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/saiakashneela/' },
    { icon: <FaTwitter />, url: '#' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 md:pt-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content - Bio */}
          <motion.div
            className="w-full lg:w-1/2 lg:pr-12 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div variants={container} initial="hidden" animate="show">
              <motion.p 
                variants={item}
                className={`text-lg mb-3 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'} font-medium`}
              >
                Hello, I'm
              </motion.p>
              <motion.h1 
                variants={item} 
                className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}
              >
                Sai Akash Neela
              </motion.h1>
              <motion.h2 
                variants={item} 
                className={`text-2xl sm:text-3xl font-medium mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
              >
                DevOps & Cloud Infrastructure Engineer
              </motion.h2>
              <motion.p 
                variants={item} 
                className={`text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
              >
                I build scalable infrastructure and optimize web environments with expertise in DevOps automation, 
                cloud architecture, and security best practices. Based in St Albans, UK.
              </motion.p>

              <motion.div variants={item} className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a 
                  href="#contact" 
                  className="button button-primary"
                >
                  Get In Touch
                </a>
                <a 
                  href="#projects" 
                  className="button button-secondary"
                >
                  View My Work
                </a>
              </motion.div>

              <motion.div variants={item} className="flex mt-8 space-x-4 justify-center lg:justify-start">
                {socialIcons.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`text-lg flex items-center justify-center h-10 w-10 rounded-full transition-all duration-300 ${
                      darkMode 
                        ? 'bg-gray-800 text-gray-300 hover:bg-indigo-600 hover:text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-indigo-500 hover:text-white'
                    }`}
                  >
                    {social.icon}
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Animation */}
          <motion.div
            className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative grid grid-cols-2 gap-4 max-w-lg w-full">
              {[
                { icon: <FaCloud />, label: "Cloud", delay: 0.1 },
                { icon: <FaServer />, label: "DevOps", delay: 0.3 },
                { icon: <FaCode />, label: "Development", delay: 0.5 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: item.delay, duration: 0.5 }}
                  className={`${index === 2 ? "col-span-2" : ""} p-6 rounded-xl flex flex-col items-center ${
                    darkMode 
                      ? 'bg-navy-light bg-opacity-80 text-gray-300' 
                      : 'bg-white bg-opacity-80 shadow-lg text-gray-700'
                  }`}
                >
                  <div className={`text-3xl mb-3 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-medium">{item.label}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 