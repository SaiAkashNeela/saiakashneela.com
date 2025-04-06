import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaWordpress, FaDesktop, FaMobileAlt, FaPalette, FaChartLine } from 'react-icons/fa';

const Freelance = ({ darkMode }) => {
  const services = [
    {
      icon: <FaDesktop />,
      title: "Website Pro",
      description: "Building professional responsive websites optimized for search engines."
    },
    {
      icon: <FaWordpress />,
      title: "WordPress Development",
      description: "Creating custom WordPress themes and plugins for flexibility and control."
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Apps",
      description: "Developing revolutionary mobile applications with the latest technologies."
    },
    {
      icon: <FaCode />,
      title: "Web Applications",
      description: "Building secure, scalable web applications for various business needs."
    },
    {
      icon: <FaChartLine />,
      title: "Digital Marketing",
      description: "Promoting brands through strategic digital marketing campaigns."
    },
    {
      icon: <FaPalette />,
      title: "Brand Creation",
      description: "Designing targeted brands using modern design techniques."
    }
  ];

  return (
    <section id="freelance" className={`py-12 md:py-24 ${darkMode ? 'bg-navy' : 'bg-slate-50'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 md:mb-10 text-center md:text-left"
        >
          <h2 className={`text-xl md:text-3xl font-bold mb-2 ${darkMode ? 'text-secondary' : 'text-secondary-light'}`}>Freelance Work</h2>
          <h3 className={`text-2xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-gray-200' : 'text-slate-800'}`}>GeeksDesigns</h3>
          <div className="flex justify-center md:justify-start">
            <a 
              href="https://www.geeksdesigns.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-flex items-center mt-2 px-4 py-2 rounded-md ${
                darkMode 
                  ? 'bg-secondary text-primary hover:bg-secondary-dark' 
                  : 'bg-secondary-light text-white hover:bg-secondary'
              } transition-colors duration-300 text-sm`}
            >
              Visit Website
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-5 rounded-lg shadow-md hover-lift ${darkMode ? 'bg-navy-light' : 'bg-white'}`}
            >
              <div className={`text-2xl mb-4 ${darkMode ? 'text-secondary' : 'text-secondary-light'}`}>
                {service.icon}
              </div>
              <h4 className={`text-lg font-bold mb-2 ${darkMode ? 'text-gray-200' : 'text-slate-800'}`}>
                {service.title}
              </h4>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 mb-10"
        >
          <div className="flex flex-col items-center">
            <h4 className={`text-lg font-bold mb-3 ${darkMode ? 'text-gray-200' : 'text-slate-800'}`}>
              Client Projects
            </h4>
            <p className={`text-sm mb-4 text-center ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>
              These are some sandbox developments of my clients:
            </p>
            <div className={`flex flex-wrap justify-center gap-3 ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>
              {[
                { name: "TheMadZone", url: "https://www.themadzone.co.uk/" },
                { name: "AmazingTricks", url: "https://www.amazingtricks.in/" },
                { name: "Cardgency", url: "https://www.cardgency.com/" },
                { name: "Broadway Constructions", url: "https://bwc.geeksdesigns.com/" },
                { name: "GeeksDesigns Portal", url: "https://myaccount.geeksdesigns.com/" },
                { name: "PrimePay", url: "https://www.primepay.in/" }
              ].map((client, index) => (
                <a 
                  key={index}
                  href={client.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`px-3 py-1 text-sm rounded-full transition-all ${
                    darkMode 
                      ? 'bg-navy-light hover:bg-secondary hover:text-primary' 
                      : 'bg-white hover:bg-secondary-light hover:text-white'
                  } shadow-sm hover-lift`}
                >
                  {client.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className={`mt-8 p-6 rounded-lg ${darkMode ? 'bg-navy-light' : 'bg-white'} shadow-md`}
        >
          <div className="md:flex items-start">
            <div className="md:w-1/3 mb-4 md:mb-0 md:pr-6">
              <h4 className={`text-lg font-bold mb-2 ${darkMode ? 'text-gray-200' : 'text-slate-800'}`}>
                About GeeksDesigns
              </h4>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>
                As I manage GeeksDesigns, I lead a team in creating outstanding digital experiences. We focus on creativity and results, helping clients establish their presence online through professional websites, applications, and branding.
              </p>
            </div>
            <div className="md:w-2/3">
              <h4 className={`text-lg font-bold mb-2 ${darkMode ? 'text-gray-200' : 'text-slate-800'}`}>
                Freelance Achievements
              </h4>
              <ul className={`text-sm space-y-2 ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>
                <li className="flex items-start">
                  <span className={`mr-2 text-lg ${darkMode ? 'text-secondary' : 'text-secondary-light'}`}>•</span>
                  <span>Successfully delivered over 50+ projects for clients across various industries</span>
                </li>
                <li className="flex items-start">
                  <span className={`mr-2 text-lg ${darkMode ? 'text-secondary' : 'text-secondary-light'}`}>•</span>
                  <span>Built a team of skilled professionals specializing in design, development, and marketing</span>
                </li>
                <li className="flex items-start">
                  <span className={`mr-2 text-lg ${darkMode ? 'text-secondary' : 'text-secondary-light'}`}>•</span>
                  <span>Implemented agile methodologies to ensure on-time project delivery and client satisfaction</span>
                </li>
                <li className="flex items-start">
                  <span className={`mr-2 text-lg ${darkMode ? 'text-secondary' : 'text-secondary-light'}`}>•</span>
                  <span>Developed a reputation for creating responsive, SEO-optimized websites that deliver results</span>
                </li>
                <li className="flex items-start">
                  <span className={`mr-2 text-lg ${darkMode ? 'text-secondary' : 'text-secondary-light'}`}>•</span>
                  <span>Established long-term relationships with clients through exceptional service and support</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Freelance; 