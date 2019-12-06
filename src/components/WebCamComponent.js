import React, { Component } from "react";
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

class WebCamComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true
    };
  }
  render() {
    //const facingMode = this.props.front ? "user" : { exact: "environment" };
    return (
      <WebcamScreenContainer>
        <WebcamScreen
          className="webcamscreen"
          id={this.props.videoElementId}
          //audio={false}
          //videosource="ad73df458d8a30aed8c537eec886310f70deab646e4046d04f987960163ec3bc"
          audiosource={this.props.audiosource}
          videosource={this.props.videosource}
          //height={720}
          //screenshotFormat="image/jpeg"
          //width={1280}
          //videoConstraints={videoConstraints}
          /*
          videoConstraints={{
            facingMode: facingMode
          }}
          */
        />
      </WebcamScreenContainer>
    );
  }
}

export default WebCamComponent;
