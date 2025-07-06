import React from 'react';
import { FaGraduationCap, FaUniversity, FaLaptopCode } from 'react-icons/fa';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Education = () => {
  const educationData = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Hertfordshire",
      description: "Specialized in advanced computer science concepts with focus on cloud computing, machine learning, and software engineering principles.",
      icon: <FaGraduationCap className="h-10 w-10 text-primary" />
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "KL University",
      description: "Specialized in Cloud Computing with coursework in distributed systems, virtualization technologies, and cloud infrastructure management.",
      icon: <FaUniversity className="h-10 w-10 text-primary" />
    },
    {
      degree: "Self-Taught Skills",
      institution: "Continuous Learning",
      description: "Continuously expanding knowledge through self-study, online courses, and practical application of new technologies in cloud engineering, DevOps practices, and modern web development.",
      icon: <FaLaptopCode className="h-10 w-10 text-primary" />
    }
  ];

  return (
    <section id="education" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Academic Background
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            A summary of my educational journey and qualifications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((item) => (
            <Card key={item.degree} className="transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="mb-4">{item.icon}</div>
                <CardTitle className="text-xl font-semibold text-primary">{item.degree}</CardTitle>
                <p className="text-sm font-medium text-muted-foreground">{item.institution}</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-base text-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
