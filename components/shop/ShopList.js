import React from "react";
import { useSelector } from "react-redux";
import Loading from "../Loading";
import ShopItem from "./ShopItem";
import { Content, List } from "native-base";

const ShopList = () => {
  const shops = useSelector((state) => state.shopReducer.shops);

  const loading = useSelector((state) => state.loading);
  if (loading) return <Loading />;

  const shopList = shops.map((shop) => <ShopItem key={shop.id} shop={shop} />);

  return (
    <Content>
      <List>{shopList}</List>
    </Content>
  );
};
export default ShopList;
