import React from "react";
import "./Footer.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Footer() {
  return (
    <div className="footer-container">
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <div className="footer-link-items">
          <h2>Kontakta Oss</h2>
          <p>Email: info@forening.com</p>
          <p>Telefon: +123 456 7890</p>
          <p>Adress: Föreninggatan 123, Stad, Land</p>
        </div>
      </AnimationOnScroll>
    </div>
  );
}

export default Footer;