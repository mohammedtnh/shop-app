import React from "react";
import { List, View } from "native-base";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import CheckoutButton from "../buttons/CheckoutButton";
import Loading from "../Loading";
import CartItem from "./CartItem";

const CartList = () => {
  const items = useSelector((state) => state.cartReducer.items);
  const products = useSelector((state) => state.productReducer.products);
  const loading = useSelector((state) => state.productReducer.loading);
  if (loading) return <Loading />;

  const cartList = items.map((item) => ({
    ...products.find((product) => product.id === item.productId),
    quantity: item.quantity,
  }));

  const list = cartList.map((product) => (
    <CartItem item={product} key={product.id} />
  ));

  return (
    <View>
      <List>{list}</List>
      {items.length === 0 ? <Text>No items</Text> : <CheckoutButton />}
    </View>
  );
};
export default CartList;
