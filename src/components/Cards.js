import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
    <h1>Carl-Joar Karlsson - Musician, Guitarist, Guitar-Tech</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-biography.jpg"
              text="Biography of the Carl-Joar Karlsson"
              label="Biography"
              path="/services"
            />
            <CardItem
              src="images/img-news.jpg"
              text="Latest news of Carl-Joar Karlsson..."
              label="News"
              path="/services"
            />  
            <CardItem
              src="images/img-blog4.jpg"
              text="Arrage a Carl-Joar Karlsson's event"
              label="Blog"
              path="/blog"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
