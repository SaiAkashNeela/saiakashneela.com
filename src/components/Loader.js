import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [typeText, setTypeText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  // Detect dark mode from document class
  const isDarkMode = document.documentElement.classList.contains('dark');

  const loadingSteps = [
    { command: "ssh connect saiakashneela.com", response: "Initiating secure connection..." },
    { command: "verify_credentials", response: "Credentials verified ✓" },
    { command: "load_portfolio --profile=SaiAkash", response: "Loading portfolio assets..." },
    { command: "initialize_frontend", response: "Building interface components..." },
    { command: "start_experience", response: "Portfolio ready. Welcome!" }
  ];

  useEffect(() => {
    // Disable scrolling during loader animation
    document.body.style.overflow = 'hidden';
    
    // Typing effect for commands
    let currentText = '';
    let currentCommand = loadingSteps[currentStep].command;
    let charIndex = 0;
    let typingTimer;
    
    const typeNextChar = () => {
      if (charIndex < currentCommand.length) {
        currentText += currentCommand.charAt(charIndex);
        setTypeText(currentText);
        charIndex++;
        
        // Random typing speed for realistic effect
        const randomDelay = Math.floor(Math.random() * 50) + 30;
        typingTimer = setTimeout(typeNextChar, randomDelay);
      } else {
        // Command typing finished, wait and show response
        setTimeout(() => {
          if (currentStep < loadingSteps.length - 1) {
            setCurrentStep(currentStep + 1);
          }
        }, 700);
      }
    };
    
    // Start typing
    typeNextChar();
    
    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    
    return () => {
      // Re-enable scrolling when component unmounts
      document.body.style.overflow = 'visible';
      clearTimeout(typingTimer);
      clearInterval(cursorInterval);
    };
  }, [currentStep]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed inset-0 flex items-center justify-center z-50 font-mono ${isDarkMode ? 'bg-primary text-secondary' : 'bg-slate-light text-gray-800'}`}
    >
      <div className={`relative w-full max-w-2xl px-4 py-8 mx-4 rounded-lg shadow-xl ${isDarkMode ? 'bg-navy-dark border-gray-700' : 'bg-white border-gray-300'} border`}>
        <div className={`flex items-center mb-4 pb-2 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
          <div className="flex space-x-2 mr-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 text-center text-gray-400 text-sm">saiakashneela@portfolio ~ </div>
        </div>
        
        <div className="h-64 overflow-y-auto terminal-text">
          {loadingSteps.slice(0, currentStep + 1).map((step, index) => (
            <div key={index} className="mb-4">
              <div className="flex">
                <span className={`${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>$ </span>
                <span className="ml-2">
                  {index === currentStep ? typeText : step.command}
                  {index === currentStep && showCursor && <span className="cursor"></span>}
                </span>
              </div>
              
              {(index < currentStep || (index === currentStep && typeText === step.command)) && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className={`ml-4 mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                >
                  {step.response}
                  
                  {index === loadingSteps.length - 1 && (
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className={`h-1 mt-4 rounded-full ${isDarkMode ? 'bg-secondary' : 'bg-secondary-light'}`}
                    />
                  )}
                </motion.div>
              )}
            </div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
          className={`mt-4 text-center text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}
        >
          DevOps & Cloud/Web Infrastructure Engineer
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader; 