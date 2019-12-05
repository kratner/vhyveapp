import React from "react";
import { MdPersonOutline, MdPerson } from "react-icons/md";
import styled from "styled-components";

const UserIconInactive = styled(MdPersonOutline)`
  fill: #fff;
  height: 2em;
  width: 2em;
  &:hover {
    fill: #fdde6b;
  }
`;
const UserIconActive = styled(MdPerson)`
  fill: #fff;
  height: 2em;
  width: 2em;
  &:hover {
    fill: #fdde6b;
  }
`;
const UserIconContainer = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0.5em;
  right: 0.5em;
`;
const UserIcon = props => {
  return (
    <UserIconContainer title={props.active ? "Your Profile" : "Log In"}>
      {//Check if message failed
      props.active ? <UserIconActive /> : <UserIconInactive />}
    </UserIconContainer>
  );
};

export default UserIcon;
