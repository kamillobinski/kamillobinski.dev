import React from "react";
import Education from "./Education";
import TechnologyKnowledge from "./TechnologyKnowledge";
import Toolbox from "./Toolbox";
import Projects from "./Projects.js";
import Version from "./Version";
import "../style/RightContent.css";

const RightContent = () => {
  return (
    <div className="right-content">
      <div className="right-content-inner">
        <Education />
        <TechnologyKnowledge />
        <Toolbox />
        <Projects />
        <Version />
      </div>
    </div>
  );
};

export default RightContent;
