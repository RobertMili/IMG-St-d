import React from "react";
import emailjs from "emailjs-com";
import "./OffertForm.css";

const OffertForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mgvjz5b", // Replace with your EmailJS Service ID
        "template_7vne56v", // Replace with your EmailJS Template ID
        e.target, // The form element
        "UvGCnXxRX-3ee22mi" // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Offert skickad! Vi återkommer till dig snart.");
        },
        (error) => {
          console.error("Error:", error.text);
          alert("Ett fel inträffade. Försök igen senare.");
        }
      );

    e.target.reset(); // Clear the form after submission
  };

  return (
    <div className="offert-form-container">
      <h2 className="offert-title">Begär en offert</h2>
      <p className="offert-subtitle">
        Fyll i formuläret så återkommer vi till dig med en kostnadsfri offert.
      </p>
      <form className="offert-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input type="text" name="firstName" placeholder="Förnamn" required />
          <input type="text" name="lastName" placeholder="Efternamn" required />
        </div>
        <div className="form-row">
          <input type="text" name="phone" placeholder="Telefon" required />
          <input type="email" name="email" placeholder="E-post" required />
        </div>
        <div className="form-row">
          <input type="text" name="postalCode" placeholder="Postnummer" required />
          <input type="text" name="city" placeholder="Ort" required />
        </div>
        <div className="form-row">
          <textarea
            name="projectDescription"
            placeholder="Beskrivning av projekt"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="offert-submit">
          Skicka
        </button>
      </form>
    </div>
  );
};

export default OffertForm;