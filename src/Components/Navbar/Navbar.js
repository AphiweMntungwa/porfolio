import React from "react";
import "./navbar.css";
import Sidelinks from "../Navlinks/Sidelinks";

function Navbar() {
  return (
    <nav>
      <Sidelinks link="Aphiwe Mntungwa" iconClass='fas fa-arrow-circle-right'/>
      <Sidelinks link="About" iconClass='far fa-user-circle'/>
      <Sidelinks link="Projects" iconClass='fas fa-tasks'/>
      <Sidelinks link="Blog" iconClass='fas fa-pencil-alt'/>
    </nav>
  );
}

export default Navbar;
