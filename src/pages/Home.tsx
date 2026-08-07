import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCalendarCheck, FaPhoneAlt, FaHeartbeat, FaStethoscope, FaBaby, 
  FaUserMd, FaSyringe, FaMicroscope, FaProcedures, FaChevronDown, 
  FaStar, FaQuoteLeft, FaAmbulance, FaAward, FaShieldAlt, FaCheckCircle,
  FaHeart, FaLightbulb, FaHandsWash, FaBalanceScale, FaSyncAlt, FaUserCheck,
  FaChevronLeft, FaChevronRight, FaHospital, FaClock, FaChild
} from 'react-icons/fa';
import { HOSPITAL_INFO, KEY_METRICS, SERVICES_DATA, CORE_VALUES, WHY_CHOOSE_US, TESTIMONIALS, FAQS } from '../data/hospitalData';
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
      badge: "9 Kamla Nagar, 100 Feet Road, Udaipur",
      highlight: "Advanced Pediatric Hospital Facility"
    },
    {
      image: hospitalNicu,
      title: "Level III NICU & PICU Critical Care Nursery",
      badge: "24×7 Intensive Newborn & Child Monitoring",
      highlight: "State-of-the-Art Incubators & Ventilators"
    },
    {
      image: hospitalNight,
      title: "24×7 Emergency Desk & Reception",
      badge: "24 Hours Emergency Response • Udaipur",
      highlight: "Round-the-Clock Pediatricians On-Call"
    }
  ];

  // Metric theme configuration for vibrant 3D glass cards
  const metricThemes = [
    {
      gradient: 'from-blue-600 via-cyan-500 to-teal-400',
      iconBg: 'bg-gradient-to-tr from-blue-600 to-cyan-400',
      shadow: 'shadow-blue-500/30',
      badge: 'Verified Care',
      Icon: FaChild
    },
    {
      gradient: 'from-indigo-600 via-purple-500 to-pink-500',
      iconBg: 'bg-gradient-to-tr from-indigo-600 to-purple-500',
      shadow: 'shadow-purple-500/30',
      badge: '15+ Yrs Expertise',
      Icon: FaAward
    },
    {
      gradient: 'from-rose-500 via-red-500 to-amber-500',
      iconBg: 'bg-gradient-to-tr from-rose-500 to-amber-500',
      shadow: 'shadow-rose-500/30',
      badge: '24×7 Emergency',
      Icon: FaClock
    },
    {
      gradient: 'from-emerald-500 via-teal-400 to-cyan-400',
      iconBg: 'bg-gradient-to-tr from-emerald-500 to-teal-400',
      shadow: 'shadow-emerald-500/30',
      badge: 'Child Focused',
      Icon: FaHeart
    },
    {
      gradient: 'from-cyan-600 via-sky-500 to-blue-500',
      iconBg: 'bg-gradient-to-tr from-cyan-600 to-blue-500',
      shadow: 'shadow-cyan-500/30',
      badge: 'Level III NICU',
      Icon: FaMicroscope
    },
    {
      gradient: 'from-purple-600 via-violet-500 to-fuchsia-500',
      iconBg: 'bg-gradient-to-tr from-purple-600 to-fuchsia-500',
      shadow: 'shadow-fuchsia-500/30',
      badge: 'Dedicated PICU',
      Icon: FaProcedures
    }
  ];

  // Auto slide hero every 5 seconds
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
      <SEO title="Radiant Children's Hospital | Trusted Pediatric & Emergency Care in Udaipur" />

      {/* 1. EDGE-TO-EDGE FULL WIDTH HERO SLIDER */}
      <section className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center overflow-hidden bg-slate-950 text-white">
        
        {/* Background Sliding Images (100% Screen Width) */}
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

        {/* Soft, light gradient overlay for clear image visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/65 via-slate-900/35 to-slate-950/20 pointer-events-none" />

        {/* Side Arrow Navigation Buttons */}
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

        {/* Centered Hero Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Headline, Subtitle & Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8 space-y-6 text-left text-white"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/30 text-white font-bold text-xs sm:text-sm shadow-md">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                Premier Pediatric, Neonatal & Emergency Hospital in Udaipur
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] drop-shadow-md">
                Caring for Every Child, <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-teal-200 bg-clip-text text-transparent">Every Step of the Way</span>
              </h1>

              <p className="text-slate-100 text-base sm:text-lg lg:text-xl font-semibold leading-relaxed max-w-2xl drop-shadow-sm">
                {HOSPITAL_INFO.subheading}
              </p>

              {/* Buttons */}
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

              {/* Trust Badges */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-white/20">
                {[
                  { title: "0-18 Years", sub: "Complete Care" },
                  { title: "24×7 Emergency", sub: "Always Ready" },
                  { title: "NICU & PICU", sub: "Level III ICUs" },
                  { title: "Vaccination", sub: "WHO Approved" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-900/50 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 text-center">
                    <div className="text-sm font-black text-white">{item.title}</div>
                    <div className="text-[11px] font-bold text-cyan-300">{item.sub}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Active Slide Details Card & Indicators */}
            <div className="lg:col-span-4 flex flex-col justify-end items-end space-y-4">
              
              {/* Active Slide Info Card */}
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

              {/* Slide Pagination Dots */}
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
                  {/* Top Glowing Bar */}
                  <div className={`absolute top-0 left-6 right-6 h-1 rounded-b-full bg-gradient-to-r ${theme.gradient}`} />

                  {/* Floating 3D Icon Badge (No Clipping) */}
                  <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl ${theme.iconBg} text-white flex items-center justify-center text-xl shadow-lg ${theme.shadow} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border-2 border-white z-10`}>
                    <IconComp />
                  </div>

                  {/* Number Value */}
                  <div className="mt-1">
                    <span className={`text-3xl sm:text-4xl font-black tracking-tight bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform inline-block`}>
                      {metric.value}
                    </span>
                    <h3 className="text-xs font-black text-slate-800 uppercase tracking-wider mt-1.5 leading-tight">
                      {metric.label}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[11px] text-slate-500 font-semibold leading-relaxed mt-2 line-clamp-2">
                    {metric.description}
                  </p>

                  {/* Bottom Highlight Tag */}
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

      {/* 3. ABOUT US PREVIEW */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/80 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs">
                  <FaHeartbeat /> About Radiant Children's Hospital
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Compassionate Healthcare for Children <span className="gradient-text">Birth to 18 Years</span>
                </h2>

                <p className="text-slate-600 text-base leading-relaxed">
                  Radiant Children's Hospital in Udaipur is dedicated exclusively to child healthcare. Equipped with state-of-the-art Level III NICU, PICU, full-fledged OPD, 24x7 Emergency services, and a WHO-standard Vaccination Centre, we provide comprehensive, gentle treatment for your little ones.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {[
                    "Experienced Pediatricians",
                    "Best Neonatologists in Udaipur",
                    "Level III Advanced NICU Setup",
                    "Dedicated Pediatric ICU (PICU)",
                    "24x7 Critical Emergency",
                    "Affordable & Ethical Care"
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                      <FaCheckCircle className="text-emerald-500 text-base shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full gradient-btn text-white font-bold text-sm shadow-md"
                  >
                    Learn More About Us & Our Team
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                <img
                  src={hospitalNicu}
                  alt="Radiant Children's Hospital Level III NICU"
                  className="rounded-2xl shadow-md h-52 sm:h-64 w-full object-cover hover:scale-105 transition-transform"
                />
                <img
                  src={hospitalExterior}
                  alt="Radiant Children's Hospital Exterior"
                  className="rounded-2xl shadow-md h-52 sm:h-64 w-full object-cover mt-6 hover:scale-105 transition-transform"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES GRID */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs">
              <FaStethoscope /> Comprehensive Pediatric Specialties
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              World-Class Facilities & <span className="gradient-text">Child Specialities</span>
            </h2>
            <p className="text-slate-600 text-base">
              From routine wellness checks to high-risk neonatal intensive care, we provide expert medical care tailored specifically for children.
            </p>
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

          <div className="text-center pt-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-btn text-white font-extrabold text-base shadow-xl hover:scale-105 transition-all"
            >
              Explore All Services & Treatments
            </Link>
          </div>

        </div>
      </section>

      {/* 5. MISSION & VISION */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission Glass Card */}
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

            {/* Vision Glass Card */}
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

      {/* 6. CORE VALUES */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 font-bold text-xs">
              <FaShieldAlt /> Guiding Healthcare Principles
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-slate-600 text-sm">
              The foundational pillars that guide every doctor, nurse, and staff member at Radiant Children's Hospital.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val) => (
              <div
                key={val.id}
                className="glass-card p-6 rounded-3xl border border-white/80 space-y-3 group hover:border-primary/40"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${val.color} text-white flex items-center justify-center text-xl shadow-md group-hover:scale-110 transition-transform`}>
                  {val.id === 'compassion' && <FaHeart />}
                  {val.id === 'integrity' && <FaShieldAlt />}
                  {val.id === 'patient-first' && <FaUserCheck />}
                  {val.id === 'innovation' && <FaLightbulb />}
                  {val.id === 'safety' && <FaHandsWash />}
                  {val.id === 'excellence' && <FaStar />}
                  {val.id === 'ethical-healthcare' && <FaBalanceScale />}
                  {val.id === 'continuous-care' && <FaSyncAlt />}
                </div>

                <h4 className="text-lg font-black text-slate-900">{val.title}</h4>
                <p className="text-slate-600 text-xs leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. WHY CHOOSE US */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Why Parents Choose <span className="gradient-text">Radiant Children's Hospital</span>
            </h2>
            <p className="text-slate-600 text-sm">
              We understand that your child deserves only the best medical care and gentlest treatment.
            </p>
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

      {/* 8. EMERGENCY CTA BANNER */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-primary via-accent to-secondary p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-10 text-[200px] font-black pointer-events-none select-none">
              24x7
            </div>

            <div className="max-w-3xl space-y-6 relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white font-bold text-xs uppercase tracking-wider">
                24×7 Emergency Response Ready
              </span>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Need Immediate Pediatric Care or Emergency Doctor?
              </h2>

              <p className="text-white/90 text-base sm:text-lg font-medium">
                Our emergency desk, pediatricians, and Level III NICU/PICU units are operational 24 hours a day in Udaipur.
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

      {/* 9. TESTIMONIALS CAROUSEL */}
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

          {/* Testimonial Card */}
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

            {/* Slider Navigation Controls */}
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

      {/* 10. FAQ ACCORDION */}
      <section className="relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-slate-600 text-sm">
              Answers to common parent questions regarding pediatric care, appointments, and emergency services.
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
