import React from "react";
import "./Footer.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Footer() {
  return (
    <div className="footer-container">
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <div className="footer-link-items">
          <h2>Contact Us</h2>
          <p>Email: info@forening.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Förening St, City, Country</p>
        </div>
      </AnimationOnScroll>
    </div>
  );
}

export default Footer;