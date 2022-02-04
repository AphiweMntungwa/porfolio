import React from "react";
import Box from "../BoxComponent/BoxComponent";
import Header from "./Header";
import ProfileImage from "./ProfileImage";
import Personal from "./Person/Personal";
import Details from "./Details/Details";
import "./profile.css";

export const boxStyles = {
  topBoxStyle: {
    position: "relative",
    left: "26%",
    top: "5%",
    width: "70vw",
    height: "fit-content",
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
    <div className="fix-content">
      <Header cname="prof-header" />
      <div className="d-flex">
        <Box cname="profile-box">
          <ProfileImage />
          <Personal />
        </Box>
        <Box cname="details-box">
          <Details />
        </Box>
      </div>
    </div>
  </div>
);

export default Profile;
