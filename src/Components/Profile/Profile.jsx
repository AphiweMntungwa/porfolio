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

const socialLinks = [
  { link: "https://github.com/AphiweMntungwa", name: "github" },
  {
    link: "https://www.linkedin.com/in/aphiwe-mntungwa-a0b412218/",
    name: "linkedin",
  },
  { link: "https://facebook.com/AphiweMntungwa", name: "facebook" },
  { link: "tel:0765881859", name: "phone", noLogo: true },
  { link: "mailto:aphiwemntungwa66@gmail.com", name: "gmail" },
];

const Profile = () => (
  <div className="profile">
    <div className="fix-content">
      <div className="d-flex">
        <Box cname="profile-box">
          <Tooltip
            html={
              <h5 style={{ color: "wheat", fontFamily: "Poppins" }}>
                adult human male, age:22
              </h5>
            }
            position="left"
            trigger="mouseenter"
            arrow={true}
            distance={5}
          >
            <ProfileImage />
          </Tooltip>
          <Contacts socialLinks={socialLinks} />
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
