import React, { useEffect } from 'react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = `${HOSPITAL_INFO.name} | Best Pediatrician & NICU Hospital in Udaipur`,
  description = HOSPITAL_INFO.description,
  keywords = "Radiant Children's Hospital, Pediatrician Udaipur, NICU Udaipur, PICU Udaipur, Best Neonatologist Udaipur, Child Hospital Udaipur",
  canonical = window.location.href
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update meta theme-color to green
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', '#20C997');
    }

    // Add JSON-LD Schema markup for Hospital / MedicalBusiness
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": HOSPITAL_INFO.name,
      "alternateName": "Radiant Children Hospital Udaipur",
      "url": window.location.origin,
      "logo": `${window.location.origin}/logo.png`,
      "description": HOSPITAL_INFO.description,
      "telephone": HOSPITAL_INFO.phone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "9 Kamla Nagar, 100 Feet Road, Behind Ashoka Palace, New Bhupalpura, Shobhagpura",
        "addressLocality": "Udaipur",
        "addressRegion": "Rajasthan",
        "postalCode": "313001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 24.5854,
        "longitude": 73.7125
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "medicalSpecialty": [
        "Pediatric",
        "Neonatal",
        "Vaccination",
        "Emergency"
      ],
      "sameAs": [
        HOSPITAL_INFO.facebookUrl,
        HOSPITAL_INFO.instagramUrl,
        HOSPITAL_INFO.linkedinUrl
      ]
    };

    let scriptTag = document.getElementById('hospital-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'hospital-schema';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);
  }, [title, description, keywords, canonical]);

  return null;
};
