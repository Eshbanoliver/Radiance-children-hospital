import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaUserMd, FaShieldAlt, FaCalendarCheck, 
  FaCheckCircle, FaHospital, FaPhoneAlt, FaMicroscope, 
  FaFlask, FaAmbulance, FaBed, FaAward, FaHeartbeat, 
  FaWind, FaHandsWash as FaHands, FaBaby, FaPills
} from 'react-icons/fa';
import { 
  HOSPITAL_INFO, INTACT_SURVIVAL_COMMITMENT 
} from '../data/hospitalData';
import { SEO } from '../components/SEO';

import hospitalExterior from '../assets/hospital-exterior.png';
import hospitalNicu from '../assets/hospital-nicu.png';
import hospitalNight from '../assets/hospital-night.png';
import drDheerajImg from '../assets/dr-dheeraj-diwaakar.jpg';

interface AboutUsProps {
  onOpenBooking: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'wards' | 'nicu' | 'diagnostics' | 'transport'>('wards');

  const timeline = [
    { year: '40 Bedded Center', title: 'Established in Udaipur', desc: '40-bedded advanced pediatric facility with General, Semi-Deluxe & Deluxe patient rooms.', badge: 'Infrastructure' },
    { year: 'Level III NICU', title: 'Advanced Neonatal Care', desc: 'Equipped with HFOV Ventilator, Non-Invasive CPAP, Mira Cradle Hypothermia, Surfactant Therapy & KMC.', badge: 'Apex NICU' },
    { year: '24x7 Emergency', title: 'Intensivists Availability', desc: 'Round-the-clock physical availability of Neonatal & Paediatric Intensivists & emergency triage.', badge: '365 Days Triage' },
    { year: 'Equipped PICU', title: 'Pediatric Intensive Care', desc: 'Pediatric ventilators, multipara monitors, syringe pumps & volumetric infusion pumps.', badge: 'Critical Care' },
    { year: 'In-House ABG & Labs', title: 'Bedside Diagnostics Desk', desc: 'In-house ABG analyzer, bedside 2D Echo, Ultrasonography, Digital X-Ray & 24x7 In-House Pharmacy.', badge: 'Instant Diagnostics' }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16 overflow-hidden">
      <SEO 
        title="About Us | Radiant Children's Hospital Udaipur" 
        description="Learn about Radiant Children's Hospital, a 40-bedded pediatric center in Udaipur with Level III NICU, PICU, 24x7 Intensivists, Dr. Dheeraj Diwaakar, and intact survival commitment."
      />

      {/* 1. HERO HEADER BANNER WITH GLASS CARDS & BRAND HIGHLIGHTS */}
      <section className="relative pt-6 pb-8 overflow-hidden text-center">
        {/* Background Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

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
            <span className="text-amber-300 uppercase tracking-wider font-black">🏥 40 BEDDED NEONATAL & PEDIATRIC CARE CENTRE • UDAIPUR</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight"
          >
            Dedicated to <span className="gradient-text">Child Healthcare Excellence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base sm:text-xl leading-relaxed font-medium max-w-3xl mx-auto"
          >
            Providing 24x7 Emergency Services & Availability of Neonatal & Paediatric Intensivists for newborns, infants, and children from birth to 18 years of age in Udaipur, Rajasthan.
          </motion.p>
        </div>
      </section>

      {/* 2. VISUAL SHOWCASE: HOSPITAL INFRASTRUCTURE & LEAD DOCTOR PREVIEW */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] bg-gradient-to-br from-white via-cyan-50/40 to-white border border-cyan-200/90 shadow-2xl p-8 sm:p-12 relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-900 font-extrabold text-xs">
                  <FaHospital className="text-cyan-600" /> State-of-the-Art Infrastructure
                </div>

                <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  Our Hospital <span className="gradient-text">Story & Commitment</span>
                </h2>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                  Radiant Children’s Hospital is a 40-bedded specialized pediatric hospital located behind Ashoka Palace in New Bhupalpura, 100 Feet Road, Udaipur.
                </p>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                  Founded with a vision of ethical, gentle, and world-class medical care, we bring together apex-trained neonatologists, Level III NICU technology (HFOV, Bubble CPAP, Mira Cradle), PICU, in-house ABG analyzer, digital X-Ray, 2D Echo, and a 24x7 Neonatal Transport Ambulance equipped with Neopuff and Embrace Nest.
                </p>

                {/* Stat Pill Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-4 rounded-2xl bg-white border border-cyan-200 text-center shadow-sm space-y-1">
                    <div className="text-2xl font-black text-primary">40 Beds</div>
                    <div className="text-[11px] font-bold text-slate-600">Deluxe & Wards</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-emerald-200 text-center shadow-sm space-y-1">
                    <div className="text-2xl font-black text-emerald-600">24×7</div>
                    <div className="text-[11px] font-bold text-slate-600">Intensivists On-Site</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-purple-200 text-center shadow-sm space-y-1 col-span-2 sm:col-span-1">
                    <div className="text-2xl font-black text-purple-600">Level III</div>
                    <div className="text-[11px] font-bold text-slate-600">Equipped NICU</div>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={onOpenBooking}
                    className="px-6 py-3.5 rounded-2xl gradient-btn text-white font-extrabold text-xs shadow-xl flex items-center gap-2"
                  >
                    <FaCalendarCheck /> Book Consultation
                  </button>
                  <a
                    href={`tel:${HOSPITAL_INFO.phone}`}
                    className="px-6 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-800 font-extrabold text-xs shadow-md hover:bg-slate-100 flex items-center gap-2 transition-colors"
                  >
                    <FaPhoneAlt className="text-emerald-500" /> Call Desk: {HOSPITAL_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Right Image Showcase Grid */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Image 1: Exterior */}
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-white group h-64 sm:h-72">
                  <img
                    src={hospitalExterior}
                    alt="Radiant Children's Hospital Exterior"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4 text-white">
                    <div>
                      <span className="px-2 py-0.5 rounded-md bg-cyan-500/80 text-white font-extrabold text-[9px] uppercase">
                        Hospital Facility
                      </span>
                      <p className="text-sm font-black text-white mt-1">40 Bedded Hospital</p>
                    </div>
                  </div>
                </div>

                {/* Image 2: NICU */}
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-white group h-64 sm:h-72">
                  <img
                    src={hospitalNicu}
                    alt="Level III NICU Nursery"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4 text-white">
                    <div>
                      <span className="px-2 py-0.5 rounded-md bg-emerald-500/80 text-white font-extrabold text-[9px] uppercase">
                        Critical Nursery
                      </span>
                      <p className="text-sm font-black text-white mt-1">Level III NICU Unit</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. MEDICAL LEADERSHIP SPOTLIGHT — DR. DHEERAJ DIWAAKAR */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 text-white p-8 sm:p-12 shadow-2xl border border-teal-500/30 relative overflow-hidden group"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              {/* Left Photo Card */}
              <div className="lg:col-span-5 flex flex-col items-center text-center space-y-4">
                <div className="relative group/photo">
                  <div className="absolute -inset-2 rounded-[2.2rem] bg-gradient-to-tr from-cyan-500 via-teal-400 to-amber-400 opacity-80 blur-lg group-hover/photo:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-[2rem] overflow-hidden border-4 border-white/20 shadow-2xl bg-slate-900">
                    <img
                      src={drDheerajImg}
                      alt="Dr. Dheeraj Diwaakar - DM Neonatologist"
                      className="w-full h-full object-cover object-top group-hover/photo:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex flex-col justify-end p-4 text-left">
                      <span className="px-3 py-1 rounded-full bg-cyan-400 text-slate-950 font-black text-[10px] uppercase tracking-wider w-fit shadow-md">
                        DM Neonatology • JIPMER
                      </span>
                      <h4 className="text-xl font-black text-white mt-1">Dr. Dheeraj Diwaakar</h4>
                      <p className="text-xs font-bold text-cyan-300">Lead Neonatologist & Level III NICU Director</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="w-full max-w-xs py-3.5 px-6 rounded-2xl bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 text-slate-950 font-black text-xs shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <FaCalendarCheck /> Consult Dr. Dheeraj Diwaakar
                </button>
              </div>

              {/* Right Bio & Credentials */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-400/20 text-teal-300 font-extrabold text-xs uppercase tracking-wider border border-teal-400/30">
                    <FaUserMd className="text-teal-400" /> Medical Leadership & Clinical Director
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                    Dr. Dheeraj <span className="bg-gradient-to-r from-teal-300 via-cyan-200 to-emerald-300 bg-clip-text text-transparent">Diwaakar</span>
                  </h2>

                  <p className="text-slate-300 text-sm sm:text-base font-semibold leading-relaxed">
                    Apex trained DM Neonatologist from JIPMER Pondicherry specializing in premature baby survival, Level III NICU ventilation, and intact milestone development.
                  </p>
                </div>

                {/* Qualifications Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-teal-500/30 flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-xl shrink-0 font-black border border-cyan-500/30">
                      <FaAward />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-black text-white block">MBBS, MD (Pediatrics)</span>
                      <span className="text-[11px] font-bold text-slate-400">Post Graduate Pediatric Medicine</span>
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

                {/* Career Leadership Highlights */}
                <div className="space-y-3 pt-1">
                  <span className="text-xs font-black uppercase tracking-wider text-teal-300 block">
                    Former Career & Clinical Experience:
                  </span>

                  <div className="space-y-2.5">
                    <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-900/60 border border-teal-500/20 text-xs font-bold text-slate-200">
                      <FaCheckCircle className="text-teal-400 text-base shrink-0 mt-0.5" />
                      <div>
                        <span className="text-white font-extrabold block">Ex-Consultant — NICE Hospital for Women, Children & Newborn Care, Hyderabad</span>
                        <span className="text-slate-400 font-medium text-[11px]">Managed complex tertiary neonatal cases and newborn ICU care.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-900/60 border border-teal-500/20 text-xs font-bold text-slate-200">
                      <FaCheckCircle className="text-emerald-400 text-base shrink-0 mt-0.5" />
                      <div>
                        <span className="text-white font-extrabold block">Ex-HOD — Department of Neonatology, GMCH Udaipur</span>
                        <span className="text-slate-400 font-medium text-[11px]">Led neonatal clinical operations, medical training & Level III NICU protocols.</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </motion.div>

        </div>
      </section>

      {/* 4. INTERACTIVE INFRASTRUCTURE SHOWCASE WITH TABS */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 font-extrabold text-xs shadow-sm">
              <FaHospital className="text-blue-600" /> World-Class Hospital Infrastructure
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Explore Our <span className="gradient-text">Medical Facilities</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Click tabs below to inspect patient room categories, Level III NICU nurseries, bedside ABG diagnostics, and rapid emergency transport systems.
            </p>
          </div>

          {/* Tab Selector Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { id: 'wards', label: '🏥 40 Bedded Wards & Suites', icon: FaBed },
              { id: 'nicu', label: '🚨 Level III NICU & PICU', icon: FaMicroscope },
              { id: 'diagnostics', label: '🧪 In-House ABG & Diagnostics', icon: FaFlask },
              { id: 'transport', label: '🚑 24x7 Transport Ambulance', icon: FaAmbulance }
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-5 py-3 rounded-full font-extrabold text-xs sm:text-sm transition-all duration-300 ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/20 border border-slate-700'
                      : 'bg-white/90 hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-sm'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Animated Tab Content Box */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="rounded-[2.5rem] bg-white/95 backdrop-blur-md p-8 sm:p-12 border border-slate-200/90 shadow-2xl"
            >
              {activeTab === 'wards' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-900 font-extrabold text-xs uppercase">
                      Inpatient Suites & Wards
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-black text-slate-900">40 Bedded Patient Wards & Private Suites</h3>
                    <p className="text-slate-600 text-sm font-semibold leading-relaxed">
                      Equipped with General Wards, Semi-Deluxe AC Rooms, and Deluxe Private Suites. Every bed is backed by Central Oxygen, Compressed Air, Vacuum Suction, and 100% DG Auto Power Generators for uninterrupted care.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                      <div className="p-3.5 rounded-2xl bg-cyan-50 border border-cyan-200 text-center space-y-1">
                        <span className="text-xs font-black text-cyan-800 block">General Wards</span>
                        <span className="text-[10px] text-slate-600 font-bold block">Spacious & Sterile</span>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200 text-center space-y-1">
                        <span className="text-xs font-black text-blue-800 block">Semi-Deluxe Rooms</span>
                        <span className="text-[10px] text-slate-600 font-bold block">AC & Parent Privacy</span>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-200 text-center space-y-1">
                        <span className="text-xs font-black text-indigo-800 block">Deluxe Suites</span>
                        <span className="text-[10px] text-slate-600 font-bold block">Private Living Amenities</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <img
                      src={hospitalExterior}
                      alt="40 Bedded Hospital Center"
                      className="rounded-3xl w-full h-72 object-cover shadow-xl border-2 border-white"
                    />
                  </div>
                </div>
              )}

              {activeTab === 'nicu' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-900 font-extrabold text-xs uppercase">
                      Level III Neonatal ICU
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-black text-slate-900">Level III Advanced NICU & PICU Nursery</h3>
                    <p className="text-slate-600 text-sm font-semibold leading-relaxed">
                      Features High Frequency Ventilators (HFOV), Bubble CPAP, Servo Controlled Radiant Warners, LED Phototherapy, Mira Cradle for Therapeutic Hypothermia, Surfactant Therapy, and Exchange Transfusion.
                    </p>

                    <div className="space-y-2 pt-2">
                      {[
                        'High Frequency Ventilator (HFOV) & Non-Invasive Bubble CPAP',
                        'Mira Cradle Therapeutic Hypothermia for Asphyxia Care',
                        '24×7 On-Duty Neonatal Intensivists & 1:1 Critical Nursing'
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-purple-50 border border-purple-200 text-xs font-bold text-purple-950">
                          <FaCheckCircle className="text-purple-600 text-xs shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <img
                      src={hospitalNicu}
                      alt="Level III NICU Nursery"
                      className="rounded-3xl w-full h-72 object-cover shadow-xl border-2 border-white"
                    />
                  </div>
                </div>
              )}

              {activeTab === 'diagnostics' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-extrabold text-xs uppercase">
                      Bedside Diagnostics
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-black text-slate-900">In-House ABG, Digital X-Ray & 2D Echo</h3>
                    <p className="text-slate-600 text-sm font-semibold leading-relaxed">
                      Instant bedside arterial blood gas (ABG) evaluation, bedside 2D Echo cardiology checks, digital portable X-Ray, ultrasonography, and a 24x7 in-house medical store.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-950 flex items-center gap-2">
                        <FaFlask className="text-emerald-600 shrink-0" /> In-House ABG Blood Gas Analyzer
                      </div>
                      <div className="p-3 rounded-2xl bg-teal-50 border border-teal-200 text-xs font-bold text-teal-950 flex items-center gap-2">
                        <FaHeartbeat className="text-teal-600 shrink-0" /> Bedside 2D Echo Cardiology
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="p-8 rounded-3xl bg-gradient-to-tr from-emerald-900 to-teal-950 text-white space-y-4 shadow-xl border border-emerald-500/30">
                      <FaFlask className="text-4xl text-emerald-400" />
                      <h4 className="text-xl font-black">Bedside Diagnostic Advantage</h4>
                      <p className="text-xs text-slate-300 font-medium leading-relaxed">
                        Arterial blood gas results available within minutes for immediate ventilator parameter adjustments.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'transport' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-900 font-extrabold text-xs uppercase">
                      Emergency Ambulance
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-black text-slate-900">24x7 Neonatal & Paediatric Transport Ambulance</h3>
                    <p className="text-slate-600 text-sm font-semibold leading-relaxed">
                      Dedicated mobile ICU transport ambulance equipped with Neopuff resuscitator, Embrace Nest thermal protection, multipara pulse oximeter, and accompanied by a Neonatal Intensivist.
                    </p>

                    <a
                      href={`tel:${HOSPITAL_INFO.phone}`}
                      className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 to-red-600 text-white font-black text-xs shadow-xl animate-pulse"
                    >
                      <FaPhoneAlt /> Call Ambulance Hotline: {HOSPITAL_INFO.phone}
                    </a>
                  </div>

                  <div className="lg:col-span-5">
                    <img
                      src={hospitalNight}
                      alt="24x7 Emergency Desk & Transport"
                      className="rounded-3xl w-full h-72 object-cover shadow-xl border-2 border-white"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* 5. INTACT SURVIVAL COMMITMENT SHOWCASE */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] bg-gradient-to-br from-slate-950 via-teal-950 to-slate-950 text-white p-8 sm:p-12 shadow-2xl border border-emerald-500/30 space-y-8 relative overflow-hidden">
            <div className="max-w-3xl space-y-3 relative z-10">
              <span className="px-3.5 py-1 rounded-full bg-emerald-400/20 text-emerald-300 font-extrabold text-xs border border-emerald-400/30 uppercase tracking-wider">
                NICU Care Benchmark
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Commitment for Intact Survival of <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent">NICU Graduates</span>
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
                Dedicated protocols to ensure high-risk NICU graduates grow up healthy, safeguarding brain, retina vision, hearing, and motor milestones.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              {INTACT_SURVIVAL_COMMITMENT.map((item, idx) => (
                <div key={idx} className="rounded-3xl bg-slate-900/80 backdrop-blur-md p-6 border border-emerald-500/25 space-y-3 hover:border-emerald-400/60 transition-all group">
                  <div className="flex items-center gap-2 text-emerald-400 font-black text-sm">
                    <FaCheckCircle className="shrink-0 text-emerald-400 text-base" />
                    <h4 className="group-hover:text-emerald-300 transition-colors">{item.title}</h4>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. INFECTION CONTROL & STERILIZATION PROTOCOLS (MULTI-TIER HYGIENE) */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-rose-900 font-extrabold text-xs shadow-sm border border-rose-200">
              <FaShieldAlt className="text-rose-600 animate-pulse" /> 100% STERILE HYGIENE benchmark
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Prevention is Better Than Cure <span className="gradient-text">— Sterilization Protocols</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              We enforce strict multi-tier sterilization protocols across all ICU nurseries & patient wards to protect fragile newborns from cross-infections.
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
                desc: "Micro defogger machine for total area & ward fumigation protocols.",
                tag: "Ward Fumigation",
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
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 group ${card.shadow}`}
                >
                  {/* Graphic Header */}
                  <div className={`h-24 bg-gradient-to-r ${card.gradient} p-4 relative overflow-hidden flex items-start justify-between text-white`}>
                    <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/20 rounded-full blur-xl pointer-events-none" />
                    
                    <span className="px-2.5 py-0.5 rounded-full bg-black/20 backdrop-blur-md font-black text-[10px] uppercase tracking-wider text-white border border-white/30">
                      {card.tag}
                    </span>

                    <span className="font-black text-2xl text-white/40 tracking-tighter">
                      #{card.step}
                    </span>
                  </div>

                  {/* Floating Graphic Icon Container */}
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

      {/* 7. MILESTONE JOURNEY TIMELINE */}
      <section className="relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              Our Journey of <span className="gradient-text">Pediatric Clinical Excellence</span>
            </h2>
          </div>

          <div className="relative border-l-4 border-primary/30 ml-4 sm:ml-28 space-y-8">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative pl-8 sm:pl-10"
              >
                <div className="absolute -left-[14px] top-1.5 w-6 h-6 rounded-full bg-primary border-4 border-white shadow-md" />
                <div className="rounded-3xl bg-white/95 p-6 border border-slate-200/90 shadow-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-black text-xs">
                      {item.year}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-extrabold text-[10px] uppercase">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="text-xl font-black text-slate-900">{item.title}</h4>
                  <p className="text-slate-600 text-xs sm:text-sm font-semibold">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BOTTOM CALL-TO-ACTION BANNER */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] bg-gradient-to-r from-slate-900 via-primary to-slate-900 p-8 sm:p-14 text-white shadow-2xl text-center space-y-6 relative overflow-hidden">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight max-w-3xl mx-auto">
              Experience World-Class Child Care in Udaipur
            </h2>
            <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto font-medium">
              Consult our neonatologists & pediatricians at 9 Kamla Nagar, 100 Feet Road, Udaipur.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 rounded-full bg-white text-primary font-black text-sm sm:text-base shadow-xl hover:bg-slate-100 transition-all flex items-center gap-2"
              >
                <FaCalendarCheck /> Book Doctor Consultation
              </button>

              <a
                href={`tel:${HOSPITAL_INFO.phone}`}
                className="px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-black text-sm sm:text-base shadow-xl transition-all flex items-center gap-2"
              >
                <FaPhoneAlt /> Call 24/7 Desk: {HOSPITAL_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

