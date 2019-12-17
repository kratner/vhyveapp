import React from "react";
import { MdCameraFront, MdCameraRear } from "react-icons/md";
import styled from "styled-components";

const SwitchCameraContainer = styled.div`
  color: #fff;
  cursor: pointer;
  z-index: 10;
  &:hover {
    color: #fdde6b;
  }
`;

const SwitchCamera = props => {
  return (
    <SwitchCameraContainer className="switchcamera">
      {//Check if message failed
      props.selfie ? (
        <MdCameraFront
          onClick={props.onClick}
          size={props.size}
          title="Switch to Rear Camera"
        />
      ) : (
        <MdCameraRear
          onClick={props.onClick}
          size={props.size}
          title="Switch to Front Camera"
        />
      )}
    </SwitchCameraContainer>
  );
};

export default SwitchCamera;
