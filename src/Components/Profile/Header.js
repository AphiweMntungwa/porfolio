import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  state = { headerLetters: [] };

  componentDidMount() {
    const header = `Aphiwe here! welcome to my Portfolio Repository app.`;

    let j = 0;
    setInterval(() => {
      this.setState(({headerLetters}) => ({
        headerLetters: [...headerLetters, ...header[j % header.length]],
      }));
      
      j += 1;
      console.log(j)
      this.state.headerLetters.length >= header.length &&
        this.setState({ headerLetters: [] });
    }, 150);
  }

  render() {
    return (
      <div>
        <h1>{this.state.headerLetters}</h1>
      </div>
    );
  }
}

export default Header;
