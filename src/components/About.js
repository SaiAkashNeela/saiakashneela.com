import React from 'react';
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const About = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-muted-foreground">Get to know me</p>
        </div>
        <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <CardHeader>
            <CardTitle>Hello! I'm Sai Akash</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              A passionate DevOps Engineer with a strong background in frontend development. My journey in technology began when I was introduced to programming in college, and since then, I've been on an exciting path of continuous learning and growth.
            </p>
            <p className="text-muted-foreground mt-4">
              With professional experience, I've had the opportunity to work with diverse technologies and teams. My expertise lies in designing and implementing robust CI/CD pipelines, optimizing cloud infrastructure, and developing responsive web applications.
            </p>
            <p className="text-muted-foreground mt-4">
              I'm particularly passionate about combining DevOps practices with modern frontend development to create scalable, high-performing applications. My goal is to build systems that not only work efficiently but also provide exceptional user experiences.
            </p>
            <p className="text-muted-foreground mt-4">
              When I'm not immersed in code or configuring servers, you can find me exploring new hiking trails, experimenting with photography, or diving into a good book on technology trends.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
