import React from "react";
import styled from "styled-components";
const MediaSelectorContainer = styled.div`
  font-size: 0.75em;
`;
const MicSelectorContainer = styled(MediaSelectorContainer)``;
const CameraSelectorContainer = styled(MediaSelectorContainer)``;
const InputSelectorContainer = styled.div`
  padding: 0.5em 0 0.5em 0;
`;
const MediaInputItem = styled.div`
  height: 2.5em;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.25s;
  padding-left: 0.5em;
  border-left: 5px solid #ffffff00;
  &:hover {
    background-color: #00bcd4;
  }
  &.selected {
    /* background-color: #ffffff15; */
    border-left: 5px solid black;
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
    const audioinputdeviceselectors = document.getElementsByClassName(
      "audioinputdeviceselector"
    );
    for (let i = 0; i < audioinputdeviceselectors.length; i++) {
      audioinputdeviceselectors[i].classList.remove("selected");
    }
    evt.currentTarget.classList.add("selected");
    props.onAudioInputItemClick(device);
  };
  const handleAudioOutputItemClick = (evt, device) => {
    const audiooutputdeviceselectors = document.getElementsByClassName(
      "audiooutputdeviceselector"
    );
    for (let i = 0; i < audiooutputdeviceselectors.length; i++) {
      audiooutputdeviceselectors[i].classList.remove("selected");
    }
    evt.currentTarget.classList.add("selected");
    props.onAudioOutputItemClick(device);
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
    const cls = (index === 0 ? "selected" : "") + ` audioinputdeviceselector`;
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
  const AudioOutputDeviceList = props.audioOutputDevices.map((node, index) => {
    const cls = (index === 0 ? "selected" : "") + ` audiooutputdeviceselector`;
    return (
      <MediaInputItem
        className={cls}
        key={index}
        onClick={evt => {
          handleAudioOutputItemClick(evt, node);
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
      <MediaInputTypeLabel>Select Audio Input Device</MediaInputTypeLabel>
      <MicSelectorContainer id="micselectorcontainer">
        {AudioInputDeviceList}
      </MicSelectorContainer>
      <MediaInputTypeLabel>Select Audio Output Device</MediaInputTypeLabel>
      <MicSelectorContainer id="speakerselectorcontainer">
        {AudioOutputDeviceList}
      </MicSelectorContainer>
      <MediaInputTypeLabel>Select Camera</MediaInputTypeLabel>
      <CameraSelectorContainer id="cameraselectorcontainer">
        {VideoInputDeviceList}
      </CameraSelectorContainer>
    </InputSelectorContainer>
  );
};

export default MediaInputSelector;
