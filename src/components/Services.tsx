import React from 'react';
import { motion } from 'motion/react';
import { services } from '../constants';

export const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-8xl font-black mb-6 md:mb-8 dark:text-white text-slate-900 tracking-tighter">Engineering <span className="text-gold">Excellence</span></h2>
          <p className="dark:text-slate-400 text-slate-700 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">We don't just ship features; we engineer high-stakes infrastructure. Our mission is to ensure your software remains fast, secure, and infinitely scalable.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass p-8 md:p-12 rounded-[3rem] card-hover group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-[5rem] -z-10 transition-all group-hover:bg-gold/10" />
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mb-8 md:mb-10 group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-gold/5">{service.icon}</div>
              <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 leading-tight dark:text-white text-slate-900">{service.title}</h3>
              <p className="dark:text-slate-400 text-slate-700 leading-relaxed font-medium text-base md:text-lg">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
