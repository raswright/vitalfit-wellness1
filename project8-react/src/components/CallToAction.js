//  Part of Home Page (index)
import React from 'react';
import '../styles/CallToAction.css';

const CallToAction = () => {
  return (
    <section className="call-to-action">
      <h2>Ready to Begin Your Journey?</h2>
      <p>Start exploring today and discover tips, resources, and guidance to help you live a healthier, happier life!</p>
      <a href="/services" className="cta-button3">See What We Offer</a>
    </section>
  );
};

export default CallToAction;