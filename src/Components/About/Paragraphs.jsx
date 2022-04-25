import React from "react";
import ReadButton from "../Projects/ProjectBox/ReadButton";

const genStyle = {
  backgroundColor: "red",
  border: "1px solid wheat",
  opacity: ".2",
};

const readMore1 = () => (
  <>
  <hr style={genStyle} />
    Most importantly it causes a philosophical disillusion because scholars use
    a 'black box' where they're not consciously participating in their education
    because they're run through a system and told what to do, without a higher
    context of why? why must they do it? why it exists and where it fits in the
    bigger picture of things, context. So then education relies on faith and
    arbitrary motivation and is not inspired by the liberation of knowledge.
    This results in disinterest in school and disillusion about the nature of
    school in both scholars and teachers. Goals become more arbitrary with
    teachers just trying to finish a syllabus. All these can result in learning
    but the more arbitrary they become they become less related to learning.
    <ReadButton paragraph={readMore2} />
  </>
);
const readMore2 = (
  <>
    <hr style={genStyle} />
    However if we could start from the bottom up by defining learning in it's
    simplest unit or definition, then work our way up by building components of
    a system that serves these simple units or the atom of learning.
  </>
);


function Paragraphs() {
  return (
    <div>
      One of my long term goals is writing a new system of learning that can
      enable the general population of our country to become proficient in
      skills through radically efficient processes.
      <hr style={genStyle} />
      This comes from the idea that school as an institution has many dynamics,
      some that have nothing to do with the process of learning itself beacause
      of it's lack of philosophical regulation. This lack of real defined goals
      has led school to being a passing, instead of learning institution where
      everyone is more concerned with passing, under the fundamental belief that
      it's equivalent to learning. Which it is to some extent, but also an
      inefficiency whenever it isn't.
      <ReadButton paragraph={readMore1()} />
    </div>
  );
}

export default Paragraphs;
