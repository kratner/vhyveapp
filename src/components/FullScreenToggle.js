import React from "react";
import { AiOutlineFullscreenExit, AiOutlineFullscreen } from "react-icons/ai";
import styled from "styled-components";

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
  }
  handleClick() {
    debugger;
  }
  render() {
    return (
      <FullScreenIconContainer
        id={this.props.id}
        onClick={e => {
          this.setState({
            fullScreen: !this.state.fullScreen
          });
        }}
        title={this.state.fullScreen ? "View Full Screen" : "Exit Full Screen"}
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
