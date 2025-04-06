import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Prepare email content - only include body, not subject
    const body = encodeURIComponent(
      `Email: ${formData.email}\n\n${formData.message}`
    );
    
    // Create mailto link without subject
    const mailtoLink = `mailto:hello@saiakashneela.com?body=${body}`;
    
    // Open default mail client with prefilled data
    window.location.href = mailtoLink;
    
    // Show success message after a short delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ email: '', message: '' });
      
      // Reset submitted state after 15 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 15000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'hello@saiakashneela.com',
      link: 'mailto:hello@saiakashneela.com',
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      content: '+44 7920444964',
      link: 'tel:+447920444964',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      content: 'St Albans, United Kingdom',
      link: 'https://maps.google.com/?q=St+Albans,+United+Kingdom',
    },
  ];

  return (
    <section id="contact" className={`py-16 md:py-24 ${darkMode ? 'bg-navy' : 'bg-slate-50'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-2xl md:text-3xl font-bold mb-2 ${darkMode ? 'text-secondary' : 'text-secondary-light'}`}>Contact</h2>
          <h3 className={`text-3xl md:text-4xl font-bold mb-10 ${darkMode ? 'text-gray-200' : 'text-slate-800'}`}>Get In Touch</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1"
          >
            <div className="space-y-6 mb-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                  className={`flex items-start p-4 rounded-lg ${darkMode ? 'bg-navy-light' : 'bg-white'} shadow-md hover-lift`}
                >
                  <div className={`p-3 rounded-full ${darkMode ? 'bg-primary' : 'bg-slate-100'} mr-4`}>
                    <span className={darkMode ? 'text-secondary' : 'text-secondary-light'}>{info.icon}</span>
                  </div>
                  <div>
                    <h4 className={`font-medium mb-1 ${darkMode ? 'text-gray-200' : 'text-slate-800'}`}>{info.title}</h4>
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${darkMode ? 'text-gray-300 hover:text-secondary' : 'text-slate-700 hover:text-secondary-light'} hover-glow transition-colors duration-300`}
                    >
                      {info.content}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className={`p-6 rounded-lg ${darkMode ? 'bg-navy-light' : 'bg-white'} shadow-md`}
            >
              <h4 className={`text-xl font-bold mb-4 ${darkMode ? 'text-gray-200' : 'text-slate-800'}`}>Availability</h4>
              <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>
                I'm currently open to:
              </p>
              <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>
                <li className="flex items-start">
                  <span className={`text-xl mr-2 mt-0.5 ${darkMode ? 'text-secondary' : 'text-secondary-light'}`}>
                    ›
                  </span>
                  Full-time DevOps opportunities
                </li>
                <li className="flex items-start">
                  <span className={`text-xl mr-2 mt-0.5 ${darkMode ? 'text-secondary' : 'text-secondary-light'}`}>
                    ›
                  </span>
                  Freelance development projects
                </li>
                <li className="flex items-start">
                  <span className={`text-xl mr-2 mt-0.5 ${darkMode ? 'text-secondary' : 'text-secondary-light'}`}>
                    ›
                  </span>
                  Technical consulting services
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2"
          >
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-navy-light' : 'bg-white'} shadow-md ${darkMode ? 'shadow-slate-900/30' : 'shadow-slate-200/60'}`}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${darkMode ? 'bg-secondary bg-opacity-20' : 'bg-secondary-light bg-opacity-20'} mb-4`}>
                    <FaPaperPlane className={`w-6 h-6 ${darkMode ? 'text-secondary' : 'text-secondary-light'}`} />
                  </div>
                  <h4 className={`text-xl font-bold mb-2 ${darkMode ? 'text-gray-200' : 'text-slate-800'}`}>Email Client Opened!</h4>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>
                    Your email app has been launched. Please send the email to complete your message.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="email" className={`block mb-1 ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full p-3 rounded-md ${
                        darkMode 
                          ? 'bg-primary border-gray-700 text-gray-200 focus:border-secondary' 
                          : 'bg-slate-100 border-gray-300 text-slate-800 focus:border-secondary-light'
                      } border focus:outline-none transition-colors duration-300`}
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className={`block mb-1 ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className={`w-full p-3 rounded-md ${
                        darkMode 
                          ? 'bg-primary border-gray-700 text-gray-200 focus:border-secondary' 
                          : 'bg-slate-100 border-gray-300 text-slate-800 focus:border-secondary-light'
                      } border focus:outline-none transition-colors duration-300`}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary ${darkMode ? '' : 'btn-primary-light'} px-6 py-3 rounded flex items-center justify-center hover-lift w-full md:w-auto ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <FaPaperPlane className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 