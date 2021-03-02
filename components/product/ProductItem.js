import React from "react";
import { ListItem, Left, Thumbnail } from "native-base";
import { ShopItemStyled } from "../../styles";

const ProductItem = ({ product, navigation }) => {
  return (
    <ListItem
      avatar
      onPress={() => navigation.navigate("ProductDetail", { product: product })}
    >
      <Left>
        <Thumbnail source={{ uri: product.image }} />
      </Left>
      <ShopItemStyled>{product.name}</ShopItemStyled>
    </ListItem>
  );
};
export default ProductItem;
