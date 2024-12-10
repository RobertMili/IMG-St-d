import React from 'react';
import './HeroBanner.css'; // Importera CSS-filen

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <h1 className="hero-heading">Professionell Städservice för Hem och Kontor</h1>
        <p className="hero-subheading">Vi levererar högkvalitativ städning som gör ditt hem och kontor skinande rent.</p>
        <div className="hero-buttons">
          <button className="cta-button offer-button">Få en Gratis Offert</button>
          <button className="cta-button book-button">Boka Nu</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
