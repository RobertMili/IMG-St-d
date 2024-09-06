import React from "react";
import "./TextComponent.css"; // Import the CSS file for styling

const TextComponent = ({ title, text }) => {
  return (
    <div className="text-component">
      <div className="text-component-inside">
        <h4 className="text-title">{title}</h4>
        <p
          className="text-content"
          dangerouslySetInnerHTML={{ __html: text }}
        ></p>
      </div>
    </div>
  );
};

export default TextComponent;