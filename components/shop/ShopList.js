import React from "react";
import { useSelector } from "react-redux";
import { Content, Spinner } from "native-base";
import ShopItem from "./ShopItem";
import { List } from "native-base";

const ShopList = () => {
  const shops = useSelector((state) => state.shopReducer.shops);

  const loading = useSelector((state) => state.loading);
  if (loading) return <Spinner />;

  const shopList = shops.map((shop) => <ShopItem key={shop.id} shop={shop} />);

  return (
    <Content>
      <List>{shopList}</List>
    </Content>
  );
};
export default ShopList;
