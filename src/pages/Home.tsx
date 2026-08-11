import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCalendarCheck, FaPhoneAlt, FaUserMd, FaMicroscope, 
  FaProcedures, FaStar, FaQuoteLeft, FaAward, FaHeart, FaChevronLeft, 
  FaChevronRight, FaHospital, FaChild, FaPause, FaPlay, FaFlask,
  FaAmbulance, FaCheckCircle
} from 'react-icons/fa';
import { 
  HOSPITAL_INFO, KEY_METRICS, TESTIMONIALS 
} from '../data/hospitalData';
import { SEO } from '../components/SEO';

import hospitalExterior from '../assets/hospital-exterior.png';
import hospitalNicu from '../assets/hospital-nicu.png';
import hospitalNight from '../assets/hospital-night.png';
import drDheerajImg from '../assets/dr-dheeraj-diwaakar.jpg';
import waImage1 from '../assets/WhatsApp Image 2026-08-07 at 2.34.25 PM.jpeg';
import waImage2 from '../assets/WhatsApp Image 2026-08-07 at 2.34.29 PM.jpeg';

interface HomeProps {
  onOpenBooking: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenBooking }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  const [isTestimonialAutoPlaying, setIsTestimonialAutoPlaying] = useState(true);

  const heroSlides = [
    {
      image: hospitalExterior,
      title: "Radiant Children's Hospital Building Campus",
      badge: "40 Bedded Hospital Center • Udaipur",
      highlight: "Super Specialty Pediatric & Neonatal Hospital"
    },
    {
      image: hospitalNicu,
      title: "Level III Advanced NICU Nursery Unit",
      badge: "HFOV Ventilators, CPAP & Mira Cradle",
      highlight: "97-99% Intact Preterm Survival Success"
    },
    {
      image: hospitalNight,
      title: "State-of-the-Art Modular Operation Theatre",
      badge: "24×7 Emergency Surgical Suite",
      highlight: "Advanced Pediatric & Neonatal Surgery"
    },
    {
      image: waImage1,
      title: "Inpatient Wards & 24×7 Patient Desk",
      badge: "General, Semi-Deluxe & Deluxe Suites",
      highlight: "24 Hours On-Duty Pediatric Intensivists"
    },
    {
      image: waImage2,
      title: "Sterile Pediatric Critical Care Wards",
      badge: "Central Oxygen & High Vacuum Suction",
      highlight: "100% Power Backup & Sterile Triage"
    }
  ];

  const metricThemes = [
    { gradient: 'from-blue-600 via-cyan-500 to-teal-400', iconBg: 'bg-gradient-to-tr from-blue-600 to-cyan-400', shadow: 'shadow-blue-500/30', badge: 'Verified Care', Icon: FaChild },
    { gradient: 'from-indigo-600 via-purple-500 to-pink-500', iconBg: 'bg-gradient-to-tr from-indigo-600 to-purple-500', shadow: 'shadow-purple-500/30', badge: '40 Bed Center', Icon: FaHospital },
    { gradient: 'from-rose-500 via-red-500 to-amber-500', iconBg: 'bg-gradient-to-tr from-rose-500 to-amber-500', shadow: 'shadow-rose-500/30', badge: '24×7 Intensivists', Icon: FaUserMd },
    { gradient: 'from-emerald-500 via-teal-400 to-cyan-400', iconBg: 'bg-gradient-to-tr from-emerald-500 to-teal-400', shadow: 'shadow-emerald-500/30', badge: 'Level III NICU', Icon: FaMicroscope },
    { gradient: 'from-cyan-600 via-sky-500 to-blue-500', iconBg: 'bg-gradient-to-tr from-cyan-600 to-blue-500', shadow: 'shadow-cyan-500/30', badge: 'In-House ABG', Icon: FaFlask },
    { gradient: 'from-purple-600 via-violet-500 to-fuchsia-500', iconBg: 'bg-gradient-to-tr from-purple-600 to-fuchsia-500', shadow: 'shadow-fuchsia-500/30', badge: '24×7 Transport', Icon: FaAmbulance }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  useEffect(() => {
    if (!isTestimonialAutoPlaying) return;
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4200);
    return () => clearInterval(testimonialTimer);
  }, [isTestimonialAutoPlaying]);

  const nextHeroSlide = () => {
    setHeroSlideIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const prevHeroSlide = () => {
    setHeroSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
      <SEO title="Radiant Children's Hospital | 40 Bedded Pediatric & NICU Center in Udaipur" />

      {/* 1. EDGE-TO-EDGE FULL WIDTH HERO SLIDER */}
      <section className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center overflow-hidden bg-slate-950 text-white">
        <AnimatePresence mode="wait">
          <motion.img
            key={heroSlideIndex}
            src={heroSlides[heroSlideIndex].image}
            alt={heroSlides[heroSlideIndex].title}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            loading="eager"
            decoding="async"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/65 via-slate-900/35 to-slate-950/20 pointer-events-none" />

        <button
          onClick={prevHeroSlide}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-900/50 hover:bg-slate-900/90 border border-white/40 text-white flex items-center justify-center backdrop-blur-md transition-all shadow-2xl hover:scale-110"
          aria-label="Previous image"
        >
          <FaChevronLeft className="text-base" />
        </button>

        <button
          onClick={nextHeroSlide}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-900/50 hover:bg-slate-900/90 border border-white/40 text-white flex items-center justify-center backdrop-blur-md transition-all shadow-2xl hover:scale-110"
          aria-label="Next image"
        >
          <FaChevronRight className="text-base" />
        </button>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8 space-y-6 text-left text-white"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/30 text-white font-bold text-xs sm:text-sm shadow-md">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                40 Bedded Neonatal & Paediatric Care Centre • Udaipur
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] drop-shadow-md">
                Caring for Every Child, <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-teal-200 bg-clip-text text-transparent">Every Step of the Way</span>
              </h1>

              <p className="text-slate-100 text-base sm:text-lg lg:text-xl font-semibold leading-relaxed max-w-2xl drop-shadow-sm">
                24x7 Availability of Neonatal & Paediatric Intensivists, Level III NICU, PICU, 24x7 OPD Services (365 Days), and Dedicated Emergency Transport.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenBooking}
                  className="px-8 py-4 rounded-full gradient-btn text-white font-extrabold text-base shadow-2xl hover:scale-105 transition-all flex items-center gap-3"
                >
                  <FaCalendarCheck /> Book Appointment
                </button>

                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-full bg-white/20 hover:bg-white/30 border border-white/40 text-white font-extrabold text-base backdrop-blur-md transition-all flex items-center gap-2 shadow-lg"
                >
                  <FaPhoneAlt /> Contact Us
                </Link>
              </div>

              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-white/20">
                {[
                  { title: "40 Bedded", sub: "Care Centre" },
                  { title: "24×7 Emergency", sub: "Intensivists" },
                  { title: "Level III NICU", sub: "HFOV & CPAP" },
                  { title: "OPD Services", sub: "24x7 Hours Open" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-900/50 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 text-center">
                    <div className="text-sm font-black text-white">{item.title}</div>
                    <div className="text-[11px] font-bold text-cyan-300">{item.sub}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="lg:col-span-4 flex flex-col justify-end items-end space-y-4">
              <motion.div
                key={heroSlideIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-900/65 backdrop-blur-xl p-5 rounded-3xl border border-white/25 text-white max-w-sm w-full shadow-2xl space-y-2"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="px-3 py-1 rounded-full bg-emerald-500 text-white font-black uppercase tracking-wider text-[10px]">
                    {heroSlides[heroSlideIndex].highlight}
                  </span>
                  <span className="font-bold text-cyan-300">
                    0{heroSlideIndex + 1} / 0{heroSlides.length}
                  </span>
                </div>

                <h3 className="text-base font-extrabold leading-snug">
                  {heroSlides[heroSlideIndex].title}
                </h3>

                <p className="text-slate-300 text-xs flex items-center gap-1.5 font-semibold">
                  <FaHospital className="text-emerald-400 shrink-0" />
                  {heroSlides[heroSlideIndex].badge}
                </p>
              </motion.div>

              <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setHeroSlideIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      idx === heroSlideIndex ? 'bg-emerald-400 w-8' : 'bg-white/40 w-2.5 hover:bg-white'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. EYE-CATCHY VIBRANT KEY METRICS SECTION */}
      <section className="relative z-10 pt-8 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-4">
            {KEY_METRICS.map((metric, idx) => {
              const theme = metricThemes[idx % metricThemes.length];
              const IconComp = theme.Icon;

              return (
                <motion.div
                  key={metric.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="relative group rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 pt-9 pb-5 px-4 text-center flex flex-col justify-between items-center"
                >
                  <div className={`absolute top-0 left-6 right-6 h-1 rounded-b-full bg-gradient-to-r ${theme.gradient}`} />

                  <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl ${theme.iconBg} text-white flex items-center justify-center text-xl shadow-lg ${theme.shadow} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border-2 border-white z-10`}>
                    <IconComp />
                  </div>

                  <div className="mt-1">
                    <span className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform inline-block`}>
                      {metric.value}
                    </span>
                    <h3 className="text-xs font-black text-slate-800 uppercase tracking-wider mt-1.5 leading-tight">
                      {metric.label}
                    </h3>
                  </div>

                  <p className="text-[11px] text-slate-500 font-semibold leading-relaxed mt-2 line-clamp-2">
                    {metric.description}
                  </p>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 w-full flex justify-center">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 font-extrabold text-[10px] text-slate-600 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      {theme.badge}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. HIGHLY EQUIPPED NICU & PICU CLINICAL SHOWCASE */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs">
              <FaMicroscope /> Advanced Critical Care Technology
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              Highly Equipped <span className="gradient-text">Level III NICU & PICU Units</span>
            </h2>
            <p className="text-slate-600 text-sm">
              State-of-the-art life support equipment operated 24x7 by dedicated Neonatal & Paediatric Intensivists.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* 1. Level III NICU Equipment Card (Vibrant Teal / Cyan Theme) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white border border-slate-200/80 shadow-2xl overflow-hidden flex flex-col justify-between group hover:shadow-cyan-500/20 transition-all duration-300"
            >
              {/* Vibrant Gradient Header */}
              <div className="bg-gradient-to-r from-slate-900 via-cyan-900 to-teal-900 text-white p-6 sm:p-8 relative overflow-hidden border-b border-cyan-500/30">
                <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-400 to-emerald-400 text-slate-950 flex items-center justify-center text-2xl font-black shadow-xl shadow-cyan-400/30 group-hover:scale-110 transition-transform">
                      <FaMicroscope />
                    </div>
                    <div>
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 font-extrabold text-[10px] uppercase tracking-wider border border-cyan-400/30">
                        Level III Specialty
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">Highly Equipped NICU</h3>
                      <p className="text-xs font-semibold text-teal-200">Neonatal Intensive Care Unit</p>
                    </div>
                  </div>

                  <span className="hidden sm:inline-block px-3 py-1.5 rounded-full bg-emerald-400 text-slate-950 font-black text-xs shadow-md">
                    24×7 Intensivists
                  </span>
                </div>
              </div>

              {/* Equipment Items Grid with Vibrant Custom Color Badges */}
              <div className="p-6 sm:p-8 space-y-4">
                <p className="text-xs font-black uppercase tracking-wider text-slate-700">Advanced Newborn Life Support Tech:</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { text: "High Frequency Ventilator (HFOV)", theme: "bg-cyan-500/10 border-cyan-300/60 text-cyan-900", iconColor: "text-cyan-600" },
                    { text: "Conventional & Bubble CPAP", theme: "bg-teal-500/10 border-teal-300/60 text-teal-900", iconColor: "text-teal-600" },
                    { text: "High Flow Nasal Cannula (HFNC)", theme: "bg-emerald-500/10 border-emerald-300/60 text-emerald-900", iconColor: "text-emerald-600" },
                    { text: "Servo Radiant Warner & LED Phototherapy", theme: "bg-amber-500/10 border-amber-300/60 text-amber-900", iconColor: "text-amber-600" },
                    { text: "Mira Cradle Therapeutic Hypothermia", theme: "bg-sky-500/10 border-sky-300/60 text-sky-900", iconColor: "text-sky-600" },
                    { text: "Multi Para Monitors & Transilluminator", theme: "bg-purple-500/10 border-purple-300/60 text-purple-900", iconColor: "text-purple-600" },
                    { text: "Surfactant & Exchange Transfusion", theme: "bg-rose-500/10 border-rose-300/60 text-rose-900", iconColor: "text-rose-600" },
                    { text: "Parenteral Nutrition (TPN) Setup", theme: "bg-indigo-500/10 border-indigo-300/60 text-indigo-900", iconColor: "text-indigo-600" },
                    { text: "Kangaroo Mother Care (KMC)", theme: "bg-pink-500/10 border-pink-300/60 text-pink-900", iconColor: "text-pink-600" },
                    { text: "Bedside 2D Echo & Ultrasound", theme: "bg-blue-500/10 border-blue-300/60 text-blue-900", iconColor: "text-blue-600" }
                  ].map((spec, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className={`flex items-start gap-2.5 p-3 rounded-2xl border ${spec.theme} shadow-sm font-bold text-xs transition-all`}
                    >
                      <FaCheckCircle className={`${spec.iconColor} text-sm shrink-0 mt-0.5`} />
                      <span className="leading-snug">{spec.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer Note */}
              <div className="px-6 sm:px-8 pb-6 pt-2">
                <div className="p-3.5 rounded-2xl bg-slate-900 text-white flex items-center justify-between text-xs font-bold">
                  <span>Sterile Smart Access NICU Nursery</span>
                  <span className="text-cyan-300">Level III Certified</span>
                </div>
              </div>
            </motion.div>

            {/* 2. Highly Equipped PICU Card (Vibrant Purple / Indigo / Pink Theme) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white border border-slate-200/80 shadow-2xl overflow-hidden flex flex-col justify-between group hover:shadow-purple-500/20 transition-all duration-300"
            >
              {/* Vibrant Gradient Header */}
              <div className="bg-gradient-to-r from-slate-900 via-purple-950 to-indigo-950 text-white p-6 sm:p-8 relative overflow-hidden border-b border-purple-500/30">
                <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-400 via-pink-400 to-rose-400 text-slate-950 flex items-center justify-center text-2xl font-black shadow-xl shadow-purple-500/30 group-hover:scale-110 transition-transform">
                      <FaProcedures />
                    </div>
                    <div>
                      <span className="px-2.5 py-0.5 rounded-full bg-purple-400/20 text-purple-300 font-extrabold text-[10px] uppercase tracking-wider border border-purple-400/30">
                        Critical Care Unit
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">Highly Equipped PICU</h3>
                      <p className="text-xs font-semibold text-pink-200">Pediatric Intensive Care Unit</p>
                    </div>
                  </div>

                  <span className="hidden sm:inline-block px-3 py-1.5 rounded-full bg-pink-400 text-slate-950 font-black text-xs shadow-md">
                    24×7 Intensivists
                  </span>
                </div>
              </div>

              {/* Equipment Items Grid with Vibrant Custom Color Badges */}
              <div className="p-6 sm:p-8 space-y-4">
                <p className="text-xs font-black uppercase tracking-wider text-slate-700">Child Life Support Equipment:</p>

                <div className="space-y-3">
                  {[
                    { text: "Pediatric Advanced Ventilators (Volume & Pressure Control)", theme: "bg-purple-500/10 border-purple-300/60 text-purple-950", iconColor: "text-purple-600" },
                    { text: "Multipara Patient Vital Monitors (ECG, NIBP, SpO2, Temp)", theme: "bg-fuchsia-500/10 border-fuchsia-300/60 text-fuchsia-950", iconColor: "text-fuchsia-600" },
                    { text: "Precision Syringe Pumps & Volumetric Infusion Pumps", theme: "bg-rose-500/10 border-rose-300/60 text-rose-950", iconColor: "text-rose-600" },
                    { text: "Central Oxygen Lines, Compressed Air & High Vacuum Suction", theme: "bg-cyan-500/10 border-cyan-300/60 text-cyan-950", iconColor: "text-cyan-600" },
                    { text: "Dedicated Pediatric Critical Care Nursing Staff (1:1 Ratio)", theme: "bg-emerald-500/10 border-emerald-300/60 text-emerald-950", iconColor: "text-emerald-600" }
                  ].map((spec, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.01 }}
                      className={`flex items-center gap-3 p-3.5 rounded-2xl border ${spec.theme} shadow-sm font-bold text-xs transition-all`}
                    >
                      <FaCheckCircle className={`${spec.iconColor} text-base shrink-0`} />
                      <span className="leading-snug">{spec.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer Note */}
              <div className="px-6 sm:px-8 pb-6 pt-2">
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-purple-900 to-slate-900 text-white flex items-center justify-between text-xs font-bold border border-purple-500/30">
                  <span>24x7 Pediatric ICU Doctor On-Site</span>
                  <span className="text-pink-300">Monitored 24 Hours</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 3.5. KNOW OUR DOCTOR - DR. DHEERAJ DIWAAKAR SECTION */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] bg-gradient-to-br from-white via-cyan-50/60 to-white border border-cyan-200/90 shadow-2xl p-8 sm:p-12 relative overflow-hidden group hover:shadow-cyan-500/15 transition-all duration-300"
          >
            {/* Ambient Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-400/15 via-teal-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400/15 via-purple-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              {/* Left Column: Doctor Photo Frame */}
              <div className="lg:col-span-5 flex flex-col items-center text-center space-y-4">
                <div className="relative group/photo">
                  {/* Glowing Ring Backdrop */}
                  <div className="absolute -inset-2 rounded-[2.2rem] bg-gradient-to-tr from-cyan-500 via-teal-400 to-blue-600 opacity-80 blur-lg group-hover/photo:opacity-100 transition-opacity duration-300" />

                  {/* Image Container */}
                  <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl bg-slate-900">
                    <img
                      src={drDheerajImg}
                      alt="Dr. Dheeraj Diwaakar - DM Neonatologist JIPMER"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top group-hover/photo:scale-105 transition-transform duration-500"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex flex-col justify-end p-5 text-left">
                      <span className="px-3 py-1 rounded-full bg-cyan-400 text-slate-950 font-black text-[10px] uppercase tracking-wider w-fit shadow-md">
                        DM Neonatology • JIPMER
                      </span>
                      <h4 className="text-xl font-black text-white mt-1">Dr. Dheeraj Diwaakar</h4>
                      <p className="text-xs font-bold text-cyan-200">Lead Neonatologist & Level III NICU Director</p>
                    </div>
                  </div>
                </div>

                {/* Quick Action Buttons under photo */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2 w-full max-w-sm">
                  <button
                    onClick={onOpenBooking}
                    className="flex-1 py-3.5 px-5 rounded-2xl gradient-btn text-white font-extrabold text-xs shadow-xl flex items-center justify-center gap-2"
                  >
                    <FaCalendarCheck /> Book Appointment
                  </button>
                  <a
                    href={`tel:${HOSPITAL_INFO.phone}`}
                    className="py-3.5 px-5 rounded-2xl bg-white border border-slate-200 text-slate-800 font-extrabold text-xs shadow-md hover:bg-slate-100 flex items-center gap-2 transition-colors"
                  >
                    <FaPhoneAlt className="text-primary" /> Call Desk
                  </a>
                </div>
              </div>

              {/* Right Column: Doctor Credentials & Career Highlights */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Header Tag */}
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 text-cyan-900 font-extrabold text-xs shadow-xs border border-cyan-200">
                    <FaUserMd className="text-cyan-600" /> KNOW OUR LEAD NEONATOLOGIST
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                    Dr. Dheeraj <span className="gradient-text">Diwaakar</span>
                  </h2>

                  <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed">
                    Apex trained DM Neonatologist dedicated to critical newborn care, Level III NICU ventilation, and intact milestone development.
                  </p>
                </div>

                {/* Medical Qualifications Badge Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-4 rounded-2xl bg-white border border-cyan-200 shadow-sm flex items-center gap-3.5 hover:border-cyan-400 transition-colors">
                    <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 text-cyan-700 flex items-center justify-center text-xl shrink-0 font-black">
                      <FaAward />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-black text-slate-900 block">MBBS, MD (Pediatrics)</span>
                      <span className="text-[11px] font-bold text-slate-500">Post Graduate Pediatric Medicine</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-emerald-200 shadow-sm flex items-center gap-3.5 hover:border-emerald-400 transition-colors">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center text-xl shrink-0 font-black">
                      <FaMicroscope />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-black text-emerald-950 block">DM (Neonatology)</span>
                      <span className="text-[11px] font-bold text-emerald-700">JIPMER Pondicherry (Apex Institute)</span>
                    </div>
                  </div>
                </div>

                {/* Experience & Previous Clinical Positions */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-700 block">
                    Leadership & Clinical Background:
                  </span>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-primary/40 transition-colors">
                      <FaCheckCircle className="text-primary text-lg shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">
                          Ex-Consultant — NICE Hospital for Women, Children & Newborn Care, Hyderabad
                        </h4>
                        <p className="text-[11px] font-medium text-slate-500 mt-0.5">
                          Managed complex tertiary neonatal cases & high-risk newborn critical intensive care.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-emerald-400/60 transition-colors">
                      <FaCheckCircle className="text-emerald-500 text-lg shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">
                          Ex-HOD — Department of Neonatology, GMCH Udaipur
                        </h4>
                        <p className="text-[11px] font-medium text-slate-500 mt-0.5">
                          Head of Department leading neonatal clinical operations, medical training & Level III NICU protocols.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clinical Promise Quote Box */}
                <div className="p-4 rounded-2xl bg-slate-900 text-white flex items-center justify-between text-xs font-bold shadow-lg">
                  <div className="flex items-center gap-2">
                    <FaHeart className="text-rose-400 text-base shrink-0" />
                    <span className="italic text-slate-200">"Pioneering Level III NICU care & intact survival for every newborn graduate."</span>
                  </div>
                  <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-cyan-400/20 text-cyan-300 font-extrabold text-[10px] uppercase border border-cyan-400/30 shrink-0">
                    24/7 NICU Director
                  </span>
                </div>

              </div>

            </div>

          </motion.div>

        </div>
      </section>

      {/* KEY SPECIALITIES & CARE TEASER BANNER */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-950 text-white p-8 sm:p-12 shadow-2xl border border-cyan-500/30 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-cyan-400/60 transition-all duration-300">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-4 max-w-2xl relative z-10 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cyan-400/20 text-cyan-300 font-extrabold text-xs border border-cyan-400/30">
                <FaHospital /> 40 Bedded Center & Level III Infrastructure
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Explore Our <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-teal-200 bg-clip-text text-transparent">Key Specialities & Infrastructure</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                Visual tour of our 40-bedded hospital campus, intact NICU graduate survival protocols, infection control defogging, transport ambulance & diagnostic amenities.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <Link
                to="/key-specialities-and-care"
                className="px-8 py-4 rounded-full gradient-btn text-white font-extrabold text-base shadow-2xl hover:scale-105 transition-all flex items-center gap-3"
              >
                Explore Key Specialities & Care →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 12. TESTIMONIALS AUTO-SCROLL CAROUSEL */}
      <section className="relative py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 border border-amber-200 text-amber-900 font-extrabold text-xs shadow-xs">
              <FaStar className="text-amber-500 animate-spin-slow" /> 5.0 Rated Parent Reviews
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              What Parents Say About <span className="gradient-text">Our Care</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
              Authentic Google reviews & stories from Udaipur parents whose children received expert treatment in our Level III NICU, PICU & OPD.
            </p>
          </div>

          <div
            onMouseEnter={() => setIsTestimonialAutoPlaying(false)}
            onMouseLeave={() => setIsTestimonialAutoPlaying(true)}
            className="max-w-4xl mx-auto relative"
          >
            {/* Auto Scroll Indicator & Control Bar */}
            <div className="flex items-center justify-between px-2 mb-3 text-xs font-bold text-slate-600">
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 relative">
                  {isTestimonialAutoPlaying && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  )}
                  <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isTestimonialAutoPlaying ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                </span>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-extrabold">
                  {isTestimonialAutoPlaying ? 'Auto-Scrolling (Hover to Pause)' : 'Paused for Reading'}
                </span>
              </div>

              <button
                onClick={() => setIsTestimonialAutoPlaying(!isTestimonialAutoPlaying)}
                className="px-3 py-1 rounded-full bg-white border border-slate-200 shadow-xs hover:bg-slate-100 text-slate-700 font-black text-[11px] flex items-center gap-1.5 transition-all"
                title={isTestimonialAutoPlaying ? 'Pause Auto Scroll' : 'Resume Auto Scroll'}
              >
                {isTestimonialAutoPlaying ? (
                  <>
                    <FaPause className="text-[10px] text-amber-600" /> Pause
                  </>
                ) : (
                  <>
                    <FaPlay className="text-[10px] text-emerald-600" /> Auto-Play
                  </>
                )}
              </button>
            </div>

            {/* Testimonial Spotlight Card */}
            <div className="relative rounded-3xl bg-white/95 backdrop-blur-md p-8 sm:p-12 border border-slate-200/90 shadow-2xl overflow-hidden group">
              {/* Animated Progress Bar */}
              {isTestimonialAutoPlaying && (
                <motion.div
                  key={currentTestimonial}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 4.2, ease: "linear" }}
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-primary to-emerald-500 origin-left"
                />
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -25 }}
                  transition={{ duration: 0.4 }}
                  className="text-center space-y-6"
                >
                  <FaQuoteLeft className="text-4xl sm:text-5xl text-primary/20 mx-auto" />
                  
                  <p className="text-slate-800 text-lg sm:text-2xl italic font-medium leading-relaxed max-w-3xl mx-auto">
                    "{TESTIMONIALS[currentTestimonial].comment}"
                  </p>

                  <div className="space-y-2">
                    <div className="flex justify-center gap-1 text-amber-400 text-lg">
                      {[...Array(TESTIMONIALS[currentTestimonial].rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    
                    <h4 className="text-xl font-black text-slate-900">
                      {TESTIMONIALS[currentTestimonial].parentName}
                    </h4>
                    
                    <p className="text-xs sm:text-sm font-extrabold text-primary flex items-center justify-center gap-2">
                      <span>{TESTIMONIALS[currentTestimonial].childInfo}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-600">{TESTIMONIALS[currentTestimonial].location}</span>
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls & Slide Dots */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-primary hover:border-primary/40 font-bold shadow-md transition-all active:scale-95"
                aria-label="Previous review"
              >
                ←
              </button>
              
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      idx === currentTestimonial 
                        ? 'bg-gradient-to-r from-primary to-accent w-8 shadow-sm' 
                        : 'bg-slate-300 w-3 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-primary hover:border-primary/40 font-bold shadow-md transition-all active:scale-95"
                aria-label="Next review"
              >
                →
              </button>
            </div>
          </div>

          {/* Continuous Auto-Scrolling Horizontal Marquee Pill Track */}
          <div className="pt-4 overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
            
            <div className="flex space-x-6 animate-marquee whitespace-nowrap">
              {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-xs font-semibold text-slate-700 shrink-0 hover:border-amber-400/60 transition-all cursor-pointer"
                >
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <FaStar key={i} className="text-[10px]" />
                    ))}
                  </div>
                  <span className="font-extrabold text-slate-900">{t.parentName}:</span>
                  <span className="truncate max-w-[280px] font-medium text-slate-600">"{t.comment}"</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black">{t.location}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;
