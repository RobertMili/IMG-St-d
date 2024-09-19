import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./VideoWithFlyInText.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

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
  objectFit = "cover" // Default value for object-fit
}) => {
  const [textLeft, setTextLeft] = useState('50%');
  const [mediaHeight, setMediaHeight] = useState(height);

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

      if(window.innerWidth <= 560) {
        setMediaHeight('350px');
      } else if (window.innerWidth <= 768) {
        setMediaHeight('300px');
      } else {
        setMediaHeight(height);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to set initial size

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [textAlignHorizontal, height]);

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
      style={{ width, height: mediaHeight, position: "relative" }}
    >
      {isVideo ? (
        <video
          className="hero-media"
          src={mediaSrc}
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "100%", objectFit }}
        />
      ) : (
        <img
          className="hero-media"
          src={mediaSrc}
          alt={text}
          style={{ width: "100%", height: "100%", objectFit }}
        />
      )}
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <h2 className="fly-in-text" style={textStyle}>
          {text}
        </h2>
      </AnimationOnScroll>
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
  objectFit: PropTypes.oneOf(["contain", "cover", "fill", "none", "scale-down"]) // Add prop type for objectFit
};


export default MediaWithFlyInText;