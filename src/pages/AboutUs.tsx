import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHeartbeat, FaAward, FaUserMd, FaShieldAlt, FaClock, 
  FaHospital, FaCalendarCheck 
} from 'react-icons/fa';
import { DOCTORS } from '../data/hospitalData';
import { SEO } from '../components/SEO';

interface AboutUsProps {
  onOpenBooking: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenBooking }) => {
  const timeline = [
    { year: 'Founding Vision', title: 'Established in Udaipur', desc: 'Started with a passion for child-centric healthcare and zero compromise on hygiene and safety.' },
    { year: 'NICU Upgrade', title: 'Level III NICU Facility', desc: 'Installed advanced incubators, ventilators, phototherapy units, and trained specialized neonatal nurses.' },
    { year: '24x7 Emergency', title: 'Emergency Pediatric Response', desc: 'Launched round-the-clock emergency triage for asthma, fevers, injuries, and infant trauma.' },
    { year: 'PICU Addition', title: 'Pediatric Intensive Care Unit', desc: 'Expanded facilities to include dedicated critical care beds for children up to 18 years.' },
    { year: 'Vaccination Hub', title: 'Digital Immunization Centre', desc: 'Established WHO & IAP recommended cold-chain vaccination center with digital reminder tracking.' }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      <SEO 
        title="About Us | Radiant Children's Hospital Udaipur" 
        description="Learn about Radiant Children's Hospital, our expert pediatric doctors, Level III NICU, PICU facilities, and 15+ years commitment to child healthcare in Rajasthan."
      />

      {/* Header Banner */}
      <section className="relative pt-8 pb-12 overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs">
            <FaHeartbeat /> About Radiant Children's Hospital
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900">
            Dedicated to <span className="gradient-text">Child Healthcare</span> Excellence
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Providing compassionate, world-class medical care for newborns, infants, children, and adolescents from birth to 18 years of age in Udaipur, Rajasthan.
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
                  Our Hospital <span className="gradient-text">Story & Commitment</span>
                </h2>

                <p className="text-slate-600 text-base leading-relaxed">
                  Radiant Children’s Hospital was founded with a single mission: to create a healthcare environment where children feel safe, cared for, and treated with gentle hands, while parents feel confident in the highest clinical standards.
                </p>

                <p className="text-slate-600 text-base leading-relaxed">
                  Located behind Ashoka Palace in New Bhupalpura, Udaipur, our hospital brings together senior pediatricians, best neonatologists, advanced Level III NICU, PICU critical care, and round-the-clock emergency support.
                </p>

                <div className="pt-2 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/70 border border-slate-200 text-center">
                    <div className="text-2xl font-black text-primary">100%</div>
                    <div className="text-xs font-bold text-slate-700 mt-1">Pediatric Dedicated</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/70 border border-slate-200 text-center">
                    <div className="text-2xl font-black text-emerald-500">24×7</div>
                    <div className="text-xs font-bold text-slate-700 mt-1">Emergency Desk</div>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex items-end p-8 text-white">
                    <div>
                      <div className="text-lg font-bold">State-of-the-Art Pediatric Wing</div>
                      <div className="text-xs text-slate-200">Equipped with central oxygen lines & modern incubators</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
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
            <p className="text-slate-600 text-sm">Key milestones in our commitment to pediatric healthcare in Rajasthan.</p>
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
                {/* Timeline Dot */}
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
              Meet Our Senior <span className="gradient-text">Doctors & Specialists</span>
            </h2>
            <p className="text-slate-600 text-sm">
              Renowned pediatricians and neonatologists dedicated to giving your child the best clinical outcome.
            </p>
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
              Advanced Hospital <span className="gradient-text">Facilities</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Level III NICU", desc: "Advanced incubators, ventilators, phototherapy & continuous neonatal monitoring.", icon: FaHospital },
              { title: "Pediatric ICU (PICU)", desc: "Life-support critical care unit for acute childhood illnesses.", icon: FaAward },
              { title: "24x7 Emergency Room", desc: "Triage room equipped with pediatric oxygen & emergency resuscitation.", icon: FaClock },
              { title: "Vaccination Hub", desc: "WHO-compliant cold storage for 100% genuine vaccines.", icon: FaShieldAlt }
            ].map((fac, idx) => (
              <div key={idx} className="glass-card p-6 rounded-3xl text-center border border-white/80 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary to-accent text-white mx-auto flex items-center justify-center text-xl shadow-md">
                  <fac.icon />
                </div>
                <h4 className="text-lg font-bold text-slate-900">{fac.title}</h4>
                <p className="text-slate-600 text-xs leading-relaxed">{fac.desc}</p>
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
