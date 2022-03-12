import React from "react";
import Box from "../../BoxComponent/BoxComponent";
import List from "../../Profile/Person/List";
import ReadButton from "./ReadButton";
import "./projectinfo.css";

const iconBox = {
  width: "100%",
  boxShadow: "none",
};

const ProjectInfo = ({
  img,
  title,
  ptag,
  href,
  styleprop,
  text,
  paragraph,
  github,
}) => (
  <div className="projectinfo">
    <img className="app-image" src={img} alt="" />
    <h4> {title} </h4>
    <p className="snitcherinfo">
      {ptag}
      <a className="snitcher" href={href}>
        {text}
        <i
          className="fas fa-external-link-alt"
          style={{ fontSize: "1.1em" }}
          aria-hidden="true"
        ></i>
      </a> 
      &nbsp;
      <a className="github" href={github}>
        {text}
        <i
          className="fab fa-github"
          style={{ fontSize: "1.1em" }}
          aria-hidden="true"
        ></i>
      </a>
    </p>
    <Box styles={iconBox}>
      <List styleprop={styleprop} />
    </Box>
    <ReadButton paragraph={paragraph} />
  </div>
);

export default ProjectInfo;
