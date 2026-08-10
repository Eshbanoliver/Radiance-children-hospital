import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaBars, FaTimes, FaCalendarCheck, FaClock } from 'react-icons/fa';
import { HOSPITAL_INFO } from '../data/hospitalData';

import logoImg from '../assets/logo.jpg';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-primary via-accent to-secondary text-white text-xs font-bold py-2 px-4 shadow-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <FaClock className="text-emerald-300" /> OPD: Mon-Sat 9am-3pm & 5pm-9pm | 24x7 Emergency
            </span>
            <a href={`mailto:${HOSPITAL_INFO.email}`} className="flex items-center gap-2 hover:underline text-cyan-100">
              ✉️ {HOSPITAL_INFO.email}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${HOSPITAL_INFO.phone}`}
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-all text-white font-extrabold"
            >
              <FaPhoneAlt className="animate-pulse" /> Emergency Desk: {HOSPITAL_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled ? 'glass-nav py-3' : 'bg-white/80 backdrop-blur-md py-4 border-b border-white/50 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Hospital Brand Logo */}
          <Link to="/" className="flex items-center group py-1">
            <div className="h-16 sm:h-20 max-h-20 sm:-my-2.5 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform">
              <img
                src={logoImg}
                alt="Radiant Children's Hospital Logo"
                className="h-full w-auto object-contain rounded-2xl shadow-md border-2 border-white/80 bg-white"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 bg-slate-100/90 p-1.5 rounded-full border border-slate-200/80 shadow-inner backdrop-blur-md">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-5 py-2.5 rounded-full text-sm font-extrabold transition-all duration-300 ${
                    isActive
                      ? 'gradient-btn text-white shadow-lg shadow-blue-500/30 scale-105'
                      : 'text-slate-700 hover:text-primary hover:bg-white/80'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Action Buttons & Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full gradient-btn text-white font-extrabold text-sm shadow-md transition-all hover:scale-105"
            >
              <FaCalendarCheck /> Book Appointment
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-11 h-11 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-800 text-xl shadow-sm hover:bg-slate-50"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden sticky top-[72px] z-30 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-5 py-3 rounded-2xl text-base font-extrabold transition-all ${
                        isActive
                          ? 'gradient-btn text-white shadow-md'
                          : 'text-slate-800 hover:bg-slate-100'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3.5 rounded-2xl gradient-btn text-white font-extrabold text-center shadow-lg flex items-center justify-center gap-2"
                >
                  <FaCalendarCheck /> Book Appointment
                </button>

                <a
                  href={`tel:${HOSPITAL_INFO.phone}`}
                  className="w-full py-3 rounded-2xl bg-emerald-500 text-white font-extrabold text-center flex items-center justify-center gap-2 shadow-md"
                >
                  <FaPhoneAlt /> Call Now: {HOSPITAL_INFO.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
