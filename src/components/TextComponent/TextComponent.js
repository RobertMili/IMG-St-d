import React from "react";
import "./TextComponent.css"; // Import the CSS file for styling

const TextComponent = ({ title, text, imageSrc }) => {
  return (
    <div className="text-component">
      <div className="text-component-inside">
        <h4 className="text-title">{title}</h4>
        <p
          className="text-content"
          dangerouslySetInnerHTML={{ __html: text }}
        ></p>
        {imageSrc && (
          <div className="image-container">
            <img src={imageSrc} alt={title} className="text-image" />
          </div>
        )}
      </div>
    </div>
  );
};

export default TextComponent;