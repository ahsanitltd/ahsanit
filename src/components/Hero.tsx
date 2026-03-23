import React from 'react';
import { motion, useTransform, useScroll } from 'motion/react';
import { ArrowRight, ArrowUpRight, Zap, Shield, BarChart } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const Hero = ({ setIsModalOpen }: { setIsModalOpen: (open: boolean) => void }) => {
  const { scrollYProgress } = useScroll();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left z-10"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 text-gold text-[10px] md:text-xs font-black mb-8 tracking-[0.2em] uppercase">
              <Zap className="w-3 h-3 md:w-4 md:h-4 animate-pulse" />
              Enterprise Performance Engineering
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black mb-8 tracking-tighter leading-[0.9] dark:text-white text-slate-900">
              Scaling Systems from <br />
              <span className="text-gradient">10s to 200ms.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl lg:text-2xl dark:text-slate-400 text-slate-600 max-w-xl mb-12 leading-relaxed font-medium">
              Ahsan IT engineers high-performance backend architectures that drive real business growth. 
              We transform sluggish legacy systems into lightning-fast, enterprise-grade infrastructure.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <MagneticButton onClick={() => setIsModalOpen(true)} className="btn-primary px-8 py-4 md:px-12 md:py-5 text-lg md:text-xl">
                Direct Inquiry <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
              </MagneticButton>
              <a href="https://www.fiverr.com/ahsan_july29" target="_blank" rel="noopener noreferrer" className="btn-secondary px-8 py-4 md:px-12 md:py-5 text-lg md:text-xl group">
                Marketplace <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12 flex items-center gap-8 border-t border-gold/10 pt-8">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-gold" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart className="w-5 h-5 text-gold" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Scalable</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }} 
            animate={{ opacity: 1, scale: 1, rotate: 0 }} 
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} 
            className="relative hidden lg:block"
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }}
          >
            <div className="relative z-10 glass p-4 rounded-[4rem] rotate-3 hover:rotate-0 transition-transform duration-700 shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop" 
                alt="High Performance Code" 
                className="rounded-[3.5rem] shadow-2xl" 
                referrerPolicy="no-referrer" 
              />
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-1/4 glass p-6 rounded-3xl shadow-2xl border-gold/20"
              >
                <div className="text-gold font-black text-3xl">-98%</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Latency Reduction</div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-8 bottom-1/4 glass p-6 rounded-3xl shadow-2xl border-amber-500/20"
              >
                <div className="text-amber-500 font-black text-3xl">99.9%</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Uptime Guaranteed</div>
              </motion.div>
            </div>
            
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold/10 blur-[100px] rounded-full -z-10 animate-pulse-slow" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-500/10 blur-[100px] rounded-full -z-10 animate-pulse-slow" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
