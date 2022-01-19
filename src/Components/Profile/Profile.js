import React, { Component } from "react";
import Box from "../BoxComponent/BoxComponent";
import Header from "./Header";

import "./profile.css";

export class Profile extends Component {
  state = {};
  boxStyles = {
    topBoxStyle: {
      position: "fixed",
      left: "19%",
      bottom: "49%",
      width: "70vw",
      height: "40vh",
    },
    smallBoxStyle: {
      position: "relative",
      left: "20%",
      top: "175px",
      width: "59vw",
      height: "35vh",
    },
  };
  render() {
    return (
      <div className="profile">
        <Box styles={this.boxStyles.topBoxStyle}>
          <Header></Header>
        </Box>
        <Box styles={this.boxStyles.smallBoxStyle} />
      </div>
    );
  }
}

export default Profile;
