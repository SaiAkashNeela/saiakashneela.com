import React from 'react';
import { FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const Publications = () => {
  const publications = [
    {
      title: "Cloud Computing Based Learning Web Application Through Amazon Web Services",
      journal: "IEEE International Conference on Electronics, Computing and Communication Technologies (CONECCT)",
      authors: "SaiAkash Neela, Yashwanth Neyyala, VamsiNadh Pendem, Kanishk Peryala, Vasantham Vijay Kumar",
      year: "2021",
      doi: "10.1109/CONECCT52877.2021.9441974",
      link: "https://ieeexplore.ieee.org/document/9441974/",
      abstract: "In this Web Application, we designed and implemented a Dynamic E-Learning Portal using WordPress through Amazon Web Services (AWS). The project mainly consists of 10 Amazon Cloud Services and Google Firebase. The main aim of this project is to provide E-Learning Courses for Engineering Students. Technologies used include Amazon RDS, Amazon SNS, Amazon Route53, Amazon S3, Amazon VPS, Amazon CloudFront, and other AWS services to create a scalable, secure, and cost-effective educational platform.",
      keywords: ["Cloud Computing", "Amazon Web Services", "AWS", "E-Learning", "Web Application", "WordPress", "Educational Technology"]
    }
  ];

  return (
    <section id="publications" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Research Work</h2>
          <p className="text-muted-foreground">My published papers.</p>
        </div>
        <div className="space-y-8">
          {publications.map((publication) => (
            <Card key={publication.doi}>
              <CardHeader>
                <CardTitle>{publication.title}</CardTitle>
                <p className="text-muted-foreground">{publication.journal}, {publication.year}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{publication.authors}</p>
                <p className="text-muted-foreground mb-4">{publication.abstract}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {publication.keywords.map((keyword) => (
                    <Badge key={keyword} variant="secondary">{keyword}</Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button asChild>
                    <a href={publication.link} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt className="mr-2 h-4 w-4" /> View Publication
                    </a>
                  </Button>
                  <Button variant="secondary" asChild>
                    <a href={`https://doi.org/${publication.doi}`} target="_blank" rel="noopener noreferrer">
                      <FaFilePdf className="mr-2 h-4 w-4" /> DOI: {publication.doi}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
