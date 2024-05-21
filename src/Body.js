import React from "react";

function Body() {
  return (
    <div
      style={{
        backgroundColor: "yellow",
        width: "100vw",
        height: "100vh",
      }}
    >
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
        <div
          style={{
            backgroundColor: "red",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>calc</div>
          <div style={{ display: "flex" }}>
            <span>THEME</span>
            <div style={{ paddingLeft: "10px" }}>
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Body;
