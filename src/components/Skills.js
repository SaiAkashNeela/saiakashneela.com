import React from 'react';
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
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'DevOps',
      skills: [
        { name: 'Docker', icon: <FaDocker /> },
        { name: 'Kubernetes', icon: <SiKubernetes /> },
        { name: 'Jenkins', icon: <SiJenkins /> },
        { name: 'GitHub Actions', icon: <SiGithub /> },
        { name: 'Azure DevOps', icon: <FaCloud /> },
        { name: 'Terraform', icon: <SiTerraform /> },
        { name: 'Ansible', icon: <SiAnsible /> },
        { name: 'Prometheus', icon: <SiPrometheus /> },
        { name: 'Grafana', icon: <SiGrafana /> },
      ],
    },
    {
      title: 'Cloud',
      skills: [
        { name: 'AWS', icon: <FaAws /> },
        { name: 'Azure', icon: <FaMicrosoft /> },
        { name: 'GCP', icon: <SiGoogle /> },
        { name: 'S3', icon: <SiAmazon /> },
        { name: 'EC2', icon: <FaServer /> },
        { name: 'RDS', icon: <FaDatabase /> },
        { name: 'EKS', icon: <SiKubernetes /> },
        { name: 'ECS', icon: <FaCloud /> },
        { name: 'Lambda', icon: <FaCode /> },
      ],
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'WordPress', icon: <FaWordpress /> },
        { name: 'Node.js', icon: <FaNode /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
      ],
    },
    {
      title: 'Infrastructure',
      skills: [
        { name: 'DNS', icon: <FaDnsIcon /> },
        { name: 'Domain Mgmt', icon: <FaGlobe /> },
        { name: 'Web Hosting', icon: <FaServer /> },
        { name: 'MX Records', icon: <FaGlobeAmericas /> },
        { name: 'TXT Records', icon: <FaGlobeAmericas /> },
        { name: 'Cloudflare', icon: <SiCloudflare /> },
        { name: 'Apache', icon: <SiApache /> },
        { name: 'Nginx', icon: <SiNginx /> },
        { name: 'MySQL', icon: <SiMysql /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Technical Expertise
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            A comprehensive overview of my technical skills and capabilities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.title} className="transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-center text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-6 text-center">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center space-y-2">
                      <div className="text-4xl text-primary transition-colors duration-300 hover:text-accent-foreground">
                        {skill.icon}
                      </div>
                      <p className="text-sm font-medium text-muted-foreground">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
