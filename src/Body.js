import React from "react";
import ToggleTheme from "./ToggleTheme";

function Body() {
  return (
    <div
      style={{
        backgroundColor: "#3b4664",
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
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "white",
          }}
        >
          <div style={{ fontSize: "1.2rem", fontWeight: "700" }}>calc</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "28%",
              justifyContent: "space-between",
            }}
          >
            <span style={{ fontSize: "0.6rem", fontWeight: "600" }}>THEME</span>
            <ToggleTheme />
          </div>
        </div>
        <div
          style={{
            height: "17%",
            margin: "25px 0 20px 0",
            borderRadius: "8px",
            backgroundColor: "#181f32",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "#252d44",
            height: "60%",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "30px 30px",
            }}
          >
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
