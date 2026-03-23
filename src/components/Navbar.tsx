import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Sun, Moon, Menu, X } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface NavbarProps {
  scrolled: boolean;
  theme: string;
  toggleTheme: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  setIsModalOpen: (open: boolean) => void;
}

export const Navbar = ({ scrolled, theme, toggleTheme, isMenuOpen, setIsMenuOpen, setIsModalOpen }: NavbarProps) => {
  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Tech', href: '#tech' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-3 md:py-4 shadow-2xl' : 'bg-transparent py-6 md:py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 md:gap-3 group">
          <motion.div 
            whileHover={{ rotate: 180, scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 md:w-11 md:h-11 bg-gold rounded-xl flex items-center justify-center shadow-lg shadow-gold/20"
          >
            <Cpu className="text-midnight w-5 h-5 md:w-6 md:h-6" />
          </motion.div>
          <span className="text-xl md:text-2xl font-black tracking-tighter dark:text-white text-slate-900">
            AHSAN <span className="text-gold">IT</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-bold text-sm uppercase tracking-widest dark:text-slate-400 text-slate-600 hover:text-gold transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full" />
            </a>
          ))}
          <button 
            onClick={toggleTheme} 
            className="p-3 rounded-full glass hover:text-gold transition-all transform hover:rotate-12"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <MagneticButton onClick={() => setIsModalOpen(true)} className="btn-primary py-2.5 px-6 md:py-3 md:px-8 text-xs md:text-sm">
            Book Consultation
          </MagneticButton>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-3 md:gap-4 lg:hidden">
          <button 
            onClick={toggleTheme} 
            className="p-2.5 rounded-full glass hover:text-gold transition-all"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button 
            className="dark:text-white text-slate-900 p-2.5 glass rounded-full hover:text-gold transition-all" 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setIsMenuOpen(false)} 
              className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm lg:hidden" 
            />
            <motion.div 
              initial={{ x: '100%' }} 
              animate={{ x: 0 }} 
              exit={{ x: '100%' }} 
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 w-[85%] sm:w-[400px] z-[100] dark:bg-midnight/95 bg-white/95 backdrop-blur-3xl flex flex-col p-8 md:p-12 shadow-[-20px_0_80px_rgba(0,0,0,0.5)] lg:hidden border-l dark:border-white/5 border-black/5"
            >
              <div className="flex justify-between items-center mb-12 md:mb-16">
                <span className="text-2xl font-black tracking-tighter dark:text-white text-slate-900">
                  MENU
                </span>
                <button 
                  onClick={() => setIsMenuOpen(false)} 
                  className="p-3 md:p-4 glass rounded-full hover:text-gold transition-all"
                  aria-label="Close Menu"
                >
                  <X className="w-6 h-6 md:w-7 md:h-7" />
                </button>
              </div>
              
              <div className="flex flex-col gap-6 md:gap-8">
                {navLinks.map((link, i) => (
                  <motion.a 
                    key={link.name} 
                    href={link.href} 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="font-black text-4xl md:text-5xl dark:text-white text-slate-900 hover:text-gold transition-colors tracking-tighter" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-auto"
              >
                <button 
                  onClick={() => { setIsModalOpen(true); setIsMenuOpen(false); }} 
                  className="btn-primary w-full py-4 md:py-5 text-lg md:text-xl shadow-2xl"
                >
                  Book Consultation
                </button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
