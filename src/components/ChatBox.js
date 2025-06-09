import React, { useState, useRef, useEffect } from 'react';
import './ChatBox.css';
import { crawlSiteContent } from '../utils/contentCrawler';
import { getChatCompletions } from '../services/aiService';

const ChatBox = ({ darkMode, isMobile: propIsMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      role: 'assistant', 
      content: 'Hi there! I can answer questions about Sai Akash Neela\'s portfolio, skills, projects, and experience. How can I help you today?' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [siteContent, setSiteContent] = useState('');
  const [contentLoaded, setContentLoaded] = useState(false);
  const [isCrawling, setIsCrawling] = useState(true);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);
  const messagesEndRef = useRef(null);
  
  // Use isMobile from props if available
  useEffect(() => {
    if (propIsMobile !== undefined) {
      setIsMobile(propIsMobile);
    }
  }, [propIsMobile]);

  // Check if device is mobile - make sure this runs on EVERY render
  useEffect(() => {
    // Only run this if propIsMobile is not provided
    if (propIsMobile === undefined) {
      const checkMobile = () => {
        setIsMobile(window.innerWidth <= 768);
      };
      
      // Check immediately
      checkMobile();
      
      // Setup event listener for window resize
      window.addEventListener('resize', checkMobile);
      
      // Cleanup function
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, [propIsMobile]);

  // Direct DOM manipulation for mobile fix
  useEffect(() => {
    // Function to apply fixes directly to DOM elements
    const applyMobileFixes = () => {
      if (window.innerWidth <= 768) {
        // Find chat elements
        const chatInputBar = document.querySelector('.chat-input-bar');
        const chatBoxContainer = document.querySelector('.chat-box-container');
        
        // Apply fixes to chat input bar
        if (chatInputBar) {
          chatInputBar.style.width = '90vw';
          chatInputBar.style.maxWidth = '90vw';
          chatInputBar.style.left = '50%';
          chatInputBar.style.right = 'auto';
          chatInputBar.style.transform = 'translateX(-50%)';
        }
        
        // Apply fixes to chat box container
        if (chatBoxContainer) {
          chatBoxContainer.style.width = '90vw';
          chatBoxContainer.style.maxWidth = '90vw';
          chatBoxContainer.style.left = '50%';
          chatBoxContainer.style.right = 'auto';
          chatBoxContainer.style.transform = 'translateX(-50%)';
        }
      }
    };
    
    // Apply fixes immediately
    applyMobileFixes();
    
    // Also apply fixes whenever the window is resized
    window.addEventListener('resize', applyMobileFixes);
    
    // Apply fixes again after a delay to ensure they stick
    const fixTimer = setTimeout(applyMobileFixes, 1000);
    
    return () => {
      window.removeEventListener('resize', applyMobileFixes);
      clearTimeout(fixTimer);
    };
  }, []);

  // Crawl the site content when the component mounts
  useEffect(() => {
    const crawlContent = () => {
      try {
        setIsCrawling(true);
        const content = crawlSiteContent();
        setSiteContent(content.rawContent);
        setContentLoaded(true);
      } catch (error) {
        // Set some fallback content
        setSiteContent('Sai Akash Neela is a DevOps & Cloud/Web Infrastructure Engineer with expertise in React, Node.js, AWS, Docker, and Kubernetes.');
        setContentLoaded(true);
      } finally {
        setIsCrawling(false);
      }
    };
    
    // Wait for the DOM to fully load
    if (document.readyState === 'complete') {
      crawlContent();
    } else {
      window.addEventListener('load', crawlContent);
      return () => window.removeEventListener('load', crawlContent);
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const createSystemPrompt = () => {
    return `You are an AI assistant for Sai Akash Neela's portfolio website.
Your purpose is to answer questions specifically about Sai Akash Neela, his skills, experience, projects, and other information available on this website.

Here is the content extracted from the website that you should use to answer questions:

${siteContent}

SITE ARCHITECTURE:
This portfolio website is built with React and deployed on AWS Amplify. It features a modern design with dark/light mode toggle, interactive components, and this AI chat interface. The site showcases Sai's projects, skills, and professional experience in web development, DevOps, and cloud infrastructure.

TECHNICAL DETAILS:
- Frontend: React.js with modern hooks and functional components
- Styling: CSS with responsive design for all device sizes
- Deployment: AWS Amplify with CI/CD pipeline
- AI Integration: OpenRouter API with Mistral 7B Instruct model
- Features: Interactive terminal, particle animations, responsive design

INSTRUCTIONS:
1. ALWAYS respond in English only, regardless of the language of the question.
2. You MUST be an expert on Sai Akash Neela's portfolio, skills, projects, and experience.
3. Use ONLY the information provided above to answer questions.
4. If the information to answer a question is not in the provided content, respond with: "I don't have specific information about that in Sai Akash's portfolio, but I'd be happy to tell you about [suggest related topic from available info]."
5. If asked about topics unrelated to Sai Akash Neela or this website, politely decline with: "I'm sorry, I can only answer questions related to Sai Akash Neela's portfolio website."
6. Be concise yet engaging in your responses.
7. Don't mention that you're using "extracted content" in your responses.
8. On mobile devices, keep responses shorter and more to the point.
9. DO NOT use ANY emojis or emoticons in your responses.
10. Maintain a conversational yet professional tone.
11. Use varied sentence structures and natural language patterns.
12. Keep responses clear and straightforward without excessive formality.
13. NEVER respond in any language other than English.
14. You are powered by Mistral 7B Instruct model through OpenRouter API.`;
  };

  // Function to remove emojis from text
  const removeEmojis = (text) => {
    // Unicode ranges for emojis - without using problematic ranges
    const emojiPattern = /(?:[\u2600-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD00-\uDDFF])/g;
    
    // Pattern for common emoticons - properly escaped
    // eslint-disable-next-line no-useless-escape
    const emoticonPattern = /[:;=][-']?[()\[\]DPdp]/g;
    
    // Replace emojis and emoticons with empty string
    return text.replace(emojiPattern, '').replace(emoticonPattern, '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Open chat if not already open
    if (!isOpen) {
      setIsOpen(true);
    }
    
    // Add user message
    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      // Wait for content to be loaded before sending the API request
      if (!contentLoaded) {
        await new Promise(resolve => {
          const checkContent = setInterval(() => {
            if (contentLoaded) {
              clearInterval(checkContent);
              resolve();
            }
          }, 100);
        });
      }
      
      // Prepare messages array with system prompt
      const messagePayload = [
        {
          role: 'system',
          content: createSystemPrompt()
        },
        ...messages,
        userMessage
      ];
      
      // Call OpenRouter API through our service
      const data = await getChatCompletions(messagePayload, isMobile);
      
      if (data.choices && data.choices[0] && data.choices[0].message) {
        // Additional emoji cleanup at the component level
        let responseContent = data.choices[0].message.content;
        
        // Simple check for emoticons
        if (responseContent.includes(':)') || 
            responseContent.includes(':D') || 
            responseContent.includes(';)') ||
            responseContent.includes(':(')) {
          responseContent = removeEmojis(responseContent);
        }
        
        // Add the cleaned message to the state
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: responseContent
        }]);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again later.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  // For debugging purposes
  useEffect(() => {
    // No debugging in production
  }, [isMobile]);

  return (
    <>
      {/* Always show the input bar at the bottom */}
      <form 
        className={`chat-input-bar ${darkMode ? 'dark' : 'light'} ${isMobile ? 'mobile' : ''}`} 
        onSubmit={handleSubmit}
        style={isMobile ? {
          width: '90vw', 
          maxWidth: '90vw',
          left: '50%',
          transform: 'translateX(-50%)',
          right: 'auto'
        } : {}}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={isCrawling ? "Learning about Sai Akash Neela..." : "Ask Sai Akash Neela?"}
          disabled={isLoading || isCrawling}
        />
        <button type="submit" disabled={isLoading || !input.trim() || isCrawling}>
          {isCrawling ? (
            <div className="mini-loader"></div>
          ) : (
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          )}
        </button>
      </form>
      
      {/* Chat container for open state */}
      {isOpen && (
        <div 
          className={`chat-box-container ${darkMode ? 'dark' : 'light'} ${isMobile ? 'mobile' : ''}`}
          style={isMobile ? {
            width: '90vw', 
            maxWidth: '90vw',
            left: '50%',
            transform: 'translateX(-50%)',
            right: 'auto'
          } : {}}
        >
          <div className="chat-header">
            <div className="chat-title">
              <span className="chat-title-text">Chat with SAN's AI</span>
            </div>
            <button 
              className="chat-close-button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>
          
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`chat-message ${message.role === 'assistant' ? 'assistant' : 'user'} ${isMobile ? 'mobile' : ''}`}
              >
                <div className="message-content">{message.content}</div>
              </div>
            ))}
            {isLoading && (
              <div className="chat-message assistant">
                <div className="message-content typing-indicator">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox; 