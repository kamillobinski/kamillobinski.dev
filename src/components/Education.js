import React from "react";
import Title from "./Title";
import "../style/Education.css";

const educationTitle = "Education";
const educationYear = "2017 - currently";
const educationPlace = "Mazovian Public College in Plock";
const educationDegree = "BSc. of Computer Science";

const Education = () => {
  return (
    <div className="education">
      <Title content={educationTitle} />
      <p>
        <span className="education-year">{educationYear}</span>
        <span className="education-place">{educationPlace}</span>
        <span className="education-degree">{educationDegree}</span>
      </p>
      <div className="education-ruler">
        <div className="circle"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Education;
