// ServiceItem.js
import React from 'react';
const ServiceItem = ({ title, description, image }) => {
  return (
    <div className="service-item">
      <img src={image} alt={title} className="service-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceItem;
