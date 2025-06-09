import React, { useEffect, useRef, useState } from 'react';
import './CodeSnippets.css';

const CodeSnippets = ({ darkMode }) => {
  const containerRef = useRef(null);
  const [resizeKey, setResizeKey] = useState(0);

  const codeSnippets = [
    {
      language: 'javascript',
      code: `function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = 
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  
  return [storedValue, setValue];
}`
    },
    {
      language: 'jsx',
      code: `const Button = ({ children, variant, size, ...props }) => {
  const baseStyles = "rounded font-medium transition-all";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50"
  };
  
  const sizes = {
    sm: "py-1 px-2 text-sm",
    md: "py-2 px-4 text-base",
    lg: "py-3 px-6 text-lg"
  };
  
  const classes = \`\${baseStyles} \${variants[variant]} \${sizes[size]}\`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};`
    },
    {
      language: 'typescript',
      code: `interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

type UserState = {
  users: User[];
  loading: boolean;
  error: string | null;
};

const initialState: UserState = {
  users: [],
  loading: false,
  error: null
};

function userReducer(state = initialState, action: UserAction): UserState {
  switch (action.type) {
    case 'FETCH_USERS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_USERS_SUCCESS':
      return { ...state, loading: false, users: action.payload };
    case 'FETCH_USERS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}`
    },
    {
      language: 'css',
      code: `.glass-morphism {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

@media (prefers-color-scheme: dark) {
  .glass-morphism {
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}`
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clean up existing code blocks
    container.innerHTML = '';

    // Determine how many snippets to show based on screen size
    const isMobile = window.innerWidth < 768;
    const snippetsToShow = isMobile ? 2 : codeSnippets.length;

    // Create code blocks
    codeSnippets.slice(0, snippetsToShow).forEach((snippet, index) => {
      const codeBlock = document.createElement('div');
      codeBlock.className = `code-snippet ${darkMode ? 'dark' : 'light'} ${snippet.language}`;
      
      // Position randomly but avoid edges and overlapping content
      let top, left;
      
      if (isMobile) {
        // For mobile, position to the sides and avoid center content
        top = 10 + Math.random() * 30;
        left = index % 2 === 0 ? 5 : 70; // Alternate left and right
      } else {
        // For desktop, more random positioning
        top = 10 + Math.random() * 70;
        left = 5 + Math.random() * 65;
      }
      
      codeBlock.style.top = `${top}%`;
      codeBlock.style.left = `${left}%`;
      codeBlock.style.animationDelay = `${index * 0.5}s`;
      
      // Add language label
      const langLabel = document.createElement('div');
      langLabel.className = 'lang-label';
      langLabel.textContent = snippet.language;
      codeBlock.appendChild(langLabel);
      
      // Add code content with syntax highlighting (basic)
      const pre = document.createElement('pre');
      const code = document.createElement('code');
      code.className = `language-${snippet.language}`;
      
      // Simple syntax highlighting
      let highlightedCode = snippet.code;
      
      // Add to DOM
      code.innerHTML = highlightedCode;
      pre.appendChild(code);
      codeBlock.appendChild(pre);
      
      container.appendChild(codeBlock);
      
      // Set timeout to add visible class for animation
      setTimeout(() => {
        codeBlock.classList.add('visible');
      }, 100 + index * 300);
    });

    // Handle resize
    const handleResize = () => {
      // Re-render on resize to adjust for screen size changes
      setResizeKey(prev => prev + 1);
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      if (container) {
        container.innerHTML = '';
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [darkMode, codeSnippets, resizeKey]);

  return (
    <div ref={containerRef} className="code-snippets-container"></div>
  );
};

export default CodeSnippets; 