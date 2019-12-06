import React, { Component } from "react";
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

class ControlDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleCameraSwitch = this.handleCameraSwitch.bind(this);
  }
  handleToggle() {
    const controlDrawer = document.getElementById("controlcontainer");
    this.setState({
      open: !this.state.open
    });
    if (this.state.open) {
      controlDrawer.classList.add("open");
    } else {
      controlDrawer.classList.remove("open");
    }
  }
  handleCameraToggle() {
    this.props.handleCameraToggle();
  }
  handleCameraSwitch() {
    this.props.handleCameraSwitch();
  }
  handleAudioInputItemSelect(thisComponent, DeviceId) {
    this.props.handleAudioInputItemSelect(DeviceId);
  }
  handleVideoInputItemSelect(thisComponent, DeviceId) {
    this.props.handleVideoInputItemSelect(DeviceId);
  }
  render() {
    return (
      <ControlDrawerContainer id="controldrawer" className="controldrawer">
        <DrawerHandle onClick={this.handleToggle} title="Toggle Controls">
          <DragHandle />
        </DrawerHandle>
        <ControlContainer id="controlcontainer">
          <CameraToggle
            size="1.5em"
            active={this.props.cameraActive}
            onClick={() => {
              this.handleCameraToggle();
            }}
          />
          <MediaInputSelector
            onVideoItemClick={DeviceID => {
              this.handleVideoInputItemSelect(this, DeviceID);
            }}
            onAudioItemClick={DeviceID => {
              this.handleAudioInputItemSelect(this, DeviceID);
            }}
          />
        </ControlContainer>
      </ControlDrawerContainer>
    );
  }
}

export default ControlDrawer;
