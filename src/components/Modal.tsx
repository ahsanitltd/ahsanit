import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageSquare } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const Modal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          onClick={onClose} 
          className="absolute inset-0 bg-black/90 backdrop-blur-md" 
        />
        <motion.div 
          initial={{ scale: 0.8, opacity: 0, rotateX: -20 }} 
          animate={{ scale: 1, opacity: 1, rotateX: 0 }} 
          exit={{ scale: 0.8, opacity: 0, rotateX: 20 }} 
          className="glass relative w-full max-w-lg p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] text-center border-gold/20"
        >
          <button onClick={onClose} className="absolute top-6 right-6 md:top-8 md:right-8 text-slate-400 hover:text-gold transition-colors p-2 glass rounded-full"><X className="w-4 h-4 md:w-5 md:h-5" /></button>
          <div className="w-20 h-20 md:w-24 md:h-24 bg-gold/10 rounded-3xl flex items-center justify-center mx-auto mb-6 md:mb-8 text-gold animate-bounce shadow-2xl shadow-gold/20">
            <MessageSquare className="w-10 h-10 md:w-12 md:h-12" />
          </div>
          <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 tracking-tight dark:text-white text-slate-900">Let's Connect Directly</h3>
          <p className="text-base md:text-lg dark:text-slate-400 text-slate-600 mb-8 md:mb-10 leading-relaxed font-medium">
            To ensure the best response time and maintain our conversation context, 
            <span className="text-gold font-black"> please inbox me on the same platform where we are currently chatting.</span>
          </p>
          <MagneticButton onClick={onClose} className="btn-primary w-full py-4 md:py-5 text-lg md:text-xl">
            Got it, I'll message you!
          </MagneticButton>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);
