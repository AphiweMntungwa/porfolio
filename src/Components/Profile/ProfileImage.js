import React from "react";
import aphiweMntungwa from "../../Assets/aphiwe-mntungwa.png";
import Box from "../BoxComponent/BoxComponent";
import "./profile-image.css";

const style = {
  position: "relative",
  //   left: "19%",
  //   bottom: "49%",
  width: "14em",
  height: "35vh",
  borderRadius: "50%",
  // display: "inline-block"
};

const ProfileImage = () => {
  return (
    <Box styles={style}>
      <img
        src={aphiweMntungwa}
        style={{ width: "100%", height: "100%", borderRadius:"inherit", opacity:"0"}}
        alt=""
      />
    </Box>
  );
};

export default ProfileImage;
