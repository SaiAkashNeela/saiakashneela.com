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
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Combined schema for the homepage
  const homePageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      getPersonSchema(),
      getWebsiteSchema()
    ]
  };

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
        <div className="App">
          {loading ? (
            <>
              <SEO title="Loading... | Sai Akash Neela" />
              <AIIntroLoader />
            </>
          ) : (
            <>
              <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
              <main className={`transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : 'ml-0'}`}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/privacy-policy" element={
                      <>
                        <SEO 
                          title="Privacy & Cookie Policy | Sai Akash Neela"
                          description="Privacy and cookie policy for Sai Akash Neela's portfolio website. Learn about how we handle your data and protect your privacy."
                          canonicalUrl="/privacy-policy"
                        />
                        <PrivacyPolicy />
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
                        <PrivacyPolicy />
                      </>
                    } />
                    <Route path="*" element={
                      <>
                        <SEO 
                          title="Page Not Found | Sai Akash Neela"
                          description="The page you are looking for could not be found. Please navigate back to the homepage."
                          canonicalUrl="/404"
                        />
                        <NotFound />
                      </>
                    } />
                  </Routes>
                </div>
                <CookieConsentButton />
              </main>
            </>
          )}
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
