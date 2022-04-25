import React from "react";
import "./about.css";
import Box from "../BoxComponent/BoxComponent";
import Quote from "./Quote";
import ReadButton from "../Projects/ProjectBox/ReadButton";
import parag from "./paragraphs";

const about = () => {
  return (
    <div className="about">
      <Box cname='about-header'>
        <h4 className="p-header">About Me</h4>
      </Box>
      <Box cname='about-quote'>
        <Quote />
      </Box>
      <Box cname='par-box'>
        <p className="aboutdet">
          Developing 'learning' as a discipline
          through studying my own learning experiences, then applying
          that discipline optimize efficiency in my future learning.  
        </p>
        <ReadButton paragraph={parag} />
      </Box>
    </div>
  );
};

export default about;
