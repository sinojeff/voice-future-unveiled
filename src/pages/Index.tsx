
import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import ValuesSection from '../components/ValuesSection';
import TimelineSection from '../components/TimelineSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <ValuesSection />
      <TimelineSection />
      <Footer />
    </div>
  );
};

export default Index;
