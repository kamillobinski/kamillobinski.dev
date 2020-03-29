import React from "react";
import "../style/Description.css";

const descriptionFirstRow =
  "Started his programming journey in 2017 at Mazovian Public College in Plock. Since then he is focused on learning new skills.";
const descriptionSecondRow =
  "His plan for the future is to become a full-stack developer, i.e., a person who can develop both client and server software.";
const descriptionThirdRow =
  "While not online he is probably having a nap to gain energy for learning.";

const Description = () => {
  return (
    <div className="description">
      <p>{descriptionFirstRow}</p>
      <p>{descriptionSecondRow}</p>
      <p>{descriptionThirdRow}</p>
    </div>
  );
};

export default Description;
