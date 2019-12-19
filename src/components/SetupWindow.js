import React, { Component } from "react";
import { MdClose } from "react-icons/md";
import MediaInputSelector from "./MediaInputSelector";
import { connect } from "react-redux";
import { getMediaDevices } from "../actions/MediaDeviceActions";
import styled from "styled-components";

const SetupWindowContainer = styled.div`
  background-color: #769fbf;
  width: auto;
  height: auto;
  padding: 1em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.25);
`;

const CloseButton = styled(MdClose)`
  color: #ffffff;
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  cursor: pointer;
  &:hover {
    color: #fdde6b;
  }
`;

//const SetupOptions = styled.span``;

const handleVideoInputItemSelect = device => {
  debugger;
};

const handleAudioInputItemSelect = device => {
  debugger;
};

const handleAudioOutputItemSelect = device => {
  debugger;
};

class SetupWindow extends Component {
  componentDidMount() {
    this.props.dispatch(getMediaDevices());
  }
  render() {
    return (
      <SetupWindowContainer id={this.props.id}>
        <CloseButton
          title="Close"
          id="closebutton"
          onClick={this.props.onCloseSetupWindow}
        />
        {this.props.devices.hasDevices ? (
          <MediaInputSelector
            audioInputDevices={this.props.devices.devices.audioInputDevices}
            audioOutputDevices={this.props.devices.devices.audioOutputDevices}
            videoDevices={this.props.devices.devices.videoDevices}
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
      </SetupWindowContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    devices: state.devices,
    loading: state.loading
  };
};

export default connect(mapStateToProps)(SetupWindow);
