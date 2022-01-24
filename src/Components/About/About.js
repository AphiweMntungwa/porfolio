import React from "react";
import "./about.css";
import { boxStyles } from "../Profile/Profile";
import Box from "../BoxComponent/BoxComponent";
import Quote from "./Quote";
import ReadButton from "../Projects/ProjectBox/ReadButton";

const firstBoxStyles = boxStyles.topBoxStyle;
const parBox = boxStyles.smallBoxStyle;
const parag = `The idea is to make separate learning as the most important module or
subject`;
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
          Pondering over 'learning' as a discipline and developing that
          discipline through studying my own learning experiences, then applying
          that discipline to become a increasingly efficient learner.
          <br /> <br />
          My big goal is to write an efficient system of learning that can
          enable the general population of our country through public schooling
          to become proficient in skills in radically shorter amount of times to
          save resources and to overall challenge the traditional timeframes
          that it currently takes to 'formally' develop skills. I plan to
          achieve this by separating 'Learning How to Learn' as a module or
          subject of it's own because no one can ever teach you everything,
          which is why learning how to learn makes sense.
        </p>
        <ReadButton paragraph={parag} />
      </Box>
    </div>
  );
};

export default about;
