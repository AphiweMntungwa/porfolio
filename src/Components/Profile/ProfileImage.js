import React from "react";
import aphiweMntungwa from "../../Assets/aphiwe-mntungwa.jpg";
import Box from "../BoxComponent/BoxComponent";

const style = {
  position: "relative",
  width: "11em",
  height: "11em",
  padding: ".2%",
  border: ".5px solid rgb(244 249 249)",
  borderRadius: "50%",
};

const ProfileImage = () => {
  return (
    <Box styles={style}>
      <img
        src={aphiweMntungwa}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "inherit",
        }}
        alt=""
      />
    </Box>
  );
};

export default ProfileImage;
