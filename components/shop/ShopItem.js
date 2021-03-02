import React from "react";
import { ListItem, Left, Thumbnail } from "native-base";
import { ShopItemStyled } from "../../styles";

const ShopItem = ({ shop, navigation }) => {
  return (
    <ListItem
      avatar
      onPress={() => navigation.navigate("ShopDetail", { shop: shop })}
    >
      <Left>
        <Thumbnail source={{ uri: shop.image }} />
      </Left>
      <ShopItemStyled>{shop.name}</ShopItemStyled>
    </ListItem>
  );
};
export default ShopItem;
