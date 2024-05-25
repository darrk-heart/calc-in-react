import React, { useState } from "react";
import { useTheme } from "./ThemeContext";
import "./App.css";

const ToggleTheme = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  const { theme, changeTheme } = useTheme();

  const handleSelect = (option) => {
    setSelectedOption(option);
    changeTheme(option);
  };

  const handleClick = (event) => {
    const containerWidth = event.currentTarget.offsetWidth;
    const clickX =
      event.clientX - event.currentTarget.getBoundingClientRect().left;
    const optionWidth = containerWidth / 3;
    const selected = Math.floor(clickX / optionWidth);
    handleSelect(selected);
  };

  return (
    <div className="switch-container" onClick={handleClick}>
      <div className="labels">
        <span
          style={{
            fontSize: "0.6rem",
            paddingBottom: "3px",
            fontWeight: "600",
          }}
          className={selectedOption === 0 ? "active" : ""}
        >
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
        style={{ backgroundColor: theme.butttonBg }}
      >
        <div
          className="slider-button"
          style={{
            backgroundColor: theme.buttonColor,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ToggleTheme;
