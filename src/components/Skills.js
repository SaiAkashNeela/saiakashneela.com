import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaDocker, FaAws, FaReact, FaNode, FaPython, 
  FaDatabase, FaCode, FaJs, FaHtml5, FaCss3Alt, 
  FaMicrosoft, FaServer, FaCloud, FaWordpress,
  FaGlobe, FaGlobeAmericas, FaNetworkWired as FaDnsIcon
} from 'react-icons/fa';
import { 
  SiKubernetes, SiTerraform, SiGrafana, SiPrometheus, 
  SiGithub, SiGoogle, SiAmazon, SiMongodb, 
  SiMysql, SiTailwindcss, 
  SiAnsible, SiJenkins, SiCloudflare, SiApache, SiNginx
} from 'react-icons/si';

const Skills = ({ darkMode }) => {
  const skillCategories = [
    {
      title: 'DevOps',
      skills: [
        { name: 'Docker', icon: <FaDocker size={24} /> },
        { name: 'Kubernetes', icon: <SiKubernetes size={24} /> },
        { name: 'Jenkins', icon: <SiJenkins size={24} /> },
        { name: 'GitHub Actions', icon: <SiGithub size={24} /> },
        { name: 'Azure DevOps', icon: <FaCloud size={24} /> },
        { name: 'Terraform', icon: <SiTerraform size={24} /> },
        { name: 'Ansible', icon: <SiAnsible size={24} /> },
        { name: 'Prometheus', icon: <SiPrometheus size={24} /> },
        { name: 'Grafana', icon: <SiGrafana size={24} /> },
      ],
    },
    {
      title: 'Cloud',
      skills: [
        { name: 'AWS', icon: <FaAws size={24} /> },
        { name: 'Azure', icon: <FaMicrosoft size={24} /> },
        { name: 'GCP', icon: <SiGoogle size={24} /> },
        { name: 'S3', icon: <SiAmazon size={24} /> },
        { name: 'EC2', icon: <FaServer size={24} /> },
        { name: 'RDS', icon: <FaDatabase size={24} /> },
        { name: 'EKS', icon: <SiKubernetes size={24} /> },
        { name: 'ECS', icon: <FaCloud size={24} /> },
        { name: 'Lambda', icon: <FaCode size={24} /> },
      ],
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'HTML', icon: <FaHtml5 size={24} /> },
        { name: 'CSS', icon: <FaCss3Alt size={24} /> },
        { name: 'JavaScript', icon: <FaJs size={24} /> },
        { name: 'React', icon: <FaReact size={24} /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss size={24} /> },
        { name: 'WordPress', icon: <FaWordpress size={24} /> },
        { name: 'Node.js', icon: <FaNode size={24} /> },
        { name: 'Python', icon: <FaPython size={24} /> },
        { name: 'MongoDB', icon: <SiMongodb size={24} /> },
      ],
    },
    {
      title: 'Infrastructure',
      skills: [
        { name: 'DNS', icon: <FaDnsIcon size={24} /> },
        { name: 'Domain Mgmt', icon: <FaGlobe size={24} /> },
        { name: 'Web Hosting', icon: <FaServer size={24} /> },
        { name: 'MX Records', icon: <FaGlobeAmericas size={24} /> },
        { name: 'TXT Records', icon: <FaGlobeAmericas size={24} /> },
        { name: 'Cloudflare', icon: <SiCloudflare size={24} /> },
        { name: 'Apache', icon: <SiApache size={24} /> },
        { name: 'Nginx', icon: <SiNginx size={24} /> },
        { name: 'MySQL', icon: <SiMysql size={24} /> },
      ],
    },
  ];

  return (
    <section id="skills" className={`py-16 md:py-24 ${darkMode ? 'bg-navy' : 'bg-slate-50'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-2xl md:text-3xl font-bold mb-2 ${darkMode ? 'text-secondary' : 'text-secondary-light'}`}>Skills</h2>
          <h3 className={`text-3xl md:text-4xl font-bold mb-10 ${darkMode ? 'text-gray-200' : 'text-slate-800'}`}>My Technical Expertise</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className={`${darkMode ? 'bg-navy-light' : 'bg-white'} p-6 rounded-lg shadow-md ${darkMode ? 'shadow-slate-900/30' : 'shadow-slate-200/60'} hover-lift`}
            >
              <h4 className={`text-xl font-bold mb-4 ${darkMode ? 'text-gray-200' : 'text-slate-800'}`}>{category.title}</h4>
              <div className="grid grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 + categoryIndex * 0.1 }}
                    className={`flex flex-col items-center ${darkMode ? 'hover:bg-primary' : 'hover:bg-slate-100'} p-2 rounded-md hover-lift transition-colors duration-300`}
                  >
                    <div className={`mb-2 flex items-center justify-center ${darkMode ? 'text-secondary' : 'text-secondary-light'}`}>
                      {skill.icon}
                    </div>
                    <span className={`text-xs text-center ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>{skill.name}</span>
                  </motion.div>
                ))}
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
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>
            I'm always expanding my skill set and exploring new technologies. Currently, I'm learning more about serverless architecture and infrastructure as code.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 