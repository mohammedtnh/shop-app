import styled from "styled-components/native";

export const StyledAppView = styled.View`
  background-color: papayawhip;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TopStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: black;
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

export const ButtonStyled = styled.Text`
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

export const ShopDetailWrapper = styled.View`
  margin-top: 50px;
`;

export const ShopDetailImage = styled.Image`
  width: 150px;
  height: 150px;
`;

export const ShopDetailTitle = styled.Text`
  font-weight: bold;
  font-size: 40px;
`;
