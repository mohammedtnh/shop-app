import React from "react";
import { useSelector } from "react-redux";
import {
  ShopDetailTitle,
  ShopDetailImage,
  ShopDetailWrapper,
} from "../../styles";
import { Spinner } from "native-base";
import ProductList from "../product/ProductList";

const ShopDetail = () => {
  const loading = useSelector((state) => state.shopReducer.loading);
  const shop = useSelector((state) => state.shopReducer.shops[0]);

  const products = useSelector((state) => state.productReducer.products);

  const productsFromProductStore = shop.products.map((product) =>
    products.find((_product) => product.id === _product.id)
  );

  if (loading) return <Spinner />;
  return (
    <>
      <ShopDetailWrapper>
        {/* <ShopDetailImage source={{ uri: shop.image }} /> */}
        <ShopDetailTitle>{shop.name}</ShopDetailTitle>
      </ShopDetailWrapper>

      <ProductList products={productsFromProductStore} />
    </>
  );
};

export default ShopDetail;
