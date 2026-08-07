import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaCheckCircle, FaGoogle, FaSmile, FaCalendarCheck } from 'react-icons/fa';
import { TESTIMONIALS } from '../data/hospitalData';
import { SEO } from '../components/SEO';

interface TestimonialsPageProps {
  onOpenBooking: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onOpenBooking }) => {
  const ratingBreakdown = [
    { stars: 5, percentage: 95 },
    { stars: 4, percentage: 5 },
    { stars: 3, percentage: 0 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 0 }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      <SEO 
        title="Testimonials & Reviews | Radiant Children's Hospital Udaipur" 
        description="Read authentic Google reviews and feedback from parents who trusted Radiant Children's Hospital in Udaipur for NICU, emergency, and pediatric treatment."
      />

      {/* Header Banner */}
      <section className="relative pt-8 pb-8 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 font-bold text-xs">
            <FaStar className="text-amber-500" /> Google Verified Reviews
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900">
            What Parents Say About <span className="gradient-text">Radiant Children's Hospital</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Heartfelt stories and reviews from parents whose children received expert treatment from our doctors and nursing care team.
          </p>
        </div>
      </section>

      {/* Overall Score & Rating Breakdown */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/80 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Overall Score Box */}
              <div className="md:col-span-4 text-center border-b md:border-b-0 md:border-r border-slate-200/80 pb-6 md:pb-0 md:pr-8">
                <div className="flex items-center justify-center gap-2 text-red-500 text-2xl font-black mb-2">
                  <FaGoogle /> Google Reviews
                </div>
                <div className="text-5xl sm:text-6xl font-black text-slate-900">4.9</div>
                <div className="flex justify-center gap-1 text-amber-400 my-2 text-xl">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-slate-600 text-xs font-bold">Based on 500+ Verified Patient Reviews</p>
              </div>

              {/* Star Bars */}
              <div className="md:col-span-8 space-y-2">
                {ratingBreakdown.map((row) => (
                  <div key={row.stars} className="flex items-center gap-4 text-xs font-bold text-slate-700">
                    <span className="w-12 flex items-center gap-1">
                      {row.stars} <FaStar className="text-amber-400 text-xs" />
                    </span>
                    <div className="flex-1 h-3 rounded-full bg-slate-200/80 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all duration-1000"
                        style={{ width: `${row.percentage}%` }}
                      />
                    </div>
                    <span className="w-10 text-right">{row.percentage}%</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Cards Grid */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-white/80 shadow-xl flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl ${t.avatarBg} text-white font-extrabold text-lg flex items-center justify-center shadow-md`}>
                        {t.parentName.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-1.5">
                          {t.parentName}
                          {t.verified && <FaCheckCircle className="text-emerald-500 text-xs" title="Verified Patient" />}
                        </h3>
                        <p className="text-xs font-semibold text-primary">{t.childInfo}</p>
                      </div>
                    </div>

                    <FaGoogle className="text-slate-400 text-lg group-hover:text-red-500 transition-colors" />
                  </div>

                  <div className="flex items-center justify-between my-3 text-xs">
                    <div className="flex text-amber-400 gap-0.5">
                      {[...Array(t.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <span className="text-slate-400 font-semibold">{t.date}</span>
                  </div>

                  <p className="text-slate-600 text-sm italic leading-relaxed">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold">{t.location}</span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <FaSmile /> Recommended Care
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center pt-8 space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">Experience Radiant Child Care Firsthand</h3>
            <div>
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 rounded-full gradient-btn text-white font-extrabold text-base shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2"
              >
                <FaCalendarCheck /> Book Your Child's Appointment
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
