import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from './ui/button';

const Projects = () => {
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

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Client Work</h2>
          <p className="text-muted-foreground">A selection of my projects.</p>
        </div>
        <div className="flex justify-center flex-wrap gap-2 mb-8">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "secondary"}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.title} className="transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
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

export default Projects;
