import React from "react";
import "./Garbage.css";
import VideoWithFlyInText from "../../VideoWithFlyingInText/VideoWithFlyInText";
import TextComponent from "../../TextComponent/TextComponent";

const Rules = () => {
  const rulesText = `
  
  `;

  return (
    <>
      <VideoWithFlyInText
        mediaSrc="/images/Designer.jpeg"
        isVideo={false}
        width="100%"
        height="500px"
        textSize="3rem"
        textPosition="top"
        textAlignHorizontal="left"
        objectFit="contain"
        paddingTop="80px"
      />
      <div className="trivselregler-container">
        <TextComponent
          title="Soprum"
          text={`
          
          För att behålla ett trivsamt soprum till allas trevnad, knyt ihop dina soppåsar ordentligt så att dina sopor inte läcker eller faller ur sina kastade påsar. Se till att kartongerna är ordentligt hopslagna innan de läggs i återvinningen för kartong. Det gör att vi får mer plats och slipper att ställa kartonger på soprumsgolvet.

Presentsnören ska slängas i hushållssoporna. I soprummet får du bara slänga hushållssopor, glas, kartong, plast och mindre metallsopor. Batterier slängs i batteriholken.

För att förbättra vår avfallshantering och göra ett hållbart val, har vi nu infört kompostpåsar i vårt soprum. Vi hoppas att detta initiativ kommer att bidra till en grönare och mer trivsam miljö för alla boende.

<li>Kompostpåsar och behållare: Vi har ställt ut behållare och paket med kompostpåsar i soprummet. Varje medlem får ta med sig ett (1) paket kompostpåsar för att använda i sitt hushåll.
<li>Användning av kompostpåsar: Använd kompostpåsarna för matavfall och annat biologiskt nedbrytbart avfall. Det hjälper oss att minska mängden restavfall och främjar återvinning.
<li>Förvaring och hantering: Förvara kompostpåsarna på ett lämpligt ställe i ditt hem och använd dem regelbundet. När påsen är full, knyt ihop den ordentligt och lägg den i den avsedda behållaren i soprummet.


<b>Vi tackar för ert samarbete och engagemang för att skapa en mer hållbar boendemiljö.</b>
          
          `}
        />
      </div>
    </>
  );
};

export default Rules;
