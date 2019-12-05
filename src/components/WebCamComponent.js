import React from "react";
import Webcam from "react-webcam";
import styled from "styled-components";

/*
const videoConstraints = {
  // width: 1280,
  // height: 720,
  //facingMode: "user"
  facingMode: { exact: "environment" }
};
*/

const WebcamScreenContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`;
const WebcamScreen = styled(Webcam)`
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
`;

const WebCamComponent = props => {
  const webcamRef = React.useRef(null);
  return (
    <WebcamScreenContainer>
      <WebcamScreen
        className="webcamscreen"
        audio={false}
        //height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        //width={1280}
        //videoConstraints={videoConstraints}
        videoConstraints={{
          //facingMode: props.front ? "user" : { exact: "environment" }
          facingMode: props.front ? "user" : "environment"
        }}
      />
    </WebcamScreenContainer>
  );
};

export default WebCamComponent;
