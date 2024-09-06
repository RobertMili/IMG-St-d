import React from "react";
import "./Cards.css";
import CardItem from "../CardItem/CardItem";

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/item-trivselregles.jpg"
              text="Biography of the Carl-Joar Karlsson"
              label="Trivselregler"
              path="/biography"
            />
            <CardItem
              src="images/img-garage.png"
              text="Biography of the Carl-Joar Karlsson"
              label="Garage"
              path="/news"
            />
             <CardItem
              src="images/img-el2.jpg"
              text="Biography of the Carl-Joar Karlsson"
              label="El & Varmvatten"
              path="/blog"
            />
        
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-tv.jpg"
              text="Biography of the Carl-Joar Karlsson"
              label="TV & Internet"
              path="/blog"
            />
              <CardItem
              src="images/img-recycle.jpg"
              text="Biography of the Carl-Joar Karlsson"
              label="Soprum"
              path="/news"
            />
            <CardItem
              src="images/img-news.png"
              text="Biography of the Carl-Joar Karlsson"
              label="Nyheter"
              path="/blog"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
