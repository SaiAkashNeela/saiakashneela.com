import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

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
    <section id="home" className={`min-h-[90vh] flex items-center ${darkMode ? 'bg-primary' : 'bg-primary-light'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center pt-12 md:pt-0">
        <motion.div
          className="w-full md:w-3/5 lg:w-1/2 md:pr-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.p 
              variants={item}
              className={`text-lg sm:text-xl mb-3 mt-8 sm:mt-0 font-medium ${darkMode ? 'text-secondary' : 'text-secondary-light'} section-header`}
              data-code={`// Welcome message
console.log("Hello, I'm Sai Akash Neela");
console.log("DevOps & Cloud Engineer");`}
            >
              Hello, my name is
            </motion.p>
            <motion.h1 
              variants={item} 
              className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-3 ${darkMode ? 'text-gray-100' : 'text-slate-900'} section-header`}
              data-code={`const name = "Sai Akash Neela";
const role = "DevOps & Cloud Engineer";
const location = "St Albans, UK";`}
            >
              Sai Akash Neela.
            </motion.h1>
            <motion.h2 
              variants={item} 
              className={`text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 ${darkMode ? 'text-gray-400' : 'text-slate-600'} opacity-100 section-header`}
              data-code={`const skills = {
  devops: ["AWS", "Docker", "Kubernetes"],
  cloud: ["AWS", "Azure", "GCP"],
  web: ["WordPress", "DNS", "Hosting"]
};`}
            >
              DevOps & Cloud/Web Infrastructure Engineer
            </motion.h2>
            <motion.p 
              variants={item} 
              className={`text-base sm:text-lg max-w-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-slate-700'} section-header`}
              data-code={`// About me
const about = {
  passion: "Building scalable infrastructure",
  expertise: ["DevOps automation", "WordPress", "DNS management"],
  location: "St Albans, United Kingdom"
};`}
            >
              Passionate about building scalable infrastructure and optimizing web hosting environments.
              I specialize in DevOps automation, WordPress development, and DNS/domain management.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className={`btn-primary ${darkMode ? '' : 'btn-primary-light'} px-6 py-3 rounded hover-lift`}
              >
                Get In Touch
              </a>
              <a 
                href="#projects" 
                className={`btn-secondary ${darkMode ? '' : 'btn-secondary-light'} px-6 py-3 rounded hover-lift`}
              >
                See My Work
              </a>
            </motion.div>

            <motion.div variants={item} className="flex mt-8 space-x-5">
              {socialIcons.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`text-xl hover-glow hover-lift flex items-center justify-center h-10 w-10 rounded-full ${
                    darkMode 
                      ? 'bg-navy-light text-gray-300 hover:text-secondary' 
                      : 'bg-slate-100 text-slate-700 hover:text-secondary-light'
                  } transition-all duration-300`}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full md:w-2/5 lg:w-1/2 mt-12 md:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className={`relative ${darkMode ? 'glow-card' : 'glow-card-light'} rounded-lg p-1 max-w-md mx-auto`}>
            <div className="animate-float">
              <img 
                src="https://s3.ap-south-2.amazonaws.com/saiakashneela.com/profile.png" 
                alt="Sai Akash Neela" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 