// src/App.js
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhoWeAre from './components/WhoWeAre';
import Carousel from './components/Carousel';
import WhyChooseUs from './components/WhyChooseUs';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <WhoWeAre />
      <Carousel />
      <WhyChooseUs />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default App;