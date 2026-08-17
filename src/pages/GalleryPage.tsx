import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaExpand, FaTimes, FaChevronLeft, FaChevronRight, 
  FaCalendarCheck, FaPhoneAlt, FaCheckCircle
} from 'react-icons/fa';
import { SEO } from '../components/SEO';
import { HOSPITAL_INFO } from '../data/hospitalData';

import img1873 from '../assets/Hospital/IMG_1873.JPG';
import img1876 from '../assets/Hospital/IMG_1876.JPG';
import img1877 from '../assets/Hospital/IMG_1877.JPG';
import img1878 from '../assets/Hospital/IMG_1878.JPG';
import img1879 from '../assets/Hospital/IMG_1879.JPG';
import img1880 from '../assets/Hospital/IMG_1880.JPG';
import img1882 from '../assets/Hospital/IMG_1882.JPG';
import img1886 from '../assets/Hospital/IMG_1886.JPG';
import img1889 from '../assets/Hospital/IMG_1889.JPG';
import img1893 from '../assets/Hospital/IMG_1893.JPG';
import img1894 from '../assets/Hospital/IMG_1894.JPG';
import img1895 from '../assets/Hospital/IMG_1895.JPG';
import img1896 from '../assets/Hospital/IMG_1896.JPG';
import img1898 from '../assets/Hospital/IMG_1898.JPG';
import img1899 from '../assets/Hospital/IMG_1899.JPG';
import img1902 from '../assets/Hospital/IMG_1902.JPG';
import img1906 from '../assets/Hospital/IMG_1906.JPG';
import img1907 from '../assets/Hospital/IMG_1907.JPG';
import img1909 from '../assets/Hospital/IMG_1909.JPG';
import img1912 from '../assets/Hospital/IMG_1912.JPG';
import img1914 from '../assets/Hospital/IMG_1914.JPG';
import img1916 from '../assets/Hospital/IMG_1916.JPG';
import img1917 from '../assets/Hospital/IMG_1917.JPG';
import img1924 from '../assets/Hospital/IMG_1924.JPG';
import img1925 from '../assets/Hospital/IMG_1925.JPG';
import img1928 from '../assets/Hospital/IMG_1928.JPG';
import img1929 from '../assets/Hospital/IMG_1929.JPG';
import img1930 from '../assets/Hospital/IMG_1930.JPG';
import img1932 from '../assets/Hospital/IMG_1932.JPG';
import img1934 from '../assets/Hospital/IMG_1934.JPG';
import img1936 from '../assets/Hospital/IMG_1936.JPG';

import newImgIndependence from '../assets/IMG-20260811-WA0008.jpg.jpeg';
import newImgPatrioticTeam from '../assets/IMG-20260811-WA0009.jpg.jpeg';
import newImgPressGarv from '../assets/IMG-20230317-WA0004.jpg.jpeg';
import newImgNicuTeam from '../assets/WhatsApp Image 2026-08-17 at 10.18.53 AM.jpeg';
import newImgAwardStaff1 from '../assets/WhatsApp Image 2026-08-17 at 10.27.51 AM.jpeg';
import newImgFlagHoisting from '../assets/WhatsApp Image 2026-08-17 at 10.27.51 AM (1).jpeg';
import newImgStaffGroupAward from '../assets/WhatsApp Image 2026-08-17 at 10.27.51 AM (2).jpeg';
import newImgDoctorAward from '../assets/WhatsApp Image 2026-08-17 at 10.27.53 AM (1).jpeg';
import newImgStaffAward2 from '../assets/WhatsApp Image 2026-08-17 at 10.27.53 AM (2).jpeg';
import newImgAdminTeam from '../assets/WhatsApp Image 2026-08-17 at 10.27.55 AM (1).jpeg';
import newImgAdminAward from '../assets/WhatsApp Image 2026-08-17 at 10.27.55 AM (2).jpeg';
import newImgStaffNurseAward from '../assets/WhatsApp Image 2026-08-17 at 10.27.56 AM.jpeg';
import newImgWideTeamPhoto from '../assets/WhatsApp Image 2026-08-17 at 10.27.56 AM (1).jpeg';
import newImgLeadershipAddress from '../assets/WhatsApp Image 2026-08-17 at 10.27.56 AM (2).jpeg';
import newImgExecGroup from '../assets/WhatsApp Image 2026-08-17 at 10.27.57 AM (1).jpeg';
import newImgConsultantAwardSpeech from '../assets/WhatsApp Image 2026-08-17 at 10.27.57 AM (2).jpeg';
import newImgExecGroup2 from '../assets/WhatsApp Image 2026-08-17 at 10.27.58 AM.jpeg';

interface GalleryPageProps {
  onOpenBooking: () => void;
}

interface GalleryItem {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  badgeBg: string;
}

const galleryItems: GalleryItem[] = [
  { 
    id: 'new-img-exec-group', 
    image: newImgExecGroup, 
    title: 'Hospital Executive Directors & Leadership', 
    subtitle: 'Dr. Dheeraj Diwaakar & Rashmi Vaishnav', 
    description: 'Dr. Dheeraj Diwaakar, Managing Director Rashmi Vaishnav, and hospital executive board members during national celebration on the terrace.', 
    badge: 'Hospital Team', 
    badgeBg: 'bg-emerald-600/90 text-white' 
  },
  { 
    id: 'new-img-consultant-award-speech', 
    image: newImgConsultantAwardSpeech, 
    title: 'Senior Medical Consultant Recognition Honor', 
    subtitle: 'Dr. Dheeraj Diwaakar Award Speech', 
    description: 'Dr. Dheeraj Diwaakar addressing staff while presenting Certificate of Appreciation for medical excellence and clinical care quality.', 
    badge: 'Achievements', 
    badgeBg: 'bg-amber-600/90 text-white' 
  },
  { 
    id: 'new-img-exec-group-2', 
    image: newImgExecGroup2, 
    title: 'Hospital Administrative Board & Directors', 
    subtitle: 'Radiant Children\'s Hospital Executive Team', 
    description: 'Executive leadership team standing under the Indian Flag during hospital celebrations.', 
    badge: 'Events & Culture', 
    badgeBg: 'bg-teal-600/90 text-white' 
  },
  { 
    id: 'new-img-wide-team-photo', 
    image: newImgWideTeamPhoto, 
    title: 'Hospital Medical & Nursing Faculty', 
    subtitle: 'Radiant Children\'s Hospital Team Photo', 
    description: 'Dr. Dheeraj Diwaakar, MD Rashmi Vaishnav, consultant doctors, and 24x7 critical care nursing staff on the hospital terrace.', 
    badge: 'Hospital Team', 
    badgeBg: 'bg-emerald-600/90 text-white' 
  },
  { 
    id: 'new-img-leadership-address', 
    image: newImgLeadershipAddress, 
    title: 'Hospital Executive Leadership Address', 
    subtitle: 'Dr. Dheeraj Diwaakar & Rashmi Vaishnav', 
    description: 'Dr. Dheeraj Diwaakar and Managing Director Rashmi Vaishnav addressing hospital staff during the annual recognition gathering.', 
    badge: 'Events & Culture', 
    badgeBg: 'bg-teal-600/90 text-white' 
  },
  { 
    id: 'new-img-admin-team', 
    image: newImgAdminTeam, 
    title: 'Hospital Operations & Administrative Staff', 
    subtitle: 'Management & Front Office Team', 
    description: 'Executive management team with front office, pharmacy, and hospital administrative staff during national celebrations.', 
    badge: 'Hospital Team', 
    badgeBg: 'bg-blue-600/90 text-white' 
  },
  { 
    id: 'new-img-admin-award', 
    image: newImgAdminAward, 
    title: 'Administrative Excellence Certificate Honor', 
    subtitle: 'Leadership Service Award', 
    description: 'Dr. Dheeraj Diwaakar and MD Rashmi Vaishnav presenting Certificate of Appreciation for administrative operations excellence.', 
    badge: 'Achievements', 
    badgeBg: 'bg-amber-600/90 text-white' 
  },
  { 
    id: 'new-img-staff-nurse-award', 
    image: newImgStaffNurseAward, 
    title: 'Pediatric Care Staff Honor Presentation', 
    subtitle: 'Clinical Nursing Recognition', 
    description: 'Dr. Dheeraj Diwaakar presenting Certificate of Appreciation to clinical support staff member for dedicated bedside patient care.', 
    badge: 'Hospital Team', 
    badgeBg: 'bg-indigo-600/90 text-white' 
  },
  { 
    id: 'new-img-staff-group-award', 
    image: newImgStaffGroupAward, 
    title: 'Hospital Staff & Medical Excellence Awards', 
    subtitle: 'Dr. Dheeraj Diwaakar & Staff Ceremony', 
    description: 'Dr. Dheeraj Diwaakar and Managing Director Rashmi Vaishnav presenting Certificates of Excellence to hospital staff and critical care team on the terrace.', 
    badge: 'Hospital Team', 
    badgeBg: 'bg-emerald-600/90 text-white' 
  },
  { 
    id: 'new-img-flag-hoisting', 
    image: newImgFlagHoisting, 
    title: 'Tricolor Flag Hoisting Ceremony', 
    subtitle: 'Dr. Dheeraj Diwaakar & Rashmi Vaishnav', 
    description: 'Dr. Dheeraj Diwaakar hoisting the Indian Tricolor flag alongside Managing Director Rashmi Vaishnav during the hospital national day celebration.', 
    badge: 'Events & Culture', 
    badgeBg: 'bg-teal-600/90 text-white' 
  },
  { 
    id: 'new-img-doctor-award', 
    image: newImgDoctorAward, 
    title: 'Clinical Excellence Award Presentation', 
    subtitle: 'Dr. Dheeraj Diwaakar Honoring Consultant', 
    description: 'Dr. Dheeraj Diwaakar presenting Certificate of Appreciation for outstanding pediatric clinical care and service quality at Radiant Children\'s Hospital.', 
    badge: 'Achievements', 
    badgeBg: 'bg-amber-600/90 text-white' 
  },
  { 
    id: 'new-img-award-staff-1', 
    image: newImgAwardStaff1, 
    title: 'Staff Appreciation & Service Award', 
    subtitle: 'Hospital Leadership Recognition', 
    description: 'Dr. Dheeraj Diwaakar presenting Certificate of Appreciation to dedicated hospital support and nursing staff member.', 
    badge: 'Hospital Team', 
    badgeBg: 'bg-blue-600/90 text-white' 
  },
  { 
    id: 'new-img-staff-award-2', 
    image: newImgStaffAward2, 
    title: 'Nursing & Medical Staff Honor Ceremony', 
    subtitle: 'Radiant Children\'s Hospital Awards', 
    description: 'Recognition ceremony honoring pediatric critical care nursing staff for 24x7 dedication and sterile patient care excellence.', 
    badge: 'Hospital Team', 
    badgeBg: 'bg-indigo-600/90 text-white' 
  },
  { 
    id: 'new-img-nicu-team', 
    image: newImgNicuTeam, 
    title: 'Level III NICU Clinical Medical Team', 
    subtitle: 'Dr. Dheeraj Diwaakar & NICU Team', 
    description: 'Dr. Dheeraj Diwaakar with the specialized NICU pediatric medical team caring for a newborn baby inside Level III NICU nursery at Radiant Children\'s Hospital.', 
    badge: 'Level III NICU', 
    badgeBg: 'bg-purple-600/90 text-white' 
  },
  { 
    id: 'new-img-independence', 
    image: newImgIndependence, 
    title: 'Independence Day Flag Hoisting', 
    subtitle: 'Hospital Leadership & Staff Celebration', 
    description: 'Dr. Dheeraj Diwaakar, Managing Director Rashmi Vaishnav, and the full medical & hospital staff celebrating Independence Day on the hospital terrace.', 
    badge: 'Events & Culture', 
    badgeBg: 'bg-emerald-600/90 text-white' 
  },
  { 
    id: 'new-img-patriotic-team', 
    image: newImgPatrioticTeam, 
    title: 'Hospital Staff Cultural Celebration', 
    subtitle: 'Radiant Children\'s Hospital Team', 
    description: 'Managing Director Rashmi Vaishnav with hospital staff and critical care nursing team during the patriotic Independence Day gathering.', 
    badge: 'Hospital Team', 
    badgeBg: 'bg-blue-600/90 text-white' 
  },
  { 
    id: 'new-img-press-garv', 
    image: newImgPressGarv, 
    title: '61-Day Miraculous NICU Survival Press Story', 
    subtitle: 'Navjyoti Dainik Newspaper Coverage', 
    description: 'Official newspaper coverage of the 61-day intensive NICU care provided to baby Garv by Dr. Dheeraj Diwaakar and the clinical team.', 
    badge: 'Achievements', 
    badgeBg: 'bg-amber-600/90 text-white' 
  },
  { id: 'img-1873', image: img1873, title: 'Inpatient Ward & Nursing Desk', subtitle: 'Patient Beds & Reception Counter', description: 'General inpatient ward with patient beds and nursing station at Radiant Children\'s Hospital, Udaipur.', badge: 'Inpatient Ward', badgeBg: 'bg-cyan-600/90 text-white' },
  { id: 'img-1876', image: img1876, title: 'Hospital Facility Interior', subtitle: 'Radiant Children\'s Hospital', description: 'Interior view of hospital infrastructure and facilities at Radiant Children\'s Hospital, Udaipur.', badge: 'Facility', badgeBg: 'bg-teal-600/90 text-white' },
  { id: 'img-1877', image: img1877, title: 'Hospital Facility Interior', subtitle: 'Radiant Children\'s Hospital', description: 'Hospital facility photo showcasing the inpatient and care infrastructure at Radiant Children\'s Hospital.', badge: 'Facility', badgeBg: 'bg-blue-600/90 text-white' },
  { id: 'img-1878', image: img1878, title: 'Hospital Facility Interior', subtitle: 'Radiant Children\'s Hospital', description: 'Detailed view of hospital rooms and infrastructure at Radiant Children\'s Hospital, Udaipur.', badge: 'Facility', badgeBg: 'bg-indigo-600/90 text-white' },
  { id: 'img-1879', image: img1879, title: 'Hospital Facility Interior', subtitle: 'Radiant Children\'s Hospital', description: 'Hospital interior showing patient care areas and facilities at Radiant Children\'s Hospital.', badge: 'Facility', badgeBg: 'bg-violet-600/90 text-white' },
  { id: 'img-1880', image: img1880, title: 'Hospital Facility Interior', subtitle: 'Radiant Children\'s Hospital', description: 'Hospital facility view at Radiant Children\'s Hospital, Udaipur.', badge: 'Facility', badgeBg: 'bg-purple-600/90 text-white' },
  { id: 'img-1882', image: img1882, title: 'Hospital Facility Interior', subtitle: 'Radiant Children\'s Hospital', description: 'Hospital rooms and care infrastructure view at Radiant Children\'s Hospital, Udaipur.', badge: 'Facility', badgeBg: 'bg-pink-600/90 text-white' },
  { id: 'img-1886', image: img1886, title: 'Hospital Facility Interior', subtitle: 'Radiant Children\'s Hospital', description: 'Hospital facility photo at Radiant Children\'s Hospital, Udaipur.', badge: 'Facility', badgeBg: 'bg-rose-600/90 text-white' },
  { id: 'img-1889', image: img1889, title: 'Hospital Facility Interior', subtitle: 'Radiant Children\'s Hospital', description: 'Hospital facility and patient care area at Radiant Children\'s Hospital, Udaipur.', badge: 'Facility', badgeBg: 'bg-amber-600/90 text-white' },
  { id: 'img-1893', image: img1893, title: 'Sterile Critical Care Wards', subtitle: 'Blue Divider Curtain Beds', description: 'Sterile pediatric critical care ward with blue divider curtains, hospital beds, and central oxygen supply at Radiant Children\'s Hospital.', badge: 'Critical Care Ward', badgeBg: 'bg-sky-600/90 text-white' },
  { id: 'img-1894', image: img1894, title: 'Hospital Facility View', subtitle: 'Radiant Children\'s Hospital', description: 'Hospital infrastructure and facility view at Radiant Children\'s Hospital, Udaipur.', badge: 'Facility', badgeBg: 'bg-cyan-500/90 text-white' },
  { id: 'img-1895', image: img1895, title: 'Hospital Facility Interior', subtitle: 'Radiant Children\'s Hospital', description: 'Hospital care area and infrastructure at Radiant Children\'s Hospital, Udaipur.', badge: 'Facility', badgeBg: 'bg-teal-500/90 text-white' },
  { id: 'img-1896', image: img1896, title: 'Hospital Facility View', subtitle: 'Radiant Children\'s Hospital', description: 'Facility infrastructure at Radiant Children\'s Hospital, Udaipur.', badge: 'Facility', badgeBg: 'bg-emerald-600/90 text-white' },
  { id: 'img-1898', image: img1898, title: 'Hospital Facility View', subtitle: 'Radiant Children\'s Hospital', description: 'Infrastructure and patient care area at Radiant Children\'s Hospital, Udaipur.', badge: 'Facility', badgeBg: 'bg-lime-600/90 text-white' },
  { id: 'img-1899', image: img1899, title: 'Hospital Facility View', subtitle: 'Radiant Children\'s Hospital', description: 'Hospital facility view at Radiant Children\'s Hospital, Udaipur.', badge: 'Facility', badgeBg: 'bg-yellow-600/90 text-white' },
  { id: 'img-1902', image: img1902, title: 'Hospital Facility Interior', subtitle: 'Radiant Children\'s Hospital', description: 'Hospital facility interior at Radiant Children\'s Hospital, Udaipur.', badge: 'Facility', badgeBg: 'bg-indigo-500/90 text-white' },
  { id: 'img-1906', image: img1906, title: 'Hospital Facility Interior', subtitle: 'Radiant Children\'s Hospital', description: 'Facility interior photo at Radiant Children\'s Hospital, Udaipur.', badge: 'Facility', badgeBg: 'bg-fuchsia-500/90 text-white' },
  { id: 'img-1907', image: img1907, title: 'Hospital Facility Interior', subtitle: 'Radiant Children\'s Hospital', description: 'Hospital care area and infrastructure at Radiant Children\'s Hospital, Udaipur.', badge: 'Facility', badgeBg: 'bg-pink-500/90 text-white' },
  { id: 'img-1909', image: img1909, title: 'Hospital Facility Interior', subtitle: 'Radiant Children\'s Hospital', description: 'Facility infrastructure view at Radiant Children\'s Hospital, Udaipur.', badge: 'Facility', badgeBg: 'bg-rose-500/90 text-white' },
  { id: 'img-1912', image: img1912, title: 'Hospital Facility View', subtitle: 'Radiant Children\'s Hospital', description: 'Hospital infrastructure and facility view at Radiant Children\'s Hospital, Udaipur.', badge: 'Facility', badgeBg: 'bg-teal-600/90 text-white' },
  { id: 'img-1914', image: img1914, title: 'Hospital Facility Interior', subtitle: 'Radiant Children\'s Hospital', description: 'Hospital care area at Radiant Children\'s Hospital, Udaipur.', badge: 'Facility', badgeBg: 'bg-cyan-700/90 text-white' },
  { id: 'img-1916', image: img1916, title: 'Hospital Facility View', subtitle: 'Radiant Children\'s Hospital', description: 'Hospital infrastructure view at Radiant Children\'s Hospital, Udaipur.', badge: 'Facility', badgeBg: 'bg-blue-700/90 text-white' },
  { id: 'img-1917', image: img1917, title: 'Hospital Facility View', subtitle: 'Radiant Children\'s Hospital', description: 'Facility interior at Radiant Children\'s Hospital, Udaipur.', badge: 'Facility', badgeBg: 'bg-indigo-700/90 text-white' },
  { id: 'img-1924', image: img1924, title: 'Hospital Facility Interior', subtitle: 'Radiant Children\'s Hospital', description: 'Facility interior photo at Radiant Children\'s Hospital, Udaipur.', badge: 'Facility', badgeBg: 'bg-pink-700/90 text-white' },
  { id: 'img-1925', image: img1925, title: 'Achievements Board & Wall of Recognition', subtitle: 'Certificates, Letters & Press Clippings', description: 'Hospital notice board displaying medical registration certificates, news coverage, patient appreciation letters, and clinical achievements.', badge: 'Achievements', badgeBg: 'bg-amber-600/90 text-white' },
  { id: 'img-1928', image: img1928, title: 'Certificate of Appreciation & Honour', subtitle: 'Samman Patra for Dr. Dheeraj Diwaakar', description: 'Framed certificate of honour and appreciation presented to Dr. Dheeraj Diwaakar by grateful parents for exceptional care.', badge: 'Achievements', badgeBg: 'bg-amber-600/90 text-white' },
  { id: 'img-1929', image: img1929, title: 'Patient Gratitude & Thank-You Letter', subtitle: 'Heartfelt Appreciation Artwork', description: 'Framed thank-you letter and artwork from a cured patient\'s family honoring Dr. Dheeraj Diwaakar and the clinical team.', badge: 'Achievements', badgeBg: 'bg-amber-600/90 text-white' },
  { id: 'img-1930', image: img1930, title: '61-Day COVID Baby Survival Coverage', subtitle: 'Featured Regional Press Release', description: 'Newspaper clipping covering the successful 61-day NICU recovery of baby Garv at Radiant Children\'s Hospital.', badge: 'Achievements', badgeBg: 'bg-amber-600/90 text-white' },
  { id: 'img-1932', image: img1932, title: 'Hospital Facility View', subtitle: 'Radiant Children\'s Hospital', description: 'Facility view at Radiant Children\'s Hospital, Udaipur.', badge: 'Facility', badgeBg: 'bg-emerald-700/90 text-white' },
  { id: 'img-1934', image: img1934, title: 'Hospital Facility Interior', subtitle: 'Radiant Children\'s Hospital', description: 'Hospital infrastructure and care area at Radiant Children\'s Hospital, Udaipur.', badge: 'Facility', badgeBg: 'bg-teal-700/90 text-white' },
  { id: 'img-1936', image: img1936, title: 'Hospital Facility View', subtitle: 'Radiant Children\'s Hospital', description: 'Hospital facility and infrastructure at Radiant Children\'s Hospital, Udaipur.', badge: 'Facility', badgeBg: 'bg-sky-700/90 text-white' },
];

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenBooking }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Photos');

  const filterCategories = [
    { id: 'All Photos', label: '✨ All Photos' },
    { id: 'Events & Team', label: '🎉 Events & Team' },
    { id: 'Achievements', label: '🏆 Achievements & Press' },
    { id: 'Facility', label: '🏥 Hospital Facilities' },
    { id: 'Wards', label: '🚨 NICU & Critical Wards' }
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (selectedCategory === 'All Photos') return true;
    if (selectedCategory === 'Events & Team') return item.badge === 'Events & Culture' || item.badge === 'Hospital Team';
    if (selectedCategory === 'Achievements') return item.badge === 'Achievements';
    if (selectedCategory === 'Facility') return item.badge === 'Facility';
    if (selectedCategory === 'Wards') return item.badge === 'Level III NICU' || item.badge === 'Critical Care Ward' || item.badge === 'Inpatient Ward';
    return true;
  });

  const openLightbox = (itemIndex: number) => {
    const originalIndex = galleryItems.findIndex((g) => g.id === filteredItems[itemIndex].id);
    setLightboxIndex(originalIndex !== -1 ? originalIndex : itemIndex);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length);
  };

  const nextLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % galleryItems.length);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16 overflow-hidden">
      <SEO 
        title="Photo Gallery | Radiant Children's Hospital Udaipur" 
        description="Explore photos of Radiant Children's Hospital in Udaipur, including 40-bedded hospital exterior, Level III NICU, PICU, 24x7 emergency desk & Dr. Dheeraj Diwaakar."
      />

      {/* 1. HERO HEADER BANNER */}
      <section className="relative pt-6 pb-8 text-center overflow-hidden">
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
            <span className="text-amber-300 uppercase tracking-wider font-black">🏥 INFRASTRUCTURE, FACILITIES & ACHIEVEMENTS PHOTO GALLERY</span>
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
            Inspect our 40-bedded hospital building, Level III NICU nursery, PICU units, achievements board, appreciation certificates, and clinical leadership in Udaipur.
          </motion.p>
        </div>
      </section>

      {/* 2. PHOTO GRID */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {filterCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full font-extrabold text-xs sm:text-sm transition-all duration-300 ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/20 border border-slate-700 scale-105'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-sm'
                  }`}
                >
                  {cat.label}
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
                  transition={{ duration: 0.4, delay: Math.min(idx * 0.03, 0.5) }}
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
                  src={galleryItems[lightboxIndex].image}
                  alt={galleryItems[lightboxIndex].title}
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />
              </div>

              <div className="bg-slate-900/90 border border-white/20 p-6 rounded-3xl text-center max-w-2xl w-full text-white space-y-2 backdrop-blur-md shadow-2xl">
                <span className="px-3 py-1 rounded-full bg-cyan-400 text-slate-950 font-black text-[10px] uppercase tracking-wider inline-block">
                  {galleryItems[lightboxIndex].badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-black">{galleryItems[lightboxIndex].title}</h3>
                <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
                  {galleryItems[lightboxIndex].description}
                </p>
                <div className="text-slate-400 text-[11px] font-bold pt-1">
                  Photo {lightboxIndex + 1} of {galleryItems.length}
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
