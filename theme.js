import { DefaultTheme } from "@react-navigation/native";

export const appTheme = {
  light: {
    mainColor: "#B9B9B9",
    backgroundColor: "#000000",
    secondaryColor: "#00AAA9",
    red: "#FF0000",
  },
  dark: {
    mainColor: "#000000",
    backgroundColor: "#B9B9B9",
    secondaryColor: "#00AAA9",
    red: "#FF0000",
  },
};

export const NavTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(0, 219, 29)",
    background: "rgb(224, 255, 228)",
  },
};
