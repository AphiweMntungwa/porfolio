import React from "react";
import Box from "../../BoxComponent/BoxComponent";
import List from "./List";
import "./personal.css";

const detailStyles = {
  position: "relative",
  border: "none",
  boxShadow: "none",
  textAlign: "center",
  paddingTop: "unset",
};
const styleprop = {
  list: [
    { id: 1, int: "Programming" },
    { id: 2, int: "JavaScript" },
    { id: 3, int: "React.js" },
    { id: 4, int: "Node.js " },
    { id: 5, int: "MongoDB" },
    { id: 6, int: "HTML CSS" },
    { id: 7, int: "Git & NPM" },
    { id: 8, int: "Learning" },
    { id: 9, int: "Philosophy" },
    { id: 10, int: "Problem Solving" },
  ],
  title: "Interests",
};

const Personal = () => {
  return (
    <Box styles={detailStyles}>
      <h4 className="name"> Aphiwe Mntungwa </h4>
      <span className="title"> -Junior Web Developer </span>
      <List styleprop={styleprop} />
    </Box>
  );
};

export default Personal;
