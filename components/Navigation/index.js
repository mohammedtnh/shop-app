import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ShopList from "../shop/ShopList";
import Home from "../Home";
import ShopDetail from "../shop/ShopDetail";
import ProductDetail from "../product/ProductDetail";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="ShopList"
        component={ShopList}
        options={{ title: "Choose a Shop" }}
      />
      <Screen
        name="ShopDetail"
        component={ShopDetail}
        options={({ route }) => {
          const { shop } = route.params;
          return {
            title: shop.name,
          };
        }}
      />
      <Screen
        name="ProductDetail"
        component={ProductDetail}
        options={({ route }) => {
          const { product } = route.params;
          return {
            title: product.name,
          };
        }}
      />
    </Navigator>
  );
};

export default RootNavigator;
