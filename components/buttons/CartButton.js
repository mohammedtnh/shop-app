import { Button } from "native-base";
import React from "react";
import { CartButtonStyled, CartTextStyled } from "../../styles";
import {  useSelector } from "react-redux";

const CartButton = ({ navigation }) => {
  const items = useSelector((state) => state.cartReducer.items);
  let total = 0;
  items.forEach((item) => (total += item.quantity));

  return (
    <Button transparent light>
      <CartTextStyled>{total}</CartTextStyled>
      <CartButtonStyled
        type="MaterialCommunityIcons"
        name="cart"
        onPress={() => navigation.navigate("CartList")}
      />
    </Button>
  );
};

export default CartButton;
