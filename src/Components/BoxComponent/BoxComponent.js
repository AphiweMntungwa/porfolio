import React from "react";
import "./box-component.css";

const Box = ({ styles, children }) => (
  <div className="box" style={styles}>
    {children}
  </div>
);

export default Box;
