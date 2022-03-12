import React from "react";
import Box from "../BoxComponent/BoxComponent";
import ReadButton from "../Projects/ProjectBox/ReadButton";
import "./blog.css";
import blogs from "./blogs";

const Blog = () => {
  return (
    <div className="blog">
      <Box cname='blog-header'>
        <h4 className="p-header">Blog </h4>
      </Box>
      <Box cname='blog-second-header'>
        <h4 className="p-header">
          Blog init...
        </h4>
        <ReadButton paragraph={blogs.firstPar} />
      </Box>
      <Box cname='blog-second-header'>
        <h4 className="p-header">
          The fallacy of Natural Law
        </h4>
        <ReadButton paragraph={blogs.secondPar} />
      </Box>
    </div>
  );
};

export default Blog;
