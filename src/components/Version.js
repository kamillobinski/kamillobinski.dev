import React from "react";
import packageJson from "../../package.json";
import "../style/Version.css";

const Version = () => {
  return (
    <div className="version">
      <span>version {packageJson.version}</span>
    </div>
  );
};

export default Version;
