import React from 'react';
import { motion } from 'motion/react';
import { techArsenal } from '../constants';

export const TechArsenal = () => {
  return (
    <section id="tech" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-8xl font-black mb-6 md:mb-8 dark:text-white text-slate-900 tracking-tighter">Technical <span className="text-gold">Arsenal</span></h2>
          <p className="dark:text-slate-400 text-slate-700 text-lg md:text-xl font-medium">Battle-tested technologies used to build high-performance systems</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {techArsenal.map((tech, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] card-hover border-white/5">
              <div className="flex items-center gap-4 mb-6 md:mb-8 text-gold"><div className="p-3 bg-gold/10 rounded-2xl">{tech.icon}</div><h3 className="text-xl md:text-2xl font-black dark:text-white text-slate-900">{tech.category}</h3></div>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {tech.skills.map((skill, j) => (
                  <motion.span 
                    key={j} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (i * 0.1) + (j * 0.05) }}
                    viewport={{ once: true }}
                    className="text-xs md:text-sm font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-xl dark:bg-white/5 bg-black/5 dark:text-slate-400 text-slate-800 border border-white/5 hover:border-gold/30 hover:text-gold transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
