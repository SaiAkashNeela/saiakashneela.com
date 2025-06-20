import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaLaptopCode } from 'react-icons/fa';

const Education = ({ darkMode }) => {
  const educationData = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Hertfordshire",
      description: "Specialized in advanced computer science concepts with focus on cloud computing, machine learning, and software engineering principles."
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "KL University",
      description: "Specialized in Cloud Computing with coursework in distributed systems, virtualization technologies, and cloud infrastructure management."
    },
    {
      degree: "Self-Taught Skills",
      institution: "Continuous Learning",
      description: "Continuously expanding knowledge through self-study, online courses, and practical application of new technologies in cloud engineering, DevOps practices, and modern web development."
    }
  ];

  return (
    <section id="education" className={`py-12 md:py-20 lg:py-24 ${darkMode ? 'bg-navy' : 'bg-slate-50'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-2xl md:text-3xl font-bold mb-2 ${darkMode ? 'text-secondary' : 'text-secondary-light'}`}>Education</h2>
          <h3 className={`text-3xl md:text-4xl font-bold mb-8 md:mb-10 ${darkMode ? 'text-gray-200' : 'text-slate-800'}`}>Academic Background</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 lg:gap-6">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`p-4 sm:p-6 rounded-lg shadow-md ${darkMode ? 'bg-navy-light' : 'bg-white'} hover-lift h-full`}
            >
              <div className="flex items-start h-full flex-col">
                <div className={`p-2 rounded-lg ${darkMode ? 'bg-primary' : 'bg-slate-100'} mb-4`}>
                  {index === 0 ? 
                    <FaGraduationCap className={`text-xl ${darkMode ? 'text-secondary' : 'text-secondary-light'}`} /> :
                    index === 1 ?
                    <FaUniversity className={`text-xl ${darkMode ? 'text-secondary' : 'text-secondary-light'}`} /> :
                    <FaLaptopCode className={`text-xl ${darkMode ? 'text-secondary' : 'text-secondary-light'}`} />
                  }
                </div>
                <div className="flex-1">
                  <h4 className={`text-lg sm:text-xl font-bold mb-1 ${darkMode ? 'text-gray-200' : 'text-slate-800'}`}>
                    {item.degree}
                  </h4>
                  <p className={`text-base sm:text-lg font-medium mb-3 ${darkMode ? 'text-indigo-300' : 'text-indigo-700'}`}>
                    {item.institution}
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-slate-600'}`}>
                    {item.description}
                  </p>
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
          className={`mt-8 sm:mt-10 p-4 sm:p-6 rounded-lg shadow-md ${darkMode ? 'bg-navy-light' : 'bg-white'}`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className={`p-4 rounded-md ${darkMode ? 'bg-primary' : 'bg-slate-100'}`}>
              <h5 className={`font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-slate-800'}`}>
                Cloud & Infrastructure
              </h5>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-slate-600'}`}>
                Self-taught expertise in AWS, Azure, GCP, Kubernetes, Docker, Terraform, and cloud-native architectures through hands-on projects and continuous learning.
              </p>
            </div>
            <div className={`p-4 rounded-md ${darkMode ? 'bg-primary' : 'bg-slate-100'}`}>
              <h5 className={`font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-slate-800'}`}>
                Development & DevOps
              </h5>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-slate-600'}`}>
                Self-acquired knowledge in CI/CD pipelines, automation, containerization, microservices architecture, and modern web development frameworks.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 