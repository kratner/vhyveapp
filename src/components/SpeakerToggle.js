import React from "react";
import { GiSpeakerOff, GiSpeaker } from "react-icons/md";
import styled from "styled-components";

const SpeakerToggleContainer = styled.div`
  color: #fff;
  cursor: pointer;
  z-index: 10;
  &:hover {
    color: #fdde6b;
  }
`;

const SpeakerToggle = props => {
  return (
    <SpeakerToggleContainer className="speakertoggle">
      {//Check if message failed
      props.active ? (
        <GiSpeaker
          onClick={props.onClick}
          size={props.size}
          title="Speaker On"
        />
      ) : (
        <GiSpeakerOff
          onClick={props.onClick}
          size={props.size}
          title="Speaker Off"
        />
      )}
    </SpeakerToggleContainer>
  );
};

export default SpeakerToggle;
