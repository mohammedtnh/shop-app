import React from "react";
import { ShopDetailTitle, ShopDetailImage } from "../../styles";
import { Card, CardItem, Left, Body } from "native-base";
import { View } from "react-native";

const ProductDetail = ({ navigation, route }) => {
  const { product } = route.params;
  return (
    <>
      <View>
        <Card>
          <CardItem>
            <Left>
              <Body>
                <ShopDetailTitle>{product.name}</ShopDetailTitle>
                <ShopDetailTitle>{product.description}</ShopDetailTitle>
                <ShopDetailTitle>{product.price}</ShopDetailTitle>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <ShopDetailImage source={{ uri: product.image }} />
          </CardItem>
        </Card>
      </View>
    </>
  );
};

export default ProductDetail;
