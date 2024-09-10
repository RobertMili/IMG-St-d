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
        height="400px"
        textSize="3rem"
        textPosition="top"
        textAlignHorizontal="left"
      />
      <div className="trivselregler-container">
        <TextComponent
          title="Garage"
          text={`
        
      Vi delar ett gemensamt garage med våra två grannföreningar BRF Downtown och BRF Täby Torg. Vår förening har 37 platser, där vissa är utrustade med elbilsladdare.

Priser:

Singelplats: 1100 kr/månad
Familjeplatser (två platser): 1400 kr/månad
El-tillägg "DUO-laddare": +300 kr/månad (el ingår ej, debiteras via InCharge)
El-tillägg "gamla laddare" med fri el-laddning: +700 kr/månad
Garagets nedfart ligger vid Häradsgränd och det finns hissar från trapphusen ner till garaget.

En fjärrkontroll till porten ingår i hyran mot en depositionsavgift. 
`}
        />
      </div>
    </>
  );
};

export default Rules;
