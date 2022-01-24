import React from "react";
import "./about.css";
import { boxStyles } from "../Profile/Profile";
import Box from "../BoxComponent/BoxComponent";
import Quote from "./Quote";

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
          Treating learning as a discipline and developing that discipline
          through studying my own experience, applying that discipline and
          becoming a radically efficient learner; I hope one day i can help
          apply that discipline on a wide scale like public schooling to help
          the general population develop tech skills in radically shorter times
          to save rescources.
        </p>
      </Box>
    </div>
  );
};

export default about;
