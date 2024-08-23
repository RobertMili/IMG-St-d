import React from 'react';
import PropTypes from 'prop-types';
import './VideoWithFlyInText.css'; 

const MediaWithFlyInText = ({ mediaSrc, text, isVideo, width, height, textColor = 'white', textSize = '2em', textPosition = 'center', textAlignHorizontal = 'center' }) => {
  const textStyle = {
    color: textColor,
    fontSize: textSize,
    '--text-top': textPosition === 'top' ? '10%' : textPosition === 'bottom' ? '90%' : '60%',
    '--text-left': textAlignHorizontal === 'left' ? (window.innerWidth <= 768 ? '36%' : '19%') : textAlignHorizontal === 'right' ? '90%' : '50%',
transform: 'translate(-50%, -50%)',
  };

  return (
    <div className="media-container" style={{ width, height, position: 'relative' }}>
      {isVideo ? (
        <video className='hero-media' src={mediaSrc} autoPlay loop muted style={{ width: '100%', height: '100%' }} />
      ) : (
        <img className='hero-media' src={mediaSrc} alt={text} style={{ width: '100%', height: '100%' }} />
      )}
      <h2 className="fly-in-text" style={textStyle}>{text}</h2>
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
  textPosition: PropTypes.oneOf(['top', 'center', 'bottom']),
  textAlignHorizontal: PropTypes.oneOf(['left', 'center', 'right']),
};

export default MediaWithFlyInText;