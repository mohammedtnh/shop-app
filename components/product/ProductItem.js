import React from "react";
import { ListItem, Image } from "native-base";
import { ShopItemStyled } from "../../styles";
const ProductItem = ({ product }) => {
  return (
    <ListItem>
      {/* <Image
        style={{ width: "100px", height: "100px" }}
        source={{ uri: product.image }}
      /> */}
      <ShopItemStyled>{product.name}</ShopItemStyled>
    </ListItem>
  );
};
export default ProductItem;
