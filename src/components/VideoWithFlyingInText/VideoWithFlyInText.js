import React from "react";
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
  objectFit = "cover", // Default value for object-fit
  paddingTop = "0px", // Default value for padding-top
}) => {
  const textStyle = {
    color: textColor,
    fontSize: textSize,
    "--text-top":
      textPosition === "top"
        ? "10%"
        : textPosition === "bottom"
        ? "90%"
        : "53%",
    "--text-left":
      textAlignHorizontal === "left"
        ? "15%"
        : textAlignHorizontal === "right"
        ? "85%"
        : "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div
      className="media-container"
      style={{ width, height, position: "relative", paddingTop }}
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
  objectFit: PropTypes.oneOf(["contain", "cover", "fill", "none", "scale-down"]),
  paddingTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MediaWithFlyInText.defaultProps = {
  objectFit: "cover",
  paddingTop: "0px",
};

export default MediaWithFlyInText;
