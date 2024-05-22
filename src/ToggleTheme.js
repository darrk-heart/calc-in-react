import React, { useState } from "react";
import "./App.css";

const ToggleTheme = () => {
  const [selectedOption, setSelectedOption] = useState(0);

  const handleToggle = () => {
    setSelectedOption((prevOption) => (prevOption + 1) % 3);
  };

  return (
    <div className="switch-container" onClick={handleToggle}>
      <div className="labels">
        <span
          style={{
            fontSize: "0.6rem",
            paddingBottom: "3px",
            fontWeight: "600",
          }}
          className={selectedOption === 0 ? "active" : ""}
        >
          {" "}
          1
        </span>
        <span
          style={{
            fontSize: "0.6rem",
            paddingBottom: "3px",
            fontWeight: "600",
          }}
          className={selectedOption === 1 ? "active" : ""}
        >
          {" "}
          2
        </span>
        <span
          style={{
            fontSize: "0.6rem",
            paddingBottom: "3px",
            fontWeight: "600",
          }}
          className={selectedOption === 2 ? "active" : ""}
        >
          {" "}
          3
        </span>
      </div>
      <div
        className={`slider ${
          selectedOption === 0
            ? "option-0"
            : selectedOption === 1
            ? "option-1"
            : "option-2"
        }`}
      >
        <div className="slider-button"></div>
      </div>
    </div>
  );
};

export default ToggleTheme;
