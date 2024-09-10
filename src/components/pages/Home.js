import React from "react";
import "../../App.css";
import HeroSection from "../CardSection/CardSection";
import Cards from "../Card/Cards";
import Footer from "../Footer/Footer";
import VideoWithFlyInText from "../VideoWithFlyingInText/VideoWithFlyInText";
import TextComponent from "../TextComponent/TextComponent";
import LocalInfo from "../../components/LocalInfo/LocalInfo";

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
        />
      </div>
      <TextComponent
        title="Welcome to Brf Stjärnbildsgatan!"
        text={`Brf Stjärnbildshus nr <b>1</b> registrerades <b>1984</b> och innehåller nu <b>89</b> lägenheter med bostadsrätt. 
Fastigheterna började bebyggas <b>1967</b> som flervåningshus men gjordes om <b>1987</b> till bostadsrätter med radhuskaraktär och utgörs av fyra flerbostadshus med total lägenhetsyta på <b>8257</b> kvm.

Brf Stjärnbildshus är en aktiv förening som deltagit i olika processer i att förbättra stadsdelen Bergsjön. 
Styrelsen är övertygad att detta hänger ihop, föreningens bästa och vad som händer i stadsdelen i övrigt. 
De har tidigare anordnat olika aktiviteter för både unga och äldre, bland annat haft fritidsverksamhet för barn, höst- och vårstädning, påsk- och julpyssel, datakurser, miljöutbildning för barn och vuxna samt söndagsmiddagar.`}
      />

      <LocalInfo></LocalInfo>
      <Cards />
    
    </>
  );
}

export default Home;