import React from 'react';
import { FaCode, FaWordpress, FaDesktop, FaMobileAlt, FaPalette, FaChartLine } from 'react-icons/fa';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Freelance = () => {
  const services = [
    {
      icon: <FaDesktop className="h-8 w-8 text-primary" />,
      title: "Website Pro",
      description: "Building professional responsive websites optimized for search engines."
    },
    {
      icon: <FaWordpress className="h-8 w-8 text-primary" />,
      title: "WordPress Development",
      description: "Creating custom WordPress themes and plugins for flexibility and control."
    },
    {
      icon: <FaMobileAlt className="h-8 w-8 text-primary" />,
      title: "Mobile Apps",
      description: "Developing revolutionary mobile applications with the latest technologies."
    },
    {
      icon: <FaCode className="h-8 w-8 text-primary" />,
      title: "Web Applications",
      description: "Building secure, scalable web applications for various business needs."
    },
    {
      icon: <FaChartLine className="h-8 w-8 text-primary" />,
      title: "Digital Marketing",
      description: "Promoting brands through strategic digital marketing campaigns."
    },
    {
      icon: <FaPalette className="h-8 w-8 text-primary" />,
      title: "Brand Creation",
      description: "Designing targeted brands using modern design techniques."
    }
  ];

  const achievements = [
    "Successfully delivered over 50+ projects for clients across various industries",
    "Built a team of skilled professionals specializing in design, development, and marketing",
    "Implemented agile methodologies to ensure on-time project delivery and client satisfaction",
    "Developed a reputation for creating responsive, SEO-optimized websites that deliver results",
    "Established long-term relationships with clients through exceptional service and support"
  ];

  return (
    <section id="freelance" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Freelance Work</h2>
          <p className="text-muted-foreground">Services I offer and my achievements.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <Card key={service.title} className="transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                {service.icon}
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <CardHeader>
            <CardTitle>Freelance Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span className="text-muted-foreground">{achievement}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Freelance;
