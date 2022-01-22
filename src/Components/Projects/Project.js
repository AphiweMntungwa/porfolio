import React, { Component } from "react";
import Box from "../BoxComponent/BoxComponent";
import { boxStyles } from "../Profile/Profile";
import "./project.css";

const projectBoxStyles = boxStyles.topBoxStyle;
const Project = () => (
  <div className="project">
    <Box styles={projectBoxStyles}>
      <h1>projects everyone in happy</h1>
    </Box>
  </div>
);

export default Project;
