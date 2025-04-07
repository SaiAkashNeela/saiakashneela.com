// Schema.org structured data for improved SEO

export const getPersonSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sai Akash Neela",
    "url": "https://saiakashneela.com",
    "image": "https://s3.ap-south-2.amazonaws.com/saiakashneela.com/profile.png",
    "sameAs": [
      "https://github.com/SaiAkashNeela",
      "https://www.linkedin.com/in/saiakashneela/",
      "https://www.geeksdesigns.com"
    ],
    "jobTitle": "Software Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "GeeksDesigns"
    },
    "description": "Sai Akash Neela is a software developer specializing in React, Node.js, and cloud technologies."
  };
};

export const getWebsiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Sai Akash Neela - Portfolio",
    "url": "https://saiakashneela.com",
    "description": "Portfolio website of Sai Akash Neela, showcasing projects, experience, and skills.",
    "author": {
      "@type": "Person",
      "name": "Sai Akash Neela"
    }
  };
};

export const getProjectSchema = (project) => {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.title,
    "description": project.description,
    "applicationCategory": "WebApplication",
    "operatingSystem": "Any",
    "author": {
      "@type": "Person",
      "name": "Sai Akash Neela"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "url": project.live,
    "keywords": project.technologies.join(", ")
  };
};

export const getOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GeeksDesigns",
    "url": "https://www.geeksdesigns.com",
    "logo": "https://www.geeksdesigns.com/logo.png",
    "sameAs": [
      "https://www.geeksdesigns.com",
      "https://www.linkedin.com/company/geeksdesigns/"
    ],
    "description": "GeeksDesigns creates outstanding digital experiences, helping clients establish their online presence through professional websites, applications, and branding.",
    "founder": {
      "@type": "Person",
      "name": "Sai Akash Neela"
    }
  };
};

export const getBreadcrumbSchema = (items) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://saiakashneela.com${item.path}`
    }))
  };
}; 