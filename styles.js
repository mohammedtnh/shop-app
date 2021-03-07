import styled from "styled-components/native";
import { Button, Text, Icon } from "native-base";

export const TopStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: rgb(229, 255, 66);
  font-size: 38px;
  text-align: center;
`;

export const HomeBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const OverLayContainer = styled.View`
  flex: 1;
  background-color: rgba(100, 40, 60, 0.4);
`;

export const BottomStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const ButtonStyled = styled(Button)`
  background-color: rgba(12, 221, 166, 0.5);
  margin-left: 50px;
  margin-right: 50px;
`;

export const ButtonTextStyled = styled(Text)`
  font-size: 20px;
  color: #fff;
`;

export const ButtonIconStyled = styled(Icon)`
  font-size: 20px;
  color: #fff;
`;

export const ShopItemStyled = styled.Text`
  color: ${(props) => props.theme.mainColor};
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 16px;
  width: 100%;
`;

export const ShopDetailImage = styled.Image`
  flex: 1;
  width: 200px;
  height: 200px;
`;

export const ShopDetailTitle = styled.Text`
  font-weight: bold;
  font-size: 30px;
  text-align: center;
`;

export const TotalPrice = styled.Text`
  color: ${(props) => props.theme.red};
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
`;

export const CartButtonStyled = styled(Icon)`
  color: ${(props) => props.theme.backgroundColor};
  margin-right: 10px;
`;

export const CartTextStyled = styled.Text`
  color: ${(props) => props.theme.backgroundColor};
  font-size: 20px;
`;
