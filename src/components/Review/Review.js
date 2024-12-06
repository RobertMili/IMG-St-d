import React from "react";
import PropTypes from "prop-types";
import "./Review.css";



const Review = ({ author, text, rating }) => {
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
      </div>
    );
  };

Review.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Review;