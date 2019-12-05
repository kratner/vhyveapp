import React, { Component } from "react";
import FocalPoint from "./FocalPoint";
import styled from "styled-components";

const VideoScreenContainer = styled.div`
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
`;

class VideoScreen extends Component {
  render() {
    return (
      <VideoScreenContainer className="videoscreen">
        <FocalPoint recording="true" />
      </VideoScreenContainer>
    );
  }
}

export default VideoScreen;
