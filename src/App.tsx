import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { TechArsenal } from './components/TechArsenal';
import { Consultation } from './components/Consultation';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    document.documentElement.className = theme;
    return () => window.removeEventListener('scroll', handleScroll);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  return (
    <div className="min-h-screen transition-colors duration-500 selection:bg-gold selection:text-midnight">
      {/* Scroll Progress Bar */}
      <motion.div className="scroll-progress" style={{ scaleX }} />
      
      {/* Contact Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="blob w-[500px] h-[500px] top-[-10%] left-[-10%]" 
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }} 
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="blob w-[600px] h-[600px] bottom-[-10%] right-[-10%] opacity-10" 
        />
      </div>

      <Navbar 
        scrolled={scrolled} 
        theme={theme} 
        toggleTheme={toggleTheme} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        setIsModalOpen={setIsModalOpen} 
      />

      <main>
        <Hero setIsModalOpen={setIsModalOpen} />
        <Stats />
        <Services />
        <Portfolio setIsModalOpen={setIsModalOpen} />
        <TechArsenal />
        <Consultation setIsModalOpen={setIsModalOpen} />
      </main>

      <Footer />
    </div>
  );
}
