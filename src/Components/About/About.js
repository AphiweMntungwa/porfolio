import React from "react";
import "./about.css";
import { boxStyles } from "../Profile/Profile";
import Box from "../BoxComponent/BoxComponent";

const firstBoxStyles = boxStyles.topBoxStyle
const about = () => {
  return (<div className="about">
      <Box styles={firstBoxStyles}>
        <p>
            Tis what is is.
        </p>
      </Box>
  </div>)
};

export default about;
