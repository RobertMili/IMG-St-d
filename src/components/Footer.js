import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>

        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Contact Form</h2>
            <div className="input-group">
              <input
                className="input-group-field"
                type="email"
                placeholder="Email address"
              />
              <textarea placeholder="Message"></textarea>
              <Button buttonStyle="btn--primary" buttonSize="btn--small">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
