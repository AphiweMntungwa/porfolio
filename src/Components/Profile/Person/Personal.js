import React from "react";
import Box from "../../BoxComponent/BoxComponent";
import "./personal.css";

const detailStyles = {
  //   width: "70%",
  position: "relative",
  //   left: "1.5vw",
  //   bottom: "6.2vh",
  //   display: "inline-block",
  border: "border",
  boxShadow: "none",
  textAlign: "center",
};
const Personal = () => {
  return (
    <Box styles={detailStyles}>
      <h4>Aphiwe Mntungwa</h4>
      <span>-Junior Web Developer</span>
      <p>
        I am a junior web developer working mostly with javaScript both on the
        client and server side. I am an efficient learner who can work with new
        technologies and someone who generally applies the concept of problem
        solving as a way to deal with most life challenges.
      </p>
    </Box>
  );
};

export default Personal;
