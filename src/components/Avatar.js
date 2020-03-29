import React from "react";
import avatar from "../utils/images/avatar.png";
import "../style/Avatar.css";

const Avatar = () => {
  return (
    <div className="avatar-box">
      <img className="avatar" src={avatar} alt="avatar" />
    </div>
  );
};

export default Avatar;
