import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaExpand, FaTimes, FaChevronLeft, FaChevronRight, 
  FaCalendarCheck, FaPhoneAlt, FaCheckCircle
} from 'react-icons/fa';
import { SEO } from '../components/SEO';
import { HOSPITAL_INFO } from '../data/hospitalData';

import hospitalExterior from '../assets/hospital-exterior.png';
import hospitalNicu from '../assets/hospital-nicu.png';
import hospitalNight from '../assets/hospital-night.png';
import drDheerajImg from '../assets/dr-dheeraj-diwaakar.jpg';
import waImage1 from '../assets/WhatsApp Image 2026-08-07 at 2.34.25 PM.jpeg';
import waImage2 from '../assets/WhatsApp Image 2026-08-07 at 2.34.29 PM.jpeg';
import childrenFacilitiesBrochure from '../assets/hospital-children-facilities-brochure.jpg';
import nicuPicuSpecsBrochure from '../assets/hospital-nicu-picu-specs-brochure.jpg';
import facilitiesShowcase from '../assets/hospital-facilities-photo-showcase.jpg';
import transportIntactSurvivalBrochure from '../assets/hospital-transport-intact-survival-brochure.jpg';
import drDheerajCredentialsPoster from '../assets/dr-dheeraj-credentials-team-poster.jpg';
import exteriorBuildingFront from '../assets/hospital-exterior-building-front.jpg';
import photoUnitCollage from '../assets/hospital-10-photo-unit-collage.jpg';
import infrastructureMapPoster from '../assets/hospital-infrastructure-location-map-poster.jpg';
import hindiSuperSpecialtyBrochure from '../assets/hospital-hindi-super-specialty-brochure.jpg';
import hindiFacilityBanner from '../assets/hospital-hindi-facility-photo-banner.jpg';

interface GalleryPageProps {
  onOpenBooking: () => void;
}

interface GalleryItem {
  id: string;
  title: string;
  category: 'Exterior' | 'NICU & PICU' | 'Emergency' | 'Doctor' | 'Facilities';
  image: string;
  subtitle: string;
  description: string;
  badge: string;
  badgeBg: string;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'ext-front',
      title: 'Hospital Front Building Facade & Glass Elevation',
      category: 'Exterior',
      image: exteriorBuildingFront,
      subtitle: 'Radiant Children\'s Hospital Udaipur',
      description: 'Full multi-story modern building glass facade with official Radiant emblem and appointment hotline banner.',
      badge: 'Building Facade',
      badgeBg: 'bg-cyan-600/90 text-white'
    },
    {
      id: 'ext-1',
      title: 'Hospital Building Exterior & Front Elevation',
      category: 'Exterior',
      image: hospitalExterior,
      subtitle: '40 Bedded Hospital Center',
      description: 'Modern 40-bedded pediatric hospital campus located behind Ashoka Palace, 100 Feet Road, New Bhupalpura, Udaipur.',
      badge: 'Main Hospital Building',
      badgeBg: 'bg-cyan-500/90 text-white'
    },
    {
      id: 'showcase-1',
      title: 'Hospital Ward & ICU Facility Showcase',
      category: 'Facilities',
      image: facilitiesShowcase,
      subtitle: 'Inpatient Beds, Incubators & Lab Counters',
      description: 'Live photo showcase featuring inpatient general ward beds, Level III NICU incubators, bedside lab diagnostic counter, and hospital reception desk.',
      badge: 'Facilities Showcase',
      badgeBg: 'bg-blue-600/90 text-white'
    },
    {
      id: 'nicu-1',
      title: 'Level III Advanced NICU Nursery Unit',
      category: 'NICU & PICU',
      image: hospitalNicu,
      subtitle: 'State-of-the-Art Critical Care',
      description: 'Fully equipped Level III NICU nursery featuring HFOV ventilators, Non-Invasive Bubble CPAP, Mira Cradle hypothermia care & LED phototherapy.',
      badge: 'Level III NICU',
      badgeBg: 'bg-emerald-500/90 text-white'
    },
    {
      id: 'nicu-brochure-1',
      title: 'Level III NICU & PICU Infrastructure Specifications',
      category: 'NICU & PICU',
      image: nicuPicuSpecsBrochure,
      subtitle: 'HFOV, CPAP, Mira Cradle & Life Support Tech',
      description: 'Official equipment chart displaying conventional & HFOV ventilators, Bubble CPAP, Mira Cradle hypothermia, LED phototherapy & bedside ultrasound.',
      badge: 'NICU & PICU Specs',
      badgeBg: 'bg-indigo-600/90 text-white'
    },
    {
      id: 'emg-1',
      title: '24x7 Emergency Desk & Night Triage Reception',
      category: 'Emergency',
      image: hospitalNight,
      subtitle: 'Round-the-Clock Critical Triage',
      description: '24x7 operational emergency reception desk with instant triage and physical availability of Neonatal & Paediatric Intensivists.',
      badge: '24x7 Emergency Desk',
      badgeBg: 'bg-rose-500/90 text-white'
    },
    {
      id: 'transport-brochure-1',
      title: 'Neonatal Transport & Intact Survival Commitment',
      category: 'Emergency',
      image: transportIntactSurvivalBrochure,
      subtitle: 'Neopuff, Embrace Nest & Sterile Protocols',
      description: 'Official poster highlighting dedicated mobile ICU ambulance transport, Embrace Nest thermal care, Neopuff resuscitator, and infection control standards.',
      badge: 'Transport & Protocol',
      badgeBg: 'bg-rose-600/90 text-white'
    },
    {
      id: 'doc-1',
      title: 'Dr. Dheeraj Diwaakar — Lead Neonatologist',
      category: 'Doctor',
      image: drDheerajImg,
      subtitle: 'DM Neonatology (JIPMER Pondicherry)',
      description: 'Lead Neonatologist & Level III NICU Director, former HOD at GMCH Udaipur & former Consultant at NICE Hospital Hyderabad.',
      badge: 'Clinical Director',
      badgeBg: 'bg-teal-500/90 text-white'
    },
    {
      id: 'doc-poster-1',
      title: 'Dr. Dheeraj Diwaakar & Clinical Nursing Team',
      category: 'Doctor',
      image: drDheerajCredentialsPoster,
      subtitle: 'DM Neonatology JIPMER & NICU Staff',
      description: 'Official medical poster detailing Dr. Dheeraj Diwaakar (MBBS, MD, DM JIPMER Pondicherry) alongside the dedicated pediatric critical care nursing team.',
      badge: 'Doctor & Team',
      badgeBg: 'bg-teal-600/90 text-white'
    },
    {
      id: 'fac-brochure-1',
      title: 'Official Children Facilities & Care Overview',
      category: 'Facilities',
      image: childrenFacilitiesBrochure,
      subtitle: 'General, Semi-Deluxe, Deluxe & Diagnostic Care',
      description: 'Official infographic chart detailing central oxygen, in-house pharmacy, ABG analyzer, 2D echo, lactation support, neurodevelopment & CCTV security.',
      badge: 'Facilities Overview',
      badgeBg: 'bg-emerald-600/90 text-white'
    },
    {
      id: 'fac-1',
      title: 'Outpatient Consultation & Emergency OPD',
      category: 'Facilities',
      image: waImage1,
      subtitle: '24x7 OPD Consultation',
      description: 'Specialized consultation chambers operational 24 hours a day for pediatric OPD services.',
      badge: 'OPD & Patient Desk',
      badgeBg: 'bg-purple-500/90 text-white'
    },
    {
      id: 'fac-2',
      title: 'Sterile Newborn & Inpatient Treatment Ward',
      category: 'Facilities',
      image: waImage2,
      subtitle: 'Sterile Wards & Private Suites',
      description: 'Inpatient rooms equipped with central oxygen lines, compressed air, high vacuum suction & 100% DG auto backup generator power.',
      badge: 'Inpatient Suite',
      badgeBg: 'bg-blue-500/90 text-white'
    },
    {
      id: 'collage-1',
      title: '10-Unit Hospital Facility & ICU Photo Collage',
      category: 'Facilities',
      image: photoUnitCollage,
      subtitle: 'NICU, Wards, Lab & Operation Theatre',
      description: 'Comprehensive 10-picture collage displaying radiant incubators, operation theatre, emergency triage, lab counters, and medical nursing staff.',
      badge: 'Photo Collage',
      badgeBg: 'bg-purple-600/90 text-white'
    },
    {
      id: 'map-poster',
      title: '40 Bedded Infrastructure & Regional Location Map',
      category: 'Exterior',
      image: infrastructureMapPoster,
      subtitle: 'Shobhagpura Circle, 100 Ft Rd, Udaipur',
      description: 'Official hospital infrastructure layout poster featuring detailed location map, NICU equipment list, transport hotline & contact information.',
      badge: 'Map & Poster',
      badgeBg: 'bg-indigo-600/90 text-white'
    },
    {
      id: 'hindi-brochure-1',
      title: 'Super Specialty Child Care & Premature Survival Overview',
      category: 'Doctor',
      image: hindiSuperSpecialtyBrochure,
      subtitle: 'Southern Rajasthan Lead Pediatric Care',
      description: 'Official super specialty medical poster highlighting 500-600gm premature baby survival success (97-99%), 24x7 intensivist availability, and Dr. Dheeraj Diwaakar.',
      badge: 'Super Specialty',
      badgeBg: 'bg-amber-600/90 text-white'
    },
    {
      id: 'hindi-banner-1',
      title: 'Super Specialty Hospital & 5-Unit Facility Banner',
      category: 'Facilities',
      image: hindiFacilityBanner,
      subtitle: 'Advanced NICU, Modular OT & ICU Staff',
      description: 'Official banner showcasing Level III NICU incubators, modular operation theatre, bedside ultrasound, and senior pediatric ICU team in Udaipur.',
      badge: 'Facility Banner',
      badgeBg: 'bg-emerald-600/90 text-white'
    }
  ];

  const categories = ['All', 'Exterior', 'NICU & PICU', 'Emergency', 'Doctor', 'Facilities'];

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const nextLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16 overflow-hidden">
      <SEO 
        title="Photo Gallery | Radiant Children's Hospital Udaipur" 
        description="Explore photos of Radiant Children's Hospital in Udaipur, including 40-bedded hospital exterior, Level III NICU, PICU, 24x7 emergency desk & Dr. Dheeraj Diwaakar."
      />

      {/* 1. HERO HEADER BANNER */}
      <section className="relative pt-6 pb-8 text-center overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-teal-500/10 to-blue-500/10 rounded-full blur-3xl pointer-events-none" />

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
            <span className="text-amber-300 uppercase tracking-wider font-black">🏥 INFRASTRUCTURE & FACILITY PHOTO GALLERY</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight"
          >
            Take a Visual Tour of <span className="gradient-text">Radiant Hospital</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base sm:text-xl leading-relaxed font-medium max-w-3xl mx-auto"
          >
            Inspect our 40-bedded hospital building, Level III NICU nursery, PICU units, 24x7 emergency desk, bedside diagnostics, and clinical leadership in Udaipur.
          </motion.p>
        </div>
      </section>

      {/* 2. CATEGORY TABS & PHOTO GRID */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-3 rounded-full font-black text-xs sm:text-sm transition-all duration-300 ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xl scale-105 border border-slate-700'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-sm'
                  }`}
                >
                  {cat === 'All' ? '🖼️ All Photos' : cat}
                </button>
              );
            })}
          </div>

          {/* Photo Gallery Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => openLightbox(idx)}
                  className="rounded-[2.5rem] bg-white border border-slate-200 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/15 overflow-hidden group cursor-pointer flex flex-col justify-between transition-all duration-300"
                >
                  {/* Photo Container */}
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-950">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Overlay Gradient & Expand Button */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-between p-6">
                      <div className="flex justify-between items-start">
                        <span className={`px-3 py-1 rounded-full font-black text-[10px] uppercase tracking-wider shadow-md ${item.badgeBg}`}>
                          {item.badge}
                        </span>

                        <div className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md flex items-center justify-center text-sm transition-all group-hover:scale-110">
                          <FaExpand />
                        </div>
                      </div>

                      <div>
                        <span className="text-cyan-300 font-extrabold text-xs block">{item.subtitle}</span>
                        <h3 className="text-xl font-black text-white leading-snug mt-0.5">{item.title}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Card Description Footer */}
                  <div className="p-6 space-y-3 bg-white">
                    <p className="text-slate-600 text-xs font-semibold leading-relaxed">
                      {item.description}
                    </p>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-extrabold text-emerald-600">
                      <span className="flex items-center gap-1.5">
                        <FaCheckCircle className="text-emerald-500" /> Verified Radiant Infrastructure
                      </span>
                      <span className="text-slate-400 group-hover:text-primary transition-colors">Click to Expand ↗</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* 3. LIGHTBOX FULLSCREEN MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 border border-white/20 text-white flex items-center justify-center text-xl backdrop-blur-md transition-all shadow-2xl"
              aria-label="Close photo"
            >
              <FaTimes />
            </button>

            {/* Left Nav Button */}
            <button
              onClick={prevLightbox}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 border border-white/20 text-white flex items-center justify-center text-lg backdrop-blur-md transition-all shadow-2xl"
              aria-label="Previous photo"
            >
              <FaChevronLeft />
            </button>

            {/* Right Nav Button */}
            <button
              onClick={nextLightbox}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 border border-white/20 text-white flex items-center justify-center text-lg backdrop-blur-md transition-all shadow-2xl"
              aria-label="Next photo"
            >
              <FaChevronRight />
            </button>

            {/* Main Lightbox Content Box */}
            <div className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center space-y-4 relative z-10">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 max-h-[70vh] bg-slate-900 flex items-center justify-center">
                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />
              </div>

              <div className="bg-slate-900/90 border border-white/20 p-6 rounded-3xl text-center max-w-2xl w-full text-white space-y-2 backdrop-blur-md shadow-2xl">
                <span className="px-3 py-1 rounded-full bg-cyan-400 text-slate-950 font-black text-[10px] uppercase tracking-wider inline-block">
                  {filteredItems[lightboxIndex].badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-black">{filteredItems[lightboxIndex].title}</h3>
                <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
                  {filteredItems[lightboxIndex].description}
                </p>
                <div className="text-slate-400 text-[11px] font-bold pt-1">
                  Photo {lightboxIndex + 1} of {filteredItems.length}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. BOTTOM CALL TO ACTION BANNER */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] bg-gradient-to-r from-slate-900 via-primary to-slate-900 p-8 sm:p-14 text-white shadow-2xl text-center space-y-6 relative overflow-hidden">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight max-w-3xl mx-auto">
              Visit Radiant Children's Hospital in Udaipur
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

export default GalleryPage;
