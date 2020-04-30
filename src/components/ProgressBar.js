import React from "react";
import "../style/Progressbar.css";

const ProgressBar = (progressbar) => {
  return (
    <div className="progressbar">
      <div className="progressbar-back">
        <div
          className="progressbar-fill"
          style={{ width: progressbar.value, maxWidth: progressbar.value }}
        >
          {" "}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
