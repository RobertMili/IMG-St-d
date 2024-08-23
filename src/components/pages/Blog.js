import React, { useState } from "react";
import "./Blog.css";
import VideoWithFlyInText from "../VideoWithFlyInText";
import { Button } from "../Button";

const BlogPost = ({ item, index, expanded, toggleContentVisibility }) => (
  <article className="blog-item">
    <h4 className="blog-post-title">{item.title}</h4>
    <p className={expanded[index] ? "expanded" : "collapsed"}>{item.content}</p>
    <Button
      onClick={() => toggleContentVisibility(index)}
      buttonStyle="btn--outline"
      buttonSize="btn--small"
      aria-expanded={expanded[index]}
    >
      {expanded[index] ? "Read Less" : "Read More"}
    </Button>
  </article>
);

const Blog = () => {
  const [expanded, setExpanded] = useState({});

  const toggleContentVisibility = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const blogItems = [
    {
      title: "Exploring the Wonders of the Universe",
      content:
        "The universe is vast and full of mysteries waiting to be uncovered. From the formation of galaxies to the behavior of black holes, scientists are constantly making new discoveries that challenge our understanding of the cosmos. Join us as we delve into the latest findings and explore the wonders of the universe.",
    },
    {
      title: "The Future of Artificial Intelligence",
      content:
        "Artificial Intelligence (AI) is rapidly transforming various industries, from healthcare to finance. With advancements in machine learning and neural networks, AI systems are becoming more sophisticated and capable. In this blog post, we discuss the potential future applications of AI and the ethical considerations that come with it.",
    },
    {
      title: "Sustainable Living: Tips and Tricks",
      content:
        "Living sustainably is more important than ever as we face the challenges of climate change. In this post, we share practical tips and tricks for reducing your carbon footprint, conserving resources, and living a more eco-friendly lifestyle. From simple changes in your daily routine to larger lifestyle adjustments, every effort counts.",
    },
    {
      title: "The Impact of Social Media on Society",
      content:
        "Social media has revolutionized the way we communicate and interact with each other. While it offers numerous benefits, such as connecting people across the globe, it also has its downsides. In this article, we explore the impact of social media on society, including its effects on mental health, privacy, and the spread of misinformation.",
    },
    {
      title: "A Journey Through the History of Art",
      content:
        "Art has been an integral part of human culture for centuries, reflecting the values, beliefs, and experiences of different societies. In this blog post, we take a journey through the history of art, from ancient cave paintings to modern masterpieces. Discover the evolution of artistic styles and the stories behind some of the world's most famous works of art.",
    },
  ];

  return (
    <>
      <div>
        <VideoWithFlyInText
          mediaSrc="images/img-blog4.jpg"
          text="Welcome to Our Blog:"
          isVideo={false}
          height={500}
          width="100%"
          textColor="black"
          textSize="3em"
          textPosition="bottom"
          textAlignHorizontal="left"
        />
      </div>
      <div className="blog-content">
        {blogItems.map((item, index) => (
          <BlogPost
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

export default Blog;