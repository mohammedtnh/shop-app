import React from "react";
import { useSelector } from "react-redux";
import { Content, Spinner } from "native-base";
import ProductItem from "./ProductItem";
import { List } from "native-base";

const ProductList = ({ products }) => {
  const productList = products.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));

  const loading = useSelector((state) => state.loading);
  if (loading) return <Spinner />;

  return (
    <Content>
      <List>{productList}</List>
    </Content>
  );
};
export default ProductList;
