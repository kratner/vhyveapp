import React from "react";
import { AiOutlineFullscreenExit, AiOutlineFullscreen } from "react-icons/ai";
import styled from "styled-components";
import FullScreen from "../utils/FullScreen";

const FullScreenIconInactive = styled(AiOutlineFullscreen)`
  fill: #fff;
  height: 2em;
  width: 2em;
  &:hover {
    fill: #fdde6b;
  }
`;
const FullScreenIconActive = styled(AiOutlineFullscreenExit)`
  fill: #fff;
  height: 2em;
  width: 2em;
  &:hover {
    fill: #fdde6b;
  }
`;
const FullScreenIconContainer = styled.div`
  cursor: pointer;
`;

class FullScreenToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullScreen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if (this.state.fullScreen) {
      this.FullScreen.closeFullscreen(this.fullScreenElement);
    } else {
      this.FullScreen.openFullscreen(this.fullScreenElement);
    }
    this.setState({
      fullScreen: !this.state.fullScreen
    });
  }
  componentDidMount() {
    this.FullScreen = new FullScreen();
    this.fullScreenElement = document.documentElement;
  }
  render() {
    return (
      <FullScreenIconContainer
        id={this.props.id}
        onClick={this.handleClick}
        title={this.state.fullScreen ? "Exit Full Screen" : "View Full Screen"}
      >
        {//Check if message failed
        this.state.fullScreen ? (
          <FullScreenIconActive />
        ) : (
          <FullScreenIconInactive />
        )}
      </FullScreenIconContainer>
    );
  }
}

export default FullScreenToggle;
