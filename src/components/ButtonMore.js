import React from "react";
import "../style/ButtonMore.css";

const ButtonMore = button => {
  return (
    <p className="more">
      <a href={button.link} target="_blank" rel="noopener noreferrer">
        {button.content}
      </a>
    </p>
  );
};

export default ButtonMore;
