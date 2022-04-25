import React from "react";
import "./about.css";
import Box from "../BoxComponent/BoxComponent";
import Quote from "./Quote";
import ReadButton from "../Projects/ProjectBox/ReadButton";
import Paragraphs from "./Paragraphs";

const about = () => {
  return (
    <div className="about">
      <Box cname="about-header">
        <h4 className="p-header">About Me</h4>
      </Box>
      <Box cname="about-quote">
        <Quote />
      </Box>
      <Box cname="par-box">
        <div className="aboutdet">
          Welcome to my about page, which, like the rest of my website, is more
          information about things related to me.
          <span>
            <hr />
          </span>
          I like philosophy and ponder over philosophical ideas, I believe in
          the importance of philosophy, not necessarily the study of the
          discipline but the practice of philosophy in personal decision making.
          <span>
            <hr />
          </span>
          My late obsession has been with dissemination of information. Specifically trying
          to define what it means to learn and testing how well that meaning is 
          embodied by education systems and how the systems could be improved.
        </div>
        <ReadButton paragraph={Paragraphs()} />
      </Box>
    </div>
  );
};

export default about;
