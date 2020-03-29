import React from "react";
import ChangeTheme from "./ChangeTheme";
import github from "../utils/icons/github.svg";
import linkedin from "../utils/icons/linkedin.svg";
import twitter from "../utils/icons/twitter.svg";
import "../style/SocialMedia.css";

const githubUrl = "https://github.com/kamillobinski";
const linkedinUrl = "https://www.linkedin.com/in/kamillobinski/?locale=en_US";
const twitterUrl = "https://twitter.com/kamillobinski";

const SocialMedia = () => {
  return (
    <div className="social-media">
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        <img src={github} className="social-media-icon" alt="github" />
      </a>
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
        <img src={linkedin} className="social-media-icon" alt="linkedin" />
      </a>
      <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
        <img src={twitter} className="social-media-icon" alt="twitter" />
      </a>
      <ChangeTheme />
    </div>
  );
};

export default SocialMedia;
