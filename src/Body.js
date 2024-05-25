import React, { useState } from "react";
import ToggleTheme from "./ToggleTheme";
import { ThemeProvider, useTheme } from "./ThemeContext";
import "./App.css";

const NumberButton = ({ number, style, onClick }) => (
  <div className="numbers" style={style} onClick={() => onClick(number)}>
    {number}
  </div>
);

const BodyContent = () => {
  const { theme } = useTheme();
  const [displayedNumber, setDisplayedNumber] = useState("");

  const numberStyle = {
    backgroundColor: theme.numbersBg,
    color: theme.numbersText,
    borderBottom: theme.numbersBorder,
  };

  const specialButtonStyle = {
    backgroundColor: theme.delnresetBg,
    borderBottom: theme.delnresetBorder,
  };

  const handleNumberClick = (number) => {
    setDisplayedNumber((prevNumber) => prevNumber + number);
  };
  const handleDelClick = () => {
    setDisplayedNumber((prevNumber) => prevNumber.slice(0, -1));
  };

  return (
    <div
      className="main-body"
      style={{ backgroundColor: theme.backgroundColor }}
    >
      <div className="body-frame">
        <div className="frame-one" style={{ color: theme.textColor }}>
          <div className="calc">calc</div>
          <div className="frame-one-content">
            <span className="theme">THEME</span>
            <ToggleTheme />
          </div>
        </div>
        <div
          className="frame-two"
          style={{
            backgroundColor: theme.frameTwoColor,
            color: theme.frameTwoText,
          }}
        >
          <span className="result">{displayedNumber}</span>
        </div>
        <div
          className="frame-three"
          style={{ backgroundColor: theme.frameThreeColor }}
        >
          <div className="frame-three-first">
            {["7", "8", "9"].map((num) => (
              <NumberButton
                key={num}
                number={num}
                style={numberStyle}
                onClick={handleNumberClick}
              />
            ))}
            <div
              className="del"
              style={specialButtonStyle}
              onClick={handleDelClick}
            >
              DEL
            </div>
          </div>
          <div className="frame-three-second">
            {["4", "5", "6", "+"].map((num) => (
              <NumberButton
                key={num}
                number={num}
                style={numberStyle}
                onClick={handleNumberClick}
              />
            ))}
          </div>
          <div className="frame-three-second">
            {["1", "2", "3", "-"].map((num) => (
              <NumberButton
                key={num}
                number={num}
                style={numberStyle}
                onClick={handleNumberClick}
              />
            ))}
          </div>
          <div className="frame-three-second">
            {[".", "0", "/", "x"].map((num) => (
              <NumberButton
                key={num}
                number={num}
                style={numberStyle}
                onClick={handleNumberClick}
              />
            ))}
          </div>
          <div className="frame-three-last">
            <div className="reset" style={specialButtonStyle}>
              RESET
            </div>
            <div
              className="equal"
              style={{
                backgroundColor: theme.equalBg,
                color: theme.equalText,
                borderBottom: theme.equalBorder,
              }}
            >
              =
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Body = () => (
  <ThemeProvider>
    <BodyContent />
  </ThemeProvider>
);

export default Body;
