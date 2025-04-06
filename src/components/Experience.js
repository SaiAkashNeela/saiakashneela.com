import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Experience = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: 'BellSoft Ltd',
      title: 'DevOps Engineer',
      period: 'June 2022 - Present',
      responsibilities: [
        'Led the implementation of CI/CD pipelines using Jenkins, GitHub Actions, and Azure DevOps, reducing deployment time by 60%.',
        'Designed and maintained cloud infrastructure on AWS and Azure, improving system reliability by 40%.',
        'Containerized applications using Docker and orchestrated with Kubernetes, enabling seamless scaling and deployment.',
        'Implemented Infrastructure as Code using Terraform and Ansible, reducing provisioning time by 75%.',
        'Established monitoring systems with Prometheus and Grafana, improving incident response time by 50%.',
        'Created comprehensive documentation for DevOps processes and trained team members on best practices.',
        'Collaborated with development teams to optimize application performance and security.',
      ],
    },
    {
      company: 'Qapita Pte Ltd',
      title: 'DevOps Engineer',
      period: 'February 2020 - May 2022',
      responsibilities: [
        'Managed multiple database systems including MySQL, PostgreSQL, and MongoDB.',
        'Deployed microservices on AWS ECS and EC2, improving application scalability by 30%.',
        'Implemented automated backup solutions to ensure data integrity and quick disaster recovery.',
        'Optimized infrastructure costs by 25% through resource optimization and leveraging spot instances.',
        'Developed scripts to automate routine operational tasks, reducing manual effort by 40%.',
        'Provided 24/7 support for critical production environments and implemented incident management protocols.',
        'Built custom monitoring dashboards to track application performance and resource utilization.',
      ],
    },
    {
      company: 'Freelance',
      title: 'Freelance',
      period: 'From January 2019',
      responsibilities: [
        'Configured and managed WordPress websites, including domain setup, DNS management, and SSL implementation.',
  'Handled end-to-end hosting setup using cPanel, WHM, and cloud-based platforms for WordPress deployments.',
  'Optimized website performance through caching solutions, image compression, and database tuning.',
  'Implemented SEO best practices using WordPress plugins like Rank Math and Yoast.',
  'Integrated third-party tools and services such as Google Analytics, SMTP, and payment gateways.',
  'Managed DNS configurations (A, CNAME, MX, TXT, SPF, DKIM) to ensure domain and email reliability.',
  'Provided ongoing technical support, regular maintenance, backups, and security scans for WordPress sites.'
      ],
    },
  ];

  return (
    <section id="experience" className={`py-16 md:py-24 ${darkMode ? 'bg-primary' : 'bg-primary-light'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-2xl md:text-3xl font-bold mb-2 ${darkMode ? 'text-secondary' : 'text-secondary-light'}`}>Experience</h2>
          <h3 className={`text-3xl md:text-4xl font-bold mb-10 ${darkMode ? 'text-gray-200' : 'text-slate-800'}`}>Where I've Worked</h3>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1"
          >
            <div className={`flex md:flex-col overflow-x-auto md:overflow-x-visible scrollbar-hide pb-2 md:pb-0 ${darkMode ? 'border-b md:border-b-0 md:border-r border-gray-700' : 'border-b md:border-b-0 md:border-r border-gray-300'}`}>
              {experiences.map((experience, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-3 md:py-4 text-left whitespace-nowrap md:whitespace-normal transition-all duration-300 hover-glow ${
                    activeTab === index
                      ? darkMode 
                          ? 'text-secondary border-secondary' 
                          : 'text-secondary-light border-secondary-light'
                      : darkMode
                          ? 'text-gray-400 hover:text-gray-300 hover:bg-navy-light'
                          : 'text-slate-600 hover:text-slate-800 hover:bg-slate-100'
                  } ${
                    darkMode 
                      ? 'md:border-l-0 md:border-r-4' 
                      : 'md:border-l-0 md:border-r-4'
                  } ${
                    activeTab === index
                      ? 'md:border-r-4 border-b-2 md:border-b-0'
                      : 'border-transparent'
                  }`}
                >
                  {experience.company}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-3"
          >
            <div className={`${darkMode ? 'bg-navy-light' : 'bg-white'} p-6 rounded-lg shadow-md ${darkMode ? 'shadow-slate-900/30' : 'shadow-slate-200/60'} hover-lift`}>
              <div>
                <h3 className={`text-xl md:text-2xl font-bold ${darkMode ? 'text-gray-200' : 'text-slate-800'}`}>
                  {experiences[activeTab].title}{' '}
                  <span className={`${darkMode ? 'text-secondary' : 'text-secondary-light'}`}>
                    @ {experiences[activeTab].company}
                  </span>
                </h3>
                <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-slate-500'}`}>
                  {experiences[activeTab].period}
                </p>
                <ul className="space-y-3">
                  {experiences[activeTab].responsibilities.map((responsibility, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`flex items-start ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}
                    >
                      <span className={`text-xl mr-2 mt-0.5 ${darkMode ? 'text-secondary' : 'text-secondary-light'}`}>
                        ›
                      </span>
                      {responsibility}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 