import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { ThemeProvider } from "styled-components";
import { appTheme, NavTheme } from "./theme";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./components/Navigation";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={appTheme.dark}>
        <NavigationContainer theme={NavTheme}>
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}
