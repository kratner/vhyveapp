import React from "react";
import { FaMap } from "react-icons/fa";
import { GoCircleSlash } from "react-icons/go";

import styled from "styled-components";

const MapIconContainer = styled.div`
  color: #fff;
  cursor: pointer;
  z-index: 10;
  &:hover {
    color: #fdde6b;
  }
`;

const MapIcon = styled(FaMap)`
  position: relative;
  top: -0.5em;
`;

const MapIconSlash = styled(GoCircleSlash)`
  position: relative;
  left: -0.75em;
  transform: rotate(90deg);
  color: #ffffff;
  cursor: pointer;
  font-size: 2em;
  &:hover {
    color: #fdde6b;
  }
`;

const MapIconButton = props => {
  return (
    <MapIconContainer
      title={props.active ? "Hide Map" : "Show Map"}
      className="maptoggle"
      onClick={props.onClick}
    >
      <MapIcon id="mapicon" />
      <MapIconSlash
        id="mapslash"
        style={{
          opacity: props.active ? 1 : 0
        }}
      />
    </MapIconContainer>
  );
};

export default MapIconButton;
