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
      <p className="snit-parag">{this.props.paragraph}</p>
    ) : null;
  };

  render() {
    return (
      <div style={{ width: "100%" }}>
        <button
          onClick={this.toggleParagraph}
          style={{
            width: "100%",
            border: "none",
            padding: "2%",
            color: "orangered",
            fontFamily: "Monospace",
            fontWeight: 900,
            fontSize: "larger",
          }}
        >
          Read {this.state.moreOrLess}
        </button>
        {this.returnParagraph()}
      </div>
    );
  }
}

export default ReadButton;
