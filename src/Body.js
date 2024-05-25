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
          style={{ backgroundColor: theme.frameTwoColor }}
        >
          <span className="result">399,981</span>
        </div>
        <div className="frame-three">
          <div className="frame-three-first">
            <div className="numbers">7</div>
            <div className="numbers">8</div>
            <div className="numbers">9</div>
            <div className="del">DEL</div>
          </div>
          <div className="frame-three-second">
            <div className="numbers">4</div>
            <div className="numbers">5</div>
            <div className="numbers">6</div>
            <div className="numbers">+</div>
          </div>
          <div className="frame-three-second">
            <div className="numbers">1</div>
            <div className="numbers">2</div>
            <div className="numbers">3</div>
            <div className="numbers">-</div>
          </div>
          <div className="frame-three-second">
            <div className="numbers">.</div>
            <div className="numbers">0</div>
            <div className="numbers">/</div>
            <div className="numbers">x</div>
          </div>
          <div className="frame-three-last">
            <div className="reset">RESET</div>
            <div className="equal">=</div>
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
