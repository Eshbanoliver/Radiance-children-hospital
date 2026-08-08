export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  category: 'Critical Care' | 'General Care' | 'Specialized' | 'Wellness';
  highlights: string[];
  badge?: string;
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  icon: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  parentName: string;
  childInfo: string;
  rating: number;
  comment: string;
  date: string;
  location: string;
  avatarBg: string;
  verified: boolean;
}

export interface DoctorItem {
  id: string;
  name: string;
  role: string;
  qualifications: string;
  experience: string;
  specialties: string[];
  bio: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Emergency' | 'Vaccination' | 'Facilities';
}

export interface CoreValueItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface AppointmentFormData {
  parentName: string;
  childName: string;
  childAge: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  desc: string;
  iconName: string;
  category: 'critical' | 'facility' | 'safety' | 'convenience';
  badge: string;
  gradient: string;
  shadow: string;
  badgeBg: string;
  highlights: string[];
}

