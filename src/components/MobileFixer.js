import { useEffect } from 'react';

/**
 * Component dedicated to fixing mobile styles after page load
 * This component doesn't render anything visible
 */
const MobileFixer = () => {
  // Apply direct style fixes for mobile devices
  useEffect(() => {
    const fixMobileStyles = () => {
      if (window.innerWidth <= 768) {
        console.log('MobileFixer: Applying fixes');
        
        // Directly get elements
        const chatInput = document.querySelector('.chat-input-bar');
        const chatBox = document.querySelector('.chat-box-container');
        
        // Fix chat input bar
        if (chatInput) {
          Object.assign(chatInput.style, {
            width: '90vw',
            maxWidth: '90vw',
            left: '50%',
            right: 'auto',
            transform: 'translateX(-50%)',
            position: 'fixed',
          });
        }
        
        // Fix chat box container
        if (chatBox) {
          Object.assign(chatBox.style, {
            width: '90vw',
            maxWidth: '90vw',
            left: '50%',
            right: 'auto',
            transform: 'translateX(-50%)',
            position: 'fixed',
          });
        }
      }
    };
    
    // Apply fixes immediately
    fixMobileStyles();
    
    // Apply fixes after a delay to ensure it works after page load
    const timer1 = setTimeout(fixMobileStyles, 500);
    const timer2 = setTimeout(fixMobileStyles, 1000);
    const timer3 = setTimeout(fixMobileStyles, 2000);
    
    // Apply fixes on resize
    window.addEventListener('resize', fixMobileStyles);
    
    // Add style sheet with high specificity
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @media (max-width: 768px) {
        .chat-input-bar {
          width: 90vw !important;
          max-width: 90vw !important;
          left: 50% !important;
          right: auto !important;
          transform: translateX(-50%) !important;
          position: fixed !important;
        }
        
        .chat-box-container {
          width: 90vw !important;
          max-width: 90vw !important;
          left: 50% !important;
          right: auto !important;
          transform: translateX(-50%) !important;
          position: fixed !important;
        }
        
        body, html, #root {
          overflow-x: hidden !important;
          max-width: 100vw !important;
        }
      }
    `;
    document.head.appendChild(styleSheet);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', fixMobileStyles);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      document.head.removeChild(styleSheet);
    };
  }, []);
  
  // This component doesn't render anything
  return null;
};

export default MobileFixer; 