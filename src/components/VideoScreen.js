import React, { Component } from "react";
import FocalPoint from "./FocalPoint";
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
  render() {
    return (
      <VideoScreenContainer className="videoscreen">
        <FocalPointSVG recording="true" />
      </VideoScreenContainer>
    );
  }
}

export default VideoScreen;
