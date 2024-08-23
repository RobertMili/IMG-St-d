import React from 'react';
import './VideoWithFlyInText.css'; // Make sure to create and import the corresponding CSS file

const MediaWithFlyInText = ({ mediaSrc, text, isVideo, width, height }) => {
  return (
    <div className="media-container" style={{ width, height }}>
      {isVideo ? (
        <video className='hero-media' src={mediaSrc} autoPlay loop muted style={{ width: '100%', height: '100%' }} />
      ) : (
        <img className='hero-media' src={mediaSrc} alt={text} style={{ width: '100%', height: '100%' }} />
      )}
      <h2 className="fly-in-text">{text}</h2>
    </div>
  );
};

export default MediaWithFlyInText;