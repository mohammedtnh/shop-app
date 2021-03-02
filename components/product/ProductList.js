import React from "react";
import ProductItem from "./ProductItem";
import { List } from "native-base";
import { useSelector } from "react-redux";
import Loading from "../Loading";

const ProductList = ({ products, navigation }) => {
  const loading = useSelector((state) => state.loading);
  if (loading) return <Loading />;
  const productList = products.map((product) => (
    <ProductItem key={product.id} product={product} navigation={navigation} />
  ));

  return <List>{productList}</List>;
};
export default ProductList;
