import React from "react";
import styled from "styled-components";

const MessageContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: 5;
  color: #fff;
  font-size: 0.75em;
  text-shadow: 1px 1px 2px #000000;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  @media only screen and (orientation: portrait) {
    padding-top: 1.5em;
    transform: rotate(90deg) translate(0%, 37%);
    white-space: nowrap;
    text-align: center;
    top: 45%;
  }
`;
const MessageSpan = styled.div`
  padding: 0 0.25em;
`;
export default props => {
  return (
    <MessageContainer>
      <MessageSpan id="message-m1"></MessageSpan>
      <MessageSpan id="message-m2"></MessageSpan>
      <MessageSpan id="message-m3"></MessageSpan>
      <MessageSpan id="message-m4"></MessageSpan>
      <MessageSpan id="message-m5"></MessageSpan>
    </MessageContainer>
  );
};
