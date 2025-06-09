import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import './components/DevEffects.css';
import './components/MobileFixes.css';
import AnimatedBackground from './components/AnimatedBackground';
import DevTerminal from './components/DevTerminal';
import CodeSnippets from './components/CodeSnippets';
import ChatBox from './components/ChatBox';
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
import Loader from './components/Loader';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookiePolicy from './components/CookiePolicy';
import NotFound from './components/NotFound';
import SEO from './components/SEO';
import CookieConsentButton from './components/CookieConsentButton';
import MobileFixer from './components/MobileFixer';
import { getPersonSchema, getWebsiteSchema } from './schema';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [showTerminal, setShowTerminal] = useState(false);
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

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      
      // Add a class to the root html element for global mobile styling
      if (mobile) {
        document.documentElement.classList.add('mobile-device');
      } else {
        document.documentElement.classList.remove('mobile-device');
      }
    };
    
    // Run immediately
    checkMobile();
    
    // Set up listener
    window.addEventListener('resize', checkMobile);
    
    // Log the mobile state for debugging
    console.log('Is mobile device:', window.innerWidth <= 768);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Initial loading sequence
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Loading screen duration
    
    // Show terminal after a delay when page loads (after main loader is gone)
    const terminalTimer = setTimeout(() => {
      // Only show terminal on non-mobile devices
      if (!isMobile) {
        setShowTerminal(true);
      }
    }, 5000); // Delay before showing terminal
    
    // Automatically hide terminal after 1 minute if user doesn't interact with it
    const terminalHideTimer = setTimeout(() => {
      setShowTerminal(false);
    }, 60000);
    
    return () => {
      clearTimeout(loadTimer);
      clearTimeout(terminalTimer);
      clearTimeout(terminalHideTimer);
    };
  }, [isMobile]); // Add isMobile as dependency

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

  // Handler to hide terminal
  const hideTerminal = () => {
    setShowTerminal(false);
  };

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
        <Projects darkMode={darkMode} />
        <Freelance darkMode={darkMode} />
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
        {showTerminal && !isMobile && <DevTerminal darkMode={darkMode} hideTerminal={hideTerminal} />}
        <ChatBox darkMode={darkMode} isMobile={isMobile} />
        <MobileFixer />
        <div className={`App transition-colors duration-300 ${darkMode ? 'dark' : 'light'}`}>
          {isLoading ? (
            <>
              <SEO title="Loading... | Sai Akash Neela" />
              <Loader />
            </>
          ) : (
            <>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/privacy-policy" element={
                  <>
                    <SEO 
                      title="Privacy Policy | Sai Akash Neela"
                      description="Privacy policy for Sai Akash Neela's portfolio website. Learn about how we handle your data and protect your privacy."
                      canonicalUrl="/privacy-policy"
                    />
                    <PrivacyPolicy darkMode={darkMode} setDarkMode={setDarkMode} />
                  </>
                } />
                <Route path="/cookie-policy" element={
                  <>
                    <SEO 
                      title="Cookie Policy | Sai Akash Neela"
                      description="Cookie policy for Sai Akash Neela's portfolio website. Learn about how we use cookies and protect your privacy."
                      canonicalUrl="/cookie-policy"
                    />
                    <CookiePolicy darkMode={darkMode} setDarkMode={setDarkMode} />
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
