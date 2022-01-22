import React from "react";
import Box from "../BoxComponent/BoxComponent";
import './blog.css'
import { boxStyles } from "../Profile/Profile";

const firstBoxStyles = boxStyles.topBoxStyle;
const Blog = () => {
  return (<div className="blog">
      <Box styles={firstBoxStyles}>
        <h4>
            The fallacy of Natural law.
        </h4>
      </Box>
  </div>);
};

export default Blog;
