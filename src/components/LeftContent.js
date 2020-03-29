import React from "react";
import Avatar from "./Avatar";
import Name from "./Name";
import Description from "./Description";
import SocialMedia from "./SocialMedia";
import "../style/LeftContent.css";

class LeftContent extends React.Component {
  render() {
    return (
      <div className="left-content">
        <div className="left-content-inner">
          <Avatar />
          <Name />
          <Description />
          <SocialMedia />
        </div>
      </div>
    );
  }
}

export default LeftContent;
