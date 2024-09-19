import React from "react";
import "./TV_internet.css";
import VideoWithFlyInText from "../../VideoWithFlyingInText/VideoWithFlyInText";
import TextComponent from "../../TextComponent/TextComponent";

const Rules = () => {
  const rulesText = `
  
  `;

  return (
    <>
      <VideoWithFlyInText
        mediaSrc="/images/img-tv.jpg"
        isVideo={false}
        width="100%"
        height="300px"
        textSize="3rem"
        textPosition="top"
        textAlignHorizontal="left"
         objectFit="scale-down"

      />
      <div className="trivselregler-container">
        <TextComponent
          title="TV & Internet"
          text={`
Föreningen har tecknat avtal med <b>ComHem</b>, vilket innebär att vi kan erbjuda alla boende tillgång till ett grundutbud av bredband, TV, eller telefoni till ett mycket förmånligt pris. Detta grundutbud är utformat för att täcka de vanligaste behoven och säkerställer att alla medlemmar har tillgång till snabb och pålitlig internetuppkoppling samt ett brett utbud av TV-kanaler och telefonitjänster.

För de som har större behov eller specifika önskemål, finns det även möjlighet att teckna sig för utökade paket. Ownit erbjuder en rad olika paket som inkluderar högre hastigheter för bredband, fler TV-kanaler, inklusive premiumkanaler, och ytterligare telefonitjänster. 

 

För mer infomration, besök <a href="https://www.tele2.se" target="_blank" rel="noopener noreferrer">www.tele2.se</a>
`}
        />
      </div>
    </>
  );
};

export default Rules;
