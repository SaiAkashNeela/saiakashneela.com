import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'Sai Akash Neela | Portfolio', 
  description = 'Sai Akash Neela is a software developer specializing in React, Node.js, and cloud technologies. Explore my portfolio, projects, and professional experience.',
  keywords = 'Sai Akash Neela, Web Developer, Software Engineer, React Developer, Node.js Developer, Cloud Engineer, Portfolio, GeeksDesigns',
  canonicalUrl,
  ogType = 'website',
  ogImage = 'https://s3.ap-south-2.amazonaws.com/saiakashneela.com/profile.png', 
  twitterCard = 'summary_large_image',
  schemaData
}) => {
  const siteUrl = 'https://saiakashneela.com';
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  
  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Sai Akash Neela" />
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Sai Akash Neela" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@SaiAkashNeela" />

      {/* Mobile Responsive */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      
      {/* Language */}
      <html lang="en" />
      
      {/* Favicon */}
      <link rel="icon" href="https://s3.ap-south-2.amazonaws.com/saiakashneela.com/profile.png" />
      <link rel="apple-touch-icon" href="https://s3.ap-south-2.amazonaws.com/saiakashneela.com/profile.png" />
      
      {/* Structured Data */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO; 