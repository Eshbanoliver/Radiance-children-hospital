import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaStethoscope, FaBaby, FaUserMd, FaMicroscope, FaProcedures, 
  FaSyringe, FaChartLine, FaAppleAlt, FaAmbulance, FaThermometerHalf, 
  FaLungs, FaHeartbeat, FaSearch, FaCalendarCheck, FaCheckCircle, 
  FaPhoneAlt
} from 'react-icons/fa';
import { SERVICES_DATA, HOSPITAL_INFO } from '../data/hospitalData';
import { SEO } from '../components/SEO';

interface ServicesPageProps {
  onOpenBooking: (serviceTitle?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Critical Care', 'General Care', 'Specialized', 'Wellness'];

  const quickSearchTags = ['Level III NICU', 'PICU', 'Vaccination', 'ABG Analyzer', 'Ambulance', 'Asthma Care'];

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.fullDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getServiceTheme = (serviceId: string) => {
    switch (serviceId) {
      case 'nicu':
      case 'picu':
      case 'child-emergency-care':
        return {
          cardBg: 'bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900 text-white border-emerald-500/35 hover:border-emerald-400/80 shadow-emerald-500/10 hover:shadow-emerald-500/25',
          headerGradient: 'from-emerald-600 via-teal-600 to-cyan-600',
          badgeText: 'Level III NICU Unit',
          badgeStyle: 'bg-emerald-400/20 text-emerald-300 border-emerald-400/30',
          iconBg: 'from-emerald-400 via-teal-400 to-cyan-400 text-slate-950',
          boxBg: 'bg-slate-900/90 border-emerald-500/25 text-emerald-100',
          btnStyle: 'bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-slate-950 hover:scale-[1.02]'
        };
      case 'vaccination-centre':
      case 'growth-development':
      case 'nutrition-growth':
        return {
          cardBg: 'bg-gradient-to-br from-white via-indigo-50/40 to-white text-slate-900 border-indigo-200/90 hover:border-indigo-400/90 shadow-indigo-500/10 hover:shadow-indigo-500/25',
          headerGradient: 'from-indigo-600 via-purple-600 to-pink-500',
          badgeText: 'WHO Standard',
          badgeStyle: 'bg-indigo-100 text-indigo-900 border-indigo-200',
          iconBg: 'from-indigo-500 via-purple-500 to-pink-500 text-white',
          boxBg: 'bg-indigo-50/80 border-indigo-200/80 text-indigo-950',
          btnStyle: 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white hover:scale-[1.02]'
        };
      case 'asthma-allergy':
      case 'fever-infection':
        return {
          cardBg: 'bg-gradient-to-br from-white via-rose-50/40 to-white text-slate-900 border-rose-200/90 hover:border-rose-400/90 shadow-rose-500/10 hover:shadow-rose-500/25',
          headerGradient: 'from-rose-500 via-pink-500 to-orange-500',
          badgeText: 'Targeted Care',
          badgeStyle: 'bg-rose-100 text-rose-900 border-rose-200',
          iconBg: 'from-rose-500 via-pink-500 to-orange-500 text-white',
          boxBg: 'bg-rose-50/80 border-rose-200/80 text-rose-950',
          btnStyle: 'bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 text-white hover:scale-[1.02]'
        };
      default:
        return {
          cardBg: 'bg-gradient-to-br from-white via-cyan-50/40 to-white text-slate-900 border-cyan-200/90 hover:border-cyan-400/90 shadow-cyan-500/10 hover:shadow-cyan-500/25',
          headerGradient: 'from-cyan-500 via-teal-500 to-blue-600',
          badgeText: 'Speciality Care',
          badgeStyle: 'bg-cyan-100 text-cyan-900 border-cyan-200',
          iconBg: 'from-cyan-500 via-teal-500 to-blue-600 text-white',
          boxBg: 'bg-cyan-50/80 border-cyan-200/80 text-cyan-950',
          btnStyle: 'bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 text-white hover:scale-[1.02]'
        };
    }
  };

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'general-pediatrics': return <FaStethoscope />;
      case 'newborn-care': return <FaBaby />;
      case 'neonatology': return <FaUserMd />;
      case 'nicu': return <FaMicroscope />;
      case 'picu': return <FaProcedures />;
      case 'vaccination-centre': return <FaSyringe />;
      case 'growth-development': return <FaChartLine />;
      case 'nutrition-counseling': return <FaAppleAlt />;
      case 'child-emergency-care': return <FaAmbulance />;
      case 'fever-infection': return <FaThermometerHalf />;
      case 'asthma-allergy': return <FaLungs />;
      case 'health-checkups': return <FaHeartbeat />;
      default: return <FaStethoscope />;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16 overflow-hidden">
      <SEO 
        title="Services & Specialties | Radiant Children's Hospital Udaipur" 
        description="Comprehensive pediatric medical services: General Pediatrics, 24x7 Emergency, Level III NICU, PICU, Vaccination Centre, Growth Monitoring, Asthma Care, and Newborn Care in Udaipur."
      />

      {/* 1. HERO HEADER BANNER WITH PULSING BADGE */}
      <section className="relative pt-6 pb-6 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-emerald-500/10 to-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900 text-white font-extrabold text-xs shadow-xl border border-slate-700/60"
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-emerald-300 uppercase tracking-wider font-black">🩺 24×7 PEDIATRIC & NEONATAL SPECIALTIES • UDAIPUR</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight"
          >
            Comprehensive <span className="gradient-text">Child Medical Care</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base sm:text-xl leading-relaxed font-medium max-w-3xl mx-auto"
          >
            From Level III NICU premature baby survival to WHO vaccination, 24x7 pediatric emergency triage, and asthma care for children from birth to 18 years.
          </motion.p>

          {/* Quick Highlight Stats Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-extrabold">
            <span className="px-3.5 py-1.5 rounded-full bg-cyan-100 text-cyan-900 border border-cyan-200">
              ⚡ Level III NICU & HFOV
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-900 border border-purple-200">
              👶 24x7 On-Duty Intensivists
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200">
              🧪 Bedside ABG Blood Gas Analyzer
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-rose-100 text-rose-900 border border-rose-200">
              🚑 24x7 Mobile ICU Ambulance
            </span>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE FILTER & SEARCH SUITE */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="rounded-[2.5rem] bg-gradient-to-br from-white via-cyan-50/40 to-white p-6 sm:p-8 border border-cyan-200/90 shadow-2xl space-y-6">
            
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              
              {/* Search Box */}
              <div className="relative w-full lg:w-96">
                <FaSearch className="absolute left-4 top-4 text-cyan-600 text-base" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services (e.g. NICU, Vaccine, ABG)..."
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-cyan-200/90 text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 shadow-sm transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-3.5 text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 px-2 py-1 rounded-full font-bold"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-5 py-3 rounded-full text-xs font-black transition-all duration-300 ${
                        isActive
                          ? 'bg-slate-900 text-white shadow-xl scale-105 border border-slate-700'
                          : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-xs'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Quick Search Tag Chips */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-cyan-200/60 text-xs font-semibold">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-slate-500 font-extrabold uppercase text-[10px]">Popular:</span>
                {quickSearchTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    className="px-3 py-1 rounded-full bg-white hover:bg-cyan-100 text-cyan-900 border border-cyan-200 font-bold transition-all text-[11px]"
                  >
                    🔍 {tag}
                  </button>
                ))}
              </div>

              <div className="text-emerald-700 font-black text-xs">
                Showing {filteredServices.length} {filteredServices.length === 1 ? 'Specialty' : 'Specialties'}
              </div>
            </div>

          </div>

          {/* 3. MULTI-COLOR 3D GRAPHIC GLASS CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredServices.map((service, idx) => {
                const theme = getServiceTheme(service.id);
                const isDark = service.id === 'nicu' || service.id === 'picu' || service.id === 'child-emergency-care';
                return (
                  <motion.div
                    key={service.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className={`rounded-[2.5rem] border shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 group relative ${theme.cardBg}`}
                  >
                    <div>
                      {/* Top Graphic Header Banner */}
                      <div className={`h-28 bg-gradient-to-r ${theme.headerGradient} p-5 relative overflow-hidden flex items-start justify-between text-white`}>
                        <div className="absolute -right-8 -bottom-8 w-28 h-28 bg-white/20 rounded-full blur-xl pointer-events-none" />
                        <div className="absolute -left-8 -top-8 w-28 h-28 bg-black/10 rounded-full blur-lg pointer-events-none" />

                        <span className={`px-3 py-1 rounded-full font-black text-[10px] uppercase tracking-wider border backdrop-blur-md ${theme.badgeStyle}`}>
                          {service.category}
                        </span>

                        <span className="font-black text-2xl text-white/40 tracking-tighter">
                          #{String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Floating 3D Graphic Icon Container (Bridging Seam) */}
                      <div className="-mt-10 px-6 flex justify-between items-end relative z-10">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${theme.iconBg} flex items-center justify-center text-3xl shadow-xl border-4 ${isDark ? 'border-slate-900' : 'border-white'} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                          {getServiceIcon(service.id)}
                        </div>

                        <span className={`px-2.5 py-0.5 rounded-full font-extrabold text-[10px] border ${isDark ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30' : 'bg-slate-100 text-slate-700 border-slate-200'}`}>
                          {theme.badgeText}
                        </span>
                      </div>

                      {/* Card Content Body */}
                      <div className="p-6 sm:p-7 pt-4 space-y-4">
                        <div>
                          <h3 className={`text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'} group-hover:text-primary transition-colors leading-snug`}>
                            {service.title}
                          </h3>

                          <p className={`text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-slate-600'} leading-relaxed mt-2`}>
                            {service.fullDesc}
                          </p>
                        </div>

                        {/* Clinical Features Box */}
                        <div className={`p-4 rounded-2xl border ${theme.boxBg} space-y-2.5 shadow-xs`}>
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-black uppercase tracking-wider block">Clinical Features:</span>
                            <span className="text-[10px] font-extrabold text-emerald-500 flex items-center gap-1">
                              <FaCheckCircle className="text-[10px]" /> Verified
                            </span>
                          </div>

                          <div className="space-y-2">
                            {service.highlights.map((h, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs font-bold leading-snug">
                                <FaCheckCircle className="text-emerald-500 text-xs shrink-0" />
                                <span>{h}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="p-6 sm:p-7 pt-0">
                      <button
                        onClick={() => onOpenBooking(service.title)}
                        className={`w-full py-3.5 px-5 rounded-2xl font-black text-xs shadow-xl flex items-center justify-center gap-2 transition-all ${theme.btnStyle}`}
                      >
                        <FaCalendarCheck /> Book Consult for {service.title}
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filteredServices.length === 0 && (
            <div className="text-center py-16 rounded-[2.5rem] bg-white border border-slate-200 shadow-xl space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center text-3xl font-black">
                🔍
              </div>
              <h3 className="text-xl font-black text-slate-900">No Services Found</h3>
              <p className="text-slate-600 text-sm font-semibold">No pediatric specialties matched "{searchQuery}". Try clearing filters or search terms.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="px-6 py-3 rounded-2xl bg-slate-900 text-white font-extrabold text-xs shadow-md hover:bg-slate-800"
              >
                Reset Search Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 4. EMERGENCY NICU & TRANSPORT BANNER */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] bg-gradient-to-r from-slate-950 via-teal-950 to-slate-950 text-white p-8 sm:p-12 shadow-2xl border border-teal-500/30 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 font-extrabold text-xs border border-rose-500/30">
                <FaAmbulance className="animate-pulse" /> 24×7 EMERGENCY AMBULANCE DESK
              </div>

              <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                Need Immediate NICU Admission or Emergency Transport?
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
                Mobile ICU ambulance equipped with Neopuff resuscitator, Embrace Nest, and accompanied by a Neonatal Intensivist.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <a
                href={`tel:${HOSPITAL_INFO.phone}`}
                className="py-4 px-8 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-black text-sm sm:text-base shadow-xl flex items-center gap-2 transition-all"
              >
                <FaPhoneAlt /> Call Desk: {HOSPITAL_INFO.phone}
              </a>

              <button
                onClick={() => onOpenBooking('Emergency Triage')}
                className="py-4 px-8 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 font-black text-sm sm:text-base shadow-lg flex items-center gap-2 transition-all"
              >
                <FaCalendarCheck /> Book Consult
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

