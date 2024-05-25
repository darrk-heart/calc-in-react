import React from "react";
import ToggleTheme from "./ToggleTheme";
import { ThemeProvider, useTheme } from "./ThemeContext";
import "./App.css";

const BodyContent = () => {
  const { theme } = useTheme();

  return (
    <div
      className="main-body"
      style={{
        backgroundColor: theme.backgroundColor,
        transition: "all 0.5s",
      }}
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
          <span className="result">399,981</span>
        </div>
        <div
          className="frame-three"
          style={{ backgroundColor: theme.frameThreeColor }}
        >
          <div className="frame-three-first">
            <div
              className="numbers"
              style={{
                backgroundColor: theme.numbersBg,
                color: theme.numbersText,
                borderBottom: theme.numbersBorder,
              }}
            >
              7
            </div>
            <div
              className="numbers"
              style={{
                backgroundColor: theme.numbersBg,
                color: theme.numbersText,
                borderBottom: theme.numbersBorder,
              }}
            >
              8
            </div>
            <div
              className="numbers"
              style={{
                backgroundColor: theme.numbersBg,
                color: theme.numbersText,
                borderBottom: theme.numbersBorder,
              }}
            >
              9
            </div>
            <div
              className="del"
              style={{
                backgroundColor: theme.delnresetBg,
                borderBottom: theme.delnresetBorder,
              }}
            >
              DEL
            </div>
          </div>
          <div className="frame-three-second">
            <div
              className="numbers"
              style={{
                backgroundColor: theme.numbersBg,
                color: theme.numbersText,
                borderBottom: theme.numbersBorder,
              }}
            >
              4
            </div>
            <div
              className="numbers"
              style={{
                backgroundColor: theme.numbersBg,
                color: theme.numbersText,
                borderBottom: theme.numbersBorder,
              }}
            >
              5
            </div>
            <div
              className="numbers"
              style={{
                backgroundColor: theme.numbersBg,
                color: theme.numbersText,
                borderBottom: theme.numbersBorder,
              }}
            >
              6
            </div>
            <div
              className="numbers"
              style={{
                backgroundColor: theme.numbersBg,
                color: theme.numbersText,
                borderBottom: theme.numbersBorder,
              }}
            >
              +
            </div>
          </div>
          <div className="frame-three-second">
            <div
              className="numbers"
              style={{
                backgroundColor: theme.numbersBg,
                color: theme.numbersText,
                borderBottom: theme.numbersBorder,
              }}
            >
              1
            </div>
            <div
              className="numbers"
              style={{
                backgroundColor: theme.numbersBg,
                color: theme.numbersText,
                borderBottom: theme.numbersBorder,
              }}
            >
              2
            </div>
            <div
              className="numbers"
              style={{
                backgroundColor: theme.numbersBg,
                color: theme.numbersText,
                borderBottom: theme.numbersBorder,
              }}
            >
              3
            </div>
            <div
              className="numbers"
              style={{
                backgroundColor: theme.numbersBg,
                color: theme.numbersText,
                borderBottom: theme.numbersBorder,
              }}
            >
              -
            </div>
          </div>
          <div className="frame-three-second">
            <div
              className="numbers"
              style={{
                backgroundColor: theme.numbersBg,
                color: theme.numbersText,
                borderBottom: theme.numbersBorder,
              }}
            >
              .
            </div>
            <div
              className="numbers"
              style={{
                backgroundColor: theme.numbersBg,
                color: theme.numbersText,
                borderBottom: theme.numbersBorder,
              }}
            >
              0
            </div>
            <div
              className="numbers"
              style={{
                backgroundColor: theme.numbersBg,
                color: theme.numbersText,
                borderBottom: theme.numbersBorder,
              }}
            >
              /
            </div>
            <div
              className="numbers"
              style={{
                backgroundColor: theme.numbersBg,
                color: theme.numbersText,
                borderBottom: theme.numbersBorder,
              }}
            >
              x
            </div>
          </div>
          <div className="frame-three-last">
            <div
              className="reset"
              style={{
                backgroundColor: theme.delnresetBg,
                borderBottom: theme.delnresetBorder,
              }}
            >
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
