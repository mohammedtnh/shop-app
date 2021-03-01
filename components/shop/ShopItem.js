import React from "react";
import { ListItem } from "native-base";
import { ShopItemStyled } from "../../styles";

const ShopItem = ({ shop }) => {
  return (
    <ListItem>
      <ShopItemStyled>{shop.name}</ShopItemStyled>
    </ListItem>
  );
};
export default ShopItem;
