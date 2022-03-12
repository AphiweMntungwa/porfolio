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
        <h4 className="p-header">Objective</h4>
        <p className="aboutdet">
          Developing 'learning' as a discipline
          through studying my own learning experiences, then applying
          that discipline optimize efficiency in my future learning.
          <br /> <br />
          My big goal is to write a new system of learning that can
          enable the general population of our country through public schooling
          to become proficient in skills in radically shorter amount of times to
          save resources. This would seek to create a deliberate framework
          to organize schooling and then make sure that framework is taught to all
          students such that they can utilize the framework and can always be aware
          of what they're doing and why it matters.
        </p>
        <ReadButton paragraph={parag} />
      </Box>
    </div>
  );
};

export default about;
