import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { StyledAppView } from "./styles";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import ShopList from "./components/shop/ShopList";
import Home from "./components/Home";
import ShopDetail from "./components/shop/ShopDetail";

export default function App() {
  return (
    <Provider store={store}>
      <StyledAppView>
        <ThemeProvider theme={theme.dark}>
          {/* <ShopDetail /> */}
          {/* <ShopList /> */}
          <Home />
        </ThemeProvider>
        <StatusBar style="auto" />
      </StyledAppView>
    </Provider>
  );
}
