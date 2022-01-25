import React from "react";
import "./box-component.css";

const Box = ({ styles, children, cname }) => (
  <div className={"box" +'', cname} style={styles}>
    {children}
  </div>
);

export default Box;
