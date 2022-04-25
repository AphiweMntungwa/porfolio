import React, { Component } from "react";
import aphiwe from "../../Assets/aphiwe-mntungwa.jpg";
import aphiweM from "../../Assets/aps.jpg";
import aphiweMn from "../../Assets/newimage.jpg";
import aphiweMnt from "../../Assets/aphiweMntungwa.jpg";
import aphiweMntu from "../../Assets/sphelele.jpg";
import Box from "../BoxComponent/BoxComponent";

const style = {
  position: "relative",
  width: "11em",
  height: "11em",
  padding: ".2%",
  border: "0.5px solid rgb(2 44 44)",
  borderRadius: "50%",
};

class ProfileImage extends Component {
  state = {
    int: "",
    links: [aphiwe, aphiweM, aphiweMn, aphiweMnt, aphiweMntu],
    link: aphiwe,
  };

  componentDidMount() {
    let i = 0;
    const interval = setInterval(() => {
      this.setState({ link: this.state.links[i] });
      i < 3 ? (i += 1) : (i = 0);
    }, 3000);
    this.setState({ int: interval });
  }

  componentWillUnmount() {
    clearInterval(this.state.int);
  }

  render() {
    return (
      <Box styles={style} cname="profile-img-box">
        <img
          src={this.state.link}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "inherit",
          }}
          alt=""
        />
      </Box>
    );
  }
}

export default ProfileImage;
