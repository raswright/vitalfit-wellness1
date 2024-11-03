import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhoWeAre from './components/WhoWeAre';
import Carousel from './components/Carousel';
import WhyChooseUs from './components/WhyChooseUs';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Services from './components/Services';
import SchedulePage from './components/Schedule';
import BlogPage from './components/Blog'; 
import AboutPage from './components/About';

const HomePage = () => (
  <>
    <HeroSection />
    <WhoWeAre />
    <Carousel />
    <WhyChooseUs />
    <CallToAction />
  </>
);

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} /> 
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/blog" element={<BlogPage />} /> 
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;