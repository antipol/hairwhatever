import React from "react";

import styled from "styled-components";

import Wrapper from "../elements/Wrapper";
import ListItem from "../elements/ListItem";

const dos = [
  "- have an open mind",
  "- like cool hair",
  "- want to try something new",
  "- are aware that - worst case - hair grows back out"
];

const donts = [
  "- want hair 'like in this photo'",
  "- prefer the typical hairdresser experience"
];

const ListContainer = styled.div`
  // display: flex;
  width: 70%;
  margin: 0 auto;
  text-align: center;
`;

const ListTitle = styled.h4`
  font-size: 2em;
`;

const Checklist = () => {
  return (
    <Wrapper>
      <ListContainer>
        <Wrapper>
          <h4>Don't come if you...</h4>
          <ul>
            {donts.map((el, i) => (
              <ListItem key={i} text={el} />
            ))}
          </ul>
        </Wrapper>
        <Wrapper>
          <h4>Come if you...</h4>
          <ul>
            {dos.map((el, i) => (
              <ListItem key={i} text={el} />
            ))}
          </ul>
        </Wrapper>
      </ListContainer>
    </Wrapper>
  );
};

export default Checklist;
