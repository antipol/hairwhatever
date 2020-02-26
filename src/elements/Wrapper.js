import React from "react";

import styled from "styled-components";

const Wrapper = props => {
  const Wrapper = styled.section`
    padding: 2% 5%;
  `;
  return <Wrapper>{props.children}</Wrapper>;
};

export default Wrapper;
