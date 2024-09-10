import React from "react";
import "./Cards.css";
import CardItem from "../CardItem/CardItem";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <AnimationOnScroll animateIn="animate__bounceIn">
              <CardItem
                src="images/item-trivselregles.jpg"
                text="Trivselregler för Brf Stjärnbildsgatan"
                label="Trivselregler"
                path="/rules"
              />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__bounceIn">
              <CardItem
                src="images/img-garage.png"
                text="Trivselregler för Brf Stjärnbildsgatan"
                label="Garage"
                path="/garage"
              />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__bounceIn">
              <CardItem
                src="images/img-el2.jpg"
                text="Trivselregler för Brf Stjärnbildsgatan"
                label="El & Varmvatten"
                path="/el_water"
              />
            </AnimationOnScroll>
          </ul>
          <ul className="cards__items">
            <AnimationOnScroll animateIn="animate__bounceIn">
              <CardItem
                src="images/img-tv.jpg"
                text="Trivselregler för Brf Stjärnbildsgatan"
                label="TV & Internet"
                path="/blog"
              />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__bounceIn">
              <CardItem
                src="images/img-recycle.jpg"
                text="Trivselregler för Brf Stjärnbildsgatan"
                label="Soprum"
                path="/news"
              />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__bounceIn">
              <CardItem
                src="images/img-news.png"
                text="Trivselregler för Brf Stjärnbildsgatan"
                label="Nyheter"
                path="/blog"
              />
            </AnimationOnScroll>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cards;
