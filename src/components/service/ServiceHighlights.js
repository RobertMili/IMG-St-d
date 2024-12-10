import React from 'react';
import './ServiceHighlights.css'; 

const services = [
  {
    title: 'Hemstäd',
    description: 'Vi tar hand om hela ditt hem',
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
  {
    title: 'Allt inom städning',
    description: 'Vi erbjuder skräddarsydda städtjänster för alla behov – kontakta oss för att få hjälp med just det du behöver!',
    image: '/images/1.jpg', 
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
