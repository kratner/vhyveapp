import React, { Component } from "react";
import FocalPoint from "./FocalPoint";
import WebCamComponent from "./WebCamComponent";
import { MdSwitchCamera } from "react-icons/md";
import CameraToggle from "./CameraToggle";
import styled from "styled-components";

const VideoScreenContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(https://raw.githubusercontent.com/kratner/vhyveapp/master/public/20191117_163741.jpg);
  background-size: cover;
  background-position: center;
`;
const SwitchCameraButton = styled(MdSwitchCamera)`
  position: absolute;
  color: #fff;
  cursor: pointer;
  right: 0.5em;
  bottom: 0.5em;
  z-index: 10;
  &:hover {
    color: #fdde6b;
  }
`;

const FocalPointSVG = styled(FocalPoint)``;

class VideoScreen extends Component {
  state = {
    active: true,
    front: true
  };
  handleCameraSwitch() {
    this.setState({
      front: !this.state.front
    });
  }
  handleCameraToggle() {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    return (
      <VideoScreenContainer className="videoscreen">
        <SwitchCameraButton
          size="1.5em"
          className="switchcamera"
          title="Switch Camera"
          onClick={() => {
            this.handleCameraSwitch();
          }}
        />
        <CameraToggle
          size="1.5em"
          active={this.state.active}
          onClick={() => {
            this.handleCameraToggle();
          }}
        />
        {this.state.active ? <WebCamComponent front={this.state.front} /> : ""}
        <FocalPointSVG recording="true" />
      </VideoScreenContainer>
    );
  }
}

export default VideoScreen;
