import React from "react";
import "./Footer.css";
import "animate.css/animate.min.css";
import { FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        {/* Contact Section */}
        <div className="footer-section">
          <h3>Kontakta Oss:</h3>
          <p>
            <FaPhoneAlt /> Mobil: 076-2377057
          </p>
          <p>
            <FaMapMarkerAlt /> Adress: Höstvädersgatan 71
          </p>
          <p>418 33 Göteborg</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Snabblänkar:</h3>
          <ul>
            <li><a href="#about">Om Oss</a></li>
            <li><a href="#services">Tjänster</a></li>
            <li><a href="#reviews">Omdömen</a></li>
            <li><a href="#contact">Kontakt</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h3>Följ Oss:</h3>
          <div className="social-media-links">
            <a href="https://www.facebook.com/yourcompany" target="_blank" rel="noopener noreferrer">
              <FaFacebook /> Facebook
            </a>
            <a href="https://www.instagram.com/yourcompany" target="_blank" rel="noopener noreferrer">
              <FaInstagram /> Instagram
            </a>
            <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 Img Städ&fastighetsskötsel. Alla rättigheter förbehållna.</p>
        <p>
          <a href="/privacy-policy">Integritetspolicy</a> | <a href="/terms">Villkor</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
