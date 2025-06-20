import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import Poppins font
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

// Import Fira Code font for code blocks and terminal
import '@fontsource/fira-code/400.css';
import '@fontsource/fira-code/500.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Send web vitals results to Google Analytics
const sendToAnalytics = ({ name, delta, id, value }) => {
  // Assumes Google Analytics has been loaded
  if (window.gtag) {
    window.gtag('event', name, {
      event_category: 'Web Vitals',
      event_label: id,
      value: Math.round(name === 'CLS' ? delta * 1000 : delta), // Convert seconds to milliseconds
      non_interaction: true, // Avoid affecting bounce rate
      metric_id: id,
      metric_value: value,
      metric_delta: delta,
    });
  }
};

reportWebVitals(sendToAnalytics);
