import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, BarChart3 } from 'lucide-react';
import { projects } from '../constants';

export const Portfolio = ({ setIsModalOpen }: { setIsModalOpen: (open: boolean) => void }) => {
  const [filter, setFilter] = useState('All');
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-20 md:py-32 dark:bg-white/2 bg-black/2 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-8xl font-black mb-6 md:mb-10 tracking-tighter dark:text-white text-slate-900">Recent <span className="text-gold">Projects</span></h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {['All', 'E-Commerce', 'SaaS', 'POS'].map((cat) => (
              <button key={cat} onClick={() => setFilter(cat)} className={`px-6 py-2.5 md:px-10 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest transition-all ${filter === cat ? 'bg-gold text-midnight shadow-2xl scale-105' : 'glass dark:text-slate-400 text-slate-600 hover:text-gold'}`}>{cat}</button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div 
                layout 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, scale: 0.9 }} 
                key={project.id} 
                className="group relative rounded-[3rem] overflow-hidden glass card-hover border-white/5 flex flex-col h-full"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                    <button onClick={() => setIsModalOpen(true)} className="btn-primary w-full py-4 shadow-2xl">View Case Study <ArrowRight className="w-5 h-5" /></button>
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-gold text-xs font-black uppercase tracking-widest">{project.category}</span>
                    <div className="flex items-center gap-2 text-[10px] font-black dark:text-slate-500 text-slate-400 uppercase tracking-widest"><BarChart3 className="w-3 h-3 text-gold" /> ROI Focused</div>
                  </div>
                  <h3 className="text-3xl font-black mb-4 dark:text-white text-slate-900 leading-tight">{project.title}</h3>
                  <p className="dark:text-slate-400 text-slate-700 mb-8 text-lg font-medium leading-relaxed flex-grow">{project.description}</p>
                  <div className="mt-auto pt-6 border-t border-white/5">
                    <div className="flex items-center gap-3 text-sm font-black dark:text-slate-300 text-slate-800 bg-gold/5 py-3 px-6 rounded-2xl inline-flex border border-gold/10 w-full justify-center group-hover:bg-gold/10 transition-colors">
                      {project.metrics}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
