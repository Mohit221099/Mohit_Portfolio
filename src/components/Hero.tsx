import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [glitchText, setGlitchText] = useState('Backend Developer & Cybersecurity Expert');
  const [photoGlitch, setPhotoGlitch] = useState(false);
  const [particleFormation, setParticleFormation] = useState(false);
  const [currentCommand, setCurrentCommand] = useState('whoami');
  const [commandOutput, setCommandOutput] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [commandSequence, setCommandSequence] = useState(0);
  const controls = useAnimation();

  // Linux commands sequence
  const commands = [
    { cmd: 'whoami', output: 'Mohit Kumar' },
    { cmd: 'pwd', output: '/home/mohit/portfolio' },
    { cmd: 'ls -la skills/', output: 'backend/\ncybersecurity/\napi-development/\nsystem-architecture/' },
    { cmd: 'cat /etc/hostname', output: 'full-stack-developer' },
    { cmd: 'ps aux | grep passion', output: 'coding    secure-systems    innovation' },
    { cmd: 'uname -a', output: 'Expert 5.4.0 Backend-Security-Specialist' },
    { cmd: 'get_specialization --detail', output: 'Backend Developer & Cybersecurity Expert' }
  ];

  const typeCommand = async (command: string, isOutput = false, speed = 80) => {
    const text = isOutput ? commandOutput : currentCommand;
    const setText = isOutput ? setCommandOutput : setCurrentCommand;

    setText('');
    for (let i = 0; i <= command.length; i++) {
      setText(command.slice(0, i));
      await new Promise(resolve => setTimeout(resolve, speed));
    }
  };

  const runCommandSequence = async () => {
    const cmd = commands[commandSequence % commands.length];

    // Clear previous output
    setCommandOutput('');

    // Type the command
    await typeCommand(cmd.cmd, false, 60);

    // Wait a moment
    await new Promise(resolve => setTimeout(resolve, 300));

    // Show output with typing effect for longer outputs
    if (cmd.output.length > 20) {
      await typeCommand(cmd.output, true, 40);
    } else {
      setCommandOutput(cmd.output);
    }

    // Wait before next command
    await new Promise(resolve => setTimeout(resolve, 2000));

    setCommandSequence(prev => prev + 1);
  };

  const glitchEffect = async () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    const originalText = 'Backend Developer & Cybersecurity Expert';

    for (let i = 0; i < 3; i++) {
      const glitched = originalText
        .split('')
        .map((char, idx) => Math.random() > 0.7 ? characters[Math.floor(Math.random() * characters.length)] : char)
        .join('');
      setGlitchText(glitched);
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    setGlitchText(originalText);
  };

  const triggerPhotoGlitch = () => {
    setPhotoGlitch(true);
    setTimeout(() => setPhotoGlitch(false), 500);
  };

  const triggerParticleFormation = () => {
    setParticleFormation(true);
    setTimeout(() => setParticleFormation(false), 3000);
  };

  useEffect(() => {
    // Initial command sequence
    const initialDelay = setTimeout(() => {
      runCommandSequence();
    }, 1000);

    // Command sequence interval
    const commandInterval = setInterval(() => {
      runCommandSequence();
    }, 8000);

    const textInterval = setInterval(() => {
      glitchEffect();
    }, 5000);

    const photoInterval = setInterval(() => {
      triggerPhotoGlitch();
    }, 7000);

    const particleInterval = setInterval(() => {
      triggerParticleFormation();
    }, 12000);

    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(commandInterval);
      clearInterval(textInterval);
      clearInterval(photoInterval);
      clearInterval(particleInterval);
      clearInterval(cursorInterval);
    };
  }, [commandSequence]);

  const typewriterVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: { 
      opacity: 1,
      width: "100%",
      transition: { 
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  const cursorVariants = {
    blink: {
      opacity: [0, 1],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "loop" as "loop" | "reverse" | "mirror" | undefined
      }
    }
  };

  const particleVariants = {
    animate: (i: number) => ({
      y: [0, -150, 0],
      x: [0, i * 20 - 40, 0],
      opacity: [0, 1, 0],
      transition: {
        duration: 2 + Math.random() * 2,
        repeat: Infinity,
        ease: "linear",
        delay: Math.random() * 2
      }
    }),
    formation: (i: number) => {
      const angle = (i / 25) * Math.PI * 2;
      const radius = 120;
      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        opacity: 1,
        scale: [1, 1.5, 1],
        transition: {
          duration: 2,
          ease: "easeInOut"
        }
      };
    }
  };

  const photoVariants = {
    normal: {
      x: 0,
      y: 0,
      scale: 1,
      filter: "hue-rotate(0deg) saturate(1) contrast(1)",
      transition: { duration: 0.3 }
    },
    glitch: {
      x: [0, -5, 5, -3, 3, 0],
      y: [0, 2, -2, 1, -1, 0],
      scale: [1, 1.02, 0.98, 1.01, 0.99, 1],
      filter: [
        "hue-rotate(0deg) saturate(1) contrast(1)",
        "hue-rotate(90deg) saturate(2) contrast(1.5)",
        "hue-rotate(180deg) saturate(0.5) contrast(2)",
        "hue-rotate(270deg) saturate(1.5) contrast(1.2)",
        "hue-rotate(0deg) saturate(1) contrast(1)"
      ],
      transition: {
        duration: 0.5,
        times: [0, 0.2, 0.4, 0.6, 0.8, 1]
      }
    }
  };

  // API connection animation variants
  const apiDotVariants = {
    animate: (i: number) => ({
      x: [0, 120, 0],
      opacity: [0, 1, 0],
      scale: [1, 1.5, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.3
      }
    })
  };

  const particles = Array.from({ length: 25 }, (_, i) => (
    <motion.div
      key={i}
      custom={i}
      variants={particleVariants}
      animate={particleFormation ? "formation" : "animate"}
      className="absolute w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 dark:from-accent dark:to-primary-500 rounded-full"
      style={{
        left: particleFormation ? '50%' : `${Math.random() * 100}%`,
        top: particleFormation ? '50%' : `${Math.random() * 100}%`,
        transformOrigin: 'center'
      }}
    />
  ));

  // API connection dots
  const apiDots = Array.from({ length: 5 }, (_, i) => (
    <motion.div
      key={`api-dot-${i}`}
      custom={i}
      variants={apiDotVariants}
      animate="animate"
      className="absolute w-3 h-3 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"
      style={{
        top: '50%',
        left: `${i * 30}px`,
        transform: 'translateY(-50%)'
      }}
    />
  ));

  return (
    <section id="home" className="min-h-screen relative flex items-center pt-16 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-96 h-96 rounded-full bg-primary-100 dark:bg-primary-900/20 blur-3xl opacity-40 -top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 rounded-full bg-secondary-100 dark:bg-secondary-900/20 blur-3xl opacity-30 bottom-0 right-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
        {particles}
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <div className="code-block mb-8 max-w-2xl backdrop-blur-sm bg-white/80 dark:bg-dark-600/80">
              {/* Command Line */}
              <div className="flex items-center mb-2 text-dark-400 dark:text-gray-400">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mr-2 text-green-500 dark:text-green-400"
                >mohit@portfolio:~$</motion.span>
                <motion.div
                  className="font-mono text-white dark:text-gray-100"
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(0,255,0,0)",
                      "0 0 5px rgba(0,255,0,0.5)",
                      "0 0 0px rgba(0,255,0,0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {currentCommand}
                </motion.div>
                <motion.span
                  className={`inline-block w-2 h-5 ml-1 bg-green-500 dark:bg-green-400 ${showCursor ? 'opacity-100' : 'opacity-0'}`}
                  animate={{
                    scaleY: [1, 0.8, 1],
                  }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                ></motion.span>
              </div>
              
              {/* Command Output */}
              {commandOutput && (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 pl-4 border-l-2 border-blue-500 dark:border-blue-400"
                >
                  <div className="text-blue-600 dark:text-blue-400 font-mono whitespace-pre-line">
                    {commandOutput}
                  </div>
                </motion.div>
              )}

              {/* Name Display with Enhanced Animation */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="text-2xl md:text-4xl font-bold relative mb-4"
              >
                <span className="relative z-10">Mohit Kumar</span>
                <motion.span
                  className="absolute -inset-1 bg-primary-100 dark:bg-primary-900/30 rounded-lg -z-10"
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    delay: 1.1, 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              {/* Specialization with Matrix-like Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 0.5 }}
                className="text-xl md:text-2xl relative group"
              >
                <span className="text-gradient relative inline-block">{glitchText}</span>
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{
                    background: [
                      "linear-gradient(90deg, transparent 0%, rgba(0,255,0,0.1) 50%, transparent 100%)",
                      "linear-gradient(90deg, transparent 100%, rgba(0,255,0,0.1) 0%, transparent 0%)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 0.5 }}
              className="max-w-xl text-dark-400 dark:text-gray-300 mb-8 backdrop-blur-sm bg-white/50 dark:bg-dark-600/50 p-4 rounded-lg"
            >
              I build secure, scalable backend systems and protect digital assets from cyber threats.
              With expertise in system architecture, API development, and security implementation, I create
              robust solutions that prioritize both performance and protection.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a 
                href="#contact" 
                className="btn btn-primary"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(34, 197, 94, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              <motion.a 
                href="#projects" 
                className="btn btn-outline"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "rgb(34, 197, 94)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 4.5 }}
              className="flex space-x-5 my-8"
            >
              {[
                { icon: Github, href: "https://github.com/Mohit221099", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },  
                { icon: Mail, href: "mohit2kumar801@gmail.com", label: "Email" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-dark-400 hover:text-dark-500 dark:text-gray-400 dark:hover:text-white transition-colors relative group"
                  whileHover={{ 
                    scale: 1.1,
                    y: -2
                  }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    y: [0, -2, 0],
                  }}
                  transition={{
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <social.icon size={24} />
                  <span className="sr-only">{social.label}</span>
                  <motion.span
                    className="absolute -inset-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg -z-10 opacity-0 group-hover:opacity-100"
                    initial={false}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Glitch Photo with API Animation Above */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* API Connection Animation */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-40 h-8 flex items-center justify-center">
                <div className="relative w-full h-1 bg-gray-700/30 rounded-full">
                  {apiDots}
                </div>
                <div className="absolute left-0 text-xs text-green-500 dark:text-green-400">Client</div>
                <div className="absolute right-0 text-xs text-green-500 dark:text-green-400">Server</div>
              </div>

              {/* Photo Container with Glitch Effects */}
              <motion.div
                variants={photoVariants}
                animate={photoGlitch ? "glitch" : "normal"}
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden"
                onClick={triggerPhotoGlitch}
                style={{ cursor: 'pointer' }}
              >
                {/* Main Photo */}
                <div className="w-full h-full bg-gradient-to-br from-primary-500 via-secondary-500 to-accent rounded-2xl flex items-center justify-center relative overflow-hidden">
                 {/* Your photo */}
                <img 
                 src="https://i.postimg.cc/7Jr2WQPw/Mohit1.jpeg" 
                 alt="Mohit Kumar" 
                  className="w-full h-full object-cover"
                   />
                  
                  {/* Glitch Overlays */}
                  {photoGlitch && (
                    <>
                      <motion.div
                        className="absolute inset-0 bg-red-500 mix-blend-multiply opacity-30"
                        animate={{
                          x: [-2, 2, -1, 1, 0],
                          opacity: [0.3, 0.7, 0.2, 0.5, 0]
                        }}
                        transition={{ duration: 0.5, times: [0, 0.2, 0.4, 0.8, 1] }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-cyan-500 mix-blend-multiply opacity-30"
                        animate={{
                          x: [2, -2, 1, -1, 0],
                          opacity: [0.3, 0.6, 0.3, 0.4, 0]
                        }}
                        transition={{ duration: 0.5, times: [0, 0.3, 0.5, 0.7, 1] }}
                      />
                    </>
                  )}
                </div>

                {/* Digital Frame Effect */}
                <div className="absolute inset-0 border-2 border-primary-500 dark:border-accent rounded-2xl opacity-50">
                  <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-primary-500 dark:border-accent"></div>
                  <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-primary-500 dark:border-accent"></div>
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-primary-500 dark:border-accent"></div>
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-primary-500 dark:border-accent"></div>
                </div>
              </motion.div>

              {/* Floating Particles around Photo */}
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 8 }, (_, i) => (
                  <motion.div
                    key={`photo-particle-${i}`}
                    className="absolute w-1 h-1 bg-primary-500 dark:bg-accent rounded-full"
                    animate={{
                      x: [0, Math.sin(i) * 30, 0],
                      y: [0, Math.cos(i) * 30, 0],
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.5, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                    style={{
                      left: `${25 + (i * 12.5)}%`,
                      top: `${25 + (i * 12.5)}%`
                    }}
                  />
                ))}
              </div>

              {/* Click to Glitch Text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-dark-400 dark:text-gray-400 text-center"
              >
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Click to glitch
                </motion.span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-dark-400 dark:text-gray-400 hover:text-primary-500 dark:hover:text-accent"
        whileHover={{ scale: 1.2 }}
      >
        <ChevronDown size={32} />
        <span className="sr-only">Scroll down</span>
      </motion.a>
    </section>
  );
};

export default Hero;