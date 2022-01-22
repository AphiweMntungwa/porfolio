import React, { Component } from "react";
import Box from "../BoxComponent/BoxComponent";
import Header from "./Header";
import ProfileImage from "./ProfileImage";
import Personal from "./Person/Personal";
import "./profile.css";

export const boxStyles = {
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
    top: "131px",
    width: "24vw",
    height: "fit-content",
    padding: "2%",
    border: "2px solid #0e6c68",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

const Profile = () => (
  <div className="profile">
    <Box styles={boxStyles.topBoxStyle}>
      <Header />
    </Box>{" "}
    <Box styles={boxStyles.smallBoxStyle}>
      <ProfileImage />
      <Personal />
    </Box>{" "}
  </div>
);

export default Profile;
