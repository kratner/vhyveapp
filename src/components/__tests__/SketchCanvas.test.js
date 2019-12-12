import React from "react";
import { mount } from "enzyme";
import DrawCanvas from "../SketchCanvas";

describe("DrawCanvas", () => {
  it("renders correctly", () => {
    const wrapper = mount(
      <DrawCanvas
        style={{
          border: "1px solid black",
          cursor: "crosshair",
          width: "100vw",
          height: "100vh"
        }}
        width="100%"
        height="100%"
        swatchColors={["red", "green", "blue", "yellow"]}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
