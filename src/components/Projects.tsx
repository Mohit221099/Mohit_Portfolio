import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Server, ShieldCheck, Lock, Database } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
  category: 'backend' | 'security' | 'fullstack';
  features: string[];
}

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState<'all' | 'backend' | 'security' | 'fullstack'>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'SecureAPI Framework',
      description: 'A secure API framework with built-in authentication, authorization, rate limiting, and encryption. Designed for high-security applications in financial and healthcare sectors.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Node.js', 'Express', 'JWT', 'OAuth', 'MongoDB'],
      github: '#',
      live: '#',
      category: 'backend',
      features: [
        'Role-based access control',
        'API key management',
        'Request throttling',
        'Audit logging'
      ]
    },
    {
      id: 2,
      title: 'Vulnerability Scanner',
      description: 'An automated vulnerability scanner for web applications. Detects common security flaws, OWASP top 10 vulnerabilities, and provides detailed remediation guidance.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Python', 'Docker', 'OWASP', 'REST API'],
      github: '#',
      category: 'security',
      features: [
        'Automated scanning',
        'Detailed vulnerability reports',
        'CI/CD integration',
        'Remediation suggestions'
      ]
    },
    {
      id: 3,
      title: 'Distributed Cache System',
      description: 'A high-performance distributed caching system for web applications. Supports multiple caching strategies, automatic expiration, and cluster synchronization.',
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Go', 'Redis', 'Microservices', 'gRPC'],
      github: '#',
      live: '#',
      category: 'backend',
      features: [
        'Horizontal scaling',
        'Multiple eviction policies',
        'Cluster management',
        'Telemetry and monitoring'
      ]
    },
    {
      id: 4,
      title: 'Connectify Social Media',
      description: 'Connectify Social Media is a privacy-first, full-stack web application focused on secure file storage and sharing. Built with end-to-end encryption and zero-knowledge architecture, it ensures that only the user has access to their data, not even the server or platform admins.',
      image: 'https://images.pexels.com/photos/1542252/pexels-photo-1542252.jpeg',
      tags: ['Node.js', 'React', 'MongoDB', 'Encryption'],
      github: 'https://github.com/Mohit221099/Connectify-Social-Media',
      live: 'https://connectify-social-media-lovat.vercel.app/',
      category: 'fullstack',
      features: [
        'End-to-end encryption',
        'Zero-knowledge architecture',
        'Version history',
        'Secure sharing'
      ]
    },
    {
      id: 5,
      title: 'Intrusion Detection System',
      description: 'Real-time network intrusion detection system using machine learning to identify and alert on suspicious traffic patterns.',
      image: 'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Python', 'TensorFlow', 'Kafka', 'Elasticsearch'],
      github: '#',
      category: 'security',
      features: [
        'Real-time monitoring',
        'ML-based detection',
        'Alert system',
        'Traffic analysis'
      ]
    },
    {
      id: 6,
      title: 'Database Migration Tool',
      description: 'A tool for safely migrating data between different database systems with integrity checks, rollback capabilities, and minimal downtime.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Java', 'PostgreSQL', 'MongoDB', 'MySQL'],
      github: '#',
      live: '#',
      category: 'backend',
      features: [
        'Schema migration',
        'Data validation',
        'Transaction safety',
        'Performance optimization'
      ]
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'backend':
        return <Server size={18} />;
      case 'security':
        return <ShieldCheck size={18} />;
      case 'fullstack':
        return <Database size={18} />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={container}
        >
          <h2 className="section-heading text-center mx-auto">Projects</h2>
          
          <div className="mt-8 flex justify-center space-x-4 flex-wrap">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md mb-2 transition-colors ${
                filter === 'all' 
                  ? 'bg-primary-500 text-white dark:bg-accent dark:text-dark-500' 
                  : 'bg-gray-100 text-dark-500 dark:bg-dark-400 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-300'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('backend')}
              className={`px-4 py-2 rounded-md mb-2 transition-colors flex items-center ${
                filter === 'backend' 
                  ? 'bg-primary-500 text-white dark:bg-accent dark:text-dark-500' 
                  : 'bg-gray-100 text-dark-500 dark:bg-dark-400 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-300'
              }`}
            >
              <Server size={16} className="mr-2" /> Backend
            </button>
            <button
              onClick={() => setFilter('security')}
              className={`px-4 py-2 rounded-md mb-2 transition-colors flex items-center ${
                filter === 'security' 
                  ? 'bg-primary-500 text-white dark:bg-accent dark:text-dark-500' 
                  : 'bg-gray-100 text-dark-500 dark:bg-dark-400 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-300'
              }`}
            >
              <ShieldCheck size={16} className="mr-2" /> Security
            </button>
            <button
              onClick={() => setFilter('fullstack')}
              className={`px-4 py-2 rounded-md mb-2 transition-colors flex items-center ${
                filter === 'fullstack' 
                  ? 'bg-primary-500 text-white dark:bg-accent dark:text-dark-500' 
                  : 'bg-gray-100 text-dark-500 dark:bg-dark-400 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-300'
              }`}
            >
              <Database size={16} className="mr-2" /> Full Stack
            </button>
          </div>
          
          <motion.div 
            variants={container}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="card overflow-hidden flex flex-col h-full"
              >
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white dark:bg-dark-500 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                    {getCategoryIcon(project.category)}
                    <span className="ml-1 capitalize">{project.category}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-dark-400 dark:text-gray-300 mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                    <ul className="text-sm space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary-500 dark:text-accent mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="inline-block px-2 py-1 bg-gray-100 dark:bg-dark-400 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4 mt-auto pt-4 border-t border-gray-100 dark:border-dark-400">
                    {project.github && (
                      <a 
                        href={project.github} 
                        className="text-dark-400 hover:text-dark-500 dark:text-gray-400 dark:hover:text-white transition-colors flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={18} className="mr-1" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.live && (
                      <a 
                        href={project.live} 
                        className="text-primary-500 hover:text-primary-600 dark:text-accent dark:hover:text-accent-dark transition-colors flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={18} className="mr-1" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;