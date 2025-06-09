import React, { useEffect, useRef, useState } from 'react';
import './DevTerminal.css';

const DevTerminal = ({ darkMode, hideTerminal }) => {
  const terminalRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const commandLines = [
    '> cd ~/saiakashneela',
    '> git status',
    '> ls -la projects/',
    '> cat skills.json',
    '> npm run portfolio',
    '> aws cloudfront create-distribution',
    '> docker-compose up -d',
    '> git push origin main',
    '> node server.js',
    '> npm run build'
  ];

  const responseLines = [
    'Now in directory: /Users/saiakash/saiakashneela',
    'On branch main\nAll files up to date',
    'react-apps/\ncloud-deployments/\nml-projects/\nbackend-apis/',
    '{\n  "frontend": ["React", "JavaScript", "CSS"],\n  "backend": ["Node.js", "AWS"],\n  "cloud": ["AWS", "Docker", "Kubernetes"]\n}',
    'Starting development server...\nCompiled successfully!',
    'Distribution created successfully\nURL: xyz.cloudfront.net',
    'Creating network...\nStarting containers...\nDone!',
    'Everything up-to-date\n3 files changed, 150 insertions(+)',
    'Server running on port 3000\nConnected to database',
    'Creating optimized production build...\nSuccess!'
  ];

  useEffect(() => {
    // Set visible to true when component mounts
    setVisible(true);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      setCurrentLine(prevLine => {
        if (prevLine < commandLines.length - 1) {
          return prevLine + 1;
        } else {
          clearInterval(interval);
          return prevLine;
        }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [visible, commandLines.length]);

  const formatResponse = (response) => {
    return response.split('\n').map((line, i) => (
      <div key={i} className="response-line-item">{line}</div>
    ));
  };

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      if (hideTerminal) hideTerminal();
    }, 500); // Allow fade-out animation to play
  };

  return (
    <div 
      ref={terminalRef} 
      className={`dev-terminal ${darkMode ? 'dark' : 'light'} ${visible ? 'visible' : ''} ${isMobile ? 'mobile' : ''}`}
    >
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="terminal-button close" onClick={handleClose}></span>
          <span className="terminal-button minimize"></span>
          <span className="terminal-button maximize"></span>
        </div>
        <div className="terminal-title">~/saiakashneela</div>
      </div>
      <div className="terminal-body">
        {commandLines.slice(0, currentLine + 1).map((cmd, index) => (
          <div key={`cmd-${index}`} className="terminal-line">
            <div className="command-line typing-effect">
              {cmd}
            </div>
            {index < currentLine && (
              <div className="response-line">
                {formatResponse(responseLines[index])}
              </div>
            )}
          </div>
        ))}
        <div className="terminal-cursor"></div>
      </div>
      <div className="terminal-close-button" onClick={handleClose}>
        ×
      </div>
    </div>
  );
};

export default DevTerminal; 