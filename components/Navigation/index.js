import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ShopList from "../shop/ShopList";
import Home from "../Home";
import ShopDetail from "../shop/ShopDetail";
import ProductDetail from "../product/ProductDetail";
import CartList from "../cart/CartList";
import { Icon } from "native-base";
import CartButton from "../buttons/CartButton";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="ShopList"
        component={ShopList}
        options={({ navigation }) => {
          return {
            title: "Choose a Shop",
            headerRight: () => <CartButton navigation={navigation} />,
          };
        }}
      />
      <Screen
        name="ShopDetail"
        component={ShopDetail}
        options={({ route, navigation }) => {
          const { shop } = route.params;
          return {
            title: shop.name,
            headerRight: () => <CartButton navigation={navigation} />,
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
      <Screen name="CartList" component={CartList} />
    </Navigator>
  );
};

export default RootNavigator;
