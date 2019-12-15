import React from "react";
import styled from "styled-components";

const WebcamScreenContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 2;
`;
const VideoCanvas = styled.video`
  /* Make video to at least 100% wide and tall */
  min-width: 100%;
  min-height: 100%;

  /* Setting width & height to auto prevents the browser from stretching or squishing the video */
  width: auto;
  height: auto;

  /* Center the video */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 3;
`;
const VideoElement = props => {
  return (
    <WebcamScreenContainer>
      <VideoCanvas
        className="videocanvas"
        id={props.videoElementId}
        playsInline
        autoPlay
        srcobject
        muted={!props.speakerActive}
      ></VideoCanvas>
    </WebcamScreenContainer>
  );
};

export default VideoElement;
