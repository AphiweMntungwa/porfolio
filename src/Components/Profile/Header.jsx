import React, { Component } from "react";
import "./header.css";
import Details from "./Details/Details";


function Header({cname}) {
  return (
    <div className={`${cname}`}>
      <Details />
    </div>
  )
}

export default Header