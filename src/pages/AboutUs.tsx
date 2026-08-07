import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHeartbeat, FaUserMd, FaShieldAlt, FaCalendarCheck, 
  FaCheckCircle, FaHospital 
} from 'react-icons/fa';
import { 
  DOCTORS, INTACT_SURVIVAL_COMMITMENT, INFECTION_CONTROL_PROTOCOLS, 
  CHILDREN_FACILITIES_LIST 
} from '../data/hospitalData';
import { SEO } from '../components/SEO';

interface AboutUsProps {
  onOpenBooking: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenBooking }) => {
  const timeline = [
    { year: '40 Bedded Center', title: 'Established in Udaipur', desc: '40-bedded advanced pediatric facility with General, Semi-Deluxe & Deluxe patient rooms.' },
    { year: 'Level III NICU', title: 'Intensive Neonatal Care', desc: 'Equipped with HFOV, Bubble CPAP, Mira Cradle Hypothermia, Surfactant Therapy & KMC.' },
    { year: '24x7 Emergency', title: 'Intensivists Availability', desc: 'Round-the-clock availability of Neonatal & Paediatric Intensivists & emergency triage.' },
    { year: 'Equipped PICU', title: 'Pediatric Intensive Care', desc: 'Ventilators, multipara monitors, syringe pumps & volumetric infusion pumps.' },
    { year: 'In-House ABG & Labs', title: 'Bedside Diagnostics', desc: 'In-house ABG analyzer, bedside 2D Echo, Ultrasonography, X-Ray & 24x7 Pharmacy.' }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      <SEO 
        title="About Us | Radiant Children's Hospital Udaipur" 
        description="Learn about Radiant Children's Hospital, a 40-bedded pediatric center in Udaipur with Level III NICU, PICU, 24x7 Intensivists, and intact survival commitment."
      />

      {/* Header Banner */}
      <section className="relative pt-8 pb-12 overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs">
            <FaHeartbeat /> 40 Bedded Neonatal & Paediatric Care Centre
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900">
            Dedicated to <span className="gradient-text">Child Healthcare Excellence</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Providing 24x7 Emergency & Availability of Neonatal & Paediatric Intensivists for children from birth to 18 years of age in Udaipur, Rajasthan.
          </p>
        </div>
      </section>

      {/* Hospital Story & Commitment */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/80 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-3xl font-black text-slate-900">
                  Our Hospital <span className="gradient-text">Story & Infrastructure</span>
                </h2>

                <p className="text-slate-600 text-base leading-relaxed">
                  Radiant Children’s Hospital is a 40-bedded specialized pediatric hospital located behind Ashoka Palace in New Bhupalpura, Udaipur.
                </p>

                <p className="text-slate-600 text-base leading-relaxed">
                  We bring together senior pediatricians, expert neonatologists, Level III NICU (HFOV, Bubble CPAP, Mira Cradle), PICU, in-house ABG analyzer, X-Ray, 2D Echo, and 24x7 Neonatal Transport Ambulance equipped with Neopuff and Embrace Nest.
                </p>

                <div className="pt-2 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/70 border border-slate-200 text-center">
                    <div className="text-2xl font-black text-primary">40 Beds</div>
                    <div className="text-xs font-bold text-slate-700 mt-1">General, Semi-Deluxe & Deluxe</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/70 border border-slate-200 text-center">
                    <div className="text-2xl font-black text-emerald-500">24×7</div>
                    <div className="text-xs font-bold text-slate-700 mt-1">Intensivists On-Call</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
                    alt="Radiant Children's Hospital Facilities"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8 text-white">
                    <div>
                      <div className="text-lg font-bold">40 Bedded Pediatric & Neonatal Nursery</div>
                      <div className="text-xs text-slate-200">Equipped with Central Oxygen, Compressed Air & Suction</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Intact Survival Commitment */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/80 shadow-2xl space-y-8">
            <div className="max-w-3xl space-y-3">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs">
                NICU Care Protocol
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
                Commitment for Intact Survival of <span className="gradient-text">Our NICU Graduates</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {INTACT_SURVIVAL_COMMITMENT.map((item, idx) => (
                <div key={idx} className="glass-card p-5 rounded-2xl border border-white/80 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-600 font-black text-sm">
                    <FaCheckCircle className="shrink-0" />
                    <h4>{item.title}</h4>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infection Control & Safety */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-black text-slate-900">
              Prevention is Better Than Cure <span className="gradient-text">— Infection Protocols</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INFECTION_CONTROL_PROTOCOLS.map((protocol, idx) => (
              <div key={idx} className="glass-card p-5 rounded-2xl border border-white/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center text-lg font-black">
                  <FaShieldAlt />
                </div>
                <p className="text-slate-700 text-xs font-bold leading-relaxed">
                  {protocol}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Timeline */}
      <section className="relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-black text-slate-900">
              Our Journey of <span className="gradient-text">Excellence & Growth</span>
            </h2>
          </div>

          <div className="relative border-l-4 border-primary/30 ml-4 sm:ml-32 space-y-8">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-8 sm:pl-10"
              >
                <div className="absolute -left-[14px] top-1 w-6 h-6 rounded-full bg-primary border-4 border-white shadow-md" />
                <div className="glass-card p-6 rounded-2xl border border-white/80 shadow-md">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs mb-2">
                    {item.year}
                  </span>
                  <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
                  <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor / Team Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs">
              <FaUserMd /> Medical Leadership
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Meet Our Senior <span className="gradient-text">Doctors & Intensivists</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DOCTORS.map((doc) => (
              <div
                key={doc.id}
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/80 flex flex-col sm:flex-row gap-6 items-center shadow-xl"
              >
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-36 h-36 rounded-2xl object-cover shadow-md shrink-0 border-2 border-white"
                />
                <div className="space-y-2 text-center sm:text-left">
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 font-bold text-[10px] uppercase">
                    {doc.experience}
                  </span>
                  <h3 className="text-xl font-black text-slate-900">{doc.name}</h3>
                  <p className="text-primary font-bold text-xs">{doc.role}</p>
                  <p className="text-slate-500 font-semibold text-xs">{doc.qualifications}</p>
                  <p className="text-slate-600 text-xs leading-relaxed pt-1">{doc.bio}</p>
                  <div className="flex flex-wrap gap-1.5 pt-2 justify-center sm:justify-start">
                    {doc.specialties.map((spec, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-semibold text-[10px]">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Highlight */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-black text-slate-900">
              40 Bedded Center <span className="gradient-text">Facilities</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CHILDREN_FACILITIES_LIST.slice(0, 8).map((fac, idx) => (
              <div key={idx} className="glass-card p-6 rounded-3xl text-center border border-white/80 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary to-accent text-white mx-auto flex items-center justify-center text-xl shadow-md">
                  <FaHospital />
                </div>
                <h4 className="text-base font-bold text-slate-900">{fac.name}</h4>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-full gradient-btn text-white font-extrabold text-base shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2"
            >
              <FaCalendarCheck /> Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
