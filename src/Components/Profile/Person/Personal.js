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
    { id: 2, int: "Philosophy" },
    { id: 3, int: "Graphic Editing" },
    { id: 4, int: "Learning" },
    { id: 5, int: "Teaching" },
  ],
    title: "interests",
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
