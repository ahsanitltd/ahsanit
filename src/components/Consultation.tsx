import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const Consultation = ({ setIsModalOpen }: { setIsModalOpen: (open: boolean) => void }) => {
  return (
    <section id="contact" className="py-16 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="bg-gold rounded-[2.5rem] md:rounded-[5rem] p-8 md:p-16 lg:p-24 text-midnight text-center relative overflow-hidden shadow-[0_40px_100px_rgba(212,175,55,0.3)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#000_0%,_transparent_70%)] opacity-10" />
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-10 tracking-tighter leading-[0.9]">Ready to Scale <br className="hidden md:block" /> Your Infrastructure?</h2>
          <p className="text-sm md:text-xl lg:text-2xl font-bold mb-8 md:mb-12 max-w-3xl mx-auto opacity-90">Stop losing revenue to slow response times. Let's engineer a system that handles your next 10x growth phase.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <MagneticButton onClick={() => setIsModalOpen(true)} className="bg-midnight text-white px-6 py-3.5 md:px-12 md:py-5 rounded-full font-black text-base md:text-xl shadow-2xl hover:scale-105 transition-transform">Book Strategy Call</MagneticButton>
            <MagneticButton onClick={() => setIsModalOpen(true)} className="border-2 md:border-4 border-midnight text-midnight px-6 py-3.5 md:px-12 md:py-5 rounded-full font-black text-base md:text-xl hover:bg-midnight hover:text-white transition-all">Technical Audit</MagneticButton>
          </div>
          <div className="mt-10 md:mt-20 pt-6 md:pt-10 border-t border-midnight/10 flex flex-wrap justify-center gap-4 md:gap-12 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] opacity-80">
            <div className="flex items-center gap-2 md:gap-3"><CheckCircle2 className="w-4 h-4 md:w-6 md:h-6" /> Response within 4h</div>
            <div className="flex items-center gap-2 md:gap-3"><CheckCircle2 className="w-4 h-4 md:w-6 md:h-6" /> NDA Respected</div>
            <div className="flex items-center gap-2 md:gap-3"><CheckCircle2 className="w-4 h-4 md:w-6 md:h-6" /> Global Availability</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
