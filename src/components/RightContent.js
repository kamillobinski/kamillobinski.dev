import React from "react";
import Education from "./Education";
import Toolbox from "./Toolbox";
import Projects from "./Projects.js";
import Version from "./Version";
import "../style/RightContent.css";

const RightContent = () => {
  return (
    <div className="right-content">
      <div className="right-content-inner">
        <Education />
        <Toolbox />
        <Projects />
        <Version />
      </div>
    </div>
  );
};

export default RightContent;
