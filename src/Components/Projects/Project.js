import React, { Component } from "react";
import Box from "../BoxComponent/BoxComponent";
import { boxStyles } from "../Profile/Profile";
import ProjectInfo from "./ProjectBox/ProjectInfo";
import snitcher from "../../Assets/snitcher.jpg";

import "./project.css";

const { topBoxStyle, smallBoxStyle } = boxStyles;
const customBox = {
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  left: "26%",
  top: "131px",
  minHeight: "22%",
  height: "fit-content",
  padding: "1.2%",
  boxShadow: "none",
  border: "none",
};

const projectBox = {
  ...smallBoxStyle,
  left: 0,
  top: 0,
  padding: ".5%",
  textAlign: "center",
  boxShadow: "none",
};
const firstP = ` 
  Snitcher is a platform where you can post thoughts and attach resources
  like youtube videos on your posts to make a playlist for your post.{" "}`;
const secondP = `This is my static Portfolio app made of React, it does not proxy 
any backend server`;

const snitcherTech = {
  list: [
    { id: 1, int: "expressJs" },
    { id: 2, int: "RESTful" },
    { id: 3, int: "HTML, CSS & VanillaJs" },
    { id: 4, int: "Ajax" },
    { id: 5, int: "M-V-C pattern" },
    { id: 6, int: "Moongoose" },
  ],
  title: "Technical Features",
};
const portfolioTech = {
  list: [
    { id: 1, int: "React Application" },
    { id: 2, int: "HTML CSS" },
    { id: 3, int: "Fetch API" },
  ],
  title: "Technical Features",
};

const snitParag = (
  <p>
    Snitcher was my first foray into full stack web development. It was an
    attempt to make a dynamic social network and it is without a js framework
    like React which made it painful to manipulate the UI. In the future i hope
    to make a React UI to proxy Snitcher's backend.
  </p>
);

const portfParag = (
  <p>
    I plan to build a server for my portfolio for more functionality if need be.
  </p>
)

const Project = () => (
  <div className="project">
    <Box styles={topBoxStyle}>
      <h4 className="p-header">Projects</h4>
    </Box>
    <Box styles={customBox}>
      <Box styles={projectBox}>
        <ProjectInfo
          img={snitcher}
          title="Snitcher"
          ptag={firstP}
          href={"https://whispering-hamlet-11552.herokuapp.com/"}
          text="Try it now!"
          styleprop={snitcherTech}
          paragraph={snitParag}
        />
      </Box>
      <Box styles={projectBox}>
        <ProjectInfo
          // img={snitcher}
          title="Porfolio"
          ptag={secondP}
          // href={"https://whispering-hamlet-11552.herokuapp.com/"}
          styleprop={portfolioTech}
          paragraph={portfParag}
        />
      </Box>
    </Box>
  </div>
);

export default Project;
