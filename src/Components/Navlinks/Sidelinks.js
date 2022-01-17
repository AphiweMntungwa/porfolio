import React from "react";
import "./sidelinks.css";

const Sidelinks = ({ link, iconClass, sideIcon }) => (
  <div className={sideIcon}>
    <span className="link">{link}</span>
    <i className={iconClass}></i>
  </div>
);

export default Sidelinks;
