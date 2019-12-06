import React from "react";
import { MdVideocamOff, MdVideocam } from "react-icons/md";
import styled from "styled-components";

const CameraToggleContainer = styled.div`
  color: #fff;
  cursor: pointer;
  z-index: 10;
  &:hover {
    color: #fdde6b;
  }
`;

const CameraToggle = props => {
  return (
    <CameraToggleContainer className="cameratoggle">
      {//Check if message failed
      props.active ? (
        <MdVideocam
          onClick={props.onClick}
          size={props.size}
          title="Camera On"
        />
      ) : (
        <MdVideocamOff
          onClick={props.onClick}
          size={props.size}
          title="Camera Off"
        />
      )}
    </CameraToggleContainer>
  );
};

export default CameraToggle;
