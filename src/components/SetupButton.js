import React from "react";
import { GoGear } from "react-icons/go";
import styled from "styled-components";

const SetupButtonContainer = styled.div`
  color: #fff;
  cursor: pointer;
  z-index: 10;
  &:hover {
    color: #fdde6b;
  }
`;

const SetupButton = props => {
  return (
    <SetupButtonContainer className="setupbutton">
      <GoGear onClick={props.onClick} size={props.size} title="Setup Options" />
    </SetupButtonContainer>
  );
};

export default SetupButton;
