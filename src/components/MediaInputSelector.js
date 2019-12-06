import React, { Component } from "react";
import styled from "styled-components";
const MediaSelectorContainer = styled.div`
  font-size: 0.8em;
`;
const MicSelectorContainer = styled(MediaSelectorContainer)``;
const CameraSelectorContainer = styled(MediaSelectorContainer)``;
const InputSelectorContainer = styled.div``;
const MediaInputItem = styled.div`
  cursor: pointer;
  &:hover {
    background-color: #ffffff25;
  }
  &.selected {
    background-color: #ffffff15;
  }
`;
const MediaInputTypeLabel = styled.div`
  font-size: 0.8em;
  font-weight: bold;
`;
const MProperty = styled.span``;
const MLabel = styled(MProperty)``;
class MediaInputSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaDevices: []
    };
  }
  handleAudioInputItemClick(evt, ItemId) {
    const audiodeviceselectors = document.getElementsByClassName(
      "audiodeviceselector"
    );
    for (let i = 0; i < audiodeviceselectors.length; i++) {
      audiodeviceselectors[i].classList.remove("selected");
    }
    evt.currentTarget.classList.add("selected");
    this.props.onAudioItemClick(ItemId);
  }
  handleVideoInputItemClick(evt, ItemId) {
    const videodeviceselectors = document.getElementsByClassName(
      "videodeviceselector"
    );
    for (let i = 0; i < videodeviceselectors.length; i++) {
      videodeviceselectors[i].classList.remove("selected");
    }
    evt.currentTarget.classList.add("selected");
    this.props.onVideoItemClick(ItemId);
  }
  gotDevices(thisComponent, mediaDevices) {
    this.setState({
      mediaDevices: mediaDevices
    });
  }
  componentDidMount() {
    navigator.mediaDevices.enumerateDevices().then(mediaDevices => {
      this.gotDevices(this, mediaDevices);
    });
  }
  render() {
    const AudioInputDeviceList = this.state.mediaDevices
      .filter(e => e.kind === "audioinput")
      .map((node, index) => {
        const cls = (index === 0 ? "selected" : "") + ` audiodeviceselector`;
        return (
          <MediaInputItem
            className={cls}
            key={index}
            onClick={evt => {
              this.handleAudioInputItemClick(evt, node.deviceId);
            }}
          >
            <MLabel>{node.label}</MLabel>
          </MediaInputItem>
        );
      });

    const VideoInputDeviceList = this.state.mediaDevices
      .filter(e => e.kind === "videoinput")
      .map((node, index) => {
        const cls = (index === 0 ? "selected" : "") + ` videodeviceselector`;
        return (
          <MediaInputItem
            className={cls}
            key={index}
            onClick={evt => {
              this.handleVideoInputItemClick(evt, node.deviceId);
            }}
          >
            <MLabel>{node.label}</MLabel>
          </MediaInputItem>
        );
      });
    return (
      <InputSelectorContainer>
        <MediaInputTypeLabel>Select Audio Device</MediaInputTypeLabel>
        <MicSelectorContainer id="micselectorcontainer">
          {AudioInputDeviceList}
        </MicSelectorContainer>
        <MediaInputTypeLabel>Select Camera</MediaInputTypeLabel>
        <CameraSelectorContainer id="cameraselectorcontainer">
          {VideoInputDeviceList}
        </CameraSelectorContainer>
      </InputSelectorContainer>
    );
  }
}

export default MediaInputSelector;
