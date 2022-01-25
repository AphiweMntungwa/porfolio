import React from "react";
import Box from "./Components/BoxComponent/BoxComponent";

const socialIconStyles = {
  position: "relative",
  bottom: "3vh",
  left: "20vw",
  width: "68vw",
  height: "80px",
};
const Footer = () => (
  <span
    className="socialIcon"
    style={{ width: "fit-content", height: "fit-content" }}
  >
    <Box
      styles={{
        ...socialIconStyles,
        textAlign: "center",
        boxShadow: "none",
        border: "none",
        position: " sticky",
        marginTop: "-92vh",
        left: "91vw",
        width: " 2vw",
        height: "20vh",
        textAlign: " center",
        boxShadow: "none",
        border: "none",
      }}
    >
      <a href="https://github.com/AphiweMntungwa">
        <i className="fab fa-github"></i>&nbsp;&nbsp;
      </a>
      <a href="mailto:aphiwemntungwa66@gmail.com">
        <i className="fas fa-envelope"></i> &nbsp;&nbsp;
      </a>
      <a href="https://www.linkedin.com/in/aphiwe-mntungwa-a0b412218/">
        <i className="fab fa-linkedin"></i> &nbsp;&nbsp;
      </a>
      <a href="tel:060-775-9253">
        <i className="fas fa-address-book"></i> &nbsp;&nbsp;
      </a>
      <a href="https://web.facebook.com/aphiwe.mntungwa/">
        <i className="fab fa-facebook"></i>
      </a>
    </Box>
  </span>
);

export default Footer;
