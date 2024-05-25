import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    backgroundColor: "#3b4664",
    frameTwoColor: "#181f32",
  });

  const changeTheme = (selectedOption) => {
    switch (selectedOption) {
      case 0:
        setTheme({
          backgroundColor: "#3b4664",
          frameTwoColor: "#181f32",
        });
        break;
      case 1:
        setTheme({
          backgroundColor: "white",
          textColor: "black",
          frameTwoColor: "white",
        });
        break;
      case 2:
        setTheme({
          backgroundColor: "green",
          textColor: "yellow",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",
        });
        break;
      default:
        setTheme({
          backgroundColor: "#3b4664",
          frameTwoColor: "#181f32",
        });
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
