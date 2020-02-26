import React from "react";

import styled from "styled-components";

const ListElement = styled.li`
  list-style-type: none;
  margin: 2%;
`;

const ListItem = props => {
  return <ListElement>{props.text}</ListElement>;
};

export default ListItem;
