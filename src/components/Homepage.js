import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import "../style/Homepage.css";

class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <div className="homepage-first-col">
          <LeftContent />
        </div>
        <div className="homepage-second-col">
          <RightContent />
        </div>
      </div>
    );
  }
}

export default Homepage;
