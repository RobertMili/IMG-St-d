import React from "react";
import "../../App.css";
import { Button } from "../Button/Button";
import "./CardSection.css";
import Nyheter from "../Nyheter/Nyheter";

function HeroSection() {
  return (
    <div className="hero-container">
      <video
        className="hero-video"
        src="/videos/video-3.mp4"
        autoPlay
        loop
        muted
      />

      <ul className="cards__items">
        <Nyheter
          text=" Welcome to Carl-Joar Karlsson's official website! "
          path="/services"
        />
      </ul>
    </div>
  );
}

export default HeroSection;
