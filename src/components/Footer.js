import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className=" footer-links">


        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>

       

        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>

        <div className="footer-link-wrapper">
        <div class="footer-link-items">
          <h2>Contact form</h2>
          <div class="input-group">
            <input
              class="input-group-field"
              type="email"
              placeholder="Email address"
            />
            <textarea placeholder="Message"></textarea>

            <Button buttonStyle="btn--primary" buttonSize="btn--small">Submit</Button>

          </div>
        </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;
