import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  state = { headerLetters: [] };

  componentDidMount() {
    const header = `Aphiwe here welcome to my portfolio app. `;

    let j = 0;
    setInterval(() => {
      this.setState(({ headerLetters }) => ({
        headerLetters: [...headerLetters, ...header[j % header.length]],
      }));

      j += 1;
      this.state.headerLetters.length >= header.length &&
        this.setState({ headerLetters: [] });
    }, 200);
  }

  render() {
    return <h1>{this.state.headerLetters}</h1>;
  }
}

export default Header;
