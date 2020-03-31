import React from "react";
import Title from "./Title";
import ButtonMore from "./ButtonMore";
import "../style/Projects.css";

const projectsTitle = "Recent Projects";

const projectsItemFirst = [
  "Instagram - website clone made with Java and Hibernate.",
  "https://github.com/kamillobinski/instagram"
];
const projectsItemSecond = [
  "Agar.io - game clone developed with Python / Pygame.",
  "https://github.com/kamillobinski/Agar.io"
];
const projectsItemThird = [
  "Dog app - for iOS and Android devices.",
  "https://github.com/kamillobinski/Dog-App"
];
const projectsItemFourth = [
  "Weather app - JavaFX weather forecast for desktop",
  "https://github.com/kamillobinski/Weather-App"
];
const projectsItemFifth = [
  "Solar System - 3D simulation, built with JavaFX.",
  "https://github.com/kamillobinski/Solar-System"
];

const projectsButtonText = "More on Github >";
const projectsButtonUrl = "https://github.com/kamillobinski";

const Projects = () => {
  return (
    <div className="projects">
      <Title content={projectsTitle} />
      <a href={projectsItemFirst[1]} target="_blank" rel="noopener noreferrer">
        <p className="item">{projectsItemFirst[0]}</p>
      </a>
      <a href={projectsItemSecond[1]} target="_blank" rel="noopener noreferrer">
        <p className="item">{projectsItemSecond[0]}</p>
      </a>
      <a href={projectsItemThird[1]} target="_blank" rel="noopener noreferrer">
        <p className="item">{projectsItemThird[0]}</p>
      </a>
      <a href={projectsItemFourth[1]} target="_blank" rel="noopener noreferrer">
        <p className="item">{projectsItemFourth[0]}.</p>
      </a>
      <a href={projectsItemFifth[1]} target="_blank" rel="noopener noreferrer">
        <p className="item">{projectsItemFifth[0]}</p>
      </a>{" "}
      <ButtonMore content={projectsButtonText} link={projectsButtonUrl} />
    </div>
  );
};

export default Projects;
