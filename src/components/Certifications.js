import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaExternalLinkAlt, FaSalesforce, FaAws, FaJava, FaRobot } from 'react-icons/fa';

const Certifications = ({ darkMode }) => {
  const certifications = [
    {
      title: "Salesforce Certified Administrator",
      provider: "Salesforce",
      date: "2020",
      icon: <FaSalesforce className={`w-5 h-5 md:w-6 md:h-6 ${darkMode ? 'text-secondary' : 'text-secondary-light'}`} />,
      link: "https://trailblazer.me/id/saiakash",
      description: "Validated expertise in setting up, configuring, and managing Salesforce applications."
    },
    {
      title: "AWS Solutions Architect Associate Level",
      provider: "SimpliLearn",
      date: "2020",
      icon: <FaAws className={`w-5 h-5 md:w-6 md:h-6 ${darkMode ? 'text-secondary' : 'text-secondary-light'}`} />,
      link: "https://certificates.simplicdn.net/share/1730283.pdf",
      description: "Demonstrated ability to design and deploy scalable, highly available, and fault-tolerant systems on AWS."
    },
    {
      title: "RPA Professional",
      provider: "Automation Anywhere",
      date: "2021",
      icon: <FaRobot className={`w-5 h-5 md:w-6 md:h-6 ${darkMode ? 'text-secondary' : 'text-secondary-light'}`} />,
      link: "https://certificates.automationanywhere.com/84bcc22a-87c2-4d46-a8ac-7a8f6e90d37a",
      description: "Proficiency in designing and implementing robotic process automation solutions."
    },
    {
      title: "Java",
      provider: "Wipro",
      date: "2020",
      icon: <FaJava className={`w-5 h-5 md:w-6 md:h-6 ${darkMode ? 'text-secondary' : 'text-secondary-light'}`} />,
      link: "https://1drv.ms/u/s!AuQU0shhPX8TnBfBYrnLygLGmNLb?e=jHZ7Ck",
      description: "Comprehensive training in Java programming fundamentals and advanced concepts."
    }
  ];

  return (
    <section id="certifications" className={`py-12 md:py-24 ${darkMode ? 'bg-primary' : 'bg-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 md:mb-10"
        >
          <h2 className={`text-xl md:text-3xl font-bold mb-1 md:mb-2 ${darkMode ? 'text-secondary' : 'text-secondary-light'}`}>Certifications</h2>
          <h3 className={`text-2xl md:text-4xl font-bold ${darkMode ? 'text-gray-200' : 'text-slate-800'}`}>Professional Courses</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-4 md:p-6 rounded-lg shadow-md ${darkMode ? 'bg-navy-light' : 'bg-slate-50'} hover-lift`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <h4 className={`text-lg md:text-xl font-bold ${darkMode ? 'text-gray-200' : 'text-slate-800'}`}>
                    {cert.title}
                  </h4>
                  <p className={`text-xs md:text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                    {cert.provider} • {cert.date}
                  </p>
                  <p className={`text-sm mt-2 ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>
                    {cert.description}
                  </p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1 text-xs md:text-sm mt-3 ${
                      darkMode 
                        ? 'text-secondary hover:text-secondary-dark' 
                        : 'text-secondary-light hover:text-secondary'
                    } hover-glow`}
                  >
                    <FaExternalLinkAlt className="w-3 h-3 md:w-4 md:h-4" />
                    <span>View Certificate</span>
                  </a>
                </div>
                <div className="flex-shrink-0">
                  <FaAward className={`w-5 h-5 md:w-6 md:h-6 ${darkMode ? 'text-secondary opacity-60' : 'text-secondary-light opacity-60'}`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`mt-6 md:mt-8 p-3 md:p-4 rounded-lg text-center ${darkMode ? 'bg-navy-light' : 'bg-slate-50'} shadow-md`}
        >
          <p className={`text-xs md:text-sm ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>
            Continuously enhancing skills through professional certifications and courses.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications; 