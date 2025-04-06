import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    // Simulating loading time for the intro animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  // Homepage component
  const HomePage = () => (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="min-h-screen">
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Publications darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </div>
    </>
  );

  return (
    <Router>
      <div className={`App transition-colors duration-300 ${darkMode ? 'dark' : 'light'}`}>
        {loading ? (
          <Loader />
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy-policy" element={
              <>
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                <PrivacyPolicy darkMode={darkMode} />
                <Footer darkMode={darkMode} />
              </>
            } />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
