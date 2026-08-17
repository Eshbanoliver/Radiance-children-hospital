import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaUserMd, FaAward, FaMicroscope, FaCheckCircle, FaCalendarCheck, 
  FaPhoneAlt, FaHeart, FaStethoscope, FaFlask, FaAmbulance, FaStar, FaChild,
  FaInstagram, FaFacebookF, FaLinkedin
} from 'react-icons/fa';
import { HOSPITAL_INFO, DOCTORS } from '../data/hospitalData';
import type { DoctorItem } from '../types';
import { SEO } from '../components/SEO';

import drDheerajImg from '../assets/dr-dheeraj-diwaakar.jpg';
import rashmiImg from '../assets/rashmi-vaishnav.png';

interface OurTeamPageProps {
  onOpenBooking: () => void;
}

export const OurTeamPage: React.FC<OurTeamPageProps> = ({ onOpenBooking }) => {
  const leadDoctor = DOCTORS[0];
  const specialistTeam = DOCTORS.slice(1);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16 overflow-hidden">
      <SEO 
        title="Our Team | Expert Pediatricians & Neonatologists Udaipur" 
        description="Meet the expert medical team at Radiant Children's Hospital in Udaipur led by Dr. Dheeraj Diwaakar (DM Neonatology JIPMER), pediatric surgeons, ROP retina specialists & NICU nurses."
      />

      {/* 1. HERO HEADER BANNER */}
      <section className="relative pt-6 pb-6 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-teal-500/10 via-cyan-500/10 to-blue-500/10 rounded-full blur-3xl pointer-events-none" />

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
            <span className="text-amber-300 uppercase tracking-wider font-black">👨‍⚕️ EXPERT PEDIATRIC & NEONATAL MEDICAL FACULTY</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight"
          >
            Meet Our Dedicated <span className="gradient-text">Medical Care Team</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base sm:text-xl leading-relaxed font-medium max-w-3xl mx-auto"
          >
            Led by apex-trained DM Neonatologist Dr. Dheeraj Diwaakar, our team combines 24×7 pediatric intensivists, surgeons, ROP retina specialists, audiologists, and critical care nurses under one roof.
          </motion.p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-4">
            {[
              { label: 'Children Treated', val: '12,000+', icon: FaChild, color: 'from-cyan-500 to-blue-600' },
              { label: 'Intensivists Availability', val: '24×7 On-Site', icon: FaUserMd, color: 'from-rose-500 to-amber-500' },
              { label: 'Level III NICU', val: 'JIPMER Trained', icon: FaMicroscope, color: 'from-purple-600 to-indigo-600' },
              { label: 'Nursing Staff', val: '1:1 Critical Care', icon: FaHeart, color: 'from-emerald-500 to-teal-600' }
            ].map((metric, idx) => {
              const IconComponent = metric.icon;
              return (
                <div key={idx} className="rounded-2xl bg-white/90 border border-slate-200 p-4 shadow-md flex flex-col items-center text-center space-y-1">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${metric.color} text-white flex items-center justify-center text-lg font-black shadow-sm mb-1`}>
                    <IconComponent />
                  </div>
                  <span className="text-lg font-black text-slate-900 block leading-tight">{metric.val}</span>
                  <span className="text-[11px] font-bold text-slate-500 block">{metric.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. LEAD NEONATOLOGIST SPOTLIGHT — DR. DHEERAJ DIWAAKAR */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 text-white p-8 sm:p-12 shadow-2xl border-2 border-teal-500/40 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              {/* Left Photo & Credentials Badge */}
              <div className="lg:col-span-5 flex flex-col items-center text-center space-y-4">
                <div className="relative group/photo">
                  <div className="absolute -inset-2 rounded-[2.2rem] bg-gradient-to-tr from-cyan-500 via-teal-400 to-amber-400 opacity-80 blur-lg group-hover/photo:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-[2rem] overflow-hidden border-4 border-white/20 shadow-2xl bg-slate-900">
                    <img
                      src={drDheerajImg}
                      alt={leadDoctor.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top group-hover/photo:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex flex-col justify-end p-4 text-left">
                      <span className="px-3 py-1 rounded-full bg-cyan-400 text-slate-950 font-black text-[10px] uppercase tracking-wider w-fit shadow-md">
                        Apex Trained DM Neonatologist
                      </span>
                      <h4 className="text-xl font-black text-white mt-1">{leadDoctor.name}</h4>
                      <p className="text-xs font-bold text-cyan-300">{leadDoctor.role}</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="w-full max-w-xs py-3.5 px-6 rounded-2xl bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 text-slate-950 font-black text-xs shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <FaCalendarCheck /> Book Consult with Dr. Dheeraj
                </button>
              </div>

              {/* Right Profile Details */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-400/20 text-teal-300 font-extrabold text-xs uppercase tracking-wider border border-teal-400/30">
                    <FaUserMd className="text-teal-400" /> Medical Leadership & Clinical Director
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                    {leadDoctor.name}
                  </h2>

                  <p className="text-slate-300 text-sm sm:text-base font-semibold leading-relaxed">
                    {leadDoctor.bio}
                  </p>
                </div>

                {/* Qualifications & Degrees */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-teal-500/30 flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-xl shrink-0 font-black border border-cyan-500/30">
                      <FaAward />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-black text-white block">MBBS, MD (Pediatrics)</span>
                      <span className="text-[11px] font-bold text-slate-400">Post Graduate Medical Degree</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-teal-500/30 flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-xl shrink-0 font-black border border-emerald-500/30">
                      <FaMicroscope />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-black text-emerald-300 block">DM (Neonatology)</span>
                      <span className="text-[11px] font-bold text-slate-400">JIPMER Pondicherry (Apex Institute)</span>
                    </div>
                  </div>
                </div>

                {/* Clinical Leadership & Career Highlights */}
                <div className="space-y-3 pt-1">
                  <span className="text-xs font-black uppercase tracking-wider text-teal-300 block">
                    Key Specialties & Career Positions:
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {leadDoctor.specialties.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-teal-500/20 text-xs font-bold text-slate-200">
                        <FaCheckCircle className="text-teal-400 text-sm shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. SPECIALIST MEDICAL FACULTY & CONSULTANTS GRID */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-900 font-extrabold text-xs shadow-sm">
              <FaStethoscope className="text-blue-600" /> Multidisciplinary Pediatric Hospital
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Consultants & <span className="gradient-text">Specialist Team</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Collaborative super-specialties ensuring comprehensive coverage for pediatric surgery, newborn retina screening, hearing diagnostics, and critical nursing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialistTeam.map((doc: DoctorItem, idx) => {
              const memberImg = doc.id === 'rashmi-vaishnav' ? rashmiImg : (doc.id === 'dr-dheeraj-diwaakar' ? drDheerajImg : (doc.image || null));

              return (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl p-4 sm:p-5 flex flex-col justify-between group transition-all duration-300"
                >
                  <div className="space-y-4">
                    {/* Top Portrait Image Frame (Rendered only if memberImg exists) */}
                    {memberImg ? (
                      <div className="w-full h-72 sm:h-84 rounded-xl overflow-hidden bg-slate-100 border border-slate-100 shadow-sm relative group/img shrink-0">
                        <img
                          src={memberImg}
                          alt={doc.name}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                        />
                        
                        {/* Qualifications Badge Overlay */}
                        {doc.qualifications && (
                          <div className="absolute top-3 left-3">
                            <span className="px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-white font-extrabold text-[10px] uppercase tracking-wider shadow-md border border-white/20">
                              {doc.qualifications}
                            </span>
                          </div>
                        )}
                      </div>
                    ) : (
                      doc.qualifications && (
                        <div>
                          <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-900 font-extrabold text-[10px] uppercase tracking-wider shadow-sm border border-cyan-200 inline-block">
                            {doc.qualifications}
                          </span>
                        </div>
                      )
                    )}

                    {/* Content Section */}
                    <div className="px-1 pt-1 space-y-3">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#083b4c] tracking-tight group-hover:text-primary transition-colors">
                          {doc.name}
                        </h3>
                        
                        <p className="text-slate-700 text-sm sm:text-base leading-relaxed mt-2.5 font-normal">
                          <span className="font-bold text-slate-900 block mb-1">
                            {doc.role}, Radiant Children's Hospital.
                          </span>
                          {doc.bio}
                        </p>
                      </div>

                      {/* Focus Areas & Services */}
                      <div className="pt-3 border-t border-slate-100 space-y-2">
                        <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">Focus Areas & Leadership:</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {doc.specialties.map((spec, sIdx) => (
                            <div key={sIdx} className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] font-bold text-slate-800">
                              <FaCheckCircle className="text-emerald-500 text-xs shrink-0" />
                              <span>{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Bar: Social Links & Consult Button */}
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-3 px-1">
                    {doc.socialLinks ? (
                      <div className="flex items-center gap-2">
                        {doc.socialLinks.instagram && (
                          <a
                            href={doc.socialLinks.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${doc.name}'s Instagram`}
                            className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center text-sm shadow-md hover:scale-110 transition-transform"
                            title="Instagram Profile"
                          >
                            <FaInstagram />
                          </a>
                        )}
                        {doc.socialLinks.facebook && (
                          <a
                            href={doc.socialLinks.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${doc.name}'s Facebook`}
                            className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center text-sm shadow-md hover:scale-110 transition-transform"
                            title="Facebook Profile"
                          >
                            <FaFacebookF />
                          </a>
                        )}
                        {doc.socialLinks.linkedin && (
                          <a
                            href={doc.socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${doc.name}'s LinkedIn`}
                            className="w-9 h-9 rounded-xl bg-sky-700 text-white flex items-center justify-center text-sm shadow-md hover:scale-110 transition-transform"
                            title="LinkedIn Profile"
                          >
                            <FaLinkedin />
                          </a>
                        )}
                      </div>
                    ) : (
                      <span className="text-xs font-bold text-slate-600 flex items-center gap-1.5">
                        <FaStar className="text-amber-500" /> {doc.experience}
                      </span>
                    )}

                    <button
                      onClick={onOpenBooking}
                      className="px-4 py-2.5 rounded-xl gradient-btn text-white font-extrabold text-xs shadow-md flex items-center gap-1.5 hover:scale-105 transition-transform"
                    >
                      <FaCalendarCheck /> Book Consult
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. CLINICAL WINGS & DEPARTMENTS OVERVIEW */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] bg-gradient-to-r from-slate-900 via-primary to-slate-900 p-8 sm:p-14 text-white shadow-2xl space-y-8 relative overflow-hidden">
            <div className="max-w-3xl space-y-3 text-center sm:text-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white font-bold text-xs uppercase tracking-wider">
                24×7 Multidisciplinary Hospital Wings
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Our Specialized Hospital Wings
              </h2>
              <p className="text-slate-200 text-sm sm:text-base font-medium">
                Four core operational wings working seamlessly to ensure round-the-clock child healthcare excellence in Udaipur.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
              {[
                { title: 'Level III NICU Wing', desc: 'Apex neonatology nursery with HFOV, CPAP & Mira Cradle hypothermia care.', icon: FaMicroscope, color: 'from-purple-500 to-indigo-600' },
                { title: 'PICU Critical Wing', desc: 'Pediatric ICU with ventilators, volumetric pumps & 24x7 intensivists.', icon: FaHeart, color: 'from-rose-500 to-pink-600' },
                { title: 'Bedside Diagnostic Wing', desc: 'In-house ABG analyzer, 2D Echo, digital X-Ray & complete lab testing.', icon: FaFlask, color: 'from-emerald-500 to-teal-600' },
                { title: 'Emergency Transport Wing', desc: '24x7 mobile ICU ambulance with Neopuff, Embrace Nest & intensivist.', icon: FaAmbulance, color: 'from-cyan-500 to-blue-600' }
              ].map((wing, wIdx) => {
                const WingIcon = wing.icon;
                return (
                  <div key={wIdx} className="rounded-3xl bg-white/10 backdrop-blur-md p-6 border border-white/20 flex flex-col justify-between space-y-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${wing.color} text-white flex items-center justify-center text-xl font-black shadow-md`}>
                      <WingIcon />
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white">{wing.title}</h4>
                      <p className="text-slate-300 text-xs font-semibold mt-1 leading-relaxed">{wing.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center sm:justify-start gap-4">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 rounded-full bg-white text-primary font-black text-sm sm:text-base shadow-xl hover:bg-slate-100 transition-all flex items-center gap-2"
              >
                <FaCalendarCheck /> Book Doctor Consultation
              </button>
              <a
                href={`tel:${HOSPITAL_INFO.phone}`}
                className="px-8 py-4 rounded-full bg-slate-900/50 hover:bg-slate-900/70 border border-white/40 text-white font-black text-sm sm:text-base backdrop-blur-md transition-all flex items-center gap-2"
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

export default OurTeamPage;
