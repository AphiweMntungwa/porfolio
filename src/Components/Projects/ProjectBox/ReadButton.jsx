import React, { Component } from "react";

class ReadButton extends Component {
  state = { readMore: false, moreOrLess: "More" };

  toggleParagraph = () => {
    this.setState(({ readMore, moreOrLess }) => {
      return {
        readMore: readMore ? false : true,
        moreOrLess: moreOrLess === "More" ? "Less" : "More",
      };
    });
  };
  returnParagraph = () => {
    return this.state.readMore ? (
      <div className="snit-parag">{this.props.paragraph}</div>
    ) : null;
  };

  render() {
    return (
      <div style={{ width: "100%" }} className="read-button">
        <button onClick={this.toggleParagraph}>
          Read {this.state.moreOrLess}
        </button>
        {this.returnParagraph()}
      </div>
    );
  }
}

export default ReadButton;
