import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = ({ darkMode }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'DevOps Automation Platform',
      description: 'A centralized platform for automating CI/CD pipelines across multiple projects. Features include template management, monitoring dashboards, and automated deployment.',
      image: '/projects/devops-automation.jpg',
      technologies: ['AWS', 'Terraform', 'Jenkins', 'React', 'Node.js'],
      github: 'https://github.com/saiakash/devops-automation',
      live: 'https://devops-automation.demo.com',
      category: 'DevOps',
    },
    {
      title: 'Kubernetes Monitoring System',
      description: 'A custom monitoring solution for Kubernetes clusters that provides real-time metrics, alerts, and visualization of container health and performance.',
      image: '/projects/k8s-monitor.jpg',
      technologies: ['Kubernetes', 'Prometheus', 'Grafana', 'Go', 'Python'],
      github: 'https://github.com/saiakash/k8s-monitor',
      live: 'https://k8s-monitor.demo.com',
      category: 'DevOps',
    },
    {
      title: 'E-commerce Website',
      description: 'A full-featured e-commerce platform with product catalog, shopping cart, user authentication, and payment processing capabilities.',
      image: '/projects/ecommerce.jpg',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      github: 'https://github.com/saiakash/ecommerce-site',
      live: 'https://ecommerce-demo.saiakash.com',
      category: 'Frontend',
    },
    {
      title: 'Portfolio Website Template',
      description: 'A customizable portfolio website template for developers and designers with sections for projects, skills, and contact information.',
      image: '/projects/portfolio-template.jpg',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/saiakash/portfolio-template',
      live: 'https://portfolio-template.saiakash.com',
      category: 'Frontend',
    },
    {
      title: 'Cloud Cost Optimization Tool',
      description: 'A tool for analyzing and optimizing cloud infrastructure costs across AWS, Azure, and GCP with recommendations for cost-saving measures.',
      image: '/projects/cloud-cost.jpg',
      technologies: ['Python', 'AWS SDK', 'Azure SDK', 'React', 'D3.js'],
      github: 'https://github.com/saiakash/cloud-cost-optimizer',
      live: 'https://cloud-cost-optimizer.demo.com',
      category: 'Cloud',
    },
    {
      title: 'Database Migration Toolkit',
      description: 'A toolkit for automating database migrations between different database systems with schema conversion and data transfer capabilities.',
      image: '/projects/db-migration.jpg',
      technologies: ['Python', 'PostgreSQL', 'MySQL', 'MongoDB', 'SQLAlchemy'],
      github: 'https://github.com/saiakash/db-migration-toolkit',
      live: 'https://db-migration.demo.com',
      category: 'Backend',
    },
  ];

  const filters = ['All', 'DevOps', 'Cloud', 'Frontend', 'Backend'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className={`py-16 md:py-24 ${darkMode ? 'bg-primary' : 'bg-primary-light'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-2xl md:text-3xl font-bold mb-2 ${darkMode ? 'text-secondary' : 'text-secondary-light'}`}>Projects</h2>
          <h3 className={`text-3xl md:text-4xl font-bold mb-10 ${darkMode ? 'text-gray-200' : 'text-slate-800'}`}>My Recent Work</h3>
        </motion.div>

        <div className="flex flex-wrap justify-center mb-8">
          {filters.map((filter, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 m-2 rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? darkMode
                    ? 'bg-secondary text-primary-light font-medium'
                    : 'bg-secondary-light text-white font-medium'
                  : darkMode
                    ? 'bg-navy-light text-gray-300 hover:bg-secondary hover:text-primary-light'
                    : 'bg-slate-100 text-slate-700 hover:bg-secondary-light hover:text-white'
              } hover-lift`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-lg overflow-hidden ${darkMode ? 'bg-navy-light' : 'bg-white'} shadow-md hover-lift ${darkMode ? 'shadow-slate-900/30' : 'shadow-slate-200/60'}`}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${darkMode ? 'bg-primary/80' : 'bg-slate-900/80'}`}>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full ${darkMode ? 'bg-navy' : 'bg-slate-100'} hover-lift hover-glow`}
                    >
                      <FaGithub className={`w-5 h-5 ${darkMode ? 'text-secondary' : 'text-secondary-light'}`} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full ${darkMode ? 'bg-navy' : 'bg-slate-100'} hover-lift hover-glow`}
                    >
                      <FaExternalLinkAlt className={`w-5 h-5 ${darkMode ? 'text-secondary' : 'text-secondary-light'}`} />
                    </a>
                  </div>
                </div>
                <div className={`absolute top-2 right-2 px-2 py-1 text-xs rounded ${darkMode ? 'bg-secondary text-primary' : 'bg-secondary-light text-white'}`}>
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h4 className={`text-xl font-bold mb-2 ${darkMode ? 'text-gray-200' : 'text-slate-800'}`}>{project.title}</h4>
                <p className={`mb-4 text-sm ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 text-xs rounded-full ${
                        darkMode
                          ? 'bg-primary text-gray-300'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
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
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/saiakash"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-secondary ${darkMode ? '' : 'btn-secondary-light'} px-6 py-3 rounded inline-flex items-center hover-lift`}
          >
            <span>View More on GitHub</span>
            <FaGithub className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 