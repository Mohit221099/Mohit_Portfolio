import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-dark-500 py-8 border-t border-gray-200 dark:border-dark-400">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start space-x-6">
              <a 
                href="https://github.com/Mohit221099" 
                className="text-dark-400 hover:text-primary-500 dark:text-gray-400 dark:hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="text-dark-400 hover:text-primary-500 dark:text-gray-400 dark:hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="text-dark-400 hover:text-primary-500 dark:text-gray-400 dark:hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:contact@mohitkumar.dev" 
                className="text-dark-400 hover:text-primary-500 dark:text-gray-400 dark:hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-dark-400 dark:text-gray-400 text-sm">
              &copy; {currentYear} Mohit Kumar. All rights reserved.
            </p>
            <p className="text-dark-400 dark:text-gray-400 text-xs mt-1">
              Backend Developer & Cybersecurity Expert
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;