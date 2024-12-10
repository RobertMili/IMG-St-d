import React from 'react';
import './ServiceHighlights.css'; 

const services = [
  {
    title: 'Köksstädning',
    description: 'Vi gör ditt kök skinande rent och hygieniskt.',
    image: '/images/1.jpg', 
  },
  {
    title: 'Badrumsstädning',
    description: 'Noggrann städning för ett skinande rent badrum.',
    image: '/images/2.jpg',
  },
  {
    title: 'Vardagsrumsstädning',
    description: 'Håll ditt vardagsrum mysigt och rent.',
    image: '/images/3.jpg', 
  },
  {
    title: 'Fönsterputsning',
    description: 'Kristallklara fönster för ett ljusare hem.',
    image: '/images/4.jpg', 
  },
  {
    title: 'Kontorsstädning',
    description: 'Vi ser till att din arbetsplats är ren och välorganiserad.',
    image: '/images/5.jpg', 
  },

  {
    title: 'Flyttstädning',
    description: 'Vi tar hand om allt städarbete när du flyttar.',
    image: '/images/flyttstadning.jpg',
  },
  {
    title: 'Trappstädning',
    description: 'Skinande rena trapphus för bostadsrättsföreningar och fastigheter.',
    image: '/images/trappstädning.jpg', 
  },
  {
    title: 'Storstädning',
    description: 'Djupstädning för hela hemmet eller kontoret.',
    image: '/images/storstädning.webp', 
  },
  {
    title: 'Byggstädning',
    description: 'Städning efter renovering eller byggprojekt.',
    image: '/images/byggstadning.jpg', 
  },
  
];

const ServiceHighlights = () => {
  return (
    <div className="service-container">
      <h2 className="service-heading">Våra Tjänster:</h2>
      <div className="service-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <h3 className="service-card-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceHighlights;
