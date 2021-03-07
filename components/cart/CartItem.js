import React from "react";
import { Body, Icon, ListItem, Right } from "native-base";
import { Text } from "react-native";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../store/actions/cartActions";
import { TotalPrice } from "../../styles";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <ListItem>
      <Body>
        <Text>{item.name}</Text>
        <Text note>
          {item.price} BHD x {item.quantity}
        </Text>
        <TotalPrice>{item.price * item.quantity} BHD</TotalPrice>
      </Body>
      <Right>
        <Icon
          name="trash"
          onPress={() => dispatch(removeItemFromCart(item.id))}
        ></Icon>
      </Right>
    </ListItem>
  );
};

export default CartItem;
