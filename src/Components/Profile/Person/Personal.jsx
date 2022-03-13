import React from "react";
import Box from "../../BoxComponent/BoxComponent";
import List from "./List";
import "./personal.css";

const detailStyles = {
  position: "relative",
  border: "none",
  boxShadow: "none",
  textAlign: "center",
};
const styleprop = {
  list: [
    { id: 1, int: "Programming" },
    { id: 2, int: "JavaScript" },
    { id: 3, int: "Web Design" },
    { id: 4, int: " ReactJs" },
    { id: 5, int: "NodeJs" },
    { id: 6, int: "Graphic Editing" },
    { id: 7, int: "Learning" },
    { id: 8, int: "Philosophy" },
    { id: 9, int: " Teaching" },
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
