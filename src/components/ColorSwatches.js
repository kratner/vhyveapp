import React from "react";

const ColorSwatches = props => {
  let flexDirection = "";
  let borderRadius = "";
  let margins = "";

  switch (props.layout) {
    case "horizontal":
      flexDirection = "row";
      margins = "0 " + props.spacing;
      break;
    case "vertical":
      flexDirection = "column";
      margins = props.spacing + " 0";
      break;
    default:
  }
  switch (props.shape) {
    case "square":
      borderRadius = "0";
      break;
    case "circle":
      borderRadius = "50%";
      break;
    default:
  }
  let swatches = props.colors.map((_color, index) => {
    return (
      <div
        key={index}
        style={{
          backgroundColor: _color,
          width: props.size,
          height: props.size,
          borderRadius: borderRadius,
          margin: margins,
          cursor: "pointer"
        }}
        onClick={() => props.onClick(_color)}
        onMouseOver={e => {
          e.currentTarget.style.border = "1px solid rgb(255, 255, 255)";
        }}
        onMouseOut={e => {
          e.currentTarget.style.border = "1px solid rgb(255, 255, 255, 0)";
        }}
      ></div>
    );
  });
  return (
    <div style={{ display: "flex", flexDirection: flexDirection }}>
      {swatches}
    </div>
  );
};

export default ColorSwatches;
