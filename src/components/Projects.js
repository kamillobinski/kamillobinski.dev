import React from "react";
import Title from "./Title";
import ButtonMore from "./ButtonMore";
import ContentPlaceholder from "./ContentPlaceholder";
import axios from "axios";
import "../style/Projects.css";

const projectsTitle = "Recent Projects";
const route = "https://kamillobinski.herokuapp.com/projects";
const projectsButtonText = "More on Github >";
const projectsButtonUrl = "https://github.com/kamillobinski";
var isContent = false;

const highlight = "<span class='highlight'>";
const closeHighlight = "</span>";

var mappingObjects = {
  JavaFX: highlight + "JavaFX" + closeHighlight,
  Java: highlight + "Java" + closeHighlight,
  Hibernate: highlight + "Hibernate" + closeHighlight,
  React: highlight + "React" + closeHighlight,
  Node: highlight + "Node" + closeHighlight,
  MySQL: highlight + "MySQL" + closeHighlight,
  Python: highlight + "Python" + closeHighlight,
  Pygame: highlight + "Pygame" + closeHighlight,
  Dart: highlight + "Dart" + closeHighlight,
  Flutter: highlight + "Flutter" + closeHighlight,
};

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectsData: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  getData() {
    axios
      .get(route)
      .then((res) => {
        if (res.data !== null) {
          isContent = true;
          this.setState({ projectsData: res.data });
        }
      })
      // When an error occurs, it will try to connect with
      // server every 3 seconds
      .catch((error) => {
        this.sleep(3000).then(() => {
          this.getData();
        });
      });
  }

  scanTextForTechnologies(text) {
    var regExp = new RegExp(Object.keys(mappingObjects).join("|"), "gi");
    var changedText = text.replace(regExp, function (matched) {
      return mappingObjects[matched];
    });
    var highlightedText = (
      <span dangerouslySetInnerHTML={{ __html: changedText }} />
    );
    return highlightedText;
  }

  render() {
    return (
      <div className="projects">
        <Title content={projectsTitle} />
        {isContent ? (
          this.state.projectsData.map((data) => (
            <a
              href={data.url}
              key={data.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="item">
                <span className="item-name">{data.name}</span> -{" "}
                {this.scanTextForTechnologies(data.description)}
              </p>
            </a>
          ))
        ) : (
          <ContentPlaceholder quantity="6" />
        )}
        <ButtonMore content={projectsButtonText} link={projectsButtonUrl} />
      </div>
    );
  }
}

export default Projects;
