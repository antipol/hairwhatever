import React from "react";

import styled from "styled-components";

import Wrapper from "../elements/Wrapper";

const TitleContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  text-transform: uppercase;
`;
const MainTitle = styled.h1`
  font-family: "Limelight";
  font-size: 3em;
`;

const Color = styled(MainTitle)`
  background: -webkit-linear-gradient(
    -11deg,
    #e4ff00,
    #ff7d00,
    #e0477f,
    #ff00eb,
    #3156de,
    #00ff79,
    #2358a9,
    #ef26bb,
    #ffb100,
    #5200ff,
    #ff003b
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SubTitle = styled.h2`
  font-size: 1.8em;
`;

const Services = () => {
  return (
    <Wrapper>
      <TitleContainer>
        <Color>color</Color>
        <MainTitle>|</MainTitle>
        <MainTitle>cut</MainTitle>
      </TitleContainer>
      <TitleContainer>
        <SubTitle>drinks</SubTitle>
        <SubTitle>|</SubTitle>
        <SubTitle>music</SubTitle>
        <SubTitle>|</SubTitle>
        <SubTitle>view</SubTitle>
      </TitleContainer>
    </Wrapper>
  );
};

export default Services;
