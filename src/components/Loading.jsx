import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <span>
      <h2 className="loading-text">Loading</h2>
      <h2 className="loading-text" id="first-dot">
        {" ."}
      </h2>
      <h2 className="loading-text" id="second-dot">
        {" ."}
      </h2>
      <h2 className="loading-text" id="third-dot">
        {" ."}
      </h2>
    </span>
  );
};
