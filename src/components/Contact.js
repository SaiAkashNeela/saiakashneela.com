import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Contact = () => {
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

    const body = encodeURIComponent(
      `Email: ${formData.email}\n\n${formData.message}`
    );
    const mailtoLink = `mailto:hello@saiakashneela.com?body=${body}`;
    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ email: '', message: '' });
      setTimeout(() => {
        setSubmitted(false);
      }, 15000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="h-8 w-8 text-primary" />,
      title: 'Email',
      content: 'hello@saiakashneela.com',
      link: 'mailto:hello@saiakashneela.com',
    },
    {
      icon: <FaPhone className="h-8 w-8 text-primary" />,
      title: 'Phone',
      content: '+44 7767934364',
      link: 'tel:+447767934364',
    },
    {
      icon: <FaMapMarkerAlt className="h-8 w-8 text-primary" />,
      title: 'Location',
      content: 'United Kingdom',
      link: 'https://maps.google.com/?q=St+Albans,+United+Kingdom',
    },
  ];

  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <p className="text-muted-foreground">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <Card key={info.title}>
                  <CardHeader className="flex flex-row items-center gap-4">
                    {info.icon}
                    <CardTitle>{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a href={info.link} className="text-muted-foreground hover:text-foreground">{info.content}</a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center">
                    <FaPaperPlane className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Email Client Opened!</h3>
                    <p className="text-muted-foreground">Your email app has been launched. Please send the email to complete your message.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="sr-only">Email</label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Your Email"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="sr-only">Message</label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        placeholder="Your Message"
                      />
                    </div>
                    <Button type="submit" disabled={isSubmitting} className="w-full">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
