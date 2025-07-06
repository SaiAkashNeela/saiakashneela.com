import React from 'react';
import { FaGraduationCap, FaUniversity, FaLaptopCode } from 'react-icons/fa';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Education = () => {
  const educationData = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Hertfordshire",
      description: "Specialized in advanced computer science concepts with focus on cloud computing, machine learning, and software engineering principles.",
      icon: <FaGraduationCap className="h-8 w-8 text-primary" />
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "KL University",
      description: "Specialized in Cloud Computing with coursework in distributed systems, virtualization technologies, and cloud infrastructure management.",
      icon: <FaUniversity className="h-8 w-8 text-primary" />
    },
    {
      degree: "Self-Taught Skills",
      institution: "Continuous Learning",
      description: "Continuously expanding knowledge through self-study, online courses, and practical application of new technologies in cloud engineering, DevOps practices, and modern web development.",
      icon: <FaLaptopCode className="h-8 w-8 text-primary" />
    }
  ];

  return (
    <section id="education" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Academic Background</h2>
          <p className="text-muted-foreground">My educational journey.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((item) => (
            <Card key={item.degree}>
              <CardHeader className="flex flex-row items-center gap-4">
                {item.icon}
                <div>
                  <CardTitle>{item.degree}</CardTitle>
                  <p className="text-muted-foreground">{item.institution}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
