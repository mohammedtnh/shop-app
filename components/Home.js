import React from "react";
import {
  HomeBackground,
  TopStyling,
  Title,
  ButtonStyled,
  OverLayContainer,
  BottomStyling,
} from "../styles";

const Home = () => {
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
          <ButtonStyled onPress={() => alert("Take me to the list of shops")}>
            Click here to skip
          </ButtonStyled>
        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default Home;
