import React, { useState, useEffect } from 'react';
import '../styles/Carousel.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    { text: "VitalFit & Wellness has been a life-changer...", author: "Zoe Johnson" },
    { text: "From VitalFit & Wellness, I not only lost weight...", author: "Liam Harrison" },
    { text: "I've found a supportive community...", author: "Elijah Brown" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [testimonials.length]);

  return (
    <section className="client-carousel">
      <h2>Our Client Success Stories</h2>
      <div className="carousel">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            style={{ display: index === currentIndex ? 'block' : 'none' }}
          >
            <p>{testimonial.text}</p>
            <p>- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;