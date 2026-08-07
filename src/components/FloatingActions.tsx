import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt, FaChevronUp } from 'react-icons/fa';
import { HOSPITAL_INFO } from '../data/hospitalData';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Left Side Floating Buttons */}
      <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 flex flex-col gap-2.5 sm:gap-3">
        {/* Floating WhatsApp Button */}
        <motion.a
          href={`https://wa.me/${HOSPITAL_INFO.whatsappPhone}?text=Hello%20Radiant%20Children%27s%20Hospital%2C%20I%20would%20like%20to%20inquire%20about%20pediatric%20care%2Fappointment.`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center text-2xl sm:text-3xl shadow-xl shadow-emerald-500/40 border-2 border-white backdrop-blur-md group relative"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp />
          <span className="hidden md:block absolute left-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            WhatsApp Inquiry
          </span>
        </motion.a>

        {/* Floating Call Button */}
        <motion.a
          href={`tel:${HOSPITAL_INFO.phone}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary hover:bg-primary-hover text-white flex items-center justify-center text-xl sm:text-2xl shadow-xl shadow-primary/40 border-2 border-white backdrop-blur-md group relative animate-pulse"
          aria-label="Call Hospital Desk"
        >
          <FaPhoneAlt />
          <span className="hidden md:block absolute left-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            Call Emergency Desk: {HOSPITAL_INFO.phone}
          </span>
        </motion.a>
      </div>

      {/* Right Side Scroll To Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 hover:bg-white text-primary border-2 border-primary/30 flex items-center justify-center text-lg sm:text-xl shadow-xl shadow-primary/10 backdrop-blur-md group"
            aria-label="Scroll to top"
          >
            <FaChevronUp />
            <span className="hidden md:block absolute right-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
              Scroll To Top
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};
