import React from "react";

function Body() {
  return (
    <div>
      <div
        style={{
          width: "33%",
          height: "70%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          position: "absolute",
          backgroundColor: "blue",
        }}
      >
        <div style={{ backgroundColor: "red" }}>
          <div>calc</div>
          <div>
            <span>THEME</span>
            <div></div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Body;
