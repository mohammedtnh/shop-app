import React from "react";
import { useSelector } from "react-redux";
import { ShopDetailTitle, ShopDetailImage } from "../../styles";
import { Card, CardItem, Left, Body } from "native-base";
import ProductList from "../product/ProductList";
import { View } from "react-native";
import Loading from "../Loading";

const ShopDetail = ({ navigation, route }) => {
  const { shop } = route.params;
  const productReducer = useSelector((state) => state.productReducer);

  if (productReducer.loading) return <Loading />;

  const productsFromShop = shop.products.map((product) =>
    productReducer.products.find((_product) => _product.id === product.id)
  );

  return (
    <>
      <View>
        <Card>
          <CardItem cardBody>
            <ShopDetailImage source={{ uri: shop.image }} />
          </CardItem>
          <CardItem>
            <Left>
              <Body>
                <ShopDetailTitle>{shop.name}</ShopDetailTitle>
              </Body>
            </Left>
          </CardItem>
        </Card>
        <ProductList products={productsFromShop} navigation={navigation} />
      </View>
    </>
  );
};

export default ShopDetail;
