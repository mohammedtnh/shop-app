import React from "react";
import { ListItem } from "native-base";
import { ShopItemStyled } from "../../styles";

const ProductItem = ({ product }) => {
  return (
    <ListItem>
      <ShopItemStyled>{product.name}</ShopItemStyled>
    </ListItem>
  );
};
export default ProductItem;
