import React, { Component } from "react";
import FocalPoint from "./FocalPoint";
import WebCamComponent from "./WebCamComponent";
import ControlDrawer from "./ControlDrawer";
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

const FocalPointSVG = styled(FocalPoint)``;

class VideoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audioDeviceId: "",
      videoDeviceId: "",
      active: true,
      front: true
    };
    this.webCamRef = React.createRef();
    this.handleCameraToggle = this.handleCameraToggle.bind(this);
    this.handleCameraSwitch = this.handleCameraSwitch.bind(this);
    this.handleAudioInputItemSelect = this.handleAudioInputItemSelect.bind(
      this
    );
    this.handleVideoInputItemSelect = this.handleVideoInputItemSelect.bind(
      this
    );
  }
  gotDevices(evt) {
    debugger;
  }
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
  handleAudioInputItemSelect(DeviceId) {
    this.setState({
      audioDeviceId: DeviceId
    });
  }
  handleVideoInputItemSelect(DeviceId) {
    this.setState({
      videoDeviceId: DeviceId
    });
  }

  render() {
    return (
      <React.Fragment>
        <VideoScreenContainer className="videoscreen">
          {this.state.active ? (
            // <WebCamComponent ref={this.webCamRef} front={this.state.front} />
            <WebCamComponent
              audiosource={this.state.audioDeviceId}
              videosource={this.state.videoDeviceId}
            />
          ) : (
            ""
          )}
          <FocalPointSVG recording="true" />
        </VideoScreenContainer>
        <ControlDrawer
          cameraActive={this.state.active}
          handleCameraToggle={this.handleCameraToggle}
          handleCameraSwitch={this.handleCameraSwitch}
          handleAudioInputItemSelect={this.handleAudioInputItemSelect}
          handleVideoInputItemSelect={this.handleVideoInputItemSelect}
        />
      </React.Fragment>
    );
  }
}

export default VideoScreen;
