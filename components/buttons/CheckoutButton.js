import { Button } from "native-base";
import React from "react";
import { Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { checkout } from "../../store/actions/cartActions";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CheckoutButton = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const user = useSelector((state) => state.authReducer.user);
  const items = useSelector((state) => state.cartReducer.items);

  const handlePress = () => {
    if (user) dispatch(checkout(items));
    else {
      Alert.alert(
        "Signin",
        "Sign is to place an order",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel"),
            style: "cancel",
          },
          { text: "Signin", onPress: () => navigation.navigate("Signin") },
        ],
        {
          cancelable: false,
        }
      );
    }
  };

  return (
    <Button block onPress={handlePress}>
      <Text>Checkout</Text>
    </Button>
  );
};

export default CheckoutButton;
