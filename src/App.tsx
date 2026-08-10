import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

// Lazy-loaded pages for lightning fast initial load
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const AboutUs = lazy(() => import('./pages/AboutUs').then(m => ({ default: m.AboutUs })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage').then(m => ({ default: m.TestimonialsPage })));
const ContactUs = lazy(() => import('./pages/ContactUs').then(m => ({ default: m.ContactUs })));
const AppointmentModal = lazy(() => import('./components/AppointmentModal').then(m => ({ default: m.AppointmentModal })));

// Loading spinner fallback
const PageLoader: React.FC = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-cyan-200 border-t-cyan-600 rounded-full animate-spin" />
  </div>
);

// Scroll to Top on route navigation hook
const ScrollToTopOnRoute: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const forceScrollTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    forceScrollTop();

    const t1 = setTimeout(forceScrollTop, 0);
    const t2 = setTimeout(forceScrollTop, 50);
    const t3 = setTimeout(forceScrollTop, 150);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [pathname]);

  return null;
};

// Page component wrapper to guarantee top scroll when lazy chunk mounts
const PageScrollWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return <>{children}</>;
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
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<PageScrollWrapper><Home onOpenBooking={() => handleOpenBooking()} /></PageScrollWrapper>} />
            <Route path="/about" element={<PageScrollWrapper><AboutUs onOpenBooking={() => handleOpenBooking()} /></PageScrollWrapper>} />
            <Route path="/services" element={<PageScrollWrapper><ServicesPage onOpenBooking={(srv) => handleOpenBooking(srv)} /></PageScrollWrapper>} />
            <Route path="/testimonials" element={<PageScrollWrapper><TestimonialsPage onOpenBooking={() => handleOpenBooking()} /></PageScrollWrapper>} />
            <Route path="/contact" element={<PageScrollWrapper><ContactUs /></PageScrollWrapper>} />
          </Routes>
        </Suspense>
      </main>

      {/* Left Floating Call/WhatsApp & Right Scroll-to-Top Buttons */}
      <FloatingActions />

      {/* Appointment Booking Modal (Lazy loaded when opened) */}
      <Suspense fallback={null}>
        {isBookingOpen && (
          <AppointmentModal
            isOpen={isBookingOpen}
            onClose={handleCloseBooking}
            defaultService={selectedService}
          />
        )}
      </Suspense>

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
