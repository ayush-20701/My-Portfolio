import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, User, MessageSquare, MapPin, Phone } from 'lucide-react';

const Contact = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // TODO: Replace with your actual backend endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  // Contact information
  const contactInfo = {
    email: 'ayushkr20701@gmail.com',
    linkedin: 'https://linkedin.com/in/ayush20701',
    github: 'https://github.com/ayush-20701',
    location: 'Jamshedpur, India',
    phone: '+1 (555) 123-4567' // Optional
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: `mailto:${contactInfo.email}`,
      value: contactInfo.email,
      color: '#da7422'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: contactInfo.linkedin,
      value: 'Connect on LinkedIn',
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: contactInfo.github,
      value: 'View GitHub Profile',
      color: isDarkMode ? '#f9f6f2' : '#000000'
    }
  ];

  return (
    <section 
      id="contact" 
      className="min-h-screen transition-all duration-300"
      style={{
        backgroundColor: isDarkMode ? '#1c1c1c' : '#f9f6f2'
      }}
    >
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: isDarkMode ? '#f9f6f2' : '#000000' }}
          >
            Contact <span style={{ color: '#da7422' }}>Me</span>
          </h2>
          <p 
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: isDarkMode ? '#e8e4df' : '#4e4e4e' }}
          >
            Let's discuss your next project or collaboration opportunity
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 
                  className="text-2xl font-bold mb-6"
                  style={{ color: isDarkMode ? '#f9f6f2' : '#000000' }}
                >
                  Get In Touch
                </h3>
                <p 
                  className="text-lg mb-8"
                  style={{ color: isDarkMode ? '#e8e4df' : '#4e4e4e' }}
                >
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you're a company looking to hire, or you're looking to collaborate, 
                  I'd love to hear from you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target={link.name !== 'Email' ? '_blank' : undefined}
                    rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-105 group"
                    style={{
                      backgroundColor: isDarkMode ? '#4e4e4e' : '#e8e4df',
                      border: `2px solid ${isDarkMode ? '#4e4e4e' : '#e8e4df'}`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#da7422';
                      e.currentTarget.style.backgroundColor = isDarkMode ? '#2a2a2a' : '#f5f5f5';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = isDarkMode ? '#4e4e4e' : '#e8e4df';
                      e.currentTarget.style.backgroundColor = isDarkMode ? '#4e4e4e' : '#e8e4df';
                    }}
                  >
                    <div 
                      className="p-3 rounded-lg transition-colors duration-300"
                      style={{ backgroundColor: link.color }}
                    >
                      <link.icon size={20} style={{ color: isDarkMode ? '#000000' : '#f9f6f2' }} />
                    </div>
                    <div>
                      <h4 
                        className="font-semibold"
                        style={{ color: isDarkMode ? '#f9f6f2' : '#000000' }}
                      >
                        {link.name}
                      </h4>
                      <p 
                        className="text-sm"
                        style={{ color: isDarkMode ? '#e8e4df' : '#4e4e4e' }}
                      >
                        {link.value}
                      </p>
                    </div>
                  </a>
                ))}

                {/* Additional Info */}
                <div 
                  className="p-4 rounded-xl"
                  style={{
                    backgroundColor: isDarkMode ? '#4e4e4e' : '#e8e4df'
                  }}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div 
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: '#da7422' }}
                    >
                      <MapPin size={16} style={{ color: '#f9f6f2' }} />
                    </div>
                    <span 
                      className="font-medium"
                      style={{ color: isDarkMode ? '#f9f6f2' : '#000000' }}
                    >
                      Location
                    </span>
                  </div>
                  <p 
                    className="text-sm ml-12"
                    style={{ color: isDarkMode ? '#e8e4df' : '#4e4e4e' }}
                  >
                    {contactInfo.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div 
              className="p-8 rounded-2xl border-2 transition-all duration-300"
              style={{
                backgroundColor: isDarkMode ? '#1c1c1c' : '#f9f6f2',
                borderColor: isDarkMode ? '#4e4e4e' : '#e8e4df'
              }}
            >
              <h3 
                className="text-2xl font-bold mb-6"
                style={{ color: isDarkMode ? '#f9f6f2' : '#000000' }}
              >
                Send Message (Under development)
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label 
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                    style={{ color: isDarkMode ? '#f9f6f2' : '#000000' }}
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <User 
                      size={18} 
                      className="absolute left-3 top-1/2 transform -translate-y-1/2"
                      style={{ color: isDarkMode ? '#e8e4df' : '#4e4e4e' }}
                    />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:scale-105"
                      style={{
                        backgroundColor: isDarkMode ? '#4e4e4e' : '#ffffff',
                        borderColor: isDarkMode ? '#4e4e4e' : '#e8e4df',
                        color: isDarkMode ? '#f9f6f2' : '#000000'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#da7422';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = isDarkMode ? '#4e4e4e' : '#e8e4df';
                      }}
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label 
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                    style={{ color: isDarkMode ? '#f9f6f2' : '#000000' }}
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail 
                      size={18} 
                      className="absolute left-3 top-1/2 transform -translate-y-1/2"
                      style={{ color: isDarkMode ? '#e8e4df' : '#4e4e4e' }}
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:scale-105"
                      style={{
                        backgroundColor: isDarkMode ? '#4e4e4e' : '#ffffff',
                        borderColor: isDarkMode ? '#4e4e4e' : '#e8e4df',
                        color: isDarkMode ? '#f9f6f2' : '#000000'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#da7422';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = isDarkMode ? '#4e4e4e' : '#e8e4df';
                      }}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div>
                  <label 
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                    style={{ color: isDarkMode ? '#f9f6f2' : '#000000' }}
                  >
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare 
                      size={18} 
                      className="absolute left-3 top-4"
                      style={{ color: isDarkMode ? '#e8e4df' : '#4e4e4e' }}
                    />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:scale-105 resize-none"
                      style={{
                        backgroundColor: isDarkMode ? '#4e4e4e' : '#ffffff',
                        borderColor: isDarkMode ? '#4e4e4e' : '#e8e4df',
                        color: isDarkMode ? '#f9f6f2' : '#000000'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#da7422';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = isDarkMode ? '#4e4e4e' : '#e8e4df';
                      }}
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-lg font-medium text-lg transition-all duration-200 hover:scale-105 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: '#da7422',
                    color: '#f9f6f2'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.target.style.backgroundColor = '#c96820';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.target.style.backgroundColor = '#da7422';
                    }
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div 
                    className="p-4 rounded-lg text-center font-medium"
                    style={{
                      backgroundColor: '#10b981',
                      color: '#ffffff'
                    }}
                  >
                    ✅ Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div 
                    className="p-4 rounded-lg text-center font-medium"
                    style={{
                      backgroundColor: '#ef4444',
                      color: '#ffffff'
                    }}
                  >
                    ❌ Failed to send message. Please try again or contact me directly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer 
        className="border-t-2 py-6"
        style={{
          borderColor: isDarkMode ? '#4e4e4e' : '#e8e4df'
        }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p 
              className="text-sm font-medium"
              style={{ color: isDarkMode ? '#e8e4df' : '#4e4e4e' }}
            >
              This app is designed and developed by{' '}
              <span style={{ color: '#da7422' }}>Ayush</span>{' '}
              <span className="inline-block" style={{ color: isDarkMode ? '#e8e4df' : '#4e4e4e' }}>
                © {new Date().getFullYear()}
              </span>
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;