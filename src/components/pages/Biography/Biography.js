import React from "react";
import "../../../App.css";
import "./Biography.css";
import Cards from "../../Card/Cards";
import VideoWithFlyInText from "../../VideoWithFlyingInText/VideoWithFlyInText";

export default function Biography() {
  return (
    <>
      <div className="biography">
        <VideoWithFlyInText
          mediaSrc="/videos/video-3.mp4"
          text="Biography"
          isVideo={true}
          width="100%"
          height="100%"
          textSize="3rem"
          textPosition="top"
          textAlignHorizontal="left"
        />
        <div className="biography-content">
          <h1>
            <span className="fly-in">Biography of Carl-Joar Karlsson</span>
          </h1>
          <p>
            Carl-Joar Karlsson is a renowned musician, guitarist, and
            guitar-tech known for his exceptional talent and dedication to the
            art of music. Born and raised in a small town, Carl-Joar discovered
            his passion for music at a young age. He began playing the guitar
            when he was just eight years old and quickly developed a deep love
            for the instrument.
          </p>
          <p>
            Over the years, Carl-Joar honed his skills and became proficient in
            various genres of music, including rock, blues, and jazz. His unique
            style and ability to blend different musical influences have earned
            him a loyal following of fans and admirers. Carl-Joar has performed
            at numerous venues and events, captivating audiences with his
            electrifying performances and soulful melodies.
          </p>
          <p>
            In addition to his career as a musician, Carl-Joar is also a skilled
            guitar technician. He has worked with some of the biggest names in
            the music industry, providing expert guitar maintenance and repair
            services. His attention to detail and commitment to excellence have
            made him a sought-after professional in the field.
          </p>
          <p>
            Carl-Joar continues to inspire and influence aspiring musicians with
            his passion for music and dedication to his craft. Whether he is on
            stage performing or behind the scenes working on guitars,
            Carl-Joar's love for music shines through in everything he does.
          </p>
        </div>
      </div>
      <Cards />
    </>
  );
}
