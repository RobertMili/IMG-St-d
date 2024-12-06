import React from "react";
import HeroSection from "../CardSection/CardSection";
import Cards from "../Card/Cards";
import Footer from "../Footer/Footer";
import VideoWithFlyInText from "../VideoWithFlyingInText/VideoWithFlyInText";
import TextComponent from "../TextComponent/TextComponent";
import LocalInfo from "../../components/LocalInfo/LocalInfo";
import "./Home.css";
import ReviewList from "../Review/ReviewList";
import { FaFileAlt, FaTasks } from "react-icons/fa";

function Home() {
  return (
    <>
       <div className="Home">
        <div className="image-container">
          <img src="/images/cleaner.webp" alt="Cleaner" className="background-image" />
          <div className="button-container">
          {/* Button for Offert */}
          <button className="btn btn-offert">
            <FaFileAlt style={{ marginRight: "0.5rem" }} /> Offert
          </button>
          {/* Button for Tjänster */}
          <button className="btn btn-tjanster">
            <FaTasks style={{ marginRight: "0.5rem" }} /> Tjänster
          </button>
          </div>
        </div>
      </div>


      <ReviewList />
{/* 
      <TextComponent
        title="Welcome to Brf Stjärnbildsgatan!"
        text={`Brf Stjärnbildshus nr <b>1</b> registrerades <b>1984</b> och innehåller nu <b>89</b> lägenheter med bostadsrätt. 
Fastigheterna började bebyggas <b>1967</b> som flervåningshus men gjordes om <b>1987</b> till bostadsrätter med radhuskaraktär och utgörs av fyra flerbostadshus med total lägenhetsyta på <b>8257</b> kvm.

BRF Stjärnbildshus är en aktiv förening som strävar efter att förbättra livskvaliteten i stadsdelen Bergsjön. Föreningen ligger nära en träningsbana, vilket ger medlemmarna möjlighet till aktiv livsstil och sport. Området är även omgiven av vacker skog och natur, vilket erbjuder fina möjligheter för promenader, cykelturer och andra utomhusaktiviteter. Dessutom ligger en sjö i närheten, perfekt för avkoppling och rekreation.
`}
        imageSrc="/images/static.png"
      /> */}

      {/* <LocalInfo />
      <Cards /> */}
    </>
  );
}

export default Home;
