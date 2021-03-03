import { Body, ListItem, Text } from "native-base";
import React from "react";
import { TotalPrice } from "../../styles";

const CartItem = ({ item }) => {
  return (
    <ListItem>
      <Body>
        <Text>{item.name}</Text>
        <Text note>
          {item.price} BHD x {item.quantity}
        </Text>
        <TotalPrice>{item.price * item.quantity} BHD</TotalPrice>
      </Body>
    </ListItem>
  );
};

export default CartItem;
