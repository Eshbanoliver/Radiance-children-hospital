import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { AppointmentModal } from './components/AppointmentModal';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { ServicesPage } from './pages/ServicesPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ContactUs } from './pages/ContactUs';

// Scroll to Top on route navigation hook
const ScrollToTopOnRoute: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const AppContent: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const handleOpenBooking = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedService(serviceTitle);
    } else {
      setSelectedService('');
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-primary-light selection:text-primary relative">
      <ScrollToTopOnRoute />
      
      {/* Sticky Header Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Page Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home onOpenBooking={() => handleOpenBooking()} />} />
          <Route path="/about" element={<AboutUs onOpenBooking={() => handleOpenBooking()} />} />
          <Route path="/services" element={<ServicesPage onOpenBooking={(srv) => handleOpenBooking(srv)} />} />
          <Route path="/testimonials" element={<TestimonialsPage onOpenBooking={() => handleOpenBooking()} />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>

      {/* Left Floating Call/WhatsApp & Right Scroll-to-Top Buttons */}
      <FloatingActions />

      {/* Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        defaultService={selectedService}
      />

      {/* Footer with Google Map & Copyright */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
