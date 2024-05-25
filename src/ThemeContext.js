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
    numbersBorder: "4px solid #b7a79a",
    numbersText: "#464e61",
    delnresetBg: "#647299",
    delnresetBorder: "4px solid #424f72",
    equalBg: "#d13f30",
    equalText: "white",
    equalBorder: "4px solid #922417",
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
          numbersBorder: "4px solid #b7a79a",
          numbersText: "#464e61",
          delnresetBg: "#647299",
          delnresetBorder: "4px solid #424f72",
          equalBg: "#d13f30",
          equalText: "white",
          equalBorder: "4px solid #922417",
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
          numbersBorder: "4px solid #a69c93",
          numbersText: "black",
          delnresetBg: "#388187",
          delnresetBorder: "4px solid #1f5b66",
          equalBg: "#c85401",
          equalText: "white",
          equalBorder: "4px solid #873700",
        });
        break;
      case 2:
        setTheme({
          buttonColor: "#00decf",
          buttonBg: "white",
          backgroundColor: "#17062a",
          textColor: "#fde53b",
          frameTwoColor: "#1e0836",
          frameTwoText: "#fde53b",
          frameThreeColor: "#1e0836",
          numbersBg: "#331b4d",
          numbersBorder: "4px solid #851c9c",
          numbersText: "#fde53b",
          delnresetBg: "#56077c",
          delnresetBorder: "4px solid #bf16f5",
          equalBg: "#00decf",
          equalText: "black",
          equalBorder: "4px solid #63f9ed",
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
          numbersBorder: "4px solid #b7a79a",
          numbersText: "#464e61",
          delnresetBg: "#647299",
          delnresetBorder: "4px solid #424f72",
          equalBg: "#d13f30",
          equalText: "white",
          equalBorder: "4px solid #922417",
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
