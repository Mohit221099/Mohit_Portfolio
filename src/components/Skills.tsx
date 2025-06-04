import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      name: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 95 },
        { name: 'ExpressJS', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'NextJS', level: 80 },
        { name: 'Raw API Design', level: 75 },
      ],
    },
    {
      name: 'Cybersecurity',
      skills: [
        { name: 'Penetration Testing', level: 90 },
        { name: 'Bug Bounty', level: 85 },
        { name: 'Cryptography', level: 80 },
        { name: 'Threat Modeling', level: 95 },
        { name: 'Incident Response', level: 85 },
      ],
    },
    {
      name: 'Databases & Infrastructure',
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'Redis', level: 80 },
        { name: 'Docker', level: 95 },
        { name: 'Kubernetes', level: 85 },
      ],
    },
    {
      name: 'Additional Skills',
      skills: [
        { name: 'API Design', level: 95 },
        { name: 'CI/CD', level: 90 },
        { name: 'Cloud Services', level: 90 },
        { name: 'System Architecture', level: 85 },
        { name: 'Technical Writing', level: 80 },
      ],
    },
  ];

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
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={container}
        >
          <h2 className="section-heading text-center mx-auto">My Skills</h2>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
            {skillCategories.map((category, idx) => (
              <motion.div 
                key={idx} 
                variants={item} 
                className="card p-6"
              >
                <h3 className="text-xl font-semibold mb-6 text-primary-600 dark:text-accent">
                  {category.name}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-dark-400 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-dark-400 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 dark:from-accent dark:to-primary-400 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            variants={item}
            className="mt-16 max-w-4xl mx-auto text-center"
          >
            <h3 className="text-2xl font-semibold mb-6">Technologies & Tools</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Node.js', 'Python', 'Java', 'Go', 'C#', 'PostgreSQL', 'MongoDB', 'Redis',
                'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'REST', 'GraphQL', 'gRPC',
                'CI/CD', 'Git', 'Linux', 'Nginx', 'Express.js', 'Django', 'Spring Boot',
                'Wireshark', 'Metasploit', 'Burp Suite', 'Nmap', 'JWT', 'OAuth', 'OWASP',
              ].map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 bg-white dark:bg-dark-400 rounded-lg shadow-sm border border-gray-100 dark:border-dark-300 text-dark-500 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-dark-300 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;