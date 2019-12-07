import React from "react";
import { MdDragHandle } from "react-icons/md";
import CameraToggle from "./CameraToggle";
import MediaInputSelector from "./MediaInputSelector";
import styled from "styled-components";

const ControlDrawerContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 10;
`;

const DragHandle = styled(MdDragHandle)`
  color: #fff;
`;

const DrawerHandle = styled.div`
  background-color: #ffffff10;
  cursor: pointer;
  text-align: center;
  width: 100%;
  transition: 0.15s;
  &:hover {
    background-color: #ffffff50;
  }
`;

const ControlContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const ControlDrawer = props => {
  const handleToggle = evt => {
    const controlDrawer = document.getElementById("controlcontainer");
    if (controlDrawer.classList.contains("open")) {
      controlDrawer.classList.remove("open");
    } else {
      controlDrawer.classList.add("open");
    }
  };
  const handleCameraToggle = () => {
    props.handleCameraToggle();
  };
  const handleAudioInputItemSelect = DeviceId => {
    props.handleAudioInputItemSelect(DeviceId);
  };
  const handleVideoInputItemSelect = DeviceId => {
    props.handleVideoInputItemSelect(DeviceId);
  };

  return (
    <ControlDrawerContainer id="controldrawer" className="controldrawer">
      <DrawerHandle onClick={handleToggle} title="Toggle Controls">
        <DragHandle />
      </DrawerHandle>
      <ControlContainer id="controlcontainer">
        <CameraToggle
          size="1.5em"
          active={props.cameraActive}
          onClick={() => {
            handleCameraToggle();
          }}
        />
        {props.hasDevices ? (
          <MediaInputSelector
            audioInputDevices={props.audioInputDevices}
            audioOutputDevices={props.audioOutputDevices}
            videoDevices={props.videoDevices}
            onVideoItemClick={DeviceID => {
              handleVideoInputItemSelect(DeviceID);
            }}
            onAudioItemClick={DeviceID => {
              handleAudioInputItemSelect(DeviceID);
            }}
          />
        ) : (
          ""
        )}
      </ControlContainer>
    </ControlDrawerContainer>
  );
};

export default ControlDrawer;