import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCalendarCheck, FaPhoneAlt, FaHeartbeat, FaStethoscope, FaBaby, 
  FaUserMd, FaSyringe, FaMicroscope, FaProcedures, FaChevronDown, 
  FaStar, FaQuoteLeft, FaAmbulance, FaAward, FaShieldAlt, FaCheckCircle,
  FaHeart, FaChevronLeft, FaChevronRight, FaHospital, FaChild, FaWind,
  FaPills, FaXRay, FaFlask, FaBolt, FaVideo, FaBed
} from 'react-icons/fa';
import { 
  HOSPITAL_INFO, KEY_METRICS, SERVICES_DATA, WHY_CHOOSE_US, 
  TESTIMONIALS, FAQS, INFECTION_CONTROL_PROTOCOLS, 
  CHILDREN_FACILITIES_LIST, TRANSPORT_SYSTEM_DETAILS 
} from '../data/hospitalData';
import { SEO } from '../components/SEO';

import hospitalExterior from '../assets/hospital-exterior.png';
import hospitalNicu from '../assets/hospital-nicu.png';
import hospitalNight from '../assets/hospital-night.png';

interface HomeProps {
  onOpenBooking: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenBooking }) => {
  const [activeFaq, setActiveFaq] = useState<string | null>('1');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);

  const heroSlides = [
    {
      image: hospitalExterior,
      title: "Radiant Children's Hospital Exterior",
      badge: "40 Bedded Care Centre • Udaipur",
      highlight: "Advanced Pediatric & Neonatal Facility"
    },
    {
      image: hospitalNicu,
      title: "Level III NICU & PICU Critical Nursery",
      badge: "HFOV Ventilator, CPAP & Mira Cradle",
      highlight: "24×7 Intensivists Availability"
    },
    {
      image: hospitalNight,
      title: "24×7 Emergency Desk & Reception",
      badge: "Mon-Sat OPD: 9am-3pm & 5pm-9pm",
      highlight: "Round-the-Clock Emergency Triage"
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

  const nextHeroSlide = () => {
    setHeroSlideIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const prevHeroSlide = () => {
    setHeroSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const toggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
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
                24x7 Availability of Neonatal & Paediatric Intensivists, Level III NICU, PICU, OPD Services (Mon-Sat 9am-3pm & 5pm-9pm), and Dedicated Emergency Transport.
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
                  { title: "OPD Services", sub: "Morning & Evening" }
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

      {/* 4. EYE-CATCHY DISTINCT "INTACT SURVIVAL OF NICU GRADUATES" SHOWCASE */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Dark Midnight Emerald Glow Box */}
          <div className="rounded-[2.5rem] bg-gradient-to-br from-slate-950 via-teal-950 to-slate-950 text-white p-8 sm:p-14 shadow-2xl border border-emerald-500/30 relative overflow-hidden space-y-10">
            
            {/* Background Neon Glow Effects */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Section Header with Glowing Badge */}
            <div className="relative z-10 text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/40 text-emerald-300 font-extrabold text-xs sm:text-sm shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                Special Clinical Promise • Zero Compromise Child Wellness
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Commitment for <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent">Intact Survival of NICU Graduates</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                Beyond saving lives in the NICU, our neonatologists and pediatric specialists ensure premature & high-risk babies grow up healthy — protecting brain development, vision, hearing, and physical milestones.
              </p>
            </div>

            {/* 7 Glowing 3D Feature Cards in Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              {[
                {
                  title: "Bedside Neurosonogram & 2D Echo",
                  desc: "Real-time bedside brain neurosonography and cardiac 2D Echo imaging for precise infant diagnosis.",
                  badge: "Bedside Imaging",
                  gradient: "from-cyan-500 to-blue-600",
                  icon: FaHeartbeat
                },
                {
                  title: "Newborn Screening for Congenital Disorders",
                  desc: "Comprehensive blood metabolic screening for early detection of treatable congenital conditions.",
                  badge: "Metabolic Check",
                  gradient: "from-emerald-500 to-teal-600",
                  icon: FaSyringe
                },
                {
                  title: "ROP (Retinopathy of Prematurity) Screening",
                  desc: "Protocol-based retina screening by Retina Specialist & prompt laser/injection management if needed.",
                  badge: "Vision Safety",
                  gradient: "from-purple-500 to-indigo-600",
                  icon: FaMicroscope
                },
                {
                  title: "OAE Hearing Screening",
                  desc: "Universal Oto-Acoustic Emission objective hearing assessment for every baby prior to discharge.",
                  badge: "Hearing Check",
                  gradient: "from-amber-400 to-orange-500",
                  icon: FaUserMd
                },
                {
                  title: "Pulse Oximetry Screening",
                  desc: "Routine universal oxygen saturation screening to catch silent congenital heart defects early.",
                  badge: "Cardiac Safety",
                  gradient: "from-rose-500 to-red-600",
                  icon: FaShieldAlt
                },
                {
                  title: "Neurodevelopmental Assessment",
                  desc: "Milestone evaluation of high-risk NICU graduates by Consultant Pediatrician & specialized Physiotherapist.",
                  badge: "Milestone Tracking",
                  gradient: "from-sky-400 to-blue-500",
                  icon: FaChild
                },
                {
                  title: "Lactation Support & Kangaroo Mother Care",
                  desc: "Dedicated breastfeeding management, lactation counseling, and skin-to-skin Kangaroo Mother Care (KMC).",
                  badge: "Mother Bonding",
                  gradient: "from-pink-500 to-rose-500",
                  icon: FaHeart
                }
              ].map((pillar, idx) => {
                const IconComp = pillar.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.07 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-emerald-500/25 p-6 flex flex-col justify-between space-y-4 hover:border-emerald-400/60 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${pillar.gradient} text-white flex items-center justify-center text-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                          <IconComp />
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-emerald-400/10 text-emerald-300 font-extrabold text-[10px] uppercase tracking-wider border border-emerald-400/20">
                          {pillar.badge}
                        </span>
                      </div>

                      <h3 className="text-lg font-black text-white group-hover:text-emerald-300 transition-colors leading-snug">
                        {pillar.title}
                      </h3>

                      <p className="text-slate-300 text-xs leading-relaxed font-medium">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-extrabold text-emerald-400">
                      <FaCheckCircle className="shrink-0 text-emerald-400" />
                      <span>Intact Survival Protocol Included</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Highlight Seal Banner */}
            <div className="relative z-10 pt-4 text-center">
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-5 rounded-2xl bg-emerald-950/80 border border-emerald-400/40 text-emerald-200 text-xs sm:text-sm font-bold shadow-xl">
                <div className="w-10 h-10 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center text-xl shrink-0 font-black">
                  ✓
                </div>
                <div className="text-center sm:text-left">
                  <span className="font-extrabold text-white block text-sm sm:text-base">100% Comprehensive Follow-Up Care for Premature & High-Risk Babies</span>
                  <span className="text-slate-300 font-medium">Dedicated to ensuring intact physical, neurological, visual & auditory growth for every newborn.</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. INFECTION CONTROL & SAFETY STANDARDS ("PREVENTION IS BETTER THAN CURE") */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-rose-800 font-bold text-xs">
              <FaShieldAlt /> Safety & Sterilization First
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              Prevention is Better Than Cure <span className="gradient-text">— Infection Control Protocols</span>
            </h2>
            <p className="text-slate-600 text-sm">
              We maintain hospital-wide sterile protocols to protect premature infants and vulnerable children.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INFECTION_CONTROL_PROTOCOLS.map((protocol, idx) => (
              <div key={idx} className="glass-card p-5 rounded-2xl border border-white/80 space-y-3 hover:shadow-xl transition-all">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center text-lg font-black">
                  <FaShieldAlt />
                </div>
                <p className="text-slate-700 text-xs font-bold leading-relaxed">
                  {protocol}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. NEONATAL & PAEDIATRIC TRANSPORT AMBULANCE SECTION */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-primary to-slate-900 p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-extrabold text-xs">
                  <FaAmbulance /> 24×7 Emergency Transport System
                </div>

                <h3 className="text-3xl sm:text-4xl font-black">{TRANSPORT_SYSTEM_DETAILS.title}</h3>
                <p className="text-slate-200 text-sm leading-relaxed">{TRANSPORT_SYSTEM_DETAILS.tagline}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {TRANSPORT_SYSTEM_DETAILS.equipment.map((eq, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-bold bg-white/10 p-2.5 rounded-xl border border-white/20">
                      <FaCheckCircle className="text-emerald-400 text-sm shrink-0" />
                      <span>{eq}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 text-center lg:text-right space-y-4">
                <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 space-y-3">
                  <p className="text-xs font-extrabold uppercase text-cyan-300">Call Transport Desk Immediately</p>
                  <a href={`tel:${HOSPITAL_INFO.phone}`} className="text-3xl font-black text-emerald-400 block hover:underline">
                    {HOSPITAL_INFO.phone}
                  </a>
                  <p className="text-xs text-slate-300">Intensivist & Trained Staff Ready for Immediate Dispatch</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 7. HOSPITAL FACILITIES & ROOM TYPES (40 BEDDED CENTER) */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              40 Bedded Hospital <span className="gradient-text">Facilities & Amenities</span>
            </h2>
            <p className="text-slate-600 text-sm">
              General, Semi-Deluxe & Deluxe rooms equipped with Central Oxygen, Compressed Air, Suction & 100% DG Auto Backup.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {CHILDREN_FACILITIES_LIST.map((fac, idx) => (
              <div key={idx} className="glass-card p-5 rounded-2xl text-center border border-white/80 space-y-2 hover:border-primary/40 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary mx-auto flex items-center justify-center text-xl shadow-md">
                  {fac.icon === 'FaBed' && <FaBed />}
                  {fac.icon === 'FaWind' && <FaWind />}
                  {fac.icon === 'FaPills' && <FaPills />}
                  {fac.icon === 'FaXRay' && <FaXRay />}
                  {fac.icon === 'FaFlask' && <FaFlask />}
                  {fac.icon === 'FaAmbulance' && <FaAmbulance />}
                  {fac.icon === 'FaBolt' && <FaBolt />}
                  {fac.icon === 'FaVideo' && <FaVideo />}
                  {fac.icon === 'FaHeart' && <FaHeart />}
                  {fac.icon === 'FaSyringe' && <FaSyringe />}
                </div>
                <p className="text-xs font-extrabold text-slate-800 leading-snug">{fac.name}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. SERVICES GRID */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs">
              <FaStethoscope /> Comprehensive Pediatric Specialties
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              World-Class Facilities & <span className="gradient-text">Child Specialities</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="glass-card p-6 rounded-3xl relative flex flex-col justify-between group border border-white/80"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-primary/10 to-accent/20 text-primary flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                      {service.id === 'general-pediatrics' && <FaStethoscope />}
                      {service.id === 'newborn-care' && <FaBaby />}
                      {service.id === 'neonatology' && <FaUserMd />}
                      {service.id === 'nicu' && <FaMicroscope />}
                      {service.id === 'picu' && <FaProcedures />}
                      {service.id === 'vaccination-centre' && <FaSyringe />}
                      {service.id === 'child-emergency-care' && <FaAmbulance />}
                      {service.id !== 'general-pediatrics' && service.id !== 'newborn-care' && service.id !== 'neonatology' && service.id !== 'nicu' && service.id !== 'picu' && service.id !== 'vaccination-centre' && service.id !== 'child-emergency-care' && <FaHeartbeat />}
                    </div>

                    {service.badge && (
                      <span className="px-3 py-1 rounded-full bg-emerald-500 text-white font-extrabold text-[10px] uppercase shadow-sm">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {service.highlights.slice(0, 3).map((h, i) => (
                      <li key={i} className="text-xs text-slate-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-200/60">
                  <button
                    onClick={onOpenBooking}
                    className="w-full py-2.5 rounded-xl bg-slate-100 group-hover:bg-primary group-hover:text-white text-slate-800 font-bold text-xs transition-all flex items-center justify-center gap-2"
                  >
                    <FaCalendarCheck /> Book Consult for {service.title}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. MISSION & VISION */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/80 shadow-xl relative overflow-hidden"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-primary to-accent text-white flex items-center justify-center text-2xl mb-6 shadow-md">
                <FaHeart />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Our Mission</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Deliver compassionate, affordable and advanced pediatric healthcare while ensuring every child receives the best possible treatment in a safe, healing environment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/80 shadow-xl relative overflow-hidden"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-400 to-teal-600 text-white flex items-center justify-center text-2xl mb-6 shadow-md">
                <FaAward />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Our Vision</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                To become the most trusted children’s hospital in Rajasthan by delivering world-class pediatric healthcare, neonatal excellence, and child safety.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 10. WHY CHOOSE US */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Why Parents Choose <span className="gradient-text">Radiant Children's Hospital</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-3xl border border-white/80 flex items-start gap-4 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-xl shrink-0 mt-1">
                  <FaCheckCircle className="text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. EMERGENCY CTA BANNER */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-primary via-accent to-secondary p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl space-y-6 relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white font-bold text-xs uppercase tracking-wider">
                24×7 Emergency Response Ready
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Need Immediate Pediatric Care or Emergency Doctor?
              </h2>
              <p className="text-white/90 text-base sm:text-lg font-medium">
                Our 40-bedded hospital, emergency desk, pediatricians, and Level III NICU/PICU units are operational 24 hours a day in Udaipur.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={`tel:${HOSPITAL_INFO.phone}`}
                  className="px-8 py-4 rounded-full bg-white text-primary font-black text-base shadow-xl hover:bg-slate-100 transition-all flex items-center gap-3 animate-pulse"
                >
                  <FaPhoneAlt /> Call Now: {HOSPITAL_INFO.phone}
                </a>
                <button
                  onClick={onOpenBooking}
                  className="px-8 py-4 rounded-full bg-slate-900/40 hover:bg-slate-900/60 border border-white/40 text-white font-black text-base backdrop-blur-md transition-all flex items-center gap-2"
                >
                  <FaCalendarCheck /> Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. TESTIMONIALS CAROUSEL */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 font-bold text-xs">
              <FaStar className="text-amber-500" /> Parent Reviews
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              What Parents Say About <span className="gradient-text">Our Care</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/80 shadow-2xl text-center relative"
            >
              <FaQuoteLeft className="text-4xl sm:text-5xl text-primary/20 mx-auto mb-6" />
              <p className="text-slate-700 text-lg sm:text-xl italic font-medium leading-relaxed mb-6">
                "{TESTIMONIALS[currentTestimonial].comment}"
              </p>
              <div className="flex justify-center gap-1 text-amber-400 mb-4 text-lg">
                {[...Array(TESTIMONIALS[currentTestimonial].rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <h4 className="text-xl font-black text-slate-900">
                {TESTIMONIALS[currentTestimonial].parentName}
              </h4>
              <p className="text-xs font-bold text-primary">
                {TESTIMONIALS[currentTestimonial].childInfo} • {TESTIMONIALS[currentTestimonial].location}
              </p>
            </motion.div>

            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-slate-700 hover:text-primary font-bold shadow-md transition-transform active:scale-95"
                aria-label="Previous review"
              >
                ←
              </button>
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      idx === currentTestimonial ? 'bg-primary w-8' : 'bg-slate-300'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-slate-700 hover:text-primary font-bold shadow-md transition-transform active:scale-95"
                aria-label="Next review"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 13. FAQ ACCORDION */}
      <section className="relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-slate-600 text-sm">
              Answers to common parent questions regarding OPD timings, Level III NICU, emergency care, and hospital amenities.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div
                key={faq.id}
                className="glass-panel rounded-2xl overflow-hidden border border-white/80 shadow-md transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-800 hover:text-primary text-base sm:text-lg"
                >
                  <span>{faq.question}</span>
                  <FaChevronDown
                    className={`text-slate-400 transition-transform duration-300 ${
                      activeFaq === faq.id ? 'rotate-180 text-primary' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeFaq === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-5 pb-6 sm:px-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
