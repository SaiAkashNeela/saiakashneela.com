import React, { useEffect, useRef } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = ({ darkMode }) => {
  const backgroundRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    const background = backgroundRef.current;
    const particlesContainer = particlesRef.current;

    // Create particles
    const createParticles = () => {
      const particles = [];
      const particleCount = window.innerWidth < 768 ? 30 : 50;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Set random properties
        const size = Math.random() * 4 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        
        // Set random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Set random animation
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        particlesContainer.appendChild(particle);
        particles.push(particle);
      }

      return particles;
    };

    // Add subtle parallax effect on mouse move
    const handleMouseMove = (e) => {
      const moveX = (e.clientX / window.innerWidth) * 15;
      const moveY = (e.clientY / window.innerHeight) * 15;
      
      particlesContainer.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
    };

    const particles = createParticles();
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Handle resize
    const handleResize = () => {
      // Clear and recreate particles on resize
      while (particlesContainer.firstChild) {
        particlesContainer.removeChild(particlesContainer.firstChild);
      }
      createParticles();
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      particles.forEach(particle => {
        if (particle.parentNode === particlesContainer) {
          particlesContainer.removeChild(particle);
        }
      });
    };
  }, []);

  return (
    <div ref={backgroundRef} className={`animated-background ${darkMode ? 'dark' : 'light'}`}>
      <div ref={particlesRef} className="particles-container" />
      <div className="gradient-overlay" />
    </div>
  );
};

export default AnimatedBackground; 