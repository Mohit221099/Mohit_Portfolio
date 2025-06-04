import React, { useState, useEffect, useRef } from 'react';
import { 
  Briefcase, 
  ShieldAlert, 
  Terminal, 
  GraduationCap, 
  Award,
  Calendar,
  Building,
  FileText,
  ExternalLink,
  ChevronRight,
  Code,
  Trophy,
  Users,
  Zap,
  Star,
  Clock,
  MapPin,
  Heart,
  CheckCircle
} from 'lucide-react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const experiences = [
    {
      title: 'Lead Backend Developer',
      company: 'Ardent Tech Solutions',
      period: 'Nov 2024 - Feb 2025',
      description: 'Leading the backend development team in building secure, scalable microservices architecture. Implementing security best practices and conducting code reviews to ensure compliance with security standards.',
      icon: <Briefcase className="text-blue-500" size={24} />,
      achievements: [
        'Redesigned authentication system reducing unauthorized access attempts by 95%',
        'Implemented API gateway with rate limiting, reducing vulnerability to DDoS attacks',
        'Led migration to containerized microservices, improving deployment time by 70%'
      ]
    },
    {
      title: 'Lead Security Engineer',
      company: 'MaJIStic 2k25',
      period: 'Mar 2025 - April 2025',
      description: 'Conducted security assessments, penetration testing, and vulnerability analysis for enterprise applications. Developed and implemented security protocols for sensitive data handling.',
      icon: <ShieldAlert className="text-red-500" size={24} />,
      achievements: [
        'Discovered critical zero-day vulnerability in payment processing system',
        'Implemented security monitoring tools reducing incident response time by 60%',
        'Developed secure coding guidelines adopted company-wide'
      ]
    },
    {
      title: 'Backend Developer',
      company: 'Techternity Officials',
      period: 'Jan 2025 - Present',
      description: 'Developed RESTful APIs and microservices for high-traffic scalable platform. Optimized database performance and implemented caching strategies to improve response times.',
      icon: <Terminal className="text-green-500" size={24} />,
      achievements: [
        'Built scalable notification system handling 1M+ daily messages',
        'Optimized database queries reducing API response time by 40%',
        'Implemented CI/CD pipeline reducing deployment errors by 80%'
      ]
    },
    {
      title: 'Junior CyberSecurity Expert',
      company: 'CISCO, Kolkata',
      period: 'Nov 2024 - Present',
      description: 'Managing The Data Security Team, focusing on data protection, encryption, and secure data transmission protocols. Conducting regular security audits and compliance checks.',
      icon: <GraduationCap className="text-purple-500" size={24} />,
      achievements: [
        'Thesis on "Secure API Design Patterns" received departmental award',
        'Developed encryption protocols for sensitive data transmission',
        'Conducted training sessions on secure coding practices for junior developers'
      ]
    }
  ];

  const hackathons = [
    {
      title: "Women Safety Application",
      event: "Smart India Hackathon",
      position: "🏅 Quarter Finals",
      date: "March 2025",
      duration: "36 hours",
      location: "National Level",
      description: "Led the development of a comprehensive women safety application using Flutter, featuring real-time location tracking, emergency alerts, and community support system.",
      tech: ["Flutter", "Firebase", "Node.js", "MongoDB", "Google Maps API"],
      achievement: "Reached Quarter Finals",
      prize: "Recognition Certificate",
      team: "Team Leader (5 members)",
      highlights: [
        "Built real-time location sharing with trusted contacts",
        "Implemented SOS emergency alert system",
        "Created community safety reporting feature",
        "Integrated with local police database API"
      ],
      color: "from-pink-400 to-rose-500",
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20"
    },
    {
      title: "RedHope Blood Donation System",
      event: "Innovocon 2k25",
      position: "🎯 Participated",
      date: "February 2025",
      duration: "48 hours",
      location: "Regional Event",
      description: "Led team in building a comprehensive blood donation management system connecting donors with recipients through an intelligent matching algorithm.",
      tech: ["React", "Express.js", "PostgreSQL", "Socket.io", "Material-UI"],
      achievement: "Project Completion",
      prize: "Participation Certificate",
      team: "Team Leader (4 members)",
      highlights: [
        "Built donor-recipient matching algorithm",
        "Implemented real-time notification system",
        "Created inventory management for blood banks",
        "Developed mobile-responsive web application"
      ],
      color: "from-red-400 to-pink-500",
      bgColor: "bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20"
    },
    {
      title: "NexPlay Gaming Platform",
      event: "Google Developer Challenge",
      position: "🔧 Backend Developer",
      date: "January 2025",
      duration: "72 hours",
      location: "Online",
      description: "Worked as backend and profile development specialist, building a comprehensive gaming platform with user profiles, matchmaking, and social features.",
      tech: ["Node.js", "Express", "MongoDB", "Socket.io", "JWT", "AWS"],
      achievement: "Project Submission",
      prize: "Google Swag Kit",
      team: "Backend Specialist (6 members)",
      highlights: [
        "Designed scalable user profile system",
        "Built real-time matchmaking service",
        "Implemented secure authentication system",
        "Created RESTful APIs for gaming features"
      ],
      color: "from-blue-400 to-indigo-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20"
    },
    {
      title: "Threat Detection System",
      event: "SAP International Challenge",
      position: "🏆 State Round Qualifier",
      date: "December 2024",
      duration: "60 hours",
      location: "International",
      description: "Worked as cybersecurity expert to develop an advanced threat detection system capable of identifying and mitigating various cyber attacks in real-time.",
      tech: ["Python", "TensorFlow", "Scikit-learn", "Flask", "Docker", "ELK Stack"],
      achievement: "Qualified for State Round",
      prize: "State Level Recognition",
      team: "Cybersecurity Expert (4 members)",
      highlights: [
        "Built ML-based anomaly detection engine",
        "Implemented real-time threat monitoring",
        "Created automated incident response system",
        "Achieved 95% threat detection accuracy"
      ],
      color: "from-purple-400 to-violet-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20"
    }
  ];

  const certificates = [
    {
      title: 'Best Backend Developer of the Nov2024-Feb2025 batch',
      issuer: 'Ardent Tech Company',
      date: 'February 2025',
      credentialId: 'ATC-BBD-2025-001',
      description: 'Awarded for exceptional performance in backend development, demonstrating excellence in scalable architecture design and implementation.',
      icon: <Trophy className="text-yellow-500" size={24} />,
      category: 'Achievement',
      color: 'bg-yellow-50 dark:bg-yellow-900/20'
    },
    {
      title: 'CISCO Intern As a Junior Cybersecurity',
      issuer: 'CISCO Systems',
      date: 'November 2024',
      credentialId: 'CISCO-JCS-2024-789',
      description: 'Internship certification recognizing expertise in cybersecurity fundamentals, network security, and threat analysis.',
      icon: <ShieldAlert className="text-blue-500" size={24} />,
      category: 'Internship',
      color: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      title: 'MaJIStic Developer 2k25',
      issuer: 'MaJIStic Organization',
      date: 'April 2025',
      credentialId: 'MAJ-DEV-2025-456',
      description: 'Certification acknowledging proficiency in modern development practices and contribution to innovative projects.',
      icon: <Code className="text-purple-500" size={24} />,
      category: 'Development',
      color: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      title: 'NPTEL Certificate in Soft Computing',
      issuer: 'IIT Kanpur',
      date: 'March 2025',
      credentialId: 'NPTEL-SC-2025-123',
      description: 'Comprehensive certification in soft computing techniques including neural networks, fuzzy logic, and genetic algorithms.',
      icon: <GraduationCap className="text-green-500" size={24} />,
      category: 'Academic',
      color: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'January 2025',
      credentialId: 'AWS-SAA-2025-001',
      description: 'Comprehensive certification covering cloud architecture, security, and scalability best practices.',
      icon: <FileText className="text-blue-500" size={24} />,
      category: 'Cloud',
      color: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      title: 'Certified Ethical Hacker (CEH)',
      issuer: 'EC-Council',
      date: 'December 2024',
      credentialId: 'CEH-312-50-1234',
      description: 'Advanced certification in ethical hacking, penetration testing, and vulnerability assessment.',
      icon: <ShieldAlert className="text-red-500" size={24} />,
      category: 'Security',
      color: 'bg-red-50 dark:bg-red-900/20'
    }
  ];

  const specialThanks = [
    {
      name: 'TechTernity Officials',
      description: 'For providing exceptional opportunities in backend development and fostering innovation in scalable solutions.',
      logo: 'https://via.placeholder.com/120x60/3B82F6/FFFFFF?text=TechTernity',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20',
      contributions: [
        'Mentorship in modern backend technologies',
        'Collaborative development environment',
        'Real-world project experience',
        'Professional growth opportunities'
      ]
    },
    {
      name: 'CISCO',
      description: 'For the invaluable cybersecurity internship experience and comprehensive training in network security fundamentals.',
      logo: 'https://logos-world.net/wp-content/uploads/2020/12/Cisco-Logo.png',
      color: 'from-blue-600 to-cyan-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
      contributions: [
        'Cybersecurity expertise development',
        'Industry-standard training programs',
        'Professional networking opportunities',
        'Hands-on security project experience'
      ]
    },
    {
      name: 'Ardent Computech',
      description: 'For recognizing excellence in backend development and providing a platform for professional leadership growth.',
      logo: 'https://media.licdn.com/dms/image/C4D0BAQGQpz8ZQZ8ZQQ/company-logo_200_200/0/1630571832200?e=2147483647&v=beta&t=KQbVL4XzQz8ZQz8ZQz8ZQz8ZQz8ZQz8ZQz8ZQz8ZQz8',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
      contributions: [
        'Leadership development opportunities',
        'Advanced backend architecture training',
        'Team collaboration and mentorship',
        'Innovation in secure development practices'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Exploring my career milestones and professional certifications
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-xl border border-gray-200 dark:border-gray-700 flex flex-wrap">
              <button
                onClick={() => setActiveTab('experience')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'experience' 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                <Briefcase size={20} />
                Experience
              </button>
              <button
                onClick={() => setActiveTab('hackathons')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ml-2 relative ${
                  activeTab === 'hackathons' 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                <Code size={20} />
                Hackathons
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse" />
              </button>
              <button
                onClick={() => setActiveTab('certificates')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ml-2 ${
                  activeTab === 'certificates' 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                <Award size={20} />
                Certificates
              </button>
              <button
                onClick={() => setActiveTab('thanks')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ml-2 ${
                  activeTab === 'thanks' 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                <Heart size={20} />
                Special Thanks
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="transition-all duration-500">
            {activeTab === 'experience' && (
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-400 to-purple-500 z-0"></div>
                
                {/* Experience items */}
                <div className="relative z-10">
                  {experiences.map((exp, idx) => (
                    <div 
                      key={idx}
                      className={`flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-16`}
                    >
                      <div className="md:w-1/2 flex flex-col items-start md:items-end md:pr-8 md:pl-0 pl-12">
                        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-x-4 md:translate-x-0 w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-4 border-blue-500 flex items-center justify-center shadow-lg z-20 hover:scale-110 transition-transform">
                          {exp.icon}
                        </div>
                        <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 w-full ${idx % 2 === 0 ? 'md:ml-8' : 'md:mr-8'} border border-gray-200 dark:border-gray-700 hover:-translate-y-2`}>
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                              <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg flex items-center gap-2">
                                <Building size={16} />
                                {exp.company}
                              </p>
                            </div>
                            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                              <Calendar size={16} className="mr-1" />
                              {exp.period}
                            </div>
                          </div>
                          <p className="mb-6 text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
                          <div className="space-y-3">
                            {exp.achievements.map((achievement, achieveIdx) => (
                              <div key={achieveIdx} className="flex items-start group">
                                <ChevronRight className="mr-3 text-blue-500 dark:text-blue-400 mt-0.5 group-hover:translate-x-1 transition-transform" size={16} />
                                <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/2"></div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'hackathons' && (
              <div className="relative">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse" />
                  <div className="absolute bottom-20 right-20 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-bounce" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
                  {hackathons.map((hackathon, idx) => (
                    <div
                      key={idx}
                      className={`${hackathon.bgColor} rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 relative overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
                    >
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${hackathon.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
                      
                      {/* Trophy/Medal icon */}
                      <div className="absolute top-4 right-4 text-4xl animate-bounce">
                        {hackathon.position.includes('Quarter') ? '🏅' : 
                         hackathon.position.includes('State') ? '🏆' : 
                         hackathon.position.includes('Backend') ? '🔧' : '🎯'}
                      </div>

                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 hover:scale-105 transition-transform">
                              {hackathon.title}
                            </h3>
                            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2">
                              <Trophy size={18} />
                              {hackathon.event}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <Calendar size={16} className="mr-2" />
                            {hackathon.date}
                          </div>
                          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <Clock size={16} className="mr-2" />
                            {hackathon.duration}
                          </div>
                          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <MapPin size={16} className="mr-2" />
                            {hackathon.location}
                          </div>
                          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <Users size={16} className="mr-2" />
                            {hackathon.team}
                          </div>
                        </div>

                        <div className="mb-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl hover:scale-105 transition-transform">
                          <div className="flex items-center justify-between mb-2">
                            <span className={`px-3 py-1 bg-gradient-to-r ${hackathon.color} text-white rounded-full text-sm font-bold`}>
                              {hackathon.position}
                            </span>
                            <span className="text-lg font-bold text-green-600 dark:text-green-400">
                              {hackathon.prize}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            {hackathon.achievement}
                          </p>
                        </div>

                        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                          {hackathon.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2 flex items-center">
                            <Zap size={16} className="mr-1" />
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {hackathon.tech.map((tech, techIdx) => (
                              <span
                                key={techIdx}
                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium hover:scale-110 transition-transform cursor-pointer"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Highlights */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 flex items-center">
                            <Star size={16} className="mr-1" />
                            Key Highlights
                          </h4>
                          <div className="space-y-2">
                            {hackathon.highlights.map((highlight, highlightIdx) => (
                              <div key={highlightIdx} className="flex items-start group">
                                <div className="mr-3 mt-1">
                                  <Zap className="text-yellow-500" size={14} />
                                </div>
                                <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                  {highlight}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'certificates' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certificates.map((cert, idx) => (
                  <div
                    key={idx}
                    className={`${cert.color} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group cursor-pointer hover:-translate-y-2 hover:scale-105`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                        {cert.icon}
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity hover:rotate-12">
                        <ExternalLink size={20} className="text-gray-400" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {cert.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {cert.issuer}
                      </span>
                      <span className="px-2 py-1 bg-white dark:bg-gray-700 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300">
                        {cert.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                      {cert.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <Calendar size={14} className="mr-1" />
                        {cert.date}
                      </div>
                      <div className="text-xs text-gray-400 font-mono">
                        ID: {cert.credentialId}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'thanks' && (
              <div className="relative">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-pink-400/20 to-red-400/20 rounded-full blur-xl animate-pulse" />
                  <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-xl animate-bounce" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-2xl animate-spin" style={{animationDuration: '20s'}} />
                </div>

                <div className="text-center mb-12 relative z-10">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
                    <Heart className="text-red-500 animate-pulse" size={32} />
                    Gratitude to Amazing Organizations
                    <Heart className="text-red-500 animate-pulse" size={32} />
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Special appreciation to the organizations that have shaped my professional journey
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                  {specialThanks.map((thanks, idx) => (
                    <div
                      key={idx}
                      className={`${thanks.bgColor} rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 relative overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${thanks.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
                      <div className="relative z-10">
                        <div className="flex items-center justify-center mb-6">
                          <img src={thanks.logo} alt={`${thanks.name} logo`} className="h-12 object-contain" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                          {thanks.name}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-6 text-center leading-relaxed">
                          {thanks.description}
                        </p>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 flex items-center justify-center">
                            <CheckCircle size={16} className="mr-1" />
                            Contributions
                          </h4>
                          <div className="space-y-2">
                            {thanks.contributions.map((contribution, contribIdx) => (
                              <div key={contribIdx} className="flex items-start group justify-center">
                                <div className="mr-3 mt-1">
                                  <CheckCircle className="text-green-500" size={14} />
                                </div>
                                <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                  {contribution}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;