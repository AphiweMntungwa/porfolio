import React, { Component } from "react";

class Quote extends Component {
  state = { headerLetters: [], jokeCount: 0, int: "" };

  componentDidMount() {
    let k = 0;
    let header = `The only true wisdom is in knowing you know nothing.
    ―Socrates. `;

    const interval = setInterval(() => {
      this.setState(({ headerLetters }) => ({
        headerLetters: [...headerLetters, ...header[k % header.length]],
      }));

      k += 1;
      this.state.headerLetters.length >= header.length &&
        this.setState(
          (pvS) => ({
            jokeCount: pvS.jokeCount + 1,
          }),
          () => {
            clearInterval(interval);
          }
        );
    }, 80);
    this.setState({ int: interval });
  }

  componentWillUnmount() {
    clearInterval(this.state.int);
  }

  render() {
    return <h4 className="about-quote">{this.state.headerLetters}</h4>;
  }
}

export default Quote;
