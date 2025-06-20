import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import './components/DevEffects.css';
import './components/MobileFixes.css';
import AnimatedBackground from './components/AnimatedBackground';
import CodeSnippets from './components/CodeSnippets';
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
import AIIntroLoader from './components/AIIntroLoader';
import PrivacyPolicy from './components/PrivacyPolicy';
import NotFound from './components/NotFound';
import SEO from './components/SEO';
import CookieConsentButton from './components/CookieConsentButton';
import MobileFixer from './components/MobileFixer';
import { getPersonSchema, getWebsiteSchema } from './schema';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const currentHour = new Date().getHours();
    // Default to dark mode between 7 PM (19:00) and 6 AM (6:00)
    const isDarkMode = currentHour >= 19 || currentHour < 6;
    console.log(`Current hour: ${currentHour}, Dark mode: ${isDarkMode}`);
    return isDarkMode;
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Combined schema for the homepage
  const homePageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      getPersonSchema(),
      getWebsiteSchema()
    ]
  };

  useEffect(() => {
    // Apply dark/light mode to body
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Check if the device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Initial loading sequence
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Loading screen duration
    
    return () => {
      clearTimeout(loadTimer);
    };
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
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Publications darkMode={darkMode} />
        <Certifications darkMode={darkMode} />
        <Freelance darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </div>
    </>
  );

  return (
    <HelmetProvider>
      <Router>
        <AnimatedBackground darkMode={darkMode} />
        <CodeSnippets darkMode={darkMode} />
        <MobileFixer />
        <div className={`App transition-colors duration-300 ${darkMode ? 'dark' : 'light'}`}>
          {isLoading ? (
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
