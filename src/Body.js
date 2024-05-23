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
        <div className="frame-two"></div>
        <div className="frame-three">
          <div>
            <div className="numbers">7</div>
            <div className="numbers">8</div>
            <div className="numbers">9</div>
            <div className="delnreset">DEL</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
