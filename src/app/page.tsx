'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Globe, 
  Sparkles, 
  Eye, 
  Code, 
  TrendingUp, 
  Layers, 
  Smartphone,
  ArrowRight,
  Menu,
  X,
  Sun,
  Moon,
  CheckCircle,
  ChevronRight,
  Zap,
  Target,
  Shield,
  Award
} from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'Agentic AI & Autonomous Systems',
    description: 'Multi-agent systems using AutoGen, CrewAI, and LangGraph that coordinate complex business operations with minimal human oversight.',
  },
  {
    icon: Cpu,
    title: 'Advanced RAG & Knowledge Systems',
    description: 'Retrieval-Augmented Generation systems that ground LLMs in your actual data for accurate, contextual intelligence.',
  },
  {
    icon: Globe,
    title: 'Multimodal AI & Sensory Intelligence',
    description: 'Systems that process text, images, audio, and video simultaneously for richer context awareness.',
  },
  {
    icon: Sparkles,
    title: 'Generative AI & LLM Engineering',
    description: 'Production-grade generative systems with fine-tuned domain models and prompt optimization.',
  },
  {
    icon: Eye,
    title: 'Predictive Intelligence & Analytics',
    description: 'Transform data into foresight with predictive maintenance and dynamic pricing algorithms.',
  },
  {
    icon: Layers,
    title: 'Full-Stack Software Engineering',
    description: 'Robust backends, APIs, and cloud architectures that power AI at scale.',
  },
];

const portfolio = [
  {
    title: 'Agentic Workflow Orchestrator',
    category: 'Enterprise Intelligence',
    description: 'Multi-agent system coordinating procurement, finance, and operations, reducing processing time by 70%.',
  },
  {
    title: 'Meta-RAG Knowledge Platform',
    category: 'Enterprise Intelligence',
    description: 'Enterprise search system processing 10M+ documents with 95% accuracy in answers.',
  },
  {
    title: 'Healthcare Diagnostic Assistant',
    category: 'Industry-Specific AI',
    description: 'AI analyzing medical imaging, lab results, and patient history for preliminary diagnoses.',
  },
  {
    title: 'Precision Agriculture Drone Controller',
    category: 'Industry-Specific AI',
    description: 'Multimodal AI guiding autonomous drones improving yields by 25%.',
  },
];

const technologies = [
  { name: 'LangChain', icon: '🔗' },
  { name: 'LangGraph', icon: '📊' },
  { name: 'AutoGen', icon: '🤖' },
  { name: 'CrewAI', icon: '👥' },
  { name: 'LlamaIndex', icon: '📚' },
  { name: 'GPT-4V', icon: '💬' },
  { name: 'Claude 3', icon: '🧠' },
  { name: 'Gemini', icon: '✨' },
  { name: 'Pinecone', icon: '🌲' },
  { name: 'Weaviate', icon: '🌀' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Azure', icon: '🌐' },
  { name: 'GCP', icon: '🔵' },
  { name: 'Kubernetes', icon: '📦' },
];

const process = [
  { step: '01', title: 'Discovery', description: 'Deep dive into your business context and identify high-impact AI opportunities.' },
  { step: '02', title: 'Strategy', description: 'Architect solutions balancing innovation with pragmatism.' },
  { step: '03', title: 'Development', description: 'Agile sprints with continuous validation and rigorous testing.' },
  { step: '04', title: 'Deployment', description: 'Production-grade infrastructure with monitoring and security.' },
  { step: '05', title: 'Evolution', description: 'AI systems that improve over time through feedback and new data.' },
];

const stats = [
  { value: '50+', label: 'Global Clients' },
  { value: '100+', label: 'Projects Delivered' },
  { value: 'Since 2020', label: 'Industry Experience' },
];

const whyUs = [
  {
    icon: Zap,
    title: 'Autonomous Intelligence',
    description: 'AI agents that handle complex workflows independently, coordinating across systems in real-time.',
  },
  {
    icon: Target,
    title: 'Domain-Specific Excellence',
    description: 'Vertical AI solutions trained on industry data, delivering precision where generic models fail.',
  },
  {
    icon: Shield,
    title: 'Future-Proof Architecture',
    description: 'Systems built on open standards and interoperable frameworks that adapt as technology evolves.',
  },
  {
    icon: Award,
    title: 'Measurable ROI',
    description: 'Solutions engineered for business outcomes, not just technical impressiveness.',
  },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const heroRef = useRef<HTMLElement>(null);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'services', 'why-us', 'portfolio', 'technology', 'process', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    
    const links = document.querySelectorAll('a, button, .card, input, textarea');
    const handleMouseEnter = () => cursor.classList.add('cursor-hover');
    const handleMouseLeave = () => cursor.classList.remove('cursor-hover');
    
    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mouseleave', handleMouseLeave);
    });
    
    return () => {
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className={darkMode ? '' : 'light'}>
      {/* Custom Cursor */}
      <motion.div
        ref={cursorRef}
        className="custom-cursor"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
      
      {/* Sidebar - Toggleable below laptop (1024px) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed left-0 top-0 h-full w-72 z-40 lg:hidden"
            style={{ 
              background: darkMode ? 'rgba(13,13,13,0.98)' : 'rgba(255,255,255,0.98)',
              backdropFilter: 'blur(20px)',
              borderRight: `1px solid ${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`
            }}
          >
            <div className="flex flex-col h-full pt-20 px-6">
              <div className="mb-8">
                <span className="text-2xl font-bold gradient-text">ENCON</span>
                <span className={`text-2xl ${darkMode ? 'text-white' : 'text-black'}`}>-TECH</span>
              </div>
              <nav className="flex flex-col gap-4">
                {['about', 'services', 'why-us', 'portfolio', 'technology', 'process', 'contact'].map((item) => (
                  <motion.button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`text-left text-base font-medium py-2 transition-colors hover:text-[var(--orange-primary)] ${
                      activeSection === item ? 'text-[var(--orange-primary)]' : darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                  </motion.button>
                ))}
              </nav>
              <div className="mt-auto pb-8">
                <motion.button
                  onClick={toggleTheme}
                  className="flex items-center gap-3 py-3 w-full"
                  style={{ color: darkMode ? '#fff' : '#000000' }}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                  <span className="text-sm">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Header - Visible below laptop */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 lg:hidden"
        style={{
          background: scrolled 
            ? (darkMode ? 'rgba(13, 13, 13, 0.9)' : 'rgba(255, 255, 255, 0.9)')
            : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2"
            style={{ color: darkMode ? '#fff' : '#0D0D0D' }}
          >
            <Menu size={24} />
          </button>
          <a href="#" className="text-xl font-bold">
            <span className="gradient-text">ENCON</span>
            <span className={`text-lg ${darkMode ? 'text-white' : 'text-black'}`}>-TECH</span>
          </a>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg"
            style={{ color: darkMode ? '#fff' : '#0D0D0D' }}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 lg:hidden"
            style={{ background: 'rgba(0,0,0,0.5)' }}
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar - Toggleable below laptop (1024px) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed left-0 top-0 h-full w-72 z-40 lg:hidden"
            style={{ 
              background: darkMode ? 'rgba(13,13,13,0.98)' : 'rgba(255,255,255,0.98)',
              backdropFilter: 'blur(20px)',
              borderRight: `1px solid ${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`
            }}
          >
            <div className="flex flex-col h-full pt-20 px-6">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-2xl font-bold gradient-text">ENCON</span>
                  <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>-TECH</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2"
                  style={{ color: darkMode ? '#fff' : '#000000' }}
                >
                  <X size={24} />
                </button>
              </div>
              <nav className="flex flex-col gap-4">
                {['about', 'services', 'why-us', 'portfolio', 'technology', 'process', 'contact'].map((item) => (
                  <motion.button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`text-left text-base font-medium py-2 transition-colors hover:text-[var(--orange-primary)] ${
                      activeSection === item ? 'text-[var(--orange-primary)]' : darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                  </motion.button>
                ))}
              </nav>
              <div className="mt-auto pb-8">
                <motion.button
                  onClick={toggleTheme}
                  className="flex items-center gap-3 py-3 w-full"
                  style={{ color: darkMode ? '#fff' : '#000000' }}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                  <span className="text-sm">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        :root {
          --orange-primary: #F28C28;
          --orange-dark: #D67A1F;
          --orange-light: #F5A54D;
          --black-primary: #000000;
          --black-secondary: #1A1A1A;
          --black-tertiary: #2D2D2D;
          --white-primary: #FFFFFF;
          --white-secondary: #F8F8F8;
          --white-tertiary: #E5E5E5;
          --gray: #888888;
        }
        body {
          background: ${darkMode ? 'var(--black-primary)' : 'var(--white-primary)'};
          color: ${darkMode ? 'var(--white-primary)' : 'var(--black-primary)'};
          transition: background-color 0.4s ease, color 0.4s ease;
        }
      `}</style>

      {/* Navigation - Desktop only (lg: and above) */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-2 left-2 right-2 z-50 transition-all duration-300 hidden lg:block ${
          scrolled ? 'glass shadow-lg' : 'bg-transparent'
        }`}
        style={{ borderRadius: '12px', padding: '10px' }}
      >
        <div className="container-custom flex items-center justify-between px-4 sm:px-5 lg:px-6 py-3 sm:py-4" style={{ paddingLeft: '4px', paddingRight: '4px' }}>
          <motion.a
            href="#"
            className="text-2xl font-bold tracking-tight"
            whileHover={{ scale: 1.02 }}
          >
            <span className="gradient-text">ENCON</span>
            <span className={`text-2xl ${darkMode ? 'text-white' : 'text-black'}`}>-TECH</span>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {['about', 'services', 'why-us', 'portfolio', 'technology', 'process', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm font-medium transition-colors hover:text-[var(--orange-primary)] ${
                  activeSection === item ? 'text-[var(--orange-primary)]' : darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                background: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                color: darkMode ? '#fff' : '#0D0D0D'
              }}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('contact')}
              className="hidden md:block btn-primary text-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
              style={{ color: darkMode ? '#fff' : '#0D0D0D' }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ 
              background: darkMode ? 'rgba(13,13,13,0.98)' : 'rgba(255,255,255,0.98)',
              backdropFilter: 'blur(20px)'
            }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {['about', 'services', 'why-us', 'portfolio', 'technology', 'process', 'contact'].map((item, i) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => scrollToSection(item)}
                  className="text-2xl font-semibold"
                  style={{ color: darkMode ? '#fff' : '#000000' }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                onClick={() => scrollToSection('contact')}
                className="btn-primary mt-4"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section
        id="hero"
        ref={heroRef}
        className="min-h-screen flex items-center relative overflow-hidden pt-20"
      >
        <div className="absolute inset-0 gradient-mesh grid-lines" />
        
        <div className="container-custom relative z-10 px-6 sm:px-8 lg:px-12 py-20 sm:py-32">
          <div className="max-w-4xl ml-2 sm:ml-4 lg:ml-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6" 
                style={{ 
                  background: 'rgba(255, 107, 53, 0.15)', 
                  color: 'var(--orange-primary)',
                  border: '1px solid rgba(255, 107, 53, 0.3)'
                }}
              >
                🚀 Architecting the Intelligent Future
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6"
              style={{ fontFamily: 'Clash Display, sans-serif' }}
            >
              We don't just build{' '}
              <span className="gradient-text">software.</span>
              <br className="hidden sm:block" />
              We engineer{' '}
              <span className="gradient-text">intelligent systems</span>
              <br />
              that think & evolve.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl mb-6 sm:mb-10 max-w-xl md:max-w-2xl"
              style={{ color: darkMode ? '#888' : '#666' }}
            >
              Since 2020, Encon-Tech has been at the forefront of the AI revolution, 
              transforming how businesses operate through autonomous agents, generative 
              intelligence, and predictive systems that deliver measurable impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Build with Us
                <ArrowRight size={18} />
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('portfolio')}
                className="btn-secondary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                View Our Work
                <ChevronRight size={18} />
              </motion.button>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none"
              style={{ right: '-5%' }}
            >
              <motion.div 
                className="relative w-64 h-64 lg:w-80 lg:h-80"
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <div className="absolute inset-0 rounded-full pulse-glow" 
                  style={{ 
                    background: 'linear-gradient(135deg, var(--orange-primary), var(--orange-light))',
                    opacity: 0.1
                  }} 
                />
                <div className="absolute inset-8 rounded-full" 
                  style={{ 
                    background: 'linear-gradient(135deg, var(--orange-primary), var(--orange-dark))',
                    opacity: 0.2
                  }} 
                />
                <div className="absolute inset-16 rounded-full flex items-center justify-center">
                  <Brain size={64} style={{ color: 'var(--orange-primary)' }} />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <div className="container-custom px-4 sm:px-6 pb-8">
            <div className="flex flex-wrap gap-8 sm:gap-12 justify-center md:justify-start pt-8"
              style={{ borderTop: `1px solid ${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}` }}
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <div className="text-3xl sm:text-4xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm" style={{ color: darkMode ? '#888' : '#666' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding" style={{ background: darkMode ? 'var(--black-primary)' : 'var(--white-primary)' }}>
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" style={{ fontFamily: 'Clash Display, sans-serif' }}>
                Based in Karachi,<br />
                <span className="gradient-text">Serving the World</span>
              </h2>
              <p className="text-lg mb-6" style={{ color: darkMode ? '#aaa' : '#555' }}>
                We've partnered with 50+ global clients to deliver 100+ projects that don't 
                just meet expectations—they redefine what's possible. From startups disrupting 
                industries to enterprises seeking digital transformation, we turn complex 
                challenges into competitive advantages.
              </p>
              <p className="text-lg" style={{ color: darkMode ? '#aaa' : '#555' }}>
                While others experiment, we deploy production-ready systems using the latest 
                breakthroughs in Agentic AI, RAG, and multimodal intelligence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 p-8 rounded-2xl" 
                style={{ background: darkMode ? 'var(--black-secondary)' : 'var(--white-secondary)' }}
              >
                <div className="grid grid-cols-2 gap-3 sm:gap-6">
                  {[
                    { icon: Brain, label: 'AI Agents', value: 'Production-Ready' },
                    { icon: Cpu, label: 'RAG Systems', value: '95% Accuracy' },
                    { icon: Globe, label: 'Multimodal', value: 'Real-Time' },
                    { icon: Sparkles, label: 'Generative', value: 'Enterprise-Grade' },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="text-center p-2 sm:p-4 rounded-xl"
                      style={{ background: darkMode ? 'var(--black-tertiary)' : 'var(--white-tertiary)' }}
                    >
                      <item.icon className="mx-auto mb-1 sm:mb-2" size={20} style={{ color: 'var(--orange-primary)' }} />
                      <div className="text-xs sm:text-sm" style={{ color: darkMode ? '#888' : '#666' }}>{item.label}</div>
                      <div className="text-sm sm:font-semibold font-medium">{item.value}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl border-2" 
                style={{ borderColor: 'var(--orange-primary)', opacity: 0.3 }} 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding" style={{ background: darkMode ? 'var(--black-secondary)' : 'var(--white-secondary)' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium" style={{ color: 'var(--orange-primary)' }}>OUR EXPERTISE</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2" style={{ fontFamily: 'Clash Display, sans-serif' }}>
              Our Core <span className="gradient-text">Competencies</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card group cursor-pointer"
                whileHover={{ y: -8 }}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors group-hover:glow-orange-subtle"
                  style={{ background: 'rgba(255, 107, 53, 0.15)' }}
                >
                  <service.icon size={28} style={{ color: 'var(--orange-primary)' }} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3" style={{ fontFamily: 'Clash Display, sans-serif' }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: darkMode ? '#aaa' : '#555' }}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="section-padding" style={{ background: darkMode ? 'var(--black-primary)' : 'var(--white-primary)' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium" style={{ color: 'var(--orange-primary)' }}>WHY ENCON-TECH</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2" style={{ fontFamily: 'Clash Display, sans-serif' }}>
              Why <span className="gradient-text">Forward-Thinking</span> Companies<br className="sm:hidden" /> Partner With Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {whyUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(255, 107, 53, 0.15)' }}
                >
                  <item.icon size={32} style={{ color: 'var(--orange-primary)' }} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Clash Display, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: darkMode ? '#aaa' : '#555' }}>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-padding" style={{ background: darkMode ? 'var(--black-secondary)' : 'var(--white-secondary)' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium" style={{ color: 'var(--orange-primary)' }}>OUR WORK</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2" style={{ fontFamily: 'Clash Display, sans-serif' }}>
              Featured <span className="gradient-text">Innovation</span> Portfolio
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {portfolio.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group overflow-hidden rounded-2xl"
                style={{ background: darkMode ? 'var(--black-tertiary)' : 'var(--white-tertiary)' }}
              >
                <div className="p-8">
                  <span className="text-sm font-medium" style={{ color: 'var(--orange-primary)' }}>
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-semibold mt-2 mb-3" style={{ fontFamily: 'Clash Display, sans-serif' }}>
                    {project.title}
                  </h3>
                  <p style={{ color: darkMode ? '#aaa' : '#555' }}>{project.description}</p>
                </div>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.95), rgba(255, 140, 66, 0.9))' 
                  }}
                >
                  <span className="text-white font-semibold flex items-center gap-2">
                    View Case Study <ArrowRight size={18} />
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="section-padding" style={{ background: darkMode ? 'var(--black-primary)' : 'var(--white-primary)' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium" style={{ color: 'var(--orange-primary)' }}>TECH STACK</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2" style={{ fontFamily: 'Clash Display, sans-serif' }}>
              The Technology Behind <span className="gradient-text">Tomorrow</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-6 py-4 rounded-xl"
                style={{ 
                  background: darkMode ? 'var(--black-secondary)' : 'var(--white-secondary)',
                  border: `1px solid ${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`
                }}
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section-padding" style={{ background: darkMode ? 'var(--black-secondary)' : 'var(--white-secondary)' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium" style={{ color: 'var(--orange-primary)' }}>OUR APPROACH</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2" style={{ fontFamily: 'Clash Display, sans-serif' }}>
              From Vision to <span className="gradient-text">Value</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {process.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="p-6 rounded-xl h-full"
                  style={{ background: darkMode ? 'var(--black-tertiary)' : 'var(--white-tertiary)' }}
                >
                  <span className="text-4xl font-bold gradient-text">{item.step}</span>
                  <h3 className="text-lg font-semibold mt-3 mb-2" style={{ fontFamily: 'Clash Display, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm" style={{ color: darkMode ? '#aaa' : '#555' }}>{item.description}</p>
                </div>
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ChevronRight size={24} style={{ color: 'var(--orange-primary)' }} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding relative overflow-hidden px-4 sm:px-6" style={{ background: darkMode ? 'var(--black-primary)' : 'var(--white-primary)' }}>
        <div className="absolute inset-0 gradient-mesh grid-lines opacity-50" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-sm font-medium" style={{ color: 'var(--orange-primary)' }}>GET IN TOUCH</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mt-2 mb-4 sm:mb-6" style={{ fontFamily: 'Clash Display, sans-serif' }}>
              Ready to Build the <span className="gradient-text">Future</span>?
            </h2>
            <p className="text-base sm:text-xl mb-6 sm:mb-10" style={{ color: darkMode ? '#aaa' : '#555' }}>
              Your vision deserves more than incremental improvement. It deserves transformation.
              <br />Let's architect intelligence together.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Project
                <ArrowRight size={18} />
              </motion.button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm" style={{ color: darkMode ? '#888' : '#666' }}>
              <span className="flex items-center gap-2">
                📍 Karachi, Pakistan
              </span>
              <span className="flex items-center gap-2">
                📧 Contact: Updating Soon
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{ background: darkMode ? 'var(--black-secondary)' : 'var(--white-secondary)' }}>
        <div className="container-custom px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold">
              <span className="gradient-text">ENCON</span>
              <span className={`text-2xl ${darkMode ? 'text-white' : 'text-black'}`}>-TECH</span>
            </div>
            
            <div className="flex gap-8">
              {['about', 'services', 'portfolio', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-sm transition-colors hover:text-[var(--orange-primary)]"
                  style={{ color: darkMode ? '#888' : '#555' }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>

            <p className="text-sm" style={{ color: darkMode ? '#666' : '#888' }}>
              © 2024 Encon-Tech. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
