import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaCode, FaServer, FaCloud } from 'react-icons/fa';

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
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 md:pt-16 lg:pt-0 relative">
      {/* Background Gradient Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${darkMode ? 'from-navy-dark via-primary to-navy-dark' : 'from-slate-100 via-white to-slate-100'} opacity-30`}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content - Bio */}
          <motion.div
            className="w-full lg:w-1/2 lg:pr-12 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div variants={container} initial="hidden" animate="show">
              <motion.div 
                variants={item}
                className={`inline-block px-4 py-1 mb-4 rounded-full text-sm font-medium ${
                  darkMode ? 'bg-indigo-900/30 text-indigo-300' : 'bg-indigo-100 text-indigo-700'
                }`}
              >
                Hello, I'm
              </motion.div>
              <motion.h1 
                variants={item} 
                className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-3"
              >
                <span className={darkMode ? 'text-indigo-400' : 'text-indigo-600'}>Sai Akash</span>{' '}
                <span className={darkMode ? 'text-white' : 'text-gray-800'}>Neela</span>
              </motion.h1>
              <motion.div
                variants={item}
                className={`h-1 w-32 mx-auto lg:mx-0 mb-6 ${darkMode ? 'bg-indigo-400' : 'bg-indigo-600'} rounded-full`}
              ></motion.div>
              <motion.h2 
                variants={item} 
                className={`text-xl sm:text-2xl md:text-2xl lg:text-3xl font-medium mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
              >
                DevOps & Cloud Infrastructure Engineer
              </motion.h2>
              <motion.p 
                variants={item} 
                className={`text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
              >
                I build scalable infrastructure and optimize web environments with expertise in DevOps automation, 
                cloud architecture, and security best practices. Based in the UK.
              </motion.p>

              <motion.div variants={item} className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a 
                  href="#contact" 
                  className="button button-primary flex items-center justify-center"
                >
                  Get In Touch
                </a>
                <a 
                  href="#projects" 
                  className="button button-secondary flex items-center justify-center"
                >
                  View My Work
                </a>
              </motion.div>

              <motion.div variants={item} className="flex mt-8 space-x-6 justify-center lg:justify-start">
                {socialIcons.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`text-lg flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full transition-all duration-300 ${
                      darkMode 
                        ? 'bg-gray-800/80 text-gray-300 hover:bg-indigo-600 hover:text-white' 
                        : 'bg-gray-100/80 text-gray-600 hover:bg-indigo-500 hover:text-white'
                    } hover:scale-110 hover:shadow-lg`}
                  >
                    {social.icon}
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Animation */}
          <motion.div
            className="w-full lg:w-1/2 mt-16 lg:mt-0 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 max-w-lg w-full">
              {[
                { 
                  icon: <FaCloud className="text-4xl sm:text-5xl mb-3 sm:mb-5" />, 
                  label: "Cloud Infrastructure", 
                  delay: 0.2,
                  description: "AWS, Azure, GCP infrastructure management and optimization"
                },
                { 
                  icon: <FaServer className="text-4xl sm:text-5xl mb-3 sm:mb-5" />, 
                  label: "DevOps", 
                  delay: 0.4,
                  description: "CI/CD pipelines, automation, and infrastructure as code"
                },
                { 
                  icon: <FaCode className="text-4xl sm:text-5xl mb-3 sm:mb-5" />, 
                  label: "Development", 
                  delay: 0.6,
                  description: "Full-stack web development with modern technologies"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: item.delay, duration: 0.5 }}
                  className={`${index === 2 ? "sm:col-span-2" : ""} p-4 sm:p-6 rounded-xl flex flex-col items-center text-center ${
                    darkMode 
                      ? 'bg-navy-light/90 text-gray-300 shadow-xl shadow-indigo-900/20 backdrop-blur-sm border border-gray-800' 
                      : 'bg-white/90 shadow-xl shadow-indigo-300/20 text-gray-700 backdrop-blur-sm border border-gray-100'
                  } hover:scale-105 transition-transform duration-300`}
                >
                  <div className={`${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{item.label}</h3>
                  <p className="text-xs sm:text-sm opacity-80">{item.description}</p>
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