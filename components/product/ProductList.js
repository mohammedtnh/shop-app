import React from "react";
import { Content } from "native-base";
import ProductItem from "./ProductItem";
import { List } from "native-base";

const ProductList = ({ products }) => {
  const productList = products.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));

  return (
    <Content>
      <List>{productList}</List>
    </Content>
  );
};
export default ProductList;
