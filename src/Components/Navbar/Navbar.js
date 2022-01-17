import React from "react";
import "./navbar.css";
import Sidelinks from "../Navlinks/Sidelinks";

const Navbar = () => (
  <nav>
    <Sidelinks
      link="Profile"
      iconClass="far fa-user-circle"
      sideIcon="side-icon"
    />
    <Sidelinks link="" iconClass="" sideIcon="null side-icon" />
    <Sidelinks
      link="About"
      iconClass="fas fa-globe-africa"
      sideIcon="side-icon"
    />
    <Sidelinks link="Projects" iconClass="fas fa-tasks" sideIcon="side-icon" />
    <Sidelinks link="Blog" iconClass="fas fa-pencil-alt" sideIcon="side-icon" />
  </nav>
);

export default Navbar;
