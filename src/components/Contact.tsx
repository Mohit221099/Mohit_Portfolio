import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, MapPin, Phone, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setSubmitting(false);
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-dark-600">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={container}
        >
          <h2 className="section-heading text-center mx-auto">Get In Touch</h2>
          
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div variants={item}>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <p className="text-dark-400 dark:text-gray-300 mb-8">
                I'm interested in freelance opportunities – especially challenging projects related to 
                backend development and cybersecurity. If you have a request or question, don't hesitate 
                to contact me.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-accent mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:contact@mohitkumar.dev" className="text-dark-400 dark:text-gray-300 hover:text-primary-500 dark:hover:text-accent transition-colors">
                      mohit2kumar801@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-accent mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <a href="tel:+11234567890" className="text-dark-400 dark:text-gray-300 hover:text-primary-500 dark:hover:text-accent transition-colors">
                      +91 8016804158
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-accent mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-dark-400 dark:text-gray-300">
                      Kolkata, West Bengal
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Security Note</h3>
                <div className="code-block">
                  <span className="syntax-comment">// For secure communications</span>
                  <br />
                  <span className="syntax-keyword">const</span>{' '}
                  <span className="syntax-function">secureContact</span> = () ={'>'} {' '}
                  <span className="syntax-brace">{'{'}</span>
                  <br />
                  <span className="syntax-comment">{'  // My PGP key is available at'}</span>
                  <br />
                  <span className="syntax-keyword">{'  return'}</span>{' '}
                  <span className="syntax-string">'https://keybase.io/mohitkumar'</span>
                  <span className="syntax-brace">;</span>
                  <br />
                  <span className="syntax-brace">{'}'}</span>
                  <span className="syntax-brace">;</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={item}>
              <div className="card p-8">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-300 p-4 rounded-md flex items-center"
                  >
                    <CheckCircle className="mr-2 text-green-600 dark:text-green-400" size={20} />
                    <span>Thank you! Your message has been sent successfully.</span>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-md border ${
                          errors.name ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-dark-400'
                        } bg-white dark:bg-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-accent`}
                        placeholder="Your name"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-md border ${
                          errors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-dark-400'
                        } bg-white dark:bg-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-accent`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="subject" className="block text-sm font-medium mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-dark-400 bg-white dark:bg-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-accent"
                        placeholder="Project inquiry"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-2 rounded-md border ${
                          errors.message ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-dark-400'
                        } bg-white dark:bg-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-accent`}
                        placeholder="Your message here..."
                      />
                      {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                    </div>
                    
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn btn-primary w-full flex items-center justify-center"
                    >
                      {submitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Send Message <Send size={16} className="ml-2" />
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;