import React from "react";
import Box from "../BoxComponent/BoxComponent";
import Header from "./Header";
import ProfileImage from "./ProfileImage";
import Personal from "./Person/Personal";
import Contacts from "../Contacts/Contacts";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";
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
      <div className="d-flex">
        <Box cname="profile-box">
          <Tooltip
            html={
              <h4 style={{ color: "wheat", fontFamily: "Poppins" }}>
                It was a G.I jane joke!
              </h4>
            }
            position="left"
            trigger="mouseenter"
          >
            <ProfileImage />
          </Tooltip>
          <Contacts />
          <Personal />
        </Box>
        <Box cname="details-box">
          <Header cname="details-header" />
        </Box>
      </div>
    </div>
  </div>
);

export default Profile;
