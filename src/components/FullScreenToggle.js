import React from "react";
import { AiOutlineFullscreenExit, AiOutlineFullscreen } from "react-icons/ai";
import styled from "styled-components";

const FullScreenIconInactive = styled(AiOutlineFullscreen)`
  fill: #fff;
  height: 2em;
  width: 2em;
  &:hover {
    fill: #fdde6b;
  }
`;
const FullScreenIconActive = styled(AiOutlineFullscreenExit)`
  fill: #fff;
  height: 2em;
  width: 2em;
  &:hover {
    fill: #fdde6b;
  }
`;
const FullScreenIconContainer = styled.div`
  cursor: pointer;
`;
const FullScreenToggle = props => {
  return (
    <FullScreenIconContainer
      id={props.id}
      onClick={props.OnFullScreenClick}
      title={props.active ? "View Full Screen" : "Exit Full Screen"}
    >
      {//Check if message failed
      props.active ? <FullScreenIconActive /> : <FullScreenIconInactive />}
    </FullScreenIconContainer>
  );
};

export default FullScreenToggle;
