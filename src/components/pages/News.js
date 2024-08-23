import React, { useState } from "react";
import "./News.css";
import VideoWithFlyInText from "../VideoWithFlyInText";
import { Button } from "../Button";

const NewsItem = ({ item, index, expanded, toggleContentVisibility }) => (
  <article className="news-item">
    <h4>{item.title}</h4>
    <p className={expanded[index] ? "expanded" : "collapsed"}>
      {item.content}
    </p>
    <Button
      onClick={() => toggleContentVisibility(index)}
      buttonStyle="btn--outline"
      buttonSize="btn--small"
    >
      {expanded[index] ? "Read Less" : "Read More"}
    </Button>
  </article>
);

const News = () => {
  const [expanded, setExpanded] = useState({});

  const toggleContentVisibility = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const newsItems = [
    {
      title: "Global Markets React to Economic Data",
      content:
        "Global stock markets saw significant movements today as investors reacted to new economic data. Analysts predict further volatility in the coming days as more reports are released.<<<<<<<<<<<<<<>>>>>>>>>>>>Global stock markets saw significant movements today as investors reacted to new economic data. Analysts predict further volatility in the coming days as more reports are released.<<<<<<<<<<<<<<>>>>>>>>>>>>",
    },
    {
      title: "Major Earthquake Strikes Pacific Region",
      content:
        "A 7.8 magnitude earthquake has struck the Pacific region, causing widespread damage and prompting tsunami warnings. Emergency services are currently assessing the situation and responding to those in need.",
    },
    {
      title: "Technology Giant Unveils New Product Line",
      content:
        "In a highly anticipated event, one of the world’s leading technology companies unveiled its latest product line today. The new devices boast cutting-edge features and are expected to hit the market next month.",
    },
    {
      title: "Political Tensions Rise in the Middle East",
      content:
        "Political tensions in the Middle East are escalating as diplomatic talks have broken down between key nations. International observers are concerned about the potential for conflict if the situation continues to deteriorate.",
    },
    {
      title: "Record-Breaking Heatwave Sweeps Across Europe",
      content:
        "Europe is currently experiencing a record-breaking heatwave, with temperatures soaring above 40°C in several countries. Authorities have issued health warnings and are advising residents to stay indoors and stay hydrated.",
    },
  ];

  return (
    <>
      <div>
        <VideoWithFlyInText
          mediaSrc="images/img-news5.jpg"
          text="Breaking News"
          isVideo={false}
          height={400}
          width="100%"
        />
      </div>
      <div className="news-content">
        <h2>Breaking News</h2>
        {newsItems.map((item, index) => (
          <NewsItem
            key={index}
            item={item}
            index={index}
            expanded={expanded}
            toggleContentVisibility={toggleContentVisibility}
          />
        ))}
      </div>
    </>
  );
};

export default News;