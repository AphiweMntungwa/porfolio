import React from "react";
import Box from "../BoxComponent/BoxComponent";
import ReadButton from "../Projects/ProjectBox/ReadButton";
import "./blog.css";
import blogs from "./blogs";
import one from "../../Assets/1.png";
import two from "../../Assets/2.png";
import three from "../../Assets/3.png";
import four from "../../Assets/4.png";
import five from "../../Assets/5.png";

const pictures = [two, one, three, four, five];

const Blog = () => {
  return (
    <div className="blog">
      <Box cname="blog-header">
        <h4 className="p-header">Blog </h4>
      </Box>
      <Box cname="slider">
        <div className="slide-track">
          {pictures.map((el) => (
            <div className="img-slide" key={el}>
              <img src={el} />
            </div>
          ))}
        </div>
      </Box>
      <Box cname="blog-second-header">
        <h4 className="p-header">Blog init...</h4>
        <ReadButton paragraph={blogs.firstPar} />
      </Box>
      <Box cname="blog-second-header">
        <h4 className="p-header">The fallacy of Natural Law</h4>
        <ReadButton paragraph={blogs.secondPar} />
      </Box>
    </div>
  );
};

export default Blog;
