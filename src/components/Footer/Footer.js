import React from "react";
import "./Footer.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Footer() {
  return (
    <div className="footer-container">
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <div className="footer-link-items">
          <h2>Kontakta Oss: </h2>
          <p>Telefon: 031178750</p>
          <p>
            Adress: Brf Stjärnbildshus nr 1 Stjärnbildsgatan 44 415 18 GÖTEBORG
          </p>
        </div>
      </AnimationOnScroll>
    </div>
  );
}

export default Footer;
