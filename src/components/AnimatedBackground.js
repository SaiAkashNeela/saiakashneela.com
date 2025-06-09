import React, { useEffect, useRef } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = ({ darkMode }) => {
  const backgroundRef = useRef(null);
  const hoverLayerRef = useRef(null);
  const gridLayerRef = useRef(null);

  useEffect(() => {
    const background = backgroundRef.current;
    const hoverLayer = hoverLayerRef.current;
    const gridLayer = gridLayerRef.current;

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
        'npm install',
        'for(let i=0; i<10; i++)',
        'const [state, setState]',
        'useEffect(() => {',
        'export default',
        'npm run build',
        'git push origin',
        'return (',
        '<div className=',
        'tailwind.config.js',
        '() => {}'
      ];

      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'code-particle';
        particle.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.fontSize = `${Math.max(10, Math.random() * 14)}px`;
        particle.style.animationDelay = `${Math.random() * 8}s`;
        particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
        background.appendChild(particle);
        particles.push(particle);
      }

      return particles;
    };

    // Create grid pattern
    const createGrid = () => {
      const gridSize = 50; // Size of each grid cell in pixels
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      const numRows = Math.ceil(viewportHeight / gridSize);
      const numCols = Math.ceil(viewportWidth / gridSize);
      
      for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
          const dot = document.createElement('div');
          dot.className = 'grid-dot';
          dot.style.top = `${row * gridSize}px`;
          dot.style.left = `${col * gridSize}px`;
          gridLayer.appendChild(dot);
          
          if (Math.random() > 0.97) {
            const pulse = document.createElement('div');
            pulse.className = 'grid-pulse';
            pulse.style.top = `${row * gridSize}px`;
            pulse.style.left = `${col * gridSize}px`;
            pulse.style.animationDelay = `${Math.random() * 5}s`;
            gridLayer.appendChild(pulse);
          }
        }
      }
    };

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
      const particles = document.querySelectorAll('.code-particle');
      particles.forEach(particle => {
        particle.style.color = darkMode 
          ? 'rgba(0, 255, 153, 0.15)'
          : 'rgba(0, 255, 153, 0.1)';
        particle.style.textShadow = darkMode
          ? '0 0 8px rgba(0, 255, 153, 0.3)'
          : '0 0 5px rgba(0, 255, 153, 0.2)';
      });
      
      const gridDots = document.querySelectorAll('.grid-dot');
      gridDots.forEach(dot => {
        dot.style.backgroundColor = darkMode
          ? 'rgba(0, 255, 153, 0.15)'
          : 'rgba(0, 255, 153, 0.1)';
      });
      
      const gridPulses = document.querySelectorAll('.grid-pulse');
      gridPulses.forEach(pulse => {
        pulse.style.backgroundColor = darkMode
          ? 'rgba(0, 255, 153, 0.15)'
          : 'rgba(0, 255, 153, 0.1)';
      });
    };

    const particles = createParticles();
    createGrid();
    
    window.addEventListener('mousemove', handleMouseMove);
    addHoverEffect();
    updateParticleColors();
    
    // Handle resize
    const handleResize = () => {
      // Clear and recreate grid on resize
      while (gridLayer.firstChild) {
        gridLayer.removeChild(gridLayer.firstChild);
      }
      createGrid();
      updateParticleColors();
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      particles.forEach(particle => {
        if (particle.parentNode === background) {
          background.removeChild(particle);
        }
      });
      while (gridLayer.firstChild) {
        gridLayer.removeChild(gridLayer.firstChild);
      }
    };
  }, [darkMode]); // Add darkMode to dependencies

  return (
    <div ref={backgroundRef} className={`animated-background ${darkMode ? 'dark' : 'light'}`}>
      <div ref={gridLayerRef} className="grid-layer" />
      <div className="circuit-lines" />
      <div ref={hoverLayerRef} className="hover-layer" />
    </div>
  );
};

export default AnimatedBackground; 