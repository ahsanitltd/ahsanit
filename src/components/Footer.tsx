import React from 'react';
import { Globe, Code2, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="py-24 border-t dark:border-white/5 border-black/5 dark:bg-white/2 bg-black/2 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16 md:gap-20 items-center text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-4 mb-6">
              <img src="" alt="Ahsan" className="w-16 h-16 rounded-2xl bg-gold/20 p-1 border-2 border-gold" referrerPolicy="no-referrer" />
              <div className="text-left">
                <h4 className="text-xl font-black dark:text-white text-slate-900">Ahsan</h4>
                <p className="text-sm font-bold text-gold uppercase tracking-widest">Founder & Lead Architect</p>
              </div>
            </div>
            <p className="dark:text-slate-400 text-slate-600 font-medium leading-relaxed max-w-xs">
              Engineered for Stability. Built for Growth. <br /> Senior Architect & Full-Stack Engineer with 6+ years of experience.
            </p>
          </div>
          <div className="flex flex-col items-center gap-8">
            <div className="flex justify-center gap-8 md:gap-12 text-slate-500 font-black text-xs md:text-sm uppercase tracking-[0.3em]">
              {['LinkedIn', 'GitHub', 'Fiverr'].map(item => (
                <a key={item} href={item === 'Fiverr' ? 'https://www.fiverr.com/ahsan_july29' : '#'} className="hover:text-gold transition-colors">{item}</a>
              ))}
            </div>
            <div className="flex items-center gap-4 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] dark:text-slate-500 text-slate-400">
              <Globe className="w-4 h-4 text-gold" /> Based in Bangladesh • Serving Worldwide
            </div>
          </div>
          <div className="dark:text-slate-500 text-slate-400 text-sm lg:text-right font-black uppercase tracking-widest">
            © {new Date().getFullYear()} Ahsan IT. <br /> All Rights Reserved.
            <div className="mt-4 flex items-center justify-center lg:justify-end gap-2 text-[10px] opacity-50">
              <Code2 className="w-3 h-3" /> Crafted with Precision
            </div>
          </div>
        </div>
      </div>

      <button onClick={scrollToTop} className="fixed bottom-6 right-6 md:bottom-10 md:right-10 p-3 md:p-4 glass rounded-full text-gold shadow-2xl hover:scale-110 transition-transform z-50">
        <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 rotate-[-45deg]" />
      </button>
    </footer>
  );
};
