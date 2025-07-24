import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

const Experience = () => {
  const experiences = [
    {
      company: 'BellSoft Ltd',
      title: 'DevOps Engineer',
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
    <section id="experience" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Where I've Worked</h2>
          <p className="text-muted-foreground">My professional experience.</p>
        </div>
        <Tabs defaultValue="BellSoft Ltd" className="w-full">
          <TabsList>
            {experiences.map((experience) => (
              <TabsTrigger key={experience.company} value={experience.company}>
                {experience.company}
              </TabsTrigger>
            ))}
          </TabsList>
          {experiences.map((experience) => (
            <TabsContent key={experience.company} value={experience.company}>
              <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <CardTitle>{experience.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {experience.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span className="text-muted-foreground">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
