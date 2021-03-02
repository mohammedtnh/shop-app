import React from "react";
import { useSelector } from "react-redux";
import { ShopDetailTitle, ShopDetailImage } from "../../styles";
import { Card, CardItem, Left, Body } from "native-base";
import ProductList from "../product/ProductList";
import { View } from "react-native";

const ShopDetail = () => {
  const productReducer = useSelector((state) => state.productReducer);

  const shop = useSelector((state) => state.shopReducer.shops[0]);
  const shopLoading = useSelector((state) => state.shopReducer.loading);

  if (shopLoading || productReducer.loading) return <Loading />;

  const productsFromShop = shop.products.map((product) =>
    productReducer.products.find((_product) => _product.id === product.id)
  );

  return (
    <>
      <View>
        <Card>
          <CardItem>
            <Left>
              <Body>
                <ShopDetailTitle>{shop.name}</ShopDetailTitle>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <ShopDetailImage source={{ uri: shop.image }} />
          </CardItem>
        </Card>
        <ProductList products={productsFromShop} />
      </View>
    </>
  );
};

export default ShopDetail;
