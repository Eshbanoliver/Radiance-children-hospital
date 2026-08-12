import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaAward, FaCheckCircle, FaChevronRight, 
  FaCalendarAlt, FaTimes, FaPhoneAlt, FaEnvelope, FaBroadcastTower, FaMicroscope, FaChild, FaHeartbeat
} from 'react-icons/fa';
import { HOSPITAL_INFO, NEWS_AND_ACHIEVEMENTS } from '../data/hospitalData';
import { SEO } from '../components/SEO';
import type { NewsItem } from '../types';

import sammanPatra from '../assets/samman-patra-dr-dheeraj.JPG';
import newsCovid from '../assets/news-covid-baby-survival.JPG';
import noticeBoard from '../assets/notice-board-achievements.JPG';

interface NewsAndAchievementsPageProps {
  onOpenBooking: () => void;
}

export const NewsAndAchievementsPage: React.FC<NewsAndAchievementsPageProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeNewsModal, setActiveNewsModal] = useState<NewsItem | null>(null);

  const categories = ['All', 'Clinical Milestones', 'Awards & Recognition', 'Community Drives', 'Hospital News'];

  const filteredNews = selectedCategory === 'All'
    ? NEWS_AND_ACHIEVEMENTS
    : NEWS_AND_ACHIEVEMENTS.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16 overflow-hidden">
      <SEO 
        title="News & Achievements | Radiant Children's Hospital Udaipur" 
        description="Explore recent news, clinical milestones, awards, press releases, and healthcare drives at Radiant Children's Hospital in Udaipur, Rajasthan."
      />

      {/* 1. HERO HEADER BANNER */}
      <section className="relative pt-6 pb-6 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-purple-500/10 via-amber-500/10 to-emerald-500/10 rounded-full blur-3xl pointer-events-none transform-gpu" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900 text-white font-extrabold text-xs shadow-xl border border-slate-700/60"
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
            </span>
            <span className="text-amber-300 uppercase tracking-wider font-black">📰 PRESS RELEASES • CLINICAL MILESTONES & AWARDS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight"
          >
            News & <span className="gradient-text">Clinical Achievements</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base sm:text-xl leading-relaxed font-medium max-w-3xl mx-auto"
          >
            Discover our latest medical breakthroughs, Level III NICU milestones, 12,000+ patient discharges, awards, and regional pediatric health initiatives.
          </motion.p>
        </div>
      </section>

      {/* 2. FEATURED PHOTO STORIES */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10 space-y-2"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 font-black text-xs uppercase tracking-wider border border-amber-200">
              🏆 Featured Stories & Recognition
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">In the Press & On the Wall</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 — Samman Patra */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-[2.5rem] bg-white border border-slate-200 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 overflow-hidden group transition-shadow duration-300 flex flex-col transform-gpu"
            >
              <div className="relative h-72 overflow-hidden bg-slate-950">
                <img
                  src={sammanPatra}
                  alt="Samman Patra — Dr. Dheeraj Ji Diwaakar"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 transform-gpu"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-500/90 text-white font-black text-[10px] uppercase tracking-wider shadow">
                  🏅 Award & Recognition
                </span>
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-black text-slate-900 leading-snug">Samman Patra — Dr. Dheeraj Ji Diwaakar</h3>
                  <p className="text-slate-600 text-xs font-semibold leading-relaxed">
                    A heartfelt "Samman Patra" (Certificate of Honour) presented to Dr. Dheeraj Ji Diwaakar by grateful parents and community members. The letter commends his extraordinary commitment, round-the-clock availability, and life-saving expertise in neonatal care at Radiant Children's Hospital, Udaipur — recognising him as an exceptional physician and compassionate human being.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-extrabold text-amber-600">
                  <FaAward className="text-amber-500" /> Community Award • Radiant Children's Hospital
                </div>
              </div>
            </motion.div>

            {/* Card 2 — Newspaper COVID Baby */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-[2.5rem] bg-white border border-slate-200 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10 overflow-hidden group transition-shadow duration-300 flex flex-col transform-gpu"
            >
              <div className="relative h-72 overflow-hidden bg-slate-950">
                <img
                  src={newsCovid}
                  alt="Newspaper: Corona mein Jaan Ganwane Wali Yogita ke Putra Garv ko Mila Jeevandam"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 transform-gpu"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-emerald-500/90 text-white font-black text-[10px] uppercase tracking-wider shadow">
                  📰 Press Coverage
                </span>
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-black text-slate-900 leading-snug">COVID Baby Saved After 61 Days — Featured in Local Press</h3>
                  <p className="text-slate-600 text-xs font-semibold leading-relaxed">
                    A premature baby born to Yogita Kunwar — who lost her life to COVID-19 during delivery — was given a second chance at life by Dr. Dheeraj Diwaakar and the Radiant team. After 61 gruelling days of battling between life and death in the NICU, baby Garv was successfully discharged. The story was widely covered in regional newspapers and brought widespread recognition to Radiant Children's Hospital.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-extrabold text-emerald-600">
                  <FaCheckCircle className="text-emerald-500" /> Clinical Milestone • Udaipur, Rajasthan
                </div>
              </div>
            </motion.div>

            {/* Card 3 — Notice Board */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-[2.5rem] bg-white border border-slate-200 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden group transition-shadow duration-300 flex flex-col transform-gpu"
            >
              <div className="relative h-72 overflow-hidden bg-slate-950">
                <img
                  src={noticeBoard}
                  alt="Achievement Notice Board at Radiant Children's Hospital"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 transform-gpu"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-cyan-500/90 text-white font-black text-[10px] uppercase tracking-wider shadow">
                  📋 Achievements Board
                </span>
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-black text-slate-900 leading-snug">Wall of Recognition — Certificates, Letters & Press Clippings</h3>
                  <p className="text-slate-600 text-xs font-semibold leading-relaxed">
                    Radiant Children's Hospital proudly displays its achievement notice board — featuring Rajasthan Medical Council certificates, multiple heartfelt gratitude letters from parents, local newspaper coverage, and hospital brochures. This board stands as a testament to the trust placed in Dr. Dheeraj Diwaakar and the entire medical team by thousands of families across Udaipur.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-extrabold text-cyan-600">
                  <FaCheckCircle className="text-cyan-500" /> Verified Credentials • Radiant Children's Hospital
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. TOP MILESTONE STAT CARDS */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-[2.2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white p-6 shadow-xl border border-emerald-500/30 space-y-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-2xl font-black border border-emerald-500/30">
                <FaChild />
              </div>
              <span className="text-3xl font-black text-emerald-300 block">12,000+</span>
              <h3 className="text-sm font-black text-white">Children Treated</h3>
              <p className="text-slate-400 text-xs font-semibold leading-relaxed">
                Successful recoveries across infant, toddler, and adolescent hospital care in Udaipur.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-[2.2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 text-white p-6 shadow-xl border border-purple-500/30 space-y-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-300 flex items-center justify-center text-2xl font-black border border-purple-500/30">
                <FaHeartbeat />
              </div>
              <span className="text-3xl font-black text-purple-300 block">97-99%</span>
              <h3 className="text-sm font-black text-white">Preterm Intact Survival</h3>
              <p className="text-slate-400 text-xs font-semibold leading-relaxed">
                Preterm survival rate for 500g - 1000g neonates with intact neurological development.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-[2.2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white p-6 shadow-xl border border-cyan-500/30 space-y-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-2xl font-black border border-cyan-500/30">
                <FaMicroscope />
              </div>
              <span className="text-3xl font-black text-cyan-300 block">Level III</span>
              <h3 className="text-sm font-black text-white">Apex NICU Technology</h3>
              <p className="text-slate-400 text-xs font-semibold leading-relaxed">
                Pioneering HFOV ventilator & Mira Cradle cooling therapy in Southern Rajasthan.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-[2.2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 text-white p-6 shadow-xl border border-amber-500/30 space-y-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-300 flex items-center justify-center text-2xl font-black border border-amber-500/30">
                <FaAward />
              </div>
              <span className="text-3xl font-black text-amber-300 block">Zero Infection</span>
              <h3 className="text-sm font-black text-white">Sterilization Benchmark</h3>
              <p className="text-slate-400 text-xs font-semibold leading-relaxed">
                Micro defogger area fumigation & ETO sterilization protocols protecting critical wards.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. CATEGORY TABS & FILTERABLE NEWS CARDS */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full font-extrabold text-xs sm:text-sm transition-all duration-300 ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/20 border border-slate-700'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-sm'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* News Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((article, idx) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -8 }}
                className="rounded-[2.2rem] bg-white border border-slate-200/90 shadow-xl overflow-hidden flex flex-col justify-between group hover:border-primary/50 transition-colors duration-300 transform-gpu"
              >
                <div>
                  {/* Card Header Media Container */}
                  <div className="h-52 bg-slate-900 relative overflow-hidden">
                    <img
                      src={article.image || ''}
                      alt={article.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 transform-gpu"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full font-black text-[10px] uppercase tracking-wider shadow-md ${article.badgeBg}`}>
                        {article.badge}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white font-extrabold text-[10px] border border-white/20 flex items-center gap-1">
                        <FaCalendarAlt className="text-amber-400" /> {article.date}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <span className="text-[11px] font-black uppercase tracking-wider text-primary block">
                      {article.category}
                    </span>

                    <h3 className="text-xl font-black text-slate-900 group-hover:text-primary transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>

                    <div className="pt-2 space-y-1.5">
                      {article.highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                          <FaCheckCircle className="text-emerald-500 text-xs shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action Button */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => setActiveNewsModal(article)}
                    className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-900 font-extrabold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Read Full Story</span>
                    <FaChevronRight className="text-xs" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. FULL STORY MODAL */}
      <AnimatePresence>
        {activeNewsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveNewsModal(null)}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl z-10 border border-slate-200 overflow-hidden"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <div className="flex items-center gap-2.5">
                  <span className={`px-3 py-1 rounded-full font-black text-[10px] uppercase ${activeNewsModal.badgeBg}`}>
                    {activeNewsModal.badge}
                  </span>
                  <span className="text-xs font-bold text-slate-500">• {activeNewsModal.date}</span>
                </div>
                <button
                  onClick={() => setActiveNewsModal(null)}
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-black text-slate-900 leading-snug">{activeNewsModal.title}</h3>
                
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  {activeNewsModal.fullStory}
                </p>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-black uppercase text-slate-800 block">Key Article Highlights:</span>
                  {activeNewsModal.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <FaCheckCircle className="text-emerald-500 text-xs shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3 rounded-xl gradient-btn text-white font-extrabold text-xs shadow-md"
                >
                  Book Appointment
                </button>
                <button
                  onClick={() => setActiveNewsModal(null)}
                  className="px-6 py-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-extrabold text-xs"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 5. MEDIA DESK CONTACT BANNER */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 p-8 sm:p-12 text-white shadow-2xl border border-teal-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 font-extrabold text-xs border border-teal-500/30">
                <FaBroadcastTower /> MEDIA & PRESS RELATIONS DESK
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">Press or Medical Inquiries?</h3>
              <p className="text-slate-300 text-xs sm:text-sm font-semibold max-w-xl">
                For medical publication inquiries, clinical research partnerships, or press releases regarding Radiant Children's Hospital, reach our communications desk.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href={`tel:${HOSPITAL_INFO.phone}`}
                className="px-6 py-3.5 rounded-2xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-black text-xs shadow-xl flex items-center gap-2 transition-transform hover:scale-105"
              >
                <FaPhoneAlt /> Call Desk: {HOSPITAL_INFO.phone}
              </a>
              <a
                href={`mailto:${HOSPITAL_INFO.email}`}
                className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/30 font-black text-xs shadow-xl flex items-center gap-2 transition-colors"
              >
                <FaEnvelope /> Email Press Desk
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsAndAchievementsPage;
