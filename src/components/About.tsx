import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Server, ShieldCheck, Database, Code2 } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const slideIn = {
    hidden: { opacity: 0, x: 50 }, // Start off-screen to the right
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-600">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Text and Cards Content */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-4xl w-full"
          >
            <h2 className="section-heading text-center mx-auto">About Me</h2>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <p className="mb-4">
                  I'm a backend developer and cybersecurity expert with over 3 years of experience building 
                  secure, scalable systems for businesses of all sizes. My expertise spans from designing 
                  robust API architectures to implementing comprehensive security protocols that protect 
                  sensitive data.
                </p>
                <p className="mb-4">
                  My approach combines deep technical knowledge with a security-first mindset. I believe 
                  that the best backend systems are not only performant and scalable but also built with 
                  security integrated at every level of the architecture.
                </p>
                <p>
                  When I'm not coding or hunting vulnerabilities, I enjoy contributing to open-source 
                  security projects, writing technical articles, and mentoring aspiring developers on 
                  secure coding practices.
                </p>
                
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 rounded-full text-sm">
                    Backend Development
                  </span>
                  <span className="inline-block px-3 py-1 bg-secondary-100 text-secondary-700 dark:bg-secondary-900/30 dark:text-secondary-300 rounded-full text-sm">
                    Cybersecurity
                  </span>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 dark:bg-dark-400 dark:text-gray-300 rounded-full text-sm">
                    System Architecture
                  </span>
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 rounded-full text-sm">
                    API Design
                  </span>
                </div>
              </div>
              
              <div className="order-1 md:order-2 grid grid-cols-2 gap-6">
                <motion.div 
                  className="card p-6 flex flex-col items-center text-center"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Server className="text-primary-500 dark:text-accent mb-4" size={40} />
                  <h3 className="text-lg font-semibold mb-2">Backend Expert</h3>
                  <p className="text-sm text-dark-400 dark:text-gray-300">Scalable architectures and robust APIs</p>
                </motion.div>
                
                <motion.div 
                  className="card p-6 flex flex-col items-center text-center"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <ShieldCheck className="text-primary-500 dark:text-accent mb-4" size={40} />
                  <h3 className="text-lg font-semibold mb-2">Security Specialist</h3>
                  <p className="text-sm text-dark-400 dark:text-gray-300">Threat modeling and security testing</p>
                </motion.div>
                
                <motion.div 
                  className="card p-6 flex flex-col items-center text-center"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Database className="text-primary-500 dark:text-accent mb-4" size={40} />
                  <h3 className="text-lg font-semibold mb-2">Data Expert</h3>
                  <p className="text-sm text-dark-400 dark:text-gray-300">Database optimization and security</p>
                </motion.div>
                
                <motion.div 
                  className="card p-6 flex flex-col items-center text-center"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Code2 className="text-primary-500 dark:text-accent mb-4" size={40} />
                  <h3 className="text-lg font-semibold mb-2">Clean Coder</h3>
                  <p className="text-sm text-dark-400 dark:text-gray-300">Maintainable and documented code</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Cutout Image with Sliding Animation */}
          <motion.div
            ref={imageRef}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
            variants={slideIn}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-80 h-96 relative rounded-lg overflow-hidden order-1 lg:order-2 shadow-lg"
          >
            <img
              src="\public\assets\m2.jpg"
              alt="Mohit Kumar Cutout"
              className="w-full h-full object-contain bg-transparent"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;