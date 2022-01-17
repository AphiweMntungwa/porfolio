import React from "react";
import "./navbar.css";
import Sidelinks from "../Navlinks/Sidelinks";

function Navbar() {
  return (
    <nav>
      <Sidelinks link="Profile" iconClass='far fa-user-circle' sideIcon='side-icon'/>
      <Sidelinks link="" iconClass='' sideIcon='null side-icon'/>
      <Sidelinks link="About" iconClass='fas fa-arrow-circle-right' sideIcon='side-icon'/>
      <Sidelinks link="Projects" iconClass='fas fa-tasks' sideIcon='side-icon'/>
      <Sidelinks link="Blog" iconClass='fas fa-pencil-alt' sideIcon='side-icon'/>
    </nav>
  );
}

export default Navbar;
