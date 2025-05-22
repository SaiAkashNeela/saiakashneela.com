import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import './LayeredAnimation.css';

const LayeredAnimation = ({ darkMode }) => {
  const containerRef = useRef(null);
  const particlesRef = useRef([]);

  const codeSnippets = useMemo(() => [
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
  ], []);

  const createParticle = useCallback((x, y, isClick = false) => {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    
    // Add random rotation for more dynamic effect
    const rotation = Math.random() * 360;
    particle.style.transform = `rotate(${rotation}deg)`;
    
    containerRef.current.appendChild(particle);
    particlesRef.current.push(particle);

    // Animate particle with random duration
    const duration = isClick ? 1.5 : 2 + Math.random();
    particle.style.animation = `floatParticle ${duration}s ease-out forwards`;

    // Remove particle after animation
    setTimeout(() => {
      if (particle.parentNode === containerRef.current) {
        containerRef.current.removeChild(particle);
        particlesRef.current = particlesRef.current.filter(p => p !== particle);
      }
    }, duration * 1000);
  }, [codeSnippets]);

  useEffect(() => {
    const container = containerRef.current;
    let animationFrame;
    let lastMoveTime = 0;
    const moveInterval = 100; // Minimum time between particle creation

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastMoveTime >= moveInterval) {
        if (Math.random() > 0.7) {
          createParticle(e.clientX, e.clientY);
          lastMoveTime = now;
        }
      }
    };

    const handleClick = (e) => {
      // Create a burst of particles on click
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const distance = 30 + Math.random() * 20;
        const x = e.clientX + Math.cos(angle) * distance;
        const y = e.clientY + Math.sin(angle) * distance;
        createParticle(x, y, true);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrame);
      // Clean up particles
      particlesRef.current.forEach(particle => {
        if (particle.parentNode === container) {
          container.removeChild(particle);
        }
      });
    };
  }, [createParticle]);

  return (
    <div 
      ref={containerRef}
      className="animated-container fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default LayeredAnimation; 