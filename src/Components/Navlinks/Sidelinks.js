import React from "react";
import "./sidelinks.css";

const Sidelinks = ({ link, iconClass }) => (
  <div className="side-icon">
    <span className="link">{link}</span>
    <i className={iconClass}></i>
  </div>
);

export default Sidelinks;
