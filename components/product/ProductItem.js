import React from "react";
import { ListItem, Left, Thumbnail, Right, Button, Text } from "native-base";
import { ShopItemStyled } from "../../styles";
import NumericInput from "react-native-numeric-input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/actions/cartActions";

const ProductItem = ({ product, navigation }) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const handleAdd = () => {
    const newItem = { quantity, productId: product.id };
    dispatch(addItemToCart(newItem));
  };

  return (
    <ListItem
      onPress={() => navigation.navigate("ProductDetail", { product: product })}
    >
      <Left>
        <Thumbnail source={{ uri: product.image }} />
        <ShopItemStyled>{product.name}</ShopItemStyled>
      </Left>
      <Right>
        <NumericInput
          rounded
          value={quantity}
          onChange={setQuantity}
          totalHeight={30}
          totalWidth={60}
        />
        <Button onPress={handleAdd}>
          <Text>Add</Text>
        </Button>
      </Right>
    </ListItem>
  );
};
export default ProductItem;
