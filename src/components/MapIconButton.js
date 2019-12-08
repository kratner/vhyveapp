import React from "react";
import { FaMap } from "react-icons/fa";
import styled from "styled-components";

const MapIcon = styled(FaMap)`
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #fdde6b;
  }
`;

const MapIconButton = props => {
  return <MapIcon title={props.title} onClick={props.onClick} />;
};

export default MapIconButton;
