import React from "react";
import "../style/Tool.css";

class Tool extends React.Component {
  render() {
    return <span className="tool">{this.props.content}, </span>;
  }
}

export default Tool;
