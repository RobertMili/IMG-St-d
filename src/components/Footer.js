import React, { useState } from "react";
import { Button } from "./Button"; // Ensure Button component is correctly imported
import "./Footer.css";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com"; // Ensure emailjs is imported
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  // Handle input changes and update formData state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data using emailjs
    emailjs
      .sendForm(
        "service_mgvjz5b",
        "template_7vne56v",
        e.target,
        "UvGCnXxRX-3ee22mi"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
        }
      );

    // Reset form data
    setFormData({
      email: "",
      message: "",
    });
  };

  return (
    <footer className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Social Media: </h2>
            <Link to="/">
              
              <FontAwesomeIcon icon={faInstagram} size="2x" />
              <span> Instagram</span>
            </Link>
            <Link to="/">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
              <span> Youtube</span>
            </Link>

            <Link to="/">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
              <span> Twitter</span>
            </Link>
          </div>
        </div>

        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Contact Form</h2>
            <form className="input-group" onSubmit={handleSubmit}>
              <input
                className="input-group-field"
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange} // Attach handleChange to input
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange} // Attach handleChange to textarea
                required
              ></textarea>
              <Button
                buttonStyle="btn--primary"
                buttonSize="btn--small"
                type="submit"
              >
                Submit
              </Button>{" "}
              {/* Ensure Button component renders a native <button> element */}
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
