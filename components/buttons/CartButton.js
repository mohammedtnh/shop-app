import { Icon } from "native-base";
import React from "react";
import { CartButtonStyled } from "../../styles";

const CartButton = ({ navigation }) => {
  return (
    <CartButtonStyled
      name="cart"
      onPress={() => navigation.navigate("CartList")}
    />
  );
};

export default CartButton;
