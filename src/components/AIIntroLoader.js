import React, { useEffect, useState, useRef } from 'react';
import './AIIntroLoader.css';

const AIIntroLoader = ({ darkMode }) => {
  const [typingComplete, setTypingComplete] = useState(false);
  const containerRef = useRef(null);
  
  // Typing animation for name and role
  useEffect(() => {
    const nameTimeout = setTimeout(() => {
      setTypingComplete(true);
    }, 1200);
    
    return () => {
      clearTimeout(nameTimeout);
    };
  }, []);
  
  // Add particle effects
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const particlesCount = 30;
    const particles = [];
    
    for (let i = 0; i < particlesCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'ai-particle';
      
      // Random positioning
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.left = `${Math.random() * 100}%`;
      
      // Random size
      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random opacity
      particle.style.opacity = Math.random() * 0.5 + 0.3;
      
      // Random animation delay
      particle.style.animationDelay = `${Math.random() * 2}s`;
      
      container.appendChild(particle);
      particles.push(particle);
    }
    
    return () => {
      particles.forEach(p => container.removeChild(p));
    };
  }, []);
  
  return (
    <div className={`ai-intro-loader ${darkMode ? 'dark' : 'light'}`} ref={containerRef}>
      <div className="ai-intro-content">
        <div className="ai-intro-main">
          <div className="ai-info-container">
            <div className="ai-typing-container">
              <span className="ai-value ai-typing ai-name">
                {typingComplete ? 'SAI AKASH NEELA' : '_'}
              </span>
            </div>
            
            <div className="ai-typing-container">
              <span className="ai-value ai-typing ai-role">
                {typingComplete ? 'DEVOPS & CLOUD INFRASTRUCTURE ENGINEER' : '_'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIIntroLoader; 