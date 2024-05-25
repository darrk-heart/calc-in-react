import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    buttonColor: "#d13f30",
    buttonBg: "#181f32",
    backgroundColor: "#3b4664",
    frameTwoColor: "#181f32",
    frameTwoText: "white",
    frameThreeColor: "#252d44",
    numbersBg: "#eae3db",
    delnresetBg: "#647299",
    delnresetBorder: "4px solid #424f72",
    equalBg: "#d13f30",
  });

  const changeTheme = (selectedOption) => {
    switch (selectedOption) {
      case 0:
        setTheme({
          buttonColor: "#d13f30",
          buttonBg: "#181f32",
          backgroundColor: "#3b4664",
          frameTwoColor: "#181f32",
          frameTwoText: "white",
          frameThreeColor: "#252d44",
          numbersBg: "#eae3db",
          delnresetBg: "#647299",
          delnresetBorder: "4px solid #424f72",
          equalBg: "#d13f30",
        });
        break;
      case 1:
        setTheme({
          buttonColor: "#c85401",
          buttonBg: "white",
          backgroundColor: "#e6e6e6",
          textColor: "black",
          frameTwoColor: "white",
          frameTwoText: "black",
          frameThreeColor: "#d3cdcd",
          numbersBg: "#e5e4e0",
          delnresetBg: "#388187",
          delnresetBorder: "4px solid #1f5b66",
          equalBg: "#c85401",
        });
        break;
      case 2:
        setTheme({
          backgroundColor: "green",
          textColor: "yellow",
        });
        break;
      default:
        setTheme({
          buttonColor: "#d13f30",
          buttonBg: "#181f32",
          backgroundColor: "#3b4664",
          frameTwoColor: "#181f32",
          frameTwoText: "white",
          frameThreeColor: "#252d44",
          numbersBg: "#eae3db",
          delnresetBg: "#647299",
          delnresetBorder: "4px solid #424f72",
          equalBg: "#d13f30",
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
