import React from 'react';
import { motion } from 'framer-motion';

const About = ({ darkMode }) => {
  return (
    <section id="about" className={`py-12 md:py-16 ${darkMode ? 'bg-navy' : 'bg-slate-50'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.3 }}
        >
          <h2 className={`text-2xl md:text-3xl font-bold mb-2 ${darkMode ? 'text-secondary' : 'text-secondary-light'}`}>About Me</h2>
          <h3 className={`text-3xl md:text-4xl font-bold mb-8 ${darkMode ? 'text-gray-200' : 'text-slate-800'}`}>Get to know me</h3>
        </motion.div>
        
        <div className="grid md:grid-cols-5 gap-8 md:gap-12">
          <motion.div 
            className="md:col-span-3"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3 }}
          >
            <div className={`prose prose-lg max-w-none ${darkMode ? 'prose-dark' : 'prose-light'}`}>
              <p className={`${darkMode ? 'text-gray-300' : 'text-slate-700'} text-sm sm:text-base leading-relaxed`}>
                Hello! I'm Sai Akash, a passionate DevOps Engineer with a strong background in frontend development. 
                My journey in technology began when I was introduced to programming in college, and since then, I've 
                been on an exciting path of continuous learning and growth.
              </p>
              <p className={`${darkMode ? 'text-gray-300' : 'text-slate-700'} text-sm sm:text-base leading-relaxed mt-3`}>
                With over 6 years of professional experience, I've had the opportunity to work with diverse technologies 
                and teams. My expertise lies in designing and implementing robust CI/CD pipelines, optimizing cloud infrastructure, 
                and developing responsive web applications.
              </p>
              <p className={`${darkMode ? 'text-gray-300' : 'text-slate-700'} text-sm sm:text-base leading-relaxed mt-3`}>
                I'm particularly passionate about combining DevOps practices with modern frontend development to create 
                scalable, high-performing applications. My goal is to build systems that not only work efficiently but 
                also provide exceptional user experiences.
              </p>
              <p className={`${darkMode ? 'text-gray-300' : 'text-slate-700'} text-sm sm:text-base leading-relaxed mt-3`}>
                When I'm not immersed in code or configuring servers, you can find me exploring new hiking trails, 
                experimenting with photography, or diving into a good book on technology trends.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3 }}
          >
            <div className={`${darkMode ? 'bg-navy-light' : 'bg-white'} p-4 sm:p-6 rounded-lg shadow-md ${darkMode ? 'shadow-slate-900/30' : 'shadow-slate-200/60'} hover-lift empty-section`}
              data-code={`// Personal Information
const personalInfo = {
  name: "Sai Akash Neela",
  location: "St Albans, United Kingdom",
  email: "hello@saiakashneela.com",
  education: "Master of Science in Computer Science",
  experience: "6+ Years",
  interests: [
    "Hiking",
    "Photography",
    "Technology Trends"
  ]
};`}
            >
              <h4 className={`text-lg sm:text-xl font-bold mb-3 sm:mb-4 ${darkMode ? 'text-gray-200' : 'text-slate-800'}`}>Personal Info</h4>
              <ul className="space-y-1 sm:space-y-2">
                <InfoItem 
                  label="Name" 
                  value="Sai Akash Neela" 
                  darkMode={darkMode} 
                />
                <InfoItem 
                  label="Location" 
                  value="St Albans, United Kingdom" 
                  darkMode={darkMode} 
                />
                <InfoItem 
                  label="Email" 
                  value="hello@saiakashneela.com" 
                  isEmail={true} 
                  darkMode={darkMode} 
                />
                <InfoItem 
                  label="Education" 
                  value="Master of Science in Computer Science" 
                  darkMode={darkMode} 
                />
                <InfoItem 
                  label="Experience" 
                  value="6+ Years" 
                  darkMode={darkMode} 
                />
              </ul>
              
              <div className="mt-8">
                <a 
                  href="https://s3.ap-south-2.amazonaws.com/saiakashneela.com/Sai-Akash-Neela.docx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`btn-primary ${darkMode ? '' : 'btn-primary-light'} px-6 py-3 rounded inline-flex items-center hover-lift`}
                >
                  <span>Download Resume</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const InfoItem = ({ label, value, isEmail = false, darkMode }) => (
  <li className="flex flex-col sm:flex-row sm:items-start">
    <span className={`font-medium sm:w-28 flex-shrink-0 text-sm sm:text-base ${darkMode ? 'text-gray-400' : 'text-slate-500'}`}>
      {label}:
    </span>
    {isEmail ? (
      <a 
        href={`mailto:${value}`} 
        className={`${darkMode ? 'text-secondary hover:text-secondary-dark' : 'text-secondary-light hover:text-secondary'} text-sm sm:text-base hover-glow mt-0.5 sm:mt-0`}
      >
        {value}
      </a>
    ) : (
      <span className={`${darkMode ? 'text-gray-300' : 'text-slate-700'} text-sm sm:text-base mt-0.5 sm:mt-0`}>
        {value}
      </span>
    )}
  </li>
);

export default About; 