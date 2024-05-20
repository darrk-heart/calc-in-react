import React, { useState } from "react";
import "./App.css";
import Body from "./Body";

function App() {
  const [isDarkMode, setIsDarkMode] = useState("true");

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="App">
      <Body isDarkMode={isDarkMode} toggleMode={toggleMode}></Body>
    </div>
  );
}

export default App;
