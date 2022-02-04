import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  state = { headerLetters: [], jokes: [], jokeCount: 0, int: "" };

  componentDidMount() {
    let j = 0;
    let header = [];

    fetch(
      `https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious,political,racist,sexist&type=single&amount=10`
    )
      .then((response) => response.json())
      .then((data) => {
        header = [...data.jokes][0].joke;
        interval();
      })
      .catch((e) => console.log(e));

    const interval = () => {
      const headerInterval = setInterval(() => {
        this.setState(({ headerLetters }) => ({
          headerLetters: [...headerLetters, ...header[j % header.length]],
        }));

        j += 1;
        this.state.headerLetters.length >= header.length &&
          this.setState((pvS) => ({
            headerLetters: [],
            jokeCount: pvS.jokeCount + 1,
          }));
      }, 100);
      this.setState({ int: headerInterval });
    };
  }

  componentWillUnmount() {
    clearInterval(this.state.int);
  }

  render() {
    return <h1 className={this.props.cname}>{this.state.headerLetters}</h1>;
  }
}

export default Header;
