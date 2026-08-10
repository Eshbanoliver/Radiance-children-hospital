import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCalendarCheck, FaPhoneAlt, FaHeartbeat, FaStethoscope, FaBaby, 
  FaUserMd, FaSyringe, FaMicroscope, FaProcedures, FaChevronDown, 
  FaStar, FaQuoteLeft, FaAmbulance, FaAward, FaShieldAlt, FaCheckCircle,
  FaHeart, FaChevronLeft, FaChevronRight, FaHospital, FaChild, FaWind,
  FaPills, FaXRay, FaFlask, FaBolt, FaVideo, FaBed, FaHandsWash as FaHands,
  FaAppleAlt, FaThermometerHalf, FaLungs, FaClock, FaPause, FaPlay,
  FaSearch, FaQuestionCircle, FaWhatsapp, FaTimes, FaFilter
} from 'react-icons/fa';
import { 
  HOSPITAL_INFO, KEY_METRICS, SERVICES_DATA, WHY_CHOOSE_US, 
  TESTIMONIALS, FAQS, TRANSPORT_SYSTEM_DETAILS 
} from '../data/hospitalData';
import { SEO } from '../components/SEO';

import hospitalExterior from '../assets/hospital-exterior.png';
import hospitalNicu from '../assets/hospital-nicu.png';
import hospitalNight from '../assets/hospital-night.png';
import drDheerajImg from '../assets/dr-dheeraj-diwaakar.jpg';

interface HomeProps {
  onOpenBooking: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenBooking }) => {
  const [activeFaq, setActiveFaq] = useState<string | null>('1');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  const [activePillarTab, setActivePillarTab] = useState<'all' | 'critical' | 'facility' | 'safety' | 'convenience'>('all');
  const [isTestimonialAutoPlaying, setIsTestimonialAutoPlaying] = useState(true);
  const [faqCategoryFilter, setFaqCategoryFilter] = useState<string>('All');
  const [faqSearchQuery, setFaqSearchQuery] = useState<string>('');

  const chooseUsIconMap: Record<string, React.ElementType> = {
    FaBed,
    FaUserMd,
    FaMicroscope,
    FaProcedures,
    FaFlask,
    FaAmbulance,
    FaHeart,
    FaShieldAlt,
    FaClock
  };

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

      {/* 5. MULTI-COLOR GRAPHIC "PREVENTION IS BETTER THAN CURE — INFECTION CONTROL PROTOCOLS" */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-rose-800 font-extrabold text-xs shadow-sm">
              <FaShieldAlt className="text-rose-500" /> Hospital Sterilization & Hygiene Standards
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Prevention is Better Than Cure <span className="gradient-text">— Infection Control Protocols</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              We enforce strict multi-tier sterilization and hygiene protocols across all ICU wards to protect fragile newborns and children from cross-infections.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Sterilizer Clean Air System",
                desc: "Sterilizer systems for clean air filtration in intensive care areas.",
                tag: "Air Sterilization",
                gradient: "from-cyan-500 via-teal-500 to-emerald-500",
                badgeBg: "bg-cyan-50 text-cyan-800 border-cyan-200",
                shadow: "hover:shadow-cyan-500/20 hover:border-cyan-400",
                step: "01",
                icon: FaWind
              },
              {
                title: "Micro Defogger Area Fumigation",
                desc: "Micro defogger machine for total area & ward fumigation.",
                tag: "Ward Defogger",
                gradient: "from-indigo-600 via-purple-600 to-pink-500",
                badgeBg: "bg-indigo-50 text-indigo-800 border-indigo-200",
                shadow: "hover:shadow-indigo-500/20 hover:border-indigo-400",
                step: "02",
                icon: FaShieldAlt
              },
              {
                title: "Smart Access Controlled NICU",
                desc: "Smart access system restricting entry into sterile NICU nurseries.",
                tag: "Access Control",
                gradient: "from-emerald-500 via-teal-500 to-cyan-500",
                badgeBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
                shadow: "hover:shadow-emerald-500/20 hover:border-emerald-400",
                step: "03",
                icon: FaHospital
              },
              {
                title: "ETO Sterilization System",
                desc: "Ethylene Oxide (ETO) Sterilization of critical medical instruments.",
                tag: "ETO Sterilizer",
                gradient: "from-rose-500 via-pink-500 to-rose-600",
                badgeBg: "bg-rose-50 text-rose-800 border-rose-200",
                shadow: "hover:shadow-rose-500/20 hover:border-rose-400",
                step: "04",
                icon: FaMicroscope
              },
              {
                title: "Strict Hand Hygiene Mandate",
                desc: "Strict emphasis on 6-step hand washing & alcohol rub before every touch.",
                tag: "Hand Hygiene",
                gradient: "from-sky-400 via-blue-500 to-indigo-600",
                badgeBg: "bg-sky-50 text-sky-800 border-sky-200",
                shadow: "hover:shadow-sky-500/20 hover:border-sky-400",
                step: "05",
                icon: FaHands
              },
              {
                title: "Minimal Handling Cluster Care",
                desc: "Cluster care approach and minimal handling of fragile premature infants.",
                tag: "Fragile Care",
                gradient: "from-amber-400 via-orange-500 to-amber-600",
                badgeBg: "bg-amber-50 text-amber-800 border-amber-200",
                shadow: "hover:shadow-amber-500/20 hover:border-amber-400",
                step: "06",
                icon: FaBaby
              },
              {
                title: "Antibiotic Stewardship Protocol",
                desc: "Evidence-based protocol system for antibiotic therapy & treatment of neonatal illness.",
                tag: "Rx Protocol",
                gradient: "from-violet-600 via-fuchsia-500 to-pink-500",
                badgeBg: "bg-violet-50 text-violet-800 border-violet-200",
                shadow: "hover:shadow-violet-500/20 hover:border-violet-400",
                step: "07",
                icon: FaPills
              },
              {
                title: "Constant Self-Audit System",
                desc: "Self-Audit in endeavor constantly to upgrade clinical standards in neonatology.",
                tag: "Clinical Audit",
                gradient: "from-teal-500 via-emerald-500 to-emerald-700",
                badgeBg: "bg-teal-50 text-teal-800 border-teal-200",
                shadow: "hover:shadow-teal-500/20 hover:border-teal-400",
                step: "08",
                icon: FaCheckCircle
              }
            ].map((card, idx) => {
              const IconComp = card.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 group ${card.shadow}`}
                >
                  {/* Top Graphic Header with Curved Wave / Diagonal Accent */}
                  <div className={`h-24 bg-gradient-to-r ${card.gradient} p-4 relative overflow-hidden flex items-start justify-between text-white`}>
                    <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/20 rounded-full blur-xl pointer-events-none" />
                    
                    <span className="px-2.5 py-0.5 rounded-full bg-black/20 backdrop-blur-md font-black text-[10px] uppercase tracking-wider text-white border border-white/30">
                      {card.tag}
                    </span>

                    <span className="font-black text-2xl text-white/40 tracking-tighter">
                      #{card.step}
                    </span>
                  </div>

                  {/* Floating 3D Graphic Icon Container (No Clipping) */}
                  <div className="-mt-9 px-6 flex justify-between items-end relative z-10">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${card.gradient} text-white flex items-center justify-center text-2xl shadow-lg border-2 border-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <IconComp />
                    </div>
                  </div>

                  {/* Content Box */}
                  <div className="p-6 pt-3 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-black text-slate-900 group-hover:text-primary transition-colors leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-slate-600 text-xs font-semibold leading-relaxed mt-1.5">
                        {card.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between">
                      <span className={`px-2.5 py-0.5 rounded-full font-black text-[10px] border ${card.badgeBg}`}>
                        Strict Safety Protocol
                      </span>
                      <span className="text-[11px] font-extrabold text-emerald-600 flex items-center gap-1">
                        <FaCheckCircle className="text-xs" /> Verified
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 font-extrabold text-xs shadow-sm">
              <FaHospital className="text-blue-600" /> Complete Inpatient & Diagnostic Amenities
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              40 Bedded Hospital <span className="gradient-text">Facilities & Amenities</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Equipped with General Wards, Semi-Deluxe & Deluxe private suites, central medical oxygen lines, in-house ABG analyzer, and 100% uninterrupted power backup.
            </p>
          </div>

          {/* Top Showcase: 2 Major Feature Layout Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Card 1: 40 Bedded Patient Wards & Rooms (Wide Showcase) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 rounded-3xl bg-gradient-to-br from-white via-cyan-50/50 to-white border border-cyan-200/80 shadow-xl shadow-cyan-500/10 p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white flex items-center justify-center text-2xl font-black shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                      <FaBed />
                    </div>
                    <div>
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-100 text-cyan-800 font-extrabold text-[10px] uppercase tracking-wider border border-cyan-200">
                        Inpatient Center
                      </span>
                      <h3 className="text-2xl font-black text-slate-900 mt-1">40 Bedded Patient Wards & Suites</h3>
                    </div>
                  </div>

                  <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-emerald-500 text-white font-extrabold text-xs shadow-md">
                    24 Hours Nursing
                  </span>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm font-semibold leading-relaxed">
                  Tailored room categories designed for infant comfort, hygiene, and parent convenience during hospital recovery.
                </p>

                {/* Inside Card Graphic Layout: 3 Room Category Sub-Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-white border border-cyan-200 shadow-sm text-center space-y-1 hover:border-cyan-400 transition-colors">
                    <span className="text-xs font-black text-cyan-700 block">General Wards</span>
                    <span className="text-[10px] text-slate-500 font-bold block">Sterile & Monitored</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-blue-200 shadow-sm text-center space-y-1 hover:border-blue-400 transition-colors">
                    <span className="text-xs font-black text-blue-700 block">Semi-Deluxe Rooms</span>
                    <span className="text-[10px] text-slate-500 font-bold block">AC & Private Space</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-indigo-200 shadow-sm text-center space-y-1 hover:border-indigo-400 transition-colors">
                    <span className="text-xs font-black text-indigo-700 block">Deluxe Suites</span>
                    <span className="text-[10px] text-slate-500 font-bold block">Luxury Parent Stay</span>
                  </div>
                </div>

                {/* Central Utility Line Bar */}
                <div className="p-3.5 rounded-2xl bg-cyan-950 text-white flex flex-wrap items-center justify-between gap-2 text-xs font-bold">
                  <span className="flex items-center gap-1.5"><FaWind className="text-cyan-400" /> Central Oxygen</span>
                  <span className="flex items-center gap-1.5"><FaWind className="text-teal-400" /> Compressed Air</span>
                  <span className="flex items-center gap-1.5"><FaWind className="text-emerald-400" /> Vacuum Suction</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2: In-House Diagnostics & ABG Analyzer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-white via-emerald-50/50 to-white border border-emerald-200/80 shadow-xl shadow-emerald-500/10 p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 text-white flex items-center justify-center text-2xl font-black shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform">
                    <FaFlask />
                  </div>
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-[10px] uppercase tracking-wider border border-emerald-200">
                      24×7 Diagnostic Desk
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 mt-1">In-House Diagnostics Unit</h3>
                  </div>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm font-semibold leading-relaxed">
                  Immediate bedside lab diagnostic evaluation without delay for critical pediatric & neonatal patients.
                </p>

                {/* Inside Card Graphic Sub-Pills */}
                <div className="space-y-2.5 pt-1">
                  <div className="p-3 rounded-2xl bg-white border border-emerald-200 flex items-center justify-between text-xs font-bold shadow-sm">
                    <span className="flex items-center gap-2 text-emerald-900"><FaFlask className="text-emerald-500" /> In-House ABG Analyzer</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px]">Blood Gas</span>
                  </div>

                  <div className="p-3 rounded-2xl bg-white border border-teal-200 flex items-center justify-between text-xs font-bold shadow-sm">
                    <span className="flex items-center gap-2 text-teal-900"><FaXRay className="text-teal-500" /> Digital X-Ray & Ultrasound</span>
                    <span className="px-2 py-0.5 rounded-full bg-teal-100 text-teal-700 text-[10px]">Bedside Imaging</span>
                  </div>

                  <div className="p-3 rounded-2xl bg-white border border-cyan-200 flex items-center justify-between text-xs font-bold shadow-sm">
                    <span className="flex items-center gap-2 text-cyan-900"><FaHeartbeat className="text-cyan-500" /> Bedside 2D Echo Setup</span>
                    <span className="px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-700 text-[10px]">Cardiology</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bottom Grid: 6 Infrastructure Cards with Rich Inside Graphic Designs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "In-House Pharmacy & Medical Store",
                desc: "100% genuine pediatric medications, cold-chain vaccines, and medical supplies available round-the-clock.",
                tag: "24x7 Pharmacy",
                badgeBg: "bg-amber-500/15 border-amber-300 text-amber-900",
                shadow: "shadow-amber-500/20 hover:shadow-amber-500/35 border-amber-200/90 bg-gradient-to-br from-amber-500/10 via-white to-amber-500/5",
                iconBg: "from-amber-400 via-orange-500 to-amber-600",
                icon: FaPills,
                highlights: [
                  "100% Genuine Pediatric Medicines",
                  "Strict Cold-Chain Refrigeration",
                  "24/7 Night Dispatch Counter"
                ]
              },
              {
                title: "24x7 Transport Ambulance",
                desc: "Neonatal ambulance equipped with Neopuff, Embrace Nest, oximeter & accompanied by Intensivist.",
                tag: "Emergency Dispatch",
                badgeBg: "bg-rose-500/15 border-rose-300 text-rose-900",
                shadow: "shadow-rose-500/20 hover:shadow-rose-500/35 border-rose-200/90 bg-gradient-to-br from-rose-500/10 via-white to-rose-500/5",
                iconBg: "from-rose-500 via-pink-500 to-rose-600",
                icon: FaAmbulance,
                highlights: [
                  "Neopuff & Embrace Nest Care",
                  "Accompanied by Intensivist Doctor",
                  "Multipara Vital Pulse Oximeter"
                ]
              },
              {
                title: "100% DG Auto Power Backup",
                desc: "Uninterrupted power supply generators ensuring ventilators, incubators, & ICU monitors never shut down.",
                tag: "Zero Downtime",
                badgeBg: "bg-purple-500/15 border-purple-300 text-purple-900",
                shadow: "shadow-purple-500/20 hover:shadow-purple-500/35 border-purple-200/90 bg-gradient-to-br from-purple-500/10 via-white to-purple-500/5",
                iconBg: "from-purple-500 via-indigo-600 to-purple-700",
                icon: FaBolt,
                highlights: [
                  "Zero Downtime Auto-Generators",
                  "Uninterrupted ICU Ventilators",
                  "Automatic Transfer Switch (ATS)"
                ]
              },
              {
                title: "HD CCTV Surveillance & Security",
                desc: "24x7 camera surveillance and smart access security for total infant safety and parent peace of mind.",
                tag: "Child Security",
                badgeBg: "bg-sky-500/15 border-sky-300 text-sky-900",
                shadow: "shadow-sky-500/20 hover:shadow-sky-500/35 border-sky-200/90 bg-gradient-to-br from-sky-500/10 via-white to-sky-500/5",
                iconBg: "from-sky-400 via-blue-500 to-indigo-600",
                icon: FaVideo,
                highlights: [
                  "High-Definition 24x7 Cameras",
                  "Smart Access Restricted NICU",
                  "Parent Comfort Security Setup"
                ]
              },
              {
                title: "Lactation Management Support",
                desc: "Private breastfeeding spaces, infant weaning diet support, and Kangaroo Mother Care (KMC) guidance.",
                tag: "Mother Wellness",
                badgeBg: "bg-pink-500/15 border-pink-300 text-pink-900",
                shadow: "shadow-pink-500/20 hover:shadow-pink-500/35 border-pink-200/90 bg-gradient-to-br from-pink-500/10 via-white to-pink-500/5",
                iconBg: "from-pink-500 via-rose-500 to-purple-500",
                icon: FaHeart,
                highlights: [
                  "Private Lactation & Nursing Rooms",
                  "Infant Weaning Nutrition Chart",
                  "Skin-to-Skin Kangaroo Care"
                ]
              },
              {
                title: "WHO Newborn Screening & Vaccination",
                desc: "Full vaccine stock in cold chain storage, ROP retina screening, and OAE objective hearing checks.",
                tag: "WHO Standard",
                badgeBg: "bg-teal-500/15 border-teal-300 text-teal-900",
                shadow: "shadow-teal-500/20 hover:shadow-teal-500/35 border-teal-200/90 bg-gradient-to-br from-teal-500/10 via-white to-teal-500/5",
                iconBg: "from-teal-400 via-emerald-500 to-teal-700",
                icon: FaSyringe,
                highlights: [
                  "WHO & IAP Immunization Stock",
                  "Retina Specialist ROP Check",
                  "OAE Objective Hearing Test"
                ]
              }
            ].map((fac, idx) => {
              const IconComp = fac.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className={`rounded-3xl p-6 border shadow-xl flex flex-col justify-between space-y-5 transition-all duration-300 group ${fac.shadow}`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${fac.iconBg} text-white flex items-center justify-center text-2xl font-black shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border-2 border-white`}>
                        <IconComp />
                      </div>
                      <span className={`px-2.5 py-1 rounded-full font-black text-[10px] uppercase tracking-wider border ${fac.badgeBg}`}>
                        {fac.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-slate-900 group-hover:text-primary transition-colors leading-snug">
                      {fac.title}
                    </h3>

                    <p className="text-slate-600 text-xs font-semibold leading-relaxed">
                      {fac.desc}
                    </p>

                    {/* Rich Inside Graphic Sub-Pills */}
                    <div className="pt-2 space-y-1.5">
                      {fac.highlights.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-white/80 border border-slate-200/80 text-[11px] font-bold text-slate-800 shadow-sm">
                          <FaCheckCircle className="text-emerald-500 text-xs shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-extrabold text-emerald-600">
                    <span className="flex items-center gap-1"><FaCheckCircle className="text-xs text-emerald-500" /> Clinical Standard</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black">Active 24/7</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 8. SYMMETRICAL MASONRY GRID: COMPREHENSIVE PEDIATRIC SPECIALTIES */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs shadow-sm">
              <FaStethoscope className="text-emerald-600" /> Comprehensive Pediatric Specialties
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              World-Class Facilities & <span className="gradient-text">Child Specialities</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              A balanced clinical spectrum of pediatric, neonatal, critical intensive care, and diagnostic specialties.
            </p>
          </div>

          {/* Symmetrical 3-Column Masonry Waterfall Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            
            {/* COLUMN 1 (LEFT COLUMN - Symmetrical Left Wing) */}
            <div className="space-y-8">
              {/* Card 1 (TALL FEATURE MASONRY CARD - Level III NICU) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-3xl bg-white border border-cyan-200/90 shadow-xl shadow-cyan-500/10 overflow-hidden flex flex-col justify-between transition-all duration-300 group hover:shadow-cyan-500/25"
              >
                <div className="bg-gradient-to-r from-cyan-900 via-teal-900 to-slate-900 text-white p-6 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-300 font-black text-[10px] uppercase border border-cyan-400/30">
                      {SERVICES_DATA[0].badge || 'Critical Care'}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-400 to-teal-400 text-slate-950 flex items-center justify-center text-xl font-black shadow-lg">
                      <FaMicroscope />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-white mt-4">{SERVICES_DATA[0].title}</h3>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-slate-600 text-xs font-semibold leading-relaxed">
                    {SERVICES_DATA[0].fullDesc}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    {SERVICES_DATA[0].highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-cyan-50/70 border border-cyan-100 text-xs font-bold text-cyan-950">
                        <FaCheckCircle className="text-cyan-600 text-xs shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className="w-full py-3 rounded-2xl gradient-btn text-white font-extrabold text-xs shadow-md flex items-center justify-center gap-2"
                  >
                    <FaCalendarCheck /> Book Consult for {SERVICES_DATA[0].title}
                  </button>
                </div>
              </motion.div>

              {/* Card 2 (SHORT MASONRY PILL CARD - OPD Services) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="rounded-3xl bg-gradient-to-br from-white via-blue-50/40 to-white border border-blue-200/80 p-5 shadow-lg flex items-center justify-between gap-4 transition-all group hover:shadow-blue-500/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-xl shrink-0 font-black shadow-md">
                    <FaStethoscope />
                  </div>
                  <div>
                    <h4 className="text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors">{SERVICES_DATA[3].title}</h4>
                    <p className="text-[11px] text-slate-500 font-semibold">{SERVICES_DATA[3].shortDesc}</p>
                  </div>
                </div>
                <button onClick={onOpenBooking} className="px-3 py-2 rounded-xl bg-blue-100 text-blue-800 font-black text-[11px] shrink-0 hover:bg-blue-600 hover:text-white transition-colors">
                  Book
                </button>
              </motion.div>

              {/* Card 3 (MEDIUM MASONRY CARD - General Pediatrics) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="rounded-3xl bg-white border border-slate-200 p-6 shadow-xl space-y-4 hover:border-primary/40 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-xl font-black">
                    <FaChild />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 font-extrabold text-[10px] text-slate-600">0 to 18 Years</span>
                </div>
                <h3 className="text-xl font-black text-slate-900">{SERVICES_DATA[6].title}</h3>
                <p className="text-slate-600 text-xs font-semibold leading-relaxed">{SERVICES_DATA[6].shortDesc}</p>
                <div className="pt-2">
                  <button onClick={onOpenBooking} className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-primary hover:text-white text-slate-800 font-bold text-xs transition-colors flex items-center justify-center gap-1.5">
                    <FaCalendarCheck /> Schedule Consultation
                  </button>
                </div>
              </motion.div>

              {/* Card 4 (TALL FEATURE MASONRY CARD - Growth & Nutrition) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-3xl bg-white border border-amber-200/90 shadow-xl shadow-amber-500/10 overflow-hidden flex flex-col justify-between transition-all duration-300 group hover:shadow-amber-500/25"
              >
                <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white p-6 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-white/20 text-white font-black text-[10px] uppercase border border-white/30">
                      Child Growth
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white text-amber-600 flex items-center justify-center text-xl font-black shadow-lg">
                      <FaAppleAlt />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-white mt-4">{SERVICES_DATA[9].title}</h3>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-slate-600 text-xs font-semibold leading-relaxed">
                    {SERVICES_DATA[9].fullDesc}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    {SERVICES_DATA[9].highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-amber-50 border border-amber-200 text-xs font-bold text-amber-950">
                        <FaCheckCircle className="text-amber-600 text-xs shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className="w-full py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs shadow-md flex items-center justify-center gap-2"
                  >
                    <FaCalendarCheck /> Book Consult for {SERVICES_DATA[9].title}
                  </button>
                </div>
              </motion.div>
            </div>

            {/* COLUMN 2 (CENTER COLUMN - Symmetrical Center Axis) */}
            <div className="space-y-8">
              {/* Card 5 (HERO CENTER MASONRY CARD - Highly Equipped PICU) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-3xl bg-white border border-purple-200/90 shadow-xl shadow-purple-500/10 overflow-hidden flex flex-col justify-between transition-all duration-300 group hover:shadow-purple-500/25"
              >
                <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white p-6 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-purple-400/20 text-purple-300 font-black text-[10px] uppercase border border-purple-400/30">
                      {SERVICES_DATA[1].badge || 'Pediatric ICU'}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-400 to-pink-400 text-slate-950 flex items-center justify-center text-xl font-black shadow-lg">
                      <FaProcedures />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-white mt-4">{SERVICES_DATA[1].title}</h3>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-slate-600 text-xs font-semibold leading-relaxed">
                    {SERVICES_DATA[1].fullDesc}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    {SERVICES_DATA[1].highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-purple-50 border border-purple-200 text-xs font-bold text-purple-950">
                        <FaCheckCircle className="text-purple-600 text-xs shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className="w-full py-3 rounded-2xl bg-purple-700 hover:bg-purple-800 text-white font-extrabold text-xs shadow-md flex items-center justify-center gap-2"
                  >
                    <FaCalendarCheck /> Book Consult for {SERVICES_DATA[1].title}
                  </button>
                </div>
              </motion.div>

              {/* Card 6 (MEDIUM MASONRY CARD - Intact Survival & Newborn Screening) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="rounded-3xl bg-white border border-emerald-200 p-6 shadow-xl space-y-4 hover:border-emerald-400 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center text-xl font-black">
                    <FaHeartbeat />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-[10px] uppercase">ROP & OAE Checks</span>
                </div>
                <h3 className="text-xl font-black text-slate-900">{SERVICES_DATA[4].title}</h3>
                <p className="text-slate-600 text-xs font-semibold leading-relaxed">{SERVICES_DATA[4].shortDesc}</p>
                <div className="pt-2">
                  <button onClick={onOpenBooking} className="w-full py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-600 hover:text-white text-emerald-900 font-bold text-xs transition-colors flex items-center justify-center gap-1.5">
                    <FaCalendarCheck /> Schedule Screening
                  </button>
                </div>
              </motion.div>

              {/* Card 7 (SHORT MASONRY PILL CARD - Newborn Care) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="rounded-3xl bg-gradient-to-br from-white via-teal-50/40 to-white border border-teal-200/80 p-5 shadow-lg flex items-center justify-between gap-4 transition-all group hover:shadow-teal-500/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center text-xl shrink-0 font-black shadow-md">
                    <FaBaby />
                  </div>
                  <div>
                    <h4 className="text-base font-black text-slate-900 group-hover:text-teal-600 transition-colors">{SERVICES_DATA[7].title}</h4>
                    <p className="text-[11px] text-slate-500 font-semibold">{SERVICES_DATA[7].shortDesc}</p>
                  </div>
                </div>
                <button onClick={onOpenBooking} className="px-3 py-2 rounded-xl bg-teal-100 text-teal-800 font-black text-[11px] shrink-0 hover:bg-teal-600 hover:text-white transition-colors">
                  Book
                </button>
              </motion.div>

              {/* Card 8 (MEDIUM MASONRY CARD - Asthma & Allergy Care) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="rounded-3xl bg-white border border-sky-200 p-6 shadow-xl space-y-4 hover:border-sky-400 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-600 flex items-center justify-center text-xl font-black">
                    <FaLungs />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 font-extrabold text-[10px]">Nebulization Unit</span>
                </div>
                <h3 className="text-xl font-black text-slate-900">{SERVICES_DATA[10].title}</h3>
                <p className="text-slate-600 text-xs font-semibold leading-relaxed">{SERVICES_DATA[10].shortDesc}</p>
                <div className="pt-2">
                  <button onClick={onOpenBooking} className="w-full py-2.5 rounded-xl bg-sky-50 hover:bg-sky-600 hover:text-white text-sky-900 font-bold text-xs transition-colors flex items-center justify-center gap-1.5">
                    <FaCalendarCheck /> Schedule Allergy Consult
                  </button>
                </div>
              </motion.div>
            </div>

            {/* COLUMN 3 (RIGHT COLUMN - Symmetrical Right Wing) */}
            <div className="space-y-8">
              {/* Card 9 (TALL FEATURE MASONRY CARD - Transport Ambulance) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-3xl bg-white border border-rose-200/90 shadow-xl shadow-rose-500/10 overflow-hidden flex flex-col justify-between transition-all duration-300 group hover:shadow-rose-500/25"
              >
                <div className="bg-gradient-to-r from-rose-900 via-pink-900 to-slate-900 text-white p-6 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-rose-400/20 text-rose-300 font-black text-[10px] uppercase border border-rose-400/30">
                      {SERVICES_DATA[2].badge || '24x7 Transport'}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-400 to-pink-400 text-slate-950 flex items-center justify-center text-xl font-black shadow-lg">
                      <FaAmbulance />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-white mt-4">{SERVICES_DATA[2].title}</h3>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-slate-600 text-xs font-semibold leading-relaxed">
                    {SERVICES_DATA[2].fullDesc}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    {SERVICES_DATA[2].highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-rose-50 border border-rose-200 text-xs font-bold text-rose-950">
                        <FaCheckCircle className="text-rose-600 text-xs shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`tel:${HOSPITAL_INFO.phone}`}
                    className="w-full py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs shadow-md flex items-center justify-center gap-2"
                  >
                    <FaPhoneAlt /> Call Ambulance: {HOSPITAL_INFO.phone}
                  </a>
                </div>
              </motion.div>

              {/* Card 10 (SHORT MASONRY PILL CARD - Vaccination Centre) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="rounded-3xl bg-gradient-to-br from-white via-emerald-50/40 to-white border border-emerald-200/80 p-5 shadow-lg flex items-center justify-between gap-4 transition-all group hover:shadow-emerald-500/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-xl shrink-0 font-black shadow-md">
                    <FaSyringe />
                  </div>
                  <div>
                    <h4 className="text-base font-black text-slate-900 group-hover:text-emerald-600 transition-colors">{SERVICES_DATA[5].title}</h4>
                    <p className="text-[11px] text-slate-500 font-semibold">{SERVICES_DATA[5].shortDesc}</p>
                  </div>
                </div>
                <button onClick={onOpenBooking} className="px-3 py-2 rounded-xl bg-emerald-100 text-emerald-800 font-black text-[11px] shrink-0 hover:bg-emerald-600 hover:text-white transition-colors">
                  Book
                </button>
              </motion.div>

              {/* Card 11 (MEDIUM MASONRY CARD - In-House ABG & Diagnostics) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="rounded-3xl bg-white border border-indigo-200 p-6 shadow-xl space-y-4 hover:border-indigo-400 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center text-xl font-black">
                    <FaFlask />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 font-extrabold text-[10px]">Bedside Lab</span>
                </div>
                <h3 className="text-xl font-black text-slate-900">{SERVICES_DATA[8].title}</h3>
                <p className="text-slate-600 text-xs font-semibold leading-relaxed">{SERVICES_DATA[8].shortDesc}</p>
                <div className="pt-2">
                  <button onClick={onOpenBooking} className="w-full py-2.5 rounded-xl bg-indigo-50 hover:bg-indigo-600 hover:text-white text-indigo-900 font-bold text-xs transition-colors flex items-center justify-center gap-1.5">
                    <FaCalendarCheck /> Diagnostic Consult
                  </button>
                </div>
              </motion.div>

              {/* Card 12 (TALL FEATURE MASONRY CARD - Fever & Infection Management) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-3xl bg-white border border-teal-200/90 shadow-xl shadow-teal-500/10 overflow-hidden flex flex-col justify-between transition-all duration-300 group hover:shadow-teal-500/25"
              >
                <div className="bg-gradient-to-r from-teal-800 via-emerald-800 to-slate-900 text-white p-6 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-white/20 text-white font-black text-[10px] uppercase border border-white/30">
                      Infection Care
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white text-teal-700 flex items-center justify-center text-xl font-black shadow-lg">
                      <FaThermometerHalf />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-white mt-4">{SERVICES_DATA[11].title}</h3>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-slate-600 text-xs font-semibold leading-relaxed">
                    {SERVICES_DATA[11].fullDesc}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    {SERVICES_DATA[11].highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-teal-50 border border-teal-200 text-xs font-bold text-teal-950">
                        <FaCheckCircle className="text-teal-600 text-xs shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className="w-full py-3 rounded-2xl bg-teal-700 hover:bg-teal-800 text-white font-extrabold text-xs shadow-md flex items-center justify-center gap-2"
                  >
                    <FaCalendarCheck /> Book Consult for {SERVICES_DATA[11].title}
                  </button>
                </div>
              </motion.div>
            </div>

          </div>

          <div className="text-center pt-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-btn text-white font-extrabold text-base shadow-xl hover:scale-105 transition-all"
            >
              Explore All 12 Specialties & Diagnostic Services
            </Link>
          </div>

        </div>
      </section>

      {/* 9. DISTINCT & VIBRANT "OUR MISSION" & "OUR VISION" SECTION */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* 1. OUR MISSION (Royal Teal & Cyan Compassion Theme) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="rounded-[2.5rem] bg-gradient-to-br from-slate-950 via-teal-950 to-cyan-950 text-white p-8 sm:p-12 shadow-2xl border border-teal-500/30 relative overflow-hidden flex flex-col justify-between space-y-8 group transition-all duration-300 hover:border-teal-400/60 hover:shadow-teal-500/20"
            >
              {/* Background Glow Effect */}
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-500 text-white flex items-center justify-center text-3xl font-black shadow-xl shadow-rose-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border-2 border-white/20">
                    <FaHeart />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-teal-400/20 text-teal-300 font-extrabold text-xs uppercase tracking-wider border border-teal-400/30">
                    Our Clinical Mission
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    Caring for Every Child <span className="bg-gradient-to-r from-teal-300 via-cyan-200 to-emerald-300 bg-clip-text text-transparent">With Love & Precision</span>
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium mt-3">
                    Deliver compassionate, affordable, and advanced pediatric healthcare while ensuring every child receives gentle hands and world-class clinical treatment in a safe, sterile environment.
                  </p>
                </div>

                {/* Mission Pillars List */}
                <div className="space-y-2.5 pt-2">
                  {[
                    { text: "Treating Every Child with Family-Level Love", iconColor: "text-rose-400" },
                    { text: "Zero-Compromise Medical Hygiene & Sterilization", iconColor: "text-teal-400" },
                    { text: "Affordable & Ethical Healthcare Without Extra Costs", iconColor: "text-cyan-400" }
                  ].map((pillar, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/60 border border-teal-500/20 text-xs font-bold text-slate-200 backdrop-blur-md">
                      <FaCheckCircle className={`${pillar.iconColor} text-base shrink-0`} />
                      <span>{pillar.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mission Bottom Seal */}
              <div className="relative z-10 pt-4 border-t border-teal-500/20 flex items-center justify-between text-xs font-bold text-teal-300">
                <span>Heart-Led Child Healthcare</span>
                <span className="px-2.5 py-1 rounded-full bg-teal-400/10 border border-teal-400/30 text-[10px] uppercase font-black text-emerald-300">
                  Patient First
                </span>
              </div>
            </motion.div>

            {/* 2. OUR VISION (Midnight Violet & Gold Leadership Theme) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="rounded-[2.5rem] bg-gradient-to-br from-purple-950 via-slate-950 to-indigo-950 text-white p-8 sm:p-12 shadow-2xl border border-purple-500/30 relative overflow-hidden flex flex-col justify-between space-y-8 group transition-all duration-300 hover:border-purple-400/60 hover:shadow-purple-500/20"
            >
              {/* Background Glow Effect */}
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 via-orange-500 to-amber-600 text-slate-950 flex items-center justify-center text-3xl font-black shadow-xl shadow-amber-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border-2 border-white/20">
                    <FaAward />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-purple-400/20 text-purple-300 font-extrabold text-xs uppercase tracking-wider border border-purple-400/30">
                    Our Future Vision
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    Setting the Benchmark for <span className="bg-gradient-to-r from-amber-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">Neonatal Excellence</span>
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium mt-3">
                    To become Rajasthan’s most trusted children’s hospital by pioneering state-of-the-art Level III NICU technology, PICU critical care, intact survival protocols, and continuous pediatric innovation.
                  </p>
                </div>

                {/* Vision Benchmarks List */}
                <div className="space-y-2.5 pt-2">
                  {[
                    { text: "Premier Pediatric & Neonatal Center in Rajasthan", iconColor: "text-amber-400" },
                    { text: "Pioneering Level III HFOV & Mira Cradle Tech", iconColor: "text-purple-400" },
                    { text: "100% Intact Survival & Milestone Development", iconColor: "text-pink-400" }
                  ].map((benchmark, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/60 border border-purple-500/20 text-xs font-bold text-slate-200 backdrop-blur-md">
                      <FaCheckCircle className={`${benchmark.iconColor} text-base shrink-0`} />
                      <span>{benchmark.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vision Bottom Seal */}
              <div className="relative z-10 pt-4 border-t border-purple-500/20 flex items-center justify-between text-xs font-bold text-purple-300">
                <span>Rajasthan Child Healthcare Leadership</span>
                <span className="px-2.5 py-1 rounded-full bg-purple-400/10 border border-purple-400/30 text-[10px] uppercase font-black text-amber-300">
                  Excellence Standard
                </span>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 10. WHY PARENTS CHOOSE US (DYNAMIC & INTERACTIVE REDESIGN) */}
      <section className="relative py-12 overflow-hidden">
        {/* Decorative Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          {/* Header & Eyebrow Pill */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 text-white font-extrabold text-xs shadow-xl backdrop-blur-md"
            >
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-amber-300 font-black uppercase tracking-wider">🏆 UNMATCHED PEDIATRIC STANDARDS IN UDAIPUR</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight"
            >
              Why Parents Choose <span className="gradient-text">Radiant Children's Hospital</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium"
            >
              Combining 24×7 Neonatal Intensive Care expertise, 40-bedded modern hospital infrastructure, zero-compromise sterilization protocols, and family-first compassionate care under one roof.
            </motion.p>
          </div>

          {/* Quick Parent Confidence Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {[
              { label: 'Children Cared For', val: '5,000+', icon: FaChild, color: 'from-blue-600 to-cyan-500', badge: 'Verified Care' },
              { label: 'Hospital Beds', val: '40 Beds', icon: FaBed, color: 'from-purple-600 to-indigo-600', badge: 'Deluxe & Wards' },
              { label: 'Intensivists Availability', val: '24×7 On-Site', icon: FaUserMd, color: 'from-rose-500 to-amber-500', badge: 'Zero Wait Time' },
              { label: 'Intact Survival Focus', val: 'Level III NICU', icon: FaMicroscope, color: 'from-emerald-500 to-teal-600', badge: 'HFOV & CPAP' }
            ].map((metric, idx) => {
              const MetricIcon = metric.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="rounded-2xl bg-white/90 border border-slate-200/90 p-4 shadow-lg flex items-center gap-3.5 backdrop-blur-sm hover:border-primary/40 transition-all group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${metric.color} text-white flex items-center justify-center text-xl shrink-0 font-black shadow-md group-hover:scale-110 transition-transform`}>
                    <MetricIcon />
                  </div>
                  <div>
                    <span className="text-lg sm:text-xl font-black text-slate-900 block leading-tight">{metric.val}</span>
                    <span className="text-[11px] font-bold text-slate-600 block">{metric.label}</span>
                    <span className="text-[9px] font-black text-emerald-600 uppercase tracking-wider block mt-0.5">{metric.badge}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-2">
            {[
              { id: 'all', label: '✨ All 9 Pillars' },
              { id: 'critical', label: '🚨 24×7 Critical Care & NICU' },
              { id: 'facility', label: '🏥 40-Bed Infrastructure & ABG' },
              { id: 'safety', label: '🛡️ Sterile & Intact Survival' },
              { id: 'convenience', label: '⏰ Flexible OPD Timings' }
            ].map((tab) => {
              const isActive = activePillarTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActivePillarTab(tab.id as any)}
                  className={`relative px-4 py-2.5 rounded-full font-extrabold text-xs sm:text-sm transition-all duration-300 ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/20 border border-slate-700'
                      : 'bg-white/80 hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-sm'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Dynamic Interactive Cards Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillarTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {WHY_CHOOSE_US.filter(item => activePillarTab === 'all' || item.category === activePillarTab).map((item, idx) => {
                const IconComp = chooseUsIconMap[item.iconName] || FaCheckCircle;
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className={`rounded-3xl bg-white/95 backdrop-blur-md p-6 border shadow-xl flex flex-col justify-between space-y-5 transition-all duration-300 group ${item.shadow}`}
                  >
                    <div className="space-y-4">
                      {/* Top Bar: Gradient Icon Box + Badge */}
                      <div className="flex items-center justify-between">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${item.gradient} text-white flex items-center justify-center text-2xl font-black shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border-2 border-white`}>
                          <IconComp />
                        </div>
                        <span className={`px-3 py-1 rounded-full font-black text-[10px] uppercase tracking-wider border ${item.badgeBg}`}>
                          {item.badge}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <div>
                        <h3 className="text-xl font-black text-slate-900 group-hover:text-primary transition-colors leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 text-xs sm:text-sm font-semibold leading-relaxed mt-2">
                          {item.desc}
                        </p>
                      </div>

                      {/* Sub-Bullet Highlight Pills */}
                      <div className="pt-2 space-y-1.5">
                        {item.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] font-bold text-slate-800 shadow-xs group-hover:border-slate-300 transition-colors">
                            <FaCheckCircle className="text-emerald-500 text-xs shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer Action */}
                    <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-extrabold text-slate-700">
                      <span className="flex items-center gap-1.5 text-emerald-600">
                        <FaCheckCircle className="text-xs text-emerald-500" /> Clinical Benchmark
                      </span>
                      <button
                        onClick={onOpenBooking}
                        className="px-3 py-1.5 rounded-xl bg-slate-100 group-hover:bg-primary group-hover:text-white font-extrabold text-[11px] transition-colors"
                      >
                        Book Consult
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Interactive Parent Peace of Mind Guarantee Spotlight Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] bg-gradient-to-r from-slate-950 via-teal-950 to-slate-950 text-white p-8 sm:p-12 shadow-2xl border border-teal-500/30 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            {/* Background Glow Effect */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 max-w-2xl relative z-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-400/20 text-teal-300 font-extrabold text-xs uppercase tracking-wider border border-teal-400/30">
                <FaShieldAlt className="text-teal-400" /> Parent Peace of Mind Guarantee
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                24 Hours a Day, 365 Days a Year — <span className="bg-gradient-to-r from-teal-300 via-cyan-200 to-emerald-300 bg-clip-text text-transparent">Your Child is in Safe Hands</span>
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
                Whether it's a routine OPD consultation, midnight fever, emergency transport, or critical Level III NICU ventilation care, our pediatricians and 40-bedded hospital are fully ready for your family.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 shrink-0 w-full sm:w-auto">
              <a
                href={`tel:${HOSPITAL_INFO.phone}`}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-rose-500 to-red-600 text-white font-black text-sm shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2.5 animate-pulse"
              >
                <FaPhoneAlt /> Call 24/7 Hotline: {HOSPITAL_INFO.phone}
              </a>
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-black text-sm backdrop-blur-md transition-all flex items-center justify-center gap-2"
              >
                <FaCalendarCheck /> Book OPD Appointment
              </button>
            </div>
          </motion.div>

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

      {/* 13. FREQUENTLY ASKED QUESTIONS (UNIQUE & INTERACTIVE REDESIGN) */}
      <section className="relative py-12 overflow-hidden">
        {/* Decorative Ambient Lighting */}
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
          
          {/* Header & Eyebrow Pill */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white font-extrabold text-xs shadow-md"
            >
              <FaQuestionCircle className="text-amber-400" />
              <span>PARENT HELPDESK & FAQS</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight"
            >
              Frequently Asked <span className="gradient-text">Questions</span>
            </motion.h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Everything you need to know about OPD schedules, Level III NICU admissions, emergency triage, room categories, and vaccination services.
            </p>
          </div>

          {/* Interactive Search Bar & Topic Quick Chips */}
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 text-lg">
                <FaSearch />
              </div>
              <input
                type="text"
                value={faqSearchQuery}
                onChange={(e) => setFaqSearchQuery(e.target.value)}
                placeholder="Search any question... e.g. OPD timings, NICU, Ambulance, ABG, Rooms"
                className="w-full pl-12 pr-10 py-4 rounded-2xl bg-white border border-slate-200/90 shadow-lg text-slate-800 font-bold placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              {faqSearchQuery && (
                <button
                  onClick={() => setFaqSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600"
                >
                  <FaTimes />
                </button>
              )}
            </div>

            {/* Quick Topic Suggestion Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-extrabold text-slate-600">
              <span className="text-slate-400 flex items-center gap-1 font-bold"><FaFilter className="text-[10px]" /> Popular Queries:</span>
              {[
                'OPD Timings',
                'Level III NICU',
                '24x7 Ambulance',
                'Room Categories',
                'ABG Analyzer',
                'Vaccination'
              ].map((chip, cIdx) => (
                <button
                  key={cIdx}
                  onClick={() => setFaqSearchQuery(chip)}
                  className={`px-3 py-1 rounded-xl transition-all ${
                    faqSearchQuery.toLowerCase() === chip.toLowerCase()
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-white border border-slate-200 hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { id: 'All', label: '✨ All Questions' },
              { id: 'Emergency', label: '🚨 24×7 Emergency Care' },
              { id: 'Facilities', label: '🏥 Level III NICU & Facilities' },
              { id: 'General', label: '⏰ OPD & Contact Info' },
              { id: 'Vaccination', label: '💉 Vaccination Centre' }
            ].map((cat) => {
              const isActive = faqCategoryFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setFaqCategoryFilter(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-black transition-all ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-white/80 border border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* 2-Column FAQ Layout (Sidebar Widget + Accordions) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Sidebar: Urgent Doctor Consultation Widget */}
            <div className="lg:col-span-4 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 text-white p-7 shadow-xl border border-teal-500/30 space-y-6 relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 to-rose-500 text-slate-950 flex items-center justify-center text-xl font-black shadow-lg">
                  <FaStethoscope />
                </div>

                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-teal-400/20 text-teal-300 font-extrabold text-[10px] uppercase border border-teal-400/30 block w-fit mb-2">
                    Didn't find your question?
                  </span>
                  <h3 className="text-xl font-black text-white">Ask Our Medical Desk Directly</h3>
                  <p className="text-slate-300 text-xs font-medium leading-relaxed mt-2">
                    Our 24x7 hospital desk and pediatric intensivists are available on call or WhatsApp for emergency queries.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <a
                    href={`tel:${HOSPITAL_INFO.phone}`}
                    className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-rose-500 to-red-600 text-white font-extrabold text-xs shadow-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform animate-pulse"
                  >
                    <FaPhoneAlt /> Call Desk: {HOSPITAL_INFO.phone}
                  </a>

                  <a
                    href={`https://wa.me/${HOSPITAL_INFO.whatsappPhone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
                  >
                    <FaWhatsapp className="text-base" /> WhatsApp Doctor Inquiry
                  </a>

                  <button
                    onClick={onOpenBooking}
                    className="w-full py-3 px-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-extrabold text-xs backdrop-blur-md flex items-center justify-center gap-2 transition-all"
                  >
                    <FaCalendarCheck /> Book OPD Consult
                  </button>
                </div>

                <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 font-semibold flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-400 text-xs shrink-0" />
                  <span>Average phone response time: &lt; 1 Minute</span>
                </div>
              </motion.div>

              {/* Quick Stat Pill */}
              <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm space-y-2">
                <div className="flex items-center justify-between text-xs font-extrabold text-slate-900">
                  <span>Hospital Coverage</span>
                  <span className="text-emerald-600 font-black">24×7 / 365 Days</span>
                </div>
                <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">
                  Radiant Children's Hospital operates 40 beds, Level III NICU, PICU & Emergency OPD all 365 days of the year in Udaipur.
                </p>
              </div>
            </div>

            {/* Right Column: Unique Interactive Accordions */}
            <div className="lg:col-span-8 space-y-4">
              {(() => {
                const filteredFaqs = FAQS.filter((faq) => {
                  const matchesCategory = faqCategoryFilter === 'All' || faq.category === faqCategoryFilter;
                  const matchesQuery = !faqSearchQuery || (
                    faq.question.toLowerCase().includes(faqSearchQuery.toLowerCase()) ||
                    faq.answer.toLowerCase().includes(faqSearchQuery.toLowerCase())
                  );
                  return matchesCategory && matchesQuery;
                });

                if (filteredFaqs.length === 0) {
                  return (
                    <div className="rounded-3xl bg-white border border-slate-200 p-12 text-center space-y-4 shadow-sm">
                      <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-2xl mx-auto font-black">
                        <FaSearch />
                      </div>
                      <h4 className="text-xl font-black text-slate-900">No matching questions found</h4>
                      <p className="text-slate-600 text-xs font-medium max-w-md mx-auto">
                        We couldn't find an exact match for "{faqSearchQuery}". Try clearing your search or call our 24x7 desk directly.
                      </p>
                      <button
                        onClick={() => { setFaqSearchQuery(''); setFaqCategoryFilter('All'); }}
                        className="px-5 py-2.5 rounded-full bg-slate-900 text-white font-extrabold text-xs"
                      >
                        Clear Search Filters
                      </button>
                    </div>
                  );
                }

                return filteredFaqs.map((faq, idx) => {
                  const isOpen = activeFaq === faq.id;
                  const qNum = String(idx + 1).padStart(2, '0');
                  return (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.04 }}
                      className={`rounded-3xl transition-all duration-300 overflow-hidden border ${
                        isOpen
                          ? 'bg-white border-primary/50 shadow-xl shadow-primary/5 ring-1 ring-primary/30'
                          : 'bg-white/90 border-slate-200/90 hover:border-slate-300 shadow-sm hover:shadow-md'
                      }`}
                    >
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 group"
                      >
                        <div className="flex items-center gap-3.5">
                          <span className={`w-9 h-9 rounded-xl font-black text-xs flex items-center justify-center shrink-0 transition-colors ${
                            isOpen ? 'bg-primary text-white shadow-md' : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                          }`}>
                            Q{qNum}
                          </span>
                          <div>
                            <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-extrabold text-[10px] uppercase tracking-wider mb-1 inline-block">
                              {faq.category}
                            </span>
                            <h3 className={`text-base sm:text-lg font-black leading-snug transition-colors ${
                              isOpen ? 'text-primary' : 'text-slate-900 group-hover:text-primary'
                            }`}>
                              {faq.question}
                            </h3>
                          </div>
                        </div>

                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                          isOpen ? 'bg-primary/10 text-primary rotate-180' : 'bg-slate-100 text-slate-400 group-hover:text-slate-600'
                        }`}>
                          <FaChevronDown className="text-sm" />
                        </div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-6 pb-6 pt-2 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-100 space-y-4">
                              <p className="font-semibold leading-relaxed">
                                {faq.answer}
                              </p>

                              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-slate-100">
                                <div className="flex items-center gap-2 text-emerald-700 font-extrabold text-[11px]">
                                  <FaCheckCircle className="text-emerald-500 text-xs" />
                                  <span>Verified Clinical Information</span>
                                </div>

                                <div className="flex items-center gap-2">
                                  <a
                                    href={`tel:${HOSPITAL_INFO.phone}`}
                                    className="px-3 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-extrabold text-[11px] flex items-center gap-1 transition-colors"
                                  >
                                    <FaPhoneAlt className="text-[10px]" /> Call Hotline
                                  </a>
                                  <button
                                    onClick={onOpenBooking}
                                    className="px-3 py-1 rounded-lg bg-primary/10 hover:bg-primary hover:text-white text-primary font-extrabold text-[11px] transition-colors"
                                  >
                                    Book Consult
                                  </button>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                });
              })()}
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
