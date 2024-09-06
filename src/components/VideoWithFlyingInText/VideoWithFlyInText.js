import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./VideoWithFlyInText.css";

const MediaWithFlyInText = ({
  mediaSrc,
  text,
  isVideo,
  width,
  height,
  textColor = "white",
  textSize = "2rem",
  textPosition = "center",
  textAlignHorizontal = "center",
}) => {
  const [textLeft, setTextLeft] = useState('50%');

  useEffect(() => {
    const handleResize = () => {
      if (textAlignHorizontal === 'left') {
        if (window.innerWidth <= 768) {
          setTextLeft('35%');
        } else if (window.innerWidth <= 1100) {
          setTextLeft('31%');
        } else {
          setTextLeft('31%');
        }
      } else if (textAlignHorizontal === 'right') {
        setTextLeft('90%');
      } else {
        setTextLeft('50%');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to set initial size

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [textAlignHorizontal]);

  const textStyle = {
    color: textColor,
    fontSize: textSize,
    "--text-top":
      textPosition === "top"
        ? "10%"
        : textPosition === "bottom"
        ? "90%"
        : "53%",
    "--text-left": textLeft,
    transform: "translate(-50%, -50%)",
  };

  return (
    <div
      className="media-container"
      style={{ width, height, position: "relative" }}
    >
      {isVideo ? (
        <video
          className="hero-media"
          src={mediaSrc}
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        <img
          className="hero-media"
          src={mediaSrc}
          alt={text}
          style={{ width: "100%", height: "100%" }}
        />
      )}
      <h2 className="fly-in-text" style={textStyle}>
        {text}
      </h2>
    </div>
  );
};

MediaWithFlyInText.propTypes = {
  mediaSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isVideo: PropTypes.bool.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  textColor: PropTypes.string,
  textSize: PropTypes.string,
  textPosition: PropTypes.oneOf(["top", "center", "bottom"]),
  textAlignHorizontal: PropTypes.oneOf(["left", "center", "right"]),
};

export default MediaWithFlyInText;