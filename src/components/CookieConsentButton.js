import React from 'react';
import { FaCookieBite } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CookieConsentButton = ({ darkMode }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/cookie-policy');
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-4 left-4 z-50 p-3 rounded-full shadow-lg transition-transform hover:scale-110 focus:outline-none ${
        darkMode ? 'bg-navy-light text-secondary' : 'bg-white text-secondary-light'
      }`}
      aria-label="Manage Cookie Preferences"
      title="Manage Cookie Preferences"
    >
      <FaCookieBite size={20} />
    </button>
  );
};

export default CookieConsentButton; 