import React from "react";
import {
  HomeBackground,
  TopStyling,
  Title,
  ButtonStyled,
  OverLayContainer,
  BottomStyling,
  ButtonTextStyled,
  ButtonIconStyled,
} from "../styles";

const Home = ({ navigation }) => {
  return (
    <HomeBackground
      source={{
        uri:
          "https://cdn.pocket-lint.com/r/s/1200x/assets/images/139696-smart-home-news-feature-the-best-apple-homekit-tips-and-tricks-image1-nfp2xygasz.jpg",
      }}
    >
      <OverLayContainer>
        <TopStyling>
          <Title>Smart Hub</Title>
        </TopStyling>
        <BottomStyling>
          <ButtonStyled
            bordered
            success
            rounded
            large
            block
            iconLeft
            onPress={() => navigation.navigate("ShopList")}
          >
            <ButtonIconStyled type="AntDesign" name="profile" />
            <ButtonTextStyled> Enter Shops List </ButtonTextStyled>
          </ButtonStyled>
        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default Home;
