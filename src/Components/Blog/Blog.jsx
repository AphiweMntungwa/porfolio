import React from "react";
import Box from "../BoxComponent/BoxComponent";
import ReadButton from "../Projects/ProjectBox/ReadButton";
import "./blog.css";
import { boxStyles } from "../Profile/Profile";
import blogs from "./blogs";

const firstBoxStyles = boxStyles.topBoxStyle;
const Blog = () => {
  return (
    <div className="blog">
      <Box styles={firstBoxStyles}>
        <h4 className="p-header">Blog </h4>
      </Box>
      <Box styles={{ ...firstBoxStyles, top: "131px" }}>
        <h4 className="p-header" style={{fontSize:'1em'}}>Blog init... </h4>
        <ReadButton paragraph={blogs.firstPar}/>
      </Box>
      <Box styles={{ ...firstBoxStyles, top: "151px" }}>
        <h4 className="p-header" style={{fontSize:'1em'}}>The fallacy of Natural Law</h4>
        <ReadButton paragraph={blogs.secondPar}/>
      </Box>
    </div>
  );
};

export default Blog;
