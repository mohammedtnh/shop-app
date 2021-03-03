import { List, View } from "native-base";
import React from "react";
import { useSelector } from "react-redux";
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
    </View>
  );
};
export default CartList;
