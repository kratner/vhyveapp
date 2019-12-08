import React from "react";
import styled from "styled-components";

const MessageContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: 5;
  color: #fff;
  font-size: 0.5em;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  @media only screen and (orientation: portrait) {
    padding-top: 1.5em;
    top: 50%;
    transform: translateY(-50%);
    transform: rotate(90deg);
  }
`;

export default props => {
  return <MessageContainer id={props.id}>{props.message}</MessageContainer>;
};
