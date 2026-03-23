import React from 'react';
import { motion } from 'motion/react';
import { Zap, Briefcase, Award, ShieldCheck } from 'lucide-react';

export const Stats = () => {
  const stats = [
    { label: "Performance Increase", value: "3x Faster", icon: <Zap className="w-6 h-6" /> },
    { label: "Server Cost Reduction", value: "30% Saved", icon: <Briefcase className="w-6 h-6" /> },
    { label: "Enterprise Experience", value: "6+ Years", icon: <Award className="w-6 h-6" /> },
    { label: "System Uptime", value: "99.99%", icon: <ShieldCheck className="w-6 h-6" /> }
  ];

  return (
    <section className="py-20 border-y dark:border-white/5 border-black/5 dark:bg-white/2 bg-black/2 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group">
              <div className="flex items-center justify-center mb-4 text-gold/50 group-hover:text-gold transition-colors">{stat.icon}</div>
              <div className="text-3xl md:text-5xl font-black text-gold mb-2">{stat.value}</div>
              <div className="text-[10px] md:text-xs dark:text-slate-500 text-slate-600 uppercase tracking-[0.2em] font-black">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
