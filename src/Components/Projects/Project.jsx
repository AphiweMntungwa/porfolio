import React, { Component } from "react";
import Box from "../BoxComponent/BoxComponent";
import { boxStyles } from "../Profile/Profile";
import ProjectInfo from "./ProjectBox/ProjectInfo";
import snitcher from "../../Assets/snitcher.jpg";
import khalipha from "../../Assets/khalipha.png";
import morabaraba from "../../Assets/morabaraba.png";

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

const khaliphaPar = `khalipha is a prototype for a data visualisation platform for 
countries and their constituencies. It utilises chart.js for data visualisation, Redux 
for state management and has easily reusable React components.`;
const firstP = ` 
  Snitcher is a platform where you can post thoughts and attach resources
  like youtube videos on your posts to make a playlist for your post.`;
const secondP = `This is my static Portfolio app made of React, it does not proxy 
any backend server.`;
const mlabalabaPar = `Morabaraba is an ancient board game. It is a traditional African game, 
but people all over the world play it. Herders developed morabaraba centuries ago. 
It probably developed from an ancient Egyptian game. That game was called mancala. 
A morabaraba board that is 800 years old was found in Mapungubwe, South Africa.`;
const snitReactParag = `Snitcher is a social platform where you can attach youTube Playlits
to your posts,`;

const title = "Technical Features";
const snitcherTech = {
  list: [
    { id: 1, int: "Node.js" },
    { id: 2, int: "RESTful" },
    { id: 3, int: "HTML, CSS & VanillaJs" },
    { id: 4, int: "Bootstrap" },
    { id: 5, int: "AJAX" },
    { id: 6, int: "M-V-C pattern" },
    { id: 7, int: "Moongoose" },
    { id: 8, int: "Responsive" },
  ],
  title,
};
const portfolioTech = {
  list: [
    { id: 1, int: "React Application" },
    { id: 2, int: "HTML" },
    { id: 3, int: "CSS" },
    { id: 4, int: "Fetch API" },
    { id: 5, int: "Responsive" },
  ],
  title,
};
const khalTech = {
  list: [
    { id: 1, int: "React" },
    { id: 2, int: "Redux" },
    { id: 3, int: "Chart.js" },
    { id: 4, int: "Axios" },
    { id: 5, int: "Bootstrap" },
    { id: 6, int: "REST" },
    { id: 7, int: "Express & Mongo" },
    { id: 8, int: "Responsive" },
  ],
  title,
};
const snitReactTech = {
  list: [
    { id: 1, int: "React" },
    { id: 2, int: "Redux" },
    { id: 3, int: "SCSS" },
    { id: 4, int: "Bootstrap" },
    { id: 5, int: "Ajax" },
    { id: 7, int: "Responsive" },
    { id: 8, int: "Express" },
    { id: 9, int: "MongoDB" },
    { id: 10, int: "Express" },
    { id: 11, int: "Cloudinary" },
  ],
  title,
};
const mlabaTech = {
  list: [
    { id: 1, int: "React" },
    { id: 2, int: "Redux" },
    { id: 3, int: "SVG" },
    { id: 4, int: "OOP" },
    { id: 5, int: "SCSS" },
    { id: 6, int: "Bootstrap" },
    { id: 7, int: "Responsive" },
  ],
  title,
};

const khal = (
  <p>
    It also utilises and express server and a mongoDB database, Mongoose data
    modelling is also easily scalable to cater for large amounts of data.
  </p>
);
const snitParag = (
  <p className="snit-parag">why are you still here? go home.</p>
);

const portfParag = (
  <p className="portf-parag">
    Updating this app means writing class components.
  </p>
);
const snitcherReact = (
  <p className="snitcherParaReact">
    Feautures profile pictures and http chat messaging.
  </p>
);
const mlabalabaParag = (
  <p className="mlabalabaParag">
    Game uses SVG for display of board and movements across the board.
  </p>
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
          ptag={khaliphaPar}
          href={"https://khalipha.herokuapp.com/"}
          text=""
          styleprop={khalTech}
          paragraph={khal}
          github="https://github.com/AphiweMntungwa/khalipha"
        />
      </Box>
      <Box cname="mlabalaba">
        <ProjectInfo
          img={morabaraba}
          title="Mlabalaba"
          ptag={mlabalabaPar}
          href={"https://mlabalaba.co.za"}
          text=""
          styleprop={mlabaTech}
          paragraph={mlabalabaParag}
          github="https://github.com/AphiweMntungwa/mlabalaba"
        />
      </Box>
      <Box cname="snitcherReact">
        <ProjectInfo
          title="Snitcher"
          ptag={snitReactParag}
          href={"https://snitcherapp.herokuapp.com/"}
          text=""
          styleprop={snitReactTech}
          paragraph={snitcherReact}
          github="https://github.com/AphiweMntungwa/Snitcher"
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
          href="https://snitcher-server.herokuapp.com"
          text=""
          styleprop={snitcherTech}
          paragraph={snitParag}
          github="https://github.com/AphiweMntungwa/snitcherReact"
        />
      </Box>
    </Box>
  </div>
);

export default Project;
