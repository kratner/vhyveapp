import React from "react";
import { shallow } from "enzyme";
import ColorSwatches from "../ColorSwatches";

describe("ColorSwatches", () => {
  it("renders correctly", () => {
    const wrapper = shallow(
      <ColorSwatches
        layout="vertical"
        shape="circle"
        size="1em"
        colors={["red", "green", "blue"]}
        spacing=".25em"
        /*
        onSwatchClick={_color => {
          this.handleColorSwatchClick(this, _color);
        }}
        */
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
