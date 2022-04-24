import React, { Component } from "react";
import Box from "../BoxComponent/BoxComponent";
import { boxStyles } from "../Profile/Profile";
import ProjectInfo from "./ProjectBox/ProjectInfo";
import snitcher from "../../Assets/snitcher.jpg";
import khalipha from "../../Assets/khalipha.png";

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

const firstP = ` 
  Snitcher is a platform where you can post thoughts and attach resources
  like youtube videos on your posts to make a playlist for your post.`;
const secondP = `This is my static Portfolio app made of React, it does not proxy 
any backend server.`;
const snitReactParag = `This is the react front-end for the restructured snitcher app. The old Snitcher
kept both front and back end on the same server and didn't use react. This new interface is connected 
to the snitcher server which also deployed on heroku on a different server.`;
const snitServer = `This is the Node back-end for the restructured snitcher app. It improves on the old
Smitcher version with new featires like profile images for users, http chat application and a upvoting
and downvoting sytem for both posts and comments on posts`;

const snitcherTech = {
  list: [
    { id: 1, int: "Node.js" },
    { id: 2, int: "RESTful" },
    { id: 3, int: "HTML, CSS & VanillaJs" },
    { id: 4, int: "Bootstrap" },
    { id: 5, int: "AJAX" },
    { id: 6, int: "M-V-C pattern" },
    { id: 7, int: "Moongoose" },
  ],
  title: "Technical Features",
};
const portfolioTech = {
  list: [
    { id: 1, int: "React Application" },
    { id: 2, int: "HTML" },
    { id: 3, int: "CSS" },
    { id: 4, int: "Fetch API" },
  ],
  title: "Technical Features",
};
const snitReactTech = {
  list: [
    { id: 1, int: "ReactJS" },
    { id: 2, int: "HTML" },
    { id: 3, int: "CSS" },
    { id: 4, int: "Axios" },
    { id: 5, int: "Bootstrap" },
  ],
  title: "Technical Features",
};
const snitBackTech = {
  list: [
    { id: 1, int: "NodeJS" },
    { id: 2, int: "MongoDB" },
    { id: 3, int: "ExpressJs" },
    { id: 4, int: "Axios" },
    { id: 5, int: "Cloudinary" },
  ],
  title: "Technical Features",
};

const snitParag = (
  <p className="snit-parag">
    Snitcher was my first foray into full stack web development. It was an
    attempt to make a dynamic social network and it is without a javaScript
    framework like React which made it painful to update the UI imperatively
    based on user interaction. In the future i hope to make a React UI to proxy
    Snitcher's backend.
  </p>
);

const portfParag = (
  <p className="portf-parag">
    I plan to build a server for my portfolio for more functionality if the need
    arises.
  </p>
);
const snitcherReact = (
  <p className="snitcherParaReact">
    Both servers are deployed in heroku servers.
  </p>
);
const snitServerParag = (
  <p className="snitServerParag">Snitcher back end server deployed on heroku</p>
);

const Project = () => (
  <div className="project">
    <Box cname="header-projects">
      <h4 className="p-header">Projects</h4>
    </Box>
    <Box cname="flex">
      <Box cname="khalipha">
        <ProjectInfo
        img={khalipha}
          title="Khalipha"
          ptag={firstP}
          href={"https://khalipha.herokuapp.com/"}
          text=""
          styleprop={snitcherTech}
          paragraph={snitParag}
          github="https://github.com/AphiweMntungwa/Snitcher"
        />
      </Box>
      <Box cname="snitcherReact">
        <ProjectInfo
          title="Snitcher"
          ptag={snitReactParag}
          href="https://snitcher-server.herokuapp.com"
          text=""
          styleprop={snitReactTech}
          paragraph={snitcherReact}
          github="https://github.com/AphiweMntungwa/snitcherReact"
        />
      </Box>
      <Box cname="portfolio-app">
        <ProjectInfo
          title="Porfolio"
          ptag={secondP}
          href=""
          text=""
          styleprop={portfolioTech}
          paragraph={portfParag}
          github="https://github.com/AphiweMntungwa/porfolio"
        />
      </Box>

      <Box cname="snitcher-app">
        <ProjectInfo
          img={snitcher}
          title="Deprecated Snitcher"
          ptag={firstP}
          href={"https://snitcherapp.herokuapp.com/"}
          text=""
          styleprop={snitcherTech}
          paragraph={snitParag}
          github="https://github.com/AphiweMntungwa/Snitcher"
        />
      </Box>

      <Box cname="snitcher-server">
        <ProjectInfo
          title="Snitcher Backend Server"
          ptag={snitServer}
          href=""
          text=""
          styleprop={snitBackTech}
          paragraph={snitServerParag}
          github="https://github.com/AphiweMntungwa/Snitcher"
        />
      </Box>
    </Box>
  </div>
);

export default Project;
