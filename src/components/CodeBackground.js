import React, { useEffect, useState } from 'react';

const CodeBackground = ({ darkMode }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [codeSnippets] = useState([
    `const dev = {
  name: "Sai Akash",
  role: "DevOps Engineer",
  skills: ["AWS", "Docker", "Kubernetes"]
};`,
    `async function deploy() {
  await build();
  await test();
  await deploy();
}`,
    `class Infrastructure {
  constructor() {
    this.cloud = "AWS";
    this.containers = "Docker";
  }
}`,
    `// CI/CD Pipeline
pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
  }
}`,
    `const kubernetes = {
  pods: "running",
  services: "exposed",
  deployments: "scaled"
};`
  ]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="fixed pointer-events-none z-50"
      style={{
        left: position.x + 20,
        top: position.y + 20,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div 
        className={`${darkMode ? 'bg-navy-light' : 'bg-slate-100'} p-4 rounded-lg shadow-lg opacity-0 hover:opacity-100 transition-opacity duration-300`}
        style={{
          maxWidth: '300px',
          fontFamily: 'Fira Mono, monospace',
          fontSize: '0.8rem',
          whiteSpace: 'pre-wrap',
          color: darkMode ? '#00ff99' : '#0066cc',
        }}
      >
        {codeSnippets[Math.floor(Math.random() * codeSnippets.length)]}
      </div>
    </div>
  );
};

export default CodeBackground; 