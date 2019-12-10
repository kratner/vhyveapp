import React from "react";
import { shallow } from "enzyme";
import DrawCanvas from "../SketchCanvas";

describe("DrawCanvas", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<DrawCanvas />);
    expect(wrapper).toMatchSnapshot();
  });
});
