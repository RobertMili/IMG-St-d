import React, { useState } from "react";
import "./News.css";
import VideoWithFlyInText from "../VideoWithFlyInText";
import { Button } from "../Button";

const NewsItem = ({ item, index, expanded, toggleContentVisibility, handleEdit, handleRemove, isAdmin }) => (
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
    {isAdmin && (
      <>
        <Button
          onClick={() => handleEdit(index)}
          buttonStyle="btn--outline"
          buttonSize="btn--small"
        >
          Edit
        </Button>
        <Button
          onClick={() => handleRemove(index)}
          buttonStyle="btn--outline"
          buttonSize="btn--small"
        >
          Remove
        </Button>
      </>
    )}
  </article>
);

const News = ({ isAdmin }) => {
  const [expanded, setExpanded] = useState({});
  const [newsItems, setNewsItems] = useState([
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
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPostIndex, setCurrentPostIndex] = useState(null);
  const [editContent, setEditContent] = useState({ title: "", content: "" });
  const [newPost, setNewPost] = useState({ title: "", content: "" });

  const toggleContentVisibility = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleEdit = (index) => {
    setIsEditing(true);
    setCurrentPostIndex(index);
    setEditContent(newsItems[index]);
  };

  const handleRemove = (index) => {
    const updatedPosts = newsItems.filter((_, i) => i !== index);
    setNewsItems(updatedPosts);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (isEditing) {
      setEditContent({ ...editContent, [name]: value });
    } else {
      setNewPost({ ...newPost, [name]: value });
    }
  };

  const handleUpdatePost = () => {
    const updatedPosts = newsItems.map((post, index) =>
      index === currentPostIndex ? editContent : post
    );
    setNewsItems(updatedPosts);
    setIsEditing(false);
    setEditContent({ title: "", content: "" });
    setCurrentPostIndex(null);
  };

  const handleAddPost = () => {
    setNewsItems([newPost, ...newsItems]);
    setNewPost({ title: "", content: "" });
  };

  return (
    <>
      <div>
        <VideoWithFlyInText
          mediaSrc="images/img-news5.jpg"
          text="Breaking News"
          isVideo={false}
          height={400}
          width="100%"
          textSize="3em"
          textPosition="center"
          textAlignHorizontal="left"
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
            handleEdit={handleEdit}
            handleRemove={handleRemove}
            isAdmin={isAdmin}
          />
        ))}
      </div>
      {isAdmin && (
        <>
          {isEditing ? (
            <div className="edit-form">
              <h2>Edit News</h2>
              <input
                type="text"
                name="title"
                value={editContent.title}
                onChange={handleInputChange}
                placeholder="Title"
              />
              <textarea
                name="content"
                value={editContent.content}
                onChange={handleInputChange}
                placeholder="Content"
              />
              <Button onClick={handleUpdatePost} buttonStyle="btn--primary" buttonSize="btn--medium">
                Update News
              </Button>
            </div>
          ) : (
            <div className="edit-form">
              <h2>Add New News</h2>
              <input
                type="text"
                name="title"
                value={newPost.title}
                onChange={handleInputChange}
                placeholder="Title"
              />
              <textarea
                name="content"
                value={newPost.content}
                onChange={handleInputChange}
                placeholder="Content"
              />
              <Button onClick={handleAddPost} buttonStyle="btn--primary" buttonSize="btn--medium">
                Add News
              </Button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default News;