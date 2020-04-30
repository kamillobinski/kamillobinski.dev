import React from "react";
import Title from "./Title";
import Progressbar from "./ProgressBar";
import "../style/TechnologyKnowledge.css";

const technologyKnowledgeTitle = "Main technologies";
var javaProgressbarValue = "75%";
var reactProgressbarValue = "40%";
var gitProgressbarValue = "80%";

class TechnologyKnowledge extends React.Component {
  render() {
    return (
      <div className="technology-knowledge">
        <Title content={technologyKnowledgeTitle} />
        <div className="technology-knowledge-item">
          <span className="technology-knowledge-name">Java</span>
          <Progressbar value={javaProgressbarValue} />
        </div>
        <div className="technology-knowledge-item">
          <span className="technology-knowledge-name">React.js</span>
          <Progressbar value={reactProgressbarValue} />
        </div>
        <div className="technology-knowledge-item">
          <span className="technology-knowledge-name">GIT</span>
          <Progressbar value={gitProgressbarValue} />
        </div>
      </div>
    );
  }
}

export default TechnologyKnowledge;
