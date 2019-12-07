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
      constraints: {
        audio: {
          deviceId: undefined
        },
        video: {
          deviceId: undefined
        }
      },
      audioInputDeviceId: "",
      audioOutputDeviceId: "",
      videoDeviceId: "",
      audioInputDevices: [],
      audioOutputDevices: [],
      videoDevices: [],
      active: true,
      front: true,
      controlDrawerKey: "init",
      hasDevices: false
    };
    this.handleCameraToggle = this.handleCameraToggle.bind(this);
    //this.handleCameraSwitch = this.handleCameraSwitch.bind(this);
    this.handleAudioInputItemSelect = this.handleAudioInputItemSelect.bind(
      this
    );
    this.handleVideoInputItemSelect = this.handleVideoInputItemSelect.bind(
      this
    );
  }
  gotDevices(thisRef, deviceInfos) {
    const audioInputDevices = [];
    const audioOutputDevices = [];
    const videoDevices = [];

    const concatDeviceId = arr => {
      return arr.map(e => e.deviceId).join("");
    };
    let controlDrawerKey = "";
    for (let i = 0; i !== deviceInfos.length; ++i) {
      const deviceInfo = deviceInfos[i];
      //const option = document.createElement("option");
      switch (deviceInfo.kind) {
        case "audioinput":
          audioInputDevices.push(deviceInfo);
          break;
        case "videoinput":
          videoDevices.push(deviceInfo);
          break;
        case "audiooutput":
          audioOutputDevices.push(deviceInfo);
          break;
        default:
      }
    }
    controlDrawerKey =
      concatDeviceId(audioInputDevices) +
      concatDeviceId(audioOutputDevices) +
      concatDeviceId(videoDevices);
    thisRef.setState({
      audioInputDevices: audioInputDevices,
      audioOutputDevices: audioOutputDevices,
      videoDevices: videoDevices,
      controlDrawerKey: controlDrawerKey,
      hasDevices: true
    });
  }
  gotStream(thisRef, stream) {
    window.stream = stream; // make stream available to console
    document.getElementById("videoelement").srcObject = stream;
    // Refresh button list in case labels have become available
  }
  handleError(error) {
    console.log(
      "navigator.MediaDevices.getUserMedia error: ",
      error.message,
      error.name
    );
  }
  handleCameraToggle() {
    this.setState({
      active: !this.state.active
    });
  }
  handleAudioInputItemSelect(DeviceId) {
    if (window.stream) {
      window.stream.getTracks().forEach(track => {
        track.stop();
      });
    }
    this.setState({
      audioInputDeviceId: DeviceId,
      constraints: {
        audio: {
          deviceId: this.state.audioInputDeviceId
            ? { exact: this.state.audioInputDeviceId }
            : undefined
        },
        video: {
          deviceId: this.state.videoDeviceId
            ? { exact: this.state.videoDeviceId }
            : undefined
        }
      }
    });
    navigator.mediaDevices.getUserMedia(this.state.constraints).then(stream => {
      this.gotStream(this, stream);
    });
    navigator.mediaDevices
      .enumerateDevices()
      .then(devices => {
        this.gotDevices(this, devices);
      })
      .catch(this.handleError);
  }
  handleAudioOutputItemSelect(DeviceId) {
    if (window.stream) {
      window.stream.getTracks().forEach(track => {
        track.stop();
      });
    }
    this.setState({
      audioOutputDeviceId: DeviceId
    });
    navigator.mediaDevices.getUserMedia(this.state.constraints).then(stream => {
      this.gotStream(this, stream);
    });
    navigator.mediaDevices
      .enumerateDevices()
      .then(devices => {
        this.gotDevices(this, devices);
      })
      .catch(this.handleError);
  }
  handleVideoInputItemSelect(DeviceId) {
    if (window.stream) {
      window.stream.getTracks().forEach(track => {
        track.stop();
      });
    }
    this.setState({
      videoDeviceId: DeviceId,
      constraints: {
        audio: {
          deviceId: this.state.audioInputDeviceId
            ? { exact: this.state.audioInputDeviceId }
            : undefined
        },
        video: {
          deviceId: this.state.videoDeviceId
            ? { exact: this.state.videoDeviceId }
            : undefined
        }
      }
    });
    navigator.mediaDevices.getUserMedia(this.state.constraints).then(stream => {
      this.gotStream(this, stream);
    });
    navigator.mediaDevices
      .enumerateDevices()
      .then(devices => {
        this.gotDevices(this, devices);
      })
      .catch(this.handleError);
  }
  componentDidMount() {
    navigator.mediaDevices.getUserMedia(this.state.constraints).then(stream => {
      this.gotStream(this, stream);
    });
    navigator.mediaDevices
      .enumerateDevices()
      .then(devices => {
        this.gotDevices(this, devices);
      })
      .catch(this.handleError);
  }

  render() {
    return (
      <React.Fragment>
        <VideoScreenContainer className="videoscreen">
          {this.state.active ? (
            <WebCamComponent
              videoElementId={"videoelement"}
              audiosource={this.state.audioInputDeviceId}
              videosource={this.state.videoDeviceId}
            />
          ) : (
            ""
          )}
          <FocalPointSVG recording="true" />
        </VideoScreenContainer>
        <ControlDrawer
          key={this.state.controlDrawerKey}
          cameraActive={this.state.active}
          handleCameraToggle={this.handleCameraToggle}
          handleAudioInputItemSelect={this.handleAudioInputItemSelect}
          handleVideoInputItemSelect={this.handleVideoInputItemSelect}
          audioInputDevices={this.state.audioInputDevices}
          audioOutputDevices={this.state.audioOutputDevices}
          videoDevices={this.state.videoDevices}
          hasDevices={this.state.hasDevices}
        />
      </React.Fragment>
    );
  }
}

export default VideoScreen;
