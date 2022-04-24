import React from "react";
import Box from "../../BoxComponent/BoxComponent";
import List from "../../Profile/Person/List";
import ReadButton from "./ReadButton";
import Contacts from "../../Contacts/Contacts";
import "./projectinfo.css";

const iconBox = {
  width: "100%",
  boxShadow: "none",
};


const ProjectInfo = (props) => {
  const { img, title, ptag, href, styleprop, text, paragraph, github } = props;
  const socialLinks = [
    { link: href, name: 'link-external', noLogo:true },
    { link: github, name: "github" },
  ];
  

  return (
    <div className="projectinfo">
      <img className="app-image" src={img} alt="" />
      <h4> {title} </h4>
      <p className="snitcherinfo">
        {ptag}
      </p>
      <Contacts socialLinks={socialLinks} cname='small-width-links' />
      <Box styles={iconBox} cname="icon-box">
        <List styleprop={styleprop} />
      </Box>
      <ReadButton paragraph={paragraph} />
    </div>
  );
};

export default ProjectInfo;
