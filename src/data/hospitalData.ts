import type { ServiceItem, MetricItem, TestimonialItem, DoctorItem, FAQItem, CoreValueItem } from '../types';

export const HOSPITAL_INFO = {
  name: "Radiant Children's Hospital",
  tagline: "Caring for Every Child, Every Step of the Way",
  subheading: "Trusted Pediatric Care, Neonatal Care & 24x7 Emergency Services in Udaipur",
  phone: "07424937788",
  whatsappPhone: "917424937788",
  address: "9 Kamla Nagar, 100 Feet Road, Behind Ashoka Palace, New Bhupalpura, Shobhagpura, Udaipur, Rajasthan 313001",
  city: "Udaipur",
  state: "Rajasthan",
  pincode: "313001",
  facebookUrl: "https://www.facebook.com/RadiantChildrenHospital",
  instagramUrl: "https://www.instagram.com/radiantch/",
  googleMapsIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922350.4716782165!2d72.6897553765913!3d25.440552555194934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5fb71a80425%3A0x3965db8c2851267f!2sRadiant%20Children%E2%80%99s%20Hospital!5e0!3m2!1sen!2sin!4v1786074857847!5m2!1sen!2sin",
  description: "Radiant Children's Hospital provides comprehensive healthcare services for children from birth to 18 years of age. We specialize in pediatric care, neonatology, vaccinations, emergency services, NICU, PICU, and advanced child healthcare with compassionate treatment and experienced doctors.",
  hours: "24 Hours / 7 Days a Week (Emergency & OPD)",
  emergencyHotline: "07424937788",
  specialties: [
    "All diseases from age 0 to 18 years",
    "Vaccination Centre",
    "OPD Services",
    "24×7 Emergency Services",
    "NICU (Neonatal Intensive Care)",
    "PICU (Pediatric Intensive Care)",
    "Best Neonatologist",
    "Best Pediatrician"
  ]
};

export const KEY_METRICS: MetricItem[] = [
  {
    id: '1',
    value: '5000+',
    label: 'Happy Children Treated',
    icon: 'FaSmile',
    description: 'Successful outcomes with loving pediatric care'
  },
  {
    id: '2',
    value: '15+',
    label: 'Years Experience',
    icon: 'FaAward',
    description: 'Senior neonatologists and pediatric specialists'
  },
  {
    id: '3',
    value: '24×7',
    label: 'Emergency Care',
    icon: 'FaClock',
    description: 'Round-the-clock pediatric & neonatal emergency'
  },
  {
    id: '4',
    value: '100%',
    label: 'Child Focused Care',
    icon: 'FaHeart',
    description: 'Tailored child-friendly environment and healing'
  },
  {
    id: '5',
    value: 'Level III',
    label: 'NICU Facility',
    icon: 'FaLungs',
    description: 'Advanced incubators and ventilator setup'
  },
  {
    id: '6',
    value: 'Dedicated',
    label: 'PICU Unit',
    icon: 'FaUserNurse',
    description: 'Critical intensive care unit for growing children'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'general-pediatrics',
    title: 'General Pediatrics',
    shortDesc: 'Complete diagnostic and therapeutic care for children from birth up to 18 years.',
    fullDesc: 'Our General Pediatrics department offers routine health checkups, illness treatment, childhood infection management, physical examinations, and long-term wellness plans. We care for infants, kids, and adolescents with gentle hands and high clinical precision.',
    iconName: 'FaStethoscope',
    category: 'General Care',
    highlights: ['Comprehensive physical exams', 'Acute disease management', 'Routine pediatric health checks', 'Adolescent health guidance'],
    badge: 'Core Specialty'
  },
  {
    id: 'newborn-care',
    title: 'Newborn Care',
    shortDesc: 'Gentle, specialized care for newborns during the vital first weeks of life.',
    fullDesc: 'From jaundice monitoring to infant feeding support, newborn screening, and neonatal milestone tracking, our team ensures your baby gets a healthy, comfortable start in life in a sterile, warm environment.',
    iconName: 'FaBaby',
    category: 'Specialized',
    highlights: ['Neonatal jaundice screening', 'Lactation & nutrition setup', 'Cord care & baby hygiene', 'Infant developmental checks']
  },
  {
    id: 'neonatology',
    title: 'Neonatology',
    shortDesc: 'Subspecialty care for premature infants and high-risk newborn conditions.',
    fullDesc: 'Our expert neonatologists provide high-level clinical management for premature babies, low birth weight infants, congenital disorders, and respiratory distress, using state-of-the-art medical technology.',
    iconName: 'FaUserMd',
    category: 'Critical Care',
    highlights: ['Premature baby care', 'Low birth weight management', 'Neonatal surgery support', 'Congenital anomaly monitoring'],
    badge: 'Expert Team'
  },
  {
    id: 'nicu',
    title: 'NICU (Neonatal ICU)',
    shortDesc: 'Level III Neonatal Intensive Care Unit equipped with advanced incubators & monitors.',
    fullDesc: 'Our NICU is designed to save lives with round-the-clock monitoring, central oxygen systems, advanced incubators, phototherapy units, and specialized neonatology nursing staff working 24x7.',
    iconName: 'FaMicroscope',
    category: 'Critical Care',
    highlights: ['Advanced incubators & ventilators', 'Continuous vital monitoring', '24x7 Neonatologist availability', 'Strict sterile protocols'],
    badge: '24x7 Facility'
  },
  {
    id: 'picu',
    title: 'PICU (Pediatric ICU)',
    shortDesc: 'Dedicated Pediatric Intensive Care Unit for critically ill children.',
    fullDesc: 'Our PICU provides specialized life support and intensive monitoring for children experiencing acute trauma, severe infections, asthma attacks, or surgical recovery with compassionate care.',
    iconName: 'FaProcedures',
    category: 'Critical Care',
    highlights: ['Pediatric ventilator support', 'Multi-parameter patient monitors', 'Dedicated critical care nurses', 'Emergency resuscitation'],
    badge: '24x7 Facility'
  },
  {
    id: 'vaccination-centre',
    title: 'Vaccination Centre',
    shortDesc: 'Full range of WHO & IAP recommended vaccines for infants, children, & teens.',
    fullDesc: 'Protect your child against preventable diseases. We maintain a reliable cold chain storage system for all essential vaccines from birth through 18 years, complete with painless administration techniques and digital schedule tracking.',
    iconName: 'FaSyringe',
    category: 'Wellness',
    highlights: ['Strict cold-chain maintenance', 'WHO & IAP immunization schedules', 'Painless vaccination options', 'Digital reminder setup'],
    badge: 'Popular'
  },
  {
    id: 'growth-development',
    title: 'Growth & Development Monitoring',
    shortDesc: 'Regular tracking of physical growth, motor skills, speech, and cognitive milestones.',
    fullDesc: 'Every child develops at their own pace, but early identification of developmental delays makes all the difference. We provide comprehensive percentile growth charting, milestone screening, and early intervention plans.',
    iconName: 'FaChartLine',
    category: 'Wellness',
    highlights: ['Height & weight growth charts', 'Motor skill evaluation', 'Speech & language assessment', 'Behavioral milestone tracking']
  },
  {
    id: 'nutrition-counseling',
    title: 'Nutrition Counseling',
    shortDesc: 'Custom diet plans for child growth, immunity, weight management, and feeding issues.',
    fullDesc: 'Proper nutrition powers healthy brain and body development. Our pediatric nutritionists offer guidance on infant weaning foods, picky eating management, anemia prevention, and childhood obesity treatment.',
    iconName: 'FaAppleAlt',
    category: 'Wellness',
    highlights: ['Infant weaning dietary plans', 'Immunity-boosting food charts', 'Picky eater behavior solutions', 'Deficiency management']
  },
  {
    id: 'child-emergency-care',
    title: 'Child Emergency Care',
    shortDesc: 'Rapid 24x7 pediatric emergency response unit for trauma, high fever, & respiratory distress.',
    fullDesc: 'When emergencies strike, speed and expert pediatric skills save lives. Our emergency wing is staffed 24/7 by trained pediatric doctors, emergency nurses, and fully equipped pediatric ambulances.',
    iconName: 'FaAmbulance',
    category: 'Critical Care',
    highlights: ['24x7 Triage & quick response', 'Pediatric trauma resuscitation', 'Oxygen & airway support', 'Rapid blood analysis setup'],
    badge: '24x7 Emergency'
  },
  {
    id: 'fever-infection',
    title: 'Fever & Infection Treatment',
    shortDesc: 'Diagnosis and swift treatment for viral fevers, dengue, typhoid, pneumonia, and flu.',
    fullDesc: 'Fevers in children can escalate quickly. We provide fast diagnostic blood testing, IV fluids, targeted antimicrobial therapy, and comfortable recovery wards to ensure rapid recovery from infectious conditions.',
    iconName: 'FaThermometerHalf',
    category: 'General Care',
    highlights: ['Rapid viral & bacterial testing', 'Dengue & Malaria management', 'Pneumonia & bronchial care', 'Hydration & fever control']
  },
  {
    id: 'asthma-allergy',
    title: 'Asthma & Allergy Care',
    shortDesc: 'Specialized management of childhood asthma, food allergies, eczema, and allergic rhinitis.',
    fullDesc: 'Help your child breathe easier and live without allergy flare-ups. We offer spirometry, allergy testing, nebulization services, inhaler training, and long-term asthma action plans.',
    iconName: 'FaLungs',
    category: 'Specialized',
    highlights: ['Nebulization facility', 'Asthma action plans', 'Allergy allergen identification', 'Long-term pulmonary wellness']
  },
  {
    id: 'health-checkups',
    title: 'Child Health Checkups',
    shortDesc: 'Preventative wellness packages designed for school admission, sports, & annual checks.',
    fullDesc: 'Proactive healthcare ensures your child stays ahead in health and fitness. Our checkup packages cover vision, hearing, dental, blood counts, organ function, and growth assessments.',
    iconName: 'FaHeartbeat',
    category: 'Wellness',
    highlights: ['Comprehensive blood profile', 'Vision & hearing screening', 'School fitness certificates', 'Pediatric consult included']
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

export const WHY_CHOOSE_US = [
  {
    title: "Experienced Pediatricians",
    desc: "Renowned child specialists with decades of combined clinical expertise in treating complex childhood conditions.",
    icon: "FaUserMd"
  },
  {
    title: "Best Neonatologists",
    desc: "Specialized doctors trained in newborn care, premature baby survival, and critical neonatal emergencies.",
    icon: "FaBaby"
  },
  {
    title: "24×7 Emergency",
    desc: "Always open, day or night. Immediate critical response team with oxygen, IVs, and ICU preparedness.",
    icon: "FaClock"
  },
  {
    title: "NICU & PICU",
    desc: "Level III Neonatal & Pediatric Intensive Care Units with incubators, monitors, and dedicated critical care staff.",
    icon: "FaHospital"
  },
  {
    title: "Vaccination Centre",
    desc: "Full vaccine stock maintained in strict cold-chain refrigeration for painless and accurate immunizations.",
    icon: "FaSyringe"
  },
  {
    title: "Advanced Medical Equipment",
    desc: "State-of-the-art diagnostic monitors, infant incubators, nebulizers, and sterile procedure rooms.",
    icon: "FaMicroscope"
  },
  {
    title: "Personalized Child Care",
    desc: "Warm, child-friendly environment with gentle doctors who alleviate hospital anxiety for kids and parents.",
    icon: "FaHeart"
  },
  {
    title: "Friendly Environment",
    desc: "Bright, colorful play areas, reassuring atmosphere, and cheerful nurses to keep children smiling.",
    icon: "FaSmile"
  },
  {
    title: "Affordable Healthcare",
    desc: "High quality healthcare accessible to all families in Udaipur and Rajasthan with honest, transparent pricing.",
    icon: "FaHandHoldingHeart"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    parentName: 'Sunita Sharma',
    childInfo: 'Mother of Aarav (Age 3)',
    rating: 5,
    comment: 'Radiant Children’s Hospital saved our baby when he had high fever and severe pneumonia. The NICU team and doctors were available 24/7. Their calm, expert care gave us immense hope and peace of mind.',
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
    comment: 'Best Neonatologist in Udaipur! My premature daughter needed NICU care for 10 days. The incubators, hygienic setup, and doctor explanations were top-notch. Truly radiant service in Udaipur!',
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
    comment: 'We visit Radiant Children’s Hospital for all vaccinations and growth checkups. The doctors are super friendly and painless with injections! The play area keeps kids distraction-free.',
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
    comment: 'Being a doctor myself, I appreciate the high clinical standards, strict infection control, and evidence-based pediatric practice at Radiant Children’s Hospital. Highly recommended in Rajasthan!',
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
    comment: 'Late-night asthma emergency was handled within 5 minutes of arrival. Oxygen and nebulization were started immediately. Forever grateful to the 24x7 emergency medical team!',
    date: '1 week ago',
    location: '100 Feet Road, Udaipur',
    avatarBg: 'bg-amber-500',
    verified: true
  }
];

export const FAQS: FAQItem[] = [
  {
    id: '1',
    question: 'What age group do you treat?',
    answer: 'We specialize in comprehensive medical care for children from newborn babies (0 days) up to adolescents aged 18 years.',
    category: 'General'
  },
  {
    id: '2',
    question: 'Do you provide vaccinations for infants and children?',
    answer: 'Yes, we run a dedicated Vaccination Centre providing all WHO & Indian Academy of Pediatrics (IAP) recommended vaccines with strict cold-chain refrigeration and digital schedule reminders.',
    category: 'Vaccination'
  },
  {
    id: '3',
    question: 'Is emergency pediatric care available 24 hours?',
    answer: 'Absolutely. Our Emergency Services run 24 hours a day, 7 days a week, 365 days a year with resident pediatricians, oxygen support, and critical emergency response.',
    category: 'Emergency'
  },
  {
    id: '4',
    question: 'Do you have dedicated NICU and PICU facilities?',
    answer: 'Yes, Radiant Children’s Hospital features a Level III Neonatal Intensive Care Unit (NICU) for premature & sick newborns, as well as a specialized Pediatric Intensive Care Unit (PICU) for critical child care.',
    category: 'Facilities'
  },
  {
    id: '5',
    question: 'How can I book an appointment?',
    answer: 'You can book an appointment by clicking the "Book Appointment" button on our website, calling us directly at 07424937788, or sending a message via WhatsApp.',
    category: 'General'
  },
  {
    id: '6',
    question: 'Where is Radiant Children’s Hospital located in Udaipur?',
    answer: 'We are located at 9 Kamla Nagar, 100 Feet Road, Behind Ashoka Palace, New Bhupalpura, Shobhagpura, Udaipur, Rajasthan 313001.',
    category: 'General'
  }
];

export const DOCTORS: DoctorItem[] = [
  {
    id: '1',
    name: 'Dr. Expert Pediatric Specialist',
    role: 'Senior Pediatrician & Clinical Director',
    qualifications: 'MD (Pediatrics), DCH, FEBP',
    experience: '15+ Years Clinical Experience',
    specialties: ['General Pediatrics', 'Growth & Milestone Tracking', 'Child Infectious Diseases', 'Asthma Care'],
    bio: 'Dedicated to compassionate child care with over 15 years of hospital experience in managing childhood illnesses, preventive health, and pediatric emergencies.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '2',
    name: 'Dr. Lead Neonatologist',
    role: 'Head of Neonatology & NICU Unit',
    qualifications: 'MD (Pediatrics), DM (Neonatology)',
    experience: '12+ Years Neonatal ICU Expertise',
    specialties: ['Premature Baby Survival', 'Level III NICU Management', 'Neonatal Ventilation', 'Congenital Disorders'],
    bio: 'Specialist in critical newborn care, saving hundreds of low birthweight babies and leading our 24x7 NICU team with clinical precision.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600'
  }
];
