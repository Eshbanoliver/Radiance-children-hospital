import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCalendarAlt, FaUser, FaPhoneAlt, FaChild, FaClock, FaCheckCircle, FaHospitalUser } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import { HOSPITAL_INFO, SERVICES_DATA } from '../data/hospitalData';
import type { AppointmentFormData } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose, defaultService = '' }) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    parentName: '',
    childName: '',
    childAge: '',
    phone: '',
    service: defaultService || SERVICES_DATA[0].title,
    preferredDate: '',
    preferredTime: 'Morning (9 AM - 1 PM)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Trigger celebratory confetti effect
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      parentName: '',
      childName: '',
      childAge: '',
      phone: '',
      service: SERVICES_DATA[0].title,
      preferredDate: '',
      preferredTime: 'Morning (9 AM - 1 PM)',
      notes: ''
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg glass-panel rounded-3xl p-6 sm:p-8 shadow-2xl z-10 border border-white/80 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200/60 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white text-xl shadow-md">
                  <FaHospitalUser />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-800">Book an Appointment</h3>
                  <p className="text-xs text-primary font-semibold">Radiant Children's Hospital Udaipur</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-500 mx-auto flex items-center justify-center text-4xl mb-4 shadow-inner">
                  <FaCheckCircle />
                </div>
                <h4 className="text-2xl font-bold text-slate-800 mb-2">Appointment Requested!</h4>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Thank you <span className="font-semibold text-slate-800">{formData.parentName}</span>. Our desk team at Radiant Children's Hospital will contact you shortly on <span className="font-semibold text-slate-800">{formData.phone}</span> to confirm your slot for <span className="font-semibold text-slate-800">{formData.childName}</span>.
                </p>

                <div className="p-4 rounded-2xl bg-primary-light/50 border border-primary/20 text-left text-xs space-y-2 mb-6">
                  <p className="font-bold text-primary">Need Immediate Emergency Care?</p>
                  <p className="text-slate-700">Call our 24x7 emergency desk immediately: <a href={`tel:${HOSPITAL_INFO.phone}`} className="font-bold text-primary underline">{HOSPITAL_INFO.phone}</a></p>
                </div>

                <button
                  onClick={handleReset}
                  className="w-full py-3.5 rounded-2xl gradient-btn text-white font-bold shadow-lg"
                >
                  Done & Close
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Parent Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Parent's Name *</label>
                    <div className="relative">
                      <FaUser className="absolute left-3.5 top-3.5 text-slate-400 text-sm" />
                      <input
                        type="text"
                        required
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        placeholder="e.g. Ramesh Sharma"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white/80 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Child Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Child's Name *</label>
                    <div className="relative">
                      <FaChild className="absolute left-3.5 top-3.5 text-slate-400 text-sm" />
                      <input
                        type="text"
                        required
                        value={formData.childName}
                        onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                        placeholder="e.g. Aarav"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white/80 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm transition-all outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Child Age */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Child's Age / DOB *</label>
                    <input
                      type="text"
                      required
                      value={formData.childAge}
                      onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                      placeholder="e.g. 2 Months / 4 Years"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white/80 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm transition-all outline-none"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Phone *</label>
                    <div className="relative">
                      <FaPhoneAlt className="absolute left-3.5 top-3.5 text-slate-400 text-sm" />
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 07424937788"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white/80 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm transition-all outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Specialty / Service */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Select Specialty / Service *</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white/80 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm transition-all outline-none"
                  >
                    {SERVICES_DATA.map((srv) => (
                      <option key={srv.id} value={srv.title}>
                        {srv.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Date */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Date *</label>
                    <div className="relative">
                      <FaCalendarAlt className="absolute left-3.5 top-3.5 text-slate-400 text-sm" />
                      <input
                        type="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white/80 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Time slot */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Time *</label>
                    <div className="relative">
                      <FaClock className="absolute left-3.5 top-3.5 text-slate-400 text-sm" />
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white/80 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm transition-all outline-none"
                      >
                        <option value="Morning (9 AM - 1 PM)">Morning (9 AM - 1 PM)</option>
                        <option value="Afternoon (1 PM - 5 PM)">Afternoon (1 PM - 5 PM)</option>
                        <option value="Evening (5 PM - 9 PM)">Evening (5 PM - 9 PM)</option>
                        <option value="Emergency (24x7 Immediate)">Emergency (24x7 Immediate)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Symptoms / Notes (Optional)</label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Briefly describe child's symptoms or routine checkup requirement..."
                    className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-white/80 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm transition-all outline-none resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl gradient-btn text-white font-bold text-base shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2"
                >
                  <FaCalendarAlt /> Confirm Appointment Booking
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
