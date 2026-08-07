import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPhoneAlt, FaMapMarkerAlt, FaClock, FaFacebookF, FaInstagram, 
  FaPaperPlane, FaCheckCircle, FaHospitalUser, FaAmbulance, FaWhatsapp 
} from 'react-icons/fa';
import confetti from 'canvas-confetti';
import { HOSPITAL_INFO, SERVICES_DATA } from '../data/hospitalData';
import { SEO } from '../components/SEO';

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
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      <SEO 
        title="Contact Us & Location | Radiant Children's Hospital Udaipur" 
        description="Contact Radiant Children's Hospital in Udaipur. Address: 9 Kamla Nagar, 100 Feet Road. Phone: 07424937788. 24x7 Emergency, NICU, PICU & OPD services."
      />

      {/* Header Banner */}
      <section className="relative pt-8 pb-8 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs">
            <FaMapMarkerAlt /> Hospital Location & Contact
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900">
            Get in Touch with <span className="gradient-text">Radiant Children's Hospital</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            We are available 24 hours a day, 7 days a week for pediatric emergencies, OPD appointments, and newborn care inquiries in Udaipur.
          </p>
        </div>
      </section>

      {/* Contact Cards + Form */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Contact Details & Emergency Box */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Emergency Banner */}
              <div className="rounded-3xl bg-gradient-to-tr from-primary to-accent p-6 text-white shadow-xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl">
                    <FaAmbulance className="animate-pulse" />
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase text-cyan-200">24×7 Emergency Desk</div>
                    <div className="text-xl font-extrabold">{HOSPITAL_INFO.phone}</div>
                  </div>
                </div>
                <p className="text-xs text-white/90 leading-relaxed">
                  Immediate emergency admission available for high fever, breathing distress, seizures, jaundice, or infant trauma.
                </p>
                <a
                  href={`tel:${HOSPITAL_INFO.phone}`}
                  className="w-full py-3 rounded-xl bg-white text-primary font-black text-xs flex items-center justify-center gap-2 shadow-md hover:bg-slate-100 transition-colors"
                >
                  <FaPhoneAlt /> Call Emergency Desk Now
                </a>
              </div>

              {/* Information Cards */}
              <div className="glass-panel p-6 rounded-3xl border border-white/80 space-y-6 shadow-lg">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-xl shrink-0 mt-1">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-slate-900">Hospital Address</h4>
                    <p className="text-slate-600 text-xs mt-1 leading-relaxed">{HOSPITAL_INFO.address}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-600 flex items-center justify-center text-xl shrink-0 mt-1">
                    ✉️
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-slate-900">Email Address</h4>
                    <a href={`mailto:${HOSPITAL_INFO.email}`} className="text-cyan-700 font-bold text-xs hover:underline block mt-1">
                      {HOSPITAL_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl shrink-0 mt-1">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-slate-900">Phone Number</h4>
                    <a href={`tel:${HOSPITAL_INFO.phone}`} className="text-emerald-600 font-bold text-sm hover:underline block mt-1">
                      {HOSPITAL_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center text-xl shrink-0 mt-1">
                    <FaClock />
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-slate-900">OPD & Emergency Hours</h4>
                    <p className="text-slate-700 text-xs mt-1 font-bold">Monday - Saturday OPD:</p>
                    <p className="text-slate-600 text-xs font-semibold">• Morning: 9:00 AM - 3:00 PM</p>
                    <p className="text-slate-600 text-xs font-semibold">• Evening: 5:00 PM - 9:00 PM</p>
                    <p className="text-emerald-600 text-xs font-black mt-1">24x7 Emergency & Intensivists</p>
                  </div>
                </div>

                {/* Social Connect */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-4">
                  <span className="text-xs font-bold text-slate-700">Follow Us:</span>
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

            {/* Right Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/80 shadow-2xl relative">
                
                <h3 className="text-2xl font-black text-slate-900 mb-2 flex items-center gap-2">
                  <FaHospitalUser className="text-primary" /> Send an Inquiry
                </h3>
                <p className="text-slate-600 text-xs mb-6">Fill out the form below and our pediatric desk will get back to you promptly.</p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-500 mx-auto flex items-center justify-center text-3xl">
                      <FaCheckCircle />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900">Message Received!</h4>
                    <p className="text-slate-600 text-sm max-w-md mx-auto">
                      Thank you <span className="font-bold">{formData.parentName}</span>. We have received your request for <span className="font-bold">{formData.childName}</span> regarding <span className="font-bold">{formData.service}</span>. Our desk will contact you on <span className="font-bold">{formData.phone}</span>.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ parentName: '', childName: '', phone: '', service: SERVICES_DATA[0].title, message: '' }); }}
                      className="px-6 py-2.5 rounded-full gradient-btn text-white font-bold text-xs"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Parent's Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.parentName}
                          onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                          placeholder="e.g. Vikram Raj"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white/80 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm transition-all outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Child's Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.childName}
                          onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                          placeholder="e.g. Ananya"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white/80 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm transition-all outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Phone *</label>
                        <input
                          type="tel"
                          required
                          pattern="[0-9]{10}"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 07424937788"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white/80 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm transition-all outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Speciality / Service *</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white/80 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm transition-all outline-none"
                        >
                          {SERVICES_DATA.map((s) => (
                            <option key={s.id} value={s.title}>{s.title}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Message / Question</label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your inquiry or health concern here..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm transition-all outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-2xl gradient-btn text-white font-black text-base shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2"
                    >
                      <FaPaperPlane /> Submit Message
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Embedded Google Map Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-extrabold text-slate-900">Find Us on Google Maps</h3>
            <p className="text-slate-600 text-xs">9 Kamla Nagar, 100 Feet Road, Behind Ashoka Palace, Udaipur, Rajasthan 313001</p>
          </div>

          <div className="rounded-3xl overflow-hidden glass-panel p-3 border border-white/80 shadow-2xl h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922350.4716782165!2d72.6897553765913!3d25.440552555194934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5fb71a80425%3A0x3965db8c2851267f!2sRadiant%20Children%E2%80%99s%20Hospital!5e0!3m2!1sen!2sin!4v1786074857847!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
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
