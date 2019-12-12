import React from "react";
import { IoIosPhonePortrait } from "react-icons/io";
import styled from "styled-components";

const DeviceIconContainer = styled.div`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  z-index: 15;
  color: #fff;
  font-size: 2em;
  transition: 0.15s;
  @media only screen and (orientation: landscape) {
    top: 0.25em;
    transform: rotate(90deg);
    right: 1.5em;
  }
`;
const DeviceOrientationIcon = props => {
  const isMobileDevice = () =>
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1;
  return (
    <DeviceIconContainer id="deviceorientation">
      {isMobileDevice() ? <IoIosPhonePortrait /> : null}
    </DeviceIconContainer>
  );
};

export default DeviceOrientationIcon;
