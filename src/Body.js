import React from "react";
import ToggleTheme from "./ToggleTheme";

function Body() {
  return (
    <div className="main-body">
      <div className="body-frame">
        <div className="frame-one">
          <div className="calc">calc</div>
          <div className="frame-one-content">
            <span className="theme">THEME</span>
            <ToggleTheme />
          </div>
        </div>
        <div className="frame-two">
          <span>399,981</span>
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
}

export default Body;
