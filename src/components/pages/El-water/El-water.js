import React from "react";
import "./El-water.css";
import VideoWithFlyInText from "../../VideoWithFlyingInText/VideoWithFlyInText";
import TextComponent from "../../TextComponent/TextComponent";

const Rules = () => {
  const rulesText = `
  
  `;

  return (
    <>
      <VideoWithFlyInText
        mediaSrc="/images/img-el2.jpg"
        isVideo={false}
        width="100%"
        height="300px"
        textSize="3rem"
        textPosition="top"
        textAlignHorizontal="left"
        objectFit="cover"
         paddingTop="80px"

      />
      <div className="trivselregler-container">
        <TextComponent
          title="El & Varmvatten"
          text={`
          
           Föreningen använder fjärrvärme för uppvärmning, vilket bidrar till en mer energieffektiv lösning. Månadsavgiften inkluderar kostnader för värme och varmvatten, samt grundutbud av kabel-TV och bredband.

Föreningen har också genomfört flera uppgraderingar för att förbättra energieffektiviteten, inklusive justeringar av värmesystemet i lägenheterna för att sänka energikostnaderna. En underhållsplan är på plats som sträcker sig fram till 2043 för att säkerställa att systemen förblir i gott skick.
          
          `}
        />
      </div>
    </>
  );
};

export default Rules;
