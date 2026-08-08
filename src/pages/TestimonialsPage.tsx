import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaStar, FaCheckCircle, FaGoogle, FaCalendarCheck, 
  FaPhoneAlt, FaQuoteLeft, FaSearch, FaHeart
} from 'react-icons/fa';
import { TESTIMONIALS, HOSPITAL_INFO } from '../data/hospitalData';
import { SEO } from '../components/SEO';

interface TestimonialsPageProps {
  onOpenBooking: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onOpenBooking }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const ratingBreakdown = [
    { stars: 5, percentage: 96 },
    { stars: 4, percentage: 4 },
    { stars: 3, percentage: 0 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 0 }
  ];

  const filterTabs = ['All', 'NICU & Preterm', 'Emergency', 'Vaccination', 'General OPD'];

  const marqueePraise = [
    "Dr. Dheeraj saved our twins born at 29 weeks!",
    "Best Level III NICU in Udaipur with HFOV ventilation",
    "24x7 Emergency Desk responded in seconds",
    "Painless vaccination & cold chain reminders",
    "Bedside ABG analyzer gave instant blood gas reports",
    "100% sterile NICU & friendly nursing care"
  ];

  const filteredTestimonials = TESTIMONIALS.filter((item) => {
    const matchesSearch = item.parentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.comment.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.childInfo.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedFilter === 'NICU & Preterm') {
      return matchesSearch && (item.comment.toLowerCase().includes('nicu') || item.comment.toLowerCase().includes('premature') || item.comment.toLowerCase().includes('twin'));
    }
    if (selectedFilter === 'Emergency') {
      return matchesSearch && (item.comment.toLowerCase().includes('emergency') || item.comment.toLowerCase().includes('asthma') || item.comment.toLowerCase().includes('24x7'));
    }
    if (selectedFilter === 'Vaccination') {
      return matchesSearch && (item.comment.toLowerCase().includes('vaccin') || item.comment.toLowerCase().includes('cold chain'));
    }
    if (selectedFilter === 'General OPD') {
      return matchesSearch && (item.comment.toLowerCase().includes('opd') || item.comment.toLowerCase().includes('fever') || item.comment.toLowerCase().includes('growth'));
    }
    return matchesSearch;
  });

  return (
    <div className="space-y-16 sm:space-y-24 pb-16 overflow-hidden">
      <SEO 
        title="Testimonials & Reviews | Radiant Children's Hospital Udaipur" 
        description="Read authentic Google reviews and feedback from parents who trusted Radiant Children's Hospital in Udaipur for NICU, emergency, and pediatric treatment."
      />

      {/* 1. HERO HEADER BANNER WITH VERIFIED BADGE */}
      <section className="relative pt-6 pb-6 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-amber-500/10 via-teal-500/10 to-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900 text-white font-extrabold text-xs shadow-xl border border-slate-700/60"
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400" />
            </span>
            <span className="text-amber-300 uppercase tracking-wider font-black">⭐ 500+ VERIFIED PARENT REVIEWS • 4.9 GOOGLE RATING</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight"
          >
            What Parents Say About <span className="gradient-text">Radiant Care</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base sm:text-xl leading-relaxed font-medium max-w-3xl mx-auto"
          >
            Heartfelt stories and authentic reviews from families whose premature newborns and children received expert treatment at Radiant Children's Hospital, Udaipur.
          </motion.p>
        </div>
      </section>

      {/* 2. GOOGLE RATING SHOWCASE WIDGET */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] bg-gradient-to-br from-white via-amber-50/30 to-white p-8 sm:p-12 border border-amber-200/90 shadow-2xl relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Overall Google Rating Column */}
              <div className="lg:col-span-5 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-slate-200/80 pb-6 lg:pb-0 lg:pr-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 font-extrabold text-xs border border-red-200">
                  <FaGoogle className="text-red-500" /> Official Google Verified Business
                </div>

                <div className="flex items-baseline justify-center lg:justify-start gap-3">
                  <span className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tight">4.9</span>
                  <span className="text-lg font-black text-slate-500">/ 5.0</span>
                </div>

                <div className="flex justify-center lg:justify-start gap-1 text-amber-400 text-2xl">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <div className="space-y-1">
                  <p className="text-slate-800 text-sm font-black">500+ Authentic Parent Reviews</p>
                  <p className="text-slate-500 text-xs font-semibold">98% Recommendation Rate across Udaipur & South Rajasthan</p>
                </div>
              </div>

              {/* Rating Progress Bars Column */}
              <div className="lg:col-span-7 space-y-3">
                <span className="text-xs font-black uppercase tracking-wider text-slate-700 block">
                  Parent Rating Breakdown:
                </span>

                {ratingBreakdown.map((row) => (
                  <div key={row.stars} className="flex items-center gap-4 text-xs font-extrabold text-slate-800">
                    <span className="w-12 flex items-center gap-1">
                      {row.stars} <FaStar className="text-amber-400 text-xs" />
                    </span>

                    <div className="flex-1 h-3.5 rounded-full bg-slate-100 overflow-hidden border border-slate-200/70 p-0.5">
                      <div
                        className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full transition-all duration-1000 shadow-xs"
                        style={{ width: `${row.percentage}%` }}
                      />
                    </div>

                    <span className="w-12 text-right text-emerald-700 font-black">{row.percentage}%</span>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. INFINITE CONTINUOUS MARQUEE PRAISE STRIP */}
      <section className="relative overflow-hidden py-2 bg-slate-900 text-white">
        <div className="flex overflow-x-hidden relative">
          <div className="animate-marquee flex whitespace-nowrap gap-6 py-2.5 text-xs sm:text-sm font-extrabold">
            {marqueePraise.concat(marqueePraise).map((praise, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-200 shrink-0">
                <FaStar className="text-amber-400 text-xs shrink-0" />
                <span>"{praise}"</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE SEARCH & FILTER SUITE */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="rounded-[2.5rem] bg-white p-6 sm:p-8 border border-slate-200 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Search Bar */}
              <div className="relative w-full sm:w-80">
                <FaSearch className="absolute left-4 top-3.5 text-amber-500 text-sm" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search reviews by parent name or topic..."
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 shadow-xs"
                />
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                {filterTabs.map((tab) => {
                  const isActive = selectedFilter === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setSelectedFilter(tab)}
                      className={`px-4 py-2.5 rounded-full text-xs font-black transition-all ${
                        isActive
                          ? 'bg-slate-900 text-white shadow-md scale-105 border border-slate-700'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>

            </div>
          </div>

          {/* 5. 3D GRAPHIC PARENT REVIEW CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredTestimonials.map((t, idx) => (
                <motion.div
                  key={t.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="rounded-[2.5rem] bg-gradient-to-br from-white via-amber-50/20 to-white border border-amber-200/80 shadow-xl hover:shadow-2xl hover:shadow-amber-500/15 p-6 sm:p-8 flex flex-col justify-between relative group transition-all duration-300"
                >
                  <div className="space-y-4">
                    
                    {/* Header: Avatar + Parent Name + Verified Badge */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-14 h-14 rounded-2xl ${t.avatarBg} text-white font-black text-xl flex items-center justify-center shadow-lg border-2 border-white group-hover:rotate-6 transition-transform`}>
                          {t.parentName.charAt(0)}
                        </div>

                        <div>
                          <h3 className="font-black text-slate-900 text-base sm:text-lg flex items-center gap-1.5 leading-snug">
                            {t.parentName}
                            {t.verified && <FaCheckCircle className="text-emerald-500 text-xs shrink-0" title="Verified Google Review" />}
                          </h3>
                          <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 font-extrabold text-[10px] block w-fit mt-0.5 border border-amber-200">
                            {t.childInfo}
                          </span>
                        </div>
                      </div>

                      <div className="w-9 h-9 rounded-xl bg-red-50 text-red-500 flex items-center justify-center text-base shadow-xs border border-red-100 shrink-0">
                        <FaGoogle />
                      </div>
                    </div>

                    {/* Star Rating & Relative Date */}
                    <div className="p-2.5 rounded-2xl bg-amber-500/10 border border-amber-300/40 flex items-center justify-between text-xs font-extrabold">
                      <div className="flex text-amber-400 gap-1 text-sm">
                        {[...Array(t.rating)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                      <span className="text-amber-900 text-[11px] font-bold">{t.date}</span>
                    </div>

                    {/* Review Quote Body */}
                    <div className="relative pt-1">
                      <FaQuoteLeft className="text-amber-200/80 text-3xl absolute -top-2 -left-1 pointer-events-none" />
                      <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed italic relative z-10 pl-4">
                        "{t.comment}"
                      </p>
                    </div>

                  </div>

                  {/* Card Footer: Location & Verified Care */}
                  <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600">
                    <span className="text-slate-500">📍 {t.location}</span>
                    <span className="text-emerald-600 font-extrabold flex items-center gap-1 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      <FaHeart className="text-rose-500 text-xs" /> 100% Recommended
                    </span>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredTestimonials.length === 0 && (
            <div className="text-center py-16 rounded-[2.5rem] bg-white border border-slate-200 shadow-xl space-y-4">
              <p className="text-slate-600 font-bold">No parent reviews matched your search "{searchQuery}".</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedFilter('All'); }}
                className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-extrabold text-xs"
              >
                Reset Search Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 6. BOTTOM CALL-TO-ACTION BANNER */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] bg-gradient-to-r from-slate-900 via-primary to-slate-900 p-8 sm:p-14 text-white shadow-2xl text-center space-y-6 relative overflow-hidden">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight max-w-3xl mx-auto">
              Join 500+ Happy Families Who Trust Radiant Care
            </h2>

            <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto font-medium">
              Consult Dr. Dheeraj Diwaakar and our senior pediatric team for OPD, Level III NICU, or emergency child care.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 rounded-full bg-white text-primary font-black text-sm sm:text-base shadow-xl hover:bg-slate-100 transition-all flex items-center gap-2"
              >
                <FaCalendarCheck /> Book Your Child's Appointment
              </button>

              <a
                href={`tel:${HOSPITAL_INFO.phone}`}
                className="px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-black text-sm sm:text-base shadow-xl transition-all flex items-center gap-2"
              >
                <FaPhoneAlt /> Call Desk: {HOSPITAL_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

