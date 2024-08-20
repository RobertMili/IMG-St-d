import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
    <h1>Discover the Life of Carl-Joar Karlsson</h1>
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
              src="images/img-calender.jpg"
              text="Arrage a Carl-Joar Karlsson's event"
              label="Arrage"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-early-life.jpg"
              text="Early Life of Carl-Joar Karlsson on this earth...."
              label="Early Life"
              path="/services"
            />
            <CardItem
              src="images/img-achievements.jpg"
              text="Career Achievements of Carl-Joar Karlsson......."
              label="Achievements"
              path="/products"
            />
            <CardItem
              src="images/img-awards.jpg"
              text="Awards and Recognitions of Carl-Joar Karlsson"
              label="Awards"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
