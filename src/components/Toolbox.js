import React from "react";
import Title from "./Title";
import Tool from "./Tool";
import "../style/Toolbox.css";

const toolboxItemFirst = [
  "Java",
  "JavaFX",
  "Hibernate",
  "Maven",
  "Spring",
  "JSP",
  "JSF"
];
const toolboxItemSecond = ["HTML", "CSS / CSS3", "JavaScript", "React.js"];
const toolboxItemThird = ["Flutter", "Python", "PyQt5"];
const toolboxItemFourth = [
  "Git",
  "Github",
  "Visual Studio Code",
  "Netbeans",
  "XAMPP"
];

class Toolbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toolboxItemFirst: toolboxItemFirst,
      toolboxItemSecond: toolboxItemSecond,
      toolboxItemThird: toolboxItemThird,
      toolboxItemFourth: toolboxItemFourth
    };
  }

  render() {
    return (
      <div className="toolbox">
        <Title content="My toolbox" />

        <p className="toolbox-item">
          {this.state.toolboxItemFirst.map(item => (
            <Tool key={item} content={item} />
          ))}
        </p>

        <p className="toolbox-item">
          {this.state.toolboxItemSecond.map(item => (
            <Tool key={item} content={item} />
          ))}
        </p>
        <p className="toolbox-item">
          {this.state.toolboxItemThird.map(item => (
            <Tool key={item} content={item} />
          ))}
        </p>
        <p className="toolbox-item">
          {this.state.toolboxItemFourth.map(item => (
            <Tool key={item} content={item} />
          ))}
        </p>
      </div>
    );
  }
}

export default Toolbox;
