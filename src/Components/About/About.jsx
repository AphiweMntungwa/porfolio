import React from "react";
import "./about.css";
import { boxStyles } from "../Profile/Profile";
import Box from "../BoxComponent/BoxComponent";
import Quote from "./Quote";
import ReadButton from "../Projects/ProjectBox/ReadButton";
import parag from "./paragraphs";

const firstBoxStyles = boxStyles.topBoxStyle;
const parBox = boxStyles.smallBoxStyle;
const about = () => {
  return (
    <div className="about">
      <Box styles={firstBoxStyles}>
        <h4 className="p-header">About Me</h4>
      </Box>
      <Box styles={{ ...firstBoxStyles, top: "131px" }}>
        <Quote />
      </Box>
      <Box styles={{ ...parBox, top: "155px", width: "68vw" }}>
        <h4 className="p-header">Objective</h4>
        <p className="aboutdet">
          Developing 'learning' as a discipline
          through studying my own learning experiences, then applying
          that discipline to become a optimize efficiency in my future learning.
          <br /> <br />
          My big goal is to write a new system of learning that can
          enable the general population of our country through public schooling
          to become proficient in skills in radically shorter amount of times to
          save resources and to overall challenge the traditional timeframes
          that it currently takes to 'formally' develop skills. Instead of 
          questioning the education budget, this would seek to deal with the
          organisation of school and attempt to algorithmically optimize 
          education with the available resources and would question 
          what it means to 'learn', fundamentally.
        </p>
        <ReadButton paragraph={parag} />
      </Box>
    </div>
  );
};

export default about;
