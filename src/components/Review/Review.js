import React from "react";
import PropTypes from "prop-types";
import "./Review.css";

const Review = ({ author, text, rating, link }) => {
  const stars = Array.from({ length: rating }, (_, index) => (
    <span key={index} className="star">⭐</span>
  ));

  return (
    <div className="review">
      <div className="review-header">
        <span className="review-author">{author}</span>
        <span className="author-rating">{stars}</span>
      </div>
      <div className="review-text">{text}</div>
      <div className="review-footer">
        <a href={link} target="_blank" rel="noopener noreferrer" className="review-button">
          Läs recension
        </a>
      </div>
    </div>
  );
};

Review.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  link: PropTypes.string, // Add link as a prop type
};

export default Review;
