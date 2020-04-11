import React from "react";
import ChangeTheme from "./ChangeTheme";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Github, Linkedin, Twitter, Gmail } from "./icons/SocialIcons";
import "../style/SocialMedia.css";

const githubUrl = "https://github.com/kamillobinski";
const linkedinUrl = "https://www.linkedin.com/in/kamillobinski/?locale=en_US";
const twitterUrl = "https://twitter.com/kamillobinski";
const gmailAccount = "kamilobinski@gmail.com";

class SocialMedia extends React.Component {
  render() {
    return (
      <div className="social-media">
        <a href="mailto: kamilobinski@gmail.com">
          <CopyToClipboard text={gmailAccount}>
            <span>
              <Gmail width="18" height="18" />
            </span>
          </CopyToClipboard>
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <Github width="18" height="18" />
        </a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <Linkedin width="18" height="18" />
        </a>
        <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
          <Twitter width="18" height="18" />
        </a>
        <ChangeTheme />
      </div>
    );
  }
}

export default SocialMedia;
