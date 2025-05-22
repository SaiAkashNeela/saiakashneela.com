import React, { useEffect, useRef } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = ({ darkMode }) => {
  const backgroundRef = useRef(null);
  const hoverLayerRef = useRef(null);

  useEffect(() => {
    const background = backgroundRef.current;
    const hoverLayer = hoverLayerRef.current;

    // Create code particles
    const createParticles = () => {
      const particles = [];
      const codeSnippets = [
        'const dev = {',
        'async function deploy()',
        'class Infrastructure',
        'pipeline {',
        'kubernetes: {',
        'docker-compose',
        'terraform {',
        'aws: {',
        'git commit',
        'npm install'
      ];

      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'code-particle';
        particle.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 8}s`;
        background.appendChild(particle);
        particles.push(particle);
      }

      return particles;
    };

    const particles = createParticles();

    // Handle mouse movement for hover effect
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = background.getBoundingClientRect();
      
      const x = ((clientX - left) / width) * 100;
      const y = ((clientY - top) / height) * 100;
      
      hoverLayer.style.setProperty('--mouse-x', `${x}%`);
      hoverLayer.style.setProperty('--mouse-y', `${y}%`);
    };

    // Add hover effect to interactive elements
    const addHoverEffect = () => {
      const interactiveElements = document.querySelectorAll('.interactive-element');
      interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
          hoverLayer.style.opacity = '1';
        });
        element.addEventListener('mouseleave', () => {
          hoverLayer.style.opacity = '0';
        });
      });
    };

    // Update particle colors based on dark mode
    const updateParticleColors = () => {
      particles.forEach(particle => {
        particle.style.color = darkMode 
          ? 'rgba(0, 255, 153, 0.15)'
          : 'rgba(0, 255, 153, 0.1)';
        particle.style.textShadow = darkMode
          ? '0 0 8px rgba(0, 255, 153, 0.3)'
          : '0 0 5px rgba(0, 255, 153, 0.2)';
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    addHoverEffect();
    updateParticleColors();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      particles.forEach(particle => {
        if (particle.parentNode === background) {
          background.removeChild(particle);
        }
      });
    };
  }, [darkMode]); // Add darkMode to dependencies

  return (
    <div ref={backgroundRef} className={`animated-background ${darkMode ? 'dark' : 'light'}`}>
      <div ref={hoverLayerRef} className="hover-layer" />
    </div>
  );
};

export default AnimatedBackground; 