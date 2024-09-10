import React, { useState } from "react";
import "./News.css";
import VideoWithFlyInText from "../../VideoWithFlyingInText/VideoWithFlyInText";
import { Button } from "../../Button/Button";

const Blog = ({ isAdmin }) => {
  const [expanded, setExpanded] = useState({});
  const [blogItems, setBlogItems] = useState([
    {
      title: "Välkommen till Brf Stjärnbildsgatan!",
      content:
        "Brf Stjärnbildshus nr 1 registrerades 1984 och innehåller nu 89 lägenheter med bostadsrätt. Fastigheterna började bebyggas 1967 som flervåningshus men gjordes om 1987 till bostadsrätter med radhuskaraktär och utgörs av fyra flerbostadshus med total lägenhetsyta på 8257 kvm.",
    },
    {
      title: "Renoveringar och Förbättringar i Brf Stjärnbildsgatan",
      content:
        "Brf Stjärnbildshus har genomfört flera renoveringar för att förbättra boendemiljön. 2011 byttes balkongdörrar och fönster till moderna 2-glas. 2013 utfördes värmejusteringar och våtrumsbesiktningar. 2014 byttes ventilationen ut och stammarna inspekterades. 2017 rustades lekplatserna upp och OVK genomfördes. 2018 lades taken om. Föreningen följer en underhållsplan som sträcker sig till 2043.",
    },
    {
      title: "Ekonomisk Förvaltning och Avgifter",
      content:
        "Den ekonomiska förvaltningen sköts av SBC och föreningen har god ekonomi. Månadsavgiften inkluderar värme, vatten, grundutbud på kabel-TV, bredbandsuppkoppling, bostadsrättstillägg på hemförsäkringen och i de flesta fall även en garageplats. Inga planerade avgiftshöjningar för 2021 finns.",
    },
    {
      title: "TV och Internet i Brf Stjärnbildsgatan",
      content:
        "Kabel-TV levereras via ComHem och grundutbudet av kanaler ingår i månadsavgiften. Även bredbandsuppkopplingen ingår i månadsavgiften och levereras via ComHem.",
    },
    {
      title: "Parkering och Gemensamma Utrymmen",
      content:
        "De flesta lägenheter har en garageplats. Det finns även parkeringsplatser att hyra för 225 kr/månad. Till varje lägenhet hör ett förråd och ett källarförråd. Det finns möjlighet att hyra extra förrådsutrymme. Husen omgärdas av grönskande gårdar med lekplatser, och det finns skola och daghem mitt i området.",
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
          mediaSrc="images/img-news5.jpg"
          isVideo={false}
          height={500}
          width="100%"
          textColor="black"
          textSize="3rem"
          textPosition="bottom"
          textAlignHorizontal="left"
        />
      </div>
      <div className="blog-content">
        {blogItems.map((item, index) => (
          <article key={index} className="blog-item">
            <h4 className="blog-post-title">{item.title}</h4>
            <p className={expanded[index] ? "expanded" : "collapsed"}>
              {item.content}
            </p>
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
              <Button
                onClick={handleUpdatePost}
                buttonStyle="btn--primary"
                buttonSize="btn--medium"
              >
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
              <Button
                onClick={handleAddPost}
                buttonStyle="btn--primary"
                buttonSize="btn--medium"
              >
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
