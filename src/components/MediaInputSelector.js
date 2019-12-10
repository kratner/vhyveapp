import React from "react";
import styled from "styled-components";
const MediaSelectorContainer = styled.div`
  font-size: 0.5em;
`;
const MicSelectorContainer = styled(MediaSelectorContainer)``;
const CameraSelectorContainer = styled(MediaSelectorContainer)``;
const InputSelectorContainer = styled.div``;
const MediaInputItem = styled.div`
  height: 2.5em;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.25s;
  padding-left: 0.5em;
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
  padding: 0.25em 0.15em;
`;
const MProperty = styled.span``;
const MLabel = styled(MProperty)``;
const MediaInputSelector = props => {
  const handleAudioInputItemClick = (evt, device) => {
    const audiodeviceselectors = document.getElementsByClassName(
      "audiodeviceselector"
    );
    for (let i = 0; i < audiodeviceselectors.length; i++) {
      audiodeviceselectors[i].classList.remove("selected");
    }
    evt.currentTarget.classList.add("selected");
    props.onAudioItemClick(device);
  };
  const handleVideoInputItemClick = (evt, device) => {
    const videodeviceselectors = document.getElementsByClassName(
      "videodeviceselector"
    );
    for (let i = 0; i < videodeviceselectors.length; i++) {
      videodeviceselectors[i].classList.remove("selected");
    }
    evt.currentTarget.classList.add("selected");
    props.onVideoItemClick(device);
  };
  const AudioInputDeviceList = props.audioInputDevices.map((node, index) => {
    const cls = (index === 0 ? "selected" : "") + ` audiodeviceselector`;
    return (
      <MediaInputItem
        className={cls}
        key={index}
        onClick={evt => {
          handleAudioInputItemClick(evt, node);
        }}
      >
        <MLabel>{node.label}</MLabel>
      </MediaInputItem>
    );
  });
  const VideoInputDeviceList = props.videoDevices.map((node, index) => {
    const cls = (index === 0 ? "selected" : "") + ` videodeviceselector`;
    return (
      <MediaInputItem
        className={cls}
        key={index}
        onClick={evt => {
          handleVideoInputItemClick(evt, node);
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
};

export default MediaInputSelector;
