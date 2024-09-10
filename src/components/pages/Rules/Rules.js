import React from "react";
import "./Rules.css";
import VideoWithFlyInText from "../../VideoWithFlyingInText/VideoWithFlyInText";
import TextComponent from "../../TextComponent/TextComponent";

const Rules = () => {
  const rulesText = `
    <ul>
      <li>Vi visar hänsyn till våra grannar och stör inte med arbeten, hög musik etc. före klockan 07.00 eller efter 22.00.</li>
      <li>Vi använder lägenheten samt föreningens gemensamma utrymmen för cykelparkering och barnvagnar samt garage endast för avsett ändamål. Vi ställer eller förvarar inte föremål i trapphusen.</li>
      <li>Vi sorterar våra sopor i enlighet med de anvisningar som finns anslagna i soprummet.</li>
      <li>Vi hänger våra blomlådor på insidan av balkongräcket.</li>
      <li>Vi sätter inte upp anslag genom skyltning inom föreningens fastighet utan styrelsens medgivande.</li>
      <li>Vi skakar inte mattor från balkong eller fönster. Av brandskyddsskäl tillåter inte brandmyndigheten grillning med kol på balkongerna.</li>
      <li>Vi ser till att dörrar till gemensamma utrymmen är låsta.</li>
      <li>Vi som har husdjur ser till att dessa inte förorenar eller för oljud.</li>
      <li>Vi sätter inte upp markiser, staket, antenner eller andra anordningar t.ex. inglasning av balkonger utan styrelsens medgivande.</li>
      <li>Vi som bostadsrättshavare svarar för att dessa ordningsregler följs av vår familj och gäster eller dem som inryms i vår lägenhet.</li>
    </ul>
  `;

  return (
    <>
      <VideoWithFlyInText
        mediaSrc="/images/img-1 (copy).jpg"
        isVideo={false}
        width="100%"
        height="400px"
        textSize="3rem"
        textPosition="top"
        textAlignHorizontal="left"
      />
      <div className="trivselregler-container">
        <TextComponent
          title="Trivselregler"
          text={rulesText}
        />
      </div>
    </>
  );
};

export default Rules;