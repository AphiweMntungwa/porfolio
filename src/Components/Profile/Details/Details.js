import React from "react";
import "./details.css";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";
import dyr from "../../../Assets/dyr.gif";

const Details = () => (
  <p className="my-par">
    Welcome to my personal website where you can... see more information about
    me; for whatever reason that may be. I'm a javaScript web developer,
    utilising javaScript libraries and frameworks to implement the client-server 
    model in different architectural styles. That pretty much justifies what you see, 
    this portfolio was made with React.js and is one of my earlier react projects 
    where i still used &nbsp;
    <Tooltip
      html={
        <img
          src={dyr}
          alt="not found"
          style={{ width: "300px", height: "200px" }}
        />
      }
      position="top"
      trigger="click"
      arrow={true}
      distance={5}
    >
      <b
        style={{
          textDecoration: "orangered underline",
          color: "orangered",
          cursor: "pointer",
        }}
      >
        class components.
      </b>
    </Tooltip>
  </p>
);

export default Details;
