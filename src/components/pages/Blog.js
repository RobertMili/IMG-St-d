import React, { useState } from "react";
import "./Blog.css";
import VideoWithFlyInText from "../VideoWithFlyInText";
import { Button } from "../Button";

const BlogPost = ({ item, index, expanded, toggleContentVisibility, handleEdit, handleRemove, isAdmin }) => (
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

const Blog = () => {
  const [expanded, setExpanded] = useState({});
  const [blogItems, setBlogItems] = useState([
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
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPostIndex, setCurrentPostIndex] = useState(null);
  const [editContent, setEditContent] = useState({ title: "", content: "" });
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [isAdmin, setIsAdmin] = useState(false); 

  const toggleContentVisibility = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleEdit = (index) => {
    setIsEditing(true);
    setCurrentPostIndex(index);
    setEditContent(blogItems[index]);
  };

  const handleRemove = (index) => {
    const updatedPosts = blogItems.filter((_, i) => i !== index);
    setBlogItems(updatedPosts);
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
    const updatedPosts = blogItems.map((post, index) =>
      index === currentPostIndex ? editContent : post
    );
    setBlogItems(updatedPosts);
    setIsEditing(false);
    setEditContent({ title: "", content: "" });
    setCurrentPostIndex(null);
  };

  const handleAddPost = () => {
    setBlogItems([newPost, ...blogItems]);
    setNewPost({ title: "", content: "" });
  };

  return (
    <>
      <div>
        <VideoWithFlyInText
          mediaSrc="images/img-blog5.jpg"
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
              <h2>Edit Post</h2>
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
                Update Post
              </Button>
            </div>
          ) : (
            <div className="edit-form">
              <h2>Add New Post</h2>
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
                Add Post
              </Button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Blog;