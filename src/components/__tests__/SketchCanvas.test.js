import React from "react";
import { shallow } from "enzyme";
import SketchCanvas from "../SketchCanvas";

describe("SketchCanvas", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<SketchCanvas />);
    expect(wrapper).toMatchSnapshot();
  });
});
