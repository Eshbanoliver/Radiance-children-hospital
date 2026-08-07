import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaStethoscope, FaBaby, FaUserMd, FaMicroscope, FaProcedures, 
  FaSyringe, FaChartLine, FaAppleAlt, FaAmbulance, FaThermometerHalf, 
  FaLungs, FaHeartbeat, FaSearch, FaCalendarCheck, FaCheckCircle 
} from 'react-icons/fa';
import { SERVICES_DATA } from '../data/hospitalData';
import { SEO } from '../components/SEO';

interface ServicesPageProps {
  onOpenBooking: (serviceTitle?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Critical Care', 'General Care', 'Specialized', 'Wellness'];

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'general-pediatrics': return <FaStethoscope />;
      case 'newborn-care': return <FaBaby />;
      case 'neonatology': return <FaUserMd />;
      case 'nicu': return <FaMicroscope />;
      case 'picu': return <FaProcedures />;
      case 'vaccination-centre': return <FaSyringe />;
      case 'growth-development': return <FaChartLine />;
      case 'nutrition-counseling': return <FaAppleAlt />;
      case 'child-emergency-care': return <FaAmbulance />;
      case 'fever-infection': return <FaThermometerHalf />;
      case 'asthma-allergy': return <FaLungs />;
      case 'health-checkups': return <FaHeartbeat />;
      default: return <FaStethoscope />;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      <SEO 
        title="Services & Specialties | Radiant Children's Hospital Udaipur" 
        description="Comprehensive pediatric medical services: General Pediatrics, 24x7 Emergency, NICU, PICU, Vaccination Centre, Growth Monitoring, Asthma Care, and Newborn Care in Udaipur."
      />

      {/* Page Header */}
      <section className="relative pt-8 pb-8 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs">
            <FaStethoscope /> Comprehensive Pediatric Specialties
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900">
            Our Medical <span className="gradient-text">Services & Facilities</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            From emergency resuscitation and neonatal intensive care to routine vaccinations and growth tracking, we cater to all health needs of children 0 to 18 years.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="glass-panel p-4 rounded-3xl border border-white/80 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Box */}
            <div className="relative w-full md:w-80">
              <FaSearch className="absolute left-4 top-3.5 text-slate-400 text-sm" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services (e.g. NICU, Vaccine)..."
                className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-white/80 border border-slate-200 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-primary text-white shadow-md scale-105'
                      : 'bg-white/70 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-white/80 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-primary/10 via-accent/20 to-secondary/10 text-primary flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                      {getServiceIcon(service.id)}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-bold text-[10px] uppercase">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    {service.fullDesc}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                    <div className="text-xs font-bold text-slate-800">Key Features:</div>
                    <ul className="space-y-1.5">
                      {service.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-slate-600 flex items-center gap-2">
                          <FaCheckCircle className="text-emerald-500 text-xs shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/60">
                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="w-full py-3 rounded-2xl gradient-btn text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <FaCalendarCheck /> Book Consult for {service.title}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12 glass-panel rounded-3xl">
              <p className="text-slate-600 font-bold">No services match your search query "{searchQuery}".</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="mt-4 px-6 py-2 rounded-full bg-primary text-white text-xs font-bold"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};
