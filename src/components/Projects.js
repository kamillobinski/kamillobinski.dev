import React from "react";
import Title from "./Title";
import ButtonMore from "./ButtonMore";
import axios from "axios";
import "../style/Projects.css";

const projectsTitle = "Recent Projects";
const route = "https://vast-plains-91564.herokuapp.com/projects";
const projectsButtonText = "More on Github >";
const projectsButtonUrl = "https://github.com/kamillobinski";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectsData: [],
    };
  }

  componentDidMount() {
    axios.get(route).then((res) => {
      this.setState({ projectsData: res.data });
      console.disableRedBox = true;
    });
  }

  render() {
    return (
      <div className="projects">
        <Title content={projectsTitle} />
        {this.state.projectsData.map((data) => (
          <a
            href={data.url}
            key={data.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="item">
              <span className="item-name">{data.name}</span> -{" "}
              {data.description}
            </p>
          </a>
        ))}
        <ButtonMore content={projectsButtonText} link={projectsButtonUrl} />
      </div>
    );
  }
}

export default Projects;
