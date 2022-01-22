import React from "react";
import "./sidelinks.css";
import { Route, Link } from "react-router-dom";

const Sidelinks = ({ pathName, link, iconClass, sideIcon }) => (
    <Link to={{ pathname: pathName }}>
      <div className={sideIcon}>
        <span className="link">{link}</span>
        <i className={iconClass}></i>
      </div>
    </Link>
);

export default Sidelinks;
