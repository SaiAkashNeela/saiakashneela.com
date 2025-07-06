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
    <section id="skills" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">My Technical Expertise</h2>
          <p className="text-muted-foreground">A look at my skills.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.title}>
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center text-center">
                      <div className="text-4xl text-primary mb-2">{skill.icon}</div>
                      <p className="text-sm text-muted-foreground">{skill.name}</p>
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
