import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Freelance from './components/Freelance';
import Skills from './components/Skills';
import Publications from './components/Publications';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
import AIIntroLoader from './components/AIIntroLoader';
import PrivacyPolicy from './components/PrivacyPolicy';
import NotFound from './components/NotFound';
import SEO from './components/SEO';
import CookieConsentButton from './components/CookieConsentButton';
import { getPersonSchema, getWebsiteSchema } from './schema';

function App() {
  // Initialize dark mode based on time of day (dark mode between 7PM and 6AM)
  const [darkMode, setDarkMode] = useState(() => {
    const hours = new Date().getHours();
    return hours >= 19 || hours < 6;
  });
  
  const [loading, setLoading] = useState(true);

  // Combined schema for the homepage
  const homePageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      getPersonSchema(),
      getWebsiteSchema()
    ]
  };

  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [darkMode]);


  // Simple loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // Preload critical images
  useEffect(() => {
    const preloadImages = [
      'https://s3.ap-south-2.amazonaws.com/saiakashneela.com/profile.png',
      // Add other critical images here
    ];

    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Homepage component
  const HomePage = () => (
    <>
      <SEO 
        title="Sai Akash Neela | Software Developer Portfolio"
        description="Sai Akash Neela is a skilled software developer specializing in React, Node.js, and cloud technologies. Explore my projects, experience, and skills."
        canonicalUrl="/"
        schemaData={homePageSchema}
      />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="min-h-screen">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Publications />
        <Certifications />
        <Freelance />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </>
  );

  return (
    <HelmetProvider>
      <Router>
        <div className={`App transition-colors duration-300 ${darkMode ? 'dark' : 'light'}`}>
          {loading ? (
            <>
              <SEO title="Loading... | Sai Akash Neela" />
              <AIIntroLoader darkMode={darkMode} />
            </>
          ) : (
            <>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/privacy-policy" element={
                  <>
                    <SEO 
                      title="Privacy & Cookie Policy | Sai Akash Neela"
                      description="Privacy and cookie policy for Sai Akash Neela's portfolio website. Learn about how we handle your data and protect your privacy."
                      canonicalUrl="/privacy-policy"
                    />
                    <PrivacyPolicy darkMode={darkMode} setDarkMode={setDarkMode} />
                  </>
                } />
                {/* Redirect /cookie-policy to /privacy-policy */}
                <Route path="/cookie-policy" element={
                  <>
                    <SEO 
                      title="Privacy & Cookie Policy | Sai Akash Neela"
                      description="Privacy and cookie policy for Sai Akash Neela's portfolio website. Learn about how we handle your data and protect your privacy."
                      canonicalUrl="/privacy-policy"
                    />
                    <PrivacyPolicy darkMode={darkMode} setDarkMode={setDarkMode} />
                  </>
                } />
                <Route path="*" element={
                  <>
                    <SEO 
                      title="Page Not Found | Sai Akash Neela"
                      description="The page you are looking for could not be found. Please navigate back to the homepage."
                      canonicalUrl="/404"
                    />
                    <NotFound darkMode={darkMode} setDarkMode={setDarkMode} />
                  </>
                } />
              </Routes>
              <CookieConsentButton darkMode={darkMode} />
            </>
          )}
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
