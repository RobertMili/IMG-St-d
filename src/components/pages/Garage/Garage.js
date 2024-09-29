import React from "react";
import "./Garage.css";
import VideoWithFlyInText from "../../VideoWithFlyingInText/VideoWithFlyInText";
import TextComponent from "../../TextComponent/TextComponent";

const Rules = () => {
  const rulesText = `
  
  `;

  return (
    <>
      <VideoWithFlyInText
        mediaSrc="/images/img-garage.png"
        isVideo={false}
        width="100%"
        height="300px"
        textSize="3rem"
        textPosition="top"
        textAlignHorizontal="left"
        objectFit="cover"
      />
      <div className="trivselregler-container">
        <TextComponent
          title="Garage"
          text={`
          
          BRF Stjärnbildsgatan erbjuder garageplatser för majoriteten av sina lägenheter. Totalt har 86 av föreningens 89 lägenheter tillgång till en egen garageplats i någon av garagelängorna i början av Stjärnbildsgatan.

Parkeringsplatser:
De lägenheter som inte har en fast garageplats kan hyra en parkeringsplats. Det finns cirka 10 parkeringsplatser tillgängliga för uthyrning, med en separat kö, för 400 kr/månad.

Tillfälliga lösningar:
Om ingen ledig parkeringsplats finns kan tillfälliga lösningar erbjudas tills en fast plats blir tillgänglig.

Besöksparkering:
För gäster finns besöksparkeringar i anslutning till garagelängorna och på intilliggande områden.
          `}
        />
      </div>
    </>
  );
};

export default Rules;
