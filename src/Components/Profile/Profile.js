import React, { Component } from "react";
import Box from "../BoxComponent/BoxComponent";
import Header from "./Header";
import ProfileImage from "./ProfileImage";
import Personal from "./Person/Personal";

import "./profile.css";

export class Profile extends Component {
  state = {};
  boxStyles = {
    topBoxStyle: {
      position: "relative",
      left: "26%",
      top: "5%",
      width: "70vw",
      height: "fit-content",
      // borderRadius: "3em",
      boxShadow: "none",
      border: "2px solid black",
    },
    smallBoxStyle: {
      position: "relative",
      left: "26%",
      top: "151px",
      width: "67vw",
      height: "fit-content",
      padding: "2%",
      border: "2px solid #0e6c68",
    },
  };
  render() {
    return (
      <div className="profile">
        <Box styles={this.boxStyles.topBoxStyle}>
          <Header />
        </Box>
        <Box styles={this.boxStyles.smallBoxStyle}>
          <ProfileImage />
          <Personal />
        </Box>
      </div>
    );
  }
}

export default Profile;
