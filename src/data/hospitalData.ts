import type { ServiceItem, MetricItem, TestimonialItem, DoctorItem, FAQItem, CoreValueItem, WhyChooseUsItem, NewsItem } from '../types';

export const HOSPITAL_INFO = {
  name: "Radiant Children's Hospital",
  tagline: "Caring for Every Child, Every Step of the Way",
  subheading: "Trusted Pediatric Care, Neonatal Care & 24x7 Emergency Services in Udaipur",
  phone: "07424937788",
  whatsappPhone: "917424937788",
  email: "radiantchildrenhospital@gmail.com",
  capacity: "40 Bedded Neonatal & Paediatric Care Centre",
  address: "9 Kamla Nagar, 100 Feet Road, Behind Ashoka Palace, New Bhupalpura, Shobhagpura, Udaipur, Rajasthan 313001",
  city: "Udaipur",
  state: "Rajasthan",
  pincode: "313001",
  facebookUrl: "https://www.facebook.com/RadiantChildrenHospital",
  instagramUrl: "https://www.instagram.com/radiantchildrenhospitals?igsh=cTR0cmMwOGRuMmEw",
  linkedinUrl: "https://www.linkedin.com/company/radiant-children-hospital/",
  googleMapsIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922350.4716782165!2d72.6897553765913!3d25.440552555194934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5fb71a80425%3A0x3965db8c2851267f!2sRadiant%20Children%E2%80%99s%20Hospital!5e0!3m2!1sen!2sin!4v1786074857847!5m2!1sen!2sin",
  description: "Radiant Children's Hospital is a 40-bedded advanced Neonatal & Paediatric Care Centre in Udaipur providing 24x7 emergency & availability of Neonatal & Paediatric Intensivists. Fully equipped with Level III NICU (HFOV, CPAP, Mira Cradle), PICU (Ventilators, Volumetric Pumps), In-house ABG Analyzer, 2D Echo, X-Ray, Pharmacy, and Neonatal Ambulance Transport.",
  opdHours: "24×7 Hours Open (365 Days a Year)",
  emergencyHours: "24×7 Emergency & OPD Services (365 Days)",
  emergencyHotline: "07424937788",
  specialties: [
    "40 Bedded Neonatal & Paediatric Care Centre",
    "24x7 Emergency & OPD Services",
    "24x7 Availability of Neonatal & Paediatric Intensivist",
    "Level III Advanced NICU (HFOV, CPAP, Mira Cradle)",
    "Highly Equipped PICU Unit",
    "24x7 OPD Consultation (365 Days)",
    "Vaccination & Cold Chain Centre",
    "Dedicated Neonatal & Paediatric Transport Ambulance"
  ]
};

export const KEY_METRICS: MetricItem[] = [
  {
    id: '1',
    value: '12,000+',
    label: 'Happy Children Treated',
    icon: 'FaChild',
    description: 'Successful outcomes with loving pediatric care'
  },
  {
    id: '2',
    value: '40 Beds',
    label: 'Neonatal & Pediatric Center',
    icon: 'FaHospital',
    description: 'General, Semi-Deluxe & Deluxe patient rooms'
  },
  {
    id: '3',
    value: '24×7',
    label: 'Intensivists On-Call',
    icon: 'FaUserMd',
    description: 'Round-the-clock neonatal & pediatric ICU doctors'
  },
  {
    id: '4',
    value: 'Level III',
    label: 'Equipped NICU & PICU',
    icon: 'FaMicroscope',
    description: 'HFOV Ventilator, CPAP, Mira Cradle Hypothermia'
  },
  {
    id: '5',
    value: 'In-House',
    label: 'ABG, X-Ray & 2D Echo',
    icon: 'FaHeartbeat',
    description: 'Bedside ultrasound, ABG analyzer & pharmacy'
  },
  {
    id: '6',
    value: '24×7',
    label: 'Transport Ambulance',
    icon: 'FaAmbulance',
    description: 'Equipped with Neopuff, Embrace Nest & Intensivist'
  }
];

export const NICU_EQUIPMENT_SPECS = [
  "High Frequency Ventilator (HFOV)",
  "Conventional Ventilator & Non-Invasive Bubble CPAP",
  "High Flow Nasal Cannula (HFNC)",
  "Servo Controlled Radiant Warner & LED Phototherapy",
  "Mira Cradle for Therapeutic Hypothermia",
  "Multi Para Monitors & Transilluminator",
  "Surfactant Therapy & Exchange Transfusion",
  "Parenteral Nutrition (TPN) Setup",
  "Kangaroo Mother Care (KMC) Units",
  "Bedside 2D Echo & Bedside Ultrasound"
];

export const PICU_EQUIPMENT_SPECS = [
  "Pediatric Advanced Ventilators",
  "Multipara Patient Monitors",
  "Syringe Pumps & Volumetric Infusion Pumps",
  "Central Oxygen, Compressed Air & Suction Lines",
  "24x7 Pediatric Critical Care Nursing Staff"
];

export const INTACT_SURVIVAL_COMMITMENT = [
  {
    title: "Bedside Neurosonogram & 2D Echo",
    desc: "Real-time bedside cardiac and neuro imaging for precise neonatal diagnostics."
  },
  {
    title: "Newborn Screening for Congenital Disorders",
    desc: "Early detection screening for metabolic and genetic congenital conditions."
  },
  {
    title: "ROP (Retinopathy of Prematurity) Screening",
    desc: "Protocol-based retina specialist screening & ROP management for premature babies."
  },
  {
    title: "OAE (Oto-Acoustic Emission) Hearing Screening",
    desc: "Advanced objective hearing assessment for every newborn before discharge."
  },
  {
    title: "Pulse Oximetry Screening",
    desc: "Routine universal pulse oximetry screening for early detection of critical heart defects."
  },
  {
    title: "Neurodevelopmental Assessment",
    desc: "Follow-up milestones evaluation of high-risk NICU graduates by Consultant & Physiotherapist."
  },
  {
    title: "Lactation Management & KMC",
    desc: "Dedicated breastfeeding support and Kangaroo Mother Care (KMC) for bonding and growth."
  }
];

export const INFECTION_CONTROL_PROTOCOLS = [
  "Sterilizer clean air filtration systems in intensive care units",
  "Micro defogger machine for total area fumigation",
  "Smart access control system for sterile NICU access",
  "ETO Sterilization of equipment and instruments",
  "Strict emphasis on hand washing and sterile protocols",
  "Cluster care approach and minimal handling of fragile babies",
  "Evidence-based protocol system for antibiotic stewardship",
  "Self-Audit system in constant endeavor to upgrade clinical standards"
];

export const CHILDREN_FACILITIES_LIST = [
  { name: "General, Semi-Deluxe & Deluxe Rooms", icon: "FaBed" },
  { name: "Central Oxygen, Compressed Air & Suction", icon: "FaWind" },
  { name: "In-House Pharmacy & Medical Store", icon: "FaPills" },
  { name: "In-House X-Ray, Ultrasonography & 2D Echo", icon: "FaXRay" },
  { name: "In-House ABG (Arterial Blood Gas) Analyzer", icon: "FaFlask" },
  { name: "24x7 Ambulance with Neopuff & Embrace Nest", icon: "FaAmbulance" },
  { name: "DG Auto Backup (100% Uninterrupted Power)", icon: "FaBolt" },
  { name: "24x7 CCTV Surveillance & Security", icon: "FaVideo" },
  { name: "Breastfeeding & Lactation Management Support", icon: "FaHeart" },
  { name: "Newborn Screening & Vaccination Centre", icon: "FaSyringe" }
];

export const TRANSPORT_SYSTEM_DETAILS = {
  title: "Dedicated Neonatal & Paediatric Transport System",
  tagline: "Ensuring arrival of critically ill patients in the best possible medical state",
  equipment: [
    "Neopuff Resuscitator",
    "Multipara Monitor & Pulse Oximeter",
    "Embrace Nest Thermal Care",
    "Accompanied by Neonatal & Paediatric Intensivist",
    "Trained Emergency Supporting Nursing Staff"
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'nicu',
    title: 'Level III NICU (Neonatal ICU)',
    shortDesc: 'Level III NICU with HFOV, Bubble CPAP, Mira Cradle Hypothermia & 24x7 Intensivists.',
    fullDesc: 'Our Level III Neonatal Intensive Care Unit provides world-class care for premature and critically ill newborns. Equipped with High Frequency Ventilators (HFOV), Bubble CPAP, High Flow Nasal Cannula, Servo Controlled Radiant Warners, LED Phototherapy, Mira Cradle for Therapeutic Hypothermia, Surfactant Therapy, Exchange Transfusion, Bedside 2D Echo, and Parenteral Nutrition (TPN).',
    iconName: 'FaMicroscope',
    category: 'Critical Care',
    highlights: ['HFOV & Bubble CPAP Ventilators', 'Mira Cradle Therapeutic Hypothermia', 'Surfactant & Exchange Transfusion', '24x7 Neonatal Intensivists On-Call'],
    badge: 'Level III NICU'
  },
  {
    id: 'picu',
    title: 'Highly Equipped PICU (Pediatric ICU)',
    shortDesc: 'Intensive care unit with ventilators, multipara monitors, syringe & volumetric pumps.',
    fullDesc: 'Our PICU provides specialized life support and intensive monitoring for children facing severe respiratory failure, acute trauma, sepsis, or post-surgical recovery. Staffed 24x7 by pediatric intensivists, advanced pediatric ventilators, syringe pumps, volumetric pumps, and central suction lines.',
    iconName: 'FaProcedures',
    category: 'Critical Care',
    highlights: ['Advanced Pediatric Ventilators', 'Multipara Monitors & Volumetric Pumps', 'Central Oxygen & Compressed Air', '24x7 Pediatric Intensivists'],
    badge: 'Equipped PICU'
  },
  {
    id: 'neonatal-transport',
    title: 'Neonatal & Paediatric Transport Ambulance',
    shortDesc: '24x7 transport system with Neopuff, Embrace Nest, Multipara Monitor & Intensivist.',
    fullDesc: 'Dedicated transport system ensuring critically ill babies and children arrive at our hospital in the best possible medical state. Equipped with Neopuff resuscitator, Embrace Nest thermal protection, multipara pulse oximeter, and accompanied by a Neonatal & Paediatric Intensivist and trained supporting staff.',
    iconName: 'FaAmbulance',
    category: 'Critical Care',
    highlights: ['Neopuff & Embrace Nest', 'Multipara Monitor & Oximeter', 'Accompanied by Intensivist Doctor', '24x7 Rapid Dispatch'],
    badge: '24x7 Transport'
  },
  {
    id: 'opd-services',
    title: '24x7 OPD Consultation Services',
    shortDesc: 'Round-the-clock 24x7 OPD consultation for children from birth to 18 years by expert pediatricians.',
    fullDesc: 'Outpatient consultation for all childhood illnesses from 0 to 18 years. Operating 24 hours a day, 7 days a week (24x7 OPD) with on-site pediatric specialists and emergency doctors available round-the-clock.',
    iconName: 'FaStethoscope',
    category: 'General Care',
    highlights: ['24x7 Round-the-Clock OPD', '365 Days Uninterrupted Consultation', 'On-Site Pediatric Specialists', 'Infant to Adolescent Care'],
    badge: '24x7 OPD'
  },
  {
    id: 'intact-survival',
    title: 'Intact Survival & Newborn Screening',
    shortDesc: 'Bedside 2D Echo, ROP Retina Screening, OAE Hearing & Neurodevelopmental checks.',
    fullDesc: 'Our commitment to NICU graduates extends beyond survival to intact long-term health. We provide bedside Neurosonogram, 2D Echo, congenital disorder screening, ROP screening by Retina specialists, OAE hearing screening, universal pulse oximetry, and follow-up assessment by consultants & physiotherapists.',
    iconName: 'FaHeartbeat',
    category: 'Specialized',
    highlights: ['ROP Retina & OAE Hearing Checks', 'Bedside Neurosonogram & 2D Echo', 'Universal Pulse Oximetry', 'Physiotherapy & Milestone Tracking'],
    badge: 'NICU Care'
  },
  {
    id: 'vaccination-centre',
    title: 'Vaccination Centre & Cold Chain',
    shortDesc: 'Full WHO & IAP recommended vaccines with digital reminders & cold-chain storage.',
    fullDesc: 'Protect your child against preventable diseases. We maintain strict cold chain refrigeration for all vaccines from birth to 18 years with painless administration techniques and digital schedule tracking.',
    iconName: 'FaSyringe',
    category: 'Wellness',
    highlights: ['Strict cold-chain refrigeration', 'WHO & IAP immunization schedules', 'Painless vaccination options', 'Digital schedule reminders'],
    badge: 'WHO Approved'
  },
  {
    id: 'general-pediatrics',
    title: 'General Pediatrics & Adolescent Care',
    shortDesc: 'Complete diagnostic and therapeutic care for children from birth to 18 years.',
    fullDesc: 'Comprehensive care covering childhood infections, fever management, growth tracking, seasonal allergies, nutrition, and adolescent health guidance.',
    iconName: 'FaChild',
    category: 'General Care',
    highlights: ['0 to 18 Years Coverage', 'Acute & Chronic Care', 'Routine Wellness Checks', 'Adolescent Guidance']
  },
  {
    id: 'newborn-care',
    title: 'Newborn Care & Lactation Support',
    shortDesc: 'Infant jaundice screening, cord care, and breastfeeding management support.',
    fullDesc: 'Specialized care for newborns including jaundice phototherapy screening, infant feeding guidance, Kangaroo Mother Care (KMC), and lactation management support.',
    iconName: 'FaBaby',
    category: 'Specialized',
    highlights: ['Lactation Support & KMC', 'Neonatal Jaundice Screening', 'Infant Feeding Setup', 'Cord & Skin Hygiene']
  },
  {
    id: 'in-house-diagnostics',
    title: 'In-House ABG, X-Ray & Lab Diagnostics',
    shortDesc: 'Arterial Blood Gas (ABG) analyzer, digital X-Ray, Ultrasonography & 2D Echo.',
    fullDesc: 'Rapid bedside diagnostic support including in-house ABG analyzer for critical blood gas evaluation, digital X-Ray, Ultrasonography, 2D Echo, and complete pediatric blood laboratory testing.',
    iconName: 'FaFlask',
    category: 'Specialized',
    highlights: ['In-House ABG Analyzer', 'Digital X-Ray & Ultrasound', 'Bedside 2D Echo', '24x7 Lab Support']
  },
  {
    id: 'nutrition-growth',
    title: 'Growth & Development & Nutrition',
    shortDesc: 'Height/weight percentile charting, milestone screening, and dietary counseling.',
    fullDesc: 'Tracking motor skills, speech development, percentile height/weight growth, weaning diets, picky eater counseling, and deficiency treatment.',
    iconName: 'FaAppleAlt',
    category: 'Wellness',
    highlights: ['Growth Percentile Charting', 'Motor & Speech Screening', 'Infant Weaning Diet Plans', 'Immunity Boost Charts']
  },
  {
    id: 'asthma-allergy',
    title: 'Asthma & Allergy Care',
    shortDesc: 'Nebulization unit, allergy testing, and long-term childhood asthma plans.',
    fullDesc: 'Dedicated care for childhood asthma, food allergies, allergic rhinitis, eczema, and respiratory distress with nebulization and inhaler training.',
    iconName: 'FaLungs',
    category: 'Specialized',
    highlights: ['Nebulization Facility', 'Asthma Action Plans', 'Allergy Identification', 'Child Pulmonary Care']
  },
  {
    id: 'fever-infection',
    title: 'Fever & Infection Management',
    shortDesc: 'Rapid diagnosis and care for viral fevers, dengue, typhoid, flu, and pneumonia.',
    fullDesc: 'Fast diagnostic blood testing, IV fluids, antipyretic control, targeted antimicrobial treatment, and comfortable pediatric recovery wards.',
    iconName: 'FaThermometerHalf',
    category: 'General Care',
    highlights: ['Dengue & Typhoid Care', 'Pneumonia & Bronchitis', 'Rapid Viral Blood Panel', 'Hydration & Antipyretic']
  }
];

export const CORE_VALUES: CoreValueItem[] = [
  {
    id: 'compassion',
    title: 'Compassion',
    description: 'Treating every child with gentle, loving care as if they were our own family.',
    icon: 'FaHeart',
    color: 'from-pink-500 to-rose-400'
  },
  {
    id: 'integrity',
    title: 'Integrity',
    description: 'Transparent communication, honest advice, and ethical medical decisions always.',
    icon: 'FaShieldAlt',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    id: 'patient-first',
    title: 'Patient First',
    description: 'Putting the comfort, safety, and emotional well-being of young patients at the core.',
    icon: 'FaUserCheck',
    color: 'from-teal-500 to-emerald-400'
  },
  {
    id: 'innovation',
    title: 'Innovation',
    description: 'Utilizing modern pediatric medical technologies and evidence-based clinical protocols.',
    icon: 'FaLightbulb',
    color: 'from-amber-400 to-orange-500'
  },
  {
    id: 'safety',
    title: 'Safety',
    description: 'Maintaining hospital-wide sterile standards, infection control, and safe medication practices.',
    icon: 'FaHandsWash',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'excellence',
    title: 'Excellence',
    description: 'Striving for highest clinical outcomes in newborn care, critical care, and general pediatrics.',
    icon: 'FaStar',
    color: 'from-sky-400 to-blue-600'
  },
  {
    id: 'ethical-healthcare',
    title: 'Ethical Healthcare',
    description: 'Affordable, evidence-backed treatment without unnecessary prescriptions or tests.',
    icon: 'FaBalanceScale',
    color: 'from-emerald-400 to-teal-600'
  },
  {
    id: 'continuous-care',
    title: 'Continuous Care',
    description: '24/7 availability with seamless follow-ups and long-term child health tracking.',
    icon: 'FaSyncAlt',
    color: 'from-cyan-400 to-blue-500'
  }
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: "40-bed-center",
    title: "40 Bedded Care Center",
    desc: "General Wards, Semi-Deluxe, and Deluxe private patient rooms equipped with central oxygen, compressed air & suction lines.",
    iconName: "FaBed",
    category: "facility",
    badge: "40 Beds Facility",
    gradient: "from-blue-600 via-cyan-500 to-sky-400",
    shadow: "shadow-blue-500/20 hover:shadow-blue-500/40 border-blue-200/90",
    badgeBg: "bg-blue-500/15 border-blue-300 text-blue-900",
    highlights: [
      "General, Semi-Deluxe & Deluxe Wards",
      "Central Medical Gas & Suction Lines",
      "100% DG Auto Backup (Power & Air)"
    ]
  },
  {
    id: "24-7-intensivists",
    title: "24×7 On-Duty Intensivists",
    desc: "Round-the-clock physical availability of Neonatal & Paediatric Intensivists for immediate emergency & critical ICU triage.",
    iconName: "FaUserMd",
    category: "critical",
    badge: "24×7 Coverage",
    gradient: "from-rose-500 via-red-500 to-amber-500",
    shadow: "shadow-rose-500/20 hover:shadow-rose-500/40 border-rose-200/90",
    badgeBg: "bg-rose-500/15 border-rose-300 text-rose-900",
    highlights: [
      "Zero Emergency Waiting Time",
      "Dedicated Neonatal Intensivists",
      "365 Days Uninterrupted Triage"
    ]
  },
  {
    id: "level-3-nicu",
    title: "Level III Advanced NICU",
    desc: "HFOV Ventilator, Non-Invasive CPAP, Mira Cradle for therapeutic hypothermia, surfactant therapy & Kangaroo Mother Care.",
    iconName: "FaMicroscope",
    category: "critical",
    badge: "Level III NICU",
    gradient: "from-purple-600 via-violet-500 to-indigo-600",
    shadow: "shadow-purple-500/20 hover:shadow-purple-500/40 border-purple-200/90",
    badgeBg: "bg-purple-500/15 border-purple-300 text-purple-900",
    highlights: [
      "HFOV & Bubble CPAP Ventilation",
      "Mira Cradle Therapeutic Hypothermia",
      "Exchange Transfusion & Surfactant Care"
    ]
  },
  {
    id: "equipped-picu",
    title: "Highly Equipped PICU Unit",
    desc: "Advanced pediatric ventilators, multipara patient monitors, syringe pumps & volumetric pumps for critical child care.",
    iconName: "FaProcedures",
    category: "critical",
    badge: "Pediatric ICU",
    gradient: "from-fuchsia-600 via-purple-600 to-indigo-700",
    shadow: "shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 border-fuchsia-200/90",
    badgeBg: "bg-fuchsia-500/15 border-fuchsia-300 text-fuchsia-900",
    highlights: [
      "Pediatric Advanced Ventilators",
      "Volumetric & Syringe Infusion Pumps",
      "24x7 Pediatric Critical Nursing"
    ]
  },
  {
    id: "inhouse-abg",
    title: "In-House ABG & Diagnostics",
    desc: "Bedside Arterial Blood Gas (ABG) analyzer, digital X-Ray, Ultrasonography, 2D Echo, and 24x7 in-house medical store.",
    iconName: "FaFlask",
    category: "facility",
    badge: "Bedside ABG",
    gradient: "from-teal-500 via-emerald-500 to-cyan-600",
    shadow: "shadow-teal-500/20 hover:shadow-teal-500/40 border-teal-200/90",
    badgeBg: "bg-teal-500/15 border-teal-300 text-teal-900",
    highlights: [
      "Bedside ABG Blood Gas Analyzer",
      "Digital X-Ray & Bedside 2D Echo",
      "24x7 In-House Medical Pharmacy"
    ]
  },
  {
    id: "emergency-transport",
    title: "24x7 Transport Ambulance",
    desc: "Dedicated transport ambulance with Neopuff resuscitator, Embrace Nest, oximeter & Intensivist doctor on-board.",
    iconName: "FaAmbulance",
    category: "critical",
    badge: "Rapid Transport",
    gradient: "from-red-600 via-rose-600 to-pink-600",
    shadow: "shadow-red-500/20 hover:shadow-red-500/40 border-red-200/90",
    badgeBg: "bg-red-500/15 border-red-300 text-red-900",
    highlights: [
      "Neopuff & Embrace Nest Thermal Care",
      "Accompanied by Pediatric Doctor",
      "Rapid Pickup Across Udaipur Region"
    ]
  },
  {
    id: "intact-survival",
    title: "Intact Survival Commitment",
    desc: "Protocol-based ROP retina screening, OAE hearing screening, bedside neurosonogram, and milestone development tracking.",
    iconName: "FaHeart",
    category: "safety",
    badge: "Intact Survival",
    gradient: "from-pink-500 via-rose-500 to-purple-500",
    shadow: "shadow-pink-500/20 hover:shadow-pink-500/40 border-pink-200/90",
    badgeBg: "bg-pink-500/15 border-pink-300 text-pink-900",
    highlights: [
      "ROP Retina Specialist Screening",
      "OAE Objective Hearing Assessment",
      "High-Risk NICU Milestone Tracking"
    ]
  },
  {
    id: "infection-control",
    title: "Strict Infection Control",
    desc: "Clean air sterilizers, micro defogger area fumigation, ETO sterilization, smart access NICU & cluster care approach.",
    iconName: "FaShieldAlt",
    category: "safety",
    badge: "Sterile Clean-Air",
    gradient: "from-emerald-600 via-teal-600 to-cyan-700",
    shadow: "shadow-emerald-500/20 hover:shadow-emerald-500/40 border-emerald-200/90",
    badgeBg: "bg-emerald-500/15 border-emerald-300 text-emerald-900",
    highlights: [
      "Micro Defogger Total Fumigation",
      "Smart Access Restricted NICU Zone",
      "ETO Equipment Sterilization"
    ]
  },
  {
    id: "flexible-opd",
    title: "24×7 OPD Services",
    desc: "Round-the-clock 24x7 OPD consultation with pediatric specialists and emergency doctors available 365 days a year.",
    iconName: "FaClock",
    category: "convenience",
    badge: "24×7 OPD",
    gradient: "from-amber-500 via-orange-500 to-yellow-500",
    shadow: "shadow-amber-500/20 hover:shadow-amber-500/40 border-amber-200/90",
    badgeBg: "bg-amber-500/15 border-amber-300 text-amber-900",
    highlights: [
      "24×7 Round-the-Clock OPD",
      "Pediatric Doctors Always Available",
      "365 Days Uninterrupted Coverage"
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    parentName: 'Sunita Sharma',
    childInfo: 'Mother of Aarav (Age 3)',
    rating: 5,
    comment: 'Radiant Children’s Hospital saved our baby when he had high fever and severe pneumonia. The NICU team and pediatric intensivists were available 24/7. Their calm, expert care gave us immense hope and peace of mind.',
    date: '2 weeks ago',
    location: 'Udaipur',
    avatarBg: 'bg-blue-500',
    verified: true
  },
  {
    id: '2',
    parentName: 'Vikram Mehta',
    childInfo: 'Father of Ananya (Newborn)',
    rating: 5,
    comment: 'Best Neonatologist in Udaipur! My premature daughter needed Level III NICU care and HFOV ventilation for 10 days. Dr. Dheeraj Diwaakar’s explanations, incubators, and Mira Cradle hypothermia care were top-notch.',
    date: '1 month ago',
    location: 'Shobhagpura, Udaipur',
    avatarBg: 'bg-teal-500',
    verified: true
  },
  {
    id: '3',
    parentName: 'Pooja Rajpurohit',
    childInfo: 'Mother of Kavi (Age 6)',
    rating: 5,
    comment: 'We visit Radiant Children’s Hospital for all vaccinations and growth checkups. 24x7 OPD availability is super convenient. Friendly doctors and sterile rooms!',
    date: '3 weeks ago',
    location: 'New Bhupalpura, Udaipur',
    avatarBg: 'bg-purple-500',
    verified: true
  },
  {
    id: '4',
    parentName: 'Dr. Ramesh Choudhary',
    childInfo: 'Father of Yash (Age 8)',
    rating: 5,
    comment: 'Being a doctor myself, I appreciate the in-house ABG analyzer, strict infection control, ROP screening, and protocol-based antibiotic therapy at Radiant Children’s Hospital. Outstanding in Rajasthan!',
    date: '2 months ago',
    location: 'Udaipur',
    avatarBg: 'bg-emerald-500',
    verified: true
  },
  {
    id: '5',
    parentName: 'Meenakshi Jain',
    childInfo: 'Mother of Pari (Age 1)',
    rating: 5,
    comment: 'Late-night asthma emergency was handled within 5 minutes of arrival. The neonatal ambulance with Neopuff brought us safely. Forever grateful to the 24x7 emergency medical team!',
    date: '1 week ago',
    location: '100 Feet Road, Udaipur',
    avatarBg: 'bg-amber-500',
    verified: true
  },
  {
    id: '6',
    parentName: 'Bhagwat Singh',
    childInfo: 'Father of Preterm Baby Twins (29 Wks)',
    rating: 5,
    comment: 'Our twins born at 29 weeks spent 25 days in Level III NICU. Dr. Dheeraj Diwaakar & the nursing staff guided us through every milestone. Today both babies are healthy and thriving at home!',
    date: '4 days ago',
    location: 'Kamla Nagar, Udaipur',
    avatarBg: 'bg-cyan-600',
    verified: true
  },
  {
    id: '7',
    parentName: 'Ankita Vyas',
    childInfo: 'Mother of Rudra (Age 2)',
    rating: 5,
    comment: '100% painless vaccination experience! Cold chain storage is strictly maintained and we receive automated digital reminder alerts for upcoming vaccines. Highly recommended child care center!',
    date: '5 days ago',
    location: 'Hiran Magri, Udaipur',
    avatarBg: 'bg-rose-500',
    verified: true
  },
  {
    id: '8',
    parentName: 'Rajendra Kothari',
    childInfo: 'Father of Hardik (Age 5)',
    rating: 5,
    comment: 'The bedside ABG blood gas analyzer gave instant reports during my son’s critical respiratory distress. Zero waiting time and 24x7 intensivist presence saved crucial minutes. Best pediatric hospital!',
    date: '1 week ago',
    location: 'Fatehpura, Udaipur',
    avatarBg: 'bg-indigo-600',
    verified: true
  }
];

export const FAQS: FAQItem[] = [
  {
    id: '1',
    question: 'What are the OPD Timings at Radiant Children’s Hospital?',
    answer: 'Our OPD Services operate 24 hours a day, 7 days a week (24x7 OPD, 365 Days a Year). Senior pediatric specialists, emergency doctors, Level III NICU/PICU teams, and diagnostic facilities are continuously operational round-the-clock.',
    category: 'General'
  },
  {
    id: '2',
    question: 'What advanced life-support facilities are available in your Level III NICU?',
    answer: 'Our Level III NICU features High Frequency Ventilators (HFOV), Conventional Ventilators, Non-Invasive Bubble CPAP, High Flow Nasal Cannula (HFNC), Mira Cradle for Therapeutic Hypothermia, Servo Controlled Radiant Warners, LED Phototherapy, Surfactant Therapy, Exchange Transfusion, Parenteral Nutrition (TPN), Bedside 2D Echo & Ultrasound, and Kangaroo Mother Care (KMC).',
    category: 'Facilities'
  },
  {
    id: '3',
    question: 'Are Neonatal & Paediatric Intensivists physically available 24x7?',
    answer: 'Yes, we have round-the-clock 24x7 physical availability of dedicated Neonatal & Paediatric Intensivists in our 40-bedded hospital to handle acute emergencies and critical ICU admissions immediately with zero delay.',
    category: 'Emergency'
  },
  {
    id: '4',
    question: 'How quickly can your 24x7 Emergency Neonatal Transport Ambulance dispatch?',
    answer: 'Our dedicated Neonatal & Paediatric Transport Ambulance dispatches rapidly upon receiving an emergency call. It is equipped with a Neopuff resuscitator, Embrace Nest thermal care unit, multipara pulse oximeter, and is accompanied on-board by an Intensivist doctor and emergency nursing staff.',
    category: 'Emergency'
  },
  {
    id: '5',
    question: 'What patient room categories and hospital amenities do you offer?',
    answer: 'We offer General Wards, Semi-Deluxe Private Rooms, and Deluxe Air-Conditioned Private Rooms. Every room features Central Oxygen, Compressed Air, and Suction lines, along with 100% DG Auto Backup for uninterrupted power supply.',
    category: 'Facilities'
  },
  {
    id: '6',
    question: 'What in-house diagnostic and bedside blood lab facilities are operational?',
    answer: 'Our in-house facilities include a bedside Arterial Blood Gas (ABG) Analyzer for instant blood gas evaluation in critical babies, Digital X-Ray, Ultrasonography, Bedside 2D Echo, 24x7 In-House Pharmacy, Newborn Screening (ROP & OAE hearing), and 24x7 CCTV Security.',
    category: 'Facilities'
  },
  {
    id: '7',
    question: 'Do you provide WHO & IAP recommended routine vaccinations for children?',
    answer: 'Yes, our Vaccination & Cold Chain Centre maintains complete stock of WHO and IAP recommended vaccines from birth to 18 years with strict refrigeration monitoring, painless administration techniques, and digital schedule reminders.',
    category: 'Vaccination'
  },
  {
    id: '8',
    question: 'What intact survival screening protocols do you follow for NICU babies?',
    answer: 'We conduct protocol-based ROP (Retinopathy of Prematurity) retina specialist screening, OAE (Oto-Acoustic Emission) objective hearing checks, universal pulse oximetry, bedside neurosonogram, and follow-up milestone evaluations by consultant pediatricians and physiotherapists.',
    category: 'Facilities'
  },
  {
    id: '9',
    question: 'How can parents contact the hospital emergency desk or book an appointment?',
    answer: 'You can call our 24x7 Emergency Desk at 07424937788, WhatsApp us at +91 74249 37788, email radiantchildrenhospital@gmail.com, or click "Book Appointment" anywhere on our website for online OPD booking.',
    category: 'General'
  }
];

export const DOCTORS: DoctorItem[] = [
  {
    id: 'dr-dheeraj-diwaakar',
    name: 'Dr. Dheeraj Diwaakar',
    role: 'Lead Neonatologist & Head of Level III NICU',
    qualifications: 'MBBS, MD (Pediatrics), DM (Neonatology JIPMER Pondicherry)',
    experience: '12+ Years Apex Neonatal ICU Expertise',
    specialties: [
      'DM Neonatology (JIPMER Pondicherry)',
      'Ex-Consultant NICE Hospital Hyderabad',
      'Ex-HOD Neonatology GMCH Udaipur',
      'Level III NICU & Intact Survival Protocols'
    ],
    bio: 'Apex trained DM Neonatologist from JIPMER Pondicherry. Former HOD of Neonatology at GMCH Udaipur and former Consultant at NICE Hospital for Women, Children & Newborn Care, Hyderabad. Pioneer in Level III NICU, HFOV ventilation, surfactant therapy, and intact survival care.',
    image: '/src/assets/dr-dheeraj-diwaakar.jpg'
  },
  {
    id: 'dr-pediatric-surgery-consultant',
    name: 'Senior Pediatric Surgeon & Urologist',
    role: 'Consultant Pediatric & Neonatal Surgeon',
    qualifications: 'MS (General Surgery), MCh (Pediatric Surgery)',
    experience: '10+ Years Advanced Pediatric Surgery',
    specialties: [
      'Neonatal Congenital Anomaly Repair',
      'Pediatric Laparoscopic & Endoscopic Surgery',
      'Pediatric Urology & Hernia Repair',
      'Emergency Pediatric Surgical Care'
    ],
    bio: 'Specialized in life-saving surgical interventions for premature babies, congenital intestinal malformations, pediatric urology, and emergency trauma surgery with gentle pediatric anesthesia support.',
    image: '/src/assets/hospital-exterior-building-front.jpg'
  },
  {
    id: 'dr-rop-retina-specialist',
    name: 'Pediatric Ophthalmologist & ROP Specialist',
    role: 'Consultant ROP Retina Specialist',
    qualifications: 'MS (Ophthalmology), Fellowship in Pediatric Retina & ROP',
    experience: '8+ Years Newborn Retina Screening',
    specialties: [
      'Retinopathy of Prematurity (ROP) Laser',
      'Bedside Indirect Ophthalmoscopy',
      'Anti-VEGF Injections for Preterm Babies',
      'Pediatric Vision & Strabismus Care'
    ],
    bio: 'Conducts protocol-driven bedside ROP retina screening for every premature baby in our Level III NICU to prevent retinopathy-related vision loss and ensure intact 20/20 eyesight.',
    image: '/src/assets/hospital-nicu.png'
  },
  {
    id: 'dr-pediatric-audiologist',
    name: 'Pediatric Audiologist & Developmental Specialist',
    role: 'Consultant Audiologist & Neuro-Developmentalist',
    qualifications: 'BASLP, MASLP (Pediatric Audiology & Speech Pathology)',
    experience: '7+ Years Newborn Hearing & Milestone Care',
    specialties: [
      'OAE Objective Hearing Screening',
      'BERA / ABR Hearing Diagnostic Evaluation',
      'NICU Graduate Milestone Development Tracking',
      'Kangaroo Mother Care (KMC) Guidance'
    ],
    bio: 'Dedicated to early identification of infant hearing loss via OAE screening before hospital discharge, along with follow-up neuro-developmental therapy for high-risk NICU graduates.',
    image: '/src/assets/WhatsApp Image 2026-08-07 at 2.34.25 PM.jpeg'
  },
  {
    id: 'head-nicu-nursing',
    name: 'Senior Pediatric Critical Care Nursing Team',
    role: '24×7 Level III NICU & PICU Nursing Faculty',
    qualifications: 'B.Sc / M.Sc Nursing (Pediatric Critical Care Certified)',
    experience: 'Round-the-Clock 1:1 ICU Nursing',
    specialties: [
      'Level III Incubator & Ventilator Nursing Care',
      'Surfactant & Parenteral Nutrition (TPN) Administration',
      'Micro Defogger Sterilization & Hand Hygiene',
      'Zero-Delay Emergency Triage'
    ],
    bio: 'Compassionate 24x7 specialized nursing staff trained in 1:1 critical care, cluster care approach, minimal handling of 500g preterm babies, and supportive parental guidance.',
    image: '/src/assets/dr-dheeraj-diwaakar.jpg'
  }
];

export const NEWS_AND_ACHIEVEMENTS: NewsItem[] = [
  {
    id: '12000-patients-milestone',
    title: 'Radiant Children’s Hospital Crosses Milestone of 12,000+ Happy Patients Treated',
    category: 'Clinical Milestones',
    date: 'August 2026',
    summary: 'A landmark achievement in southern Rajasthan as Radiant Children’s Hospital completes over 12,000 successful infant and pediatric treatments.',
    fullStory: 'Radiant Children’s Hospital in Udaipur has officially surpassed the milestone of treating over 12,000 children from newborn infants to 18-year-old adolescents. Led by Lead Neonatologist Dr. Dheeraj Diwaakar, the hospital has achieved an exceptional 97-99% intact survival rate for premature babies weighed between 500g and 1000g in Level III NICU.',
    highlights: [
      'Over 12,000+ Children Successfully Discharged',
      '97-99% Intact Preterm Survival Protocol Success',
      'Trusted Pediatric Center Across Udaipur Region'
    ],
    badge: '12,000+ Patient Milestone',
    badgeBg: 'bg-emerald-500/90 text-white',
    image: '/src/assets/hospital-exterior.png'
  },
  {
    id: 'level-3-hfov-mira-cradle',
    title: 'Pioneering Level III NICU HFOV & Mira Cradle Therapeutic Hypothermia in Udaipur',
    category: 'Clinical Milestones',
    date: 'June 2026',
    summary: 'Advanced High Frequency Oscillatory Ventilation (HFOV) and Mira Cradle cooling system setting the highest standards for neonatal resuscitation.',
    fullStory: 'Our Level III NICU nursery continues to lead Rajasthan in state-of-the-art neonatal life support technology. Equipped with Mira Cradle therapeutic hypothermia for birth asphyxia, HFOV ventilators, and non-invasive Bubble CPAP, Radiant Children’s Hospital protects brain health and organ function during critical newborn resuscitations.',
    highlights: [
      'Mira Cradle Hypothermia for Birth Asphyxia Care',
      'HFOV High-Frequency Oscillatory Ventilation',
      'Bedside ABG & 2D Echo Heart Diagnostic Support'
    ],
    badge: 'Apex NICU Tech',
    badgeBg: 'bg-purple-600/90 text-white',
    image: '/src/assets/hospital-nicu.png'
  },
  {
    id: 'mobile-icu-ambulance-dispatch',
    title: '24×7 Dedicated Mobile NICU Transport Ambulance Saves Newborns Across Rural Districts',
    category: 'Hospital News',
    date: 'April 2026',
    summary: 'Equipped with Neopuff resuscitator, Embrace Nest thermal care, and on-board intensivist doctor for rapid regional emergency pickups.',
    fullStory: 'Our 24x7 Neonatal & Paediatric Mobile ICU Ambulance transport system has safely retrieved critically ill neonates from districts across southern Rajasthan. Featuring Neopuff positive-pressure resuscitators, Embrace Nest thermal warmers, and pulse oximetry, each transport is personally accompanied by an intensivist doctor.',
    highlights: [
      'Accompanied by On-Board Neonatal Intensivist',
      'Neopuff & Embrace Nest Mobile Thermal Unit',
      'Rapid Pickups Across Udaipur & Surrounding Districts'
    ],
    badge: '24×7 Transport Launch',
    badgeBg: 'bg-rose-600/90 text-white',
    image: '/src/assets/hospital-night.png'
  },
  {
    id: 'zero-infection-certification',
    title: 'Zero Hospital-Acquired Infection Benchmark Achieved via Micro Defogger Fumigation',
    category: 'Awards & Recognition',
    date: 'February 2026',
    summary: 'Multi-tier sterilization protocols including ETO sterilization and smart access control ensure pristine sterile standards.',
    fullStory: 'Radiant Children’s Hospital has been recognized for maintaining strict infection control standards in pediatric and neonatal intensive care. Utilizing micro defogger total area fumigation, clean air sterilizers, smart access control, and evidence-based antibiotic stewardship, the hospital ensures zero cross-infections for fragile NICU babies.',
    highlights: [
      'Micro Defogger Area Fumigation System',
      'Restricted Smart Access Sterile NICU Zone',
      'Strict 6-Step Hand Hygiene Compliance'
    ],
    badge: 'Infection Control Award',
    badgeBg: 'bg-teal-600/90 text-white',
    image: '/src/assets/hospital-exterior.png'
  },
  {
    id: 'free-rop-oae-screening-drive',
    title: 'Free Newborn ROP Retina & OAE Objective Hearing Screening Health Drive Conducted',
    category: 'Community Drives',
    date: 'January 2026',
    summary: 'Over 250 newborns screened for vision and hearing health during our community intact survival awareness campaign.',
    fullStory: 'As part of our commitment to intact survival, Radiant Children’s Hospital conducted a community screening drive offering free Retinopathy of Prematurity (ROP) retina checks and Oto-Acoustic Emission (OAE) hearing tests. Early screening ensures every child achieves healthy vision, hearing, and milestone development.',
    highlights: [
      '250+ Newborns Screened for Vision & Hearing',
      'Retina Specialist & Pediatric Audiologist On-Site',
      'Community Awareness for Preterm Intact Survival'
    ],
    badge: 'Community Health Drive',
    badgeBg: 'bg-amber-600/90 text-white',
    image: '/src/assets/hospital-night.png'
  }
];
