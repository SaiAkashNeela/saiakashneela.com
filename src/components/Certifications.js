import React from 'react';
import { FaSalesforce, FaAws, FaJava, FaRobot, FaExternalLinkAlt } from 'react-icons/fa';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const Certifications = () => {
  const certifications = [
    {
      title: "Salesforce Certified Administrator",
      provider: "Salesforce",
      date: "2020",
      icon: <FaSalesforce className="h-8 w-8 text-primary" />,
      link: "https://trailblazer.me/id/saiakash",
      description: "Validated expertise in setting up, configuring, and managing Salesforce applications."
    },
    {
      title: "AWS Solutions Architect Associate Level",
      provider: "SimpliLearn",
      date: "2020",
      icon: <FaAws className="h-8 w-8 text-primary" />,
      link: "https://certificates.simplicdn.net/share/1730283.pdf",
      description: "Demonstrated ability to design and deploy scalable, highly available, and fault-tolerant systems on AWS."
    },
    {
      title: "RPA Professional",
      provider: "Automation Anywhere",
      date: "2021",
      icon: <FaRobot className="h-8 w-8 text-primary" />,
      link: "https://certificates.automationanywhere.com/84bcc22a-87c2-4d46-a8ac-7a8f6e90d37a",
      description: "Proficiency in designing and implementing robotic process automation solutions."
    },
    {
      title: "Java",
      provider: "Wipro",
      date: "2020",
      icon: <FaJava className="h-8 w-8 text-primary" />,
      link: "https://1drv.ms/u/s!AuQU0shhPX8TnBfBYrnLygLGmNLb?e=jHZ7Ck",
      description: "Comprehensive training in Java programming fundamentals and advanced concepts."
    }
  ];

  return (
    <section id="certifications" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Professional Courses</h2>
          <p className="text-muted-foreground">My certifications.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <Card key={cert.title}>
              <CardHeader className="flex flex-row items-center gap-4">
                {cert.icon}
                <div>
                  <CardTitle>{cert.title}</CardTitle>
                  <p className="text-muted-foreground">{cert.provider} • {cert.date}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{cert.description}</p>
                <Button asChild>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt className="mr-2 h-4 w-4" /> View Certificate
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
