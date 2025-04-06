import React from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf, FaExternalLinkAlt, FaGraduationCap, FaAws } from 'react-icons/fa';

const Publications = ({ darkMode }) => {
  const publications = [
    {
      title: "Cloud Computing Based Learning Web Application Through Amazon Web Services",
      journal: "IEEE International Conference on Electronics, Computing and Communication Technologies (CONECCT)",
      authors: "SaiAkash Neela, Yashwanth Neyyala, VamsiNadh Pendem, Kanishk Peryala, Vasantham Vijay Kumar",
      year: "2021",
      doi: "10.1109/CONECCT52877.2021.9441974",
      link: "https://ieeexplore.ieee.org/document/9441974/",
      abstract: "In this Web Application, we designed and implemented a Dynamic E-Learning Portal using WordPress through Amazon Web Services (AWS). The project mainly consists of 10 Amazon Cloud Services and Google Firebase. The main aim of this project is to provide E-Learning Courses for Engineering Students. Technologies used include Amazon RDS, Amazon SNS, Amazon Route53, Amazon S3, Amazon VPS, Amazon CloudFront, and other AWS services to create a scalable, secure, and cost-effective educational platform.",
      keywords: ["Cloud Computing", "Amazon Web Services", "AWS", "E-Learning", "Web Application", "WordPress", "Educational Technology"]
    }
  ];

  return (
    <section id="publications" className={`py-12 md:py-24 ${darkMode ? 'bg-navy' : 'bg-slate-50'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 md:mb-10"
        >
          <h2 className={`text-xl md:text-3xl font-bold mb-1 md:mb-2 ${darkMode ? 'text-secondary' : 'text-secondary-light'}`}>Publications</h2>
          <h3 className={`text-2xl md:text-4xl font-bold ${darkMode ? 'text-gray-200' : 'text-slate-800'}`}>Research Work</h3>
        </motion.div>

        <div className="space-y-6 md:space-y-8">
          {publications.map((publication, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-4 md:p-6 rounded-lg shadow-md ${darkMode ? 'bg-navy-light' : 'bg-white'} hover-lift`}
            >
              <div className="flex flex-col gap-3 md:gap-4">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h4 className={`text-lg md:text-xl font-bold ${darkMode ? 'text-gray-200' : 'text-slate-800'}`}>
                    {publication.title}
                  </h4>
                  <div className="flex gap-1 mt-1 md:mt-0">
                    <FaGraduationCap className={`w-4 h-4 md:w-5 md:h-5 ${darkMode ? 'text-secondary' : 'text-secondary-light'}`} title="Undergraduate research" />
                    <FaAws className={`w-4 h-4 md:w-5 md:h-5 ${darkMode ? 'text-secondary' : 'text-secondary-light'}`} title="AWS-focused" />
                  </div>
                </div>
                
                <div>
                  <p className={`text-xs md:text-sm ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                    {publication.authors}
                  </p>
                  <p className={`italic text-xs md:text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                    {publication.journal}, {publication.year}
                  </p>
                </div>
                
                <div className={`p-3 rounded-md text-xs md:text-sm italic ${darkMode ? 'bg-primary bg-opacity-50 text-gray-400' : 'bg-slate-100 text-slate-600'}`}>
                  <FaGraduationCap className="inline mr-2 mb-1" />
                  This paper was published during my undergraduate studies. I might sound like a kid writing a paper and publishing it, but it represents an important milestone in my research journey and demonstrates my early experience with AWS cloud services.
                </div>
                
                <div className="hidden md:block">
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>
                    {publication.abstract}
                  </p>
                </div>
                
                <div className="md:hidden">
                  <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>
                    {publication.abstract.length > 150 
                      ? `${publication.abstract.substring(0, 150)}...` 
                      : publication.abstract}
                  </p>
                  {publication.abstract.length > 150 && (
                    <button 
                      className={`text-xs mt-1 ${darkMode ? 'text-secondary' : 'text-secondary-light'}`}
                      onClick={() => window.open(publication.link, '_blank')}
                    >
                      Read more
                    </button>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-1 md:gap-2">
                  {publication.keywords.map((keyword, kidx) => (
                    <span
                      key={kidx}
                      className={`px-2 py-0.5 text-2xs md:text-xs rounded-full ${
                        darkMode
                          ? 'bg-primary text-gray-300'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-1">
                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1 text-xs md:text-sm ${
                      darkMode 
                        ? 'text-secondary hover:text-secondary-dark' 
                        : 'text-secondary-light hover:text-secondary'
                    } hover-glow`}
                  >
                    <FaExternalLinkAlt className="w-3 h-3 md:w-4 md:h-4" />
                    <span>View Publication</span>
                  </a>
                  <a
                    href={`https://ieeexplore.ieee.org/document/9441974`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1 text-xs md:text-sm ${
                      darkMode 
                        ? 'text-secondary hover:text-secondary-dark' 
                        : 'text-secondary-light hover:text-secondary'
                    } hover-glow`}
                  >
                    <FaFilePdf className="w-3 h-3 md:w-4 md:h-4" />
                    <span>DOI: {publication.doi}</span>
                  </a>
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
          className={`mt-6 md:mt-8 p-3 md:p-4 rounded-lg text-center ${darkMode ? 'bg-navy-light' : 'bg-white'} shadow-md`}
        >
          <p className={`text-xs md:text-sm ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>
            Research interests include cloud computing, AWS architecture, educational technology, and web application development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications; 