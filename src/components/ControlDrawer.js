import React from "react";
import { MdDragHandle } from "react-icons/md";
import MediaInputSelector from "./MediaInputSelector";
import styled from "styled-components";

const ControlDrawerContainer = styled.div`
  position: absolute;
  bottom: 0em;
  width: 100%;
  z-index: 50;
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
  const handleAudioInputItemSelect = device => {
    props.handleAudioInputItemSelect(device);
  };
  const handleAudioOutputItemSelect = device => {
    props.handleAudioOutputItemSelect(device);
  };
  const handleVideoInputItemSelect = device => {
    props.handleVideoInputItemSelect(device);
  };
  return (
    <ControlDrawerContainer id="controldrawer" className="controldrawer">
      <DrawerHandle onClick={handleToggle} title="Toggle Controls">
        <DragHandle />
      </DrawerHandle>
      <ControlContainer id="controlcontainer">
        {props.hasDevices ? (
          <MediaInputSelector
            audioInputDevices={props.audioInputDevices}
            audioOutputDevices={props.audioOutputDevices}
            videoDevices={props.videoDevices}
            onVideoItemClick={device => {
              handleVideoInputItemSelect(device);
            }}
            onAudioInputItemClick={device => {
              handleAudioInputItemSelect(device);
            }}
            onAudioOutputItemClick={device => {
              handleAudioOutputItemSelect(device);
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
