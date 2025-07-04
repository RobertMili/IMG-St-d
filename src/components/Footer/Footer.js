import React from "react";
import "./Footer.css";
import "animate.css/animate.min.css";
import { Link } from "react-router-dom";
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
            <li><a href="/AboutOss">Om Oss</a></li>
            <li><a href="#services">Tjänster</a></li>
            <li>
              <a
                href="https://www.hitta.se/img+st%C3%A4dochfastighetssk%C3%B6tsel/g%C3%B6teborg/fnrtxyzd"
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // For security and performance
              >
                Omdömen
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h3>Följ Oss:</h3>
          <div className="social-media-links">
            <a href="https://www.facebook.com/profile.php?id=61569443945272" target="_blank" rel="noopener noreferrer">
              <FaFacebook /> Facebook
            </a>
            <a href="https://www.instagram.com/imgstad.se/" target="_blank" rel="noopener noreferrer">
              <FaInstagram /> Instagram
            </a>
            <a href="https://www.facebook.com/profile.php?id=61569443945272" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 Img Städ&fastighetsskötsel. Alla rättigheter förbehållna.</p>
        <p>
        <Link to="/PrivacyPolicy">Integritetspolicy</Link> | <Link to="/terms">Villkor</Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
