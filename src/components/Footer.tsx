import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaFacebookF, FaInstagram, FaLinkedin, FaChevronRight, FaShieldAlt } from 'react-icons/fa';
import { HOSPITAL_INFO, SERVICES_DATA } from '../data/hospitalData';
import logoImg from '../assets/logo.jpg';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 relative overflow-hidden border-t border-slate-800">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Hospital Overview & Social */}
          <div className="space-y-6">
            <Link to="/" className="inline-block group bg-white p-3 rounded-2xl shadow-lg hover:scale-105 transition-transform border border-slate-100">
              <img
                src={logoImg}
                alt="Radiant Children's Hospital Logo"
                className="h-20 sm:h-24 w-auto object-contain"
              />
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed">
              {HOSPITAL_INFO.description}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={HOSPITAL_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-primary text-white flex items-center justify-center transition-all duration-300 shadow-md"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href={HOSPITAL_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 text-white flex items-center justify-center transition-all duration-300 shadow-md"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href={HOSPITAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-[#0A66C2] text-white flex items-center justify-center transition-all duration-300 shadow-md"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary inline-block"></span> Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Key Specialities & Care', path: '/key-specialities-and-care' },
                { name: 'Pediatric Services', path: '/services' },
                { name: 'Our Team & Doctors', path: '/our-team' },
                { name: 'News & Achievements', path: '/news-and-achievements' },
                { name: 'Photo Gallery', path: '/gallery' },
                { name: 'Parent Reviews & Ratings', path: '/testimonials' },
                { name: 'Contact & Location', path: '/contact' }
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
                  >
                    <FaChevronRight className="text-xs text-primary" /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Pediatric Services */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary inline-block"></span> Key Speciality Care
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.slice(0, 6).map((srv) => (
                <li key={srv.id}>
                  <Link
                    to="/services"
                    className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                  >
                    <FaChevronRight className="text-xs text-secondary" /> {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Google Map */}
          <div className="space-y-4">
            <h4 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent inline-block"></span> Hospital Location
            </h4>

            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary text-base shrink-0 mt-1" />
                <span>{HOSPITAL_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-emerald-400 text-sm shrink-0" />
                <a href={`tel:${HOSPITAL_INFO.phone}`} className="hover:text-white font-bold text-sm text-emerald-400">
                  {HOSPITAL_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-cyan-400 text-sm shrink-0">✉️</span>
                <a href={`mailto:${HOSPITAL_INFO.email}`} className="hover:text-white text-xs text-cyan-300">
                  {HOSPITAL_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaClock className="text-cyan-400 text-sm shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">OPD: 24×7 Hours Open</p>
                  <p className="text-[11px] text-slate-400">Operational 24 Hours (365 Days)</p>
                  <p className="font-bold text-emerald-400 text-[11px] mt-0.5">24×7 Emergency & Intensivists</p>
                </div>
              </li>
            </ul>

            {/* Embedded Google Maps Box */}
            <div className="rounded-xl overflow-hidden border border-slate-700 h-28 w-full shadow-inner mt-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922350.4716782165!2d72.6897553765913!3d25.440552555194934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5fb71a80425%3A0x3965db8c2851267f!2sRadiant%20Children%E2%80%99s%20Hospital!5e0!3m2!1sen!2sin!4v1786074857847!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Radiant Children's Hospital Map Location"
              />
            </div>
          </div>

        </div>

        {/* Mandatory Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center md:text-left">
          <div>
            ©️ Copyright 2026 | Radiant Children's Hospital | All Rights Reserved | Powered by{' '}
            <a
              href="https://www.futurexdigitalmarketing.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#28a745' }}
              className="font-bold hover:underline"
            >
              Future X Digital Marketing
            </a>
          </div>

          <div className="flex items-center gap-4 text-slate-500">
            <span className="flex items-center gap-1"><FaShieldAlt className="text-emerald-500" /> ISO Certified Hygiene</span>
            <span>•</span>
            <span>Udaipur Pediatric Care</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
