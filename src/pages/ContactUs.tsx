import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPhoneAlt, FaMapMarkerAlt, FaClock, FaFacebookF, FaInstagram, 
  FaPaperPlane, FaCheckCircle, FaHospitalUser, FaAmbulance, FaWhatsapp, 
  FaDirections, FaEnvelope, FaCalendarCheck 
} from 'react-icons/fa';
import confetti from 'canvas-confetti';
import { HOSPITAL_INFO, SERVICES_DATA } from '../data/hospitalData';
import { SEO } from '../components/SEO';

import hospitalExterior from '../assets/hospital-exterior.png';

export const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    phone: '',
    service: SERVICES_DATA[0].title,
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16 overflow-hidden">
      <SEO 
        title="Contact Us & Location | Radiant Children's Hospital Udaipur" 
        description="Contact Radiant Children's Hospital in Udaipur. Address: 9 Kamla Nagar, 100 Feet Road. Phone: 07424937788. 24x7 Emergency, Level III NICU, PICU & OPD services."
      />

      {/* 1. HERO HEADER BANNER WITH LIVE BADGE */}
      <section className="relative pt-6 pb-6 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-teal-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none" />

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
            <span className="text-cyan-300 uppercase tracking-wider font-black">📍 24×7 EMERGENCY & OPD LOCATION • NEW BHUPALPURA, UDAIPUR</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight"
          >
            We Are Here for Your <span className="gradient-text">Child's Every Need</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base sm:text-xl leading-relaxed font-medium max-w-3xl mx-auto"
          >
            Connect with Radiant Children's Hospital's emergency desk, OPD scheduling team, or pediatric specialists anytime 24/7.
          </motion.p>
        </div>
      </section>

      {/* 2. QUICK HOTLINE ACTION CARDS (3 CREATIVE CARDS) */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: 24x7 Emergency Desk */}
            <motion.div
              whileHover={{ y: -8 }}
              className="rounded-[2.2rem] bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900 text-white p-7 shadow-2xl border border-emerald-500/35 flex flex-col justify-between space-y-4 group relative overflow-hidden"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-2xl shadow-lg border border-emerald-500/30 group-hover:scale-110 transition-transform">
                    <FaAmbulance className="animate-pulse text-emerald-400" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 font-extrabold text-[10px] uppercase border border-emerald-400/30">
                    24/7 Active Desk
                  </span>
                </div>

                <h3 className="text-xl font-black text-white">Emergency Hotline</h3>
                <p className="text-slate-300 text-xs font-semibold leading-relaxed">
                  Immediate emergency admission for high fever, breathing distress, seizures, jaundice, or infant trauma.
                </p>
              </div>

              <a
                href={`tel:${HOSPITAL_INFO.phone}`}
                className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-slate-950 font-black text-xs shadow-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
              >
                <FaPhoneAlt /> Call Desk: {HOSPITAL_INFO.phone}
              </a>
            </motion.div>

            {/* Card 2: WhatsApp Instant Chat */}
            <motion.div
              whileHover={{ y: -8 }}
              className="rounded-[2.2rem] bg-gradient-to-br from-white via-emerald-50/50 to-white text-slate-900 p-7 shadow-xl border border-emerald-200/90 flex flex-col justify-between space-y-4 group relative overflow-hidden"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">
                    <FaWhatsapp />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-[10px] uppercase border border-emerald-200">
                    Instant Chat
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-900">WhatsApp Desk</h3>
                <p className="text-slate-600 text-xs font-semibold leading-relaxed">
                  Share reports, inquire about OPD doctor availability, or chat directly with our medical desk team.
                </p>
              </div>

              <a
                href={`https://wa.me/${HOSPITAL_INFO.whatsappPhone}?text=Hello%20Radiant%20Children%27s%20Hospital,%20I%20have%20a%20health%20inquiry.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs shadow-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
              >
                <FaWhatsapp className="text-base" /> Chat on WhatsApp
              </a>
            </motion.div>

            {/* Card 3: OPD Consultation Schedule */}
            <motion.div
              whileHover={{ y: -8 }}
              className="rounded-[2.2rem] bg-gradient-to-br from-white via-cyan-50/50 to-white text-slate-900 p-7 shadow-xl border border-cyan-200/90 flex flex-col justify-between space-y-4 group relative overflow-hidden"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <FaClock />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-100 text-cyan-900 font-extrabold text-[10px] uppercase border border-cyan-200">
                    OPD Hours
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-900">OPD Timings</h3>
                <div className="text-xs text-slate-600 font-bold space-y-1">
                  <p>• Morning: 9:00 AM - 3:00 PM (Mon-Sat)</p>
                  <p>• Evening: 5:00 PM - 9:00 PM (Mon-Sat)</p>
                  <p className="text-emerald-600 font-black pt-0.5">24×7 Emergency OPD & NICU</p>
                </div>
              </div>

              <a
                href={`tel:${HOSPITAL_INFO.phone}`}
                className="w-full py-3.5 px-4 rounded-2xl gradient-btn text-white font-black text-xs shadow-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
              >
                <FaCalendarCheck /> Book OPD Slot
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. CONTACT DETAILS SHOWCASE & HIGH-TECH INQUIRY FORM */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Hospital Contact Details & Photo Frame */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Glass Details Card */}
              <div className="rounded-[2.5rem] bg-white p-7 sm:p-8 border border-slate-200 shadow-2xl space-y-6">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Hospital Address & Contacts</h3>

                {/* Info List */}
                <div className="space-y-5">
                  
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-600 flex items-center justify-center text-xl shrink-0 border border-cyan-200">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900">Hospital Location</h4>
                      <p className="text-slate-600 text-xs font-semibold mt-1 leading-relaxed">{HOSPITAL_INFO.address}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center text-xl shrink-0 border border-emerald-200">
                      <FaPhoneAlt />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900">24x7 Hotline Number</h4>
                      <a href={`tel:${HOSPITAL_INFO.phone}`} className="text-emerald-600 font-black text-base hover:underline block mt-0.5">
                        {HOSPITAL_INFO.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center text-xl shrink-0 border border-indigo-200">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900">Email Address</h4>
                      <a href={`mailto:${HOSPITAL_INFO.email}`} className="text-indigo-600 font-bold text-xs hover:underline block mt-0.5">
                        {HOSPITAL_INFO.email}
                      </a>
                    </div>
                  </div>

                </div>

                {/* Social Connect Bar */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-black uppercase text-slate-700">Follow Our Updates:</span>
                  <div className="flex items-center gap-2.5">
                    <a
                      href={HOSPITAL_INFO.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md hover:scale-110 transition-transform"
                      aria-label="Facebook"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href={HOSPITAL_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-md hover:scale-110 transition-transform"
                      aria-label="Instagram"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href={`https://wa.me/${HOSPITAL_INFO.whatsappPhone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-md hover:scale-110 transition-transform"
                      aria-label="WhatsApp"
                    >
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>
              </div>

              {/* Exterior Photo Card Frame */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group h-64">
                <img
                  src={hospitalExterior}
                  alt="Radiant Children's Hospital Building"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-6 text-white">
                  <div>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-500 text-slate-950 font-black text-[10px] uppercase">
                      New Bhupalpura • Udaipur
                    </span>
                    <p className="text-base font-black text-white mt-1">40 Bedded Radiant Children's Hospital</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: High-Tech Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="rounded-[2.5rem] bg-white p-8 sm:p-12 border border-slate-200 shadow-2xl relative">
                
                <div className="space-y-2 mb-8">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-100 text-cyan-900 font-extrabold text-xs border border-cyan-200">
                    <FaHospitalUser className="text-cyan-600" /> ONLINE DOCTOR INQUIRY DESK
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    Send an Inquiry to <span className="gradient-text">Our Doctors</span>
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-semibold">Fill out the inquiry form below and our medical team will contact you promptly.</p>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-5 rounded-3xl bg-emerald-50/60 border border-emerald-200 p-8"
                  >
                    <div className="w-20 h-20 rounded-3xl bg-emerald-500 text-white mx-auto flex items-center justify-center text-4xl shadow-xl shadow-emerald-500/30 animate-bounce">
                      <FaCheckCircle />
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-3xl font-black text-slate-900">Inquiry Submitted Successfully!</h4>
                      <p className="text-slate-700 text-sm max-w-md mx-auto font-medium leading-relaxed">
                        Thank you <span className="font-black text-emerald-800">{formData.parentName}</span>. We have received your inquiry for <span className="font-black text-emerald-800">{formData.childName}</span> regarding <span className="font-black text-cyan-800">{formData.service}</span>. Our pediatric desk will call you at <span className="font-black text-slate-900">{formData.phone}</span> shortly.
                      </p>
                    </div>

                    <button
                      onClick={() => { setSubmitted(false); setFormData({ parentName: '', childName: '', phone: '', service: SERVICES_DATA[0].title, message: '' }); }}
                      className="px-8 py-3.5 rounded-2xl gradient-btn text-white font-extrabold text-xs shadow-xl hover:scale-105 transition-transform"
                    >
                      Send Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">Parent's Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.parentName}
                          onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                          placeholder="e.g. Vikram Mehta"
                          className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 text-sm font-bold transition-all outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">Child's Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.childName}
                          onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                          placeholder="e.g. Ananya"
                          className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 text-sm font-bold transition-all outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">Mobile Phone *</label>
                        <input
                          type="tel"
                          required
                          pattern="[0-9]{10}"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 07424937788"
                          className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 text-sm font-bold transition-all outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">Speciality Care *</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 text-sm font-bold transition-all outline-none"
                        >
                          {SERVICES_DATA.map((s) => (
                            <option key={s.id} value={s.title}>{s.title}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">Health Concern / Question *</label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe your child's symptoms or consultation request..."
                        className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 text-sm font-bold transition-all outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-2xl gradient-btn text-white font-black text-sm sm:text-base shadow-xl hover:scale-[1.01] transition-transform flex items-center justify-center gap-2"
                    >
                      <FaPaperPlane /> Submit Doctor Inquiry
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. EMBEDDED INTERACTIVE GOOGLE MAP SHOWCASE */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 font-extrabold text-xs border border-blue-200 mb-1">
                <FaMapMarkerAlt className="text-blue-600" /> Interactive Navigation
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">Find Us on Google Maps</h3>
              <p className="text-slate-600 text-xs font-semibold mt-0.5">9 Kamla Nagar, 100 Feet Road, Behind Ashoka Palace, Udaipur, Rajasthan 313001</p>
            </div>

            <a
              href="https://maps.google.com/?q=Radiant+Children's+Hospital+Udaipur"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs shadow-xl flex items-center gap-2 shrink-0"
            >
              <FaDirections className="text-cyan-400 text-base" /> Open in Google Maps
            </a>
          </div>

          <div className="rounded-[2.5rem] overflow-hidden p-2.5 bg-white border border-slate-200 shadow-2xl h-[480px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922350.4716782165!2d72.6897553765913!3d25.440552555194934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5fb71a80425%3A0x3965db8c2851267f!2sRadiant%20Children%E2%80%99s%20Hospital!5e0!3m2!1sen!2sin!4v1786074857847!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '1.8rem' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Radiant Children's Hospital Google Maps Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

