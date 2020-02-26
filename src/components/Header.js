import React from "react";

import styled from "styled-components";

import Wrapper from "../elements/Wrapper";
import logoMedium from "../images/logo-medium.png";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  min-width: 150px;
  height: 150px;

  @media (min-width: 768px) {
    min-width: 300px;
    height: 300px;
  }
`;

const SloganContainer = styled.div`
  place-self: center;
  padding: 2%;
`;

const Slogan = styled.h1`
  font-family: "Permanent Marker";
  font-size: 1.8em;
  transform: rotate(-10deg);
  text-align: center;

  @media (min-width: 768px) {
    font-size: 5em;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <HeaderContainer>
        <Logo src={logoMedium} alt="hair|what|ever logo" />
        <SloganContainer>
          <Slogan>sick of your hair?</Slogan>
        </SloganContainer>
      </HeaderContainer>
    </Wrapper>
  );
};

export default Header;
