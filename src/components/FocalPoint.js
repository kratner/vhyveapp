import React from "react";
import styled from "styled-components";

const SVGContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

const FocalPoint = props => {
  const focalPointStrokeColor = props.recording ? "#ff0000" : "#FDDE6B";
  return (
    <SVGContainer className="focalpoint">
      <svg
        width="15%"
        viewBox="0 0 107 93"
        fill="none"
        preserveAspectRatio="xMinYMin"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="focalpointstroke"
          d="M27.0392 0.5L79.9608 0.500001L106.423 46.5L79.9608 92.5H27.0392L0.576832 46.5L27.0392 0.5Z"
          stroke={focalPointStrokeColor}
          strokeWidth="2"
        />
      </svg>
    </SVGContainer>
  );
};

export default FocalPoint;
