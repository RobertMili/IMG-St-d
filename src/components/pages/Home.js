import React from "react";
import "../../App.css";
import HeroSection from "../CardSection/CardSection";
import Cards from "../Card/Cards";
import Footer from "../Footer/Footer";
import VideoWithFlyInText from "../VideoWithFlyingInText/VideoWithFlyInText";

function Home() {
  return (
    <>
   <div className="Home">
        <VideoWithFlyInText
          mediaSrc="/images/img-1 (copy).jpg"
          isVideo={false}
          width="100%"
          height="70%"
          textSize="3rem"
          textPosition="top"
          textAlignHorizontal="left"
        /></div>
      <Cards />
    </>
  );
}

export default Home;
