import React from "react";
import Box from "../BoxComponent/BoxComponent";
import ReadButton from "../Projects/ProjectBox/ReadButton";
import "./blog.css";
import { boxStyles } from "../Profile/Profile";

const firstBoxStyles = boxStyles.topBoxStyle;
const firstPar = `The fallacy of natural law...`
const Blog = () => {
  return (
    <div className="blog">
      <Box styles={firstBoxStyles}>
        <h4 className="p-header">Blog </h4>
      </Box>
      <Box styles={{ ...firstBoxStyles, top: "131px" }}>
        <h4 className="p-header" style={{fontSize:'1em'}}> The fallacy of Natural Law</h4>
        <ReadButton paragraph={firstPar}/>
      </Box>
      <Box styles={{ ...firstBoxStyles, top: "151px" }}>
        <h4 className="p-header" style={{fontSize:'1em'}}> The fallacy of Natural Law</h4>
        <ReadButton paragraph={firstPar}/>
      </Box>
    </div>
  );
};

export default Blog;
