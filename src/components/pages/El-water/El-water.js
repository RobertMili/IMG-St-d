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
      />
      <div className="trivselregler-container">
        <TextComponent
          title="El & Varmvatten"
          text={`
          Föreningen har avtal med leverantör för el och varmvatten, vilket innebär att vi har säkerställt att alla medlemmar får tillgång till dessa viktiga tjänster på ett tillförlitligt och kostnadseffektivt sätt. På grund av detta centrala avtal är det inte möjligt för enskilda bostadsrättsinnehavare att teckna egna privata avtal för el och varmvatten. Detta system är utformat för att förenkla hanteringen och säkerställa att alla medlemmar får en jämn och rättvis prisnivå.

Bostadsrättsägaren faktureras kvartalsvis för varmvatten och el av BRF Marknadstorget. Fakturorna skickas ut i början av varje kvartal och inkluderar en detaljerad sammanställning av förbrukningen under den föregående perioden.

Genom att ha en gemensam leverantör och central fakturering kan vi hålla kostnaderna nere och förenkla administrationen för både föreningen och medlemmarna.
          
          `}
        />
      </div>
    </>
  );
};

export default Rules;
