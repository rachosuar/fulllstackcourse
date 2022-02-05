import React, { Component } from "react";
import Part from "./parts";

class Content extends Component {
  render() {
    return (
      <React.Fragment>
        <Part part={this.props.part1} exercises={this.props.exercises1} />
        <Part part={this.props.part2} exercises={this.props.exercises2} />
        <Part part={this.props.part3} exercises={this.props.exercises3} />
      </React.Fragment>
    );
  }
}

export default Content;
