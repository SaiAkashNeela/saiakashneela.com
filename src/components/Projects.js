import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = ({ darkMode }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'E-commerce platform specializing in lifestyle products with modern design and seamless shopping experience.',
      technologies: ['WordPress', 'WooCommerce', 'CSS', 'JavaScript', 'Responsive Design'],
      category: 'E-commerce',
    },
    {
      title: 'Technology Blog',
      description: 'Content-rich blog focused on tech tips and tricks, featuring a clean, user-friendly interface with enhanced performance.',
      technologies: ['WordPress', 'PHP', 'SEO', 'Content Management', 'Web Optimization'],
      category: 'Blog',
    },
    {
      title: 'Digital Card Platform',
      description: 'Digital card creation platform allowing users to create, customize and share digital business cards and invitations.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Digital Design'],
      category: 'Web App',
    },
    {
      title: 'Construction Company Website',
      description: 'Corporate website for a construction company featuring project portfolio, services, and client testimonials.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Responsive Design'],
      category: 'Corporate',
    },
    {
      title: 'Client Management Portal',
      description: 'Client management portal providing access to project status, invoices, and support tickets for a design agency.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT Authentication'],
      category: 'Web App',
    },
    {
      title: 'Financial Technology Platform',
      description: 'Financial technology platform offering payment solutions, transaction management, and financial reporting tools.',
      technologies: ['React', 'Redux', 'Node.js', 'PostgreSQL', 'Payment API Integration'],
      category: 'FinTech',
    },
  ];

  const filters = ['All', 'E-commerce', 'Blog', 'Web App', 'Corporate', 'FinTech'];

  // Function to get gradient based on category
  const getCategoryGradient = (category) => {
    switch(category) {
      case 'E-commerce':
        return 'from-green-700 to-emerald-900';
      case 'Blog':
        return 'from-blue-700 to-indigo-900';
      case 'Web App':
        return 'from-purple-700 to-violet-900';
      case 'Corporate':
        return 'from-slate-700 to-gray-900';
      case 'FinTech':
        return 'from-yellow-600 to-orange-800';
      default:
        return 'from-blue-800 to-purple-800';
    }
  };

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className={`py-12 md:py-16 ${darkMode ? 'bg-primary' : 'bg-primary-light'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-2xl md:text-3xl font-bold mb-2 ${darkMode ? 'text-secondary' : 'text-secondary-light'}`}>Projects</h2>
          <h3 className={`text-3xl md:text-4xl font-bold mb-10 ${darkMode ? 'text-gray-200' : 'text-slate-800'}`}>Client Work</h3>
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
              className={`px-4 py-2 m-2 rounded-full transition-all duration-300 dev-hover-effect ${
                activeFilter === filter
                  ? darkMode
                    ? 'bg-secondary text-primary-light font-medium'
                    : 'bg-secondary-light text-white font-medium'
                  : darkMode
                    ? 'bg-navy-light text-gray-300 hover:bg-secondary hover:text-primary-light'
                    : 'bg-slate-100 text-slate-700 hover:bg-secondary-light hover:text-white'
              } hover-lift`}
              data-code={`setFilter('${filter}')`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-lg overflow-hidden ${darkMode ? 'bg-navy-light' : 'bg-white'} shadow-md hover-lift ${darkMode ? 'shadow-slate-900/30' : 'shadow-slate-200/60'} transition-all duration-300 hover:shadow-xl project-card group`}
              data-code={`// ${project.title}\n// ${project.technologies.join(', ')}`}
            >
              <div className="relative overflow-hidden">
                <div className={`w-full h-48 flex items-center justify-center bg-gradient-to-r ${getCategoryGradient(project.category)} transition-transform duration-500 group-hover:scale-105`}>
                  <h3 className={`text-xl md:text-2xl font-bold px-4 text-white text-center`}>
                    {project.title}
                  </h3>
                </div>
                <div className={`absolute top-2 right-2 px-2 py-1 text-xs rounded ${darkMode ? 'bg-secondary text-primary' : 'bg-secondary-light text-white'}`}>
                  {project.category}
                </div>
              </div>
              <div className="p-6 group-hover:bg-opacity-95">
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
      </div>
    </section>
  );
};

export default Projects; 