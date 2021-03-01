import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyledAppView } from "./styles";
import Home from "./components/Home";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <StyledAppView>
        <ThemeProvider theme={theme.dark}>
          <Home />
        </ThemeProvider>
        <StatusBar style="auto" />
      </StyledAppView>
    </Provider>
  );
}
