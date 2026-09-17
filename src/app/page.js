'use client';

import { useState } from 'react';
import { vehicles } from '../../public/data/vehicles';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import RideCategories from '@/components/RideCategories';
import PromoBanner from '@/components/PromoBanner';
import PopularVehicles from '@/components/PopularVehicles';
import WhyRypp from '@/components/WhyRypp';
import PopularDestinations from '@/components/PopularDestinations';
import HowItWorks from '@/components/HowItWorks';
import Testimonial from '@/components/Testimonial';
import Stats from '@/components/Stats';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0]);
  const [categoryFilter, setCategoryFilter] = useState('bikes');

  const handleOpenBooking = (vehicle = null) => {
    if (vehicle) {
      setSelectedVehicle(vehicle);
    } else {
      setSelectedVehicle(vehicles[0]);
    }
    setIsBookingModalOpen(true);
  };

  const handleCategorySelect = (categoryId) => {
    setCategoryFilter(categoryId);
    const elem = document.getElementById('vehicles');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-white flex flex-col font-sans selection:bg-[#FF1E36] selection:text-white">
      {/* 1. Header / Navbar */}
      <Navbar onBookClick={() => handleOpenBooking()} />

      {/* 2. Hero Section */}
      <Hero onBookClick={() => handleOpenBooking()} />

      {/* 3. Choose Your Ride */}
      <RideCategories onCategorySelect={handleCategorySelect} />

      {/* 4. Dark Promotional Banner */}
      <PromoBanner onExploreClick={() => setCategoryFilter('all')} />

      {/* 5. Popular Vehicles */}
      <PopularVehicles 
        onBookNow={handleOpenBooking}
        activeTabOverride={categoryFilter}
      />

      {/* 6. Why RYPP? & App Download */}
      <WhyRypp />

      {/* 7. Popular Destinations */}
      <PopularDestinations />

      {/* 8. How It Works */}
      <HowItWorks />

      {/* 9. Rider Testimonials & Our Vision */}
      <Testimonial />

      {/* 10. Statistics Bar */}
      <Stats />

      {/* 11. Final CTA */}
      <FinalCTA onBookClick={() => handleOpenBooking()} />

      {/* 12. Footer */}
      <Footer />
      {/* 13. Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        vehicle={selectedVehicle}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </main>
  );
}
